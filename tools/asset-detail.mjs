// Measures the shape detail of every procedural 3D asset (items, props, fixtures).
// For each asset: parts = meshes before baking, tris = triangles after baking,
// mats = draw calls (one per material after baking).
// Usage:
//   node tools/asset-detail.mjs                 -> table to stdout
//   node tools/asset-detail.mjs --json out.json -> also write the numbers to a file
//   node tools/asset-detail.mjs --compare base.json -> show growth against an earlier run
// Runs in Node: canvas textures are skipped (no document), geometry is the same as in the browser.
import fs from 'node:fs';
import * as THREE from 'three';
import * as P from '../src/ui/props3d.js';

const args = process.argv.slice(2);
const opt = (k) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : null; };

// count parts by wrapping THREE.Mesh construction during one build
let parts = 0;
const OrigMesh = THREE.Mesh;
function measure(build) {
  parts = 0;
  const before = THREE.Mesh.prototype.onBeforeRender;
  const spy = THREE.Object3D.prototype.add;
  THREE.Object3D.prototype.add = function (...objs) {
    for (const o of objs) if (o && o.isMesh && !o.userData.__baked) parts++;
    return spy.apply(this, objs);
  };
  let obj;
  try { obj = build(); } finally { THREE.Object3D.prototype.add = spy; }
  let tris = 0, mats = 0;
  obj.traverse((o) => {
    if (!o.isMesh) return;
    mats++;
    const g = o.geometry;
    tris += (g.index ? g.index.count : g.attributes.position.count) / 3;
  });
  // the baked meshes were also counted by add(); remove them
  return { parts: Math.max(0, parts - mats), tris: Math.round(tris), mats };
}

const rows = [];
for (const id of P.ITEM_MODEL_IDS) rows.push(['item', id, measure(() => P.makeItemModel(id, 1))]);
for (const k of P.PROP_KINDS) rows.push(['prop', k, measure(() => P.makeProp(k, 1))]);
for (const t of P.FIXTURE_TYPES) rows.push(['fixture', t, measure(() => P.makeFixture(t, 1.6, 0.7, 1.0, 1))]);

const out = {};
for (const [g, id, m] of rows) out[`${g}:${id}`] = m;
if (opt('--json')) fs.writeFileSync(opt('--json'), JSON.stringify(out, null, 1));

const base = opt('--compare') ? JSON.parse(fs.readFileSync(opt('--compare'), 'utf8')) : null;
const pad = (s, n) => String(s).padEnd(n);
const groups = {};
for (const [key, m] of Object.entries(out)) {
  const b = base && base[key];
  const g = key.split(':')[0];
  groups[g] ??= { n: 0, ok: 0, p0: 0, p1: 0, t0: 0, t1: 0 };
  const G = groups[g];
  G.n++; G.p1 += m.parts; G.t1 += m.tris;
  if (b) { G.p0 += b.parts; G.t0 += b.tris; if (m.parts >= b.parts * 1.5) G.ok++; }
  if (!args.includes('--quiet')) {
    let line = pad(key, 38) + pad(m.parts, 6) + pad(m.tris, 8) + pad(m.mats, 4);
    if (b) line += `  parts ${b.parts} -> ${m.parts} (x${(m.parts / Math.max(1, b.parts)).toFixed(2)})  tris x${(m.tris / Math.max(1, b.tris)).toFixed(2)}  mats ${b.mats} -> ${m.mats}`;
    console.log(line);
  }
}
for (const [g, G] of Object.entries(groups)) {
  let s = `${g}: ${G.n} assets, ${G.p1} parts, ${G.t1} tris`;
  if (base) s += ` | parts x${(G.p1 / Math.max(1, G.p0)).toFixed(2)}, tris x${(G.t1 / Math.max(1, G.t0)).toFixed(2)}, ${G.ok}/${G.n} at >= 1.5x parts`;
  console.log(s);
}
