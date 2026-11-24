// QoL step 3: one-line stock summary and home power numbers.
import { ITEMS } from '../data/items.js';
import { WATER_PER_QUART, FOOD_LOSS_PER_HOUR, WATER_LOSS_PER_HOUR, CAL_PER_FOOD_POINT } from './vitals.js';
import { solarToday } from './world.js';

const QUARTS_PER_GAL = 4;
export const HEATER_KW = 1.5; // same number as tick.js homeStep

function addBag(bag, totals) {
  for (const [id, q] of Object.entries(bag || {})) {
    const it = ITEMS[id];
    if (!it || q <= 0) continue;
    if (it.kind === 'food' && it.cal) totals.cal += it.cal * q;
    if (it.water) totals.water += it.water * (q / (it.portion || 1));
  }
}

// Days of food and water at rest: what you carry plus what is stored at home.
export function stockSummary(state) {
  const t = { cal: 0, water: 0 };
  addBag(state.carried, t);
  addBag(state.home.storage, t);
  const h = state.home;
  t.water += (h.tankGal + h.safeGal) * QUARTS_PER_GAL * WATER_PER_QUART;
  const foodDayPts = FOOD_LOSS_PER_HOUR * 24;
  const waterDayPts = WATER_LOSS_PER_HOUR * 24;
  return {
    foodDays: t.cal / CAL_PER_FOOD_POINT / foodDayPts,
    waterDays: t.water / waterDayPts,
    rawGal: h.rawGal,
  };
}

export function stockLine(state) {
  const s = stockSummary(state);
  const d = (x) => (x < 1 ? `${Math.round(x * 24)} h` : `${x < 10 ? x.toFixed(1) : Math.round(x)} days`);
  return `Food: ${d(s.foodDays)} · Water: ${d(s.waterDays)}${s.rawGal >= 0.25 ? ` (+${s.rawGal.toFixed(1)} gal to boil)` : ''}`;
}

// Home power: kWh in today, kW out now, hours the battery lasts.
export function powerSummary(state) {
  const h = state.home;
  const inToday = solarToday(state);
  const outKw = h.heaterOn ? HEATER_KW : 0;
  return {
    inToday,
    outKw,
    hoursLeft: outKw > 0 ? h.battery / outKw : null,
    heaterHoursFull: h.battery / HEATER_KW,
  };
}
