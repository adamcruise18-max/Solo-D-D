// Carry-over bonuses (a game option, off by default).
// Deeds over all your runs earn small bonuses. At the start of a run you can turn on up to MAX_SLOTS
// earned bonuses. They are small on purpose: a new player and a veteran play the same game.
// The record (kept in the browser by save.js): { enabled, totals: { miles, places }, best: { days, built }, dogJoined }.
import { builtCount } from './base.js';

export const MAX_SLOTS = 3;

export const LEGACY = {
  long_haul: {
    name: 'Long haul', deed: 'Live 30 days in one run.',
    bonus: 'Start with 3 more cans of food.',
    earned: (r) => r.best.days >= 30, progress: (r) => `${Math.min(30, r.best.days)} / 30 days`,
  },
  road_legs: {
    name: 'Road legs', deed: 'Walk 100 miles over all runs.',
    bonus: 'Walking uses 5% less energy.',
    earned: (r) => r.totals.miles >= 100, progress: (r) => `${Math.floor(Math.min(100, r.totals.miles))} / 100 mi`,
  },
  sharp_eyes: {
    name: 'Sharp eyes', deed: 'Search 50 places over all runs.',
    bonus: 'Searching takes 5% less time.',
    earned: (r) => r.totals.places >= 50, progress: (r) => `${Math.min(50, r.totals.places)} / 50 places`,
  },
  handy: {
    name: 'Handy', deed: 'Build 5 home projects in one run.',
    bonus: 'Start with a box of nails and screws and a pipe fittings set.',
    earned: (r) => r.best.built >= 5, progress: (r) => `${Math.min(5, r.best.built)} / 5 projects`,
  },
  old_friend: {
    name: 'Old friend', deed: 'Have a dog join you.',
    bonus: 'The dog trusts you a little sooner (+10 bond).',
    earned: (r) => r.dogJoined, progress: (r) => (r.dogJoined ? 'done' : 'not yet'),
  },
};

export function emptyRecord() {
  return { enabled: false, totals: { miles: 0, places: 0 }, best: { days: 0, built: 0 }, dogJoined: false };
}

export function normalizeRecord(r) {
  const e = emptyRecord();
  if (!r || typeof r !== 'object') return e;
  return {
    enabled: !!r.enabled,
    totals: { ...e.totals, ...(r.totals || {}) },
    best: { ...e.best, ...(r.best || {}) },
    dogJoined: !!r.dogJoined,
  };
}

// Add one finished run to the record. Returns the new record.
export function addRun(record, state) {
  const r = normalizeRecord(record);
  r.totals.miles += state.stats.miles || 0;
  r.totals.places += (state.stats.placesSearched || 0) + (state.stats.housesSearched || 0);
  const days = state.dead ? state.dead.days : 0;
  r.best.days = Math.max(r.best.days, days);
  r.best.built = Math.max(r.best.built, builtCount(state));
  if (state.dog && state.dog.stage === 'joined') r.dogJoined = true;
  return r;
}

export function earnedIds(record) {
  const r = normalizeRecord(record);
  return Object.keys(LEGACY).filter((k) => LEGACY[k].earned(r));
}

// Only earned ids, no repeats, at most MAX_SLOTS.
export function validLegacy(ids, record) {
  const ok = earnedIds(record);
  return [...new Set(ids || [])].filter((k) => ok.includes(k)).slice(0, MAX_SLOTS);
}

export function applyLegacy(state, ids) {
  state.player.legacy = Object.keys(LEGACY).filter((k) => (ids || []).includes(k)).slice(0, MAX_SLOTS);
  const st = state.home.storage;
  const add = (id, n) => { st[id] = (st[id] || 0) + n; };
  if (hasLegacy(state, 'long_haul')) add('canned_food', 3);
  if (hasLegacy(state, 'handy')) { add('hardware_parts', 1); add('pipe_fittings', 1); }
}

export function hasLegacy(state, id) {
  return !!(state.player && Array.isArray(state.player.legacy) && state.player.legacy.includes(id));
}
