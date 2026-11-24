// Look and mood for the first-person interiors (three.js r170).
// Everything is made in code: canvas textures (color, roughness, normal), a flashlight
// with a cookie and shadows, dead / flickering / emergency ceiling lights, exit signs,
// cold daylight from the door with a soft light shaft, dust that catches the light,
// paper notices on walls, floor decals and broken glass.
// No game rules here. inside3d.js decides what goes where and calls these helpers.
//
// Units are meters, like src/engine/interior.js: the door is at z = 0, the building goes
// toward -z. Surfaces are made for world-space UVs (see worldUV) so that one material can
// be shared by every mesh; setRepeat() is there for meshes that keep their own 0..1 UVs.
import {
  Color, FogExp2, HemisphereLight, SpotLight, PointLight, Object3D, Group, Mesh, Points, Sprite,
  BoxGeometry, PlaneGeometry, CylinderGeometry, SphereGeometry, BufferGeometry, BufferAttribute,
  MeshStandardMaterial, MeshBasicMaterial, SpriteMaterial, ShaderMaterial,
  CanvasTexture, RepeatWrapping, ClampToEdgeWrapping, SRGBColorSpace, NoColorSpace, LinearMipmapLinearFilter,
  DoubleSide, AdditiveBlending, ACESFilmicToneMapping, PCFSoftShadowMap, PCFShadowMap,
  Vector3, Vector2, Vector4, Quaternion, MathUtils, Scene, BackSide, PMREMGenerator,
} from 'three';

// ---------- small helpers ----------
const rngFrom = (seed) => {
  let s = (Math.abs(Math.floor(seed)) % 2147483646) + 1;
  return () => (s = (s * 16807) % 2147483647) / 2147483647;
};
const hash2 = (x, z) => {
  const s = Math.sin(x * 127.1 + z * 311.7) * 43758.5453;
  return s - Math.floor(s);
};
const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);
const fade = (t) => t * t * (3 - 2 * t);
const canvas = (w, h = w) => {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  return c;
};

// Tileable value noise, w x h pixels, cx x cy lattice cells.
function noiseField(w, h, cx, cy, rnd) {
  const g = new Float32Array(cx * cy);
  for (let i = 0; i < g.length; i++) g[i] = rnd();
  const out = new Float32Array(w * h);
  for (let y = 0; y < h; y++) {
    const fy = (y / h) * cy;
    const y0 = Math.floor(fy);
    const ty = fade(fy - y0);
    const r0 = (y0 % cy) * cx;
    const r1 = ((y0 + 1) % cy) * cx;
    for (let x = 0; x < w; x++) {
      const fx = (x / w) * cx;
      const x0 = Math.floor(fx);
      const tx = fade(fx - x0);
      const a = x0 % cx;
      const b = (x0 + 1) % cx;
      const top = g[r0 + a] + (g[r0 + b] - g[r0 + a]) * tx;
      const bot = g[r1 + a] + (g[r1 + b] - g[r1 + a]) * tx;
      out[y * w + x] = top + (bot - top) * ty;
    }
  }
  return out;
}

// Fractal noise in 0..1. cells: lattice of the first octave (x, y).
function fbm(w, h, cx, cy, octaves, rnd, gain = 0.5) {
  const out = new Float32Array(w * h);
  let amp = 1;
  let total = 0;
  for (let o = 0; o < octaves; o++) {
    const n = noiseField(w, h, cx << o, cy << o, rnd);
    for (let i = 0; i < out.length; i++) out[i] += n[i] * amp;
    total += amp;
    amp *= gain;
  }
  for (let i = 0; i < out.length; i++) out[i] /= total;
  return out;
}

// A layer set: color, height and roughness canvases of one surface.
function layers(w, h) {
  const col = canvas(w, h);
  const hgt = canvas(w, h);
  const rough = canvas(w, h);
  return { w, h, col, hgt, rough, c: col.getContext('2d'), hc: hgt.getContext('2d'), rc: rough.getContext('2d') };
}

// Write per-pixel values: fn(i, x, y) -> [r,g,b, height 0..1, rough 0..1]
function paint(L, fn) {
  const { w, h } = L;
  const ci = L.c.createImageData(w, h);
  const hi = L.hc.createImageData(w, h);
  const ri = L.rc.createImageData(w, h);
  const o = [0, 0, 0, 0, 0];
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const i = y * w + x;
      fn(i, x, y, o);
      const p = i * 4;
      ci.data[p] = o[0]; ci.data[p + 1] = o[1]; ci.data[p + 2] = o[2]; ci.data[p + 3] = 255;
      const hv = clamp01(o[3]) * 255;
      hi.data[p] = hi.data[p + 1] = hi.data[p + 2] = hv; hi.data[p + 3] = 255;
      const rv = clamp01(o[4]) * 255;
      ri.data[p] = ri.data[p + 1] = ri.data[p + 2] = rv; ri.data[p + 3] = 255;
    }
  }
  L.c.putImageData(ci, 0, 0);
  L.hc.putImageData(hi, 0, 0);
  L.rc.putImageData(ri, 0, 0);
}

// Draw a shape and its copies across the edges, so tiles have no seams.
function wrapped(w, h, x, y, r, draw) {
  for (const dx of [-w, 0, w]) {
    for (const dy of [-h, 0, h]) {
      if (x + dx + r < 0 || x + dx - r > w || y + dy + r < 0 || y + dy - r > h) continue;
      draw(x + dx, y + dy);
    }
  }
}

