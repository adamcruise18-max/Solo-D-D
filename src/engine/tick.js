// Time passes: stats change, the home cools or warms, the dog gets hungry.
// Modes: 'rest' (awake, light activity), 'work' (searching), 'heavy' (hard work),
// 'walk' (travel outside), 'sleep'.
import { rand, randInt, chance } from '../rng.js';
import { stream } from '../core/rng.js';
import * as V from './vitals.js';
import { airTemp, isNight, weatherInfo } from './world.js';
import { spellStartText } from './rareweather.js';
import { sleepTemp } from './home.js';
import { dayIndex, log, hasLight, bagWeight, carryLimit, has } from './state.js';
import { ITEMS } from '../data/items.js';
import { CATEGORIES } from '../data/places.js';
import { getPlace } from './placesdb.js';
import { seasonDaily } from './season.js';
import { built, foodItemsStored } from './base.js';
import { infectRiskFactor } from './skills.js';
import { gameClock } from './systems.js';
import { ageFood } from './food.js';
import { foodLossFactor, sleepGainFactor, energyUseFactor } from './background.js';
import { decayActive } from './decay.js';
import { clothingWarmth, windBlock, normalizeWorn, wetGainPerHour, dryPerHour, WET_LIMIT } from './clothes.js';

const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

// Clothes in layers (engine/clothes.js): warmth, wind block and wetness.
export function clothingRating(state) {
  return clothingWarmth(state.player);
}

// Where is the player, and what air does the player feel?
export function environment(state, mode, t = state.time) {
  const air = airTemp(state, t);
  const night = isNight(t);
  if (mode === 'walk' || state.location.kind === 'wild') {
    return { outside: true, temp: air, wind: state.weather.wind, precip: !!weatherInfo(state).wetAfter, dark: night, air };
  }
  if (state.location.kind === 'home') {
    return { outside: false, temp: state.home.indoorTemp, wind: 0, precip: false, dark: night && !built(state, 'led_lights'), air, home: true };
  }
  let dark = night;
  if (state.location.kind === 'place') {
    const p = getPlace(state.location.id);
    if (p && CATEGORIES[p.cat]?.dark) dark = true;
  }
  // A leaking roof (decay row roof_leaks) in the rain: cold drips, no shelter warmth.
  const key = state.location.kind === 'place' || state.location.kind === 'house' ? state.location.id : null;
  const leak = !!(key && weatherInfo(state).wetAfter && decayActive(state, 'roof_leaks', key, t));
  return { outside: false, temp: air + (leak ? 1 : 5), wind: 0, precip: false, dark, air, leak };
}

export function feltTemp(state, mode, env = environment(state, mode)) {
  // Asleep at home: the room you sleep in (bedroom, or by the fire), not the living room.
  const sleepHome = mode === 'sleep' && env.home ? sleepTemp(state) : null;
  // Clothes count at 80%: they slow heat loss, they do not make heat (playtest list 1).
  let felt = (sleepHome ? sleepHome.temp : env.temp) + CLOTHES_SHARE * clothingRating(state);
  if (env.outside) felt -= (env.wind / 10) * 7 * (1 - windBlock(state.player));
  // Wet through outside: the wind dries you and takes the heat with it.
  if (env.outside && (state.player.wetness || 0) >= 50) felt -= WET_OUTSIDE;
  // Moving makes body heat.
  felt += ACTIVITY_HEAT[mode] || 0;
  if (mode === 'sleep') {
    if (sleepHome) felt += sleepHome.bed; // a bed (+10) or the couch by the fire (+6)
    // The best sleeping gear you have (a sleeping bag, a wool blanket).
    felt += Math.max(0, ...Object.keys(ITEMS).filter((id) => ITEMS[id].sleepWarm && has(state, id)).map((id) => ITEMS[id].sleepWarm));
    const d = state.dog;
    if (d.stage === 'joined' && d.bond >= 80) felt += 5;
  }
  return felt;
}

