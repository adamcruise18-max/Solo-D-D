// Build the 3D street cell files (docs/data/streets/) from open map data.
//
//   node tools/streets/build-streets.mjs [srcDir]
//
// srcDir (default data/streets-src/pilot-aloha) holds GeoJSON (plain or .gz) made by
// tools/streets/overture_dl.py + process.py from Overture Maps (mostly OpenStreetMap).
// The output data is a derivative database of OpenStreetMap data: it stays under the
// ODbL 1.0 (see docs/data/streets/LICENSE.md). Google, Apple and Bing imagery are never
// used as data.
//
// One JSON file per engine world cell (256 m, src/engine/worldgrid.js), named
// "<cx>_<cz>.json". Coordinates are grid metres (x east, z SOUTH) relative to the cell's
// north-west corner, in decimetres (integers). Gaps in the data (building type, height,
// roof shape, colours, yard trees) are filled with fixed rules and a seeded random roll
// per object, so the output is the same on every run.
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import { WORLD_GRID } from '../../src/engine/worldgrid.js';
import { hashString, mulberry32 } from '../../src/rng.js';
import {
  KIND, ROOF, ROAD, AREA, PROP, FORMAT_VERSION, roadWidth,
} from '../../src/data/streets.js';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../..');
const SRC = path.resolve(process.argv[2] || path.join(ROOT, 'data/streets-src/pilot-aloha'));
const OUT = path.join(ROOT, 'docs/data/streets');
const CELL = WORLD_GRID.cellMeters;

function readGeo(name) {
  for (const f of [`${name}.geojson`, `${name}.geojson.gz`]) {
    const p = path.join(SRC, f);
    if (!fs.existsSync(p)) continue;
    const buf = fs.readFileSync(p);
    return JSON.parse((f.endsWith('.gz') ? zlib.gunzipSync(buf) : buf).toString('utf8')).features;
  }
  return [];
}

