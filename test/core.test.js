import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  createEngine, createEvents, createSystems, defineSystem, createClock, createActions, legacyActions,
  stream, checkContent, migrate, exportSave, importSave, wrapSave, unwrapSave,
  memoryBackend, localStorageBackend, createSaveStore, bestBackend, gameDay,
} from '../src/core/index.js';
import { ITEMS } from '../src/data/items.js';
import { CATEGORIES } from '../src/data/places.js';
import { PROJECTS } from '../src/data/projects.js';
import { newGame } from '../src/engine/state.js';
import { listActions, doAction } from '../src/engine/actions.js';

// ---------- events ----------
test('events: listeners get events; drain returns them once', () => {
  const ev = createEvents();
  const got = [];
  const stop = ev.on('item.taken', (e) => got.push(e.id));
  ev.on('*', (e) => got.push('*' + e.type));
  ev.emit('item.taken', { id: 'snacks' });
  stop();
  ev.emit('item.taken', { id: 'lighter' });
  assert.deepEqual(got, ['snacks', '*item.taken', '*item.taken']);
  assert.equal(ev.drain().length, 2);
  assert.equal(ev.drain().length, 0);
});

test('events: a broken listener does not stop the others', () => {
  const ev = createEvents();
  const orig = console.error; console.error = () => {};
  let ok = false;
  ev.on('x', () => { throw new Error('boom'); });
  ev.on('x', () => { ok = true; });
  ev.emit('x');
  console.error = orig;
  assert.ok(ok);
});

// ---------- systems ----------
test('systems: bad shapes are refused', () => {
  assert.throws(() => defineSystem({}), /needs an id/);
  assert.throws(() => defineSystem({ id: 'a', stepp() {} }), /unknown field "stepp"/);
  assert.throws(() => defineSystem({ id: 'a', step: 3 }), /step must be a function/);
  assert.throws(() => defineSystem({ id: 'a', version: 2 }), /no migration to version 2/);
  const list = createSystems([{ id: 'a' }]);
  assert.throws(() => list.add({ id: 'a' }), /already in the list/);
});

test('systems: run in order, init records versions', () => {
  const calls = [];
  const list = createSystems([
    { id: 'late', order: 50, step: () => calls.push('late'), init: (s) => { s.late = true; } },
    { id: 'early', order: 10, step: () => calls.push('early') },
  ]);
  const s = {};
  list.init(s);
  list.step(s, 1);
  assert.deepEqual(calls, ['early', 'late']);
  assert.deepEqual(s.systemVersions, { early: 1, late: 1 });
  assert.equal(s.late, true);
});

// ---------- clock ----------
test('clock: 10 minute steps, day change at 5 AM before the step', () => {
  const calls = [];
  const systems = createSystems([{
    id: 'rec',
    step: (s, dt) => calls.push(['step', s.time, Math.round(dt * 60)]),
    daily: (s, day) => calls.push(['daily', s.time, day]),
  }]);
  const events = createEvents();
  const clock = createClock({ systems, events });
  const s = { time: 4 * 60 + 45 }; // day 0, 4:45 AM
  clock.advance(s, 25);
  assert.deepEqual(calls, [
    ['step', 4 * 60 + 55, 10],
    ['daily', 5 * 60 + 5, 0],
    ['step', 5 * 60 + 5, 10],
    ['step', 5 * 60 + 10, 5],
  ]);
  assert.equal(events.drain().filter((e) => e.type === 'day.start').length, 1);
  assert.equal(gameDay(5 * 60), 0);
  assert.equal(gameDay(5 * 60 + 1440), 1);
});

test('clock: stops when the player dies, refuses bad minutes', () => {
  let steps = 0;
  const systems = createSystems([{ id: 'kill', step: (s) => { steps++; if (steps === 2) s.dead = { cause: 'x' }; } }]);
  const clock = createClock({ systems });
  const s = { time: 600 };
  clock.advance(s, 120);
  assert.equal(steps, 2);
  assert.throws(() => clock.advance({ time: 0 }, -5), /Bad number/);
  assert.throws(() => clock.advance({ time: 0 }, NaN), /Bad number/);
});

// ---------- actions ----------
test('actions: preview shows time and risk before you act; blocked actions do not run', () => {
  let ran = 0;
  const acts = createActions([
    {
      id: 'force', group: 'place', label: 'Force the door',
      when: (s) => (s.hasBar ? true : 'You need a pry bar'),
      minutes: () => 15,
      risk: () => ({ chance: 0.35, text: 'You can cut your hand' }),
      run: (s) => { ran++; s.time += 15; },
    },
  ]);
  const s = { time: 0, hasBar: false };
  const pv = acts.preview(s, 'force');
  assert.equal(pv.minutes, 15);
  assert.equal(pv.risk.chance, 0.35);
  assert.equal(pv.disabled, 'You need a pry bar');
  assert.deepEqual(acts.run(s, 'force'), { ok: false, why: 'You need a pry bar' });
  s.hasBar = true;
  assert.equal(acts.run(s, 'force').minutes, 15);
  assert.equal(ran, 1);
  assert.throws(() => acts.run(s, 'nope'), /Unknown action/);
});

