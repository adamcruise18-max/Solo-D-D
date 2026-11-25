// Place loot. Each place has a fixed stock, made from the game seed and the place id.
// Loot never comes back.
import { hashString, mulberry32, weightedPick } from '../rng.js';
import { CATEGORIES, BIG_BRANDS } from '../data/places.js';
import { decayActive } from './decay.js';

export function placeState(state, place) {
  let ps = state.places[place.id];
  if (!ps) {
    const r = mulberry32(hashString(`${state.seed}:${place.id}:init`));
    const cat = CATEGORIES[place.cat];
    const big = BIG_BRANDS.some((b) => (place.name || '').includes(b));
    const empty = r() < 0.2;
    ps = state.places[place.id] = {
      zonesDone: 0,
      zones: cat.zones + (big ? 2 : 0),
      stock: Math.min(0.95, cat.stock * (big ? 1.25 : 1) * (empty ? 0.15 : 1)),
      emptyHint: empty,
      unlocked: !cat.locked,
      counterOpen: !cat.lockedZone,
      leftovers: {},
      visited: false,
    };
  }
  return ps;
}

// Roll the items in one search zone. Deterministic for (seed, place, zone).
export const SOAKS = new Set(['book_first_aid', 'book_repair', 'book_cooking', 'book_survival', 'matches', 'toilet_paper', 'comfort', 'paper_map']);

export function rollZone(state, key, catId, stock, zone, extraRolls = 0) {
  const r = mulberry32(hashString(`${state.seed}:${key}:zone${zone}`));
  const cat = CATEGORIES[catId];
  const n = 2 + Math.floor(r() * 4) + extraRolls; // 2 to 5 rolls
  // Cold-case food (fridge: true) is there only until this store's fridges fail.
  const fridgesGone = cat.loot.some((e) => e.fridge) && decayActive(state, 'store_fridges', key);
  // A leaking roof soaks paper and cardboard: books, matches, toilet paper (decay row roof_leaks).
  const leaking = decayActive(state, 'roof_leaks', key);
  const found = {};
  for (let i = 0; i < n; i++) {
    if (r() >= stock) continue;
    const e = weightedPick(r, cat.loot);
    if (e.fridge && fridgesGone) continue;
    if (leaking && SOAKS.has(e.id)) continue;
    found[e.id] = (found[e.id] || 0) + 1;
  }
  return found;
}
