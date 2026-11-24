// Named random-number streams.
// Each system gets its own stream, made from the save seed and the stream name.
// A new random roll in one system then does not change the rolls of other systems,
// so replay tests stay stable when a feature is added.
// The stream positions are kept in the save (state.rngStreams), so a loaded game
// continues with the same numbers.
import { hashString } from '../rng.js';

function next(pos) {
  let a = (pos + 0x6d2b79f5) | 0;
  let t = Math.imul(a ^ (a >>> 15), 1 | a);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return { pos: a, value: ((t ^ (t >>> 14)) >>> 0) / 4294967296 };
}

// Returns a function that gives the next number in [0, 1) for this stream.
export function stream(state, name) {
  if (!name || typeof name !== 'string') throw new Error('A random stream needs a name');
  if (state.seed == null) throw new Error('A random stream needs a game seed');
  const start = () => hashString(`${state.seed}:stream:${name}`) | 0;
  return function rng() {
    // Look up the position on each call: a loaded or copied state keeps working.
    const all = (state.rngStreams = state.rngStreams || {});
    const r = next(all[name] ?? start());
    all[name] = r.pos;
    return r.value;
  };
}

export const streamInt = (rng, min, max) => min + Math.floor(rng() * (max - min + 1));
export const streamChance = (rng, p) => rng() < p;
