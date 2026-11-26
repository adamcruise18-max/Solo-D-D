// First-person view of the real streets (three.js). It loads the 256 m world cells
// around the player from docs/data/streets/ through the engine streamer, draws them
// with geometry.js, and moves the player. It keeps no game rules: every move goes to
// opts.onMove (the engine's streetMove: game time, miles, road events), and doors go
// to opts.onDoor. Built into docs/inside3d.js with the inside view.
import {
  WebGLRenderer, Scene, PerspectiveCamera, Color, Fog, HemisphereLight, DirectionalLight, SpotLight, Object3D,
  Mesh, Group, MeshLambertMaterial, CanvasTexture, RepeatWrapping, SRGBColorSpace,
} from 'three';
import { createPrecip } from './precip.js';
import { buildCell, collide } from './geometry.js';
import { createStreamer } from '../../core/streamer.js';
import { classify } from '../../core/cells.js';
import { WORLD_GRID } from '../../engine/worldgrid.js';
import { skyLight } from '../../ui/look3d.js';
import { keyFor, moveSpeed, nextStance, STANCES, JUMP_SPEED, GRAVITY } from '../../ui/controls.js';
import { KIND } from '../../data/streets.js';

const CELL = WORLD_GRID.cellMeters;
const MOVE_FLUSH_M = 8; // send the walked distance to the engine every 8 m
const RADIUS = 0.35; // the player, for walls
const RINGS = { active: 0, near: 1, mid: 2, edge: 3, far: 3 }; // 3x3 full detail, 5x5 loaded
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

// ---------- textures made in code ----------
function canvasTex(w, h, draw, repeat = true) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new CanvasTexture(c);
  if (repeat) t.wrapS = t.wrapT = RepeatWrapping;
  t.colorSpace = SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}
// One tile = 3 m of wall by one 2.8 m floor. White base: the vertex colour paints it.
function sidingTex() {
  return canvasTex(128, 128, (g, w, h) => {
    g.fillStyle = '#f4f1ea'; g.fillRect(0, 0, w, h);
    g.strokeStyle = 'rgba(0,0,0,.07)'; g.lineWidth = 1;
    for (let y = 4; y < h; y += 8) { g.beginPath(); g.moveTo(0, y); g.lineTo(w, y); g.stroke(); }
    // window with a light frame
    g.fillStyle = '#fbf8f0'; g.fillRect(36, 34, 56, 50);
    g.fillStyle = '#3c4a55'; g.fillRect(40, 38, 48, 42);
    g.fillStyle = 'rgba(190,215,230,.35)'; g.fillRect(40, 38, 20, 42);
    g.fillStyle = '#fbf8f0'; g.fillRect(62, 38, 3, 42);
  });
}
function shopTex() {
  return canvasTex(128, 128, (g, w, h) => {
    g.fillStyle = '#f2efe8'; g.fillRect(0, 0, w, h);
    g.fillStyle = 'rgba(0,0,0,.08)'; g.fillRect(0, 0, w, 10); // band at the top of each floor
    g.fillStyle = '#34424c'; g.fillRect(6, 40, w - 12, 82);
    g.fillStyle = 'rgba(200,220,232,.28)'; g.fillRect(6, 40, 40, 82);
    g.fillStyle = '#d9d5cc'; g.fillRect(w / 2 - 2, 40, 4, 82);
  });
}
function plainTex() {
  return canvasTex(64, 64, (g, w, h) => {
    g.fillStyle = '#f1eee7'; g.fillRect(0, 0, w, h);
    g.strokeStyle = 'rgba(0,0,0,.08)';
    for (let x = 0; x < w; x += 8) { g.beginPath(); g.moveTo(x, 0); g.lineTo(x, h); g.stroke(); }
  });
}
function roofTex() {
  return canvasTex(64, 64, (g, w, h) => {
    g.fillStyle = '#eeeeee'; g.fillRect(0, 0, w, h);
    let s = 3;
    const r = () => ((s = (s * 16807) % 2147483647) / 2147483647);
    for (let y = 0; y < h; y += 8) {
      g.fillStyle = 'rgba(0,0,0,.12)'; g.fillRect(0, y, w, 1);
      for (let x = (y / 8) % 2 ? 4 : 0; x < w; x += 8) { g.fillStyle = `rgba(0,0,0,${0.03 + r() * 0.07})`; g.fillRect(x, y + 1, 7, 7); }
    }
  });
}

