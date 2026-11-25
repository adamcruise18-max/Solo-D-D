// First-person view inside a building (three.js). Built as its own file (docs/inside3d.js)
// and loaded only when the player walks inside. It draws a floor plan from
// src/engine/interior.js. All game rules stay in the engine: this file calls back to app.js.
import {
  WebGLRenderer, Scene, PerspectiveCamera, Color, FogExp2, HemisphereLight, AmbientLight, PointLight, SpotLight,
  Object3D, Mesh, InstancedMesh, BoxGeometry, PlaneGeometry, RingGeometry, CylinderGeometry, SphereGeometry,
  MeshStandardMaterial, MeshBasicMaterial, CanvasTexture, RepeatWrapping, SRGBColorSpace, DoubleSide,
  Vector3, Matrix4, BufferGeometry, Float32BufferAttribute, Group, LineSegments, EdgesGeometry, LineBasicMaterial, Raycaster, Plane, Vector2, Box3,
} from 'three';
import { collide, nearestSpot, solidBoxes } from '../engine/interior.js';
import { setupLook, surfaceFor, worldUV, pickQuality, grimeLevel } from './look3d.js';
import { TOON, sty } from './style.js';
import { makeItemModel, makeShelfFill, makeProp, makeFixture, makeEndcap, FIXTURE_TYPES, PROP_KINDS } from './props3d.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
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

// Stylized: shelves are warm cream paint, not blue-grey metal.
const FIXTURE_COLORS = {
  shelf: sty(0xd6cbb8, 0x7d8790), rack: 0xc06a2b, clothes: 0x6b6f73, checkout: 0x4b545c, coolers: 0x9aa3a8,
  rx_counter: 0xd8d4c8, gate: 0x8c949b, bed: 0x9aa6ad, cabinet: 0x8e8a80, fridge: 0xd9dadb, counter: 0x7a6a58,
  sofa: 0x5b6a5e, tub: 0xe9e9e4, locker: 0x6d7b86, dresser: 0x6e5a45, cart: 0xb0b6ba, table: 0x6b5641, bench: 0x5c534a,
  desk: 0x6a6f74,
};

const PRODUCT_COLORS = [0xb2442f, 0xd4a53b, 0x3f6f9e, 0x5f8f4a, 0xe4ddd0, 0x8a4f7d, 0xc7703a, 0x2f5d5a, 0x9e9a8c, 0xd7c25c];

