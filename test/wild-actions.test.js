import { test } from 'node:test';
import assert from 'node:assert/strict';
import { newGame } from '../src/engine/state.js';
import { perform } from '../src/engine/game.js';
import { listActions, locationLabel } from '../src/engine/actions.js';

const ids = (s) => listActions(s).map((a) => a.id);

test('a fishing spot shows the fish button and walk home', () => {
  const s = newGame(3);
  s.location = { kind: 'wild', id: 'commonwealth_lake' };
  assert.equal(locationLabel(s), 'Commonwealth Lake');
  const fish = listActions(s).find((a) => a.id === 'fish');
  assert.ok(fish.disabled, 'no gear: disabled');
  s.carried.fishing_line = 1;
  assert.ok(!listActions(s).find((a) => a.id === 'fish').disabled);
  assert.ok(ids(s).includes('go_home'));
  assert.ok(!ids(s).includes('hunt_bow'));
});

test('a hunting spot shows hunt and snare buttons for the gear you have', () => {
  const s = newGame(3);
  s.location = { kind: 'wild', id: 'cooper_mountain' };
  assert.ok(listActions(s).find((a) => a.id === 'hunt_bow').disabled);
  Object.assign(s.carried, { bow: 1, arrows: 1, snare_wire: 1 });
  assert.ok(!listActions(s).find((a) => a.id === 'hunt_bow').disabled);
  assert.ok(!ids(s).includes('hunt_rifle'));
  perform(s, 'action', 'set_snare');
  const check = listActions(s).find((a) => a.id === 'check_snare');
  assert.ok(check.disabled, 'too soon to check');
  assert.ok(ids(s).includes('take_snare'));
});

test('go_spot walks you to the spot', () => {
  const s = newGame(3);
  Object.assign(s.player, { energy: 100, food: 100, water: 100 });
  perform(s, 'action', 'go_spot', 'nature_park');
  assert.deepEqual(s.location, { kind: 'wild', id: 'nature_park' });
});
