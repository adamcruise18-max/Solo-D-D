// Walking on the real map. First version: route length = straight line × 1.25.
import { randInt, chance } from '../rng.js';
import { advanceTime, addInjury, environment } from './tick.js';
import { check } from './checks.js';
import { isNight, isBadWeather } from './world.js';
import { WEATHER_TYPES } from '../data/climate.js';
import { HOME, MAP_RADIUS_MILES, bagWeight, carryLimit, hasLight, log, addItem, formatDuration } from './state.js';
import { rollZone } from './loot.js';
import { itemName } from '../data/items.js';
import { walkSpeedFactor, energyUseFactor } from './background.js';
import { activeHazards } from './hazards.js';

export const ROUTE_FACTOR = 1.25;

export function straightMiles(a, b) {
  const R = 3958.8;
  const toR = Math.PI / 180;
  const dLat = (b.lat - a.lat) * toR;
  const dLon = (b.lon - a.lon) * toR;
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(a.lat * toR) * Math.cos(b.lat * toR) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

export const routeMiles = (a, b) => straightMiles(a, b) * ROUTE_FACTOR;

export function walkSpeed(state, t = state.time) {
  const p = state.player;
  let mph = 3;
  const why = [];
  const apply = (f, w) => { mph *= f; why.push(w); };
  if (p.weak) apply(0.7, 'weak');
  if (isNight(t) && !hasLight(state)) apply(0.6, 'dark, no light');
  const wx = WEATHER_TYPES[state.weather.type];
  if (wx?.speed) apply(wx.speed, wx.label.toLowerCase());
  if (bagWeight(state.carried) > carryLimit(state)) apply(0.7, 'heavy pack');
  if (p.injuries.some((i) => i.type === 'sprain')) apply(0.7, 'sprain');
  if (p.warmth < 25) apply(0.8, 'hypothermia');
  if (p.energy < 25) apply(0.7, 'exhausted');
  if (p.health < 25) apply(0.7, 'badly hurt');
  if (walkSpeedFactor(state) < 1) apply(walkSpeedFactor(state), 'bad knees');
  for (const h of activeHazards(state, t)) if (h.walk) apply(h.walk, h.label);
  return { mph, why };
}

export function estimateTrip(state, dest) {
  const miles = routeMiles(state.pos, dest);
  const { mph, why } = walkSpeed(state);
  const minutes = (miles / mph) * 60;
  const overload = bagWeight(state.carried) > carryLimit(state);
  const energy = (minutes / 60) * 8 * (overload ? 1.5 : 1) * (state.player.warmth < 50 ? 1.5 : 1) * energyUseFactor(state, 'walk');
  return { miles, minutes, energy, mph, why };
}

function lerp(a, b, f) {
  return { lat: a.lat + (b.lat - a.lat) * f, lon: a.lon + (b.lon - a.lon) * f };
}

// Walk to dest ({lat, lon}). Returns true if the player arrived alive.
export function travel(state, dest, destLabel) {
  const start = { ...state.pos };
  const total = routeMiles(start, dest);
  log(state, `You walk toward ${destLabel} (${total.toFixed(1)} mi).`, 'travel');
  let done = 0;
  while (done < total - 1e-6 && !state.dead) {
    const seg = Math.min(1, total - done);
    const { mph } = walkSpeed(state);
    advanceTime(state, (seg / mph) * 60, 'walk');
    done += seg;
    state.stats.miles += seg;
    state.pos = lerp(start, dest, done / total);
    if (seg >= 0.5 && !state.dead) roadEvent(state);
    if (!state.dead && state.player.energy <= 0) {
      log(state, 'You are too tired to walk on. You sit down by a wall and sleep.', 'warn');
      advanceTime(state, 180, 'sleep');
    }
  }
  if (state.dead) return false;
  state.pos = { ...dest };
  const fromHome = straightMiles(HOME, dest);
  if (fromHome > MAP_RADIUS_MILES) log(state, 'You are past the edge of the known area. There is nothing to search here.', 'warn');
  return true;
}

function dogWithPlayer(state) {
  return state.dog.stage === 'joined' && state.dog.withPlayer;
}

function loseRandomItem(state, filter = () => true) {
  const ids = Object.keys(state.carried).filter((id) => id !== 'backpack' && filter(id));
  if (!ids.length) return;
  const id = ids[randInt(state, 0, ids.length - 1)];
  addItem(state.carried, id, -1);
  log(state, `You lose: ${itemName(id)}.`, 'warn');
}

export function roadEvent(state) {
  let roll = randInt(state, 1, 100);
  if (isNight(state.time)) roll += 10;
  if (isBadWeather(state)) roll += 10;
  roll = Math.min(roll, 100);
  if (roll <= 80) return;
  const dog = dogWithPlayer(state);
  const warn = dog && state.dog.bond >= 40;
  const animalMods = [];
  if (warn) animalMods.push(['dog warned you', 4]);
  const out = { outside: true };
  if (roll <= 85) {
    log(state, 'Broken glass and debris cover the road.');
    if (!check(state, 'Step past the debris', 8, [], out).success) addInjury(state, 'small_cut');
  } else if (roll <= 88) {
    log(state, 'Water floods the street ahead.');
    const r = check(state, 'Cross the flooded street', 12, [], out);
    if (!r.success) {
      state.player.wet = true;
      log(state, 'You slip and fall in the cold water. You are wet.', 'warn');
      loseRandomItem(state);
    }
  } else if (roll <= 91) {
    log(state, 'A fallen tree and a downed line block the road.');
    if (!check(state, 'Climb over the tree', 10, [], out).success) addInjury(state, 'sprain');
  } else if (roll <= 95) {
    log(state, 'A pack of loose dogs runs at you, barking.', 'danger');
    const mods = [...animalMods];
    if (hasLight(state) && isNight(state.time)) mods.push(['light', 3]);
    if (dog) mods.push([`${state.dog.name} stands with you`, 3]);
    if (!check(state, 'Scare off the dog pack', 13, mods, out).success) {
      addInjury(state, 'bite');
      if (dog) {
        state.dog.health -= 15;
        log(state, `${state.dog.name} fights them off but is bitten (dog Health −15).`, 'warn');
      }
    } else log(state, 'The pack runs away.');
  } else if (roll <= 99) {
    log(state, 'Coyotes follow you along the road.', 'danger');
    if (!check(state, 'Make the coyotes go away', 11, animalMods, out).success) {
      if (chance(state, 0.5)) addInjury(state, 'bite');
      else {
        log(state, 'A coyote runs off with some of your food.', 'warn');
        loseRandomItem(state, (id) => ['canned_food', 'snacks', 'peanut_butter', 'dry_food', 'dog_food'].includes(id));
      }
    } else log(state, 'The coyotes go away.');
  } else {
    const found = rollZone(state, `road${state.time}`, 'house', 0.9, 0, 1);
    const names = [];
    for (const [id, q] of Object.entries(found)) {
      addItem(state.carried, id, q);
      names.push(`${itemName(id)}${q > 1 ? ' ×' + q : ''}`);
    }
    log(state, `You find an abandoned backpack by the road. Inside: ${names.join(', ') || 'nothing useful'}.`, 'good');
  }
}

export function describeTrip(state, est) {
  return `${est.miles.toFixed(1)} mi · about ${formatDuration(est.minutes)} · Energy −${Math.round(est.energy)}`;
}

export { environment };
