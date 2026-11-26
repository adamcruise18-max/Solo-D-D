// Past job and traits, picked at the start of a run.
// A job gives start skill levels, one item and one real weakness. No job is better than the others.
// Traits are point-buy: good traits cost points, bad traits give points. You have FREE_POINTS to start.
// State: state.player.job = id | null, state.player.traits = [id, ...]. Old saves have neither: no effects.
import { LEVEL_XP } from './skills.js';
import { hasLegacy } from './legacy.js';

export const JOBS = {
  nurse: {
    name: 'Nurse',
    text: 'Twelve years on a hospital ward.',
    skills: { first_aid: 2 },
    item: ['bandages', 2],
    weakness: 'Bad back from lifting patients: hard work uses 15% more energy.',
  },
  tow_driver: {
    name: 'Tow-truck driver',
    text: 'You pulled cars out of ditches on Highway 26.',
    skills: { tinkering: 2 },
    item: ['pry_bar', 1],
    weakness: 'Years in a truck cab: walking uses 15% more energy.',
  },
  fishing_guide: {
    name: 'Fishing guide',
    text: 'You took clients out on the Willamette and the Sandy.',
    skills: { survival: 2 },
    item: ['water_filter', 1],
    weakness: 'Not at home in town: searching takes 10% longer.',
  },
  line_cook: {
    name: 'Line cook',
    text: 'Ten years on the grill in a busy Portland kitchen.',
    skills: { cooking: 2 },
    item: ['knife', 1],
    weakness: 'Big appetite: you get hungry 10% faster.',
  },
  roofer: {
    name: 'Roofer',
    text: 'You put roofs on houses all over Washington County.',
    skills: { tinkering: 1, scavenging: 1 },
    item: ['tarp', 1],
    weakness: 'Bad knees from ladders: you walk 10% slower.',
  },
};

export const FREE_POINTS = 1;
// cost > 0: a good trait (costs points). cost < 0: a bad trait (gives points).
export const TRAITS = {
  fast_learner: { name: 'Fast learner', cost: 2, text: '+30% skill xp.', not: ['slow_learner'] },
  dog_person: { name: 'Dog person', cost: 1, text: 'A dog finds you on day 2 and trusts you sooner.' },
  slow_learner: { name: 'Slow learner', cost: -2, text: '−30% skill xp.', not: ['fast_learner'] },
  light_sleeper: { name: 'Light sleeper', cost: -1, text: 'Sleep gives 15% less energy.' },
  asthmatic: { name: 'Asthmatic', cost: -2, text: 'Walking and hard work use 20% more energy.' },
};

export function jobOf(state) { return (state.player && JOBS[state.player.job]) ? state.player.job : null; }
export function hasTrait(state, id) { return !!(state.player && Array.isArray(state.player.traits) && state.player.traits.includes(id)); }

// Points left after the picked traits. Negative = not allowed.
export function pointsLeft(traits) {
  return FREE_POINTS - traits.reduce((n, t) => n + (TRAITS[t] ? TRAITS[t].cost : 0), 0);
}

// Clean a pick: known ids, no pair that excludes each other, within the points.
export function validTraits(traits) {
  const out = [];
  for (const t of traits || []) {
    if (!TRAITS[t] || out.includes(t)) continue;
    if ((TRAITS[t].not || []).some((x) => out.includes(x))) continue;
    out.push(t);
  }
  return pointsLeft(out) >= 0 ? out : [];
}

// Set up a new game for the picked job and traits.
export function applyBackground(state, job, traits) {
  const p = state.player;
  p.job = JOBS[job] ? job : null;
  p.traits = validTraits(traits);
  if (p.job) {
    const J = JOBS[p.job];
    if (!state.skills) state.skills = { xp: {}, books: [] };
    for (const [k, lvl] of Object.entries(J.skills)) state.skills.xp[k] = Math.max(state.skills.xp[k] || 0, LEVEL_XP[lvl]);
    const [id, n] = J.item;
    state.home.storage[id] = (state.home.storage[id] || 0) + n;
  }
  if (p.traits.includes('dog_person')) state.dog.arriveDay = 1;
}

// ---- Effects (all 1 / 0 when there is no job or trait) ----
export function xpFactor(state) {
  return hasTrait(state, 'fast_learner') ? 1.3 : hasTrait(state, 'slow_learner') ? 0.7 : 1;
}
export function walkSpeedFactor(state) { return jobOf(state) === 'roofer' ? 0.9 : 1; }
export function searchJobFactor(state) { return (jobOf(state) === 'fishing_guide' ? 1.1 : 1) * (hasLegacy(state, 'sharp_eyes') ? 0.95 : 1); }
export function foodLossFactor(state) { return jobOf(state) === 'line_cook' ? 1.1 : 1; }
export function sleepGainFactor(state) { return hasTrait(state, 'light_sleeper') ? 0.85 : 1; }
// Energy used by mode ('walk', 'work', 'heavy', 'rest').
export function energyUseFactor(state, mode) {
  let f = 1;
  if (mode === 'walk' && jobOf(state) === 'tow_driver') f *= 1.15;
  if (mode === 'heavy' && jobOf(state) === 'nurse') f *= 1.15; // was 4 lb less carry; grid-only carry (Adam, 2026-11-26)
  if (mode === 'walk' && hasLegacy(state, 'road_legs')) f *= 0.95;
  if ((mode === 'walk' || mode === 'work' || mode === 'heavy') && hasTrait(state, 'asthmatic')) f *= 1.2;
  return f;
}
export function dogBondBonus(state) { return (hasTrait(state, 'dog_person') ? 20 : 0) + (hasLegacy(state, 'old_friend') ? 10 : 0); }

// Short text for the panel: "Nurse · Fast learner, Light sleeper".
export function backgroundText(state) {
  const j = jobOf(state);
  const t = (state.player.traits || []).filter((x) => TRAITS[x]).map((x) => TRAITS[x].name);
  if (!j && !t.length) return '';
  return [j ? JOBS[j].name : null, t.join(', ') || null].filter(Boolean).join(' · ');
}