// Normal map (OpenGL style, +Y up) from the height canvas.
function normalCanvas(L, strength) {
  const { w, h } = L;
  const src = L.hc.getImageData(0, 0, w, h).data;
  const out = canvas(w, h);
  const ctx = out.getContext('2d');
  const img = ctx.createImageData(w, h);
  const H = (x, y) => src[(((y + h) % h) * w + ((x + w) % w)) * 4] / 255;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const dx = (H(x + 1, y) - H(x - 1, y)) * strength;
      const dy = (H(x, y + 1) - H(x, y - 1)) * strength;
      let nx = -dx;
      let ny = dy;
      let nz = 1;
      const l = Math.hypot(nx, ny, nz);
      nx /= l; ny /= l; nz /= l;
      const p = (y * w + x) * 4;
      img.data[p] = (nx * 0.5 + 0.5) * 255;
      img.data[p + 1] = (ny * 0.5 + 0.5) * 255;
      img.data[p + 2] = (nz * 0.5 + 0.5) * 255;
      img.data[p + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  return out;
}

function tex(c, srgb, wrap = true) {
  const t = new CanvasTexture(c);
  t.wrapS = t.wrapT = wrap ? RepeatWrapping : ClampToEdgeWrapping;
  t.colorSpace = srgb ? SRGBColorSpace : NoColorSpace;
  t.minFilter = LinearMipmapLinearFilter;
  t.anisotropy = 4;
  return t;
}

// Build the material from a layer set. tile: [meters across, meters up] of one texture.
function surfaceMaterial(L, { tile, normal = 2, roughness = 1, metalness = 0, envColor }) {
  const map = tex(L.col, true);
  const roughnessMap = tex(L.rough, false);
  const normalMap = tex(normalCanvas(L, normal), false);
  for (const t of [map, roughnessMap, normalMap]) t.repeat.set(1 / tile[0], 1 / tile[1]);
  const m = new MeshStandardMaterial({ map, roughnessMap, normalMap, roughness, metalness });
  m.normalScale = new Vector2(1, 1);
  if (envColor) m.color = new Color(envColor);
  m.userData.tile = tile;
  return m;
}

// ---------- the surfaces ----------
function rgb(hex) {
  return [(hex >> 16) & 255, (hex >> 8) & 255, hex & 255];
}
function mix3(a, b, t, o) {
  o[0] = a[0] + (b[0] - a[0]) * t;
  o[1] = a[1] + (b[1] - a[1]) * t;
  o[2] = a[2] + (b[2] - a[2]) * t;
}

// Scuff marks: short dark arcs (shoes, carts).
function scuffs(L, n, rnd, alpha = 0.35) {
  const { c, w, h } = L;
  for (let i = 0; i < n; i++) {
    const x = rnd() * w;
    const y = rnd() * h;
    const r = (0.02 + rnd() * 0.08) * w;
    const a0 = rnd() * 6.3;
    wrapped(w, h, x, y, r, (px, py) => {
      c.strokeStyle = `rgba(20,18,16,${alpha * (0.3 + rnd() * 0.7)})`;
      c.lineWidth = 0.6 + rnd() * 2.2 * (w / 512);
      c.beginPath();
      c.arc(px, py, r, a0, a0 + 0.3 + rnd() * 0.9);
      c.stroke();
    });
  }
}

// Water stains: irregular blotches with a faint tide line at the edge (from noise, not circles).
const STAIN_CACHE = {};
function stainBlob(S, variant) {
  const key = `${S}-${variant}`;
  if (STAIN_CACHE[key]) return STAIN_CACHE[key];
  const rnd = rngFrom(900 + variant * 17);
  const f = fbm(S, S, 3, 3, 5, rnd, 0.6);
  const c = canvas(S);
  const g = c.getContext('2d');
  const img = g.createImageData(S, S);
  for (let y = 0; y < S; y++) {
    for (let x = 0; x < S; x++) {
      const i = y * S + x;
      const d = Math.hypot(x - S / 2, y - S / 2) / (S / 2);
      const v = f[i] * 1.35 + 0.3 - d * 0.6; // > 0.5 inside the stain
      const inside = clamp01((v - 0.5) * 14);
      const tide = Math.exp(-(((v - 0.53) * 26) ** 2)); // thin line at the edge
      const a = (inside * 0.3 + tide * 0.28) * clamp01((1 - d) * 3);
      const p = i * 4;
      img.data[p] = img.data[p + 1] = img.data[p + 2] = 255;
      img.data[p + 3] = clamp01(a) * 255;
    }
  }
  g.putImageData(img, 0, 0);
  STAIN_CACHE[key] = c;
  return c;
}
function stains(L, n, rnd, color = '90,62,30', maxR = 0.18, strength = 1) {
  const { c, rc, w, h } = L;
  const blob = stainBlob(128, Math.floor(rnd() * 3));
  const t = canvas(128);
  const tg = t.getContext('2d');
  tg.drawImage(blob, 0, 0);
  tg.globalCompositeOperation = 'source-in';
  tg.fillStyle = `rgb(${color})`;
  tg.fillRect(0, 0, 128, 128);
  for (let i = 0; i < n; i++) {
    const x = rnd() * w;
    const y = rnd() * h;
    const r = (0.04 + rnd() * maxR) * Math.min(w, h);
    const rot = rnd() * 6.3;
    const sy = 0.6 + rnd() * 0.5;
    wrapped(w, h, x, y, r, (px, py) => {
      for (const ctx of [c, rc]) {
        ctx.save();
        ctx.translate(px, py);
        ctx.rotate(rot);
        ctx.scale(1, sy);
        ctx.globalAlpha = ctx === c ? 0.8 * strength : 0.25;
        ctx.drawImage(ctx === c ? t : blob, -r, -r, r * 2, r * 2);
        ctx.restore();
      }
    });
  }
}

// Dark grime blotches from a noise field.
function grimeField(w, h, rnd, cells = 4) {
  return fbm(w, h, cells, cells, 5, rnd, 0.55);
}

function makeStoreTile(S, seed) {
  // 1.2 m texture = 4 x 4 tiles of 30 cm (vinyl composition tile).
  const rnd = rngFrom(seed);
  const L = layers(S, S);
  const n1 = fbm(S, S, 8, 8, 4, rnd);
  const grime = grimeField(S, S, rnd, 3);
  const chips = noiseField(S, S, S / 2, S / 2, rnd);
  const tiles = [];
  for (let i = 0; i < 16; i++) tiles.push(rnd());
  const cell = S / 4;
  const pale = rgb(0xc4c0b4);
  const pale2 = rgb(0xb3ae9f);
  const dirt = rgb(0x4a3f31);
  const c = [0, 0, 0];
  paint(L, (i, x, y, o) => {
    const tx = Math.floor(x / cell);
    const ty = Math.floor(y / cell);
    const lx = (x % cell) / cell;
    const ly = (y % cell) / cell;
    const edge = Math.min(lx, ly, 1 - lx, 1 - ly); // 0 at grout
    const tv = tiles[ty * 4 + tx];
    mix3(pale, pale2, tv * 0.8, c);
    // vinyl chips
    const ch = chips[i];
    const k = ch > 0.82 ? -26 : ch < 0.12 ? 14 : 0;
    const shade = (n1[i] - 0.5) * 26 + k;
    // grime: more near the grout, more in blotches
    const g = clamp01((grime[i] - 0.45) * 2.2) * 0.45 + clamp01(1 - edge * 30) * 0.3 * (0.5 + grime[i]);
    o[0] = c[0] + shade; o[1] = c[1] + shade; o[2] = c[2] + shade;
    const gm = Math.min(0.75, g);
    o[0] += (dirt[0] - o[0]) * gm; o[1] += (dirt[1] - o[1]) * gm; o[2] += (dirt[2] - o[2]) * gm;
    const grout = edge < 0.006;
    if (grout) { o[0] *= 0.72; o[1] *= 0.72; o[2] *= 0.72; }
    o[3] = grout ? 0.45 : 0.62 + n1[i] * 0.06 - g * 0.05;
    o[4] = 0.42 + g * 0.45 + (grout ? 0.4 : 0) + (n1[i] - 0.5) * 0.1;
  });
  scuffs(L, 45, rnd, 0.3);
  return surfaceMaterial(L, { tile: [1.2, 1.2], normal: 2 });
}

function makeLinoleum(S, seed) {
  // 2 m sheet vinyl: mottled grey green, a seam, glossy where it was waxed.
  const rnd = rngFrom(seed);
  const L = layers(S, S);
  const m1 = fbm(S, S, 6, 6, 5, rnd, 0.6);
  const m2 = noiseField(S, S, S / 3, S / 3, rnd);
  const grime = grimeField(S, S, rnd, 3);
  const base = rgb(0x93a09a);
  const dark = rgb(0x5f6b66);
  const c = [0, 0, 0];
  paint(L, (i, x, y, o) => {
    mix3(base, dark, clamp01((m1[i] - 0.35) * 1.6), c);
    const fleck = m2[i] > 0.86 ? 22 : m2[i] < 0.1 ? -18 : 0;
    const g = clamp01((grime[i] - 0.45) * 2.2);
    o[0] = c[0] + fleck - g * 40; o[1] = c[1] + fleck - g * 38; o[2] = c[2] + fleck - g * 42;
    const seam = Math.abs(x - S / 2) < 1;
    if (seam) { o[0] *= 0.55; o[1] *= 0.55; o[2] *= 0.55; }
    o[3] = seam ? 0.3 : 0.6 + m1[i] * 0.04;
    o[4] = 0.28 + g * 0.5 + m1[i] * 0.15;
  });
  scuffs(L, 60, rnd, 0.32);
  stains(L, 2, rnd, '80,70,40', 0.1);
  return surfaceMaterial(L, { tile: [2, 2], normal: 1.5 });
}

function makeWood(S, seed) {
  // 1.2 m: 8 planks of 15 cm, boards of random length, grain, worn path.
  const rnd = rngFrom(seed);
  const L = layers(S, S);
  const grain = fbm(S, S, 2, 48, 4, rnd, 0.5);
  const grain2 = noiseField(S, S, 6, 160, rnd);
  const wear = grimeField(S, S, rnd, 3);
  const planks = 8;
  const pw = S / planks;
  const ends = [];
  for (let p = 0; p < planks; p++) {
    const a = rnd();
    ends.push([a, (a + 0.35 + rnd() * 0.3) % 1]);
  }
  const tones = [];
  for (let i = 0; i < planks * 3; i++) tones.push(rnd());
  const light = rgb(0x8f6e50);
  const darkC = rgb(0x4f3a28);
  const c = [0, 0, 0];
  paint(L, (i, x, y, o) => {
    const p = Math.floor(x / pw);
    const lx = (x % pw) / pw;
    const v = y / S;
    const [e1, e2] = ends[p];
    const seg = (v > Math.min(e1, e2) && v < Math.max(e1, e2)) ? 1 : 0;
    const tone = tones[p * 3 + seg];
    mix3(light, darkC, 0.25 + tone * 0.5, c);
    const gr = (grain[i] - 0.5) * 50 + (grain2[i] - 0.5) * 22;
    const w = clamp01((wear[i] - 0.5) * 2);
    o[0] = c[0] + gr - w * 18; o[1] = c[1] + gr * 0.8 - w * 18; o[2] = c[2] + gr * 0.6 - w * 14;
    const gap = lx < 0.025 || lx > 0.975 || Math.abs(v - e1) < 0.003 || Math.abs(v - e2) < 0.003;
    if (gap) { o[0] *= 0.5; o[1] *= 0.5; o[2] *= 0.5; }
    o[3] = gap ? 0.25 : 0.6 + (grain2[i] - 0.5) * 0.12;
    o[4] = 0.5 + w * 0.35 + (grain[i] - 0.5) * 0.15 + (gap ? 0.4 : 0);
  });
  scuffs(L, 25, rnd, 0.25);
  stains(L, 2, rnd, '40,25,12', 0.1);
  return surfaceMaterial(L, { tile: [1.6, 1.6], normal: 2.5 });
}

function makeCarpet(S, seed) {
  const rnd = rngFrom(seed);
  const L = layers(S, S);
  const fine = noiseField(S, S, S / 2, S / 2, rnd);
  const mid = fbm(S, S, 16, 16, 3, rnd);
  const grime = grimeField(S, S, rnd, 3);
  const base = rgb(0x5d5a52);
  paint(L, (i, x, y, o) => {
    const f = (fine[i] - 0.5) * 30 + (mid[i] - 0.5) * 24;
    const g = clamp01((grime[i] - 0.45) * 2);
    o[0] = base[0] + f - g * 30; o[1] = base[1] + f - g * 30; o[2] = base[2] + f - g * 26;
    o[3] = 0.5 + fine[i] * 0.4;
    o[4] = 0.95;
  });
  stains(L, 4, rnd, '60,40,22', 0.14);
  return surfaceMaterial(L, { tile: [1, 1], normal: 1.2 });
}

function makeConcrete(S, seed) {
  // 3 m slab: control joints every 1.5 m, cracks, oil spots, pits.
  const rnd = rngFrom(seed);
  const L = layers(S, S);
  const big = fbm(S, S, 4, 4, 6, rnd, 0.55);
  const pits = noiseField(S, S, S / 2, S / 2, rnd);
  const base = rgb(0x8b8a84);
  paint(L, (i, x, y, o) => {
    const v = (big[i] - 0.5) * 60;
    const pit = pits[i] > 0.9 ? -30 : 0;
    o[0] = base[0] + v + pit; o[1] = base[1] + v + pit; o[2] = base[2] + v * 0.95 + pit;
    const joint = Math.abs((x % (S / 2)) - 0) < 1.2 || Math.abs((y % (S / 2)) - 0) < 1.2;
    if (joint) { o[0] *= 0.4; o[1] *= 0.4; o[2] *= 0.4; }
    o[3] = joint ? 0.1 : 0.55 + big[i] * 0.15 + (pit ? -0.2 : 0);
    o[4] = 0.82 + (big[i] - 0.5) * 0.2;
  });
  // cracks: random walks
  const { c, hc, w, h } = L;
  for (let k = 0; k < 4; k++) {
    let x = rnd() * w;
    let y = rnd() * h;
    let a = rnd() * 6.3;
    c.strokeStyle = 'rgba(25,24,22,0.7)';
    hc.strokeStyle = 'rgba(0,0,0,0.8)';
    c.lineWidth = hc.lineWidth = 1.2 * (w / 512);
    c.beginPath(); hc.beginPath();
    c.moveTo(x, y); hc.moveTo(x, y);
    for (let s = 0; s < 40; s++) {
      a += (rnd() - 0.5) * 0.9;
      x += Math.cos(a) * 6 * (w / 512);
      y += Math.sin(a) * 6 * (w / 512);
      c.lineTo(x, y); hc.lineTo(x, y);
    }
    c.stroke(); hc.stroke();
  }
  // oil spots: dark and glossy
  for (let k = 0; k < 4; k++) {
    const x = rnd() * w;
    const y = rnd() * h;
    const r = (0.03 + rnd() * 0.08) * w;
    wrapped(w, h, x, y, r, (px, py) => {
      const g = c.createRadialGradient(px, py, 0, px, py, r);
      g.addColorStop(0, 'rgba(15,13,10,0.55)');
      g.addColorStop(1, 'rgba(15,13,10,0)');
      c.fillStyle = g;
      c.beginPath(); c.arc(px, py, r, 0, 6.3); c.fill();
      const rg = L.rc.createRadialGradient(px, py, 0, px, py, r);
      rg.addColorStop(0, 'rgba(0,0,0,0.6)');
      rg.addColorStop(1, 'rgba(0,0,0,0)');
      L.rc.fillStyle = rg;
      L.rc.beginPath(); L.rc.arc(px, py, r, 0, 6.3); L.rc.fill();
    });
  }
  return surfaceMaterial(L, { tile: [3, 3], normal: 2 });
}

// Painted wall, 2 m wide x 6 m tall, bottom of the texture = the floor (use worldUV).
function makeDrywall(S, seed, paintHex, baseHex) {
  const rnd = rngFrom(seed);
  const W = S;
  const H = S * 3;
  const L = layers(W, H);
  const peel = noiseField(W, H, W / 3, H / 3, rnd);
  const mot = fbm(W, H, 3, 9, 5, rnd, 0.55);
  const p = rgb(paintHex);
  const b = rgb(baseHex);
  const basePx = Math.round(H * (0.11 / 6)); // 11 cm cove base
  const dirtBand = Math.round(H * (0.9 / 6)); // dirt up to ~0.9 m
  paint(L, (i, x, y, o) => {
    const fromFloor = H - 1 - y;
    if (fromFloor < basePx) {
      const lip = fromFloor > basePx - 3 ? 18 : 0;
      o[0] = b[0] + lip + (mot[i] - 0.5) * 12; o[1] = b[1] + lip + (mot[i] - 0.5) * 12; o[2] = b[2] + lip + (mot[i] - 0.5) * 12;
      o[3] = 0.85; o[4] = 0.55;
      return;
    }
    const m = (mot[i] - 0.5) * 22;
    const low = clamp01(1 - (fromFloor - basePx) / dirtBand); // dirt near the floor
    const d = low * low * (0.4 + mot[i] * 0.6);
    o[0] = p[0] + m - d * 60; o[1] = p[1] + m - d * 62; o[2] = p[2] + m - d * 66;
    o[3] = 0.5 + peel[i] * 0.06;
    o[4] = 0.78 + d * 0.15;
  });
  const { c, rc } = L;
  // water stains with drip trails from above
  for (let k = 0; k < 2; k++) {
    const x = rnd() * W;
    const y = H * (0.35 + rnd() * 0.25);
    const r = W * (0.1 + rnd() * 0.12);
    for (let t = 0; t < 5; t++) {
      const dx = x + (rnd() - 0.5) * r;
      const len = H * (0.04 + rnd() * 0.2);
      const lg = c.createLinearGradient(dx, y, dx, y + len);
      lg.addColorStop(0, 'rgba(100,72,38,0.22)');
      lg.addColorStop(1, 'rgba(100,72,38,0)');
      c.fillStyle = lg;
      c.fillRect(dx, y, 1 + rnd() * 2.5, len);
    }
  }
  stains(L, 3, rnd, '105,78,40', 0.16, 0.7);
  // scuffs and black marks low on the wall
  for (let k = 0; k < 14; k++) {
    const x = rnd() * W;
    const y = H - basePx - rnd() * H * 0.12;
    c.fillStyle = `rgba(30,28,26,${0.06 + rnd() * 0.14})`;
    c.save(); c.translate(x, y); c.rotate((rnd() - 0.5) * 0.5);
    c.fillRect(0, 0, 2 + rnd() * W * 0.05, 0.8 + rnd() * 1.5);
    c.restore();
  }
  // chipped paint
  for (let k = 0; k < 5; k++) {
    const x = rnd() * W;
    const y = H * (0.6 + rnd() * 0.35);
    const r = 1 + rnd() * 3 * (W / 512);
    c.fillStyle = 'rgba(160,150,135,0.7)';
    c.beginPath(); c.arc(x, y, r, 0, 6.3); c.fill();
    L.hc.fillStyle = 'rgba(0,0,0,0.6)';
    L.hc.beginPath(); L.hc.arc(x, y, r, 0, 6.3); L.hc.fill();
  }
  rc.globalAlpha = 1;
  return surfaceMaterial(L, { tile: [2, 6], normal: 1.6 });
}

function makeTileWall(S, seed) {
  // 0.6 m = 4 x 4 ceramic tiles of 15 cm; dirty grout, a cracked tile.
  const rnd = rngFrom(seed);
  const L = layers(S, S);
  const n = fbm(S, S, 6, 6, 4, rnd);
  const grime = grimeField(S, S, rnd, 2);
  const cell = S / 4;
  const tile = rgb(0xd8dad3);
  const tones = [];
  for (let i = 0; i < 16; i++) tones.push(rnd());
  paint(L, (i, x, y, o) => {
    const lx = (x % cell) / cell;
    const ly = (y % cell) / cell;
    const edge = Math.min(lx, ly, 1 - lx, 1 - ly);
    const grout = edge < 0.035;
    const t = tones[Math.floor(y / cell) * 4 + Math.floor(x / cell)];
    const g = clamp01((grime[i] - 0.45) * 2);
    if (grout) {
      const v = 120 - g * 60 + (n[i] - 0.5) * 30;
      o[0] = v; o[1] = v * 0.95; o[2] = v * 0.85;
      o[3] = 0.2; o[4] = 0.9;
      return;
    }
    const s = (n[i] - 0.5) * 10 - t * 10 - g * 35;
    o[0] = tile[0] + s; o[1] = tile[1] + s; o[2] = tile[2] + s - g * 8;
    const bevel = clamp01(edge * 12);
    o[3] = 0.35 + bevel * 0.4;
    o[4] = 0.12 + g * 0.4;
  });
  // crack across one tile
  const { c, hc } = L;
  const cx0 = Math.floor(rnd() * 4) * cell;
  const cy0 = Math.floor(rnd() * 4) * cell;
  c.strokeStyle = 'rgba(40,40,36,0.8)';
  hc.strokeStyle = 'rgba(0,0,0,1)';
  c.lineWidth = hc.lineWidth = 1;
  for (const ctx of [c, hc]) {
    ctx.beginPath();
    ctx.moveTo(cx0 + cell * 0.1, cy0 + cell * 0.2);
    ctx.lineTo(cx0 + cell * 0.45, cy0 + cell * 0.55);
    ctx.lineTo(cx0 + cell * 0.6, cy0 + cell * 0.5);
    ctx.lineTo(cx0 + cell * 0.92, cy0 + cell * 0.85);
    ctx.stroke();
  }
  return surfaceMaterial(L, { tile: [0.6, 0.6], normal: 4 });
}

function makeCeilingTile(S, seed) {
  // 2.4 m = 4 x 4 acoustic tiles of 60 cm in a T-bar grid; stains, one missing.
  const rnd = rngFrom(seed);
  const L = layers(S, S);
  const fis = fbm(S, S, 24, 24, 3, rnd, 0.6);
  const pin = noiseField(S, S, S / 1.5, S / 1.5, rnd);
  const sag = fbm(S, S, 4, 4, 3, rnd);
  const cell = S / 4;
  const missing = -1; // holes are better as separate meshes (no visible repeat)
  const tones = [];
  for (let i = 0; i < 16; i++) tones.push(rnd());
  paint(L, (i, x, y, o) => {
    const ti = Math.floor(y / cell) * 4 + Math.floor(x / cell);
    const lx = (x % cell) / cell;
    const ly = (y % cell) / cell;
    const edge = Math.min(lx, ly, 1 - lx, 1 - ly);
    if (edge < 0.018) { // T-bar
      o[0] = 168; o[1] = 168; o[2] = 162; o[3] = 1; o[4] = 0.55;
      return;
    }
    if (ti === missing) { // hole into the dark plenum
      const v = 14 + fis[i] * 18;
      o[0] = v; o[1] = v; o[2] = v; o[3] = 0; o[4] = 1;
      return;
    }
    const v = 172 - tones[ti] * 16 + (fis[i] - 0.5) * 28 - (pin[i] > 0.88 ? 40 : 0) - clamp01((sag[i] - 0.5) * 2) * 20;
    o[0] = v; o[1] = v * 0.985; o[2] = v * 0.94;
    o[3] = 0.6 + fis[i] * 0.2 - (pin[i] > 0.88 ? 0.2 : 0);
    o[4] = 1;
  });
  stains(L, 4, rnd, '120,85,40', 0.12, 0.8);
  return surfaceMaterial(L, { tile: [2.4, 2.4], normal: 2.5 });
}

function makeBlockWall(S, seed) {
  // 1.6 m painted concrete block: 4 blocks of 40 cm across, 8 courses of 20 cm.
  const rnd = rngFrom(seed);
  const L = layers(S, S);
  const n = fbm(S, S, 10, 10, 4, rnd, 0.6);
  const pits = noiseField(S, S, S / 2, S / 2, rnd);
  const grime = grimeField(S, S, rnd, 2);
  const p = rgb(0xa8ab9f);
  const bw = S / 4;
  const bh = S / 8;
  paint(L, (i, x, y, o) => {
    const row = Math.floor(y / bh);
    const xx = (x + (row % 2 ? bw / 2 : 0)) % S;
    const lx = (xx % bw) / bw;
    const ly = (y % bh) / bh;
    const joint = lx < 0.02 || lx > 0.98 || ly < 0.04 || ly > 0.96;
    const g = clamp01((grime[i] - 0.5) * 2);
    const v = (n[i] - 0.5) * 22 - (pits[i] > 0.85 ? 20 : 0) - g * 30;
    o[0] = p[0] + v; o[1] = p[1] + v; o[2] = p[2] + v;
    if (joint) { o[0] *= 0.8; o[1] *= 0.8; o[2] *= 0.8; }
    o[3] = joint ? 0.2 : 0.6 + n[i] * 0.2 - (pits[i] > 0.85 ? 0.25 : 0);
    o[4] = 0.65 + g * 0.2;
  });
  stains(L, 2, rnd, '90,70,40', 0.14);
  return surfaceMaterial(L, { tile: [1.6, 1.6], normal: 3 });
}

function makePlaster(S, seed, hex = 0xc4c0b6) {
  const rnd = rngFrom(seed);
  const L = layers(S, S);
  const n = fbm(S, S, 5, 5, 5, rnd, 0.55);
  const fine = noiseField(S, S, S / 3, S / 3, rnd);
  const p = rgb(hex);
  paint(L, (i, x, y, o) => {
    const v = (n[i] - 0.5) * 20;
    o[0] = p[0] + v; o[1] = p[1] + v; o[2] = p[2] + v;
    o[3] = 0.5 + fine[i] * 0.15;
    o[4] = 0.92;
  });
  stains(L, 2, rnd, '115,85,45', 0.1, 0.35);
  return surfaceMaterial(L, { tile: [3, 3], normal: 1.2 });
}

const SURF_CACHE = {};

// All the shared surface materials. quality 'low' makes smaller textures.
// Built lazily: a surface is generated the first time it is read (a store only pays for
// its floor, wall and ceiling). makeSurfaces(q).all() builds them all.
export function makeSurfaces(quality = 'high') {
  if (SURF_CACHE[quality]) return SURF_CACHE[quality];
  const low = quality === 'low';
  const S = low ? 256 : 512;
  const makers = {
    storeTile: () => makeStoreTile(S, 11),
    linoleum: () => makeLinoleum(S, 23),
    woodFloor: () => makeWood(S, 37),
    carpet: () => makeCarpet(low ? 256 : 384, 41),
    concrete: () => makeConcrete(S, 53),
    drywall: () => makeDrywall(low ? 192 : 384, 61, 0xb4b8aa, 0x3b3a37),
    drywallWarm: () => makeDrywall(low ? 192 : 384, 67, 0xb3a58c, 0xd2ccbe),
    tileWall: () => makeTileWall(S, 71),
    ceilingTile: () => makeCeilingTile(S, 83),
    blockWall: () => makeBlockWall(S, 89),
    plaster: () => makePlaster(low ? 256 : 384, 97),
  };
  const s = { quality, surfaceFor: (cat, part, room) => surfaceFor(cat, part, room, quality) };
  const built = {};
  for (const k of Object.keys(makers)) {
    Object.defineProperty(s, k, { enumerable: true, get: () => (built[k] ||= makers[k]()) });
  }
  s.names = Object.keys(makers);
  s.all = () => { for (const k of s.names) void s[k]; return s; };
  SURF_CACHE[quality] = s;
  return s;
}

const FLOOR_BY_CAT = {
  supermarket: 'storeTile', convenience: 'storeTile', gas: 'storeTile', pharmacy: 'storeTile',
  clinic: 'linoleum', hospital: 'linoleum', hardware: 'concrete', outdoor: 'woodFloor',
  fire: 'concrete', house: 'woodFloor',
};
const WALL_BY_CAT = {
  supermarket: 'drywall', convenience: 'drywall', gas: 'blockWall', pharmacy: 'drywall',
  clinic: 'drywall', hospital: 'drywall', hardware: 'blockWall', outdoor: 'drywallWarm',
  fire: 'blockWall', house: 'drywallWarm',
};
const CEIL_BY_CAT = {
  supermarket: 'ceilingTile', convenience: 'ceilingTile', gas: 'ceilingTile', pharmacy: 'ceilingTile',
  clinic: 'ceilingTile', hospital: 'ceilingTile', hardware: 'concrete', outdoor: 'plaster',
  fire: 'plaster', house: 'plaster',
};

// The surface for a building category and a part: 'floor' | 'wall' | 'ceiling'.
// room (optional) refines houses: 'bathroom' -> tile walls, 'bedroom'/'living room' -> carpet,
// 'garage' -> concrete. Returns a shared material (made with the quality of the first makeSurfaces call
// unless quality is given).
export function surfaceFor(cat, part, room, quality) {
  const q = quality || (SURF_CACHE.high ? 'high' : SURF_CACHE.low ? 'low' : 'high');
  const s = makeSurfaces(q);
  if (room === 'bathroom' && part === 'wall') return s.tileWall;
  if (room === 'bathroom' && part === 'floor') return s.linoleum;
  if (room === 'garage') return part === 'ceiling' ? s.plaster : part === 'wall' ? s.blockWall : s.concrete;
  if ((room === 'bedroom' || room === 'second bedroom') && part === 'floor') return s.carpet;
  const table = part === 'floor' ? FLOOR_BY_CAT : part === 'wall' ? WALL_BY_CAT : CEIL_BY_CAT;
  return s[table[cat] || (part === 'floor' ? 'storeTile' : part === 'wall' ? 'drywall' : 'ceilingTile')];
}

// For meshes that keep 0..1 UVs (PlaneGeometry etc.): a clone of the material whose
// textures repeat to fit w x h meters. Textures share their image (no new upload).
const REPEAT_CACHE = new Map();
export function setRepeat(material, w, h) {
  const tile = material.userData.tile || [1, 1];
  const rx = Math.round((w / tile[0]) * 100) / 100;
  const ry = Math.round((h / tile[1]) * 100) / 100;
  const key = `${material.uuid}|${rx}|${ry}`;
  if (REPEAT_CACHE.has(key)) return REPEAT_CACHE.get(key);
  const m = material.clone();
  for (const k of ['map', 'roughnessMap', 'normalMap']) {
    if (!material[k]) continue;
    m[k] = material[k].clone();
    m[k].repeat.set(rx, ry);
  }
  m.userData = { ...material.userData, repeat: [rx, ry] };
  REPEAT_CACHE.set(key, m);
  return m;
}

// World-space UVs (meters) for any mesh, from its current world transform: walls get
// u along the wall and v = height above the floor, floors and ceilings get x/z.
// Then one shared surface material fits every mesh, with no clones. Call after the mesh
// is placed (position/rotation set). Changes the geometry: do not share it between meshes.
export function worldUV(mesh) {
  mesh.updateMatrixWorld(true);
  const g = mesh.geometry;
  const pos = g.attributes.position;
  const nor = g.attributes.normal;
  const uv = g.attributes.uv;
  if (!pos || !nor || !uv) return mesh;
  const p = new Vector3();
  const n = new Vector3();
  const q = new Quaternion();
  mesh.matrixWorld.decompose(new Vector3(), q, new Vector3());
  for (let i = 0; i < pos.count; i++) {
    p.fromBufferAttribute(pos, i).applyMatrix4(mesh.matrixWorld);
    n.fromBufferAttribute(nor, i).applyQuaternion(q);
    const ax = Math.abs(n.x);
    const ay = Math.abs(n.y);
    const az = Math.abs(n.z);
    if (ay >= ax && ay >= az) uv.setXY(i, p.x, -p.z);
    else if (ax >= az) uv.setXY(i, n.x > 0 ? -p.z : p.z, p.y);
    else uv.setXY(i, n.z > 0 ? p.x : -p.x, p.y);
  }
  uv.needsUpdate = true;
  return mesh;
}

// ---------- quality ----------
export function pickQuality() {
  try {
    const q = new URLSearchParams(location.search).get('q');
    if (q === 'low' || q === 'high') return q;
  } catch { /* no location */ }
  try {
    const coarse = typeof matchMedia === 'function' && matchMedia('(pointer: coarse)').matches;
    const mobile = /Android|iPhone|iPad|iPod|Mobile|Silk/i.test(navigator.userAgent || '');
    if (coarse || mobile) return 'low';
    if ((navigator.deviceMemory || 8) <= 2) return 'low';
    let gpu = '';
    const c = document.createElement('canvas');
    const gl = c.getContext('webgl');
    if (gl) {
      const ext = gl.getExtension('WEBGL_debug_renderer_info');
      gpu = ext ? String(gl.getParameter(ext.UNMASKED_RENDERER_WEBGL)) : '';
      gl.getExtension('WEBGL_lose_context')?.loseContext();
    }
    if (/swiftshader|llvmpipe|softpipe|software|mali|adreno|powervr|videocore/i.test(gpu)) return 'low';
    // Old integrated GPUs on low-density screens (cheap laptops).
    const dpr = window.devicePixelRatio || 1;
    if (dpr < 1.3 && /intel/i.test(gpu) && !/iris|arc|uhd graphics 7/i.test(gpu) && (navigator.hardwareConcurrency || 8) <= 4) return 'low';
  } catch { /* fall through */ }
  return 'high';
}

// ---------- shared small textures ----------
const TEX = {};

function flashCookie() {
  if (TEX.cookie) return TEX.cookie;
  const S = 256;
  const c = canvas(S);
  const g = c.getContext('2d');
  g.fillStyle = '#000';
  g.fillRect(0, 0, S, S);
  const r = S / 2;
  // outer spill, reflector ring, a slightly darker ring, the hot center
  const grad = g.createRadialGradient(r, r, 0, r, r, r);
  grad.addColorStop(0, 'rgba(255,250,240,1)');
  grad.addColorStop(0.12, 'rgba(255,246,228,1)');
  grad.addColorStop(0.22, 'rgba(225,214,195,1)');
  grad.addColorStop(0.3, 'rgba(160,150,135,1)');
  grad.addColorStop(0.38, 'rgba(190,180,160,1)');
  grad.addColorStop(0.46, 'rgba(110,104,92,1)');
  grad.addColorStop(0.75, 'rgba(70,66,58,1)');
  grad.addColorStop(0.95, 'rgba(18,17,15,1)');
  grad.addColorStop(1, 'rgba(0,0,0,1)');
  g.fillStyle = grad;
  g.beginPath(); g.arc(r, r, r, 0, 6.3); g.fill();
  // lens imperfections
  const rnd = rngFrom(5);
  for (let i = 0; i < 24; i++) {
    g.fillStyle = `rgba(0,0,0,${0.015 + rnd() * 0.025})`;
    g.beginPath(); g.arc(r + (rnd() - 0.5) * r, r + (rnd() - 0.5) * r, 3 + rnd() * 10, 0, 6.3); g.fill();
  }
  const t = new CanvasTexture(c);
  t.colorSpace = SRGBColorSpace;
  TEX.cookie = t;
  return t;
}

function softDot(hex = '255,255,255') {
  const key = `dot${hex}`;
  if (TEX[key]) return TEX[key];
  const S = 64;
  const c = canvas(S);
  const g = c.getContext('2d');
  const grad = g.createRadialGradient(S / 2, S / 2, 0, S / 2, S / 2, S / 2);
  grad.addColorStop(0, `rgba(${hex},1)`);
  grad.addColorStop(0.25, `rgba(${hex},0.45)`);
  grad.addColorStop(1, `rgba(${hex},0)`);
  g.fillStyle = grad;
  g.fillRect(0, 0, S, S);
  const t = new CanvasTexture(c);
  t.colorSpace = SRGBColorSpace;
  TEX[key] = t;
  return t;
}

function prismTexture() {
  if (TEX.prism) return TEX.prism;
  const S = 128;
  const c = canvas(S, S / 2);
  const g = c.getContext('2d');
  g.fillStyle = '#d8dde0';
  g.fillRect(0, 0, S, S / 2);
  g.fillStyle = 'rgba(0,0,0,0.12)';
  for (let x = 0; x < S; x += 4) for (let y = (x / 4) % 2 ? 2 : 0; y < S / 2; y += 4) g.fillRect(x, y, 2, 2);
  // dead bugs and dust in the diffuser
  const rnd = rngFrom(3);
  for (let i = 0; i < 14; i++) {
    g.fillStyle = `rgba(30,25,20,${0.2 + rnd() * 0.5})`;
    g.fillRect(rnd() * S, S / 2 - 6 - rnd() * 20, 2 + rnd() * 3, 1 + rnd() * 2);
  }
  const t = new CanvasTexture(c);
  t.colorSpace = SRGBColorSpace;
  TEX.prism = t;
  return t;
}

// A soft rounded-rectangle glow (light around an opening), clear in the middle third.
function haloTexture() {
  if (TEX.halo) return TEX.halo;
  const W = 128;
  const H = 128;
  const c = canvas(W, H);
  const g = c.getContext('2d');
  const img = g.createImageData(W, H);
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      // distance outside the inner rectangle (the opening), in 0..1 of the margin
      const dx = Math.max(0, Math.abs(x / W - 0.5) - 0.24) / 0.26;
      const dy = Math.max(0, Math.abs(y / H - 0.52) - 0.3) / 0.2;
      const d = Math.min(1, Math.hypot(dx, dy));
      const inner = Math.abs(x / W - 0.5) < 0.24 && Math.abs(y / H - 0.52) < 0.3;
      const a = inner ? 0.25 : (1 - d) ** 2.2 * 0.8;
      const p = (y * W + x) * 4;
      img.data[p] = img.data[p + 1] = img.data[p + 2] = 255;
      img.data[p + 3] = a * 255;
    }
  }
  g.putImageData(img, 0, 0);
  const t = new CanvasTexture(c);
  TEX.halo = t;
  return t;
}

