import { test } from 'node:test';
import assert from 'node:assert/strict';
import { tilesFor, layoutGrid, fitsAt } from '../src/ui/grid.js';
import { sizeOf, packRows, GRID_COLS } from '../src/data/gridsize.js';
import { ITEMS } from '../src/data/items.js';

test('grid: every item has a size, and stacks split into tiles', () => {
  for (const id of Object.keys(ITEMS)) {
    const s = sizeOf(id);
    assert.ok(s.w >= 1 && s.h >= 1 && s.stack >= 1, id);
  }
  const t = tilesFor({ canned_food: 5, rifle: 1 });
  assert.equal(t.filter((x) => x.id === 'canned_food').length, 3); // 2 per tile
  assert.equal(t.find((x) => x.key === 'canned_food#2').q, 1);
});

test('grid: tiles never overlap, long things turn to fit, the rest goes over the edge', () => {
  const bag = { rifle: 1, water_bottle: 2, canned_food: 6, first_aid: 1, winter_coat: 1, batteries: 3 };
  const L = layoutGrid(tilesFor(bag), GRID_COLS, packRows(false));
  for (const a of L.tiles) for (const b of L.tiles) {
    if (a === b) continue;
    const hit = a.x < b.x + b.w && b.x < a.x + a.w && a.y < b.y + b.h && b.y < a.y + a.h;
    assert.ok(!hit, `${a.key} overlaps ${b.key}`);
  }
  const rifle = L.tiles.find((x) => x.id === 'rifle');
  assert.ok(rifle.rot && rifle.w === 5 && rifle.h === 1, 'rifle lies down in a 4-row grid');
  assert.ok(L.tiles.every((x) => x.x + x.w <= GRID_COLS));
  const big = layoutGrid(tilesFor({ generator: 1, wooden_chair: 1 }), GRID_COLS, 4);
  assert.ok(big.overflow >= 1 && big.height > 4);
});

test('grid: a saved spot is kept when it is free, and fitsAt checks bounds and others', () => {
  const tiles = tilesFor({ first_aid: 1, flashlight: 1 });
  const L = layoutGrid(tiles, 6, 4, { 'flashlight#0': [5, 3, 0] });
  const f = L.tiles.find((x) => x.id === 'flashlight');
  assert.deepEqual([f.x, f.y], [5, 3]);
  const kit = L.tiles.find((x) => x.id === 'first_aid');
  assert.equal(fitsAt(L, 'flashlight#0', kit.x, kit.y, 1, 1), false);
  assert.equal(fitsAt(L, 'flashlight#0', 6, 0, 1, 1), false);
  assert.equal(fitsAt(L, 'flashlight#0', 4, 3, 1, 1), true);
});
