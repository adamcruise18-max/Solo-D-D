import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  createGrid, classify, tierOf, simDue, createStreamer, recordChange, changesFor, applyChanges, hasChange,
  createProfiler, createSaveStore, memoryBackend, checksum, migrate, createSystems, createClock, createEvents,
  createActions, stream, checkContent,
} from '../src/core/index.js';
import { newGame } from '../src/engine/state.js';

const ALOHA = { lat: 45.4826, lon: -122.8738 };

// ---------- cells ----------
test('cells: a position maps to one cell and back to its centre', () => {
  const g = createGrid({ origin: ALOHA, cellMeters: 256 });
  const c = g.cellAt(ALOHA);
  assert.equal(c.key, '0,0');
  const ctr = g.center('3,-2');
  assert.equal(g.cellAt(ctr).key, '3,-2');
  assert.ok(g.inArea('0,0'));
  assert.ok(!g.inArea('500,0'), '80 miles away is outside the 15 mile area');
});

test('cells: rings give tiers; 3x3 active+near, 5x5 loaded', () => {
  const g = createGrid({ origin: ALOHA, cellMeters: 256 });
  const t = classify(g, ALOHA);
  assert.equal(t.get('0,0'), 'active');
  assert.equal(t.get('1,1'), 'near');
  assert.equal(t.get('-2,0'), 'mid');
  assert.equal(t.get('3,0'), 'edge');
  assert.equal(t.get('4,4'), 'far');
  assert.equal(tierOf(t, '20,20'), 'dormant');
  const loaded = [...t.values()].filter((x) => ['active', 'near', 'mid'].includes(x)).length;
  assert.equal(loaded, 25);
});

test('cells: cells ahead of the player load early (prefetch)', () => {
  const g = createGrid({ origin: ALOHA, cellMeters: 256 });
  const still = classify(g, ALOHA);
  const moving = classify(g, ALOHA, { heading: { x: 1, z: 0 } }); // walking east
  assert.equal(still.get('3,0'), 'edge');
  assert.equal(moving.get('3,0'), 'mid');
  assert.equal(moving.get('-3,0'), 'edge', 'cells behind do not load early');
});

test('cells: reduced and abstract simulation run less often', () => {
  assert.equal(simDue('active', 100, 95), true);
  assert.equal(simDue('mid', 100, 50), false);
  assert.equal(simDue('mid', 120, 50), true);
  assert.equal(simDue('far', 1000, 0), false);
  assert.equal(simDue('far', 1500, 0), true);
  assert.equal(simDue('dormant', 99999, 0), false);
});

// ---------- streamer ----------
test('streamer: loads wanted cells, active first; unloads when the player moves away', async () => {
  const g = createGrid({ origin: ALOHA, cellMeters: 256 });
  const order = [];
  const freed = [];
  const s = createStreamer({
    load: async (k) => { order.push(k); return { key: k }; },
    unload: (k) => freed.push(k),
    maxInFlight: 2,
  });
  s.update(classify(g, ALOHA));
  await s.idle();
  assert.equal(order[0], '0,0', 'the player cell loads first');
  assert.equal(s.loadedKeys().length, 25);
  assert.deepEqual(s.get('0,0'), { key: '0,0' });
  // Walk 10 cells east: old cells unload, new cells load.
  const far = g.center('10,0');
  s.update(classify(g, far));
  await s.idle();
  assert.equal(s.status('0,0'), 'unloaded');
  assert.ok(freed.includes('0,0'));
  assert.equal(s.status('10,0'), 'loaded');
  assert.equal(s.loadedKeys().length, 25);
});

test('streamer: the unload ring is one wider than the load ring (no load/unload flicker)', async () => {
  const g = createGrid({ origin: ALOHA, cellMeters: 256 });
  const s = createStreamer({ load: async (k) => k });
  s.update(classify(g, ALOHA));
  await s.idle();
  s.update(classify(g, g.center('1,0'))); // one cell east: '-2,0' is now edge
  await s.idle();
  assert.equal(s.status('-2,0'), 'loaded', 'edge cells stay loaded');
  s.update(classify(g, g.center('3,0'))); // now '-2,0' is far
  await s.idle();
  assert.equal(s.status('-2,0'), 'unloaded');
});

