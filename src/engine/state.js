// Game state: creation, clock helpers, inventory helpers and the log.
import { hashString, mulberry32 } from '../rng.js';
import { ITEMS } from '../data/items.js';
import { HOME_LAT, HOME_LON } from '../sun.js';
import { initWeather } from './world.js';
import { applyBackground, carryMinus } from './background.js';
import { applyLegacy } from './legacy.js';
import { systemVersions, initNewSystems } from './systems.js';
import { activity } from './activity.js';

export const SAVE_VERSION = 1;
export const START_MINUTE = 9 * 60 + 5; // Day 1, 9:05 AM
export const HOME = { lat: HOME_LAT, lon: HOME_LON };
export const MAP_RADIUS_MILES = 15;

// Where the run starts. The first run starts at home in Aloha.
// A new run after death can start at a random spot or a spot the player picks:
// opts.home = { lat, lon }, opts.homeLabel = short text such as "near Safeway".
export const homeOf = (state) => state.homePos || HOME;

// A random start point inside the play area (not too close to the edge).
export function randomStartPoint(rng = Math.random) {
  const r = 12 * Math.sqrt(rng()); // miles from the map center, even spread
  const a = rng() * 2 * Math.PI;
  return {
    lat: HOME.lat + (r * Math.sin(a)) / 69.09,
    lon: HOME.lon + (r * Math.cos(a)) / (69.09 * Math.cos((HOME.lat * Math.PI) / 180)),
  };
}

export function newGame(seed = Math.floor(Math.random() * 2 ** 31), opts = {}) {
  const homePos = opts.home ? { lat: +opts.home.lat, lon: +opts.home.lon } : { ...HOME };
  const r = mulberry32(hashString('setup' + seed));
  const state = {
    version: SAVE_VERSION,
    seed,
    rngState: seed,
    time: START_MINUTE,
    player: {
      food: 40, water: 35, warmth: 60, energy: 40, health: 70, morale: 40,
      energyMax: 60, weak: true, weakGoodHours: 0,
      wet: false, wetMinutes: 0, dryMinutes: 0,
      worn: { _v: 2, base: false, mid: false, shell: false, hat: false, gloves: false, boots: false, socks: false },
      wetness: 0,
      injuries: [],
      illness: { stomachH: 0, infection: null },
      painH: 0,
      lightHours: 10,
      lastComfortDay: -1,
      bodySeenDay: -1,
      lastDogPlayDay: -1,
    },
    homePos: homePos,
    homeLabel: opts.homeLabel || null,
    pos: { ...homePos },
    location: { kind: 'home' },
    carried: { backpack: 1 },
    home: {
      storage: {
        formula: 4, saline: 2, first_aid: 1, antibiotics: 1, pain_pills: 1,
        canned_food: 6, snacks: 1, dry_food: 1, flashlight: 1, winter_coat: 1, firewood: 3,
      },
      indoorTemp: 47,
      fireHours: 0,
      heaterOn: false,
      battery: 5.4,
      batteryMax: 13.5,
      tapWorks: true,
      tapStopDay: 9 + Math.floor(r() * 21), // day 10 to 30
      tankGal: 40,
      toiletGal: 3,
      rawGal: 0,
      safeGal: 0,
      furniture: 12,
      fridgeOpened: false,
      projects: {}, // built home base projects (see data/projects.js)
      work: {}, // hours of work done on started projects
    },
    places: {},
    houses: {},
    houseAreas: {},
    dog: {
      stage: 'none',
      arriveDay: 1 + Math.floor(r() * 4), // day 2 to 5
      revisitUsed: false,
      revisitDay: null,
      feedDays: [],
      name: null,
      food: 60, water: 80, health: 80, bond: 30,
      withPlayer: true,
      warned: 0,
    },
    weather: null,
    stats: { miles: 0, placesSearched: 0, zonesSearched: 0, housesSearched: 0 },
    flags: {},
    log: [],
    dead: null,
    pendingPrompt: null,
  };
  initWeather(state); // the weather system's init (same rng order as before)
  initNewSystems(state);
  state.systemVersions = systemVersions();
  applyBackground(state, opts.job, opts.traits);
  applyLegacy(state, opts.legacy);
  if (opts.homeLabel) log(state, `This run starts in a different house: ${opts.homeLabel}. It is your home now.`, 'story');
  log(state, 'You wake up in a hospital bed in your own living room. The feeding pump beeps. Its bag is empty.', 'story');
  log(state, 'The house is cold and silent. Nobody comes when you call out.', 'story');
  log(state, 'Hint: drink, eat, and get the house warm before the first night.', 'hint');
  return state;
}

