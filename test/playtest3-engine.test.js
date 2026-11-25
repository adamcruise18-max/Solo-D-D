// Engine fixes from playtest 3 (builder, 5 bot runs of 120 days).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { newGame } from '../src/engine/state.js';
import { rollWeather } from '../src/engine/world.js';
import { waterText } from '../src/engine/wild.js';
import { waterWarning } from '../src/engine/home.js';
import { log } from '../src/engine/state.js';

test('snow: every snow day has a depth and freezing air; no snow on a warm day', () => {
  for (let seed = 1; seed <= 40; seed++) {
    const s = newGame(seed);
    for (let day = 1; day <= 200; day++) {
      rollWeather(s, day);
      const w = s.weather;
      if (w.type === 'snow') {
        assert.ok(Number.isInteger(w.snowInches) && w.snowInches >= 1, `seed ${seed} day ${day}`);
        assert.ok(w.low <= 34, `seed ${seed} day ${day} low ${w.low}`);
      }
    }
  }
});

test('fishing spot text follows the weather and the month', () => {
  const s = newGame(3);
  s.weather = { type: 'clear', low: 40 };
  assert.doesNotMatch(waterText(s), /rain/);
  s.weather.type = 'rain';
  assert.match(waterText(s), /rain/);
  s.weather = { type: 'clear', low: 40 };
  s.time = 230 * 1440; // July
  assert.match(waterText(s), /low and clear/);
});

test('journal counts wild spots as places', () => {
  const s = newGame(4);
  log(s, 'You reach Cooper Mountain Nature Park. Brush, tall grass and the edge of the trees.', 'travel');
  assert.ok(s.journal.at(-1).places.includes('Cooper Mountain Nature Park'));
});

test('stored water warning: once at 10 gal and once at 3 gal; none while the tap works', () => {
  const s = newGame(5);
  s.home.tankGal = 5; s.home.safeGal = 0;
  assert.equal(waterWarning(s), null); // tap still works
  s.home.tapWorks = false;
  assert.equal(waterWarning(s), 10);
  assert.equal(waterWarning(s), null);
  s.home.tankGal = 2;
  assert.equal(waterWarning(s), 3);
  assert.equal(waterWarning(s), null);
  s.home.tankGal = 20;
  assert.equal(waterWarning(s), null);
  s.home.tankGal = 8;
  assert.equal(waterWarning(s), 10);
});