function exitTexture() {
  if (TEX.exit) return TEX.exit;
  const c = canvas(256, 128);
  const g = c.getContext('2d');
  g.fillStyle = '#0b120c';
  g.fillRect(0, 0, 256, 128);
  g.fillStyle = '#5dff7e';
  g.font = 'bold 74px "Arial Black", Arial, sans-serif';
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.fillText('EXIT', 128, 58);
  // chevrons
  g.beginPath();
  g.moveTo(26, 104); g.lineTo(44, 94); g.lineTo(44, 114); g.closePath();
  g.moveTo(230, 104); g.lineTo(212, 94); g.lineTo(212, 114); g.closePath();
  g.fill();
  g.fillRect(48, 101, 160, 6);
  const t = new CanvasTexture(c);
  t.colorSpace = SRGBColorSpace;
  TEX.exit = t;
  return t;
}

// ---------- decals ----------
function decalTexture(kind, variant) {
  const key = `decal-${kind}-${variant}`;
  if (TEX[key]) return TEX[key];
  const S = 256;
  const c = canvas(S);
  const g = c.getContext('2d');
  const rnd = rngFrom(100 + variant * 31 + kind.length * 7);
  const blob = (n, color, alpha, spread) => {
    const f = fbm(S, S, 4, 4, 5, rnd, 0.55);
    const img = g.createImageData(S, S);
    for (let y = 0; y < S; y++) {
      for (let x = 0; x < S; x++) {
        const i = y * S + x;
        const d = Math.hypot(x - S / 2, y - S / 2) / (S / 2);
        const a = clamp01((f[i] - 0.35 - d * spread) * 3) * alpha;
        const p = i * 4;
        img.data[p] = color[0] + (f[i] - 0.5) * n;
        img.data[p + 1] = color[1] + (f[i] - 0.5) * n;
        img.data[p + 2] = color[2] + (f[i] - 0.5) * n;
        img.data[p + 3] = a * 255;
      }
    }
    g.putImageData(img, 0, 0);
  };
  if (kind === 'dirt') blob(60, [62, 50, 36], 0.85, 0.55);
  else if (kind === 'water') blob(20, [18, 20, 22], 0.9, 0.5);
  else if (kind === 'snow') {
    blob(30, [228, 233, 238], 1, 0.45);
    g.globalCompositeOperation = 'source-atop';
    for (let i = 0; i < 300; i++) {
      g.fillStyle = `rgba(255,255,255,${rnd() * 0.5})`;
      g.fillRect(rnd() * S, rnd() * S, 1, 1);
    }
    g.globalCompositeOperation = 'source-over';
  } else if (kind === 'paper') {
    for (let i = 0; i < 7; i++) {
      g.save();
      g.translate(S * (0.2 + rnd() * 0.6), S * (0.2 + rnd() * 0.6));
      g.rotate(rnd() * 6.3);
      const w = 38 + rnd() * 26;
      const h = w * 1.3;
      const tone = 200 + rnd() * 40;
      g.fillStyle = `rgb(${tone},${tone - 4},${tone - 14})`;
      g.fillRect(-w / 2, -h / 2, w, h);
      g.fillStyle = 'rgba(40,40,40,0.5)';
      for (let l = 0; l < 9; l++) g.fillRect(-w / 2 + 5, -h / 2 + 8 + l * 6, (w - 10) * (0.5 + rnd() * 0.5), 1.5);
      g.fillStyle = 'rgba(80,60,30,0.25)';
      g.beginPath(); g.arc((rnd() - 0.5) * w, (rnd() - 0.5) * h, 8 + rnd() * 10, 0, 6.3); g.fill();
      // footprint smudge
      g.fillStyle = 'rgba(40,30,20,0.18)';
      g.fillRect(-w / 4, -h / 6, w / 2, h / 3);
      g.restore();
    }
  } else if (kind === 'leaves') {
    for (let i = 0; i < 46; i++) {
      g.save();
      const d = rnd() ** 0.7;
      const a = rnd() * 6.3;
      g.translate(S / 2 + Math.cos(a) * d * S * 0.42, S / 2 + Math.sin(a) * d * S * 0.42);
      g.rotate(rnd() * 6.3);
      const l = 8 + rnd() * 12;
      const hue = [[120, 70, 30], [150, 95, 35], [90, 60, 30], [110, 85, 40]][Math.floor(rnd() * 4)];
      g.fillStyle = `rgb(${hue[0]},${hue[1]},${hue[2]})`;
      g.beginPath();
      g.ellipse(0, 0, l, l * 0.45, 0, 0, 6.3);
      g.fill();
      g.strokeStyle = 'rgba(50,30,15,0.7)';
      g.lineWidth = 1;
      g.beginPath(); g.moveTo(-l, 0); g.lineTo(l, 0); g.stroke();
      g.restore();
    }
  } else if (kind === 'glass') {
    for (let i = 0; i < 70; i++) {
      const d = rnd() ** 1.3;
      const a = rnd() * 6.3;
      const x = S / 2 + Math.cos(a) * d * S * 0.45;
      const y = S / 2 + Math.sin(a) * d * S * 0.45;
      const r = (1 - d) * 10 + 2 + rnd() * 4;
      g.fillStyle = `rgba(200,220,225,${0.25 + rnd() * 0.35})`;
      g.strokeStyle = 'rgba(235,245,250,0.8)';
      g.lineWidth = 0.8;
      g.beginPath();
      g.moveTo(x + (rnd() - 0.5) * r * 2, y + (rnd() - 0.5) * r * 2);
      g.lineTo(x + (rnd() - 0.5) * r * 2, y + (rnd() - 0.5) * r * 2);
      g.lineTo(x + (rnd() - 0.5) * r * 2, y + (rnd() - 0.5) * r * 2);
      g.closePath();
      g.fill(); g.stroke();
    }
  } else if (kind === 'grime') {
    // a horizontal gradient strip used along walls: dark at v=1 (wall), clear at v=0
    const grad = g.createLinearGradient(0, S, 0, 0);
    grad.addColorStop(0, 'rgba(20,16,12,0.75)');
    grad.addColorStop(0.35, 'rgba(25,20,15,0.35)');
    grad.addColorStop(1, 'rgba(25,20,15,0)');
    g.fillStyle = grad;
    g.fillRect(0, 0, S, S);
    const f = fbm(S, S, 6, 2, 4, rnd);
    const img = g.getImageData(0, 0, S, S);
    for (let i = 0; i < S * S; i++) img.data[i * 4 + 3] *= 0.55 + f[i] * 0.9;
    g.putImageData(img, 0, 0);
  } else if (kind === 'pool') {
    const grad = g.createRadialGradient(S / 2, S / 2, 0, S / 2, S / 2, S / 2);
    grad.addColorStop(0, 'rgba(255,255,255,0.9)');
    grad.addColorStop(0.4, 'rgba(255,255,255,0.35)');
    grad.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = grad;
    g.fillRect(0, 0, S, S);
  }
  const t = new CanvasTexture(c);
  t.colorSpace = SRGBColorSpace;
  if (kind === 'grime') t.wrapS = RepeatWrapping;
  TEX[key] = t;
  return t;
}

