// All player actions. Each action costs game time.
import { ITEMS, itemName } from '../data/items.js';
import { CATEGORIES, HOUSE_ROOMS } from '../data/places.js';
import { chance, randInt } from '../rng.js';
import {
  log, addItem, bagWeight, carryLimit, dayIndex, hasLight, HOME, formatDuration,
} from './state.js';
import { advanceTime, addInjury, startStomachBug, INJURY_NAMES, environment } from './tick.js';
import { check } from './checks.js';
import { isNight } from './world.js';
import { placeState, rollZone } from './loot.js';
import { travel } from './travel.js';
import { getPlace } from './placesdb.js';
import { built, workOnProject, fireHoursPerBundle, painPillHours } from './base.js';

const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

// ---------- helpers ----------
function source(state, from) {
  return from === 'storage' ? state.home.storage : from === 'here' ? hereBag(state) : state.carried;
}

export function hereBag(state) {
  const loc = state.location;
  if (loc.kind === 'home') return state.home.storage;
  if (loc.kind === 'place') return placeState(state, getPlace(loc.id)).leftovers;
  if (loc.kind === 'house') return state.houses[loc.id].leftovers;
  return {};
}

export function locationLabel(state) {
  const loc = state.location;
  if (loc.kind === 'home') return 'Home (Aloha)';
  if (loc.kind === 'place') return getPlace(loc.id)?.name || 'Unknown place';
  if (loc.kind === 'house') return loc.label;
  return '';
}

function canHeat(state, kwh) {
  return state.home.fireHours > 0 || built(state, 'rocket_stove') || state.home.battery >= kwh;
}

function useHeat(state, kwh) {
  if (state.home.fireHours > 0) return 'on the fire';
  if (built(state, 'rocket_stove')) return 'on the rocket stove';
  state.home.battery -= kwh;
  return 'on the electric hot plate';
}

function seeBody(state, text) {
  const p = state.player;
  const day = dayIndex(state.time);
  log(state, text, 'story');
  if (p.bodySeenDay !== day) {
    p.bodySeenDay = day;
    p.morale = clamp(p.morale - (day >= 30 ? 1 : 3), 0, 100);
  }
}

function addFood(state, points) {
  const p = state.player;
  if (p.illness.stomachH > 0) points /= 2;
  p.food = clamp(p.food + points, 0, 100);
}

function addWater(state, points) {
  state.player.water = clamp(state.player.water + points, 0, 100);
}

function freeWeight(state) {
  return carryLimit(state) * 1.5 - bagWeight(state.carried);
}

// ---------- item use ----------
export function itemUses(state, id) {
  const it = ITEMS[id];
  if (!it) return [];
  const uses = [];
  if (it.kind === 'food' && !it.needsCooking) uses.push({ verb: 'eat', label: id === 'formula' ? 'Drink' : 'Eat' });
  if (it.kind === 'drink') uses.push({ verb: 'drink', label: 'Drink' });
  if (it.kind === 'med') uses.push({ verb: 'med', label: 'Use' });
  if (it.kind === 'wear') uses.push({ verb: 'wear', label: 'Wear' });
  if (it.kind === 'batteries') uses.push({ verb: 'batteries', label: 'Put in flashlight' });
  if (it.kind === 'comfort') uses.push({ verb: 'comfort', label: 'Use' });
  if (it.kind === 'food' && state.dog.stage === 'joined') uses.push({ verb: 'feeddog', label: 'Give to dog' });
  if (it.kind === 'dogfood' && state.dog.stage === 'joined') uses.push({ verb: 'feeddog', label: 'Feed dog' });
  return uses;
}

