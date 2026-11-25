import test from 'node:test';
import assert from 'node:assert/strict';
import { newGame } from '../src/engine/state.js';
import { emptyRecord, addRun, earnedIds, validLegacy, MAX_SLOTS } from '../src/engine/legacy.js';
import { energyUseFactor, searchJobFactor } from '../src/engine/background.js';

const deadRun = (days, extra = {}) => {
  const s = newGame(9);
  s.dead = { days, time: s.time, cause: 'cold' };
  Object.assign(s.stats, extra);
  return s;
};

test('the option is off by default and nothing is earned at first', () => {
  const r = emptyRecord();
  assert.equal(r.enabled, false);
  assert.deepEqual(earnedIds(r), []);
});

test('deeds add up over runs', () => {
  let r = emptyRecord();
  r = addRun(r, deadRun(12, { miles: 60, placesSearched: 20 }));
  assert.deepEqual(earnedIds(r), []);
  r = addRun(r, deadRun(31, { miles: 45, placesSearched: 31 }));
  assert.deepEqual(earnedIds(r).sort(), ['long_haul', 'road_legs', 'sharp_eyes']);
});

test('at most 3 slots, only earned bonuses', () => {
  const r = { ...emptyRecord(), totals: { miles: 500, places: 500 }, best: { days: 90, built: 9 }, dogJoined: true };
  assert.equal(earnedIds(r).length, 5);
  assert.equal(validLegacy(earnedIds(r), r).length, MAX_SLOTS);
  assert.deepEqual(validLegacy(['road_legs'], emptyRecord()), []);
});

test('bonuses are small and only apply when picked', () => {
  const plain = newGame(9);
  const s = newGame(9, { legacy: ['long_haul', 'road_legs', 'sharp_eyes'] });
  assert.equal(s.home.storage.canned_food - plain.home.storage.canned_food, 3);
  assert.equal(energyUseFactor(s, 'walk'), 0.95);
  assert.equal(searchJobFactor(s), 0.95);
  assert.equal(energyUseFactor(plain, 'walk'), 1);
});
