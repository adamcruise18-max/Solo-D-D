// Save timing at late-game sizes (external review, 1.6).
// Builds a save of about 1, 5, 10 and 25 MB from a real new game plus many place
// states and change records, then times each step of a save and a load.
//   npm run bench:save              (Node; IndexedDB times come from npm run check:browser)
//   npm run bench:save -- --json    (machine-readable output)
import { performance } from 'node:perf_hooks';
import { fileURLToPath } from 'node:url';
import { newGame } from '../src/engine/state.js';
import { checksum, createSaveStore, memoryBackend, exportSave, importSave, recordChange } from '../src/core/index.js';

export const SIZES_MB = [1, 5, 10, 25];

// A late-game state of about `mb` megabytes: searched places, house states and
// change records (the kinds of data that grow with play time).
export function bigState(mb, seed = 7) {
  const s = newGame(seed);
  s.world = s.world || {};
  const target = mb * 1024 * 1024;
  let i = 0;
  let size = JSON.stringify(s).length;
  while (size < target) {
    const block = Math.max(200, Object.keys(s.places).length >> 2);
    for (let k = 0; k < block; k++, i++) {
      const id = `osm-node-${100000 + i}`;
      s.places[id] = { zones: 6, zonesDone: i % 6, unlocked: true, lastVisit: 600 + i, zoneItems: { [`z${i % 6}`]: [{ pid: `${id}:p${k}`, id: 'canned_beans', n: 1 + (i % 3) }] }, taken: { [`${id}:p0`]: true }, opened: { [`${id}:c1`]: true } };
      recordChange(s, `cell:${i % 900}`, { o: `${id}:door`, k: 'damaged', v: { hp: i % 100 } });
    }
    size = JSON.stringify(s).length;
  }
  return s;
}

const time = (fn) => { const t = performance.now(); const r = fn(); return [performance.now() - t, r]; };
const timeAsync = async (fn) => { const t = performance.now(); const r = await fn(); return [performance.now() - t, r]; };

export async function bench(mb) {
  const s = bigState(mb);
  const [serializeMs, text] = time(() => JSON.stringify(s));
  const [checksumMs] = time(() => checksum(s));
  const [cloneMs] = time(() => structuredClone(s));
  const backend = memoryBackend();
  const store = createSaveStore(backend);
  await store.save('bench', s); // first copy, so the next save also writes ~prev
  const [saveMs] = await timeAsync(() => store.save('bench', { ...s, time: s.time + 10 }));
  const [loadMs] = await timeAsync(() => store.load('bench'));
  const raw = await backend.get('bench');
  raw.sum = 'cut';
  await backend.set('bench', raw);
  const [fallbackMs] = await timeAsync(() => store.load('bench'));
  const [exportMs, file] = time(() => exportSave(s));
  const [importMs] = time(() => importSave(file));
  return {
    mb, bytes: text.length, places: Object.keys(s.places).length,
    serializeMs, checksumMs, cloneMs, saveMs, loadMs, fallbackMs, exportMs, importMs,
    fellBack: store.lastLoad?.from === 'previous',
  };
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const rows = [];
  for (const mb of SIZES_MB) rows.push(await bench(mb));
  if (process.argv.includes('--json')) console.log(JSON.stringify(rows, null, 1));
  else {
    const f = (v) => (typeof v === 'number' ? v.toFixed(v < 10 ? 1 : 0) : String(v));
    const cols = ['mb', 'serializeMs', 'checksumMs', 'cloneMs', 'saveMs', 'loadMs', 'fallbackMs', 'exportMs', 'importMs'];
    console.log('Save timing (Node, memory backend; ms). save = checksum + clone of 2 copies; load = verify + upgrade.');
    console.log(cols.join('\t'));
    for (const r of rows) console.log(cols.map((c) => f(r[c])).join('\t'));
  }
}
