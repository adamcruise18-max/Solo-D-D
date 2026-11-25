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
