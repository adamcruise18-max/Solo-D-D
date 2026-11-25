// All player actions. Each action costs game time.
import { ITEMS, itemName } from '../data/items.js';
import { CATEGORIES, HOUSE_ROOMS } from '../data/places.js';
import { chance, randInt } from '../rng.js';
import {
  log, addItem, bagWeight, carryLimit, dayIndex, hasLight, HOME, homeOf, formatDuration,
} from './state.js';
import { advanceTime, addInjury, startStomachBug, INJURY_NAMES, environment } from './tick.js';
import { check, odds, oddsText } from './checks.js';
import { RAW_WATER_SICK } from './status.js';
import { isNight } from './world.js';
import { placeState, rollZone } from './loot.js';
import { travel } from './travel.js';
import { getPlace } from './placesdb.js';
import { CAL_PER_FOOD_POINT, WATER_PER_QUART, SEARCH_INJURY_CHANCE } from './vitals.js';
import { built, workOnProject, fireHoursPerBundle, painPillHours } from './base.js';
import { putOn, takeOff, normalizeWorn } from './clothes.js';
import { eatRisk, stageLabel, isPerishable, WARM_FED_HOURS } from './food.js';
// Cook fresh food first (it spoils), then rice or pasta, then cans.
const COOK_ORDER = () => [...Object.keys(ITEMS).filter((id) => isPerishable(id) && ITEMS[id].kind === 'food'), 'dry_food', 'canned_food'];
import { practice, searchTimeFactor, forceBonus, bandageHealFactor, cookMoraleBonus, boilTimeFactor, fireBonusFactor, rawWaterRiskFactor, hasRead, skillsOf, SKILLS, BOOK_XP, READ_MINUTES } from './skills.js';

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
  if (it.kind === 'warm') uses.push({ verb: 'warm', label: 'Use' });
  if (it.kind === 'book') uses.push({ verb: 'read', label: hasRead(state, id) ? 'Read again' : 'Read', note: `${READ_MINUTES / 60} h · ${SKILLS[it.skill].name}` });
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
      const risk = eatRisk(state, id);
      addItem(bag, id, -it.portion);
      addFood(state, (it.cal * it.portion) / CAL_PER_FOOD_POINT);
      if (it.water) addWater(state, it.water);
      log(state, `You eat: ${it.name}${it.portion < 1 ? ' (one portion)' : ''}.`);
      advanceTime(state, 15);
      if (risk > 0 && chance(state, risk)) { log(state, 'It tasted off. Your stomach turns.', 'warn'); startStomachBug(state); }
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
      // One item per layer; the old one goes back into the same bag.
      addItem(bag, id, -1);
      const old = putOn(p, id);
      if (old) addItem(bag, old, 1);
      log(state, old ? `You take off the ${itemName(old).toLowerCase()} and put on the ${it.name.toLowerCase()}.` : `You put on the ${it.name.toLowerCase()}.`);
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
      if (it.portion) addItem(bag, id, -it.portion);
      log(state, it.comfortText || 'You rest your mind for a while.', 'good');
      advanceTime(state, 60);
      return;
    }
    case 'warm': {
      addItem(bag, id, -1);
      p.warmth = clamp(p.warmth + it.warmth, 0, 100);
      log(state, `You open the ${it.name.toLowerCase()}. Warmth +${it.warmth}.`, 'good');
      advanceTime(state, 1);
      return;
    }
    case 'feeddog':
      return feedDog(state, id, bag);
    case 'read':
      return readBook(state, id);
    default:
  }
}

function has(state, id) {
  return (state.carried[id] || 0) > 0 || (state.location.kind === 'home' && (state.home.storage[id] || 0) > 0);
}

