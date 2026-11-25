import { test } from 'node:test';
import assert from 'node:assert/strict';
import { newGame } from '../src/engine/state.js';
import { perform } from '../src/engine/game.js';
import { itemUses } from '../src/engine/actions.js';
import { SALVAGE } from '../src/data/salvage.js';
import { ITEMS } from '../src/data/items.js';

test('every salvage entry uses known items', () => {
  for (const [id, sv] of Object.entries(SALVAGE)) {
    assert.ok(ITEMS[id], id);
    for (const p of Object.keys(sv.parts)) assert.ok(ITEMS[p], `${id}: ${p}`);
    for (const t of sv.tools) assert.ok(ITEMS[t], `${id}: ${t}`);
  }
});

test('taking junk apart needs a tool, takes time, gives parts and tinkering xp', () => {
  const s = newGame(4);
  delete s.carried.knife; delete s.carried.multitool; delete s.carried.toolkit;
  delete s.home.storage.knife; delete s.home.storage.multitool; delete s.home.storage.toolkit;
  s.carried.desk_lamp = 1;
  const u = itemUses(s, 'desk_lamp').find((x) => x.verb === 'salvage');
  assert.ok(u.disabled, 'no tool');
  s.carried.knife = 1;
  assert.ok(!itemUses(s, 'desk_lamp').find((x) => x.verb === 'salvage').disabled);
  const t = s.time; const wire = s.carried.wiring || 0; const xp = s.skills?.xp?.tinkering || 0;
  perform(s, 'use', 'desk_lamp', 'salvage', 'carried');
  assert.ok(!s.carried.desk_lamp);
  assert.equal(s.carried.wiring, wire + 0.5);
  assert.ok(s.time >= t + 9);
  assert.ok(s.skills.xp.tinkering > xp);
});