test('streamer: a budget drops the lowest priority cells, never the player cell', async () => {
  const g = createGrid({ origin: ALOHA, cellMeters: 256 });
  const s = createStreamer({ load: async (k) => k, maxLoaded: 9 });
  s.update(classify(g, ALOHA));
  await s.idle();
  assert.ok(s.loadedKeys().length <= 9);
  assert.equal(s.status('0,0'), 'loaded');
  const mids = s.loadedKeys().filter((k) => tierOf(classify(g, ALOHA), k) === 'mid');
  assert.equal(mids.length, 0, 'mid cells go first');
});

test('streamer: a failed load is counted and retried on the next update', async () => {
  const g = createGrid({ origin: ALOHA, cellMeters: 256 });
  let fail = true;
  const s = createStreamer({ load: async (k) => { if (k === '0,0' && fail) throw new Error('disk'); return k; } });
  s.update(classify(g, ALOHA));
  await s.idle();
  assert.equal(s.report().failed, 1);
  assert.equal(s.status('0,0'), 'unloaded');
  fail = false;
  s.update(classify(g, ALOHA));
  await s.idle();
  assert.equal(s.status('0,0'), 'loaded');
});

test('streamer: rapid travel across many cells stays inside the budget', async () => {
  const g = createGrid({ origin: ALOHA, cellMeters: 256 });
  const live = new Set();
  let peak = 0;
  const s = createStreamer({
    load: async (k) => { live.add(k); peak = Math.max(peak, live.size); return k; },
    unload: (k) => live.delete(k),
    maxLoaded: 40,
  });
  for (let i = 0; i < 200; i++) {
    s.update(classify(g, g.center(`${i},${Math.round(i / 3)}`), { heading: { x: 3, z: 1 } }));
    if (i % 5 === 0) await s.idle();
  }
  await s.idle();
  assert.ok(peak <= 40 + 4, `peak ${peak} cells in memory`);
  assert.equal(live.size, s.loadedKeys().length, 'every loaded cell is freed exactly once');
});

// ---------- change records (milestone 4) ----------
test('changes: take an item, leave, unload, come back: the change is still there', () => {
  const state = newGame(8);
  const base = () => ({ objects: { 'shelf1:can': { item: 'canned_food' }, door: { open: false }, cab: { contents: { first_aid: 1 } } } });
  recordChange(state, 'place:n1', { o: 'shelf1:can', k: 'taken' });
  recordChange(state, 'place:n1', { o: 'door', k: 'opened' });
  recordChange(state, 'place:n1', { o: 'cab', k: 'emptied' });
  recordChange(state, 'place:n1', { o: '*', k: 'discovered' });
  // "Unload": nothing of the place is kept except the change records in the save.
  const saved = JSON.parse(JSON.stringify(state));
  const again = applyChanges(base(), changesFor(saved, 'place:n1'));
  assert.equal(again.objects['shelf1:can'].taken, true);
  assert.equal(again.objects.door.open, true);
  assert.deepEqual(again.objects.cab.contents, {});
  assert.equal(again.discovered, true);
  assert.ok(hasChange(saved, 'place:n1', 'door', 'opened'));
  assert.equal(base().objects.door.open, false, 'the base is made again, not changed');
});

test('changes: a later record replaces an earlier one; unknown objects are skipped', () => {
  const state = { time: 10 };
  recordChange(state, 'h:1', { o: 'door', k: 'opened' });
  recordChange(state, 'h:1', { o: 'door', k: 'closed' });
  assert.equal(changesFor(state, 'h:1').length, 1);
  const r = applyChanges({ objects: { door: {} } }, [...changesFor(state, 'h:1'), { o: 'ghost', k: 'taken' }]);
  assert.equal(r.objects.door.open, false);
  assert.throws(() => recordChange(state, 'h:1', { o: 'x', k: 'eaten' }), /Unknown change kind/);
});

// ---------- profiler ----------
test('profiler: frame time, sections over budget, counters and memory', () => {
  let t = 0;
  const p = createProfiler({ now: () => t, memoryBudgetMB: 512 });
  p.startFrame();
  p.begin('simulation'); t += 7; p.end('simulation'); // over its 5 ms budget
  p.time('render', () => { t += 30; });
  p.count('render.drawCalls', 80);
  const f = p.endFrame();
  assert.equal(f.ms, 37);
  assert.equal(f.overBudget, true);
  assert.equal(f.worst.section, 'render');
  assert.deepEqual(f.overSections.map((o) => o.section), ['simulation', 'render']);
  assert.equal(f.counters['render.drawCalls'], 80);
  p.memory('render.textures', 300 * 2 ** 20);
  p.memory('render.meshes', 100 * 2 ** 20);
  p.memory('streaming.cells', 200 * 2 ** 20);
  const m = p.memoryReport();
  assert.equal(m.bySubsystem.render, 400 * 2 ** 20);
  assert.equal(m.overBudget, true, '600 MB is over the 512 MB test budget');
  assert.throws(() => p.end('nope'), /without begin/);
});