// A book teaches a skill once (+BOOK_XP). Reading again only helps morale a little.
// You need light to read.
export function readBook(state, id) {
  const it = ITEMS[id];
  if (!it || it.kind !== 'book') return false;
  const env = environment(state, 'work');
  if (env.dark && !hasLight(state)) { log(state, 'It is too dark to read. Use a light.'); return false; }
  const s = skillsOf(state);
  const first = !s.books.includes(id);
  advanceTime(state, READ_MINUTES);
  if (state.dead) return true;
  if (first) {
    s.books.push(id);
    log(state, `You read the ${it.name.toLowerCase()} and take notes.`, 'good');
    practice(state, it.skill, BOOK_XP, { book: true });
  } else {
    log(state, `You read the ${it.name.toLowerCase()} again. You know it well now. It passes the time.`);
    state.player.morale = clamp(state.player.morale + 2, 0, 100);
  }
  return true;
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
    inj.healH *= bandageHealFactor(state);
    practice(state, 'first_aid', 3);
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
    practice(state, 'first_aid', 2);
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
    practice(state, 'first_aid', 2);
    addWater(state, WATER_PER_QUART / 2);
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
      addWater(state, WATER_PER_QUART);
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
      practice(state, 'survival', 1);
      return;
    case 'collect_toilet':
      h.rawGal += h.toiletGal;
      log(state, `You take the water from the toilet tanks (${h.toiletGal} gal). Boil it before you drink it.`);
      h.toiletGal = 0;
      advanceTime(state, 10);
      return;
    case 'drink_raw':
      h.rawGal = Math.max(0, h.rawGal - 0.25);
      addWater(state, WATER_PER_QUART);
      log(state, 'You drink a quart of water that you did not boil.', 'warn');
      advanceTime(state, 5);
      if (chance(state, RAW_WATER_SICK * rawWaterRiskFactor(state))) startStomachBug(state);
      return;
    case 'boil': {
      const how = useHeat(state, 0.4);
      const g = Math.min(1, h.rawGal);
      h.rawGal -= g;
      h.safeGal += g;
      log(state, `You boil ${g} gal of water ${how}. It is safe to drink now.`);
      advanceTime(state, Math.round(20 * boilTimeFactor(state)));
      practice(state, 'cooking', 2);
      return;
    }
    case 'purify': {
      // One tablet treats 1 gal; it is safe after 30 minutes.
      const bag = (state.carried.water_tablets || 0) > 0 ? state.carried : h.storage;
      const g = Math.min(1, h.rawGal);
      addItem(bag, 'water_tablets', -ITEMS.water_tablets.portion);
      h.rawGal -= g;
      h.safeGal += g;
      log(state, `You drop a tablet in ${g} gal of water and wait. It is safe to drink now.`);
      advanceTime(state, 30);
      practice(state, 'cooking', 1);
      return;
    }
    case 'filter_water': {
      const g = Math.min(2, h.rawGal);
      h.rawGal -= g;
      h.safeGal += g;
      log(state, `You run ${g.toFixed(1)} gal of water through the filter station. It is safe to drink now.`);
      advanceTime(state, 10);
      practice(state, 'survival', 1);
      return;
    }
    case 'drink_safe':
      h.safeGal = Math.max(0, h.safeGal - 0.25);
      addWater(state, WATER_PER_QUART);
      log(state, 'You drink a quart of boiled water.');
      advanceTime(state, 5);
      return;
    case 'cook': {
      const food = COOK_ORDER().find((f) => (h.storage[f] || 0) > 0 || (state.carried[f] || 0) > 0);
      const bag = (h.storage[food] || 0) > 0 ? h.storage : state.carried;
      const it = ITEMS[food];
      if (food === 'dry_food') {
        const water = h.safeGal >= 0.125 ? 'safeGal' : h.rawGal >= 0.125 ? 'rawGal' : h.tankGal >= 0.125 ? 'tankGal' : null;
        if (!water) { log(state, 'You need water to cook rice or pasta.'); return; }
        h[water] -= 0.125;
      }
      const how = useHeat(state, 0.5);
      const risk = eatRisk(state, food, true);
      const stage = stageLabel(state, food);
      addItem(bag, food, -it.portion);
      addFood(state, (it.cal * it.portion) / CAL_PER_FOOD_POINT);
      p.warmth = clamp(p.warmth + 10, 0, 100);
      p.morale = clamp(p.morale + 5 + cookMoraleBonus(state), 0, 100);
      p.warmFedH = WARM_FED_HOURS; // "Warm and fed": warmth drops slower for a while
      practice(state, 'cooking', 3);
      log(state, `You cook a hot meal (${it.name.toLowerCase()}${stage && stage !== 'Fresh' ? `, ${stage.toLowerCase()}` : ''}) ${how}. Warm and fed: you lose heat slower for ${WARM_FED_HOURS} h.`, 'good');
      advanceTime(state, 30);
      if (risk > 0 && chance(state, risk)) { log(state, 'The food was bad. Your stomach turns.', 'warn'); startStomachBug(state); }
      return;
    }
    case 'add_wood': {
      const bag = (h.storage.firewood || 0) > 0 ? h.storage : state.carried;
      addItem(bag, 'firewood', -1);
      const lit = h.fireHours > 0;
      const per = Math.round(fireHoursPerBundle(state) * fireBonusFactor(state) * 10) / 10;
      const where = built(state, 'wood_stove') ? 'wood stove' : 'fireplace';
      h.fireHours += per;
      log(state, lit ? `You put more wood on the fire (+${per} h).` : `You light a fire in the ${where}. One bundle burns for about ${per} hours.`, 'good');
      advanceTime(state, lit ? 5 : 15);
      practice(state, 'survival', lit ? 1 : 2);
      return;
    }
    case 'break_furniture':
      h.furniture -= 1;
      addItem(h.storage, 'firewood', 1);
      log(state, 'You break up old furniture into firewood (+1 bundle). It is hard work.');
      advanceTime(state, 60, 'heavy');
      practice(state, 'tinkering', 2);
      return;
    case 'heater':
      h.heaterOn = !h.heaterOn;
      log(state, h.heaterOn ? 'You turn on the electric space heater. It uses the battery fast (1.5 kWh per hour).' : 'You turn off the electric heater.');
      advanceTime(state, 1);
      return;
    case 'dry_clothes':
      p.wet = false; p.wetness = 0; p.wetMinutes = 0; p.dryMinutes = 0;
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

// The right tool gives advantage when you force a door or gate.
export function forceOpts(state) { return has(state, 'toolkit') ? { adv: ['tool kit'] } : {}; }

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
  if (check(state, 'Kick open the locked door', 12, forceBonus(state), forceOpts(state)).success) {
    ps.unlocked = true;
    log(state, 'The door breaks open.');
    practice(state, 'tinkering', 4);
  } else {
    practice(state, 'tinkering', 2);
    if (chance(state, 0.3)) addInjury(state, 'sprain');
  }
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
  if (check(state, `Force the ${lz.name} gate`, lz.dc, forceBonus(state), forceOpts(state)).success) {
    ps.counterOpen = true;
    log(state, 'The gate bends open.');
    practice(state, 'tinkering', 4);
  } else {
    practice(state, 'tinkering', 2);
    if (chance(state, 0.25)) addInjury(state, 'small_cut');
  }
}

