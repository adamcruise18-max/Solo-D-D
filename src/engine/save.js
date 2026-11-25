// Save in the browser. One life per run: the game saves after each action,
// so there is no older save to go back to. Export/import gives a backup file.
import { SAVE_VERSION } from './state.js';
import { migrate } from '../core/save.js';
import { gameSystems } from './systems.js';
import { addRun, normalizeRecord } from './legacy.js';

const KEY = 'lastlight.save.v1';
const RUNS_KEY = 'lastlight.runs.v1';
const LEGACY_KEY = 'lastlight.legacy.v1';

function store() {
  try { return globalThis.localStorage || null; } catch { return null; }
}

export function saveGame(state) {
  const s = store();
  if (!s) return false;
  try { s.setItem(KEY, JSON.stringify(state)); return true; } catch { return false; }
}

const UNREADABLE_KEY = 'lastlight.save.v1.unreadable';
let problem = null;

// Why the last loadGame() found a save but could not load it (null if none).
// For example a save from a newer game, or a damaged save. The UI can show it.
export function loadProblem() { return problem; }

// Returns the saved game, or null when there is none or it cannot be loaded.
// A save that cannot be loaded is never lost: it is moved to its own key first,
// so a new run does not write over it (a newer game version can load it later).
export function loadGame() {
  problem = null;
  const s = store();
  if (!s) return null;
  let raw;
  try { raw = s.getItem(KEY); } catch (err) { problem = String(err); return null; }
  if (!raw) return null;
  try {
    return parseSave(raw);
  } catch (err) {
    problem = err?.message || String(err);
    try {
      s.setItem(UNREADABLE_KEY, raw);
      s.removeItem(KEY);
    } catch { /* no space: the save stays where it is */ }
    if (typeof console !== 'undefined') console.warn(`Save not loaded (kept as ${UNREADABLE_KEY}): ${problem}`);
    return null;
  }
}

// The save that could not be loaded, as text (for a backup download), or null.
export function unreadableSave() {
  const s = store();
  try { return s ? s.getItem(UNREADABLE_KEY) : null; } catch { return null; }
}

export function parseSave(raw) {
  const st = JSON.parse(raw);
  if (!st || st.version !== SAVE_VERSION || !st.player || !st.home) throw new Error('Not a Last Light save file');
  // Upgrade each system's fields. A save from before the engine has no
  // systemVersions: its weather and legacy fields are version 1 already.
  return migrate(st, { systems: gameSystems() });
}

export function clearGame() {
  const s = store();
  if (s) try { s.removeItem(KEY); } catch { /* ignore */ }
}

export function recordRun(state) {
  const s = store();
  if (!s || !state.dead) return [];
  let runs = [];
  try { runs = JSON.parse(s.getItem(RUNS_KEY) || '[]'); } catch { runs = []; }
  if (!runs.some((r) => r.seed === state.seed && r.time === state.dead.time)) {
    runs.push({ seed: state.seed, time: state.dead.time, days: state.dead.days, cause: state.dead.cause, miles: Math.round(state.stats.miles * 10) / 10, dog: state.dog.name });
    runs.sort((a, b) => b.days - a.days);
    runs = runs.slice(0, 10);
    // Deeds for carry-over bonuses count every run, even with the option off.
    saveLegacy(addRun(loadLegacy(), state));
    try { s.setItem(RUNS_KEY, JSON.stringify(runs)); } catch { /* ignore */ }
  }
  return runs;
}

export function bestRuns() {
  const s = store();
  if (!s) return [];
  try { return JSON.parse(s.getItem(RUNS_KEY) || '[]'); } catch { return []; }
}

// Carry-over record (deeds over all runs, and whether the option is on).
export function loadLegacy() {
  const s = store();
  if (!s) return normalizeRecord(null);
  try { return normalizeRecord(JSON.parse(s.getItem(LEGACY_KEY) || 'null')); } catch { return normalizeRecord(null); }
}

export function saveLegacy(record) {
  const s = store();
  if (!s) return false;
  try { s.setItem(LEGACY_KEY, JSON.stringify(normalizeRecord(record))); return true; } catch { return false; }
}
