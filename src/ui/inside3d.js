// First-person view inside a building (three.js). Built as its own file (docs/inside3d.js)
// and loaded only when the player walks inside. It draws a floor plan from
// src/engine/interior.js. All game rules stay in the engine: this file calls back to app.js.
import {
  WebGLRenderer, Scene, PerspectiveCamera, Color, FogExp2, HemisphereLight, AmbientLight, PointLight, SpotLight,
  Object3D, Mesh, InstancedMesh, BoxGeometry, PlaneGeometry, RingGeometry, CylinderGeometry, SphereGeometry,
  MeshStandardMaterial, MeshBasicMaterial, CanvasTexture, RepeatWrapping, SRGBColorSpace, DoubleSide,
  Vector3, Matrix4, Group, LineSegments, EdgesGeometry, LineBasicMaterial, Raycaster, Plane, Vector2, Box3,
} from 'three';
import { collide, nearestSpot, solidBoxes } from '../engine/interior.js';
import { hashString, mulberry32 } from '../rng.js';
import {
  KEYS, keyFor, STANCES, JUMP_SPEED, GRAVITY, HOLD_SEARCH_MS, moveSpeed, nextStance,
} from './controls.js';

const ACCENT = 0x6fd3e6;
const IS_MAC = typeof navigator !== 'undefined' && /Mac/.test(navigator.platform || '');
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
    <div class="in-stance" hidden></div>
    <div class="in-debug" hidden></div>
    <div class="in-panel corners" hidden></div>
    <div class="in-help">WASD: walk · Space: jump · Shift: sprint · Ctrl: crouch · <b>E</b>: take · Hold E: take all near · L: light · Tab: bag · M: map · <b>Esc</b>: all keys</div>
    <div class="in-touch">
      <div class="in-stick"><i></i></div>
      <button class="in-use" type="button">USE</button>
      <div class="in-tbtns">
        <button type="button" data-tk="jump">JUMP</button>
        <button type="button" data-tk="stance">CROUCH</button>
        <button type="button" data-tk="flashlight">LIGHT</button>
        <button type="button" data-tk="inventory">BAG</button>
        <button type="button" data-tk="map">MAP</button>
      </div>
      <button class="in-menu" type="button">☰</button>
    </div>
    <div class="in-pause" hidden>
      <div class="box corners">
        <h3>${esc(opts.title)}</h3>
        <p class="hint">Game time moves only when you walk or search. It is stopped now.</p>
        <div class="row"><button class="primary" data-in="resume">Resume</button>
        <button data-in="leave">Leave the building</button></div>
        <h4>Keys</h4>
        <div class="in-keys">${keyTableHtml()}</div>
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
  const bg = dark ? 0x05070a : 0x2a3138;
  scene.background = new Color(bg);
  scene.fog = new FogExp2(bg, 0.035);

  // Light
  let darkAmb = null;
  let darkHemi = null;
  if (dark) {
    darkAmb = new AmbientLight(0x8fa4b8, 0.28);
    darkHemi = new HemisphereLight(0xb8c8d8, 0x202020, 0.25);
    scene.add(darkAmb, darkHemi);
  } else {
    scene.add(new HemisphereLight(0xdfe8f0, 0x3a3630, 1.3));
    scene.add(new AmbientLight(0xffffff, 0.25));
  }
  // Grey daylight from the open door
  const doorLight = new PointLight(opts.night ? 0x6b7d99 : 0xe8f0ff, opts.night ? 4 : 18, 14, 1.6);
  doorLight.position.set(0, 2.2, -0.6);
  scene.add(doorLight);
  let flash = null;
  if (opts.hasFlashlight()) {
    flash = new SpotLight(0xfff3dd, 38, 24, 0.5, 0.45, 1.4);
    flash.position.set(0.15, -0.15, 0);
    camera.add(flash);
    const tgt = new Object3D();
    tgt.position.set(0, -0.25, -3);
    camera.add(tgt);
    flash.target = tgt;
  }
  // The flashlight beam follows the game: on, off, or empty batteries.
  function applyLight() {
    const on = !!flash && opts.isLightOn();
    if (flash) flash.visible = on;
    if (dark) {
      darkAmb.intensity = on ? 0.08 : 0.28;
      darkHemi.intensity = on ? 0.12 : 0.25;
      scene.fog.density = on ? 0.07 : 0.11;
    }
  }
  applyLight();

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

  // ---------- items to pick up ----------
  // Each item from the engine gets a place: on a shelf face in its aisle, or on furniture / the floor in its room.
  const itemObjs = new Map(); // pid -> { it, obj, x, y, z }
  const solidNow = () => solidBoxes(plan, { counter: true });
  function placeFor(it) {
    const r = mulberry32(hashString(`place:${it.pid}:${opts.title}`));
    const spot = plan.spots.find((p) => p.zone === it.zone);
    if (!spot) return { x: 0, y: 0, z: -1 };
    if (spot.counter) {
      const c = plan.fixtures.find((f) => f.type === 'rx_counter');
      return { x: c.x + (r() - 0.5) * (c.w - 1), y: c.h, z: c.z + (r() - 0.5) * 0.4 };
    }
    const a = spot.area;
    if (plan.kind === 'hall') {
      if (r() < 0.2) return { x: spot.x + (r() - 0.5) * 1.2, y: 0, z: a.z1 + 1 + r() * (a.z2 - a.z1 - 2) };
      const side = r() < 0.5 ? -1 : 1;
      const levels = [0.12, 0.62, 1.12, 1.57];
      return { x: spot.x + side * ((a.x2 - a.x1) / 2 - 0.16), y: levels[Math.floor(r() * levels.length)], z: a.z1 + 1 + r() * (a.z2 - a.z1 - 2) };
    }
    // Rooms: on low furniture of this room, else on the floor.
    const low = plan.fixtures.filter((f) => f.zone === it.zone && f.solid && f.h <= 1.2 && f.type !== 'tub');
    if (low.length && r() < 0.7) {
      const f = low[Math.floor(r() * low.length)];
      const w = f.type === 'bed' ? f.d : f.w;
      const d = f.type === 'bed' ? f.w : f.d;
      return { x: f.x + (r() - 0.5) * Math.max(0, w - 0.4), y: f.h + (f.type === 'bed' ? 0.15 : 0), z: f.z + (r() - 0.5) * Math.max(0, d - 0.4) };
    }
    const boxes = solidNow();
    for (let i = 0; i < 12; i++) {
      const x = a.x1 + 0.5 + r() * (a.x2 - a.x1 - 1);
      const z = a.z1 + 0.5 + r() * (a.z2 - a.z1 - 1);
      if (!boxes.some((b) => Math.abs(x - b.x) < b.w / 2 + 0.2 && Math.abs(z - b.z) < b.d / 2 + 0.2)) return { x, y: 0, z };
    }
    return { x: spot.x, y: 0, z: spot.z };
  }
  function addItems() {
    for (const it of opts.items()) {
      if (itemObjs.has(it.pid)) continue;
      const p = placeFor(it);
      const obj = itemModel(it.item, hashString(it.pid));
      obj.position.set(p.x, p.y, p.z);
      obj.rotation.y = (hashString(it.pid) % 628) / 100;
      // Loot is a little brighter than the room, so the eye finds it.
      obj.traverse((m) => { if (m.isMesh && m.material && m.material.emissive) { m.material = m.material.clone(); m.material.emissive.setHex(0x222222); } });
      scene.add(obj);
      const h = obj.userData.height || 0.2;
      itemObjs.set(it.pid, { it, obj, x: p.x, y: p.y + h / 2, z: p.z, r: obj.userData.radius || 0.15 });
    }
  }
  addItems();
  function removeItem(pid) {
    const o = itemObjs.get(pid);
    if (!o) return;
    scene.remove(o.obj);
    itemObjs.delete(pid);
  }
  // Thin box around the item you look at.
  const hiMat = new LineBasicMaterial({ color: ACCENT, transparent: true, opacity: 0.9, depthTest: false });
  const hiBox = new LineSegments(new EdgesGeometry(new BoxGeometry(1, 1, 1)), hiMat);
  hiBox.renderOrder = 10;
  hiBox.visible = false;
  scene.add(hiBox);
  const REACH = 2.3;
  function itemsInReach(from) {
    const out = [];
    for (const o of itemObjs.values()) {
      const d = Math.hypot(o.x - from.x, o.y - from.y, o.z - from.z);
      if (d <= REACH) out.push({ o, d });
    }
    return out.sort((a, b) => a.d - b.d);
  }
  // The item nearest to the centre of the view, inside reach.
  function lookTarget(from, dir) {
    let best = null;
    for (const { o, d } of itemsInReach(from)) {
      const vx = o.x - from.x;
      const vy = o.y - from.y;
      const vz = o.z - from.z;
      const cos = (vx * dir.x + vy * dir.y + vz * dir.z) / Math.max(1e-6, d);
      const ang = Math.acos(Math.min(1, cos));
      const allow = Math.atan2(o.r + 0.12, d); // easier to hit when near
      if (ang > Math.max(allow, 0.09)) continue;
      if (!best || ang < best.ang) best = { o, ang, d };
    }
    return best ? best.o : null;
  }

  // ---------- player ----------
  const pos = { x: plan.start.x, z: plan.start.z };
  let yaw = plan.start.yaw || 0;
  let pitch = 0;
  let feet = 0; // height of the feet above the floor (jumps)
  let vy = 0;
  let stance = 'stand';
  let crouchHeld = false;
  let slowWalk = false;
  let aiming = false;
  let eye = STANCES.stand.eye;
  const keys = new Set();
  let paused = false;
  let busy = false; // searching
  let closed = false;
  let walked = 0;
  let current = null;
  let panel = null; // name of the open panel
  let debugOn = false;
  let fps = 0;
  const stick = { x: 0, y: 0, id: null, ox: 0, oy: 0 };
  let lookId = null;
  let lookLast = null;
  let bob = 0;
  let hold = null; // { what: 'search', t0, raf, cancel }
  let eDown = 0;

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
      <div class="row">${res.canTake ? '<button class="primary" data-in="take">Take all that fits (F)</button>' : ''}<button data-in="close">Close</button></div>`;
    box.hidden = false;
  }
  const foundOpen = () => !$('.in-found').hidden;

  function showStance() {
    const el = $('.in-stance');
    const words = [];
    if (stance !== 'stand') words.push(stance === 'crouch' ? 'Crouching' : 'Prone');
    if (slowWalk && stance === 'stand') words.push('Slow walk');
    if (aiming) words.push('Looking closer');
    el.hidden = !words.length;
    el.textContent = words.join(' · ');
  }

  // ---------- panels (inventory, character, map, journal) ----------
  function openPanel(name) {
    const el = $('.in-panel');
    if (panel === name) { closePanel(); return; }
    let html;
    if (name === 'map') html = mapHtml();
    else html = opts.panel(name);
    if (!html) return;
    panel = name;
    keys.clear();
    el.innerHTML = `${html}<div class="row"><button data-in="closepanel">Close</button></div>`;
    el.hidden = false;
    if (document.pointerLockElement === canvas) document.exitPointerLock();
  }
  function closePanel() {
    panel = null;
    $('.in-panel').hidden = true;
  }
  function refreshPanel() {
    if (panel && panel !== 'map') {
      const name = panel;
      panel = null;
      openPanel(name);
    }
  }

  // Floor plan seen from above, with you and the search spots.
  function mapHtml() {
    const pad = 1;
    const vw = W + pad * 2;
    const vh = D + pad * 2 + 1.5;
    const tx = (x) => (x + W / 2 + pad).toFixed(2);
    const tz = (z) => (z + D + pad).toFixed(2); // door at the bottom
    const rect = (b, cls) => `<rect class="${cls}" x="${tx(b.x - b.w / 2)}" y="${tz(b.z - b.d / 2)}" width="${b.w.toFixed(2)}" height="${b.d.toFixed(2)}"/>`;
    const walls = plan.walls.map((b) => rect(b, 'w')).join('');
    const fix = plan.fixtures.filter((f) => f.type !== 'gate').map((f) => rect(f, 'f')).join('');
    const spots = plan.spots.map((sp) => `<circle class="${opts.isDone(sp.zone) ? 'sd' : 's'}" cx="${tx(sp.x)}" cy="${tz(sp.z)}" r="0.45"/>`).join('');
    const pings = pingList.map((p) => `<circle class="pg" cx="${tx(p.x)}" cy="${tz(p.z)}" r="0.3"/>`).join('');
    const ax = Math.sin(yaw);
    const az = Math.cos(yaw);
    const px = +tx(pos.x);
    const pz = +tz(pos.z);
    const tip = `${(px - ax * 0.9).toFixed(2)},${(pz - az * 0.9).toFixed(2)}`;
    const l = `${(px - az * 0.45).toFixed(2)},${(pz + ax * 0.45).toFixed(2)}`;
    const r = `${(px + az * 0.45).toFixed(2)},${(pz - ax * 0.45).toFixed(2)}`;
    return `<h4>Floor plan</h4>
      <svg class="in-map" viewBox="0 0 ${vw.toFixed(1)} ${vh.toFixed(1)}">${fix}${walls}${spots}${pings}
        <polygon class="me" points="${tip} ${l} ${r}"/>
        <text x="${tx(0)}" y="${(D + pad + 1.2).toFixed(1)}" text-anchor="middle">Door</text></svg>
      <p class="hint">Blue: not searched. Grey: searched. Triangle: you.</p>`;
  }

  // ---------- actions ----------
  function flushWalk() {
    if (walked > 0.5) opts.onWalk(walked);
    walked = 0;
  }

  let target = null; // item you look at
  let lastKey = '';
  const seenZones = new Set();
  const hiSize = new Vector3();
  const hiCenter = new Vector3();

  function pickOne(o) {
    if (!o) return false;
    flushWalk();
    const res = opts.onPickUp(o.it.pid);
    if (res.ok) {
      removeItem(o.it.pid);
      toast(`Taken: ${res.name}`, 1400);
    } else if (res.msg) toast(res.msg, 2400);
    refreshProducts();
    afterGameStep();
    refreshPanel();
    return res.ok;
  }

  // Tap E: take the item you look at; else doors and gates.
  function interact() {
    if (busy || paused || closed) return;
    if (target) { pickOne(target); return; }
    if (!current) { toast('Look at an item to take it.', 1400); return; }
    if (current.type === 'exit') { leave(); return; }
    if (current.counter && !opts.isCounterOpen()) { openGate(); return; }
    toast('Look at an item to take it.', 1400);
  }

  function openGate() {
    flushWalk();
    const r = opts.onCounter();
    if (gateMesh) gateMesh.visible = !opts.isCounterOpen();
    toast(r);
    afterGameStep();
  }

  // Hold E or F: take everything within reach (a short bar first).
  function startHold() {
    if (busy || paused || closed || hold) return false;
    const near = itemsInReach(camera.position);
    if (!near.length) return false;
    const bar = $('.in-bar');
    const fill = bar.querySelector('i');
    bar.hidden = false;
    fill.style.width = '0%';
    hold = { t0: performance.now(), n: near.length };
    const step = () => {
      if (!hold) return;
      const k = Math.min(1, (performance.now() - hold.t0) / HOLD_SEARCH_MS);
      fill.style.width = `${k * 100}%`;
      if (k < 1) { hold.raf = requestAnimationFrame(step); return; }
      hold = null;
      bar.hidden = true;
      takeAllInReach();
    };
    step();
    return true;
  }
  function cancelHold() {
    if (!hold) return;
    cancelAnimationFrame(hold.raf);
    hold = null;
    $('.in-bar').hidden = true;
  }

  function takeAllInReach() {
    busy = true;
    flushWalk();
    let n = 0;
    let stop = '';
    for (const { o } of itemsInReach(camera.position)) {
      const res = opts.onPickUp(o.it.pid);
      if (!res.ok) { stop = res.msg || ''; if (opts.isDead()) break; continue; }
      removeItem(o.it.pid);
      n += 1;
    }
    busy = false;
    toast(n ? `You take ${n} item${n > 1 ? 's' : ''}.${stop ? ' ' + stop : ''}` : stop || 'Nothing to take.', 2600);
    refreshProducts();
    afterGameStep();
    refreshPanel();
  }

  function takeAll() {
    const msg = opts.onTakeAll();
    showFound(null);
    if (msg) toast(msg);
    afterGameStep();
    refreshPanel();
  }

  // F: the one thing that makes sense here.
  function context() {
    if (foundOpen() && $('[data-in="take"]')) { takeAll(); return; }
    if (target) { pickOne(target); return; }
    if (opts.hasLoot()) { takeAll(); return; }
    if (current && current.type === 'exit') { leave(); return; }
    if (current && current.counter && !opts.isCounterOpen()) { openGate(); return; }
    toast('Nothing to take here.', 1500);
  }

  function toggleLight() {
    if (!opts.hasFlashlight()) { toast('You have no flashlight.'); return; }
    const msg = opts.toggleLight();
    applyLight();
    status();
    if (msg) toast(msg, 1800);
  }

  function quick(action) {
    const msg = opts.quickUse(action);
    if (msg) toast(msg, 3200);
    afterGameStep();
    applyLight();
    refreshPanel();
  }

  function notYet(k) {
    const now = performance.now();
    if (notYet.last && now - notYet.last < 700) return;
    notYet.last = now;
    toast(`${k.label}: not yet in the game.`, 1800);
  }

  // Middle mouse: put a mark on the floor where you look.
  const pingList = [];
  const ray = new Raycaster();
  const floorPlane = new Plane(new Vector3(0, 1, 0), 0);
  const pingGeo = new RingGeometry(0.15, 0.24, 24);
  function ping() {
    ray.setFromCamera(new Vector2(0, 0), camera);
    const hit = new Vector3();
    if (!ray.ray.intersectPlane(floorPlane, hit) || hit.distanceTo(camera.position) > 25) { toast('Look at the floor to mark it.', 1500); return; }
    const m = new Mesh(pingGeo, new MeshBasicMaterial({ color: 0xe9cf96, side: DoubleSide, fog: false }));
    m.rotation.x = -Math.PI / 2;
    m.position.set(hit.x, 0.03, hit.z);
    scene.add(m);
    pingList.push({ x: hit.x, z: hit.z, m });
    if (pingList.length > 5) scene.remove(pingList.shift().m);
    toast('Marked.', 900);
  }

  function jump() {
    if (feet > 0.001 || vy !== 0) return;
    if (stance !== 'stand') { stance = 'stand'; crouchHeld = false; showStance(); return; }
    vy = JUMP_SPEED;
  }

  function quickSave() {
    flushWalk();
    toast(opts.quickSave(), 1800);
  }
  function quickLoad() {
    flushWalk();
    if (!opts.canQuickLoad()) { toast('There is no save to load.'); return; }
    close(false, 'quickload');
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

  function close(died, why) {
    if (closed) return;
    closed = true;
    cancelHold();
    if (document.pointerLockElement === canvas) document.exitPointerLock();
    window.removeEventListener('resize', resize);
    window.removeEventListener('keydown', onKey, true);
    window.removeEventListener('keyup', onKeyUp, true);
    window.removeEventListener('blur', onBlur);
    document.removeEventListener('pointerlockchange', onLockChange);
    renderer.dispose();
    root.remove();
    opts.onLeave(!!died, why);
  }

  function setPaused(v) {
    paused = v;
    $('.in-pause').hidden = !v;
    if (v) { keys.clear(); cancelHold(); aiming = false; }
  }

  // One action from the key table.
  function run(k, e) {
    switch (k.action) {
      case 'jump': return jump();
      case 'stance': stance = nextStance(stance); crouchHeld = false; return showStance();
      case 'walktoggle': slowWalk = !slowWalk; return showStance();
      case 'interact': return null; // handled by keydown / keyup (tap or hold)
      case 'context': return context();
      case 'flashlight': return toggleLight();
      case 'inventory': case 'character': case 'map': case 'journal': case 'objectives': return openPanel(k.action);
      case 'quick_med': case 'quick_food': case 'quick_utility': return quick(k.action);
      case 'confirm':
        if (foundOpen() && $('[data-in="take"]')) return takeAll();
        if (panel) return closePanel();
        return interact();
      case 'quicksave': return quickSave();
      case 'quickload': return quickLoad();
      case 'debug': debugOn = !debugOn; $('.in-debug').hidden = !debugOn; return null;
      case 'ping': return ping();
      default:
        if (!k.ready) notYet(k);
        return null;
    }
  }

  // ---------- input ----------
  const HELD = new Set(['move', 'sprint', 'crouch']);
  function onKey(e) {
    if (closed) return;
    const code = e.code;
    // Keys that the browser would use for something else.
    if (['Tab', 'F5', 'F9', 'Space', 'Backquote', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(code) || (e.ctrlKey && code !== 'KeyW')) e.preventDefault();
    if (code === 'Escape') {
      if (foundOpen()) { showFound(null); return; }
      if (panel) { closePanel(); return; }
      if (!document.pointerLockElement) setPaused(!paused);
      return;
    }
    if (paused) {
      if (code === 'Enter') setPaused(false);
      return;
    }
    if (code === 'CapsLock') { slowWalk = !slowWalk; showStance(); return; }
    const k = keyFor(code) || (code.startsWith('Arrow') ? { action: 'move' } : null);
    if (!k) return;
    if (panel && !['inventory', 'character', 'map', 'journal', 'objectives', 'pause', 'quicksave', 'quickload', 'confirm'].includes(k.action) && !k.action.startsWith('quick')) return;
    if (HELD.has(k.action)) {
      keys.add(code);
      if (k.action === 'crouch' && !e.repeat) { crouchHeld = true; if (stance === 'stand') stance = 'crouch'; showStance(); }
      return;
    }
    if (e.repeat) return;
    if (k.action === 'interact' || k.action === 'context') {
      eDown = performance.now();
      // Hold E or F: take everything in reach after a short bar.
      startHold();
      return;
    }
    run(k, e);
  }
  function onKeyUp(e) {
    keys.delete(e.code);
    // On a Mac, Caps Lock sends keydown when it goes on and keyup when it goes off.
    if (e.code === 'CapsLock' && IS_MAC) { slowWalk = false; showStance(); return; }
    const k = keyFor(e.code);
    if (!k) return;
    if (k.action === 'crouch' && crouchHeld) { crouchHeld = false; if (stance === 'crouch') stance = 'stand'; showStance(); }
    if ((k.action === 'interact' || k.action === 'context') && eDown) {
      const short = performance.now() - eDown < 300;
      eDown = 0;
      if (hold) cancelHold();
      if (short && !paused && !panel) { if (k.action === 'interact') interact(); else context(); }
    }
  }
  function onBlur() { keys.clear(); cancelHold(); }
  function onLockChange() {
    if (!document.pointerLockElement && !closed && !touch && !panel && !foundOpen()) setPaused(true);
  }
  window.addEventListener('keydown', onKey, true);
  window.addEventListener('keyup', onKeyUp, true);
  window.addEventListener('blur', onBlur);
  document.addEventListener('pointerlockchange', onLockChange);
  function lock() {
    if (touch || paused || panel || !canvas.requestPointerLock) return;
    try { const p = canvas.requestPointerLock(); if (p && p.catch) p.catch(() => {}); } catch (err) { /* no lock: drag to look */ }
  }
  canvas.addEventListener('contextmenu', (e) => e.preventDefault());
  canvas.addEventListener('mousedown', (e) => {
    if (paused || touch) return;
    const locked = document.pointerLockElement === canvas;
    if (e.button === 1) { e.preventDefault(); run(keyFor('Mouse1')); return; }
    if (e.button === 2) { aiming = true; showStance(); return; }
    if (e.button === 0) {
      if (!locked) { lock(); return; }
      run(keyFor('Mouse0'));
    }
  });
  window.addEventListener('mouseup', (e) => { if (e.button === 2 && aiming) { aiming = false; showStance(); } });
  canvas.addEventListener('wheel', (e) => { e.preventDefault(); if (!paused) run(keyFor('Wheel')); }, { passive: false });
  canvas.addEventListener('mousemove', (e) => {
    if (paused) return;
    if (document.pointerLockElement === canvas || e.buttons === 1) look(e.movementX, e.movementY);
  });
  function look(dx, dy) {
    const k = aiming ? 0.45 : 1;
    yaw -= dx * 0.0024 * k;
    pitch = Math.max(-1.3, Math.min(1.3, pitch - dy * 0.0024 * k));
  }
  root.addEventListener('click', (e) => {
    const b = e.target.closest('[data-in],[data-use],[data-tk]');
    if (!b) return;
    if (b.dataset.use) { toast(opts.useItem(b.dataset.use, b.dataset.verb) || '', 3000); afterGameStep(); applyLight(); refreshPanel(); return; }
    if (b.dataset.tk) {
      const k = KEYS.find((x) => x.action === b.dataset.tk);
      if (k.action === 'stance') { stance = nextStance(stance); showStance(); b.textContent = stance === 'stand' ? 'CROUCH' : stance === 'crouch' ? 'PRONE' : 'STAND'; return; }
      run(k);
      return;
    }
    const what = b.dataset.in;
    if (what === 'resume') { setPaused(false); lock(); }
    else if (what === 'leave') leave();
    else if (what === 'take') takeAll();
    else if (what === 'close') showFound(null);
    else if (what === 'closepanel') closePanel();
  });
  // USE button: tap to take the item you look at (or doors), hold to take all in reach.
  const useBtn = $('.in-use');
  useBtn.addEventListener('pointerdown', (e) => { e.preventDefault(); eDown = performance.now(); startHold(); });
  const useUp = () => {
    if (!eDown) return;
    const short = performance.now() - eDown < 300;
    eDown = 0;
    if (hold) cancelHold();
    if (short) {
      if (foundOpen() && $('[data-in="take"]')) takeAll();
      else interact();
    }
  };
  useBtn.addEventListener('pointerup', useUp);
  useBtn.addEventListener('pointerleave', useUp);
  useBtn.addEventListener('pointercancel', useUp);
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
    fps = fps * 0.9 + (dt > 0 ? 1 / dt : 0) * 0.1;
    const moving = !paused && !busy && !panel && !hold;
    if (moving) {
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
        const sprint = keys.has('ShiftLeft') || keys.has('ShiftRight');
        const sp = moveSpeed({ stance, sprint, slowWalk }) * Math.min(1, len) / len;
        const sx = (mx * Math.cos(yaw) + mz * Math.sin(yaw)) * sp * dt;
        const sz = (-mx * Math.sin(yaw) + mz * Math.cos(yaw)) * sp * dt;
        const next = collide(plan, pos.x + sx, pos.z + sz, 0.3, { counter: opts.isCounterOpen() });
        // Do not walk out of the door: use the exit spot.
        next.z = Math.min(next.z, 0.2);
        const moved = Math.hypot(next.x - pos.x, next.z - pos.z);
        walked += moved;
        if (feet === 0) bob += moved * (stance === 'stand' ? 3.2 : 2);
        pos.x = next.x;
        pos.z = next.z;
        if (walked >= WALK_FLUSH_M) { flushWalk(); status(); if (opts.isDead()) { close(true); return; } }
      }
    }
    // Jump and fall
    if (vy !== 0 || feet > 0) {
      vy -= GRAVITY * dt;
      feet = Math.max(0, feet + vy * dt);
      if (feet === 0) vy = 0;
    }
    // Smooth change of eye height between stances
    const want = STANCES[stance].eye;
    eye += (want - eye) * Math.min(1, dt * 10);
    // Look closer (right mouse)
    const fov = aiming ? 40 : 72;
    if (Math.abs(camera.fov - fov) > 0.1) {
      camera.fov += (fov - camera.fov) * Math.min(1, dt * 12);
      camera.updateProjectionMatrix();
    }
    camera.position.set(pos.x, eye + feet + Math.sin(bob) * (stance === 'stand' ? 0.03 : 0.015), pos.z);
    camera.rotation.order = 'YXZ';
    camera.rotation.set(pitch, yaw, 0);
    camera.getWorldDirection(fwd);
    // What can the player use now? An item in view first, then the door or the gate.
    const t = paused || panel ? null : lookTarget(camera.position, fwd);
    let n = nearestSpot(plan, pos.x, pos.z, yaw);
    // Walking through an aisle or room: tell the game (an empty zone then counts as done).
    if (n && n.type === 'search' && n.dist === 0 && !seenZones.has(n.zone)) { seenZones.add(n.zone); opts.onSeeZone(n.zone); status(); }
    if (n && n.type === 'search' && !(n.counter && !opts.isCounterOpen())) n = null;
    const key = (t ? `i:${t.it.pid}` : '') + (n ? `${n.type}:${n.zone}` : '');
    if (current === undefined || key !== lastKey || frame.n++ % 20 === 0) {
      current = n;
      target = t;
      lastKey = key;
      const p = $('.in-prompt');
      const more = itemsInReach(camera.position).length;
      if (t) {
        p.hidden = false;
        p.innerHTML = opts.describeItem(t.it, more, touch);
        hiBox.visible = true;
        const b = new Box3().setFromObject(t.obj);
        b.getSize(hiSize); b.getCenter(hiCenter);
        hiBox.scale.set(hiSize.x + 0.04, hiSize.y + 0.04, hiSize.z + 0.04);
        hiBox.position.copy(hiCenter);
        $('.in-cross').classList.add('on');
      } else {
        hiBox.visible = false;
        $('.in-cross').classList.remove('on');
        if (!n) p.hidden = true;
        else { p.hidden = false; p.innerHTML = opts.describe(n); }
      }
      if (debugOn) $('.in-debug').textContent = `x ${pos.x.toFixed(1)}  z ${pos.z.toFixed(1)}  yaw ${(yaw * 57.3 % 360).toFixed(0)}°  ${stance}  ${fps.toFixed(0)} fps`;
    }
    renderer.render(scene, camera);
    requestAnimationFrame(frame);
  }
  frame.n = 0;
  requestAnimationFrame(frame);
  // For automated tests: move the player.
  window.__llInside = { plan, pos, look: (y, p = 0) => { yaw = y; pitch = p; }, items: () => [...itemObjs.values()].map((o) => ({ pid: o.it.pid, id: o.it.item, zone: o.it.zone, x: o.x, y: o.y, z: o.z })), state: () => ({ stance, feet, slowWalk, aiming, panel, fov: camera.fov, light: flash ? flash.visible : null }) };

  return { close: () => leave() };
}

// Simple item shapes (used until the detailed models load). Size in meters, origin at the bottom.
const SIMPLE = {
  can: ['canned_food', 'canned_fruit', 'propane_1lb', 'flea_spray', 'soda'],
  jug: ['water_bottle', 'bleach', 'sports_drink'],
  bag: ['dry_food', 'dog_food', 'snacks', 'chips', 'trash_bags'],
  long: ['pry_bar', 'scrap_wood', 'rope'],
  soft: ['winter_coat', 'rain_jacket', 'blanket', 'sleeping_bag', 'tarp', 'plastic_sheet', 'backpack'],
};
const simpleCache = new Map();
function itemModel(id) {
  const kind = Object.keys(SIMPLE).find((k) => SIMPLE[k].includes(id)) || 'box';
  let g = simpleCache.get(kind);
  if (!g) {
    const m = new MeshStandardMaterial({ color: { can: 0xb8bcc0, jug: 0xdfe6ea, bag: 0xc2913f, long: 0x8a5a33, soft: 0x4f5e6e, box: 0xc8b48a }[kind], roughness: 0.6, metalness: kind === 'can' ? 0.6 : 0 });
    const geo = {
      can: new CylinderGeometry(0.04, 0.04, 0.11, 14), jug: new BoxGeometry(0.15, 0.27, 0.15), bag: new BoxGeometry(0.25, 0.3, 0.1),
      long: new BoxGeometry(0.7, 0.05, 0.06), soft: new BoxGeometry(0.45, 0.12, 0.35), box: new BoxGeometry(0.16, 0.12, 0.12),
    }[kind];
    geo.computeBoundingBox();
    g = { geo, m, h: geo.boundingBox.max.y - geo.boundingBox.min.y };
    simpleCache.set(kind, g);
  }
  const mesh = new Mesh(g.geo, g.m);
  mesh.position.y = g.h / 2;
  const grp = new Group();
  grp.add(mesh);
  grp.userData.height = g.h;
  grp.userData.radius = 0.15;
  return grp;
}

// The key list in the pause menu, made from the key table.
function keyTableHtml() {
  const groups = [];
  for (const k of KEYS) {
    let g = groups.find((x) => x.name === k.group);
    if (!g) groups.push(g = { name: k.group, rows: [] });
    g.rows.push(k);
  }
  return groups.map((g) => `<div class="kg"><h5>${esc(g.name)}</h5>${g.rows.map((k) => `<div class="kr ${k.ready ? '' : 'no'}"><kbd>${esc(k.show)}</kbd><span>${esc(k.label)}</span></div>`).join('')}</div>`).join('');
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