export function useItem(state, id, verb, from = 'carried') {
  const bag = source(state, from);
  const it = ITEMS[id];
  if (!bag[id] || !it) return;
  const p = state.player;
  switch (verb) {
    case 'eat': {
      if (id === 'canned_food' && chance(state, 0.05)) {
        addItem(bag, id, -1);
        log(state, 'This can is swollen. The food is bad. You throw it away.', 'warn');
        advanceTime(state, 2);
        return;
      }
      addItem(bag, id, -it.portion);
      addFood(state, (it.cal * it.portion) / 25);
      if (it.water) addWater(state, it.water);
      log(state, `You eat: ${it.name}${it.portion < 1 ? ' (one portion)' : ''}.`);
      advanceTime(state, 15);
      return;
    }
    case 'drink': {
      addItem(bag, id, -it.portion);
      addWater(state, it.water);
      log(state, `You drink: ${it.name}${it.portion < 1 ? ' (1 quart)' : ''}.`);
      advanceTime(state, 5);
      return;
    }
    case 'med':
      return useMed(state, id, bag);
    case 'wear': {
      const slot = it.slot;
      if (p.worn[slot]) { log(state, `You already wear a ${it.name.toLowerCase()}.`); return; }
      addItem(bag, id, -1);
      p.worn[slot] = true;
      log(state, `You put on the ${it.name.toLowerCase()}.`);
      advanceTime(state, 3);
      return;
    }
    case 'batteries': {
      if (!has(state, 'flashlight')) { log(state, 'You need a flashlight first.'); return; }
      addItem(bag, id, -1);
      p.lightHours = 10;
      log(state, 'You put new batteries in the flashlight (10 h of light).');
      advanceTime(state, 2);
      return;
    }
    case 'comfort': {
      const day = dayIndex(state.time);
      if (p.lastComfortDay === day) { log(state, 'You already did that today. It does not help again.'); return; }
      p.lastComfortDay = day;
      p.morale = clamp(p.morale + 5, 0, 100);
      log(state, 'You read and play cards for a while. Your mind is calmer.', 'good');
      advanceTime(state, 60);
      return;
    }
    case 'feeddog':
      return feedDog(state, id, bag);
    default:
  }
}

function has(state, id) {
  return (state.carried[id] || 0) > 0 || (state.location.kind === 'home' && (state.home.storage[id] || 0) > 0);
}

function useMed(state, id, bag) {
  const p = state.player;
  const it = ITEMS[id];
  if (it.med === 'bandage') {
    const order = ['deep_cut', 'bite', 'small_cut', 'sprain'];
    const open = p.injuries.filter((i) => !i.bandaged).sort((a, b) => order.indexOf(a.type) - order.indexOf(b.type));
    if (!open.length) { log(state, 'You have no wound that needs a bandage.'); return; }
    const inj = open[0];
    addItem(bag, id, -it.portion);
    inj.bandaged = true;
    log(state, `You clean and bandage the ${INJURY_NAMES[inj.type].toLowerCase()}.`, 'good');
    advanceTime(state, 15);
    return;
  }
  if (it.med === 'antibiotics') {
    const inf = p.illness.infection;
    if (!inf) { log(state, 'You have no infection. Keep the antibiotics for later.'); return; }
    if (inf.abxH != null) { log(state, 'You already take a course of antibiotics.'); return; }
    addItem(bag, id, -1);
    inf.abxH = 0;
    log(state, 'You start a 3-day course of antibiotics.', 'good');
    advanceTime(state, 2);
    return;
  }
  if (it.med === 'pain') {
    addItem(bag, id, -it.portion);
    p.painH = painPillHours(state);
    log(state, `You take pain pills. The pain is less for ${p.painH} hours.`);
    advanceTime(state, 2);
    return;
  }
  if (it.med === 'ors') {
    if (p.illness.stomachH <= 0) { log(state, 'You do not need this now.'); return; }
    addItem(bag, id, -1);
    p.illness.stomachH = Math.min(p.illness.stomachH, 24);
    addWater(state, 20);
    log(state, 'You drink the rehydration salts. You feel a little better.', 'good');
    advanceTime(state, 5);
  }
}

