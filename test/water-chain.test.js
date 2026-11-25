import test from 'node:test';
import assert from 'node:assert/strict';
import { newGame } from '../src/engine/state.js';
import { advanceTime } from '../src/engine/tick.js';
import { AUTO_FILTER_GAL_PER_DAY, SAFE_TANK_GAL, autoFilterToday } from '../src/engine/base.js';

const withChain = (s) => { s.home.projects = { rain_barrels: true, filter_station: true }; return s; };

test('with barrels and the filter station, rain water becomes clean water by itself each day', () => {
  const s = withChain(newGame(11));
  s.home.rawGal = 50; s.home.safeGal = 0;
  const before = s.home.rawGal;
  advanceTime(s, 24 * 60);
  assert.ok(s.home.safeGal >= AUTO_FILTER_GAL_PER_DAY - 1e-9, `safe ${s.home.safeGal}`);
  assert.ok(s.home.rawGal < before);
});

test('it stops when the clean tank is full, and does nothing without the station', () => {
  const s = withChain(newGame(11));
  s.home.rawGal = 50; s.home.safeGal = SAFE_TANK_GAL;
  assert.equal(autoFilterToday(s), 0);
  const t = newGame(11);
  t.home.projects = { rain_barrels: true };
  t.home.rawGal = 50;
  assert.equal(autoFilterToday(t), 0);
});