// ---------- geometry helpers (grid metres) ----------
const toM = ([lon, lat]) => { const m = WORLD_GRID.toMeters({ lat, lon }); return [m.x, m.z]; };
const ringM = (ring) => {
  const r = ring.map(toM);
  if (r.length > 1 && r[0][0] === r[r.length - 1][0] && r[0][1] === r[r.length - 1][1]) r.pop();
  return r;
};
function area(r) { let s = 0; for (let i = 0; i < r.length; i++) { const a = r[i], b = r[(i + 1) % r.length]; s += a[0] * b[1] - b[0] * a[1]; } return s / 2; }
function centroid(r) {
  let x = 0, z = 0, a = 0;
  for (let i = 0; i < r.length; i++) {
    const p = r[i], q = r[(i + 1) % r.length];
    const c = p[0] * q[1] - q[0] * p[1];
    x += (p[0] + q[0]) * c; z += (p[1] + q[1]) * c; a += c;
  }
  if (Math.abs(a) < 1e-9) return r.reduce((s, p) => [s[0] + p[0] / r.length, s[1] + p[1] / r.length], [0, 0]);
  return [x / (3 * a), z / (3 * a)];
}
function inside(pt, r) {
  let c = false;
  for (let i = 0, j = r.length - 1; i < r.length; j = i++) {
    const [xi, zi] = r[i], [xj, zj] = r[j];
    if ((zi > pt[1]) !== (zj > pt[1]) && pt[0] < ((xj - xi) * (pt[1] - zi)) / (zj - zi) + xi) c = !c;
  }
  return c;
}
function hull(pts) {
  const p = [...pts].sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  const cross = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
  const lo = [], up = [];
  for (const q of p) { while (lo.length >= 2 && cross(lo[lo.length - 2], lo[lo.length - 1], q) <= 0) lo.pop(); lo.push(q); }
  for (const q of p.reverse()) { while (up.length >= 2 && cross(up[up.length - 2], up[up.length - 1], q) <= 0) up.pop(); up.push(q); }
  return lo.slice(0, -1).concat(up.slice(0, -1));
}
// Smallest-area rectangle around the footprint: centre, half length along the axis,
// half width, axis angle. The roof ridge runs along the long axis.
function obb(r) {
  const h = hull(r);
  let best = null;
  for (let i = 0; i < h.length; i++) {
    const a = h[i], b = h[(i + 1) % h.length];
    const ang = Math.atan2(b[1] - a[1], b[0] - a[0]);
    const c = Math.cos(ang), s = Math.sin(ang);
    let u0 = Infinity, u1 = -Infinity, v0 = Infinity, v1 = -Infinity;
    for (const p of h) { const u = p[0] * c + p[1] * s, v = -p[0] * s + p[1] * c; u0 = Math.min(u0, u); u1 = Math.max(u1, u); v0 = Math.min(v0, v); v1 = Math.max(v1, v); }
    const ar = (u1 - u0) * (v1 - v0);
    if (!best || ar < best.ar) best = { ar, ang, c, s, u: (u0 + u1) / 2, v: (v0 + v1) / 2, hu: (u1 - u0) / 2, hv: (v1 - v0) / 2 };
  }
  let { ang, hu, hv } = best;
  const cx = best.u * best.c - best.v * best.s, cz = best.u * best.s + best.v * best.c;
  if (hv > hu) { [hu, hv] = [hv, hu]; ang += Math.PI / 2; }
  return { cx, cz, hu, hv, ang, ar: best.ar };
}
// Clip a polygon to an axis-aligned box (Sutherland-Hodgman).
function clipBox(poly, x0, z0, x1, z1) {
  let out = poly;
  const edges = [[(p) => p[0] >= x0, (a, b) => [x0, a[1] + ((b[1] - a[1]) * (x0 - a[0])) / (b[0] - a[0])]],
    [(p) => p[0] <= x1, (a, b) => [x1, a[1] + ((b[1] - a[1]) * (x1 - a[0])) / (b[0] - a[0])]],
    [(p) => p[1] >= z0, (a, b) => [a[0] + ((b[0] - a[0]) * (z0 - a[1])) / (b[1] - a[1]), z0]],
    [(p) => p[1] <= z1, (a, b) => [a[0] + ((b[0] - a[0]) * (z1 - a[1])) / (b[1] - a[1]), z1]]];
  for (const [ins, cut] of edges) {
    const inp = out; out = [];
    for (let i = 0; i < inp.length; i++) {
      const a = inp[(i + inp.length - 1) % inp.length], b = inp[i];
      if (ins(b)) { if (!ins(a)) out.push(cut(a, b)); out.push(b); } else if (ins(a)) out.push(cut(a, b));
    }
    if (!out.length) return out;
  }
  return out;
}
// Cut a line into pieces no longer than step metres, so each piece can go to one cell.
function densify(line, step = 24) {
  const out = [line[0]];
  for (let i = 1; i < line.length; i++) {
    const a = line[i - 1], b = line[i];
    const n = Math.max(1, Math.ceil(Math.hypot(b[0] - a[0], b[1] - a[1]) / step));
    for (let k = 1; k <= n; k++) out.push([a[0] + ((b[0] - a[0]) * k) / n, a[1] + ((b[1] - a[1]) * k) / n]);
  }
  return out;
}
const cellOfM = (x, z) => `${Math.floor(x / CELL)},${Math.floor(z / CELL)}`;
const dm = (v) => Math.round(v * 10);

// ---------- cells ----------
const cells = new Map();
function cell(key) {
  if (!cells.has(key)) {
    const [cx, cz] = key.split(',').map(Number);
    cells.set(key, { key, cx, cz, x0: cx * CELL, z0: cz * CELL, b: [], r: [], a: [], t: [], p: [], f: [], names: [] });
  }
  return cells.get(key);
}
const local = (c, pts) => pts.flatMap(([x, z]) => [dm(x - c.x0), dm(z - c.z0)]);
function nameIdx(c, name) {
  if (!name) return -1;
  let i = c.names.indexOf(name);
  if (i < 0) { i = c.names.length; c.names.push(name); }
  return i;
}

