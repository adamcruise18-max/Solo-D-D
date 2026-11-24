// Replay check: the bot plays fixed seeds for 30 game days and we record a small
// snapshot of the state at each game day. The engine migration (moving old code
// into systems) must not change these numbers. If they change, the move is wrong.
//   npm run replay            compare with test/golden/replay.json
//   npm run replay -- --record   write a new golden file (only when a rule change is meant)
import { writeFileSync, readFileSync, existsSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { newGame, dayIndex } from '../src/engine/state.js';
import { hashString } from '../src/rng.js';
import { loadPlaces, botTurn } from './bot.mjs';

export const SEEDS = [42, 1234, 777];
export const DAYS = 30;
const GOLDEN = fileURLToPath(new URL('../test/golden/replay.json', import.meta.url));
const TRACE = fileURLToPath(new URL('../test/golden/trace.json', import.meta.url));

// State paths for the turn trace. Each object below is split one level down
// (player.food, home.battery, places.<id>), so a change names the field.
// log and journal hold player text only: a new wording is not a rule change.
const SPLIT = new Set(['player', 'home', 'location', 'dog', 'weather', 'stats', 'places', 'houses', 'houseAreas', 'flags', 'world', 'systemVersions', 'rngStreams']);
const SKIP = new Set(['log', 'journal']);
const h = (v) => hashString(JSON.stringify(v ?? null)).toString(36);

export function fieldHashes(s) {
  const out = {};
  for (const [k, v] of Object.entries(s)) {
    if (SKIP.has(k)) continue;
    if (SPLIT.has(k) && v && typeof v === 'object' && !Array.isArray(v)) {
      for (const [k2, v2] of Object.entries(v)) out[`${k}.${k2}`] = h(v2);
    } else out[k] = h(v);
  }
  return out;
}

// One trace line per bot turn:
//   turn|action|start time|end time|minutes|rng before>after|changed path=hash,...
// The first line that differs from the golden trace names the first action,
// time and state path that changed.
function traceLine(i, what, t0, before, s, rng0) {
  const after = fieldHashes(s);
  const changed = [];
  for (const k of new Set([...Object.keys(before), ...Object.keys(after)])) {
    if (before[k] !== after[k]) changed.push(`${k}=${after[k] ?? '-'}`);
  }
  changed.sort();
  return { line: [i, what, Math.round(t0), Math.round(s.time), Math.round(s.time - t0), `${rng0}>${s.rngState}`, changed.join(',')].join('|'), after };
}

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
    s.rngState,
    // Hash of the core rule fields: catches changes not in the numbers above.
    // (Not the whole state: new features add new fields, which is not a rule change.)
    hashString(JSON.stringify([s.time, s.pos, s.location, s.player, s.home, s.carried, s.dog, s.weather, s.stats])).toString(36),
  ].join('|');
}

export function replay(seed, days = DAYS, { trace = null } = {}) {
  const s = newGame(seed);
  const out = [];
  let lastDay = -1;
  let turns = 0;
  let fields = trace ? fieldHashes(s) : null;
  while (!s.dead && dayIndex(s.time) < days && turns < 20000) {
    const t0 = s.time;
    const rng0 = s.rngState;
    const what = botTurn(s);
    if (trace) {
      const r = traceLine(turns, what, t0, fields, s, rng0);
      trace.push(r.line);
      fields = r.after;
    }
    turns++;
    const d = dayIndex(s.time);
    if (d !== lastDay) { out.push(snap(s)); lastDay = d; }
  }
  out.push(snap(s));
  return out;
}

export function replayAll({ withTrace = false } = {}) {
  loadPlaces();
  const seeds = {};
  const traces = {};
  for (const seed of SEEDS) {
    const t = withTrace ? [] : null;
    seeds[seed] = replay(seed, DAYS, { trace: t });
    if (t) traces[seed] = t;
  }
  return withTrace ? { seeds, traces } : seeds;
}

export function readGolden() {
  return existsSync(GOLDEN) ? JSON.parse(readFileSync(GOLDEN, 'utf8')) : null;
}

export function readTrace() {
  return existsSync(TRACE) ? JSON.parse(readFileSync(TRACE, 'utf8')) : null;
}

// Compare two trace lists. Returns null when they match, else a report of the
// first turn that differs: the action, the game time and the state paths.
export function firstDivergence(was = [], now = []) {
  const n = Math.max(was.length, now.length);
  for (let i = 0; i < n; i++) {
    if (was[i] === now[i]) continue;
    const a = parse(was[i]);
    const b = parse(now[i]);
    const paths = new Set([...Object.keys(a.changed), ...Object.keys(b.changed)]);
    const diff = [...paths].filter((p) => a.changed[p] !== b.changed[p]).sort();
    return {
      turn: i,
      action: { was: a.action, now: b.action },
      start: b.start ?? a.start,
      end: { was: a.end, now: b.end },
      minutes: { was: a.minutes, now: b.minutes },
      rng: { was: a.rng, now: b.rng },
      paths: diff,
      was: was[i] ?? '(trace ended)',
      now: now[i] ?? '(trace ended)',
    };
  }
  return null;
}

function parse(line) {
  if (line == null) return { changed: {} };
  const [turn, action, start, end, minutes, rng, changed = ''] = line.split('|');
  const map = {};
  for (const part of changed ? changed.split(',') : []) {
    const k = part.lastIndexOf('=');
    map[part.slice(0, k)] = part.slice(k + 1);
  }
  return { turn: +turn, action, start: +start, end: +end, minutes: +minutes, rng, changed: map };
}

const clock = (t) => {
  const m = ((Math.round(t) % 1440) + 1440) % 1440;
  const hh = Math.floor(m / 60);
  return `day ${dayIndex(t)} ${String(hh).padStart(2, '0')}:${String(m % 60).padStart(2, '0')}`;
};

export function describeDivergence(seed, d) {
  if (!d) return '';
  const act = d.action.was === d.action.now ? d.action.now : `${d.action.was} -> ${d.action.now}`;
  return [
    `Seed ${seed}: first change at turn ${d.turn}, action "${act}", starting ${Number.isFinite(d.start) ? clock(d.start) : '?'}`,
    `  minutes: was ${d.minutes.was}, now ${d.minutes.now}; rng: was ${d.rng.was}, now ${d.rng.now}`,
    `  state paths that differ: ${d.paths.length ? d.paths.join(', ') : '(none; see lines)'}`,
    `  was: ${d.was}`,
    `  now: ${d.now}`,
  ].join('\n');
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const { seeds: now, traces } = replayAll({ withTrace: true });
  if (process.argv.includes('--record')) {
    mkdirSync(fileURLToPath(new URL('../test/golden/', import.meta.url)), { recursive: true });
    writeFileSync(GOLDEN, JSON.stringify({ note: 'Made by npm run replay -- --record. See ENGINE.md.', seeds: now }, null, 1) + '\n');
    writeFileSync(TRACE, JSON.stringify({ note: 'Turn trace. Made by npm run replay -- --record. See ENGINE.md.', seeds: traces }, null, 0) + '\n');
    console.log('Golden replay and trace written for seeds', SEEDS.join(', '));
  } else {
    const g = readGolden();
    if (!g) { console.log('No golden file. Run: npm run replay -- --record'); process.exit(1); }
    let bad = 0;
    const gt = readTrace();
    if (!gt) console.log('No golden trace file: only day snapshots are compared. Run: npm run replay -- --record');
    for (const seed of SEEDS) {
      const d = gt ? firstDivergence(gt.seeds[seed], traces[seed]) : null;
      if (d) { bad++; console.log(describeDivergence(seed, d)); continue; }
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