// Pickable items: a soft rim light in the item's own color (fresnel), on top of its emissive lift.
const ITEM_RIM = (sh) => {
  sh.fragmentShader = sh.fragmentShader.replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
    float llRim = pow(1.0 - clamp(dot(normal, normalize(vViewPosition)), 0.0, 1.0), 2.2);
    totalEmissiveRadiance += diffuseColor.rgb * (0.04 + 0.45 * llRim);`);
};
const SKY_PRESETS = {
  morning: { daylight: 0.85, phase: 'dawn', sunHeight: 0.12, cloud: 0.3, precip: 'none', outdoorLight: 0.7 },
  noon: { daylight: 1, phase: 'day', sunHeight: 0.9, cloud: 0.2, precip: 'none', outdoorLight: 0.88 },
  dusk: { daylight: 0.6, phase: 'dusk', sunHeight: 0.04, cloud: 0.25, precip: 'none', outdoorLight: 0.51 },
  overcast: { daylight: 1, phase: 'day', sunHeight: 0.7, cloud: 1, precip: 'rain', precipStrength: 0.6, outdoorLight: 0.4 },
  night: { daylight: 0, phase: 'night', sunHeight: 0, cloud: 0.5, precip: 'none', outdoorLight: 0 },
};
export function openInside(opts) {
  // ?sky=morning|noon|dusk|overcast|night in the page address forces the light (to compare looks).
  const forceSky = typeof location !== 'undefined' && (/[?&]sky=(morning|noon|dusk|overcast|night)\b/.exec(location.search || '') || [])[1];
  if (forceSky) {
    const sc = SKY_PRESETS[forceSky];
    opts = { ...opts, scene: sc, night: sc.daylight === 0, dark: sc.daylight === 0 ? true : opts.dark };
  }
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
    <div class="in-notice" hidden></div>
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

  // Light, tone, fog, flashlight and room effects come from look3d.js.
  const quality = pickQuality();
  const lk = setupLook(renderer, scene, camera, { dark, night: !!opts.night, quality, flashlight: opts.hasFlashlight(), scene: opts.scene });
  const daySky = lk.sky; // daylight color and strength from the game clock and weather
  const flash = lk.flashlight; // null without a flashlight
  const lrnd = mulberry32(hashString(`look:${opts.title}`));
  // The flashlight beam follows the game: on, off, or weak batteries.
  function applyLight() {
    if (!flash) return;
    flash.setOn(opts.isLightOn());
    if (opts.lightHours) flash.setPower(Math.min(1, opts.lightHours() / 2));
  }
  applyLight();

  // ---------- building ----------
  // Grime by place: low in kept-up stores and homes, medium in garages and industrial sites,
  // high where the building is open to the weather (plan.exposed: a broken window or a collapsed roof).
  // ?grime=low|medium|high in the page address forces a level (to compare looks).
  const forceGrime = typeof location !== 'undefined' && (/[?&]grime=(low|medium|high)\b/.exec(location.search || '') || [])[1];
  const grime = forceGrime || grimeLevel(plan.cat, { exposed: !!plan.exposed });
  const surf = (part) => surfaceFor(plan.cat, part, null, quality, grime);
  const floor = new Mesh(new PlaneGeometry(W, D), surf('floor'));
  floor.rotation.x = -Math.PI / 2;
  floor.position.set(0, 0, -D / 2);
  floor.receiveShadow = true;
  scene.add(worldUV(floor));
  const ceil = new Mesh(new PlaneGeometry(W, D), surf('ceiling'));
  ceil.rotation.x = Math.PI / 2;
  ceil.position.set(0, H, -D / 2);
  scene.add(worldUV(ceil));
  // Drop-ceiling grid: thin unlit lines (one draw call), so the ceiling reads as a ceiling
  // and not a black void when the store is dark. A few tiles are missing (dark holes).
  if (plan.kind === 'hall' && plan.cat !== 'hardware' && plan.cat !== 'outdoor') {
    const pts = [];
    const y = H - 0.01;
    for (let x = -W / 2; x <= W / 2 + 1e-6; x += 1.2) pts.push(x, y, 0, x, y, -D);
    for (let z = 0; z >= -D - 1e-6; z -= 0.6) pts.push(-W / 2, y, z, W / 2, y, z);
    const gg = new BufferGeometry();
    gg.setAttribute('position', new Float32BufferAttribute(pts, 3));
    scene.add(new LineSegments(gg, new LineBasicMaterial({ color: dark ? 0x3a3f45 : 0x8d9297, fog: true })));
    const holeMat = new MeshBasicMaterial({ color: 0x050505 });
    const holes = [];
    const nh = Math.round(W * D / 40);
    for (let i = 0; i < nh; i++) {
      const g = new PlaneGeometry(1.2, 0.6);
      g.rotateX(Math.PI / 2);
      g.translate(-W / 2 + 0.6 + Math.floor(lrnd() * (W / 1.2 - 1)) * 1.2, H - 0.02, -0.3 - Math.floor(lrnd() * (D / 0.6 - 1)) * 0.6);
      holes.push(g);
    }
    if (holes.length) scene.add(new Mesh(mergeGeometries(holes), holeMat));
  }
  // Ceiling lamps: most are dead; some flicker; dark buildings have an emergency light or two.
  // Lights are added now (not during play): a new light makes three.js rebuild its shaders.
  {
    const spots = [];
    for (let z = -3; z > -D + 1; z -= 5) for (let x = -W / 2 + 3; x < W / 2 - 1; x += 6) spots.push([x, z]);
    if (plan.cat === 'house' || plan.kind !== 'hall') spots.splice(0, spots.length, ...spots.filter((_, i) => i % 2 === 0));
    let emergency = dark ? 1 + Math.floor(lrnd() * 2) : 0;
    spots.forEach(([x, z], i) => {
      const r = lrnd();
      const state = emergency > 0 && r < 0.18 ? (emergency--, 'emergency') : plan.cat !== 'house' && r > 0.86 ? 'flicker' : 'dead';
      lk.addCeilingLight(x, H, z, state);
      if (i === spots.length - 1 && emergency > 0) lk.addCeilingLight(x, H, z - 1.5, 'emergency');
    });
  }

  const wallMat = surf('wall');
  for (const b of plan.walls) {
    const m = new Mesh(new BoxGeometry(b.w, H, b.d), wallMat);
    m.position.set(b.x, H / 2, b.z);
    m.receiveShadow = true;
    scene.add(worldUV(m));
  }
  lk.addRoomShade(-W / 2, W / 2, -D, 0);
  // Wall above the door
  const lintel = new Mesh(new BoxGeometry(2, H - 2.2, 0.2), wallMat);
  lintel.position.set(0, 2.2 + (H - 2.2) / 2, 0);
  scene.add(worldUV(lintel));
  // Daylight (or night) through the open door, a shaft, dust in the air.
  lk.addDoorLight(0, 0, !!opts.night, { width: 1.8, height: 2.2 });
  // Daylight through the front windows: a bright front with light patches on the floor, and the
  // back of the store fading to dark (you can always see where the way out is). The ceiling
  // near the door and windows gets some bounce light. Added at build time (no shader rebuild).
  if (!opts.night) {
    if (plan.windows === 'front') {
      const ww = W / 2 - 2;
      for (const side of [-1, 1]) if (ww > 0.8) lk.addWindowLight(side * (1 + ww / 2 + 0.5), -0.12, ww, { length: Math.min(6, D * 0.35) });
    } else if (dark && plan.kind === 'hall') {
      // a big store with no front glass: a little grey light near the front only
      const L = new PointLight(daySky.color, 8 * Math.min(1, daySky.level), D * 0.6, 1.4);
      L.position.set(0, H - 0.6, -1.2);
      scene.add(L);
    }
    lk.addBounce(0, 0, 1.8, H);
  }
  // Open to the weather (plan.exposed): a hole in the roof with sky and light coming in, or a
  // broken front window with glass on the floor. These buildings get high grime.
  const ex = plan.exposed;
  if (ex && ex.kind === 'roof') {
    const sky = new Mesh(new PlaneGeometry(ex.w, ex.d), new MeshBasicMaterial({ color: opts.night ? 0x1b2536 : daySky.sky, fog: false }));
    sky.rotation.x = Math.PI / 2;
    sky.position.set(ex.x, H - 0.03, ex.z);
    scene.add(sky);
    lk.addOpening(ex.x, ex.z, Math.max(ex.w, ex.d) / 2);
    if (!opts.night) {
      const L = new PointLight(daySky.color, 10 * Math.min(1.2, daySky.level), 9, 1.4);
      L.position.set(ex.x, H - 0.5, ex.z);
      scene.add(L);
    }
    for (const [k, dx, dz] of [['trash_pile', 0, 0], ['paper_scatter', 0.6, 0.4]]) {
      const g = makeProp(k, Math.floor(ex.x * 97 + dx * 13));
      g.position.set(ex.x + dx, 0, ex.z + dz);
      scene.add(g);
    }
  } else if (ex && ex.kind === 'window') {
    if (plan.windows !== 'front') lk.addWindowLight(ex.x, -0.12, 1.6, { length: 3 });
    const g = makeProp('glass_shards', Math.floor(ex.x * 101));
    g.position.set(ex.x, 0, -0.7);
    scene.add(g);
    const g2 = makeProp('paper_scatter', Math.floor(ex.x * 103));
    g2.position.set(ex.x + 0.5, 0, -1.2);
    scene.add(g2);
  }
  // A garage in a house has its own concrete floor with medium grime.
  if (plan.cat === 'house' && TOON) {
    for (const sp of plan.spots) {
      if (sp.label !== 'garage' || !sp.area) continue;
      const a = sp.area;
      const gf = new Mesh(new PlaneGeometry(a.x2 - a.x1, a.z2 - a.z1), surfaceFor('house', 'floor', 'garage', quality, ex ? 'high' : 'medium'));
      gf.rotation.x = -Math.PI / 2;
      gf.position.set((a.x1 + a.x2) / 2, 0.003, (a.z1 + a.z2) / 2);
      gf.receiveShadow = true;
      scene.add(worldUV(gf));
    }
  }
  if (plan.cat !== 'house') lk.addExitSign(0, Math.min(H - 0.25, 2.55), -0.14, Math.PI);
  lk.addDust({ minX: -W / 2 + 0.3, maxX: W / 2 - 0.3, minY: 0.1, maxY: H - 0.2, minZ: -D + 0.3, maxZ: -0.3 });
  // Notices by the door (no brands, no real names), dirt and paper on the floor.
  {
    const kinds = plan.cat === 'house' ? ['note', 'evac'] : plan.cat === 'clinic' || plan.cat === 'hospital' ? ['quarantine', 'mask', 'staff'] : ['closed', 'mask', 'quarantine', 'poster'];
    const n = plan.cat === 'house' ? 1 : 2;
    for (let i = 0; i < n; i++) {
      const side = i % 2 ? 1 : -1;
      lk.addWallNotice(side * (1.5 + lrnd() * 1.2), 1.35 + lrnd() * 0.3, -0.13, Math.PI, kinds[Math.floor(lrnd() * kinds.length)]);
    }
    const decals = Math.min(28, Math.round((W * D) / (plan.cat === 'house' ? 24 : 50)));
    for (let i = 0; i < decals; i++) {
      const r = lrnd();
      const kind = r < 0.45 ? 'dirt' : r < 0.7 ? 'paper' : r < 0.82 ? 'water' : r < 0.92 ? 'leaves' : 'snow';
      const x = (lrnd() - 0.5) * (W - 1);
      const z = -0.5 - lrnd() * (kind === 'snow' || kind === 'leaves' ? 4 : D - 1);
      lk.addDecal(x, z, kind, 0.6 + lrnd() * 1.4, lrnd() * Math.PI);
    }
    if (plan.windows === 'front' && lrnd() < 0.7) lk.addBrokenGlass((lrnd() < 0.5 ? -1 : 1) * (3 + lrnd() * (W / 2 - 5)), -0.8, 1.3);
  }
  // Outside, seen through the door: snow and grey sky
  const outside = new Mesh(new PlaneGeometry(6, 4), new MeshBasicMaterial({ color: opts.night ? 0x1a2433 : daySky.sky }));
  outside.position.set(0, 2, 2.5);
  outside.rotation.y = Math.PI;
  scene.add(outside);
  const snow = new Mesh(new PlaneGeometry(6, 3), new MeshBasicMaterial({ color: opts.night ? 0x3a4656 : 0xf4f6f8 }));
  snow.rotation.x = -Math.PI / 2;
  snow.position.set(0, 0.01, 1.4);
  scene.add(snow);
  // Store windows along the front
  if (plan.windows === 'front') {
    const glass = new MeshBasicMaterial({ color: opts.night ? 0x16202c : new Color(daySky.sky).multiplyScalar(0.85), transparent: true, opacity: 0.85 });
    for (const side of [-1, 1]) {
      const ww = W / 2 - 2;
      const g = new Mesh(new PlaneGeometry(ww, 1.8), glass);
      g.position.set(side * (1 + ww / 2 + 0.5), 1.6, -0.12);
      scene.add(g);
    }
  }

  // Static decor (fixtures, debris, props, covered bodies) goes here; it is merged by material
  // after the scene is built, so hundreds of small meshes become a few draw calls.
  const statics = new Group();
  scene.add(statics);
  // ---------- fixtures ----------
  const matCache = {};
  const mat = (type) => (matCache[type] ||= new MeshStandardMaterial({ color: FIXTURE_COLORS[type] ?? 0x888888, roughness: 0.8, metalness: (type === 'shelf' && TOON) ? 0.08 : type === 'shelf' || type === 'gate' || type === 'locker' ? 0.35 : 0.05 }));
  const shelfSlots = []; // clothes on racks: {x,y,z,zone}
  const shelfFaces = []; // shelf faces with detailed products
  const CULL_M = dark || opts.night ? 13 : 20;
  const FILL_KIND = { supermarket: 'grocery', pharmacy: 'pharmacy', hardware: 'hardware', outdoor: 'outdoor', convenience: 'convenience', gas: 'convenience' }[plan.cat] || 'grocery';
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
      g.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
      if (f.tipped) {
        // A shelf that leans on its neighbor. Its goods are on the floor.
        g.rotation.z = 0.16 * (f.x > 0 ? 1 : -1);
        for (let i = 0; i < 14; i++) {
          const m = new Mesh(new BoxGeometry(0.22, 0.26, 0.24), new MeshStandardMaterial({ color: PRODUCT_COLORS[i % PRODUCT_COLORS.length], roughness: 0.7 }));
          m.position.set(f.x + (i % 2 ? 1 : -1) * (0.7 + (i % 3) * 0.25), 0.12, f.z - f.d / 2 + ((i * 7) % 13) / 13 * f.d);
          m.rotation.set(0, i, i % 2 ? Math.PI / 2 : 0);
          statics.add(m);
        }
      }
      statics.add(g);
      if (!f.tipped && f.type !== 'clothes') {
        // Detailed products on both faces (props3d.js): one shelf-fill group per face and aisle.
        for (const side of [-1, 1]) {
          const zone = side < 0 ? f.leftZone : f.rightZone;
          if (zone == null) continue;
          shelfFaces.push({ f, side, zone, group: null, done: null });
        }
      } else if (!f.tipped) {
        // Clothes racks: simple hanging shapes.
        const levels = [1.25];
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
    if (f.type === 'endcap') {
      // Picked-over display at the end of a shelf row, with a generic sign (props3d.js).
      const g = makeEndcap(FILL_KIND, f.w, f.h, Math.max(0.05, opts.stock * 0.5), hashString(`${opts.title}:end:${f.x.toFixed(2)}`), f.d);
      g.position.set(f.x, 0, f.z);
      g.traverse((o) => { if (o.isMesh) o.receiveShadow = true; });
      statics.add(g);
      continue;
    }
    if (FIXTURE_TYPES.includes(f.type)) {
      // Detailed furniture and store fixtures (props3d.js). The model fills the plan box.
      const g = makeFixture(f.type, f.w, f.d, f.h, hashString(`${opts.title}:${f.type}:${f.x.toFixed(2)}:${f.z.toFixed(2)}`));
      // Turn the front to the room: toward the zone's spot, else toward the door side (+z).
      const spot = f.zone != null ? plan.spots.find((p) => p.zone === f.zone) : null;
      const tx = spot ? spot.x - f.x : 0;
      const tz = spot ? spot.z - f.z : 1;
      const front = f.w >= f.d ? tz : tx;
      g.position.set(f.x, 0, f.z);
      if (front < 0) g.rotation.y = Math.PI;
      g.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
      statics.add(g);
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
      statics.add(g);
      continue;
    }
    const m = new Mesh(new BoxGeometry(f.w, f.h, f.d), mat(f.type));
    m.position.set(f.x, f.h / 2, f.z);
    m.castShadow = true;
    m.receiveShadow = true;
    statics.add(m);
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
  function buildFace(face, done) {
    if (face.group) { scene.remove(face.group); face.group.traverse((o) => { if (o.isMesh) o.geometry.dispose(); }); }
    const { f, side } = face;
    // Picked over after 3 months: front shelves are 20-50% full.
    const fill = Math.max(0.03, opts.stock * (done ? 0.12 : 0.6));
    const g = makeShelfFill(FILL_KIND, f.d - 0.1, [0.12, 0.62, 1.12, 1.57], fill, hashString(`${opts.title}:${f.x}:${f.z}:${side}`));
    g.position.set(f.x + side * 0.05, 0, f.z);
    g.rotation.y = side > 0 ? 0 : Math.PI;
    g.traverse((o) => { if (o.isMesh) o.receiveShadow = true; });
    scene.add(g);
    face.group = g;
    face.done = done;
  }
  function refreshProducts() {
    for (const face of shelfFaces) {
      const done = !!opts.isDone(face.zone);
      if (face.done !== done) buildFace(face, done);
    }
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
    const dseed = hashString(`${opts.title}:d:${d.x.toFixed(2)}:${d.z.toFixed(2)}`);
    if (d.kind === 'box') { m = makeProp(d.s > 0.35 ? 'box_stack' : 'cardboard_box', dseed); m.position.set(d.x, 0, d.z); m.rotation.y = d.rot || 0; statics.add(m); continue; }
    if (d.kind === 'cart') { m = makeProp(lrnd() < 0.7 ? 'shopping_cart' : 'basket', dseed); m.position.set(d.x, 0, d.z); m.rotation.set(0, d.rot || 0, 0); statics.add(m); continue; }
    if (d.kind === 'paper') { m = makeProp('paper_scatter', dseed); m.position.set(d.x, 0, d.z); m.rotation.y = d.rot || 0; statics.add(m); continue; }
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
    statics.add(m);
  }
  // ---------- story props (props3d.js) ----------
  // Small scenes that tell what happened, with no text on real places: carts left in a hurry,
  // a mop bucket, medical gear in clinics, boots and helmets in fire stations, lived-in houses.
  {
    const solid = solidBoxes(plan, { counter: true });
    const taken = [];
    const free = (x, z, rad) => !solid.some((b) => Math.abs(x - b.x) < b.w / 2 + rad && Math.abs(z - b.z) < b.d / 2 + rad)
      && !(Math.abs(x) < 1.6 && z > -3) && !taken.some((t) => Math.hypot(t[0] - x, t[1] - z) < t[2] + rad)
      && x > -W / 2 + rad && x < W / 2 - rad && z < -rad && z > -D + rad;
    // area: limit to one room ({x1,x2,z1,z2}); the default is the whole building.
    const place = (kind, nearWall = false, area = null) => {
      if (!PROP_KINDS.includes(kind)) return null;
      const g = makeProp(kind, Math.floor(lrnd() * 1e6));
      const rad = Math.min(1.2, (g.userData.radius || 0.3) + 0.1);
      const flat = kind === 'rug' || kind === 'paper_scatter' || kind === 'clothes_pile';
      const A = area || { x1: -W / 2, x2: W / 2, z1: -D, z2: 0 };
      for (let i = 0; i < 30; i++) {
        let x = A.x1 + rad + lrnd() * Math.max(0, A.x2 - A.x1 - 2 * rad);
        if (nearWall) x = lrnd() < 0.5 ? A.x1 + rad + 0.05 : A.x2 - rad - 0.05;
        const z = A.z1 + rad + lrnd() * Math.max(0, A.z2 - A.z1 - 2 * rad);
        if (flat && area) {
          // Rugs and paper lie under things: only keep them off walls and the door.
          if (!(x > -W / 2 + rad && x < W / 2 - rad && z < -rad && z > -D + rad)) continue;
          g.position.set(x, 0, z);
          g.rotation.y = lrnd() * Math.PI;
          statics.add(g);
          return g;
        }
        if (!free(x, z, rad)) continue;
        g.position.set(x, 0, z);
        g.rotation.y = nearWall ? (x > (A.x1 + A.x2) / 2 ? -Math.PI / 2 : Math.PI / 2) + (lrnd() - 0.5) * 0.3 : lrnd() * Math.PI * 2;
        g.traverse((o) => { if (o.isMesh) { o.castShadow = rad > 0.25; o.receiveShadow = true; } });
        statics.add(g);
        taken.push([x, z, rad]);
        return g;
      }
      return null;
    };
    const SETS = {
      supermarket: [['basket', 3], ['trash_bag', 3], ['wet_floor_sign', 1], ['mop_bucket', 1], ['pallet', 1, true], ['box_stack', 2, true], ['trash_pile', 1, true]],
      convenience: [['trash_bag', 1], ['basket', 1], ['cardboard_box', 2]],
      gas: [['trash_bag', 1], ['traffic_cone', 1], ['cardboard_box', 2]],
      pharmacy: [['basket', 2], ['trash_bag', 1], ['wet_floor_sign', 1], ['box_stack', 1, true]],
      hardware: [['pallet', 2, true], ['box_stack', 2, true], ['traffic_cone', 2], ['trash_bag', 1]],
      outdoor: [['box_stack', 2, true], ['trash_bag', 1], ['basket', 1]],
      clinic: [['iv_stand', 2, true], ['wheelchair', 1, true], ['office_chair', 2], ['medical_cart', 1, true], ['trash_bag', 1]],
      hospital: [['gurney', 2, true], ['iv_stand', 3, true], ['wheelchair', 2, true], ['medical_cart', 2, true], ['office_chair', 1], ['trash_pile', 1, true]],
      fire: [['helmet_rack', 1, true], ['hose_reel', 1, true], ['locker_row', 1, true], ['traffic_cone', 2], ['fire_extinguisher', 1, true]],
      house: [['rug', 2], ['lamp', 1, true], ['potted_plant_dead', 1, true], ['chair', 2], ['tv', 1, true], ['bookshelf', 1, true], ['trash_bag', 1], ['cardboard_box', 1]],
    };
    if (plan.cat === 'house') {
      // Lived-in rooms: each room gets its own set. Wall pieces (frames, curtains, a stopped
      // clock) hang on the room's front or back wall. No names or addresses anywhere; faces only in pictures (photos, covers, phones).
      const ROOM_SETS = {
        kitchen: [['trash_bag', 1], ['paper_scatter', 1], ['chair', 1]],
        'living room': [['rug', 1], ['magazine', 1], ['old_phone', 1], ['tv', 1, true], ['lamp', 1, true], ['potted_plant_dead', 1, true], ['bookshelf', 1, true], ['kids_toy', 1], ['clothes_pile', 1], ['paper_scatter', 1], ['shoes', 1]],
        bedroom: [['rug', 1], ['old_phone', 1], ['magazine', 1], ['lamp', 1, true], ['clothes_pile', 2], ['shoes', 1], ['cardboard_box', 1]],
        bathroom: [['clothes_pile', 1], ['trash_bag', 1]],
        'second bedroom': [['rug', 1], ['kids_toy', 2], ['clothes_pile', 1], ['shoes', 1]],
        garage: [['box_stack', 1, true], ['cardboard_box', 2], ['trash_bag', 1], ['traffic_cone', 1]],
      };
      const WALL_SETS = {
        kitchen: ['wall_clock', 'curtain'], 'living room': ['wall_frame', 'wall_frame', 'curtain'], bedroom: ['wall_frame', 'curtain'],
        'second bedroom': ['wall_frame', 'curtain'], bathroom: [], garage: [],
      };
      for (const sp of plan.spots) {
        if (!sp.area) continue;
        const A = { x1: sp.area.x1, x2: sp.area.x2, z1: Math.min(sp.area.z1, sp.area.z2), z2: Math.max(sp.area.z1, sp.area.z2) };
        for (const [kind, n, wall] of ROOM_SETS[sp.label] || []) for (let i = 0; i < n; i++) place(kind, !!wall, A);
        (WALL_SETS[sp.label] || []).forEach((kind, i) => {
          if (!PROP_KINDS.includes(kind)) return;
          const g = makeProp(kind, Math.floor(lrnd() * 1e6));
          const back = i % 2 === 0;
          const x = A.x1 + 0.6 + lrnd() * Math.max(0, A.x2 - A.x1 - 1.2);
          g.position.set(x, kind === 'curtain' ? 0.9 : 1.45, back ? A.z1 + 0.09 : A.z2 - 0.09);
          g.rotation.y = back ? 0 : Math.PI;
          statics.add(g);
        });
      }
      // Things on tables: mail, dishes. Chairs around the table if the model has none.
      for (const f of plan.fixtures) {
        if (f.type !== 'table') continue;
        for (const [kind, dx] of [['mail_pile', -0.25], ['dish_stack', 0.25], ['magazine', 0], ['old_phone', 0.05]]) {
          if (!PROP_KINDS.includes(kind) || lrnd() < 0.3) continue;
          const g = makeProp(kind, Math.floor(lrnd() * 1e6));
          g.position.set(f.x + dx, f.h, f.z + (lrnd() - 0.5) * 0.4);
          g.rotation.y = lrnd() * Math.PI;
          statics.add(g);
        }
      }
    } else for (const [kind, n, wall] of SETS[plan.cat] || SETS.house) for (let i = 0; i < n; i++) place(kind, !!wall);
    // On top of fixtures: registers on checkouts, things on kitchen counters.
    for (const f of plan.fixtures) {
      if (f.type === 'checkout') { const g = makeProp('register', Math.floor(f.x * 100)); g.position.set(f.x, f.h, f.z - f.d / 4); g.rotation.y = Math.PI / 2; statics.add(g); }
      if (f.type === 'counter' && plan.cat === 'house') { const g = makeProp('kitchen_counter_items', Math.floor(f.z * 100)); g.position.set(f.x, f.h, f.z); statics.add(g); }
    }
  }

  // A body under a sheet: only a covered shape (adult sized). Nothing more is shown.
  for (const b of plan.bodies) {
    const g = makeProp('covered_body', Math.floor((b.x * 31 + b.z * 17) * 100));
    g.position.set(b.x, b.y || 0, b.z);
    g.rotation.y = (b.rot || 0) + Math.PI / 2;
    statics.add(g);
  }

  // Contact shadows: a soft dark blob under every fixture, piece of furniture, prop and covered body.
  {
    const blobs = [];
    for (const f of plan.fixtures) {
      if (!f.w || !f.d) continue;
      blobs.push({ x: f.x, z: f.z, w: f.w, d: f.d, grow: f.type === 'shelf' || f.type === 'endcap' ? 0.55 : 0.4 });
    }
    const NO_BLOB = /^(rug|paper_scatter|glass_shards|wall_frame|wall_clock|curtain|mail_pile|magazine|old_phone|trash_pile)$/;
    for (const g of statics.children) {
      const k = g.userData.kind || g.name || '';
      if (!g.userData.radius || NO_BLOB.test(k) || g.position.y > 0.05) continue;
      const r = g.userData.radius * (k === 'covered_body' ? 1.2 : 1.3);
      const body = k === 'covered_body';
      blobs.push({ x: g.position.x, z: g.position.z, w: body ? 0.6 : r, d: body ? 1.8 : r, rot: g.rotation.y, grow: 0.2 });
    }
    lk.addContactShadows(blobs);
  }

  mergeStatics(statics);
  // look3d's lamps, decals, notices and shades never move: merge them by material too.
  // Lights, dust points and sprites stay where they are.
  mergeInPlace(lk.group);

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
      // On the front edge of a shelf board (the board ends at the aisle edge).
      return { x: spot.x + side * ((a.x2 - a.x1) / 2 + 0.06), y: levels[Math.floor(r() * levels.length)], z: a.z1 + 1 + r() * (a.z2 - a.z1 - 2) };
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
  // ---------- closed boxes (timed reveal) ----------
  // About 3 in 10 items of a zone are inside a closed box. Which ones is fixed by the item id,
  // so the same box always holds the same items. The save keeps only which boxes are open.
  const REVEAL_MS = 1500;
  // What the player notices (scavenging skill). Read again after each game step.
  let notice = opts.notice ? opts.notice() : { countRadius: 0, boxCount: false, lootGlow: 0 };
  const containers = new Map(); // cid -> { cid, zone, obj, x, y, z, r, opened }
  const inBox = (it) => it.zone !== counterZone() && hashString(`${it.pid}:box`) % 10 < 3;
  function counterZone() { const sp = plan.spots.find((p) => p.counter); return sp ? sp.zone : -1; }
  function placeContainer(zone) {
    const r = mulberry32(hashString(`box:${zone}:${opts.title}`));
    const spot = plan.spots.find((p) => p.zone === zone);
    const a = spot && spot.area;
    if (!a) return null;
    const boxes = solidNow();
    for (let i = 0; i < 16; i++) {
      const x = plan.kind === 'hall' ? spot.x + (r() - 0.5) * Math.max(0.2, a.x2 - a.x1 - 1.4) : a.x1 + 0.5 + r() * (a.x2 - a.x1 - 1);
      const z = a.z1 + 0.8 + r() * (a.z2 - a.z1 - 1.6);
      if (!boxes.some((b) => Math.abs(x - b.x) < b.w / 2 + 0.3 && Math.abs(z - b.z) < b.d / 2 + 0.3)) return { x, z, rot: r() * Math.PI };
    }
    return null;
  }
  function ensureContainer(zone) {
    const cid = `c${zone}`;
    if (containers.has(cid)) return containers.get(cid);
    const p = placeContainer(zone);
    if (!p) { containers.set(cid, null); return null; }
    const obj = makeProp('cardboard_box', hashString(`${cid}:${opts.title}`));
    obj.position.set(p.x, 0, p.z);
    obj.rotation.y = p.rot;
    scene.add(obj);
    const h = obj.userData.height || 0.35;
    const c = { cid, zone, obj, x: p.x, y: h / 2, z: p.z, r: obj.userData.radius || 0.3, opened: opts.isOpened(cid), container: true };
    if (c.opened) openLook(c);
    containers.set(cid, c);
    return c;
  }
  // Scavenging skill level 2+: you hear how many items are in a closed box.
  function boxHint(c) {
    if (!notice.boxCount) return 'look inside';
    const k = opts.items().filter((it) => it.zone === c.zone && inBox(it)).length;
    return k ? `something inside: ${k} item${k > 1 ? 's' : ''}` : 'it sounds empty';
  }
  // An open box: the lid flaps fold back (shown as a lower, tilted box).
  function openLook(c) { c.obj.scale.y = 0.85; c.obj.rotation.z = 0.06; }

  function addItems() {
    for (const it of opts.items()) {
      if (itemObjs.has(it.pid)) continue;
      let p = null;
      if (inBox(it)) {
        const c = ensureContainer(it.zone);
        if (c && !c.opened) continue; // still in the closed box
        if (c) {
          // Out of the box, on the floor next to it.
          const k = hashString(it.pid) % 360;
          p = { x: c.x + Math.cos(k) * (c.r + 0.15), y: 0, z: c.z + Math.sin(k) * (c.r + 0.15) };
        }
      }
      p = p || placeFor(it);
      const obj = makeItemModel(it.item, hashString(it.pid));
      obj.position.set(p.x, p.y, p.z);
      obj.rotation.y = (hashString(it.pid) % 628) / 100;
      // Loot is a little brighter than the room, so the eye finds it.
      // The item lights itself with its own colors (emissive map = its texture), so it stays
      // bright and saturated in a dim store and reads above the darker shelf stock.
      const glow = 0.32 + 0.18 * notice.lootGlow;
      obj.traverse((m) => {
        if (!m.isMesh || !m.material) return;
        const fix = (mt) => {
          if (!mt.emissive) return mt;
          const c = mt.clone();
          if (c.map) { c.emissiveMap = c.map; c.emissive.setRGB(glow, glow, glow); } else c.emissive.copy(c.color).multiplyScalar(glow);
          // a soft rim of its own color, so its shape reads in a dark aisle (no outline, no halo)
          c.onBeforeCompile = ITEM_RIM;
          c.customProgramCacheKey = () => 'llItemRim';
          return c;
        };
        m.material = Array.isArray(m.material) ? m.material.map(fix) : fix(m.material);
      });
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
  // True when a wall, shelf, counter or closed gate is between the eye and the item.
  // Segment against each box (slab test). Walls have no height: they go to the ceiling.
  function blocked(from, o) {
    const dx = o.x - from.x;
    const dy = o.y - from.y;
    const dz = o.z - from.z;
    // Stop 0.25 m short of the item: it may rest on a box top or on a shelf board edge.
    const END = Math.max(0, 1 - 0.25 / Math.max(0.25, Math.hypot(dx, dy, dz)));
    for (const b of solidBoxes(plan, { counter: opts.isCounterOpen() })) {
      const lo = [b.x - b.w / 2 + 0.02, 0, b.z - b.d / 2 + 0.02];
      const hi = [b.x + b.w / 2 - 0.02, (b.h || 9) - 0.02, b.z + b.d / 2 - 0.02];
      const p0 = [from.x, from.y, from.z];
      const v = [dx, dy, dz];
      let t0 = 0;
      let t1 = END;
      let hit = true;
      for (let k = 0; k < 3 && hit; k++) {
        if (Math.abs(v[k]) < 1e-9) { if (p0[k] < lo[k] || p0[k] > hi[k]) hit = false; continue; }
        let a = (lo[k] - p0[k]) / v[k];
        let c = (hi[k] - p0[k]) / v[k];
        if (a > c) [a, c] = [c, a];
        t0 = Math.max(t0, a);
        t1 = Math.min(t1, c);
        if (t0 > t1) hit = false;
      }
      if (hit) return true;
    }
    return false;
  }
  function itemsInReach(from) {
    const out = [];
    for (const o of itemObjs.values()) {
      const d = Math.hypot(o.x - from.x, o.y - from.y, o.z - from.z);
      if (d <= REACH && !blocked(from, o)) out.push({ o, d });
    }
    return out.sort((a, b) => a.d - b.d);
  }
  // The item nearest to the centre of the view, inside reach.
  function lookTarget(from, dir) {
    let best = null;
    const closed = [...containers.values()].filter((c) => c && !c.opened)
      .map((c) => ({ o: c, d: Math.hypot(c.x - from.x, c.y - from.y, c.z - from.z) })).filter((x) => x.d <= REACH && !blocked(from, x.o));
    for (const { o, d } of [...itemsInReach(from), ...closed]) {
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
  // Diagnostics overlay (F3 or `): FPS, frame ms, ms per part of the frame, renderer counts and
  // an estimate of GPU memory. Off by default; updates 4 times a second. Budget: 33.3 ms (30 FPS).
  const diag = {
    acc: { game: 0, look: 0, cull: 0, render: 0 }, n: 0, worst: 0, last: 0, mb: 0, mbAt: -1e9,
    sample(dt, parts) {
      for (const k in parts) this.acc[k] += parts[k];
      this.n += 1;
      this.worst = Math.max(this.worst, dt * 1000);
      const now = performance.now();
      if (now - this.last < 250) return;
      this.last = now;
      if (now - this.mbAt > 2000) { this.mb = estimateMB(scene); this.mbAt = now; }
      const avg = (k) => (this.acc[k] / Math.max(1, this.n)).toFixed(1);
      const ms = 1000 / Math.max(1, fps);
      const ri = renderer.info;
      $('.in-debug').textContent = [
        `${fps.toFixed(0)} fps  ${ms.toFixed(1)} ms (worst ${this.worst.toFixed(0)})  budget 33.3 ms  q:${quality}`,
        `game ${avg('game')}  light ${avg('look')}  cull ${avg('cull')}  render ${avg('render')} ms (CPU)`,
        `${ri.render.calls} calls  ${(ri.render.triangles / 1000).toFixed(0)}k tris  ${ri.memory.geometries} geo  ${ri.memory.textures} tex  ~${this.mb.toFixed(0)} MB`,
        `x ${pos.x.toFixed(1)}  z ${pos.z.toFixed(1)}  yaw ${(yaw * 57.3 % 360).toFixed(0)}°  ${stance}  ${itemObjs.size} items`,
      ].join('\n');
      this.acc = { game: 0, look: 0, cull: 0, render: 0 }; this.n = 0; this.worst = 0;
    },
  };
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
    if (o.container) { revealBox(o); return false; }
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
  // Open a closed box: a short bar, then the items inside show up next to it.
  function revealBox(c) {
    if (busy || paused || closed || hold || c.opened) return;
    busy = true;
    const bar = $('.in-bar');
    const fill = bar.querySelector('i');
    bar.hidden = false;
    fill.style.width = '0%';
    toast('Opening the box…', REVEAL_MS);
    const t0 = performance.now();
    const step = () => {
      if (closed) return;
      const k = Math.min(1, (performance.now() - t0) / REVEAL_MS);
      fill.style.width = `${k * 100}%`;
      if (k < 1) { requestAnimationFrame(step); return; }
      bar.hidden = true;
      busy = false;
      flushWalk();
      if (!opts.onOpenContainer(c.cid)) return;
      c.opened = true;
      openLook(c);
      const before = itemObjs.size;
      addItems();
      const n = itemObjs.size - before;
      toast(n ? `Inside: ${n} item${n > 1 ? 's' : ''}.` : 'It is empty.', 1800);
      lastKey = '';
      afterGameStep();
    };
    step();
  }
  function startHold() {
    if (busy || paused || closed || hold) return false;
    if (target && target.container) return false;
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
    if (opts.notice) notice = opts.notice();
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
      case 'debug': debugOn = !debugOn; $('.in-debug').hidden = !debugOn; diag.last = 0; diag.mbAt = -1e9; return null;
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
    if (['Tab', 'F3', 'F5', 'F9', 'Space', 'Backquote', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(code) || (e.ctrlKey && code !== 'KeyW')) e.preventDefault();
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
      // A closed box opens on the key press (the bar is the wait).
      if (target && target.container && !paused && !panel) { revealBox(target); return; }
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
      // Let go before the bar is full: a tap (take one). Slow frames do not turn a tap into nothing.
      const short = !!hold || performance.now() - eDown < 300;
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
  useBtn.addEventListener('pointerdown', (e) => { e.preventDefault(); if (target && target.container) { revealBox(target); return; } eDown = performance.now(); startHold(); });
  const useUp = (e) => {
    if (!eDown) return;
    const short = e && e.type === 'pointerup' && (!!hold || performance.now() - eDown < 300);
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
    const tFrame = performance.now();
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
    const key = (t ? `i:${t.container ? t.cid : t.it.pid}` : '') + (n ? `${n.type}:${n.zone}` : '');
    if (current === undefined || key !== lastKey || frame.n++ % 20 === 0) {
      current = n;
      target = t;
      lastKey = key;
      const p = $('.in-prompt');
      const more = itemsInReach(camera.position).length;
      if (t) {
        p.hidden = false;
        p.innerHTML = t.container
          ? `<kbd>${touch ? 'USE' : 'E'}</kbd> Open the box <small>${boxHint(t)} · 1 min</small>`
          : opts.describeItem(t.it, more, touch);
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
      // Scavenging skill: you notice how many items are near you.
      const nr = notice.countRadius;
      const nEl = $('.in-notice');
      if (nr > 0) {
        let k = 0;
        for (const o of itemObjs.values()) if (Math.hypot(o.x - camera.position.x, o.z - camera.position.z) < nr) k++;
        nEl.hidden = k === 0;
        nEl.textContent = `You notice ${k} item${k === 1 ? '' : 's'} near you`;
      } else nEl.hidden = true;
    }
    const tLogic = performance.now();
    lk.update(dt, camera.position);
    const tLook = performance.now();
    // Shelf products far away are hidden (fog hides them anyway): saves draw calls and triangles.
    for (const face of shelfFaces) {
      if (!face.group) continue;
      const dz = Math.max(0, Math.abs(camera.position.z - face.f.z) - face.f.d / 2);
      const dx = camera.position.x - face.f.x;
      // Inside the shelf rows, only the faces of the aisle you stand in can be seen: the shelves hide the rest.
      const inRows = dz === 0;
      face.group.visible = inRows ? dx * face.side > 0 && Math.abs(dx) < 3.2 : Math.hypot(dx, dz) < (quality === 'high' ? 11 : 8);
    }
    for (const o of itemObjs.values()) o.obj.visible = Math.hypot(o.x - camera.position.x, o.z - camera.position.z) < CULL_M;
    const tCull = performance.now();
    renderer.render(scene, camera);
    const tEnd = performance.now();
    if (debugOn) diag.sample(dt, { game: tLogic - tFrame, look: tLook - tLogic, cull: tCull - tLook, render: tEnd - tCull });
    requestAnimationFrame(frame);
  }
  frame.n = 0;
  requestAnimationFrame(frame);
  // For automated tests: move the player.
  window.__llInside = { scene, renderer, plan, pos, look: (y, p = 0) => { yaw = y; pitch = p; }, reach: () => itemsInReach(camera.position).map(({ o }) => o.it.zone), boxes: () => [...containers.values()].filter(Boolean).map((c) => ({ cid: c.cid, x: c.x, y: c.y, z: c.z, opened: c.opened })), census: () => { const c = {}; scene.traverse((o) => { if (o.isMesh || o.isPoints || o.isLine || o.isSprite) { let n = o; while (n.parent && n.parent !== scene) n = n.parent; const k = n.name || n.type; c[k] = (c[k] || 0) + 1; } }); return Object.entries(c).sort((x, y) => y[1] - x[1]).slice(0, 25).map((e) => e.join(':')).join(' '); }, items: () => [...itemObjs.values()].map((o) => ({ pid: o.it.pid, id: o.it.item, zone: o.it.zone, x: o.x, y: o.y, z: o.z })), state: () => ({ stance, feet, slowWalk, aiming, panel, fov: camera.fov, light: flash ? flash.isOn() : null, quality, info: () => ({ calls: renderer.info.render.calls, tris: renderer.info.render.triangles }) }) };

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

// Merge every mesh under root into one mesh per material (world transforms baked in).
// Meshes that use other features (instancing, skinning, sprites) are left as they are.
// Rough GPU memory: vertex/index buffers plus textures (w × h × 4 bytes, +1/3 for mipmaps).
function estimateMB(scene) {
  const geos = new Set();
  const texs = new Set();
  scene.traverse((o) => {
    if (o.geometry) geos.add(o.geometry);
    const mats = Array.isArray(o.material) ? o.material : o.material ? [o.material] : [];
    for (const m of mats) for (const k of ['map', 'normalMap', 'roughnessMap', 'emissiveMap', 'alphaMap', 'aoMap', 'bumpMap']) if (m[k]) texs.add(m[k]);
  });
  let bytes = 0;
  for (const g of geos) {
    for (const a of Object.values(g.attributes)) bytes += a.array.byteLength;
    if (g.index) bytes += g.index.array.byteLength;
  }
  for (const t of texs) { const im = t.image; if (im && im.width) bytes += im.width * im.height * 4 * 1.33; }
  if (scene.environment && scene.environment.image) bytes += 256 * 256 * 6 * 8;
  return bytes / 1048576;
}

function mergeInPlace(root) {
  root.updateMatrixWorld(true);
  const buckets = new Map();
  const merged = [];
  root.traverse((o) => {
    if (!o.isMesh || o.isInstancedMesh || o.isSkinnedMesh || Array.isArray(o.material) || o.children.length) return;
    const g = o.geometry;
    const key = `${o.material.uuid}|${Object.keys(g.attributes).sort().join(',')}|${o.castShadow ? 1 : 0}|${o.receiveShadow ? 1 : 0}|${o.renderOrder}`;
    let b = buckets.get(key);
    if (!b) buckets.set(key, b = { mat: o.material, cast: o.castShadow, recv: o.receiveShadow, order: o.renderOrder, geos: [], src: [] });
    b.src.push(o);
  });
  for (const b of buckets.values()) {
    if (b.src.length < 2) continue;
    const geos = b.src.map((o) => { const c = o.geometry.index ? o.geometry.toNonIndexed() : o.geometry.clone(); c.applyMatrix4(o.matrixWorld); return c; });
    const geo = mergeGeometries(geos);
    if (!geo) continue;
    for (const o of b.src) o.parent.remove(o);
    const m = new Mesh(geo, b.mat);
    m.castShadow = b.cast; m.receiveShadow = b.recv; m.renderOrder = b.order;
    merged.push(m);
  }
  // root's own transform is applied to its children: put merged world-space meshes under an identity parent.
  for (const m of merged) { m.matrixAutoUpdate = false; m.matrix.copy(root.matrixWorld).invert(); root.add(m); }
}

// Two materials that would draw the same get one bucket (props often build equal materials per copy).
const MAP_KEYS = ['map', 'normalMap', 'roughnessMap', 'metalnessMap', 'emissiveMap', 'alphaMap', 'aoMap', 'bumpMap'];
function matSig(m) {
  if (m.type !== 'MeshStandardMaterial' && m.type !== 'MeshBasicMaterial' && m.type !== 'MeshLambertMaterial') return m.uuid;
  if (m.onBeforeCompile && m.onBeforeCompile.toString() !== 'onBeforeCompile(){}' && m.customProgramCacheKey) return m.uuid;
  const maps = MAP_KEYS.map((k) => (m[k] ? (m[k].source ? m[k].source.uuid : m[k].uuid) + m[k].repeat.x.toFixed(3) + m[k].repeat.y.toFixed(3) + m[k].offset.x.toFixed(3) + m[k].offset.y.toFixed(3) : '-')).join(',');
  const c = (x) => (x ? x.getHexString() : '-');
  return [m.type, c(m.color), c(m.emissive), m.emissiveIntensity, m.roughness, m.metalness, m.transparent, m.opacity, m.side, m.alphaTest, m.vertexColors, m.flatShading, m.depthWrite, m.polygonOffset, m.polygonOffsetFactor, m.envMapIntensity, maps].join('|');
}

function mergeStatics(root) {
  root.updateMatrixWorld(true);
  const buckets = new Map();
  const keepers = [];
  root.traverse((o) => {
    // Meshes with a material list (one material per face) stay as they are.
    if (!o.isMesh || o.isInstancedMesh || Array.isArray(o.material)) { if (o.isLine || o.isPoints || o.isSprite || o.isInstancedMesh || (o.isMesh && Array.isArray(o.material))) keepers.push(o); return; }
    const g = o.geometry;
    const key = `${matSig(o.material)}|${Object.keys(g.attributes).sort().join(',')}|${o.castShadow ? 1 : 0}`;
    let b = buckets.get(key);
    if (!b) buckets.set(key, b = { mat: o.material, cast: o.castShadow, geos: [] });
    const c = (g.index ? g.toNonIndexed() : g.clone());
    c.applyMatrix4(o.matrixWorld);
    b.geos.push(c);
  });
  for (const k of keepers) { k.updateMatrixWorld(true); k.matrix.copy(k.matrixWorld); k.matrix.decompose(k.position, k.quaternion, k.scale); }
  root.clear();
  for (const k of keepers) root.add(k);
  for (const b of buckets.values()) {
    const geo = b.geos.length === 1 ? b.geos[0] : mergeGeometries(b.geos);
    if (!geo) continue;
    const m = new Mesh(geo, b.mat);
    m.castShadow = b.cast;
    m.receiveShadow = true;
    root.add(m);
  }
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
  // One draw call per shelf unit: merge the parts.
  const parts = [];
  g.children.forEach((m) => { m.updateMatrix(); const geo = m.geometry.clone(); geo.applyMatrix4(m.matrix); parts.push(geo); });
  const merged = new Mesh(mergeGeometries(parts.map((x) => x.toNonIndexed())), material);
  const out = new Group();
  out.add(merged);
  out.position.set(f.x, 0, f.z);
  return out;
}

window.LLInside3D = { openInside };