// ---------- safe saves ----------
test('saves: a broken newest save falls back to the last good one', async () => {
  const backend = memoryBackend();
  const store = createSaveStore(backend);
  const g1 = newGame(21);
  await store.save('run', g1);
  const g2 = { ...g1, time: g1.time + 60 };
  await store.save('run', g2);
  assert.equal((await store.load('run')).time, g2.time);
  // Simulate a cut write: the newest record is changed after the checksum.
  const bad = await backend.get('run');
  bad.state.time = 1;
  await backend.set('run', bad);
  const back = await store.load('run');
  assert.equal(back.time, g1.time);
  assert.equal(store.lastLoad.from, 'previous');
  assert.match(store.lastLoad.problem, /checksum/);
  assert.equal(checksum(g1), checksum(JSON.parse(JSON.stringify(g1))));
  assert.deepEqual((await store.list()).map((x) => x.slot), ['run']);
});

test('saves: many saves in a row keep one good copy and one previous copy', async () => {
  const backend = memoryBackend();
  const store = createSaveStore(backend);
  const g = newGame(4);
  for (let i = 0; i < 50; i++) { g.time += 10; await store.save('run', g); }
  assert.deepEqual((await backend.keys()).sort(), ['run', 'run~prev']);
  assert.equal((await store.load('run')).time, g.time);
  await store.remove('run');
  assert.deepEqual(await backend.keys(), []);
});

// ---------- reviewer findings ----------
test('saves: an old save with no systemVersions keeps its values (no init over them)', () => {
  const systems = createSystems([{ id: 'vitals', init: (s) => { s.player = { food: 40 }; } }]);
  const old = { version: 1, player: { food: 3 }, home: {} };
  const up = migrate(old, { systems });
  assert.equal(up.player.food, 3);
  assert.deepEqual(up.systemVersions, { vitals: 1 });
});

test('saves: a string or missing version is read as a number', () => {
  assert.equal(migrate({ version: '1', player: {}, home: {} }, { version: 2, gameMigrations: { 2: (s) => s } }).version, 2);
  assert.equal(migrate({ player: {}, home: {} }, { version: 1 }).version, 1);
  assert.throws(() => migrate({ version: 'x', player: {}, home: {} }), /Bad save version/);
});

test('clock: every system finishes the step in which the player dies; death sends an event', () => {
  const ran = [];
  const systems = createSystems([
    { id: 'vitals', order: 1, step: (s) => { ran.push('vitals'); s.dead = { cause: 'cold', days: 1 }; } },
    { id: 'home', order: 2, step: () => ran.push('home') },
  ]);
  const events = createEvents();
  createClock({ systems, events }).advance({ time: 600 }, 60);
  assert.deepEqual(ran, ['vitals', 'home']);
  assert.equal(events.drain().filter((e) => e.type === 'player.died').length, 1);
});

test('actions: an empty reason means allowed, the same in preview and run; run gets the clock', () => {
  let got = null;
  const acts = createActions([{ id: 'a', when: () => '', run: (s, arg, ctx) => { got = ctx; } }], { clock: 'C' });
  assert.equal(acts.preview({}, 'a').disabled, null);
  assert.equal(acts.run({}, 'a').ok, true);
  assert.equal(got.clock, 'C');
});

test('random streams: still work after the state is copied; need a seed', () => {
  const s = { seed: 2 };
  const r = stream(s, 'a');
  r();
  const copy = JSON.parse(JSON.stringify(s));
  s.rngStreams = JSON.parse(JSON.stringify(copy.rngStreams)); // replaced object, as after a load
  const x = r(); // the old function must use the new object
  assert.equal(stream(copy, 'a')(), x);
  assert.equal(s.rngStreams.a, copy.rngStreams.a);
  assert.throws(() => stream({}, 'a'), /needs a game seed/);
});

test('content: no crash on null entries; projects with no id are named', () => {
  const p = checkContent({ items: {}, categories: { a: null }, projects: [{ hours: 1 }] });
  assert.ok(p.some((x) => x.includes('place type a: is not an object')));
  assert.ok(p.some((x) => x.includes('project #0: has no id')));
});
