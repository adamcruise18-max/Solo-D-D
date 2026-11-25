// Scene light and weather for the views (engine-owned; read-only).
// The 3D inside view and the map use this to set light, sky and sound from the
// same game time and weather as the rules. It changes nothing in the state.
//
//   sceneEnv(state) -> {
//     minuteOfDay, hour,          game clock (hour is a decimal, 0..24)
//     sunrise, sunset,            minutes of the day
//     daylight,                   0 (night) .. 1 (full day), with dawn and dusk ramps
//     sunHeight,                  0 at sunrise and sunset .. 1 at solar noon (0 at night)
//     phase,                      'night' | 'dawn' | 'day' | 'dusk'
//     weather, cloud, precip,     weather type, cloud cover 0..1, 'none' | 'rain' | 'snow'
//     precipStrength,             0..1 (heavy rain 1)
//     windMph, fog,               wind and fog (0..1)
//     airF, season,               outside air temperature (°F) and season id
//     outdoorLight,               daylight × (1 − 0.6 × cloud): light at a window or door
//   }
import { sunFor, airTemp } from './world.js';
import { seasonOf } from './season.js';

const TWILIGHT = 40; // minutes of dawn and dusk light around sunrise and sunset

// Cloud cover, rain or snow, and fog for each weather type.
export const WEATHER_LOOK = {
  clear: { cloud: 0.05, precip: 'none', strength: 0, fog: 0 },
  cloudy: { cloud: 0.7, precip: 'none', strength: 0, fog: 0 },
  fog: { cloud: 0.6, precip: 'none', strength: 0, fog: 0.8 },
  rain: { cloud: 0.85, precip: 'rain', strength: 0.5, fog: 0.15 },
  heavy_rain: { cloud: 0.95, precip: 'rain', strength: 1, fog: 0.3 },
  windstorm: { cloud: 0.8, precip: 'rain', strength: 0.4, fog: 0 },
  snow: { cloud: 0.9, precip: 'snow', strength: 0.6, fog: 0.2 },
};

const clamp01 = (v) => Math.max(0, Math.min(1, v));

export function sceneEnv(state, t = state.time) {
  const m = ((t % 1440) + 1440) % 1440;
  const sun = sunFor(t);
  const rise = sun.rise;
  const set = sun.set;
  let daylight;
  let phase;
  if (m < rise - TWILIGHT || m > set + TWILIGHT) { daylight = 0; phase = 'night'; }
  else if (m < rise + TWILIGHT) { daylight = clamp01((m - (rise - TWILIGHT)) / (2 * TWILIGHT)); phase = 'dawn'; }
  else if (m > set - TWILIGHT) { daylight = clamp01(((set + TWILIGHT) - m) / (2 * TWILIGHT)); phase = 'dusk'; }
  else { daylight = 1; phase = 'day'; }
  const noon = (rise + set) / 2;
  const sunHeight = m <= rise || m >= set ? 0 : clamp01(Math.sin(Math.PI * (m - rise) / (set - rise)));
  const w = state.weather || { type: 'clear', wind: 0 };
  const look = WEATHER_LOOK[w.type] || WEATHER_LOOK.clear;
  return {
    minuteOfDay: m,
    hour: m / 60,
    sunrise: rise,
    sunset: set,
    solarNoon: noon,
    daylight,
    sunHeight,
    phase,
    weather: w.type,
    cloud: look.cloud,
    precip: look.precip,
    precipStrength: look.strength,
    fog: look.fog,
    windMph: w.wind || 0,
    airF: Math.round(airTemp(state, t)),
    season: seasonOf(t),
    outdoorLight: daylight * (1 - 0.6 * look.cloud),
  };
}
