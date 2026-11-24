// Realistic rates for food and water (tuned after Adam's first playtest, 2026-11-24).
// Food 100 = well fed. A resting body empties it in about 3 days (−1.5 per hour).
// One day of food (about 2,500 calories) refills about 36 points.
export const CAL_PER_FOOD_POINT = 70;
// Water 100 = fully hydrated. A resting body empties it in about 40 hours (−2.5 per hour).
// One quart of water refills 25 points (about 2.5 quarts a day at rest).
export const WATER_PER_QUART = 25;

export const FOOD_LOSS_PER_HOUR = 1.5;
export const WATER_LOSS_PER_HOUR = 2.5;
// Walking and work burn more. Sleep burns less.
export const WORK_FACTOR = 1.5;
export const SLEEP_FACTOR = 0.75;

// Energy loss per hour awake, by activity. Sleep gives +10 (warm bed) or +6 per hour.
export const ENERGY_LOSS = { rest: 3, work: 5, walk: 6, heavy: 9 };

// Health loss per hour when a stat is at 0.
export const STARVING_DAMAGE = 0.2; // weeks without food
export const DEHYDRATED_DAMAGE = 2; // about 2 days without water

// Chance of a small injury when you search one room or aisle with care.
export const SEARCH_INJURY_CHANCE = 0.03;
