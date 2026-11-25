// Headless bot: plays the real game rules (src/engine) with no screen.
// Used by the sim tool and the replay test. The bot is simple on purpose:
// drink, eat, keep warm, sleep at night, search the nearest places in the day.
// It is not a good player; it is a steady one, so changes in the numbers show.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { newGame, carryLimit, bagWeight, dayIndex } from '../src/engine/state.js';
import { perform } from '../src/engine/game.js';
import { listActions } from '../src/engine/actions.js';
import { setPlaces, allPlaces } from '../src/engine/placesdb.js';
import { isNight } from '../src/engine/world.js';
import { straightMiles } from '../src/engine/travel.js';
import { placeState } from '../src/engine/loot.js';
import { ITEMS } from '../src/data/items.js';
import { CATEGORIES } from '../src/data/places.js';

// Load the real place list (docs/data/places.js sets window.LL_PLACES).
export function loadPlaces() {
  const file = fileURLToPath(new URL('../docs/data/places.js', import.meta.url));
  const src = readFileSync(file, 'utf8');
  const win = {};
  new Function('window', src)(win);
  setPlaces(win.LL_PLACES || []);
  return win.LL_PLACES || [];
}

const can = (state, id) => listActions(state).find((a) => a.id === id && !a.disabled);

function eatDrink(state) {
  const p = state.player;
  const bags = [['carried', state.carried]];
  if (state.location.kind === 'home') bags.push(['storage', state.home.storage]);
  for (let guard = 0; guard < 12 && p.water < 70 && !state.dead; guard++) {
    if (state.location.kind === 'home' && can(state, 'drink_safe')) { perform(state, 'action', 'drink_safe'); continue; }
    if (state.location.kind === 'home' && can(state, 'drink_tank')) { perform(state, 'action', 'drink_tank'); continue; }
    const hit = bags.find(([, b]) => Object.keys(b).some((id) => ITEMS[id]?.kind === 'drink'));
    if (!hit) break;
    const id = Object.keys(hit[1]).find((k) => ITEMS[k]?.kind === 'drink');
    perform(state, 'use', id, 'drink', hit[0]);
  }
  for (let guard = 0; guard < 12 && p.food < 70 && !state.dead; guard++) {
    const hit = bags.find(([, b]) => Object.keys(b).some((id) => ITEMS[id]?.kind === 'food' && !ITEMS[id].needsCooking));
    if (!hit) {
      if (state.location.kind === 'home' && can(state, 'cook')) { perform(state, 'action', 'cook'); continue; }
      break;
    }
    const id = Object.keys(hit[1]).find((k) => ITEMS[k]?.kind === 'food' && !ITEMS[k].needsCooking);
    perform(state, 'use', id, 'eat', hit[0]);
  }
}

function dressUp(state) {
  const bag = state.location.kind === 'home' ? state.home.storage : state.carried;
  const from = state.location.kind === 'home' ? 'storage' : 'carried';
  for (const id of Object.keys(bag)) {
    const it = ITEMS[id];
    if (it?.kind === 'wear' && !state.player.worn[it.slot]) perform(state, 'use', id, 'wear', from);
  }
}

function nextPlace(state) {
  let best = null;
  for (const pl of allPlaces()) {
    const ps = state.places[pl.id];
    if (ps && (ps.zonesDone >= ps.zones || !ps.unlocked)) continue;
    if (!CATEGORIES[pl.cat]) continue;
    const d = straightMiles(state.pos, pl);
    if (d > 3) continue;
    if (!best || d < best.d) best = { pl, d };
  }
  return best?.pl || null;
}

function treat(state) {
  const p = state.player;
  const bag = state.location.kind === 'home' ? 'storage' : 'carried';
  const have = (id) => (state.carried[id] || 0) > 0 || (bag === 'storage' && (state.home.storage[id] || 0) > 0);
  const from = (id) => ((state.carried[id] || 0) > 0 ? 'carried' : 'storage');
  if (p.injuries.some((i) => !i.bandaged) && have('first_aid')) { perform(state, 'use', 'first_aid', 'med', from('first_aid')); return true; }
  if (p.illness.infection && p.illness.infection.abxH == null && have('antibiotics')) { perform(state, 'use', 'antibiotics', 'med', from('antibiotics')); return true; }
  return false;
}