// ---------- land use (for building type rules and yard trees) ----------
const AREA_OF = {
  residential: AREA.lawn, grass: AREA.grass, park: AREA.grass, recreation_ground: AREA.grass, village_green: AREA.grass,
  pitch: AREA.pitch, playground: AREA.playground, schoolyard: AREA.lawn, school: AREA.lawn, kindergarten: AREA.lawn,
  wood: AREA.wood, forest: AREA.wood, scrub: AREA.scrub, wetland: AREA.wetland, meadow: AREA.grass, greenfield: AREA.grass,
  nature_reserve: AREA.wood, cemetery: AREA.grass, religious: AREA.lawn,
  water: AREA.water, swimming_pool: AREA.pool, basin: AREA.water, pond: AREA.water, reservoir: AREA.water, lake: AREA.water,
  pedestrian: AREA.plaza, sand: AREA.sand, track: AREA.track,
  commercial: AREA.paved, retail: AREA.paved, industrial: AREA.gravel, brownfield: AREA.gravel, construction: AREA.gravel,
  parking: AREA.parking, stadium: AREA.grass,
};
const landPolys = []; // [{ cls, ring, bbox }] for type rules
const landFeats = readGeo('landuse');
const infra = readGeo('infrastructure');
function polyRings(g) {
  if (g.type === 'Polygon') return [g.coordinates[0]];
  if (g.type === 'MultiPolygon') return g.coordinates.map((p) => p[0]);
  return [];
}
function bboxOf(r) { let x0 = Infinity, z0 = Infinity, x1 = -Infinity, z1 = -Infinity; for (const [x, z] of r) { x0 = Math.min(x0, x); z0 = Math.min(z0, z); x1 = Math.max(x1, x); z1 = Math.max(z1, z); } return [x0, z0, x1, z1]; }
function addArea(cls, ringLL, keepForRules) {
  const r = ringM(ringLL);
  if (r.length < 3) return;
  const bb = bboxOf(r);
  if (keepForRules) landPolys.push({ cls: keepForRules, ring: r, bbox: bb });
  for (let cz = Math.floor(bb[1] / CELL); cz <= Math.floor(bb[3] / CELL); cz++) {
    for (let cx = Math.floor(bb[0] / CELL); cx <= Math.floor(bb[2] / CELL); cx++) {
      const c = cell(`${cx},${cz}`);
      const part = clipBox(r, c.x0, c.z0, c.x0 + CELL, c.z0 + CELL);
      if (part.length >= 3 && Math.abs(area(part)) > 1) c.a.push([cls, local(c, part)]);
    }
  }
}
for (const f of landFeats) {
  const cls = f.properties.class;
  const a = AREA_OF[cls];
  if (f.geometry.type === 'LineString' && (cls === 'stream' || cls === 'river' || cls === 'ditch' || cls === 'drain' || cls === 'canal')) {
    addLine(ROAD.stream, f.geometry.coordinates, cls === 'river' ? 8 : 2.5, null);
    continue;
  }
  if (a === undefined) continue;
  for (const ring of polyRings(f.geometry)) addArea(a, ring, cls);
}
for (const f of infra) {
  if (f.properties.class === 'parking' && f.geometry.type === 'Polygon') addArea(AREA.parking, f.geometry.coordinates[0], 'parking');
}
function landAt(pt) {
  let best = null, bestA = Infinity;
  for (const l of landPolys) {
    if (pt[0] < l.bbox[0] || pt[0] > l.bbox[2] || pt[1] < l.bbox[1] || pt[1] > l.bbox[3]) continue;
    if (!inside(pt, l.ring)) continue;
    const a = (l.bbox[2] - l.bbox[0]) * (l.bbox[3] - l.bbox[1]);
    if (a < bestA) { bestA = a; best = l.cls; }
  }
  return best;
}

// ---------- roads, paths, streams ----------
function addLine(cls, coords, width, name) {
  const line = densify(coords.map(toM));
  let run = [line[0]], key = null;
  const flush = () => {
    if (run.length >= 2 && key) { const c = cell(key); c.r.push([cls, dm(width), local(c, run), nameIdx(c, name)]); }
  };
  for (let i = 1; i < line.length; i++) {
    const a = line[i - 1], b = line[i];
    const k = cellOfM((a[0] + b[0]) / 2, (a[1] + b[1]) / 2);
    if (key && k !== key) { flush(); run = [a]; }
    key = k;
    run.push(b);
  }
  flush();
}
const roadSegs = []; // for keeping yard trees off roads: [x0,z0,x1,z1,halfWidth]
for (const f of readGeo('roads')) {
  const pr = f.properties;
  if (f.geometry.type !== 'LineString') continue;
  if (pr.flags && /tunnel|indoor/.test(JSON.stringify(pr.flags))) continue;
  let cls;
  if (pr.subtype === 'rail') cls = ROAD.rail;
  else if (pr.subclass === 'sidewalk') cls = ROAD.sidewalk;
  else if (pr.subclass === 'crosswalk') cls = ROAD.crosswalk;
  else if (pr.subclass === 'driveway') cls = ROAD.driveway;
  else if (pr.subclass === 'parking_aisle') cls = ROAD.parking_aisle;
  else cls = ROAD[pr.class] ?? ROAD.unknown;
  const w = roadWidth(cls, pr);
  addLine(cls, f.geometry.coordinates, w, pr.name || null);
  const pts = f.geometry.coordinates.map(toM);
  for (let i = 1; i < pts.length; i++) roadSegs.push([pts[i - 1][0], pts[i - 1][1], pts[i][0], pts[i][1], w / 2]);
}
function nearRoad(pt, margin) {
  for (const [x0, z0, x1, z1, hw] of roadSegs) {
    const dx = x1 - x0, dz = z1 - z0;
    const L = dx * dx + dz * dz || 1;
    const t = Math.max(0, Math.min(1, ((pt[0] - x0) * dx + (pt[1] - z0) * dz) / L));
    if (Math.hypot(pt[0] - (x0 + t * dx), pt[1] - (z0 + t * dz)) < hw + margin) return true;
  }
  return false;
}

