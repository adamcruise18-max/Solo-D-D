import test from 'node:test';
import assert from 'node:assert/strict';
import { newGame } from '../src/engine/state.js';
import { advanceTime } from '../src/engine/tick.js';
import { spoilRate, stageOf, eatRisk, addFresh, ageFood, isPerishable } from '../src/engine/food.js';

test('cold slows spoiling, warmth speeds it up', () => {
  assert.equal(spoilRate(65), 1);
  assert.ok(spoilRate(34) < 0.2);
  assert.ok(spoilRate(50) < 1 && spoilRate(50) > spoilRate(34));
  assert.ok(spoilRate(80) > 1);
});

test('only fresh food spoils; cans keep', () => {
  assert.ok(isPerishable('fresh_fish'));
  assert.ok(!isPerishable('canned_food'));
  const s = newGame(3);
  assert.equal(stageOf(s, 'canned_food'), 'keeps');
});

test('fish goes fresh, stale, spoiled at room temperature', () => {
  const s = newGame(3);
  s.carried.fresh_fish = 2;
  addFresh(s, [s.carried], 'fresh_fish', 0);
  assert.equal(stageOf(s, 'fresh_fish'), 'fresh');
  ageFood(s, 24 * 1.2, () => 65); // perish 2 days: 60% used
  assert.equal(stageOf(s, 'fresh_fish'), 'stale');
  ageFood(s, 24, () => 65);
  assert.equal(stageOf(s, 'fresh_fish'), 'spoiled');
});

test('cold storage keeps food much longer', () => {
  const warm = newGame(3); const cold = newGame(3);
  warm.carried.raw_meat = 1; cold.home.storage.raw_meat = 1;
  ageFood(warm, 24, () => 65);
  ageFood(cold, 24, (w) => (w === 'storage' ? 34 : 65));
  assert.ok(cold.fresh.raw_meat < warm.fresh.raw_meat / 5);
});

test('cooking halves the food poisoning risk', () => {
  const s = newGame(3);
  s.carried.fresh_fish = 1;
  s.fresh = { fresh_fish: 0.7 };
  assert.equal(eatRisk(s, 'fresh_fish'), 0.1);
  assert.equal(eatRisk(s, 'fresh_fish', true), 0.05);
});

test('"Warm and fed" slows heat loss in the cold', () => {
  const run = (fed) => {
    const s = newGame(8);
    s.home.fireHours = 0;
    s.home.indoorTemp = 30;
    s.player.warmth = 80;
    s.player.warmFedH = fed ? 6 : 0;
    advanceTime(s, 120);
    return 80 - s.player.warmth;
  };
  const lostFed = run(true); const lostNot = run(false);
  assert.ok(lostNot > 0, 'should lose warmth in a 30°F room');
  assert.ok(lostFed < lostNot * 0.75, `fed ${lostFed} vs not ${lostNot}`);
});
