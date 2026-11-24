// Game state: creation, clock helpers, inventory helpers and the log.
import { hashString, mulberry32 } from '../rng.js';
import { ITEMS } from '../data/items.js';
import { HOME_LAT, HOME_LON } from '../sun.js';
import { initWeather } from './world.js';

export const SAVE_VERSION = 1;
export const START_MINUTE = 9 * 60 + 5; // Day 1, 9:05 AM
export const HOME = { lat: HOME_LAT, lon: HOME_LON };
export const MAP_RADIUS_MILES = 15;

export function newGame(seed = Math.floor(Math.random() * 2 ** 31)) {
  const r = mulberry32(hashString('setup' + seed));
  const state = {
    version: SAVE_VERSION,
    seed,
    rngState: seed,
    time: START_MINUTE,
    player: {
      food: 30, water: 20, warmth: 60, energy: 40, health: 70, morale: 40,
      energyMax: 60, weak: true, weakGoodHours: 0,
      wet: false, wetMinutes: 0, dryMinutes: 0,
      worn: { coat: false, hat: false, gloves: false, boots: false, rain: false },
      injuries: [],
      illness: { stomachH: 0, infection: null },
      painH: 0,
      lightHours: 10,
      lastComfortDay: -1,
      bodySeenDay: -1,
      lastDogPlayDay: -1,
    },
    pos: { ...HOME },
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
  initWeather(state);
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
  return Math.round(lim);
}

export function has(state, id) {
  return (state.carried[id] || 0) > 0 || (state.location.kind === 'home' && (state.home.storage[id] || 0) > 0);
}

export function hasLight(state) {
  return (state.carried.flashlight || 0) > 0 && state.player.lightHours > 0;
}

// ---------- log ----------
export function log(state, text, kind = 'info') {
  state.log.push({ t: state.time, text, kind });
  if (state.log.length > 300) state.log.splice(0, state.log.length - 300);
}
