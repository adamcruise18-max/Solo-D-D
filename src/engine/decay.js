// Slow breakdown (research spec step 7, part 2). Month by month, the city fails:
// water pressure, cell towers, store fridges, stale gas, leaking roofs...
//
// Each row of src/data/decay.js starts at its month and then spreads area by area:
// each area that has not failed yet fails with chanceByDay each day. The day an
// area fails is fixed by the game seed, the row and the area (a hash, not a roll
// in order), so it needs no saved list per area and catch-up is exact: 30 one-day
// steps and one 30-day step give the same result, and a cell loaded after many
// days sees the same state as one that was watched every day.
//
// State: state.decay = { started: { rowId: day } } (when each row first showed,
// for the journal line). Everything else is computed.
import { gameDay } from '../core/clock.js';
import { hashString } from '../rng.js';
import { DECAY } from '../data/decay.js';
import { START_MONTH } from './pacer.js';
import { log } from './state.js';

const byId = new Map(DECAY.map((r) => [r.id, r]));

// First game day of month m (30-day months; day 0 is in month START_MONTH).
export const monthStartDay = (m) => (m - START_MONTH) * 30;

// The day this area fails for this row: the row's first day plus a wait drawn
// from the geometric distribution (chance p each day), from a hash.
export function failDay(state, row, area) {
  const u = ((hashString(`${state.seed}:decay:${row.id}:${area}`) >>> 0) + 0.5) / 4294967296; // (0, 1)
  const wait = row.chanceByDay >= 1 ? 0 : Math.floor(Math.log(u) / Math.log(1 - row.chanceByDay));
  return Math.max(0, monthStartDay(row.month)) + wait;
}

// Has this row failed in this area by game time t?
export function decayActive(state, id, area, t = state.time) {
  const row = byId.get(id);
  if (!row) throw new Error(`Unknown decay row "${id}"`);
  return gameDay(t) >= failDay(state, row, area);
}

// Expected share of all areas failed by time t (0..1), for map shading and UI.
export function decayShare(state, id, t = state.time) {
  const row = byId.get(id);
  if (!row) throw new Error(`Unknown decay row "${id}"`);
  const days = gameDay(t) - monthStartDay(row.month) + 1;
  return days <= 0 ? 0 : 1 - (1 - row.chanceByDay) ** days;
}

export function initDecay(state) {
  state.decay = { started: {} };
}

// Daily: write the journal line once, on the first day a row shows (its share of
// areas reaches 2%). Order is the table order, so catch-up writes them in order.
export function decayDaily(state, day, rows = DECAY) {
  if (!state.decay) initDecay(state);
  const st = state.decay.started;
  for (const row of rows) {
    if (st[row.id] != null) continue;
    const days = day - monthStartDay(row.month) + 1;
    if (days <= 0) continue;
    if (1 - (1 - row.chanceByDay) ** days < 0.02) continue;
    st[row.id] = day;
    log(state, row.text, row.kind || 'story');
  }
}

// For the F3 overlay: the next row to show, and the rows that have shown.
export function decayInfo(state, t = state.time) {
  const day = gameDay(t);
  const started = state.decay?.started || {};
  const next = DECAY.filter((r) => started[r.id] == null)
    .map((r) => {
      // First day its share reaches 2%.
      const k = r.chanceByDay >= 0.02 ? 1 : Math.ceil(Math.log(0.98) / Math.log(1 - r.chanceByDay));
      return { id: r.id, day: Math.max(day, monthStartDay(r.month) + k - 1) };
    })
    .sort((a, b) => a.day - b.day)[0] || null;
  return {
    shown: Object.keys(started),
    next,
    shares: Object.fromEntries(DECAY.map((r) => [r.id, Math.round(decayShare(state, r.id, t) * 100) / 100])),
  };
}

export const decaySystem = {
  id: 'decay',
  label: 'Slow breakdown',
  order: 20, // after the weather, before the old daily rules
  version: 1,
  owns: ['decay'],
  catchUp: 'exact', // fail days come from a hash: skipping days changes nothing
  init: (state) => initDecay(state),
  daily: (state, day) => decayDaily(state, day),
};
