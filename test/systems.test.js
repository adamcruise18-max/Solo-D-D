// The live game runs time through the engine clock and its systems (weather first).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createSystems, createClock, defineSystem } from '../src/core/index.js';
import { gameSystems, gameClock, createGameSystems, GAME_SYSTEMS, setDevChecks } from '../src/engine/systems.js';
import { newGame } from '../src/engine/state.js';
import { advanceTime } from '../src/engine/tick.js';
import { parseSave } from '../src/engine/save.js';
import { loadPlaces, botTurn } from '../tools/bot.mjs';

loadPlaces();

test('systems: weather is a registered, versioned system that runs before the legacy rules', () => {
  const sys = gameSystems();
  assert.deepEqual(sys.ids(), ['weather', 'legacy']);
  assert.equal(sys.get('weather').version, 1);
  assert.equal(sys.ownerOf('weather'), 'weather');
  assert.deepEqual(sys.missingCatchUp(), [], 'every game system says how it catches up');
  assert.deepEqual(newGame(3).systemVersions, { weather: 1, legacy: 1 });
});

test('systems: the weather changes at 5 AM through the clock, not inside a day', () => {
  const s = newGame(8);
  const w0 = JSON.stringify(s.weather);
  const toFive = (24 * 60 + 300) - s.time - 20; // 20 minutes before the next 5 AM
  advanceTime(s, toFive, 'rest');
  assert.equal(JSON.stringify(s.weather), w0, 'no weather change inside the day');
  advanceTime(s, 30, 'rest');
  assert.equal(s.weather.day, 1, 'the new day has new weather');
});

test('systems: with dev checks, a system that writes the weather is a dual write', () => {
  const { systems, clock } = createGameSystems({ dev: true });
  systems.add({ id: 'bad', order: 2000, step: (st) => { st.weather.wind += 1; } });
  const s = newGame(9);
  assert.throws(() => clock.advance(s, 10), /Dual write: system "bad" changed "weather"/);
});

test('systems: a full bot game with dev checks has no dual writes', () => {
  setDevChecks(true); // the live clock now checks field owners after each hook
  try {
    const s = newGame(42);
    for (let i = 0; i < 400 && !s.dead; i++) botTurn(s);
    assert.ok(s.time > 10 * 1440, 'the bot played some days');
  } finally { setDevChecks(false); }
});

test('clock: moving time inside a step is an error (time charged twice)', () => {
  let clock;
  const systems = createSystems([{ id: 'x', step: (st) => clock.advance(st, 10) }]);
  clock = createClock({ systems });
  assert.throws(() => clock.advance({ time: 0 }, 10), /time charged twice/);
  // The clock still works after the error.
  const ok = createClock({ systems: createSystems([]) });
  assert.equal(ok.advance({ time: 0 }, 25).time, 25);
});

test('systems: owns and catchUp are checked', () => {
  assert.throws(() => defineSystem({ id: 'a', owns: 'weather' }), /owns must be a list/);
  assert.throws(() => defineSystem({ id: 'a', catchUp: 'fast' }), /catchUp must be one of/);
  assert.throws(() => createSystems([{ id: 'a', owns: ['w'] }, { id: 'b', owns: ['w'] }]), /owned by both/);
  assert.deepEqual(createSystems([{ id: 'a' }, { id: 'b', catchUp: 'exact' }]).missingCatchUp(), ['a']);
});

test('catch-up: ten one-day advances give the same game as one ten-day advance', () => {
  const a = newGame(77);
  const b = newGame(77);
  advanceTime(a, 10 * 1440, 'rest');
  for (let d = 0; d < 10; d++) advanceTime(b, 1440, 'rest');
  assert.equal(JSON.stringify(a), JSON.stringify(b));
});

test('saves: a save from before the engine (no systemVersions) upgrades and plays the same', () => {
  const now = newGame(1234);
  const old = JSON.parse(JSON.stringify(now));
  delete old.systemVersions; // how saves looked before this change
  const up = parseSave(JSON.stringify(old));
  assert.deepEqual(up.systemVersions, { weather: 1, legacy: 1 });
  assert.deepEqual(up.weather, now.weather, 'weather is kept, not rolled again');
  for (let i = 0; i < 150 && !now.dead; i++) { botTurn(now); botTurn(up); }
  assert.deepEqual(up, now);
});

test('systems: the game systems list is the one the clock runs', () => {
  assert.equal(GAME_SYSTEMS.length, gameSystems().list().length);
  assert.equal(typeof gameClock().advance, 'function');
});
