// Food found per hour of searching, by place type (balance check, not part of the game).
//   node tools/food-rate.mjs [seeds]
import { loadPlaces } from './bot.mjs';
import { newGame } from '../src/engine/state.js';
import { doAction, enterPlace } from '../src/engine/actions.js';
import { placeState } from '../src/engine/loot.js';
import { ITEMS } from '../src/data/items.js';

const places = loadPlaces();
const N = Number(process.argv[2] || 40);
const kcal = (bag) => Object.entries(bag).reduce((a, [id, q]) => a + (ITEMS[id]?.kind === 'food' ? (ITEMS[id].cal || 0) * q : 0), 0);
const out = {};
function measure(cat, s, run) {
  const k0 = kcal(s.carried) + kcal(s.location.kind === 'place' ? placeState(s, s._place).leftovers : {});
  const t0 = s.time;
  run();
  const left = s.location.kind === 'place' ? placeState(s, s._place).leftovers : (s.houses[s.location.id]?.leftovers || {});
  const k = kcal(s.carried) + kcal(left) - k0;
  const o = (out[cat] ||= { kcal: 0, min: 0, n: 0 });
  o.kcal += k; o.min += s.time - t0; o.n += 1;
}
for (let seed = 1; seed <= N; seed++) {
  for (const cat of ['supermarket', 'convenience', 'gas']) {
    const list = places.filter((p) => p.cat === cat);
    const p = list[(seed * 7919) % list.length];
    const s = newGame(seed);
    s.player.food = s.player.water = s.player.warmth = s.player.energy = 100;
    s.location = { kind: 'place', id: p.id }; s._place = p;
    const ps = placeState(s, p); ps.unlocked = true; ps.visited = true;
    measure(cat, s, () => { for (let z = 0; z < ps.zones && !s.dead; z++) { s.player.food = s.player.water = s.player.energy = 100; doAction(s, 'search', z); } });
  }
  const s = newGame(seed);
  s.player.food = s.player.water = s.player.warmth = s.player.energy = 100;
  doAction(s, 'house');
  if (s.location.kind === 'house') measure('house', s, () => { for (let z = 0; z < 6 && !s.dead; z++) { s.player.food = s.player.water = s.player.energy = 100; doAction(s, 'room', z); } });
}
for (const [cat, o] of Object.entries(out)) console.log(cat.padEnd(12), `${o.n} runs`, `${Math.round(o.kcal / o.min * 60)} kcal/h`, `${Math.round(o.kcal / o.n)} kcal a building`);
