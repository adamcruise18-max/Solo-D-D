// First-person view inside a building (three.js). Built as its own file (docs/inside3d.js)
// and loaded only when the player walks inside. It draws a floor plan from
// src/engine/interior.js. All game rules stay in the engine: this file calls back to app.js.
import {
  WebGLRenderer, Scene, PerspectiveCamera, Color, FogExp2, HemisphereLight, AmbientLight, PointLight, SpotLight,
  Object3D, Mesh, InstancedMesh, BoxGeometry, PlaneGeometry, RingGeometry, CylinderGeometry, SphereGeometry,
  MeshStandardMaterial, MeshBasicMaterial, CanvasTexture, RepeatWrapping, SRGBColorSpace, DoubleSide,
  Vector3, Matrix4, Group, LineSegments, EdgesGeometry, LineBasicMaterial,
} from 'three';
import { collide, nearestSpot } from '../engine/interior.js';

const EYE = 1.62;
const WALK_SPEED = 2.6; // m/s on screen
const RUN_SPEED = 4.2;
const ACCENT = 0x6fd3e6;
const WALK_FLUSH_M = 30; // send walked distance to the game clock every 30 m

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

// ---------- textures made in code (no image files) ----------
function noiseTexture(base, spread, tile, lines) {
  const c = document.createElement('canvas');
  c.width = c.height = 256;
  const g = c.getContext('2d');
  g.fillStyle = base;
  g.fillRect(0, 0, 256, 256);
  const img = g.getImageData(0, 0, 256, 256);
  let seed = 7;
  const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  for (let i = 0; i < img.data.length; i += 4) {
    const n = (rnd() - 0.5) * spread;
    img.data[i] += n; img.data[i + 1] += n; img.data[i + 2] += n;
  }
  g.putImageData(img, 0, 0);
  if (lines) {
    g.strokeStyle = 'rgba(0,0,0,0.28)';
    g.lineWidth = 2;
    for (let i = 0; i <= 256; i += 256 / lines) {
      g.beginPath(); g.moveTo(i, 0); g.lineTo(i, 256); g.stroke();
      g.beginPath(); g.moveTo(0, i); g.lineTo(256, i); g.stroke();
    }
  }
  // stains
  for (let i = 0; i < 6; i++) {
    g.fillStyle = `rgba(40,30,20,${0.05 + rnd() * 0.08})`;
    g.beginPath();
    g.ellipse(rnd() * 256, rnd() * 256, 10 + rnd() * 40, 8 + rnd() * 30, rnd() * 3, 0, 6.3);
    g.fill();
  }
  const t = new CanvasTexture(c);
  t.wrapS = t.wrapT = RepeatWrapping;
  t.repeat.set(tile, tile);
  t.colorSpace = SRGBColorSpace;
  return t;
}

const FLOORS = {
  hall: { base: '#9a9a92', lines: 4 }, // store tiles
  house: { base: '#7a6248', lines: 0 }, // wood
  rooms: { base: '#a7aca8', lines: 4 }, // clinic linoleum
};

const FIXTURE_COLORS = {
  shelf: 0x7d8790, rack: 0xc06a2b, clothes: 0x6b6f73, checkout: 0x4b545c, coolers: 0x9aa3a8,
  rx_counter: 0xd8d4c8, gate: 0x8c949b, bed: 0x9aa6ad, cabinet: 0x8e8a80, fridge: 0xd9dadb, counter: 0x7a6a58,
  sofa: 0x5b6a5e, tub: 0xe9e9e4, locker: 0x6d7b86, dresser: 0x6e5a45, cart: 0xb0b6ba, table: 0x6b5641, bench: 0x5c534a,
  desk: 0x6a6f74,
};

const PRODUCT_COLORS = [0xb2442f, 0xd4a53b, 0x3f6f9e, 0x5f8f4a, 0xe4ddd0, 0x8a4f7d, 0xc7703a, 0x2f5d5a, 0x9e9a8c, 0xd7c25c];

