// Procedural 3D items, shelf stock and decoration props for the first-person view.
// Everything is made in code: geometry plus canvas textures (no image files, no brands).
// Exports: makeItemModel(itemId, seed), makeShelfFill(kind, length, levels, fill, seed), makeProp(kind, seed).
// Units are meters. Item and prop origins sit at the bottom center (y = 0 is the floor or table).
import * as THREE from 'three';

// ---------- caches shared by every call ----------
const GEO = new Map();
const MAT = new Map();
const TEX = new Map();
function cached(map, key, fn) {
  let v = map.get(key);
  if (v === undefined) { v = fn(); map.set(key, v); }
  return v;
}

// ---------- small random helpers ----------
function rng(seed) {
  let a = (seed >>> 0) ^ 0x9e3779b9;
  return () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function hashStr(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}
// Art style: 'toon' = the stylized look (clean colors, soft rounded shapes, no grime, no fine print),
// as in Adam's reference sheets. Add ?style=real to the page address to see the older realistic look.
// Rounded boxes cost about 9 times the triangles. Shelf stock (hundreds of small far boxes) stays square.
let ROUND = true;
function squareOnly(fn) { const was = ROUND; ROUND = false; try { return fn(); } finally { ROUND = was; } }
export const TOON = !(typeof location !== 'undefined' && /[?&]style=real\b/.test(location.search || ''));
const pick = (r, arr) => arr[Math.floor(r() * arr.length) % arr.length];
const TAU = Math.PI * 2;

// ---------- canvas + textures ----------
const FONT = 'Arial, Helvetica, "Liberation Sans", "DejaVu Sans", sans-serif';
const COND = '"Arial Narrow", "Liberation Sans Narrow", Arial, Helvetica, sans-serif';
function makeCanvas(w, h) {
  if (typeof document !== 'undefined') {
    const c = document.createElement('canvas');
    c.width = w; c.height = h;
    return c;
  }
  if (typeof OffscreenCanvas !== 'undefined') return new OffscreenCanvas(w, h);
  return null;
}
// Canvas texture, cached by key. draw(ctx, w, h, rnd).
function ctex(key, w, h, draw, opts = {}) {
  return cached(TEX, key, () => {
    const c = makeCanvas(w, h);
    if (!c) return null;
    const ctx = c.getContext('2d');
    draw(ctx, w, h, rng(hashStr(key)));
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = opts.data ? THREE.NoColorSpace : THREE.SRGBColorSpace;
    t.anisotropy = 4;
    if (opts.repeat) {
      t.wrapS = t.wrapT = THREE.RepeatWrapping;
      t.repeat.set(opts.repeat[0], opts.repeat[1]);
    }
    return t;
  });
}

// text that shrinks sideways to fit maxW (like condensed packaging type)
function txt(ctx, s, x, y, size, o = {}) {
  ctx.save();
  ctx.font = `${o.italic ? 'italic ' : ''}${o.weight || 'bold'} ${size}px ${o.font || FONT}`;
  ctx.fillStyle = o.color || '#111';
  ctx.textAlign = o.align || 'center';
  ctx.textBaseline = o.baseline || 'middle';
  ctx.translate(x, y);
  if (o.rot) ctx.rotate(o.rot);
  const m = ctx.measureText(s).width;
  const sx = o.sx || 1;
  if (o.maxW && m * sx > o.maxW) ctx.scale(o.maxW / m, 1);
  else if (sx !== 1) ctx.scale(sx, 1);
  if (o.stroke) { ctx.lineWidth = o.strokeW || size * 0.12; ctx.strokeStyle = o.stroke; ctx.lineJoin = 'round'; ctx.strokeText(s, 0, 0); }
  ctx.fillText(s, 0, 0);
  ctx.restore();
}
// rows of grey bars that read as fine print from any distance
function finePrint(ctx, x, y, w, rows, lh, rnd, color = 'rgba(0,0,0,0.55)') {
  if (TOON) return; // the stylized look has no tiny text
  ctx.fillStyle = color;
  for (let i = 0; i < rows; i++) {
    let cx = x;
    const end = x + w * (i === rows - 1 ? 0.3 + rnd() * 0.5 : 0.85 + rnd() * 0.15);
    while (cx < end) {
      const ww = Math.min(end - cx, lh * (0.8 + rnd() * 3));
      ctx.fillRect(cx, y + i * lh, ww, lh * 0.55);
      cx += ww + lh * 0.45;
    }
  }
}
function barcode(ctx, x, y, w, h, rnd) {
  if (TOON) return;
  ctx.fillStyle = '#fff';
  ctx.fillRect(x - w * 0.06, y - h * 0.06, w * 1.12, h * 1.3);
  ctx.fillStyle = '#000';
  let cx = x;
  while (cx < x + w) {
    const bw = Math.max(1, (rnd() < 0.6 ? 1 : 2 + Math.floor(rnd() * 2)) * w / 95);
    if (rnd() < 0.55) ctx.fillRect(cx, y, bw, h);
    cx += bw;
  }
  ctx.fillRect(x, y, w / 95, h * 1.08);
  ctx.fillRect(x + w - w / 95, y, w / 95, h * 1.08);
  finePrint(ctx, x + w * 0.1, y + h * 1.06, w * 0.8, 1, h * 0.18, rnd, '#000');
}
function nutrition(ctx, x, y, w, h, rnd) {
  if (TOON) return;
  ctx.fillStyle = '#fff';
  ctx.fillRect(x, y, w, h);
  ctx.strokeStyle = '#000';
  ctx.lineWidth = Math.max(1, w * 0.012);
  ctx.strokeRect(x, y, w, h);
  txt(ctx, 'Nutrition Facts', x + w * 0.06, y + h * 0.08, h * 0.1, { align: 'left', color: '#000', maxW: w * 0.88, font: COND });
  ctx.fillStyle = '#000';
  ctx.fillRect(x + w * 0.05, y + h * 0.17, w * 0.9, h * 0.035);
  const rows = 9;
  for (let i = 0; i < rows; i++) {
    const yy = y + h * (0.24 + i * 0.075);
    finePrint(ctx, x + w * 0.06, yy, w * 0.6, 1, h * 0.05, rnd, '#000');
    finePrint(ctx, x + w * 0.78, yy, w * 0.14, 1, h * 0.05, rnd, '#000');
    ctx.fillRect(x + w * 0.05, yy + h * 0.055, w * 0.9, Math.max(1, h * 0.006));
  }
  ctx.fillRect(x + w * 0.05, y + h * 0.92, w * 0.9, h * 0.02);
}
// dust, scuffs and stains: the store has been shut for three months
function grime(ctx, w, h, rnd, amt = 1) {
  if (TOON) return; // clean, painted surfaces
  for (let i = 0; i < 260 * amt; i++) {
    ctx.fillStyle = rnd() < 0.5 ? `rgba(70,60,45,${0.05 + rnd() * 0.08})` : `rgba(255,255,255,${0.04 + rnd() * 0.06})`;
    const s = 1 + rnd() * 2.5;
    ctx.fillRect(rnd() * w, rnd() * h, s, s);
  }
  for (let i = 0; i < 4 * amt; i++) {
    const x = rnd() * w, y = rnd() * h, r = (0.05 + rnd() * 0.18) * Math.max(w, h);
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, `rgba(80,66,44,${0.05 + rnd() * 0.08})`);
    g.addColorStop(1, 'rgba(80,66,44,0)');
    ctx.fillStyle = g;
    ctx.fillRect(x - r, y - r, r * 2, r * 2);
  }
  for (let i = 0; i < 3 * amt; i++) { // scratches
    ctx.strokeStyle = `rgba(255,255,255,${0.08 + rnd() * 0.1})`;
    ctx.lineWidth = 1;
    ctx.beginPath();
    const x = rnd() * w, y = rnd() * h;
    ctx.moveTo(x, y); ctx.lineTo(x + (rnd() - 0.5) * w * 0.3, y + (rnd() - 0.5) * h * 0.2);
    ctx.stroke();
  }
}
function noiseFill(ctx, w, h, rnd, base, spread, n = 4000, size = 2) {
  if (TOON) { spread *= 0.25; n = Math.round(n / 3); size *= 1.5; }
  ctx.fillStyle = base;
  ctx.fillRect(0, 0, w, h);
  for (let i = 0; i < n; i++) {
    const v = (rnd() - 0.5) * spread;
    ctx.fillStyle = v > 0 ? `rgba(255,255,255,${v})` : `rgba(0,0,0,${-v})`;
    ctx.fillRect(rnd() * w, rnd() * h, size * (0.5 + rnd()), size * (0.5 + rnd()));
  }
}
function shade(hex, f) { // f < 0 darker, f > 0 lighter
  const c = new THREE.Color(hex);
  if (f < 0) c.multiplyScalar(1 + f); else c.lerp(new THREE.Color(0xffffff), f);
  return '#' + c.getHexString();
}

// ---------- pictures printed on labels ----------
function pict(ctx, type, cx, cy, s, rnd) {
  ctx.save();
  ctx.translate(cx, cy);
  const circ = (x, y, r, c) => { ctx.fillStyle = c; ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill(); };
  const ell = (x, y, rx, ry, a, c) => { ctx.fillStyle = c; ctx.beginPath(); ctx.ellipse(x, y, rx, ry, a, 0, TAU); ctx.fill(); };
  switch (type) {
    case 'beans': case 'chili':
      ell(0, s * 0.25, s * 0.9, s * 0.35, 0, '#f3efe6');
      ell(0, s * 0.12, s * 0.75, s * 0.28, 0, type === 'chili' ? '#7a1e10' : '#9a4a1c');
      for (let i = 0; i < 16; i++) ell((rnd() - 0.5) * s * 1.2, s * (0.05 + rnd() * 0.15), s * 0.13, s * 0.08, rnd() * 3, type === 'chili' ? '#5a140c' : '#c06a2c');
      break;
    case 'soup':
      ell(0, s * 0.3, s * 0.95, s * 0.4, 0, '#fafafa');
      ell(0, s * 0.18, s * 0.78, s * 0.26, 0, '#e8b850');
      for (let i = 0; i < 9; i++) ell((rnd() - 0.5) * s, s * (0.1 + rnd() * 0.12), s * 0.12, s * 0.05, rnd() * 3, rnd() < 0.5 ? '#f6e3b0' : '#d9822b');
      ctx.strokeStyle = 'rgba(255,255,255,0.8)'; ctx.lineWidth = s * 0.06;
      for (let i = -1; i <= 1; i++) { ctx.beginPath(); ctx.moveTo(i * s * 0.3, -s * 0.15); ctx.bezierCurveTo(i * s * 0.3 + s * 0.15, -s * 0.4, i * s * 0.3 - s * 0.15, -s * 0.55, i * s * 0.3, -s * 0.8); ctx.stroke(); }
      break;
    case 'corn':
      for (let i = 0; i < 30; i++) circ((rnd() - 0.5) * s * 1.4, (rnd() - 0.5) * s * 0.9, s * 0.13, i % 3 ? '#f2c21b' : '#e0a812');
      ell(-s * 0.6, s * 0.1, s * 0.5, s * 0.15, -0.6, '#5c9a2c');
      break;
    case 'peas':
      for (let i = 0; i < 26; i++) circ((rnd() - 0.5) * s * 1.4, (rnd() - 0.5) * s * 0.9, s * 0.14, i % 4 ? '#5aa43a' : '#3f8a28');
      break;
    case 'tomato': case 'fruit': case 'peach': case 'apple': {
      const c = type === 'tomato' ? '#d8261c' : type === 'peach' ? '#f39a42' : type === 'apple' ? '#c8221c' : '#f2a33a';
      circ(-s * 0.35, s * 0.1, s * 0.5, c);
      circ(s * 0.4, s * 0.15, s * 0.45, type === 'fruit' ? '#f2d24a' : c);
      ell(-s * 0.5, -s * 0.1, s * 0.15, s * 0.1, -0.5, 'rgba(255,255,255,0.45)');
      ell(-s * 0.3, -s * 0.42, s * 0.22, s * 0.08, -0.4, '#3f8a28');
      break;
    }
    case 'fish':
      ell(0, 0, s * 0.85, s * 0.35, 0, '#7f98ad');
      ctx.fillStyle = '#7f98ad'; ctx.beginPath(); ctx.moveTo(s * 0.7, 0); ctx.lineTo(s * 1.1, -s * 0.35); ctx.lineTo(s * 1.1, s * 0.35); ctx.fill();
      circ(-s * 0.55, -s * 0.05, s * 0.07, '#111');
      break;
    case 'grain':
      ctx.strokeStyle = '#c9a24a'; ctx.lineWidth = s * 0.06;
      for (let k = -1; k <= 1; k++) {
        ctx.beginPath(); ctx.moveTo(k * s * 0.3, s * 0.9); ctx.lineTo(k * s * 0.15, -s * 0.6); ctx.stroke();
        for (let i = 0; i < 6; i++) { ell(k * s * 0.15 - s * 0.1, -s * 0.5 + i * s * 0.18, s * 0.1, s * 0.05, 0.6, '#d9b25a'); ell(k * s * 0.15 + s * 0.1, -s * 0.5 + i * s * 0.18, s * 0.1, s * 0.05, -0.6, '#d9b25a'); }
      }
      break;
    case 'noodle':
      ell(0, s * 0.3, s * 0.9, s * 0.35, 0, '#fff');
      ctx.strokeStyle = '#f0d48a'; ctx.lineWidth = s * 0.06;
      for (let i = 0; i < 7; i++) { ctx.beginPath(); ctx.moveTo(-s * 0.7, s * (0.05 + i * 0.05)); for (let x = -0.7; x <= 0.7; x += 0.1) ctx.lineTo(x * s, s * (0.05 + i * 0.05) + Math.sin(x * 14 + i) * s * 0.05); ctx.stroke(); }
      ell(s * 0.3, s * 0.08, s * 0.15, s * 0.07, 0, '#d9822b');
      ell(-s * 0.25, s * 0.12, s * 0.1, s * 0.06, 0, '#5aa43a');
      break;
    case 'chip':
      for (let i = 0; i < 7; i++) ell((rnd() - 0.5) * s * 1.3, (rnd() - 0.3) * s * 0.9, s * 0.38, s * 0.26, rnd() * 3, i % 2 ? '#f0c24a' : '#e6ae32');
      break;
    case 'meat':
      for (let i = 0; i < 4; i++) { ctx.fillStyle = i % 2 ? '#6a2c18' : '#7d3a1e'; ctx.save(); ctx.rotate(-0.4 + i * 0.25); ctx.fillRect(-s * 0.8, -s * 0.12 + i * s * 0.05, s * 1.6, s * 0.2); ctx.restore(); }
      break;
    case 'oats':
      ell(0, s * 0.3, s * 0.95, s * 0.4, 0, '#2a4f8a');
      ell(0, s * 0.18, s * 0.8, s * 0.27, 0, '#e9dcc0');
      for (let i = 0; i < 30; i++) ell((rnd() - 0.5) * s * 1.3, s * (0.08 + rnd() * 0.18), s * 0.07, s * 0.04, rnd() * 3, '#cdb98a');
      grainSprig(ctx, s * 0.6, -s * 0.4, s * 0.5);
      break;
    case 'peanut':
      for (let i = 0; i < 3; i++) { ctx.save(); ctx.translate((i - 1) * s * 0.55, (i % 2) * s * 0.2); ctx.rotate(0.5 - i * 0.4); ell(0, -s * 0.18, s * 0.22, s * 0.25, 0, '#d4a35c'); ell(0, s * 0.18, s * 0.24, s * 0.27, 0, '#d4a35c'); ctx.restore(); }
      break;
    case 'cross':
      ctx.fillStyle = '#d61f26';
      ctx.fillRect(-s * 0.2, -s * 0.65, s * 0.4, s * 1.3);
      ctx.fillRect(-s * 0.65, -s * 0.2, s * 1.3, s * 0.4);
      break;
    case 'wcross':
      ctx.fillStyle = '#fff';
      ctx.fillRect(-s * 0.2, -s * 0.65, s * 0.4, s * 1.3);
      ctx.fillRect(-s * 0.65, -s * 0.2, s * 1.3, s * 0.4);
      break;
    case 'pill':
      ctx.save(); ctx.rotate(-0.5);
      ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.roundRect(-s * 0.7, -s * 0.25, s * 0.7, s * 0.5, [s * 0.25, 0, 0, s * 0.25]); ctx.fill();
      ctx.fillStyle = '#e8572a'; ctx.beginPath(); ctx.roundRect(0, -s * 0.25, s * 0.7, s * 0.5, [0, s * 0.25, s * 0.25, 0]); ctx.fill();
      ctx.restore();
      circ(s * 0.5, s * 0.45, s * 0.2, '#fff');
      break;
    case 'drop':
      ctx.fillStyle = '#3d8fd6'; ctx.beginPath(); ctx.moveTo(0, -s * 0.8); ctx.bezierCurveTo(s * 0.7, 0, s * 0.6, s * 0.7, 0, s * 0.7); ctx.bezierCurveTo(-s * 0.6, s * 0.7, -s * 0.7, 0, 0, -s * 0.8); ctx.fill();
      ell(-s * 0.2, s * 0.2, s * 0.12, s * 0.2, 0.3, 'rgba(255,255,255,0.5)');
      break;
    case 'bolt':
      ctx.fillStyle = '#f5c518'; ctx.beginPath(); ctx.moveTo(s * 0.1, -s * 0.8); ctx.lineTo(-s * 0.45, s * 0.1); ctx.lineTo(-s * 0.05, s * 0.1); ctx.lineTo(-s * 0.2, s * 0.8); ctx.lineTo(s * 0.45, -s * 0.15); ctx.lineTo(s * 0.05, -s * 0.15); ctx.closePath(); ctx.fill();
      break;
    case 'flame':
      ctx.fillStyle = '#f08a1c'; ctx.beginPath(); ctx.moveTo(0, -s * 0.85); ctx.bezierCurveTo(s * 0.7, -s * 0.1, s * 0.55, s * 0.75, 0, s * 0.75); ctx.bezierCurveTo(-s * 0.55, s * 0.75, -s * 0.6, 0, 0, -s * 0.85); ctx.fill();
      ctx.fillStyle = '#ffd34a'; ctx.beginPath(); ctx.moveTo(0, -s * 0.2); ctx.bezierCurveTo(s * 0.35, s * 0.2, s * 0.3, s * 0.65, 0, s * 0.65); ctx.bezierCurveTo(-s * 0.3, s * 0.65, -s * 0.3, s * 0.2, 0, -s * 0.2); ctx.fill();
      break;
    case 'paw':
      ell(0, s * 0.3, s * 0.42, s * 0.36, 0, '#3b2a1c');
      ell(-s * 0.48, -s * 0.15, s * 0.16, s * 0.21, -0.3, '#3b2a1c');
      ell(-s * 0.17, -s * 0.45, s * 0.16, s * 0.21, -0.1, '#3b2a1c');
      ell(s * 0.17, -s * 0.45, s * 0.16, s * 0.21, 0.1, '#3b2a1c');
      ell(s * 0.48, -s * 0.15, s * 0.16, s * 0.21, 0.3, '#3b2a1c');
      break;
    case 'bug':
      ell(0, 0, s * 0.3, s * 0.45, 0, '#3a2a1a');
      ctx.strokeStyle = '#3a2a1a'; ctx.lineWidth = s * 0.06;
      for (let i = -1; i <= 1; i++) { ctx.beginPath(); ctx.moveTo(-s * 0.25, i * s * 0.2); ctx.lineTo(-s * 0.6, i * s * 0.35); ctx.moveTo(s * 0.25, i * s * 0.2); ctx.lineTo(s * 0.6, i * s * 0.35); ctx.stroke(); }
      ctx.strokeStyle = '#d61f26'; ctx.lineWidth = s * 0.12; ctx.beginPath(); ctx.arc(0, 0, s * 0.8, 0, TAU); ctx.moveTo(-s * 0.56, -s * 0.56); ctx.lineTo(s * 0.56, s * 0.56); ctx.stroke();
      break;
    case 'leaf': case 'seedling':
      ctx.strokeStyle = '#3f7a2a'; ctx.lineWidth = s * 0.08; ctx.beginPath(); ctx.moveTo(0, s * 0.8); ctx.lineTo(0, -s * 0.1); ctx.stroke();
      ell(-s * 0.3, -s * 0.2, s * 0.35, s * 0.16, -0.5, '#5aa43a');
      ell(s * 0.3, -s * 0.35, s * 0.35, s * 0.16, 0.5, '#6bb84a');
      break;
    case 'carrot':
      ctx.fillStyle = '#ee7a1c'; ctx.beginPath(); ctx.moveTo(-s * 0.3, -s * 0.5); ctx.lineTo(s * 0.3, -s * 0.5); ctx.lineTo(0, s * 0.9); ctx.fill();
      ell(-s * 0.15, -s * 0.75, s * 0.12, s * 0.3, -0.3, '#4c9a2c'); ell(s * 0.15, -s * 0.75, s * 0.12, s * 0.3, 0.3, '#4c9a2c');
      break;
    case 'bean':
      ctx.strokeStyle = '#4c9a2c'; ctx.lineWidth = s * 0.18; ctx.lineCap = 'round';
      for (let i = -1; i <= 1; i++) { ctx.beginPath(); ctx.moveTo(i * s * 0.35, -s * 0.7); ctx.quadraticCurveTo(i * s * 0.35 + s * 0.3, 0, i * s * 0.35, s * 0.7); ctx.stroke(); }
      break;
    case 'sun':
      circ(0, 0, s * 0.45, '#f5b51c');
      ctx.strokeStyle = '#f5b51c'; ctx.lineWidth = s * 0.08;
      for (let i = 0; i < 12; i++) { const a = i * TAU / 12; ctx.beginPath(); ctx.moveTo(Math.cos(a) * s * 0.58, Math.sin(a) * s * 0.58); ctx.lineTo(Math.cos(a) * s * 0.85, Math.sin(a) * s * 0.85); ctx.stroke(); }
      break;
    case 'snow':
      ctx.strokeStyle = '#fff'; ctx.lineWidth = s * 0.08;
      for (let i = 0; i < 3; i++) { ctx.save(); ctx.rotate(i * Math.PI / 3); ctx.beginPath(); ctx.moveTo(0, -s * 0.8); ctx.lineTo(0, s * 0.8); ctx.moveTo(-s * 0.2, -s * 0.6); ctx.lineTo(0, -s * 0.4); ctx.lineTo(s * 0.2, -s * 0.6); ctx.moveTo(-s * 0.2, s * 0.6); ctx.lineTo(0, s * 0.4); ctx.lineTo(s * 0.2, s * 0.6); ctx.stroke(); ctx.restore(); }
      break;
    case 'screw':
      ctx.fillStyle = '#9aa0a6'; ctx.fillRect(-s * 0.1, -s * 0.5, s * 0.2, s * 1.2);
      ctx.fillRect(-s * 0.3, -s * 0.65, s * 0.6, s * 0.15);
      ctx.strokeStyle = '#555'; ctx.lineWidth = s * 0.05;
      for (let i = 0; i < 8; i++) { ctx.beginPath(); ctx.moveTo(-s * 0.14, -s * 0.4 + i * s * 0.13); ctx.lineTo(s * 0.14, -s * 0.34 + i * s * 0.13); ctx.stroke(); }
      break;
    case 'battery':
      ctx.fillStyle = '#1a1a1a'; ctx.fillRect(-s * 0.3, -s * 0.55, s * 0.6, s * 1.3);
      ctx.fillStyle = '#c98a2a'; ctx.fillRect(-s * 0.3, -s * 0.55, s * 0.6, s * 0.4);
      ctx.fillStyle = '#bbb'; ctx.fillRect(-s * 0.1, -s * 0.7, s * 0.2, s * 0.15);
      break;
    case 'tooth':
      ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.moveTo(-s * 0.5, -s * 0.4); ctx.quadraticCurveTo(0, -s * 0.7, s * 0.5, -s * 0.4); ctx.lineTo(s * 0.35, s * 0.7); ctx.lineTo(s * 0.1, s * 0.1); ctx.lineTo(-s * 0.1, s * 0.1); ctx.lineTo(-s * 0.35, s * 0.7); ctx.closePath(); ctx.fill();
      break;
    case 'bubble':
      for (let i = 0; i < 7; i++) { ctx.strokeStyle = 'rgba(255,255,255,0.9)'; ctx.lineWidth = s * 0.05; ctx.beginPath(); ctx.arc((rnd() - 0.5) * s * 1.2, (rnd() - 0.5) * s * 1.2, s * (0.1 + rnd() * 0.25), 0, TAU); ctx.stroke(); }
      break;
    case 'moon':
      circ(0, 0, s * 0.6, '#f2e6a0'); circ(s * 0.28, -s * 0.15, s * 0.5, 'rgba(20,30,70,1)');
      break;
    case 'bottle':
      ctx.fillStyle = 'rgba(255,255,255,0.9)'; ctx.fillRect(-s * 0.25, -s * 0.2, s * 0.5, s * 0.9); ctx.fillRect(-s * 0.1, -s * 0.5, s * 0.2, s * 0.3);
      break;
    default:
      circ(0, 0, s * 0.5, 'rgba(255,255,255,0.6)');
  }
  ctx.restore();
}
function grainSprig(ctx, x, y, s) {
  ctx.save(); ctx.translate(x, y); ctx.strokeStyle = '#c9a24a'; ctx.lineWidth = s * 0.06;
  ctx.beginPath(); ctx.moveTo(0, s); ctx.lineTo(0, -s * 0.5); ctx.stroke();
  ctx.fillStyle = '#d9b25a';
  for (let i = 0; i < 5; i++) { ctx.beginPath(); ctx.ellipse(-s * 0.1, -s * 0.4 + i * s * 0.2, s * 0.1, s * 0.05, 0.6, 0, TAU); ctx.ellipse(s * 0.1, -s * 0.4 + i * s * 0.2, s * 0.1, s * 0.05, -0.6, 0, TAU); ctx.fill(); }
  ctx.restore();
}

// ---------- label layouts ----------
// L = { t: title, s: subtitle, n: net weight, b: background, f: text color, a: accent, p: picture, tag: corner flash }
function drawWrap(ctx, w, h, L, rnd) {
  ctx.fillStyle = L.b; ctx.fillRect(0, 0, w, h);
  // accent bands top and bottom
  ctx.fillStyle = L.a;
  ctx.fillRect(0, 0, w, h * 0.12);
  ctx.fillRect(0, h * 0.88, w, h * 0.12);
  // curved swoosh across the front
  ctx.fillStyle = shade(L.a, 0.25);
  ctx.beginPath(); ctx.moveTo(w * 0.22, h * 0.62); ctx.bezierCurveTo(w * 0.4, h * 0.5, w * 0.6, h * 0.75, w * 0.78, h * 0.6); ctx.lineTo(w * 0.78, h * 0.88); ctx.lineTo(w * 0.22, h * 0.88); ctx.fill();
  const fx = w * 0.5, fw = w * 0.42;
  if (L.p) {
    ctx.fillStyle = 'rgba(255,255,255,0.18)';
    ctx.beginPath(); ctx.ellipse(fx, h * 0.66, fw * 0.36, h * 0.2, 0, 0, TAU); ctx.fill();
    pict(ctx, L.p, fx, h * 0.66, h * 0.17, rnd);
  }
  txt(ctx, L.t, fx, h * 0.3, h * 0.2, { color: L.f, maxW: fw, font: COND, stroke: L.st });
  if (L.s) txt(ctx, L.s, fx, h * 0.45, h * 0.08, { color: L.f, maxW: fw * 0.9, weight: 'bold' });
  if (L.n) txt(ctx, L.n, fx, h * 0.94, h * 0.055, { color: L.nf || '#fff', maxW: fw });
  if (L.tag) txt(ctx, L.tag, fx, h * 0.06, h * 0.06, { color: '#fff', maxW: fw });
  nutrition(ctx, w * 0.04, h * 0.16, w * 0.16, h * 0.68, rnd);
  finePrint(ctx, w * 0.8, h * 0.18, w * 0.16, 6, h * 0.045, rnd, 'rgba(0,0,0,0.45)');
  barcode(ctx, w * 0.82, h * 0.52, w * 0.12, h * 0.2, rnd);
  grime(ctx, w, h, rnd, 0.8);
}
function drawFront(ctx, w, h, L, rnd) {
  ctx.fillStyle = L.b; ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = L.a;
  ctx.fillRect(0, 0, w, h * 0.16);
  ctx.beginPath(); ctx.moveTo(0, h * 0.16); ctx.lineTo(w, h * 0.16); ctx.lineTo(w, h * 0.22); ctx.quadraticCurveTo(w * 0.5, h * 0.3, 0, h * 0.22); ctx.fill();
  if (L.tag) {
    ctx.fillStyle = L.tc || '#e8302a';
    ctx.beginPath(); ctx.arc(w * 0.82, h * 0.3, Math.min(w, h) * 0.12, 0, TAU); ctx.fill();
    txt(ctx, L.tag, w * 0.82, h * 0.3, Math.min(w, h) * 0.06, { color: '#fff', maxW: Math.min(w, h) * 0.2 });
  }
  if (L.top) txt(ctx, L.top, w / 2, h * 0.08, h * 0.07, { color: L.tf || '#fff', maxW: w * 0.86 });
  txt(ctx, L.t, w / 2, h * (L.t2 ? 0.34 : 0.4), Math.min(h * 0.13, w * 0.3), { color: L.f, maxW: w * 0.88, font: COND, stroke: L.st });
  if (L.t2) txt(ctx, L.t2, w / 2, h * 0.46, Math.min(h * 0.1, w * 0.24), { color: L.f, maxW: w * 0.88, font: COND, stroke: L.st });
  if (L.s) txt(ctx, L.s, w / 2, h * 0.56, Math.min(h * 0.055, w * 0.1), { color: L.f, maxW: w * 0.85 });
  if (L.p) {
    ctx.fillStyle = 'rgba(255,255,255,0.16)';
    ctx.beginPath(); ctx.ellipse(w / 2, h * 0.75, w * 0.36, h * 0.13, 0, 0, TAU); ctx.fill();
    pict(ctx, L.p, w / 2, h * 0.75, Math.min(w * 0.32, h * 0.14), rnd);
  }
  if (L.n) {
    ctx.fillStyle = 'rgba(0,0,0,0.25)';
    ctx.fillRect(0, h * 0.91, w, h * 0.09);
    txt(ctx, L.n, w / 2, h * 0.955, h * 0.045, { color: '#fff', maxW: w * 0.9 });
  }
  grime(ctx, w, h, rnd, 0.7);
}
// plain side panel with nutrition / fine print and barcode
function drawSide(ctx, w, h, L, rnd) {
  ctx.fillStyle = L.b; ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = L.a; ctx.fillRect(0, 0, w, h * 0.16);
  if (L.food !== false) nutrition(ctx, w * 0.1, h * 0.22, w * 0.8, h * 0.5, rnd);
  else { ctx.fillStyle = '#fff'; ctx.fillRect(w * 0.08, h * 0.22, w * 0.84, h * 0.5); finePrint(ctx, w * 0.12, h * 0.25, w * 0.76, 12, h * 0.035, rnd, '#333'); }
  barcode(ctx, w * 0.2, h * 0.78, w * 0.6, h * 0.12, rnd);
  grime(ctx, w, h, rnd, 0.7);
}

// ---------- geometry ----------
function gBox(w, h, d) {
  // Stylized: every box gets soft, rounded edges.
  // Thin parts (cards, labels, panels under 4 cm) stay plain boxes: rounding them costs triangles for nothing.
  if (TOON && ROUND && Math.min(w, h, d) >= 0.04) return gRBox(w, h, d, Math.min(w, h, d) * 0.16);
  return cached(GEO, `box${w},${h},${d}`, () => new THREE.BoxGeometry(w, h, d).translate(0, h / 2, 0));
}
function gCyl(rt, rb, h, seg = 16, open = false) {
  return cached(GEO, `cyl${rt},${rb},${h},${seg},${open}`, () => new THREE.CylinderGeometry(rt, rb, h, seg, 1, open, Math.PI, TAU).translate(0, h / 2, 0));
}
function gSphere(r, ws = 12, hs = 8) {
  return cached(GEO, `sph${r},${ws},${hs}`, () => new THREE.SphereGeometry(r, ws, hs));
}
function gCircle(r, seg = 16) {
  return cached(GEO, `circ${r},${seg}`, () => new THREE.CircleGeometry(r, seg).rotateX(-Math.PI / 2));
}
function gTorus(R, r, rs = 6, ts = 16, arc = TAU) {
  return cached(GEO, `tor${R},${r},${rs},${ts},${arc}`, () => new THREE.TorusGeometry(R, r, rs, ts, arc));
}
// lathe from [radius, y] pairs, label seam at the back
function gLathe(key, pts, seg = 16) {
  return cached(GEO, 'lathe' + key + seg, () => new THREE.LatheGeometry(pts.map((p) => new THREE.Vector2(Math.max(0.0001, p[0]), p[1])), seg, Math.PI, TAU));
}
function gTube(key, pts, r, tseg = 16, rseg = 6, closed = false) {
  return cached(GEO, 'tube' + key, () => new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts.map((p) => new THREE.Vector3(p[0], p[1], p[2])), closed), tseg, r, rseg, closed));
}
// box with soft (chamfered, smooth-shaded) edges; keeps BoxGeometry face groups and UVs
function gRBox(w, h, d, r) {
  return cached(GEO, `rbox${w},${h},${d},${r}`, () => {
    const g = new THREE.BoxGeometry(w, h, d, 3, 3, 3);
    const p = g.attributes.position, n = g.attributes.normal;
    const hx = w / 2, hy = h / 2, hz = d / 2;
    const rr = Math.min(r, hx * 0.9, hy * 0.9, hz * 0.9);
    const ix = hx - rr, iy = hy - rr, iz = hz - rr;
    const v = new THREE.Vector3(), q = new THREE.Vector3();
    const snap = (val, half, inner) => (Math.abs(Math.abs(val) - half / 3) < 1e-6 ? Math.sign(val) * inner : val);
    const uv = g.attributes.uv;
    for (let i = 0; i < p.count; i++) {
      // UVs follow the moved vertices, so labels are not stretched near the rounded edges.
      const nx = n.getX(i), ny = n.getY(i), nz = n.getZ(i);
      const X = snap(p.getX(i), hx, ix) / w, Y = snap(p.getY(i), hy, iy) / h, Z = snap(p.getZ(i), hz, iz) / d;
      if (Math.abs(nz) > 0.5) uv.setXY(i, 0.5 + X * Math.sign(nz), 0.5 + Y);
      else if (Math.abs(nx) > 0.5) uv.setXY(i, 0.5 - Z * Math.sign(nx), 0.5 + Y);
      else uv.setXY(i, 0.5 + X, 0.5 - Z * Math.sign(ny));
      v.set(snap(p.getX(i), hx, ix), snap(p.getY(i), hy, iy), snap(p.getZ(i), hz, iz));
      q.set(THREE.MathUtils.clamp(v.x, -ix, ix), THREE.MathUtils.clamp(v.y, -iy, iy), THREE.MathUtils.clamp(v.z, -iz, iz));
      const dir = v.clone().sub(q);
      if (dir.lengthSq() > 1e-12) {
        dir.normalize();
        v.copy(q).addScaledVector(dir, rr);
        n.setXYZ(i, dir.x, dir.y, dir.z);
      }
      p.setXYZ(i, v.x, v.y + hy, v.z);
    }
    return g;
  });
}
// soft bag / pouch: thick in the middle, thin at the edges, crimped seals at top and bottom
function gPillow(w, h, d, crimp = 0.08, nx = 6, ny = 8) {
  return cached(GEO, `pil${w},${h},${d},${crimp},${nx},${ny}`, () => {
    const g = new THREE.BoxGeometry(w, h, d, nx, ny, 1);
    const p = g.attributes.position;
    for (let i = 0; i < p.count; i++) {
      const x = p.getX(i), y = p.getY(i), z = p.getZ(i);
      const tx = Math.abs(x) / (w / 2), ty = Math.abs(y) / (h / 2);
      let f = Math.sqrt(Math.max(0, 1 - tx ** 4)) * Math.sqrt(Math.max(0, 1 - ty ** 3));
      if (crimp > 0 && ty > 1 - crimp * 2) f = 0.06;
      f = Math.max(0.06, f);
      p.setXYZ(i, x * (1 - 0.04 * (1 - ty)), y + h / 2, z * f);
    }
    g.computeVertexNormals();
    return g;
  });
}
function gExtrude(key, shapeFn, depth, bevel = 0.001) {
  return cached(GEO, 'ext' + key, () => {
    const g = new THREE.ExtrudeGeometry(shapeFn(), { depth, bevelEnabled: bevel > 0, bevelThickness: bevel, bevelSize: bevel, bevelSegments: 1, curveSegments: 6 });
    g.translate(0, 0, -depth / 2);
    return g;
  });
}

// ---------- materials ----------
function mat(key, p) {
  return cached(MAT, key, () => {
    const m = new THREE.MeshStandardMaterial(stylize(p));
    if (TOON) softRim(m);
    return m;
  });
}
// Stylized soft rim: edges that turn away from you glow a little in the object's own color,
// so shapes read clearly and look painted, as in the reference sheets. One shared shader variant.
function softRim(m) {
  m.onBeforeCompile = (sh) => {
    sh.fragmentShader = sh.fragmentShader.replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
      float llRim = pow(1.0 - clamp(dot(normal, normalize(vViewPosition)), 0.0, 1.0), 2.5);
      totalEmissiveRadiance += diffuseColor.rgb * (0.06 + 0.32 * llRim);`);
  };
  m.customProgramCacheKey = () => 'llSoftRim';
}
// Stylized materials: a soft, painted look. Metal is satin, not mirror; plain colors are a little richer.
function stylize(p) {
  if (!TOON) return p;
  const q = { ...p };
  if (!q.transparent) q.roughness = Math.min(0.85, Math.max(0.45, (q.roughness ?? 0.7) * 0.7 + 0.22));
  if (q.metalness) q.metalness = Math.min(0.35, q.metalness * 0.55);
  if (q.color !== undefined && !q.map) {
    const c = new THREE.Color(q.color);
    const hsl = {};
    c.getHSL(hsl);
    c.setHSL(hsl.h, Math.min(1, hsl.s * 1.18), Math.min(0.92, hsl.l * 1.04));
    q.color = c;
  }
  return q;
}
function col(hex, rough = 0.7, metal = 0) {
  return mat(`c${hex}|${rough}|${metal}`, { color: hex, roughness: rough, metalness: metal });
}
function tmat(tex, rough = 0.7, metal = 0, extra = {}) {
  const key = `t${tex ? tex.uuid : 'none'}|${rough}|${metal}|${JSON.stringify(extra)}`;
  return mat(key, { map: tex, roughness: rough, metalness: metal, ...extra });
}
const M = {
  get steel() { return col(0xb4b9be, 0.38, 0.55); },
  get tin() { return col(0xd2d5d8, 0.32, 0.6); },
  get alu() { return col(0xc9ccd0, 0.3, 0.55); },
  get chrome() { return col(0xd8dbe0, 0.22, 0.6); },
  get darkMetal() { return col(0x3a3d41, 0.5, 0.45); },
  get brass() { return col(0xc59a45, 0.35, 0.6); },
  get blackPl() { return col(0x1d1e20, 0.55); },
  get whitePl() { return col(0xecebe6, 0.45); },
  get greyPl() { return col(0x8a8d90, 0.55); },
  get rubber() { return col(0x1a1a1a, 0.92); },
  get paper() { return col(0xf0ece2, 0.85); },
  get glass() { return mat('glass', { color: 0xcfe3ea, roughness: 0.08, metalness: 0.1, transparent: true, opacity: 0.32, depthWrite: false }); },
  get clearPl() { return mat('clearpl', { color: 0xe4eef2, roughness: 0.15, metalness: 0, transparent: true, opacity: 0.4, depthWrite: false }); },
};

// ---------- common textures ----------
function texCardboard(variant = 0) {
  return ctex('cardboard' + variant, 256, 256, (c, w, h, r) => {
    noiseFill(c, w, h, r, variant === 1 ? '#b99868' : '#a9824f', 0.12, 3000, 2);
    c.strokeStyle = 'rgba(80,55,25,0.18)'; c.lineWidth = 1;
    for (let y = 0; y < h; y += 4 + r() * 3) { c.beginPath(); c.moveTo(0, y); c.lineTo(w, y + (r() - 0.5) * 3); c.stroke(); }
    grime(c, w, h, r, 0.6);
  });
}
// printed shipping carton with tape and arrows
function texCarton(label = 'FRAGILE', seed = 0) {
  return ctex('carton' + label + seed, 512, 512, (c, w, h, r) => drawCarton(c, w, h, r, label, seed));
}
function drawCarton(c, w, h, r, label, seed) {
  {
    noiseFill(c, w, h, r, '#ad8653', 0.1, 4000, 2);
    c.strokeStyle = 'rgba(80,55,25,0.15)';
    for (let y = 0; y < h; y += 5 + r() * 3) { c.beginPath(); c.moveTo(0, y); c.lineTo(w, y); c.stroke(); }
    // tape down the middle
    c.fillStyle = 'rgba(200,170,110,0.75)'; c.fillRect(w * 0.43, 0, w * 0.14, h);
    c.fillStyle = 'rgba(255,255,255,0.15)'; c.fillRect(w * 0.45, 0, w * 0.02, h);
    // print
    c.fillStyle = 'rgba(40,30,20,0.75)';
    txt(c, label, w * 0.22, h * 0.25, 34, { color: 'rgba(40,30,20,0.8)', maxW: w * 0.36, font: COND });
    txt(c, `${12 + (seed % 4) * 12} CT`, w * 0.78, h * 0.25, 30, { color: 'rgba(40,30,20,0.8)', maxW: w * 0.36 });
    for (let i = 0; i < 2; i++) { // up arrows
      const x = w * (0.72 + i * 0.12), y = h * 0.72;
      c.beginPath(); c.moveTo(x, y - 40); c.lineTo(x - 18, y - 12); c.lineTo(x - 6, y - 12); c.lineTo(x - 6, y + 30); c.lineTo(x + 6, y + 30); c.lineTo(x + 6, y - 12); c.lineTo(x + 18, y - 12); c.fill();
    }
    c.strokeStyle = 'rgba(40,30,20,0.7)'; c.lineWidth = 3; c.strokeRect(w * 0.06, h * 0.62, w * 0.3, h * 0.2);
    finePrint(c, w * 0.08, h * 0.65, w * 0.26, 5, 10, r, 'rgba(40,30,20,0.6)');
    grime(c, w, h, r, 1.2);
  }
}
function texWood(light = '#b98c5a', dark = '#8a5f35', key = '') {
  return ctex('wood' + light + dark + key, 256, 256, (c, w, h, r) => {
    c.fillStyle = light; c.fillRect(0, 0, w, h);
    for (let i = 0; i < 60; i++) {
      c.strokeStyle = `rgba(${i % 2 ? '90,55,25' : '60,35,15'},${0.08 + r() * 0.2})`;
      c.lineWidth = 1 + r() * 3;
      const y0 = r() * h;
      c.beginPath(); c.moveTo(0, y0);
      for (let x = 0; x <= w; x += 16) c.lineTo(x, y0 + Math.sin(x * 0.02 + i) * 4 + (r() - 0.5) * 2);
      c.stroke();
    }
    c.fillStyle = dark; c.globalAlpha = 0.25;
    for (let i = 0; i < 3; i++) { c.beginPath(); c.ellipse(r() * w, r() * h, 6 + r() * 6, 3 + r() * 3, 0, 0, TAU); c.fill(); }
    c.globalAlpha = 1;
    grime(c, w, h, r, 0.5);
  }, { repeat: [1, 1] });
}
function texBark() {
  return ctex('bark', 256, 256, (c, w, h, r) => {
    noiseFill(c, w, h, r, '#4f3b2a', 0.25, 3000, 3);
    for (let i = 0; i < 40; i++) {
      c.strokeStyle = `rgba(20,12,6,${0.3 + r() * 0.4})`; c.lineWidth = 2 + r() * 4;
      const x0 = r() * w; c.beginPath(); c.moveTo(x0, 0);
      for (let y = 0; y <= h; y += 20) c.lineTo(x0 + (r() - 0.5) * 12, y);
      c.stroke();
    }
    c.fillStyle = 'rgba(110,120,80,0.25)';
    for (let i = 0; i < 8; i++) { c.beginPath(); c.ellipse(r() * w, r() * h, 10 + r() * 20, 5 + r() * 10, r() * 3, 0, TAU); c.fill(); }
  }, { repeat: [1, 1] });
}
function texEndGrain(split = false) {
  return ctex('endgrain' + split, 128, 128, (c, w, h, r) => {
    c.fillStyle = '#c9a26c'; c.fillRect(0, 0, w, h);
    const cx = split ? 0 : w / 2, cy = split ? h : h / 2;
    for (let i = 1; i < 26; i++) { c.strokeStyle = `rgba(120,80,40,${0.2 + r() * 0.3})`; c.lineWidth = 1 + r(); c.beginPath(); c.arc(cx, cy, i * 6 + r() * 2, 0, TAU); c.stroke(); }
    c.strokeStyle = 'rgba(60,40,20,0.5)'; c.lineWidth = 1.5;
    for (let i = 0; i < 4; i++) { c.beginPath(); c.moveTo(cx, cy); c.lineTo(cx + (r() - 0.3) * w, cy - r() * h); c.stroke(); }
  });
}
function texKnit(color, key = '') {
  return ctex('knit' + color + key, 128, 128, (c, w, h, r) => {
    c.fillStyle = color; c.fillRect(0, 0, w, h);
    const dk = shade(color, -0.35), lt = shade(color, 0.18);
    for (let x = 0; x < w; x += 8) for (let y = 0; y < h; y += 8) {
      c.fillStyle = lt; c.beginPath(); c.ellipse(x + 2, y + 4, 2.2, 4, -0.5, 0, TAU); c.ellipse(x + 6, y + 4, 2.2, 4, 0.5, 0, TAU); c.fill();
      c.fillStyle = dk; c.fillRect(x + 3.6, y, 0.8, 8);
    }
    grime(c, w, h, r, 0.3);
  }, { repeat: [3, 3] });
}
function texQuilt(color) {
  return ctex('quilt' + color, 256, 256, (c, w, h, r) => {
    const dk = shade(color, -0.45), lt = shade(color, 0.22);
    for (let y = 0; y < h; y += 32) {
      const g = c.createLinearGradient(0, y, 0, y + 32);
      g.addColorStop(0, dk); g.addColorStop(0.15, color); g.addColorStop(0.5, lt); g.addColorStop(0.85, color); g.addColorStop(1, dk);
      c.fillStyle = g; c.fillRect(0, y, w, 32);
      c.fillStyle = 'rgba(0,0,0,0.35)';
      for (let x = 0; x < w; x += 6) c.fillRect(x, y + 31, 3, 1);
    }
    grime(c, w, h, r, 0.4);
  }, { repeat: [1, 1] });
}
function texNylon(color, key = '') {
  return ctex('nylon' + color + key, 128, 128, (c, w, h, r) => {
    noiseFill(c, w, h, r, color, 0.06, 1500, 1);
    c.strokeStyle = 'rgba(0,0,0,0.12)'; c.lineWidth = 1;
    for (let i = 0; i < w; i += 8) { c.beginPath(); c.moveTo(i, 0); c.lineTo(i, h); c.moveTo(0, i); c.lineTo(w, i); c.stroke(); }
    grime(c, w, h, r, 0.4);
  }, { repeat: [2, 2] });
}
function texPlaid(a, b, cc) {
  return ctex('plaid' + a + b + cc, 256, 256, (c, w, h, r) => {
    c.fillStyle = a; c.fillRect(0, 0, w, h);
    c.globalAlpha = 0.55; c.fillStyle = b;
    for (let i = 0; i < w; i += 64) { c.fillRect(i, 0, 24, h); c.fillRect(0, i, w, 24); }
    c.fillStyle = cc; c.globalAlpha = 0.7;
    for (let i = 40; i < w; i += 64) { c.fillRect(i, 0, 4, h); c.fillRect(0, i, w, 4); }
    c.globalAlpha = 1;
    noiseFill2(c, w, h, r, 0.05);
  }, { repeat: [1, 1] });
}
function noiseFill2(c, w, h, r, spread) {
  for (let i = 0; i < 2500; i++) { const v = (r() - 0.5) * spread; c.fillStyle = v > 0 ? `rgba(255,255,255,${v})` : `rgba(0,0,0,${-v})`; c.fillRect(r() * w, r() * h, 2, 2); }
}
function texBrushed(base = '#b9bec4', key = '') {
  return ctex('brushed' + base + key, 128, 128, (c, w, h, r) => {
    c.fillStyle = base; c.fillRect(0, 0, w, h);
    for (let i = 0; i < 300; i++) { c.fillStyle = r() < 0.5 ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.1)'; c.fillRect(0, r() * h, w, 1); }
    grime(c, w, h, r, 0.5);
  });
}
function texPainted(color, key = '') { // chipped painted metal
  return ctex('paint' + color + key, 256, 256, (c, w, h, r) => {
    noiseFill(c, w, h, r, color, 0.06, 2000, 2);
    for (let i = 0; i < 40; i++) {
      c.fillStyle = r() < 0.6 ? 'rgba(70,70,72,0.85)' : 'rgba(110,60,30,0.6)';
      c.beginPath(); c.ellipse(r() * w, r() * h, 1 + r() * 6, 1 + r() * 3, r() * 3, 0, TAU); c.fill();
    }
    grime(c, w, h, r, 0.8);
  });
}
function texLid(key = '') { // can lid with concentric rings
  return ctex('lid' + key, 128, 128, (c, w, h, r) => {
    const g = c.createRadialGradient(64, 64, 0, 64, 64, 64);
    g.addColorStop(0, '#d9dcdf'); g.addColorStop(1, '#a9adb2');
    c.fillStyle = g; c.fillRect(0, 0, w, h);
    c.strokeStyle = 'rgba(0,0,0,0.25)'; c.lineWidth = 2;
    for (const rr of [60, 54, 46, 38]) { c.beginPath(); c.arc(64, 64, rr, 0, TAU); c.stroke(); }
    c.strokeStyle = 'rgba(255,255,255,0.4)'; c.lineWidth = 1;
    for (const rr of [57, 50, 42]) { c.beginPath(); c.arc(64, 64, rr, 0, TAU); c.stroke(); }
    grime(c, w, h, r, 0.5);
  });
}

// mesh helper: adds a mesh to parent with position / rotation / scale
function add(parent, geo, material, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0, sx = 1, sy = 1, sz = 1) {
  const m = new THREE.Mesh(geo, material);
  m.position.set(x, y, z);
  m.rotation.set(rx, ry, rz);
  if (sx !== 1 || sy !== 1 || sz !== 1) m.scale.set(sx, sy, sz);
  m.castShadow = true;
  m.receiveShadow = true;
  parent.add(m);
  return m;
}
// box with separate materials per face: [+x, -x, +y, -y, +z(front), -z(back)]
function faceMats(front, side, top, back) {
  return [side, side, top || side, top || side, front, back || side];
}
// label textures (cached by spec)
function wrapTex(L, w = 512, h = 200) {
  return ctex('wrap' + JSON.stringify(L) + w + 'x' + h, w, h, (c, ww, hh, r) => drawWrap(c, ww, hh, L, r));
}
function frontTex(L, w = 256, h = 384) {
  return ctex('front' + JSON.stringify(L) + w + 'x' + h, w, h, (c, ww, hh, r) => drawFront(c, ww, hh, L, r));
}
function sideTex(L, w = 128, h = 256) {
  return ctex('side' + L.b + L.a + (L.food === false) + w + 'x' + h, w, h, (c, ww, hh, r) => drawSide(c, ww, hh, L, r));
}
// a printed retail box: front + back label, side panels
function printedBox(parent, w, h, d, L, opts = {}) {
  const f = tmat(frontTex(L, opts.tw || 256, opts.th || Math.round(256 * h / w)), opts.rough ?? 0.65);
  const s = tmat(sideTex(L, 128, 256), opts.rough ?? 0.65);
  const t = col(new THREE.Color(L.a).getHex(), opts.rough ?? 0.65);
  const geo = opts.r ? gRBox(w, h, d, opts.r) : gBox(w, h, d);
  return add(parent, geo, faceMats(f, s, t, opts.backSame ? f : s));
}

// Bake every mesh under `root` into one mesh per material (transforms applied), so a model costs
// one draw call per distinct material. Geometry and material caches stay untouched.
function bake(root) {
  root.updateMatrixWorld(true);
  const inv = new THREE.Matrix4().copy(root.matrixWorld).invert();
  const buckets = new Map();
  const m = new THREE.Matrix4(), nm = new THREE.Matrix3();
  const v = new THREE.Vector3(), n = new THREE.Vector3();
  root.traverse((o) => {
    if (!o.isMesh) return;
    m.multiplyMatrices(inv, o.matrixWorld);
    nm.getNormalMatrix(m);
    const flip = m.determinant() < 0;
    const geo = o.geometry;
    const pos = geo.attributes.position, nor = geo.attributes.normal, uv = geo.attributes.uv, idx = geo.index;
    const mats = Array.isArray(o.material) ? o.material : null;
    const ranges = mats ? (geo.groups.length ? geo.groups : [{ start: 0, count: idx ? idx.count : pos.count, materialIndex: 0 }])
      : [{ start: 0, count: idx ? idx.count : pos.count, materialIndex: -1 }];
    for (const gr of ranges) {
      const material = mats ? mats[gr.materialIndex] : o.material;
      if (!material) continue;
      let B = buckets.get(material);
      if (!B) { B = { p: [], n: [], u: [] }; buckets.set(material, B); }
      const end = Math.min(gr.start + gr.count, idx ? idx.count : pos.count);
      for (let k = gr.start; k + 2 < end; k += 3) {
        const tri = flip ? [k, k + 2, k + 1] : [k, k + 1, k + 2];
        for (const kk of tri) {
          const vi = idx ? idx.getX(kk) : kk;
          v.fromBufferAttribute(pos, vi).applyMatrix4(m);
          B.p.push(v.x, v.y, v.z);
          if (nor) { n.fromBufferAttribute(nor, vi).applyMatrix3(nm).normalize(); B.n.push(n.x, n.y, n.z); } else B.n.push(0, 1, 0);
          if (uv) B.u.push(uv.getX(vi), uv.getY(vi)); else B.u.push(0, 0);
        }
      }
    }
  });
  const out = new THREE.Group();
  for (const [material, B] of buckets) {
    if (!B.p.length) continue;
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(B.p, 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(B.n, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(B.u, 2));
    g.computeBoundingSphere();
    const mesh = new THREE.Mesh(g, material);
    mesh.castShadow = !material.transparent;
    mesh.receiveShadow = true;
    out.add(mesh);
  }
  // opaque first, transparent last
  out.children.sort((a, b) => (a.material.transparent ? 1 : 0) - (b.material.transparent ? 1 : 0));
  return out;
}

// group finish: bake, center x/z on the origin, bottom on y = 0 (unless keepY), fill userData
function finish(g, id, keepY = false, wall = false) {
  const holder = new THREE.Group(); holder.add(g); // so a builder's own rotation on g is kept
  const baked = bake(holder);
  const outer = new THREE.Group();
  outer.add(baked);
  outer.updateMatrixWorld(true);
  const b = new THREE.Box3().setFromObject(baked);
  const size = new THREE.Vector3(); b.getSize(size);
  const c = new THREE.Vector3(); b.getCenter(c);
  if (wall) baked.position.set(-c.x, -c.y, -b.min.z); // centre of the back plane, facing +z
  else baked.position.set(-c.x, keepY ? 0 : -b.min.y, -c.z);
  outer.userData.height = size.y;
  outer.userData.radius = Math.max(0.06, Math.hypot(size.x, size.z) / 2);
  outer.userData.kind = id;
  outer.name = id;
  return outer;
}

// =====================================================================
// Pickable items
// =====================================================================

// ---- reusable item parts ----
function canBody(g, r, h, L, o = {}) {
  const lab = tmat(wrapTex(L, 512, Math.round(512 * h / (TAU * r))), 0.5);
  add(g, gCyl(r * 0.985, r * 0.985, h * 0.98, 18, true), M.tin, 0, h * 0.01, 0);
  add(g, gCyl(r, r, h * 0.84, 18, true), lab, 0, h * 0.08, 0);
  add(g, gTorus(r * 0.975, r * 0.04, 4, 18), M.tin, 0, h - r * 0.04, 0, Math.PI / 2);
  add(g, gTorus(r * 0.975, r * 0.04, 4, 18), M.tin, 0, r * 0.04, 0, Math.PI / 2);
  add(g, gCircle(r * 0.96, 18), tmat(texLid(), 0.35, 0.5), 0, h - r * 0.05, 0);
  add(g, gCircle(r * 0.96, 18), M.tin, 0, 0.001, 0, Math.PI);
  if (o.tab) {
    add(g, gTorus(r * 0.22, r * 0.05, 3, 10), M.alu, r * 0.3, h - r * 0.035, 0, Math.PI / 2, 0, 0, 1, 1.4, 1);
    add(g, gCyl(r * 0.07, r * 0.07, r * 0.03, 8), M.alu, 0, h - r * 0.06, 0);
  }
}
// plastic or glass bottle from a lathe profile [radius, y], with a printed sleeve between y0 and y1
function bottle(g, prof, L, bodyMat, capMat, y0, y1, rLab, capH = 0.02, o = {}) {
  add(g, gLathe(JSON.stringify(prof), prof, 18), bodyMat);
  const top = prof[prof.length - 1];
  if (L) {
    const tex = o.front ? frontTex(L, 256, 160) : wrapTex(L, 512, Math.round(512 * (y1 - y0) / (TAU * rLab)));
    const m = add(g, gCyl(rLab, rLab, y1 - y0, 18, true), tmat(tex, o.labRough ?? 0.5), 0, y0, 0);
    if (o.labelSide) m.material = [tmat(tex, 0.5)];
  }
  if (capMat) {
    const cr = Math.max(top[0] * 1.12, o.capR || 0);
    add(g, gCyl(cr, cr, capH, 16), capMat, 0, top[1], 0);
    add(g, gCyl(cr * 0.92, cr * 0.92, 0.002, 16), capMat, 0, top[1] + capH, 0);
  }
}
function ribCapTex(color) {
  return ctex('ribcap' + color, 64, 32, (c, w, h, r) => {
    c.fillStyle = color; c.fillRect(0, 0, w, h);
    c.fillStyle = 'rgba(0,0,0,0.25)';
    for (let x = 0; x < w; x += 3) c.fillRect(x, 0, 1, h);
  });
}
function capMat(color) { return tmat(ribCapTex(color), 0.45); }
function rxLabelTex(name, line2, seed) {
  return ctex('rx' + name + line2 + seed, 512, 160, (c, w, h, r) => {
    c.fillStyle = '#fbfbf7'; c.fillRect(0, 0, w, h);
    c.fillStyle = '#1d5fa8'; c.fillRect(0, 0, w, h * 0.18);
    txt(c, 'PHARMACY  Rx', w * 0.3, h * 0.09, h * 0.12, { color: '#fff', maxW: w * 0.4 });
    txt(c, name, w * 0.3, h * 0.36, h * 0.15, { color: '#111', maxW: w * 0.42, align: 'center' });
    txt(c, line2, w * 0.3, h * 0.56, h * 0.08, { color: '#222', maxW: w * 0.44 });
    finePrint(c, w * 0.08, h * 0.68, w * 0.45, 3, h * 0.07, r, '#333');
    c.fillStyle = '#f2c21b'; c.fillRect(w * 0.62, h * 0.25, w * 0.32, h * 0.25);
    txt(c, 'FINISH ALL', w * 0.78, h * 0.37, h * 0.09, { color: '#111', maxW: w * 0.28 });
    barcode(c, w * 0.66, h * 0.62, w * 0.24, h * 0.22, r);
    grime(c, w, h, r, 0.5);
  });
}
function sleeveTex(L) { // simple band label for sleeves and bands
  return ctex('band' + JSON.stringify(L), 512, 128, (c, w, h, r) => {
    c.fillStyle = L.b; c.fillRect(0, 0, w, h);
    c.fillStyle = L.a; c.fillRect(0, 0, w, h * 0.15); c.fillRect(0, h * 0.85, w, h * 0.15);
    txt(c, L.t, w * 0.5, h * 0.42, h * 0.36, { color: L.f, maxW: w * 0.45, font: COND });
    if (L.s) txt(c, L.s, w * 0.5, h * 0.7, h * 0.13, { color: L.f, maxW: w * 0.45 });
    finePrint(c, w * 0.05, h * 0.3, w * 0.18, 4, h * 0.1, r, 'rgba(0,0,0,0.5)');
    barcode(c, w * 0.8, h * 0.3, w * 0.12, h * 0.35, r);
    grime(c, w, h, r, 0.5);
  });
}
// blister / card pack printed on +y (lying flat)
function flatCard(g, w, d, L, th = 0.003) {
  const f = tmat(frontTex(L, 256, Math.round(256 * d / w)), 0.6);
  return add(g, gBox(w, th, d), [col(0xdddddd, 0.7), col(0xdddddd, 0.7), f, col(0xeeeeee, 0.8), col(0xdddddd, 0.7), col(0xdddddd, 0.7)], 0, 0, 0, 0, 0, 0);
}
// a pouch lying or standing; front texture on +z
function pouch(g, w, h, d, L, rough = 0.45, metal = 0.15, crimp = 0.06) {
  const t = frontTex(L, 256, Math.round(256 * h / w));
  return add(g, gPillow(w, h, d, crimp), [tmat(t, 0.5), tmat(t, 0.5), col(new THREE.Color(L.b).getHex(), rough, metal), col(new THREE.Color(L.b).getHex(), rough, metal), tmat(t, rough, metal), tmat(t, rough, metal)]);
}

// a jacket dropped flat on the floor or a table: torso, sleeves spread out, hood or collar, zipper
function jacketLaid(g, shell, cuff, o) {
  const th = o.th;
  add(g, gRBox(0.44, th, 0.56, th * 0.45), shell, 0, 0, 0.02);
  add(g, gRBox(0.5, th * 0.9, 0.16, th * 0.4), shell, 0, 0.002, -0.2);
  for (const s of [-1, 1]) {
    const pts = [[s * 0.2, 0, -0.22], [s * 0.33, 0, -0.17], [s * 0.4, 0, -0.02], [s * 0.43, 0, 0.17]];
    add(g, gTube('sleeve' + s + o.sleeveR, pts, o.sleeveR, 8, 5), shell, 0, th * 0.5, 0, 0, 0, 0, 1, th / (o.sleeveR * 2.1), 1);
    add(g, gCyl(o.sleeveR * 0.85, o.sleeveR * 0.85, 0.05, 8), cuff, s * 0.432, th * 0.5, 0.17, Math.PI / 2, 0, 0, 1, 1, th / (o.sleeveR * 1.9));
    // pockets
    add(g, gBox(0.12, 0.004, 0.012), o.rain ? M.blackPl : col(0x111111, 0.6), s * 0.11, th, 0.12, 0, s * 0.5, 0);
  }
  // hood lying flat above the collar
  add(g, gPillow(0.3, 0.22, th * 1.1, 0, 4, 5), shell, 0, th * 0.55, -0.27, -Math.PI / 2, 0, 0);
  if (o.fur) add(g, gTorus(0.13, 0.028, 4, 12), o.fur, 0, th * 0.75, -0.39, Math.PI / 2, 0, 0, 1.1, 0.95, 0.5);
  if (o.rain) { // drawcords
    for (const s of [-1, 1]) { add(g, gTube('cord' + s, [[s * 0.05, 0, 0], [s * 0.07, 0, 0.05], [s * 0.06, 0, 0.1]], 0.003, 6, 3), M.blackPl, 0, th + 0.002, -0.28); add(g, gCyl(0.007, 0.007, 0.016, 6), M.blackPl, s * 0.06, th + 0.004, -0.17, Math.PI / 2); }
  }
  // zipper and puller
  add(g, gBox(0.012, 0.004, 0.55), M.darkMetal, 0, th - 0.0005, 0.02);
  add(g, gBox(0.012, 0.006, 0.03), M.steel, 0, th, -0.12);
  // tag
  add(g, gBox(0.06, 0.002, 0.03), tmat(sleeveTex({ t: o.rain ? 'RAIN SHELL' : 'INSULATED', s: o.rain ? 'WATERPROOF' : 'DOWN ALTERNATIVE', b: '#f4f1ea', f: '#111', a: '#111' }), 0.6), 0, th * 0.9, -0.33);
}

// ---- label specs ----
const CAN_LABELS = [
  { t: 'BAKED BEANS', s: 'IN TOMATO SAUCE', n: 'NET WT 15 OZ (425g)', b: '#e8a33a', f: '#5a1d0a', a: '#7a2a10', p: 'beans' },
  { t: 'CHICKEN SOUP', s: 'WITH NOODLES', n: 'NET WT 10.5 OZ (298g)', b: '#f4f1ea', f: '#c41e1e', a: '#c41e1e', p: 'soup' },
  { t: 'SWEET CORN', s: 'WHOLE KERNEL', n: 'NET WT 15.25 OZ (432g)', b: '#2f7a32', f: '#ffe14a', a: '#1d5220', p: 'corn' },
  { t: 'DICED TOMATOES', s: 'NO SALT ADDED', n: 'NET WT 14.5 OZ (411g)', b: '#b81d18', f: '#fff', a: '#2f6a2a', p: 'tomato' },
  { t: 'BEEF CHILI', s: 'WITH BEANS', n: 'NET WT 15 OZ (425g)', b: '#3a1a10', f: '#f3c04a', a: '#b5321a', p: 'chili' },
  { t: 'GREEN PEAS', s: 'SWEET TENDER', n: 'NET WT 15 OZ (425g)', b: '#e9efe2', f: '#2f6a2a', a: '#3f8a28', p: 'peas' },
];
const FRUIT_LABELS = [
  { t: 'PEACH HALVES', s: 'IN LIGHT SYRUP', n: 'NET WT 15.25 OZ (432g)', b: '#fbe6c4', f: '#b8501a', a: '#f39a42', p: 'peach' },
  { t: 'FRUIT COCKTAIL', s: 'IN 100% JUICE', n: 'NET WT 15 OZ (425g)', b: '#2b4f9a', f: '#fff', a: '#f2c21b', p: 'fruit' },
  { t: 'PEAR HALVES', s: 'BARTLETT', n: 'NET WT 15 OZ (425g)', b: '#e7efc8', f: '#4f6a1a', a: '#9ab83a', p: 'apple' },
];

const ITEM_BUILDERS = {
  canned_food(g, r) {
    canBody(g, 0.038, 0.112, pick(r, CAN_LABELS));
  },
  canned_fruit(g, r) {
    canBody(g, 0.038, 0.11, pick(r, FRUIT_LABELS), { tab: true });
  },
  dry_food(g, r) {
    if (r() < 0.5) {
      pouch(g, 0.17, 0.25, 0.08, { t: 'LONG GRAIN', t2: 'WHITE RICE', s: 'ENRICHED', n: 'NET WT 2 LB (907g)', b: '#f6f3ea', f: '#1d4f8a', a: '#1d4f8a', p: 'grain', top: 'PANTRY' }, 0.5, 0.05);
    } else {
      const L = { t: 'PENNE', t2: 'RIGATE', s: 'ENRICHED MACARONI', n: 'NET WT 16 OZ (1 LB) 454g', b: '#1d4f9a', f: '#fff', a: '#f2c21b', tf: '#1d4f9a', p: 'grain', top: 'NO. 41' };
      printedBox(g, 0.15, 0.24, 0.06, L);
    }
  },
  peanut_butter(g, r) {
    const prof = [[0, 0], [0.042, 0], [0.046, 0.006], [0.046, 0.1], [0.042, 0.112], [0.036, 0.116], [0.036, 0.122]];
    bottle(g, prof, { t: 'PEANUT BUTTER', s: 'CREAMY', n: 'NET WT 16 OZ (454g)', b: '#f5e6c0', f: '#8a3a12', a: '#c8321e', p: 'peanut' }, col(0x9a6a2c, 0.35), capMat(pick(r, ['#c8321e', '#1d4f9a', '#2f7a32'])), 0.012, 0.095, 0.0465, 0.025, { capR: 0.043 });
  },
  snacks(g, r) {
    const L = pick(r, [
      { t: 'SALTINE', t2: 'CRACKERS', s: 'ORIGINAL', n: 'NET WT 16 OZ (454g)', b: '#f4f1ea', f: '#c41e1e', a: '#c41e1e', p: 'grain', top: '4 SLEEVES' },
      { t: 'GRAHAM', t2: 'CRACKERS', s: 'HONEY', n: 'NET WT 14.4 OZ (408g)', b: '#e3c07a', f: '#5a2a0a', a: '#2b4f9a', p: 'grain', top: 'FAMILY SIZE' },
    ]);
    printedBox(g, 0.2, 0.22, 0.07, L);
  },
  formula(g) {
    // stand-up liquid nutrition pouch with spout
    pouch(g, 0.13, 0.19, 0.05, { t: 'LIQUID', t2: 'NUTRITION', s: 'COMPLETE  1.0 KCAL/ML', n: '1000 mL  TUBE FEEDING OR ORAL', b: '#fbfbf7', f: '#1d5fa8', a: '#3aa7a0', p: 'drop', top: 'MEDICAL' }, 0.35, 0.05, 0.05);
    add(g, gCyl(0.009, 0.009, 0.02, 12), M.whitePl, 0.03, 0.185, 0);
    add(g, gCyl(0.013, 0.013, 0.014, 12), capMat('#3aa7a0'), 0.03, 0.2, 0);
  },
  dog_food(g) {
    pouch(g, 0.42, 0.62, 0.16, { t: 'DOG FOOD', s: 'CHICKEN & RICE  ADULT', n: 'NET WT 15 LB (6.8 kg)', b: '#2f7a32', f: '#fff', a: '#f2c21b', tf: '#2f7a32', p: 'paw', top: 'COMPLETE NUTRITION', tag: 'NEW', st: '#14401a' }, 0.7, 0.02, 0.04);
  },
  energy_bar(g, r) {
    const L = { t: 'ENERGY BARS', s: 'OATS & HONEY  6 BARS', n: '6 x 1.4 OZ (40g)', b: '#f08a1c', f: '#fff', a: '#5a2a0a', p: 'oats', st: '#7a3a0a' };
    printedBox(g, 0.16, 0.05, 0.09, L, { tw: 256, th: 96 });
    // one loose bar on top
    const bar = new THREE.Group();
    pouch(bar, 0.04, 0.13, 0.016, { t: 'OAT BAR', b: '#f08a1c', f: '#fff', a: '#5a2a0a' }, 0.4, 0.2, 0.08);
    bar.rotation.set(-Math.PI / 2, 0, 0.3 + r() * 0.4);
    bar.position.set(-0.01, 0.058, 0.06);
    g.add(bar);
  },
  instant_noodles(g, r) {
    if (r() < 0.5) {
      const prof = [[0, 0], [0.037, 0], [0.038, 0.004], [0.049, 0.1], [0.051, 0.102]];
      add(g, gLathe('noodlecup', prof, 18), col(0xf4f1ea, 0.7));
      add(g, gCyl(0.05, 0.0385, 0.094, 18, true), tmat(wrapTex({ t: 'INSTANT NOODLES', s: 'CHICKEN FLAVOR', n: 'NET WT 2.25 OZ (64g)', b: '#f4f1ea', f: '#c41e1e', a: '#f2c21b', p: 'noodle' }, 512, 160), 0.6), 0, 0.004, 0);
      add(g, gCircle(0.051, 18), tmat(ctex('foillid', 128, 128, (c, w, h, rr) => { c.fillStyle = '#d8d8d0'; c.fillRect(0, 0, w, h); c.fillStyle = '#c41e1e'; c.beginPath(); c.arc(64, 64, 40, 0, TAU); c.fill(); txt(c, 'PEEL', 64, 64, 18, { color: '#fff' }); grime(c, w, h, rr, 0.5); }), 0.35, 0.4), 0, 0.103, 0);
    } else {
      pouch(g, 0.12, 0.16, 0.035, { t: 'RAMEN', t2: 'NOODLES', s: 'BEEF FLAVOR', n: 'NET WT 3 OZ (85g)', b: '#c41e1e', f: '#fff', a: '#f2c21b', tf: '#c41e1e', p: 'noodle', top: 'QUICK 3 MIN' }, 0.4, 0.15).rotation.x = -Math.PI / 2;
    }
  },
  chips(g, r) {
    const L = pick(r, [
      { t: 'POTATO', t2: 'CHIPS', s: 'SEA SALT', n: 'NET WT 8 OZ (226g)', b: '#f2c21b', f: '#c41e1e', a: '#c41e1e', p: 'chip', top: 'KETTLE COOKED', st: '#fff' },
      { t: 'TORTILLA', t2: 'CHIPS', s: 'RESTAURANT STYLE', n: 'NET WT 11 OZ (311g)', b: '#2b4f9a', f: '#fff', a: '#f2c21b', tf: '#2b4f9a', p: 'chip', top: 'FAMILY SIZE' },
    ]);
    pouch(g, 0.21, 0.3, 0.08, L, 0.3, 0.35, 0.05);
  },
  jerky(g) {
    pouch(g, 0.14, 0.2, 0.035, { t: 'BEEF JERKY', s: 'ORIGINAL  HIGH PROTEIN', n: 'NET WT 3.25 OZ (92g)', b: '#2a2420', f: '#f2c21b', a: '#8a2a12', p: 'meat', top: 'RESEALABLE' }, 0.4, 0.2, 0.06).rotation.x = -Math.PI / 2;
  },
  oatmeal(g) {
    add(g, gCyl(0.064, 0.064, 0.18, 20, true), tmat(wrapTex({ t: 'OLD FASHIONED OATS', s: '100% WHOLE GRAIN', n: 'NET WT 42 OZ (2 LB 10 OZ) 1.19kg', b: '#f4f1ea', f: '#2a4f8a', a: '#2a4f8a', p: 'oats' }, 512, 220), 0.75));
    add(g, gCyl(0.066, 0.066, 0.025, 20), col(0x2a4f8a, 0.4), 0, 0.17, 0);
    add(g, gCircle(0.063, 20), col(0x7a6a50, 0.9), 0, 0.001, 0, Math.PI);
  },
  soda(g, r) {
    const L = pick(r, [
      { t: 'COLA', s: 'CLASSIC', n: '12 FL OZ (355 mL)', b: '#a8141a', f: '#fff', a: '#5a0a0a', p: 'bubble' },
      { t: 'LEMON LIME', s: 'CAFFEINE FREE', n: '12 FL OZ (355 mL)', b: '#2f8a3a', f: '#f6ee4a', a: '#0f4a1a', p: 'bubble' },
      { t: 'ROOT BEER', s: 'OLD FASHIONED', n: '12 FL OZ (355 mL)', b: '#4a2412', f: '#f3c04a', a: '#1a0a05', p: 'bubble' },
    ]);
    const prof = [[0, 0.004], [0.026, 0], [0.033, 0.01], [0.033, 0.104], [0.027, 0.118], [0.0265, 0.122]];
    add(g, gLathe('sodacan', prof, 18), M.alu);
    add(g, gCyl(0.0332, 0.0332, 0.092, 18, true), tmat(wrapTex(L, 512, 150), 0.3, 0.3), 0, 0.011, 0);
    add(g, gCircle(0.026, 16), M.alu, 0, 0.12, 0);
    add(g, gTorus(0.0065, 0.0015, 3, 8), M.alu, 0.008, 0.121, 0, Math.PI / 2, 0, 0, 1, 1.5, 1);
  },
  sports_drink(g, r) {
    const c = pick(r, [[0x2a7fd6, 'GLACIER BLUE', '#2a7fd6'], [0xf08a1c, 'ORANGE', '#f08a1c'], [0xd6283a, 'FRUIT PUNCH', '#d6283a']]);
    const prof = [[0, 0], [0.033, 0], [0.036, 0.01], [0.036, 0.08], [0.031, 0.095], [0.036, 0.11], [0.036, 0.17], [0.022, 0.2], [0.016, 0.205], [0.016, 0.215]];
    add(g, gLathe('sportsbottle', prof, 18), mat('sport' + c[0], { color: c[0], roughness: 0.15, transparent: true, opacity: 0.82 }));
    add(g, gCyl(0.0365, 0.0365, 0.055, 18, true), tmat(wrapTex({ t: 'SPORTS DRINK', s: c[1], n: '28 FL OZ (828 mL)', b: '#111', f: '#fff', a: c[2], p: 'bolt' }, 512, 120), 0.4), 0, 0.112, 0);
    add(g, gCyl(0.018, 0.018, 0.022, 16), capMat(c[2]), 0, 0.212, 0);
  },
  water_bottle(g) {
    // one gallon jug: rounded square body, handle, neck, cap
    const jug = mat('jugwater', { color: 0xdbe9ee, roughness: 0.2, transparent: true, opacity: 0.55 });
    add(g, gRBox(0.15, 0.22, 0.15, 0.025), jug);
    add(g, gRBox(0.13, 0.2, 0.13, 0.02), mat('water', { color: 0x9cc6d8, roughness: 0.1, transparent: true, opacity: 0.45, depthWrite: false }), 0, 0.005, 0);
    add(g, gLathe('jugtop', [[0.075, 0], [0.065, 0.03], [0.02, 0.05], [0.018, 0.06]], 12), jug, 0, 0.215, 0);
    add(g, gCyl(0.021, 0.021, 0.016, 14), capMat('#2a6fd6'), 0, 0.27, 0);
    add(g, gTube('jughandle', [[0.04, 0.2, -0.06], [0.06, 0.25, -0.06], [0.065, 0.27, -0.02], [0.05, 0.25, 0.02], [0.04, 0.2, 0.04]], 0.012, 12, 6), jug, 0, 0, 0);
    const band = tmat(sleeveTex({ t: 'DRINKING WATER', s: '1 GALLON (3.78 L)  PURIFIED', b: '#ffffff', f: '#1d5fa8', a: '#3d8fd6' }), 0.5);
    add(g, gBox(0.152, 0.07, 0.152), [band, band, M.clearPl, M.clearPl, band, band], 0, 0.08, 0);
  },
  saline(g) {
    // IV bag lying flat: front print on +y
    const t = ctex('salinebag', 256, 384, (c, w, h, rr) => {
      c.fillStyle = '#e9f0f2'; c.fillRect(0, 0, w, h);
      c.strokeStyle = '#1d5fa8'; c.lineWidth = 3; c.strokeRect(w * 0.1, h * 0.12, w * 0.8, h * 0.62);
      txt(c, '0.9% SODIUM', w / 2, h * 0.22, 30, { color: '#1d5fa8', maxW: w * 0.75, font: COND });
      txt(c, 'CHLORIDE', w / 2, h * 0.3, 30, { color: '#1d5fa8', maxW: w * 0.75, font: COND });
      txt(c, 'INJECTION USP', w / 2, h * 0.37, 16, { color: '#1d5fa8', maxW: w * 0.75 });
      txt(c, '1000 mL', w / 2, h * 0.47, 40, { color: '#111', maxW: w * 0.7 });
      finePrint(c, w * 0.15, h * 0.55, w * 0.7, 6, 10, rr, 'rgba(20,60,120,0.6)');
      for (let i = 1; i < 10; i++) { c.fillStyle = '#333'; c.fillRect(w * 0.88, h * (0.12 + i * 0.062), i % 2 ? 10 : 18, 2); }
      txt(c, 'STERILE  SINGLE USE', w / 2, h * 0.82, 14, { color: '#1d5fa8', maxW: w * 0.8 });
      grime(c, w, h, rr, 0.4);
    });
    const bagMat = tmat(t, 0.2, 0, { transparent: true, opacity: 0.92 });
    const m = add(g, gPillow(0.15, 0.25, 0.03, 0.05), [bagMat, bagMat, M.clearPl, M.clearPl, bagMat, bagMat]);
    m.rotation.x = -Math.PI / 2; m.position.y = 0.015; m.position.z = 0.125;
    add(g, gCyl(0.005, 0.005, 0.04, 8), M.whitePl, -0.02, 0.012, 0.135, Math.PI / 2);
    add(g, gCyl(0.006, 0.006, 0.03, 8), col(0x2a6fd6, 0.5), 0.025, 0.012, 0.13, Math.PI / 2);
  },
  ors(g) {
    const L = { t: 'ORAL', t2: 'REHYDRATION SALTS', s: 'WHO FORMULA  10 SACHETS', n: 'DISSOLVE 1 SACHET IN 1 L WATER', b: '#f4f8fb', f: '#1d5fa8', a: '#3aa7a0', p: 'drop', top: 'ELECTROLYTES' };
    printedBox(g, 0.1, 0.13, 0.04, L);
    for (let i = 0; i < 2; i++) {
      const s = new THREE.Group();
      pouch(s, 0.07, 0.1, 0.008, { t: 'ORS', s: '1 L SACHET', b: '#fbfbf7', f: '#1d5fa8', a: '#3aa7a0' }, 0.35, 0.25, 0.08);
      s.rotation.set(-Math.PI / 2, 0, 0.4 + i * 0.5);
      s.position.set(0.08 + i * 0.03, 0.005 + i * 0.006, 0.07);
      g.add(s);
    }
  },
  first_aid(g) {
    const red = col(0xc8201e, 0.45);
    const lidTex = ctex('fakit', 256, 192, (c, w, h, rr) => {
      c.fillStyle = '#c8201e'; c.fillRect(0, 0, w, h);
      c.fillStyle = '#fff'; c.beginPath(); c.roundRect(w * 0.34, h * 0.14, w * 0.32, h * 0.56, 10); c.fill();
      pict(c, 'cross', w / 2, h * 0.42, h * 0.2, rr);
      txt(c, 'FIRST AID', w / 2, h * 0.84, h * 0.13, { color: '#fff', maxW: w * 0.8 });
      grime(c, w, h, rr, 0.8);
    });
    const lid = tmat(lidTex, 0.45);
    add(g, gRBox(0.28, 0.055, 0.2, 0.015), [red, red, lid, red, red, red]);
    add(g, gRBox(0.28, 0.035, 0.2, 0.015), red, 0, 0.056, 0);
    add(g, gRBox(0.284, 0.004, 0.204, 0.002), col(0xeeeeee, 0.5), 0, 0.054, 0);
    // relabel top: separate thin plate with the cross
    add(g, gBox(0.24, 0.002, 0.17), [red, red, lid, red, red, red], 0, 0.091, 0);
    add(g, gTube('fahandle', [[-0.06, 0.05, 0.1], [-0.05, 0.05, 0.125], [0.05, 0.05, 0.125], [0.06, 0.05, 0.1]], 0.008, 10, 6), M.whitePl);
    for (const x of [-0.09, 0.09]) add(g, gBox(0.025, 0.03, 0.008), M.whitePl, x, 0.04, 0.102);
  },
  antibiotics(g, r) {
    const amber = mat('amber', { color: 0xb5651d, roughness: 0.2, transparent: true, opacity: 0.85 });
    const prof = [[0, 0], [0.019, 0], [0.021, 0.004], [0.021, 0.07], [0.018, 0.074], [0.018, 0.078]];
    add(g, gLathe('rxbottle', prof, 16), amber);
    const name = pick(r, ['AMOXICILLIN 500 MG', 'DOXYCYCLINE 100 MG', 'CEPHALEXIN 500 MG']);
    add(g, gCyl(0.0212, 0.0212, 0.045, 16, true), tmat(rxLabelTex(name, 'TAKE 1 CAPSULE 3 TIMES DAILY', 1), 0.6), 0, 0.012, 0);
    add(g, gCyl(0.023, 0.023, 0.018, 16), capMat('#f4f4f0'), 0, 0.075, 0);
    add(g, gCircle(0.022, 16), col(0xf4f4f0, 0.5), 0, 0.0935, 0);
  },
  pain_pills(g) {
    const prof = [[0, 0], [0.026, 0], [0.029, 0.006], [0.029, 0.085], [0.02, 0.098], [0.016, 0.1]];
    bottle(g, prof, { t: 'PAIN RELIEVER', s: 'ACETAMINOPHEN 500 MG', n: '100 CAPLETS', b: '#f4f4f0', f: '#c41e1e', a: '#c41e1e', p: 'pill' }, col(0xf4f4f0, 0.4), capMat('#f4f4f0'), 0.01, 0.08, 0.0293, 0.02, { capR: 0.02 });
  },
  ibuprofen(g) {
    printedBox(g, 0.075, 0.115, 0.04, { t: 'IBUPROFEN', s: '200 MG  PAIN RELIEVER', n: '50 COATED TABLETS', b: '#f08a1c', f: '#fff', a: '#7a2a0a', p: 'pill', top: 'NSAID', st: '#a0400a' });
    const prof = [[0, 0], [0.018, 0], [0.02, 0.004], [0.02, 0.06], [0.014, 0.068], [0.012, 0.07]];
    const b = new THREE.Group();
    bottle(b, prof, { t: 'IBUPROFEN', s: '200 MG', n: '50 TABLETS', b: '#fff', f: '#f08a1c', a: '#f08a1c', p: 'pill' }, col(0xf4f4f0, 0.4), capMat('#f08a1c'), 0.008, 0.055, 0.0203, 0.016, { capR: 0.015 });
    b.position.set(0.065, 0, 0.01);
    g.add(b);
  },
  vitamins(g) {
    const prof = [[0, 0], [0.034, 0], [0.037, 0.006], [0.037, 0.105], [0.03, 0.115], [0.028, 0.118]];
    bottle(g, prof, { t: 'MULTIVITAMIN', s: 'DAILY  ADULT 50+', n: '120 TABLETS', b: '#2a2a6a', f: '#f2c21b', a: '#f2c21b', p: 'sun' }, col(0x23234f, 0.35), capMat('#23234f'), 0.012, 0.1, 0.0373, 0.022, { capR: 0.031 });
  },
  bandages(g) {
    printedBox(g, 0.1, 0.13, 0.045, { t: 'ADHESIVE', t2: 'BANDAGES', s: 'FLEXIBLE FABRIC  ASSORTED', n: '60 BANDAGES', b: '#f4f1ea', f: '#c41e1e', a: '#e0b38a', tf: '#5a2a0a', p: 'cross', top: 'STERILE' });
    // gauze roll beside
    add(g, gCyl(0.025, 0.025, 0.05, 16), tmat(ctex('gauze', 64, 64, (c, w, h, rr) => { noiseFill(c, w, h, rr, '#f3f0e8', 0.08, 600, 1); c.strokeStyle = 'rgba(0,0,0,0.08)'; for (let i = 0; i < w; i += 3) { c.beginPath(); c.moveTo(i, 0); c.lineTo(i, h); c.moveTo(0, i); c.lineTo(w, i); c.stroke(); } }), 0.95), 0.085, 0.025, 0.02, Math.PI / 2, 0, 0.3);
  },
  water_tablets(g) {
    const prof = [[0, 0], [0.018, 0], [0.02, 0.004], [0.02, 0.055], [0.013, 0.062], [0.012, 0.065]];
    bottle(g, prof, { t: 'WATER PURIFICATION', s: 'TABLETS  KILLS GERMS', n: '50 TABLETS  TREATS 25 L', b: '#4a5a2a', f: '#fff', a: '#f2c21b', p: 'drop' }, mat('brownglass', { color: 0x5a3a1a, roughness: 0.15, transparent: true, opacity: 0.88 }), capMat('#3a3a3a'), 0.008, 0.05, 0.0203, 0.016, { capR: 0.015 });
  },
  first_aid_kit: null,
  flashlight(g) {
    const prof = [[0, 0], [0.016, 0], [0.017, 0.005], [0.017, 0.13], [0.019, 0.14], [0.026, 0.165], [0.027, 0.2], [0.025, 0.203], [0.0, 0.203]];
    const knurl = tmat(ctex('knurl', 64, 64, (c, w, h) => { c.fillStyle = '#2b2d30'; c.fillRect(0, 0, w, h); c.strokeStyle = 'rgba(255,255,255,0.18)'; for (let i = -64; i < 128; i += 5) { c.beginPath(); c.moveTo(i, 0); c.lineTo(i + 64, h); c.moveTo(i + 64, 0); c.lineTo(i, h); c.stroke(); } }), 0.45, 0.4);
    const f = new THREE.Group();
    add(f, gLathe('flashlight', prof, 16), col(0x2b2d30, 0.4, 0.45));
    add(f, gCyl(0.0172, 0.0172, 0.09, 16, true), knurl, 0, 0.02, 0);
    add(f, gCircle(0.024, 16), mat('lens', { color: 0xeef6ff, roughness: 0.05, emissive: 0x222222 }), 0, 0.2015, 0);
    add(f, gCyl(0.006, 0.006, 0.006, 8), col(0x111111, 0.8), 0, 0.15, 0.019, Math.PI / 2);
    add(f, gTorus(0.026, 0.0025, 4, 16), M.alu, 0, 0.2, 0, Math.PI / 2);
    f.rotation.z = Math.PI / 2;
    f.position.y = 0.027;
    g.add(f);
  },
  batteries(g) {
    flatCard(g, 0.12, 0.17, { t: 'AA BATTERIES', s: 'ALKALINE  1.5V', n: '8 PACK', b: '#111', f: '#f2c21b', a: '#c98a2a', p: 'battery', top: 'LONG LASTING' });
    const bt = tmat(ctex('aacell', 128, 64, (c, w, h) => { c.fillStyle = '#151515'; c.fillRect(0, 0, w, h); c.fillStyle = '#c98a2a'; c.fillRect(0, 0, w * 0.35, h); txt(c, 'AA', w * 0.65, h / 2, 22, { color: '#f2c21b' }); }), 0.4, 0.3);
    for (let i = 0; i < 8; i++) {
      const x = -0.042 + (i % 4) * 0.028, z = i < 4 ? -0.035 : 0.035;
      add(g, gCyl(0.007, 0.007, 0.05, 10), bt, x, 0.01, z - 0.025, Math.PI / 2);
    }
    add(g, gRBox(0.112, 0.016, 0.13, 0.006), M.clearPl, 0, 0.003, -0.002);
  },
  pry_bar(g) {
    const paint = tmat(texPainted('#c4221c', 'pry'), 0.5, 0.2);
    // long hex bar with a gooseneck claw at one end and a flat chisel at the other
    add(g, gTube('prybar', [[-0.33, 0.012, 0], [-0.1, 0.012, 0], [0.18, 0.012, 0], [0.26, 0.016, 0], [0.31, 0.04, 0], [0.31, 0.075, 0], [0.28, 0.09, 0], [0.25, 0.085, 0]], 0.011, 40, 6), paint);
    add(g, gBox(0.05, 0.006, 0.026), M.steel, -0.355, 0.006, 0, 0, 0, 0.12);
    add(g, gBox(0.02, 0.008, 0.026), M.darkMetal, 0.24, 0.083, 0, 0, 0, 0.5);
  },
  backpack(g, r) {
    const color = pick(r, ['#2f3f2a', '#22304a', '#3a3a3c', '#5a2a22']);
    const n = tmat(texNylon(color), 0.8);
    const dk = tmat(texNylon(shade(color, -0.3), 'dk'), 0.8);
    add(g, gRBox(0.3, 0.46, 0.17, 0.05), n);
    add(g, gRBox(0.24, 0.2, 0.07, 0.03), dk, 0, 0.04, 0.1);
    add(g, gBox(0.2, 0.1, 0.04), n, 0, 0.27, 0.095);
    add(g, gRBox(0.31, 0.09, 0.18, 0.03), dk, 0, 0.39, 0.002);
    // zipper lines and pulls
    add(g, gBox(0.22, 0.004, 0.004), M.blackPl, 0, 0.235, 0.135);
    add(g, gBox(0.008, 0.02, 0.003), M.steel, 0.09, 0.225, 0.136);
    // shoulder straps on the back
    for (const x of [-0.08, 0.08]) add(g, gTube('bpstrap', [[0, 0.42, -0.08], [0, 0.4, -0.12], [0, 0.25, -0.12], [0, 0.08, -0.105], [0, 0.04, -0.085]], 0.018, 10, 4), dk, x, 0, 0, 0, 0, 0, 1, 1, 0.45);
    add(g, gTorus(0.03, 0.006, 4, 10, Math.PI), dk, 0, 0.47, -0.02, 0, 0, 0);
    // side bottle pocket mesh
    for (const s of [-1, 1]) add(g, gBox(0.03, 0.14, 0.1), tmat(texNylon('#111111', 'mesh'), 0.9), s * 0.155, 0.02, 0);
    // compression strap buckles
    for (const s of [-1, 1]) add(g, gBox(0.025, 0.03, 0.008), M.blackPl, s * 0.07, 0.15, 0.137);
  },
  winter_coat(g, r) {
    const color = pick(r, ['#22304a', '#2f3a2a', '#5a1d1a', '#2a2a2c', '#6a5a3a']);
    const q = tmat(texQuilt(color), 0.75);
    const fur = tmat(ctex('fur', 128, 128, (c, w, h, rr) => { noiseFill(c, w, h, rr, '#9a8a72', 0.35, 4000, 2); for (let i = 0; i < 600; i++) { c.strokeStyle = rr() < 0.5 ? 'rgba(60,50,40,0.5)' : 'rgba(220,210,190,0.5)'; c.beginPath(); const x = rr() * w, y = rr() * h; c.moveTo(x, y); c.lineTo(x + (rr() - 0.5) * 8, y + 6); c.stroke(); } }), 0.95);
    jacketLaid(g, q, tmat(texKnit(shade(color, -0.2), 'coatcuff'), 0.95), { th: 0.075, sleeveR: 0.065, color, fur });
  },
  winter_hat(g, r) {
    const color = pick(r, ['#8a1d1a', '#22304a', '#3a5a2a', '#7a6a50', '#d8d2c4']);
    const k = tmat(texKnit(color), 0.95);
    add(g, gLathe('beanie', [[0.0, 0.17], [0.04, 0.168], [0.07, 0.155], [0.088, 0.13], [0.095, 0.09], [0.095, 0.04]], 18), k, 0, 0, 0);
    add(g, gCyl(0.1, 0.1, 0.06, 18, true), tmat(texKnit(shade(color, -0.1), 'cuff'), 0.95), 0, 0.01, 0);
        add(g, gTorus(0.097, 0.008, 4, 18), k, 0, 0.012, 0, Math.PI / 2);
    add(g, gCircle(0.097, 18), col(0x1a1a1a, 0.95), 0, 0.012, 0);
    add(g, gSphere(0.035, 8, 6), tmat(ctex('pom' + color, 64, 64, (c, w, h, rr) => { noiseFill(c, w, h, rr, color, 0.4, 900, 2); }), 1), 0, 0.19, 0);
  },
  gloves(g, r) {
    const color = pick(r, ['#1d1d1f', '#3a2a1f', '#2a3a4a']);
    const m = tmat(texNylon(color, 'glove'), 0.85);
    const cuff = tmat(texKnit(shade(color, 0.1), 'gcuff'), 0.95);
    const one = (x, z, ry, flip) => {
      const h = new THREE.Group();
      add(h, gRBox(0.09, 0.025, 0.1, 0.012), m, 0, 0, 0);
      for (let i = 0; i < 4; i++) add(h, gCyl(0.0095, 0.0105, 0.08 - Math.abs(i - 1.5) * 0.012, 6), m, -0.032 + i * 0.021, 0.012, 0.035, Math.PI / 2 - 0.04, 0, (i - 1.5) * 0.05);
      add(h, gCyl(0.011, 0.012, 0.06, 6), m, flip * 0.04, 0.012, 0.0, Math.PI / 2, 0, flip * 0.9);
      add(h, gCyl(0.047, 0.05, 0.065, 10), cuff, 0, 0.014, -0.045, -Math.PI / 2, 0, 0, 1, 1, 0.45);
      h.position.set(x, 0.005, z); h.rotation.y = ry;
      g.add(h);
    };
    one(-0.05, 0, 0.15, 1);
    one(0.06, 0.03, -0.25, -1);
    g.children[g.children.length - 1].position.y = 0.025;
  },
  boots(g, r) {
    const color = pick(r, ['#5a3a22', '#2a2622', '#6a5a40']);
    const leather = tmat(ctex('leather' + color, 128, 128, (c, w, h, rr) => { noiseFill(c, w, h, rr, color, 0.12, 2500, 2); c.strokeStyle = 'rgba(0,0,0,0.25)'; c.setLineDash([4, 3]); c.strokeRect(6, 6, w - 12, h - 12); grime(c, w, h, rr, 0.8); }), 0.75);
    const sole = tmat(ctex('sole', 128, 32, (c, w, h) => { c.fillStyle = '#1b1b1b'; c.fillRect(0, 0, w, h); c.fillStyle = '#333'; for (let x = 0; x < w; x += 8) c.fillRect(x, h * 0.4, 4, h * 0.6); }), 0.95);
    const fur = col(0xb8a88a, 1);
    const one = (x, ry) => {
      const b = new THREE.Group();
      add(b, gBox(0.11, 0.035, 0.29), sole, 0, 0, 0);
      add(b, gRBox(0.1, 0.08, 0.27, 0.035), leather, 0, 0.03, 0.005);
      add(b, gCyl(0.058, 0.062, 0.17, 10), leather, 0, 0.05, -0.065, 0, 0, 0, 0.9, 1, 1.1);
      add(b, gTorus(0.055, 0.015, 4, 10), fur, 0, 0.22, -0.065, Math.PI / 2, 0, 0, 0.95, 1.25, 1);
      // laces
      for (let i = 0; i < 4; i++) add(b, gBox(0.06, 0.004, 0.006), col(0xc8b48a, 0.9), 0, 0.1 + i * 0.025, 0.0 + (i < 2 ? 0.05 - i * 0.03 : 0.002), -0.3 + (i < 2 ? -0.7 : 0), 0, 0);
      b.position.x = x; b.rotation.y = ry;
      g.add(b);
    };
    one(-0.065, 0.05);
    one(0.065, -0.08);
  },
  rain_jacket(g, r) {
    const color = pick(r, ['#e8b81b', '#d8501c', '#1d5fa8', '#2f6a3a']);
    const shell = tmat(texNylon(color, 'rain'), 0.3, 0.05);
    jacketLaid(g, shell, tmat(texNylon(shade(color, -0.3), 'raincuff'), 0.4), { th: 0.035, sleeveR: 0.05, color, rain: true });
  },
  firewood(g, r) {
    const bark = tmat(texBark(), 0.95);
    const end = tmat(texEndGrain(true), 0.9);
    const split = tmat(texWood('#c9a26c', '#8a6a3a', 'split'), 0.9);
    const L = 0.4;
    const rows = [3, 3, 2];
    let k = 0;
    rows.forEach((n, row) => {
      for (let c = 0; c < n; c++, k++) {
        const rad = 0.048 + r() * 0.012;
        const x = (c - (n - 1) / 2) * 0.095 + (r() - 0.5) * 0.012;
        add(g, gCyl(rad, rad, L + (r() - 0.5) * 0.04, r() < 0.5 ? 3 : 4), [r() < 0.45 ? split : bark, end, end], x, 0.045 + row * 0.078, -L / 2 + (r() - 0.5) * 0.03, Math.PI / 2, r() * TAU, 0);
      }
    });
    for (const z of [-0.12, 0.12]) add(g, gTorus(0.16, 0.004, 4, 20), col(0xc8b080, 0.9), 0, 0.12, z, 0, 0, 0, 1, 0.85, 1);
    add(g, gBox(0.1, 0.001, 0.07), tmat(sleeveTex({ t: 'FIREWOOD', s: 'KILN DRIED  0.75 CU FT', b: '#f4f1ea', f: '#5a2a0a', a: '#2f7a32' }), 0.8), 0, 0.255, 0);
  },
  propane_1lb(g) {
    const green = col(0x2f7a32, 0.4, 0.2);
    add(g, gLathe('propane', [[0, 0], [0.05, 0], [0.056, 0.01], [0.056, 0.16], [0.05, 0.185], [0.03, 0.2], [0.016, 0.205]], 18), green);
    add(g, gCyl(0.0565, 0.0565, 0.11, 18, true), tmat(wrapTex({ t: 'PROPANE', s: 'CAMPING FUEL  CYLINDER', n: 'NET WT 16.4 OZ (465g)  FLAMMABLE', b: '#2f7a32', f: '#fff', a: '#1d4a20', p: 'flame' }, 512, 160), 0.45, 0.15), 0, 0.03, 0);
    add(g, gCyl(0.014, 0.016, 0.02, 12), M.brass, 0, 0.205, 0);
    add(g, gCyl(0.008, 0.008, 0.012, 8), M.brass, 0, 0.225, 0);
    add(g, gCyl(0.052, 0.052, 0.012, 18, true), col(0x1d4a20, 0.6), 0, 0, 0);
  },
  tarp(g, r) {
    const color = pick(r, ['#2a5ab8', '#6a7a3a', '#a85a1a']);
    const t = tmat(ctex('tarp' + color, 128, 128, (c, w, h, rr) => { noiseFill(c, w, h, rr, color, 0.08, 1200, 1); c.strokeStyle = 'rgba(255,255,255,0.12)'; for (let i = 0; i < w; i += 4) { c.beginPath(); c.moveTo(i, 0); c.lineTo(i, h); c.moveTo(0, i); c.lineTo(w, i); c.stroke(); } grime(c, w, h, rr, 0.6); }, { repeat: [3, 3] }), 0.55);
    add(g, gRBox(0.36, 0.035, 0.28, 0.012), t);
    add(g, gRBox(0.34, 0.03, 0.27, 0.012), t, 0.005, 0.03, -0.003, 0, 0.03, 0);
    add(g, gRBox(0.3, 0.028, 0.25, 0.012), t, -0.01, 0.056, 0.004, 0, -0.04, 0);
    for (let i = 0; i < 4; i++) add(g, gTorus(0.008, 0.003, 4, 10), M.alu, -0.14 + i * 0.09, 0.085, 0.115, Math.PI / 2);
    const lab = tmat(frontTex({ t: 'TARP', s: 'ALL PURPOSE 8 x 10 FT', n: 'WATERPROOF', b: '#f4f1ea', f: '#1d4f9a', a: '#1d4f9a' }, 256, 192), 0.7);
    add(g, gBox(0.12, 0.002, 0.09), [M.paper, M.paper, lab, M.paper, M.paper, M.paper], 0.03, 0.084, -0.03);
  },
  bleach(g) {
    const white = col(0xf2f2ee, 0.35);
    add(g, gRBox(0.15, 0.24, 0.1, 0.025), white);
    add(g, gLathe('bleachneck', [[0.03, 0], [0.024, 0.012], [0.021, 0.025]], 14), white, 0.035, 0.238, 0);
    add(g, gCyl(0.024, 0.024, 0.024, 14), capMat('#1d5fa8'), 0.035, 0.262, 0);
    add(g, gTube('bleachhandle', [[-0.065, 0.22, 0], [-0.065, 0.27, 0], [-0.03, 0.29, 0], [0.0, 0.25, 0], [0.0, 0.22, 0]], 0.012, 12, 6), white);
    const L = { t: 'BLEACH', s: 'REGULAR  UNSCENTED', n: '121 FL OZ (3.57 L)', b: '#f4f6fa', f: '#1d5fa8', a: '#1d5fa8', p: 'drop', top: 'DISINFECTS' };
    add(g, gBox(0.12, 0.15, 0.001), tmat(frontTex(L, 256, 320), 0.4), 0, 0.03, 0.0505);
    add(g, gBox(0.12, 0.15, 0.001), tmat(ctex('bleachback', 256, 320, (c, w, h, rr) => { c.fillStyle = '#f4f6fa'; c.fillRect(0, 0, w, h); txt(c, 'DANGER', w / 2, 30, 30, { color: '#c41e1e' }); finePrint(c, 20, 60, w - 40, 18, 12, rr, '#333'); barcode(c, 60, h - 60, 130, 40, rr); }), 0.4), 0, 0.03, -0.0505, 0, Math.PI, 0);
  },
  water_filter(g) {
    const blue = col(0x2a6fd6, 0.4);
    const f = new THREE.Group();
    add(f, gCyl(0.02, 0.02, 0.1, 14), blue);
    add(f, gCyl(0.021, 0.021, 0.03, 14), M.whitePl, 0, 0.1, 0);
    add(f, gCyl(0.008, 0.012, 0.025, 10), M.whitePl, 0, 0.13, 0);
    add(f, gCyl(0.022, 0.022, 0.02, 14), M.whitePl, 0, -0.005, 0);
    add(f, gCyl(0.0205, 0.0205, 0.05, 14, true), tmat(sleeveTex({ t: 'SQUEEZE FILTER', s: '0.1 MICRON', b: '#2a6fd6', f: '#fff', a: '#fff' }), 0.4), 0, 0.03, 0);
    f.rotation.z = Math.PI / 2; f.position.set(0.0, 0.022, 0.08);
    g.add(f);
    const p = new THREE.Group();
    pouch(p, 0.12, 0.22, 0.012, { t: 'SQUEEZE POUCH', s: '1 L  REUSABLE', b: '#cfe3ef', f: '#1d5fa8', a: '#2a6fd6', p: 'drop' }, 0.25, 0, 0.04);
    p.rotation.x = -Math.PI / 2; p.position.set(0, 0.006, -0.03); p.rotation.z = 0.2;
    g.add(p);
  },
  flea_spray(g) {
    const prof = [[0, 0], [0.03, 0], [0.033, 0.008], [0.033, 0.16], [0.028, 0.18], [0.014, 0.19], [0.012, 0.195]];
    add(g, gLathe('aerosol', prof, 18), M.tin);
    add(g, gCyl(0.0333, 0.0333, 0.145, 18, true), tmat(wrapTex({ t: 'FLEA & TICK', s: 'HOME SPRAY  KILLS ON CONTACT', n: 'NET WT 16 OZ (454g)', b: '#f4f1ea', f: '#2a5a1a', a: '#2a5a1a', p: 'bug' }, 512, 340), 0.45, 0.1), 0, 0.012, 0);
    add(g, gCyl(0.031, 0.033, 0.045, 16), col(0x2a5a1a, 0.4), 0, 0.17, 0);
    add(g, gBox(0.012, 0.01, 0.01), M.whitePl, 0, 0.215, 0.02);
  },
  seeds(g, r) {
    const kinds = [
      { t: 'TOMATO', s: 'EARLY GIRL  HEIRLOOM', n: 'PLANT AFTER LAST FROST', b: '#f4ecd2', f: '#8a1d12', a: '#3f7a2a', p: 'tomato' },
      { t: 'CARROT', s: 'DANVERS HALF LONG', n: 'SOW EARLY SPRING', b: '#f4ecd2', f: '#c85a12', a: '#3f7a2a', p: 'carrot' },
      { t: 'BUSH BEANS', s: 'PROVIDER  GREEN', n: 'DIRECT SOW', b: '#f4ecd2', f: '#2f6a2a', a: '#3f7a2a', p: 'bean' },
      { t: 'KALE', s: 'WINTER HARDY', n: 'COOL SEASON', b: '#f4ecd2', f: '#2f6a2a', a: '#3f7a2a', p: 'leaf' },
    ];
    const s0 = Math.floor(r() * 4);
    for (let i = 0; i < 3; i++) {
      const p = new THREE.Group();
      flatCard(p, 0.085, 0.125, kinds[(s0 + i) % 4], 0.003);
      p.position.set((i - 1) * 0.04, i * 0.0032, (i - 1) * 0.015); p.rotation.y = (i - 1) * 0.35;
      g.add(p);
    }
  },
  lighter(g, r) {
    const c = pick(r, [0xd6283a, 0x2a6fd6, 0x2f8a3a, 0xf2c21b, 0x7a2a9a]);
    const l = new THREE.Group();
    add(l, gRBox(0.025, 0.06, 0.013, 0.005), mat('lighter' + c, { color: c, roughness: 0.2, transparent: true, opacity: 0.9 }));
    add(l, gRBox(0.02, 0.05, 0.008, 0.003), mat('fuel', { color: 0xe8e0b0, roughness: 0.2, transparent: true, opacity: 0.5 }), 0, 0.004, 0);
    add(l, gBox(0.025, 0.018, 0.013), M.chrome, 0, 0.06, 0);
    add(l, gCyl(0.005, 0.005, 0.009, 10), M.darkMetal, -0.004, 0.08, 0, Math.PI / 2);
    add(l, gBox(0.009, 0.006, 0.01), M.blackPl, 0.007, 0.077, 0);
    l.rotation.x = -Math.PI / 2; l.position.set(0, 0.0065, 0.04);
    g.add(l);
  },
  comfort(g, r) {
    if (r() < 0.6) {
      const title = pick(r, ['THE LONG WINTER', 'RIVER STORIES', 'FIELD GUIDE TO BIRDS', 'COLLECTED POEMS', 'THE NORTHERN ROAD']);
      const cc = pick(r, ['#22304a', '#5a1d1a', '#2f4a2a', '#4a3a2a']);
      const cover = tmat(ctex('book' + title + cc, 256, 384, (c, w, h, rr) => {
        noiseFill(c, w, h, rr, cc, 0.08, 1500, 2);
        c.strokeStyle = '#c9a24a'; c.lineWidth = 4; c.strokeRect(16, 16, w - 32, h - 32);
        const words = title.split(' ');
        words.forEach((wd, i) => txt(c, wd, w / 2, h * 0.3 + i * 40, 34, { color: '#e8d8a0', maxW: w * 0.8, font: 'Georgia, "DejaVu Serif", serif' }));
        txt(c, 'A NOVEL', w / 2, h * 0.82, 16, { color: '#e8d8a0' });
        grime(c, w, h, rr, 1);
      }), 0.7);
      const pages = tmat(ctex('pages', 64, 64, (c, w, h) => { c.fillStyle = '#efe6cf'; c.fillRect(0, 0, w, h); c.fillStyle = 'rgba(0,0,0,0.12)'; for (let y = 0; y < h; y += 2) c.fillRect(0, y, w, 1); }), 0.9);
      const spine = col(new THREE.Color(cc).getHex(), 0.7);
      add(g, gBox(0.15, 0.035, 0.22), [pages, spine, cover, cover, pages, pages]);
    } else {
      const box = tmat(ctex('cards', 128, 192, (c, w, h, rr) => {
        c.fillStyle = '#b8201e'; c.fillRect(0, 0, w, h);
        c.strokeStyle = '#fff'; c.lineWidth = 3; c.strokeRect(8, 8, w - 16, h - 16);
        for (let i = 0; i < 60; i++) { c.strokeStyle = 'rgba(255,255,255,0.35)'; c.beginPath(); c.arc(w / 2, h / 2, 6 + i * 2, 0, 3); c.stroke(); }
        txt(c, 'PLAYING CARDS', w / 2, h * 0.88, 13, { color: '#fff', maxW: w * 0.8 });
        grime(c, w, h, rr, 0.6);
      }), 0.5);
      add(g, gBox(0.064, 0.02, 0.09), [col(0xb8201e, 0.5), col(0xb8201e, 0.5), box, col(0xb8201e, 0.5), col(0xb8201e, 0.5), col(0xb8201e, 0.5)]);
      const face = tmat(ctex('cardface', 64, 96, (c, w, h) => { c.fillStyle = '#fafafa'; c.fillRect(0, 0, w, h); txt(c, 'A', 10, 14, 14, { color: '#c41e1e' }); c.fillStyle = '#c41e1e'; c.beginPath(); c.moveTo(32, 36); c.bezierCurveTo(10, 20, 10, 50, 32, 64); c.bezierCurveTo(54, 50, 54, 20, 32, 36); c.fill(); }), 0.6);
      for (let i = 0; i < 3; i++) add(g, gBox(0.063, 0.0008, 0.088), [M.paper, M.paper, face, M.paper, M.paper, M.paper], 0.07 + i * 0.012, i * 0.001, 0.01 + i * 0.01, 0, 0.3 + i * 0.4, 0);
    }
  },
  toolkit(g, r) {
    const color = pick(r, [0xc4221c, 0x1d4f9a, 0x2a2a2c]);
    const p = tmat(texPainted('#' + new THREE.Color(color).getHexString(), 'tk'), 0.45, 0.3);
    add(g, gRBox(0.46, 0.15, 0.21, 0.01), p);
    add(g, gRBox(0.47, 0.06, 0.22, 0.012), p, 0, 0.14, 0);
    add(g, gBox(0.472, 0.004, 0.222), M.darkMetal, 0, 0.14, 0);
    add(g, gTube('tkhandle', [[-0.11, 0.2, 0], [-0.1, 0.235, 0], [0.1, 0.235, 0], [0.11, 0.2, 0]], 0.011, 12, 6), M.blackPl);
    for (const x of [-0.17, 0.17]) { add(g, gBox(0.04, 0.05, 0.012), M.chrome, x, 0.11, 0.11); add(g, gBox(0.03, 0.02, 0.008), M.chrome, x, 0.15, 0.115); }
    add(g, gBox(0.012, 0.015, 0.03), M.steel, 0.215, 0.18, 0);
  },
  scrap_wood(g, r) {
    const w = tmat(texWood('#c9a26c', '#8a6a3a', 'lumber'), 0.85);
    const ply = tmat(ctex('ply', 256, 256, (c, ww, hh, rr) => { noiseFill(c, ww, hh, rr, '#d2b07a', 0.1, 2000, 2); for (let i = 0; i < 20; i++) { c.strokeStyle = 'rgba(140,90,40,0.25)'; c.lineWidth = 2 + rr() * 6; c.beginPath(); c.ellipse(rr() * ww, rr() * hh, 30 + rr() * 60, 6 + rr() * 10, 0, 0, TAU); c.stroke(); } grime(c, ww, hh, rr, 0.8); }), 0.85);
    const plyEdge = tmat(ctex('plyedge', 64, 16, (c, ww, hh) => { for (let i = 0; i < 5; i++) { c.fillStyle = i % 2 ? '#a67c48' : '#d2b07a'; c.fillRect(0, i * hh / 5, ww, hh / 5); } }), 0.9);
    const end = tmat(texEndGrain(), 0.9);
    add(g, gBox(0.6, 0.018, 0.45), [plyEdge, plyEdge, ply, ply, plyEdge, plyEdge], 0, 0, 0, 0, 0.1, 0);
    for (let i = 0; i < 3; i++) add(g, gBox(1.0, 0.038, 0.089), [end, end, w, w, w, w], (r() - 0.5) * 0.1, 0.018 + i * 0.038, -0.1 + i * 0.09, 0, (r() - 0.5) * 0.2, 0);
  },
  hardware_parts(g, r) {
    printedBox(g, 0.14, 0.09, 0.1, { t: 'WOOD SCREWS', s: '#8 x 2-1/2 IN  COARSE', n: '1 LB  APPROX 120 PCS', b: '#f2c21b', f: '#111', a: '#111', p: 'screw', top: 'ZINC PLATED' });
    const galv = col(0xa8adb2, 0.4, 0.5);
    for (let i = 0; i < 3; i++) {
      const b = new THREE.Group();
      add(b, gBox(0.05, 0.003, 0.03), galv, 0, 0, 0);
      add(b, gBox(0.003, 0.05, 0.03), galv, -0.0235, 0, 0);
      b.position.set(0.11 + i * 0.02, 0, -0.03 + i * 0.035); b.rotation.y = r() * TAU;
      g.add(b);
    }
    for (let i = 0; i < 6; i++) add(g, gCyl(0.002, 0.0005, 0.05, 6), galv, -0.05 + r() * 0.1, 0.003, 0.08 + r() * 0.04, Math.PI / 2, 0, r() * TAU);
  },
  wiring(g, r) {
    const color = pick(r, ['#e0521c', '#f2c21b', '#f4f1ea']);
    const coil = tmat(ctex('wire' + color, 256, 32, (c, w, h) => { c.fillStyle = color; c.fillRect(0, 0, w, h); c.strokeStyle = 'rgba(0,0,0,0.3)'; c.lineWidth = 1.5; for (let x = -32; x < w; x += 4) { c.beginPath(); c.moveTo(x, 0); c.lineTo(x + 16, h); c.stroke(); } }), 0.45);
    add(g, gTorus(0.1, 0.035, 6, 20), coil, 0, 0.035, 0, Math.PI / 2, 0, 0, 1, 1, 0.9);
    add(g, gCyl(0.137, 0.137, 0.05, 16, true), tmat(sleeveTex({ t: '12/2 NM-B', s: 'COPPER BUILDING WIRE  50 FT', b: '#f4f1ea', f: '#111', a: color }), 0.6), 0, 0.012, 0, 0, 0, 0, 1, 1, 1);
    add(g, gTube('wiretail', [[0.12, 0.05, 0], [0.18, 0.04, 0.05], [0.22, 0.01, 0.02]], 0.005, 10, 4), col(new THREE.Color(color).getHex(), 0.4));
    // bag of wire nuts
    const b = new THREE.Group();
    pouch(b, 0.07, 0.1, 0.02, { t: 'WIRE NUTS', s: '25 PCS', b: '#e8eef2', f: '#c41e1e', a: '#f2c21b' }, 0.2, 0, 0.06);
    b.rotation.x = -Math.PI / 2; b.position.set(-0.17, 0.01, 0.09);
    g.add(b);
  },
  pipe_fittings(g, r) {
    const pvc = col(0xeeeeea, 0.4);
    const inner = col(0x777777, 0.8);
    for (let i = 0; i < 3; i++) {
      const p = new THREE.Group();
      add(p, gCyl(0.017, 0.017, 0.5, 10, true), pvc);
      add(p, gCyl(0.015, 0.015, 0.5, 8, true), tmat(null, 0.8, 0, { color: 0x666666, side: THREE.BackSide }));
      p.rotation.z = Math.PI / 2; p.position.set(0.25, 0.017, -0.05 + i * 0.036); p.rotation.y = (r() - 0.5) * 0.05;
      g.add(p);
    }
    add(g, gTorus(0.03, 0.02, 8, 8, Math.PI / 2), pvc, -0.1, 0.02, 0.07, Math.PI / 2, 0, 0);
    add(g, gCyl(0.022, 0.022, 0.05, 12), pvc, -0.05, 0, 0.1);
    add(g, gTorus(0.09, 0.012, 5, 16), col(0x2f7a32, 0.5), -0.05, 0.012, -0.05, Math.PI / 2);
    add(g, gTorus(0.075, 0.012, 5, 16), col(0x2f7a32, 0.5), -0.05, 0.034, -0.05, Math.PI / 2);
    add(g, gCyl(0.016, 0.016, 0.03, 8), M.brass, 0.03, 0.016, -0.05, 0, 0, Math.PI / 2);
  },
  plastic_sheet(g) {
    const roll = mat('plasroll', { color: 0xe8eef0, roughness: 0.25, transparent: true, opacity: 0.85 });
    const ends = tmat(ctex('rollend', 128, 128, (c, w, h) => { c.fillStyle = '#dfe6e8'; c.fillRect(0, 0, w, h); c.strokeStyle = 'rgba(0,0,0,0.12)'; for (let i = 18; i < 64; i += 2) { c.beginPath(); c.arc(64, 64, i, 0, TAU); c.stroke(); } c.fillStyle = '#a67c48'; c.beginPath(); c.arc(64, 64, 17, 0, TAU); c.fill(); c.fillStyle = '#222'; c.beginPath(); c.arc(64, 64, 13, 0, TAU); c.fill(); }), 0.5);
    const rr = new THREE.Group();
    add(rr, gCyl(0.07, 0.07, 0.6, 18), [roll, ends, ends]);
    add(rr, gCyl(0.0705, 0.0705, 0.2, 18, true), tmat(sleeveTex({ t: 'PLASTIC SHEETING', s: '6 MIL  10 x 25 FT  CLEAR', b: '#f4f1ea', f: '#111', a: '#c41e1e' }), 0.5), 0, 0.2, 0);
    rr.rotation.z = Math.PI / 2; rr.position.set(0.3, 0.07, 0);
    g.add(rr);
  },
  insulation(g) {
    const foam = tmat(ctex('foam', 256, 256, (c, w, h, rr) => { noiseFill(c, w, h, rr, '#e9a0b0', 0.08, 3000, 2); txt(c, 'RIGID FOAM  R-5', w / 2, h * 0.3, 26, { color: 'rgba(30,60,140,0.8)', maxW: w * 0.9 }); txt(c, '1 IN x 2 FT x 4 FT', w / 2, h * 0.45, 18, { color: 'rgba(30,60,140,0.8)' }); finePrint(c, 30, h * 0.6, w - 60, 4, 10, rr, 'rgba(30,60,140,0.5)'); grime(c, w, h, rr, 0.6); }), 0.9);
    const edge = col(0xe9a0b0, 0.95);
    for (let i = 0; i < 4; i++) add(g, gBox(0.6, 0.025, 0.3), [edge, edge, foam, foam, edge, edge], (i % 2) * 0.01, i * 0.025, (i % 2) * -0.008);
    add(g, gBox(0.08, 0.104, 0.304), mat('shrink', { color: 0xffffff, roughness: 0.1, transparent: true, opacity: 0.25 }), 0.18, -0.002, 0);
  },
  metal_bin(g) {
    const galv = tmat(ctex('galv', 256, 256, (c, w, h, rr) => { noiseFill(c, w, h, rr, '#a9aeb2', 0.12, 2500, 3); for (let i = 0; i < 30; i++) { c.fillStyle = `rgba(255,255,255,${0.05 + rr() * 0.1})`; c.beginPath(); c.ellipse(rr() * w, rr() * h, 8 + rr() * 20, 6 + rr() * 14, rr() * 3, 0, TAU); c.fill(); } grime(c, w, h, rr, 1.2); }), 0.5, 0.45);
    const prof = [[0, 0.005], [0.2, 0.005], [0.205, 0.08], [0.215, 0.09], [0.207, 0.1], [0.212, 0.26], [0.222, 0.27], [0.214, 0.28], [0.22, 0.46], [0.23, 0.47], [0.222, 0.48], [0.234, 0.6]];
    add(g, gLathe('trashcan', prof, 16), tmat(galv.map, 0.5, 0.45, { side: THREE.DoubleSide }));
    add(g, gLathe('trashlid', [[0.245, 0], [0.24, 0.015], [0.2, 0.04], [0.1, 0.06], [0, 0.065]], 16), galv, 0, 0.595, 0);
    add(g, gTube('binlidh', [[-0.05, 0.66, 0], [-0.04, 0.69, 0], [0.04, 0.69, 0], [0.05, 0.66, 0]], 0.008, 6, 5), M.steel);
    for (const s of [-1, 1]) add(g, gTube('binsideh', [[0, 0.5, -0.05], [0.035, 0.49, -0.04], [0.035, 0.49, 0.04], [0, 0.5, 0.05]], 0.007, 6, 4), M.steel, s * 0.22, 0, 0, 0, s < 0 ? Math.PI : 0, 0);
  },
  rain_barrel(g) {
    const blue = col(0x1d4f9a, 0.45);
    const prof = [[0, 0], [0.27, 0], [0.29, 0.02], [0.3, 0.12], [0.31, 0.14], [0.3, 0.16], [0.305, 0.45], [0.3, 0.74], [0.31, 0.76], [0.3, 0.78], [0.29, 0.88], [0.27, 0.9], [0, 0.9]];
    add(g, gLathe('barrel', prof, 24), blue);
    for (const x of [-0.18, 0.18]) add(g, gCyl(0.03, 0.03, 0.015, 10), col(0x123a72, 0.5), x, 0.895, 0);
    add(g, gCyl(0.015, 0.015, 0.06, 10), M.brass, 0, 0.12, 0.31, Math.PI / 2);
    add(g, gBox(0.02, 0.04, 0.01), M.brass, 0, 0.12, 0.345);
    add(g, gBox(0.24, 0.12, 0.002), tmat(frontTex({ t: 'RAIN BARREL', s: '55 GAL  NOT FOR DRINKING', b: '#f4f1ea', f: '#1d4f9a', a: '#1d4f9a' }, 256, 128), 0.6), 0, 0.5, 0.303);
  },
  stove_kit(g) {
    const blk = tmat(ctex('stoveblk', 128, 128, (c, w, h, rr) => { noiseFill(c, w, h, rr, '#26272a', 0.12, 2000, 2); grime(c, w, h, rr, 1); }), 0.7, 0.35);
    add(g, gRBox(0.45, 0.4, 0.5, 0.02), blk, 0, 0.12, 0);
    for (const x of [-0.19, 0.19]) for (const z of [-0.21, 0.21]) add(g, gCyl(0.018, 0.012, 0.12, 8), blk, x, 0, z);
    // door with glass and handle
    add(g, gBox(0.3, 0.24, 0.02), blk, 0, 0.19, 0.25);
    add(g, gBox(0.2, 0.14, 0.004), mat('stoveglass', { color: 0x221a14, roughness: 0.1, metalness: 0.3 }), 0, 0.24, 0.26);
    add(g, gCyl(0.008, 0.008, 0.08, 8), M.chrome, 0.12, 0.28, 0.275);
    add(g, gCyl(0.07, 0.07, 0.08, 16, true), blk, 0, 0.52, -0.08);
    // pipe sections lying beside
    for (let i = 0; i < 2; i++) add(g, gCyl(0.075, 0.075, 0.6, 16, true), tmat(texBrushed('#4a4c50', 'pipe'), 0.6, 0.4), 0.38 + i * 0.16, 0.075, 0, Math.PI / 2, 0, 0);
    add(g, gBox(0.2, 0.1, 0.002), tmat(frontTex({ t: 'WOOD STOVE', s: 'EPA CERTIFIED  60,000 BTU', b: '#f4f1ea', f: '#111', a: '#c4221c' }, 256, 128), 0.6), 0, 0.42, 0.251);
  },
  battery_module(g) {
    const w = col(0xe8e8e4, 0.4);
    add(g, gRBox(0.5, 0.7, 0.16, 0.03), w);
    add(g, gBox(0.44, 0.06, 0.004), col(0x2a2a2c, 0.3), 0, 0.58, 0.08);
    for (let i = 0; i < 5; i++) add(g, gBox(0.04, 0.008, 0.002), mat('ledg' + i, { color: i < 3 ? 0x2fd65a : 0x1a3a22, emissive: i < 3 ? 0x0a4a1a : 0, roughness: 0.3 }), -0.12 + i * 0.06, 0.6, 0.083);
    const vent = tmat(ctex('vent', 128, 64, (c, ww, hh) => { c.fillStyle = '#d8d8d4'; c.fillRect(0, 0, ww, hh); c.fillStyle = '#333'; for (let y = 6; y < hh - 4; y += 7) c.fillRect(8, y, ww - 16, 3); }), 0.5);
    add(g, gBox(0.36, 0.14, 0.003), vent, 0, 0.08, 0.08);
    add(g, gBox(0.2, 0.12, 0.002), tmat(frontTex({ t: 'HOME BATTERY', s: 'LiFePO4  5 kWh  48 V DC', n: 'CAUTION  HIGH VOLTAGE', b: '#f4f1ea', f: '#111', a: '#2a6fd6' }, 256, 160), 0.5), 0, 0.35, 0.081);
    for (const x of [-0.06, 0.06]) add(g, gCyl(0.012, 0.012, 0.03, 10), x < 0 ? col(0x1a1a1a, 0.5) : col(0xc41e1e, 0.5), x, 0.7, 0);
  },
  candles(g, r) {
    printedBox(g, 0.12, 0.16, 0.06, { t: 'EMERGENCY', t2: 'CANDLES', s: 'UNSCENTED  9 HR BURN', n: '6 CANDLES', b: '#f4f1ea', f: '#c41e1e', a: '#2a2a2c', p: 'flame', top: 'POWER OUTAGE' });
    const wax = mat('wax', { color: 0xf3eedc, roughness: 0.55, emissive: 0x141210 });
    for (let i = 0; i < 2; i++) {
      const h = 0.1 + r() * 0.04;
      add(g, gCyl(0.025, 0.025, h, 14), wax, 0.11 + i * 0.06, 0, 0.02 - i * 0.03);
      add(g, gCyl(0.0015, 0.0015, 0.01, 4), col(0x111111, 0.9), 0.11 + i * 0.06, h, 0.02 - i * 0.03);
    }
  },
  matches(g, r) {
    const L = { t: 'STRIKE', t2: 'ANYWHERE', s: 'KITCHEN MATCHES', n: '250 MATCHES', b: '#f2c21b', f: '#c41e1e', a: '#c41e1e', top: 'SAFETY', p: 'flame' };
    const f = tmat(frontTex(L, 256, 160), 0.7);
    const strike = tmat(ctex('strike', 64, 64, (c, w, h, rr) => noiseFill(c, w, h, rr, '#5a3a2a', 0.4, 600, 2)), 0.95);
    const box = new THREE.Group();
    add(box, gBox(0.115, 0.03, 0.065), [strike, strike, f, f, col(0xf2c21b, 0.7), col(0xf2c21b, 0.7)]);
    const heads = tmat(ctex('matchheads', 128, 64, (c, w, h) => { c.fillStyle = '#d8b88a'; c.fillRect(0, 0, w, h); for (let x = 0; x < w; x += 6) for (let y = 0; y < h; y += 6) { c.fillStyle = '#b81d18'; c.beginPath(); c.arc(x + 3 + (y % 12 ? 0 : 2), y + 3, 2.6, 0, TAU); c.fill(); } }), 0.8);
    add(box, gBox(0.105, 0.024, 0.058), [col(0xe8e0cc, 0.8), col(0xe8e0cc, 0.8), heads, col(0xe8e0cc, 0.8), col(0xe8e0cc, 0.8), col(0xe8e0cc, 0.8)], 0.045, 0.004, 0);
    g.add(box);
    for (let i = 0; i < 3; i++) {
      const m = new THREE.Group();
      add(m, gBox(0.003, 0.003, 0.06), col(0xd8b88a, 0.8));
      add(m, gSphere(0.003, 6, 4), col(0xb81d18, 0.6), 0, 0.0015, 0.03, 0, 0, 0, 1, 1, 1.4);
      m.position.set(-0.03 + i * 0.02, 0, 0.06 + r() * 0.02); m.rotation.y = r() * 2 - 1;
      g.add(m);
    }
  },
  duct_tape(g) {
    const silver = tmat(texBrushed('#9ea3a8', 'tape'), 0.5, 0.25);
    add(g, gLathe('ducttape', [[0.038, 0], [0.056, 0], [0.057, 0.002], [0.057, 0.046], [0.056, 0.048], [0.038, 0.048]], 20), silver);
        add(g, gCyl(0.0375, 0.0375, 0.048, 16, true), tmat(sleeveTex({ t: 'DUCT TAPE', s: '1.88 IN x 60 YD', b: '#b99868', f: '#2a2a2c', a: '#b99868' }), 0.9, 0, { side: THREE.DoubleSide }), 0, 0, 0);
    add(g, gBox(0.002, 0.046, 0.05), silver, 0.058, 0.001, 0.025, 0, 0.3, 0);
  },
  rope(g, r) {
    const color = pick(r, ['#c8b080', '#2a6fd6', '#d6283a', '#3a5a2a']);
    const t = tmat(ctex('rope' + color, 128, 32, (c, w, h) => { c.fillStyle = color; c.fillRect(0, 0, w, h); c.strokeStyle = 'rgba(0,0,0,0.35)'; c.lineWidth = 2; for (let x = -32; x < w; x += 6) { c.beginPath(); c.moveTo(x, 0); c.lineTo(x + 18, h); c.stroke(); } c.strokeStyle = 'rgba(255,255,255,0.2)'; for (let x = -30; x < w; x += 6) { c.beginPath(); c.moveTo(x, 0); c.lineTo(x + 18, h); c.stroke(); } }, { repeat: [12, 1] }), 0.95);
    for (let i = 0; i < 3; i++) add(g, gTorus(0.11 + (i % 2) * 0.006, 0.013, 4, 20), t, (i % 2) * 0.005, 0.012 + i * 0.016, (i % 3) * 0.004, Math.PI / 2, 0, i * 0.7);
    // wrap that binds the hank
    for (let i = 0; i < 2; i++) add(g, gTorus(0.03, 0.009, 4, 8), t, 0.115, 0.028, -0.008 + i * 0.016, 0, Math.PI / 2, 0, 1, 1.4, 1);
    add(g, gTube('ropetail', [[-0.1, 0.012, 0.03], [-0.16, 0.01, 0.1], [-0.12, 0.012, 0.18], [-0.05, 0.012, 0.2]], 0.012, 10, 5), t);
    add(g, gCyl(0.124, 0.124, 0.03, 16, true), tmat(sleeveTex({ t: 'UTILITY ROPE', s: '3/8 IN x 50 FT', b: '#f4f1ea', f: '#111', a: '#c41e1e' }), 0.8), 0, 0.02, 0, 0, 0, 0, 1, 1, 1);
  },
  knife(g) {
    const blade = tmat(texBrushed('#c8ccd0', 'blade'), 0.22, 0.55);
    const shape = () => {
      const sh = new THREE.Shape();
      sh.moveTo(0, 0); sh.lineTo(0.125, 0); sh.quadraticCurveTo(0.158, 0.004, 0.172, 0.03);
      sh.lineTo(0.13, 0.032); sh.lineTo(0, 0.032); sh.closePath();
      return sh;
    };
    add(g, gExtrude('knifeblade2', shape, 0.0025, 0.0007), blade, 0.004, 0.011, 0.016, -Math.PI / 2, 0, 0);
    add(g, gBox(0.165, 0.0006, 0.004), col(0xeeeeee, 0.15, 0.6), 0.09, 0.0125, 0.013);
    add(g, gRBox(0.115, 0.02, 0.028, 0.008), col(0x1d1e20, 0.6), -0.058, 0.001, 0);
    add(g, gBox(0.008, 0.024, 0.042), M.steel, 0.002, 0, 0);
    for (const x of [-0.03, -0.08]) add(g, gCyl(0.0035, 0.0035, 0.022, 8), M.brass, x, 0.0005, 0);
    add(g, gTorus(0.005, 0.0015, 3, 8), M.steel, -0.118, 0.011, 0, Math.PI / 2);
    // leather sheath beside it
    const sheath = tmat(ctex('sheath', 128, 64, (c, w, h, rr) => { noiseFill(c, w, h, rr, '#5a3a22', 0.15, 900, 2); c.strokeStyle = 'rgba(230,210,170,0.6)'; c.setLineDash([4, 3]); c.lineWidth = 2; c.strokeRect(5, 5, w - 10, h - 10); grime(c, w, h, rr, 1); }), 0.8);
    add(g, gRBox(0.19, 0.014, 0.05, 0.006), sheath, 0.03, 0, 0.065, 0, 0.12, 0);
    add(g, gBox(0.03, 0.016, 0.05), sheath, -0.07, 0, 0.078, 0, 0.12, 0);
  },
  multitool(g) {
    const h = tmat(texBrushed('#b8bcc0', 'mt'), 0.3, 0.5);
    add(g, gRBox(0.1, 0.012, 0.016, 0.004), h, 0, 0, -0.009);
    add(g, gRBox(0.1, 0.012, 0.016, 0.004), h, 0, 0, 0.009);
    add(g, gBox(0.03, 0.008, 0.02), M.darkMetal, 0.06, 0.002, 0);
    for (let i = 0; i < 3; i++) add(g, gBox(0.06, 0.001, 0.003), M.darkMetal, -0.01 + i * 0.01, 0.012, -0.012 + i * 0.012);
    add(g, gTorus(0.008, 0.002, 4, 10), M.steel, -0.055, 0.006, 0, Math.PI / 2);
    add(g, gRBox(0.08, 0.025, 0.04, 0.008), col(0x1d1e20, 0.85), 0.02, 0, 0.06, 0, 0.3, 0);
  },
  can_opener(g) {
    const red = col(0xc4221c, 0.5);
    const o = new THREE.Group();
    add(o, gRBox(0.13, 0.016, 0.022, 0.007), red, -0.07, 0, -0.016, 0, 0.12, 0);
    add(o, gRBox(0.13, 0.016, 0.022, 0.007), red, -0.07, 0, 0.016, 0, -0.12, 0);
    add(o, gBox(0.04, 0.022, 0.05), M.steel, 0.01, -0.003, 0);
    add(o, gCyl(0.012, 0.012, 0.005, 12), M.steel, 0.02, -0.003, 0);
    add(o, gTube('openerkey', [[0.02, 0.02, 0], [0.02, 0.035, 0], [0.045, 0.04, 0], [0.06, 0.03, 0]], 0.004, 8, 5), M.steel);
    add(o, gRBox(0.03, 0.02, 0.02, 0.006), red, 0.07, 0.025, 0, 0, 0, Math.PI / 2);
    o.position.y = 0.011;
    g.add(o);
  },
  cooking_pot(g) {
    const ss = tmat(texBrushed('#bfc3c7', 'pot'), 0.3, 0.55);
    add(g, gLathe('pot', [[0, 0.002], [0.095, 0.002], [0.1, 0.008], [0.1, 0.12], [0.104, 0.124], [0.097, 0.124], [0.093, 0.12], [0.093, 0.01], [0, 0.01]], 16), ss);
    add(g, gLathe('potlid', [[0.104, 0], [0.1, 0.006], [0.06, 0.02], [0, 0.026]], 16), ss, 0, 0.122, 0);
    add(g, gCyl(0.012, 0.018, 0.018, 10), M.blackPl, 0, 0.148, 0);
    for (const s of [-1, 1]) add(g, gTube('pothandle' + s, [[s * 0.098, 0.105, -0.035], [s * 0.128, 0.105, -0.025], [s * 0.128, 0.105, 0.025], [s * 0.098, 0.105, 0.035]], 0.006, 8, 5), M.blackPl);
  },
  blanket(g, r) {
    const p = pick(r, [['#7a1d1a', '#22304a', '#e8d8a0'], ['#2f4a2a', '#1a1a1a', '#c8a24a'], ['#4a5a7a', '#e8e8e0', '#1a2a4a']]);
    const t = tmat(texPlaid(p[0], p[1], p[2]), 0.95);
    add(g, gRBox(0.4, 0.04, 0.3, 0.02), t);
    add(g, gRBox(0.4, 0.04, 0.3, 0.02), t, 0.003, 0.038, 0.003, 0, 0.02, 0);
    add(g, gRBox(0.4, 0.04, 0.3, 0.02), t, -0.004, 0.076, -0.002, 0, -0.015, 0);
    add(g, gCyl(0.02, 0.02, 0.3, 10), t, 0.2, 0.06, -0.15, Math.PI / 2, 0, 0, 1, 1, 2.6);
  },
  sleeping_bag(g, r) {
    const color = pick(r, ['#2a5ab8', '#c8521c', '#3a5a2a']);
    const n = tmat(texNylon(color, 'sb'), 0.55);
    const s = new THREE.Group();
    add(s, gCyl(0.13, 0.13, 0.4, 18), [n, tmat(ctex('stuffend' + color, 128, 128, (c, w, h) => { c.fillStyle = color; c.fillRect(0, 0, w, h); c.strokeStyle = 'rgba(0,0,0,0.35)'; c.lineWidth = 2; for (let i = 0; i < 12; i++) { c.beginPath(); c.moveTo(64, 64); c.lineTo(64 + Math.cos(i) * 64, 64 + Math.sin(i) * 64); c.stroke(); } }), 0.6), n]);
    for (const y of [0.08, 0.32]) add(s, gCyl(0.133, 0.133, 0.025, 18, true), M.blackPl, 0, y, 0);
    for (let i = 0; i < 4; i++) add(s, gBox(0.025, 0.42, 0.004), M.blackPl, Math.sin(i * Math.PI / 2) * 0.132, -0.01, Math.cos(i * Math.PI / 2) * 0.132, 0, i * Math.PI / 2, 0);
    add(s, gCyl(0.004, 0.004, 0.06, 6), M.blackPl, 0.03, 0.4, 0);
    add(s, gCyl(0.008, 0.008, 0.02, 8), col(0x2a2a2a, 0.5), 0.03, 0.45, 0);
    s.rotation.z = Math.PI / 2; s.position.set(0.2, 0.13, 0);
    g.add(s);
  },
  hand_warmers(g) {
    for (let i = 0; i < 2; i++) {
      const p = new THREE.Group();
      pouch(p, 0.09, 0.13, 0.012, { t: 'HAND', t2: 'WARMERS', s: 'UP TO 10 HRS', n: '1 PAIR', b: '#e0521c', f: '#fff', a: '#2a2a2c', p: 'flame' }, 0.45, 0.1, 0.06);
      p.rotation.set(-Math.PI / 2, 0, i * 0.5 - 0.2); p.position.set(i * 0.06, 0.006 + i * 0.008, i * 0.02);
      g.add(p);
    }
  },
  wool_socks(g, r) {
    const color = pick(r, ['#8a8a86', '#6a5a4a', '#4a5a6a']);
    const accent = pick(r, ['#a8321e', '#2a4a7a', '#e8e2d2']);
    const S = 0.3; // texture covers 0.3 m of shape space
    const face = ctex('sockface' + color + accent, 256, 256, (c, w, h, rr) => {
      c.fillStyle = color; c.fillRect(0, 0, w, h);
      const dk = shade(color, -0.3), lt = shade(color, 0.15);
      for (let x = 0; x < w; x += 6) for (let y = 0; y < h; y += 6) { c.fillStyle = lt; c.beginPath(); c.ellipse(x + 1.5, y + 3, 1.6, 3, -0.5, 0, TAU); c.ellipse(x + 4.5, y + 3, 1.6, 3, 0.5, 0, TAU); c.fill(); c.fillStyle = dk; c.fillRect(x + 2.7, y, 0.6, 6); }
      const px = (m) => (m / S) * w, py = (m) => h - (m / S) * h;
      c.fillStyle = accent; c.globalAlpha = 0.85;
      c.beginPath(); c.arc(px(0.0), py(0.0), px(0.06), 0, TAU); c.fill(); // heel
      c.fillRect(px(0.165), py(0.1), px(0.06), px(0.1)); // toe
      c.fillRect(0, py(0.275), px(0.1), px(0.035)); // cuff stripe
      c.globalAlpha = 1;
      for (let y = py(0.27); y < py(0.215); y += 4) { c.fillStyle = 'rgba(0,0,0,0.18)'; c.fillRect(0, y, px(0.1), 1.5); }
      grime(c, w, h, rr, 0.5);
    }, { repeat: [1 / S, 1 / S] });
    const shape = () => {
      const sh = new THREE.Shape();
      sh.moveTo(0, 0.27); sh.lineTo(0, 0.06); sh.quadraticCurveTo(0, 0, 0.06, 0);
      sh.lineTo(0.17, 0); sh.quadraticCurveTo(0.215, 0.002, 0.215, 0.04); sh.quadraticCurveTo(0.212, 0.078, 0.17, 0.08);
      sh.lineTo(0.095, 0.085); sh.lineTo(0.088, 0.27); sh.closePath();
      return sh;
    };
    const geo = gExtrude('sock', shape, 0.012, 0.006);
    const side = tmat(texKnit(color, 'sockside'), 0.95);
    for (let i = 0; i < 2; i++) add(g, geo, [tmat(face, 0.95), side], i * 0.025 - 0.1, 0.009 + i * 0.024, -0.13 + i * 0.012, -Math.PI / 2, 0, i * 0.08);
    add(g, gBox(0.105, 0.05, 0.003), tmat(sleeveTex({ t: 'WOOL SOCKS', s: 'MERINO BLEND  1 PAIR', b: '#f4f1ea', f: '#3a2a1f', a: accent }), 0.8), -0.065, 0.005, -0.03, -Math.PI / 2, 0, 0);
  },
  trash_bags(g) {
    const L = { t: 'TRASH BAGS', s: 'LARGE 30 GAL  DRAWSTRING', n: '40 BAGS', b: '#1a1a1c', f: '#f2c21b', a: '#2f7a32', p: 'bolt', top: 'HEAVY DUTY' };
    printedBox(g, 0.26, 0.12, 0.13, L, { tw: 384, th: 180 });
    add(g, gBox(0.12, 0.002, 0.04), col(0x0a0a0a, 0.3), 0, 0.12, 0);
  },
  radio(g) {
    const body = col(0xe0521c, 0.5);
    const grey = col(0x3a3a3c, 0.6);
    const front = tmat(ctex('radiofront', 256, 160, (c, w, h, rr) => {
      c.fillStyle = '#3a3a3c'; c.fillRect(0, 0, w, h);
      c.fillStyle = '#1a1a1a';
      for (let y = 20; y < h - 20; y += 9) for (let x = 16; x < w * 0.5; x += 9) { c.beginPath(); c.arc(x, y, 3, 0, TAU); c.fill(); }
      c.fillStyle = '#9ab89a'; c.fillRect(w * 0.56, 24, w * 0.38, 40);
      c.fillStyle = '#2a3a2a'; for (let i = 0; i < 10; i++) c.fillRect(w * 0.58 + i * 9, 50, 2, 10);
      txt(c, 'AM  FM  WB', w * 0.75, 36, 12, { color: '#2a3a2a' });
      for (let i = 0; i < 3; i++) { c.fillStyle = '#c8c8c8'; c.fillRect(w * 0.58 + i * 30, 84, 22, 12); }
      txt(c, 'EMERGENCY RADIO', w * 0.75, 120, 14, { color: '#ddd', maxW: w * 0.4 });
      grime(c, w, h, rr, 0.8);
    }), 0.5);
    add(g, gRBox(0.19, 0.11, 0.07, 0.015), [body, body, body, body, front, body]);
    add(g, gBox(0.1, 0.004, 0.05), mat('solar', { color: 0x1a2a4a, roughness: 0.15, metalness: 0.4 }), -0.03, 0.11, 0);
    add(g, gCyl(0.003, 0.003, 0.22, 6), M.chrome, 0.08, 0.11, -0.02, 0, 0, -0.25);
    add(g, gCyl(0.012, 0.012, 0.012, 12), grey, 0.06, 0.07, 0.04, Math.PI / 2);
    add(g, gBox(0.012, 0.06, 0.012), grey, 0.1, 0.04, 0.0);
    add(g, gCyl(0.006, 0.006, 0.03, 8), grey, 0.12, 0.015, 0.0, 0, 0, Math.PI / 2);
  },
  paper_map(g, r) {
    const cover = tmat(ctex('mapcover', 256, 448, (c, w, h, rr) => {
      c.fillStyle = '#f4f1e6'; c.fillRect(0, 0, w, h);
      c.fillStyle = '#1d4f9a'; c.fillRect(0, 0, w, h * 0.28);
      txt(c, 'PORTLAND', w / 2, h * 0.09, 36, { color: '#fff', maxW: w * 0.9 });
      txt(c, 'METRO STREET MAP', w / 2, h * 0.18, 20, { color: '#f2c21b', maxW: w * 0.9 });
      // little map drawing
      c.fillStyle = '#e8e2c8'; c.fillRect(16, h * 0.32, w - 32, h * 0.5);
      c.strokeStyle = '#7fa8d6'; c.lineWidth = 10; c.beginPath(); c.moveTo(w * 0.45, h * 0.32); c.bezierCurveTo(w * 0.6, h * 0.5, w * 0.35, h * 0.62, w * 0.55, h * 0.82); c.stroke();
      c.strokeStyle = '#d6a04a'; c.lineWidth = 3;
      for (let i = 0; i < 9; i++) { c.beginPath(); c.moveTo(16, h * (0.34 + i * 0.055)); c.lineTo(w - 16, h * (0.34 + i * 0.055) + (rr() - 0.5) * 10); c.stroke(); c.beginPath(); c.moveTo(20 + i * 26, h * 0.32); c.lineTo(20 + i * 26 + (rr() - 0.5) * 10, h * 0.82); c.stroke(); }
      c.fillStyle = '#9ac48a'; c.fillRect(w * 0.12, h * 0.38, 40, 30);
      txt(c, 'FOLD HERE', w / 2, h * 0.9, 12, { color: '#666' });
      grime(c, w, h, rr, 1.2);
    }), 0.85);
    add(g, gBox(0.12, 0.008, 0.21), [M.paper, M.paper, cover, M.paper, M.paper, M.paper], 0, 0, 0, 0, r() * 0.6, 0);
  },
  toilet_paper(g) {
    const roll = tmat(ctex('tproll', 128, 64, (c, w, h, rr) => { noiseFill(c, w, h, rr, '#f6f4ee', 0.05, 500, 1); c.strokeStyle = 'rgba(0,0,0,0.06)'; for (let x = 0; x < w; x += 8) { c.beginPath(); c.moveTo(x, 0); c.lineTo(x, h); c.stroke(); } }), 0.95);
    const top = tmat(ctex('tptop', 128, 128, (c, w, h) => { c.fillStyle = '#f6f4ee'; c.fillRect(0, 0, w, h); c.strokeStyle = 'rgba(0,0,0,0.08)'; for (let i = 24; i < 64; i += 3) { c.beginPath(); c.arc(64, 64, i, 0, TAU); c.stroke(); } c.fillStyle = '#a67c48'; c.beginPath(); c.arc(64, 64, 22, 0, TAU); c.fill(); c.fillStyle = '#2a2420'; c.beginPath(); c.arc(64, 64, 19, 0, TAU); c.fill(); }), 0.9);
    for (let i = 0; i < 4; i++) add(g, gCyl(0.055, 0.055, 0.1, 18), [roll, top, top], (i % 2 - 0.5) * 0.112, 0, (Math.floor(i / 2) - 0.5) * 0.112);
    const wrap = mat('tpwrap', { color: 0xffffff, roughness: 0.15, transparent: true, opacity: 0.2, depthWrite: false });
    add(g, gRBox(0.23, 0.105, 0.23, 0.03), wrap);
    add(g, gBox(0.2, 0.06, 0.002), tmat(sleeveTex({ t: 'BATH TISSUE', s: '4 DOUBLE ROLLS  2-PLY', b: '#f4f6fa', f: '#2a4f9a', a: '#7fa8d6' }), 0.5), 0, 0.02, 0.116);
  },
  soap(g, r) {
    printedBox(g, 0.095, 0.035, 0.065, { t: 'BAR SOAP', s: 'GENTLE  UNSCENTED', n: '4 OZ (113g)', b: '#f4f6fa', f: '#2a6fd6', a: '#7fc4d6', p: 'bubble' }, { tw: 256, th: 96 });
    add(g, gRBox(0.085, 0.03, 0.055, 0.012), col(pick(r, [0xf4f0e6, 0xe8d8f0, 0xd8f0e0]), 0.4), 0.11, 0, 0.02, 0, 0.4, 0);
  },
  toothpaste(g) {
    const L = { t: 'TOOTHPASTE', s: 'FLUORIDE  COOL MINT', n: 'NET WT 6 OZ (170g)', b: '#2a6fd6', f: '#fff', a: '#d6283a', p: 'tooth' };
    const box = new THREE.Group();
    printedBox(box, 0.045, 0.2, 0.04, L, { tw: 128, th: 512 });
    box.rotation.z = Math.PI / 2; box.position.set(0.1, 0, 0);
    g.add(box);
    // tube: lathe flattened toward the crimp
    const tube = new THREE.Group();
    add(tube, gLathe('tptube', [[0, 0], [0.012, 0], [0.016, 0.012], [0.019, 0.04], [0.019, 0.12], [0.017, 0.165], [0.016, 0.17]], 14), tmat(wrapTex({ ...L, s: 'COOL MINT' }, 256, 256), 0.35), 0, 0, 0, 0, 0, 0, 1, 1, 0.65);
    add(tube, gCyl(0.012, 0.014, 0.018, 12), M.whitePl, 0, -0.018, 0);
    add(tube, gBox(0.04, 0.012, 0.003), col(0xffffff, 0.5), 0, 0.168, 0);
    tube.rotation.z = Math.PI / 2; tube.position.set(0.0, 0.013, 0.07);
    g.add(tube);
  },
};
delete ITEM_BUILDERS.first_aid_kit;


// paperback guide books: cover art is a plain pictogram plus a generic title
const BOOKS = {
  book_first_aid: { title: ['FIRST-AID', 'HANDBOOK'], sub: 'EMERGENCY CARE AT HOME', bg: '#c4221c', band: '#f4f2ec', ink: '#f4f2ec', icon: 'cross' },
  book_repair: { title: ['HOME REPAIR', 'MANUAL'], sub: 'FIX IT YOURSELF', bg: '#e8701c', band: '#5a5e62', ink: '#2a2c2e', icon: 'wrench' },
  book_cooking: { title: ['CAMP', 'COOKING'], sub: 'MEALS OVER AN OPEN FIRE', bg: '#2f6a3a', band: '#efe6cf', ink: '#efe6cf', icon: 'pot' },
  book_survival: { title: ['WILDERNESS', 'SURVIVAL GUIDE'], sub: 'SHELTER  WATER  FIRE  FOOD', bg: '#1f3a26', band: '#c9a24a', ink: '#e8d8a0', icon: 'compass' },
};
function bookIcon(c, kind, x, y, s, B) {
  c.save(); c.translate(x, y);
  if (kind === 'cross') {
    c.fillStyle = B.band; c.beginPath(); c.arc(0, 0, s, 0, TAU); c.fill();
    c.fillStyle = B.bg; const a = s * 0.62, t = s * 0.22; c.fillRect(-t, -a, 2 * t, 2 * a); c.fillRect(-a, -t, 2 * a, 2 * t);
  } else if (kind === 'wrench') {
    c.rotate(-0.7); c.fillStyle = B.ink;
    c.fillRect(-s * 0.13, -s * 0.7, s * 0.26, s * 1.4);
    for (const e of [-1, 1]) { c.beginPath(); c.arc(0, e * s * 0.78, s * 0.3, 0, TAU); c.fill(); }
    c.fillStyle = B.bg; c.fillRect(-s * 0.1, -s * 1.12, s * 0.2, s * 0.36); c.beginPath(); c.arc(0, s * 0.78, s * 0.13, 0, TAU); c.fill();
  } else if (kind === 'pot') {
    c.fillStyle = B.ink; c.strokeStyle = B.ink; c.lineWidth = s * 0.08;
    c.beginPath(); c.moveTo(-s * 0.7, -s * 0.15); c.lineTo(s * 0.7, -s * 0.15); c.lineTo(s * 0.6, s * 0.6); c.lineTo(-s * 0.6, s * 0.6); c.closePath(); c.fill();
    c.fillRect(-s * 0.78, -s * 0.3, s * 1.56, s * 0.12);
    c.beginPath(); c.arc(0, -s * 0.3, s * 0.55, Math.PI * 1.1, Math.PI * 1.9); c.stroke();
    for (let i = -1; i <= 1; i++) { c.beginPath(); c.moveTo(i * s * 0.3, -s * 0.45); c.bezierCurveTo(i * s * 0.3 + s * 0.12, -s * 0.6, i * s * 0.3 - s * 0.12, -s * 0.75, i * s * 0.3, -s * 0.9); c.stroke(); }
  } else {
    c.strokeStyle = B.band; c.lineWidth = s * 0.06; c.beginPath(); c.arc(0, 0, s * 0.9, 0, TAU); c.stroke();
    for (let i = 0; i < 8; i++) {
      const L = i % 2 ? s * 0.5 : s * 0.85, wd = s * 0.14;
      c.save(); c.rotate(i * Math.PI / 4);
      c.fillStyle = i % 2 ? B.ink : B.band; c.beginPath(); c.moveTo(0, -L); c.lineTo(wd, 0); c.lineTo(-wd, 0); c.closePath(); c.fill();
      c.fillStyle = 'rgba(0,0,0,0.3)'; c.beginPath(); c.moveTo(0, -L); c.lineTo(wd, 0); c.lineTo(0, 0); c.closePath(); c.fill();
      c.restore();
    }
    txt(c, 'N', 0, -s * 0.98, s * 0.28, { color: B.ink });
  }
  c.restore();
}
function guideBook(g, r, id) {
  const B = BOOKS[id];
  const font = '"DejaVu Sans", Arial, sans-serif';
  // one atlas per title: front [0,256), back [256,512), spine [512,544) drawn upright, page edges [544,640)
  const atlas = tmat(ctex('gbook' + id, 640, 384, (c, W, h, rr) => {
    const w = 256;
    noiseFill(c, 544, h, rr, B.bg, 0.06, 3000, 2);
    c.fillStyle = B.band; c.fillRect(0, h * 0.06, w, 6); c.fillRect(0, h * 0.94 - 6, w, 6);
    B.title.forEach((t, i) => txt(c, t, w / 2, h * 0.16 + i * 34, 28, { color: B.ink, maxW: w * 0.86, font }));
    bookIcon(c, B.icon, w / 2, h * 0.56, 62, B);
    txt(c, B.sub, w / 2, h * 0.86, 12, { color: B.ink, maxW: w * 0.86 });
    c.strokeStyle = 'rgba(255,255,255,0.25)'; c.lineWidth = 2; c.beginPath(); c.moveTo(w * 0.7, h); c.lineTo(w, h * 0.82); c.stroke();
    c.strokeStyle = 'rgba(80,60,30,0.25)'; c.lineWidth = 3; c.beginPath(); c.arc(w * (0.3 + rr() * 0.4), h * (0.3 + rr() * 0.4), 34, 0, TAU); c.stroke();
    // back cover
    c.fillStyle = B.band; c.fillRect(256 + w * 0.1, h * 0.12, w * 0.8, 3);
    finePrint(c, 256 + w * 0.12, h * 0.18, w * 0.76, 12, 14, rr, B.ink);
    c.fillStyle = '#f4f2ec'; c.fillRect(256 + w * 0.55, h * 0.8, w * 0.35, h * 0.1); barcode(c, 256 + w * 0.57, h * 0.81, w * 0.31, h * 0.08, rr);
    // spine, title running top to bottom
    c.save(); c.translate(528, h / 2); c.rotate(Math.PI / 2); txt(c, B.title.join(' '), 0, 6, 17, { color: B.ink, maxW: h * 0.9, font }); c.restore();
    c.fillStyle = 'rgba(0,0,0,0.25)'; c.fillRect(512, 0, 2, h); c.fillRect(542, 0, 2, h);
    // page edges
    c.fillStyle = '#efe6cf'; c.fillRect(544, 0, 96, h); c.fillStyle = 'rgba(0,0,0,0.12)'; for (let x = 544; x < W; x += 2) c.fillRect(x, 0, 1, h);
    grime(c, W, h, rr, 1.2);
  }), 0.75);
  const geo = cached(GEO, 'gbookgeo', () => {
    const b = new THREE.BoxGeometry(0.15, 0.03, 0.22).translate(0, 0.015, 0);
    const uv = b.attributes.uv, pos = b.attributes.position;
    const U = (a) => a / 640;
    // face order +x,-x,+y,-y,+z,-z; map each vertex by its position so orientation is explicit
    for (let f = 0; f < 6; f++) for (let k = 0; k < 4; k++) {
      const i = f * 4 + k, x = pos.getX(i) / 0.15 + 0.5, y = (pos.getY(i)) / 0.03, z = pos.getZ(i) / 0.22 + 0.5;
      let u, v;
      if (f === 2) { u = U(x * 256); v = 1 - z; }            // front cover (top), title towards -z
      else if (f === 3) { u = U(256 + (1 - x) * 256); v = 1 - z; } // back cover
      else if (f === 1) { u = U(512 + y * 32); v = 1 - z; }       // spine on -x
      else { u = U(544 + (f === 0 ? z : x) * 96); v = y; }        // page edges
      uv.setXY(i, u, v);
    }
    return b;
  });
  const book = new THREE.Group();
  add(book, geo, atlas);
  if (r() < 0.35) { book.rotation.x = Math.PI / 2; book.position.set(0, 0.11, -0.015); } // standing
  else book.rotation.y = (r() - 0.5) * 0.3;
  g.add(book);
}
for (const id of Object.keys(BOOKS)) ITEM_BUILDERS[id] = (g, r) => guideBook(g, r, id);
export const ITEM_MODEL_IDS = Object.keys(ITEM_BUILDERS);

export function makeItemModel(itemId, seed = 0) {
  const g = new THREE.Group();
  const r = rng(hashStr(String(itemId)) ^ Math.imul(seed + 1, 2654435761));
  const fn = ITEM_BUILDERS[itemId];
  if (fn) fn(g, r);
  else genericBox(g, itemId);
  return finish(g, itemId);
}
function genericBox(g, id) {
  const name = String(id || 'SUPPLIES').replace(/_/g, ' ').toUpperCase();
  const t = tmat(texCarton(name.slice(0, 18), 0), 0.9);
  const plain = tmat(texCardboard(), 0.9);
  add(g, gBox(0.3, 0.22, 0.24), [t, t, plain, plain, t, t]);
}

// =====================================================================
// Shelf stock: one merged mesh per surface finish, one shared label atlas per store kind
// =====================================================================

// solid colour patches kept in the last atlas cell
const SOLIDS = ['#c9ccd0', '#f2f1ec', '#1c1c1e', '#a9824f', '#c4221c', '#1d4f9a', '#2f7a32', '#f2c21b', '#8a4a1a', '#cfdde4', '#e8701c', '#c59a45', '#4a4c50', '#2a9a9a', '#9a6a2c', '#e9a0b0'];
const SOLID_IX = { tin: 0, white: 1, black: 2, card: 3, red: 4, blue: 5, green: 6, yellow: 7, amber: 8, clear: 9, orange: 10, brass: 11, dark: 12, teal: 13, brown: 14, pink: 15 };

const Lb = (t, s, b, f, a, p, n, extra = {}) => ({ t, s, b, f, a, p, n, ...extra });
const CATALOG = {
  grocery: [
    { s: 'can', r: 0.038, h: 0.112, L: CAN_LABELS[0], w8: 2, stack: 1 },
    { s: 'can', r: 0.038, h: 0.11, L: CAN_LABELS[1], w8: 2, stack: 1 },
    { s: 'can', r: 0.038, h: 0.112, L: CAN_LABELS[2], w8: 1, stack: 1 },
    { s: 'can', r: 0.038, h: 0.112, L: CAN_LABELS[3], w8: 1, stack: 1 },
    { s: 'can', r: 0.038, h: 0.11, L: FRUIT_LABELS[0], w8: 2, stack: 1 },
    { s: 'can', r: 0.043, h: 0.04, L: Lb('TUNA', 'CHUNK LIGHT IN WATER', '#2b4f9a', '#fff', '#f2c21b', 'fish', 'NET WT 5 OZ (142g)'), w8: 2, stack: 1 },
    { s: 'box', w: 0.19, h: 0.29, d: 0.07, L: Lb('CORN FLAKES', 'TOASTED', '#f2f1ec', '#1d4f9a', '#e8701c', 'grain', 'NET WT 18 OZ (510g)', { top: 'FAMILY SIZE', tf: '#fff' }), w8: 2 },
    { s: 'box', w: 0.19, h: 0.28, d: 0.07, L: Lb('OAT RINGS', 'HONEY NUT', '#f2c21b', '#7a2a10', '#7a2a10', 'oats', 'NET WT 15.4 OZ (436g)', { top: 'WHOLE GRAIN' }), w8: 2 },
    { s: 'box', w: 0.1, h: 0.26, d: 0.04, L: Lb('SPAGHETTI', 'ENRICHED', '#1d4f9a', '#fff', '#f2c21b', 'grain', '1 LB (454g)', { tf: '#1d4f9a', top: 'NO. 3' }), w8: 2 },
    { s: 'box', w: 0.2, h: 0.22, d: 0.07, L: Lb('SALTINES', 'ORIGINAL', '#f4f1ea', '#c41e1e', '#c41e1e', 'grain', 'NET WT 16 OZ (454g)'), w8: 2 },
    { s: 'box', w: 0.13, h: 0.17, d: 0.04, L: Lb('MAC & CHEESE', 'ORIGINAL', '#2b6fd6', '#fff', '#f2c21b', 'noodle', 'NET WT 7.25 OZ', { tf: '#2b6fd6', top: 'DINNER' }), w8: 2 },
    { s: 'jar', r: 0.045, h: 0.125, L: Lb('PEANUT BUTTER', 'CREAMY', '#f5e6c0', '#8a3a12', '#c8321e', 'peanut', 'NET WT 16 OZ'), cap: 'red', body: 'brown', w8: 2 },
    { s: 'jar', r: 0.042, h: 0.16, L: Lb('PASTA SAUCE', 'MARINARA', '#2f5a2a', '#fff', '#b81d18', 'tomato', '24 OZ (680g)'), cap: 'tin', body: 'red', w8: 2 },
    { s: 'bottle', r: 0.042, h: 0.3, L: Lb('VEGETABLE OIL', 'PURE', '#f2c21b', '#1d4f9a', '#1d4f9a', 'leaf', '48 FL OZ (1.42 L)'), cap: 'yellow', body: 'yellow', w8: 1 },
    { s: 'bag', w: 0.17, h: 0.25, d: 0.08, L: Lb('WHITE RICE', 'LONG GRAIN', '#f6f3ea', '#1d4f8a', '#1d4f8a', 'grain', 'NET WT 2 LB (907g)'), w8: 2 },
    { s: 'bag', w: 0.16, h: 0.27, d: 0.09, L: Lb('FLOUR', 'ALL PURPOSE', '#f6f3ea', '#c41e1e', '#2b4f9a', 'grain', '5 LB (2.26 kg)'), w8: 1 },
    { s: 'bag', w: 0.21, h: 0.3, d: 0.08, L: Lb('POTATO CHIPS', 'SEA SALT', '#f2c21b', '#c41e1e', '#c41e1e', 'chip', 'NET WT 8 OZ'), gl: 1, w8: 2 },
    { s: 'jug', w: 0.15, h: 0.27, d: 0.15, L: Lb('DRINKING WATER', '1 GALLON', '#e9f2f6', '#1d5fa8', '#3d8fd6', 'drop', '3.78 L'), cap: 'blue', body: 'clear', w8: 2 },
    { s: 'can', r: 0.064, h: 0.18, L: Lb('OLD FASHIONED OATS', '100% WHOLE GRAIN', '#f4f1ea', '#2a4f8a', '#2a4f8a', 'oats', '42 OZ (1.19 kg)'), cap: 'blue', w8: 1 },
    { s: 'cup', r: 0.05, h: 0.1, L: Lb('INSTANT NOODLES', 'CHICKEN FLAVOR', '#f4f1ea', '#c41e1e', '#f2c21b', 'noodle', '2.25 OZ'), cap: 'white', w8: 2, stack: 1 },
    { s: 'can', r: 0.065, h: 0.16, L: Lb('GROUND COFFEE', 'MEDIUM ROAST', '#3a1a10', '#f3c04a', '#b5321a', 'bean', '30.5 OZ (864g)'), cap: 'red', w8: 1 },
    { s: 'bag', w: 0.14, h: 0.21, d: 0.08, L: Lb('SUGAR', 'GRANULATED', '#f6f3ea', '#1d4f9a', '#c41e1e', 'grain', '4 LB (1.81 kg)'), w8: 1 },
    { s: 'box', w: 0.4, h: 0.125, d: 0.135, L: Lb('COLA 12 PACK', '12 FL OZ CANS', '#a8141a', '#fff', '#5a0a0a', 'bubble', '144 FL OZ (4.26 L)'), w8: 1, wide: 1 },
    { s: 'bottle', r: 0.036, h: 0.22, L: Lb('KETCHUP', 'TOMATO', '#c41e1e', '#fff', '#2f6a2a', 'tomato', '20 OZ (567g)'), cap: 'white', body: 'red', w8: 1 },
  ],
  pharmacy: [
    { s: 'jar', r: 0.028, h: 0.1, L: Lb('PAIN RELIEVER', 'ACETAMINOPHEN 500 MG', '#f4f4f0', '#c41e1e', '#c41e1e', 'pill', '100 CAPLETS'), cap: 'white', body: 'white', w8: 3, stack: 1 },
    { s: 'jar', r: 0.028, h: 0.1, L: Lb('IBUPROFEN', '200 MG TABLETS', '#f08a1c', '#fff', '#7a2a0a', 'pill', '100 TABLETS'), cap: 'orange', body: 'white', w8: 3, stack: 1 },
    { s: 'jar', r: 0.035, h: 0.12, L: Lb('MULTIVITAMIN', 'ADULT DAILY', '#2a2a6a', '#f2c21b', '#f2c21b', 'sun', '120 TABLETS'), cap: 'black', body: 'dark', w8: 2 },
    { s: 'box', w: 0.08, h: 0.11, d: 0.03, L: Lb('ALLERGY', '24 HOUR RELIEF', '#6a2a9a', '#fff', '#f2c21b', 'leaf', '30 TABLETS'), w8: 2, stack: 1 },
    { s: 'box', w: 0.1, h: 0.14, d: 0.04, L: Lb('COLD & FLU', 'DAY + NIGHT', '#1d4f9a', '#fff', '#e8701c', 'moon', '24 LIQUID CAPS'), w8: 2, stack: 1 },
    { s: 'bottle', r: 0.033, h: 0.14, L: Lb('ANTACID', 'EXTRA STRENGTH', '#f2f1ec', '#2a9a9a', '#2a9a9a', 'drop', '160 CHEWABLES'), cap: 'teal', body: 'white', w8: 1 },
    { s: 'box', w: 0.1, h: 0.13, d: 0.045, L: Lb('BANDAGES', 'FLEXIBLE FABRIC', '#f4f1ea', '#c41e1e', '#e0b38a', 'cross', '60 ASSORTED'), w8: 2, stack: 1 },
    { s: 'box', w: 0.1, h: 0.1, d: 0.05, L: Lb('GAUZE PADS', 'STERILE 4 x 4 IN', '#f4f8fb', '#1d5fa8', '#3aa7a0', 'cross', '25 PADS'), w8: 2, stack: 1 },
    { s: 'box', w: 0.08, h: 0.12, d: 0.03, L: Lb('SLEEP AID', 'NIGHTTIME', '#1a2a5a', '#fff', '#7fa8d6', 'moon', '32 CAPLETS'), w8: 1, stack: 1 },
    { s: 'bottle', r: 0.036, h: 0.23, L: Lb('SHAMPOO', 'DAILY CLEAN', '#2a9a9a', '#fff', '#fff', 'bubble', '12 FL OZ'), cap: 'white', body: 'teal', w8: 2 },
    { s: 'jug', w: 0.1, h: 0.24, d: 0.065, L: Lb('MOUTHWASH', 'ANTISEPTIC MINT', '#2f7a32', '#fff', '#f2f1ec', 'tooth', '1 L'), cap: 'white', body: 'green', w8: 1 },
    { s: 'box', w: 0.065, h: 0.15, d: 0.065, L: Lb('COUGH SYRUP', 'DM MAX', '#b81d18', '#fff', '#f2c21b', 'drop', '8 FL OZ'), w8: 2 },
    { s: 'bottle', r: 0.036, h: 0.21, L: Lb('LOTION', 'DRY SKIN', '#f2f1ec', '#1d4f9a', '#7fa8d6', 'drop', '16 FL OZ'), cap: 'white', body: 'white', w8: 1 },
    { s: 'bottle', r: 0.03, h: 0.18, L: Lb('HAND SANITIZER', '70% ALCOHOL', '#cfe3ef', '#1d5fa8', '#1d5fa8', 'drop', '12 FL OZ'), cap: 'blue', body: 'clear', w8: 2 },
    { s: 'bottle', r: 0.04, h: 0.21, L: Lb('ISOPROPYL', 'ALCOHOL 70%', '#f2f1ec', '#1d4f9a', '#1d4f9a', 'drop', '32 FL OZ'), cap: 'white', body: 'clear', w8: 2 },
    { s: 'bottle', r: 0.04, h: 0.21, L: Lb('HYDROGEN', 'PEROXIDE 3%', '#f2f1ec', '#8a4a1a', '#8a4a1a', 'drop', '32 FL OZ'), cap: 'white', body: 'amber', w8: 1 },
    { s: 'box', w: 0.045, h: 0.19, d: 0.04, L: Lb('TOOTHPASTE', 'FLUORIDE', '#2a6fd6', '#fff', '#d6283a', 'tooth', '6 OZ'), w8: 2 },
    { s: 'box', w: 0.07, h: 0.15, d: 0.04, L: Lb('DEODORANT', 'UNSCENTED', '#4a4c50', '#fff', '#7fa8d6', 'drop', '2.6 OZ'), w8: 1 },
    { s: 'box', w: 0.1, h: 0.13, d: 0.04, L: Lb('ORAL SALTS', 'REHYDRATION', '#f4f8fb', '#1d5fa8', '#3aa7a0', 'drop', '10 SACHETS'), w8: 2, stack: 1 },
    { s: 'box', w: 0.2, h: 0.14, d: 0.07, L: Lb('FIRST AID KIT', '100 PIECES', '#c8201e', '#fff', '#fff', 'wcross', 'HOME CAR WORK', { tf: '#c8201e' }), w8: 1 },
    { s: 'bag', w: 0.15, h: 0.2, d: 0.1, L: Lb('COTTON BALLS', 'TRIPLE SIZE', '#f2f1ec', '#d6283a', '#e9a0b0', 'bubble', '100 CT'), gl: 1, w8: 1 },
    { s: 'bag', w: 0.11, h: 0.15, d: 0.04, L: Lb('COUGH DROPS', 'HONEY LEMON', '#f2c21b', '#7a2a10', '#c41e1e', 'drop', '30 DROPS'), gl: 1, w8: 1 },
    { s: 'box', w: 0.065, h: 0.18, d: 0.025, L: Lb('THERMOMETER', 'DIGITAL', '#f2f1ec', '#1d4f9a', '#1d4f9a', 'bolt', 'ORAL 60 SEC'), w8: 1 },
    { s: 'box', w: 0.05, h: 0.1, d: 0.03, L: Lb('EYE DROPS', 'LUBRICANT', '#f2f1ec', '#2a9a9a', '#2a9a9a', 'drop', '0.5 FL OZ'), w8: 1, stack: 1 },
  ],
  hardware: [
    { s: 'can', r: 0.085, h: 0.19, L: Lb('INTERIOR PAINT', 'EGGSHELL  WHITE', '#f2f1ec', '#1d4f9a', '#1d4f9a', 'drop', '1 GALLON (3.78 L)'), w8: 2 },
    { s: 'can', r: 0.085, h: 0.19, L: Lb('PRIMER', 'STAIN BLOCKING', '#c4221c', '#fff', '#2a2a2c', 'drop', '1 GALLON'), w8: 1 },
    { s: 'tall', r: 0.033, h: 0.21, L: Lb('SPRAY PAINT', 'GLOSS BLACK', '#1c1c1e', '#fff', '#e8701c', 'drop', 'NET WT 12 OZ'), cap: 'black', w8: 2 },
    { s: 'tall', r: 0.033, h: 0.21, L: Lb('SPRAY PAINT', 'SAFETY RED', '#f2f1ec', '#c4221c', '#c4221c', 'drop', 'NET WT 12 OZ'), cap: 'red', w8: 1 },
    { s: 'tall', r: 0.03, h: 0.2, L: Lb('PENETRATING', 'OIL  FREES RUST', '#1d4f9a', '#f2c21b', '#f2c21b', 'drop', 'NET WT 11 OZ'), cap: 'blue', w8: 2 },
    { s: 'box', w: 0.14, h: 0.09, d: 0.1, L: Lb('WOOD SCREWS', '#8 x 2-1/2 IN', '#f2c21b', '#111', '#111', 'screw', '1 LB'), w8: 2, stack: 1 },
    { s: 'box', w: 0.12, h: 0.1, d: 0.08, L: Lb('FRAMING NAILS', '16D  3-1/2 IN', '#c4221c', '#fff', '#111', 'screw', '5 LB'), w8: 2, stack: 1 },
    { s: 'tall', r: 0.025, h: 0.23, L: Lb('SILICONE', 'SEALANT  CLEAR', '#f2f1ec', '#1d4f9a', '#1d4f9a', 'drop', '10.1 FL OZ'), cap: 'white', w8: 2 },
    { s: 'roll', r: 0.056, h: 0.048, cap: 'tin', w8: 2, stack: 2, L: Lb('DUCT TAPE', '', '#c9ccd0', '#333', '#c9ccd0') },
    { s: 'box', w: 0.18, h: 0.2, d: 0.08, L: Lb('EXTENSION CORD', '25 FT  OUTDOOR', '#e8701c', '#fff', '#1c1c1e', 'bolt', '16/3 GAUGE'), w8: 1 },
    { s: 'box', w: 0.075, h: 0.12, d: 0.07, L: Lb('LED BULBS', '60W EQUAL 4 PACK', '#f2f1ec', '#1d4f9a', '#f2c21b', 'sun', 'SOFT WHITE'), w8: 2, stack: 1 },
    { s: 'bottle', r: 0.026, h: 0.15, L: Lb('WOOD GLUE', 'INTERIOR', '#f2c21b', '#7a2a10', '#7a2a10', 'drop', '8 FL OZ'), cap: 'orange', body: 'white', w8: 1 },
    { s: 'bag', w: 0.12, h: 0.24, d: 0.03, L: Lb('WORK GLOVES', 'LEATHER PALM', '#f2c21b', '#111', '#111', 'bolt', 'ONE PAIR  L'), gl: 1, w8: 2 },
    { s: 'bag', w: 0.1, h: 0.25, d: 0.02, L: Lb('ZIP TIES', '8 IN  BLACK', '#cfdde4', '#111', '#c4221c', 'bolt', '100 PACK'), gl: 1, w8: 1 },
    { s: 'jar', r: 0.07, h: 0.12, L: Lb('SPACKLE', 'LIGHTWEIGHT', '#f2f1ec', '#1d4f9a', '#c4221c', 'drop', '1 QT'), cap: 'white', body: 'white', w8: 1 },
    { s: 'box', w: 0.1, h: 0.16, d: 0.03, L: Lb('AA BATTERIES', 'ALKALINE', '#111', '#f2c21b', '#c98a2a', 'battery', '8 PACK'), w8: 2, stack: 1 },
    { s: 'can', r: 0.035, h: 0.1, L: Lb('PVC CEMENT', 'MEDIUM BODY', '#4a4c50', '#fff', '#c4221c', 'drop', '8 FL OZ'), cap: 'red', w8: 1, stack: 1 },
    { s: 'box', w: 0.12, h: 0.2, d: 0.02, L: Lb('SANDPAPER', 'ASSORTED GRIT', '#e8701c', '#fff', '#1c1c1e', 'grain', '12 SHEETS'), w8: 1 },
    { s: 'box', w: 0.15, h: 0.15, d: 0.08, L: Lb('NYLON ROPE', '3/8 IN x 50 FT', '#f2f1ec', '#c4221c', '#c4221c', 'bolt', 'WORKING LOAD 244 LB'), w8: 2 },
    { s: 'roll', r: 0.05, h: 0.048, cap: 'card', w8: 1, stack: 2, L: Lb('MASKING', '', '#e8dcb0', '#333', '#e8dcb0') },
    { s: 'jug', w: 0.1, h: 0.2, d: 0.06, L: Lb('MOTOR OIL', '5W-30 SYNTHETIC', '#1c1c1e', '#f2c21b', '#f2c21b', 'drop', '1 QUART'), cap: 'black', body: 'black', w8: 2 },
    { s: 'box', w: 0.22, h: 0.16, d: 0.1, L: Lb('UTILITY KNIFE', 'RETRACTABLE + 5 BLADES', '#c4221c', '#fff', '#1c1c1e', 'bolt', 'CARDED'), w8: 1 },
  ],
  outdoor: [
    { s: 'tall', r: 0.056, h: 0.22, L: Lb('PROPANE', 'CAMPING FUEL', '#2f7a32', '#fff', '#1d4a20', 'flame', '16.4 OZ'), cap: 'brass', w8: 3 },
    { s: 'can', r: 0.055, h: 0.1, L: Lb('BUTANE', 'ISOBUTANE MIX', '#1d4f9a', '#fff', '#e8701c', 'flame', '8 OZ (227g)'), cap: 'tin', w8: 2, stack: 1 },
    { s: 'box', w: 0.15, h: 0.26, d: 0.075, L: Lb('CAMP FUEL', 'WHITE GAS', '#c4221c', '#fff', '#f2c21b', 'flame', '1 GALLON'), gl: 1, w8: 1 },
    { s: 'bag', w: 0.17, h: 0.24, d: 0.05, L: Lb('BEEF STROGANOFF', 'FREEZE-DRIED MEAL', '#2a3a2a', '#f2c21b', '#e8701c', 'noodle', '2 SERVINGS'), gl: 1, w8: 2 },
    { s: 'bag', w: 0.17, h: 0.24, d: 0.05, L: Lb('CHILI MAC', 'FREEZE-DRIED MEAL', '#4a2412', '#f2c21b', '#c4221c', 'chili', '2 SERVINGS'), gl: 1, w8: 2 },
    { s: 'box', w: 0.3, h: 0.22, d: 0.05, L: Lb('TARP', 'ALL PURPOSE 8 x 10 FT', '#1d4f9a', '#fff', '#f2c21b', 'drop', 'WATERPROOF'), w8: 1 },
    { s: 'box', w: 0.16, h: 0.26, d: 0.16, L: Lb('LED LANTERN', '1000 LUMENS', '#1c1c1e', '#e8701c', '#e8701c', 'sun', 'USES 3 D CELLS'), w8: 1 },
    { s: 'box', w: 0.3, h: 0.12, d: 0.25, L: Lb('CAMP STOVE', 'TWO BURNER', '#2f7a32', '#fff', '#1c1c1e', 'flame', 'PROPANE'), w8: 1, wide: 1 },
    { s: 'tall', r: 0.03, h: 0.17, L: Lb('BUG SPRAY', '25% DEET', '#2f7a32', '#fff', '#f2c21b', 'bug', '6 OZ'), cap: 'green', w8: 2 },
    { s: 'bottle', r: 0.03, h: 0.16, L: Lb('SUNSCREEN', 'SPF 50 SPORT', '#f2c21b', '#1d4f9a', '#e8701c', 'sun', '8 FL OZ'), cap: 'blue', body: 'yellow', w8: 1 },
    { s: 'bag', w: 0.1, h: 0.14, d: 0.02, L: Lb('HAND WARMERS', 'UP TO 10 HRS', '#e0521c', '#fff', '#2a2a2c', 'flame', '1 PAIR'), gl: 1, w8: 2, stack: 1 },
    { s: 'bottle', r: 0.042, h: 0.21, L: Lb('WATER BOTTLE', 'BPA FREE 32 OZ', '#cfdde4', '#1d4f9a', '#1d4f9a', 'drop', 'WIDE MOUTH'), cap: 'black', body: 'clear', w8: 1 },
    { s: 'can', r: 0.12, h: 0.36, L: Lb('SLEEPING BAG', 'RATED 30 F', '#2a5ab8', '#fff', '#1c1c1e', 'snow', 'STUFF SACK INCLUDED'), cap: 'black', w8: 1 },
    { s: 'box', w: 0.1, h: 0.13, d: 0.04, L: Lb('FIRE STARTERS', 'WATERPROOF', '#c4221c', '#fff', '#f2c21b', 'flame', '12 PIECES'), w8: 2, stack: 1 },
    { s: 'box', w: 0.1, h: 0.2, d: 0.05, L: Lb('WATER FILTER', 'SQUEEZE SYSTEM', '#2a6fd6', '#fff', '#fff', 'drop', '0.1 MICRON'), w8: 1 },
    { s: 'bag', w: 0.1, h: 0.15, d: 0.02, L: Lb('EMERGENCY BLANKET', 'MYLAR', '#c9ccd0', '#c4221c', '#c4221c', 'sun', '52 x 82 IN'), gl: 1, w8: 1, stack: 1 },
    { s: 'box', w: 0.1, h: 0.18, d: 0.04, L: Lb('HEADLAMP', '300 LUMENS', '#1c1c1e', '#f2c21b', '#f2c21b', 'sun', 'BATTERIES INCLUDED'), w8: 1 },
    { s: 'box', w: 0.18, h: 0.08, d: 0.18, L: Lb('MESS KIT', '5 PIECE', '#4a4c50', '#fff', '#e8701c', 'flame', 'ALUMINUM'), w8: 1, stack: 1 },
    { s: 'box', w: 0.11, h: 0.07, d: 0.035, L: Lb('MATCHES', 'STRIKE ANYWHERE', '#f2c21b', '#c41e1e', '#c41e1e', 'flame', '250 CT'), w8: 1, stack: 2 },
  ],
  convenience: [
    { s: 'can', r: 0.033, h: 0.122, L: { t: 'COLA', s: 'CLASSIC', n: '12 FL OZ', b: '#a8141a', f: '#fff', a: '#5a0a0a', p: 'bubble' }, cap: 'tin', w8: 2, stack: 1, gl: 1 },
    { s: 'can', r: 0.033, h: 0.122, L: { t: 'LEMON LIME', s: 'CAFFEINE FREE', n: '12 FL OZ', b: '#2f8a3a', f: '#f6ee4a', a: '#0f4a1a', p: 'bubble' }, cap: 'tin', w8: 2, stack: 1, gl: 1 },
    { s: 'can', r: 0.029, h: 0.16, L: Lb('ENERGY', 'DRINK', '#1c1c1e', '#7fd62a', '#7fd62a', 'bolt', '16 FL OZ'), cap: 'tin', w8: 2, gl: 1 },
    { s: 'bottle', r: 0.033, h: 0.21, L: Lb('SPRING WATER', 'NATURAL', '#e9f2f6', '#1d5fa8', '#3d8fd6', 'drop', '16.9 FL OZ'), cap: 'blue', body: 'clear', w8: 3 },
    { s: 'bottle', r: 0.036, h: 0.21, L: Lb('SPORTS DRINK', 'GLACIER', '#111', '#fff', '#2a7fd6', 'bolt', '28 FL OZ'), cap: 'blue', body: 'blue', w8: 2 },
    { s: 'bottle', r: 0.036, h: 0.245, L: Lb('ORANGE SODA', '', '#e8701c', '#fff', '#1d4f9a', 'bubble', '20 FL OZ'), cap: 'orange', body: 'orange', w8: 1 },
    { s: 'bag', w: 0.2, h: 0.28, d: 0.07, L: Lb('POTATO CHIPS', 'SEA SALT', '#f2c21b', '#c41e1e', '#c41e1e', 'chip', '8 OZ'), gl: 1, w8: 2 },
    { s: 'bag', w: 0.2, h: 0.28, d: 0.07, L: Lb('TORTILLA CHIPS', 'NACHO', '#c4221c', '#fff', '#f2c21b', 'chip', '9.75 OZ'), gl: 1, w8: 2 },
    { s: 'box', w: 0.2, h: 0.06, d: 0.1, L: Lb('CHOCOLATE BARS', 'MILK  36 CT', '#4a2412', '#f2c21b', '#c4221c', 'bean', 'DISPLAY BOX'), w8: 2, stack: 2, wide: 1 },
    { s: 'bag', w: 0.14, h: 0.2, d: 0.035, L: Lb('BEEF JERKY', 'ORIGINAL', '#2a2420', '#f2c21b', '#8a2a12', 'meat', '3.25 OZ'), gl: 1, w8: 2 },
    { s: 'cup', r: 0.05, h: 0.1, L: Lb('INSTANT NOODLES', 'SPICY BEEF', '#f4f1ea', '#c41e1e', '#c41e1e', 'noodle', '2.25 OZ'), cap: 'white', w8: 2, stack: 1 },
    { s: 'jug', w: 0.1, h: 0.2, d: 0.06, L: Lb('MOTOR OIL', '10W-30', '#1c1c1e', '#f2c21b', '#f2c21b', 'drop', '1 QUART'), cap: 'black', body: 'black', w8: 1 },
    { s: 'box', w: 0.1, h: 0.16, d: 0.03, L: Lb('AA BATTERIES', 'ALKALINE', '#111', '#f2c21b', '#c98a2a', 'battery', '4 PACK'), w8: 1, stack: 1 },
    { s: 'box', w: 0.22, h: 0.1, d: 0.11, L: Lb('TISSUES', '2-PLY', '#7fa8d6', '#fff', '#1d4f9a', 'bubble', '160 SHEETS'), w8: 1, wide: 1, stack: 1 },
    { s: 'box', w: 0.2, h: 0.08, d: 0.12, L: Lb('SNACK CAKES', 'CREME FILLED', '#f2f1ec', '#c4221c', '#e9a0b0', 'sun', '8 CAKES'), w8: 1, wide: 1, stack: 1 },
    { s: 'bag', w: 0.15, h: 0.22, d: 0.05, L: Lb('TRAIL MIX', 'NUTS & RAISINS', '#3a5a2a', '#f2c21b', '#e8701c', 'peanut', '10 OZ'), gl: 1, w8: 1 },
    { s: 'can', r: 0.042, h: 0.09, L: Lb('ROASTED PEANUTS', 'SALTED', '#1d4f9a', '#f2c21b', '#f2c21b', 'peanut', '16 OZ'), cap: 'tin', w8: 1, stack: 1 },
    { s: 'box', w: 0.08, h: 0.05, d: 0.06, L: Lb('GUM', 'SPEARMINT', '#2f7a32', '#fff', '#fff', 'leaf', '15 STICKS'), w8: 1, stack: 2 },
    { s: 'bottle', r: 0.03, h: 0.2, L: Lb('ICED TEA', 'LEMON', '#f2c21b', '#7a2a10', '#7a2a10', 'leaf', '18.5 FL OZ'), cap: 'yellow', body: 'amber', w8: 1 },
  ],
};

const ATLAS_W = 2048, ATLAS_H = 1024, CELL = 256, COLS = 8;
const PAL_CELL = 31;
const SIGN_CELL = 30; // four endcap signs stacked in one cell, 256 x 64 each
const SHELF_TINT = 0xc2c0bc; // darkens shelf stock ~25% against pickable loot
const ENDCAP_SIGNS = [
  { t: 'SALE', b: '#c4221c', f: '#fff', a: '#f2c21b' },
  { t: 'SEASONAL', b: '#2f6a3a', f: '#fff', a: '#c9a24a' },
  { t: 'BACK TO SCHOOL', b: '#1d4f9a', f: '#fff', a: '#f2c21b' },
  { t: 'CLEARANCE', b: '#f2c21b', f: '#1c1c1e', a: '#c4221c' },
];
function drawEndcapSigns(ctx, rnd) {
  const [x0, y0] = cellXY(SIGN_CELL);
  ENDCAP_SIGNS.forEach((S, i) => {
    const y = y0 + i * 64;
    ctx.fillStyle = S.b; ctx.fillRect(x0, y, 256, 64);
    ctx.fillStyle = S.a; ctx.fillRect(x0, y + 4, 256, 4); ctx.fillRect(x0, y + 56, 256, 4);
    txt(ctx, S.t, x0 + 128, y + 33, 34, { color: S.f, maxW: 236, font: COND });
    for (let k = 0; k < 140; k++) { ctx.fillStyle = `rgba(${rnd() < 0.5 ? '0,0,0' : '255,255,255'},${0.05 + rnd() * 0.08})`; ctx.fillRect(x0 + rnd() * 256, y + rnd() * 64, 2, 2); }
    const gr = ctx.createLinearGradient(0, y, 0, y + 64); gr.addColorStop(0, 'rgba(60,50,30,0)'); gr.addColorStop(1, 'rgba(60,50,30,0.3)'); ctx.fillStyle = gr; ctx.fillRect(x0, y, 256, 64);
  });
}
function rectSign(i) { const [x, y] = cellXY(SIGN_CELL); return uvRect(x + 1, y + i * 64 + 1, 254, 62); }
function cellXY(i) { return [(i % COLS) * CELL, Math.floor(i / COLS) * CELL]; }
function labelAspect(p) {
  if (p.s === 'box' || p.s === 'bag' || p.s === 'jug') return [256, Math.round(256 * p.h / p.w)];
  const r = p.r, h = p.s === 'bottle' ? p.h * 0.55 : p.s === 'jar' ? p.h * 0.85 : p.s === 'tall' ? p.h * 0.78 : p.h;
  return [512, Math.max(60, Math.round(512 * h / (TAU * r)))];
}
function shelfAtlas(kind) {
  return cached(TEX, 'atlas|' + kind, () => {
    const c = makeCanvas(ATLAS_W, ATLAS_H);
    if (!c) return null;
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#888'; ctx.fillRect(0, 0, ATLAS_W, ATLAS_H);
    const rnd = rng(hashStr('atlas' + kind));
    CATALOG[kind].forEach((p, i) => {
      const [x, y] = cellXY(i);
      const [lw, lh] = labelAspect(p);
      ctx.save();
      ctx.beginPath(); ctx.rect(x, y, CELL, CELL); ctx.clip();
      ctx.translate(x, y);
      ctx.scale(CELL / lw, CELL / lh);
      if (p.s === 'roll') {
        noiseFill(ctx, lw, lh, rnd, p.L.b, 0.08, 400, 2);
      } else if (p.s === 'box' || p.s === 'bag' || p.s === 'jug') drawFront(ctx, lw, lh, p.L, rnd);
      else drawWrap(ctx, lw, lh, p.L, rnd);
      ctx.restore();
      // side strip: plain background colour on the cell's left edge
      ctx.fillStyle = p.L.b; ctx.fillRect(x, y + CELL * 0.3, 12, CELL * 0.6);
    });
    const [px, py] = cellXY(PAL_CELL);
    SOLIDS.forEach((s, i) => {
      const sx = px + (i % 4) * 64, sy = py + Math.floor(i / 4) * 64;
      ctx.fillStyle = s; ctx.fillRect(sx, sy, 64, 64);
      for (let k = 0; k < 120; k++) { ctx.fillStyle = rnd() < 0.5 ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.08)'; ctx.fillRect(sx + rnd() * 64, sy + rnd() * 64, 2, 2); }
    });
    drawEndcapSigns(ctx, rnd);
    // shelf stock sits back visually: about 25% less saturated (loot models keep full colour)
    ctx.save(); ctx.globalCompositeOperation = 'saturation'; ctx.globalAlpha = 0.28; ctx.fillStyle = '#808080'; ctx.fillRect(0, 0, ATLAS_W, ATLAS_H); ctx.restore();
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    t.anisotropy = 4;
    return t;
  });
}
function uvRect(px, py, pw, ph) { // canvas pixels -> [u0, v0, u1, v1] (canvas top = v 1)
  return [px / ATLAS_W, 1 - (py + ph) / ATLAS_H, (px + pw) / ATLAS_W, 1 - py / ATLAS_H];
}
function rectLabel(i) { const [x, y] = cellXY(i); return uvRect(x + 2, y + 2, CELL - 4, CELL - 4); }
function rectSide(i) { const [x, y] = cellXY(i); return uvRect(x + 3, y + CELL * 0.35, 6, CELL * 0.45); }
function rectSolid(name) {
  const i = SOLID_IX[name] ?? 0;
  const [x, y] = cellXY(PAL_CELL);
  return uvRect(x + (i % 4) * 64 + 12, y + Math.floor(i / 4) * 64 + 12, 40, 40);
}

// per-vertex face group of an indexed geometry (cached)
const VGROUP = new WeakMap();
function vertGroups(geo) {
  let vg = VGROUP.get(geo);
  if (vg) return vg;
  vg = new Uint8Array(geo.attributes.position.count);
  const idx = geo.index;
  for (const gr of geo.groups) for (let k = gr.start; k < gr.start + gr.count; k++) vg[idx ? idx.getX(k) : k] = gr.materialIndex;
  VGROUP.set(geo, vg);
  return vg;
}

class Merger {
  constructor(nb) { this.b = []; for (let i = 0; i < nb; i++) this.b.push({ p: [], n: [], u: [], i: [] }); }
  add(geo, m, rects, buckets) {
    if (this.root) m = new THREE.Matrix4().multiplyMatrices(this.root, m);
    const pos = geo.attributes.position, nor = geo.attributes.normal, uv = geo.attributes.uv, idx = geo.index;
    const vg = vertGroups(geo);
    const nm = new THREE.Matrix3().getNormalMatrix(m);
    const e = m.elements, ne = nm.elements;
    const remap = new Int32Array(pos.count);
    const vb = new Uint8Array(pos.count);
    for (let v = 0; v < pos.count; v++) {
      const gi = vg[v];
      const bk = buckets[gi] ?? buckets[0];
      const B = this.b[bk];
      vb[v] = bk;
      remap[v] = B.p.length / 3;
      const x = pos.getX(v), y = pos.getY(v), z = pos.getZ(v);
      B.p.push(e[0] * x + e[4] * y + e[8] * z + e[12], e[1] * x + e[5] * y + e[9] * z + e[13], e[2] * x + e[6] * y + e[10] * z + e[14]);
      const nx = nor.getX(v), ny = nor.getY(v), nz = nor.getZ(v);
      let ox = ne[0] * nx + ne[3] * ny + ne[6] * nz, oy = ne[1] * nx + ne[4] * ny + ne[7] * nz, oz = ne[2] * nx + ne[5] * ny + ne[8] * nz;
      const l = Math.hypot(ox, oy, oz) || 1;
      B.n.push(ox / l, oy / l, oz / l);
      const rc = rects[gi] ?? rects[0];
      B.u.push(rc[0] + uv.getX(v) * (rc[2] - rc[0]), rc[1] + uv.getY(v) * (rc[3] - rc[1]));
    }
    const tri = idx ? idx.count : pos.count;
    for (let k = 0; k < tri; k += 3) {
      const a = idx ? idx.getX(k) : k, b = idx ? idx.getX(k + 1) : k + 1, c = idx ? idx.getX(k + 2) : k + 2;
      this.b[vb[a]].i.push(remap[a], remap[b], remap[c]);
    }
  }
  meshes(mats) {
    const out = [];
    this.b.forEach((B, k) => {
      if (!B.i.length) return;
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.Float32BufferAttribute(B.p, 3));
      g.setAttribute('normal', new THREE.Float32BufferAttribute(B.n, 3));
      g.setAttribute('uv', new THREE.Float32BufferAttribute(B.u, 2));
      g.setIndex(B.p.length / 3 > 65535 ? new THREE.Uint32BufferAttribute(B.i, 1) : new THREE.Uint16BufferAttribute(B.i, 1));
      g.computeBoundingSphere();
      g.computeBoundingBox();
      const mesh = new THREE.Mesh(g, mats[k]);
      mesh.receiveShadow = true;
      out.push(mesh);
    });
    return out;
  }
}

// product template: list of parts {geo, local matrix, rects per group, bucket per group}
function productParts(kind, i) {
  return cached(GEO, `prod|${kind}|${i}`, () => {
    const p = CATALOG[kind][i];
    const L = rectLabel(i), S = rectSide(i);
    const sol = (n) => rectSolid(n);
    const gl = p.gl ? 1 : 0;
    const I = new THREE.Matrix4();
    const T = (x, y, z) => new THREE.Matrix4().makeTranslation(x, y, z);
    const parts = [];
    switch (p.s) {
      case 'can':
        parts.push({ geo: gCyl(p.r, p.r, p.h, 12), m: I, rects: [L, sol(p.cap || 'tin'), sol(p.cap || 'tin')], bk: [gl, 1, 1] });
        break;
      case 'tall':
        parts.push({ geo: gCyl(p.r, p.r, p.h * 0.78, 10), m: I, rects: [L, sol('tin'), sol('tin')], bk: [gl, 1, 1] });
        parts.push({ geo: gCyl(p.r * 0.94, p.r * 0.94, p.h * 0.22, 10), m: T(0, p.h * 0.78, 0), rects: [sol(p.cap || 'white'), sol(p.cap || 'white'), sol(p.cap || 'white')], bk: [1, 1, 1] });
        break;
      case 'box':
        parts.push({ geo: gBox(p.w, p.h, p.d), m: I, rects: [S, S, S, S, L, L], bk: [gl, gl, gl, gl, gl, gl] });
        break;
      case 'bag':
        parts.push({ geo: gPillow(p.w, p.h, p.d, 0.06, 4, 5), m: I, rects: [S, S, S, S, L, L], bk: [gl, gl, gl, gl, gl, gl] });
        break;
      case 'bottle': {
        const b = sol(p.body || 'white');
        parts.push({ geo: gCyl(p.r, p.r, p.h * 0.55, 10), m: T(0, p.h * 0.05, 0), rects: [L, b, b], bk: [1, 1, 1] });
        parts.push({ geo: gCyl(p.r, p.r * 0.95, p.h * 0.05, 10, true), m: I, rects: [b], bk: [1] });
        parts.push({ geo: gCyl(p.r * 0.38, p.r, p.h * 0.25, 10, true), m: T(0, p.h * 0.6, 0), rects: [b], bk: [1] });
        const c = sol(p.cap || 'white');
        parts.push({ geo: gCyl(p.r * 0.42, p.r * 0.42, p.h * 0.15, 8), m: T(0, p.h * 0.85, 0), rects: [c, c, c], bk: [1, 1, 1] });
        break;
      }
      case 'jar': {
        const b = sol(p.body || 'white'), c = sol(p.cap || 'white');
        parts.push({ geo: gCyl(p.r, p.r, p.h * 0.85, 10), m: I, rects: [L, b, b], bk: [gl, 1, 1] });
        parts.push({ geo: gCyl(p.r * 0.9, p.r * 0.9, p.h * 0.15, 10), m: T(0, p.h * 0.85, 0), rects: [c, c, c], bk: [1, 1, 1] });
        break;
      }
      case 'jug': {
        const b = sol(p.body || 'white'), c = sol(p.cap || 'white');
        parts.push({ geo: gBox(p.w, p.h * 0.8, p.d), m: I, rects: [b, b, b, b, L, L], bk: [1, 1, 1, 1, 0, 0] });
        parts.push({ geo: gCyl(p.w * 0.2, p.w * 0.42, p.h * 0.08, 8, true), m: T(-p.w * 0.15, p.h * 0.8, 0), rects: [b], bk: [1] });
        parts.push({ geo: gCyl(p.w * 0.2, p.w * 0.2, p.h * 0.12, 8), m: T(-p.w * 0.15, p.h * 0.88, 0), rects: [c, c, c], bk: [1, 1, 1] });
        break;
      }
      case 'cup': {
        const c = sol(p.cap || 'white');
        parts.push({ geo: gCyl(p.r, p.r * 0.76, p.h, 12), m: I, rects: [L, c, c], bk: [0, 1, 0] });
        break;
      }
      case 'roll': {
        const c = sol(p.cap || 'tin');
        parts.push({ geo: gCyl(p.r, p.r, p.h, 12), m: I, rects: [L, sol('card'), sol('card')], bk: [1, 0, 0] });
        parts.push({ geo: gCyl(p.r * 0.68, p.r * 0.68, 0.002, 10), m: T(0, p.h, 0), rects: [c, sol('dark'), sol('dark')], bk: [0, 0, 0] });
        break;
      }
    }
    const w = p.w ?? p.r * 2, d = p.d ?? p.r * 2;
    return { p, parts, w, h: p.h, d };
  });
}

function placeProduct(merger, tpl, x, y, z, yaw, tip, tipAxis = 0) {
  const m = new THREE.Matrix4().makeRotationY(yaw);
  if (tip) {
    const t = tipAxis ? new THREE.Matrix4().makeRotationX(tip) : new THREE.Matrix4().makeRotationZ(tip);
    m.multiply(t);
  }
  // keep the lowest corner on the surface
  let minY = Infinity;
  const v = new THREE.Vector3();
  for (const sx of [-1, 1]) for (const sy of [0, 1]) for (const sz of [-1, 1]) {
    v.set(sx * tpl.w / 2, sy * tpl.h, sz * tpl.d / 2).applyMatrix4(m);
    minY = Math.min(minY, v.y);
  }
  m.setPosition(x, y - minY, z);
  for (const part of tpl.parts) {
    const pm = new THREE.Matrix4().multiplyMatrices(m, part.m);
    merger.add(part.geo, pm, part.rects, part.bk);
  }
}

function shelfMats(kind) {
  const t = shelfAtlas(kind);
  return [
    mat('shelfMatte|' + kind, { map: t, color: SHELF_TINT, roughness: 0.78, metalness: 0 }),
    mat('shelfGloss|' + kind, { map: t, color: SHELF_TINT, roughness: 0.4, metalness: 0.2 }),
  ];
}

// Fill one face of a shelf unit with stock.
// Local frame: shelf runs along z from -length/2 to +length/2, the back is at x = 0 and the front
// edge at x = 0.4 (products face +x). `levels` are the y heights of the shelf boards.
// A looted shelf (low fill) also leaves some items on the floor in front of it (x 0.45 .. 1.3, y = 0).
function shelfTemplates(kind) {
  const cat = CATALOG[kind];
  const tpls = cat.map((_, i) => productParts(kind, i));
  const total = cat.reduce((s, p) => s + (p.w8 || 1), 0);
  return { cat, tpls, total };
}
// Stock shelf boards in the shelf frame (length along z, products face +x, depth BACK..FRONT).
// fill is roughly the share of facings still holding something. Returns {count, tipped}.
function stockLevels(merger, kind, r, length, levels, fill, FRONT = 0.385, BACK = 0.02, topClear = 0.42) {
  const { cat, tpls, total } = shelfTemplates(kind);
  const choose = (maxH, maxD) => {
    for (let tries = 0; tries < 12; tries++) {
      let k = r() * total, i = 0;
      while (k > (cat[i].w8 || 1)) { k -= cat[i].w8 || 1; i++; }
      if (tpls[i].h <= maxH && tpls[i].d <= maxD) return i;
    }
    let best = 0;
    tpls.forEach((t, i) => { if (t.h * t.d < tpls[best].h * tpls[best].d) best = i; });
    return tpls[best].h <= maxH ? best : -1;
  };
  const mess = 1 - fill;
  const pEmpty = mess * 0.45;                       // whole runs cleared out
  const q = Math.min(1, fill / (1 - pEmpty));        // depth share left in a run that still has stock
  const sorted = [...levels].sort((a, b) => a - b);
  let count = 0, tipped = 0;
  sorted.forEach((y, li) => {
    const clear = (li + 1 < sorted.length ? sorted[li + 1] - y : topClear) - 0.035;
    const gaps = [];
    let z = -length / 2 + 0.015;
    while (z < length / 2 - 0.05) {
      const pi = choose(clear, FRONT - BACK);
      if (pi < 0) break;
      const tpl = tpls[pi];
      const p = tpl.p;
      const runLen = 0.25 + r() * 0.45;
      const facings = Math.max(1, Math.round(runLen / (tpl.w + 0.004)));
      const runEmpty = r() < pEmpty;
      const depthSlots = Math.max(1, Math.min(p.wide ? 2 : 3, Math.floor((FRONT - BACK) / (tpl.d + 0.004))));
      const runStart = z;
      for (let f = 0; f < facings && z + tpl.w < length / 2 - 0.01; f++) {
        const zc = z + tpl.w / 2;
        z += tpl.w + 0.004 + (fill < 0.6 ? r() * 0.01 : 0);
        if (runEmpty && r() < 0.92) continue;
        // looters take from the front; what is left sits towards the back
        let k = fill > 0.92 ? depthSlots : Math.min(depthSlots, Math.max(0, Math.round(depthSlots * q * (0.45 + r() * 1.1) - 0.15)));
        if (k === 0) gaps.push(zc);
        for (let s = 0; s < k; s++) {
          const frontGap = fill > 0.85 ? 0 : (depthSlots - k) * (tpl.d + 0.004) * (0.3 + r() * 0.7);
          const xc = FRONT - tpl.d / 2 - (k - 1 - s) * (tpl.d + 0.004) - frontGap;
          let yaw = Math.PI / 2 + (r() - 0.5) * (0.04 + mess * 0.5);
          let tip = 0, axis = 0;
          if (s === k - 1 && r() < mess * 0.3) { tip = Math.PI / 2 * (r() < 0.5 ? 1 : -1); axis = r() < 0.5 ? 1 : 0; yaw += (r() - 0.5) * 1.2; tipped++; }
          else if (r() < mess * 0.1) yaw += (r() - 0.5) * 2.5;
          placeProduct(merger, tpl, Math.max(BACK + tpl.d / 2, xc), y, zc + (r() - 0.5) * mess * 0.02, yaw, tip, axis);
          count++;
          if (p.stack && !tip && fill > 0.45) {
            const layers = Math.min(p.stack + 1, Math.floor(clear / (tpl.h + 0.002)));
            for (let L2 = 1; L2 < layers; L2++) {
              if (r() > fill * 1.05) break;
              placeProduct(merger, tpl, Math.max(BACK + tpl.d / 2, xc) + (r() - 0.5) * 0.004, y + L2 * (tpl.h + 0.001), zc + (r() - 0.5) * 0.006, yaw + (r() - 0.5) * 0.08, 0);
              count++;
            }
          }
        }
      }
      if (runEmpty) for (let zz = runStart + 0.08; zz < z - 0.08; zz += 0.16) gaps.push(zz);
      z += r() < 0.15 + mess * 0.3 ? r() * 0.08 : 0.002;
    }
    // knocked-over stock lying in the gaps near the shelf edge
    const fallen = Math.round(mess * mess * length * 2.2 * (0.6 + r() * 0.8));
    for (let i = 0; i < fallen && gaps.length; i++) {
      const zc = gaps.splice(Math.floor(r() * gaps.length), 1)[0];
      const pi = choose(Math.min(clear, 0.3), FRONT - BACK);
      if (pi < 0) continue;
      const tpl = tpls[pi];
      const lie = Math.max(tpl.w, tpl.d, tpl.h);
      if (lie > FRONT - BACK + 0.06 && r() < 0.5) continue;
      const x = Math.min(FRONT - 0.05, Math.max(BACK + 0.06, FRONT - 0.04 - r() * 0.15));
      placeProduct(merger, tpl, x, y, zc + (r() - 0.5) * 0.05, r() * TAU, Math.PI / 2, r() < 0.5 ? 1 : 0);
      count++; tipped++;
    }
  });
  return { count, tipped };
}

// Fill one face of a shelf unit with stock.
// Local frame: shelf runs along z from -length/2 to +length/2, the back is at x = 0 and the front
// edge at x = 0.4 (products face +x). `levels` are the y heights of the shelf boards.
// A looted shelf (low fill) also leaves some items on the floor in front of it (x 0.45 .. 1.3, y = 0).
export function makeShelfFill(kind = 'grocery', length = 2, levels = [0.1, 0.5, 0.9, 1.3], fill = 0.7, seed = 0) {
  return squareOnly(() => shelfFill(kind, length, levels, fill, seed));
}
function shelfFill(kind, length, levels, fill, seed) {
  if (!CATALOG[kind]) kind = 'grocery';
  const r = rng(hashStr(kind) ^ Math.imul((seed | 0) + 7, 2654435761));
  fill = THREE.MathUtils.clamp(fill, 0, 1);
  const merger = new Merger(2);
  let { count, tipped } = stockLevels(merger, kind, r, length, levels, fill);
  const { tpls } = shelfTemplates(kind);
  // spill on the floor in front of the shelf
  const spill = Math.round((1 - fill) * length * (1 + r() * 1.2));
  for (let i = 0; i < spill; i++) {
    const tpl = tpls[Math.floor(r() * tpls.length)];
    if (tpl.h > 0.32) continue;
    placeProduct(merger, tpl, 0.45 + r() * 0.85, 0, (r() - 0.5) * (length - 0.2), r() * TAU, r() < 0.75 ? Math.PI / 2 : 0, r() < 0.5 ? 1 : 0);
    count++; tipped++;
  }
  const g = new THREE.Group();
  g.name = 'shelfFill:' + kind;
  const meshes = merger.meshes(shelfMats(kind));
  let tris = 0;
  for (const m of meshes) { g.add(m); tris += m.geometry.index.count / 3; }
  g.userData = { kind, items: count, fallen: tipped, triangles: tris, drawCalls: meshes.length };
  return g;
}

// End-of-run display: a gondola endcap unit with 3-4 stocked shelves and a generic sign on top.
// Origin at the bottom centre, facing +z, width along x, depth along z (back at -depth/2).
// Unit, stock and sign all share the kind's shelf atlas: 2 draw calls (matte + gloss).
// opts.sign: 0 SALE, 1 SEASONAL, 2 BACK TO SCHOOL, 3 CLEARANCE (default random); opts.unit = false
// leaves out the metal unit (stock and sign only).
export function makeEndcap(kind = 'grocery', width = 1.2, height = 1.9, fill = 0.6, seed = 0, depth = 0.55, opts = {}) {
  return squareOnly(() => endcap(kind, width, height, fill, seed, depth, opts));
}
function endcap(kind, width, height, fill, seed, depth, opts) {
  if (!CATALOG[kind]) kind = 'grocery';
  const r = rng(hashStr('endcap' + kind) ^ Math.imul((seed | 0) + 13, 2654435761));
  fill = THREE.MathUtils.clamp(fill, 0, 1);
  const W = width, D = depth, H = height;
  const merger = new Merger(2);
  const S = (n) => rectSolid(n);
  const box = (x0, x1, y0, y1, z0, z1, rects, bk = 0) => {
    const m = new THREE.Matrix4().makeTranslation((x0 + x1) / 2, y0, (z0 + z1) / 2);
    merger.add(gBox(Math.max(0.002, x1 - x0), Math.max(0.002, y1 - y0), Math.max(0.002, z1 - z0)), m, Array.isArray(rects) ? rects : [rects], [bk]);
  };
  const signH = Math.min(0.26, H * 0.14), unitTop = H - signH - 0.06;
  const nShelves = unitTop > 1.55 ? 4 : 3;
  const base = 0.12, top = unitTop - 0.32;
  const levels = [];
  for (let i = 0; i < nShelves; i++) levels.push(base + (top - base) * i / (nShelves - 1));
  if (opts.unit !== false) {
    const grey = S('tin'), dark = S('dark'), white = S('white');
    box(-W / 2, W / 2, 0, base, -D / 2 + 0.03, D / 2, [dark]);                       // kick base
    box(-W / 2, W / 2, 0, unitTop, -D / 2, -D / 2 + 0.03, [grey]);                    // back panel
    for (const sx of [-1, 1]) box(sx < 0 ? -W / 2 : W / 2 - 0.025, sx < 0 ? -W / 2 + 0.025 : W / 2, 0, unitTop, -D / 2, D / 2, [grey]);
    for (const y of levels.slice(1)) {
      box(-W / 2 + 0.025, W / 2 - 0.025, y - 0.02, y, -D / 2 + 0.03, D / 2 - 0.01, [grey]);
      box(-W / 2 + 0.025, W / 2 - 0.025, y - 0.045, y, D / 2 - 0.012, D / 2, [white]);  // price strip
    }
    box(-W / 2, W / 2, unitTop - 0.03, unitTop, -D / 2, D / 2, [grey]);              // top cap
  }
  // sign on two posts above the unit, kept inside the footprint
  const si = opts.sign ?? Math.floor(r() * ENDCAP_SIGNS.length);
  const sw = Math.min(W - 0.06, signH * 4), sy0 = H - signH;
  for (const sx of [-1, 1]) box(sx * sw * 0.3 - 0.012, sx * sw * 0.3 + 0.012, unitTop, sy0 + 0.02, -0.012, 0.012, [S('tin')], 1);
  const tilt = (r() - 0.5) * 0.12 * (1 - fill);
  const sm = new THREE.Matrix4().makeTranslation(0, sy0, 0).multiply(new THREE.Matrix4().makeRotationZ(tilt));
  const sr = rectSign(si);
  merger.add(gBox(sw, signH * 0.98, 0.012), sm, [S('white'), S('white'), S('white'), S('white'), sr, sr], [0]);
  // stock: reuse the shelf stocking in the shelf frame (products face +x), rotated to face +z
  merger.root = new THREE.Matrix4().makeRotationY(-Math.PI / 2);
  const res = stockLevels(merger, kind, r, W - 0.07, levels, fill, D / 2 - 0.015, -D / 2 + 0.035, unitTop - levels[levels.length - 1]);
  merger.root = null;
  const g = new THREE.Group();
  g.name = 'endcap:' + kind;
  const meshes = merger.meshes(shelfMats(kind));
  let tris = 0;
  for (const m of meshes) { m.castShadow = true; g.add(m); tris += m.geometry.index.count / 3; }
  g.userData = { kind, w: W, d: D, h: H, levels, sign: ENDCAP_SIGNS[si].t, items: res.count, fallen: res.tipped, triangles: tris, drawCalls: meshes.length };
  return g;
}
export const SHELF_KINDS = Object.keys(CATALOG);

// =====================================================================
// Decoration props
// =====================================================================

// geometry from flat quads [a, b, c, d] (counter-clockwise when seen from the front), uv in meters * k
function gQuads(key, quads, k = 1) {
  return cached(GEO, 'quads' + key, () => {
    const pos = [], uv = [];
    const A = new THREE.Vector3(), B = new THREE.Vector3(), C = new THREE.Vector3(), D = new THREE.Vector3();
    for (const q of quads) {
      A.fromArray(q[0]); B.fromArray(q[1]); C.fromArray(q[2]); D.fromArray(q[3]);
      const w = A.distanceTo(B) * k, h = A.distanceTo(D) * k;
      pos.push(...q[0], ...q[1], ...q[2], ...q[0], ...q[2], ...q[3]);
      uv.push(0, 0, w, 0, w, h, 0, 0, w, h, 0, h);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    g.computeVertexNormals();
    return g;
  });
}
function wireTex() {
  return ctex('wiregrid', 64, 64, (c, w, h) => {
    c.clearRect(0, 0, w, h);
    c.fillStyle = '#d4d8dc';
    c.fillRect(0, 0, w, 7); c.fillRect(0, 32, w, 7);
    c.fillRect(0, 0, 7, h); c.fillRect(32, 0, 7, h);
    c.fillStyle = 'rgba(255,255,255,0.6)';
    c.fillRect(0, 2, w, 2); c.fillRect(0, 34, w, 2); c.fillRect(2, 0, 2, h); c.fillRect(34, 0, 2, h);
  }, { repeat: [1, 1] });
}
function wireMat() {
  return mat('wiremat', { map: wireTex(), color: 0xdfe3e6, roughness: 0.35, metalness: 0.45, alphaTest: 0.5, side: THREE.DoubleSide, transparent: false });
}
function tubePath(g, key, pts, r, material, closed = false, seg = 24) {
  return add(g, gTube(key, pts, r, seg, 6, closed), material);
}
// closed loop through polygon corners with small rounded corners (for tube frames)
function roundLoop(corners, r = 0.04) {
  const out = [];
  const n = corners.length;
  const P = corners.map((c) => new THREE.Vector3(...c));
  for (let i = 0; i < n; i++) {
    const a = P[(i + n - 1) % n], b = P[i], c = P[(i + 1) % n];
    const ia = a.clone().sub(b).normalize().multiplyScalar(r).add(b);
    const ic = c.clone().sub(b).normalize().multiplyScalar(r).add(b);
    const mid = ia.clone().add(ic).multiplyScalar(0.5).lerp(b, 0.45);
    out.push(ia.toArray(), mid.toArray(), ic.toArray());
  }
  return out;
}
function caster(g, x, z, r = 0.05) {
  add(g, gCyl(r, r, 0.03, 10), M.rubber, x + 0.015, r, z, 0, 0, Math.PI / 2);
  add(g, gCyl(r * 0.5, r * 0.5, 0.032, 8), M.steel, x + 0.016, r, z, 0, 0, Math.PI / 2);
  add(g, gBox(0.012, r * 1.4, 0.045), M.steel, x + 0.018, r * 0.9, z);
  add(g, gBox(0.012, r * 1.4, 0.045), M.steel, x - 0.018, r * 0.9, z);
  add(g, gBox(0.05, 0.012, 0.05), M.steel, x, r * 2.2, z);
}
// wheel lying in the y-z plane (axle along x)
function wheel(g, x, y, z, R, tire, rimMat, spokes = 0) {
  add(g, gTorus(R - tire, tire, 5, 24), M.rubber, x, y, z, 0, Math.PI / 2, 0);
  add(g, gTorus(R - tire * 2.2, tire * 0.4, 3, 24), rimMat, x, y, z, 0, Math.PI / 2, 0);
  add(g, gCyl(0.025, 0.025, 0.05, 10), rimMat, x - 0.025, y, z, 0, 0, Math.PI / 2);
  for (let i = 0; i < spokes; i++) add(g, gCyl(0.0025, 0.0025, (R - tire * 2.2) * 2, 4), rimMat, x, y, z, i * Math.PI / spokes, 0, 0, 1, 1, 1);
}
function printedSign(key, w, h, draw) { return tmat(ctex(key, w, h, draw), 0.5); }

// One shared carton atlas (4 x 4 cells of 256 px): 0-7 printed sides, 8 plain board,
// 9 light board (flaps), 10 taped top, 11 dark inside. Every carton uses the same material.
const CARTON_LABELS = ['FRAGILE', 'CANNED GOODS', 'PAPER TOWELS', 'BOTTLED WATER', 'SUPPLIES', 'HANDLE WITH CARE', 'PRODUCE', 'DRY GOODS'];
function cartonMat() {
  return mat('cartonAtlas', { map: ctex('cartonAtlas', 1024, 1024, (c, w, h, r) => {
    const cell = (i, draw) => { c.save(); c.translate((i % 4) * 256, Math.floor(i / 4) * 256); c.beginPath(); c.rect(0, 0, 256, 256); c.clip(); draw(); c.restore(); };
    CARTON_LABELS.forEach((lb, i) => cell(i, () => { c.scale(0.5, 0.5); drawCarton(c, 512, 512, r, lb, i % 4); }));
    cell(8, () => { noiseFill(c, 256, 256, r, '#a9824f', 0.12, 3000, 2); c.strokeStyle = 'rgba(80,55,25,0.18)'; for (let y = 0; y < 256; y += 4 + r() * 3) { c.beginPath(); c.moveTo(0, y); c.lineTo(256, y); c.stroke(); } grime(c, 256, 256, r, 0.6); });
    cell(9, () => { noiseFill(c, 256, 256, r, '#b99868', 0.12, 3000, 2); grime(c, 256, 256, r, 0.6); });
    cell(10, () => {
      noiseFill(c, 256, 256, r, '#a9824f', 0.1, 2500, 2);
      c.fillStyle = 'rgba(40,25,10,0.5)'; c.fillRect(0, 127, 256, 2);
      c.fillStyle = 'rgba(200,170,110,0.8)'; c.fillRect(0, 107, 256, 41);
      c.fillStyle = 'rgba(255,255,255,0.18)'; c.fillRect(0, 113, 256, 3);
      grime(c, 256, 256, r, 1);
    });
    cell(11, () => { c.fillStyle = '#2a2018'; c.fillRect(0, 0, 256, 256); grime(c, 256, 256, r, 0.5); });
  }), roughness: 0.9 });
}
function cartonCell(i) { const x = i % 4, y = Math.floor(i / 4); return [x / 4 + 0.002, 1 - (y + 1) / 4 + 0.002, (x + 1) / 4 - 0.002, 1 - y / 4 - 0.002]; }
// box geometry (base at y = 0) with each face mapped into an atlas cell
function gCellBox(w, h, d, cells) {
  const key = `cbox${w.toFixed(3)},${h.toFixed(3)},${d.toFixed(3)},${cells.join('.')}`;
  return cached(GEO, key, () => {
    const g = new THREE.BoxGeometry(w, h, d).translate(0, h / 2, 0);
    const uv = g.attributes.uv;
    for (let f = 0; f < 6; f++) {
      const rc = cartonCell(cells[f]);
      for (let k = 0; k < 4; k++) { const n = f * 4 + k; uv.setXY(n, rc[0] + uv.getX(n) * (rc[2] - rc[0]), rc[1] + uv.getY(n) * (rc[3] - rc[1])); }
    }
    g.clearGroups();
    return g;
  });
}
function carton(g, w, h, d, r, open) {
  const li = Math.floor(r() * CARTON_LABELS.length);
  const q = (v) => Math.round(v * 50) / 50; // 2 cm steps keep the geometry cache small
  add(g, gCellBox(q(w), q(h), q(d), [li, (li + 3) % 8, open ? 11 : 10, 8, li, (li + 5) % 8]), cartonMat());
}


// copy of a cached geometry with the UVs of chosen face groups squeezed into atlas rects ([u0, v0, u1, v1]; null keeps a group as is)
function gRemap(base, key, rects) {
  return cached(GEO, 'remap' + key, () => {
    const g = base.clone();
    const uv = g.attributes.uv, idx = g.index;
    const groups = g.groups.length ? g.groups : [{ start: 0, count: idx ? idx.count : uv.count, materialIndex: 0 }];
    const done = new Uint8Array(uv.count);
    for (const gr of groups) {
      const rc = rects[gr.materialIndex] ?? (gr.materialIndex === 0 ? rects[0] : null);
      if (!rc) continue;
      for (let k = gr.start; k < gr.start + gr.count; k++) {
        const v = idx ? idx.getX(k) : k;
        if (done[v]) continue; done[v] = 1;
        uv.setXY(v, rc[0] + uv.getX(v) * (rc[2] - rc[0]), rc[1] + uv.getY(v) * (rc[3] - rc[1]));
      }
    }
    return g;
  });
}
// shared litter atlas: can label, soda label, snack wrapper (rows of a 512 x 512 canvas)
function litterMat() {
  return tmat(ctex('litteratlas', 512, 512, (c, w, h, r) => {
    c.save(); drawWrap(c, 512, 170, CAN_LABELS[0], r); c.restore();
    c.save(); c.translate(0, 170); drawWrap(c, 512, 170, { t: 'COLA', s: 'CLASSIC', n: '12 FL OZ', b: '#a8141a', f: '#fff', a: '#5a0a0a', p: 'bubble' }, r); c.restore();
    c.save(); c.translate(0, 340); c.scale(4, 172 / 160); drawFront(c, 128, 160, { t: 'CHIPS', b: '#f2c21b', f: '#c41e1e', a: '#c41e1e', p: 'chip' }, r); c.restore();
    grime(c, w, h, r, 1.5);
  }), 0.45, 0.15);
}
const LITTER_ROWS = [[0, 1 - 170 / 512, 1, 1], [0, 1 - 340 / 512, 1, 1 - 170 / 512], [0, 0, 1, 1 - 340 / 512]];

const PROP_BUILDERS = {
  shopping_cart(g, r) {
    const wm = wireMat();
    const frame = M.steel;
    const bt = [[-0.27, 1.0, 0.45], [0.27, 1.0, 0.45], [0.25, 0.98, -0.45], [-0.25, 0.98, -0.45]];
    const bb = [[-0.23, 0.55, 0.38], [0.23, 0.55, 0.38], [0.19, 0.6, -0.36], [-0.19, 0.6, -0.36]];
    const quads = [
      [bb[0], bb[3], bt[3], bt[0]], // left
      [bb[2], bb[1], bt[1], bt[2]], // right
      [bb[3], bb[2], bt[2], bt[3]], // front
      [bb[1], bb[0], bt[0], bt[1]], // back gate
      [bb[0], bb[1], bb[2], bb[3]], // floor
      // lower tray
      [[-0.22, 0.16, 0.38], [0.22, 0.16, 0.38], [0.2, 0.16, -0.36], [-0.2, 0.16, -0.36]],
    ];
    add(g, gQuads('cart', quads, 30), wm);
    tubePath(g, 'cartrim2', roundLoop(bt, 0.04), 0.008, frame, true, 60);
    tubePath(g, 'cartbot2', roundLoop(bb, 0.03), 0.006, frame, true, 60);
    // base frame and uprights
    for (const s of [-1, 1]) {
      tubePath(g, 'cartbase' + s, [[s * 0.2, 0.13, -0.4], [s * 0.22, 0.13, 0.1], [s * 0.24, 0.14, 0.42], [s * 0.25, 0.5, 0.45], [s * 0.27, 0.98, 0.47]], 0.012, frame, false, 20);
      tubePath(g, 'cartstrut' + s, [[s * 0.19, 0.6, -0.36], [s * 0.2, 0.14, -0.36]], 0.009, frame, false, 2);
    }
    // handle
    const red = col(0xc4221c, 0.45);
    add(g, gCyl(0.016, 0.016, 0.58, 12), red, -0.29, 1.03, 0.5, 0, 0, -Math.PI / 2);
    for (const s of [-1, 1]) add(g, gCyl(0.008, 0.008, 0.06, 6), frame, s * 0.27, 1.0, 0.485, 0.7, 0, 0);
    add(g, gBox(0.3, 0.06, 0.004), red, 0, 0.88, -0.455);
    for (const [x, z] of [[-0.2, -0.38], [0.2, -0.38], [-0.22, 0.4], [0.22, 0.4]]) caster(g, x, z, 0.055);
    if (r() < 0.4) { // tipped or turned
      g.rotation.y = r() * TAU;
    }
  },
  basket(g, r) {
    const color = pick(r, ['#c4221c', '#1d4f9a', '#2f7a32']);
    const t = ctex('basketholes' + color, 64, 64, (c, w, h) => {
      c.fillStyle = color; c.fillRect(0, 0, w, h);
      c.clearRect(8, 10, 20, 12); c.clearRect(36, 10, 20, 12); c.clearRect(8, 40, 20, 12); c.clearRect(36, 40, 20, 12);
    }, { repeat: [1, 1] });
    const m = mat('basket' + color, { map: t, roughness: 0.5, alphaTest: 0.5, side: THREE.DoubleSide });
    const top = [[-0.22, 0.22, 0.16], [0.22, 0.22, 0.16], [0.22, 0.22, -0.16], [-0.22, 0.22, -0.16]];
    const bot = [[-0.19, 0.0, 0.13], [0.19, 0.0, 0.13], [0.19, 0.0, -0.13], [-0.19, 0.0, -0.13]];
    add(g, gQuads('basket', [[bot[0], bot[1], top[1], top[0]], [bot[1], bot[2], top[2], top[1]], [bot[2], bot[3], top[3], top[2]], [bot[3], bot[0], top[0], top[3]]], 12), m);
    const sr = [0.01, 0.02, 0.09, 0.98]; // solid strip of the hole tile
    add(g, gRemap(gBox(0.38, 0.01, 0.26), 'basketbottom', [sr, sr, sr, sr, sr, sr]), [m, m, m, m, m, m]);
    add(g, gRemap(gTube('basketrim2', roundLoop(top, 0.03), 0.01, 24, 6, true), 'basketrim', [sr]), m);
    for (const s of [-1, 1]) tubePath(g, 'baskethandle' + s, [[-0.2, 0.22, s * 0.16], [-0.12, 0.36, s * 0.06], [0.12, 0.36, s * 0.06], [0.2, 0.22, s * 0.16]], 0.009, M.blackPl, false, 16);
  },
  cardboard_box(g, r) {
    const w = 0.3 + r() * 0.3, h = 0.22 + r() * 0.25, d = 0.25 + r() * 0.2;
    const open = r() < 0.5;
    carton(g, w, h, d, r, open);
    if (open) {
      const fl = cartonMat();
      const flap = (x, z, ww, dd, ox, oz, rx, rz) => {
        const f = new THREE.Group();
        add(f, gCellBox(+ww.toFixed(2), 0.004, +dd.toFixed(2), [9, 9, 9, 9, 9, 9]), fl, ox, 0, oz);
        f.position.set(x, h, z); f.rotation.set(rx, 0, rz);
        g.add(f);
      };
      flap(0, d / 2, w, d / 2, 0, d / 4, (r() - 0.25) * 1.5, 0);
      flap(0, -d / 2, w, d / 2, 0, -d / 4, -(r() - 0.25) * 1.5, 0);
      flap(w / 2, 0, w / 2, d, w / 4, 0, 0, -(r() - 0.25) * 1.5);
      flap(-w / 2, 0, w / 2, d, -w / 4, 0, 0, (r() - 0.25) * 1.5);
    }
  },
  box_stack(g, r) {
    const cols = 1 + Math.floor(r() * 2);
    for (let c = 0; c < cols; c++) {
      let y = 0;
      const n = 2 + Math.floor(r() * 3);
      const w = 0.4 + r() * 0.15, d = 0.32 + r() * 0.1;
      for (let i = 0; i < n; i++) {
        const h = 0.25 + r() * 0.15;
        const b = new THREE.Group();
        carton(b, w * (0.9 + r() * 0.1), h, d * (0.9 + r() * 0.1), r, false);
        b.position.set(c * 0.6 + (r() - 0.5) * 0.06, y, (r() - 0.5) * 0.06);
        b.rotation.y = (r() - 0.5) * 0.25;
        g.add(b);
        y += h;
      }
    }
    if (r() < 0.5) { // one box fell off
      const b = new THREE.Group();
      carton(b, 0.4, 0.3, 0.3, r, false);
      b.position.set(-0.55, 0.2, 0.3); b.rotation.set(Math.PI / 2, r() * 2, 0);
      g.add(b);
    }
  },
  pallet(g) {
    const w = tmat(texWood('#b48a5a', '#7a5a35', 'pallet'), 0.9);
    for (let i = 0; i < 7; i++) add(g, gBox(1.2, 0.02, 0.1), w, 0, 0.12, -0.45 + i * 0.15);
    for (const z of [-0.45, 0, 0.45]) add(g, gBox(1.2, 0.1, 0.1), w, 0, 0.02, z, 0, 0, 0);
    for (let i = 0; i < 3; i++) add(g, gBox(0.1, 0.02, 1.0), w, -0.55 + i * 0.55, 0, 0);
  },
  trash_bag(g, r) {
    const v = Math.floor(r() * 4);
    const geo = cached(GEO, 'trashbag' + v, () => {
      const s = new THREE.SphereGeometry(0.28, 14, 10);
      const p = s.attributes.position;
      const rr = rng(77 + v);
      const bumps = Array.from({ length: 6 }, () => [new THREE.Vector3(rr() - 0.5, rr() - 0.5, rr() - 0.5).normalize(), 0.03 + rr() * 0.05]);
      const q = new THREE.Vector3();
      for (let i = 0; i < p.count; i++) {
        q.set(p.getX(i), p.getY(i), p.getZ(i));
        const n = q.clone().normalize();
        let d = 0;
        for (const [b, a] of bumps) d += Math.max(0, n.dot(b) - 0.6) * a * 3;
        d += (rr() - 0.5) * 0.015;
        q.addScaledVector(n, d);
        q.y *= 0.8;
        if (q.y < -0.15) q.y = -0.15 + (q.y + 0.15) * 0.15;
        p.setXYZ(i, q.x * (1 + v * 0.05), q.y + 0.18, q.z);
      }
      s.computeVertexNormals();
      return s;
    });
    const color = pick(r, [0x111214, 0x111214, 0x1f3a1f]);
    const m = col(color, 0.3, 0.1);
    add(g, geo, m);
    add(g, gCyl(0.02, 0.06, 0.08, 8), m, 0, 0.38 + v * 0.0, 0);
    add(g, gSphere(0.03, 8, 6), m, 0, 0.47, 0);
    add(g, gCyl(0.005, 0.04, 0.1, 6), m, 0.04, 0.47, 0, 0, 0, -1.1, 1, 1, 0.3);
    add(g, gCyl(0.005, 0.04, 0.1, 6), m, -0.04, 0.47, 0, 0, 0, 1.1, 1, 1, 0.3);
  },
  trash_pile(g, r) {
    const n = 2 + Math.floor(r() * 3);
    for (let i = 0; i < n; i++) {
      const b = new THREE.Group();
      PROP_BUILDERS.trash_bag(b, rng(Math.floor(r() * 1e9)));
      const a = r() * TAU, d = i === 0 ? 0 : 0.35 + r() * 0.2;
      b.position.set(Math.cos(a) * d, 0, Math.sin(a) * d);
      b.rotation.set((r() - 0.5) * 0.4, r() * TAU, (r() - 0.5) * 0.4);
      b.scale.setScalar(0.8 + r() * 0.4);
      g.add(b);
    }
    // crushed cans, wrappers, flattened box and loose paper
    const lit = litterMat();
    for (let i = 0; i < 7; i++) {
      const a = r() * TAU, d = 0.4 + r() * 0.6;
      const k = i % 3;
      if (k === 2) add(g, gRemap(gPillow(0.12, 0.16, 0.02, 0.06, 4, 5), 'litwrap', [LITTER_ROWS[2]]), lit, Math.cos(a) * d, 0.01, Math.sin(a) * d, -Math.PI / 2, 0, r() * 3);
      else add(g, gRemap(gCyl(k ? 0.033 : 0.038, k ? 0.033 : 0.038, k ? 0.122 : 0.11, 10), 'litcan' + k, [LITTER_ROWS[k], null, null]), [lit, M.tin, M.tin], Math.cos(a) * d, k ? 0.033 : 0.038, Math.sin(a) * d, Math.PI / 2, 0, r() * TAU, 1, r() < 0.5 ? 0.6 : 1, 1);
    }
    add(g, gCellBox(0.5, 0.008, 0.4, [8, 8, 2, 8, 8, 8]), cartonMat(), -0.6, 0.004, 0.4, 0, r() * 2, 0.05);
    const p = makeProp('paper_scatter', Math.floor(r() * 1000));
    p.scale.setScalar(0.6);
    g.add(p);
  },
  register(g) {
    // countertop checkout terminal; every part maps into one shared 512 x 256 atlas (1 material)
    const A = tmat(ctex('registeratlas', 512, 256, (c, w, h, rr) => {
      c.fillStyle = '#0c0f12'; c.fillRect(0, 0, 256, 192); // screen
      c.fillStyle = 'rgba(120,140,160,0.12)';
      for (let i = 0; i < 6; i++) c.fillRect(12, 14 + i * 26, 140, 16);
      for (let i = 0; i < 8; i++) c.fillRect(169 + (i % 2) * 40, 14 + Math.floor(i / 2) * 40, 34, 32);
      c.fillStyle = 'rgba(255,255,255,0.05)'; c.beginPath(); c.moveTo(0, 0); c.lineTo(128, 0); c.lineTo(0, 134); c.fill();
      c.fillStyle = '#2a2b2e'; c.fillRect(256, 0, 256, 64); c.fillStyle = '#111'; c.fillRect(264, 6, 240, 2); c.fillRect(364, 32, 40, 6); c.fillStyle = '#888'; c.beginPath(); c.arc(482, 32, 6, 0, TAU); c.fill(); // drawer
      c.fillStyle = '#333'; c.fillRect(256, 64, 256, 96); for (let y = 0; y < 4; y++) for (let x = 0; x < 12; x++) { c.fillStyle = (x > 8 && y < 3) ? '#5a5a5a' : '#cfcfcf'; c.fillRect(262 + x * 20.5, 70 + y * 22, 17, 18); } // keys
      c.fillStyle = '#2a2b2e'; c.fillRect(256, 160, 64, 96); c.fillStyle = '#dcdcd8'; c.fillRect(320, 160, 64, 96); c.fillStyle = '#f0ece2'; c.fillRect(384, 160, 64, 96); c.fillStyle = '#14181c'; c.fillRect(448, 160, 64, 96);
      c.fillStyle = '#2a2b2e'; c.fillRect(0, 192, 256, 64);
      grime(c, w, h, rr, 1.5);
    }), 0.45, 0.05);
    const U = (x, y, ww, hh) => [x / 512, 1 - (y + hh) / 256, (x + ww) / 512, 1 - y / 256];
    const dk = U(262, 166, 52, 84), grey = U(326, 166, 52, 84), paper = U(390, 166, 52, 84), glass = U(454, 166, 52, 84);
    const scr = U(0, 0, 256, 192), drw = U(256, 0, 256, 64), keys = U(256, 64, 256, 96);
    const AA = [A, A, A, A, A, A];
    add(g, gRemap(gBox(0.44, 0.1, 0.42), 'regbase', [dk, dk, dk, dk, drw, dk]), AA, 0, 0, 0);
    add(g, gRemap(gCyl(0.025, 0.04, 0.2, 10), 'regpole', [dk, dk, dk]), AA, 0.0, 0.1, -0.05);
    const head = new THREE.Group();
    add(head, gRemap(gRBox(0.38, 0.28, 0.05, 0.012), 'reghead', [dk, dk, dk, dk, scr, dk]), AA);
    head.position.set(0, 0.28, -0.05); head.rotation.x = -0.25;
    g.add(head);
    add(g, gRemap(gRBox(0.3, 0.03, 0.12, 0.008), 'regkeys', [keys, keys, keys, keys, keys, keys]), AA, 0, 0.1, 0.13, 0.15, 0, 0);
    add(g, gRemap(gRBox(0.09, 0.05, 0.14, 0.01), 'regreader', [dk, dk, dk, dk, dk, dk]), AA, 0.3, 0, 0.1, 0.4, -0.3, 0);
    add(g, gRemap(gBox(0.07, 0.001, 0.06), 'regrscreen', [glass, glass, glass, glass, glass, glass]), AA, 0.3, 0.052, 0.095, 0.4, -0.3, 0);
    add(g, gRemap(gRBox(0.15, 0.13, 0.18, 0.02), 'regprinter', [grey, grey, grey, grey, grey, grey]), AA, -0.3, 0, -0.02);
    add(g, gRemap(gBox(0.08, 0.001, 0.12), 'regpaper', [paper, paper, paper, paper, paper, paper]), AA, -0.3, 0.135, 0.11, -0.5, 0, 0);
  },
  price_strip(g, r) {
    const t = ctex('pricestrip', 1024, 48, (c, w, h, rr) => {
      c.fillStyle = '#e8e6e0'; c.fillRect(0, 0, w, h);
      let x = 6;
      while (x < w - 60) {
        const tw = 70 + Math.floor(rr() * 40);
        const sale = rr() < 0.2;
        c.fillStyle = sale ? '#f2c21b' : '#ffffff'; c.fillRect(x, 4, tw, h - 8);
        txt(c, `$${(rr() * 9 + 0.5).toFixed(2)}`, x + tw * 0.68, h * 0.45, 18, { color: sale ? '#c41e1e' : '#111', maxW: tw * 0.6 });
        finePrint(c, x + 4, 8, tw * 0.35, 3, 6, rr, '#444');
        c.fillStyle = '#000'; for (let k = 0; k < 14; k++) if (rr() < 0.6) c.fillRect(x + 4 + k * 2, h - 14, 1, 7);
        x += tw + 10 + Math.floor(rr() * 60);
      }
      grime(c, w, h, rr, 0.6);
    });
    add(g, gBox(0.012, 0.04, 1.0), [tmat(t, 0.5), col(0xcfcfcf, 0.6), col(0xcfcfcf, 0.6), col(0xcfcfcf, 0.6), col(0xcfcfcf, 0.6), col(0xcfcfcf, 0.6)]);
    // a couple of tags hanging off or missing
    if (r() < 0.6) add(g, gBox(0.002, 0.035, 0.07), M.paper, 0.012, -0.02, (r() - 0.5) * 0.8, 0, 0, 0.6);
  },
  chair(g, r) {
    const w = tmat(texWood(pick(r, ['#b98c5a', '#7a5032', '#d0b08a']), '#5a3a20', 'chair'), 0.6);
    add(g, gRBox(0.44, 0.04, 0.42, 0.01), w, 0, 0.43, 0);
    for (const [x, z] of [[-0.19, -0.18], [0.19, -0.18], [-0.19, 0.18], [0.19, 0.18]]) add(g, gCyl(0.018, 0.015, 0.43, 8), w, x, 0, z);
    for (const x of [-0.19, 0.19]) add(g, gCyl(0.018, 0.018, 0.48, 8), w, x, 0.45, -0.19, -0.08, 0, 0);
    add(g, gRBox(0.44, 0.08, 0.025, 0.01), w, 0, 0.87, -0.23, -0.08, 0, 0);
    for (let i = 0; i < 3; i++) add(g, gCyl(0.01, 0.01, 0.38, 6), w, -0.1 + i * 0.1, 0.47, -0.205, -0.08, 0, 0);
    for (const z of [-0.18, 0.18]) add(g, gCyl(0.01, 0.01, 0.38, 6), w, 0.19, 0.15, z, 0, 0, Math.PI / 2);
    if (r() < 0.3) { g.rotation.z = Math.PI / 2; g.position.y = 0.22; }
  },
  office_chair(g, r) {
    const fab = tmat(texNylon(pick(r, ['#2a2a2c', '#22304a', '#3a2a2a']), 'office'), 0.95);
    const blk = M.blackPl;
    for (let i = 0; i < 5; i++) {
      const a = i * TAU / 5;
      const leg = add(g, gBox(0.3, 0.03, 0.045), blk, Math.cos(a) * 0.15, 0.06, Math.sin(a) * 0.15, 0, -a, 0);
      leg.rotation.z = 0;
      add(g, gSphere(0.028, 6, 4), blk, Math.cos(a) * 0.3, 0.028, Math.sin(a) * 0.3);
    }
    add(g, gCyl(0.03, 0.03, 0.32, 10), M.chrome, 0, 0.08, 0);
    add(g, gCyl(0.05, 0.05, 0.08, 10), blk, 0, 0.06, 0);
    add(g, gRBox(0.5, 0.08, 0.48, 0.035), fab, 0, 0.42, 0);
    add(g, gBox(0.05, 0.3, 0.03), blk, 0, 0.45, -0.25, -0.1, 0, 0);
    add(g, gRBox(0.46, 0.55, 0.07, 0.035), fab, 0, 0.56, -0.29, -0.12, 0, 0);
    for (const s of [-1, 1]) { add(g, gBox(0.03, 0.18, 0.03), blk, s * 0.24, 0.45, 0, 0, 0, 0); add(g, gRBox(0.06, 0.03, 0.24, 0.01), blk, s * 0.24, 0.63, 0.0); }
    g.rotation.y = r() * TAU;
  },
  ceiling_tile(g, r) {
    const t = tmat(ctex('ceiltile', 256, 256, (c, w, h, rr) => {
      noiseFill(c, w, h, rr, '#e6e3da', 0.06, 2500, 2);
      c.fillStyle = 'rgba(90,85,75,0.35)';
      for (let i = 0; i < 900; i++) { c.beginPath(); c.ellipse(rr() * w, rr() * h, 1 + rr() * 2.5, 0.6 + rr(), rr() * 3, 0, TAU); c.fill(); }
      const s = c.createRadialGradient(w * 0.6, h * 0.4, 10, w * 0.6, h * 0.4, 120); s.addColorStop(0, 'rgba(140,100,40,0.35)'); s.addColorStop(0.7, 'rgba(140,100,40,0.15)'); s.addColorStop(1, 'rgba(140,100,40,0)');
      c.fillStyle = s; c.fillRect(0, 0, w, h);
    }), 0.95);
    const edge = col(0xd8d4c8, 0.95);
    const back = col(0xb8b0a0, 0.95);
    const pieces = [[0.6, 0.6], [0.35, 0.28], [0.22, 0.18], [0.12, 0.1]];
    let i = 0;
    for (const [w, d] of pieces.slice(0, 2 + Math.floor(r() * 3))) {
      const m = add(g, gBox(w * (0.8 + r() * 0.2), 0.016, d * (0.8 + r() * 0.2)), [edge, edge, t, back, edge, edge], (r() - 0.5) * 0.7 * (i ? 1 : 0), 0.008 + (i === 1 ? 0.03 : 0), (r() - 0.5) * 0.7 * (i ? 1 : 0), i === 1 ? 0.15 : (r() - 0.5) * 0.05, r() * TAU, 0);
      if (i === 1) m.position.y = 0.04;
      i++;
    }
    for (let k = 0; k < 8; k++) add(g, gBox(0.02 + r() * 0.03, 0.012, 0.02 + r() * 0.03), edge, (r() - 0.5) * 0.9, 0.006, (r() - 0.5) * 0.9, 0, r() * 3, 0);
  },
  paper_scatter(g, r) {
    const t = ctex('papers', 1024, 512, (c, w, h, rr) => {
      const cells = 8;
      for (let i = 0; i < cells; i++) {
        const x = (i % 4) * 256, y = Math.floor(i / 4) * 256;
        c.save(); c.translate(x, y);
        const kind = i % 8;
        c.fillStyle = kind === 2 ? '#f2e6a0' : kind === 5 ? '#e9e4d6' : '#f4f2ec'; c.fillRect(0, 0, 256, 256);
        if (kind === 0) { // printed page
          txt(c, 'NOTICE TO RESIDENTS', 128, 30, 22, { color: '#111', maxW: 220 });
          finePrint(c, 20, 60, 216, 14, 12, rr, '#333');
        } else if (kind === 1) { // boil water notice
          c.fillStyle = '#c41e1e'; c.fillRect(0, 0, 256, 50);
          txt(c, 'BOIL WATER', 128, 26, 30, { color: '#fff', maxW: 230 });
          txt(c, 'UNTIL FURTHER NOTICE', 128, 74, 18, { color: '#111', maxW: 230 });
          finePrint(c, 20, 100, 216, 10, 13, rr, '#333');
        } else if (kind === 2) { // flyer
          txt(c, 'SHELTER', 128, 50, 40, { color: '#1d4f9a', maxW: 230 });
          txt(c, 'MEMORIAL COLISEUM', 128, 92, 18, { color: '#111', maxW: 230 });
          txt(c, 'FOOD  WATER  MEDICAL', 128, 124, 16, { color: '#111', maxW: 230 });
          finePrint(c, 30, 150, 196, 6, 13, rr, '#333');
        } else if (kind === 3) { // receipt
          c.fillStyle = '#ddd'; c.fillRect(0, 0, 256, 256); c.fillStyle = '#fbfbf8'; c.fillRect(70, 0, 116, 256);
          finePrint(c, 78, 14, 100, 18, 12, rr, '#555');
          txt(c, 'TOTAL  $48.17', 128, 236, 13, { color: '#111' });
        } else if (kind === 4) { // newspaper
          txt(c, 'THE DAILY', 128, 26, 30, { color: '#111', font: 'Georgia, "DejaVu Serif", serif', maxW: 230 });
          c.fillStyle = '#111'; c.fillRect(10, 46, 236, 2);
          txt(c, 'OUTBREAK SPREADS', 128, 70, 24, { color: '#111', maxW: 236, font: COND });
          for (let col2 = 0; col2 < 3; col2++) finePrint(c, 12 + col2 * 80, 92, 70, 14, 11, rr, '#444');
        } else if (kind === 5) { // lost dog
          txt(c, 'LOST DOG', 128, 40, 40, { color: '#111', maxW: 230 });
          pict(c, 'paw', 128, 120, 45, rr);
          txt(c, 'ANSWERS TO "BISCUIT"', 128, 190, 16, { color: '#111', maxW: 230 });
          finePrint(c, 40, 210, 176, 2, 12, rr, '#333');
        } else if (kind === 6) { // lined notebook page, handwriting
          c.strokeStyle = 'rgba(80,120,200,0.5)'; for (let yy = 30; yy < 256; yy += 16) { c.beginPath(); c.moveTo(0, yy); c.lineTo(256, yy); c.stroke(); }
          c.strokeStyle = 'rgba(200,60,60,0.5)'; c.beginPath(); c.moveTo(30, 0); c.lineTo(30, 256); c.stroke();
          txt(c, 'went to the river camp', 40, 42, 15, { color: '#223', align: 'left', italic: true, weight: 'normal' });
          txt(c, 'water + food there?', 40, 58, 15, { color: '#223', align: 'left', italic: true, weight: 'normal' });
          txt(c, '- M.', 40, 74, 15, { color: '#223', align: 'left', italic: true, weight: 'normal' });
        } else { // envelope / bill
          c.fillStyle = '#e8e2d2'; c.fillRect(0, 0, 256, 256);
          finePrint(c, 20, 20, 90, 3, 12, rr, '#444');
          finePrint(c, 90, 110, 120, 3, 12, rr, '#222');
          c.fillStyle = '#c41e1e'; c.fillRect(200, 14, 40, 40);
          txt(c, 'PAST DUE', 128, 200, 22, { color: '#c41e1e' });
        }
        grime(c, 256, 256, rr, 1.4);
        c.restore();
      }
    });
    const merger = new Merger(1);
    const geo = cached(GEO, 'paperplane', () => {
      const p = new THREE.PlaneGeometry(0.216, 0.28, 3, 1).rotateX(-Math.PI / 2);
      const pa = p.attributes.position;
      for (let i = 0; i < pa.count; i++) { const x = pa.getX(i); pa.setY(i, Math.pow(Math.abs(x) / 0.108, 2) * 0.012); }
      p.computeVertexNormals();
      return p;
    });
    const n = 10 + Math.floor(r() * 10);
    for (let i = 0; i < n; i++) {
      const cell = Math.floor(r() * 8);
      const rc = [(cell % 4) / 4, 1 - (Math.floor(cell / 4) + 1) / 2, (cell % 4 + 1) / 4, 1 - Math.floor(cell / 4) / 2];
      const a = r() * TAU, d = Math.sqrt(r()) * 1.0;
      const m = new THREE.Matrix4().compose(new THREE.Vector3(Math.cos(a) * d, 0.002 + i * 0.0008, Math.sin(a) * d), new THREE.Quaternion().setFromEuler(new THREE.Euler((r() - 0.5) * 0.06, r() * TAU, (r() - 0.5) * 0.06)), new THREE.Vector3(cell === 3 ? 0.5 : 1, 1, 1));
      merger.add(geo, m, [rc], [0]);
    }
    for (const mesh of merger.meshes([mat('papermat', { map: t, roughness: 0.9, side: THREE.DoubleSide, ...DECAL })])) g.add(mesh);
  },
  glass_shards(g, r) {
    const pos = [];
    const n = 60 + Math.floor(r() * 40);
    for (let i = 0; i < n; i++) {
      const a = r() * TAU, d = Math.pow(r(), 0.7) * 0.8;
      const cx = Math.cos(a) * d, cz = Math.sin(a) * d;
      const s = 0.015 + r() * 0.06 * (1 - d * 0.6);
      const y = 0.002 + r() * 0.004;
      const pts = [];
      const k = r() < 0.5 ? 3 : 4;
      for (let j = 0; j < k; j++) { const b = j / k * TAU + r() * 0.8; pts.push([cx + Math.cos(b) * s * (0.4 + r()), y + (r() < 0.15 ? r() * 0.015 : 0), cz + Math.sin(b) * s * (0.4 + r())]); }
      pos.push(...pts[0], ...pts[2], ...pts[1]);
      if (k === 4) pos.push(...pts[0], ...pts[3], ...pts[2]);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    geo.computeVertexNormals();
    const m = new THREE.Mesh(geo, mat('shardglass', { color: 0xe8f8fa, roughness: 0.04, metalness: 0.5, transparent: true, opacity: 0.75, side: THREE.DoubleSide, depthWrite: false, emissive: 0x1a2224, ...DECAL }));
    g.add(m);
  },
  traffic_cone(g) {
    const cone = tmat(ctex('cone', 64, 256, (c, w, h, rr) => {
      c.fillStyle = '#f0641c'; c.fillRect(0, 0, w, h);
      c.fillStyle = '#f2f2f2'; c.fillRect(0, h * 0.22, w, h * 0.13); c.fillRect(0, h * 0.48, w, h * 0.09);
      grime(c, w, h, rr, 1.5);
    }), 0.55);
    add(g, gCyl(0.025, 0.13, 0.66, 16, true), cone, 0, 0.03, 0);
    add(g, gCircle(0.025, 10), col(0xf0641c, 0.6), 0, 0.69, 0);
    add(g, gRBox(0.36, 0.03, 0.36, 0.02), col(0xd0501a, 0.8));
  },
  mop_bucket(g, r) {
    const y = col(0xf2c21b, 0.45); // same yellow as the wet floor sign
    add(g, gRBox(0.46, 0.32, 0.34, 0.05), y, 0, 0.06, 0);
    add(g, gBox(0.38, 0.002, 0.26), mat('dirtywater', { color: 0x4a4636, roughness: 0.1, metalness: 0.2 }), 0, 0.33, 0);
    add(g, gRBox(0.18, 0.2, 0.28, 0.02), M.darkMetal, 0.12, 0.34, 0);
    add(g, gCyl(0.012, 0.012, 0.5, 8), M.darkMetal, 0.2, 0.5, -0.1, 0.6, 0, 0);
    for (const [x, z] of [[-0.19, -0.13], [0.19, -0.13], [-0.19, 0.13], [0.19, 0.13]]) add(g, gSphere(0.035, 8, 6), M.blackPl, x, 0.035, z);
    // mop: handle leaning, strands in the wringer
    add(g, gCyl(0.012, 0.012, 1.35, 8), M.darkMetal, 0.06, 0.25, 0.04, 0, 0, -0.18);
    const strands = tmat(ctex('mopstrands', 64, 64, (c, w, h, rr) => { c.fillStyle = '#b8b0a0'; c.fillRect(0, 0, w, h); for (let x = 0; x < w; x += 3) { c.fillStyle = `rgba(0,0,0,${0.1 + rr() * 0.25})`; c.fillRect(x, 0, 1, h); } }), 0.95);
    add(g, gCyl(0.08, 0.11, 0.22, 10), strands, 0.03, 0.22, 0.04);
  },
  wet_floor_sign(g) {
    const t = ctex('wetfloor', 256, 512, (c, w, h, rr) => {
      c.fillStyle = '#f2c21b'; c.fillRect(0, 0, w, h);
      c.fillStyle = '#111'; c.fillRect(0, h * 0.08, w, h * 0.12);
      txt(c, 'CAUTION', w / 2, h * 0.14, 46, { color: '#f2c21b', maxW: w * 0.9 });
      // warning triangle with slipping stick figure
      c.fillStyle = '#111'; c.beginPath(); c.moveTo(w / 2, h * 0.27); c.lineTo(w * 0.88, h * 0.62); c.lineTo(w * 0.12, h * 0.62); c.closePath(); c.fill();
      c.fillStyle = '#f2c21b'; c.beginPath(); c.moveTo(w / 2, h * 0.31); c.lineTo(w * 0.8, h * 0.6); c.lineTo(w * 0.2, h * 0.6); c.closePath(); c.fill();
      c.strokeStyle = '#111'; c.lineWidth = 7; c.lineCap = 'round';
      c.beginPath(); c.arc(w * 0.56, h * 0.4, 9, 0, TAU); c.fillStyle = '#111'; c.fill();
      c.beginPath(); c.moveTo(w * 0.54, h * 0.43); c.lineTo(w * 0.46, h * 0.52); c.moveTo(w * 0.46, h * 0.52); c.lineTo(w * 0.38, h * 0.56); c.moveTo(w * 0.46, h * 0.52); c.lineTo(w * 0.58, h * 0.57); c.moveTo(w * 0.52, h * 0.46); c.lineTo(w * 0.62, h * 0.47); c.moveTo(w * 0.5, h * 0.47); c.lineTo(w * 0.42, h * 0.44); c.stroke();
      txt(c, 'WET FLOOR', w / 2, h * 0.72, 40, { color: '#111', maxW: w * 0.9 });
      txt(c, 'PISO MOJADO', w / 2, h * 0.8, 26, { color: '#111', maxW: w * 0.9 });
      grime(c, w, h, rr, 1.2);
    });
    const m = tmat(t, 0.45);
    const y = col(0xf2c21b, 0.45);
    for (const s of [-1, 1]) {
      const p = new THREE.Group();
      add(p, gBox(0.3, 0.6, 0.012), [y, y, y, y, s < 0 ? m : y, s > 0 ? m : y], 0, -0.6, 0);
      p.position.set(0, 0.62, 0); p.rotation.x = s * 0.2;
      g.add(p);
    }
    add(g, gTorus(0.05, 0.012, 5, 12, Math.PI), y, 0, 0.62, 0);
  },
  fire_extinguisher(g) {
    const red = col(0xc4161c, 0.35, 0.1);
    add(g, gLathe('extbody', [[0, 0], [0.07, 0], [0.076, 0.012], [0.076, 0.38], [0.065, 0.43], [0.03, 0.455], [0.02, 0.46]], 18), red);
    add(g, gBox(0.09, 0.14, 0.002), tmat(frontTex({ t: 'FIRE', t2: 'EXTINGUISHER', s: 'ABC DRY CHEMICAL', n: 'INSPECT MONTHLY', b: '#f4f1ea', f: '#c4161c', a: '#c4161c', p: 'flame' }, 192, 300), 0.5), 0, 0.16, 0.074);
    add(g, gCyl(0.02, 0.022, 0.04, 10), M.brass, 0, 0.455, 0);
    add(g, gBox(0.12, 0.012, 0.03), M.chrome, 0.03, 0.5, 0, 0, 0, 0.1);
    add(g, gBox(0.1, 0.012, 0.028), M.chrome, 0.02, 0.475, 0, 0, 0, 0.05);
    add(g, gCyl(0.017, 0.017, 0.01, 12), M.chrome, -0.04, 0.47, 0.012, Math.PI / 2);
    add(g, gCircle(0.014, 12), tmat(ctex('gauge', 64, 64, (c, w, h) => { c.fillStyle = '#fff'; c.beginPath(); c.arc(32, 32, 30, 0, TAU); c.fill(); c.fillStyle = '#2f9a3a'; c.beginPath(); c.moveTo(32, 32); c.arc(32, 32, 26, -2.2, -0.9); c.fill(); c.strokeStyle = '#111'; c.lineWidth = 3; c.beginPath(); c.moveTo(32, 32); c.lineTo(46, 16); c.stroke(); }), 0.3), -0.04, 0.47, 0.018, Math.PI / 2);
    tubePath(g, 'exthose', [[0.04, 0.46, 0], [0.09, 0.44, 0.02], [0.1, 0.3, 0.05], [0.085, 0.18, 0.06], [0.07, 0.12, 0.07]], 0.009, M.rubber, false, 20);
    add(g, gCyl(0.008, 0.014, 0.05, 8), M.blackPl, 0.07, 0.07, 0.07);
    add(g, gTorus(0.012, 0.002, 4, 10), col(0xf2c21b, 0.4), 0.0, 0.49, 0.02, 0, Math.PI / 2, 0);
  },
  iv_stand(g, r) {
    for (let i = 0; i < 5; i++) {
      const a = i * TAU / 5;
      add(g, gBox(0.28, 0.025, 0.03), M.chrome, Math.cos(a) * 0.14, 0.05, Math.sin(a) * 0.14, 0, -a, 0);
      add(g, gSphere(0.022, 8, 6), M.blackPl, Math.cos(a) * 0.27, 0.022, Math.sin(a) * 0.27);
    }
    add(g, gCyl(0.012, 0.012, 1.85, 8), M.chrome, 0, 0.05, 0);
    for (let i = 0; i < 4; i++) add(g, gTorus(0.04, 0.004, 4, 10, Math.PI), M.chrome, Math.cos(i * Math.PI / 2) * 0.04, 1.86, Math.sin(i * Math.PI / 2) * 0.04, 0, -i * Math.PI / 2, Math.PI);
    if (r() < 0.75) {
      const bag = new THREE.Group();
      ITEM_BUILDERS.saline(bag, r);
      bag.rotation.x = Math.PI / 2; bag.position.set(0.08, 1.85, -0.02);
      g.add(bag);
      tubePath(g, 'ivline', [[0.08, 1.58, 0.0], [0.1, 1.2, 0.02], [0.14, 0.8, 0.05], [0.12, 0.5, 0.1], [0.05, 0.35, 0.12]], 0.002, mat('ivtube', { color: 0xeef4f6, roughness: 0.2, transparent: true, opacity: 0.6 }), false, 24);
    }
  },
  wheelchair(g) {
    const frame = M.chrome;
    const fab = tmat(texNylon('#1d1e22', 'wc'), 0.9);
    for (const s of [-1, 1]) {
      wheel(g, s * 0.3, 0.3, -0.05, 0.3, 0.018, frame, 12);
      add(g, gTorus(0.27, 0.005, 3, 20), M.chrome, s * 0.33, 0.3, -0.05, 0, Math.PI / 2, 0);
      caster(g, s * 0.22, 0.32, 0.06);
      tubePath(g, 'wcside', [[0, 0.16, 0.3], [0, 0.5, 0.3], [0, 0.5, -0.12], [0, 0.95, -0.2], [0, 0.95, -0.28]], 0.011, frame, false, 20).position.x = s * 0.22;
      add(g, gCyl(0.016, 0.016, 0.1, 8), M.rubber, s * 0.22, 0.95, -0.3, Math.PI / 2, 0, 0);
      tubePath(g, 'wcfoot', [[0, 0.5, 0.25], [0, 0.18, 0.42], [0, 0.12, 0.44]], 0.01, frame, false, 10).position.x = s * 0.2;
      add(g, gBox(0.12, 0.01, 0.12), M.blackPl, s * 0.13, 0.12, 0.46);
      add(g, gRBox(0.05, 0.03, 0.28, 0.01), M.blackPl, s * 0.23, 0.68, 0.06);
      tubePath(g, 'wcarm', [[0, 0.5, 0.18], [0, 0.66, 0.18]], 0.01, frame, false, 2).position.x = s * 0.23;
    }
    add(g, gBox(0.42, 0.012, 0.42), fab, 0, 0.495, 0.08);
    add(g, gBox(0.42, 0.4, 0.012), fab, 0, 0.55, -0.15, -0.15, 0, 0);
    add(g, gCyl(0.01, 0.01, 0.44, 8), frame, -0.22, 0.25, 0.08, 0, 0, -Math.PI / 2);
  },
  gurney(g, r) {
    const frame = M.chrome;
    tubePath(g, 'gurneyframe2', roundLoop([[-0.32, 0.6, -0.95], [0.32, 0.6, -0.95], [0.32, 0.6, 0.95], [-0.32, 0.6, 0.95]], 0.06), 0.016, frame, true, 60);
    for (const [x, z] of [[-0.25, -0.75], [0.25, -0.75], [-0.25, 0.75], [0.25, 0.75]]) { add(g, gCyl(0.02, 0.02, 0.52, 8), frame, x, 0.1, z); caster(g, x, z, 0.055); }
    add(g, gBox(0.56, 0.03, 1.6), frame, 0, 0.12, 0);
    const sheet = tmat(ctex('sheet', 128, 256, (c, w, h, rr) => { noiseFill(c, w, h, rr, '#e8ecee', 0.06, 1500, 2); c.strokeStyle = 'rgba(0,0,0,0.08)'; for (let i = 0; i < 12; i++) { c.beginPath(); c.moveTo(rr() * w, 0); c.bezierCurveTo(rr() * w, h * 0.3, rr() * w, h * 0.6, rr() * w, h); c.stroke(); } grime(c, w, h, rr, 1); }), 0.95);
    add(g, gRBox(0.62, 0.1, 1.86, 0.04), sheet, 0, 0.63, 0);
    add(g, gRBox(0.42, 0.08, 0.26, 0.04), col(0xf4f6f6, 0.95), 0, 0.72, -0.75, 0.1, 0, 0);
    add(g, gRBox(0.64, 0.05, 0.5, 0.025), tmat(texNylon('#3a6a9a', 'blanket'), 0.95), 0, 0.72, 0.62, 0, 0.08, 0.02);
    for (const s of [-1, 1]) tubePath(g, 'gurneyrail' + s, [[s * 0.33, 0.62, -0.5], [s * 0.34, 0.84, -0.45], [s * 0.34, 0.84, 0.45], [s * 0.33, 0.62, 0.5]], 0.01, frame, false, 20);
    tubePath(g, 'gurneyhandle', [[-0.25, 0.62, 0.95], [-0.25, 0.9, 1.0], [0.25, 0.9, 1.0], [0.25, 0.62, 0.95]], 0.013, frame, false, 20);
    if (r() < 0.5) g.rotation.y = (r() - 0.5) * 0.8;
  },
  medical_cart(g, r) {
    const color = pick(r, ['#c4221c', '#2a6fd6', '#d8d8d4']);
    const body = col(new THREE.Color(color).getHex(), 0.4, 0.1);
    const front = tmat(ctex('cartdrawers' + color, 256, 320, (c, w, h, rr) => {
      c.fillStyle = color; c.fillRect(0, 0, w, h);
      const rows = [0.15, 0.15, 0.2, 0.25, 0.25];
      let y = 0;
      for (const f of rows) {
        const hh = f * h;
        c.fillStyle = 'rgba(0,0,0,0.35)'; c.fillRect(0, y, w, 3);
        c.fillStyle = 'rgba(255,255,255,0.15)'; c.fillRect(0, y + 3, w, 2);
        c.fillStyle = '#ddd'; c.fillRect(w * 0.35, y + hh * 0.35, w * 0.3, 8);
        c.fillStyle = '#f4f1ea'; c.fillRect(w * 0.08, y + hh * 0.3, 44, 18);
        finePrint(c, w * 0.09, y + hh * 0.3 + 5, 40, 1, 8, rr, '#333');
        y += hh;
      }
      grime(c, w, h, rr, 1);
    }), 0.4, 0.1);
    add(g, gRBox(0.7, 0.85, 0.5, 0.02), [body, body, body, body, front, body], 0, 0.1, 0);
    add(g, gBox(0.76, 0.03, 0.56), M.darkMetal, 0, 0.95, 0);
    for (const s of [-1, 1]) add(g, gBox(0.76, 0.05, 0.01), M.darkMetal, 0, 0.98, s * 0.275);
    for (const [x, z] of [[-0.28, -0.18], [0.28, -0.18], [-0.28, 0.18], [0.28, 0.18]]) caster(g, x, z, 0.045);
    tubePath(g, 'mcarthandle', [[0.37, 0.8, -0.18], [0.42, 0.82, -0.15], [0.42, 0.82, 0.15], [0.37, 0.8, 0.18]], 0.012, M.chrome, false, 12);
    const gl = new THREE.Group();
    printedBox(gl, 0.24, 0.12, 0.13, { t: 'EXAM GLOVES', s: 'NITRILE  POWDER FREE', n: '100 GLOVES  SIZE L', b: '#2a6fd6', f: '#fff', a: '#fff', tf: '#2a6fd6', p: 'cross' }, { tw: 256, th: 128 });
    gl.position.set(-0.15, 0.98, 0); gl.rotation.y = 0.2;
    g.add(gl);
    add(g, gBox(0.18, 0.22, 0.12), col(0xc4221c, 0.45), 0.2, 0.98, -0.05);
    add(g, gBox(0.14, 0.03, 0.1), M.whitePl, 0.2, 1.2, -0.05);
  },
  locker_row(g, r) {
    const color = pick(r, ['#4a5a6a', '#6a7a5a', '#8a8a86']);
    const door = tmat(ctex('lockerdoor' + color, 128, 512, (c, w, h, rr) => {
      noiseFill(c, w, h, rr, color, 0.05, 1500, 2);
      c.fillStyle = 'rgba(0,0,0,0.5)';
      for (const y0 of [0.08, 0.82]) for (let i = 0; i < 6; i++) c.fillRect(w * 0.25, h * y0 + i * 10, w * 0.5, 4);
      c.fillStyle = 'rgba(255,255,255,0.12)'; c.fillRect(4, 4, w - 8, 2);
      c.fillStyle = '#d8d8d4'; c.fillRect(w * 0.35, h * 0.3, w * 0.3, 20);
      grime(c, w, h, rr, 1.5);
    }), 0.45, 0.35);
    const body = tmat(texPainted(color, 'locker'), 0.5, 0.3);
    const inside = col(0x1e2124, 0.8);
    const n = 4, W = 0.3, H = 1.8, D = 0.45;
    add(g, gBox(n * W + 0.02, H, D), [body, body, body, body, inside, body], 0, 0.08, 0);
    add(g, gBox(n * W + 0.02, 0.08, D - 0.04), inside, 0, 0, -0.02);
    const nums = tmat(ctex('lockernums', 256, 32, (c, w, h) => { c.fillStyle = '#d8d8d4'; c.fillRect(0, 0, w, h); for (let k = 0; k < 4; k++) txt(c, String(101 + k), 32 + k * 64, h / 2, 20, { color: '#111' }); }), 0.5);
    const open = Math.floor(r() * (n + 2));
    for (let i = 0; i < n; i++) {
      const d = new THREE.Group();
      add(d, gBox(W - 0.012, H - 0.03, 0.015), [body, body, body, body, door, body], (W - 0.012) / 2, 0, 0);
      add(d, gBox(0.02, 0.1, 0.02), M.chrome, W * 0.82, H * 0.48, 0.015);
      const nr = [i / 4 + 0.01, 0.05, (i + 1) / 4 - 0.01, 0.95], pr = [0.005, 0.1, 0.01, 0.2];
      add(d, gRemap(gBox(0.05, 0.025, 0.002), 'lockernum' + i, [pr, pr, pr, pr, nr, pr]), [nums, nums, nums, nums, nums, nums], W * 0.48, H * 0.86, 0.009);
      d.position.set(-n * W / 2 + i * W + 0.006, 0.095, D / 2);
      if (i === open) d.rotation.y = -(0.7 + r() * 0.9);
      g.add(d);
    }
    for (let i = 1; i < n; i++) add(g, gBox(0.012, H, D - 0.02), body, -n * W / 2 + i * W, 0.08, 0);
    for (let i = 0; i < n; i++) add(g, gBox(W - 0.02, 0.012, D - 0.04), body, -n * W / 2 + i * W + W / 2, 1.55, 0);
    // something left inside the open locker
    if (open < n) add(g, gRBox(0.2, 0.3, 0.12, 0.03), tmat(texNylon('#2f3f2a', 'lk'), 0.85), -n * W / 2 + open * W + W / 2, 0.1, 0);
  },
  helmet_rack(g, r) {
    const steel = col(0x5a5e62, 0.5, 0.4);
    const W = 1.8, H = 1.9;
    for (const x of [-W / 2, -W / 6, W / 6, W / 2]) add(g, gBox(0.04, H, 0.04), steel, x, 0, -0.25);
    add(g, gBox(W + 0.04, 0.03, 0.45), steel, 0, 1.6, -0.05);
    add(g, gBox(W + 0.04, 0.03, 0.45), steel, 0, 0.35, -0.05);
    const tan = tmat(ctex('turnout', 128, 256, (c, w, h, rr) => {
      noiseFill(c, w, h, rr, '#a8946a', 0.1, 2000, 2);
      for (const y of [0.55, 0.9]) { c.fillStyle = '#d8e040'; c.fillRect(0, h * y, w, h * 0.06); c.fillStyle = '#d8d8d8'; c.fillRect(0, h * y + h * 0.018, w, h * 0.024); }
      grime(c, w, h, rr, 2);
    }), 0.9);
    const helm = [M.blackPl, col(0xf2c21b, 0.35), col(0xc4221c, 0.45)];
    for (let i = 0; i < 3; i++) {
      const x = -W / 3 + i * W / 3;
      // coat hanging on a hook
      add(g, gRBox(0.5, 0.85, 0.2, 0.08), tan, x, 0.6, -0.12);
      add(g, gCyl(0.07, 0.075, 0.75, 8), tan, x - 0.29, 0.68, -0.12, 0, 0, 0.08);
      add(g, gCyl(0.07, 0.075, 0.75, 8), tan, x + 0.29, 0.68, -0.12, 0, 0, -0.08);
      add(g, gTorus(0.1, 0.03, 4, 10), tan, x, 1.42, -0.12, Math.PI / 2, 0, 0, 1, 0.8, 1);
      // helmet on the shelf
      if (r() < 0.85) {
        const hm = pick(r, helm);
        const h = new THREE.Group();
        add(h, gLathe('helmdome', [[0, 0.2], [0.07, 0.19], [0.12, 0.15], [0.14, 0.08], [0.15, 0.0]], 14), hm, 0, 0, 0);
        add(h, gCyl(0.19, 0.2, 0.012, 16), hm, 0, -0.005, 0.03, 0, 0, 0, 1, 1, 1.25);
        add(h, gBox(0.1, 0.06, 0.012), M.brass, 0, 0.1, 0.15, -0.5, 0, 0);
        h.position.set(x + (r() - 0.5) * 0.1, 1.625, -0.05); h.rotation.y = (r() - 0.5) * 0.6;
        g.add(h);
      }
      // boots below with pants folded down
      const bt = M.blackPl;
      for (const s of [-1, 1]) { add(g, gBox(0.11, 0.06, 0.28), bt, x + s * 0.07, 0.0, 0.07); add(g, gCyl(0.06, 0.065, 0.3, 8), bt, x + s * 0.07, 0.04, 0.0); add(g, gTorus(0.07, 0.035, 4, 8), tan, x + s * 0.07, 0.36, 0.0, Math.PI / 2); add(g, gCyl(0.066, 0.066, 0.03, 8, true), col(0xd8e040, 0.5), x + s * 0.07, 0.25, 0.0); }
      const tags = tmat(ctex('nametags', 384, 64, (c, w, h) => { c.fillStyle = '#1d1e20'; c.fillRect(0, 0, w, h); ['ENGINE 1', 'TRUCK 3', 'RESCUE 7'].forEach((t, k) => txt(c, t, 64 + k * 128, h / 2, 22, { color: '#f2c21b', maxW: 115 })); }), 0.5);
      const tr = [i / 3 + 0.01, 0.05, (i + 1) / 3 - 0.01, 0.95], dr = [0.002, 0.1, 0.004, 0.2];
      add(g, gRemap(gBox(0.1, 0.06, 0.002), 'nametag' + i, [dr, dr, dr, dr, tr, dr]), [tags, tags, tags, tags, tags, tags], x, 1.52, 0.18);
    }
  },
  hose_reel(g) {
    const red = col(0xc4221c, 0.45, 0.15);
    const hose = tmat(ctex('hose', 128, 32, (c, w, h) => { c.fillStyle = '#b8201e'; c.fillRect(0, 0, w, h); c.fillStyle = 'rgba(0,0,0,0.25)'; for (let x = 0; x < w; x += 4) c.fillRect(x, 0, 1, h); }, { repeat: [6, 1] }), 0.7);
    for (const s of [-1, 1]) {
      add(g, gCyl(0.38, 0.38, 0.02, 20), red, s * 0.25 - 0.01, 0.55, 0, 0, 0, Math.PI / 2);
      tubePath(g, 'reelleg' + s, [[0, 0, -0.35], [0, 0.55, 0], [0, 0, 0.35]], 0.02, red, false, 4).position.x = s * 0.29;
    }
    add(g, gCyl(0.04, 0.04, 0.6, 10), M.steel, -0.3, 0.55, 0, 0, 0, -Math.PI / 2);
    const coil = tmat(ctex('hosecoil', 256, 64, (c, w, h) => { c.fillStyle = '#9a1a18'; c.fillRect(0, 0, w, h); for (let x = 0; x < w; x += 8) { const gr = c.createLinearGradient(x, 0, x + 8, 0); gr.addColorStop(0, '#5a0e0c'); gr.addColorStop(0.5, '#c8282a'); gr.addColorStop(1, '#5a0e0c'); c.fillStyle = gr; c.fillRect(x, 0, 8, h); } }, { repeat: [1, 6] }), 0.7);
    add(g, gCyl(0.31, 0.31, 0.47, 20), [coil, col(0x5a0e0c, 0.8), col(0x5a0e0c, 0.8)], -0.235, 0.55, 0, 0, 0, -Math.PI / 2);
    for (let j = 0; j < 7; j++) add(g, gTorus(0.31, 0.019, 4, 18), hose, -0.21 + j * 0.07, 0.55, 0, 0, Math.PI / 2, 0);
    tubePath(g, 'hosetail', [[0.0, 0.2, 0.3], [0.05, 0.05, 0.45], [0.2, 0.025, 0.7], [0.4, 0.025, 0.8]], 0.022, hose, false, 20);
    add(g, gCyl(0.025, 0.04, 0.16, 10), M.brass, 0.42, 0.04, 0.82, 0, 0, Math.PI / 2 + 0.3);
    tubePath(g, 'reelcrank', [[0.29, 0.55, 0], [0.36, 0.55, 0], [0.36, 0.4, 0], [0.42, 0.4, 0]], 0.012, M.steel, false, 6);
  },
  kitchen_counter_items(g, r) {
    // kettle
    const ss = tmat(texBrushed('#c9ccd0', 'kettle'), 0.25, 0.55);
    add(g, gLathe('kettle', [[0, 0], [0.09, 0], [0.1, 0.03], [0.095, 0.12], [0.06, 0.17], [0.025, 0.18], [0.0, 0.185]], 18), ss, -0.4, 0, 0);
    add(g, gSphere(0.015, 8, 6), M.blackPl, -0.4, 0.19, 0);
    tubePath(g, 'kettlespout', [[-0.32, 0.05, 0], [-0.27, 0.12, 0], [-0.25, 0.16, 0]], 0.012, ss, false, 8);
    add(g, gTorus(0.06, 0.012, 5, 12, Math.PI), M.blackPl, -0.4, 0.17, 0, 0, 0, 0);
    // crockery from the shared dish atlas: plates, two mugs, a bowl (one material)
    const dm = new Merger(1);
    const M4 = (x, y, z, ry = 0) => new THREE.Matrix4().compose(new THREE.Vector3(x, y, z), new THREE.Quaternion().setFromEuler(new THREE.Euler(0, ry, 0)), new THREE.Vector3(1, 1, 1));
    const plate = gLathe('dplate2', [[0, 0], [0.08, 0], [0.12, 0.018], [0.116, 0.02], [0.078, 0.004], [0, 0.004]], 12);
    for (let i = 0; i < 5; i++) dm.add(plate, M4(-0.1, i * 0.0145, 0.05, r() * TAU), [dishRect(i === 4 ? 6 : 0)], [0]);
    const mug = gLathe('dmug2', [[0, 0], [0.04, 0], [0.042, 0.095], [0.037, 0.095], [0.035, 0.008], [0, 0.008]], 10);
    const handle = gTorus(0.025, 0.007, 4, 8, Math.PI * 1.2);
    for (let i = 0; i < 2; i++) {
      const rc = dishRect([2, 3, 4][Math.floor(r() * 3)]);
      const m = M4(0.08 + i * 0.1, 0, -0.08);
      dm.add(mug, m, [rc], [0]);
      dm.add(handle, m.clone().multiply(M4(0.045, 0.05, 0)).multiply(new THREE.Matrix4().makeRotationZ(-Math.PI * 0.6)), [rc], [0]);
    }
    dm.add(gLathe('dbowl2', [[0, 0], [0.04, 0], [0.075, 0.058], [0.07, 0.058], [0.036, 0.006], [0, 0.006]], 12), M4(0.2, 0, 0.22), [dishRect(1)], [0]);
    for (const mesh of dm.meshes([dishMat()])) g.add(mesh);
    // cereal box
    const cb = new THREE.Group();
    printedBox(cb, 0.19, 0.29, 0.07, { t: 'CORN FLAKES', s: 'TOASTED', n: 'NET WT 18 OZ', b: '#f2f1ec', f: '#1d4f9a', a: '#e8701c', p: 'grain', top: 'FAMILY SIZE', tf: '#fff' });
    cb.position.set(0.35, 0, 0.05); cb.rotation.y = -0.3;
    g.add(cb);
    // cutting board
    add(g, gRBox(0.36, 0.018, 0.24, 0.008), FX.wood('#8a6440'), -0.05, 0, 0.2);
  },
  bookshelf(g, r) {
    const wood = tmat(texWood('#7a5032', '#4a2a18', 'shelf'), 0.7);
    const W = 0.9, H = 1.8, D = 0.3, N = 5;
    add(g, gBox(0.02, H, D), wood, -W / 2 + 0.01, 0, 0);
    add(g, gBox(0.02, H, D), wood, W / 2 - 0.01, 0, 0);
    add(g, gBox(W, 0.01, D), col(0x3a2418, 0.8), 0, 0, -D / 2 + 0.005, Math.PI / 2, 0, 0);
    for (let i = 0; i <= N; i++) add(g, gBox(W - 0.04, 0.02, D), wood, 0, 0.05 + i * (H - 0.07) / N, 0);
    // books: one merged mesh with a spine atlas
    const t = ctex('spines', 1024, 256, (c, w, h, rr) => {
      for (let i = 0; i < 32; i++) {
        const x = i * 32;
        const base = pick(rr, ['#7a1d1a', '#22304a', '#2f4a2a', '#c9a24a', '#e8e2d2', '#1d1e20', '#5a2a5a', '#2a6a7a', '#c4521c', '#4a3a2a']);
        noiseFill2(c, 0, 0, rr, 0);
        c.fillStyle = base; c.fillRect(x, 0, 32, h);
        c.fillStyle = 'rgba(255,255,255,0.12)'; c.fillRect(x + 2, 0, 2, h);
        c.fillStyle = 'rgba(0,0,0,0.2)'; c.fillRect(x + 28, 0, 4, h);
        c.fillStyle = rr() < 0.5 ? '#e8d8a0' : '#f4f1ea';
        c.fillRect(x + 6, h * 0.1, 20, 3); c.fillRect(x + 6, h * 0.85, 20, 3);
        for (let k = 0; k < 6; k++) c.fillRect(x + 12, h * 0.25 + k * 14, 8, 9);
      }
      grime(c, w, h, rr, 1);
    });
    const pages = '#efe6cf';
    const merger = new Merger(1);
    const geo = gBox(1, 1, 1);
    for (let s = 0; s < N; s++) {
      const y0 = 0.06 + s * (H - 0.07) / N;
      let x = -W / 2 + 0.03;
      const shelfH = (H - 0.07) / N - 0.03;
      while (x < W / 2 - 0.06) {
        if (r() < 0.12) { x += 0.05 + r() * 0.15; continue; }
        const bw = 0.02 + r() * 0.035, bh = Math.min(shelfH, 0.17 + r() * 0.12), bd = 0.15 + r() * 0.08;
        const cell = Math.floor(r() * 32);
        const rc = [cell / 32, 0, (cell + 1) / 32, 1];
        const lean = r() < 0.08 ? 0.25 : 0;
        const m = new THREE.Matrix4().compose(new THREE.Vector3(x + bw / 2 + lean * bh * 0.5, y0, -D / 2 + bd / 2 + 0.01), new THREE.Quaternion().setFromEuler(new THREE.Euler(0, 0, -lean)), new THREE.Vector3(bw, bh, bd));
        // spine (+z face) uses the atlas, the rest a page-coloured corner of it
        merger.add(geo, m, [rc, rc, [0.999, 0.999, 1, 1], rc, rc, rc], [0]);
        x += bw + 0.002 + lean * bh;
      }
    }
    const meshes = merger.meshes([mat('bookmat', { map: t, roughness: 0.75 })]);
    meshes.forEach((m) => g.add(m));
    void pages;
  },
  tv(g, r) {
    const bez = col(0x111214, 0.4);
    const scr = tmat(ctex('tvscreen' + (r() < 0.3 ? 'c' : ''), 256, 144, (c, w, h, rr) => {
      const gr = c.createLinearGradient(0, 0, w, h); gr.addColorStop(0, '#1a1d22'); gr.addColorStop(0.5, '#0a0c0e'); gr.addColorStop(1, '#14171a');
      c.fillStyle = gr; c.fillRect(0, 0, w, h);
      grime(c, w, h, rr, 1.5);
    }), 0.12, 0.2);
    add(g, gBox(1.23, 0.71, 0.04), [bez, bez, bez, bez, scr, bez], 0, 0.1, 0);
    add(g, gBox(0.06, 0.1, 0.03), bez, 0, 0.0, -0.01);
    add(g, gRBox(0.4, 0.015, 0.2, 0.006), bez, 0, 0, 0);
  },
  lamp(g, r) {
    const base = col(pick(r, [0xd8c8a8, 0x2a4a6a, 0x8a3a2a]), 0.3);
    add(g, gLathe('lampbase', [[0, 0], [0.08, 0], [0.085, 0.02], [0.1, 0.12], [0.09, 0.2], [0.03, 0.26], [0.015, 0.28], [0, 0.28]], 16), base);
    add(g, gCyl(0.006, 0.006, 0.18, 6), M.brass, 0, 0.28, 0);
    const shade = mat('lampshade', { map: ctex('shadefab', 128, 64, (c, w, h, rr) => { noiseFill(c, w, h, rr, '#e8dcc0', 0.08, 800, 1); grime(c, w, h, rr, 1); }), roughness: 0.95, side: THREE.DoubleSide });
    add(g, gCyl(0.1, 0.17, 0.2, 18, true), shade, 0, 0.37, 0);
    add(g, gSphere(0.03, 8, 6), mat('bulb', { color: 0xf4f0e0, roughness: 0.2 }), 0, 0.45, 0);
  },
  rug(g, r) {
    const pal = pick(r, [['#7a1d1a', '#22304a', '#c9a24a'], ['#2a3a5a', '#c8b48a', '#7a2a1a'], ['#4a5a3a', '#e8dcc0', '#7a4a2a']]);
    const t = ctex('rug' + pal.join(), 512, 360, (c, w, h, rr) => {
      c.fillStyle = pal[0]; c.fillRect(0, 0, w, h);
      for (let i = 0; i < 3; i++) { c.strokeStyle = i % 2 ? pal[2] : pal[1]; c.lineWidth = 10; c.strokeRect(24 + i * 16, 18 + i * 16, w - 48 - i * 32, h - 36 - i * 32); }
      c.fillStyle = pal[1];
      c.beginPath(); c.moveTo(w / 2, h * 0.22); c.lineTo(w * 0.72, h / 2); c.lineTo(w / 2, h * 0.78); c.lineTo(w * 0.28, h / 2); c.closePath(); c.fill();
      c.fillStyle = pal[2]; c.beginPath(); c.moveTo(w / 2, h * 0.32); c.lineTo(w * 0.62, h / 2); c.lineTo(w / 2, h * 0.68); c.lineTo(w * 0.38, h / 2); c.closePath(); c.fill();
      for (let i = 0; i < 40; i++) { c.fillStyle = rr() < 0.5 ? pal[1] : pal[2]; c.fillRect(90 + rr() * (w - 180), 80 + rr() * (h - 160), 6, 6); }
      c.fillStyle = '#e8dcc0'; for (let x = 0; x < w; x += 4) { c.fillRect(x, 0, 2, 10); c.fillRect(x, h - 10, 2, 10); }
      noiseFill2(c, w, h, rr, 0.15);
      grime(c, w, h, rr, 2);
    });
    const geo = cached(GEO, 'rug', () => {
      const p = new THREE.PlaneGeometry(2.0, 1.4, 8, 6).rotateX(-Math.PI / 2);
      const a = p.attributes.position;
      for (let i = 0; i < a.count; i++) { const x = a.getX(i), z = a.getZ(i); const d = Math.hypot(x - 1.0, z - 0.7); a.setY(i, 0.004 + Math.max(0, 0.45 - d) * 0.18); }
      p.computeVertexNormals();
      return p;
    });
    add(g, geo, mat('rugmat' + pal.join(), { map: t, roughness: 1, side: THREE.DoubleSide, ...DECAL }));
  },
  potted_plant_dead(g, r) {
    const terra = tmat(ctex('terracotta', 128, 64, (c, w, h, rr) => { noiseFill(c, w, h, rr, '#b5653a', 0.12, 1500, 2); c.fillStyle = 'rgba(255,255,255,0.15)'; for (let i = 0; i < 6; i++) c.fillRect(0, h * 0.8 + rr() * h * 0.2, w, 2); grime(c, w, h, rr, 1); }), 0.85);
    add(g, gLathe('pot', [[0, 0], [0.11, 0], [0.15, 0.24], [0.17, 0.25], [0.17, 0.3], [0.155, 0.3], [0.15, 0.26]], 16), terra);
    add(g, gCircle(0.15, 16), tmat(ctex('soil', 64, 64, (c, w, h, rr) => noiseFill(c, w, h, rr, '#3a2a1e', 0.3, 800, 2)), 1), 0, 0.27, 0);
    const stem = col(0x5a4a32, 0.9);
    const leaf = mat('deadleaf', { color: 0x7a5a32, roughness: 0.95, side: THREE.DoubleSide });
    const lg = cached(GEO, 'leafdisc', () => new THREE.CircleGeometry(0.035, 5).scale(1, 0.45, 1));
    for (let i = 0; i < 6; i++) {
      const a = r() * TAU, lean = 0.1 + r() * 0.3, hgt = 0.3 + r() * 0.35;
      const pts = [[0, 0.27, 0], [Math.cos(a) * lean * 0.2, 0.27 + hgt * 0.5, Math.sin(a) * lean * 0.2], [Math.cos(a) * lean * 0.6, 0.27 + hgt * 0.85, Math.sin(a) * lean * 0.6], [Math.cos(a) * lean * (0.9 + r() * 0.4), 0.27 + hgt * (0.7 + r() * 0.2), Math.sin(a) * lean]];
      add(g, new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts.map((q) => new THREE.Vector3(...q))), 6, 0.005, 4), stem);
      for (let k = 0; k < 3; k++) {
        const t2 = 0.4 + k * 0.2;
        add(g, lg, leaf, pts[2][0] * t2, 0.27 + hgt * t2 * 0.9, pts[2][2] * t2, r() * 3, r() * 3, r() * 3);
      }
    }
    for (let i = 0; i < 6; i++) add(g, lg, leaf, (r() - 0.5) * 0.7, 0.004, (r() - 0.5) * 0.7, -Math.PI / 2, 0, r() * 3);
  },
  kids_toy(g, r) {
    const color = pick(r, ['#8a5a32', '#c8a070', '#6a4a3a']);
    const fur = tmat(ctex('bearfur' + color, 128, 128, (c, w, h, rr) => { noiseFill(c, w, h, rr, color, 0.25, 5000, 2); grime(c, w, h, rr, 1.5); }), 1);
    const light = tmat(ctex('bearlight' + color, 64, 64, (c, w, h, rr) => noiseFill(c, w, h, rr, shade(color, 0.4), 0.2, 800, 2)), 1);
    const blk = col(0x111111, 0.3);
    add(g, gSphere(0.09, 10, 8), fur, 0, 0.1, 0, 0, 0, 0, 1, 1.15, 0.9);
    add(g, gSphere(0.055, 10, 8), light, 0, 0.09, 0.045, 0, 0, 0, 1, 1.2, 0.6);
    add(g, gSphere(0.075, 10, 8), fur, 0, 0.255, 0.01);
    add(g, gSphere(0.03, 8, 6), light, 0, 0.24, 0.07, 0, 0, 0, 1.1, 0.8, 0.9);
    add(g, gSphere(0.011, 6, 4), blk, 0, 0.25, 0.097);
    for (const s of [-1, 1]) {
      add(g, gSphere(0.009, 6, 4), blk, s * 0.027, 0.275, 0.068);
      add(g, gSphere(0.03, 8, 6), fur, s * 0.055, 0.315, 0.0, 0, 0, 0, 1, 1, 0.5);
      add(g, gSphere(0.018, 8, 6), light, s * 0.055, 0.315, 0.012, 0, 0, 0, 1, 1, 0.4);
      add(g, gSphere(0.03, 8, 6), fur, s * 0.1, 0.13, 0.03, 0.6, 0, s * 0.5, 1, 1.9, 1);
      add(g, gSphere(0.035, 8, 6), fur, s * 0.055, 0.035, 0.08, Math.PI / 2, 0, 0, 1, 1.8, 1);
      add(g, gCircle(0.026, 10), light, s * 0.055, 0.035, 0.143, Math.PI / 2, 0, 0);
    }
    if (r() < 0.6) add(g, gTorus(0.04, 0.01, 4, 12), col(0xc4221c, 0.6), 0, 0.19, 0.02, Math.PI / 2 + 0.2, 0, 0, 1, 1, 0.5);
    g.rotation.y = (r() - 0.5) * 0.6;
    if (r() < 0.3) { g.rotation.x = -1.2; }
  },
};


// ---------- house-room props ----------
// wall props (wall_frame, wall_clock, curtain): origin at the centre of the back plane, art faces +z
function atlasRect(cols, rows, i) { const cx = i % cols, cy = Math.floor(i / cols); return [cx / cols, 1 - (cy + 1) / rows, (cx + 1) / cols, 1 - cy / rows]; }

function drawArt(c, w, h, v, rr) {
  if (v < 3) { // landscapes
    const skies = [['#9ab8d0', '#e8dcc0'], ['#e8a070', '#f4d8a0'], ['#b8c4cc', '#e4e6e4']];
    const [s0, s1] = skies[v];
    const sky = c.createLinearGradient(0, 0, 0, h * 0.6); sky.addColorStop(0, s0); sky.addColorStop(1, s1);
    c.fillStyle = sky; c.fillRect(0, 0, w, h);
    if (v === 1) { c.fillStyle = 'rgba(250,220,150,0.9)'; c.beginPath(); c.arc(w * 0.7, h * 0.42, h * 0.08, 0, TAU); c.fill(); }
    const ridge = (y0, amp, color, f) => {
      c.fillStyle = color; c.beginPath(); c.moveTo(0, h);
      for (let x = 0; x <= w; x += 8) c.lineTo(x, y0 - Math.abs(Math.sin(x * f + y0)) * amp - Math.sin(x * f * 3.1) * amp * 0.2);
      c.lineTo(w, h); c.fill();
    };
    if (v === 0) { ridge(h * 0.5, h * 0.22, '#6a7a8a', 0.012); ridge(h * 0.58, h * 0.1, '#4a5a4a', 0.02); c.fillStyle = '#7a9ab0'; c.fillRect(0, h * 0.66, w, h * 0.12); ridge(h * 0.84, h * 0.04, '#3a4a2a', 0.05); }
    else if (v === 1) { ridge(h * 0.62, h * 0.05, '#8a6a3a', 0.01); for (let i = 0; i < 6; i++) { c.fillStyle = i % 2 ? '#c8a050' : '#a8803a'; c.beginPath(); c.moveTo(0, h * (0.66 + i * 0.06)); c.lineTo(w, h * (0.62 + i * 0.07)); c.lineTo(w, h); c.lineTo(0, h); c.fill(); } c.fillStyle = '#3a2a1a'; c.fillRect(w * 0.2, h * 0.5, w * 0.012, h * 0.14); c.beginPath(); c.arc(w * 0.206, h * 0.48, h * 0.06, 0, TAU); c.fill(); }
    else { ridge(h * 0.55, h * 0.15, '#9aa4ac', 0.015); c.fillStyle = '#eef0ee'; c.fillRect(0, h * 0.7, w, h * 0.3); for (let i = 0; i < 14; i++) { const x = rr() * w, y = h * (0.62 + rr() * 0.25), s = h * (0.08 + rr() * 0.1); c.fillStyle = '#2a3a2e'; c.beginPath(); c.moveTo(x, y - s); c.lineTo(x + s * 0.35, y); c.lineTo(x - s * 0.35, y); c.fill(); } }
    // brush texture
    for (let i = 0; i < 400; i++) { c.fillStyle = `rgba(${rr() < 0.5 ? '0,0,0' : '255,255,255'},0.05)`; c.fillRect(rr() * w, rr() * h, 6 + rr() * 10, 2); }
  } else { // abstract
    const pals = [['#e8dcc0', '#c4421c', '#1d4f7a', '#e8b030', '#2a2a2a'], ['#d8d4cc', '#5a7a6a', '#c8a070', '#8a3a2a', '#e8e4d8'], ['#1e2630', '#e8701c', '#e8dcc0', '#4a7a9a', '#c8b040']];
    const p = pals[v - 3];
    c.fillStyle = p[0]; c.fillRect(0, 0, w, h);
    if (v === 3) for (let i = 0; i < 9; i++) { c.fillStyle = p[1 + (i % 4)]; c.fillRect(rr() * w * 0.8, rr() * h * 0.8, w * (0.1 + rr() * 0.3), h * (0.08 + rr() * 0.3)); }
    else if (v === 4) for (let i = 0; i < 7; i++) { c.fillStyle = p[1 + (i % 4)]; c.globalAlpha = 0.85; c.beginPath(); c.arc(rr() * w, rr() * h, h * (0.08 + rr() * 0.25), 0, TAU); c.fill(); c.globalAlpha = 1; }
    else for (let i = 0; i < 12; i++) { c.strokeStyle = p[1 + (i % 4)]; c.lineWidth = 6 + rr() * 18; c.beginPath(); c.moveTo(rr() * w, 0); c.bezierCurveTo(rr() * w, h * 0.3, rr() * w, h * 0.7, rr() * w, h); c.stroke(); }
    for (let i = 0; i < 300; i++) { c.fillStyle = 'rgba(0,0,0,0.05)'; c.fillRect(rr() * w, rr() * h, 3, 3); }
  }
}


// shared crockery atlas (3 x 3 swatches): used by dish_stack and kitchen_counter_items
function dishMat() {
  return mat('dishmat', { map: ctex('dishatlas', 256, 256, (c, w, h, rr) => {
      const cols = ['#f2f0e8', '#e8dcc0', '#3a5a8a', '#8a2a22', '#4a6a4a', '#d8d4cc', '#f2f0e8', '#e8e4dc', '#c8a070'];
      cols.forEach((cc, i) => {
        const x = (i % 3) * 85, y = Math.floor(i / 3) * 85;
        c.fillStyle = cc; c.fillRect(x, y, 85, 85);
        if (i === 6) for (let k = 0; k < 14; k++) { c.fillStyle = `rgba(${90 + rr() * 60},${50 + rr() * 30},20,0.5)`; c.beginPath(); c.ellipse(x + rr() * 85, y + rr() * 50, 2 + rr() * 6, 1 + rr() * 4, rr() * 3, 0, TAU); c.fill(); } // dried food
        if (i === 7) { c.fillStyle = 'rgba(90,60,30,0.45)'; c.fillRect(x, y + 50, 85, 10); } // coffee ring
        for (let k = 0; k < 40; k++) { c.fillStyle = 'rgba(90,80,60,0.12)'; c.fillRect(x + rr() * 85, y + rr() * 85, 2, 2); }
      });
        }), roughness: 0.35, side: THREE.DoubleSide });
}
function dishRect(i) { const x = (i % 3) * 85 + 6, y = Math.floor(i / 3) * 85 + 6; return [x / 256, 1 - (y + 73) / 256, (x + 73) / 256, 1 - y / 256]; }

const HOUSE_PROPS = {
  wall_frame(g, r) {
    const v = Math.floor(r() * 6);
    const land = v < 3 || r() < 0.5;
    const W = 0.4 + r() * 0.4, H = land ? W * (0.66 + r() * 0.1) : W * (1.2 + r() * 0.15);
    const b = 0.035 + r() * 0.02, dep = 0.025;
    // all six pictures share one atlas (3 x 2 cells of 512 px), so every frame uses the same art material
    const art = tmat(ctex('frameartatlas', 1536, 1024, (c, w, h, rr) => {
      for (let k = 0; k < 6; k++) {
        c.save(); c.translate((k % 3) * 512, Math.floor(k / 3) * 512);
        c.fillStyle = '#ece6d4'; c.fillRect(0, 0, 512, 512); // mat board
        c.save(); c.beginPath(); c.rect(36, 36, 440, 440); c.clip(); c.translate(36, 36);
        drawArt(c, 440, 440, k, rr); c.restore();
        c.strokeStyle = 'rgba(0,0,0,0.25)'; c.lineWidth = 2; c.strokeRect(36, 36, 440, 440);
        c.fillStyle = 'rgba(210,200,180,0.12)'; c.fillRect(0, 0, 512, 512);
        const gr = c.createRadialGradient(512, 0, 0, 512, 0, 300); gr.addColorStop(0, 'rgba(255,250,230,0.25)'); gr.addColorStop(1, 'rgba(255,250,230,0)'); c.fillStyle = gr; c.fillRect(0, 0, 512, 512);
        grime(c, 512, 512, rr, 1.2);
        c.restore();
      }
    }), 0.35);
    const cr = [(v % 3) / 3, 1 - (Math.floor(v / 3) + 1) / 2, (v % 3 + 1) / 3, 1 - Math.floor(v / 3) / 2];
    const edge = [cr[0] + 0.005, cr[1] + 0.005, cr[0] + 0.01, cr[1] + 0.01];
    const frame = pick(r, [FX.wood('#3a2616'), FX.wood('#8a6440'), col(0x1d1e20, 0.5)]);
    add(g, gRemap(gBox(+(W - 2 * b + 0.004).toFixed(3), +(H - 2 * b + 0.004).toFixed(3), 0.006), `frameart${v}|${(W - 2 * b).toFixed(3)}|${(H - 2 * b).toFixed(3)}`, [edge, edge, edge, edge, cr, edge]), [art, art, art, art, art, art], 0, -(H - 2 * b) / 2, 0.012);
    add(g, gBox(W, b, dep), frame, 0, H / 2 - b, dep / 2);
    add(g, gBox(W, b, dep), frame, 0, -H / 2, dep / 2);
    add(g, gBox(b, H - 2 * b, dep), frame, -W / 2 + b / 2, -H / 2 + b, dep / 2);
    add(g, gBox(b, H - 2 * b, dep), frame, W / 2 - b / 2, -H / 2 + b, dep / 2);
    if (r() < 0.5) g.rotation.z = (r() - 0.5) * 0.12; // hanging crooked
  },
  wall_clock(g, r) {
    const R = 0.13 + r() * 0.05;
    const caseM = pick(r, [M.blackPl, M.whitePl, FX.wood('#5a3a22')]);
    const face = tmat(ctex('clockface', 256, 256, (c, w, h, rr) => {
      c.fillStyle = '#f2ecd8'; c.beginPath(); c.arc(128, 128, 128, 0, TAU); c.fill();
      for (let i = 0; i < 60; i++) {
        const a = i / 60 * TAU, big = i % 5 === 0;
        c.strokeStyle = '#1a1a1a'; c.lineWidth = big ? 5 : 1.5;
        c.beginPath(); c.moveTo(128 + Math.sin(a) * 118, 128 - Math.cos(a) * 118); c.lineTo(128 + Math.sin(a) * (big ? 100 : 110), 128 - Math.cos(a) * (big ? 100 : 110)); c.stroke();
      }
      for (let n = 1; n <= 12; n++) { const a = n / 12 * TAU; txt(c, String(n), 128 + Math.sin(a) * 82, 130 - Math.cos(a) * 82, 24, { color: '#1a1a1a' }); }
      const gr = c.createRadialGradient(128, 128, 40, 128, 128, 128); gr.addColorStop(0, 'rgba(180,150,90,0)'); gr.addColorStop(1, 'rgba(150,120,60,0.3)'); c.fillStyle = gr; c.fillRect(0, 0, w, h);
      grime(c, w, h, rr, 1.2);
    }), 0.5);
    const dep = 0.045;
    add(g, gCyl(R, R, dep, 24, true), caseM, 0, 0, 0, Math.PI / 2, 0, 0);
    add(g, gTorus(R - 0.006, 0.01, 4, 24), caseM, 0, 0, dep - 0.004);
    add(g, gCircle(R - 0.012, 24), face, 0, 0, dep - 0.012, Math.PI / 2, 0, 0);
    add(g, gCircle(R, 24), caseM, 0, 0, 0.001, -Math.PI / 2, 0, 0);
    // stopped hands (the minute and hour agree with each other)
    const hr = Math.floor(r() * 12), mn = Math.floor(r() * 60), sc = Math.floor(r() * 60);
    const hand = (ang, len, wid, z) => add(g, gBox(wid, len, 0.002), M.blackPl, 0, 0, dep - 0.012 + z, 0, 0, -ang);
    hand((hr + mn / 60) / 12 * TAU, R * 0.5, 0.012, 0.003);
    hand(mn / 60 * TAU, R * 0.78, 0.008, 0.006);
    hand(sc / 60 * TAU, R * 0.82, 0.002, 0.009);
    add(g, gCyl(0.008, 0.008, 0.012, 8), M.blackPl, 0, 0, dep - 0.012, Math.PI / 2, 0, 0);
    if (r() < 0.4) g.rotation.z = (r() - 0.5) * 0.1;
  },
  curtain(g, r) {
    const W = 1.2 + r() * 0.5, Hc = 1.5 + r() * 0.5;
    const color = pick(r, ['#8a3a2a', '#4a5a6a', '#c8b890']);
    const fab = FX.fabric(color);
    const cloth = mat('curtain' + color, { map: fab.map, roughness: 0.95, side: THREE.DoubleSide });
    const metal = pick(r, [col(0xb89a5a, 0.4, 0.5), col(0x2a2a2c, 0.5, 0.3), col(0xb4b9be, 0.38, 0.55)]);
    const zr = 0.085, yTop = 0;
    add(g, gCyl(0.012, 0.012, W, 10), metal, -W / 2, yTop, zr, 0, 0, -Math.PI / 2);
    for (const s of [-1, 1]) {
      add(g, gSphere(0.025, 8, 6), metal, s * (W / 2 + 0.02), yTop, zr);
      add(g, gBox(0.02, 0.04, zr), metal, s * (W / 2 - 0.08), yTop - 0.02, zr / 2 - 0.012 + 0.012);
    }
    // two panels, each gathered to a random width; one may hang off a few missing rings
    const open = r();
    for (const s of [-1, 1]) {
      const pw = W * (s < 0 ? 0.2 + open * 0.3 : 0.5 - open * 0.3 + 0.2) * 0.9;
      const x0 = s < 0 ? -W / 2 + 0.02 : W / 2 - 0.02 - pw;
      const sag = r() < 0.3 ? 0.06 + r() * 0.12 : 0;
      const nx = 22, ny = 6, folds = Math.max(3, Math.round(pw / 0.09));
      const geo = new THREE.PlaneGeometry(1, 1, nx, ny);
      const p = geo.attributes.position, uv = geo.attributes.uv;
      const ph = r() * 6, flat = pw * 1.8;
      for (let i = 0; i < p.count; i++) {
        const u = p.getX(i) + 0.5, v = 0.5 - p.getY(i); // v 0 at top
        let x = x0 + u * pw, z = zr + 0.02 + Math.sin(u * folds * TAU + ph) * (0.025 + v * 0.02);
        let y = yTop - 0.03 - v * Hc;
        const freeEnd = s < 0 ? 1 - u : u; // the end towards the window centre
        if (sag) y -= sag * Math.max(0, freeEnd - 0.6) / 0.4 * (1 - v * 0.6);
        if (v > 0.9) y += Math.sin(u * 17 + ph) * 0.015; // uneven hem
        z += v * v * 0.04 * Math.sin(u * 3 + ph);
        p.setXYZ(i, x, y, z);
        uv.setXY(i, u * flat, (1 - v) * Hc);
      }
      geo.computeVertexNormals();
      add(g, geo, cloth);
      for (let k = 0; k <= folds; k++) {
        const x = x0 + k / folds * pw;
        if (sag && (s < 0 ? k / folds < 0.4 : k / folds > 0.6)) continue;
        add(g, gTorus(0.018, 0.004, 3, 8), metal, x, yTop, zr);
      }
    }
  },
  mail_pile(g, r) {
    const t = ctex('mailatlas', 1024, 512, (c, w, h, rr) => {
      for (let i = 0; i < 8; i++) {
        const x = (i % 4) * 256, y = Math.floor(i / 4) * 256;
        c.save(); c.translate(x, y); c.beginPath(); c.rect(0, 0, 256, 256); c.clip();
        if (i === 0 || i === 1) { // window envelope / plain envelope (no addresses)
          c.fillStyle = i ? '#eae4d4' : '#f4f2ec'; c.fillRect(0, 0, 256, 256);
          c.fillStyle = 'rgba(0,0,0,0.06)'; c.fillRect(0, 0, 256, 8);
          if (!i) { c.fillStyle = '#dfe3e2'; c.fillRect(30, 120, 120, 60); c.strokeStyle = 'rgba(0,0,0,0.2)'; c.strokeRect(30, 120, 120, 60); }
          c.fillStyle = i ? '#7a9ab8' : '#c8c8c4'; c.fillRect(196, 20, 40, 34); // stamp / postage box
          if (i) { c.strokeStyle = 'rgba(40,40,40,0.4)'; for (let k = 0; k < 4; k++) { c.beginPath(); c.moveTo(170, 30 + k * 6); c.bezierCurveTo(185, 25 + k * 6, 200, 35 + k * 6, 236, 30 + k * 6); c.stroke(); } }
        } else if (i === 2) { // manila
          noiseFill(c, 256, 256, rr, '#d2b47a', 0.08, 800, 2);
          c.fillStyle = 'rgba(80,60,30,0.3)'; c.beginPath(); c.arc(128, 40, 10, 0, TAU); c.fill();
        } else if (i === 3) { // weekly specials flyer
          c.fillStyle = '#f6f2e6'; c.fillRect(0, 0, 256, 256);
          c.fillStyle = '#c4221c'; c.fillRect(0, 0, 256, 50);
          txt(c, 'WEEKLY SPECIALS', 128, 26, 26, { color: '#fff', maxW: 240, font: COND });
          const cols = ['#e8701c', '#2f7a32', '#f2c21b', '#1d4f9a', '#8a4a1a', '#c4221c'];
          for (let k = 0; k < 6; k++) { const bx2 = 12 + (k % 3) * 82, by = 62 + Math.floor(k / 3) * 96; c.fillStyle = cols[k]; c.beginPath(); c.arc(bx2 + 35, by + 32, 24, 0, TAU); c.fill(); txt(c, '$' + (1 + k) + '.99', bx2 + 35, by + 76, 18, { color: '#c4221c' }); }
        } else if (i === 4) { // coupon sheet
          c.fillStyle = '#fbf6dc'; c.fillRect(0, 0, 256, 256);
          c.setLineDash([6, 4]); c.strokeStyle = '#555';
          for (let k = 0; k < 4; k++) c.strokeRect(10 + (k % 2) * 124, 40 + Math.floor(k / 2) * 106, 112, 96);
          c.setLineDash([]);
          txt(c, 'COUPONS', 128, 20, 22, { color: '#1d4f9a' });
          for (let k = 0; k < 4; k++) txt(c, ['50% OFF', 'SAVE $1', 'BUY 1 GET 1', 'FREE'][k], 66 + (k % 2) * 124, 88 + Math.floor(k / 2) * 106, 18, { color: '#111', maxW: 100 });
        } else if (i === 5) { // catalogue cover
          c.fillStyle = '#e8e4dc'; c.fillRect(0, 0, 256, 256);
          c.fillStyle = '#3a5a7a'; c.fillRect(0, 40, 256, 150);
          c.fillStyle = '#c8a070'; c.fillRect(30, 100, 90, 70); c.fillStyle = '#8a3a2a'; c.fillRect(140, 80, 80, 100);
          txt(c, 'HOME & GARDEN', 128, 22, 22, { color: '#222', maxW: 240 });
          txt(c, 'SPRING CATALOG', 128, 220, 18, { color: '#222' });
        } else if (i === 6) { // postcard: lake view
          drawArt(c, 256, 256, 0, rr);
        } else { // utility notice, generic
          c.fillStyle = '#f4f2ec'; c.fillRect(0, 0, 256, 256);
          c.fillStyle = '#2a6a5a'; c.fillRect(0, 0, 256, 34);
          txt(c, 'STATEMENT', 128, 18, 20, { color: '#fff' });
          finePrint(c, 20, 50, 216, 10, 14, rr, '#444');
          txt(c, 'FINAL NOTICE', 128, 216, 22, { color: '#c4221c' });
        }
        grime(c, 256, 256, rr, 1.2);
        c.restore();
      }
    });
    const merger = new Merger(1);
    const plain = [0.02, 0.52, 0.05, 0.55];
    const kinds = [[0.24, 0.0015, 0.105, 0], [0.24, 0.0015, 0.105, 1], [0.23, 0.004, 0.3, 2], [0.216, 0.0008, 0.28, 3], [0.216, 0.0008, 0.28, 4], [0.2, 0.006, 0.26, 5], [0.15, 0.001, 0.105, 6], [0.216, 0.0008, 0.28, 7]];
    const n = 7 + Math.floor(r() * 8);
    let y = 0;
    for (let i = 0; i < n; i++) {
      const [w, h, d, cell] = kinds[Math.floor(r() * kinds.length)];
      const rc = atlasRect(4, 2, cell);
      const slid = i > 2 && r() < 0.15;
      const x = slid ? (r() - 0.5) * 0.5 : (r() - 0.5) * 0.06, z = slid ? (r() - 0.5) * 0.4 : (r() - 0.5) * 0.06;
      const m = new THREE.Matrix4().compose(new THREE.Vector3(x, slid ? 0 : y, z), new THREE.Quaternion().setFromEuler(new THREE.Euler(0, r() * TAU, 0)), new THREE.Vector3(1, 1, 1));
      merger.add(gBox(w, h, d), m, [plain, plain, rc, plain, plain, plain], [0]);
      if (!slid) y += h + 0.0004;
    }
    for (const mesh of merger.meshes([mat('mailmat', { map: t, roughness: 0.9 })])) g.add(mesh);
  },
  shoes(g, r) {
    const color = pick(r, ['#2a3a5a', '#7a2a22', '#3a3a3c']);
    const upper = tmat(ctex('shoeup' + color, 256, 128, (c, w, h, rr) => {
      noiseFill(c, w, h, rr, color, 0.08, 2000, 2);
      c.fillStyle = shade(color, -0.25); c.fillRect(0, h * 0.75, w, h * 0.25); // toe cap / lower panel
      c.strokeStyle = 'rgba(255,255,255,0.35)'; c.setLineDash([3, 3]); c.beginPath(); c.moveTo(0, h * 0.72); c.lineTo(w, h * 0.72); c.stroke(); c.setLineDash([]);
      // mud and salt stains at the bottom
      for (let i = 0; i < 40; i++) { c.fillStyle = rr() < 0.6 ? 'rgba(80,60,40,0.35)' : 'rgba(235,235,225,0.35)'; c.beginPath(); c.ellipse(rr() * w, h * (0.8 + rr() * 0.2), 3 + rr() * 10, 2 + rr() * 4, 0, 0, TAU); c.fill(); }
      grime(c, w, h, rr, 1.5);
    }), 0.8);
    const sole = mat('shoesole', { color: 0xd8d4c8, roughness: 0.9 });
    const dark = M.blackPl;
    const prof = (t) => { // t 0 heel .. 1 toe -> half width
      const base = 0.036 + 0.012 * Math.sin(Math.min(1, t * 1.25) * Math.PI * 0.9);
      const toe = t > 0.82 ? Math.sqrt(Math.max(0.05, 1 - ((t - 0.82) / 0.18) ** 2)) : 1;
      const heel = t < 0.08 ? Math.sqrt(Math.max(0.2, 1 - ((0.08 - t) / 0.08) ** 2)) : 1;
      return base * toe * heel;
    };
    const L = 0.27;
    const body = (key, h0, hFn, segx, segy, widen) => cached(GEO, 'shoe' + key, () => {
      const b = new THREE.BoxGeometry(1, 1, 1, segx, segy, 10);
      const p = b.attributes.position;
      for (let i = 0; i < p.count; i++) {
        const xn = p.getX(i) * 2, yn = p.getY(i) + 0.5, t = p.getZ(i) + 0.5;
        const hw = prof(t) * widen, hh = hFn(t);
        p.setXYZ(i, xn * hw * (1 - 0.3 * yn * yn), h0 + yn * hh, (t - 0.5) * L);
      }
      b.computeVertexNormals();
      return b;
    });
    const solG = body('sole', 0, () => 0.022, 2, 1, 1.06);
    const upG = body('up', 0.02, (t) => (t < 0.45 ? 0.085 - t * 0.02 : 0.076 - (t - 0.45) * 0.08) , 3, 3, 1.0);
    const one = (x, z, ry, side) => {
      const s = new THREE.Group();
      add(s, solG, sole);
      add(s, upG, upper);
      add(s, gCircle(0.03, 10), dark, 0, 0.1, -0.075, 0, 0, 0, 0.95, 1, 1.5);
      for (let k = 0; k < 4; k++) add(s, gBox(0.045, 0.004, 0.006), M.whitePl, 0, 0.088 - k * 0.006, -0.03 + k * 0.022, 0.25, 0, 0);
      s.position.set(x, 0, z); s.rotation.y = ry;
      if (side) { s.rotation.z = Math.PI / 2 * side; s.position.y = 0.05; s.position.x += side * 0.05; }
      g.add(s);
    };
    const knocked = r() < 0.35;
    one(-0.055, 0, (r() - 0.5) * 0.15, 0);
    one(knocked ? 0.12 : 0.055, knocked ? 0.05 : (r() - 0.5) * 0.04, knocked ? 0.6 + r() : (r() - 0.5) * 0.15, knocked ? 1 : 0);
  },
  clothes_pile(g, r) {
    // garment silhouettes on a transparent atlas; draped grids give the pile its shape
    const t = ctex('clothesatlas', 512, 512, (c, w, h, rr) => {
      c.clearRect(0, 0, w, h);
      const cell = (i, draw) => { c.save(); c.translate((i % 2) * 256, Math.floor(i / 2) * 256); draw(); c.restore(); };
      const fabric = (base, kind) => {
        noiseFill(c, 256, 256, rr, base, 0.08, 1500, 2);
        if (kind === 'denim') { c.strokeStyle = 'rgba(255,255,255,0.08)'; for (let k = -256; k < 256; k += 4) { c.beginPath(); c.moveTo(k, 0); c.lineTo(k + 256, 256); c.stroke(); } }
        if (kind === 'plaid') { c.globalAlpha = 0.5; c.fillStyle = '#1a1a1a'; for (let k = 0; k < 256; k += 48) { c.fillRect(k, 0, 18, 256); c.fillRect(0, k, 256, 18); } c.fillStyle = '#e8d8a0'; for (let k = 30; k < 256; k += 48) { c.fillRect(k, 0, 3, 256); c.fillRect(0, k, 256, 3); } c.globalAlpha = 1; }
        if (kind === 'knit') { c.strokeStyle = 'rgba(0,0,0,0.15)'; for (let k = 0; k < 256; k += 5) { c.beginPath(); c.moveTo(k, 0); c.lineTo(k, 256); c.stroke(); } }
        grime(c, 256, 256, rr, 1.5);
      };
      const shirt = () => { c.beginPath(); c.moveTo(70, 20); c.lineTo(100, 10); c.quadraticCurveTo(128, 30, 156, 10); c.lineTo(186, 20); c.lineTo(250, 70); c.lineTo(222, 110); c.lineTo(190, 85); c.lineTo(192, 246); c.lineTo(64, 246); c.lineTo(66, 85); c.lineTo(34, 110); c.lineTo(6, 70); c.closePath(); c.clip(); };
      const pants = () => { c.beginPath(); c.moveTo(56, 6); c.lineTo(200, 6); c.lineTo(226, 250); c.lineTo(146, 250); c.lineTo(128, 90); c.lineTo(110, 250); c.lineTo(30, 250); c.closePath(); c.clip(); };
      const sweater = () => { c.beginPath(); c.moveTo(60, 14); c.quadraticCurveTo(128, 40, 196, 14); c.lineTo(252, 200); c.lineTo(214, 214); c.lineTo(192, 110); c.lineTo(196, 250); c.lineTo(60, 250); c.lineTo(64, 110); c.lineTo(42, 214); c.lineTo(4, 200); c.closePath(); c.clip(); };
      cell(0, () => { shirt(); fabric('#7a1d1a', 'plaid'); });
      cell(1, () => { pants(); fabric('#2a3e5e', 'denim'); c.fillStyle = 'rgba(255,255,255,0.15)'; c.fillRect(0, 0, 256, 14); });
      cell(2, () => { sweater(); fabric('#8a8a84', 'knit'); });
      cell(3, () => { shirt(); fabric(pick(rr, ['#2f5a3a', '#c8b890', '#3a4a6a']), 'tee'); });
    });
    const merger = new Merger(1);
    const n = 3 + Math.floor(r() * 3);
    let top = 0.02;
    for (let k = 0; k < n; k++) {
      const cell = k < 4 ? k : Math.floor(r() * 4);
      const sw = 0.5 + r() * 0.15, sd = cell === 1 ? 0.8 : 0.62;
      const cx = (r() - 0.5) * 0.25, cz = (r() - 0.5) * 0.25, rot = r() * TAU, ph = r() * 10;
      const nx = 11, nz = 11;
      const geo = new THREE.PlaneGeometry(1, 1, nx, nz).rotateX(-Math.PI / 2);
      const p = geo.attributes.position;
      const cs = Math.cos(rot), sn = Math.sin(rot);
      for (let i = 0; i < p.count; i++) {
        const u = p.getX(i), v = p.getZ(i);
        // bunch it up: shrink towards the centre and lift into a mound
        const bunch = 0.55 + r() * 0.08;
        let x = u * sw * bunch, z = v * sd * bunch;
        const rx = x * cs - z * sn + cx, rz = x * sn + z * cs + cz;
        const d = Math.hypot(rx, rz);
        const mound = Math.max(0, top + 0.06 - d * 0.35) + Math.sin(u * 9 + ph) * 0.012 + Math.cos(v * 11 + ph) * 0.012;
        p.setXYZ(i, rx, Math.max(0.004 + k * 0.002, mound), rz);
      }
      geo.computeVertexNormals();
      merger.add(geo, new THREE.Matrix4(), [atlasRect(2, 2, cell)], [0]);
      top += 0.02;
    }
    for (const mesh of merger.meshes([mat('clothesmat', { map: t, roughness: 0.95, side: THREE.DoubleSide, alphaTest: 0.5 })])) g.add(mesh);
  },
  dish_stack(g, r) {
    const R = dishRect;
    const merger = new Merger(1);
    const M4 = (x, y, z, ry = 0, rx = 0) => new THREE.Matrix4().compose(new THREE.Vector3(x, y, z), new THREE.Quaternion().setFromEuler(new THREE.Euler(rx, ry, 0)), new THREE.Vector3(1, 1, 1));
    const plate = gLathe('dplate2', [[0, 0], [0.08, 0], [0.12, 0.018], [0.116, 0.02], [0.078, 0.004], [0, 0.004]], 12);
    const bowl = gLathe('dbowl2', [[0, 0], [0.04, 0], [0.075, 0.058], [0.07, 0.058], [0.036, 0.006], [0, 0.006]], 12);
    const mug = gLathe('dmug2', [[0, 0], [0.04, 0], [0.042, 0.095], [0.037, 0.095], [0.035, 0.008], [0, 0.008]], 10);
    const handle = gTorus(0.025, 0.007, 4, 8, Math.PI * 1.2);
    const pc = pick(r, [0, 1, 5]);
    const np = 3 + Math.floor(r() * 4);
    const px = -0.08 + (r() - 0.5) * 0.04;
    for (let i = 0; i < np; i++) merger.add(plate, M4(px + (r() - 0.5) * 0.008, i * 0.0145, (r() - 0.5) * 0.008, r() * TAU), [R(i === np - 1 && r() < 0.6 ? 6 : pc)], [0]);
    const nb = Math.floor(r() * 3);
    for (let i = 0; i < nb; i++) merger.add(bowl, M4(0.12, i * 0.02, -0.06, r() * TAU), [R(pick(r, [0, 2, 4]))], [0]);
    const nm = 1 + Math.floor(r() * 3);
    for (let i = 0; i < nm; i++) {
      const c2 = R(pick(r, [2, 3, 4, 7, 1]));
      const a = 0.6 + i * 1.3 + r() * 0.4, d = 0.17;
      const mx = Math.cos(a) * d, mz = Math.sin(a) * d, ry = r() * TAU;
      const tip = i === nm - 1 && r() < 0.3;
      const base = M4(mx, tip ? 0.042 : 0, mz, ry, tip ? Math.PI / 2 : 0);
      merger.add(mug, base, [c2], [0]);
      merger.add(handle, base.clone().multiply(M4(0.045, 0.05, 0, 0, 0).multiply(new THREE.Matrix4().makeRotationZ(-Math.PI * 0.6))), [c2], [0]);
    }
    if (r() < 0.6) { // cutlery on the top plate
      for (let k = 0; k < 2; k++) merger.add(gBox(0.012, 0.003, 0.19), M4(px + (k - 0.5) * 0.04, np * 0.0145 + 0.006 + k * 0.003, 0, 0.3 + k * 0.4), [R(5)], [0]);
    }
    for (const mesh of merger.meshes([dishMat()])) g.add(mesh);
  },
};
Object.assign(PROP_BUILDERS, HOUSE_PROPS);
const WALL_PROPS = new Set(['wall_frame', 'wall_clock', 'curtain']);
export const PROP_KINDS = Object.keys(PROP_BUILDERS);
const FLAT_PROPS = new Set(['rug', 'paper_scatter', 'glass_shards']);
const DECAL = { polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 };

export function makeProp(kind, seed = 0) {
  const g = new THREE.Group();
  const r = rng(hashStr(String(kind)) ^ Math.imul((seed | 0) + 3, 2246822519));
  const fn = PROP_BUILDERS[kind];
  if (fn) fn(g, r);
  else { const b = new THREE.Group(); PROP_BUILDERS.cardboard_box(b, r); g.add(b); }
  return finish(g, kind, FLAT_PROPS.has(kind), WALL_PROPS.has(kind));
}

// =====================================================================
// Fixtures: furniture and store fittings that fill a collision box exactly
// =====================================================================

// box whose UVs are in meters (textures tile once per meter), base on y = 0
function gBoxW(w, h, d) {
  const k = `boxw${w.toFixed(3)},${h.toFixed(3)},${d.toFixed(3)}`;
  return cached(GEO, k, () => {
    const g = new THREE.BoxGeometry(w, h, d);
    const uv = g.attributes.uv;
    const dims = [[d, h], [d, h], [w, d], [w, d], [w, h], [w, h]];
    for (let f = 0; f < 6; f++) for (let i = 0; i < 4; i++) { const n = f * 4 + i; uv.setXY(n, uv.getX(n) * dims[f][0], uv.getY(n) * dims[f][1]); }
    g.translate(0, h / 2, 0);
    return g;
  });
}
function tex1m(key, px, draw) { return ctex('fx|' + key, px, px, draw, { repeat: [1, 1] }); }
function dust(c, w, h, r, amt = 1) {
  grime(c, w, h, r, amt);
  // fine settled dust
  for (let i = 0; i < 1500 * amt; i++) { c.fillStyle = `rgba(200,190,170,${0.04 + r() * 0.06})`; c.fillRect(r() * w, r() * h, 1.5, 1.5); }
}
// every wood in props and fixtures snaps to one of three shared tones (one texture each)
const WOOD_TONES = ['#4a3020', '#6a4528', '#8a6440'];
function woodTone(hex) { const l = new THREE.Color(hex).getHSL({}, THREE.SRGBColorSpace).l; return l < 0.25 ? WOOD_TONES[0] : l < 0.34 ? WOOD_TONES[1] : WOOD_TONES[2]; }
const FX = {
  wood(tone = '#6a4528') {
    tone = woodTone(tone);
    return mat('fxwood' + tone, { map: tex1m('wood' + tone, 512, (c, w, h, r) => {
      c.fillStyle = tone; c.fillRect(0, 0, w, h);
      for (let i = 0; i < 140; i++) {
        c.strokeStyle = `rgba(${r() < 0.5 ? '30,18,8' : '255,230,200'},${0.04 + r() * 0.1})`; c.lineWidth = 1 + r() * 3;
        const y0 = r() * h; c.beginPath(); c.moveTo(0, y0);
        for (let x = 0; x <= w; x += 32) c.lineTo(x, y0 + Math.sin(x * 0.01 + i) * 6);
        c.stroke();
      }
      dust(c, w, h, r, 1);
    }), roughness: 0.62 });
  },
  fabric(color) {
    return mat('fxfab' + color, { map: tex1m('fab' + color, 256, (c, w, h, r) => {
      c.fillStyle = color; c.fillRect(0, 0, w, h);
      for (let y = 0; y < h; y += 2) { c.fillStyle = `rgba(0,0,0,${0.05 + r() * 0.06})`; c.fillRect(0, y, w, 1); }
      for (let x = 0; x < w; x += 2) { c.fillStyle = `rgba(255,255,255,${0.03 + r() * 0.04})`; c.fillRect(x, 0, 1, h); }
      for (let i = 0; i < 5; i++) { const x = r() * w, y = r() * h, s = 20 + r() * 50; const gr = c.createRadialGradient(x, y, 0, x, y, s); gr.addColorStop(0, 'rgba(60,45,30,0.18)'); gr.addColorStop(1, 'rgba(60,45,30,0)'); c.fillStyle = gr; c.fillRect(x - s, y - s, s * 2, s * 2); }
      dust(c, w, h, r, 0.8);
    }), roughness: 0.95 });
  },
  sheet() {
    return mat('fxsheet', { map: tex1m('sheet', 256, (c, w, h, r) => {
      noiseFill(c, w, h, r, '#e4e2da', 0.05, 1500, 2);
      c.strokeStyle = 'rgba(0,0,0,0.07)';
      for (let i = 0; i < 25; i++) { c.lineWidth = 1 + r() * 2; c.beginPath(); c.moveTo(r() * w, r() * h); c.bezierCurveTo(r() * w, r() * h, r() * w, r() * h, r() * w, r() * h); c.stroke(); }
      dust(c, w, h, r, 0.8);
    }), roughness: 0.95, side: THREE.DoubleSide });
  },
  enamel(key = 'w', base = '#e9e8e2') {
    return mat('fxenamel' + key, { map: tex1m('enamel' + key, 256, (c, w, h, r) => {
      c.fillStyle = base; c.fillRect(0, 0, w, h);
      for (let i = 0; i < 18; i++) { const x = r() * w; const g2 = c.createLinearGradient(0, 0, 0, h); g2.addColorStop(0, 'rgba(120,100,60,0)'); g2.addColorStop(1, `rgba(120,100,60,${0.05 + r() * 0.08})`); c.fillStyle = g2; c.fillRect(x, r() * h * 0.5, 2 + r() * 4, h); }
      dust(c, w, h, r, 1);
    }), roughness: 0.3 });
  },
  painted(color) {
    return mat('fxpaint' + color, { map: tex1m('paint' + color, 256, (c, w, h, r) => {
      noiseFill(c, w, h, r, color, 0.04, 1500, 2);
      for (let i = 0; i < 25; i++) { c.fillStyle = 'rgba(60,50,40,0.25)'; c.beginPath(); c.ellipse(r() * w, r() * h, 1 + r() * 4, 1 + r() * 2, r() * 3, 0, TAU); c.fill(); }
      dust(c, w, h, r, 1);
    }), roughness: 0.55, metalness: 0.05 });
  },
  metal(color = '#9ea3a8', key = '') {
    return mat('fxmetal' + color + key, { map: tex1m('metal' + color, 128, (c, w, h, r) => {
      c.fillStyle = color; c.fillRect(0, 0, w, h);
      for (let i = 0; i < 200; i++) { c.fillStyle = r() < 0.5 ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'; c.fillRect(0, r() * h, w, 1); }
      dust(c, w, h, r, 0.6);
    }), roughness: 0.38, metalness: 0.5 });
  },
  dark(key = 'k', color = '#1b1c1e', rough = 0.6) {
    return mat('fxdark' + key, { map: tex1m('dark' + key, 128, (c, w, h, r) => { noiseFill(c, w, h, r, color, 0.04, 600, 2); dust(c, w, h, r, 1.2); }), roughness: rough });
  },
  laminate(color = '#b8b4aa') {
    return mat('fxlam' + color, { map: tex1m('lam' + color, 256, (c, w, h, r) => {
      noiseFill(c, w, h, r, color, 0.06, 3000, 1.5);
      dust(c, w, h, r, 1.2);
    }), roughness: 0.5 });
  },
  counterTop(color = '#cfc8b8') {
    return mat('fxtop' + color, { map: tex1m('top' + color, 256, (c, w, h, r) => {
      noiseFill(c, w, h, r, color, 0.1, 5000, 2);
      for (let i = 0; i < 300; i++) { c.fillStyle = r() < 0.5 ? 'rgba(60,50,40,0.35)' : 'rgba(255,255,255,0.3)'; c.fillRect(r() * w, r() * h, 2, 2); }
      dust(c, w, h, r, 1.5);
    }), roughness: 0.4 });
  },
  card() { return mat('fxcard', { map: tex1m('card', 256, (c, w, h, r) => { noiseFill(c, w, h, r, '#a9824f', 0.1, 2500, 2); c.fillStyle = 'rgba(200,170,110,0.7)'; c.fillRect(0, h * 0.45, w, h * 0.1); dust(c, w, h, r, 1); }), roughness: 0.9 }); },
  glass() {
    return mat('fxglass', { map: tex1m('glass', 256, (c, w, h, r) => {
      c.fillStyle = '#c8d4d8'; c.fillRect(0, 0, w, h);
      for (let i = 0; i < 40; i++) { const x = r() * w, y = r() * h, s = 10 + r() * 60; const g2 = c.createRadialGradient(x, y, 0, x, y, s); g2.addColorStop(0, 'rgba(255,255,255,0.6)'); g2.addColorStop(1, 'rgba(255,255,255,0)'); c.fillStyle = g2; c.fillRect(x - s, y - s, s * 2, s * 2); }
      for (let i = 0; i < 30; i++) { c.fillStyle = 'rgba(90,80,60,0.4)'; c.fillRect(r() * w, r() * h * 0.6 + h * 0.4, 1 + r() * 2, 10 + r() * 50); }
    }), roughness: 0.1, metalness: 0.1, transparent: true, opacity: 0.32, depthWrite: false });
  },
};
// box helper in fixture space (x0..x1, y0..y1, z0..z1)
function bx(g, m, x0, x1, y0, y1, z0, z1, world = true) {
  const w = Math.max(0.001, x1 - x0), h = Math.max(0.001, y1 - y0), d = Math.max(0.001, z1 - z0);
  return add(g, world ? gBoxW(w, h, d) : gBox(w, h, d), m, (x0 + x1) / 2, y0, (z0 + z1) / 2);
}
function rbx(g, m, x0, x1, y0, y1, z0, z1, rad) {
  const w = x1 - x0, h = y1 - y0, d = z1 - z0;
  return add(g, gRBox(+w.toFixed(3), +h.toFixed(3), +d.toFixed(3), rad), m, (x0 + x1) / 2, y0, (z0 + z1) / 2);
}

// Every builder works in a canonical frame: long side along x (length L), depth D along z,
// height H, front facing +z, everything inside x in [-L/2, L/2], z in [-D/2, D/2], y in [0, H].
const FIXTURES = {
  sofa(g, L, D, H, r) {
    const F = FX.fabric(pick(r, ['#5a5f4a', '#6a4a3a', '#3e4a5a']));
    const W = FX.wood('#3a2616');
    const legH = Math.min(0.08, H * 0.1), seatH = Math.min(0.46, H * 0.55);
    const a = Math.min(0.2, L * 0.1), bt = Math.min(0.22, D * 0.25), armH = Math.min(H, seatH + 0.2);
    for (const x of [-L / 2 + 0.06, L / 2 - 0.06]) for (const z of [-D / 2 + 0.06, D / 2 - 0.06]) add(g, gCyl(0.025, 0.02, legH, 8), W, x, 0, z);
    rbx(g, F, -L / 2, L / 2, legH, seatH - 0.12, -D / 2, D / 2, 0.03);
    rbx(g, F, -L / 2, L / 2, legH, H, -D / 2, -D / 2 + bt, 0.05);
    for (const s of [-1, 1]) rbx(g, F, s < 0 ? -L / 2 : L / 2 - a, s < 0 ? -L / 2 + a : L / 2, legH, armH, -D / 2, D / 2, 0.06);
    const n = L - 2 * a > 1.5 ? 3 : L - 2 * a > 0.9 ? 2 : 1;
    const cw = (L - 2 * a) / n;
    for (let i = 0; i < n; i++) {
      const x0 = -L / 2 + a + i * cw + 0.006, x1 = x0 + cw - 0.012;
      const sag = r() * 0.025;
      rbx(g, F, x0, x1, seatH - 0.13, seatH - sag, -D / 2 + bt + 0.005, D / 2 - 0.005, 0.05);
      const back = rbx(g, F, x0 + 0.01, x1 - 0.01, seatH - 0.02, Math.min(H - 0.02, seatH + (H - seatH) * 0.85), -D / 2 + bt, -D / 2 + bt + 0.16, 0.06);
      back.rotation.x = -0.08 - r() * 0.08;
    }
    if (r() < 0.8) { // throw pillow and a blanket over the arm
      const P = new THREE.Group();
      add(P, gRBox(0.4, 0.38, 0.12, 0.05), texPlaidMat(r), 0, 0, 0);
      P.position.set(-L / 2 + a + 0.25, seatH - 0.02, -D / 2 + bt + 0.15); P.rotation.set(-0.5, 0.3, 0.35);
      g.add(P);
    }
  },
  table(g, L, D, H, r) {
    const W = FX.wood(pick(r, ['#6a4528', '#8a6440', '#4a3020']));
    const T = FX.wood('#7a5434');
    const top = 0.035;
    bx(g, T, -L / 2, L / 2, H - top, H, -D / 2, D / 2);
    const lx = L / 2 - 0.08, lz = D / 2 - 0.08;
    for (const x of [-lx, lx]) for (const z of [-lz, lz]) bx(g, W, x - 0.03, x + 0.03, 0, H - top, z - 0.03, z + 0.03);
    bx(g, W, -lx, lx, H - top - 0.08, H - top, -lz - 0.01, -lz + 0.01); bx(g, W, -lx, lx, H - top - 0.08, H - top, lz - 0.01, lz + 0.01);
    bx(g, W, -lx - 0.01, -lx + 0.01, H - top - 0.08, H - top, -lz, lz); bx(g, W, lx - 0.01, lx + 0.01, H - top - 0.08, H - top, -lz, lz);
    if (D < 0.5 || H < 0.5) return;
    const per = Math.max(1, Math.floor((L - 0.2) / 0.6));
    const seatY = Math.min(0.45, H - 0.22);
    const chair = (x, z, ry) => {
      const C = new THREE.Group();
      const sw = 0.4;
      bx(C, W, -sw / 2, sw / 2, seatY - 0.035, seatY, -0.2, 0.2);
      for (const cx of [-sw / 2 + 0.03, sw / 2 - 0.03]) for (const cz of [-0.17, 0.17]) bx(C, W, cx - 0.017, cx + 0.017, 0, seatY - 0.035, cz - 0.017, cz + 0.017);
      for (const cx of [-sw / 2 + 0.03, sw / 2 - 0.03]) bx(C, W, cx - 0.017, cx + 0.017, seatY, H - top - 0.012, 0.2 - 0.03, 0.2 - 0.005);
      bx(C, W, -sw / 2 + 0.02, sw / 2 - 0.02, H - top - 0.1, H - top - 0.02, 0.2 - 0.03, 0.2 - 0.008);
      bx(C, W, -sw / 2 + 0.02, sw / 2 - 0.02, seatY + 0.12, seatY + 0.16, 0.2 - 0.028, 0.2 - 0.01);
      C.position.set(x, 0, z); C.rotation.y = ry + (r() - 0.5) * 0.08;
      g.add(C);
    };
    // chair backs sit at the table edge (chair local +z is its back)
    const cw = Math.min(0.4, L / per - 0.06);
    const ends = L / D < 1.5 && D >= 1.15;
    for (const s of [-1, 1]) for (let i = 0; i < per; i++) {
      if (r() < 0.12) continue; // the odd chair is missing
      const cx = -L / 2 + (i + 0.5) * (L / per) + (r() - 0.5) * (ends ? 0.02 : Math.max(0, L / per - cw - 0.06));
      chair(cx, s * (D / 2 - 0.205), s > 0 ? 0 : Math.PI);
    }
    // squarish tables also get a chair at each end
    if (ends) for (const s of [-1, 1]) if (r() > 0.12) chair(s * (L / 2 - 0.205), (r() - 0.5) * 0.06, s * Math.PI / 2);
  },
  bed(g, L, D, H, r) {
    const W = FX.wood(pick(r, ['#5a3a22', '#7a5a3a', '#3a2a1e']));
    const S = FX.sheet();
    const B = texPlaidMat(r, true);
    const mTop = Math.min(0.6, H * 0.62);
    const hb = 0.06;
    bx(g, W, -L / 2, -L / 2 + hb, 0, H, -D / 2, D / 2);
    const fbH = Math.min(H, mTop + 0.06);
    bx(g, W, L / 2 - 0.05, L / 2, 0, fbH, -D / 2, D / 2);
    for (const z of [-D / 2, D / 2 - 0.04]) bx(g, W, -L / 2 + hb, L / 2 - 0.05, 0.14, 0.32, z, z + 0.04);
    rbx(g, S, -L / 2 + hb + 0.01, L / 2 - 0.06, 0.32, mTop, -D / 2 + 0.03, D / 2 - 0.03, 0.05);
    // pillows
    const np = D > 1.2 ? 2 : 1;
    for (let i = 0; i < np; i++) {
      const pz = np === 1 ? 0 : (i - 0.5) * D * 0.48;
      const p = rbx(g, S, -L / 2 + hb + 0.04, -L / 2 + hb + 0.4, mTop - 0.02, mTop + 0.12, pz - Math.min(0.32, D * 0.4), pz + Math.min(0.32, D * 0.4), 0.06);
      p.rotation.set(0, (r() - 0.5) * 0.2, (r() - 0.5) * 0.15);
    }
    // rumpled blanket: draped grid over the mattress, hanging down both sides
    const x0 = -L / 2 + hb + 0.45 + r() * 0.2, x1 = L / 2 - 0.07;
    const halfW = D / 2 - 0.02, drop = Math.min(0.22, mTop - 0.12);
    const nx = 18, ns = 14;
    const geo = new THREE.PlaneGeometry(1, 1, nx, ns);
    const p = geo.attributes.position, uv = geo.attributes.uv;
    const ph = r() * 10;
    for (let i = 0; i < p.count; i++) {
      const u = p.getX(i) + 0.5, v = p.getY(i) + 0.5;
      const x = x0 + (x1 - x0) * u;
      const s = (v - 0.5) * 2 * (halfW + drop);
      const wr = Math.sin(x * 9 + ph + s * 3) * 0.018 + Math.sin(x * 23 + s * 11 + ph) * 0.006;
      let y, z;
      if (Math.abs(s) <= halfW) { z = s; y = mTop + 0.025 + wr * (1 - Math.abs(s) / halfW * 0.5) + (u < 0.12 ? (0.12 - u) * 0.5 : 0); }
      else { z = Math.sign(s) * (halfW + 0.01); y = mTop + 0.02 - (Math.abs(s) - halfW) + wr * 0.4; }
      p.setXYZ(i, x, y, z);
      uv.setXY(i, u * (x1 - x0), v * (halfW + drop) * 2);
    }
    geo.computeVertexNormals();
    add(g, geo, B);
    // folded-back edge
    add(g, gCyl(0.03, 0.03, 2 * halfW, 8), B, x0 + 0.02, mTop + 0.03, -halfW, Math.PI / 2, 0, 0);
  },
  dresser(g, L, D, H, r) {
    const W = FX.wood(pick(r, ['#6a4528', '#5a3a22', '#8a6a48']));
    const K = FX.metal('#b8a070', 'brass');
    bx(g, W, -L / 2, L / 2, H - 0.03, H, -D / 2, D / 2);
    bx(g, W, -L / 2 + 0.01, L / 2 - 0.01, 0, H - 0.03, -D / 2, D / 2 - 0.02);
    bx(g, FX.dark('dresserin', '#1a120c'), -L / 2 + 0.02, L / 2 - 0.02, 0.1, H - 0.04, D / 2 - 0.0225, D / 2 - 0.02);
    const rows = Math.max(2, Math.round((H - 0.12) / 0.22));
    const cols = L > 1.0 ? 2 : 1;
    const dh = (H - 0.03 - 0.1) / rows;
    for (let i = 0; i < rows; i++) for (let j = 0; j < cols; j++) {
      const c2 = i === rows - 1 && cols === 2 && r() < 0.0 ? 1 : cols;
      const cw = (L - 0.04) / c2;
      if (j >= c2) continue;
      const x0 = -L / 2 + 0.02 + j * cw + 0.006, x1 = x0 + cw - 0.012;
      const y0 = 0.1 + i * dh + 0.006, y1 = y0 + dh - 0.012;
      const out = r() < 0.15 ? 0.0 : 0; // drawers stay shut (box must stay clear)
      bx(g, W, x0, x1, y0, y1, D / 2 - 0.022 + out, D / 2);
      const cx = (x0 + x1) / 2, cy = (y0 + y1) / 2;
      for (const hx of cw > 0.5 ? [-0.12, 0.12] : [0]) add(g, gCyl(0.012, 0.012, 0.012, 8), K, cx + hx, cy, D / 2 - 0.012, Math.PI / 2, 0, 0);
    }
  },
  fridge(g, L, D, H, r) {
    const E = FX.enamel('fridge', pick(r, ['#e9e8e2', '#d8d6cc', '#c8cacb']));
    const K = FX.dark('fridgek', '#2a2b2d', 0.5);
    const P = mat('fxnotes', { map: ctex('fridgenotes', 256, 256, (c, w, h, rr) => {
      c.fillStyle = '#ece6d0'; c.fillRect(0, 0, w, h);
      c.fillStyle = '#f2c21b'; c.fillRect(0, 0, w / 2, h / 2);
      c.fillStyle = '#f4f4f4'; c.fillRect(w / 2, 0, w / 2, h / 2);
      c.fillStyle = '#cfe0ef'; c.fillRect(0, h / 2, w / 2, h / 2);
      c.fillStyle = '#f6f0e4'; c.fillRect(w / 2, h / 2, w / 2, h / 2);
      finePrint(c, 12, 20, 100, 6, 12, rr, '#333'); finePrint(c, 140, 20, 100, 8, 10, rr, '#333');
      // a child's crayon drawing: house and sun
      c.strokeStyle = '#2a6fd6'; c.lineWidth = 4; c.strokeRect(30, 170, 60, 50); c.beginPath(); c.moveTo(25, 172); c.lineTo(60, 140); c.lineTo(95, 172); c.stroke();
      c.fillStyle = '#f08a1c'; c.beginPath(); c.arc(105, 150, 12, 0, TAU); c.fill();
      finePrint(c, 140, 150, 100, 7, 12, rr, '#223');
      grime(c, w, h, rr, 1);
    }), roughness: 0.9 });
    const dz = 0.045;
    rbx(g, E, -L / 2 + 0.005, L / 2 - 0.005, 0.0, H - 0.005, -D / 2, D / 2 - dz, 0.02);
    bx(g, K, -L / 2 + 0.03, L / 2 - 0.03, 0, 0.09, D / 2 - dz, D / 2 - dz + 0.01);
    const split = H * (H > 1.5 ? 0.68 : 0.62);
    rbx(g, E, -L / 2, L / 2, 0.1, split - 0.006, D / 2 - dz + 0.002, D / 2, 0.015);
    rbx(g, E, -L / 2, L / 2, split + 0.006, H, D / 2 - dz + 0.002, D / 2, 0.015);
    bx(g, K, -L / 2 + 0.01, L / 2 - 0.01, split - 0.008, split + 0.008, D / 2 - dz - 0.004, D / 2 - dz + 0.004);
    const hx = L / 2 - 0.07;
    bx(g, K, hx - 0.015, hx + 0.015, split - 0.42 > 0.2 ? split - 0.42 : 0.2, split - 0.08, D / 2 - 0.005 - 0.0, D / 2);
    bx(g, K, hx - 0.015, hx + 0.015, split + 0.06, Math.min(H - 0.06, split + 0.32), D / 2 - 0.005, D / 2);
    // notes and a drawing held by magnets
    const notes = [[-0.15, split - 0.25, 0, 0], [0.05, split - 0.45, 1, 1], [-0.12, split + 0.15, 2, 0], [-0.05, split - 0.75, 3, 1]];
    for (const [x, y, cell, rot] of notes) {
      if (r() < 0.25 || y < 0.2) continue;
      const u0 = (cell % 2) / 2, v0 = 1 - (Math.floor(cell / 2) + 1) / 2;
      const q = new THREE.PlaneGeometry(0.14, 0.18);
      const uvq = q.attributes.uv;
      for (let i = 0; i < uvq.count; i++) uvq.setXY(i, u0 + uvq.getX(i) * 0.5, v0 + uvq.getY(i) * 0.5);
      add(g, q, P, Math.max(-L / 2 + 0.1, Math.min(L / 2 - 0.15, x * L / 0.75)), y, D / 2 - 0.0015, 0, 0, rot ? 0.12 : -0.06);
      add(g, gCyl(0.008, 0.008, 0.004, 8), K, Math.max(-L / 2 + 0.1, Math.min(L / 2 - 0.15, x * L / 0.75)), y + 0.075, D / 2 - 0.004, Math.PI / 2, 0, 0);
    }
  },
  counter(g, L, D, H, r) {
    const C = FX.painted(pick(r, ['#e8e2d2', '#8a9a88', '#5a6a7a']));
    const T = FX.counterTop(pick(r, ['#cfc8b8', '#6a6a68', '#b8a890']));
    const S = FX.metal('#b8bcc0', 'ss');
    const K = mat('fxcooktop', { map: ctex('cooktop', 256, 256, (c, w, h, rr) => {
      c.fillStyle = '#141516'; c.fillRect(0, 0, w, h);
      c.strokeStyle = 'rgba(200,200,200,0.35)'; c.lineWidth = 3;
      for (const [x, y, rad] of [[64, 64, 44], [192, 64, 34], [64, 192, 34], [192, 192, 44]]) { c.beginPath(); c.arc(x, y, rad, 0, TAU); c.stroke(); c.beginPath(); c.arc(x, y, rad * 0.6, 0, TAU); c.stroke(); }
      dust(c, w, h, rr, 1.5);
    }), roughness: 0.25, metalness: 0.1 });
    const top = 0.04, kick = 0.09;
    bx(g, K, -L / 2, L / 2, 0, kick, -D / 2, D / 2 - 0.07);
    bx(g, C, -L / 2, L / 2, kick, H - top, -D / 2, D / 2 - 0.03);
    // which appliance
    const hasSink = L >= 0.7 && (L >= 1.6 || r() < 0.55);
    const hasStove = L >= 0.7 && (L >= 1.6 || !hasSink);
    const sinkW = 0.6, stoveW = 0.62;
    const sinkX = hasSink ? (hasStove ? -L / 2 + 0.2 + sinkW / 2 : (r() - 0.5) * (L - sinkW - 0.1)) : null;
    const stoveX = hasStove ? (hasSink ? L / 2 - 0.15 - stoveW / 2 : (r() - 0.5) * (L - stoveW - 0.1)) : null;
    // doors and drawers along the front
    const segs = Math.max(1, Math.round(L / 0.5));
    const sw = L / segs;
    for (let i = 0; i < segs; i++) {
      const x0 = -L / 2 + i * sw + 0.004, x1 = x0 + sw - 0.008, cx = (x0 + x1) / 2;
      if (stoveX !== null && Math.abs(cx - stoveX) < stoveW / 2) continue;
      bx(g, C, x0, x1, H - top - 0.17, H - top - 0.01, D / 2 - 0.03, D / 2 - 0.008);
      bx(g, S, cx - 0.06, cx + 0.06, H - top - 0.1, H - top - 0.085, D / 2 - 0.008, D / 2);
      bx(g, C, x0, x1, kick + 0.01, H - top - 0.19, D / 2 - 0.03, D / 2 - 0.008);
      bx(g, S, x1 - 0.04, x1 - 0.028, H - top - 0.4, H - top - 0.26, D / 2 - 0.008, D / 2);
    }
    if (stoveX !== null) { // oven front
      const x0 = stoveX - stoveW / 2, x1 = stoveX + stoveW / 2;
      bx(g, K, x0, x1, kick, H - top, D / 2 - 0.035, D / 2 - 0.005);
      bx(g, S, x0 + 0.1, x1 - 0.1, kick + 0.2, H - top - 0.25, D / 2 - 0.006, D / 2 - 0.003);
      bx(g, S, x0 + 0.06, x1 - 0.06, H - top - 0.17, H - top - 0.15, D / 2 - 0.004, D / 2);
      for (let k = 0; k < 4; k++) add(g, gCyl(0.018, 0.018, 0.02, 8), S, x0 + 0.1 + k * (stoveW - 0.2) / 3, H - top - 0.07, D / 2 - 0.02, Math.PI / 2, 0, 0);
    }
    // worktop with openings
    const holes = [];
    if (sinkX !== null) holes.push([sinkX - sinkW / 2 + 0.04, sinkX + sinkW / 2 - 0.04, 'sink']);
    if (stoveX !== null) holes.push([stoveX - stoveW / 2, stoveX + stoveW / 2, 'stove']);
    holes.sort((a, b) => a[0] - b[0]);
    let xs = -L / 2;
    const zf = D / 2 - 0.08, zb = -D / 2 + 0.1;
    for (const [h0, h1, kind] of holes) {
      bx(g, T, xs, h0, H - top, H, -D / 2, D / 2);
      bx(g, T, h0, h1, H - top, H, zf, D / 2);
      bx(g, T, h0, h1, H - top, H, -D / 2, zb);
      if (kind === 'sink') {
        const d0 = H - top - 0.18;
        bx(g, S, h0, h1, d0, d0 + 0.01, zb, zf);
        bx(g, S, h0, h0 + 0.006, d0, H, zb, zf); bx(g, S, h1 - 0.006, h1, d0, H, zb, zf);
        bx(g, S, h0, h1, d0, H, zb, zb + 0.006); bx(g, S, h0, h1, d0, H, zf - 0.006, zf);
        if (h1 - h0 > 0.45) bx(g, S, (h0 + h1) / 2 - 0.005, (h0 + h1) / 2 + 0.005, d0, H - 0.02, zb, zf);
        add(g, gCyl(0.03, 0.03, 0.004, 10), K, (h0 + h1) / 2 - (h1 - h0) / 4, d0 + 0.01, (zb + zf) / 2);
        add(g, gCyl(0.025, 0.025, 0.004, 10), S, (h0 + h1) / 2, H - 0.004, zb - 0.045);
      } else {
        bx(g, K, h0, h1, H - top, H, zb, zf);
      }
      xs = h1;
    }
    bx(g, T, xs, L / 2, H - top, H, -D / 2, D / 2);
  },
  tub(g, L, D, H, r) {
    const E = FX.enamel('tub', '#ecebe6');
    const R = mat('fxtubring', { map: tex1m('tubring', 256, (c, w, h, rr) => {
      c.fillStyle = '#e4e0d4'; c.fillRect(0, 0, w, h);
      const g2 = c.createRadialGradient(w * 0.6, h * 0.5, 10, w * 0.5, h * 0.5, w * 0.7); g2.addColorStop(0, 'rgba(150,120,70,0.35)'); g2.addColorStop(1, 'rgba(150,120,70,0.05)'); c.fillStyle = g2; c.fillRect(0, 0, w, h);
      dust(c, w, h, rr, 2);
    }), roughness: 0.35 });
    const S = FX.metal('#c8ccd0', 'chrome');
    const wt = 0.07;
    bx(g, E, -L / 2, L / 2, 0, 0.06, -D / 2, D / 2);
    bx(g, R, -L / 2 + wt, L / 2 - wt, 0.06, 0.07, -D / 2 + wt, D / 2 - wt);
    rbx(g, E, -L / 2, L / 2, 0.0, H, D / 2 - wt, D / 2, 0.02);
    rbx(g, E, -L / 2, L / 2, 0.0, H, -D / 2, -D / 2 + wt, 0.02);
    rbx(g, E, -L / 2, -L / 2 + wt, 0.0, H, -D / 2, D / 2, 0.02);
    rbx(g, E, L / 2 - wt * 1.6, L / 2, 0.0, H, -D / 2, D / 2, 0.02);
    // dirty water line inside
    bx(g, R, -L / 2 + wt, L / 2 - wt * 1.6, 0.07, 0.11, -D / 2 + wt, -D / 2 + wt + 0.002);
    add(g, gCyl(0.025, 0.025, 0.005, 10), S, -L / 2 + wt + 0.1, 0.07, 0);
    add(g, gCyl(0.018, 0.018, 0.12, 8), S, -L / 2 + wt, H - 0.12, 0, 0, 0, -Math.PI / 2);
    for (const z of [-0.09, 0.09]) add(g, gCyl(0.022, 0.022, 0.03, 8), S, -L / 2 + wt, H - 0.07, z, 0, 0, -Math.PI / 2);
  },
  cabinet(g, L, D, H, r) {
    const P = FX.painted(pick(r, ['#d8d4c8', '#6a7a6a', '#8a7a6a']));
    const S = FX.metal('#9a9ea2', 'cab');
    bx(g, P, -L / 2, L / 2, 0, H, -D / 2, D / 2 - 0.02);
    const nd = L > 0.55 ? 2 : 1;
    const split = H > 1.3 ? H * 0.55 : 0;
    for (let j = 0; j < nd; j++) for (const [y0, y1] of split ? [[0.08, split - 0.005], [split + 0.005, H - 0.04]] : [[0.08, H - 0.04]]) {
      const x0 = -L / 2 + 0.01 + j * (L - 0.02) / nd + 0.004, x1 = x0 + (L - 0.02) / nd - 0.008;
      bx(g, P, x0, x1, y0, y1, D / 2 - 0.02, D / 2);
      bx(g, P, x0 + 0.05, x1 - 0.05, y0 + 0.05, y1 - 0.05, D / 2 - 0.005, D / 2 + 0.0);
      const hx = nd === 2 ? (j === 0 ? x1 - 0.04 : x0 + 0.04) : x1 - 0.04;
      bx(g, S, hx - 0.008, hx + 0.008, (y0 + y1) / 2 - 0.06, (y0 + y1) / 2 + 0.06, D / 2 - 0.0, D / 2);
    }
    bx(g, FX.dark('kickc'), -L / 2 + 0.02, L / 2 - 0.02, 0, 0.08, D / 2 - 0.05, D / 2 - 0.03);
  },
  checkout(g, L, D, H, r) {
    const P = FX.laminate('#8a8e92'); // lanes in one store match
    const K = FX.dark('belt', '#18191b', 0.85);
    const S = FX.metal('#b0b4b8', 'lane');
    const ch = Math.min(0.92, H);
    bx(g, P, -L / 2, L / 2, 0, ch - 0.05, -D / 2 + 0.02, D / 2 - 0.02);
    bx(g, K, -L / 2 + 0.03, L / 2 - 0.03, 0, 0.06, -D / 2 + 0.02, D / 2 - 0.02);
    const beltEnd = L / 2 - Math.min(0.8, L * 0.4);
    bx(g, S, -L / 2, L / 2, ch - 0.05, ch - 0.03, -D / 2, D / 2);
    bx(g, K, -L / 2 + 0.05, beltEnd, ch - 0.03, ch - 0.005, -D / 2 + 0.06, D / 2 - 0.06);
    bx(g, S, -L / 2, beltEnd, ch - 0.03, ch, -D / 2, -D / 2 + 0.05); bx(g, S, -L / 2, beltEnd, ch - 0.03, ch, D / 2 - 0.05, D / 2);
    add(g, gCyl(0.025, 0.025, D - 0.12, 8), S, beltEnd, ch - 0.03, -(D - 0.12) / 2, Math.PI / 2, 0, 0);
    // scanner plate and bagging end
    bx(g, P, beltEnd + 0.06, beltEnd + 0.36, ch - 0.03, ch - 0.02, -0.15, 0.15);
    bx(g, S, beltEnd + 0.04, L / 2, ch - 0.03, ch - 0.01, -D / 2, D / 2);
    // divider bar left on the belt
    bx(g, K, -L / 2 + 0.4 + r() * (beltEnd + L / 2 - 0.8), -L / 2 + 0.42 + r() * 0.0 + 0.36, ch - 0.005, ch + Math.min(0.03, H - ch), -0.15, 0.15);
    // terminal: keypad, card reader and screen on a short pole, kept inside the box
    const tx = L / 2 - 0.2, tz = -D / 2 + 0.15;
    const room = H - ch;
    if (room > 0.12) {
      const poleTop = Math.min(H - 0.18, ch + 0.25);
      add(g, gCyl(0.02, 0.025, Math.max(0.02, poleTop - ch), 8), K, tx, ch, tz);
      const sc = new THREE.Group();
      bx(sc, K, -0.15, 0.15, 0, Math.min(0.22, H - poleTop - 0.01), -0.02, 0.02);
      bx(sc, S, -0.13, 0.13, 0.015, Math.min(0.2, H - poleTop - 0.03), 0.02, 0.023, false);
      sc.position.set(tx, poleTop, tz); sc.rotation.y = -0.6;
      g.add(sc);
    }
    if (room > 0.04) {
      bx(g, K, L / 2 - 0.5, L / 2 - 0.3, ch, ch + 0.035, D / 2 - 0.2, D / 2 - 0.06);
      const cr = add(g, gBox(0.08, Math.min(0.12, room - 0.005), 0.05), K, L / 2 - 0.15, ch, D / 2 - 0.12);
      cr.rotation.x = -0.3;
    }
  },
  coolers(g, L, D, H, r) {
    const F = FX.dark('coolerframe', '#2a2c2f', 0.45);
    const I = F; // dark inside shares the frame material
    const G = FX.glass();
    const n = Math.max(1, Math.round(L / 0.76));
    const dw = L / n;
    const ft = 0.05;
    bx(g, F, -L / 2, L / 2, 0, 0.12, -D / 2, D / 2);
    bx(g, F, -L / 2, L / 2, H - 0.16, H, -D / 2, D / 2);
    bx(g, F, -L / 2, L / 2, 0.12, H - 0.16, -D / 2, -D / 2 + 0.03);
    bx(g, F, -L / 2, -L / 2 + 0.03, 0.12, H - 0.16, -D / 2, D / 2); bx(g, F, L / 2 - 0.03, L / 2, 0.12, H - 0.16, -D / 2, D / 2);
    bx(g, I, -L / 2 + 0.03, L / 2 - 0.03, 0.12, H - 0.16, -D / 2 + 0.03, -D / 2 + 0.035);
    const shelves = Math.max(2, Math.floor((H - 0.4) / 0.32));
    const sy = (H - 0.28) / (shelves + 0);
    const merger = new Merger(1);
    const bottleTex = ctex('coolerbottles', 512, 64, (c, w, h) => {
      const cols = ['#a8141a', '#2f8a3a', '#e8701c', '#1d4f9a', '#f2c21b', '#e9f2f6', '#4a2412', '#7fd62a'];
      cols.forEach((cc, i) => { c.fillStyle = cc; c.fillRect(i * 64, 0, 64, h); c.fillStyle = 'rgba(255,255,255,0.8)'; c.fillRect(i * 64, h * 0.35, 64, h * 0.3); c.fillStyle = 'rgba(0,0,0,0.6)'; c.fillRect(i * 64 + 10, h * 0.45, 44, 6); });
    });
    const bgeo = gCyl(0.035, 0.035, 0.22, 6);
    for (let s = 0; s < shelves; s++) {
      const y = 0.12 + s * sy;
      bx(g, F, -L / 2 + 0.03, L / 2 - 0.03, y, y + 0.015, -D / 2 + 0.03, D / 2 - ft - 0.01);
      for (let k = 0; k < n; k++) {
        const x0 = -L / 2 + k * dw + 0.08;
        for (let b = 0; b < 4; b++) {
          if (r() > 0.55) continue;
          const cell = Math.floor(r() * 8);
          const rc = [cell / 8, 0, (cell + 1) / 8, 1];
          const tipped = r() < 0.15;
          const m = new THREE.Matrix4().compose(new THREE.Vector3(x0 + b * (dw - 0.16) / 3, y + 0.015 + (tipped ? 0.035 : 0), D / 2 - ft - 0.08 - r() * 0.1), new THREE.Quaternion().setFromEuler(new THREE.Euler(tipped ? Math.PI / 2 : 0, r() * 3, 0)), new THREE.Vector3(1, Math.min(1, (sy - 0.04) / 0.22), 1));
          merger.add(bgeo, m, [rc, [0.01, 0.01, 0.02, 0.02], [0.01, 0.01, 0.02, 0.02]], [0]);
        }
      }
    }
    for (const mm of merger.meshes([mat('fxbottles', { map: bottleTex, roughness: 0.3 })])) g.add(mm);
    // doors: frames, glass, handles
    for (let k = 0; k < n; k++) {
      const x0 = -L / 2 + k * dw, x1 = x0 + dw;
      bx(g, F, x0, x0 + 0.04, 0.12, H - 0.16, D / 2 - ft, D / 2); bx(g, F, x1 - 0.04, x1, 0.12, H - 0.16, D / 2 - ft, D / 2);
      bx(g, G, x0 + 0.04, x1 - 0.04, 0.12, H - 0.16, D / 2 - ft + 0.02, D / 2 - ft + 0.026);
      const hx = k % 2 ? x0 + 0.08 : x1 - 0.08;
      bx(g, F, hx - 0.012, hx + 0.012, H * 0.35, H * 0.65, D / 2 - 0.022, D / 2);
    }
  },
  rx_counter(g, L, D, H, r) {
    const P = FX.laminate(pick(r, ['#d8d4c8', '#8a9aa8', '#b8a890']));
    const T = FX.counterTop('#e0dcd0');
    const B = mat('fxbins', { map: ctex('rxbins', 512, 128, (c, w, h, rr) => {
      const cols = ['#2a6fd6', '#c4221c', '#2f8a3a', '#f2c21b'];
      cols.forEach((cc, i) => { c.fillStyle = cc; c.fillRect(i * 128, 0, 128, h); c.fillStyle = '#f4f2ec'; c.fillRect(i * 128 + 24, h * 0.35, 80, 30); finePrint(c, i * 128 + 30, h * 0.35 + 8, 68, 2, 8, rr, '#333'); });
      dust(c, w, h, rr, 1.2);
    }), roughness: 0.55 });
    const ledge = 0.25;
    bx(g, P, -L / 2, L / 2, 0, H - 0.03, D / 2 - ledge, D / 2 - 0.02);
    bx(g, T, -L / 2, L / 2, H - 0.03, H, D / 2 - ledge - 0.02, D / 2);
    const wy = Math.max(0.7, H - 0.28);
    bx(g, P, -L / 2, L / 2, 0, wy - 0.03, -D / 2, D / 2 - ledge);
    bx(g, T, -L / 2, L / 2, wy - 0.03, wy, -D / 2, D / 2 - ledge);
    // pick bins on the work surface and in cubbies below
    const binGeo = gBox(0.14, 0.09, 0.22);
    const merger = new Merger(1);
    const addBin = (x, y, z, ry) => { const cell = Math.floor(r() * 4); const rc = [cell / 4, 0, (cell + 1) / 4, 1]; merger.add(binGeo, new THREE.Matrix4().compose(new THREE.Vector3(x, y, z), new THREE.Quaternion().setFromEuler(new THREE.Euler(0, ry, 0)), new THREE.Vector3(1, 1, 1)), [rc, rc, rc, rc, rc, rc], [0]); };
    const nb = Math.floor((L - 0.1) / 0.16);
    for (let row = 0; row < 2; row++) for (let i = 0; i < nb; i++) {
      if (r() < 0.3) continue;
      const by = wy + row * 0.095;
      if (by + 0.09 > H) continue;
      addBin(-L / 2 + 0.09 + i * 0.16, by, -D / 2 + 0.13 + (row ? 0 : 0.0), (r() - 0.5) * 0.08);
    }
    for (let shelf = 0; shelf < 2; shelf++) {
      const y = 0.12 + shelf * 0.3;
      bx(g, P, -L / 2 + 0.02, L / 2 - 0.02, y - 0.015, y, -D / 2, D / 2 - ledge);
      for (let i = 0; i < nb; i++) if (r() < 0.55) addBin(-L / 2 + 0.09 + i * 0.16, y, -D / 2 + 0.12, (r() - 0.5) * 0.1);
    }
    for (const mm of merger.meshes([B])) g.add(mm);
  },
  desk(g, L, D, H, r) {
    const W = FX.wood(pick(r, ['#6a4528', '#9a7a5a', '#4a4a4c']));
    const T = FX.laminate('#d8d4cc');
    const K = FX.dark('desk', '#1d1e20', 0.45);
    const wy = Math.min(0.75, H - 0.25);
    const panel = 0.05;
    bx(g, W, -L / 2, L / 2, 0, H - 0.03, D / 2 - panel, D / 2);
    bx(g, T, -L / 2, L / 2, H - 0.03, H, D / 2 - 0.28, D / 2);
    for (const s of [-1, 1]) bx(g, W, s < 0 ? -L / 2 : L / 2 - 0.04, s < 0 ? -L / 2 + 0.04 : L / 2, 0, wy, -D / 2, D / 2 - panel);
    bx(g, T, -L / 2, L / 2, wy - 0.03, wy, -D / 2, D / 2 - panel);
    // monitor, keyboard, phone, papers
    const mx = (r() - 0.5) * (L - 0.7);
    const mh = Math.min(0.32, H - wy - 0.02);
    if (mh > 0.12) {
      add(g, gBox(0.2, 0.012, 0.15), K, mx, wy, -D / 2 + 0.25);
      add(g, gBox(0.04, mh * 0.4, 0.03), K, mx, wy, -D / 2 + 0.25);
      const mon = new THREE.Group();
      bx(mon, K, -0.26, 0.26, 0, mh * 0.75, -0.02, 0.02, false);
      mon.position.set(mx, wy + mh * 0.25, -D / 2 + 0.27); mon.rotation.x = -0.05;
      g.add(mon);
    }
    add(g, gBox(0.44, 0.02, 0.14), K, mx, wy, -D / 2 + 0.48 > D / 2 - panel - 0.08 ? D / 2 - panel - 0.09 : -D / 2 + 0.48, 0, (r() - 0.5) * 0.2, 0);
    add(g, gBox(0.18, 0.05, 0.2), K, mx + 0.45 < L / 2 - 0.15 ? mx + 0.45 : mx - 0.45, wy, -D / 2 + 0.22);
    for (let i = 0; i < 4; i++) add(g, gBox(0.216, 0.002, 0.28), T, (r() - 0.5) * (L - 0.4), wy + 0.001 + i * 0.002, (r() - 0.5) * 0.2 - 0.05, 0, r() * 3, 0);
  },
  bench(g, L, D, H, r) {
    const W = FX.wood(pick(r, ['#8a6440', '#6a4a30']));
    const M2 = FX.dark('benchleg', '#2a2c2e', 0.5);
    const sy = Math.min(0.46, H);
    const back = H > 0.65;
    const sd = back ? D * 0.85 : D;
    const ns = Math.max(2, Math.round(sd / 0.11));
    for (let i = 0; i < ns; i++) { const z0 = D / 2 - sd + i * sd / ns + 0.008; bx(g, W, -L / 2, L / 2, sy - 0.035, sy, z0, z0 + sd / ns - 0.016); }
    const legs = Math.max(2, Math.ceil(L / 1.2) + 1);
    for (let i = 0; i < legs; i++) {
      const x = -L / 2 + 0.08 + i * (L - 0.16) / (legs - 1);
      bx(g, M2, x - 0.025, x + 0.025, 0, sy - 0.035, D / 2 - sd + 0.03, D / 2 - sd + 0.07);
      bx(g, M2, x - 0.025, x + 0.025, 0, sy - 0.035, D / 2 - 0.07, D / 2 - 0.03);
      bx(g, M2, x - 0.025, x + 0.025, sy - 0.08, sy - 0.035, D / 2 - sd + 0.03, D / 2 - 0.03);
      if (back) bx(g, M2, x - 0.025, x + 0.025, 0, H - 0.02, -D / 2, -D / 2 + 0.04);
    }
    if (back) for (let i = 0; i < 2; i++) bx(g, W, -L / 2, L / 2, H - 0.12 - i * 0.14, H - 0.02 - i * 0.14, -D / 2 + 0.04, -D / 2 + 0.075);
  },
  locker(g, L, D, H, r) {
    const color = pick(r, ['#4a5a6a', '#6a7a5a', '#8a8a86']);
    const P = FX.painted(color);
    const Dm = mat('fxlockerdoor' + color, { map: ctex('fxlockerdoor' + color, 128, 512, (c, w, h, rr) => {
      noiseFill(c, w, h, rr, color, 0.05, 1500, 2);
      c.fillStyle = 'rgba(0,0,0,0.55)';
      for (const y0 of [0.05, 0.85]) for (let i = 0; i < 6; i++) c.fillRect(w * 0.25, h * y0 + i * 9, w * 0.5, 4);
      c.fillStyle = 'rgba(255,255,255,0.1)'; c.fillRect(3, 3, w - 6, 2);
      c.fillStyle = '#d8d8d4'; c.fillRect(w * 0.35, h * 0.28, w * 0.3, 16);
      c.fillStyle = '#c8ccd0'; c.fillRect(w * 0.75, h * 0.45, 10, 46);
      for (let i = 0; i < 6; i++) { c.fillStyle = 'rgba(110,60,30,0.5)'; c.beginPath(); c.ellipse(rr() * w, rr() * h, 1 + rr() * 4, 1 + rr() * 8, 0, 0, TAU); c.fill(); }
      dust(c, w, h, rr, 1.5);
    }), roughness: 0.45, metalness: 0.3 });
    const n = Math.max(1, Math.round(L / 0.32));
    const lw = L / n;
    bx(g, P, -L / 2, L / 2, 0, H, -D / 2, D / 2 - 0.02);
    bx(g, FX.dark('lockbase'), -L / 2, L / 2, 0, 0.1, D / 2 - 0.02, D / 2);
    for (let i = 0; i < n; i++) {
      const x0 = -L / 2 + i * lw + 0.006;
      add(g, gBox(lw - 0.012, H - 0.12 - 0.01, 0.018), [P, P, P, P, Dm, P], x0 + (lw - 0.012) / 2, 0.11, D / 2 - 0.009);
    }
  },
  rack(g, L, D, H, r) {
    const U = FX.painted('#2a4a8a');
    const O = FX.painted('#d8601c');
    const Wd = FX.wood('#a8845a');
    const C = FX.card();
    const bays = Math.max(1, Math.round(L / 2.7));
    const bw = L / bays;
    for (let b = 0; b <= bays; b++) {
      const x = -L / 2 + b * bw;
      const xa = Math.max(-L / 2, Math.min(L / 2 - 0.08, x - 0.04));
      for (const z of [-D / 2, D / 2 - 0.08]) bx(g, U, xa, xa + 0.08, 0, H, z, z + 0.08);
      const span = D - 0.16, ang = Math.atan2(span, 0.6);
      for (let k = 0; k < Math.floor((H - 0.3) / 0.6); k++) { const sg = k % 2 ? 1 : -1; add(g, gBoxW(0.03, Math.hypot(0.6, span), 0.02), U, xa + 0.04, 0.2 + k * 0.6, -sg * span / 2, sg * ang, 0, 0); }
    }
    const levels = Math.max(1, Math.floor((H - 0.2) / 1.2));
    const lh = (H - 0.12) / levels;
    for (let lv = 0; lv <= levels; lv++) {
      const y = lv === 0 ? 0 : lv * lh;
      if (lv > 0) for (const z of [-D / 2 + 0.005, D / 2 - 0.065]) bx(g, O, -L / 2, L / 2, y - 0.12, y, z, z + 0.06);
      if (lv === levels) break;
      const avail = lh - 0.18;
      for (let b = 0; b < bays; b++) for (let p = 0; p < 2; p++) {
        if (r() < 0.25) continue;
        const px = -L / 2 + b * bw + (p + 0.5) * bw / 2;
        const pw = Math.min(1.1, bw / 2 - 0.1), pd = Math.min(1.0, D - 0.1);
        bx(g, Wd, px - pw / 2, px + pw / 2, y, y + 0.13, -pd / 2, pd / 2);
        const fill = r();
        if (fill < 0.2) continue;
        const nx = 2, nz = 2;
        const bh = Math.min(0.35, (avail - 0.13) / 2);
        const stack = Math.max(1, Math.floor(((avail - 0.13) * fill) / bh));
        for (let i = 0; i < nx; i++) for (let j = 0; j < nz; j++) for (let s = 0; s < stack; s++) {
          if (r() < 0.2) continue;
          const cw = pw / nx - 0.02, cd = pd / nz - 0.02;
          const c = bx(g, C, px - pw / 2 + i * pw / nx + 0.01, px - pw / 2 + i * pw / nx + 0.01 + cw, y + 0.13 + s * bh, y + 0.13 + (s + 1) * bh - 0.005, -pd / 2 + j * pd / nz + 0.01, -pd / 2 + j * pd / nz + 0.01 + cd);
          c.rotation.y = (r() - 0.5) * 0.06;
        }
      }
    }
  },
};
function texPlaidMat(r, world = false) {
  const p = pick(r, [['#7a1d1a', '#22304a', '#e8d8a0'], ['#2f4a2a', '#1a1a1a', '#c8a24a'], ['#4a5a7a', '#e8e8e0', '#1a2a4a']]);
  return mat('fxplaid' + p.join() + world, { map: texPlaid(p[0], p[1], p[2]), roughness: 0.95, side: THREE.DoubleSide });
}

export const FIXTURE_TYPES = Object.keys(FIXTURES);

// Furniture / fitting that fills the box w (x) x d (z) x h (y) exactly, origin at the bottom centre.
// The long side follows the larger of w and d. The front faces +z when w >= d, else +x
// (userData.front). Rotate the group by PI to face the other way.
export function makeFixture(type, w = 1, d = 0.6, h = 0.9, seed = 0) {
  const fn = FIXTURES[type] || FIXTURES.cabinet;
  const alongX = w >= d;
  const L = Math.max(w, d), D = Math.min(w, d), H = h;
  const inner = new THREE.Group();
  fn(inner, L, D, H, rng(hashStr('fx' + type) ^ Math.imul((seed | 0) + 11, 2654435761)));
  const holder = new THREE.Group();
  holder.add(inner);
  if (!alongX) inner.rotation.y = Math.PI / 2;
  const baked = bake(holder);
  // stay inside the collision box: clamp anything that pokes out
  const b = new THREE.Box3().setFromObject(baked);
  const sx = b.max.x - b.min.x > w + 1e-4 ? w / (b.max.x - b.min.x) : 1;
  const sz = b.max.z - b.min.z > d + 1e-4 ? d / (b.max.z - b.min.z) : 1;
  const sy = b.max.y > h + 1e-4 ? h / b.max.y : 1;
  if (sx !== 1 || sy !== 1 || sz !== 1) {
    baked.scale.set(sx, sy, sz);
    baked.updateMatrixWorld(true);
    const b2 = new THREE.Box3().setFromObject(baked);
    baked.position.x -= Math.max(0, b2.max.x - w / 2) + Math.min(0, b2.min.x + w / 2);
    baked.position.z -= Math.max(0, b2.max.z - d / 2) + Math.min(0, b2.min.z + d / 2);
  }
  const out = new THREE.Group();
  out.add(baked);
  out.name = 'fixture:' + type;
  out.userData = { kind: type, w, d, h, front: alongX ? [0, 0, 1] : [1, 0, 0], height: h, radius: Math.hypot(w, d) / 2 };
  return out;
}
