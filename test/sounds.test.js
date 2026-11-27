import test from 'node:test';
import assert from 'node:assert/strict';
import { SFX, ACTION_SFX, USE_SFX, sfxFor, ambience, rainHitEvery, cleanSettings } from '../src/data/sounds.js';
import { newGame } from '../src/engine/state.js';
import { sceneEnv } from '../src/engine/scene.js';

test('sounds: every action sound exists, with 21 ZzFX numbers or fewer', () => {
  for (const n of [...Object.values(ACTION_SFX), ...Object.values(USE_SFX)]) assert.ok(n === 'steps' || SFX[n], n);
  for (const [n, p] of Object.entries(SFX)) assert.ok(p.length <= 21 && p.every(Number.isFinite), n);
  assert.equal(sfxFor('take', 'canned_food'), 'pickup');
  assert.equal(sfxFor('use', 'water_bottle', 'drink'), 'drink');
  assert.equal(sfxFor('action', 'force'), 'kick');
  assert.equal(sfxFor('action', 'no_such_thing'), null);
});

test('sounds: loops follow weather, inside and home', () => {
  const s = newGame(3);
  const sc = sceneEnv(s);
  const rain = { ...sc, precip: 'rain', precipStrength: 1, windMph: 25, daylight: 1 };
  const out = ambience(rain, { inside: false });
  const ins = ambience(rain, { inside: true });
  assert.ok(out.rain > ins.rain && ins.rain > 0, 'rain is muffled inside');
  assert.ok(out.wind > ins.wind);
  assert.equal(ins.crows, 0, 'no crows inside');
  assert.equal(ambience({ ...sc, precip: 'none', daylight: 0 }, {}).crows, 0, 'no crows at night');
  assert.ok(ambience({ ...sc, precip: 'none', daylight: 1 }, {}).crows > 0);
  assert.ok(ambience(sc, { home: true, inside: true, fire: true }).fire > 0);
  assert.equal(ambience(sc, { home: false, fire: true }).fire, 0);
  assert.ok(rainHitEvery(rain, true) > 0);
  assert.equal(rainHitEvery(rain, false), 0);
});

test('sounds: settings are clean', () => {
  assert.deepEqual(cleanSettings({ volume: 3, mute: 1 }), { volume: 1, mute: true });
  assert.deepEqual(cleanSettings(null), { volume: 0.7, mute: false });
});