const idle = new WeakMap(); // turns in a row that cost no game time

// Play one bot turn. Returns a short text of what it did (for the replay log).
export function botTurn(state) {
  const t0 = state.time;
  const what = turn(state);
  // A turn that costs no game time must not repeat forever: rest instead.
  if (state.time === t0 && !state.dead && what !== 'name dog') {
    const n = (idle.get(state) || 0) + 1;
    idle.set(state, n);
    if (n >= 3) { idle.set(state, 0); perform(state, 'action', 'rest'); return `${what} (idle, rest)`; }
  } else idle.set(state, 0);
  return what;
}

function turn(state) {
  const p = state.player;
  if (treat(state)) return 'treat';
  const loc = state.location;
  if (state.pendingPrompt === 'name_dog') { perform(state, 'namedog', 'Scout'); return 'name dog'; }
  if (loc.kind === 'home') {
    dressUp(state);
    eatDrink(state);
    if (state.home.indoorTemp < 55 && can(state, 'add_wood')) { perform(state, 'action', 'add_wood'); return 'fire'; }
    if (state.home.indoorTemp < 50 && state.home.fireHours <= 0 && can(state, 'break_furniture')) { perform(state, 'action', 'break_furniture'); return 'furniture'; }
    const spare = Object.keys(state.home.storage).filter((id) => ITEMS[id]?.kind === 'food' && id !== 'formula');
    if (spare.length >= 2 && can(state, 'feed_stray')) { perform(state, 'action', 'feed_stray'); return 'feed stray'; }
    if (isNight(state.time) || p.energy < 30) { perform(state, 'action', 'sleep', 8); return 'sleep'; }
    if (can(state, 'store_all')) perform(state, 'action', 'store_all');
    const pl = nextPlace(state);
    if (pl) { perform(state, 'action', 'go_place', pl.id); return `go ${pl.id}`; }
    perform(state, 'action', 'rest'); return 'rest';
  }
  if (loc.kind === 'house') { perform(state, 'action', 'leave_house'); return 'leave house'; }
  // At a place.
  eatDrink(state);
  const heavy = bagWeight(state.carried) >= carryLimit(state) - 2;
  if (isNight(state.time) || p.energy < 25 || heavy || p.health < 40) { perform(state, 'action', 'go_home'); return 'go home'; }
  if (can(state, 'force')) { perform(state, 'action', 'force'); return 'force'; }
  if (can(state, 'search')) {
    perform(state, 'action', 'search');
    if (can(state, 'takeall') || Object.keys(placeState(state, { ...allPlaces().find((x) => x.id === loc.id) }).leftovers).length) perform(state, 'takeall');
    return 'search';
  }
  const pl = nextPlace(state);
  if (pl && pl.id !== loc.id) { perform(state, 'action', 'go_place', pl.id); return `go ${pl.id}`; }
  perform(state, 'action', 'go_home'); return 'go home';
}

// Food you could eat now (kcal), carried and at home, raw or to cook.
export function foodKcal(state) {
  const sum = (bag) => Object.entries(bag || {}).reduce((n, [id, q]) => n + (ITEMS[id]?.kind === 'food' ? (ITEMS[id].cal || 0) * (ITEMS[id].portion || 1) * q : 0), 0);
  return Math.round(sum(state.carried) + sum(state.home.storage));
}

// The "careful player" policy, for balance runs only (npm run sim -- --smart).
// The replay bot above stays the same, so the golden files do not move.
// Differences: it searches the houses on its street (houses have kitchens), it
// keeps searching when hungry and hurt instead of going home with nothing, it
// goes to food places first when food runs low, and it cooks.
const FOOD_CATS = new Set(['supermarket', 'convenience', 'gas', 'house']);
const LOW_FOOD_KCAL = 6000;

function smartNextPlace(state, wantFood) {
  let best = null;
  for (const pl of allPlaces()) {
    const ps = state.places[pl.id];
    if (ps && (ps.zonesDone >= ps.zones || !ps.unlocked)) continue;
    if (!CATEGORIES[pl.cat]) continue;
    const d = straightMiles(state.pos, pl);
    if (d > 4) continue;
    const score = d * (wantFood && !FOOD_CATS.has(pl.cat) ? 3 : 1);
    if (!best || score < best.score) best = { pl, score };
  }
  return best?.pl || null;
}

