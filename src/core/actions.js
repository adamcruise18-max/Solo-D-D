// Action list. Each player action declares, in one place:
//   id, group      - name and panel group (home, water, place, travel...)
//   label(state)   - text on the button
//   when(state)    - true, or a short reason why the action is not possible now
//   minutes(state, arg) - game minutes it will cost (shown before you act)
//   risk(state, arg)    - null, or { chance: 0..1, text } (shown before you act)
//   run(state, arg, ctx) - do it (rules only, no screen code); ctx = { clock, events }
// The screen asks list(state) and shows label, time and risk the same way for
// every action. That is the "risk and time shown before rolling" rule.

const KNOWN = new Set(['id', 'group', 'label', 'when', 'minutes', 'risk', 'run', 'note']);

export function defineAction(a) {
  if (!a || typeof a.id !== 'string' || !a.id) throw new Error('An action needs an id');
  for (const k of Object.keys(a)) if (!KNOWN.has(k)) throw new Error(`Action "${a.id}": unknown field "${k}"`);
  if (typeof a.run !== 'function') throw new Error(`Action "${a.id}": run must be a function`);
  for (const k of ['label', 'when', 'minutes', 'risk', 'note']) {
    if (a[k] != null && typeof a[k] !== 'function' && k !== 'label') throw new Error(`Action "${a.id}": ${k} must be a function`);
  }
  return Object.freeze({ group: 'other', ...a });
}

const call = (v, ...args) => (typeof v === 'function' ? v(...args) : v);

export function createActions(list = [], { events = null, clock = null } = {}) {
  const ctx = { events, clock };
  const byId = new Map();

  function add(a) {
    const d = defineAction(a);
    if (byId.has(d.id)) throw new Error(`Action "${d.id}" is already in the list`);
    byId.set(d.id, d);
    return d;
  }
  for (const a of list) add(a);

  // Why the action cannot run now, or null when it can.
  function blocked(state, d, arg) {
    if (state.dead) return 'You are dead';
    if (!d.when) return null;
    const w = d.when(state, arg);
    if (w === true || w == null || w === '') return null;
    return w === false ? 'Not possible now' : String(w);
  }

  // What the screen shows: one entry per action that applies here.
  function preview(state, id, arg) {
    const d = byId.get(id);
    if (!d) return null;
    const why = blocked(state, d, arg);
    const r = d.risk ? d.risk(state, arg) : null;
    return {
      id: d.id,
      group: d.group,
      label: call(d.label, state, arg) ?? d.id,
      disabled: why,
      minutes: d.minutes ? d.minutes(state, arg) : null,
      risk: r && r.chance > 0 ? { chance: Math.max(0, Math.min(1, r.chance)), text: r.text || '' } : null,
      note: d.note ? d.note(state, arg) : null,
    };
  }

  function list_(state) {
    return [...byId.keys()].map((id) => preview(state, id)).filter(Boolean);
  }

  function run(state, id, arg) {
    const d = byId.get(id);
    if (!d) throw new Error(`Unknown action "${id}"`);
    const why = blocked(state, d, arg);
    if (why) {
      events?.emit('action.blocked', { id, why });
      return { ok: false, why };
    }
    const t0 = state.time;
    const result = d.run(state, arg, ctx);
    events?.emit('action.done', { id, arg, minutes: state.time - t0 });
    return { ok: true, result, minutes: state.time - t0 };
  }

  return { add, get: (id) => byId.get(id), ids: () => [...byId.keys()], preview, list: list_, run };
}

// Bridge for the old code: wraps listActions() / doAction() from
// src/engine/actions.js so the screen can use one action API while the
// actions move into the list one by one.
export function legacyActions({ listActions, doAction }) {
  return {
    list(state) {
      return listActions(state).map((a) => ({
        id: a.id, group: a.group || 'other', label: a.label, disabled: a.disabled || null,
        minutes: null, risk: null, note: a.note || null,
      }));
    },
    run(state, id, arg) {
      const t0 = state.time;
      const result = doAction(state, id, arg);
      return { ok: true, result, minutes: state.time - t0 };
    },
  };
}