// ---------- moving items ----------
export function takeItem(state, id, qty) {
  const bag = hereBag(state);
  const have = bag[id] || 0;
  if (!have) return;
  const w = ITEMS[id].weight;
  const maxByWeight = w > 0 ? Math.floor((freeWeight(state) / w) * 1000) / 1000 : have;
  let n = Math.min(qty ?? have, have, maxByWeight);
  // Whole things (parts, tools, clothes) cannot be split.
  if (['part', 'tool', 'wear'].includes(ITEMS[id].kind)) n = Math.floor(n + 1e-9);
  if (n <= 0) { log(state, `Your pack is too full to take the ${itemName(id).toLowerCase()}.`, 'warn'); return; }
  addItem(bag, id, -n);
  addItem(state.carried, id, n);
  advanceTime(state, 1);
}

export function takeAll(state) {
  const bag = hereBag(state);
  const ids = Object.keys(bag).sort((a, b) => ITEMS[a].weight - ITEMS[b].weight);
  let left = false;
  for (const id of ids) {
    const before = bag[id];
    const w = ITEMS[id].weight;
    const maxN = Math.floor(freeWeight(state) / w);
    const n = Math.min(Math.floor(before), maxN);
    if (n > 0) { addItem(bag, id, -n); addItem(state.carried, id, n); }
    if (bag[id]) left = true;
  }
  if (left) log(state, 'Your pack is full. Some items stay here.', 'warn');
  advanceTime(state, 2);
}

export function dropItem(state, id, qty) {
  const have = state.carried[id] || 0;
  if (!have) return;
  const n = Math.min(qty ?? have, have);
  addItem(state.carried, id, -n);
  addItem(hereBag(state), id, n);
  if (state.location.kind !== 'home') log(state, `You leave the ${itemName(id).toLowerCase()} here.`);
  advanceTime(state, 1);
}

export function storeAll(state) {
  for (const [id, q] of Object.entries(state.carried)) {
    if (id === 'backpack' || id === 'flashlight') continue;
    addItem(state.carried, id, -q);
    addItem(state.home.storage, id, q);
  }
  log(state, 'You put your supplies away in the house.');
  advanceTime(state, 5);
}

// ---------- rest and sleep ----------
export function rest(state, hours) {
  log(state, `You rest for ${hours} h.`);
  advanceTime(state, hours * 60, 'rest');
}

export function sleep(state, hours) {
  const where = state.location.kind === 'home' ? 'in your bed' : 'on the floor';
  log(state, `You sleep ${where} for ${hours} h.`);
  advanceTime(state, hours * 60, 'sleep');
  if (!state.dead) log(state, 'You wake up.');
}

