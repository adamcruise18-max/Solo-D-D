// Rare weather (research spec step 7, part 3) and sleep-only events.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { newGame } from '../src/engine/state.js';
import { weatherSystem } from '../src/engine/systems.js';
import { tickStep } from '../src/engine/tick.js';
import { walkSpeed } from '../src/engine/travel.js';
import { sceneEnv } from '../src/engine/scene.js';
import { candidates, whereNow } from '../src/engine/pacer.js';
import { WEATHER_TYPES } from '../src/data/climate.js';
import { EVENTS } from '../src/data/events.js';

function yearsOfWeather(seed, years) {
  const s = newGame(seed);
  const starts = { ice_storm: 0, heat_wave: 0, smoke: 0, snow: 0 };
  let prev = s.weather.type;
  const types = new Set();
  for (let d = 1; d <= 365 * years; d++) {
    weatherSystem.daily(s, d);
    const w = s.weather;
    types.add(w.type);
    if (w.spell?.first) starts[w.spell.id]++;
    if (w.type === 'snow' && prev !== 'snow') starts.snow++;
    assert.ok(WEATHER_TYPES[w.type], `unknown weather type ${w.type}`);
    assert.ok(!w.baseType || !['ice_storm', 'heat_wave', 'smoke'].includes(w.baseType), 'a spell never becomes the normal type');
    prev = w.type;
  }
  return { starts, types };
}

test('rare weather: Portland rates over 60 years', () => {
  const total = { ice_storm: 0, heat_wave: 0, smoke: 0, snow: 0 };
  for (const seed of [1, 2, 3, 4, 5, 6]) {
    const { starts } = yearsOfWeather(seed, 10);
    for (const k in total) total[k] += starts[k];
  }
  const per = (k) => total[k] / 60;
  assert.ok(per('ice_storm') >= 0.3 && per('ice_storm') <= 0.8, `ice storms ${per('ice_storm')} a winter (about 1 in 2)`);
  assert.ok(per('snow') >= 2 && per('snow') <= 5, `snow ${per('snow')} a winter (2 to 4)`);
  assert.ok(per('heat_wave') >= 0.2 && per('heat_wave') <= 1, `heat waves ${per('heat_wave')} a summer (some years)`);
  assert.ok(per('smoke') >= 0.2 && per('smoke') <= 1, `smoke ${per('smoke')} a year`);
});

test('rare weather: catch-up is exact (same days in order give the same weather)', () => {
  const a = newGame(7);
  const b = newGame(7);
  for (let d = 1; d <= 400; d++) weatherSystem.daily(a, d);
  for (let d = 1; d <= 400; d++) weatherSystem.daily(b, d);
  assert.deepEqual(a.weather, b.weather);
  assert.deepEqual(a.rngStreams, b.rngStreams);
});

function withWeather(type) {
  const s = newGame(3);
  s.weather.type = type;
  s.time = 2 * 1440 + 13 * 60; // 1 PM, day
  s.player.food = s.player.water = s.player.warmth = 90;
  return s;
}

test('heat wave: thirst x1.5 outside in the day', () => {
  const a = withWeather('clear');
  const b = withWeather('heat_wave');
  a.weather.high = b.weather.high = 70;
  a.weather.low = b.weather.low = 60;
  a.weather.nextLow = b.weather.nextLow = 60;
  a.weather.prevHigh = b.weather.prevHigh = 70;
  tickStep(a, 1, 'walk');
  tickStep(b, 1, 'walk');
  const lossA = 90 - a.player.water;
  const lossB = 90 - b.player.water;
  assert.ok(Math.abs(lossB - lossA * 1.5) < 1e-9, `${lossA} vs ${lossB}`);
});

test('smoke: outside costs health without an N95 mask', () => {
  const a = withWeather('smoke');
  a.player.health = 80;
  tickStep(a, 1, 'walk');
  const b = withWeather('smoke');
  b.player.health = 80;
  b.carried.n95 = 1;
  tickStep(b, 1, 'walk');
  assert.ok(a.player.health < b.player.health, `${a.player.health} vs ${b.player.health}`);
  const c = withWeather('smoke');
  c.player.health = 80;
  tickStep(c, 1, 'rest'); // inside
  assert.ok(c.player.health >= b.player.health);
});

test('ice storm: walking is slow; scene shows ice; smoke shows an orange sky', () => {
  const a = withWeather('clear');
  const b = withWeather('ice_storm');
  assert.ok(walkSpeed(b).mph < walkSpeed(a).mph * 0.6);
  assert.ok(walkSpeed(b).why.includes('ice storm'));
  assert.equal(sceneEnv(b).ice, true);
  assert.equal(sceneEnv(withWeather('smoke')).haze, '#d9822b');
  assert.equal(sceneEnv(a).haze, null);
});

test('ice storm: the trees-down event fits only in an ice storm', () => {
  const s = withWeather('ice_storm');
  assert.ok(candidates(s, 'rest').some((e) => e.id === 'ice_trees_down'));
  s.weather.type = 'rain';
  assert.ok(!candidates(s, 'rest').some((e) => e.id === 'ice_trees_down'));
});

test('sleep: only events written for sleep can happen', () => {
  const s = newGame(5);
  assert.equal(whereNow(s, 'sleep'), 'asleep');
  const list = candidates(s, 'sleep');
  assert.ok(list.length > 0);
  assert.ok(list.every((e) => e.where === 'asleep'), list.map((e) => e.id).join(','));
  assert.ok(!candidates(s, 'rest').some((e) => e.where === 'asleep'));
  assert.ok(EVENTS.filter((e) => e.where === 'asleep').length >= 3);
});
