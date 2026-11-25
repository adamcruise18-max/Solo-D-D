import { test } from 'node:test';
import assert from 'node:assert/strict';
import { newGame } from '../src/engine/state.js';
import { sceneEnv, WEATHER_LOOK } from '../src/engine/scene.js';
import { sunFor } from '../src/engine/world.js';
import { WEATHER_TYPES } from '../src/data/climate.js';

test('scene: every weather type has a look', () => {
  for (const id of Object.keys(WEATHER_TYPES)) assert.ok(WEATHER_LOOK[id], `no look for ${id}`);
});

test('scene: day, night, dawn and dusk follow the real sunrise and sunset', () => {
  const s = newGame(4);
  const day0 = Math.floor(s.time / 1440) * 1440;
  const sun = sunFor(s.time);
  const at = (m) => sceneEnv(s, day0 + m);
  assert.equal(at(sun.rise - 120).phase, 'night');
  assert.equal(at(sun.rise - 120).daylight, 0);
  assert.equal(at(sun.rise).phase, 'dawn');
  assert.ok(Math.abs(at(sun.rise).daylight - 0.5) < 0.01, 'half light at sunrise');
  const noon = at((sun.rise + sun.set) / 2);
  assert.equal(noon.phase, 'day');
  assert.equal(noon.daylight, 1);
  assert.ok(noon.sunHeight > 0.99);
  assert.equal(at(sun.set).phase, 'dusk');
  assert.equal(at(sun.set + 120).daylight, 0);
  assert.equal(at(13 * 60 + 30).hour, 13.5);
});

test('scene: clouds and rain dim the light at a window; nothing in the state changes', () => {
  const s = newGame(4);
  const noon = Math.floor(s.time / 1440) * 1440 + 12 * 60;
  s.weather.type = 'clear';
  const clear = sceneEnv(s, noon);
  s.weather.type = 'heavy_rain';
  const rain = sceneEnv(s, noon);
  assert.ok(rain.outdoorLight < clear.outdoorLight);
  assert.equal(rain.precip, 'rain');
  assert.equal(rain.precipStrength, 1);
  const before = JSON.stringify(s);
  sceneEnv(s);
  assert.equal(JSON.stringify(s), before);
});
