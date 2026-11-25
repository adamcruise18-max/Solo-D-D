// The home base (external review milestone 5): its own system, owns state.home.
// Moved out of the legacy rules with the same numbers. Each step: the fire and
// the electric heater warm the house, it cools toward the outside air, solar
// charges the battery, rain barrels fill, and the city water stops one day.
// At 5 AM: the filter station cleans rain water by itself (the water chain).
//
// Projects (build, work blocks) are player actions in base.js; their data is
// src/data/projects.js. Only this system and those actions change state.home.
import { log, dayIndex } from './state.js';
import { stream } from '../core/rng.js';
import { sunFor, solarToday } from './world.js';
import { built, fireHeat, heatLossFactor, runAutoFilter } from './base.js';
import { environment } from './tick.js';

export function homeStep(state, dt, env) {
  const h = state.home;
  const air = env.air;
  let heat = 0;
  if (h.fireHours > 0) {
    heat += fireHeat(state);
    h.fireHours = Math.max(0, h.fireHours - dt);
    if (h.fireHours === 0 && state.location.kind === 'home') log(state, 'The fire in the fireplace burns out.');
  }
  if (h.heaterOn) {
    h.battery -= 1.5 * dt;
    heat += 20;
    if (h.battery <= 0) {
      h.battery = 0;
      h.heaterOn = false;
      log(state, 'The home battery is empty. The electric heater stops.', 'warn');
    }
  }
  const passive = air + 6;
  // The living room holds the fire, the stove and the heater. Broken windows
  // there lose heat (none broken: the same numbers as before the room model).
  const lw = windowLoss(h, 'living');
  const target = Math.min(75, passive + heat / lw);
  const rate = heat > 0 ? 0.25 : Math.min(0.9, 0.05 * heatLossFactor(state) * lw);
  h.indoorTemp += (target - h.indoorTemp) * (1 - Math.pow(1 - rate, dt));
  roomsStep(h, passive, dt);

  // Solar charge in daylight
  const m = ((state.time % 1440) + 1440) % 1440;
  const s = sunFor(state.time);
  if (m > s.rise && m < s.set) {
    const hours = (s.set - s.rise) / 60;
    h.battery = Math.min(h.batteryMax, h.battery + (solarToday(state) / hours) * dt);
  }

  // Rain barrels fill from the gutter (rain water is unsafe until boiled or filtered)
  if (built(state, 'rain_barrels') && h.rawGal < 110) {
    const t = state.weather.type;
    const perH = t === 'heavy_rain' ? 5 : t === 'rain' || t === 'windstorm' ? 2 : 0;
    if (perH) h.rawGal = Math.min(110, h.rawGal + perH * dt);
  }

  // City water stops on a hard freeze or on a random day
  if (h.tapWorks && (air < 25 || dayIndex(state.time) >= h.tapStopDay)) {
    h.tapWorks = false;
    log(state, air < 25
      ? 'Hard freeze. The water pipes are frozen. The kitchen tap stops.'
      : 'The kitchen tap coughs and stops. The city water is gone now.', 'warn');
  }
}

// ---------- Heat by room (research step 8) ----------
// The living room is h.indoorTemp (the fire is there). Each other room trades
// heat with the outside (more through broken windows) and with the living room
// through its door (much less when the door is closed).
export const ROOMS = [
  { id: 'living', label: 'Living room' },
  { id: 'kitchen', label: 'Kitchen' },
  { id: 'bedroom', label: 'Bedroom' },
  { id: 'bath', label: 'Bathroom' },
];
const OUT_RATE = 0.05; // per hour, to the outside, for a closed-up room
const DOOR_OPEN = 0.15; // per hour, to the living room
const DOOR_CLOSED = 0.02;
const BROKEN = 1.5; // each broken window adds this much loss
const BOARDED = 0.3; // a boarded window keeps most of it out

export function ensureRooms(h) {
  if (!h.rooms) {
    h.rooms = {};
    for (const r of ROOMS) if (r.id !== 'living') h.rooms[r.id] = { temp: h.indoorTemp };
  }
  if (!h.windows) h.windows = {}; // { [room]: { broken, boarded } }
  if (!h.doorsClosed) h.doorsClosed = {}; // { [room]: true }
  return h;
}

export function windowLoss(h, room) {
  const w = h.windows?.[room];
  if (!w) return 1;
  return 1 + BROKEN * Math.max(0, (w.broken || 0) - (w.boarded || 0)) + BROKEN * BOARDED * (w.boarded || 0);
}

// The living room is bigger than one other room, so a cold room pulls it down
// a third as fast as it warms that room.
const LIVING_SHARE = 1 / 3;

function roomsStep(h, passive, dt) {
  ensureRooms(h);
  // Heat flows both ways: open doors to cold rooms cool the living room. That
  // is the reason to close doors.
  for (const [id, r] of Object.entries(h.rooms)) {
    const kDoor = (h.doorsClosed[id] ? DOOR_CLOSED : DOOR_OPEN) * LIVING_SHARE;
    h.indoorTemp += (r.temp - h.indoorTemp) * (1 - Math.pow(1 - kDoor, dt));
  }
  for (const [id, r] of Object.entries(h.rooms)) {
    const kOut = OUT_RATE * windowLoss(h, id);
    const kDoor = h.doorsClosed[id] ? DOOR_CLOSED : DOOR_OPEN;
    const target = (kOut * passive + kDoor * h.indoorTemp) / (kOut + kDoor);
    const rate = Math.min(0.9, kOut + kDoor);
    r.temp += (target - r.temp) * (1 - Math.pow(1 - rate, dt));
  }
}

