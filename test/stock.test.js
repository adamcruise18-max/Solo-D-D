import test from 'node:test';
import assert from 'node:assert/strict';
import { newGame } from '../src/engine/state.js';
import { stockSummary, stockLine, powerSummary } from '../src/engine/stock.js';

test('stock summary counts carried and stored food and water in days', () => {
  const s = newGame(5);
  s.carried = {};
  s.home.storage = {};
  Object.assign(s.home, { tankGal: 0, safeGal: 0, rawGal: 0 });
  assert.equal(stockSummary(s).foodDays, 0);
  s.carried.canned_food = 9; // 3600 cal
  s.home.storage.water_bottle = 3; // 3 gal = 12 quarts
  const st = stockSummary(s);
  // Needs 25% slower (Adam): 3600 cal / 70 per point / 27 points a day ≈ 1.9 days
  assert.ok(Math.abs(st.foodDays - 3600 / 70 / 27) < 1e-9);
  // 12 quarts × 25 points / 45 points a day ≈ 6.7 days
  assert.ok(Math.abs(st.waterDays - 300 / 45) < 1e-9);
  assert.match(stockLine(s), /^Food: 1\.9 days · Water: 6\.7 days$/);
});

test('power summary gives heater hours from the battery', () => {
  const s = newGame(6);
  s.home.battery = 6;
  s.home.heaterOn = true;
  assert.equal(powerSummary(s).hoursLeft, 4);
});
