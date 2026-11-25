// The garden (research step 8): its own system, owns state.garden.
// Needs the "Raised garden beds" project (4 beds). Sow a seed packet in a bed in
// the right months; each day at 5 AM the crop grows by the day's warmth and the
// soil's water; rain waters it, dry days dry it; frost kills tender crops.
// Harvest gives fresh food (engine/food.js spoilage); a ripe crop left too long rots.
//
// state.garden = { beds: [{ crop, day, growth 0..1, water 0..1, ripeDay, dead }] }
// Player actions (plant, water, harvest) are below; the builder wires them to the UI.
import { CROPS } from '../data/crops.js';
import { log, addItem, has, dayIndex } from './state.js';
import { built } from './base.js';
import { addFresh } from './food.js';

export const BEDS = 4;
export const ROT_DAYS = 30; // a ripe crop rots this many days after it is ripe
export const WATER_GAL = 2; // one bed, one watering
const DRY_PER_DAY = 0.35;
const RAIN = new Set(['rain', 'heavy_rain', 'windstorm', 'snow', 'ice_storm']);

const monthOfDay = (day) => new Date(Date.UTC(2026, 10, 24) + day * 86400000).getUTCMonth();

export function initGarden(state) {
  state.garden = { beds: [] };
}

function garden(state) {
  if (!state.garden) initGarden(state);
  return state.garden;
}

export function bedCount(state) {
  return built(state, 'garden_beds') ? BEDS : 0;
}

// Growth in one day, 0..1 of the whole: warmth (the day's mean air) and water.
export function dayGrowth(crop, meanF, water) {
  const c = CROPS[crop];
  let warm = 0;
  if (meanF >= c.minF + 15) warm = meanF > 92 ? 0.5 : 1;
  else if (meanF >= c.minF + 7) warm = 0.7;
  else if (meanF >= c.minF) warm = 0.3;
  const wet = water > 0.2 ? 1 : 0.2;
  return (warm * wet) / c.days;
}

export function gardenDaily(state, day) {
  const g = garden(state);
  if (!g.beds.length) return;
  const w = state.weather;
  const mean = (w.high + w.low) / 2;
  const rained = RAIN.has(w.type);
  for (const b of g.beds) {
    if (!b.crop || b.dead) continue;
    const c = CROPS[b.crop];
    if (c.frostF != null && w.low <= c.frostF) {
      b.dead = true;
      log(state, `Frost in the night. The ${c.name.toLowerCase()} in the garden is dead.`, 'warn');
      continue;
    }
    b.water = rained ? 1 : Math.max(0, b.water - DRY_PER_DAY * (w.type === 'heat_wave' ? 1.7 : 1));
    if (b.growth < 1) {
      b.growth = Math.min(1, b.growth + dayGrowth(b.crop, mean, b.water));
      if (b.growth >= 1 - 1e-9) {
        b.growth = 1; // sums of small parts can stop just short of 1
        b.ripeDay = day;
        log(state, `The ${c.name.toLowerCase()} in the garden is ready to harvest.`, 'good');
      }
    } else if (b.ripeDay != null && day - b.ripeDay >= ROT_DAYS) {
      b.dead = true;
      log(state, `The ${c.name.toLowerCase()} was left too long and has gone bad.`, 'warn');
    }
  }
}

// ---------- player actions ----------
export function canPlant(state, cropId) {
  const c = CROPS[cropId];
  if (!c) return 'No such crop';
  if (!bedCount(state)) return 'Build the garden beds first';
  if (!has(state, 'seeds')) return 'You need a seed packet';
  const g = garden(state);
  const free = g.beds.filter((b) => b.crop && !b.dead).length < bedCount(state);
  if (!free) return 'All beds are in use';
  if (!c.plant.includes(monthOfDay(dayIndex(state.time)))) return `Not the season to sow ${c.name.toLowerCase()}`;
  return null;
}

export function plant(state, cropId) {
  const why = canPlant(state, cropId);
  if (why) { log(state, why + '.'); return false; }
  const g = garden(state);
  g.beds = g.beds.filter((b) => b.crop && !b.dead);
  g.beds.push({ crop: cropId, day: dayIndex(state.time), growth: 0, water: 0.6, ripeDay: null, dead: false });
  const bag = (state.carried.seeds || 0) > 0 ? state.carried : state.home.storage;
  addItem(bag, 'seeds', -1);
  log(state, `You sow ${CROPS[cropId].name.toLowerCase()} in a garden bed.`, 'good');
  return true;
}

// Water every growing bed from the rain barrels (raw water is fine for plants).
export function waterGarden(state) {
  const g = garden(state);
  const beds = g.beds.filter((b) => b.crop && !b.dead && b.growth < 1 && b.water < 1);
  if (!beds.length) { log(state, 'The beds do not need water.'); return 0; }
  const h = state.home;
  let n = 0;
  for (const b of beds) {
    if (h.rawGal >= WATER_GAL) h.rawGal -= WATER_GAL;
    else if (h.tankGal >= WATER_GAL) h.tankGal -= WATER_GAL;
    else break;
    b.water = 1;
    n++;
  }
  log(state, n ? `You water ${n} garden bed${n > 1 ? 's' : ''} (${n * WATER_GAL} gal).` : 'You have no water to spare for the garden.');
  return n;
}

export function harvest(state) {
  const g = garden(state);
  const ripe = g.beds.filter((b) => b.crop && !b.dead && b.growth >= 1);
  if (!ripe.length) { log(state, 'Nothing in the garden is ready.'); return {}; }
  const got = {};
  for (const b of ripe) {
    const [id, qty] = CROPS[b.crop].yield;
    addFresh(state, [state.home.storage, state.carried], id, qty, 0);
    addItem(state.home.storage, id, qty);
    got[id] = (got[id] || 0) + qty;
    b.dead = true; // the bed is free again
  }
  g.beds = g.beds.filter((b) => !b.dead);
  log(state, `You harvest the garden: ${Object.entries(got).map(([id, q]) => `${q} ${id.replace('_', ' ')}`).join(', ')}. It goes into storage.`, 'good');
  return got;
}

// For the UI: each bed, and what you can sow this month.
export function gardenInfo(state) {
  const g = garden(state);
  const month = monthOfDay(dayIndex(state.time));
  return {
    beds: bedCount(state),
    planted: g.beds.map((b) => ({
      crop: b.crop,
      name: CROPS[b.crop]?.name,
      growth: Math.round(b.growth * 100),
      water: Math.round(b.water * 100),
      ready: b.growth >= 1 && !b.dead,
      dead: b.dead,
    })),
    canSow: Object.entries(CROPS).filter(([, c]) => c.plant.includes(month)).map(([id]) => id),
  };
}

export const gardenSystem = {
  id: 'garden',
  label: 'Garden',
  order: 1008, // after the home, before the dog
  version: 1,
  owns: ['garden'],
  // One step per day, in order: skipping days must run each day (exact).
  catchUp: 'exact',
  init: (state) => initGarden(state),
  daily: (state, day) => gardenDaily(state, day),
};
