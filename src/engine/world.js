// Weather, air temperature, day and night.
import { CLIMATE, WEATHER_TYPES } from '../data/climate.js';
import { sunTimes } from '../sun.js';
import { rand, randInt } from '../rng.js';
import { hazardColder } from './hazards.js';

const dayOf = (t) => Math.floor(t / 1440);

function monthOfDay(day) {
  return new Date(Date.UTC(2026, 10, 24) + day * 86400000).getUTCMonth();
}

function rollType(state, month, prevType) {
  const c = CLIMATE[month];
  const winter = month >= 10 || month <= 2;
  if (winter && prevType && rand(state) < 0.6) return prevType === 'windstorm' ? 'rain' : prevType;
  if (winter && rand(state) < 0.04) return 'windstorm';
  if (rand(state) < c.rainDays / 30) return rand(state) < 0.2 ? 'heavy_rain' : 'rain';
  const r = rand(state);
  return r < 0.35 ? 'clear' : r < 0.85 ? 'cloudy' : 'fog';
}

function windFor(state, type) {
  if (type === 'windstorm') return randInt(state, 30, 60);
  if (type === 'rain' || type === 'heavy_rain') return randInt(state, 5, 20);
  return randInt(state, 0, 10);
}

function finishDay(state, w, month) {
  // Snow when wet weather meets freezing air (Dec-Feb).
  if ((w.type === 'rain' || w.type === 'heavy_rain') && w.low <= 32 && (month === 11 || month <= 1)) {
    w.type = 'snow';
    w.snowInches = randInt(state, 1, 6);
  }
  if (w.type === 'clear') w.nextLow -= 5;
  return w;
}

export function initWeather(state) {
  const day = 0;
  const month = monthOfDay(day);
  const c = CLIMATE[month];
  const delta = randInt(state, -6, 6);
  const type = rollType(state, month, null);
  state.weather = finishDay(state, {
    day,
    type,
    wind: windFor(state, type),
    low: c.low + delta,
    high: c.high + delta,
    prevHigh: c.high + delta,
    nextLow: c.low + randInt(state, -8, 8),
  }, month);
}

// Called at 5 AM of `day`.
export function rollWeather(state, day) {
  const month = monthOfDay(day);
  const c = CLIMATE[month];
  const old = state.weather;
  const type = rollType(state, month, old.baseType || old.type); // a rare spell (rareweather.js) keeps its normal type in baseType
  const low = old.nextLow;
  state.weather = finishDay(state, {
    day,
    type,
    wind: windFor(state, type),
    low,
    high: low + (c.high - c.low) + randInt(state, -3, 3),
    prevHigh: old.high,
    nextLow: c.low + randInt(state, -8, 8),
  }, month);
}

export function sunFor(t) {
  return sunTimes(dayOf(t));
}

export function isNight(t) {
  const m = ((t % 1440) + 1440) % 1440;
  const s = sunFor(t);
  return m < s.rise || m > s.set;
}

// Air temperature: low at sunrise, high at 3 PM, then down to the next low.
export function airTemp(state, t) {
  return baseAirTemp(state, t) - hazardColder(state, t);
}

function baseAirTemp(state, t) {
  const w = state.weather;
  const m = ((t % 1440) + 1440) % 1440;
  const s = sunFor(t);
  const peak = 15 * 60;
  const ease = (a, b, f) => a + (b - a) * (1 - Math.cos(Math.PI * Math.max(0, Math.min(1, f)))) / 2;
  if (m < s.rise) {
    // Night before sunrise: from yesterday's high to today's low.
    const span = 1440 - peak + s.rise;
    return ease(w.prevHigh, w.low, (m + 1440 - peak) / span);
  }
  if (m <= peak) return ease(w.low, w.high, (m - s.rise) / (peak - s.rise));
  const span = 1440 - peak + s.rise;
  return ease(w.high, w.nextLow, (m - peak) / span);
}

export function weatherInfo(state) {
  return WEATHER_TYPES[state.weather.type];
}

export function isBadWeather(state) {
  return ['heavy_rain', 'windstorm', 'snow', 'ice_storm', 'smoke'].includes(state.weather.type);
}

export function solarToday(state) {
  const month = monthOfDay(state.weather.day);
  return CLIMATE[month].solar * WEATHER_TYPES[state.weather.type].solar;
}
