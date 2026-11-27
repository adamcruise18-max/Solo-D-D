// Dev tools (research tool list, Adam "implement them all", 2026-11-27).
// Loaded only with ?dev=1 or the first F3 press (see src/main.js), never in the normal player load.
//   - stats-gl: FPS, CPU and GPU frame time of the open 3D view (inside or streets).
//   - lil-gui: live sliders for light, color, exposure and fog of the open 3D view, and
//     for game values when the game exposes window.__llGame ({ state, render }).
// Nothing here changes saved rules: sliders change the live scene or the live state only.
import Stats from 'stats-gl';
import GUI from 'lil-gui';

const DEV = (window.LLDev = window.LLDev || {});

function view() {
  // The 3D views expose their scene and renderer for tests (inside3d.js, streets/view.js).
  for (const key of ['__llInside', '__llStreets']) {
    const v = window[key];
    if (v && v.renderer && v.scene) return { key, renderer: v.renderer, scene: v.scene };
  }
  return null;
}

let stats = null;
let statsFor = null;
let gui = null;
let sceneFolder = null;
let guiFor = null;
let shown = false;

function hex(c) { return `#${c.getHexString()}`; }

function buildSceneFolder(v) {
  if (sceneFolder) sceneFolder.destroy();
  sceneFolder = gui.addFolder(`3D view (${v.key === '__llInside' ? 'inside' : 'streets'})`);
  const r = v.renderer;
  if ('toneMappingExposure' in r) sceneFolder.add(r, 'toneMappingExposure', 0, 3, 0.01).name('exposure');
  const s = v.scene;
  if (s.fog && 'density' in s.fog) sceneFolder.add(s.fog, 'density', 0, 0.2, 0.001).name('fog density');
  if (s.fog && s.fog.color) { const o = { c: hex(s.fog.color) }; sceneFolder.addColor(o, 'c').name('fog color').onChange((c) => s.fog.color.set(c)); }
  if (s.background && s.background.isColor) { const o = { c: hex(s.background) }; sceneFolder.addColor(o, 'c').name('background').onChange((c) => s.background.set(c)); }
  let n = 0;
  s.traverse((o) => {
    if (!o.isLight || n >= 12) return;
    n += 1;
    const f = sceneFolder.addFolder(`${o.type}${o.name ? ' ' + o.name : ''} ${n}`).close();
    f.add(o, 'intensity', 0, Math.max(10, o.intensity * 4), 0.01);
    const col = { c: hex(o.color) };
    f.addColor(col, 'c').name('color').onChange((c) => o.color.set(c));
    if (o.groundColor) { const g = { c: hex(o.groundColor) }; f.addColor(g, 'c').name('ground color').onChange((c) => o.groundColor.set(c)); }
    if ('distance' in o && o.isPointLight) f.add(o, 'distance', 0, 60, 0.5);
  });
}

function buildGameFolder() {
  const g = window.__llGame;
  if (!g || !g.state) return;
  const f = gui.addFolder('Game values (live state, test only)').close();
  const p = () => g.state.player;
  const rerender = () => { try { g.render && g.render(); } catch { /* the view may be closed */ } };
  const proxy = {};
  for (const k of ['health', 'food', 'water', 'energy', 'warmth']) {
    Object.defineProperty(proxy, k, { get: () => p()[k], set: (v) => { p()[k] = v; } });
    f.add(proxy, k, 0, 100, 1).onFinishChange(rerender).listen();
  }
}

function ensureStats(v) {
  if (!v) { if (stats) stats.dom.style.display = 'none'; return; }
  if (!stats) {
    stats = new Stats({ trackGPU: true, logsPerSecond: 4, samplesGraph: 60, horizontal: true });
    Object.assign(stats.dom.style, { position: 'fixed', left: '0', top: 'auto', bottom: '48px', right: 'auto', zIndex: '10000' });
    stats.dom.dataset.dev = 'stats';
    document.body.appendChild(stats.dom);
  }
  stats.dom.style.display = shown ? '' : 'none';
  if (statsFor !== v.renderer) { statsFor = v.renderer; stats.init(v.renderer); }
}

function loop() {
  const v = view();
  if (shown) {
    ensureStats(v);
    if (v && guiFor !== v.renderer) { guiFor = v.renderer; buildSceneFolder(v); }
    if (!v && sceneFolder) { sceneFolder.destroy(); sceneFolder = null; guiFor = null; }
    if (v && stats) stats.update();
  }
  requestAnimationFrame(loop);
}

export function toggle(on = !shown) {
  shown = on;
  if (!gui) {
    gui = new GUI({ title: 'Dev (F3)', width: 280 });
    gui.domElement.style.zIndex = '10000';
    gui.domElement.dataset.dev = 'gui';
    buildGameFolder();
  }
  gui.domElement.style.display = shown ? '' : 'none';
  if (stats) stats.dom.style.display = shown ? '' : 'none';
  return shown;
}

DEV.toggle = toggle;
DEV.loaded = true;
DEV.status = () => ({ shown, view: view()?.key || null, stats: !!stats, gui: !!gui });
toggle(true);
requestAnimationFrame(loop);
