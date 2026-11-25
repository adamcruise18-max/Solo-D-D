// What you find in a car's glovebox and trunk: 0 to 3 small things.
import { chance, randInt } from '../rng.js';

const TABLE = [
  ['paper_map', 6], ['first_aid', 4], ['rain_jacket', 4], ['snacks', 6], ['water_bottle', 4],
  ['flashlight', 3], ['batteries', 4], ['lighter', 3], ['blanket', 2], ['pain_pills', 3],
  ['multitool', 1], ['toolkit', 0.6], ['extension_cord', 1], ['gloves', 3], ['tarp', 1.5],
];

export function rollTable(state) {
  const total = TABLE.reduce((a, [, w]) => a + w, 0);
  const n = chance(state, 0.15) ? 0 : randInt(state, 1, 3);
  const out = [];
  for (let i = 0; i < n; i++) {
    let x = (randInt(state, 0, 9999) / 10000) * total;
    const hit = TABLE.find(([, w]) => (x -= w) < 0) || TABLE[0];
    out.push(hit[0]);
  }
  return out;
}
