// Time passes: stats change, the home cools or warms, the dog gets hungry.
// Modes: 'rest' (awake, light activity), 'work' (searching), 'heavy' (hard work),
// 'walk' (travel outside), 'sleep'.
import { rand, randInt, chance } from '../rng.js';
import * as V from './vitals.js';
import { airTemp, isNight, weatherInfo } from './world.js';
import { spellStartText } from './rareweather.js';
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
  if (mode === 'walk') {
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
  return { outside: false, temp: air + 5, wind: 0, precip: false, dark, air };
}

export function feltTemp(state, mode, env = environment(state, mode)) {
  let felt = env.temp + clothingRating(state);
  if (env.outside) felt -= (env.wind / 10) * 7 * (1 - windBlock(state.player));
  if (mode === 'sleep') {
    if (env.home) felt += 10; // bed and blankets
    // The best sleeping gear you have (a sleeping bag, a wool blanket).
    felt += Math.max(0, ...Object.keys(ITEMS).filter((id) => ITEMS[id].sleepWarm && has(state, id)).map((id) => ITEMS[id].sleepWarm));
    const d = state.dog;
    if (d.stage === 'joined' && d.bond >= 80) felt += 5;
  }
  return felt;
}

export function warmthRate(felt) {
  if (felt >= 70) return 10;
  if (felt >= 55) return 3;
  if (felt >= 40) return -3;
  if (felt >= 25) return -7;
  return -12;
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
export function advanceTime(state, minutes, mode = 'rest') {
  if (!(minutes > 0)) return; // as before: no time, nothing happens
  gameClock().advance(state, minutes, mode);
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
  if (env.outside && wx.wetAfter) p.wetness = clamp(p.wetness + wetGainPerHour(p, state.weather.type, wx.wetAfter) * dt, 0, 100);
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
    if (!inj.bandaged && !inj.infectRolled && inj.ageH >= 6 && inj.infectRisk) {
      inj.infectRolled = true;
      if (chance(state, inj.infectRisk)) startInfection(state, inj.type);
    }
  }
  const healed = p.injuries.filter((i) => i.healH <= 0);
  for (const i of healed) log(state, `Your ${INJURY_NAMES[i.type].toLowerCase()} has healed.`, 'good');
  p.injuries = p.injuries.filter((i) => i.healH > 0);

  const inf = p.illness.infection;
  if (inf) {
    inf.ageH += dt;
    if (inf.ageH >= 48 && !CUTS.has(inf.from)) damage(state, 1 * dt, 'infection'); // an infected cut never kills
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
  const ok = p.food >= 25 && p.water >= 25 && p.warmth >= 25 && !p.illness.infection && p.illness.stomachH <= 0;
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
      p.energyMax = Math.min(100, p.energyMax + 2);
      log(state, 'Your body is a little stronger today.', 'good');
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

const INJURY_DATA = {
  small_cut: { hp: 5, healH: 48, infectRisk: 0.2 },
  deep_cut: { hp: 15, healH: 168, infectRisk: 0.2 },
  sprain: { hp: 5, healH: 120, infectRisk: 0 },
  bite: { hp: 10, healH: 168, infectRisk: 0.4 },
};

export function addInjury(state, type) {
  const d = INJURY_DATA[type];
  state.player.injuries.push({ type, bandaged: false, ageH: 0, healH: d.healH, infectRisk: d.infectRisk * infectRiskFactor(state), infectRolled: false });
  const hp = CUTS.has(type) ? Math.min(d.hp, Math.max(0, state.player.health - 1)) : d.hp; // a cut never kills
  damage(state, hp, type === 'bite' ? 'an animal attack' : 'an injury');
  log(state, `Injury: ${INJURY_NAMES[type]} (Health −${Math.round(hp)}).` + (type === 'deep_cut' ? ' It bleeds. Bandage it fast.' : ''), 'danger');
  if (state.player.health <= 0) die(state, type === 'bite' ? 'an animal attack' : 'an injury');
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
