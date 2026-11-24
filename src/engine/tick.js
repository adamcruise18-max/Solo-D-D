// Time passes: stats change, the home cools or warms, the dog gets hungry.
// Modes: 'rest' (awake, light activity), 'work' (searching), 'heavy' (hard work),
// 'walk' (travel outside), 'sleep'.
import { rand, randInt, chance } from '../rng.js';
import * as V from './vitals.js';
import { airTemp, isNight, rollWeather, sunFor, solarToday, weatherInfo } from './world.js';
import { dayIndex, log, hasLight, bagWeight, carryLimit, has } from './state.js';
import { ITEMS } from '../data/items.js';
import { CATEGORIES } from '../data/places.js';
import { getPlace } from './placesdb.js';
import { seasonDaily } from './season.js';
import { built, fireHeat, heatLossFactor, foodItemsStored } from './base.js';
import { infectRiskFactor } from './skills.js';

const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

export function clothingRating(state) {
  const w = state.player.worn;
  let r = 10;
  if (w.coat && w.hat && w.gloves && w.boots) r = 40;
  else if (w.coat) r = 25 + (w.hat ? 3 : 0) + (w.gloves ? 3 : 0) + (w.boots ? 3 : 0);
  if (w.socks) r += 2;
  if (state.player.wet) r /= 2;
  return r;
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
  if (env.outside) felt -= (env.wind / 10) * 5;
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

export function advanceTime(state, minutes, mode = 'rest') {
  let left = minutes;
  while (left > 0.0001 && !state.dead) {
    const step = Math.min(10, left);
    const before = state.time;
    state.time += step;
    left -= step;
    // 5 AM rollover
    const dBefore = dayIndex(before - 300);
    const dAfter = dayIndex(state.time - 300);
    for (let d = dBefore + 1; d <= dAfter; d++) dailyRollover(state, d);
    tickStep(state, step / 60, mode);
  }
}

function tickStep(state, dt, mode) {
  const p = state.player;
  const env = environment(state, mode);
  const sleeping = mode === 'sleep';
  const working = mode === 'walk' || mode === 'work' || mode === 'heavy';

  // Wet and dry
  const wx = weatherInfo(state);
  if (env.outside && wx.wetAfter && !(p.worn.rain && state.weather.type !== 'heavy_rain')) {
    p.wetMinutes += dt * 60;
    if (!p.wet && p.wetMinutes >= wx.wetAfter) {
      p.wet = true;
      log(state, 'Your clothes are wet through. Wet clothes keep only half the heat.', 'warn');
    }
  } else if (p.wet && !env.outside && env.temp >= 55) {
    p.dryMinutes += dt * 60;
    if (p.dryMinutes >= 240) {
      p.wet = false; p.wetMinutes = 0; p.dryMinutes = 0;
      log(state, 'Your clothes are dry again.');
    }
  } else if (!env.outside) {
    p.wetMinutes = 0;
  }

  // Warmth
  const felt = feltTemp(state, mode, env);
  p.warmth = clamp(p.warmth + warmthRate(felt) * dt, 0, 100);

  // Food and water
  const cold = p.warmth < 50;
  const pace = working ? V.WORK_FACTOR : sleeping ? V.SLEEP_FACTOR : 1;
  let foodLoss = V.FOOD_LOSS_PER_HOUR * pace * (cold ? 1.3 : 1);
  let waterLoss = V.WATER_LOSS_PER_HOUR * pace * (p.illness.stomachH > 0 ? 2 : 1);
  if (felt > 90 && working) waterLoss *= 2;
  p.food = clamp(p.food - foodLoss * dt, 0, 100);
  p.water = clamp(p.water - waterLoss * dt, 0, 100);

  // Energy
  if (sleeping) {
    let gain = felt >= 55 ? 10 : 6;
    if (p.morale < 50) gain *= 0.75;
    if (p.health < 50) gain *= 0.75;
    if (p.food < 25) gain *= 0.75;
    p.energy = clamp(p.energy + gain * dt, 0, p.energyMax);
  } else {
    let loss = V.ENERGY_LOSS[mode] || V.ENERGY_LOSS.rest;
    if (cold) loss *= 1.5;
    if (mode === 'walk' && bagWeight(state.carried) > carryLimit(state)) loss *= 1.5;
    p.energy = clamp(p.energy - loss * dt, 0, p.energyMax);
  }

  // Health loss
  if (p.food <= 0) damage(state, V.STARVING_DAMAGE * dt, 'starvation');
  if (p.water <= 0) damage(state, V.DEHYDRATED_DAMAGE * dt, 'dehydration');
  if (p.warmth <= 0) damage(state, 5 * dt, 'hypothermia');
  for (const inj of p.injuries) {
    if (inj.type === 'deep_cut' && !inj.bandaged) damage(state, 2 * dt, 'bleeding');
    inj.ageH += dt;
    let slow = p.food < 25 || p.water < 25 ? 0.5 : 1;
    if (sleeping && state.location.kind === 'home' && built(state, 'sick_room')) slow *= 1.5;
    inj.healH -= dt * slow;
    if (!inj.bandaged && !inj.infectRolled && inj.ageH >= 6 && inj.infectRisk) {
      inj.infectRolled = true;
      if (chance(state, inj.infectRisk)) startInfection(state);
    }
  }
  const healed = p.injuries.filter((i) => i.healH <= 0);
  for (const i of healed) log(state, `Your ${INJURY_NAMES[i.type].toLowerCase()} has healed.`, 'good');
  p.injuries = p.injuries.filter((i) => i.healH > 0);

  const inf = p.illness.infection;
  if (inf) {
    inf.ageH += dt;
    if (inf.ageH >= 48) damage(state, 1 * dt, 'infection');
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

  homeStep(state, dt, env);
  dogStep(state, dt, sleeping);

  if (p.health <= 0) {
    p.health = 0;
    const causes = Object.entries(state._damage || {}).sort((a, b) => b[1] - a[1]);
    die(state, causes.length ? causes[0][0] : 'unknown');
  }
  state._damage = {};
}

function homeStep(state, dt, env) {
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

function dogStep(state, dt, sleeping) {
  const d = state.dog;
  if (d.stage !== 'joined') return;
  d.food = clamp(d.food - 4 * dt, 0, 100);
  d.water = 80;
  if (d.food <= 0) d.health -= 1 * dt;
  else if (sleeping) d.health = Math.min(100, d.health + 1 * dt);
  if (d.health <= 50 && d.warned < 1) {
    d.warned = 1;
    log(state, `${d.name} is weak. Feed ${d.name} and let ${d.name} rest.`, 'warn');
  }
  if (d.health <= 25 && d.warned < 2) {
    d.warned = 2;
    log(state, `${d.name} is very sick. ${d.name} needs food or medicine now.`, 'danger');
  }
  if (d.health > 60) d.warned = 0;
  if (d.health <= 0) {
    d.health = 0;
    d.stage = 'dead';
    log(state, `${d.name} lies down and does not get up again. ${d.name} is gone.`, 'danger');
    state.player.morale = Math.max(0, state.player.morale - 25);
  }
}

function dailyRollover(state, day) {
  const p = state.player;
  rollWeather(state, day);
  seasonDaily(state, day);
  log(state, `A new day. Weather: ${weatherInfo(state).label}, high ${Math.round(state.weather.high)}°F, low ${Math.round(state.weather.low)}°F.`, 'day');
  if (state.weather.type === 'snow') log(state, `Snow: ${state.weather.snowInches} inches. Walking is slow today.`, 'warn');
  if (state.weather.type === 'windstorm') log(state, `Windstorm. Wind ${state.weather.wind} mph. Stay inside if you can.`, 'warn');

  // Morale
  p.morale -= 2;
  if (p.food < 50) p.morale -= 5;
  if (state.location.kind === 'home' && state.home.indoorTemp < 50) p.morale -= 5;
  if (built(state, 'led_lights')) p.morale += 3;
  if (built(state, 'sealed_store') && foodItemsStored(state) >= 10) p.morale += 2;
  if (state.dog.stage === 'joined') {
    p.morale += 8;
    if (state.dog.food >= 25) state.dog.bond += 3;
    else state.dog.bond -= 10;
    state.dog.bond = clamp(state.dog.bond, 0, 100);
  }
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
    if (!inj.bandaged && inj.infectRisk && chance(state, inj.infectRisk)) startInfection(state);
  }

  dogDaily(state, day);
}

function dogDaily(state, day) {
  const d = state.dog;
  const lastFed = d.feedDays.length ? d.feedDays[d.feedDays.length - 1] : null;
  if (d.stage === 'none' && day >= d.arriveDay) {
    d.stage = 'visiting';
    d.visitStart = day;
    log(state, 'A thin dog watches the house from the street. It does not come near.', 'story');
  } else if (d.stage === 'visiting') {
    const since = lastFed == null ? day - d.visitStart : day - lastFed;
    if (since > 3) {
      if (!d.revisitUsed) {
        d.stage = 'away';
        d.revisitUsed = true;
        d.revisitDay = day + randInt(state, 5, 8);
        log(state, 'The dog is not in the street today.');
      } else {
        d.stage = 'gone';
        log(state, 'The dog does not come back.');
      }
    }
  } else if (d.stage === 'away' && day >= d.revisitDay) {
    d.stage = 'visiting';
    d.visitStart = day;
    d.feedDays = [];
    log(state, 'The thin dog is back in the street. It looks at your door.', 'story');
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
  damage(state, d.hp, type === 'bite' ? 'an animal attack' : 'an injury');
  log(state, `Injury: ${INJURY_NAMES[type]} (Health −${d.hp}).` + (type === 'deep_cut' ? ' It bleeds. Bandage it fast.' : ''), 'danger');
  if (state.player.health <= 0) die(state, type === 'bite' ? 'an animal attack' : 'an injury');
}

export function startInfection(state) {
  if (state.player.illness.infection) return;
  state.player.illness.infection = { ageH: 0, abxH: null };
  log(state, 'A wound is red, hot and swollen. It is infected. You need antibiotics.', 'danger');
}

export function startStomachBug(state) {
  if (state.player.illness.stomachH > 0) return;
  state.player.illness.stomachH = 48;
  state.player.energy = Math.max(0, state.player.energy - 20);
  log(state, 'Stomach cramps. The water was bad. You have a stomach bug.', 'danger');
}

const CAUSE_TEXT = {
  starvation: 'starvation', dehydration: 'dehydration (no water)', hypothermia: 'the cold',
  bleeding: 'blood loss', infection: 'an infected wound', 'an injury': 'an injury',
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
