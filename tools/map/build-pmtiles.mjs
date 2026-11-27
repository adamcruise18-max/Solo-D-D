// Builds docs/map/portland.pmtiles: the self-hosted map file (Adam, 2026-11-24: "self-hosted map file";
// research tool list, 2026-11-27). Vector tiles in the OpenMapTiles schema, from OpenFreeMap
// (data © OpenStreetMap contributors, ODbL; schema OpenMapTiles), so the game styles work as they are.
//
//   node tools/map/build-pmtiles.mjs [--pmtiles /path/to/pmtiles] [--out docs/map/portland.pmtiles]
//
// Coverage: zoom 0-13 for the whole area you can pan to (map.js maxBounds), zoom 14 only inside the
// 15-mile edge plus a margin. MapLibre zooms past 14 from the zoom-14 tiles. Size must stay under the
// GitHub 100 MB file limit. Needs the go-pmtiles binary (github.com/protomaps/go-pmtiles, BSD-3)
// to turn the MBTiles file into PMTiles.
import { DatabaseSync } from 'node:sqlite';
import { execFileSync } from 'node:child_process';
import { mkdirSync, rmSync, statSync } from 'node:fs';
import { gzipSync } from 'node:zlib';
import { dirname, join } from 'node:path';
import { tmpdir } from 'node:os';
import { HOME_LAT, HOME_LON } from '../../src/sun.js';

const arg = (k, d) => { const i = process.argv.indexOf(k); return i > 0 ? process.argv[i + 1] : d; };
const OUT = arg('--out', 'docs/map/portland.pmtiles');
const PMTILES = arg('--pmtiles', 'pmtiles');
const RADIUS_MI = 15 + 2; // the edge plus a 2-mile margin for zoom 14
const BOUNDS = { w: HOME_LON - 0.75, s: HOME_LAT - 0.5, e: HOME_LON + 0.75, n: HOME_LAT + 0.5 }; // = map.js maxBounds
const MAXZ = 14;
const CONCURRENCY = 4;

const lon2x = (lon, z) => Math.floor(((lon + 180) / 360) * 2 ** z);
const lat2y = (lat, z) => { const r = (lat * Math.PI) / 180; return Math.floor(((1 - Math.log(Math.tan(r) + 1 / Math.cos(r)) / Math.PI) / 2) * 2 ** z); };
const x2lon = (x, z) => (x / 2 ** z) * 360 - 180;
const y2lat = (y, z) => { const n = Math.PI - (2 * Math.PI * y) / 2 ** z; return (180 / Math.PI) * Math.atan(0.5 * (Math.exp(n) - Math.exp(-n))); };
function milesTo(lat, lon) {
  const R = 3958.8; const dLat = ((lat - HOME_LAT) * Math.PI) / 180; const dLon = ((lon - HOME_LON) * Math.PI) / 180;
  const a = Math.sin(dLat / 2) ** 2 + Math.cos((HOME_LAT * Math.PI) / 180) * Math.cos((lat * Math.PI) / 180) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(a));
}
// Nearest point of a tile to HOME, in miles.
function tileMiles(x, y, z) {
  const w = x2lon(x, z); const e = x2lon(x + 1, z); const n = y2lat(y, z); const s = y2lat(y + 1, z);
  return milesTo(Math.min(n, Math.max(s, HOME_LAT)), Math.min(e, Math.max(w, HOME_LON)));
}

export function tileList() {
  const out = [];
  for (let z = 0; z <= MAXZ; z++) {
    const x0 = lon2x(BOUNDS.w, z); const x1 = lon2x(BOUNDS.e, z); const y0 = lat2y(BOUNDS.n, z); const y1 = lat2y(BOUNDS.s, z);
    for (let x = x0; x <= x1; x++) for (let y = y0; y <= y1; y++) {
      if (z === MAXZ && tileMiles(x, y, z) > RADIUS_MI) continue;
      out.push([z, x, y]);
    }
  }
  return out;
}

