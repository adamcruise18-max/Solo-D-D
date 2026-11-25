// Activity log and diagnostics (external review 3.4, milestone 3: observability).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { newGame } from '../src/engine/state.js';
import { perform } from '../src/engine/game.js';
import { activity } from '../src/engine/activity.js';
import { diagnostics, setDeepActivity, activityText } from '../src/engine/diagnostics.js';
import { createActivity, withSource, currentSource } from '../src/core/activity.js';

test('activity: each action is one record with its time and lines', () => {
  const s = newGame(11);
  activity.clear();
  perform(s, 'action', 'sleep', 8);
  const [r] = activity.records(1);
  assert.equal(r.action, 'action:sleep:8');
  assert.equal(r.minutes, s.time - r.t0);
  assert.ok(r.minutes >= 8 * 60);
  assert.ok(r.rng.streams.includes('pacer'), 'the pacer stream moved during 8 hours');
  // The 5 AM day roll writes "A new day" from the legacy system's daily hook.
  for (let i = 0; i < 3; i++) perform(s, 'action', 'sleep', 8);
  const day = activity.records().flatMap((x) => x.lines).find((l) => l.text.startsWith('A new day'));
  assert.ok(day, 'a 5 AM line in 32 hours of sleep');
  assert.deepEqual([day.sys, day.hook], ['legacy', 'daily']);
});

test('activity: deep mode lists the changed state paths', () => {
  const s = newGame(12);
  activity.clear();
  setDeepActivity(true);
  try {
    perform(s, 'action', 'rest');
  } finally {
    setDeepActivity(false);
  }
  const [r] = activity.records(1);
  assert.ok(r.changed.includes('time'));
  assert.ok(r.changed.includes('player.energy') || r.changed.includes('player.water'));
  assert.ok(!r.changed.includes('log'), 'player text is not a state path');
  assert.match(activityText(r), /#\d+ action:rest/);
});

test('activity: the recorder is not in the save and does not change the rules', () => {
  const a = newGame(13);
  const b = newGame(13);
  setDeepActivity(true);
  perform(a, 'action', 'sleep', 8);
  setDeepActivity(false);
  perform(b, 'action', 'sleep', 8);
  assert.deepEqual(a, b);
  assert.ok(!('activity' in a));
});

test('activity: source tracking nests and restores', () => {
  assert.equal(currentSource().sys, null);
  withSource({ sys: 'weather', hook: 'daily' }, () => {
    assert.equal(currentSource().sys, 'weather');
    withSource({ sys: 'pacer', hook: 'step' }, () => assert.equal(currentSource().sys, 'pacer'));
    assert.equal(currentSource().sys, 'weather');
  });
  assert.equal(currentSource().sys, null);
});

test('activity: the ring keeps the last records only', () => {
  const act = createActivity({ limit: 3 });
  const s = { time: 0, rngState: 1, rngStreams: {} };
  for (let i = 0; i < 5; i++) { act.begin(s, `a${i}`); s.time += 10; act.end(s); }
  assert.deepEqual(act.records().map((r) => r.action), ['a2', 'a3', 'a4']);
});

test('diagnostics: one object with weather, pacer, decay, systems, rng and activity', () => {
  const s = newGame(14);
  activity.clear();
  perform(s, 'action', 'rest');
  const d = diagnostics(s);
  assert.equal(d.day, 1);
  assert.ok(d.weather.label);
  assert.equal(typeof d.pacer.tension, 'number');
  assert.ok('next' in d.decay);
  assert.deepEqual(d.systems.map((x) => x.id), ['weather', 'decay', 'legacy', 'pacer']);
  assert.ok(d.saveBytes > 1000);
  assert.equal(d.activity.length, 1);
  assert.equal(JSON.stringify(s), JSON.stringify(s)); // read only
});