export const CLOTHES_SHARE = 0.8;
export const LEAK_WET = 0.25; // under a leaking roof you get wet at a quarter of the outside rate
export const WET_OUTSIDE = 8;
export const ACTIVITY_HEAT = { walk: 8, work: 6, heavy: 8 };

// Warmth points per hour from the felt temperature. Retuned (playtest list 1):
// a cold house in normal clothes now chills you, and a wet, windy walk below
// freezing with poor gear is a real hypothermia risk in a few hours.
// Piecewise linear (browser playtest 2: a few degrees colder must matter, also in sleep).
const WARMTH_CURVE = [[5, -28], [15, -22], [28, -12], [40, -6], [50, -2.5], [60, 2], [72, 10]];
export function warmthRate(felt) {
  const c = WARMTH_CURVE;
  if (felt <= c[0][0]) return c[0][1];
  if (felt >= c[c.length - 1][0]) return c[c.length - 1][1];
  for (let i = 1; i < c.length; i++) {
    if (felt <= c[i][0]) {
      const [x0, y0] = c[i - 1];
      const [x1, y1] = c[i];
      return y0 + ((felt - x0) / (x1 - x0)) * (y1 - y0);
    }
  }
  return 0;
}

function damage(state, amount, cause) {
  if (amount <= 0) return;
  state.player.health -= amount;
  state._damage = state._damage || {};
  state._damage[cause] = (state._damage[cause] || 0) + amount;
}

// Time moves through the engine clock (src/core/clock.js) and its systems
// (src/engine/systems.js): steps of at most 10 minutes; at 5 AM each system's
// daily hook runs before the step. Weather is a system of its own; the rules
// below still run as one "legacy" system until they move out too.
// Returns true when the action stopped early at a danger line (see checkDanger).
// Sleep always wakes at a danger line; other modes stop only when the caller
// asks for it ({ stopAtDanger: true }: fishing, hunting, long work).
export function advanceTime(state, minutes, mode = 'rest', opts = {}) {
  if (!(minutes > 0)) return false; // as before: no time, nothing happens
  // Walking keeps its own rules (you walk on, or fall asleep by a wall at 0 energy).
  if (mode === 'walk' || (mode !== 'sleep' && !opts.stopAtDanger)) { gameClock().advance(state, minutes, mode); return false; }
  // Remember the needs at the start, to stop when one crosses a danger line.
  const p = state.player;
  state._sleepFrom = { food: p.food, water: p.water, warmth: p.warmth, health: p.health, energy: p.energy, mode };
  if (opts.restPerHour) state._restPerHour = opts.restPerHour;
  const t0 = state.time;
  try { gameClock().advance(state, minutes, mode); } finally { delete state._sleepFrom; delete state._restPerHour; }
  return !state.dead && state.time - t0 < minutes - 0.01;
}

// Auto-wake (browser playtest 1): you wake when a need falls past its danger line
// during the sleep (not when you went to sleep below it already).
export const WAKE_AT = { water: 15, food: 10, warmth: 30, health: 30 };
// Awake, long actions (fishing, hunting, work) stop at these lines (browser playtest 2).
export const STOP_AT = { water: 15, food: 10, warmth: 25, health: 30, energy: 10 };
const STOP_TEXT = {
  water: 'You stop. Your mouth is dry and your head pounds. You need water.',
  food: 'You stop, weak with hunger. You need to eat.',
  warmth: 'You stop. You are shaking with cold and your hands do not work. Get warm now.',
  health: 'You stop. You feel worse; this is not the time to go on.',
  energy: 'You stop. You are too tired to go on; you need to rest.',
};
const WAKE_TEXT = {
  water: 'You wake with a dry mouth and a pounding head. You need water now.',
  food: 'You wake, weak and shaking with hunger. You need to eat.',
  warmth: 'You wake up shivering hard. You are too cold to sleep.',
  health: 'You wake in pain. Something is wrong; you feel worse.',
};
function checkWake(state) {
  const from = state._sleepFrom;
  if (!from || state.dead) return;
  const p = state.player;
  const asleep = from.mode === 'sleep';
  const lines = asleep ? WAKE_AT : STOP_AT;
  for (const k of Object.keys(lines)) {
    if (from[k] >= lines[k] && p[k] < lines[k]) {
      log(state, (asleep ? WAKE_TEXT : STOP_TEXT)[k], 'danger');
      state._stop = true;
      delete state._sleepFrom; // once a sleep
      return;
    }
  }
}