// ---------- clock ----------
export const dayIndex = (t) => Math.floor(t / 1440);
export const minuteOfDay = (t) => ((t % 1440) + 1440) % 1440;

export function formatClock(t) {
  const m = Math.floor(minuteOfDay(t));
  let h = Math.floor(m / 60);
  const mm = String(m % 60).padStart(2, '0');
  const ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12 || 12;
  return `${h}:${mm} ${ampm}`;
}

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export function calendar(t) {
  const d = new Date(Date.UTC(2026, 10, 24) + dayIndex(t) * 86400000);
  return { year: d.getUTCFullYear(), month: d.getUTCMonth(), date: d.getUTCDate(), weekday: d.getUTCDay() };
}

export function formatDate(t) {
  const c = calendar(t);
  return `${DAYS[c.weekday]} ${c.date} ${MONTHS[c.month]} ${c.year}`;
}

export function formatDuration(min) {
  min = Math.round(min);
  const h = Math.floor(min / 60);
  const m = min % 60;
  if (h && m) return `${h} h ${m} min`;
  if (h) return `${h} h`;
  return `${m} min`;
}

// ---------- items ----------
export function addItem(bag, id, qty = 1) {
  bag[id] = Math.round(((bag[id] || 0) + qty) * 1000) / 1000;
  if (bag[id] <= 0.0001) delete bag[id];
}

export function removeItem(bag, id, qty = 1) {
  if (!bag[id]) return false;
  addItem(bag, id, -qty);
  return true;
}

export function bagWeight(bag) {
  let w = 0;
  for (const [id, q] of Object.entries(bag)) w += (ITEMS[id]?.weight || 0) * q;
  return Math.round(w * 10) / 10;
}

export function carryLimit(state) {
  let lim = state.carried.backpack ? 30 : 10;
  if (state.player.weak) lim *= 0.5;
  if (state.player.food < 25) lim *= 0.9;
  lim -= carryMinus(state) * (state.player.weak ? 0.5 : 1);
  return Math.round(lim);
}

export function has(state, id) {
  return (state.carried[id] || 0) > 0 || (state.location.kind === 'home' && (state.home.storage[id] || 0) > 0);
}

// A flashlight that is on and has power. The player can switch it off to save batteries.
export function hasLight(state) {
  return (state.carried.flashlight || 0) > 0 && state.player.lightHours > 0 && !state.player.lightOff;
}

// ---------- log ----------
export function log(state, text, kind = 'info') {
  const entry = { t: state.time, text, kind };
  state.log.push(entry);
  activity.line(state, entry); // diagnostics: which action and system wrote it (not saved)
  if (state.log.length > 300) state.log.splice(0, state.log.length - 300);
  journalNote(state, text, kind);
}

// QoL step 4: the journal writes itself. One short record per day, kept for the whole run
// (the log keeps only the last 300 lines). Places, items taken, and the main events.
function journalNote(state, text, kind) {
  if (!state.journal) state.journal = [];
  const day = dayIndex(state.time);
  let d = state.journal[state.journal.length - 1];
  if (!d || d.day !== day) {
    d = { day, places: [], taken: 0, searched: 0, events: [] };
    state.journal.push(d);
  }
  const arrive = /^You arrive at (.+)\.$/.exec(text);
  if (arrive) { if (!d.places.includes(arrive[1])) d.places.push(arrive[1]); return; }
  if (/^You walk to a house/.test(text)) { if (!d.places.includes('a house')) d.places.push('a house'); return; }
  if (/^You take: /.test(text)) { d.taken += 1; return; }
  if (/^You search the /.test(text)) { d.searched = (d.searched || 0) + 1; return; }
  if ((kind === 'danger' || kind === 'good' || kind === 'warn') && d.events.length < 8 && !d.events.includes(text)) d.events.push(text);
}
