// 3D quality choice: Auto, Low, Medium or High. Saved in this browser (localStorage),
// not in the run's save, because it belongs to the device, not to the game.
// Auto picks from the device at first, then learns from the frame rate inside buildings:
// if the view runs slow for a while, the next building opens one step lower.
const KEY = 'lastlight.quality.v1';
const AUTO_KEY = 'lastlight.quality.auto.v1';
export const QUALITY_CHOICES = ['auto', 'low', 'medium', 'high'];
export const QUALITY_LABELS = { auto: 'Auto', low: 'Low', medium: 'Medium', high: 'High' };
const STEPS = ['low', 'medium', 'high'];

function read(k) { try { return localStorage.getItem(k); } catch { return null; } }
function write(k, v) { try { if (v == null) localStorage.removeItem(k); else localStorage.setItem(k, v); } catch { /* private mode */ } }

export function getQualityChoice() {
  const v = read(KEY);
  return QUALITY_CHOICES.includes(v) ? v : 'auto';
}
export function setQualityChoice(v) {
  write(KEY, QUALITY_CHOICES.includes(v) && v !== 'auto' ? v : null);
  write(AUTO_KEY, null); // a new choice starts the auto learning again
}
// The level auto learned from the frame rate (null if it has not had to step down).
export function autoLearned() {
  const v = read(AUTO_KEY);
  return STEPS.includes(v) ? v : null;
}
// Called from the 3D view when it ran slow at `level` in Auto: next time use one step lower.
export function autoStepDown(level) {
  const i = STEPS.indexOf(level);
  if (i <= 0) return null;
  write(AUTO_KEY, STEPS[i - 1]);
  return STEPS[i - 1];
}
// The level to use: the player's choice, or in Auto the lower of the device guess and what was learned.
export function resolveQuality(deviceGuess) {
  const c = getQualityChoice();
  if (c !== 'auto') return c;
  const learned = autoLearned();
  if (!learned) return deviceGuess;
  return STEPS[Math.min(STEPS.indexOf(learned), STEPS.indexOf(deviceGuess))];
}
