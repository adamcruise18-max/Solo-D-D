// Skills: you learn by doing and from books. Each skill has 5 levels.
// A level makes a task easier or faster, and it changes what you notice.
// State: state.skills = { xp: { scavenging: 12, ... }, books: ['book_repair', ...] }.
// Old saves have no state.skills: skillsOf() makes it on first use.
import { log, dayIndex } from './state.js';
import { xpFactor } from './background.js';

export const SKILLS = {
  scavenging: {
    name: 'Scavenging',
    how: 'Take items, search shelves and rooms, open boxes.',
    perLevel: 'Searches take 8% less time per level.',
    notice: ['', 'You notice how many items are near you.', 'You hear how many items are in a closed box.', 'You notice items a little further away.', '', 'You see loot from far away.'],
  },
  tinkering: {
    name: 'Tinkering',
    how: 'Force doors and gates, break furniture for wood.',
    perLevel: '+1 to force doors and gates per level.',
    notice: [],
  },
  first_aid: {
    name: 'First aid',
    how: 'Bandage wounds, treat illness.',
    perLevel: 'A bandaged wound heals 8% faster per level. Wound infection risk is 10% lower per level.',
    notice: [],
  },
  cooking: {
    name: 'Cooking',
    how: 'Cook hot meals, boil and treat water.',
    perLevel: 'Hot meals give +1 morale per level. Boiling takes 10% less time per level.',
    notice: [],
  },
  survival: {
    name: 'Survival',
    how: 'Keep a fire, collect and filter water.',
    perLevel: 'Firewood burns 6% longer per level. Stomach bug risk from raw water is 10% lower per level.',
    notice: [],
  },
};

// XP to reach level 1..5.
export const LEVEL_XP = [0, 15, 40, 80, 140, 220];
export const MAX_LEVEL = 5;
export const BOOK_XP = 25;
export const READ_MINUTES = 120;

export function skillsOf(state) {
  if (!state.skills || typeof state.skills !== 'object') state.skills = {};
  const s = state.skills;
  if (!s.xp || typeof s.xp !== 'object') s.xp = {};
  if (!Array.isArray(s.books)) s.books = [];
  return s;
}

export function levelFor(xp) {
  let lvl = 0;
  for (let i = 1; i <= MAX_LEVEL; i++) if (xp >= LEVEL_XP[i]) lvl = i;
  return lvl;
}

export function skillLevel(state, key) {
  const xp = state.skills && state.skills.xp ? state.skills.xp[key] || 0 : 0;
  return levelFor(xp);
}

// Gain XP. Logs a line when the level goes up. Returns the new level.
// No grinding: after DAILY_FULL uses of one skill in a day, practice gives half xp.
export const DAILY_FULL = 20;
export function practice(state, key, amount = 1, { book = false } = {}) {
  if (!SKILLS[key] || !(amount > 0)) return skillLevel(state, key);
  const s = skillsOf(state);
  if (!book) {
    const day = dayIndex(state.time);
    if (!s.today || s.today.day !== day) s.today = { day, uses: {} };
    const n = (s.today.uses[key] || 0) + 1;
    s.today.uses[key] = n;
    if (n > DAILY_FULL) amount /= 2;
  }
  amount *= xpFactor(state);
  const before = levelFor(s.xp[key] || 0);
  s.xp[key] = (s.xp[key] || 0) + amount;
  const after = levelFor(s.xp[key]);
  if (after > before) {
    const sk = SKILLS[key];
    const extra = sk.notice[after] ? ` ${sk.notice[after]}` : '';
    log(state, `${sk.name} skill is now level ${after}. ${sk.perLevel}${extra}`, 'good');
  }
  return after;
}

// Progress for the panel: level, xp, xp to next level, 0..1 bar.
export function skillProgress(state, key) {
  const xp = state.skills && state.skills.xp ? state.skills.xp[key] || 0 : 0;
  const lvl = levelFor(xp);
  if (lvl >= MAX_LEVEL) return { key, name: SKILLS[key].name, level: lvl, xp, next: null, frac: 1 };
  const lo = LEVEL_XP[lvl];
  const hi = LEVEL_XP[lvl + 1];
  return { key, name: SKILLS[key].name, level: lvl, xp, next: hi - xp, frac: (xp - lo) / (hi - lo) };
}

export function allSkills(state) {
  return Object.keys(SKILLS).map((k) => skillProgress(state, k));
}

// Has the player read this book before? A book teaches you only once.
export function hasRead(state, bookId) {
  return !!(state.skills && Array.isArray(state.skills.books) && state.skills.books.includes(bookId));
}

// ---- Effects ----
export function searchTimeFactor(state) { return 1 - 0.08 * skillLevel(state, 'scavenging'); }
export function forceBonus(state) { const l = skillLevel(state, 'tinkering'); return l ? [['tinkering', l]] : []; }
export function bandageHealFactor(state) { return 1 - 0.08 * skillLevel(state, 'first_aid'); }
export function infectRiskFactor(state) { return 1 - 0.1 * skillLevel(state, 'first_aid'); }
export function cookMoraleBonus(state) { return skillLevel(state, 'cooking'); }
export function boilTimeFactor(state) { return 1 - 0.1 * skillLevel(state, 'cooking'); }
export function fireBonusFactor(state) { return 1 + 0.06 * skillLevel(state, 'survival'); }
export function rawWaterRiskFactor(state) { return 1 - 0.1 * skillLevel(state, 'survival'); }

// What you notice in the first-person view, by scavenging level.
// countRadius: m in which the HUD counts items (0 = off). boxCount: the box prompt says how many items.
// lootGlow: extra brightness of loot (0..1).
export function noticeOf(state) {
  const l = skillLevel(state, 'scavenging');
  return {
    level: l,
    countRadius: l >= 1 ? (l >= 3 ? 8 : 5) : 0,
    boxCount: l >= 2,
    lootGlow: l >= 5 ? 1 : l >= 3 ? 0.5 : 0,
  };
}
