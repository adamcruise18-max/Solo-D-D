// Activity log for diagnostics (external review 3.4): it connects each player
// action to what the simulation did, so a person (or an agent) can see why.
//
// One record per action, kept in memory only (never in the save, so the golden
// replay and save files do not change):
//   { n, action, t0, t1, minutes,
//     lines:   [{ t, text, kind, sys, hook }]  journal lines, with the system that wrote them
//     rng:     { shared: bool, streams: [names] }  which random sources moved
//     changed: [state paths] | null              only in deep mode (costs a JSON pass) }
//
// Source tracking: the systems runner (src/core/systems.js) says which system and
// hook run now; the action runner says which action. log() asks currentSource().
import { hashString } from '../rng.js';

let source = { sys: null, hook: null };

export function currentSource() {
  return source;
}

// Run fn with `src` as the current source, then put the old source back.
export function withSource(src, fn) {
  const old = source;
  source = { ...old, ...src };
  try {
    return fn();
  } finally {
    source = old;
  }
}

// State paths, one level down for the big objects (same split as the replay trace).
// log and journal hold player text only.
const SPLIT = new Set(['player', 'home', 'location', 'dog', 'weather', 'stats', 'places', 'houses', 'houseAreas', 'flags', 'world', 'systemVersions', 'rngStreams']);
const SKIP = new Set(['log', 'journal']);
const h = (v) => hashString(JSON.stringify(v ?? null)).toString(36);

export function fieldHashes(s) {
  const out = {};
  for (const [k, v] of Object.entries(s)) {
    if (SKIP.has(k)) continue;
    if (SPLIT.has(k) && v && typeof v === 'object' && !Array.isArray(v)) {
      for (const [k2, v2] of Object.entries(v)) out[`${k}.${k2}`] = h(v2);
    } else out[k] = h(v);
  }
  return out;
}

export function changedPaths(before, after) {
  const keys = new Set([...Object.keys(before), ...Object.keys(after)]);
  return [...keys].filter((k) => before[k] !== after[k]).sort();
}

export function createActivity({ limit = 100 } = {}) {
  const records = [];
  let open = null;
  let snap = null;
  let n = 0;
  let deep = false;

  function begin(state, action) {
    if (open) end(state); // an action inside an action: close the outer one first
    open = {
      n: ++n,
      action,
      t0: state.time,
      t1: state.time,
      minutes: 0,
      lines: [],
      rng: { shared: false, streams: [] },
      changed: null,
    };
    snap = {
      rngState: state.rngState,
      streams: { ...(state.rngStreams || {}) },
      fields: deep ? fieldHashes(state) : null,
    };
    return open;
  }

  function end(state) {
    if (!open) return null;
    const r = open;
    r.t1 = state.time;
    r.minutes = r.t1 - r.t0;
    r.rng.shared = state.rngState !== snap.rngState;
    const now = state.rngStreams || {};
    r.rng.streams = Object.keys(now).filter((k) => now[k] !== snap.streams[k]).sort();
    if (snap.fields) r.changed = changedPaths(snap.fields, fieldHashes(state));
    records.push(r);
    if (records.length > limit) records.splice(0, records.length - limit);
    open = null;
    snap = null;
    return r;
  }

  // A journal line. Lines outside an action (UI code, a new game) go into a
  // record of their own, named 'other'.
  function line(state, entry) {
    const src = currentSource();
    const l = { t: entry.t, text: entry.text, kind: entry.kind, sys: src.sys || null, hook: src.hook || null };
    if (open) open.lines.push(l);
    else {
      records.push({ n: ++n, action: 'other', t0: entry.t, t1: entry.t, minutes: 0, lines: [l], rng: null, changed: null });
      if (records.length > limit) records.splice(0, records.length - limit);
    }
  }

  return {
    begin,
    end,
    line,
    records: (count = limit) => records.slice(-count),
    clear: () => { records.length = 0; open = null; snap = null; },
    setDeep: (on) => { deep = !!on; },
    isDeep: () => deep,
  };
}