// ---------- home actions ----------
function homeAction(state, id) {
  const h = state.home;
  const p = state.player;
  switch (id) {
    case 'drink_tank':
      h.tankGal = Math.max(0, h.tankGal - 0.25);
      addWater(state, 40);
      log(state, 'You drain water from the water heater tank and drink a quart. It is clean.');
      advanceTime(state, 10);
      return;
    case 'fill_jug': {
      const fromSafe = h.safeGal >= 1;
      if (fromSafe) h.safeGal -= 1; else h.tankGal -= 1;
      addItem(state.carried, 'water_bottle', 1);
      log(state, `You fill a 1-gallon jug with clean water from the ${fromSafe ? 'boiled water pot' : 'water heater tank'}.`);
      advanceTime(state, 10);
      return;
    }
    case 'collect_tap':
      h.rawGal += 2;
      log(state, 'The tap gives a weak flow. You fill two jugs (2 gal). This water is not safe to drink before you boil it.');
      advanceTime(state, 15);
      return;
    case 'collect_toilet':
      h.rawGal += h.toiletGal;
      log(state, `You take the water from the toilet tanks (${h.toiletGal} gal). Boil it before you drink it.`);
      h.toiletGal = 0;
      advanceTime(state, 10);
      return;
    case 'drink_raw':
      h.rawGal = Math.max(0, h.rawGal - 0.25);
      addWater(state, 40);
      log(state, 'You drink a quart of water that you did not boil.', 'warn');
      advanceTime(state, 5);
      if (chance(state, 0.3)) startStomachBug(state);
      return;
    case 'boil': {
      const how = useHeat(state, 0.4);
      const g = Math.min(1, h.rawGal);
      h.rawGal -= g;
      h.safeGal += g;
      log(state, `You boil ${g} gal of water ${how}. It is safe to drink now.`);
      advanceTime(state, 20);
      return;
    }
    case 'filter_water': {
      const g = Math.min(2, h.rawGal);
      h.rawGal -= g;
      h.safeGal += g;
      log(state, `You run ${g.toFixed(1)} gal of water through the filter station. It is safe to drink now.`);
      advanceTime(state, 10);
      return;
    }
    case 'drink_safe':
      h.safeGal = Math.max(0, h.safeGal - 0.25);
      addWater(state, 40);
      log(state, 'You drink a quart of boiled water.');
      advanceTime(state, 5);
      return;
    case 'cook': {
      const food = ['dry_food', 'canned_food'].find((f) => (h.storage[f] || 0) > 0 || (state.carried[f] || 0) > 0);
      const bag = (h.storage[food] || 0) > 0 ? h.storage : state.carried;
      const it = ITEMS[food];
      if (food === 'dry_food') {
        const water = h.safeGal >= 0.125 ? 'safeGal' : h.rawGal >= 0.125 ? 'rawGal' : h.tankGal >= 0.125 ? 'tankGal' : null;
        if (!water) { log(state, 'You need water to cook rice or pasta.'); return; }
        h[water] -= 0.125;
      }
      const how = useHeat(state, 0.5);
      addItem(bag, food, -it.portion);
      addFood(state, (it.cal * it.portion) / 25);
      p.warmth = clamp(p.warmth + 10, 0, 100);
      p.morale = clamp(p.morale + 5, 0, 100);
      log(state, `You cook a hot meal (${it.name.toLowerCase()}) ${how}. It feels good to eat hot food.`, 'good');
      advanceTime(state, 30);
      return;
    }
    case 'add_wood': {
      const bag = (h.storage.firewood || 0) > 0 ? h.storage : state.carried;
      addItem(bag, 'firewood', -1);
      const lit = h.fireHours > 0;
      const per = fireHoursPerBundle(state);
      const where = built(state, 'wood_stove') ? 'wood stove' : 'fireplace';
      h.fireHours += per;
      log(state, lit ? `You put more wood on the fire (+${per} h).` : `You light a fire in the ${where}. One bundle burns for about ${per} hours.`, 'good');
      advanceTime(state, lit ? 5 : 15);
      return;
    }
    case 'break_furniture':
      h.furniture -= 1;
      addItem(h.storage, 'firewood', 1);
      log(state, 'You break up old furniture into firewood (+1 bundle). It is hard work.');
      advanceTime(state, 60, 'heavy');
      return;
    case 'heater':
      h.heaterOn = !h.heaterOn;
      log(state, h.heaterOn ? 'You turn on the electric space heater. It uses the battery fast (1.5 kWh per hour).' : 'You turn off the electric heater.');
      advanceTime(state, 1);
      return;
    case 'dry_clothes':
      p.wet = false; p.wetMinutes = 0; p.dryMinutes = 0;
      log(state, 'You change into dry clothes and hang the wet ones up.');
      advanceTime(state, 10);
      return;
    case 'fridge':
      h.fridgeOpened = true;
      p.morale = clamp(p.morale - 2, 0, 100);
      log(state, 'You open the fridge. Everything inside is rotten. You close it fast.', 'warn');
      advanceTime(state, 2);
      return;
    case 'store_all':
      return storeAll(state);
    case 'feed_stray':
      return feedStray(state);
    default:
  }
}

function anyFood(state) {
  const all = { ...state.home.storage };
  for (const [k, v] of Object.entries(state.carried)) all[k] = (all[k] || 0) + v;
  return ['dog_food', 'canned_food', 'snacks', 'peanut_butter', 'formula'].find((f) => (all[f] || 0) > 0);
}

