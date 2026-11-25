// Systems list. Every rule set (weather, vitals, home base, dog, season, skills...)
// is one system with the same shape:
//
//   {
//     id: 'vitals',            // unique name
//     order: 20,               // lower runs first in each step
//     init(state, ctx),        // new game: add this system's fields to the state
//     step(state, dtHours, ctx), // each clock step (10 game minutes or less)
//     daily(state, day, ctx),  // once per game day, at 5 AM
//     version: 1,              // version of this system's save fields
//     migrations: { 2(state) {...} }, // upgrade old saves: key = new version
//     legacy: true,            // its fields were in saves from before the engine
//                              // (old saves: no init for it; other systems run init)
//     owns: ['weather'],       // top-level state fields only this system may write
//     catchUp: 'exact',        // how it may skip time (see CATCH_UP below)
//   }
//
// All hooks are optional except id. A new feature is a new system file,
// not an edit to one large function.
import { withSource } from './activity.js';

const HOOKS = ['init', 'step', 'daily'];
const KNOWN = new Set(['id', 'order', 'version', 'migrations', 'label', 'legacy', 'owns', 'catchUp', ...HOOKS]);

// Catch-up rule (external review, 1.5). A system must say how it behaves when
// time is skipped, before reduced or abstract simulation may use it:
//   exact   ten one-day steps give the same result as one ten-day step
//   approx  results may differ, only inside limits written in its tests
//   event   small steps must be played: thresholds or death checks in between
export const CATCH_UP = ['exact', 'approx', 'event'];

export function defineSystem(sys) {
  if (!sys || typeof sys.id !== 'string' || !sys.id) throw new Error('A system needs an id');
  for (const k of Object.keys(sys)) {
    if (!KNOWN.has(k)) throw new Error(`System "${sys.id}": unknown field "${k}"`);
  }
  for (const h of HOOKS) {
    if (sys[h] != null && typeof sys[h] !== 'function') throw new Error(`System "${sys.id}": ${h} must be a function`);
  }
  const version = sys.version ?? 1;
  if (!Number.isInteger(version) || version < 1) throw new Error(`System "${sys.id}": version must be a whole number from 1`);
  if (sys.owns != null && (!Array.isArray(sys.owns) || sys.owns.some((f) => typeof f !== 'string' || !f))) {
    throw new Error(`System "${sys.id}": owns must be a list of state field names`);
  }
  if (sys.catchUp != null && !CATCH_UP.includes(sys.catchUp)) {
    throw new Error(`System "${sys.id}": catchUp must be one of ${CATCH_UP.join(', ')}`);
  }
  const migrations = sys.migrations || {};
  for (let v = 2; v <= version; v++) {
    if (typeof migrations[v] !== 'function') throw new Error(`System "${sys.id}": no migration to version ${v}`);
  }
  return Object.freeze({ order: 100, ...sys, version, migrations });
}

// dev: true turns on the ownership check: after each hook of a system, the fields
// that other systems own must be unchanged. This finds dual writes while old rules
// move into systems. It copies the owned fields each hook, so use it in tests and
// development only.
export function createSystems(list = [], { dev = false } = {}) {
  const byId = new Map();
  const owner = new Map(); // field -> system id
  let ordered = [];

  function add(sys) {
    const s = defineSystem(sys);
    if (byId.has(s.id)) throw new Error(`System "${s.id}" is already in the list`);
    for (const f of s.owns || []) {
      if (owner.has(f)) throw new Error(`Field "${f}" is owned by both "${owner.get(f)}" and "${s.id}"`);
    }
    for (const f of s.owns || []) owner.set(f, s.id);
    byId.set(s.id, s);
    // Stable sort: same order number keeps the order of adding.
    ordered = [...byId.values()].sort((a, b) => a.order - b.order);
    return s;
  }

  for (const s of list) add(s);

  const snapOthers = (state, id) => {
    const out = {};
    for (const [f, who] of owner) if (who !== id) out[f] = JSON.stringify(state[f] ?? null);
    return out;
  };

  function run(hook, state, arg, ctx) {
    // Death is checked by the clock between steps, not here: like the old
    // tickStep(), every system finishes the step in which the player dies.
    for (const s of ordered) {
      if (!s[hook]) continue;
      // The activity log names the system that wrote each journal line.
      const call = () => s[hook](state, arg, ctx);
      if (!dev || !owner.size) { withSource({ sys: s.id, hook }, call); continue; }
      const before = snapOthers(state, s.id);
      withSource({ sys: s.id, hook }, call);
      for (const [f, v] of Object.entries(before)) {
        if (JSON.stringify(state[f] ?? null) !== v) {
          throw new Error(`Dual write: system "${s.id}" changed "${f}" in ${hook}(), but "${owner.get(f)}" owns it`);
        }
      }
    }
  }

  return {
    add,
    get: (id) => byId.get(id),
    ids: () => ordered.map((s) => s.id),
    ownerOf: (field) => owner.get(field) || null,
    // Systems that have not said how they catch up: reduced or abstract
    // simulation must not skip time for these.
    missingCatchUp: () => ordered.filter((s) => !s.catchUp).map((s) => s.id),
    list: () => ordered.slice(),
    init: (state, ctx) => {
      run('init', state, undefined, ctx);
      state.systemVersions = Object.fromEntries(ordered.map((s) => [s.id, s.version]));
    },
    step: (state, dtHours, ctx) => run('step', state, dtHours, ctx),
    daily: (state, day, ctx) => run('daily', state, day, ctx),
  };
}