// Legacy system: one clock step of the rules that are not systems yet.
export function tickStep(state, dt, mode) {
  const p = state.player;
  const env = environment(state, mode);
  const sleeping = mode === 'sleep';
  const working = mode === 'walk' || mode === 'work' || mode === 'heavy';

  // Wet and dry: wetness 0..100. Rain soaks you (a waterproof shell keeps most of it out);
  // inside, clothes dry: fast by a fire, slowly in a cold room.
  const wx = weatherInfo(state);
  normalizeWorn(p);
  const wasWet = p.wetness >= WET_LIMIT;
  if ((env.outside || env.leak) && wx.wetAfter) p.wetness = clamp(p.wetness + wetGainPerHour(p, state.weather.type, wx.wetAfter) * dt * (env.outside ? 1 : LEAK_WET), 0, 100);
  else if (!env.outside) p.wetness = clamp(p.wetness - dryPerHour(env.temp, env.home && state.home.fireHours > 0) * dt, 0, 100);
  p.wet = p.wetness >= WET_LIMIT;
  if (p.wet && !wasWet) log(state, 'Your clothes are wet through. Cotton and down keep little heat when wet; wool and fleece keep most.', 'warn');
  if (!p.wet && wasWet) log(state, 'Your clothes are dry again.');

  // Warmth
  const felt = feltTemp(state, mode, env);
  // "Warm and fed" after a hot meal: heat loss is halved for a few hours.
  let wr = warmthRate(felt);
  if (p.warmFedH > 0) { if (wr < 0) wr *= 0.5; p.warmFedH = Math.max(0, p.warmFedH - dt); }
  p.warmth = clamp(p.warmth + wr * dt, 0, 100);
  // Fresh food spoils, by the temperature where most of it is.
  ageFood(state, dt, (where) => (where === 'storage' ? state.home.indoorTemp : env.temp));

  // Food and water
  const cold = p.warmth < 50;
  const pace = working ? V.WORK_FACTOR : sleeping ? V.SLEEP_FACTOR : 1;
  let foodLoss = V.FOOD_LOSS_PER_HOUR * pace * (cold ? 1.3 : 1) * foodLossFactor(state);
  let waterLoss = V.WATER_LOSS_PER_HOUR * pace * (p.illness.stomachH > 0 ? 2 : 1);
  if (felt > 90 && working) waterLoss *= 2;
  // Heat wave (rare weather): thirst x1.5 outside in the day.
  if (state.weather.type === 'heat_wave' && env.outside && !env.dark) waterLoss *= 1.5;
  p.food = clamp(p.food - foodLoss * dt, 0, 100);
  p.water = clamp(p.water - waterLoss * dt, 0, 100);

  // Energy
  if (sleeping) {
    let gain = felt >= 55 ? 10 : 6;
    if (p.morale < 50) gain *= 0.75;
    if (p.health < 50) gain *= 0.75;
    if (p.food < 25) gain *= 0.75;
    gain *= sleepGainFactor(state);
    p.energy = clamp(p.energy + gain * dt, 0, p.energyMax);
  } else if (mode === 'rest' && state._restPerHour) {
    // The Rest action: sit down and get your breath back (Adam: 25% of max energy an hour).
    p.energy = clamp(p.energy + state._restPerHour * p.energyMax * dt, 0, p.energyMax);
  } else {
    let loss = V.ENERGY_LOSS[mode] || V.ENERGY_LOSS.rest;
    if (cold) loss *= 1.5;
    loss *= energyUseFactor(state, mode);
    if (mode === 'walk' && bagWeight(state.carried) > carryLimit(state)) loss *= 1.5;
    p.energy = clamp(p.energy - loss * dt, 0, p.energyMax);
  }

  // Health loss
  if (p.food <= 0) damage(state, V.STARVING_DAMAGE * dt, 'starvation');
  if (p.water <= 0) damage(state, V.DEHYDRATED_DAMAGE * dt, 'dehydration');
  if (p.warmth <= 0) damage(state, 5 * dt, 'hypothermia');
  // Wildfire smoke (rare weather): outside air hurts without an N95 mask.
  if (state.weather.type === 'smoke' && env.outside && !has(state, 'n95')) damage(state, SMOKE_DAMAGE_PER_HOUR * dt, 'smoke');
  for (const inj of p.injuries) {
    if (inj.type === 'deep_cut' && !inj.bandaged) damage(state, Math.min(2 * dt, Math.max(0, p.health - BLEED_FLOOR)), 'bleeding');
    inj.ageH += dt;
    let slow = p.food < 25 || p.water < 25 ? 0.5 : 1;
    if (sleeping && state.location.kind === 'home' && built(state, 'sick_room')) slow *= 1.5;
    inj.healH -= dt * slow;
    if (!inj.infectRolled && inj.ageH >= 6 && inj.infectRisk) {
      inj.infectRolled = true;
      const risk = inj.bandaged ? (INJURY_DATA[inj.type]?.bandagedRisk || 0) * infectRiskFactor(state) : inj.infectRisk;
      if (risk > 0 && chance(state, risk)) startInfection(state, inj.type);
    }
  }
  const healed = p.injuries.filter((i) => i.healH <= 0);
  for (const i of healed) log(state, `Your ${injuryName(i).toLowerCase()} has healed.`, 'good');
  p.injuries = p.injuries.filter((i) => i.healH > 0);

  const inf = p.illness.infection;
  if (inf) {
    inf.ageH += dt;
    // An infected cut never kills; once antibiotics start, the infection does no more harm.
    if (inf.ageH >= 48 && !CUTS.has(inf.from) && inf.abxH == null) damage(state, 1 * dt, 'infection');
    if (inf.abxH != null) {
      inf.abxH += dt;
      if (inf.abxH >= 72) {
        p.illness.infection = null;
        log(state, 'The fever is gone. The antibiotics worked.', 'good');
      }
    }
  }
  if (p.illness.stomachH > 0) {
    p.illness.stomachH = Math.max(0, p.illness.stomachH - dt);
    if (p.illness.stomachH === 0) log(state, 'Your stomach is better now.', 'good');
  }
  if (p.painH > 0) p.painH = Math.max(0, p.painH - dt);

  // Health refill
  const treated = !p.illness.infection || p.illness.infection.abxH != null;
  const ok = p.food >= 25 && p.water >= 25 && p.warmth >= 25 && treated && p.illness.stomachH <= 0;
  const sickRoom = sleeping && state.location.kind === 'home' && built(state, 'sick_room');
  if (ok) p.health += (sleeping ? (sickRoom ? 1.5 : 1) : 0.25) * dt;
  p.health = Math.min(100, p.health);

  // Weak status progress
  if (p.weak && p.food > 50 && p.water > 50) p.weakGoodHours += dt;

  // Light use
  if (env.dark && !sleeping && hasLight(state) && (mode === 'walk' || state.location.kind !== 'home')) {
    p.lightHours = Math.max(0, p.lightHours - dt);
    if (p.lightHours === 0) log(state, 'The flashlight goes dark. The batteries are empty.', 'warn');
  }

  // The home and the dog are their own systems now (src/engine/home.js, dog.js),
  // right after these rules.

  checkWake(state);

  if (p.health <= 0) {
    p.health = 0;
    const causes = Object.entries(state._damage || {}).sort((a, b) => b[1] - a[1]);
    die(state, causes.length ? causes[0][0] : 'unknown');
  }
  state._damage = {};
}