test('actions: the bridge to the old action list works with the real game', () => {
  const bridge = legacyActions({ listActions, doAction });
  const s = newGame(5);
  const list = bridge.list(s);
  assert.ok(list.some((a) => a.id === 'rest'));
  const r = bridge.run(s, 'rest');
  assert.equal(r.minutes, 60);
});

// ---------- random streams ----------
test('random streams: same seed and name give the same numbers; streams do not touch each other', () => {
  const a = { seed: 9 };
  const b = { seed: 9 };
  const ra = stream(a, 'weather');
  const x1 = [ra(), ra(), ra()];
  stream(b, 'loot')(); // other stream used first
  const rb = stream(b, 'weather');
  assert.deepEqual([rb(), rb(), rb()], x1);
  // The position is saved: a copy of the state continues the same way.
  const c = JSON.parse(JSON.stringify(a));
  assert.equal(stream(c, 'weather')(), stream(a, 'weather')());
  for (const v of x1) assert.ok(v >= 0 && v < 1);
});

// ---------- engine ----------
test('engine: start runs system init, perform runs actions and time', () => {
  const eng = createEngine({
    systems: [{ id: 'needs', init: (s) => { s.food = 50; }, step: (s, dt) => { s.food -= dt; } }],
    actions: [{ id: 'rest', label: 'Rest', minutes: () => 60, run: (s) => eng.advance(s, 60, 'rest') }],
  });
  const s = eng.start({ seed: 1, time: 600 });
  assert.equal(s.food, 50);
  assert.equal(eng.perform(s, 'rest').minutes, 60);
  assert.equal(Math.round(s.food * 100) / 100, 49);
  const types = eng.events.drain().map((e) => e.type);
  assert.deepEqual(types, ['game.start', 'action.done']);
});

// ---------- saves ----------
test('saves: envelope, backup file, and old bare saves load', () => {
  const g = newGame(3);
  const text = exportSave(g, 1000);
  assert.equal(JSON.parse(text).format, 'lastlight-save');
  assert.deepEqual(importSave(text), g);
  assert.deepEqual(importSave(JSON.stringify(g)), g); // old save without envelope
  assert.throws(() => importSave('hello'), /not JSON/);
  assert.throws(() => importSave('{"a":1}'), /Not a Last Light save/);
  assert.equal(unwrapSave(wrapSave(g)).seed, 3);
});

test('saves: game upgrades run step by step and never go backwards', () => {
  const old = { version: 1, player: {}, home: {} };
  const up = migrate(old, {
    version: 3,
    gameMigrations: { 2: (s) => ({ ...s, a: 1 }), 3: (s) => { s.b = s.a + 1; return s; } },
  });
  assert.equal(up.version, 3);
  assert.equal(up.b, 2);
  assert.equal(old.version, 1, 'the old object is not changed');
  assert.throws(() => migrate(old, { version: 2 }), /No upgrade from save v1 to v2/);
  assert.throws(() => migrate({ version: 5, player: {}, home: {} }, { version: 3 }), /newer game/);
});

test('saves: each system upgrades its own fields; a new system adds its fields', () => {
  const systems = createSystems([
    { id: 'dog', version: 2, migrations: { 2: (s) => { s.dog.bond = s.dog.bond ?? 30; } } },
    { id: 'skills', init: (s) => { s.skills = { fishing: 0 }; } },
  ]);
  const old = { version: 1, player: {}, home: {}, dog: {}, systemVersions: { dog: 1 } };
  const up = migrate(old, { systems });
  assert.equal(up.dog.bond, 30);
  assert.deepEqual(up.skills, { fishing: 0 });
  assert.deepEqual(up.systemVersions, { dog: 2, skills: 1 });
});

test('saves: slots in memory and localStorage backends', async () => {
  const fakeLs = (() => {
    const m = new Map();
    return {
      getItem: (k) => (m.has(k) ? m.get(k) : null), setItem: (k, v) => m.set(k, String(v)),
      removeItem: (k) => m.delete(k), key: (i) => [...m.keys()][i] ?? null, get length() { return m.size; },
    };
  })();
  for (const backend of [memoryBackend(), localStorageBackend(fakeLs)]) {
    const store = createSaveStore(backend);
    const g = newGame(11);
    await store.save('run-11', g);
    assert.deepEqual(await store.load('run-11'), g);
    assert.equal((await store.list())[0].slot, 'run-11');
    await store.remove('run-11');
    assert.equal(await store.load('run-11'), null);
  }
  assert.equal(bestBackend({}).name, 'memory');
  assert.equal(bestBackend({ localStorage: fakeLs }).name, 'localStorage');
});