function feedStray(state) {
  const d = state.dog;
  const day = dayIndex(state.time);
  const food = anyFood(state);
  if (!food) { log(state, 'You have no food to give the dog.'); return; }
  const bag = (state.home.storage[food] || 0) > 0 ? state.home.storage : state.carried;
  addItem(bag, food, -ITEMS[food].portion);
  d.feedDays.push(day);
  advanceTime(state, 10);
  const days = new Set(d.feedDays).size;
  if (days >= 3) {
    d.stage = 'joined';
    d.food = 70;
    d.bond = 30;
    log(state, 'The dog walks past you, into the house, and lies down near the fireplace. It stays.', 'good');
    state.pendingPrompt = 'name_dog';
  } else if (days === 1) {
    log(state, 'You put food on the porch and go back inside. Later, the bowl is empty.', 'story');
  } else {
    log(state, 'The dog eats while you watch from the door. It comes a little closer today.', 'story');
  }
}

function feedDog(state, id, bag) {
  const d = state.dog;
  const it = ITEMS[id];
  addItem(bag, id, -it.portion);
  const points = it.kind === 'dogfood' ? 100 : (it.cal * it.portion) / 10;
  d.food = clamp(d.food + points, 0, 100);
  d.bond = clamp(d.bond + 1, 0, 100);
  log(state, `You feed ${d.name}.`);
  advanceTime(state, 5);
}

