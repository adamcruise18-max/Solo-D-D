// Action previews (external review, 2.4 and 3.4): what the player needs to know
// before a choice. Pure functions: they read the state and change nothing.
// The UI shows them; the numbers come from the same rules that run the game.
//
//   weatherOutlook(state)          now, its effects, and what comes next
//   actionTiming(state, minutes)   when the action ends; does it pass 5 AM?
//   tripPreview(state, dest)       a walk: time, energy, weather and finish time
import { WEATHER_TYPES } from '../data/climate.js';
import { airTemp, isNight, weatherInfo } from './world.js';
import { formatClock, formatDuration } from './state.js';
import { estimateTrip } from './travel.js';
import { environment, feltTemp } from './tick.js';
import { wetGainPerHour, WET_LIMIT } from './clothes.js';
import { gameDay } from '../core/clock.js';

const DAY_START = 300; // 5 AM

// Effects of the weather now, in the player's words. Each one names the rule it
// comes from (same functions), so the text cannot drift from the numbers.
export function weatherEffects(state) {
  const w = state.weather;
  const info = weatherInfo(state);
  const p = state.player;
  const out = [];
  if (w.type === 'snow') out.push({ id: 'slow', text: 'Walking is slower (snow).', level: 'warn' });
  if (info.wetAfter) {
    // Same rate as tickStep(): wetness per hour outside, from the weather and your shell.
    const perHour = wetGainPerHour(p, w.type, info.wetAfter);
    const toWet = perHour > 0 ? Math.max(0, (WET_LIMIT - (p.wetness || 0)) / perHour) * 60 : Infinity;
    if (perHour <= 0) out.push({ id: 'wet', text: 'You stay dry outside.', level: 'ok' });
    else if (toWet === 0) out.push({ id: 'wet', text: 'You are wet already. Outside you get wetter.', level: 'danger' });
    else out.push({ id: 'wet', text: `Outside you are wet through after about ${formatDuration(toWet)}.`, level: toWet < 60 ? 'warn' : 'ok' });
  }
  // Wind chill as feltTemp() counts it (your clothes block part of the wind).
  const env = environment(state, 'walk');
  const chill = Math.round(feltTemp(state, 'walk', { ...env, wind: 0 }) - feltTemp(state, 'walk', env));
  if (chill >= 3) {
    out.push({ id: 'wind', text: `Wind ${w.wind} mph: outside it feels ${chill} °F colder.`, level: w.wind >= 30 ? 'danger' : 'warn' });
  }
  return out;
}

// The next 5 AM after time t, in game minutes.
export function nextDayStart(t) {
  return (gameDay(t) + 1) * 1440 + DAY_START;
}

export function weatherOutlook(state, t = state.time) {
  const w = state.weather;
  const next = nextDayStart(t);
  return {
    type: w.type,
    label: WEATHER_TYPES[w.type].label,
    airF: Math.round(airTemp(state, t)),
    windMph: w.wind,
    highF: Math.round(w.high),
    lowF: Math.round(w.low),
    night: isNight(t),
    effects: weatherEffects(state),
    // The next weather change: the weather rolls once a day at 5 AM.
    // Tomorrow's low is known now (it is the end of today's temperature curve).
    next: { at: next, atText: formatClock(next), inMinutes: Math.round(next - t), lowF: Math.round(w.nextLow) },
  };
}

// When does an action of `minutes` end, and does it pass the 5 AM day change?
// At 5 AM the weather changes and the daily rules run (food, morale, the dog).
export function actionTiming(state, minutes) {
  const end = state.time + minutes;
  const next = nextDayStart(state.time);
  const crosses = end >= next;
  return {
    minutes,
    durationText: formatDuration(minutes),
    end,
    endText: formatClock(end),
    crossesDayStart: crosses,
    dayStartText: crosses ? `The new day starts at ${formatClock(next)}: the weather can change.` : null,
  };
}

// A walk to dest ({lat, lon}): the same numbers as travel(), plus the weather.
export function tripPreview(state, dest) {
  const trip = estimateTrip(state, dest);
  const timing = actionTiming(state, trip.minutes);
  return {
    miles: trip.miles,
    minutes: trip.minutes,
    energy: trip.energy,
    mph: trip.mph,
    slowBecause: trip.why,
    weather: weatherOutlook(state),
    darkOnArrival: isNight(timing.end),
    ...timing,
  };
}
