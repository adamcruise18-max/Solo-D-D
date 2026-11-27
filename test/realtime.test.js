import test from 'node:test';
import assert from 'node:assert/strict';
import { createRealtime, TIME_SCALE, MAX_FRAME_MS } from '../src/core/realtime.js';
import { createGameRealtime } from '../src/engine/realtime.js';
import { newGame } from '../src/engine/state.js';
import { advanceTime } from '../src/engine/tick.js';

const counter = () => { const calls = []; return { calls, advance: (s, m, mode) => { s.time += m; calls.push([m, mode]); } }; };

test('real time: 12x by default, one game day is two real hours', () => {
  assert.equal(TIME_SCALE, 12);
  const c = counter(); const rt = createRealtime({ advance: c.advance }); const s = { time: 0 };
  for (let i = 0; i < 2 * 3600 * 10; i++) rt.tick(s, 100); // 2 real hours in 100 ms frames
  assert.equal(Math.round(s.time), 1440);
});

test('real time: the frame rate does not change the game (30 vs 144 FPS)', () => {
  const a = createGameRealtime(); const b = createGameRealtime();
  const sa = newGame(7); const sb = newGame(7);
  for (let i = 0; i < 30 * 600; i++) a.tick(sa, 1000 / 30); // 10 real minutes
  for (let i = 0; i < 144 * 600; i++) b.tick(sb, 1000 / 144);
  assert.equal(a.total(), b.total());
  assert.equal(sa.time, sb.time);
  assert.deepEqual(sa.player, sb.player);
  assert.equal(sa.rngState, sb.rngState);
});

test('real time: the same as the turn-based clock for the same minutes', () => {
  const rt = createGameRealtime(); const s1 = newGame(11); const s2 = newGame(11);
  for (let i = 0; i < 60 * 300; i++) rt.tick(s1, 1000 / 60); // 5 real minutes = 60 game minutes
  advanceTime(s2, rt.total(), 'rest');
  assert.equal(rt.total(), 60);
  // 1-minute steps vs 10-minute steps: the same rules; house heat is stepped, so warmth may differ a little.
  for (const k of ['food', 'water', 'warmth', 'energy', 'health', 'morale']) assert.ok(Math.abs(s1.player[k] - s2.player[k]) < 0.05, k);
  assert.equal(s1.time, s2.time);
});

test('real time: pause stops the clock; long frames are capped', () => {
  const c = counter(); const rt = createRealtime({ advance: c.advance }); const s = { time: 0 };
  rt.pause('menu'); rt.pause('map');
  rt.tick(s, 60000); assert.equal(s.time, 0);
  rt.resume('menu'); rt.tick(s, 60000); assert.equal(s.time, 0, 'still paused by the map');
  rt.resume('map');
  rt.tick(s, 60000); // a hidden tab: counts as MAX_FRAME_MS only
  assert.ok(s.time <= (MAX_FRAME_MS / 1000) * TIME_SCALE / 60 + 1e-9);
});

test('real time: mode goes to the clock (walking uses more energy than standing)', () => {
  const stand = createGameRealtime(); const walk = createGameRealtime(); walk.setMode('walk');
  const a = newGame(3); const b = newGame(3);
  for (let i = 0; i < 60 * 600; i++) { stand.tick(a, 1000 / 60); walk.tick(b, 1000 / 60); }
  assert.ok(b.player.energy < a.player.energy);
});

test('real time: sleep fast-forward spends the hours quickly and reports the end', () => {
  const rt = createGameRealtime(); const s = newGame(5);
  const t0 = s.time; let end = null;
  rt.fastForward(8 * 60, 'sleep', {}, (r) => { end = r; });
  let frames = 0;
  while (rt.isFast() && frames < 10000) { rt.tick(s, 1000 / 60); frames++; }
  assert.ok(end, 'done ran');
  assert.ok(frames < 60 * 20, `8 game hours in under 20 real seconds (${frames} frames)`);
  if (!end.stopped) assert.equal(Math.round(s.time - t0), 480);
  assert.ok(s.player.energy > 0);
});

test('real time: a danger line wakes you from fast-forward sleep', () => {
  const rt = createGameRealtime(); const s = newGame(5);
  s.player.water = 16; // the wake line is 15
  let end = null; rt.fastForward(12 * 60, 'sleep', {}, (r) => { end = r; });
  while (rt.isFast()) rt.tick(s, 1000 / 60);
  assert.ok(end.stopped && end.left > 0, JSON.stringify(end));
});