export function openStreets(opts) {
  const root = document.createElement('div');
  root.id = 'inside';
  root.className = 'streets';
  root.innerHTML = `
    <canvas></canvas>
    <div class="in-top corners">
      <div class="in-title">${esc(opts.title || 'Outside')}</div>
      <div class="in-sub"></div>
      <div class="in-status"></div>
    </div>
    <div class="in-cross"></div>
    <div class="in-prompt" hidden></div>
    <div class="in-toast" hidden></div>
    <div class="in-debug" hidden></div>
    <div class="in-help">WASD: walk · Shift: sprint · Mouse: look (click first) · <b>E</b>: door · M: map · <b>Esc</b>: menu</div>
    <div class="in-credit">${esc(opts.credit || '')}</div>
    <div class="in-pause" hidden>
      <div class="box corners">
        <h3>Outside</h3>
        <p class="hint">Game time moves only when you walk. It is stopped now. The 3D streets cover about 6 x 6 km around your home for now.</p>
        <div class="row"><button class="primary" data-in="resume">Resume</button>
        <button data-in="leave">Back to the map</button></div>
      </div>
    </div>`;
  document.body.appendChild(root);
  const $ = (s) => root.querySelector(s);
  const canvas = $('canvas');
  const isTouch = typeof matchMedia !== 'undefined' && matchMedia('(pointer: coarse)').matches;
  if (isTouch) root.classList.add('is-touch');

  const renderer = new WebGLRenderer({ canvas, antialias: !isTouch, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, isTouch ? 1.25 : 1.75));
  const scene = new Scene();
  const camera = new PerspectiveCamera(70, 1, 0.1, 900);
  camera.rotation.order = 'YXZ';

  // ---------- light and sky (from the game time and weather) ----------
  const hemi = new HemisphereLight(0xdfe8f2, 0x5b5a48, 1);
  const sun = new DirectionalLight(0xfff1dc, 1.2);
  sun.target = new Object3D();
  scene.add(hemi, sun, sun.target);
  const flash = new SpotLight(0xfff2d8, 0, 40, 0.45, 0.5, 1.4);
  flash.target = new Object3D();
  camera.add(flash, flash.target);
  flash.target.position.set(0, -0.3, -1);
  scene.add(camera);
  let lastLook = '';
  // rain and snow around the player (from the weather now)
  const precip = createPrecip({ count: isTouch ? 450 : 1100 });
  scene.add(precip.object);
  function applyLight() {
    const sc = opts.getScene ? opts.getScene() : opts.scene;
    precip.set(sc);
    const L = skyLight(sc, sc && sc.daylight === 0);
    const key = `${L.sky}|${L.level.toFixed(2)}`;
    if (key !== lastLook) {
      lastLook = key;
      const sky = new Color(L.sky);
      // clear daytime: a light blue sky (the stylized look), clouds keep it gray
      if (!L.night && sc) sky.lerp(new Color(0xa9c8e4), Math.max(0, 0.75 - (sc.cloud ?? 0.5)) * Math.min(1, sc.daylight * 1.5));
      scene.background = sky;
      const wet = sc?.precip === 'rain' ? 0.5 + 0.5 * (sc.precipStrength ?? 0.6) : 0;
      const fogNear = sc?.fog ? 30 : wet ? 60 : 90, fogFar = sc?.fog ? 220 : wet ? 380 : 520;
      // wet streets and roofs are darker
      // (snow cover: a little brighter, so it reads as snow under a gray sky)
      const snowLift = 0.25 * (look.snow || 0);
      mats.ground.color.setScalar(1 - 0.22 * wet + snowLift);
      mats.roofs.color.setScalar(1 - 0.15 * wet + snowLift);
      scene.fog = new Fog(sky, fogNear, fogFar);
      hemi.color.set(L.color);
      hemi.groundColor.set(0x4d4c3e);
      hemi.intensity = 0.45 + 1.6 * L.level;
      sun.intensity = L.night ? 0 : 2.2 * L.level * (1 - 0.55 * (sc?.cloud ?? 0.5));
      sun.color.set(L.golden > 0.2 ? 0xffc98e : 0xfff1dc);
      const h = Math.max(0.15, sc?.sunHeight ?? 0.5);
      // sun from the south (low in winter), a little east in the morning
      const east = sc ? (sc.solarNoon - sc.minuteOfDay) / 360 : 0;
      sun.position.set(east * 100, 40 + h * 160, 120);
    }
    flash.intensity = opts.isLightOn && opts.isLightOn() ? 30 : 0;
  }

  // ---------- materials ----------
  const mats = {
    ground: new MeshLambertMaterial({ vertexColors: true }),
    wallsHouse: new MeshLambertMaterial({ vertexColors: true, map: sidingTex() }),
    wallsShop: new MeshLambertMaterial({ vertexColors: true, map: shopTex() }),
    wallsPlain: new MeshLambertMaterial({ vertexColors: true, map: plainTex() }),
    roofs: new MeshLambertMaterial({ vertexColors: true, map: roofTex() }),
    props: new MeshLambertMaterial({ vertexColors: true }),
  };
  mats.ground.polygonOffset = true; mats.ground.polygonOffsetFactor = 1; mats.ground.polygonOffsetUnits = 1;

  // ---------- cells ----------
  const known = new Set(opts.cells || []);
  const shown = new Map(); // key -> { group, props, colliders, doors, roads, x0, z0 }
  // season, overgrowth and snow cover: fixed while this view is open (cells made later match)
  const look = opts.look || { season: opts.bare ? 'winter' : 'summer' };
  async function load(key) {
    if (!known.has(key)) return { empty: true };
    const res = await fetch(`${opts.base || 'data/streets/'}${key.replace(',', '_')}.json`);
    if (!res.ok) throw new Error(`cell ${key}: ${res.status}`);
    const data = await res.json();
    const m = buildCell(data, { lod: 0, look });
    const [cx, cz] = key.split(',').map(Number);
    const group = new Group();
    group.position.set(cx * CELL, 0, cz * CELL);
    group.name = `cell ${key}`;
    let props = null;
    for (const k of ['ground', 'wallsHouse', 'wallsShop', 'wallsPlain', 'roofs', 'props']) {
      if (!m[k]) continue;
      const mesh = new Mesh(m[k], mats[k]);
      mesh.matrixAutoUpdate = false;
      mesh.updateMatrix();
      group.add(mesh);
      if (k === 'props') props = mesh;
    }
    let tris = 0;
    group.traverse((o) => { if (o.isMesh) tris += o.geometry.attributes.position.count / 3; });
    return { group, props, colliders: m.colliders, doors: m.doors, roads: m.roads, x0: cx * CELL, z0: cz * CELL, tris };
  }
  function unload(key, data) {
    if (!data || data.empty) return;
    scene.remove(data.group);
    data.group.traverse((o) => { if (o.isMesh) o.geometry.dispose(); });
    shown.delete(key);
  }
  const streamer = createStreamer({
    load, unload, maxLoaded: 40, maxInFlight: 4,
    cost: (key, d) => (d && !d.empty ? 1 : 0.1),
  });
  let snap = !!opts.snapToDoor; // put the player at the nearest door (stepping out of a building)
  streamer.on((ev) => {
    if (ev.type === 'loaded' && ev.data && !ev.data.empty) { scene.add(ev.data.group); shown.set(ev.key, ev.data); }
    if (snap && ev.type === 'loaded' && ev.key === lastCellKey) {
      snap = false;
      let best = null, bd = 40;
      for (const d of shown.values()) {
        for (const door of d.doors) {
          const dd = Math.hypot(door.x + d.x0 - pos.x, door.z + d.z0 - pos.z);
          if (dd < bd) { bd = dd; best = { x: door.x + d.x0 + door.nx * 0.6, z: door.z + d.z0 + door.nz * 0.6, nx: door.nx, nz: door.nz }; }
        }
      }
      if (best) { pos.x = best.x; pos.z = best.z; lastSent = { x: pos.x, z: pos.z }; yaw = Math.atan2(-best.nx, -best.nz); }
    }
  });
  let tiers = new Map();
  let lastCellKey = '';
  function updateCells(force) {
    const here = WORLD_GRID.cellAt(WORLD_GRID.toLatLon({ x: pos.x, z: pos.z }));
    if (!force && here.key === lastCellKey) return;
    lastCellKey = here.key;
    tiers = classify(WORLD_GRID, WORLD_GRID.toLatLon({ x: pos.x, z: pos.z }), { rings: RINGS });
    streamer.update(tiers);
    for (const [key, d] of shown) {
      const t = tiers.get(key);
      if (d.props) d.props.visible = t === 'active' || t === 'near';
    }
  }

  // ---------- player ----------
  const pos = { x: opts.start.x, z: opts.start.z, y: 0 };
  let yaw = opts.yaw ?? 0, pitch = 0, vy = 0, feet = 0;
  let stance = 'stand', sprint = false, slowWalk = false;
  const keys = new Set();
  let walked = 0, lastSent = { x: pos.x, z: pos.z };
  let paused = false, closed = false;

  function collidersNear() {
    const out = [];
    const cx = Math.floor(pos.x / CELL), cz = Math.floor(pos.z / CELL);
    for (let dz = -1; dz <= 1; dz++) for (let dx = -1; dx <= 1; dx++) {
      const d = shown.get(`${cx + dx},${cz + dz}`);
      if (!d) continue;
      for (const [a, b, c, e] of d.colliders) {
        const x0 = a + d.x0, z0 = b + d.z0, x1 = c + d.x0, z1 = e + d.z0;
        if (Math.min(x0, x1) > pos.x + 6 || Math.max(x0, x1) < pos.x - 6 || Math.min(z0, z1) > pos.z + 6 || Math.max(z0, z1) < pos.z - 6) continue;
        out.push([x0, z0, x1, z1]);
      }
    }
    return out;
  }
  const cellKnown = (x, z) => known.has(`${Math.floor(x / CELL)},${Math.floor(z / CELL)}`);
  const cellReady = (x, z) => { const k = `${Math.floor(x / CELL)},${Math.floor(z / CELL)}`; return !known.has(k) || shown.has(k); };

  // ---------- HUD ----------
  let toastTimer = 0;
  function toast(msg, ms = 3500) {
    if (!msg) return;
    const t = $('.in-toast');
    t.innerHTML = msg; t.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { t.hidden = true; }, ms);
  }
  function streetName() {
    let best = null, bd = 35;
    for (const d of shown.values()) {
      for (const r of d.roads) {
        for (let i = 1; i < r.line.length; i++) {
          const a = r.line[i - 1], c = r.line[i];
          const ax = a[0] + d.x0, az = a[1] + d.z0, cx = c[0] + d.x0, cz = c[1] + d.z0;
          const dx = cx - ax, dz = cz - az, L = dx * dx + dz * dz || 1;
          const t = Math.max(0, Math.min(1, ((pos.x - ax) * dx + (pos.z - az) * dz) / L));
          const dd = Math.hypot(pos.x - (ax + t * dx), pos.z - (az + t * dz));
          if (dd < bd) { bd = dd; best = r.name; }
        }
      }
    }
    return best;
  }
  let hudT = 0;
  function hud(force) {
    const now = performance.now();
    if (!force && now - hudT < 400) return;
    hudT = now;
    $('.in-sub').textContent = streetName() || 'Outside';
    if (opts.getStatus) $('.in-status').innerHTML = opts.getStatus();
  }
  // door in front of the player, within 3 m
  function doorAhead() {
    const fx = -Math.sin(yaw), fz = -Math.cos(yaw);
    let best = null, bd = 3;
    const cx = Math.floor(pos.x / CELL), cz = Math.floor(pos.z / CELL);
    for (let dz = -1; dz <= 1; dz++) for (let dx = -1; dx <= 1; dx++) {
      const d = shown.get(`${cx + dx},${cz + dz}`);
      if (!d) continue;
      for (const door of d.doors) {
        const x = door.x + d.x0, z = door.z + d.z0;
        const vx = x - pos.x, vz = z - pos.z;
        const dist = Math.hypot(vx, vz);
        if (dist > bd) continue;
        if (dist > 0.6 && (vx * fx + vz * fz) / dist < 0.3) continue; // not in front
        bd = dist; best = { ...door, wx: x, wz: z };
      }
    }
    return best;
  }
  let promptDoor = null;
  function prompt() {
    const d = doorAhead();
    promptDoor = d;
    const el = $('.in-prompt');
    if (!d) { el.hidden = true; return; }
    el.innerHTML = opts.describeDoor ? opts.describeDoor(d, toLatLon(d.wx, d.wz)) : '<kbd>E</kbd> Door';
    el.hidden = false;
  }
  const toLatLon = (x, z) => WORLD_GRID.toLatLon({ x, z });

  // ---------- moves to the engine ----------
  function flushMove(force) {
    const d = Math.hypot(pos.x - lastSent.x, pos.z - lastSent.z);
    if (d < (force ? 0.5 : MOVE_FLUSH_M)) return;
    lastSent = { x: pos.x, z: pos.z };
    const msg = opts.onMove ? opts.onMove(toLatLon(pos.x, pos.z)) : '';
    if (msg) toast(msg, 5000);
    hud(true);
    if (opts.isDead && opts.isDead()) close('dead');
  }

  // ---------- input ----------
  function onKey(e) {
    if (closed) return;
    const k = keyFor(e.code);
    const arrows = { ArrowUp: 'KeyW', ArrowDown: 'KeyS', ArrowLeft: 'KeyA', ArrowRight: 'KeyD' };
    if (arrows[e.code]) { keys.add(arrows[e.code]); e.preventDefault(); return; }
    if (!k) return;
    e.preventDefault();
    if (k.action === 'pause') { setPaused(!paused); return; }
    if (paused) return;
    if (k.action === 'move') keys.add(e.code);
    else if (k.action === 'sprint') sprint = true;
    else if (k.action === 'crouch') stance = 'crouch';
    else if (k.action === 'stance') stance = nextStance(stance);
    else if (k.action === 'walktoggle') slowWalk = !slowWalk;
    else if (k.action === 'jump' && feet <= 0.001) vy = JUMP_SPEED;
    else if (k.action === 'interact' || k.action === 'context') useDoor();
    else if (k.action === 'flashlight') { if (opts.toggleLight) toast(esc(opts.toggleLight())); }
    else if (k.action === 'map') close('map');
    else if (k.action === 'debug') { const el = $('.in-debug'); el.hidden = !el.hidden; }
  }
  function onKeyUp(e) {
    const arrows = { ArrowUp: 'KeyW', ArrowDown: 'KeyS', ArrowLeft: 'KeyA', ArrowRight: 'KeyD' };
    keys.delete(arrows[e.code] || e.code);
    const k = keyFor(e.code);
    if (k?.action === 'sprint') sprint = false;
    if (k?.action === 'crouch') stance = 'stand';
  }
  function onBlur() { keys.clear(); sprint = false; }
  function useDoor() {
    if (!promptDoor) return;
    flushMove(true);
    const r = opts.onDoor ? opts.onDoor(promptDoor, toLatLon(promptDoor.wx, promptDoor.wz)) : null;
    if (r && r.close) close('door');
    else if (r && r.text) toast(r.text);
  }
  function onMouse(e) {
    if (document.pointerLockElement !== canvas || paused) return;
    yaw -= e.movementX * 0.0022;
    pitch = Math.max(-1.45, Math.min(1.45, pitch - e.movementY * 0.0022));
  }
  canvas.addEventListener('click', () => { if (!isTouch && !paused) canvas.requestPointerLock?.(); });
  document.addEventListener('mousemove', onMouse);
  window.addEventListener('keydown', onKey, true);
  window.addEventListener('keyup', onKeyUp, true);
  window.addEventListener('blur', onBlur);

  // touch: left half moves, right half looks, tap the prompt to use a door
  const touch = { move: null, look: null };
  canvas.addEventListener('touchstart', (e) => {
    for (const t of e.changedTouches) {
      if (t.clientX < innerWidth / 2 && !touch.move) touch.move = { id: t.identifier, x: t.clientX, y: t.clientY, dx: 0, dy: 0 };
      else if (!touch.look) touch.look = { id: t.identifier, x: t.clientX, y: t.clientY };
    }
  }, { passive: true });
  canvas.addEventListener('touchmove', (e) => {
    for (const t of e.changedTouches) {
      if (touch.move && t.identifier === touch.move.id) { touch.move.dx = t.clientX - touch.move.x; touch.move.dy = t.clientY - touch.move.y; }
      if (touch.look && t.identifier === touch.look.id) {
        yaw -= (t.clientX - touch.look.x) * 0.005; pitch = Math.max(-1.4, Math.min(1.4, pitch - (t.clientY - touch.look.y) * 0.005));
        touch.look.x = t.clientX; touch.look.y = t.clientY;
      }
    }
  }, { passive: true });
  canvas.addEventListener('touchend', (e) => {
    for (const t of e.changedTouches) {
      if (touch.move && t.identifier === touch.move.id) touch.move = null;
      if (touch.look && t.identifier === touch.look.id) touch.look = null;
    }
  }, { passive: true });
  $('.in-prompt').addEventListener('click', useDoor);

  function setPaused(p) {
    paused = p;
    $('.in-pause').hidden = !p;
    if (p) { keys.clear(); if (document.pointerLockElement) document.exitPointerLock?.(); }
  }
  root.querySelector('[data-in="resume"]').addEventListener('click', () => setPaused(false));
  root.querySelector('[data-in="leave"]').addEventListener('click', () => close('leave'));

  function resize() {
    const w = root.clientWidth || innerWidth, h = root.clientHeight || innerHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  window.addEventListener('resize', resize);
  resize();

  // ---------- loop ----------
  let last = performance.now();
  let fpsT = 0, frames = 0, fps = 0;
  let edgeWarned = 0;
  function step(dt) {
    if (paused) return;
    let f = 0, s = 0;
    if (keys.has('KeyW')) f += 1;
    if (keys.has('KeyS')) f -= 1;
    if (keys.has('KeyD')) s += 1;
    if (keys.has('KeyA')) s -= 1;
    if (touch.move) { f = Math.max(-1, Math.min(1, -touch.move.dy / 60)); s = Math.max(-1, Math.min(1, touch.move.dx / 60)); }
    const l = Math.hypot(f, s);
    if (l > 1) { f /= l; s /= l; }
    const speed = moveSpeed({ stance, sprint, slowWalk });
    const fx = -Math.sin(yaw), fz = -Math.cos(yaw), rx = Math.cos(yaw), rz = -Math.sin(yaw);
    let nx = pos.x + (fx * f + rx * s) * speed * dt, nz = pos.z + (fz * f + rz * s) * speed * dt;
    if (l > 0) {
      if (!cellKnown(nx, nz)) {
        nx = pos.x; nz = pos.z;
        const t = performance.now();
        if (t - edgeWarned > 4000) { edgeWarned = t; toast('The 3D streets end here for now (about 3 km from your home). Use the map to travel farther.', 4000); }
      } else if (!cellReady(nx, nz)) { nx = pos.x; nz = pos.z; } // wait for the cell to load
      [nx, nz] = collide(nx, nz, RADIUS, collidersNear());
      walked += Math.hypot(nx - pos.x, nz - pos.z);
      pos.x = nx; pos.z = nz;
    }
    if (feet < 20) { vy -= GRAVITY * dt; feet = Math.max(0, feet + vy * dt); } // (above 20 m: test camera only)
    if (feet === 0) vy = 0;
    camera.position.set(pos.x, feet + STANCES[stance].eye, pos.z);
    camera.rotation.set(pitch, yaw, 0);
    flushMove(false);
  }
  function frame(t) {
    if (closed) return;
    const dt = Math.min(0.1, (t - last) / 1000);
    last = t;
    step(dt);
    precip.update(dt, camera.position);
    updateCells(false);
    applyLight();
    prompt();
    hud(false);
    renderer.render(scene, camera);
    frames++;
    if (t - fpsT > 1000) {
      fps = frames; frames = 0; fpsT = t;
      const dbg = $('.in-debug');
      if (!dbg.hidden) {
        const r = streamer.report();
        dbg.textContent = `${fps} fps · ${renderer.info.render.calls} draw calls · ${Math.round(renderer.info.render.triangles / 1000)}k triangles · cells ${r.loaded} loaded, ${r.loading} loading · x ${pos.x.toFixed(0)} z ${pos.z.toFixed(0)}`;
      }
    }
    requestAnimationFrame(frame);
  }
  updateCells(true);
  applyLight();
  hud(true);
  requestAnimationFrame(frame);

  function close(why) {
    if (closed) return;
    flushMove(true);
    closed = true;
    window.removeEventListener('keydown', onKey, true);
    window.removeEventListener('keyup', onKeyUp, true);
    window.removeEventListener('blur', onBlur);
    window.removeEventListener('resize', resize);
    document.removeEventListener('mousemove', onMouse);
    if (document.pointerLockElement) document.exitPointerLock?.();
    for (const [key, d] of [...shown]) unload(key, d);
    for (const m of Object.values(mats)) { m.map?.dispose(); m.dispose(); }
    precip.dispose();
    renderer.dispose();
    root.remove();
    delete window.__llStreets;
    if (opts.onClose) opts.onClose(why, { x: pos.x, z: pos.z });
  }
  // test hooks (browser checks)
  window.__llStreets = {
    pos, look: (y, p = 0) => { yaw = y; pitch = p; }, teleport: (x, z) => { pos.x = x; pos.z = z; lastSent = { x, z }; updateCells(true); },
    info: () => ({ precip: precip.kind(), calls: renderer.info.render.calls, tris: renderer.info.render.triangles, fps, cells: streamer.report(), shown: [...shown.keys()] }),
    // walk in a straight line in 2 m steps (tests: game time and miles)
    walk: (dx, dz) => { const n = Math.ceil(Math.hypot(dx, dz) / 2); for (let i = 0; i < n; i++) { pos.x += dx / n; pos.z += dz / n; flushMove(false); } flushMove(true); },
    door: () => promptDoor, close,
    doors: (kind) => [...shown.values()].flatMap((d) => d.doors.filter((x) => kind === undefined || x.kind === kind).map((x) => ({ ...x, wx: x.x + d.x0, wz: x.z + d.z0 }))), fly: (h) => { feet = h; vy = 0; }, idle: () => streamer.idle({ timeoutMs: 15000 }),
  };
  return { close };
}

// Which doors are what (for app.js prompts)
export const DOOR_KIND = KIND;
