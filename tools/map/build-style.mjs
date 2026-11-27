// Saves the map style, sprites and fonts next to the map file, so the whole map loads from
// GitHub Pages (docs/map/). Source: the OpenFreeMap "liberty" style (full color; Adam disliked the
// dark map), its sprites and Noto Sans font ranges.
//   NODE_USE_ENV_PROXY=1 node tools/map/build-style.mjs
// In docs/map/style.json, URLs are relative to docs/map/ and start with "./"; src/map/local-map.js
// turns them into full URLs at load time and points the vector source at portland.pmtiles.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUT = 'docs/map';
// Latin, Latin-1, Latin Extended and general punctuation: enough for Portland names.
const RANGES = ['0-255', '256-511', '512-767', '8192-8447'];

const get = async (u) => { const r = await fetch(u); if (!r.ok) throw new Error(`${u}: HTTP ${r.status}`); return r; };

const style = await (await get('https://tiles.openfreemap.org/styles/liberty')).json();
const fonts = new Set();
for (const l of style.layers) for (const f of l.layout?.['text-font'] || []) fonts.add(f);

// Low-zoom shaded relief is never seen (the game map stops at zoom 9): drop it.
style.layers = style.layers.filter((l) => l.source !== 'ne2_shaded');
delete style.sources.ne2_shaded;
style.sources.openmaptiles = {
  type: 'vector', url: 'pmtiles://./portland.pmtiles',
  attribution: '<a href="https://www.openmaptiles.org/" target="_blank">© OpenMapTiles</a> Data from <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>',
};
const spriteUrl = style.sprite;
style.sprite = './sprites/ofm';
style.glyphs = './fonts/{fontstack}/{range}.pbf';
mkdirSync(OUT, { recursive: true });
writeFileSync(join(OUT, 'style.json'), JSON.stringify(style));

mkdirSync(join(OUT, 'sprites'), { recursive: true });
for (const suf of ['.json', '.png', '@2x.json', '@2x.png']) {
  const buf = Buffer.from(await (await get(spriteUrl + suf)).arrayBuffer());
  writeFileSync(join(OUT, 'sprites', `ofm${suf}`), buf);
}
for (const font of fonts) {
  mkdirSync(join(OUT, 'fonts', font), { recursive: true });
  for (const r of RANGES) {
    const buf = Buffer.from(await (await get(`https://tiles.openfreemap.org/fonts/${encodeURIComponent(font)}/${r}.pbf`)).arrayBuffer());
    writeFileSync(join(OUT, 'fonts', font, `${r}.pbf`), buf);
  }
}
console.log(`style, sprites and ${fonts.size} fonts x ${RANGES.length} ranges written to ${OUT}`);
