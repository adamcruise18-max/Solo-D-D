// Screenshots the first-person view of a few floor plans at a quality level.
// node tools/asset-gallery/rooms.mjs <repoDir> <outDir> <q> spec...   spec = cat:x:z:yaw[:pitch]
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const [repo, out, qual, ...specs] = process.argv.slice(2);
const build = path.join(out, '_room');
fs.mkdirSync(build, { recursive: true });
execSync(`npx esbuild ${path.join(repo, 'tools/asset-gallery/room.js')} --bundle --format=iife --log-level=error --outfile=${build}/room.js`, { cwd: repo, stdio: 'inherit' });
fs.writeFileSync(path.join(build, 'room.html'), `<!doctype html><meta charset="utf-8"><link rel="stylesheet" href="style.css"><body><script src="room.js"></script></body>`);
fs.copyFileSync(path.join(repo, 'docs/style.css'), path.join(build, 'style.css'));
const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
page.on('pageerror', (e) => console.error('pageerror', e.message));
for (const spec of specs) {
  const [cat, x, z, yaw, pitch = 0] = spec.split(':');
  await page.goto(`file://${build}/room.html?cat=${cat}&key=dev7&x=${x}&z=${z}&yaw=${yaw}&pitch=${pitch}&q=${qual}&sky=noon`);
  await page.waitForFunction('window.__ready', null, { timeout: 120000 });
  await page.waitForTimeout(2500);
  const info = await page.evaluate(() => window.__llInside && window.__llInside.state().info());
  const file = path.join(out, `${cat}_${x}_${z}_${yaw}_${qual}.png`);
  await page.screenshot({ path: file });
  console.log(file, JSON.stringify(info));
}
await browser.close();
