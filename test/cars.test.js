import { test } from 'node:test';
import assert from 'node:assert/strict';
import { newGame, HOME } from '../src/engine/state.js';
import { perform } from '../src/engine/game.js';
import { listActions, locationLabel, itemUses } from '../src/engine/actions.js';

function atCar(seed = 9) {
  const s = newGame(seed);
  Object.assign(s.player, { energy: 100, food: 100, water: 100 });
  perform(s, 'action', 'go_car', `car:__home:0|${HOME.lat + 0.0005}|${HOME.lon}`);
  return s;
}

test('walk to a car and see its actions', () => {
  const s = atCar();
  assert.equal(s.location.kind, 'car');
  assert.equal(locationLabel(s), 'Abandoned car');
  const ids = listActions(s).map((a) => a.id);
  for (const id of ['car_search', 'car_siphon', 'car_battery', 'car_wire', 'go_home']) assert.ok(ids.includes(id), id);
});

test('each car is searched once; battery needs a wrench and goes into the home bank', () => {
  const s = atCar();
  perform(s, 'action', 'car_search');
  assert.ok(s.cars['car:__home:0'].searched);
  assert.ok(listActions(s).find((a) => a.id === 'car_search').disabled);
  delete s.carried.toolkit; delete s.carried.multitool; delete s.home.storage.toolkit; delete s.home.storage.multitool;
  assert.ok(listActions(s).find((a) => a.id === 'car_battery').disabled);
  s.carried.multitool = 1;
  perform(s, 'action', 'car_battery');
  assert.equal(s.carried.car_battery, 1);
  perform(s, 'action', 'go_home');
  const max = s.home.batteryMax;
  assert.ok(itemUses(s, 'car_battery').some((u) => u.verb === 'carbattery'));
  perform(s, 'use', 'car_battery', 'carbattery', 'carried');
  assert.equal(s.home.batteryMax, max + 0.5);
});
