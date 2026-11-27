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

// Send "player.died" once per run. The flag is in the state, so a loaded dead save
// does not send it again.
export function sendDeath(state, events) {
  if (!state.dead || !events || state.deathSent) return;
  state.deathSent = true;
  events.emit('player.died', { cause: state.dead.cause, days: state.dead.days, time: state.time });
}

export function createClock({ systems, events = null, stepMinutes = STEP_MINUTES } = {}) {
  if (!systems) throw new Error('The clock needs a systems list');

  // mode: what the player does while time passes: rest, work, heavy, walk, sleep.
  let running = false;
  function advance(state, minutes, mode = 'rest') {
    if (!(minutes >= 0)) throw new Error(`Bad number of minutes: ${minutes}`);
    // A system that moves time inside a step would charge the time twice and step
    // every system again inside the step. Time moves only from actions.
    if (running) throw new Error('Time was moved inside a clock step (time charged twice)');
    running = true;
    try { return run(state, minutes, mode); } finally { running = false; }
  }

  function run(state, minutes, mode) {
    let left = minutes;
    const ctx = { mode, events, clock: api };
    api.lastStopped = false;
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
      // A rule can end the action early (for example, waking from sleep at a
      // danger level): it sets state._stop, and the rest of the time is not spent.
      if (state._stop) { delete state._stop; api.lastStopped = true; break; }
    }
    sendDeath(state, events);
    return state;
  }

  // lastStopped: the last advance() ended early by a rule (state._stop), even on its last step.
  const api = { advance, stepMinutes, lastStopped: false };
  return api;
}
