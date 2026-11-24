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
import { gameDay } from '../core/clock.js';

const DAY_START = 300; // 5 AM

// Effects of the weather now, in the player's words. Each one names the rule it
// comes from, so the text cannot drift from the numbers.
export function weatherEffects(state) {
  const w = state.weather;
  const info = weatherInfo(state);
  const out = [];
  if (w.type === 'snow') out.push({ id: 'slow', text: 'Walking is slower (snow).', level: 'warn' });
  if (info.wetAfter) {
    const rainGear = state.player.worn.rain && w.type !== 'heavy_rain';
    out.push(rainGear
      ? { id: 'wet', text: 'Your rain gear keeps you dry.', level: 'ok' }
      : { id: 'wet', text: `You get wet outside after about ${info.wetAfter} min.`, level: 'warn' });
  }
  // Wind chill as in feltTemp() (src/engine/tick.js): 5 °F per 10 mph, outside only.
  const chill = Math.round((w.wind / 10) * 5);
  if (w.wind >= 30) out.push({ id: 'wind', text: `Strong wind (${w.wind} mph): it feels ${chill} °F colder outside.`, level: 'danger' });
  else if (w.wind >= 10) out.push({ id: 'wind', text: `Wind ${w.wind} mph: it feels ${chill} °F colder outside.`, level: 'warn' });
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
