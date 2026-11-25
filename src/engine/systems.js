// The game's systems, run by the engine clock (src/core/clock.js).
// Order in each step and at 5 AM: weather, slow breakdown, the legacy rules, the home, the dog,
// then the event pacer (it reads this step's vitals for its mercy rule).
// This is the same order as the old advanceTime(), so the numbers do not change
// (checked by the golden replay, npm run replay).
//
// Field ownership (external review, 1.3), until all rules are systems:
//   weather                        weather system (only it writes state.weather)
//   pacer, decay                   the pacer and decay systems (src/engine/pacer.js, decay.js)
//   home                           the home system (src/engine/home.js) and project actions (base.js)
//   dog                            the dog system (src/engine/dog.js)
//   item pickups                   zoneItems, taken[pid], opened[cid] (PR #9 model)
//   other place changes            state.world.changes (src/core/changes.js)
//   everything else                legacy rules (src/engine/tick.js)
//   game time                      the clock only
import { createSystems, createClock } from '../core/index.js';
import { initWeather, rollWeather } from './world.js';
import { rollSpell } from './rareweather.js';
import { tickStep, dailyRollover } from './tick.js';
import { pacerSystem } from './pacer.js';
import { decaySystem } from './decay.js';
import { dogSystem } from './dog.js';
import { homeSystem } from './home.js';

export const weatherSystem = {
  id: 'weather',
  label: 'Weather',
  order: 10,
  version: 1,
  legacy: true, // state.weather was in saves before the engine
  owns: ['weather'],
  // One roll per game day from the shared game rng; nothing changes inside a day.
  // Then rare weather (ice storm, heat wave, smoke) from its own stream
  // (src/engine/rareweather.js). Skipping days must still roll each day in order,
  // so the result is exact.
  catchUp: 'exact',
  init: (state) => initWeather(state),
  daily: (state, day) => {
    const old = state.weather;
    rollWeather(state, day);
    rollSpell(state, day, old);
  },
};

export const legacySystem = {
  id: 'legacy',
  label: 'Rules not yet moved into systems',
  order: 1000,
  version: 1,
  legacy: true,
  // Death checks, wounds and illness thresholds happen inside a day.
  catchUp: 'event',
  step: (state, dtHours, ctx) => tickStep(state, dtHours, ctx.mode),
  daily: (state, day) => dailyRollover(state, day),
};

export const GAME_SYSTEMS = [weatherSystem, decaySystem, legacySystem, homeSystem, dogSystem, pacerSystem];

// dev: check that no system writes a field another system owns (tests, replay).
let devChecks = false;
let cached = null;
export function setDevChecks(on) {
  devChecks = !!on;
  cached = null;
}

export function gameSystems() {
  return (cached ||= createGameSystems({ dev: devChecks })).systems;
}

export function gameClock() {
  return (cached ||= createGameSystems({ dev: devChecks })).clock;
}

export function createGameSystems({ dev = false, events = null } = {}) {
  const systems = createSystems(GAME_SYSTEMS, { dev });
  const clock = createClock({ systems, events });
  return { systems, clock };
}

// Versions of the systems for a new game's save.
export function systemVersions() {
  return Object.fromEntries(gameSystems().list().map((s) => [s.id, s.version]));
}

// New game: systems added after the engine add their fields (legacy systems are
// set up by newGame() itself, in the old order, so their rolls do not move).
export function initNewSystems(state) {
  for (const sys of gameSystems().list()) if (!sys.legacy && sys.init) sys.init(state, {});
}
