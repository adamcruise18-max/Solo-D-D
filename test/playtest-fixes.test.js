// Fixes from playtest bug list 1 (research, 700 bot runs).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { newGame } from '../src/engine/state.js';
import { tickStep, startInfection } from '../src/engine/tick.js';

function fed(s) { s.player.food = s.player.water = s.player.warmth = s.player.energy = 90; }

test('B7: once antibiotics start, an infection does no more damage and health refills', () => {
  const a = newGame(71);
  const b = newGame(71);
  for (const s of [a, b]) { startInfection(s, 'bite'); s.player.illness.infection.ageH = 60; s.player.health = 60; }
  b.player.illness.infection.abxH = 0;
  for (let i = 0; i < 60; i++) { fed(a); fed(b); tickStep(a, 1 / 6, 'rest'); tickStep(b, 1 / 6, 'rest'); }
  assert.ok(a.player.health < 60, `untreated ${a.player.health}`);
  assert.ok(b.player.health >= 60, `treated ${b.player.health}`);
});

import { pacerHour, ASLEEP_RATE } from '../src/engine/pacer.js';
import { rollZone, SOAKS } from '../src/engine/loot.js';
import { environment } from '../src/engine/tick.js';
import { failDay } from '../src/engine/decay.js';
import { DECAY } from '../src/data/decay.js';
import { hasChange } from '../src/core/changes.js';
import { travel, tripMiles, routeMiles, roadBlocked, phoneSignal, TREE_DETOUR, TREE_DETOUR_PHONE } from '../src/engine/travel.js';

test('pacer: events are rarer asleep', () => {
  const count = (mode) => {
    const s = newGame(73);
    let n = 0;
    for (let h = 0; h < 4000; h++) { s.pacer.tension = 70; if (pacerHour(s, mode)) n++; }
    return n;
  };
  const awake = count('rest');
  const asleep = count('sleep');
  assert.ok(ASLEEP_RATE < 1);
  assert.ok(asleep < awake * 0.7, `${asleep} asleep vs ${awake} awake`);
});

const row = (id) => DECAY.find((r) => r.id === id);
// The first area key (of many tried) whose row has failed by `day`, and one that has not.
function areas(s, id, prefix, day) {
  let on = null, off = null;
  for (let i = 0; i < 4000 && (!on || !off); i++) {
    const k = `${prefix}${i}`;
    if (failDay(s, row(id), k) <= day) on ||= k; else off ||= k;
  }
  return { on, off };
}

test('roof leaks: paper is soaked in the loot; a leaking place in rain is cold and damp', () => {
  const s = newGame(74);
  s.time = 600 * 1440;
  const { on, off } = areas(s, 'roof_leaks', 'p', 600);
  let soakedOn = 0, soakedOff = 0;
  for (let z = 0; z < 300; z++) {
    for (const id of Object.keys(rollZone(s, on, 'house', 1, z, 5))) if (SOAKS.has(id)) soakedOn++;
    for (const id of Object.keys(rollZone(s, off, 'house', 1, z, 5))) if (SOAKS.has(id)) soakedOff++;
  }
  assert.equal(soakedOn, 0);
  assert.ok(soakedOff > 0);
  s.weather.type = 'rain';
  s.location = { kind: 'place', id: on };
  const leak = environment(s, 'rest');
  s.location = { kind: 'place', id: off };
  const dry = environment(s, 'rest');
  assert.equal(leak.leak, true);
  assert.ok(leak.temp < dry.temp);
});

test('trees on roads: a blocked road is a longer walk, shorter with a phone signal; recorded as a world change', () => {
  const s = newGame(75);
  s.time = 900 * 1440;
  const a = areas(s, 'trees_on_roads', 'road:x', 900);
  const on = a.on.slice(5), off = a.off.slice(5);
  const dest = (id) => ({ id, lat: s.pos.lat + 0.03, lon: s.pos.lon });
  assert.ok(roadBlocked(s, dest(on)) && !roadBlocked(s, dest(off)));
  const base = routeMiles(s.pos, dest(on));
  assert.ok(Math.abs(tripMiles(s, dest(on)) - base * TREE_DETOUR) < 1e-9);
  s.carried.phone = 1;
  const t900 = s.time;
  s.time = 10 * 1440;
  assert.equal(phoneSignal(s), true, 'towers work at the start');
  s.time = t900;
  const want = phoneSignal(s) ? TREE_DETOUR_PHONE : TREE_DETOUR;
  assert.ok(Math.abs(tripMiles(s, dest(on)) - base * want) < 1e-9);
  fed(s);
  travel(s, dest(on), 'the store');
  assert.ok(hasChange(s, `road:${on}`, 'tree', 'set'));
});

import { airTemp } from '../src/engine/world.js';
import { weatherSystem } from '../src/engine/systems.js';

test('temperature: a smooth curve (no jump at midnight or 5 AM); the night low is the forecast low', () => {
  for (const seed of [81, 82, 83]) {
    const s = newGame(seed);
    let prev = null;
    let forecast = null; // "low tonight", read in the evening
    let nightMin = Infinity;
    const t0 = Math.ceil(s.time / 10) * 10;
    for (let t = t0; t < t0 + 60 * 1440; t += 10) {
      const m = t % 1440;
      if (m === 300) weatherSystem.daily(s, Math.floor(t / 1440)); // 5 AM: the weather rolls
      if (m === 18 * 60) { forecast = s.weather.nextLow; nightMin = Infinity; }
      const a = airTemp(s, t);
      if (forecast != null && (m >= 18 * 60 || m < 11 * 60)) nightMin = Math.min(nightMin, a);
      if (m === 11 * 60 && forecast != null) assert.ok(Math.abs(nightMin - forecast) <= 1, `seed ${seed} day ${Math.floor(t / 1440)}: night min ${nightMin.toFixed(1)} vs forecast ${forecast}`);
      if (prev != null) assert.ok(Math.abs(a - prev) < 2.5, `seed ${seed} t ${t} (${m} min): ${prev.toFixed(1)} -> ${a.toFixed(1)}`);
      prev = a;
    }
  }
});

import { advanceTime, WAKE_AT } from '../src/engine/tick.js';

test('sleep: you wake when water falls past the danger line, not hours later', () => {
  const s = newGame(84);
  s.player.water = WAKE_AT.water + 3;
  s.player.food = s.player.warmth = s.player.health = 90;
  const t0 = s.time;
  advanceTime(s, 8 * 60, 'sleep');
  assert.ok(!s.dead);
  assert.ok(s.time - t0 < 8 * 60, `slept ${(s.time - t0) / 60} h`);
  assert.ok(s.player.water < WAKE_AT.water);
  assert.match(s.log[s.log.length - 1].text, /dry mouth/);
  assert.equal(s._sleepFrom, undefined);
  assert.equal(s._stop, undefined);
  // Already below the line: the sleep goes on (no wake loop).
  const t1 = s.time;
  advanceTime(s, 60, 'sleep');
  assert.equal(s.time - t1, 60);
});
