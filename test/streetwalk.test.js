import { test } from 'node:test';
import assert from 'node:assert/strict';
import { newGame, HOME } from '../src/engine/state.js';
import { streetMove, enterStreet, metersBetween, M_PER_MILE } from '../src/engine/streetwalk.js';
import { walkSpeed } from '../src/engine/travel.js';
import { environment } from '../src/engine/tick.js';
import { whereNow } from '../src/engine/pacer.js';

const strong = (s) => { s.player.weak = false; s.player.energyMax = 100; s.player.energy = 100; s.player.food = s.player.water = s.player.warmth = 90; s.weather.type = 'cloudy'; s.time = 2 * 1440 + 11 * 60; };
const east = (p, m) => ({ lat: p.lat, lon: p.lon + m / (111320 * Math.cos((p.lat * Math.PI) / 180)) });

test('street walking: time follows walkSpeed, in whole minutes, with the rest carried', () => {
  const s = newGame(9); strong(s);
  enterStreet(s);
  assert.equal(s.location.kind, 'street');
  assert.equal(s.location.cell, '0,0');
  const mPerMin = (walkSpeed(s).mph * M_PER_MILE) / 60;
  const t0 = s.time;
  let pos = s.pos;
  for (let i = 0; i < 20; i++) { pos = east(pos, 50); assert.ok(streetMove(s, pos).ok); }
  const expect = Math.floor(1000 / mPerMin);
  assert.ok(Math.abs(s.time - t0 - expect) <= 1, `took ${s.time - t0} min, expected about ${expect}`);
  assert.ok(Math.abs(s.stats.miles - 1000 / M_PER_MILE) < 1e-6);
  assert.equal(s.location.cell, '3,0'); // 1000 m east: cell 3
});

test('street walking: no teleports; the street is outside', () => {
  const s = newGame(10); strong(s);
  const r = streetMove(s, east(HOME, 1000));
  assert.equal(r.ok, false);
  assert.ok(metersBetween(s.pos, HOME) < 1);
  enterStreet(s);
  assert.equal(environment(s, 'rest').outside, true);
  assert.equal(whereNow(s, 'rest'), 'outside');
});

test('street door: enter a place only at its door', async () => {
  const { enterPlaceFromStreet } = await import('../src/engine/streetwalk.js');
  const { setPlaces, allPlaces } = await import('../src/engine/placesdb.js');
  const before = allPlaces();
  const place = { id: 'test_store', name: 'Test Market', cat: 'convenience', lat: HOME.lat + 0.01, lon: HOME.lon };
  setPlaces([...(before || []), place]);
  try {
    const s = newGame(11); strong(s);
    assert.equal(enterPlaceFromStreet(s, 'test_store').ok, false);
    s.pos = { lat: place.lat, lon: place.lon };
    enterStreet(s);
    assert.equal(enterPlaceFromStreet(s, 'test_store').ok, true);
    assert.equal(s.location.kind, 'place');
  } finally { setPlaces(before || []); }
});