export function nameDog(state, name) {
  const clean = String(name || '').replace(/[^\p{L}\p{N} '\-]/gu, '').trim().slice(0, 20) || 'Dog';
  state.dog.name = clean;
  state.pendingPrompt = null;
  log(state, `You call the dog ${clean}. ${clean} wags once.`, 'good');
}

export function playWithDog(state) {
  const d = state.dog;
  const p = state.player;
  const day = dayIndex(state.time);
  if (p.lastDogPlayDay === day) { log(state, `${d.name} is resting. You already played today.`); return; }
  p.lastDogPlayDay = day;
  d.bond = clamp(d.bond + 2, 0, 100);
  p.morale = clamp(p.morale + 3, 0, 100);
  log(state, `You play with ${d.name} for a while. For a moment, things feel normal.`, 'good');
  advanceTime(state, 20);
}

export function toggleDogFollow(state) {
  const d = state.dog;
  d.withPlayer = !d.withPlayer;
  log(state, d.withPlayer ? `${d.name} will come with you.` : `${d.name} will stay home and guard the house.`);
}

// ---------- searching ----------
export function enterPlace(state, place) {
  const ps = placeState(state, place);
  const cat = CATEGORIES[place.cat];
  if (!ps.visited) {
    ps.visited = true;
    state.stats.placesSearched += 1;
    log(state, cat.entryText, 'story');
    if (ps.emptyHint) log(state, 'Most shelves here are already empty. People took a lot in the first weeks.');
    if (cat.entryMorale) state.player.morale = clamp(state.player.morale + cat.entryMorale, 0, 100);
  }
  if (cat.bodies && chance(state, 0.5)) seeBody(state, 'There are bodies here, under sheets and in the chairs. You do not look long.');
}

export function forceEntry(state) {
  const place = getPlace(state.location.id);
  const ps = placeState(state, place);
  if (has(state, 'pry_bar')) {
    ps.unlocked = true;
    log(state, 'You open the locked door with the pry bar.');
    advanceTime(state, 5, 'work');
    return;
  }
  state.player.energy = clamp(state.player.energy - 5, 0, 100);
  advanceTime(state, 5, 'heavy');
  if (check(state, 'Kick open the locked door', 12).success) {
    ps.unlocked = true;
    log(state, 'The door breaks open.');
  } else if (chance(state, 0.3)) addInjury(state, 'sprain');
}

export function openCounter(state) {
  const place = getPlace(state.location.id);
  const ps = placeState(state, place);
  const lz = CATEGORIES[place.cat].lockedZone;
  if (has(state, 'pry_bar')) {
    ps.counterOpen = true;
    log(state, `You open the ${lz.name} gate with the pry bar.`);
    advanceTime(state, 5, 'work');
    return;
  }
  advanceTime(state, 10, 'heavy');
  if (check(state, `Force the ${lz.name} gate`, lz.dc).success) {
    ps.counterOpen = true;
    log(state, 'The gate bends open.');
  } else if (chance(state, 0.25)) addInjury(state, 'small_cut');
}

function searchMinutes(state, base, dark) {
  const p = state.player;
  let m = base;
  if (dark && !hasLight(state)) m *= 2;
  if (p.water < 25) m *= 1.25;
  if (p.injuries.some((i) => i.type === 'sprain')) m *= 1.3;
  const extra = Math.max(0, bagWeight(state.carried) - 10);
  m *= 1 + Math.floor(extra / 10) * 0.1;
  return m;
}

function dogExtra(state) {
  return state.dog.stage === 'joined' && state.dog.withPlayer && state.dog.bond >= 50 ? 1 : 0;
}

function zoneInjuryCheck(state) {
  if (!check(state, 'Search with care (glass, falls)', 8).success) {
    addInjury(state, chance(state, 0.8) ? 'small_cut' : 'sprain');
  }
}

function reportFound(state, found, where) {
  const names = Object.entries(found).map(([id, q]) => `${itemName(id)}${q > 1 ? ' ×' + q : ''}`);
  if (names.length) log(state, `You search the ${where}. You find: ${names.join(', ')}.`, 'good');
  else log(state, `You search the ${where}. You find nothing useful.`);
}

export function searchZone(state) {
  const place = getPlace(state.location.id);
  const cat = CATEGORIES[place.cat];
  const ps = placeState(state, place);
  if (ps.zonesDone >= ps.zones) return;
  const env = environment(state, 'work');
  const counterZone = cat.lockedZone && ps.zonesDone === ps.zones - 1;
  const minutes = searchMinutes(state, cat.zoneMinutes, env.dark);
  advanceTime(state, minutes, 'work');
  if (state.dead) return;
  zoneInjuryCheck(state);
  const found = rollZone(state, place.id, place.cat, ps.stock, ps.zonesDone, dogExtra(state));
  if (counterZone) found.antibiotics = (found.antibiotics || 0) + (ps.stock > 0.2 ? 1 : 0);
  ps.zonesDone += 1;
  state.stats.zonesSearched += 1;
  for (const [id, q] of Object.entries(found)) addItem(ps.leftovers, id, q);
  reportFound(state, found, counterZone ? lz(cat) : `${cat.zoneName} (${ps.zonesDone} of ${ps.zones})`);
  if (place.cat === 'supermarket' && ps.zonesDone === 1) {
    state.player.morale = clamp(state.player.morale - 3, 0, 100);
    log(state, 'The fresh food section is black and rotten. Rats run under the shelves.', 'warn');
  }
}
const lz = (cat) => cat.lockedZone.name;

// ---------- houses ----------
export function areaKey(state) {
  return state.location.kind === 'place' ? state.location.id : 'home';
}

export function nearbyHousesLeft(state) {
  return 12 - (state.houseAreas[areaKey(state)] || 0);
}

export function enterNearbyHouse(state) {
  const key = areaKey(state);
  const n = (state.houseAreas[key] || 0) + 1;
  state.houseAreas[key] = n;
  const id = `${key}#${n}`;
  const near = key === 'home' ? 'on your street' : `near ${getPlace(key)?.name || 'here'}`;
  const label = `House ${n} ${near}`;
  const r = randInt(state, 0, 999) / 1000;
  state.houses[id] = { roomsDone: 0, leftovers: {}, body: r < 0.6 };
  const parent = { ...state.location, pos: { ...state.pos } };
  advanceTime(state, 5, 'walk');
  log(state, `You walk to a house ${near}.`);
  // Entry: 70% of doors are locked.
  if (chance(state, 0.7)) {
    if (has(state, 'pry_bar')) {
      log(state, 'The door is locked. You open it with the pry bar.');
      advanceTime(state, 5, 'work');
    } else if (chance(state, 0.1)) {
      log(state, 'The door is locked, but you find a spare key under a flower pot.');
      advanceTime(state, 2);
    } else {
      state.player.energy = clamp(state.player.energy - 5, 0, 100);
      if (!check(state, 'Kick open the locked door', 12).success) {
        log(state, 'The door holds. You break a window and climb in.');
        if (chance(state, 0.25)) addInjury(state, 'small_cut');
      }
      advanceTime(state, 5, 'heavy');
    }
  } else {
    log(state, 'The door is not locked.');
  }
  state.stats.housesSearched += 1;
  state.location = { kind: 'house', id, label, parent };
  if (state.houses[id].body) seeBody(state, 'Someone is in the bedroom. You close the door.');
  else log(state, 'The house is empty and cold. A family lived here.');
}

export function searchRoom(state) {
  const loc = state.location;
  const hs = state.houses[loc.id];
  if (hs.roomsDone >= HOUSE_ROOMS.length) return;
  const room = HOUSE_ROOMS[hs.roomsDone];
  const env = environment(state, 'work');
  advanceTime(state, searchMinutes(state, CATEGORIES.house.zoneMinutes, env.dark), 'work');
  if (state.dead) return;
  zoneInjuryCheck(state);
  const found = rollZone(state, loc.id, 'house', CATEGORIES.house.stock, hs.roomsDone, dogExtra(state));
  hs.roomsDone += 1;
  state.stats.zonesSearched += 1;
  for (const [id, q] of Object.entries(found)) addItem(hs.leftovers, id, q);
  reportFound(state, found, room);
}

export function leaveHouse(state) {
  const parent = state.location.parent;
  state.location = { kind: parent.kind, ...(parent.id ? { id: parent.id } : {}) };
  state.pos = { ...parent.pos };
  log(state, 'You walk back.');
  advanceTime(state, 5, 'walk');
}

// ---------- travel ----------
export function goToPlace(state, placeId) {
  const place = getPlace(placeId);
  if (!place) return;
  const ok = travel(state, place, place.name);
  if (!ok) return;
  state.location = { kind: 'place', id: placeId };
  log(state, `You arrive at ${place.name}.`, 'travel');
  enterPlace(state, place);
}

export function goHome(state) {
  const ok = travel(state, HOME, 'home');
  if (!ok) return;
  state.location = { kind: 'home' };
  log(state, 'You are home. You lock the door behind you.', 'travel');
}

// ---------- action list for the UI ----------
export function listActions(state) {
  const loc = state.location;
  const p = state.player;
  const h = state.home;
  const acts = [];
  const add = (id, label, opts = {}) => acts.push({ id, label, ...opts });

  if (loc.kind === 'home') {
    add('drink_tank', 'Drink from the water heater tank', { disabled: h.tankGal < 0.25 && 'The tank is empty', note: `${h.tankGal.toFixed(1)} gal left` });
    if (h.safeGal >= 0.25) add('drink_safe', 'Drink boiled water', { note: `${h.safeGal.toFixed(1)} gal` });
    add('fill_jug', 'Fill a 1 gal jug to carry', { disabled: h.safeGal < 1 && h.tankGal < 1 && 'No clean water' });
    if (h.tapWorks) add('collect_tap', 'Collect tap water (2 gal, unsafe)');
    if (h.toiletGal > 0) add('collect_toilet', 'Take water from the toilet tanks');
    if (h.rawGal > 0) {
      add('boil', 'Boil 1 gal of water', { disabled: !canHeat(state, 0.4) && 'Light a fire or charge the battery', note: `${h.rawGal.toFixed(1)} gal unsafe` });
      if (built(state, 'filter_station')) add('filter_water', 'Filter 2 gal of water (no fuel)', { note: '10 min' });
      add('drink_raw', 'Drink water without boiling (risk)');
    }
    const fuel = (h.storage.firewood || 0) + (state.carried.firewood || 0);
    add('add_wood', h.fireHours > 0 ? 'Add wood to the fire' : `Light a fire in the ${built(state, 'wood_stove') ? 'wood stove' : 'fireplace'}`, { disabled: fuel < 1 && 'No firewood', note: `${fuel} bundles` });
    if (h.furniture > 0) add('break_furniture', 'Break furniture for firewood (1 h)', { note: `${h.furniture} left` });
    add('heater', h.heaterOn ? 'Turn off the electric heater' : 'Turn on the electric heater', { disabled: !h.heaterOn && h.battery < 1 && 'Battery too low' });
    const food = ['dry_food', 'canned_food'].some((f) => (h.storage[f] || 0) > 0 || (state.carried[f] || 0) > 0);
    add('cook', 'Cook a hot meal', { disabled: (!food && 'No food to cook') || (!canHeat(state, 0.5) && 'Light a fire or charge the battery') });
    if (p.wet) add('dry_clothes', 'Change into dry clothes');
    if (!h.fridgeOpened) add('fridge', 'Open the fridge');
    if (Object.keys(state.carried).some((k) => k !== 'backpack' && k !== 'flashlight')) add('store_all', 'Put away everything you carry');
    if (state.dog.stage === 'visiting') {
      const fedToday = state.dog.feedDays.includes(dayIndex(state.time));
      const night = isNight(state.time);
      add('feed_stray', 'Leave food outside for the dog', { disabled: (fedToday && 'You fed it today') || (night && 'The dog comes only in the day') });
    }
    add('house', 'Search a house on your street', { disabled: nearbyHousesLeft(state) <= 0 && 'No more houses near here' });
  }
  if (loc.kind === 'place') {
    const place = getPlace(loc.id);
    const cat = CATEGORIES[place.cat];
    const ps = placeState(state, place);
    if (!ps.unlocked) add('force', 'Force the locked door', { note: has(state, 'pry_bar') ? 'pry bar' : 'd20 DC 12' });
    else if (ps.zonesDone < ps.zones) {
      if (cat.lockedZone && ps.zonesDone === ps.zones - 1 && !ps.counterOpen) {
        add('counter', `Open the ${cat.lockedZone.name}`, { note: has(state, 'pry_bar') ? 'pry bar' : `d20 DC ${cat.lockedZone.dc}` });
      } else {
        const env = environment(state, 'work');
        const min = searchMinutes(state, cat.zoneMinutes, env.dark);
        add('search', `Search the next ${cat.zoneName}`, { note: `${ps.zonesDone}/${ps.zones} done · ${formatDuration(min)}${env.dark && !hasLight(state) ? ' (dark, no light)' : ''}` });
      }
    } else add('search', 'Nothing left to search', { disabled: 'You searched all of it' });
    add('house', 'Search a house nearby', { disabled: nearbyHousesLeft(state) <= 0 && 'No more houses near here' });
    add('go_home', 'Walk home');
  }
  if (loc.kind === 'house') {
    const hs = state.houses[loc.id];
    if (hs.roomsDone < HOUSE_ROOMS.length) add('room', `Search the ${HOUSE_ROOMS[hs.roomsDone]}`, { note: `${hs.roomsDone}/${HOUSE_ROOMS.length} rooms` });
    else add('room', 'All rooms searched', { disabled: 'Nothing left' });
    add('leave_house', 'Leave the house');
  }
  add('rest', 'Rest 1 hour');
  add('sleep', state.location.kind === 'home' ? 'Sleep in your bed…' : 'Sleep here on the floor…');
  if (state.dog.stage === 'joined') {
    add('play_dog', `Play with ${state.dog.name}`);
    if (loc.kind === 'home') add('dog_follow', state.dog.withPlayer ? `${state.dog.name}: stay home` : `${state.dog.name}: come with me`);
  }
  return acts;
}

export function doAction(state, id, arg) {
  if (state.dead) return;
  switch (id) {
    case 'rest': return rest(state, 1);
    case 'sleep': return sleep(state, Number(arg) || 8);
    case 'search': return searchZone(state);
    case 'force': return forceEntry(state);
    case 'counter': return openCounter(state);
    case 'house': return enterNearbyHouse(state);
    case 'room': return searchRoom(state);
    case 'leave_house': return leaveHouse(state);
    case 'go_home': return goHome(state);
    case 'go_place': return goToPlace(state, arg);
    case 'play_dog': return playWithDog(state);
    case 'dog_follow': return toggleDogFollow(state);
    case 'build': return workOnProject(state, arg);
    default: return homeAction(state, id);
  }
}
