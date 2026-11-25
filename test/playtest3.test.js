import test from 'node:test';
import assert from 'node:assert/strict';
import { newGame, addItem } from '../src/engine/state.js';
import { takeAll } from '../src/engine/actions.js';
import { addCarBattery } from '../src/engine/cars.js';

test('take all picks up a part-unit and logs what you took', () => {
  const s = newGame(9);
  s.location = { kind: 'house', id: 'h1', label: 'a house' };
  s.houses = s.houses || {};
  s.houses.h1 = { leftovers: { wiring: 0.5 } };
  s.carried = { backpack: 1 };
  takeAll(s);
  assert.equal(s.carried.wiring, 0.5);
  assert.ok(s.log.some((l) => /You take: /.test(l.text || l)));
  assert.ok(!s.log.some((l) => /pack is full/.test(l.text || l)));
});

test('a car battery adds storage only when there is one in the bag', () => {
  const s = newGame(9);
  const max = s.home.batteryMax;
  addCarBattery(s, {});
  assert.equal(s.home.batteryMax, max);
  const bag = {}; addItem(bag, 'car_battery', 1);
  addCarBattery(s, bag);
  assert.ok(s.home.batteryMax > max);
});
