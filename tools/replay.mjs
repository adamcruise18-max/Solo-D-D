// Replay check: the bot plays fixed seeds for 30 game days and we record a small
// snapshot of the state at each game day. The engine migration (moving old code
// into systems) must not change these numbers. If they change, the move is wrong.
//   npm run replay            compare with test/golden/replay.json
//   npm run replay -- --record   write a new golden file (only when a rule change is meant)
import { writeFileSync, readFileSync, existsSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { newGame, dayIndex } from '../src/engine/state.js';
import { loadPlaces, botTurn } from './bot.mjs';

export const SEEDS = [42, 1234, 777];
export const DAYS = 30;
const GOLDEN = fileURLToPath(new URL('../test/golden/replay.json', import.meta.url));

const r1 = (v) => Math.round(v * 10) / 10;
function snap(s) {
  const p = s.player;
  return [
    dayIndex(s.time), Math.round(s.time),
    r1(p.food), r1(p.water), r1(p.warmth), r1(p.energy), r1(p.health), r1(p.morale),
    r1(s.home.indoorTemp), r1(s.home.battery), s.weather?.type || '',
    r1(s.stats.miles), s.stats.placesSearched, s.dog.stage,
    Object.keys(s.carried).length, Object.keys(s.home.storage).length,
    s.dead ? s.dead.cause : '',
  ].join('|');
}

export function replay(seed, days = DAYS) {
  const s = newGame(seed);
  const out = [];
  let lastDay = -1;
  let turns = 0;
  while (!s.dead && dayIndex(s.time) < days && turns < 20000) {
    botTurn(s);
    turns++;
    const d = dayIndex(s.time);
    if (d !== lastDay) { out.push(snap(s)); lastDay = d; }
  }
  out.push(snap(s));
  return out;
}

export function replayAll() {
  loadPlaces();
  return Object.fromEntries(SEEDS.map((seed) => [seed, replay(seed)]));
}

export function readGolden() {
  return existsSync(GOLDEN) ? JSON.parse(readFileSync(GOLDEN, 'utf8')) : null;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const now = replayAll();
  if (process.argv.includes('--record')) {
    mkdirSync(fileURLToPath(new URL('../test/golden/', import.meta.url)), { recursive: true });
    writeFileSync(GOLDEN, JSON.stringify({ note: 'Made by npm run replay -- --record. See ENGINE.md.', seeds: now }, null, 1) + '\n');
    console.log('Golden replay written for seeds', SEEDS.join(', '));
  } else {
    const g = readGolden();
    if (!g) { console.log('No golden file. Run: npm run replay -- --record'); process.exit(1); }
    let bad = 0;
    for (const seed of SEEDS) {
      const a = g.seeds[seed] || [];
      const b = now[seed];
      const i = a.findIndex((v, k) => v !== b[k]);
      if (i >= 0 || a.length !== b.length) {
        bad++;
        const k = i >= 0 ? i : Math.min(a.length, b.length);
        console.log(`Seed ${seed}: first change at snapshot ${k}\n  was: ${a[k]}\n  now: ${b[k]}`);
      }
    }
    console.log(bad ? `${bad} seed(s) changed.` : 'Replay matches the golden file.');
    process.exit(bad ? 1 : 0);
  }
}
