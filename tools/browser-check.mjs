// Browser check for the engine core: runs the save store with real IndexedDB
// in Chromium (Playwright), and checks that the game page still loads with no errors.
//   npm run check:browser
import { build } from 'esbuild';
import { createServer } from 'node:http';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

// Playwright is not a project dependency: use the copy installed on the machine.
const { chromium } = createRequire(import.meta.url)('playwright');

const root = fileURLToPath(new URL('../docs/', import.meta.url));
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.png': 'image/png' };

const bundle = (await build({
  entryPoints: [fileURLToPath(new URL('../src/core/index.js', import.meta.url))],
  bundle: true, format: 'iife', globalName: 'LLCore', write: false, target: 'es2020',
})).outputFiles[0].text;

const server = createServer(async (req, res) => {
  const path = normalize(decodeURIComponent(req.url.split('?')[0])).replace(/^([/\\])+/, '');
  if (path === '__core.js') { res.writeHead(200, { 'content-type': 'text/javascript' }); return res.end(bundle); }
  try {
    const file = join(root, path || 'index.html');
    if (!file.startsWith(root)) throw new Error('outside');
    const body = await readFile(file);
    res.writeHead(200, { 'content-type': TYPES[extname(file)] || 'application/octet-stream' });
    res.end(body);
  } catch { res.writeHead(404); res.end(); }
});
await new Promise((r) => server.listen(0, '127.0.0.1', r));
const base = `http://127.0.0.1:${server.address().port}/`;

const browser = await chromium.launch();
const page = await browser.newPage();
const errors = [];
page.on('pageerror', (e) => errors.push(String(e)));
page.on('console', (m) => { if (m.type() === 'error' && !/tiles|Failed to load resource|net::/i.test(m.text())) errors.push(m.text()); });
let failed = 0;
const check = (ok, text) => { console.log(`${ok ? 'ok  ' : 'FAIL'} ${text}`); if (!ok) failed++; };

try {
  await page.goto(base, { waitUntil: 'load' });
  await page.waitForTimeout(1500);
  check(errors.length === 0, `game page loads with no script errors${errors.length ? ': ' + errors.join(' | ') : ''}`);

  // Live play: time moves through the engine clock and the weather system.
  // Start a run, sleep 10 h twice (past 5 AM), and read the autosave.
  const play = await (async () => {
    await page.evaluate(() => localStorage.removeItem('lastlight.save.v1'));
    await page.reload({ waitUntil: 'load' });
    // The intro shows after the map loads: wait for it, do not guess a time.
    await page.locator('#startBtn').waitFor({ timeout: 20000 });
    await page.locator('#startBtn').click();
    await page.locator('[data-act="sleep"]').first().waitFor({ timeout: 10000 });
    const read = () => page.evaluate(() => JSON.parse(localStorage.getItem('lastlight.save.v1') || 'null'));
    const before = await read();
    for (let i = 0; i < 2; i++) {
      await page.locator('[data-act="sleep"]').first().click();
      await page.locator('[data-hours="10"]').waitFor({ timeout: 5000 });
      await page.locator('[data-hours="10"]').click();
      await page.waitForTimeout(300);
      // Close any message (for example the dog) so the next click works.
      for (const sel of ['#okName', '.modal .primary']) {
        if (await page.locator(sel).count()) { await page.locator(sel).first().click().catch(() => {}); }
      }
    }
    const after = await read();
    return { before, after };
  })().catch((e) => ({ error: String(e) }));
  check(!play.error && play.before && play.after, `a new run starts and saves${play.error ? ': ' + play.error : ''}`);
  if (play.after) {
    check(play.after.systemVersions?.weather === 1, 'the live save has the weather system version');
    check(play.after.time > play.before.time + 600, `sleeping moves time through the clock (${Math.round(play.before.time)} -> ${Math.round(play.after.time)} min)`);
    check(play.after.weather.day > play.before.weather.day, `the weather system rolled a new day (day ${play.before.weather.day} -> ${play.after.weather.day})`);
  }
  check(errors.length === 0, `no script errors while playing${errors.length ? ': ' + errors.join(' | ') : ''}`);

  await page.addScriptTag({ url: '__core.js' });
  const r = await page.evaluate(async () => {
    const C = window.LLCore;
    const backend = C.bestBackend();
    const store = C.createSaveStore(backend);
    const game = { version: 1, seed: 5, time: 600, player: { food: 40 }, home: { storage: { snacks: 2 } } };
    await store.save('check-slot', game);
    const back = await store.load('check-slot');
    const list = await store.list();
    // A cut newest save falls back to the last good one.
    await store.save('check-slot', { ...game, time: 700 });
    const raw = await backend.get('check-slot');
    raw.state.time = 1;
    await backend.set('check-slot', raw);
    const fallback = await store.load('check-slot');
    const fellBack = fallback?.time === 600 && store.lastLoad?.from === 'previous';
    await store.remove('check-slot');
    const gone = await store.load('check-slot');
    return { backend: backend.name, same: JSON.stringify(back) === JSON.stringify(game), listed: list.some((x) => x.slot === 'check-slot'), gone: gone === null, fallback: fellBack };
  });
  check(r.backend === 'indexedDB', `best save backend in Chromium is IndexedDB (got ${r.backend})`);
  check(r.same, 'a game saved to IndexedDB loads back the same');
  check(r.listed, 'the save slot shows in the list');
  check(r.fallback, 'a broken newest save falls back to the last good save');
  check(r.gone, 'a removed slot is gone');

  // Save timing with real IndexedDB (printed, not a pass/fail check).
  const timing = await page.evaluate(async () => {
    const C = window.LLCore;
    const store = C.createSaveStore(C.bestBackend());
    const out = [];
    for (const mb of [1, 5, 10, 25]) {
      const places = {};
      const per = 220; // bytes per place, about
      for (let i = 0; i < (mb * 1024 * 1024) / per; i++) places['osm-' + i] = { zones: 6, zonesDone: i % 6, taken: { ['osm-' + i + ':p0']: true }, lastVisit: 600 + i };
      const g = { version: 1, seed: 5, time: 600, player: { food: 40 }, home: { storage: {} }, places };
      await store.save('bench-slot', g);
      let t = performance.now();
      await store.save('bench-slot', { ...g, time: 610 });
      const save = performance.now() - t;
      t = performance.now();
      await store.load('bench-slot');
      const load = performance.now() - t;
      out.push({ mb, bytes: JSON.stringify(g).length, save: Math.round(save), load: Math.round(load) });
      await store.remove('bench-slot');
    }
    return out;
  });
  for (const x of timing) console.log(`info IndexedDB ${x.mb} MB save (2 copies) ${x.save} ms, load ${x.load} ms`);
} catch (e) {
  check(false, `browser check stopped: ${e?.message || e}`);
} finally {
  // On a failure, keep a screenshot and the page errors for the CI artifact.
  if (failed) {
    try {
      const dir = fileURLToPath(new URL('../artifacts/', import.meta.url));
      await mkdir(dir, { recursive: true });
      await page.screenshot({ path: join(dir, 'browser-check.png'), fullPage: true });
      await writeFile(join(dir, 'browser-check-errors.txt'), errors.join('\n') + '\n');
    } catch { /* the screenshot is a help only */ }
  }
  await browser.close();
  server.close();
}
process.exit(failed ? 1 : 0);