// ---------- game places (stores etc.) from docs/data/places.js ----------
const placesSrc = fs.readFileSync(path.join(ROOT, 'docs/data/places.js'), 'utf8');
const PLACES = JSON.parse(placesSrc.slice(placesSrc.indexOf('['), placesSrc.lastIndexOf(']') + 1));

// ---------- buildings ----------
const COMMERCIAL_CLASS = /retail|commercial|office|supermarket|warehouse|kiosk/;
function kindOf(pr, r, ar, land, hasPlace) {
  const c = pr.class || '';
  if (/^(house|detached|semidetached_house|terrace|bungalow|residential)$/.test(c)) return KIND.house;
  if (/^(garage|garages|carport|shed|roof|shelter|hut)$/.test(c)) return KIND.shed;
  if (/apartments|dormitory/.test(c)) return KIND.apartments;
  if (/school|kindergarten|college|university/.test(c)) return KIND.school;
  if (/church|chapel|civic|public|community|fire_station|hospital|grandstand|stadium/.test(c)) return KIND.civic;
  if (/industrial|warehouse/.test(c)) return KIND.industrial;
  if (COMMERCIAL_CLASS.test(c) || hasPlace) return KIND.commercial;
  if (ar < 45) return KIND.shed;
  if (land === 'school' || land === 'schoolyard' || land === 'kindergarten') return ar > 300 ? KIND.school : KIND.shed;
  if (land === 'commercial' || land === 'retail') return KIND.commercial;
  if (land === 'industrial') return KIND.industrial;
  if (land === 'religious') return ar > 250 ? KIND.civic : KIND.house;
  if (ar > 900) return KIND.commercial;
  if (ar > 450) return (pr.height || 0) > 8 ? KIND.apartments : KIND.commercial;
  return KIND.house;
}
const DEFAULT_H = { [KIND.house]: 5.2, [KIND.shed]: 3, [KIND.commercial]: 6, [KIND.apartments]: 9, [KIND.school]: 7, [KIND.civic]: 7, [KIND.industrial]: 7.5 };
const PALETTE_SIZE = { wall: 12, roof: 6 };
const buildingsM = [];
let hNone = 0, kindKnown = 0;
for (const f of readGeo('buildings')) {
  const pr = f.properties;
  if (pr.part || pr.is_underground) continue;
  for (const ringLL of polyRings(f.geometry)) {
    const r = ringM(ringLL);
    if (r.length < 3) continue;
    if (area(r) < 0) r.reverse(); // counter-clockwise in (x east, z south): area > 0
    const ar = area(r);
    if (ar < 4) continue;
    const ctr = centroid(r);
    const rnd = mulberry32(hashString(`b:${pr.id}`));
    const land = landAt(ctr);
    // a game place (store, clinic ...) whose point is inside the footprint, or within 25 m
    let place = null;
    const bb = bboxOf(r);
    for (const p of PLACES) {
      const m = toM([p.lon, p.lat]);
      if (m[0] < bb[0] - 25 || m[0] > bb[2] + 25 || m[1] < bb[1] - 25 || m[1] > bb[3] + 25) continue;
      if (inside(m, r)) { place = p; break; }
    }
    const kind = kindOf(pr, r, ar, land, !!place || !!(pr.places && pr.places.length && ar > 120));
    if (pr.class) kindKnown++;
    let h = pr.height;
    if (!(h > 0)) { hNone++; h = DEFAULT_H[kind] + (rnd() - 0.5) * (kind === KIND.shed ? 0.6 : 1.6); }
    h = Math.max(2.4, Math.min(h, 60));
    const box = obb(r);
    const rect = ar / box.ar; // 1 = a plain rectangle
    let roof;
    const tag = pr.roof_shape;
    if (tag === 'flat') roof = ROOF.flat;
    else if (tag === 'hipped' || tag === 'pyramidal' || tag === 'half-hipped') roof = ROOF.hipped;
    else if (tag) roof = ROOF.gabled;
    else if (kind === KIND.house || kind === KIND.shed) roof = rnd() < 0.34 ? ROOF.hipped : ROOF.gabled;
    else if (kind === KIND.apartments && ar < 700) roof = ROOF.gabled;
    else if (kind === KIND.civic && ar < 500) roof = ROOF.gabled;
    else roof = ROOF.flat;
    if (roof !== ROOF.flat && (box.hv > 14 || rect < 0.45)) roof = ROOF.flat; // too wide or odd for a pitched roof
    // pitch: rise over the half width; the eave stays at least 2.3 m up
    let rise = 0;
    if (roof !== ROOF.flat) {
      rise = Math.min(box.hv * (kind === KIND.shed ? 0.3 : 0.47), h - 2.3);
      if (rise < 0.6) { roof = ROOF.flat; rise = 0; }
    }
    const wallC = Math.floor(rnd() * PALETTE_SIZE.wall);
    const roofC = Math.floor(rnd() * PALETTE_SIZE.roof);
    buildingsM.push({ r, ctr, kind, roof, h, rise, box, wallC, roofC, place, name: place?.name || null, sid: String(pr.id || '').replace(/-/g, '').slice(0, 12) });
  }
}
for (const b of buildingsM) {
  const c = cell(cellOfM(b.ctr[0], b.ctr[1]));
  const ang = Math.round(((b.box.ang % Math.PI) + Math.PI) % Math.PI * 1000);
  c.b.push([b.kind, b.roof, dm(b.h), dm(b.rise), b.wallC, b.roofC, local(c, b.r),
    [dm(b.box.cx - c.x0), dm(b.box.cz - c.z0), dm(b.box.hu), dm(b.box.hv), ang],
    b.place ? b.place.id : 0, nameIdx(c, b.name), b.sid]);
}
function nearBuilding(pt, margin) {
  const k = cellOfM(pt[0], pt[1]);
  const [cx, cz] = k.split(',').map(Number);
  for (let dz = -1; dz <= 1; dz++) for (let dx = -1; dx <= 1; dx++) {
    const c = cells.get(`${cx + dx},${cz + dz}`);
    if (!c) continue;
    for (const b of c._bm || []) {
      if (pt[0] < b.bb[0] - margin || pt[0] > b.bb[2] + margin || pt[1] < b.bb[1] - margin || pt[1] > b.bb[3] + margin) continue;
      return true;
    }
  }
  return false;
}
for (const b of buildingsM) { const c = cell(cellOfM(b.ctr[0], b.ctr[1])); (c._bm ||= []).push({ bb: bboxOf(b.r) }); }