// ---------- wall notices ----------
const NOTICE_SIZES = {
  quarantine: [0.43, 0.56], closed: [0.22, 0.28], mask: [0.43, 0.56], evac: [0.22, 0.28],
  missing: [0.22, 0.28], note: [0.5, 0.36], poster: [0.6, 0.9], staff: [0.3, 0.12],
};

function noticeTexture(kind, variant) {
  const key = `notice-${kind}-${variant}`;
  if (TEX[key]) return TEX[key];
  const [mw, mh] = NOTICE_SIZES[kind] || NOTICE_SIZES.closed;
  const W = 256;
  const H = Math.round((W * mh) / mw);
  const c = canvas(W, H);
  const g = c.getContext('2d');
  const rnd = rngFrom(7 + variant * 13 + kind.length * 101);
  const sans = 'Arial, Helvetica, sans-serif';
  const bold = '"Arial Black", Arial, sans-serif';
  const hand = '"Segoe Print", "Bradley Hand", "Comic Sans MS", cursive';
  const paper = (hex) => { g.fillStyle = hex; g.fillRect(0, 0, W, H); };
  const center = (txt, y, font, color = '#151515') => {
    g.font = font;
    g.fillStyle = color;
    g.textAlign = 'center';
    g.textBaseline = 'alphabetic';
    let size = parseInt(font, 10);
    while (g.measureText(txt).width > W * 0.88 && size > 6) {
      size -= 1;
      g.font = font.replace(/\d+px/, `${size}px`);
    }
    g.fillText(txt, W / 2, y);
  };
  const lines = (y0, n, step) => {
    g.fillStyle = 'rgba(30,30,30,0.55)';
    for (let i = 0; i < n; i++) g.fillRect(W * 0.1, y0 + i * step, W * (0.6 + rnd() * 0.2), 2);
  };
  if (kind === 'quarantine') {
    paper('#e6d64a');
    g.fillStyle = '#141414';
    g.fillRect(0, 0, W, 64);
    center('QUARANTINE', 46, `bold 40px ${bold}`, '#e6d64a');
    center('DO NOT ENTER', 110, `bold 34px ${bold}`, '#b01d14');
    // generic biohazard-like trefoil made of circles (no real logo)
    g.strokeStyle = '#141414'; g.lineWidth = 7;
    for (let k = 0; k < 3; k++) {
      const a = (k / 3) * Math.PI * 2 - Math.PI / 2;
      g.beginPath(); g.arc(W / 2 + Math.cos(a) * 22, 190 + Math.sin(a) * 22, 24, 0, 6.3); g.stroke();
    }
    g.beginPath(); g.arc(W / 2, 190, 9, 0, 6.3); g.stroke();
    center('PNEUMONIC PLAGUE EXPOSURE SITE', 262, `bold 15px ${sans}`);
    center('By order of Multnomah County Health', 286, `14px ${sans}`);
    center('Entry is prohibited until cleared.', 304, `14px ${sans}`);
  } else if (kind === 'closed') {
    paper('#efece2');
    center('CLOSED', 52, `bold 42px ${bold}`, '#121212');
    center('BY ORDER OF', 84, `bold 18px ${sans}`);
    center('WASHINGTON COUNTY HEALTH', 108, `bold 17px ${sans}`);
    g.strokeStyle = '#2a3c6a'; g.lineWidth = 3;
    g.beginPath(); g.arc(W / 2, 170, 34, 0, 6.3); g.stroke();
    g.beginPath(); g.arc(W / 2, 170, 26, 0, 6.3); g.stroke();
    center('PUBLIC HEALTH', 175, `bold 10px ${sans}`, '#2a3c6a');
    lines(222, 6, 13);
    center('Sep 19, 2026', H - 18, `italic 13px ${sans}`);
  } else if (kind === 'mask') {
    paper('#f1efe8');
    g.fillStyle = '#b3241a';
    g.fillRect(0, 0, W, 78);
    center('PNEUMONIC PLAGUE', 34, `bold 26px ${bold}`, '#fff');
    center('WEAR A MASK', 66, `bold 28px ${bold}`, '#fff');
    // simple face with mask
    g.fillStyle = '#d9cbb5'; g.beginPath(); g.arc(W / 2, 140, 40, 0, 6.3); g.fill();
    g.fillStyle = '#9fc5d8'; g.fillRect(W / 2 - 34, 138, 68, 30);
    g.strokeStyle = '#555'; g.lineWidth = 2; g.strokeRect(W / 2 - 34, 138, 68, 30);
    const items = ['Cover every cough', 'Stay 6 feet apart', 'Fever or cough? Stay home', 'Call 211 for help'];
    items.forEach((t, i) => center(`• ${t}`, 212 + i * 22, `bold 15px ${sans}`, '#1a1a1a'));
    center('Oregon Health Authority', H - 14, `11px ${sans}`, '#444');
  } else if (kind === 'evac') {
    paper('#f4f1e6');
    center('EVACUATION', 40, `bold 28px ${bold}`, '#14306b');
    center('NOTICE', 70, `bold 24px ${bold}`, '#14306b');
    const t = ['Buses leave Pioneer Sq.', 'Sept 14, 8:00 AM', 'Bring ID, water, 1 bag.', 'No pets on the bus.', 'Shelter: Expo Center'];
    t.forEach((s, i) => center(s, 112 + i * 26, `bold 16px ${sans}`));
    lines(250, 5, 12);
  } else if (kind === 'missing') {
    paper('#eeeae0');
    center('HAVE YOU SEEN US?', 34, `bold 21px ${bold}`, '#202020');
    g.fillStyle = '#8b8d8e'; g.fillRect(W * 0.2, 48, W * 0.6, 120); // faded photo, no faces
    g.fillStyle = 'rgba(255,255,255,0.25)'; g.fillRect(W * 0.2, 48, W * 0.6, 40);
    g.fillStyle = 'rgba(40,40,40,0.4)';
    g.beginPath(); g.arc(W * 0.42, 120, 18, 0, 6.3); g.fill();
    g.beginPath(); g.arc(W * 0.58, 128, 14, 0, 6.3); g.fill();
    const msg = ['Went to Expo Center', 'shelter. Oct 2.', 'Maria + kids. Love you.'];
    msg.forEach((s, i) => center(s, 200 + i * 24, `20px ${hand}`, '#1b2a6b'));
  } else if (kind === 'note') {
    paper('#a8875a'); // cardboard
    const f = fbm(W, H, 4, 3, 3, rnd);
    const img = g.getImageData(0, 0, W, H);
    for (let i = 0; i < W * H; i++) {
      const v = (f[i] - 0.5) * 30;
      img.data[i * 4] += v; img.data[i * 4 + 1] += v; img.data[i * 4 + 2] += v;
    }
    g.putImageData(img, 0, 0);
    const notes = [['NO MEDS', 'LEFT'], ['DONT GO', 'IN BACK'], ['TOOK WATER', 'SORRY'], ['SICK INSIDE', 'STAY OUT']];
    const [a, b] = notes[variant % notes.length];
    g.save(); g.translate(W / 2, H / 2); g.rotate((rnd() - 0.5) * 0.12);
    g.font = `bold 46px ${hand}`; g.fillStyle = '#121212'; g.textAlign = 'center';
    g.fillText(a, 0, -10); g.fillText(b, 0, 46);
    g.restore();
  } else if (kind === 'poster') {
    const bg = ['#2e4f78', '#7a2e2a', '#2f5a45'][variant % 3];
    paper(bg);
    g.fillStyle = 'rgba(255,255,255,0.12)';
    for (let i = 0; i < 6; i++) { g.beginPath(); g.arc(rnd() * W, rnd() * H, 30 + rnd() * 60, 0, 6.3); g.fill(); }
    center('WINTER', 90, `bold 50px ${bold}`, '#f6e9c9');
    center('SAVINGS', 145, `bold 46px ${bold}`, '#f6e9c9');
    g.fillStyle = '#f6c63c';
    g.beginPath(); g.arc(W / 2, 240, 58, 0, 6.3); g.fill();
    center('20%', 248, `bold 40px ${bold}`, '#1a1a1a');
    center('OFF', 276, `bold 20px ${bold}`, '#1a1a1a');
    center('Ends Sept 30', H - 30, `bold 18px ${sans}`, '#f6e9c9');
  } else if (kind === 'staff') {
    paper('#1d2a33');
    center('STAFF ONLY', H * 0.66, `bold 34px ${bold}`, '#e9eef0');
  }
  // age: yellowing, water marks, fold lines, tape
  g.fillStyle = `rgba(160,130,60,${0.06 + rnd() * 0.08})`;
  g.fillRect(0, 0, W, H);
  for (let i = 0; i < 3; i++) {
    const grad = g.createRadialGradient(rnd() * W, rnd() * H, 2, rnd() * W, rnd() * H, 40 + rnd() * 60);
    grad.addColorStop(0, 'rgba(110,80,30,0.18)');
    grad.addColorStop(1, 'rgba(110,80,30,0)');
    g.fillStyle = grad; g.fillRect(0, 0, W, H);
  }
  g.fillStyle = 'rgba(0,0,0,0.06)';
  g.fillRect(0, H / 2 - 1, W, 2);
  if (kind !== 'staff' && kind !== 'note') {
    g.fillStyle = 'rgba(225,215,170,0.75)';
    for (const [x, y] of [[8, 4], [W - 40, 4]]) g.fillRect(x, y, 32, 12);
    // torn corner
    g.clearRect(0, 0, 0, 0);
    g.globalCompositeOperation = 'destination-out';
    g.beginPath();
    g.moveTo(W, H); g.lineTo(W - 20 - rnd() * 30, H); g.lineTo(W - 6, H - 10 - rnd() * 14); g.lineTo(W, H - 30 - rnd() * 20);
    g.closePath(); g.fill();
    g.globalCompositeOperation = 'source-over';
  }
  const t = new CanvasTexture(c);
  t.colorSpace = SRGBColorSpace;
  t.anisotropy = 4;
  TEX[key] = t;
  return t;
}