// Legacy system: the 5 AM rules that are not systems yet. The weather system
// has rolled the new day's weather before this runs.
export function dailyRollover(state, day) {
  const p = state.player;
  seasonDaily(state, day);
  log(state, `A new day. Weather: ${weatherInfo(state).label}, high ${Math.round(state.weather.high)}°F, low ${Math.round(state.weather.low)}°F.`, 'day');
  if (state.weather.type === 'snow') log(state, `Snow: ${state.weather.snowInches} inches. Walking is slow today.`, 'warn');
  if (state.weather.type === 'windstorm') log(state, `Windstorm. Wind ${state.weather.wind} mph. Stay inside if you can.`, 'warn');
  const spell = state.weather.spell;
  if (spell?.first) log(state, spellStartText(spell.id), 'warn');
  else if (spell) log(state, `${weatherInfo(state).label} again today.`, 'warn');

  // The water chain (filter station) is in the home system (src/engine/home.js).

  // Morale
  p.morale -= 2;
  if (p.food < 50) p.morale -= 5;
  if (state.location.kind === 'home' && state.home.indoorTemp < 50) p.morale -= 5;
  if (built(state, 'led_lights')) p.morale += 3;
  if (built(state, 'sealed_store') && foodItemsStored(state) >= 10) p.morale += 2;
  if (state.dog.stage === 'joined') p.morale += 8; // the dog's bond: dog system
  p.morale = clamp(p.morale, 0, 100);

  // Weak status
  if (p.weak) {
    if (p.weakGoodHours >= 12) {
      const before = p.energyMax;
      p.energyMax = Math.min(100, p.energyMax + 2);
      // A line only at each 10 points (not every good day).
      if (Math.floor(p.energyMax / 10) > Math.floor(before / 10) && p.energyMax < 100) log(state, `Your body is stronger: you can do more before you tire (${p.energyMax} of 100).`, 'good');
    }
    p.weakGoodHours = 0;
    if (p.energyMax >= 100) {
      p.weak = false;
      log(state, 'You are strong again. The weakness from the coma is gone.', 'good');
    }
  }

  // Open wounds can get infected
  for (const inj of p.injuries) {
    if (!inj.bandaged && inj.infectRisk && chance(state, inj.infectRisk)) startInfection(state, inj.type);
  }

}

