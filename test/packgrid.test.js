import test from 'node:test';
import assert from 'node:assert/strict';
import { newGame } from '../src/engine/state.js';
import { roomFor, packUse, packFull } from '../src/engine/packgrid.js';
import { takeItem, dropItem, hereBag } from '../src/engine/actions.js';
import { walkSpeed } from '../src/engine/travel.js';

test('packgrid: grid space is the only carry limit (Adam, 2026-11-26)', () => {
  const s = newGame(5);
  s.carried = {};
  // 32 lb generator (4 x 4) fits an empty 6 x 4 pocket grid: weight does not matter
  assert.equal(roomFor(s, 'generator', 1), 1);
  s.carried = { canned_food: 46 }; // 23 cells used
  assert.equal(roomFor(s, 'canned_food', 5), 2, 'one free cell holds 2 cans');
  assert.equal(roomFor(s, 'first_aid', 1), 0, '2 x 2 kit has no room');
  s.carried.canned_food = 48;
  assert.ok(packFull(s));
  s.carried.backpack = 1;
  assert.ok(!packFull(s), 'a backpack gives a bigger grid');
  assert.equal(packUse(s).total, 60);
});

test('packgrid: take only what fits; the backpack stays on while its things need it', () => {
  const s = newGame(5);
  s.location = { kind: 'home' };
  s.carried = { canned_food: 46 };
  const here = hereBag(s);
  for (const k of Object.keys(here)) delete here[k];
  here.canned_food = 6;
  takeItem(s, 'canned_food');
  assert.equal(s.carried.canned_food, 48);
  assert.equal(here.canned_food, 4);
  s.carried = { backpack: 1, broken_bike: 1, generator: 1 };
  dropItem(s, 'backpack');
  assert.equal(s.carried.backpack, 1, 'bike and generator do not fit in pockets');
  assert.match(s.log.at(-1).text, /do not fit/);
});

test('packgrid: an over full pack (things added by other actions) slows walking', () => {
  const s = newGame(5);
  s.carried = {};
  const base = walkSpeed(s).mph;
  s.carried = { broken_bike: 1, generator: 1 };
  assert.ok(packUse(s).over);
  assert.ok(walkSpeed(s).mph < base);
});

test('packgrid: the backpack is worn gear (back slot), never a tile, and makes the grid bigger', async () => {
  const { takeOffSlot } = await import('../src/engine/actions.js');
  const { ITEMS } = await import('../src/data/items.js');
  assert.equal(ITEMS.backpack.kind, 'wear');
  assert.equal(ITEMS.backpack.slot, 'back');
  const s = newGame(5);
  s.location = { kind: 'home' };
  s.carried = { canned_food: 2 };
  const here = hereBag(s);
  here.backpack = 1;
  takeItem(s, 'backpack');
  assert.equal(s.player.worn.back, 'backpack');
  assert.ok(!s.carried.backpack, 'not in the bag');
  assert.equal(packUse(s).total, 60);
  // too much for the pockets: it stays on
  s.carried = { broken_bike: 1, generator: 1 };
  assert.equal(takeOffSlot(s, 'back'), false);
  assert.equal(s.player.worn.back, 'backpack');
  // little in the pack: it comes off and goes in the bag (a 3 x 3 tile)
  s.carried = { canned_food: 2 };
  assert.equal(takeOffSlot(s, 'back'), true);
  assert.equal(s.carried.backpack, 1);
  assert.equal(packUse(s).total, 24);
});
