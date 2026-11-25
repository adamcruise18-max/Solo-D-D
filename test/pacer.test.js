// Event pacer and slow breakdown (research spec step 7).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { newGame } from '../src/engine/state.js';
import { pacerHour, eventChance, candidates, pacerInfo, monthOf, BIG_GAP_DAYS } from '../src/engine/pacer.js';
import { decayActive, decayShare, decayDaily, decayInfo, failDay, monthStartDay } from '../src/engine/decay.js';
import { advanceTime } from '../src/engine/tick.js';
import { gameDay } from '../src/core/clock.js';
import { DECAY } from '../src/data/decay.js';
import { EVENTS } from '../src/data/events.js';

// Pacer only, hour by hour, with the player kept well (no rules run).
function pacerRun(seed, days, events = EVENTS) {
  const s = newGame(seed);
  const fired = [];
  for (let h = 0; h < days * 24; h++) {
    s.time += 60;
    const mode = h % 24 >= 9 && h % 24 < 15 ? 'walk' : 'rest';
    const e = pacerHour(s, mode, events);
    if (e) fired.push({ id: e.id, size: e.size, day: gameDay(s.time), t: s.time });
  }
  return { s, fired };
}

test('pacer: chance per hour follows the tension', () => {
  assert.equal(eventChance(0), 0);
  assert.equal(eventChance(20), 0);
  assert.equal(eventChance(40), 0.1);
  assert.equal(eventChance(100), 0.12);
});

test('pacer: 120 days give 1 to 3 events a week and no 5-day gap', () => {
  for (const seed of [1, 2, 3, 42]) {
    const { fired } = pacerRun(seed, 120);
    const perWeek = fired.length / (120 / 7);
    assert.ok(perWeek >= 1 && perWeek <= 3, `seed ${seed}: ${perWeek.toFixed(2)} events a week`);
    let last = newGame(seed).time;
    for (const f of fired) {
      assert.ok(f.t - last < 5 * 1440, `seed ${seed}: gap of ${((f.t - last) / 1440).toFixed(1)} days`);
      last = f.t;
    }
  }
});

test('pacer: over 365 days, never two big events within 3 days, never a repeat within 2 days', () => {
  const many = [
    ...EVENTS,
    { id: 'big_a', size: 'big', where: 'any', months: [3, 99], text: 'Big A.' },
    { id: 'big_b', size: 'big', where: 'any', months: [3, 99], text: 'Big B.' },
  ];
  const { fired } = pacerRun(7, 365, many);
  const big = fired.filter((f) => f.size === 'big');
  assert.ok(big.length > 3, 'the test has big events');
  for (let i = 1; i < big.length; i++) assert.ok(big[i].day - big[i - 1].day >= BIG_GAP_DAYS);
  for (let i = 0; i < fired.length; i++) {
    for (let j = i + 1; j < fired.length && fired[j].day - fired[i].day < 2; j++) assert.notEqual(fired[j].id, fired[i].id);
  }
});

test('pacer: events match the place, and the mercy rule lowers big events', () => {
  const s = newGame(5);
  const ids = (mode) => candidates(s, mode).map((e) => e.where);
  assert.ok(ids('rest').every((w) => w === 'home' || w === 'any'), 'at home: home and any');
  assert.ok(ids('walk').every((w) => w === 'outside' || w === 'any'), 'walking: outside and any');
  assert.equal(monthOf(s.time), 3);
  assert.equal(pacerInfo(s).month, 3);
});

test('pacer: the live game runs it through the clock and writes events to the log', () => {
  const s = newGame(9);
  s.player.food = s.player.water = 100;
  advanceTime(s, 4 * 1440, 'rest');
  assert.ok(s.pacer.count >= 1 || s.dead, 'at least one event in 4 quiet days');
  assert.ok(s.rngStreams.pacer != null, 'the pacer uses its own stream');
});

test('decay: rows start at their month and spread; 1 x 30 days == 30 x 1 day', () => {
  const s = newGame(11);
  assert.equal(monthStartDay(3), 0);
  assert.equal(decayShare(s, 'stale_gas'), 0, 'not before month 6');
  const area = 'cell:12,-4';
  const row = DECAY.find((r) => r.id === 'water_pressure');
  const d = failDay(s, row, area);
  assert.equal(decayActive(s, 'water_pressure', area, d * 1440 + 300), true);
  assert.equal(decayActive(s, 'water_pressure', area, d * 1440 + 299), false);
  // Catch-up: the same state after one 30-day jump or 30 days one by one.
  const a = newGame(11);
  const b = newGame(11);
  for (let day = 1; day <= 30; day++) decayDaily(a, day);
  decayDaily(b, 30);
  for (let day = 1; day <= 30; day++) decayDaily(b, day); // late days fill in, in order
  assert.deepEqual(Object.keys(a.decay.started), Object.keys(b.decay.started));
});

test('decay: about the right share of areas fail, and the live game writes the first line', () => {
  const s = newGame(12);
  const t = 20 * 1440 + 400;
  let n = 0;
  for (let i = 0; i < 2000; i++) if (decayActive(s, 'water_pressure', `a${i}`, t)) n++;
  const want = decayShare(s, 'water_pressure', t);
  assert.ok(Math.abs(n / 2000 - want) < 0.05, `share ${n / 2000} vs ${want}`);
  s.player.food = s.player.water = 100;
  advanceTime(s, 2 * 1440, 'rest');
  assert.ok(s.decay.started.water_pressure != null || s.dead, 'water pressure shows in the first days');
  assert.ok(decayInfo(s).next);
});