// ---------- shaders ----------
const DUST_VERT = `
uniform float uTime; uniform float uScale;
uniform vec3 uMin; uniform vec3 uSize;
uniform vec3 uFlashPos; uniform vec3 uFlashDir; uniform float uFlashCos; uniform float uFlashOn;
uniform vec4 uShaft[2]; uniform float uShaftOn[2];
attribute vec3 seed;
varying float vLight;
void main() {
  vec3 p = seed;
  p.y = fract(p.y - uTime * (0.002 + seed.x * 0.004));
  p.x = fract(p.x + sin(uTime * 0.13 + seed.z * 40.0) * 0.012);
  p.z = fract(p.z + cos(uTime * 0.11 + seed.y * 40.0) * 0.012);
  vec3 wp = uMin + p * uSize;
  vec3 d = wp - uFlashPos;
  float dist = length(d);
  float c = dot(d / max(dist, 0.001), uFlashDir);
  float beam = smoothstep(uFlashCos, mix(uFlashCos, 1.0, 0.6), c) * uFlashOn * 4.0 / (1.0 + dist * dist * 0.05);
  float shaft = 0.0;
  for (int i = 0; i < 2; i++) {
    vec4 s = uShaft[i]; // x, z (door), half width, length
    float t = clamp((s.y - wp.z) / s.w, 0.0, 1.0);
    float hw = s.z * (1.0 + t);
    float inside = step(0.001, s.y - wp.z) * (1.0 - smoothstep(hw * 0.6, hw, abs(wp.x - s.x)))
      * (1.0 - smoothstep(2.4 - t * 1.6, 2.6 - t * 1.6, wp.y));
    shaft += inside * (1.0 - t) * uShaftOn[i];
  }
  vLight = 0.03 + beam + shaft * 0.9;
  vec4 mv = viewMatrix * vec4(wp, 1.0);
  float depth = -mv.z;
  vLight *= smoothstep(0.25, 0.8, depth) * (1.0 - smoothstep(9.0, 14.0, depth));
  gl_Position = projectionMatrix * mv;
  gl_PointSize = clamp(uScale * (0.008 + seed.y * 0.01) / max(depth, 0.1), 1.5, 8.0);
}`;
const DUST_FRAG = `
varying float vLight;
void main() {
  float r = length(gl_PointCoord - 0.5);
  float a = (1.0 - smoothstep(0.0, 0.5, r)) * vLight;
  gl_FragColor = vec4(vec3(1.0, 0.96, 0.88) * a, a);
}`;