export function roomTemp(state, room) {
  const h = state.home;
  if (room === 'living' || !h.rooms?.[room]) return h.indoorTemp;
  return h.rooms[room].temp;
}

// Changes from actions or events (the pacer may change home: see systems effects).
export function breakWindow(state, room) {
  const h = ensureRooms(state.home);
  const w = (h.windows[room] ||= { broken: 0, boarded: 0 });
  w.broken += 1;
}
export function boardWindow(state, room) {
  const h = ensureRooms(state.home);
  const w = h.windows[room];
  if (!w || (w.boarded || 0) >= (w.broken || 0)) return false;
  w.boarded = (w.boarded || 0) + 1;
  return true;
}
// Where the player sleeps at home: the bedroom (a bed, +10 °F) or by the fire
// in the living room (a couch and blankets, +6 °F).
export const SLEEP_SPOTS = { bedroom: { label: 'Bedroom', bed: 10 }, living: { label: 'By the fire', bed: 6 } };
export function sleepSpot(state) {
  return SLEEP_SPOTS[state.home.sleepSpot] ? state.home.sleepSpot : 'bedroom';
}
export function setSleepSpot(state, spot) {
  if (!SLEEP_SPOTS[spot]) return false;
  state.home.sleepSpot = spot;
  return true;
}
export function sleepTemp(state) {
  const spot = sleepSpot(state);
  return { temp: roomTemp(state, spot), bed: SLEEP_SPOTS[spot].bed, spot };
}

export function setDoor(state, room, closed) {
  const h = ensureRooms(state.home);
  if (!h.rooms[room]) return false;
  h.doorsClosed[room] = !!closed;
  return true;
}

// For the heat panel: each room's temperature, what loses heat, and the sources.
export function homeHeat(state) {
  const h = state.home;
  const air = environment(state, 'rest').air;
  return {
    outside: Math.round(air),
    sources: { fire: h.fireHours > 0 ? fireHeat(state) : 0, fireHours: h.fireHours, heater: h.heaterOn ? 20 : 0, stove: built(state, 'wood_stove') },
    insulated: built(state, 'insulate_living'),
    sleepSpot: sleepSpot(state),
    rooms: ROOMS.map((r) => {
      const w = h.windows?.[r.id] || { broken: 0, boarded: 0 };
      return {
        id: r.id,
        label: r.label,
        temp: Math.round(roomTemp(state, r.id) * 10) / 10,
        brokenWindows: (w.broken || 0) - (w.boarded || 0),
        boardedWindows: w.boarded || 0,
        doorClosed: r.id === 'living' ? null : !!h.doorsClosed?.[r.id],
        loss: Math.round(windowLoss(h, r.id) * 100) / 100, // 1 = a whole, closed-up room
      };
    }),
  };
}

// Storms break windows now and then (browser playtest 2). Stream 'home'.
export const WINDOW_BREAK = { windstorm: 0.08, ice_storm: 0.1, heavy_rain: 0.01 };
const WINDOW_ROOMS = ['living', 'kitchen', 'bedroom', 'bath'];
export function stormWindows(state) {
  const p = WINDOW_BREAK[state.weather?.type];
  if (!p) return null;
  const r = stream(state, 'home');
  if (r() >= p) return null;
  const room = WINDOW_ROOMS[Math.floor(r() * WINDOW_ROOMS.length)];
  breakWindow(state, room);
  const label = ROOMS.find((x) => x.id === room)?.label?.toLowerCase() || room;
  log(state, `A crash in the night: the storm broke a window in the ${label}. Cold air pours in. Board it up.`, 'warn');
  return room;
}

// Playtest 3: warn when the stored water runs low after the tap stops
// (once at each level; a refill above the level arms it again).
export const WATER_WARN = [10, 3];
export function waterWarning(state) {
  const h = state.home;
  if (h.tapWorks) return null;
  const gal = (h.tankGal || 0) + (h.safeGal || 0);
  const lvl = WATER_WARN.filter((x) => gal < x).pop() ?? null; // the lowest level passed
  if (lvl == null) { delete h.waterWarned; return null; }
  if (h.waterWarned != null && h.waterWarned <= lvl) return null;
  h.waterWarned = lvl;
  log(state, lvl <= 3
    ? `Only ${gal.toFixed(1)} gal of clean water left. Find water today: rain, a creek to boil, or bottles in stores.`
    : `The stored water is getting low (${gal.toFixed(1)} gal). Rain barrels and a filter would keep it full.`, lvl <= 3 ? 'danger' : 'warn');
  return lvl;
}

export function homeDaily(state) {
  stormWindows(state);
  waterWarning(state);
  const filtered = runAutoFilter(state);
  if (filtered >= 0.25) log(state, `The filter station cleaned ${filtered.toFixed(1)} gal of rain water overnight.`, 'good');
}

export const homeSystem = {
  id: 'home',
  label: 'Home base',
  order: 1005, // right after the legacy rules, before the dog: the same order as before
  version: 1,
  legacy: true, // state.home was in saves before the engine; newGame() makes it
  owns: ['home'],
  // The fire and the battery run out inside a day.
  catchUp: 'event',
  step: (state, dtHours, ctx) => homeStep(state, dtHours, environment(state, ctx.mode)),
  daily: (state) => homeDaily(state),
};
