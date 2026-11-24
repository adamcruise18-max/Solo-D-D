// Browser check for the engine core: runs the save store with real IndexedDB
// in Chromium (Playwright), and checks that the game page still loads with no errors.
//   npm run check:browser
import { build } from 'esbuild';
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
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

  await page.addScriptTag({ url: '__core.js' });
  const r = await page.evaluate(async () => {
    const C = window.LLCore;
    const backend = C.bestBackend();
    const store = C.createSaveStore(backend);
    const game = { version: 1, seed: 5, time: 600, player: { food: 40 }, home: { storage: { snacks: 2 } } };
    await store.save('check-slot', game);
    const back = await store.load('check-slot');
    const list = await store.list();
    await store.remove('check-slot');
    const gone = await store.load('check-slot');
    return { backend: backend.name, same: JSON.stringify(back) === JSON.stringify(game), listed: list.some((x) => x.slot === 'check-slot'), gone: gone === null };
  });
  check(r.backend === 'indexedDB', `best save backend in Chromium is IndexedDB (got ${r.backend})`);
  check(r.same, 'a game saved to IndexedDB loads back the same');
  check(r.listed, 'the save slot shows in the list');
  check(r.gone, 'a removed slot is gone');
} finally {
  await browser.close();
  server.close();
}
process.exit(failed ? 1 : 0);