export const INJURY_NAMES = {
  small_cut: 'Small cut', deep_cut: 'Deep cut', sprain: 'Sprain', bite: 'Animal bite',
};

// Base numbers are for a "moderate" injury; severity scales them (SEVERITY).
// Adam (playtest): a small cut is not a sprained wrist.
const INJURY_DATA = {
  small_cut: { hp: 2, healH: 36, infectRisk: 0.2 },
  deep_cut: { hp: 12, healH: 168, infectRisk: 0.2 },
  sprain: { hp: 4, healH: 120, infectRisk: 0 },
  // Research (year sim): bites 25% if left open 6 h, 10% even when bandaged in time.
  bite: { hp: 10, healH: 168, infectRisk: 0.25, bandagedRisk: 0.1 },
};

// Severity (Adam): minor, moderate or serious. It scales the health lost, the
// healing time and the slow-down (a sprained ankle slows walking, a sprained
// wrist slows searching and work). Rolled on its own rng stream ('injury').
export const SEVERITY = [
  { id: 'minor', w: 0.6, hp: 0.5, heal: 0.5, slow: 0.9 },
  { id: 'moderate', w: 0.3, hp: 1, heal: 1, slow: 0.75 },
  { id: 'serious', w: 0.1, hp: 1.8, heal: 1.6, slow: 0.6 },
];
const SPRAIN_PART = { ankle: 'Sprained ankle', wrist: 'Sprained wrist' };

export function injuryName(inj) {
  const base = inj.type === 'sprain' ? (SPRAIN_PART[inj.part] || 'Sprain') : INJURY_NAMES[inj.type] || inj.type;
  return inj.severity && inj.severity !== 'moderate' ? `${base} (${inj.severity})` : base;
}

