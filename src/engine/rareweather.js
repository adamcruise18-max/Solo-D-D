// Rare weather (research spec step 7, part 3). Portland realism: an ice storm about
// one winter in two, summer heat waves some years, late-summer wildfire smoke.
// A "spell" lasts some days and takes the place of the day's normal weather.
//
// It is part of the weather system (only it writes state.weather):
//   state.weather.spell = { id, daysLeft } while a spell is on.
// Rolls: the named stream 'weather-rare' (src/core/rng.js), so the normal weather
// rolls (shared game rng) do not move.
// Effects: ice storm = slow, slippery travel (travel.js speed, roadEvent);
// heat wave = thirst x1.5 outside in the day (tick.js); smoke = health loss
// outside without an N95 mask (tick.js).
import { stream } from '../core/rng.js';

const monthOfDay = (day) => new Date(Date.UTC(2026, 10, 24) + day * 86400000).getUTCMonth();

// months: calendar months (0 = January). chance: per day that fits.
// Chances tuned by simulation (test/rareweather.test.js) for the spec's rates.
export const SPELLS = {
  ice_storm: {
    months: [11, 0, 1],
    fits: (w) => ['rain', 'heavy_rain', 'snow'].includes(w.type) && w.low <= 34,
    chance: 0.02,
    days: [1, 2],
    shape: (w, r) => {
      w.high = Math.min(w.high, 33);
      w.low = Math.min(w.low, 28);
      w.wind = 15 + Math.floor(r() * 21);
      delete w.snowInches;
    },
    start: 'Freezing rain. Every branch and wire wears a coat of ice. Trees and power lines will come down, and the roads are glass.',
  },
  heat_wave: {
    months: [6, 7],
    fits: (w) => ['clear', 'cloudy'].includes(w.type),
    chance: 0.012,
    days: [3, 5],
    shape: (w, r) => {
      w.high = 98 + Math.floor(r() * 9);
      w.low = Math.max(w.low, 62);
      w.nextLow = Math.max(w.nextLow, 64);
      w.wind = Math.floor(r() * 6);
    },
    start: 'A heat wave. It will be over 100°F in the afternoon. Drink more, and stay in the shade from noon to evening.',
  },
  smoke: {
    months: [7, 8],
    fits: (w) => ['clear', 'cloudy', 'fog'].includes(w.type),
    chance: 0.012,
    days: [3, 7],
    shape: (w) => {
      w.high -= 4; // smoke shades the sun
    },
    start: 'Wildfire smoke. The sky is orange and the sun is a red disc. The air burns your throat outside; an N95 mask helps.',
  },
};

const pickInt = (r, [a, b]) => a + Math.floor(r() * (b - a + 1));

// Snow is rare in Portland (2 to 4 snow spells a winter). The normal roll makes
// snow on every cold wet day, so most of those days stay cold rain.
export const SNOW_KEEP = 0.28;

// Called by the weather system at 5 AM, after the normal roll for the day.
// `old` is yesterday's weather (rollWeather makes a new state.weather object).
export function rollSpell(state, day, old = {}) {
  const prev = old.spell;
  const w = state.weather;
  const r = stream(state, 'weather-rare');
  const month = monthOfDay(day);
  if (w.type === 'snow') {
    const keep = old.type === 'snow' || r() < SNOW_KEEP; // a snow spell keeps going
    if (!keep) { w.type = 'rain'; delete w.snowInches; }
  }
  let spell = null;
  if (prev && prev.daysLeft > 1) spell = { id: prev.id, daysLeft: prev.daysLeft - 1, started: false };
  else {
    for (const [id, s] of Object.entries(SPELLS)) {
      if (!s.months.includes(month) || !s.fits(w)) continue;
      if (r() < s.chance) { spell = { id, daysLeft: pickInt(r, s.days), started: true }; break; }
    }
  }
  if (!spell) return null;
  w.baseType = w.type;
  w.type = spell.id;
  SPELLS[spell.id].shape(w, r);
  w.spell = { id: spell.id, daysLeft: spell.daysLeft, first: spell.started };
  return spell;
}

export function spellStartText(id) {
  return SPELLS[id]?.start || '';
}
