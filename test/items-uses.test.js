import test from 'node:test';
import assert from 'node:assert/strict';
import { newGame } from '../src/engine/state.js';
import { perform } from '../src/engine/game.js';
import { feltTemp } from '../src/engine/tick.js';
import { itemUses } from '../src/engine/actions.js';
import { ITEMS } from '../src/data/items.js';
import { CATEGORIES } from '../src/data/places.js';

test('every loot table id is a real item', () => {
  for (const [cat, c] of Object.entries(CATEGORIES)) for (const l of c.loot) assert.ok(ITEMS[l.id], `${cat}: ${l.id}`);
});

test('a sleeping bag makes sleep warmer, the best item counts once', () => {
  const s = newGame(4);
  s.carried = {};
  s.home.storage = {};
  const base = feltTemp(s, 'sleep');
  s.carried.blanket = 1;
  assert.equal(feltTemp(s, 'sleep'), base + 8);
  s.carried.sleeping_bag = 1;
  assert.equal(feltTemp(s, 'sleep'), base + 15);
});

test('hand warmers add warmth and are used up', () => {
  const s = newGame(4);
  s.carried = { hand_warmers: 2 };
  s.player.warmth = 30;
  assert.ok(itemUses(s, 'hand_warmers').some((u) => u.verb === 'warm'));
  perform(s, 'use', 'hand_warmers', 'warm');
  assert.equal(s.player.warmth >= 44, true);
  assert.equal(s.carried.hand_warmers, 1);
});

test('wool socks can be worn', () => {
  const s = newGame(4);
  s.carried = { wool_socks: 1 };
  perform(s, 'use', 'wool_socks', 'wear');
  assert.equal(s.player.worn.socks, true);
});

test('a water tablet makes 1 gal of unsafe water safe', () => {
  const s = newGame(4);
  s.carried = { water_tablets: 1 };
  s.home.rawGal = 3;
  const safe0 = s.home.safeGal;
  perform(s, 'action', 'purify');
  assert.equal(s.home.rawGal, 2);
  assert.equal(s.home.safeGal, safe0 + 1);
  assert.ok(Math.abs(s.carried.water_tablets - 0.9) < 1e-9);
});
