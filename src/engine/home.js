// The home base (external review milestone 5): its own system, owns state.home.
// Moved out of the legacy rules with the same numbers. Each step: the fire and
// the electric heater warm the house, it cools toward the outside air, solar
// charges the battery, rain barrels fill, and the city water stops one day.
// At 5 AM: the filter station cleans rain water by itself (the water chain).
//
// Projects (build, work blocks) are player actions in base.js; their data is
// src/data/projects.js. Only this system and those actions change state.home.
import { log, dayIndex } from './state.js';
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
  const target = Math.min(75, passive + heat);
  const rate = heat > 0 ? 0.25 : 0.05 * heatLossFactor(state);
  h.indoorTemp += (target - h.indoorTemp) * (1 - Math.pow(1 - rate, dt));

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

export function homeDaily(state) {
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
