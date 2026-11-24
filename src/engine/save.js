// Save in the browser. One life per run: the game saves after each action,
// so there is no older save to go back to. Export/import gives a backup file.
import { SAVE_VERSION } from './state.js';

const KEY = 'lastlight.save.v1';
const RUNS_KEY = 'lastlight.runs.v1';

function store() {
  try { return globalThis.localStorage || null; } catch { return null; }
}

export function saveGame(state) {
  const s = store();
  if (!s) return false;
  try { s.setItem(KEY, JSON.stringify(state)); return true; } catch { return false; }
}

export function loadGame() {
  const s = store();
  if (!s) return null;
  try {
    const raw = s.getItem(KEY);
    if (!raw) return null;
    return parseSave(raw);
  } catch { return null; }
}

export function parseSave(raw) {
  const st = JSON.parse(raw);
  if (!st || st.version !== SAVE_VERSION || !st.player || !st.home) throw new Error('Not a Last Light save file');
  return st;
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
    try { s.setItem(RUNS_KEY, JSON.stringify(runs)); } catch { /* ignore */ }
  }
  return runs;
}

export function bestRuns() {
  const s = store();
  if (!s) return [];
  try { return JSON.parse(s.getItem(RUNS_KEY) || '[]'); } catch { return []; }
}