async function main() {
  const tj = await (await fetch('https://tiles.openfreemap.org/planet')).json();
  const url = tj.tiles[0];
  const version = url.split('/').slice(-4, -3)[0];
  const tiles = tileList();
  console.log(`${tiles.length} tiles from OpenFreeMap ${version}`);
  const tmp = join(tmpdir(), `ll-map-${process.pid}.mbtiles`);
  rmSync(tmp, { force: true });
  const db = new DatabaseSync(tmp);
  db.exec('CREATE TABLE metadata (name text, value text); CREATE TABLE tiles (zoom_level integer, tile_column integer, tile_row integer, tile_data blob); CREATE UNIQUE INDEX tile_index on tiles (zoom_level, tile_column, tile_row);');
  const meta = {
    name: 'Last Light: Portland map', format: 'pbf', type: 'baselayer', minzoom: '0', maxzoom: String(MAXZ),
    bounds: [BOUNDS.w, BOUNDS.s, BOUNDS.e, BOUNDS.n].map((v) => v.toFixed(5)).join(','),
    center: `${HOME_LON},${HOME_LAT},12`,
    attribution: '<a href="https://openfreemap.org" target="_blank">OpenFreeMap</a> <a href="https://www.openmaptiles.org/" target="_blank">© OpenMapTiles</a> Data from <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>',
    description: `OpenFreeMap planet ${version}, cut to the Last Light: Portland area`,
    json: JSON.stringify({ vector_layers: tj.vector_layers }),
  };
  const im = db.prepare('INSERT INTO metadata VALUES (?, ?)');
  for (const [k, v] of Object.entries(meta)) im.run(k, v);
  const it = db.prepare('INSERT INTO tiles VALUES (?, ?, ?, ?)');
  let i = 0; let bytes = 0; let empty = 0;
  async function worker() {
    while (i < tiles.length) {
      const [z, x, y] = tiles[i++];
      const u = url.replace('{z}', z).replace('{x}', x).replace('{y}', y);
      let buf = null;
      for (let tryN = 0; tryN < 5 && !buf; tryN++) {
        try {
          const r = await fetch(u);
          if (r.status === 204 || r.status === 404) { buf = Buffer.alloc(0); break; }
          if (!r.ok) throw new Error(`HTTP ${r.status}`);
          buf = Buffer.from(await r.arrayBuffer());
        } catch (e) { if (tryN === 4) throw new Error(`${u}: ${e.message}`); await new Promise((res) => setTimeout(res, 1000 * (tryN + 1))); }
      }
      if (!buf.length) { empty++; continue; }
      const gz = buf[0] === 0x1f && buf[1] === 0x8b ? buf : gzipSync(buf, { level: 9 });
      bytes += gz.length;
      it.run(z, x, 2 ** z - 1 - y, gz); // MBTiles rows are TMS (flipped)
    }
  }
  const t0 = Date.now();
  const timer = setInterval(() => console.log(`  ${i}/${tiles.length} tiles, ${(bytes / 1e6).toFixed(1)} MB`), 10000);
  await Promise.all(Array.from({ length: CONCURRENCY }, worker));
  clearInterval(timer);
  db.close();
  console.log(`downloaded in ${((Date.now() - t0) / 1000).toFixed(0)} s, ${empty} empty tiles, ${(bytes / 1e6).toFixed(1)} MB`);
  mkdirSync(dirname(OUT), { recursive: true });
  rmSync(OUT, { force: true });
  execFileSync(PMTILES, ['convert', tmp, OUT], { stdio: 'inherit' });
  rmSync(tmp, { force: true });
  const mb = statSync(OUT).size / 1e6;
  console.log(`${OUT}: ${mb.toFixed(1)} MB`);
  if (mb > 95) { console.error('Too big for GitHub (100 MB per file): lower the zoom-14 radius.'); process.exit(1); }
}

if (process.argv[1] && process.argv[1].endsWith('build-pmtiles.mjs')) await main();