export function searchMinutes(state, base, dark) {
  const p = state.player;
  let m = base * searchTimeFactor(state);
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

// A careful search rarely hurts you. The risk is higher in the dark without a light,
// and when you are exhausted.
function zoneInjuryCheck(state) {
  let p = SEARCH_INJURY_CHANCE;
  if (environment(state, 'work').dark && !hasLight(state)) p *= 2;
  if (state.player.energy < 25) p *= 1.5;
  if (chance(state, p)) {
    log(state, 'You slip on broken glass in the dark corner.', 'warn');
    addInjury(state, chance(state, 0.8) ? 'small_cut' : 'sprain');
  }
}

function reportFound(state, found, where) {
  const names = Object.entries(found).map(([id, q]) => `${itemName(id)}${q > 1 ? ' ×' + q : ''}`);
  if (names.length) log(state, `You search the ${where}. You find: ${names.join(', ')}.`, 'good');
  else log(state, `You search the ${where}. You find nothing useful.`);
}

// Which zones (aisles, rooms) are done. Old saves only have a count: zones 0..n-1.
export function zonesDoneList(ps, countKey = 'zonesDone', listKey = 'doneList') {
  if (!Array.isArray(ps[listKey])) ps[listKey] = Array.from({ length: ps[countKey] || 0 }, (_, i) => i);
  return ps[listKey];
}

// The zone index the panel button searches: the first one not done.
// The locked counter (last zone) comes last.
export function nextZone(ps, counterIdx = -1) {
  const done = zonesDoneList(ps);
  for (let i = 0; i < ps.zones; i++) if (i !== counterIdx && !done.includes(i)) return i;
  if (counterIdx >= 0 && !done.includes(counterIdx)) return counterIdx;
  return -1;
}

export function counterIndex(place, ps) {
  return CATEGORIES[place.cat].lockedZone ? ps.zones - 1 : -1;
}

// ---------- items placed in a building ----------
// Each zone (aisle, room) has a fixed list of single items. The 3D view shows them on shelves and
// furniture, and the player picks them up one by one. The panel "search" takes all items of a zone at once.
// holder: the place state or the house state.
function zoneCtx(state) {
  const loc = state.location;
  if (loc.kind === 'place') {
    const place = getPlace(loc.id);
    const ps = placeState(state, place);
    return { holder: ps, key: place.id, catId: place.cat, stock: ps.stock, zones: ps.zones, counterIdx: counterIndex(place, ps), house: false, place };
  }
  if (loc.kind === 'house') {
    const hs = state.houses[loc.id];
    return { holder: hs, key: loc.id, catId: 'house', stock: CATEGORIES.house.stock, zones: HOUSE_ROOMS.length, counterIdx: -1, house: true };
  }
  return null;
}

function doneListOf(ctx) {
  return ctx.house ? zonesDoneList(ctx.holder, 'roomsDone', 'doneList') : zonesDoneList(ctx.holder);
}

function markZoneDone(ctx, zone) {
  const done = doneListOf(ctx);
  if (done.includes(zone)) return;
  done.push(zone);
  if (ctx.house) ctx.holder.roomsDone = done.length; else ctx.holder.zonesDone = done.length;
}

// The items in one zone. Made once (first time it is needed) and then kept in the save.
function zoneItemList(state, ctx, zone) {
  const h = ctx.holder;
  if (!h.zoneItems) h.zoneItems = {};
  if (!h.taken) h.taken = [];
  if (!h.zoneItems[zone]) {
    const found = rollZone(state, ctx.key, ctx.catId, ctx.stock, zone, dogExtra(state));
    if (zone === ctx.counterIdx) found.antibiotics = (found.antibiotics || 0) + (ctx.stock > 0.2 ? 1 : 0);
    const list = [];
    for (const [item, q] of Object.entries(found)) for (let i = 0; i < q; i++) list.push({ pid: `z${zone}i${list.length}`, item });
    h.zoneItems[zone] = list;
  }
  return h.zoneItems[zone];
}

// All items of the building, for the 3D view. Zones already searched from the panel have none left.
export function buildingItems(state) {
  const ctx = zoneCtx(state);
  if (!ctx) return [];
  const done = doneListOf(ctx);
  const out = [];
  for (let z = 0; z < ctx.zones; z++) {
    if (done.includes(z) && !(ctx.holder.zoneItems && ctx.holder.zoneItems[z])) continue; // searched in an old save
    for (const it of zoneItemList(state, ctx, z)) if (!ctx.holder.taken.includes(it.pid)) out.push({ ...it, zone: z });
  }
  return out;
}

function zoneLeft(ctx, zone) {
  const list = (ctx.holder.zoneItems && ctx.holder.zoneItems[zone]) || [];
  return list.filter((it) => !ctx.holder.taken.includes(it.pid));
}

// First time the player touches a zone: the small risk of a cut, and the rotten food message.
function touchZone(state, ctx, zone) {
  const h = ctx.holder;
  if (!h.touched) h.touched = [];
  if (h.touched.includes(zone)) return;
  h.touched.push(zone);
  zoneInjuryCheck(state);
  if (ctx.catId === 'supermarket' && h.touched.length === 1) {
    state.player.morale = clamp(state.player.morale - 3, 0, 100);
    log(state, 'The fresh food section is black and rotten. Rats run under the shelves.', 'warn');
  }
}

export const PICKUP_MINUTES = 1;

// Pick up one item in the 3D view. Returns true when the item is now in the pack.
export function pickUp(state, pid) {
  const ctx = zoneCtx(state);
  if (!ctx) return false;
  const zone = Number(String(pid).slice(1).split('i')[0]);
  if (ctx.place && !ctx.holder.unlocked) return false; // same rule as searchZone
  if (zone === ctx.counterIdx && !ctx.holder.counterOpen) {
    log(state, 'It is behind the locked counter gate. Open the gate first.', 'warn');
    return false;
  }
  const it = zoneItemList(state, ctx, zone).find((x) => x.pid === pid);
  if (!it || ctx.holder.taken.includes(pid)) return false;
  const w = ITEMS[it.item].weight;
  if (w > freeWeight(state) + 1e-9) {
    log(state, `Your pack is too full to take the ${itemName(it.item).toLowerCase()} (${w} lb).`, 'warn');
    return false;
  }
  const env = environment(state, 'work');
  advanceTime(state, PICKUP_MINUTES * (env.dark && !hasLight(state) ? 2 : 1), 'work');
  if (state.dead) return true;
  touchZone(state, ctx, zone);
  ctx.holder.taken.push(pid);
  addItem(state.carried, it.item, 1);
  log(state, `You take: ${itemName(it.item)}.`);
  practice(state, 'scavenging', 1);
  if (!zoneLeft(ctx, zone).length && !doneListOf(ctx).includes(zone)) {
    markZoneDone(ctx, zone);
    state.stats.zonesSearched += 1;
  }
  return true;
}

// The player walked through a zone in the 3D view. A zone with nothing left counts as done (no time cost).
export function seeZone(state, zone) {
  const ctx = zoneCtx(state);
  if (!ctx || doneListOf(ctx).includes(zone)) return;
  if (zone === ctx.counterIdx && !ctx.holder.counterOpen) return;
  zoneItemList(state, ctx, zone);
  if (!zoneLeft(ctx, zone).length) {
    markZoneDone(ctx, zone);
    state.stats.zonesSearched += 1;
    log(state, `The ${ctx.house ? HOUSE_ROOMS[zone] : `${CATEGORIES[ctx.catId].zoneName} ${zone + 1}`} is empty. Nothing useful is left.`);
  }
}

// Closed boxes and drawers (QoL: timed reveal). The 3D view decides which items are inside
// a container; the save keeps only which containers are open (a compact change record).
export const CONTAINER_MINUTES = 1;
export function openContainer(state, cid) {
  const ctx = zoneCtx(state);
  if (!ctx || typeof cid !== 'string' || !/^c\d+$/.test(cid)) return false;
  const h = ctx.holder;
  h.opened ||= [];
  if (h.opened.includes(cid)) return false;
  const env = environment(state, 'work');
  advanceTime(state, CONTAINER_MINUTES * (env.dark && !hasLight(state) ? 2 : 1), 'work');
  if (state.dead) return true;
  h.opened.push(cid);
  log(state, 'You open it and look inside.');
  practice(state, 'scavenging', 1);
  return true;
}
export function openedContainers(state) {
  const ctx = zoneCtx(state);
  return ctx ? (ctx.holder.opened || []).slice() : [];
}

// Panel search: take every item left in one zone (they go to "found here"). With no index, the next zone.
export function searchZone(state, index) {
  const ctx = zoneCtx(state);
  if (!ctx || ctx.house) return false;
  const { holder: ps, place } = ctx;
  const cat = CATEGORIES[place.cat];
  if (!ps.unlocked) return false;
  const cIdx = ctx.counterIdx;
  const done = zonesDoneList(ps);
  const zone = index == null ? nextZone(ps, cIdx) : Number(index);
  if (!(zone >= 0 && zone < ps.zones) || done.includes(zone)) return false;
  const counterZone = zone === cIdx;
  if (counterZone && !ps.counterOpen) return false;
  const env = environment(state, 'work');
  advanceTime(state, searchMinutes(state, cat.zoneMinutes, env.dark), 'work');
  if (state.dead) return true;
  zoneItemList(state, ctx, zone);
  touchZone(state, ctx, zone);
  const found = {};
  for (const it of zoneLeft(ctx, zone)) {
    ps.taken.push(it.pid);
    found[it.item] = (found[it.item] || 0) + 1;
  }
  markZoneDone(ctx, zone);
  state.stats.zonesSearched += 1;
  for (const [id, q] of Object.entries(found)) addItem(ps.leftovers, id, q);
  practice(state, 'scavenging', 2);
  reportFound(state, found, counterZone ? lz(cat) : `${cat.zoneName} ${zone + 1} (${ps.zonesDone} of ${ps.zones} done)`);
  state.lastFound = found;
  return true;
}
const lz = (cat) => cat.lockedZone.name;

// First-person walking inside a building. Walking pace inside: 60 m for each game minute
// (slow and careful, over debris). The time moves only when the player moves.
export const INSIDE_M_PER_MIN = 60;
export function walkInside(state, meters) {
  const m = Number(meters);
  if (!(m > 0)) return;
  advanceTime(state, m / INSIDE_M_PER_MIN, 'work');
}

// ---------- flashlight and quick items (first-person keys) ----------
export function toggleFlashlight(state) {
  const p = state.player;
  if (!(state.carried.flashlight || 0)) { log(state, 'You have no flashlight.'); return; }
  p.lightOff = !p.lightOff;
  if (!p.lightOff && p.lightHours <= 0) log(state, 'You switch on the flashlight. Nothing. The batteries are empty.', 'warn');
  else log(state, p.lightOff ? 'You switch off the flashlight to save the batteries.' : 'You switch on the flashlight.');
}

// Which carried item a quick key uses. Returns { id, verb } or { why } (nothing to use).
export function quickChoice(state, slot) {
  const c = state.carried;
  const p = state.player;
  const haveAny = (ids) => ids.find((id) => (c[id] || 0) > 0);
  if (slot === 'med') {
    const open = p.injuries.some((i) => !i.bandaged);
    if (open && haveAny(['first_aid'])) return { id: 'first_aid', verb: 'med' };
    if (p.illness.infection && p.illness.infection.abxH == null && haveAny(['antibiotics'])) return { id: 'antibiotics', verb: 'med' };
    if (p.illness.stomachH > 0 && haveAny(['ors'])) return { id: 'ors', verb: 'med' };
    if ((p.injuries.length || p.health < 60) && !(p.painH > 0) && haveAny(['pain_pills'])) return { id: 'pain_pills', verb: 'med' };
    if (!haveAny(['first_aid', 'antibiotics', 'ors', 'pain_pills'])) return { why: 'You carry no medical items.' };
    return { why: 'You do not need medicine now.' };
  }
  if (slot === 'food') {
    const drink = haveAny(['water_bottle', 'saline']);
    const food = haveAny(['snacks', 'peanut_butter', 'canned_food', 'formula']);
    if (!drink && !food) return { why: 'You carry no food or water you can use now.' };
    const wantDrink = drink && (!food || p.water <= p.food);
    if (wantDrink) return { id: drink, verb: 'drink' };
    return { id: food, verb: 'eat' };
  }
  if (slot === 'utility') {
    if (!(c.flashlight || 0)) return { why: 'You have no flashlight.' };
    if (!(c.batteries || 0)) return { why: 'You carry no batteries.' };
    if (p.lightHours > 9) return { why: 'The flashlight batteries are still good.' };
    return { id: 'batteries', verb: 'batteries' };
  }
  return { why: 'Nothing for this key yet.' };
}

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
  // The house is 80 to 250 m away, in a random direction. The map marker moves there.
  const ang = (randInt(state, 0, 359) * Math.PI) / 180;
  const meters = randInt(state, 80, 250);
  const pos = {
    lat: parent.pos.lat + (meters * Math.sin(ang)) / 111320,
    lon: parent.pos.lon + (meters * Math.cos(ang)) / (111320 * Math.cos((parent.pos.lat * Math.PI) / 180)),
  };
  state.houses[id].pos = pos;
  state.pos = { ...pos };
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
      if (!check(state, 'Kick open the locked door', 12, forceBonus(state), forceOpts(state)).success) {
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

export function searchRoom(state, index) {
  const ctx = zoneCtx(state);
  if (!ctx || !ctx.house) return false;
  const hs = ctx.holder;
  const done = doneListOf(ctx);
  const room = index == null ? HOUSE_ROOMS.findIndex((_, i) => !done.includes(i)) : Number(index);
  if (!(room >= 0 && room < HOUSE_ROOMS.length) || done.includes(room)) return false;
  const env = environment(state, 'work');
  advanceTime(state, searchMinutes(state, CATEGORIES.house.zoneMinutes, env.dark), 'work');
  if (state.dead) return true;
  zoneItemList(state, ctx, room);
  touchZone(state, ctx, room);
  const found = {};
  for (const it of zoneLeft(ctx, room)) {
    hs.taken.push(it.pid);
    found[it.item] = (found[it.item] || 0) + 1;
  }
  markZoneDone(ctx, room);
  state.stats.zonesSearched += 1;
  for (const [id, q] of Object.entries(found)) addItem(hs.leftovers, id, q);
  practice(state, 'scavenging', 2);
  reportFound(state, found, HOUSE_ROOMS[room]);
  state.lastFound = found;
  return true;
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
  const ok = travel(state, homeOf(state), 'home');
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
      if (has(state, 'water_tablets')) add('purify', 'Purify 1 gal with a tablet (no fuel)', { note: '30 min' });
      add('drink_raw', 'Drink water without boiling', { note: `${Math.round(RAW_WATER_SICK * 100)}% stomach bug`, risk: true });
    }
    const fuel = (h.storage.firewood || 0) + (state.carried.firewood || 0);
    add('add_wood', h.fireHours > 0 ? 'Add wood to the fire' : `Light a fire in the ${built(state, 'wood_stove') ? 'wood stove' : 'fireplace'}`, { disabled: fuel < 1 && 'No firewood', note: `${fuel} bundles` });
    if (h.furniture > 0) add('break_furniture', 'Break furniture for firewood (1 h)', { note: `${h.furniture} left` });
    add('heater', h.heaterOn ? 'Turn off the electric heater' : 'Turn on the electric heater', { disabled: !h.heaterOn && h.battery < 1 && 'Battery too low' });
    const cookId = COOK_ORDER().find((f) => (h.storage[f] || 0) > 0 || (state.carried[f] || 0) > 0);
    const food = !!cookId;
    const cr = cookId ? eatRisk(state, cookId, true) : 0;
    add('cook', 'Cook a hot meal', { note: cookId ? `${itemName(cookId).toLowerCase()}${cr ? ` · ${Math.round(cr * 100)}% food poisoning` : ''} · warm and fed ${WARM_FED_HOURS} h` : undefined, risk: cr > 0, disabled: (!food && 'No food to cook') || (!canHeat(state, 0.5) && 'Light a fire or charge the battery') });
    if (p.wet) add('dry_clothes', 'Change into dry clothes');
    if (!h.fridgeOpened) add('fridge', 'Open the fridge');
    if (Object.keys(state.carried).some((k) => k !== 'backpack' && k !== 'flashlight')) add('store_all', 'Put away everything you carry');
    if (state.dog.stage === 'visiting') {
      const fedToday = state.dog.feedDays.includes(dayIndex(state.time));
      const night = isNight(state.time);
      add('feed_stray', 'Leave food outside for the dog', { disabled: (fedToday && 'You fed it today') || (night && 'The dog comes only in the day') || (!anyFood(state) && 'You have no food to give') });
    }
    add('house', 'Search a house on your street', { disabled: nearbyHousesLeft(state) <= 0 && 'No more houses near here' });
  }
  if (loc.kind === 'place') {
    const place = getPlace(loc.id);
    const cat = CATEGORIES[place.cat];
    const ps = placeState(state, place);
    if (!ps.unlocked) add('force', 'Force the locked door', { note: has(state, 'pry_bar') ? 'pry bar: sure to work' : `${oddsText(odds(state, 12, forceBonus(state), forceOpts(state)))} · fail: 30% sprain`, risk: !has(state, 'pry_bar') });
    else if (ps.zonesDone < ps.zones) {
      if (nextZone(ps, counterIndex(place, ps)) === counterIndex(place, ps) && !ps.counterOpen) {
        add('counter', `Open the ${cat.lockedZone.name}`, { note: has(state, 'pry_bar') ? 'pry bar: sure to work' : `${oddsText(odds(state, cat.lockedZone.dc, forceBonus(state), forceOpts(state)))} · fail: 25% cut`, risk: !has(state, 'pry_bar') });
      } else {
        const env = environment(state, 'work');
        const min = searchMinutes(state, cat.zoneMinutes, env.dark);
        add('search', `Search the next ${cat.zoneName}`, { note: `${ps.zonesDone}/${ps.zones} done · ${formatDuration(min)}${env.dark && !hasLight(state) ? ' (dark, no light)' : ''}` });
      }
    } else add('search', 'Nothing left to search', { disabled: 'You searched all of it' });
    if (ps.unlocked) add('walk_in', 'Walk inside (first person)', { note: 'look for loot yourself' });
    add('house', 'Search a house nearby', { disabled: nearbyHousesLeft(state) <= 0 && 'No more houses near here' });
    add('go_home', 'Walk home');
  }
  if (loc.kind === 'house') {
    const hs = state.houses[loc.id];
    const nextRoom = HOUSE_ROOMS.findIndex((_, i) => !zonesDoneList(hs, 'roomsDone', 'doneList').includes(i));
    if (nextRoom >= 0) add('room', `Search the ${HOUSE_ROOMS[nextRoom]}`, { note: `${hs.roomsDone}/${HOUSE_ROOMS.length} rooms` });
    else add('room', 'All rooms searched', { disabled: 'Nothing left' });
    add('walk_in', 'Walk inside (first person)', { note: 'look for loot yourself' });
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

// Take off one layer (it goes into the pack).
export function takeOffSlot(state, slot) {
  const old = takeOff(state.player, slot);
  if (!old) return false;
  addItem(state.carried, old, 1);
  log(state, `You take off the ${itemName(old).toLowerCase()}.`);
  advanceTime(state, 2);
  return true;
}

export function doAction(state, id, arg) {
  if (state.dead) return;
  switch (id) {
    case 'rest': return rest(state, 1);
    case 'sleep': return sleep(state, Number(arg) || 8);
    case 'search': return searchZone(state, arg);
    case 'force': return forceEntry(state);
    case 'counter': return openCounter(state);
    case 'house': return enterNearbyHouse(state);
    case 'room': return searchRoom(state, arg);
    case 'walk_inside': return walkInside(state, arg);
    case 'flashlight': return toggleFlashlight(state);
    case 'pickup': return pickUp(state, arg);
    case 'see_zone': return seeZone(state, Number(arg));
    case 'open_container': return openContainer(state, String(arg));
    case 'take_off': return takeOffSlot(state, String(arg));
    case 'leave_house': return leaveHouse(state);
    case 'go_home': return goHome(state);
    case 'go_place': return goToPlace(state, arg);
    case 'play_dog': return playWithDog(state);
    case 'dog_follow': return toggleDogFollow(state);
    case 'build': return workOnProject(state, arg);
    default: return homeAction(state, id);
  }
}
