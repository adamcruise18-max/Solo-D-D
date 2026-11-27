// Every procedural 3D asset stays inside its limit in art/asset-budgets.json (Medium/High detail).
// From the performance-optimization skill: set a budget per asset so the frame rate stays safe.
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import * as P from '../src/ui/props3d.js';

const B = JSON.parse(fs.readFileSync(new URL('../art/asset-budgets.json', import.meta.url), 'utf8'));
function cost(obj) {
  let tris = 0, mats = 0;
  obj.traverse((o) => {
    if (!o.isMesh) return;
    mats++;
    const g = o.geometry;
    tris += (g.index ? g.index.count : g.attributes.position.count) / 3;
  });
  return { tris, mats };
}
function check(group, id, obj) {
  const c = cost(obj), lim = B[group];
  assert.ok(c.tris <= lim.tris, `${group}:${id} has ${c.tris} triangles (limit ${lim.tris})`);
  assert.ok(c.mats <= lim.mats, `${group}:${id} has ${c.mats} draw calls (limit ${lim.mats})`);
}

test('asset budget: every item, prop and fixture is inside its limit', () => {
  P.setAssetDetail('high');
  for (const id of P.ITEM_MODEL_IDS) check('item', id, P.makeItemModel(id, 1));
  for (const k of P.PROP_KINDS) check('prop', k, P.makeProp(k, 1));
  for (const t of P.FIXTURE_TYPES) check('fixture', t, P.makeFixture(t, 1.6, 0.7, 1.0, 1));
});

test('asset budget: Low quality is never heavier than Medium/High', () => {
  for (const id of P.ITEM_MODEL_IDS.slice(0, 20)) {
    P.setAssetDetail('high'); const hi = cost(P.makeItemModel(id, 1));
    P.setAssetDetail('low'); const lo = cost(P.makeItemModel(id, 1));
    assert.ok(lo.tris <= hi.tris, `${id}: low ${lo.tris} > high ${hi.tris}`);
  }
  P.setAssetDetail('high');
});

test('shelf stock: far copy is lighter, same products, in pieces with a level of detail', () => {
  const lim = B.shelfFill;
  for (const kind of P.SHELF_KINDS) {
    const g = P.makeShelfFill(kind, 8, [0.12, 0.62, 1.12, 1.57], 0.9, 3);
    const u = g.userData;
    assert.ok(u.items > 50, `${kind}: ${u.items} items`);
    assert.ok(u.triangles / u.items <= lim.trisPerItem, `${kind}: ${(u.triangles / u.items).toFixed(1)} triangles per item (limit ${lim.trisPerItem})`);
    assert.ok(u.farTriangles <= u.triangles * lim.farShare, `${kind}: far ${u.farTriangles} vs near ${u.triangles}`);
    assert.equal(u.chunks, 2);
    const lods = g.children.filter((c) => c.isLOD);
    assert.equal(lods.length, g.children.length);
    for (const l of lods) {
      assert.equal(l.levels.length, 2);
      assert.equal(l.levels[1].distance, P.SHELF_LOD_M);
    }
    // the same seed gives the same shelf
    const again = P.makeShelfFill(kind, 8, [0.12, 0.62, 1.12, 1.57], 0.9, 3).userData;
    assert.deepEqual([again.items, again.triangles, again.farTriangles], [u.items, u.triangles, u.farTriangles]);
  }
});
