// Screenshots the asset gallery for each group.
// node tools/asset-gallery/shoot.mjs <repoDir> <outDir> [group[:from:n] ...]
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const [repo, out, ...specs] = process.argv.slice(2);
fs.mkdirSync(out, { recursive: true });
const build = path.join(out, '_build');
fs.mkdirSync(build, { recursive: true });
execSync(`npx esbuild ${path.join(repo, 'tools/asset-gallery/gallery.js')} --bundle --format=iife --log-level=error --outfile=${build}/gallery.js`, { cwd: repo, stdio: 'inherit' });
fs.copyFileSync(path.join(repo, 'tools/asset-gallery/gallery.html'), path.join(build, 'gallery.html'));
const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const page = await browser.newPage({ viewport: { width: 1560, height: 1100 } });
page.on('pageerror', (e) => console.error('pageerror', e.message));
for (const spec of specs.length ? specs : ['item:0:24', 'item:24:24', 'item:48:24', 'item:72:24', 'prop:0:30', 'prop:30:30', 'fixture:0:18']) {
  const [group, from = 0, n = 24, ids = ''] = spec.split(':');
  await page.goto(`file://${build}/gallery.html?group=${group}&from=${from}&n=${n}${ids ? '&ids=' + ids : ''}`);
  await page.waitForFunction('window.__done !== undefined', null, { timeout: 120000 });
  const file = path.join(out, `${group}-${from}${ids ? '-sel' : ''}.png`);
  await page.screenshot({ path: file, fullPage: true });
  console.log(file);
}
await browser.close();