export function smartTurn(state) {
  const p = state.player;
  if (treat(state)) return 'treat';
  const loc = state.location;
  if (state.pendingPrompt === 'name_dog') { perform(state, 'namedog', 'Scout'); return 'name dog'; }
  const lowFood = foodKcal(state) < LOW_FOOD_KCAL;
  const starving = p.food < 25 && foodKcal(state) === 0;
  if (loc.kind === 'home') {
    dressUp(state);
    eatDrink(state);
    if (state.home.indoorTemp < 55 && can(state, 'add_wood')) { perform(state, 'action', 'add_wood'); return 'fire'; }
    if (state.home.indoorTemp < 50 && state.home.fireHours <= 0 && can(state, 'break_furniture')) { perform(state, 'action', 'break_furniture'); return 'furniture'; }
    if (p.food < 50 && can(state, 'cook')) { perform(state, 'action', 'cook'); return 'cook'; }
    const spare = Object.keys(state.home.storage).filter((id) => ITEMS[id]?.kind === 'food' && id !== 'formula');
    if (!lowFood && spare.length >= 2 && can(state, 'feed_stray')) { perform(state, 'action', 'feed_stray'); return 'feed stray'; }
    if (isNight(state.time) || (p.energy < 30 && !starving)) { perform(state, 'action', 'sleep', 8); return 'sleep'; }
    if (can(state, 'store_all')) perform(state, 'action', 'store_all');
    if (lowFood && can(state, 'house')) { perform(state, 'action', 'house'); return 'house'; }
    const pl = smartNextPlace(state, lowFood);
    if (pl) { perform(state, 'action', 'go_place', pl.id); return `go ${pl.id}`; }
    if (can(state, 'house')) { perform(state, 'action', 'house'); return 'house'; }
    perform(state, 'action', 'rest'); return 'rest';
  }
  eatDrink(state);
  const heavy = bagWeight(state.carried) >= carryLimit(state) - 2;
  const mustGo = isNight(state.time) || heavy || (!starving && (p.energy < 25 || p.health < 40));
  if (loc.kind === 'house') {
    if (!mustGo && can(state, 'room')) {
      perform(state, 'action', 'room');
      perform(state, 'takeall'); // found items wait in the house until taken
      return 'room';
    }
    perform(state, 'action', 'leave_house'); return 'leave house';
  }
  if (mustGo) { perform(state, 'action', 'go_home'); return 'go home'; }
  if (can(state, 'force')) { perform(state, 'action', 'force'); return 'force'; }
  if (can(state, 'search')) {
    perform(state, 'action', 'search');
    if (can(state, 'takeall') || Object.keys(placeState(state, { ...allPlaces().find((x) => x.id === loc.id) }).leftovers).length) perform(state, 'takeall');
    return 'search';
  }
  if (lowFood && can(state, 'house')) { perform(state, 'action', 'house'); return 'house'; }
  const pl = smartNextPlace(state, lowFood);
  if (pl && pl.id !== loc.id) { perform(state, 'action', 'go_place', pl.id); return `go ${pl.id}`; }
  perform(state, 'action', 'go_home'); return 'go home';
}

// Play one run until death or maxDays. Returns a short report.
export function playRun(seed, { maxDays = 60, maxTurns = 20000, smart = false, onDay = null } = {}) {
  const state = newGame(seed);
  let turns = 0;
  let day = -1;
  const t = smart ? smartTurn : botTurn;
  while (!state.dead && dayIndex(state.time) < maxDays && turns < maxTurns) {
    t(state);
    turns++;
    if (onDay && dayIndex(state.time) !== day) { day = dayIndex(state.time); onDay(state, day); }
  }
  return {
    seed,
    days: state.dead ? state.dead.days : dayIndex(state.time) + 1,
    cause: state.dead ? state.dead.cause : null,
    miles: Math.round(state.stats.miles * 10) / 10,
    places: state.stats.placesSearched,
    houses: Object.keys(state.houses || {}).length,
    foodKcal: foodKcal(state),
    dog: state.dog.stage,
    turns,
    state,
  };
}

export { dayIndex };
