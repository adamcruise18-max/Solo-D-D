// Engine core for Last Light: Portland.
// No browser code here: everything runs in node tests and in the headless bot.
// See ENGINE.md at the repository root for the plan and the rules for new code.
import { createEvents } from './events.js';
import { createSystems } from './systems.js';
import { createClock } from './clock.js';
import { createActions } from './actions.js';

export { createEvents } from './events.js';
export { createSystems, defineSystem } from './systems.js';
export { createClock, STEP_MINUTES, DAY_START_MINUTE, dayIndex, minuteOfDay, gameDay } from './clock.js';
export { createActions, defineAction, legacyActions } from './actions.js';
export { stream, streamInt, streamChance } from './rng.js';
export { checkContent } from './content.js';
export * from './save.js';

// One engine object: the systems, the clock that runs them, the actions and the events.
export function createEngine({ systems = [], actions = [] } = {}) {
  const events = createEvents();
  const sys = createSystems(systems);
  const clock = createClock({ systems: sys, events });
  const acts = createActions(actions, { events });
  return {
    events,
    systems: sys,
    clock,
    actions: acts,
    // New game state: base fields from the caller, then each system adds its own.
    start(state) {
      sys.init(state, { events, clock });
      events.emit('game.start', { seed: state.seed });
      return state;
    },
    advance: (state, minutes, mode) => clock.advance(state, minutes, mode),
    perform(state, id, arg) {
      const r = acts.run(state, id, arg);
      if (state.dead && !state._deathSent) {
        state._deathSent = true;
        events.emit('player.died', { cause: state.dead.cause, days: state.dead.days });
      }
      return r;
    },
  };
}
