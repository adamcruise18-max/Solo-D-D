// Render check for rooms and streets (from the threejs-materials-lighting and
// performance-optimization skills): lights, shadows, tone mapping, color maps not in sRGB,
// materials and geometries that are the same but not shared, draw calls, triangles, frame time.
// node tools/asset-gallery/probe.mjs <repoDir> <outDir> <q> spec...
//   spec = room:cat:x:z:yaw  or  street:x:z:yaw
// Prints one JSON line per spec. Frame time uses SwiftShader (CPU), so compare runs only.
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const [repo, out, qual, ...specs] = process.argv.slice(2);
const build = path.join(out, '_probe');
fs.mkdirSync(build, { recursive: true });
for (const n of ['room', 'street']) {
  execSync(`npx esbuild ${path.join(repo, `tools/asset-gallery/${n}.js`)} --bundle --format=iife --log-level=error --outfile=${build}/${n}.js`, { cwd: repo, stdio: 'inherit' });
  fs.writeFileSync(path.join(build, `${n}.html`), `<!doctype html><meta charset="utf-8"><link rel="stylesheet" href="style.css"><body><script src="${n}.js"></script></body>`);
}
const srv = http.createServer((req, res) => {
  const p = decodeURIComponent(req.url.split('?')[0]);
  const f = p.startsWith('/data/') || p === '/style.css' ? path.join(repo, 'docs', p) : path.join(build, p);
  fs.readFile(f, (e, b) => { if (e) { res.writeHead(404); return res.end(); } res.writeHead(200, { 'content-type': f.endsWith('.js') ? 'text/javascript' : f.endsWith('.json') ? 'application/json' : f.endsWith('.css') ? 'text/css' : 'text/html' }); res.end(b); });
}).listen(0);
const port = srv.address().port;
const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
page.on('pageerror', (e) => console.error('pageerror', e.message));

// runs in the page
function probe(hook) {
  const H = window[hook];
  const { scene, renderer } = H;
  const lights = [], srgbMissing = new Set(), matKeys = new Map(), geos = new Set(), mats = new Set();
  let meshes = 0, casters = 0, receivers = 0, transparent = 0;
  scene.traverse((o) => {
    if (o.isLight) lights.push(`${o.type}:${+o.intensity.toFixed(2)}${o.castShadow ? `:shadow${o.shadow.mapSize.x}` : ''}`);
    if (!o.isMesh || !o.visible) return;
    meshes++;
    if (o.castShadow) casters++;
    if (o.receiveShadow) receivers++;
    geos.add(o.geometry.uuid);
    for (const m of [].concat(o.material ?? [])) {
      if (mats.has(m)) continue;
      mats.add(m);
      if (m.transparent) transparent++;
      if (m.map && m.map.colorSpace !== 'srgb' && !m.map.userData?.mask) srgbMissing.add(m.name || m.type);
      // same look, different object: could be one shared material
      if (!m.map && m.color) {
        const k = [m.type, m.color.getHexString(), m.roughness, m.metalness, m.transparent, m.opacity, m.emissive?.getHexString(), m.side, m.vertexColors].join('|');
        matKeys.set(k, (matKeys.get(k) || 0) + 1);
      }
    }
  });
  const dupMats = [...matKeys.values()].filter((n) => n > 1).reduce((a, n) => a + n - 1, 0);
  return { lights, environment: !!scene.environment, shadowMap: renderer.shadowMap.enabled, shadowType: renderer.shadowMap.type,
    toneMapping: renderer.toneMapping, exposure: +renderer.toneMappingExposure.toFixed(2), pixelRatio: renderer.getPixelRatio(), outputColorSpace: renderer.outputColorSpace,
    meshes, casters, receivers, materials: mats.size, transparentMats: transparent, dupMaterials: dupMats, geometries: geos.size,
    colorMapsNotSRGB: [...srgbMissing], calls: renderer.info.render.calls, tris: renderer.info.render.triangles };
}
async function frameTime() {
  return page.evaluate(() => new Promise((done) => {
    const t = []; let last = performance.now();
    const step = (now) => { t.push(now - last); last = now; if (t.length < 61) requestAnimationFrame(step); else { t.shift(); t.sort((a, b) => a - b); done({ avgMs: +(t.reduce((a, b) => a + b) / t.length).toFixed(1), p95Ms: +t[Math.floor(t.length * 0.95)].toFixed(1) }); } };
    requestAnimationFrame(step);
  }));
}
for (const spec of specs) {
  const [kind, ...a] = spec.split(':');
  let hook;
  if (kind === 'room') {
    const [cat, x, z, yaw] = a;
    await page.goto(`http://127.0.0.1:${port}/room.html?cat=${cat}&key=dev7&x=${x}&z=${z}&yaw=${yaw}&q=${qual}&sky=noon`);
    hook = '__llInside';
  } else {
    const [x, z, yaw] = a;
    await page.goto(`http://127.0.0.1:${port}/street.html?x=${x}&z=${z}&yaw=${yaw}&q=${qual}&sky=noon`);
    hook = '__llStreets';
  }
  await page.waitForFunction('window.__ready', null, { timeout: 180000 });
  await page.waitForTimeout(1500);
  const r = await page.evaluate(probe, hook);
  const ft = await frameTime();
  console.log(JSON.stringify({ spec, q: qual, ...r, ...ft }));
}
await browser.close(); srv.close();