// ---------- save hardening (external review, 1.6) ----------
function quotaBackend(limitBytes) {
  const b = memoryBackend();
  const size = new Map();
  const total = () => [...size.values()].reduce((a, n) => a + n, 0);
  const put = async (k, v) => {
    const n = JSON.stringify(v).length;
    if (total() - (size.get(k) || 0) + n > limitBytes) {
      const e = new Error('The quota has been exceeded.');
      e.name = 'QuotaExceededError';
      throw e;
    }
    size.set(k, n);
    await b.set(k, v);
  };
  return { ...b, name: 'quota', set: put, setMany: undefined };
}

test('saves: no space left gives a quota error and keeps the last good save', async () => {
  const g = newGame(21);
  const one = JSON.stringify(wrapSave(g)).length;
  const store = createSaveStore(quotaBackend(one * 2 + 200));
  await store.save('run', g);
  const big = { ...g, time: g.time + 10, pad: 'x'.repeat(one * 3) };
  await assert.rejects(store.save('run', big), (e) => e.name === 'SaveError' && e.code === 'quota');
  const back = await store.load('run');
  assert.equal(back.time, g.time, 'the last good save still loads');
});

test('saves: a save from a newer game is an error, never a silent fallback', async () => {
  const backend = memoryBackend();
  const store = createSaveStore(backend, { version: 1 });
  const g = newGame(22);
  await store.save('run', g);
  await store.save('run', { ...g, version: 9 });
  await assert.rejects(store.load('run'), /newer game/);
});

test('saves: a failed upgrade is passed up, not hidden by the older copy', async () => {
  const backend = memoryBackend();
  const g = newGame(23);
  await createSaveStore(backend).save('run', { ...g, version: 1 });
  await createSaveStore(backend).save('run', { ...g, version: 1, time: g.time + 5 });
  const store = createSaveStore(backend, { version: 2, gameMigrations: { 2: () => { throw new Error('upgrade bug'); } } });
  await assert.rejects(store.load('run'), /upgrade bug/);
});

test('saves: both copies broken is a "broken" error, not "no save"', async () => {
  const backend = memoryBackend();
  const store = createSaveStore(backend);
  const g = newGame(24);
  await store.save('run', g);
  await store.save('run', { ...g, time: g.time + 5 });
  for (const k of ['run', 'run~prev']) {
    const raw = await backend.get(k);
    raw.state.time = -1;
    await backend.set(k, raw);
  }
  await assert.rejects(store.load('run'), (e) => e.code === 'broken' && /damaged/.test(e.message));
  assert.equal(await store.load('never-saved'), null, 'a slot with no copies is still just empty');
});

test('saves: a tab closed during a save (copy kept, new save cut) loads the last good save', async () => {
  const backend = memoryBackend();
  const store = createSaveStore(backend);
  const g = newGame(25);
  await store.save('run', g);
  // The tab closes after ~prev is written but while the new save is half written.
  const half = wrapSave({ ...g, time: g.time + 60 });
  half.sum = 'cut';
  await backend.set('run~prev', await backend.get('run'));
  await backend.set('run', half);
  const back = await store.load('run');
  assert.equal(back.time, g.time);
  assert.equal(store.lastLoad.from, 'previous');
  assert.match(store.lastLoad.problem, /checksum/);
});

// ---------- content ----------
test('content: the real items, places and projects have no broken links', () => {
  assert.deepEqual(checkContent({ items: ITEMS, categories: CATEGORIES, projects: PROJECTS }), []);
});

test('content: broken links are found', () => {
  const items = { a: { name: 'A', weight: 1, kind: 'misc' } };
  const problems = checkContent({
    items,
    categories: { shop: { label: 'Shop', stock: 0.5, zones: 2, zoneMinutes: 10, loot: [{ id: 'a', w: 1 }, { id: 'ghost', w: 2 }] } },
    projects: [
      { id: 'p1', hours: 1, needs: { a: 1, nails: 2 }, requires: ['p2'] },
      { id: 'p2', hours: 1, requires: ['p1'] },
    ],
  });
  assert.ok(problems.some((p) => p.includes('unknown item "ghost"')));
  assert.ok(problems.some((p) => p.includes('needs unknown item "nails"')));
  assert.ok(problems.some((p) => p.includes('requires itself')));
});
