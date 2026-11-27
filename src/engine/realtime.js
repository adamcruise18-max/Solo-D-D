// The engine's real-time driver: src/core/realtime.js wired to advanceTime (tick.js), so real
// time runs every rule the turn-based actions run. The 3D views call tick(state, ms) each frame.
import './state.js'; // load order: state.js first (tick.js and systems.js import each other)
import { createRealtime, TIME_SCALE } from '../core/realtime.js';
import { advanceTime } from './tick.js';

export { TIME_SCALE };

export function createGameRealtime(opts = {}) {
  return createRealtime({
    // Awake time stops at danger lines only for long holds; sleep always wakes at them.
    advance: (state, minutes, mode, o = {}) => advanceTime(state, minutes, mode, o),
    ...opts,
  });
}
