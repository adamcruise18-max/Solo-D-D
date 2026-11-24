// Game clock. The game is turn-based: time moves only when the player acts.
// advance() moves time in steps of at most 10 game minutes. At each step every
// system runs; when a step passes 5 AM, every system's daily hook runs first.
// This is the same order as the old advanceTime() in src/engine/tick.js,
// so the old rules can move into systems without a change in the numbers.

export const STEP_MINUTES = 10;
export const DAY_START_MINUTE = 5 * 60; // the game day changes at 5 AM

export const dayIndex = (t) => Math.floor(t / 1440);
export const minuteOfDay = (t) => ((t % 1440) + 1440) % 1440;
export const gameDay = (t) => dayIndex(t - DAY_START_MINUTE);

export function createClock({ systems, events = null, stepMinutes = STEP_MINUTES } = {}) {
  if (!systems) throw new Error('The clock needs a systems list');

  // mode: what the player does while time passes: rest, work, heavy, walk, sleep.
  function advance(state, minutes, mode = 'rest') {
    if (!(minutes >= 0)) throw new Error(`Bad number of minutes: ${minutes}`);
    let left = minutes;
    const ctx = { mode, events, clock: api };
    while (left > 0.0001 && !state.dead) {
      const step = Math.min(stepMinutes, left);
      const before = state.time;
      state.time += step;
      left -= step;
      const dBefore = gameDay(before);
      const dAfter = gameDay(state.time);
      for (let d = dBefore + 1; d <= dAfter; d++) {
        systems.daily(state, d, ctx);
        events?.emit('day.start', { day: d, time: state.time });
      }
      systems.step(state, step / 60, ctx);
    }
    return state;
  }

  const api = { advance, stepMinutes };
  return api;
}
