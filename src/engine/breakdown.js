// Rule effects of the slow breakdown (src/data/decay.js, engine decay.js).
// Shares grow month by month, so the change comes slowly, not on one day.
import { decayShare } from './decay.js';

// Hours of light from a new set of batteries: 10 h at first; after month 12 old
// stock self-drains, down to about 3 h (30%) when it has spread everywhere.
export function batteryHours(state) {
  return Math.max(3, Math.round(10 * (1 - 0.7 * decayShare(state, 'battery_drain'))));
}

// How well medicine works: 1 at first; after month 24 most is past its date, down to 0.7.
export function medicineFactor(state) {
  return 1 - 0.3 * decayShare(state, 'old_medicine');
}

// Chance that a can of old gas starts the generator: sure at first; after month 6
// gas goes stale, down to 30% when it has spread everywhere.
export function gasStartChance(state) {
  return 1 - 0.7 * decayShare(state, 'stale_gas');
}

// kWh one gallon puts into the home battery (a small generator, about 2 h run).
export const GEN_KWH_PER_GAL = 3;
