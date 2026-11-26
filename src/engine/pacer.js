// Event pacer (research spec step 7, part 1). A system that keeps a steady rhythm:
// when nothing has happened for a long time, a small event becomes more likely;
// after a big event, the next big one waits at least 3 days. It never stacks bad
// luck on a player who is already in trouble (mercy rule).
//
// State: state.pacer = { tension 0..100, hourAcc, lastEventDay, lastBigDay,
//                        recent: [{ id, day }], count }
// Rolls: the named stream 'pacer' (src/core/rng.js), so other rolls do not move.
// Events: src/data/events.js (content, owned by the builder thread).
import { stream } from '../core/rng.js';
import { gameDay } from '../core/clock.js';
import { EVENTS } from '../data/events.js';
import { log } from './state.js';
import { needWarnings } from './status.js';

export const START_MONTH = 3; // the game starts 3 months after the collapse
// Numbers tuned by simulation for 1 to 3 events a week (spec target); the spec's
// first numbers (+0.4/h, (t-30)/400, weights 15/30/60) gave about 4 a week.
export const RISE_PER_HOUR = 0.3; // quiet hour
export const RISE_OUTSIDE = 0.3; // extra per hour outside
export const THRESHOLD = 20;
export const SLOPE = 200;
export const WEIGHT = { small: 25, medium: 50, big: 100 };
// No 5-day gap: after this many quiet hours, the next hour has an event if one fits.
export const QUIET_LIMIT_HOURS = 96;
export const BIG_GAP_DAYS = 3;
export const REPEAT_GAP_DAYS = 2;
export const MAX_SMALL_CHANCE = 0.12;

// Whole months since the collapse at game time t (30-day months).
export const monthOf = (t) => START_MONTH + Math.floor(Math.max(0, gameDay(t)) / 30);

export function initPacer(state) {
  state.pacer = { tension: 0, hourAcc: 0, quietHours: 0, lastEventDay: null, lastBigDay: null, recent: [], count: 0 };
}

// Where the player is, for event filters. While the player sleeps, only events
// written for sleep (where: 'asleep', a sound that wakes you) can happen.
export function whereNow(state, mode) {
  if (mode === 'sleep') return 'asleep';
  const k = state.location?.kind;
  if (mode === 'walk' || k === 'wild' || k === 'street') return 'outside';
  if (k === 'home') return 'home';
  return 'inside';
}

// Chance per hour that an event happens, from the tension.
export function eventChance(tension) {
  return Math.max(0, Math.min(MAX_SMALL_CHANCE, (tension - THRESHOLD) / SLOPE));
}

// The mercy rule: the player has 2 or more need warnings, or a fresh wound.
export function inTrouble(state) {
  const fresh = (state.player.injuries || []).some((i) => (i.ageH ?? 99) < 24);
  return fresh || needWarnings(state).length >= 2;
}

export function candidates(state, mode, events = EVENTS) {
  const p = state.pacer;
  const day = gameDay(state.time);
  const month = monthOf(state.time);
  const where = whereNow(state, mode);
  return events.filter((e) => {
    if (e.where !== where && !(e.where === 'any' && where !== 'asleep')) return false;
    if (e.months && (month < e.months[0] || month > e.months[1])) return false;
    if (p.recent.some((r) => r.id === e.id && day - r.day < REPEAT_GAP_DAYS)) return false;
    if (e.size === 'big' && p.lastBigDay != null && day - p.lastBigDay < BIG_GAP_DAYS) return false;
    if (e.when && !e.when(state, { mode })) return false;
    return true;
  });
}

// Pick an event. Big events are rarer, and half as likely again in the mercy case.
function pick(state, list, rng) {
  const mercy = inTrouble(state);
  // An event may carry its own weight factor w (events.js); 1 when it has none.
  const w = (e) => (e.size === 'big' ? (mercy ? 0.5 : 1) : e.size === 'medium' ? 3 : 8) * (e.w ?? 1);
  const total = list.reduce((a, e) => a + w(e), 0);
  let r = rng() * total;
  for (const e of list) { r -= w(e); if (r < 0) return e; }
  return list[list.length - 1];
}

function fire(state, e, rng, mode) {
  const p = state.pacer;
  const day = gameDay(state.time);
  if (e.apply) e.apply(state, { rng, mode });
  log(state, e.text, e.kind || (e.size === 'big' ? 'warn' : 'story'));
  p.tension = Math.max(0, p.tension - WEIGHT[e.size]);
  p.lastEventDay = day;
  if (e.size === 'big') p.lastBigDay = day;
  p.recent.push({ id: e.id, day });
  if (p.recent.length > 10) p.recent.shift();
  p.count += 1;
  p.quietHours = 0;
}

export const ASLEEP_RATE = 0.4;

// One game hour of the pacer.
export function pacerHour(state, mode, events = EVENTS) {
  const p = state.pacer;
  p.tension = Math.min(100, p.tension + RISE_PER_HOUR + (mode === 'walk' ? RISE_OUTSIDE : 0));
  p.quietHours = (p.quietHours || 0) + 1;
  const rng = stream(state, 'pacer');
  const overdue = p.quietHours >= QUIET_LIMIT_HOURS;
  // Asleep, events are rarer (playtest list 1: they were 46% of all events).
  const rate = mode === 'sleep' ? ASLEEP_RATE : 1;
  if (rng() >= eventChance(p.tension) * rate && !overdue) return null;
  let list = candidates(state, mode, events);
  if (overdue) list = list.filter((e) => e.size === 'small'); // a quiet stretch ends softly
  if (!list.length) return null;
  const e = pick(state, list, rng);
  fire(state, e, rng, mode);
  return e;
}

// For the F3 overlay and tests.
export function pacerInfo(state) {
  const p = state.pacer || {};
  return {
    tension: Math.round(p.tension || 0),
    chancePerHour: eventChance(p.tension || 0),
    lastEventDay: p.lastEventDay ?? null,
    lastBigDay: p.lastBigDay ?? null,
    events: p.count || 0,
    month: monthOf(state.time),
  };
}

export const pacerSystem = {
  id: 'pacer',
  label: 'Event pacer',
  order: 1100, // after the rules: the mercy rule reads this step's vitals
  version: 1,
  owns: ['pacer'],
  // Event effects (src/data/events.js apply) may change these on purpose:
  // a roof leak (home), the dog finds a bone (dog).
  effects: ['home', 'dog'],
  // Hour by hour with thresholds: time must be played, not skipped.
  catchUp: 'event',
  init: (state) => initPacer(state),
  step: (state, dtHours, ctx) => {
    if (!state.pacer) initPacer(state);
    const p = state.pacer;
    p.hourAcc += dtHours;
    while (p.hourAcc >= 1 - 1e-9 && !state.dead) {
      p.hourAcc -= 1;
      pacerHour(state, ctx.mode);
    }
  },
};
