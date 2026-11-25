// Food freshness and the "Warm and fed" buff.
// Most found food keeps (cans, dry goods, snacks). Fresh food (fish, meat; later from fishing and
// hunting) has `perish: days` = days until spoiled at room temperature (about 65°F).
// It is Fresh below 50% of that, Stale to 100%, then Spoiled. Cold slows it down:
// stored at about 34°F (outside in winter) it lasts about 7 times longer; warm spring days speed it up.
//
// State: state.fresh = { [itemId]: spoil } where spoil is 0..1+ (share of the item's life used).
// One number per item type (the stacks are small); new food mixes in by weight (addFresh).
// It is aged in each game step from the temperature where most of that food is.
import { ITEMS } from '../data/items.js';

export const STALE_AT = 0.5;
export const RISK = { fresh: 0, stale: 0.1, spoiled: 0.5 };
export const WARM_FED_HOURS = 6;

export function isPerishable(id) { return !!(ITEMS[id] && ITEMS[id].perish); }

// Speed of spoiling vs room temperature (1 = 65°F).
export function spoilRate(tempF) {
  if (tempF <= 34) return 0.14;
  if (tempF >= 75) return 1.5;
  if (tempF >= 65) return 1 + (tempF - 65) * 0.05;
  return 0.14 + ((tempF - 34) / (65 - 34)) * 0.86;
}

function freshOf(state) {
  if (!state.fresh || typeof state.fresh !== 'object') state.fresh = {};
  return state.fresh;
}

export function stageOf(state, id) {
  if (!isPerishable(id)) return 'keeps';
  const s = freshOf(state)[id] || 0;
  return s >= 1 ? 'spoiled' : s >= STALE_AT ? 'stale' : 'fresh';
}

// Add newly caught or cooked food: its freshness mixes with what you already have.
export function addFresh(state, bags, id, qty, spoil = 0) {
  if (!isPerishable(id)) return;
  const f = freshOf(state);
  const have = bags.reduce((n, b) => n + (b[id] || 0), 0);
  f[id] = have + qty > 0 ? ((f[id] || 0) * have + spoil * qty) / (have + qty) : spoil;
}

// Age all fresh food for dt hours. tempAt(where) gives the °F for 'carried' or 'storage'.
export function ageFood(state, dt, tempAt) {
  const f = freshOf(state);
  for (const id of Object.keys(ITEMS)) {
    if (!isPerishable(id)) continue;
    const c = state.carried[id] || 0;
    const st = (state.home && state.home.storage[id]) || 0;
    if (c + st <= 0) { delete f[id]; continue; }
    const temp = st > c ? tempAt('storage') : tempAt('carried');
    f[id] = (f[id] || 0) + (dt / 24 / ITEMS[id].perish) * spoilRate(temp);
  }
}

// Food poisoning chance when you eat it (cooking halves the risk).
export function eatRisk(state, id, cooked = false) {
  const r = RISK[stageOf(state, id)] || 0;
  return cooked ? r / 2 : r;
}

export function stageLabel(state, id) {
  const st = stageOf(state, id);
  return st === 'keeps' ? '' : st === 'fresh' ? 'Fresh' : st === 'stale' ? 'Stale' : 'Spoiled';
}