const SHAFT_VERT = `
attribute vec2 aSlice; // x: 1 for a cross-section slice, y: its distance along the shaft (0..1)
varying float vT; varying float vS; varying float vR; varying vec3 vW; varying vec3 vN;
void main() {
  vT = mix(uv.y, aSlice.y, aSlice.x); vS = uv.x;
  vR = aSlice.x > 0.5 ? uv.y : 0.5; // second edge fade for slices
  vec4 w = modelMatrix * vec4(position, 1.0);
  vW = w.xyz;
  vN = normalize(mat3(modelMatrix) * normal);
  gl_Position = projectionMatrix * viewMatrix * w;
}`;
const SHAFT_FRAG = `
uniform vec3 uColor; uniform float uAlpha; uniform float uTime;
varying float vT; varying float vS; varying float vR; varying vec3 vW; varying vec3 vN;
void main() {
  vec3 v = normalize(cameraPosition - vW);
  float face = pow(abs(dot(vN, v)), 1.4);
  float along = pow(1.0 - vT, 1.6) * smoothstep(0.0, 0.08, vT);
  float side = smoothstep(0.0, 0.3, vS) * (1.0 - smoothstep(0.7, 1.0, vS)) * smoothstep(0.0, 0.35, vR) * (1.0 - smoothstep(0.65, 1.0, vR));
  float near = smoothstep(0.4, 1.6, length(cameraPosition - vW));
  float streak = 0.75 + 0.25 * sin(vS * 23.0 + vT * 3.0 + uTime * 0.15);
  float a = uAlpha * face * along * side * near * streak;
  gl_FragColor = vec4(uColor * a, a);
}`;

