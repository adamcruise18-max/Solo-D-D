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
import { bedCount, canPlant, plant, waterGarden, gardenInfo, harvest } from '../src/engine/garden.js';
import { projectStatus } from '../src/engine/base.js';
import { PROJECT_BY_ID } from '../src/data/projects.js';
import { advanceTime } from '../src/engine/tick.js';
import { spotsNear, goToSpot, spotHere, canFish, fish, huntMethods, hunt, canSetSnare, setSnare, checkSnare } from '../src/engine/wild.js';

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
  if (loc.kind === 'wild') return atWild(state);
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

// ---------- renewable food for the careful bot: garden, fishing, hunting ----------
function gardenWork(state) {
  const gs = projectStatus(state, PROJECT_BY_ID.garden_beds);
  if (!bedCount(state) && gs.canWork) { perform(state, 'action', 'build', 'garden_beds'); return 'build garden'; }
  if (!bedCount(state)) return null;
  const info = gardenInfo(state);
  // The garden actions take no time in the engine; the UI charges it (plant 30, water 15, harvest 30 min).
  if (info.planted.some((b) => b.ready)) { harvest(state); advanceTime(state, 30); return 'harvest'; }
  for (const id of info.canSow) if (!canPlant(state, id)) { plant(state, id); advanceTime(state, 30); return `plant ${id}`; }
  if ((state.garden?.beds || []).some((b) => !b.dead && b.growth < 1 && b.water < 0.3) && waterGarden(state)) { advanceTime(state, 15); return 'water'; }
  return null;
}

const hasFishGear = (state) => (state.carried.fishing_rod || state.home.storage.fishing_rod || state.carried.fishing_line || state.home.storage.fishing_line) > 0;
const wild = new WeakMap(); // tries on this trip
const WILD_MILES = 3.5;

// Go out to fish or hunt: daylight, food low-ish, the gear in hand.
function wildTrip(state) {
  // Only a short walk, rested, with most of the day left.
  if (isNight(state.time) || isNight(state.time + 5 * 60) || state.player.energy < 60) return null;
  const near = (kind) => spotsNear(state, kind).find((x) => x.miles <= WILD_MILES);
  if (!near('fish') && !near('hunt')) return null;
  for (const id of ['fishing_rod', 'fishing_line', 'bow', 'arrows', 'rifle', 'rifle_rounds', 'snare_wire', 'knife']) {
    if ((state.home.storage[id] || 0) > 0 && !(state.carried[id] > 0)) perform(state, 'take', id, 1);
  }
  const methods = huntMethods(state);
  const kinds = [];
  if (hasFishGear(state)) kinds.push('fish');
  if (methods.length || state.carried.snare_wire > 0) kinds.push('hunt');
  for (const kind of kinds) {
    const spot = near(kind);
    if (spot) { wild.set(state, 0); goToSpot(state, spot.id); return `go ${spot.id}`; }
  }
  return null;
}

function atWild(state) {
  const s = spotHere(state);
  const n = (wild.get(state) || 0) + 1;
  wild.set(state, n);
  if (n > 3 || isNight(state.time) || state.player.energy < 30 || state.player.food < 20) { perform(state, 'action', 'go_home'); return 'go home'; }
  if (s.kind === 'fish' && !canFish(state)) { fish(state); return 'fish'; }
  if (s.kind === 'hunt') {
    const set = state.wild?.snares?.[s.id];
    if (set != null && state.time - set >= 12 * 60) { checkSnare(state); return 'check snares'; }
    if (set == null && !canSetSnare(state)) { setSnare(state); return 'snare'; }
    const m = huntMethods(state);
    if (m.length) { hunt(state, m.includes('bow') ? 'bow' : m[0]); return 'hunt'; }
  }
  perform(state, 'action', 'go_home'); return 'go home';
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
    if (!isNight(state.time)) { const g = gardenWork(state); if (g) return g; }
    if ((lowFood || foodKcal(state) < LOW_FOOD_KCAL * 2)) { const w = wildTrip(state); if (w) return w; }
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
  if (loc.kind === 'wild') return atWild(state);
  const heavy = bagWeight(state.carried) >= carryLimit(state) - 2;
  const needAbx = p.illness.infection && p.illness.infection.abxH == null && !(state.carried.antibiotics > 0) && (state.home.storage.antibiotics || 0) > 0;
  const mustGo = isNight(state.time) || heavy || needAbx || (!starving && (p.energy < 25 || p.health < 40));
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
  // The careful bot gets the same guard as the replay bot: three turns in a row
  // that cost no game time become a rest (and count as a loop in the report).
  let still = 0;
  const t = !smart ? botTurn : (st) => {
    const t0 = st.time;
    const w = smartTurn(st);
    if (st.time === t0 && !st.dead && w !== 'name dog' && ++still >= 3) { still = 0; loops++; perform(st, 'action', 'rest'); }
    else if (st.time !== t0) still = 0;
    return w;
  };
  let loops = 0;
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
    loops,
    state,
  };
}

export { dayIndex };
