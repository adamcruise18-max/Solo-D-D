import test from 'node:test';
import assert from 'node:assert/strict';
import { newGame } from '../src/engine/state.js';
import { startHazard, hazardOn, activeHazards, HAZARDS } from '../src/engine/hazards.js';
import { walkSpeed } from '../src/engine/travel.js';
import { airTemp } from '../src/engine/world.js';
import { weatherEffects } from '../src/engine/preview.js';
import { listActions } from '../src/engine/actions.js';
import { EVENTS } from '../src/data/events.js';
import { decayActive, failDay } from '../src/engine/decay.js';
import { DECAY } from '../src/data/decay.js';

test('hazards: a walk hazard slows walking until it ends', () => {
  const s = newGame(5);
  const base = walkSpeed(s).mph;
  startHazard(s, 'feral_dogs', 24);
  assert.ok(hazardOn(s, 'feral_dogs'));
  assert.ok(Math.abs(walkSpeed(s).mph - base * HAZARDS.feral_dogs.walk) < 1e-9);
  assert.ok(weatherEffects(s).some((e) => e.id === 'hz_feral_dogs'));
  s.time += 24 * 60;
  assert.equal(hazardOn(s, 'feral_dogs'), false);
  assert.ok(Math.abs(walkSpeed(s).mph - base) < 1e-9);
});

test('hazards: a cold snap makes the air colder, then ends', () => {
  const s = newGame(6);
  const t = s.time;
  const before = airTemp(s, t);
  startHazard(s, 'cold_snap', 72);
  assert.equal(Math.round(before - airTemp(s, t)), HAZARDS.cold_snap.colder);
  assert.equal(airTemp(s, t + 73 * 60), airTemp({ ...s, flags: {} }, t + 73 * 60));
  assert.equal(activeHazards(s, t + 73 * 60).length, 0);
});

test('events: every event is valid and its effect runs on a new game', () => {
  const ids = new Set();
  for (const e of EVENTS) {
    assert.ok(!ids.has(e.id), `duplicate ${e.id}`); ids.add(e.id);
    assert.ok(['small', 'medium', 'big'].includes(e.size), e.id);
    assert.ok(['home', 'outside', 'inside', 'any', 'asleep'].includes(e.where), e.id);
    assert.ok(e.text && e.text.length < 260, e.id);
    const s = newGame(7);
    s.dog.stage = 'joined';
    if (e.when) e.when(s, { mode: 'walk' });
    if (e.apply) e.apply(s, { rng: () => 0.5, mode: 'walk' });
  }
  assert.ok(EVENTS.length >= 20);
});

test('decay: the home tap stops when water pressure fails at home', () => {
  const s = newGame(8);
  s.home.tapWorks = true;
  const row = DECAY.find((r) => r.id === 'water_pressure');
  const day = failDay(s, row, 'home');
  s.time = day * 1440 + 9 * 60;
  assert.ok(decayActive(s, 'water_pressure', 'home'));
  assert.ok(!listActions(s).some((a) => a.id === 'collect_tap'));
});