export function openInside(opts) {
  const { plan } = opts;
  const root = document.createElement('div');
  root.id = 'inside';
  root.innerHTML = `
    <canvas></canvas>
    <div class="in-top corners">
      <div class="in-title">${esc(opts.title)}</div>
      <div class="in-sub">${esc(opts.subtitle || '')}</div>
      <div class="in-status"></div>
    </div>
    <div class="in-cross"></div>
    <div class="in-prompt" hidden></div>
    <div class="in-bar" hidden><i></i></div>
    <div class="in-found corners" hidden></div>
    <div class="in-toast" hidden></div>
    <div class="in-help">WASD / arrows: walk · Mouse: look · <b>E</b>: search · <b>T</b>: take all · <b>Esc</b>: menu</div>
    <div class="in-touch">
      <div class="in-stick"><i></i></div>
      <button class="in-use" type="button">USE</button>
      <button class="in-menu" type="button">☰</button>
    </div>
    <div class="in-pause" hidden>
      <div class="box corners">
        <h3>${esc(opts.title)}</h3>
        <p class="hint">Game time moves only when you walk or search. It is stopped now.</p>
        <button class="primary" data-in="resume">Resume</button>
        <button data-in="leave">Leave the building</button>
      </div>
    </div>`;
  document.body.appendChild(root);
  const $ = (s) => root.querySelector(s);
  const canvas = $('canvas');
  const touch = matchMedia('(pointer: coarse)').matches;
  root.classList.toggle('is-touch', touch);

  // ---------- renderer and scene ----------
  const renderer = new WebGLRenderer({ canvas, antialias: !touch });
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, touch ? 1.5 : 2));
  renderer.outputColorSpace = SRGBColorSpace;
  const scene = new Scene();
  const camera = new PerspectiveCamera(72, 1, 0.05, 80);
  scene.add(camera);
  const { w: W, d: D, h: H } = plan.size;
  const dark = opts.dark; // big store, or night
  const lit = opts.hasLight;
  const bg = dark ? 0x05070a : 0x2a3138;
  scene.background = new Color(bg);
  scene.fog = new FogExp2(bg, dark ? (lit ? 0.07 : 0.11) : 0.035);

  // Light
  if (dark) {
    scene.add(new AmbientLight(0x8fa4b8, lit ? 0.08 : 0.28));
    scene.add(new HemisphereLight(0xb8c8d8, 0x202020, lit ? 0.12 : 0.25));
  } else {
    scene.add(new HemisphereLight(0xdfe8f0, 0x3a3630, 1.3));
    scene.add(new AmbientLight(0xffffff, 0.25));
  }
  // Grey daylight from the open door
  const doorLight = new PointLight(opts.night ? 0x6b7d99 : 0xe8f0ff, opts.night ? 4 : 18, 14, 1.6);
  doorLight.position.set(0, 2.2, -0.6);
  scene.add(doorLight);
  let flash = null;
  if (lit) {
    flash = new SpotLight(0xfff3dd, 38, 24, 0.5, 0.45, 1.4);
    flash.position.set(0.15, -0.15, 0);
    camera.add(flash);
    const tgt = new Object3D();
    tgt.position.set(0, -0.25, -3);
    camera.add(tgt);
    flash.target = tgt;
  }

  // ---------- building ----------
  const floorKind = plan.cat === 'house' ? 'house' : plan.kind;
  const fcfg = FLOORS[floorKind];
  const floorTex = noiseTexture(fcfg.base, 26, Math.max(W, D) / 2, fcfg.lines);
  const floor = new Mesh(new PlaneGeometry(W, D), new MeshStandardMaterial({ map: floorTex, roughness: 0.92 }));
  floor.rotation.x = -Math.PI / 2;
  floor.position.set(0, 0, -D / 2);
  scene.add(floor);
  const ceil = new Mesh(new PlaneGeometry(W, D), new MeshStandardMaterial({ color: 0x8b8f93, roughness: 1 }));
  ceil.rotation.x = Math.PI / 2;
  ceil.position.set(0, H, -D / 2);
  scene.add(ceil);
  // Ceiling lamps (dead)
  const lampMat = new MeshStandardMaterial({ color: 0xc9ccd0, roughness: 0.6 });
  for (let z = -3; z > -D + 1; z -= 5) {
    for (let x = -W / 2 + 3; x < W / 2 - 1; x += 6) {
      const l = new Mesh(new BoxGeometry(1.2, 0.06, 0.3), lampMat);
      l.position.set(x, H - 0.04, z);
      scene.add(l);
    }
  }

  const wallTex = noiseTexture(plan.cat === 'house' ? '#b9b2a4' : '#a9b0b3', 18, 2, 0);
  const wallMat = new MeshStandardMaterial({ map: wallTex, roughness: 0.95 });
  for (const b of plan.walls) {
    const m = new Mesh(new BoxGeometry(b.w, H, b.d), wallMat);
    m.position.set(b.x, H / 2, b.z);
    scene.add(m);
  }
  // Wall above the door
  const lintel = new Mesh(new BoxGeometry(2, H - 2.2, 0.2), wallMat);
  lintel.position.set(0, 2.2 + (H - 2.2) / 2, 0);
  scene.add(lintel);
  // Outside, seen through the door: snow and grey sky
  const outside = new Mesh(new PlaneGeometry(6, 4), new MeshBasicMaterial({ color: opts.night ? 0x1a2433 : 0xdfe6ec }));
  outside.position.set(0, 2, 2.5);
  outside.rotation.y = Math.PI;
  scene.add(outside);
  const snow = new Mesh(new PlaneGeometry(6, 3), new MeshBasicMaterial({ color: opts.night ? 0x3a4656 : 0xf4f6f8 }));
  snow.rotation.x = -Math.PI / 2;
  snow.position.set(0, 0.01, 1.4);
  scene.add(snow);
  // Store windows along the front
  if (plan.windows === 'front') {
    const glass = new MeshBasicMaterial({ color: opts.night ? 0x16202c : 0xc5d3de, transparent: true, opacity: 0.85 });
    for (const side of [-1, 1]) {
      const ww = W / 2 - 2;
      const g = new Mesh(new PlaneGeometry(ww, 1.8), glass);
      g.position.set(side * (1 + ww / 2 + 0.5), 1.6, -0.12);
      scene.add(g);
    }
  }

  // ---------- fixtures ----------
  const matCache = {};
  const mat = (type) => (matCache[type] ||= new MeshStandardMaterial({ color: FIXTURE_COLORS[type] ?? 0x888888, roughness: 0.8, metalness: type === 'shelf' || type === 'gate' || type === 'locker' ? 0.35 : 0.05 }));
  const shelfSlots = []; // places for products: {x,y,z,zone}
  let gateMesh = null;
  for (const f of plan.fixtures) {
    if (f.type === 'gate') {
      const g = new Group();
      const bars = Math.floor(f.w / 0.15);
      for (let i = 0; i <= bars; i++) {
        const b = new Mesh(new BoxGeometry(0.03, f.h, 0.03), mat('gate'));
        b.position.set(f.x - f.w / 2 + i * 0.15, f.h / 2, f.z);
        g.add(b);
      }
      gateMesh = g;
      g.visible = !opts.counterOpen;
      scene.add(g);
      continue;
    }
    if (f.type === 'shelf' || f.type === 'rack' || f.type === 'clothes') {
      const g = buildShelf(f, mat(f.type));
      if (f.tipped) {
        // A shelf that leans on its neighbor. Its goods are on the floor.
        g.rotation.z = 0.16 * (f.x > 0 ? 1 : -1);
        for (let i = 0; i < 14; i++) {
          const m = new Mesh(new BoxGeometry(0.22, 0.26, 0.24), new MeshStandardMaterial({ color: PRODUCT_COLORS[i % PRODUCT_COLORS.length], roughness: 0.7 }));
          m.position.set(f.x + (i % 2 ? 1 : -1) * (0.7 + (i % 3) * 0.25), 0.12, f.z - f.d / 2 + ((i * 7) % 13) / 13 * f.d);
          m.rotation.set(0, i, i % 2 ? Math.PI / 2 : 0);
          scene.add(m);
        }
      }
      scene.add(g);
      if (!f.tipped) {
        // Products on both faces; each face belongs to the aisle on that side.
        const levels = f.type === 'clothes' ? [1.25] : [0.25, 0.75, 1.25, 1.7];
        for (const lvl of levels) {
          for (let zz = -f.d / 2 + 0.3; zz < f.d / 2 - 0.2; zz += 0.34) {
            for (const side of [-1, 1]) {
              const zone = side < 0 ? f.leftZone : f.rightZone;
              if (zone == null) continue;
              shelfSlots.push({ x: f.x + side * 0.27, y: lvl, z: f.z + zz, zone, clothes: f.type === 'clothes' });
            }
          }
        }
      }
      continue;
    }
    if (f.type === 'bed') {
      const g = new Group();
      const frame = new Mesh(new BoxGeometry(f.d, 0.45, f.w), mat('bed'));
      frame.position.y = 0.225;
      const mattress = new Mesh(new BoxGeometry(f.d * 0.95, 0.15, f.w * 0.95), new MeshStandardMaterial({ color: 0xd6d8d2, roughness: 1 }));
      mattress.position.y = 0.52;
      g.add(frame, mattress);
      g.position.set(f.x, 0, f.z);
      g.rotation.y = Math.PI / 2;
      scene.add(g);
      continue;
    }
    const m = new Mesh(new BoxGeometry(f.w, f.h, f.d), mat(f.type));
    m.position.set(f.x, f.h / 2, f.z);
    scene.add(m);
    if (f.type === 'coolers') {
      const glass = new Mesh(new PlaneGeometry(f.w, f.h * 0.75), new MeshStandardMaterial({ color: 0x23302b, roughness: 0.2, metalness: 0.4 }));
      glass.position.set(f.x, f.h * 0.55, f.z + f.d / 2 + 0.01);
      scene.add(glass);
    }
  }

  // Products as one instanced mesh
  const prodGeo = new BoxGeometry(0.22, 0.26, 0.24);
  const prodMat = new MeshStandardMaterial({ roughness: 0.7 });
  const prods = new InstancedMesh(prodGeo, prodMat, Math.max(1, shelfSlots.length));
  const tmp = new Matrix4();
  const col = new Color();
  let seed = 11;
  const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  const slotFill = shelfSlots.map(() => rnd());
  shelfSlots.forEach((s, i) => {
    col.setHex(PRODUCT_COLORS[Math.floor(rnd() * PRODUCT_COLORS.length)]);
    if (s.clothes) col.multiplyScalar(0.7);
    prods.setColorAt(i, col);
  });
  scene.add(prods);
  function refreshProducts() {
    const stock = opts.stock;
    shelfSlots.forEach((s, i) => {
      const keep = opts.isDone(s.zone) ? stock * 0.12 : stock * 0.85;
      const on = slotFill[i] < keep;
      tmp.makeScale(on ? 1 : 0, on ? (s.clothes ? 3 : 1) : 0, on ? 1 : 0);
      tmp.setPosition(s.x, s.y + (s.clothes ? 0 : 0.13), s.z);
      prods.setMatrixAt(i, tmp);
    });
    prods.count = shelfSlots.length;
    prods.instanceMatrix.needsUpdate = true;
    if (prods.instanceColor) prods.instanceColor.needsUpdate = true;
  }
  refreshProducts();

  // ---------- debris, carts, bodies ----------
  const debrisMats = {
    box: new MeshStandardMaterial({ color: 0x9c7b52, roughness: 1 }),
    can: new MeshStandardMaterial({ color: 0x8c9196, roughness: 0.5, metalness: 0.5 }),
    paper: new MeshStandardMaterial({ color: 0xd9d6cc, roughness: 1, side: DoubleSide }),
    cart: new LineBasicMaterial({ color: 0x9da4aa }),
  };
  for (const d of plan.debris) {
    let m;
    if (d.kind === 'box') m = new Mesh(new BoxGeometry(d.s * 1.4, d.s, d.s), debrisMats.box);
    else if (d.kind === 'can') { m = new Mesh(new CylinderGeometry(0.04, 0.04, 0.12, 8), debrisMats.can); m.rotation.z = Math.PI / 2; }
    else if (d.kind === 'cart') {
      // A shopping cart: a wire basket on legs.
      m = new Group();
      const basket = new LineSegments(new EdgesGeometry(new BoxGeometry(0.55, 0.45, 0.85)), debrisMats.cart);
      basket.position.y = 0.2;
      m.add(basket);
      for (const [lx, lz] of [[-0.22, -0.35], [0.22, -0.35], [-0.22, 0.35], [0.22, 0.35]]) {
        const leg = new LineSegments(new EdgesGeometry(new BoxGeometry(0.02, 0.45, 0.02)), debrisMats.cart);
        leg.position.set(lx, -0.25, lz);
        m.add(leg);
      }
    }
    else { m = new Mesh(new PlaneGeometry(0.3, 0.22), debrisMats.paper); m.rotation.x = -Math.PI / 2; }
    m.position.set(d.x, d.kind === 'paper' ? 0.01 : d.kind === 'cart' ? 0.45 : (d.s || 0.1) / 2, d.z);
    m.rotation.y = d.rot || 0;
    scene.add(m);
  }
  // A body under a sheet: only a covered shape. Nothing more is shown.
  const sheetMat = new MeshStandardMaterial({ color: 0xcfd3cf, roughness: 1 });
  for (const b of plan.bodies) {
    const g = new Group();
    const torso = new Mesh(new BoxGeometry(0.42, 0.2, 1.3), sheetMat);
    torso.position.set(0, 0.1, 0.1);
    const head = new Mesh(new SphereGeometry(0.15, 10, 8), sheetMat);
    head.scale.set(1, 0.7, 1.1);
    head.position.set(0, 0.12, -0.72);
    g.add(torso, head);
    g.position.set(b.x, b.y || 0, b.z);
    g.rotation.y = (b.rot || 0) + Math.PI / 2;
    scene.add(g);
  }

  // ---------- spot markers ----------
  const ringGeo = new RingGeometry(0.32, 0.4, 32);
  const markers = plan.spots.map((s) => {
    const m = new Mesh(ringGeo, new MeshBasicMaterial({ color: ACCENT, transparent: true, opacity: 0.7, side: DoubleSide, fog: false }));
    m.rotation.x = -Math.PI / 2;
    m.position.set(s.x, 0.02, s.z);
    scene.add(m);
    return { s, m };
  });
  function refreshMarkers() {
    for (const { s, m } of markers) {
      const done = opts.isDone(s.zone);
      m.material.color.setHex(done ? 0x55606a : ACCENT);
      m.material.opacity = done ? 0.35 : 0.75;
    }
  }
  refreshMarkers();

  // ---------- player ----------
  const pos = { x: plan.start.x, z: plan.start.z };
  let yaw = plan.start.yaw || 0;
  let pitch = 0;
  const keys = new Set();
  let paused = false;
  let busy = false; // searching
  let closed = false;
  let walked = 0;
  let current = null;
  const stick = { x: 0, y: 0, id: null, ox: 0, oy: 0 };
  let lookId = null;
  let lookLast = null;
  let bob = 0;

  function resize() {
    const w = root.clientWidth;
    const h = root.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  resize();
  window.addEventListener('resize', resize);

  function status() {
    $('.in-status').innerHTML = opts.getStatus();
  }
  status();

  function toast(text, ms = 2600) {
    const t = $('.in-toast');
    t.textContent = text;
    t.hidden = false;
    clearTimeout(toast.h);
    toast.h = setTimeout(() => { t.hidden = true; }, ms);
  }

  function showFound(res) {
    const box = $('.in-found');
    if (!res) { box.hidden = true; return; }
    const list = res.items.length ? `<ul>${res.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>` : '<p class="hint">Nothing useful here.</p>';
    box.innerHTML = `<h4>${esc(res.title)}</h4>${list}
      <p class="hint">${esc(res.note || '')}</p>
      <div class="row">${res.canTake ? '<button class="primary" data-in="take">Take all that fits (T)</button>' : ''}<button data-in="close">Close</button></div>`;
    box.hidden = false;
  }

  // ---------- actions ----------
  function flushWalk() {
    if (walked > 0.5) opts.onWalk(walked);
    walked = 0;
  }

  async function use() {
    if (busy || paused || closed || !current) return;
    if (current.type === 'exit') { leave(); return; }
    const s = current;
    if (opts.isDone(s.zone)) { toast(`You already searched the ${s.label}.`); return; }
    if (s.counter && !opts.isCounterOpen()) {
      flushWalk();
      const r = opts.onCounter();
      if (gateMesh) gateMesh.visible = !opts.isCounterOpen();
      toast(r);
      afterGameStep();
      return;
    }
    busy = true;
    flushWalk();
    const bar = $('.in-bar');
    bar.hidden = false;
    const fill = bar.querySelector('i');
    fill.style.width = '0%';
    const t0 = performance.now();
    await new Promise((res) => {
      const step = () => {
        const k = Math.min(1, (performance.now() - t0) / 1100);
        fill.style.width = `${k * 100}%`;
        if (k < 1) requestAnimationFrame(step); else res();
      };
      step();
    });
    bar.hidden = true;
    const res = opts.onSearch(s.zone);
    busy = false;
    refreshProducts();
    refreshMarkers();
    if (res) showFound(res);
    afterGameStep();
  }

  function takeAll() {
    const msg = opts.onTakeAll();
    showFound(null);
    if (msg) toast(msg);
    afterGameStep();
  }

  function afterGameStep() {
    current = undefined; // redraw the prompt
    status();
    if (opts.isDead()) close(true);
  }

  function leave() {
    flushWalk();
    close(false);
  }

  function close(died) {
    if (closed) return;
    closed = true;
    if (document.pointerLockElement === canvas) document.exitPointerLock();
    window.removeEventListener('resize', resize);
    window.removeEventListener('keydown', onKey);
    window.removeEventListener('keyup', onKeyUp);
    document.removeEventListener('pointerlockchange', onLockChange);
    renderer.dispose();
    root.remove();
    opts.onLeave(!!died);
  }

  function setPaused(v) {
    paused = v;
    $('.in-pause').hidden = !v;
    if (v) keys.clear();
  }

  // ---------- input ----------
  function onKey(e) {
    if (closed) return;
    const k = e.key.toLowerCase();
    if (k === 'escape') {
      if (!$('.in-found').hidden) { showFound(null); return; }
      if (!document.pointerLockElement) setPaused(!paused);
      return;
    }
    if (paused) return;
    if (k === 'e' || k === ' ' || k === 'enter') { e.preventDefault(); use(); return; }
    if (k === 't' && !$('.in-found').hidden && $('[data-in="take"]')) { takeAll(); return; }
    keys.add(e.code);
    if (e.code.startsWith('Arrow')) e.preventDefault();
  }
  function onKeyUp(e) { keys.delete(e.code); }
  function onLockChange() {
    if (!document.pointerLockElement && !closed && !touch) setPaused(true);
  }
  window.addEventListener('keydown', onKey);
  window.addEventListener('keyup', onKeyUp);
  document.addEventListener('pointerlockchange', onLockChange);
  canvas.addEventListener('click', () => {
    if (!touch && !paused && canvas.requestPointerLock) {
      try { const p = canvas.requestPointerLock(); if (p && p.catch) p.catch(() => {}); } catch (err) { /* no lock: drag to look */ }
    }
  });
  canvas.addEventListener('mousemove', (e) => {
    if (paused) return;
    if (document.pointerLockElement === canvas || e.buttons === 1) look(e.movementX, e.movementY);
  });
  function look(dx, dy) {
    yaw -= dx * 0.0024;
    pitch = Math.max(-1.3, Math.min(1.3, pitch - dy * 0.0024));
  }
  root.addEventListener('click', (e) => {
    const b = e.target.closest('[data-in]');
    if (!b) return;
    const what = b.dataset.in;
    if (what === 'resume') { setPaused(false); if (!touch) canvas.requestPointerLock?.(); }
    else if (what === 'leave') leave();
    else if (what === 'take') takeAll();
    else if (what === 'close') showFound(null);
  });
  $('.in-use').addEventListener('click', use);
  $('.in-menu').addEventListener('click', () => setPaused(true));
  // Touch: left half moves (virtual stick), right half looks.
  canvas.addEventListener('touchstart', (e) => {
    for (const t of e.changedTouches) {
      if (t.clientX < root.clientWidth / 2 && stick.id === null) {
        stick.id = t.identifier; stick.ox = t.clientX; stick.oy = t.clientY;
        const el = $('.in-stick');
        el.style.left = `${t.clientX - 50}px`; el.style.top = `${t.clientY - 50}px`; el.classList.add('on');
      } else if (lookId === null) { lookId = t.identifier; lookLast = { x: t.clientX, y: t.clientY }; }
    }
    e.preventDefault();
  }, { passive: false });
  canvas.addEventListener('touchmove', (e) => {
    for (const t of e.changedTouches) {
      if (t.identifier === stick.id) {
        const dx = t.clientX - stick.ox;
        const dy = t.clientY - stick.oy;
        const len = Math.min(45, Math.hypot(dx, dy));
        const a = Math.atan2(dy, dx);
        stick.x = (Math.cos(a) * len) / 45;
        stick.y = (Math.sin(a) * len) / 45;
        $('.in-stick i').style.transform = `translate(${stick.x * 30}px, ${stick.y * 30}px)`;
      } else if (t.identifier === lookId) {
        look((t.clientX - lookLast.x) * 1.6, (t.clientY - lookLast.y) * 1.6);
        lookLast = { x: t.clientX, y: t.clientY };
      }
    }
    e.preventDefault();
  }, { passive: false });
  const endTouch = (e) => {
    for (const t of e.changedTouches) {
      if (t.identifier === stick.id) {
        stick.id = null; stick.x = stick.y = 0;
        $('.in-stick').classList.remove('on');
        $('.in-stick i').style.transform = '';
      } else if (t.identifier === lookId) lookId = null;
    }
  };
  canvas.addEventListener('touchend', endTouch);
  canvas.addEventListener('touchcancel', endTouch);

  // ---------- loop ----------
  let last = performance.now();
  const fwd = new Vector3();
  function frame(now) {
    if (closed) return;
    const dt = Math.min(0.1, (now - last) / 1000);
    last = now;
    if (!paused && !busy) {
      let mx = 0;
      let mz = 0;
      if (keys.has('KeyW') || keys.has('ArrowUp')) mz -= 1;
      if (keys.has('KeyS') || keys.has('ArrowDown')) mz += 1;
      if (keys.has('KeyA') || keys.has('ArrowLeft')) mx -= 1;
      if (keys.has('KeyD') || keys.has('ArrowRight')) mx += 1;
      mx += stick.x;
      mz += stick.y;
      const len = Math.hypot(mx, mz);
      if (len > 0.05) {
        const sp = (keys.has('ShiftLeft') || keys.has('ShiftRight') ? RUN_SPEED : WALK_SPEED) * Math.min(1, len) / len;
        const sx = (mx * Math.cos(yaw) + mz * Math.sin(yaw)) * sp * dt;
        const sz = (-mx * Math.sin(yaw) + mz * Math.cos(yaw)) * sp * dt;
        const next = collide(plan, pos.x + sx, pos.z + sz, 0.3, { counter: opts.isCounterOpen() });
        // Do not walk out of the door: use the exit spot.
        next.z = Math.min(next.z, 0.2);
        const moved = Math.hypot(next.x - pos.x, next.z - pos.z);
        walked += moved;
        bob += moved * 3.2;
        pos.x = next.x;
        pos.z = next.z;
        if (walked >= WALK_FLUSH_M) { flushWalk(); status(); if (opts.isDead()) { close(true); return; } }
      }
    }
    camera.position.set(pos.x, EYE + Math.sin(bob) * 0.03, pos.z);
    camera.rotation.order = 'YXZ';
    camera.rotation.set(pitch, yaw, 0);
    camera.getWorldDirection(fwd);
    // What can the player use now?
    const n = nearestSpot(plan, pos.x, pos.z, yaw);
    const key = n ? `${n.type}:${n.zone}` : '';
    if (current === undefined || key !== (current ? `${current.type}:${current.zone}` : '') || frame.n++ % 20 === 0) {
      current = n;
      const p = $('.in-prompt');
      if (!n) p.hidden = true;
      else {
        p.hidden = false;
        p.innerHTML = opts.describe(n);
      }
    }
    renderer.render(scene, camera);
    requestAnimationFrame(frame);
  }
  frame.n = 0;
  requestAnimationFrame(frame);
  // For automated tests: move the player.
  window.__llInside = { plan, pos, look: (y, p = 0) => { yaw = y; pitch = p; } };

  return { close: () => leave() };
}

// A shelf unit: uprights, boards, and a back panel.
function buildShelf(f, material) {
  const g = new Group();
  if (f.type === 'clothes') {
    const bar = new Mesh(new BoxGeometry(0.05, 0.05, f.d), material);
    bar.position.y = f.h;
    g.add(bar);
    for (const z of [-f.d / 2 + 0.1, f.d / 2 - 0.1]) {
      const leg = new Mesh(new BoxGeometry(0.06, f.h, 0.06), material);
      leg.position.set(0, f.h / 2, z);
      g.add(leg);
    }
  } else {
    const back = new Mesh(new BoxGeometry(0.06, f.h, f.d), material);
    back.position.y = f.h / 2;
    g.add(back);
    for (const y of [0.1, 0.6, 1.1, 1.55, 1.98]) {
      const board = new Mesh(new BoxGeometry(f.w, 0.04, f.d), material);
      board.position.y = y;
      g.add(board);
    }
    for (const z of [-f.d / 2, f.d / 2]) {
      const end = new Mesh(new BoxGeometry(f.w, f.h, 0.05), material);
      end.position.set(0, f.h / 2, z);
      g.add(end);
    }
  }
  g.position.set(f.x, 0, f.z);
  return g;
}

window.LLInside3D = { openInside };