// Walking ('leg') or hand work ('hand'): the factor from the worst sprain (1 = none).
export function injuryFactor(state, limb) {
  let f = 1;
  for (const i of state.player.injuries) {
    if (i.type !== 'sprain') continue;
    const part = i.part || (limb === 'leg' ? 'ankle' : 'wrist'); // old saves: a sprain counts for both
    if ((limb === 'leg') !== (part === 'ankle')) continue;
    f = Math.min(f, SEVERITY.find((s) => s.id === i.severity)?.slow ?? 0.7);
  }
  return f;
}

// opts: { part: 'ankle' | 'wrist', severity, always } — `always` skips the 90% luck roll (tests).
export function addInjury(state, type, opts = {}) {
  const d = INJURY_DATA[type];
  const r = stream(state, 'injury');
  // Adam (playtest): injuries 90% less often. Most near misses end as a scare.
  if (!opts.always && r() >= V.INJURY_RATE) {
    log(state, type === 'bite' ? 'Teeth snap at you, but you pull free unhurt.' : 'A close call. You are not hurt.');
    return null;
  }
  let sev = opts.severity ? SEVERITY.find((s) => s.id === opts.severity) : null;
  if (!sev) { const x = r(); let acc = 0; sev = SEVERITY.find((s) => (acc += s.w) > x) || SEVERITY[0]; }
  const part = type === 'sprain' ? (opts.part || (r() < 0.5 ? 'ankle' : 'wrist')) : undefined;
  const inj = { type, severity: sev.id, bandaged: false, ageH: 0, healH: d.healH * sev.heal, infectRisk: d.infectRisk * infectRiskFactor(state), infectRolled: false };
  if (part) inj.part = part;
  state.player.injuries.push(inj);
  const full = d.hp * sev.hp;
  const hp = CUTS.has(type) ? Math.min(full, Math.max(0, state.player.health - 1)) : full; // a cut never kills
  damage(state, hp, type === 'bite' ? 'an animal attack' : 'an injury');
  log(state, `Injury: ${injuryName(inj)} (Health −${Math.round(hp)}).` + (type === 'deep_cut' ? ' It bleeds. Bandage it fast.' : ''), 'danger');
  if (state.player.health <= 0) die(state, type === 'bite' ? 'an animal attack' : 'an injury');
  return inj;
}

// Adam (2026-11-25): cuts never kill. A cut can bleed and get infected, but its
// damage stops above 0: bleeding stops at 10 health, the cut itself at 1, and an
// infected cut gives fever (no health refill) but no health loss. Bites still can.
export const CUTS = new Set(['small_cut', 'deep_cut']);
export const BLEED_FLOOR = 10;

export function startInfection(state, from = null) {
  if (state.player.illness.infection) return;
  state.player.illness.infection = { ageH: 0, abxH: null, from };
  log(state, 'A wound is red, hot and swollen. It is infected. You need antibiotics.', 'danger');
}

export function startStomachBug(state) {
  if (state.player.illness.stomachH > 0) return;
  state.player.illness.stomachH = 48;
  state.player.energy = Math.max(0, state.player.energy - 20);
  log(state, 'Stomach cramps. The water was bad. You have a stomach bug.', 'danger');
}

const SMOKE_DAMAGE_PER_HOUR = 1.5;

const CAUSE_TEXT = {
  starvation: 'starvation', dehydration: 'dehydration (no water)', hypothermia: 'the cold',
  bleeding: 'blood loss', smoke: 'wildfire smoke', infection: 'an infected wound', 'an injury': 'an injury',
  'an animal attack': 'an animal attack', unknown: 'unknown causes',
};

export function die(state, cause) {
  if (state.dead) return;
  const p = state.player;
  p.health = Math.max(0, p.health);
  // Name the root cause when the body was already failing.
  if (cause === 'an injury' || cause === 'an animal attack') {
    if (p.water <= 0) cause = 'dehydration';
    else if (p.food <= 0) cause = 'starvation';
    else if (p.warmth <= 0) cause = 'hypothermia';
  }
  state.dead = {
    cause: CAUSE_TEXT[cause] || cause,
    time: state.time,
    days: dayIndex(state.time) + 1,
  };
  log(state, `You died of ${state.dead.cause}.`, 'danger');
}

export { rand };