// ---------- mapped trees and street furniture ----------
const PROP_OF = {
  street_lamp: PROP.lamp, lighting: PROP.lamp, power_pole: PROP.power_pole, utility_pole: PROP.power_pole, bus_stop: PROP.bus_stop,
  stop: PROP.stop_sign, traffic_signals: PROP.signal, bench: PROP.bench, bollard: PROP.bollard, waste_basket: PROP.bin,
  fire_hydrant: PROP.hydrant, post_box: PROP.mailbox, vending_machine: PROP.vending, recycling: PROP.bin, drinking_water: PROP.bollard,
};
const FENCE_OF = { fence: 0, wall: 1, hedge: 2, gate: 0, barrier: 0 };
let mappedTrees = 0;
for (const f of infra) {
  const pr = f.properties;
  const g = f.geometry;
  if (pr.class === 'tree' && g.type === 'Point') {
    const m = toM(g.coordinates);
    const c = cell(cellOfM(m[0], m[1]));
    const rnd = mulberry32(hashString(`t:${pr.id}`));
    const conifer = rnd() < 0.45;
    c.t.push([conifer ? 1 : 0, dm(m[0] - c.x0), dm(m[1] - c.z0), dm(conifer ? 14 + rnd() * 18 : 7 + rnd() * 9)]);
    mappedTrees++;
    continue;
  }
  if (g.type === 'Point' && PROP_OF[pr.class] !== undefined) {
    const m = toM(g.coordinates);
    const c = cell(cellOfM(m[0], m[1]));
    c.p.push([PROP_OF[pr.class], dm(m[0] - c.x0), dm(m[1] - c.z0), Math.floor(mulberry32(hashString(`p:${pr.id}`))() * 360)]);
    continue;
  }
  if (g.type === 'LineString' && FENCE_OF[pr.class] !== undefined) {
    const line = densify(g.coordinates.map(toM), 24);
    let run = [line[0]], key = null;
    const flush = () => { if (run.length >= 2 && key) { const c = cell(key); c.f.push([FENCE_OF[pr.class], local(c, run)]); } };
    for (let i = 1; i < line.length; i++) {
      const k = cellOfM((line[i - 1][0] + line[i][0]) / 2, (line[i - 1][1] + line[i][1]) / 2);
      if (key && k !== key) { flush(); run = [line[i - 1]]; }
      key = k; run.push(line[i]);
    }
    flush();
  }
}

