// node tools/asset-gallery/streets.mjs <repoDir> <outDir> <q> spec...  spec = x:z:yaw
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const [repo, out, qual, ...specs] = process.argv.slice(2);
const build = path.join(out, '_street');
fs.mkdirSync(build, { recursive: true });
execSync(`npx esbuild ${path.join(repo, 'tools/asset-gallery/street.js')} --bundle --format=iife --log-level=error --outfile=${build}/street.js`, { cwd: repo, stdio: 'inherit' });
fs.writeFileSync(path.join(build, 'street.html'), `<!doctype html><meta charset="utf-8"><link rel="stylesheet" href="style.css"><body><script src="street.js"></script></body>`);
const srv = http.createServer((req, res) => {
  const p = decodeURIComponent(req.url.split('?')[0]);
  const f = p.startsWith('/data/') || p === '/style.css' ? path.join(repo, 'docs', p) : path.join(build, p);
  fs.readFile(f, (e, b) => { if (e) { res.writeHead(404); return res.end(); } res.writeHead(200, { 'content-type': f.endsWith('.js') ? 'text/javascript' : f.endsWith('.json') ? 'application/json' : f.endsWith('.css') ? 'text/css' : 'text/html' }); res.end(b); });
}).listen(0);
const port = srv.address().port;
const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
page.on('pageerror', (e) => console.error('pageerror', e.message));
for (const spec of specs) {
  const [x, z, yaw, near = '', i = 0] = spec.split(':');
  await page.goto(`http://127.0.0.1:${port}/street.html?x=${x}&z=${z}&yaw=${yaw}&q=${qual}&sky=noon&near=${near}&i=${i}`);
  await page.waitForFunction('window.__ready', null, { timeout: 120000 });
  const file = path.join(out, `street_${x}_${z}_${yaw}${near}${i}_${qual}.png`);
  await page.screenshot({ path: file });
  console.log(file);
}
await browser.close(); srv.close();
