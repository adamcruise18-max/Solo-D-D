// Seasons and overgrowth. The game starts in late November (winter look).
// Time passes, the seasons change, and the city gets greener and wilder each month:
// grass in the streets, vines on walls, trees in parking lots.
import { calendar, dayIndex, log } from './state.js';

export const SEASONS = {
  winter: { label: 'Winter', months: [10, 11, 0, 1] }, // Nov to Feb: cold, wet, dark
  spring: { label: 'Spring', months: [2, 3, 4] },
  summer: { label: 'Summer', months: [5, 6, 7] },
  fall: { label: 'Fall', months: [8, 9] },
};

export function seasonOf(t) {
  const m = calendar(t).month;
  return Object.keys(SEASONS).find((k) => SEASONS[k].months.includes(m));
}

// 0 at the start (3 months after the collapse) to 1 after about 2 years.
// It goes up a little each day, so each month looks wilder than the one before.
export function overgrowth(t) {
  const days = Math.max(0, dayIndex(t));
  return Math.min(1, 0.08 + days / 730);
}

const SEASON_START_TEXT = {
  spring: 'Spring. The days are longer. Green shoots push up through the cracks in the roads.',
  summer: 'Summer. The city is green and quiet. Grass grows tall in the streets and on the lawns.',
  fall: 'Fall. The leaves turn and drop. They pile up on the cars and fill the gutters.',
  winter: 'Winter. Cold rain and short days. Dead weeds bend over the sidewalks.',
};

// One line each month about how the city changes. Picked in order; the last ones repeat.
const GROWTH_TEXT = [
  'Moss grows on the north side of the parked cars.',
  'Weeds come up in the cracks of the parking lots.',
  'Blackberry vines climb over the fences on your street.',
  'Ivy covers the walls of the stores. Some windows are green now.',
  'Small trees grow in the gutters and on the flat roofs.',
  'The lawns are fields now. Deer walk down the middle of the street.',
  'Grass hides the road lines. Some side streets look like trails.',
  'Young alder trees stand in the parking lots, taller than the cars.',
];

// Called at the start of each new day (from the daily rollover).
export function seasonDaily(state, day) {
  const t = day * 1440;
  const prev = state.season || seasonOf(t);
  const now = seasonOf(t);
  if (now !== prev) log(state, SEASON_START_TEXT[now], 'story');
  state.season = now;
  if (calendar(t).date === 24 && day > 0) {
    const n = Math.round(day / 30.4) - 1;
    log(state, GROWTH_TEXT[Math.min(GROWTH_TEXT.length - 1, Math.max(0, n))], 'story');
  }
}

// ---------- overgrowth effects (research step 9) ----------
// Grass and brush are tallest in summer and lowest in winter.
const LEAF = { winter: 0.4, spring: 0.8, summer: 1, fall: 0.7 };

// Walk speed factor on the streets: 1 until the city is a quarter grown in,
// then down to 0.85 (summer, fully grown). Routes are straight lines, so this is
// the mean of big roads (clear) and small roads (brush, fallen limbs).
export function overgrowthWalk(t) {
  const og = overgrowth(t);
  if (og <= 0.25) return 1;
  return 1 - 0.15 * ((og - 0.25) / 0.75) * LEAF[seasonOf(t)];
}

// Cover for animals, 0..1: more brush, more deer, rabbits and birds, and they
// are harder to see. For hunting (more animals near, harder shots) and for the
// pacer (animal events).
export function animalCover(t) {
  return Math.min(1, overgrowth(t) * LEAF[seasonOf(t)] * 1.2);
}

// Food from foraging, as a factor of a summer base: blackberries, apples, greens.
// Summer most, then fall; winter almost nothing. More overgrowth, more to find.
const FORAGE = { winter: 0.1, spring: 0.5, summer: 1.2, fall: 1 };
export function forageFactor(t) {
  return FORAGE[seasonOf(t)] * (0.5 + overgrowth(t));
}