// ---------- yard and park trees (seeded per cell; few are mapped) ----------
const TREE_EVERY = { residential: 420, park: 500, grass: 700, recreation_ground: 600, wood: 45, forest: 45, nature_reserve: 60, scrub: 160, wetland: 260, religious: 500, school: 900, schoolyard: 900, cemetery: 400 };
let yardTrees = 0;
for (const c of cells.values()) {
  const rnd = mulberry32(hashString(`yard:${c.key}`));
  const tries = 260;
  for (let i = 0; i < tries; i++) {
    const pt = [c.x0 + rnd() * CELL, c.z0 + rnd() * CELL];
    const land = landAt(pt);
    const every = TREE_EVERY[land];
    const keep = rnd();
    if (!every) continue;
    // tries cover CELL^2 / tries m² each; keep with chance (that area / every)
    if (keep > (CELL * CELL) / tries / every) continue;
    if (nearBuilding(pt, 2.5) || nearRoad(pt, 2)) continue;
    const conifer = rnd() < (land === 'wood' || land === 'forest' || land === 'nature_reserve' ? 0.8 : 0.4);
    c.t.push([conifer ? 1 : 0, dm(pt[0] - c.x0), dm(pt[1] - c.z0), dm(conifer ? 16 + rnd() * 22 : 6 + rnd() * 10)]);
    yardTrees++;
  }
}

// ---------- write ----------
// The source box: from the land use layer (clipped to the box by process.py).
const box = { x0: Infinity, z0: Infinity, x1: -Infinity, z1: -Infinity };
for (const l of landPolys) { box.x0 = Math.min(box.x0, l.bbox[0]); box.z0 = Math.min(box.z0, l.bbox[1]); box.x1 = Math.max(box.x1, l.bbox[2]); box.z1 = Math.max(box.z1, l.bbox[3]); }
fs.mkdirSync(OUT, { recursive: true });
for (const f of fs.readdirSync(OUT)) if (/^-?\d+_-?\d+\.json$/.test(f)) fs.unlinkSync(path.join(OUT, f));
const index = [];
let total = 0, maxGz = 0, maxKey = '';
for (const c of [...cells.values()].sort((a, b) => a.cz - b.cz || a.cx - b.cx)) {
  if (!c.b.length && !c.r.length && !c.a.length) continue;
  if (!WORLD_GRID.inArea(c.key)) continue;
  // only cells whose centre is inside the source data box (the data is not complete past it)
  const mx = c.x0 + CELL / 2, mz = c.z0 + CELL / 2;
  if (mx < box.x0 || mx > box.x1 || mz < box.z0 || mz > box.z1) continue;
  const out = { v: FORMAT_VERSION, k: c.key, b: c.b, r: c.r, a: c.a, t: c.t, p: c.p, f: c.f, n: c.names };
  const text = JSON.stringify(out);
  fs.writeFileSync(path.join(OUT, `${c.cx}_${c.cz}.json`), text);
  const gz = zlib.gzipSync(text).length;
  total += gz;
  if (gz > maxGz) { maxGz = gz; maxKey = c.key; }
  index.push(c.key);
}
fs.writeFileSync(path.join(OUT, 'index.json'), JSON.stringify({
  v: FORMAT_VERSION,
  cellMeters: CELL,
  cells: index,
  credit: '© OpenStreetMap contributors (ODbL), Overture Maps Foundation, Microsoft ML Buildings, USGS 3DEP',
}));
console.log(`cells ${index.length}, buildings ${buildingsM.length} (no height ${hNone}, type known ${kindKnown}), trees ${mappedTrees} mapped + ${yardTrees} yard`);
console.log(`gzip total ${(total / 1024).toFixed(0)} KB, largest cell ${maxKey} ${(maxGz / 1024).toFixed(1)} KB`);
