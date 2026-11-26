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
  // Needs 15% slower (year tuning): 3600 cal / 70 per point / 30.6 points a day ≈ 1.7 days
  assert.ok(Math.abs(st.foodDays - 3600 / 70 / 30.6) < 1e-9);
  // 12 quarts × 25 points / 51 points a day ≈ 5.9 days
  assert.ok(Math.abs(st.waterDays - 300 / 51) < 1e-9);
  assert.match(stockLine(s), /^Food: 1\.7 days · Water: 5\.9 days$/);
});

test('power summary gives heater hours from the battery', () => {
  const s = newGame(6);
  s.home.battery = 6;
  s.home.heaterOn = true;
  assert.equal(powerSummary(s).hoursLeft, 4);
});
