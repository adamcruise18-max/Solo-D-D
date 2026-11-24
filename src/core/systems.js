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
//   }
//
// All hooks are optional except id. A new feature is a new system file,
// not an edit to one large function.

const HOOKS = ['init', 'step', 'daily'];
const KNOWN = new Set(['id', 'order', 'version', 'migrations', 'label', 'legacy', ...HOOKS]);

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
  const migrations = sys.migrations || {};
  for (let v = 2; v <= version; v++) {
    if (typeof migrations[v] !== 'function') throw new Error(`System "${sys.id}": no migration to version ${v}`);
  }
  return Object.freeze({ order: 100, ...sys, version, migrations });
}

export function createSystems(list = []) {
  const byId = new Map();
  let ordered = [];

  function add(sys) {
    const s = defineSystem(sys);
    if (byId.has(s.id)) throw new Error(`System "${s.id}" is already in the list`);
    byId.set(s.id, s);
    // Stable sort: same order number keeps the order of adding.
    ordered = [...byId.values()].sort((a, b) => a.order - b.order);
    return s;
  }

  for (const s of list) add(s);

  function run(hook, state, arg, ctx) {
    // Death is checked by the clock between steps, not here: like the old
    // tickStep(), every system finishes the step in which the player dies.
    for (const s of ordered) {
      if (s[hook]) s[hook](state, arg, ctx);
    }
  }

  return {
    add,
    get: (id) => byId.get(id),
    ids: () => ordered.map((s) => s.id),
    list: () => ordered.slice(),
    init: (state, ctx) => {
      run('init', state, undefined, ctx);
      state.systemVersions = Object.fromEntries(ordered.map((s) => [s.id, s.version]));
    },
    step: (state, dtHours, ctx) => run('step', state, dtHours, ctx),
    daily: (state, day, ctx) => run('daily', state, day, ctx),
  };
}