// A truncated pyramid of planes for a light shaft: from the opening (width w, height h at z=0)
// into the room to length L, down and wider. Open ends, uv.y = 0 at the door, uv.x across.
function shaftGeometry(w, h, L) {
  const near = [[-w / 2, 0], [w / 2, 0], [w / 2, h], [-w / 2, h]]; // x, y
  const fw = w * 1.9;
  const fh = h * 0.18;
  const far = [[-fw / 2, 0], [fw / 2, 0], [fw / 2, fh], [-fw / 2, fh]];
  const pos = [];
  const uv = [];
  const idx = [];
  let v0 = 0;
  const quad = (a, b, c, d) => {
    pos.push(...a, ...b, ...c, ...d);
    uv.push(0, 0, 1, 0, 1, 1, 0, 1); // a,b near (y=0); c,d far (y=1)
    idx.push(v0, v0 + 1, v0 + 2, v0, v0 + 2, v0 + 3);
    v0 += 4;
  };
  // sides (left, right) and top; plus two inner planes for body
  quad([near[0][0], near[0][1], 0], [near[3][0], near[3][1], 0], [far[3][0], far[3][1], -L], [far[0][0], far[0][1], -L]);
  quad([near[1][0], near[1][1], 0], [near[2][0], near[2][1], 0], [far[2][0], far[2][1], -L], [far[1][0], far[1][1], -L]);
  quad([near[3][0], near[3][1], 0], [near[2][0], near[2][1], 0], [far[2][0], far[2][1], -L], [far[3][0], far[3][1], -L]);
  quad([0, 0, 0], [0, h, 0], [0, fh, -L], [0, 0, -L]);
  quad([-w / 2, h * 0.5, 0], [w / 2, h * 0.5, 0], [fw / 2, fh * 0.5, -L], [-fw / 2, fh * 0.5, -L]);
  const g = new BufferGeometry();
  const nLong = v0;
  // cross-section slices: they face you when you look along the shaft
  for (const t of [0.12, 0.3, 0.5, 0.7]) {
    const sw = (w + (fw - w) * t) / 2;
    const sh = hgt0(t);
    quad([-sw, 0, -L * t], [sw, 0, -L * t], [sw, sh, -L * t], [-sw, sh, -L * t]);
  }
  function hgt0(t) { return h + (fh - h) * t; }
  const slice = new Float32Array(v0 * 2);
  for (let i = nLong; i < v0; i++) {
    const t = [0.12, 0.3, 0.5, 0.7][Math.floor((i - nLong) / 4)];
    slice[i * 2] = 1; slice[i * 2 + 1] = t;
  }
  g.setAttribute('aSlice', new BufferAttribute(slice, 2));
  g.setAttribute('position', new BufferAttribute(new Float32Array(pos), 3));
  g.setAttribute('uv', new BufferAttribute(new Float32Array(uv), 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}

// ---------- the look ----------
// opts: { dark, night, quality: 'high'|'low', flashlight: bool, fill: bool (default true) }
export function setupLook(renderer, scene, camera, opts = {}) {
  const quality = opts.quality || pickQuality();
  const high = quality === 'high';
  const dark = !!opts.dark;
  const night = !!opts.night;
  const dim = dark || night;
  const group = new Group();
  group.name = 'look3d';
  scene.add(group);
  const disposables = [];
  const keep = (x) => (disposables.push(x), x);

  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = dim ? 1.25 : 1.0;
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = high ? PCFSoftShadowMap : PCFShadowMap;

  const bg = dark ? 0x040506 : night ? 0x05070b : 0x3a4148;
  scene.background = new Color(bg);
  scene.fog = new FogExp2(dark ? 0x030405 : night ? 0x05070a : 0x4a525a, dark ? 0.085 : night ? 0.07 : 0.035);

  // A tiny environment map: a dim room with a bright doorway toward +z. Glossy floors,
  // puddles, glass and metal reflect it instead of rendering black.
  let envRT = null;
  if (opts.env ?? high) try {
    const envScene = new Scene();
    const roomMat = new MeshBasicMaterial({ side: BackSide, vertexColors: true });
    const roomGeo = new BoxGeometry(10, 4, 10);
    const colors = [];
    const pos = roomGeo.attributes.position;
    const wallC = new Color(dim ? 0x15181c : 0x6a6e72);
    const floorC = new Color(dim ? 0x0c0b0a : 0x40392f);
    const ceilC = new Color(dim ? 0x0a0b0d : 0x8a8e92);
    for (let i = 0; i < pos.count; i++) {
      const y = pos.getY(i);
      const c = y > 1 ? ceilC : y < -1 ? floorC : wallC;
      colors.push(c.r, c.g, c.b);
    }
    roomGeo.setAttribute('color', new BufferAttribute(new Float32Array(colors), 3));
    envScene.add(new Mesh(roomGeo, roomMat));
    const door = new Mesh(new PlaneGeometry(2, 2.6), new MeshBasicMaterial({ color: new Color(night ? 0x2c3a52 : 0xdfe8f5).multiplyScalar(night ? 1 : 3), side: DoubleSide }));
    door.position.set(0, -0.6, 4.9);
    envScene.add(door);
    const pm = new PMREMGenerator(renderer);
    envRT = pm.fromScene(envScene, 0.02);
    pm.dispose();
    roomGeo.dispose(); roomMat.dispose(); door.geometry.dispose(); door.material.dispose();
    scene.environment = envRT.texture;
    scene.environmentIntensity = dark ? 0.35 : night ? 0.3 : 0.6;
  } catch { envRT = null; }

  // Fill light: what bounces around the room. Low in the dark so the flashlight matters.
  let fill = null;
  if (opts.fill !== false) {
    fill = dark
      ? new HemisphereLight(0x6e7f96, 0x17130f, 0.55)
      : night
        ? new HemisphereLight(0x5d6f8c, 0x15120e, 0.6)
        : new HemisphereLight(0xd6dee8, 0x8c877e, 1.5);
    group.add(fill);
  }

  // ---------- flashlight ----------
  let flashlight = null;
  let flashOn = false;
  let flashPower = 1;
  const FLASH_I = 70;
  const flashTarget = new Object3D();
  if (opts.flashlight !== false) {
    const spot = new SpotLight(0xfff1dc, 0, 26, 0.48, 0.55, 2);
    spot.position.set(0.22, -0.2, 0.05); // held low and to the right: shadows show
    flashTarget.position.set(0.04, -0.22, -4);
    camera.add(spot, flashTarget);
    spot.target = flashTarget;
    if (camera.parent !== scene && !camera.parent) scene.add(camera);
    spot.castShadow = true; // also needed for the cookie map
    spot.shadow.mapSize.set(high ? 1024 : 512, high ? 1024 : 512);
    spot.shadow.camera.near = 0.15;
    spot.shadow.camera.far = 24;
    spot.shadow.bias = -0.0004;
    spot.shadow.normalBias = 0.03;
    spot.shadow.radius = high ? 3 : 1;
    spot.map = flashCookie();
    // On low the shadow still runs (one 512 map) because three only uses the cookie with
    // castShadow; set opts.flashShadow = false to drop it on very weak devices.
    if (opts.flashShadow === false) spot.castShadow = false;
    flashlight = spot;
    spot.setOn = (on) => { flashOn = !!on; };
    spot.isOn = () => flashOn;
    spot.setPower = (p) => { flashPower = clamp01(p); };
  }

  // ---------- point light budget ----------
  const maxLights = opts.maxLights ?? (high ? 6 : 3);
  let usedLights = 0;
  const takeLight = () => (usedLights < maxLights ? (usedLights++, true) : false);
  const flickers = []; // { light, mats, base, t, state, seed }

  const fixtureMat = keep(new MeshStandardMaterial({ color: 0x9da2a5, roughness: 0.55, metalness: 0.6 }));
  const diffuserDead = keep(new MeshStandardMaterial({ map: prismTexture(), color: 0x9a9c98, roughness: 0.4 }));

  function fakePool(x, y, z, colorHex, radius, opacity) {
    const m = new Mesh(new PlaneGeometry(radius * 2, radius * 2), keep(new MeshBasicMaterial({
      map: decalTexture('pool', 0), color: colorHex, transparent: true, opacity, depthWrite: false,
      blending: AdditiveBlending, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -4,
    })));
    m.rotation.x = -Math.PI / 2;
    m.position.set(x, y, z);
    group.add(m);
    return m;
  }

  // y: the ceiling height (the fixture hangs from it).
  function addCeilingLight(x, y, z, state = 'dead') {
    const g = new Group();
    g.position.set(x, y, z);
    const h = hash2(x, z);
    if (state === 'emergency') {
      // caged bulb on a box: red-amber, dim, steady with a small hum
      const box = new Mesh(new BoxGeometry(0.34, 0.12, 0.2), fixtureMat);
      box.position.y = -0.06;
      const bulbMat = keep(new MeshStandardMaterial({ color: 0x2a0a04, emissive: 0xff5a24, emissiveIntensity: 2.4, roughness: 0.3 }));
      const bulb = new Mesh(new SphereGeometry(0.06, 12, 8), bulbMat);
      bulb.position.y = -0.17;
      const cage = new Mesh(new CylinderGeometry(0.075, 0.075, 0.12, 8, 1, true), keep(new MeshStandardMaterial({ color: 0x222222, wireframe: true })));
      cage.position.y = -0.17;
      const glow = new Sprite(keep(new SpriteMaterial({ map: softDot('255,110,50'), blending: AdditiveBlending, depthWrite: false, transparent: true, opacity: 0.6 })));
      glow.scale.set(0.7, 0.7, 1);
      glow.position.y = -0.17;
      g.add(box, bulb, cage, glow);
      let light = null;
      if (takeLight()) {
        light = new PointLight(0xff6a30, 2.4, 9, 2);
        light.position.y = -0.3;
        g.add(light);
      } else {
        fakePool(x, 0.012, z, 0xff6a30, 2.4, 0.18);
      }
      flickers.push({ light, mats: [bulbMat], glow, base: light ? light.intensity : 0, baseE: 2.4, state, t: h * 10, seed: h });
    } else {
      // 2 x 4 ft troffer
      const frame = new Mesh(new BoxGeometry(0.62, 0.08, 1.22), fixtureMat);
      frame.position.y = -0.04;
      const on = state === 'flicker';
      const panelMat = on
        ? keep(new MeshStandardMaterial({ map: prismTexture(), color: 0xc8ced2, emissive: 0xeaf2ff, emissiveMap: prismTexture(), emissiveIntensity: 2.2, roughness: 0.4 }))
        : diffuserDead;
      const panel = new Mesh(new PlaneGeometry(0.56, 1.16), panelMat);
      panel.rotation.x = Math.PI / 2;
      panel.position.y = -0.082;
      g.add(frame, panel);
      if (!on && h < 0.3) {
        // one end fell: hangs at an angle on its wire
        g.rotation.x = (h < 0.15 ? 1 : -1) * (0.45 + h);
        g.position.y -= 0.35;
        const wire = new Mesh(new CylinderGeometry(0.004, 0.004, 0.5, 4), fixtureMat);
        wire.position.set(0.25, 0.2, 0);
        g.add(wire);
      }
      if (on) {
        let light = null;
        if (takeLight()) {
          light = new PointLight(0xdfe9ff, 14, 13, 2);
          light.position.y = -0.35;
          g.add(light);
        } else {
          fakePool(x, 0.012, z, 0xdfe9ff, 3, 0.3);
        }
        flickers.push({ light, mats: [panelMat], base: light ? light.intensity : 0, baseE: 2.2, state, t: h * 10, seed: h, off: 0 });
      }
    }
    group.add(g);
    return g;
  }

  function addExitSign(x, y, z, rotY = 0) {
    const g = new Group();
    const mat = keep(new MeshStandardMaterial({ map: exitTexture(), emissive: 0xffffff, emissiveMap: exitTexture(), emissiveIntensity: 1.6, roughness: 0.5 }));
    const box = new Mesh(new BoxGeometry(0.38, 0.2, 0.06), [fixtureMat, fixtureMat, fixtureMat, fixtureMat, mat, mat]);
    const glow = new Sprite(keep(new SpriteMaterial({ map: softDot('80,255,120'), blending: AdditiveBlending, depthWrite: false, transparent: true, opacity: 0.55 })));
    glow.scale.set(1.1, 0.7, 1);
    g.add(box, glow);
    g.position.set(x, y, z);
    g.rotation.y = rotY;
    group.add(g);
    return g;
  }

  // ---------- door light and shafts ----------
  const shafts = [];
  // Cold daylight through an opening at (x, z), facing into the room (-z, turned by opts.rotY).
  function addDoorLight(x, z, nightLight = night, o = {}) {
    const w = o.width ?? 1.8;
    const hgt = o.height ?? 2.2;
    const L = o.length ?? 5.5;
    const rotY = o.rotY ?? 0;
    const g = new Group();
    g.position.set(x, 0, z);
    g.rotation.y = rotY;
    const color = nightLight ? 0x8197bb : 0xdce8ff;
    const spot = new SpotLight(color, nightLight ? 6 : 60, 16, 0.85, 1, 2);
    spot.position.set(0, hgt + 0.6, 1.6);
    const tgt = new Object3D();
    tgt.position.set(0, 0, -3.5);
    g.add(spot, tgt);
    spot.target = tgt;
    const mat = keep(new ShaderMaterial({
      vertexShader: SHAFT_VERT, fragmentShader: SHAFT_FRAG, transparent: true, depthWrite: false,
      blending: AdditiveBlending, side: DoubleSide,
      uniforms: { uColor: { value: new Color(color) }, uAlpha: { value: nightLight ? 0.16 : 0.5 }, uTime: { value: 0 } },
    }));
    const shaft = new Mesh(shaftGeometry(w, hgt, L), mat);
    shaft.position.z = -0.05;
    shaft.renderOrder = 5;
    g.add(shaft);
    // soft halo around the bright opening (fake bloom), seen from inside
    const haloMat = keep(new MeshBasicMaterial({
      map: haloTexture(), color: color, transparent: true, opacity: nightLight ? 0.25 : 0.55,
      blending: AdditiveBlending, depthWrite: false, fog: false, side: DoubleSide,
    }));
    const halo = new Mesh(new PlaneGeometry(w + 2.2, hgt + 1.6), haloMat);
    halo.position.set(0, hgt / 2 + 0.1, -0.12);
    halo.renderOrder = 4;
    g.add(halo);
    if (o.sky !== false) {
      // what you see through the opening: bright overcast sky and snow (not tone mapped, so it glows)
      const skyMat = keep(new MeshBasicMaterial({ color: nightLight ? 0x24324a : 0xe9f0f8, toneMapped: false, fog: false }));
      const sky = new Mesh(new PlaneGeometry(w + 6, hgt + 4), skyMat);
      sky.position.set(0, hgt / 2 + 1, 2.4);
      sky.rotation.y = Math.PI;
      const snowMat = keep(new MeshBasicMaterial({ color: nightLight ? 0x3c4a60 : 0xc9d2dc, fog: false }));
      const snowG = new Mesh(new PlaneGeometry(w + 6, 2.3), snowMat);
      snowG.rotation.x = -Math.PI / 2;
      snowG.position.set(0, 0.005, 1.25);
      g.add(sky, snowG);
    }
    group.add(g);
    shafts.push({ x, z, w, L, rotY, mat, night: nightLight });
    return { group: g, light: spot, shaft };
  }

  // ---------- dust ----------
  const dusts = [];
  // box: { minX, maxX, minY, maxY, minZ, maxZ } or a three Box3.
  function addDust(box, count) {
    const b = box.min ? { minX: box.min.x, maxX: box.max.x, minY: box.min.y, maxY: box.max.y, minZ: box.min.z, maxZ: box.max.z } : box;
    const vol = (b.maxX - b.minX) * (b.maxY - b.minY) * (b.maxZ - b.minZ);
    const n = count ?? Math.min(high ? 700 : 220, Math.max(80, Math.round(vol * (high ? 1.6 : 0.6))));
    const rnd = rngFrom(Math.floor((b.minX + b.maxZ) * 100) + 7);
    const seeds = new Float32Array(n * 3);
    for (let i = 0; i < seeds.length; i++) seeds[i] = rnd();
    const geo = new BufferGeometry();
    geo.setAttribute('seed', new BufferAttribute(seeds, 3));
    geo.setAttribute('position', new BufferAttribute(new Float32Array(n * 3), 3));
    geo.boundingSphere = null;
    const mat = keep(new ShaderMaterial({
      vertexShader: DUST_VERT, fragmentShader: DUST_FRAG, transparent: true, depthWrite: false, blending: AdditiveBlending,
      uniforms: {
        uTime: { value: 0 }, uScale: { value: 500 },
        uMin: { value: new Vector3(b.minX, b.minY, b.minZ) },
        uSize: { value: new Vector3(b.maxX - b.minX, b.maxY - b.minY, b.maxZ - b.minZ) },
        uFlashPos: { value: new Vector3() }, uFlashDir: { value: new Vector3(0, 0, -1) },
        uFlashCos: { value: Math.cos(0.48) }, uFlashOn: { value: 0 },
        uShaft: { value: [new Vector4(0, 0, 1, 1), new Vector4(0, 0, 1, 1)] },
        uShaftOn: { value: [0, 0] },
      },
    }));
    const pts = new Points(geo, mat);
    pts.frustumCulled = false;
    pts.renderOrder = 6;
    group.add(pts);
    dusts.push(mat);
    return pts;
  }

  // ---------- wall notices, decals, glass ----------
  // (x, y, z) a point on the wall surface; rotY turns the notice to face out of the wall
  // (0 = facing +z, toward the door).
  function addWallNotice(x, y, z, rotY = 0, kind = 'closed', variant) {
    const v = variant ?? Math.floor(hash2(x, z) * 4);
    const [w, h] = NOTICE_SIZES[kind] || NOTICE_SIZES.closed;
    const mat = keep(new MeshStandardMaterial({
      map: noticeTexture(kind, v), roughness: 0.92, alphaTest: 0.5, side: DoubleSide,
      polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -2,
    }));
    const m = new Mesh(new PlaneGeometry(w, h), mat);
    m.position.set(x + Math.sin(rotY) * 0.012, y, z + Math.cos(rotY) * 0.012);
    m.rotation.set(0, rotY, (hash2(z, x) - 0.5) * 0.12);
    m.receiveShadow = true;
    group.add(m);
    return m;
  }

  let decalLift = 0;
  function addDecal(x, z, kind = 'dirt', size = 1, rotY = 0) {
    const v = Math.floor(hash2(x * 3, z * 5) * 3);
    const water = kind === 'water';
    const mat = keep(new MeshStandardMaterial({
      map: decalTexture(kind, v), transparent: true, depthWrite: false,
      roughness: water ? 0.06 : kind === 'snow' ? 0.85 : 0.95, metalness: water ? 0.2 : 0,
      color: water ? 0x9aa0a6 : 0xffffff,
      polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -4,
    }));
    const m = new Mesh(new PlaneGeometry(size, size), mat);
    m.rotation.set(-Math.PI / 2, 0, rotY);
    decalLift = (decalLift + 1) % 8;
    m.position.set(x, 0.003 + decalLift * 0.0008, z);
    m.receiveShadow = true;
    m.renderOrder = 1;
    group.add(m);
    return m;
  }

  const shardGeo = keep(new BufferGeometry());
  shardGeo.setAttribute('position', new BufferAttribute(new Float32Array([0, 0, 0, 0.05, 0, -0.012, 0.018, 0, 0.04]), 3));
  shardGeo.setAttribute('normal', new BufferAttribute(new Float32Array([0, 1, 0, 0, 1, 0, 0, 1, 0]), 3));
  const shardMat = keep(new MeshStandardMaterial({ color: 0xdfeef2, roughness: 0.04, metalness: 0, transparent: true, opacity: 0.55, side: DoubleSide, envMapIntensity: 3 }));
  function addBrokenGlass(x, z, size = 1.2) {
    const g = new Group();
    const rnd = rngFrom(Math.floor(hash2(x, z) * 1e6) + 3);
    const decal = addDecal(x, z, 'glass', size, rnd() * 6.3);
    decal.material.roughness = 0.05;
    decal.material.envMapIntensity = 3;
    g.add(decal);
    for (let i = 0; i < (high ? 18 : 8); i++) {
      const s = new Mesh(shardGeo, shardMat);
      const a = rnd() * 6.3;
      const d = rnd() ** 1.5 * size * 0.45;
      s.position.set(x + Math.cos(a) * d, 0.006, z + Math.sin(a) * d);
      s.rotation.set((rnd() - 0.5) * 0.3, rnd() * 6.3, (rnd() - 0.5) * 0.3);
      s.scale.setScalar(0.6 + rnd() * 1.6);
      g.add(s);
    }
    group.add(g);
    return g;
  }

  // Dark strips at the foot of the walls (fake ambient occlusion and swept-in dirt):
  // a rectangle of room bounds. Cheap and it makes rooms look much less like boxes.
  function addRoomShade(minX, maxX, minZ, maxZ, width = 0.7) {
    const tex0 = decalTexture('grime', 0);
    const mat = keep(new MeshBasicMaterial({ map: tex0, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -3, color: 0xffffff }));
    const strip = (cx, cz, len, rot) => {
      const m = new Mesh(new PlaneGeometry(len, width), mat);
      m.rotation.set(-Math.PI / 2, 0, rot);
      m.position.set(cx, 0.002, cz);
      m.renderOrder = 1;
      group.add(m);
    };
    // the dark edge (v=1 top of the plane) must face the wall
    strip((minX + maxX) / 2, minZ + width / 2, maxX - minX, 0); // back wall (top edge toward -z)
    strip((minX + maxX) / 2, maxZ - width / 2, maxX - minX, Math.PI); // front wall
    strip(minX + width / 2, (minZ + maxZ) / 2, maxZ - minZ, Math.PI / 2); // left wall
    strip(maxX - width / 2, (minZ + maxZ) / 2, maxZ - minZ, -Math.PI / 2); // right wall
  }

  // ---------- update ----------
  let time = 0;
  const camPos = new Vector3();
  const camDir = new Vector3();
  const tmpV = new Vector3();
  const size = new Vector2();
  let flashFlick = 1;
  function update(dt, cameraPosition) {
    time += dt;
    // flashlight: on/off by intensity (never .visible, which would recompile shaders)
    if (flashlight) {
      let p = flashPower;
      if (flashOn && p < 0.2) {
        // weak batteries: dims and stutters
        if (Math.random() < dt * 3) flashFlick = 0.2 + Math.random() * 0.6;
        flashFlick += (1 - flashFlick) * Math.min(1, dt * 6);
        p = (0.35 + p * 3) * flashFlick;
      }
      flashlight.intensity = flashOn ? FLASH_I * Math.max(0, Math.min(1, p)) : 0;
    }
    for (const f of flickers) {
      let k;
      if (f.state === 'emergency') {
        k = 0.88 + 0.08 * Math.sin(time * 2.1 + f.seed * 9) + 0.04 * Math.sin(time * 31 + f.seed * 3);
      } else {
        // a dying tube: long stretches on, then a burst of stutters, sometimes dark for a while
        f.t -= dt;
        if (f.t <= 0) {
          const r = Math.random();
          if (f.burst > 0) { f.burst--; f.off = f.off ? 0 : 1; f.t = 0.03 + Math.random() * 0.09; }
          else if (r < 0.5) { f.off = 0; f.t = 0.8 + Math.random() * 3.5; }
          else if (r < 0.85) { f.burst = 3 + Math.floor(Math.random() * 8); f.t = 0.05; }
          else { f.off = 1; f.t = 0.4 + Math.random() * 1.6; }
        }
        k = f.off ? 0.04 : 0.92 + Math.random() * 0.08;
      }
      if (f.light) f.light.intensity = f.base * k;
      for (const m of f.mats) m.emissiveIntensity = f.baseE * k;
      if (f.glow) f.glow.material.opacity = 0.6 * k;
    }
    // dust and shafts
    if (dusts.length) {
      camera.getWorldPosition(camPos);
      if (cameraPosition) camPos.copy(cameraPosition);
      camera.getWorldDirection(camDir);
      if (flashlight) {
        flashlight.getWorldPosition(tmpV);
      } else tmpV.copy(camPos);
      renderer.getDrawingBufferSize(size);
      const scale = size.y / (2 * Math.tan(MathUtils.degToRad(camera.fov || 70) / 2));
      for (const m of dusts) {
        const u = m.uniforms;
        u.uTime.value = time;
        u.uScale.value = scale;
        u.uFlashPos.value.copy(tmpV);
        u.uFlashDir.value.copy(camDir);
        u.uFlashOn.value = flashlight ? flashlight.intensity / FLASH_I : 0;
        for (let i = 0; i < 2; i++) {
          const s = shafts[i];
          if (s && Math.abs(s.rotY) < 0.01) {
            u.uShaft.value[i].set(s.x, s.z, s.w / 2, s.L);
            u.uShaftOn.value[i] = s.night ? 0.25 : 1;
          } else u.uShaftOn.value[i] = 0;
        }
      }
    }
    for (const s of shafts) s.mat.uniforms.uTime.value = time;
  }

  function dispose() {
    scene.remove(group);
    if (flashlight) camera.remove(flashlight, flashTarget);
    group.traverse((o) => { if (o.geometry) o.geometry.dispose(); });
    for (const d of disposables) d.dispose?.();
    if (envRT) { if (scene.environment === envRT.texture) scene.environment = null; envRT.dispose(); }
  }

  return {
    quality, group, fill, flashlight,
    update, dispose,
    addCeilingLight, addExitSign, addDoorLight, addDust, addWallNotice, addDecal, addBrokenGlass, addRoomShade,
    setExposure: (e) => { renderer.toneMappingExposure = e; },
    lightsUsed: () => usedLights,
  };
}
