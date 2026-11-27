// Geometry for one street cell (three.js BufferGeometry, no DOM). Input: a cell file
// from docs/data/streets/ (made by tools/streets/build-streets.mjs). Output: a few
// merged meshes per cell (ground, walls by look, roofs, props) so a cell costs about
// six draw calls, plus the colliders (wall segments) and doors for the street view.
//
// Coordinates: cell-local metres, x east, z south, y up. The view puts each cell's
// group at its north-west corner (cx * 256, 0, cz * 256).
import {
  BufferGeometry, Float32BufferAttribute, ShapeUtils, Vector2, Color, Matrix4,
  CylinderGeometry, ConeGeometry, IcosahedronGeometry, BoxGeometry,
} from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import {
  KIND, ROOF, ROAD, ROAD_LOOK, AREA, PROP, WALL_COLORS, ROOF_COLORS, COMMERCIAL_WALLS, isCarRoad,
} from '../../data/streets.js';
import { tones } from './look.js';
import { streetDetails } from './details.js';

const D = 0.1; // file units: decimetres

// ---------- small mesh builder with vertex colours ----------
class Builder {
  constructor(uv = false) { this.p = []; this.c = []; this.uv = uv ? [] : null; }
  tri(a, b, c, col, ua, ub, uc) {
    this.p.push(...a, ...b, ...c);
    for (let i = 0; i < 3; i++) this.c.push(col.r, col.g, col.b);
    if (this.uv) this.uv.push(...(ua || [0, 0]), ...(ub || [0, 0]), ...(uc || [0, 0]));
  }
  quad(a, b, c, d, col, uvs) { // a b c d counter-clockwise seen from the front
    this.tri(a, b, c, col, uvs?.[0], uvs?.[1], uvs?.[2]);
    this.tri(a, c, d, col, uvs?.[0], uvs?.[2], uvs?.[3]);
  }
  get count() { return this.p.length / 3; }
  geometry() {
    if (!this.p.length) return null;
    const g = new BufferGeometry();
    g.setAttribute('position', new Float32BufferAttribute(this.p, 3));
    g.setAttribute('color', new Float32BufferAttribute(this.c, 3));
    if (this.uv) g.setAttribute('uv', new Float32BufferAttribute(this.uv, 2));
    g.computeVertexNormals();
    return g;
  }
}

const col = (hex) => new Color(hex);
const pts = (flat) => { const o = []; for (let i = 0; i < flat.length; i += 2) o.push([flat[i] * D, flat[i + 1] * D]); return o; };

// Flat polygon on the ground at height y (triangulated, faces up).
function flatPoly(b, ring, y, color) {
  if (ring.length < 3) return;
  const v2 = ring.map(([x, z]) => new Vector2(x, z));
  let tris;
  try { tris = ShapeUtils.triangulateShape(v2, []); } catch (e) { return; }
  // ShapeUtils winding: make every triangle face up (+y): in x/z with z south,
  // counter-clockwise seen from above is (a->b->c) with cross.y > 0.
  for (const [i, j, k] of tris) {
    const a = ring[i], bb = ring[j], c = ring[k];
    const cy = (bb[1] - a[1]) * (c[0] - a[0]) - (bb[0] - a[0]) * (c[1] - a[1]);
    if (cy >= 0) b.tri([a[0], y, a[1]], [bb[0], y, bb[1]], [c[0], y, c[1]], color);
    else b.tri([a[0], y, a[1]], [c[0], y, c[1]], [bb[0], y, bb[1]], color);
  }
}

// A strip along a polyline (roads, paths), faces up.
function ribbon(b, line, width, y, color) {
  const hw = width / 2;
  const n = line.length;
  if (n < 2) return;
  const off = [];
  for (let i = 0; i < n; i++) {
    const p = line[Math.max(0, i - 1)], q = line[Math.min(n - 1, i + 1)];
    let dx = q[0] - p[0], dz = q[1] - p[1];
    const l = Math.hypot(dx, dz) || 1;
    dx /= l; dz /= l;
    off.push([-dz * hw, dx * hw]);
  }
  for (let i = 0; i < n - 1; i++) {
    const a = line[i], c = line[i + 1];
    const L = [a[0] + off[i][0], y, a[1] + off[i][1]], R = [a[0] - off[i][0], y, a[1] - off[i][1]];
    const L2 = [c[0] + off[i + 1][0], y, c[1] + off[i + 1][1]], R2 = [c[0] - off[i + 1][0], y, c[1] - off[i + 1][1]];
    b.tri(L, R2, R, color); b.tri(L, L2, R2, color); // faces up (+y)
  }
  // round caps hide gaps where two strips meet at a corner
  for (const e of [line[0], line[n - 1]]) {
    const seg = 8;
    for (let k = 0; k < seg; k++) {
      const a0 = (k / seg) * Math.PI * 2, a1 = ((k + 1) / seg) * Math.PI * 2;
      b.tri([e[0], y, e[1]], [e[0] + Math.cos(a1) * hw, y, e[1] + Math.sin(a1) * hw], [e[0] + Math.cos(a0) * hw, y, e[1] + Math.sin(a0) * hw], color);
    }
  }
}

// Dashes along a line (centre lines, crosswalk bars).
function dashes(b, line, width, y, color, on, offLen) {
  let carry = 0, draw = true, left = on;
  for (let i = 1; i < line.length; i++) {
    const a = line[i - 1], c = line[i];
    const L = Math.hypot(c[0] - a[0], c[1] - a[1]);
    let t = 0;
    while (t < L) {
      const step = Math.min(left, L - t);
      if (draw) ribbonSeg(b, [a[0] + ((c[0] - a[0]) * t) / L, a[1] + ((c[1] - a[1]) * t) / L], [a[0] + ((c[0] - a[0]) * (t + step)) / L, a[1] + ((c[1] - a[1]) * (t + step)) / L], width, y, color);
      t += step; left -= step;
      if (left <= 1e-6) { draw = !draw; left = draw ? on : offLen; }
    }
  }
  return carry;
}
function ribbonSeg(b, a, c, width, y, color) {
  const dx = c[0] - a[0], dz = c[1] - a[1];
  const l = Math.hypot(dx, dz) || 1;
  const ox = (-dz / l) * width / 2, oz = (dx / l) * width / 2;
  const L = [a[0] + ox, y, a[1] + oz], R = [a[0] - ox, y, a[1] - oz], L2 = [c[0] + ox, y, c[1] + oz], R2 = [c[0] - ox, y, c[1] - oz];
  b.tri(L, R2, R, color); b.tri(L, L2, R2, color);
}

// ---------- roofs: one height function per building ----------
// Gabled: y = eave + slope * (hv - |t|). Hipped: y = eave + slope * min(hv - |t|, hu - |s|).
// (s along the long axis, t across, from the box centre.) The footprint is cut where the
// function bends, so every roof piece and wall top is exact for any footprint shape.
export function roofFn(bld) {
  const { h, rise, roof } = bld;
  if (roof === ROOF.flat || rise <= 0) return { y: () => h, planes: null };
  const { cx, cz, hu, hv, ang } = bld.box;
  const ca = Math.cos(ang), sa = Math.sin(ang);
  const eave = h - rise, slope = rise / hv;
  const st = (x, z) => { const dx = x - cx, dz = z - cz; return [dx * ca + dz * sa, -dx * sa + dz * ca]; };
  const fns = [ // linear pieces in (s, t)
    (s, t) => hv - t, (s, t) => hv + t,
  ];
  if (roof === ROOF.hipped) fns.push((s, t) => hu - s, (s, t) => hu + s);
  const y = (x, z) => { const [s, t] = st(x, z); let m = Infinity; for (const f of fns) m = Math.min(m, f(s, t)); return eave + slope * Math.max(0, m); };
  return { y, st, fns, eave, slope };
}
// Points where the roof function bends along segment a->c (parameter 0..1).
function bends(rf, a, c) {
  if (!rf.fns) return [];
  const [s0, t0] = rf.st(a[0], a[1]), [s1, t1] = rf.st(c[0], c[1]);
  const out = [];
  const lin = rf.fns.map((f) => [f(s0, t0), f(s1, t1)]);
  for (let i = 0; i < lin.length; i++) for (let j = i + 1; j < lin.length; j++) {
    const d0 = lin[i][0] - lin[j][0], d1 = lin[i][1] - lin[j][1];
    if (d0 === d1) continue;
    const k = d0 / (d0 - d1);
    if (k > 1e-4 && k < 1 - 1e-4) out.push(k);
  }
  return out.sort((x, y) => x - y);
}
// Clip polygon by half-plane f(p) >= 0, f linear (Sutherland-Hodgman, one edge).
function clipHalf(poly, f) {
  const out = [];
  for (let i = 0; i < poly.length; i++) {
    const a = poly[(i + poly.length - 1) % poly.length], b = poly[i];
    const fa = f(a), fb = f(b);
    if (fb >= 0) { if (fa < 0) out.push(lerp2(a, b, fa / (fa - fb))); out.push(b); } else if (fa >= 0) out.push(lerp2(a, b, fa / (fa - fb)));
  }
  return out;
}
const lerp2 = (a, b, k) => [a[0] + (b[0] - a[0]) * k, a[1] + (b[1] - a[1]) * k];

// Roof pieces: the footprint cut into the parts where one linear piece is the lowest.
function roofPieces(rf, ring) {
  if (!rf.fns) return [ring];
  const pieces = [];
  for (let i = 0; i < rf.fns.length; i++) {
    let poly = ring;
    for (let j = 0; j < rf.fns.length && poly.length >= 3; j++) {
      if (j === i) continue;
      // keep where fn_i <= fn_j
      poly = clipHalf(poly, (p) => { const [s, t] = rf.st(p[0], p[1]); return rf.fns[j](s, t) - rf.fns[i](s, t); });
    }
    if (poly.length >= 3) pieces.push(poly);
  }
  return pieces;
}

// ---------- palettes ----------
const WALLS = WALL_COLORS.map(col);
const SHOPS = COMMERCIAL_WALLS.map(col);
const ROOFS = ROOF_COLORS.map(col);
const FLAT_ROOF = [col(0x9a9894), col(0x8c8a86), col(0xa8a49c)];
const C = {
  ground: col(0x8a8f63), lawn: col(0x84955c), grass: col(0x7f9a58), pitch: col(0x6f9a4c), playground: col(0xb7a27e),
  wood: col(0x55703f), scrub: col(0x748050), wetland: col(0x6f8461), water: col(0x5d8aa0), pool: col(0x6fb3c8),
  plaza: col(0xb9b3a6), sand: col(0xd8c79c), track: col(0xa9644b), paved: col(0xa7a39b), gravel: col(0x9c968a), parking: col(0x6c6c6c),
  asphalt: col(0x5f6062), asphaltMinor: col(0x6a6a6a), concrete: col(0xb3aea4), dirt: col(0x9b8466), rail: col(0x6b5a4a), stream: col(0x56809a),
  line: col(0xd8c45a), white: col(0xe6e2d6), door: col(0x5a4636), shopDoor: col(0x3e4c54), trim: col(0xece6da),
  trunk: col(0x5b4636), leaf: col(0x5f8a45), leaf2: col(0x6f9650), fir: col(0x3f5f3c), fir2: col(0x46693f), bare: col(0x7a6a5a),
  pole: col(0x6e5c48), metal: col(0x7d8285), red: col(0xb5483c), lampHead: col(0xe9e2c8), fence: col(0x8b6f52), wallStone: col(0x9a958c), hedge: col(0x45683a),
  bench: col(0x7b5b40), bin: col(0x4e5a52), hydrant: col(0xc9a23b), yellow: col(0xd3b64a),
};
const AREA_COL = {
  [AREA.lawn]: C.lawn, [AREA.grass]: C.grass, [AREA.pitch]: C.pitch, [AREA.playground]: C.playground, [AREA.wood]: C.wood,
  [AREA.scrub]: C.scrub, [AREA.wetland]: C.wetland, [AREA.water]: C.water, [AREA.pool]: C.pool, [AREA.plaza]: C.plaza,
  [AREA.sand]: C.sand, [AREA.track]: C.track, [AREA.paved]: C.paved, [AREA.gravel]: C.gravel, [AREA.parking]: C.parking,
};
// draw height: later layers sit a little higher, so nothing flickers
const AREA_Y = { [AREA.parking]: 0.035, [AREA.water]: 0.03, [AREA.pool]: 0.04, [AREA.plaza]: 0.03, [AREA.paved]: 0.025 };
const roadLook = (cls) => {
  for (const [k, list] of Object.entries(ROAD_LOOK)) if (list.includes(cls)) return k;
  return 'asphalt';
};

// ---------- props (one small mesh per kind, copied and merged) ----------
function painted(geo, color) {
  const g = geo.index ? geo.toNonIndexed() : geo;
  const n = g.attributes.position.count;
  const c = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { c[i * 3] = color.r; c[i * 3 + 1] = color.g; c[i * 3 + 2] = color.b; }
  g.setAttribute('color', new Float32BufferAttribute(c, 3));
  g.deleteAttribute('uv');
  return g;
}
// place a prototype: scale, then turn about y, then move
const at = (g, x, y, z, sx = 1, sy = 1, sz = 1, ry = 0) => g.applyMatrix4(
  new Matrix4().makeTranslation(x, y, z).multiply(new Matrix4().makeRotationY(ry)).multiply(new Matrix4().makeScale(sx, sy, sz)));
let PROTO = null;
function protos() {
  if (PROTO) return PROTO;
  const P = {};
  P.trunk = painted(new CylinderGeometry(0.12, 0.2, 1, 6), C.trunk);
  P.branch = painted(new CylinderGeometry(0.03, 0.08, 1, 4), C.bare);
  P.pole = painted(new CylinderGeometry(0.09, 0.12, 1, 6), C.pole);
  P.metalPole = painted(new CylinderGeometry(0.06, 0.08, 1, 6), C.metal);
  P.box = (c) => painted(new BoxGeometry(1, 1, 1), c);
  P.octagon = painted(new CylinderGeometry(0.38, 0.38, 0.05, 8), C.red);
  PROTO = P;
  return P;
}
// T: tones(look) (season leaf colours, snow on firs)
function treeGeo(list, kind, x, z, h, rnd, bare, T, fine = false) {
  const P = protos();
  if (kind === 1) { // fir: tall narrow cone layers
    const w = h * 0.2;
    const c1 = T.fir(rnd() < 0.5 ? C.fir : C.fir2), c2 = T.fir(C.fir);
    list.push(at(P.trunk.clone(), x, h * 0.15, z, 1.4, h * 0.3, 1.4));
    list.push(at(painted(new ConeGeometry(1, 1, 7), c1), x, h * 0.45, z, w, h * 0.55, w));
    list.push(at(painted(new ConeGeometry(1, 1, 7), c2), x, h * 0.72, z, w * 0.7, h * 0.45, w * 0.7));
    if (fine) { // a wide low skirt, a middle tier, a thin top and a root flare
      list.push(at(painted(new ConeGeometry(1, 1, 7), c2), x, h * 0.28, z, w * 1.15, h * 0.3, w * 1.15, 0.4));
      list.push(at(painted(new ConeGeometry(1, 1, 6), c2), x, h * 0.9, z, w * 0.3, h * 0.2, w * 0.3));
    }
  } else {
    const r = h * 0.32;
    list.push(at(P.trunk.clone(), x, h * 0.25, z, 1.2, h * 0.5, 1.2));
    if (bare) { // winter: a few bare branches instead of a crown
      const n = 5;
      for (let i = 0; i < n; i++) {
        const a = (i / n) * Math.PI * 2 + rnd();
        const len = h * (0.35 + rnd() * 0.2);
        const g = P.branch.clone().applyMatrix4(new Matrix4().makeRotationZ(0.55 + rnd() * 0.3));
        list.push(at(g, x + Math.cos(a) * len * 0.25, h * (0.55 + rnd() * 0.15), z + Math.sin(a) * len * 0.25, 1, len, 1, a));
        if (fine) { // a twig off each branch, higher and further out (no random numbers)
          const t = P.branch.clone().applyMatrix4(new Matrix4().makeRotationZ(0.9));
          list.push(at(t, x + Math.cos(a) * len * 0.5, h * 0.78, z + Math.sin(a) * len * 0.5, 0.6, len * 0.5, 0.6, a + 0.5));
        }
      }
      if (fine) list.push(at(painted(new ConeGeometry(1, 1, 6), C.trunk), x, 0.15, z, 0.32, 0.3, 0.32));
    } else {
      const leaf = T.leaf(rnd());
      list.push(at(painted(new IcosahedronGeometry(1, 0), leaf), x, h * 0.62, z, r, r * 0.85, r, rnd() * 6));
      if (fine) { // three smaller lobes round the crown and a root flare
        for (let i = 0; i < 3; i++) {
          const a = i * 2.1 + h;
          list.push(at(painted(new IcosahedronGeometry(1, 0), leaf), x + Math.cos(a) * r * 0.6, h * (0.55 + i * 0.07), z + Math.sin(a) * r * 0.6, r * 0.6, r * 0.5, r * 0.6, a));
        }
        list.push(at(painted(new ConeGeometry(1, 1, 6), C.trunk), x, 0.15, z, 0.32, 0.3, 0.32));
      }
    }
  }
}
function propGeo(list, type, x, z, yawDeg, fine = false) {
  const P = protos();
  const ry = (yawDeg * Math.PI) / 180;
  if (fine) propFine(list, type, x, z, ry);
  switch (type) {
    case PROP.lamp:
      list.push(at(P.metalPole.clone(), x, 3.5, z, 1, 7, 1));
      list.push(at(P.box(C.metal), x + Math.cos(ry) * 0.8, 7, z + Math.sin(ry) * 0.8, 1.7, 0.12, 0.14, -ry));
      list.push(at(P.box(C.lampHead), x + Math.cos(ry) * 1.6, 6.9, z + Math.sin(ry) * 1.6, 0.6, 0.18, 0.3, -ry));
      break;
    case PROP.power_pole:
      list.push(at(P.pole.clone(), x, 5.5, z, 1.4, 11, 1.4));
      list.push(at(P.box(C.pole), x, 10.3, z, 2.4, 0.14, 0.14, ry));
      break;
    case PROP.stop_sign:
      list.push(at(P.metalPole.clone(), x, 1.1, z, 0.6, 2.2, 0.6));
      list.push(at(P.octagon.clone().rotateX(Math.PI / 2), x, 2.2, z, 1, 1, 1, ry));
      break;
    case PROP.bus_stop:
      list.push(at(P.metalPole.clone(), x, 1.3, z, 0.6, 2.6, 0.6));
      list.push(at(P.box(C.white), x, 2.5, z, 0.5, 0.4, 0.05, ry));
      break;
    case PROP.signal:
      list.push(at(P.metalPole.clone(), x, 3, z, 1.2, 6, 1.2));
      list.push(at(P.box(C.yellow), x, 5.6, z, 0.35, 0.9, 0.3, ry));
      break;
    case PROP.bench: list.push(at(P.box(C.bench), x, 0.45, z, 1.6, 0.1, 0.45, ry)); break;
    case PROP.bollard: list.push(at(P.box(C.metal), x, 0.45, z, 0.18, 0.9, 0.18)); break;
    case PROP.bin: list.push(at(P.box(C.bin), x, 0.5, z, 0.55, 1, 0.55, ry)); break;
    case PROP.hydrant: list.push(at(P.box(C.hydrant), x, 0.4, z, 0.3, 0.8, 0.3)); break;
    case PROP.mailbox: list.push(at(P.box(C.metal), x, 1, z, 0.3, 0.3, 0.5, ry)); break;
    case PROP.vending: list.push(at(P.box(C.red), x, 0.9, z, 0.9, 1.8, 0.8, ry)); break;
    default: break;
  }
}

// Fine prop parts (Medium/High 3D quality): bases, arms, caps, insulators, lenses, slats, doors.
function propFine(list, type, x, z, ry) {
  const P = protos();
  const cs = Math.cos(ry), sn = Math.sin(ry);
  const cy = (r, h, c, seg = 8) => painted(new CylinderGeometry(r, r, h, seg), c);
  switch (type) {
    case PROP.lamp:
      list.push(at(cy(0.16, 0.4, C.metal), x, 0.2, z)); // base
      list.push(at(cy(0.1, 0.1, C.metal), x, 7.05, z)); // pole cap
      list.push(at(P.box(C.metal), x + cs * 0.4, 6.75, z + sn * 0.4, 0.8, 0.06, 0.06, -ry - 0.0).applyMatrix4(new Matrix4())); // brace
      list.push(at(P.box(C.white), x + cs * 1.6, 6.8, z + sn * 1.6, 0.5, 0.03, 0.24, -ry)); // lens
      break;
    case PROP.power_pole:
      list.push(at(P.box(C.pole), x, 9.6, z, 1.8, 0.12, 0.12, ry)); // lower cross-arm
      for (const k of [-1.1, -0.4, 0.4, 1.1]) list.push(at(cy(0.06, 0.22, C.white, 6), x + Math.cos(ry) * k, 10.48, z - Math.sin(ry) * k));
      list.push(at(cy(0.32, 0.9, C.metal), x + Math.sin(ry) * 0.35, 8.4, z + Math.cos(ry) * 0.35)); // transformer can
      list.push(at(P.box(C.metal), x, 1.6, z, 0.08, 0.5, 0.25, ry)); // tag plate
      break;
    case PROP.stop_sign:
      list.push(at(painted(new CylinderGeometry(0.4, 0.4, 0.04, 8), C.white).rotateX(Math.PI / 2), x - sn * 0.01, 2.2, z + cs * 0.01, 1, 1, 1, ry));
      list.push(at(P.box(C.metal), x, 0.05, z, 0.2, 0.1, 0.2));
      list.push(at(P.box(C.metal), x, 2.2, z, 0.08, 0.3, 0.08)); // bracket
      break;
    case PROP.bus_stop:
      list.push(at(P.box(C.metal), x, 2.72, z, 0.52, 0.04, 0.07, ry)); // frame top
      list.push(at(P.box(C.metal), x, 2.28, z, 0.52, 0.04, 0.07, ry)); // frame bottom
      list.push(at(P.box(C.bench), x + cs * 1.2, 0.45, z - sn * 1.2, 1.4, 0.08, 0.4, ry)); // a bench by the sign
      for (const k of [0.6, 1.8]) list.push(at(P.box(C.metal), x + cs * k, 0.22, z - sn * k, 0.06, 0.44, 0.35, ry));
      break;
    case PROP.signal:
      for (const k of [0.3, 0, -0.3]) list.push(at(cy(0.1, 0.05, k > 0.2 ? C.red : k < -0.2 ? C.hydrant : C.yellow), x + sn * 0.17, 5.6 + k, z + cs * 0.17, 1, 1, 1).applyMatrix4(new Matrix4()));
      list.push(at(P.box(C.metal), x, 5.6, z, 0.45, 1.0, 0.05, ry)); // back plate
      list.push(at(P.box(C.metal), x, 0.2, z, 0.35, 0.4, 0.35)); // base
      break;
    case PROP.bench:
      list.push(at(P.box(C.bench), x - sn * 0.22, 0.75, z - cs * 0.22, 1.6, 0.32, 0.06, ry)); // backrest
      for (const k of [-0.65, 0.65]) list.push(at(P.box(C.metal), x + cs * k, 0.22, z - sn * k, 0.06, 0.44, 0.42, ry));
      break;
    case PROP.bollard:
      list.push(at(P.box(C.yellow), x, 0.75, z, 0.2, 0.1, 0.2));
      list.push(at(P.box(C.metal), x, 0.93, z, 0.14, 0.06, 0.14));
      break;
    case PROP.bin:
      list.push(at(P.box(C.bin), x, 1.05, z, 0.6, 0.1, 0.6, ry)); // lid
      list.push(at(P.box(C.metal), x, 0.6, z, 0.57, 0.05, 0.57, ry)); // band
      list.push(at(P.box(C.metal), x, 0.03, z, 0.6, 0.06, 0.6, ry)); // foot
      break;
    case PROP.hydrant:
      list.push(at(cy(0.17, 0.08, C.hydrant), x, 0.84, z)); // bonnet
      list.push(at(cy(0.06, 0.06, C.hydrant), x, 0.92, z)); // nut
      for (const s of [-1, 1]) list.push(at(cy(0.07, 0.14, C.hydrant).rotateZ(Math.PI / 2), x + s * 0.2, 0.55, z));
      list.push(at(cy(0.2, 0.06, C.metal), x, 0.03, z)); // flange
      break;
    case PROP.mailbox:
      list.push(at(P.metalPole.clone(), x, 0.42, z, 0.7, 0.85, 0.7));
      list.push(at(P.box(C.red), x - sn * 0.05, 1.22, z + cs * 0.05, 0.03, 0.12, 0.03, ry)); // flag
      break;
    case PROP.vending:
      list.push(at(P.box(C.white), x + sn * 0.41, 1.2, z + cs * 0.41, 0.6, 0.9, 0.02, ry)); // window
      list.push(at(P.box(C.metal), x + sn * 0.41, 0.25, z + cs * 0.41, 0.5, 0.15, 0.03, ry)); // drop slot
      list.push(at(P.box(C.metal), x + sn * 0.42, 1.2, z + cs * 0.42 + 0.3, 0.12, 0.35, 0.03, ry)); // buttons
      break;
    default: break;
  }
}

// Fine building parts (Medium/High 3D quality), with no random numbers: window sills and heads on
// houses (one per siding tile: windows every 3 m of wall, one row per 2.8 m floor), a frame, step
// and lamp at each door, an awning over shop doors, a coping along flat roof edges and a chimney.
function buildingFine(list, sills, ring, rf, kind, shop, flatRoof, best) {
  const trim = C.trim, dark = C.metal;
  if (!shop && kind !== KIND.shed) {
    let u = 0;
    for (let i = 0; i < ring.length; i++) {
      const a = ring[i], c = ring[(i + 1) % ring.length];
      const len = Math.hypot(c[0] - a[0], c[1] - a[1]);
      if (len < 0.05) continue;
      const tx = (c[0] - a[0]) / len, tz = (c[1] - a[1]) / len, nx = tz, nz = -tx;
      const ang = -Math.atan2(tz, tx);
      for (let k = Math.ceil((u - 1.5) / 3); 3 * k + 1.5 < u + len; k++) {
        const d = 3 * k + 1.5 - u; // distance from a to the window centre
        if (d < 0.6 || d > len - 0.6) continue;
        const px = a[0] + tx * d, pz = a[1] + tz * d;
        const top = Math.min(rf.y(a[0], a[1]), rf.y(c[0], c[1]));
        // a sill (top and front faces only: 4 triangles) on the ground floor
        for (let f = 0; f < 1 && f * 2.8 + 2.1 < top; f++) {
          const y = f * 2.8 + 0.96, o = 0.1, hw = 0.7;
          const L0 = [px - tx * hw, pz - tz * hw], R0 = [px + tx * hw, pz + tz * hw];
          const L1 = [L0[0] + nx * o, L0[1] + nz * o], R1 = [R0[0] + nx * o, R0[1] + nz * o];
          sills.quad([L1[0], y, L1[1]], [R1[0], y, R1[1]], [R0[0], y, R0[1]], [L0[0], y, L0[1]], trim);
          sills.quad([R1[0], y - 0.06, R1[1]], [L1[0], y - 0.06, L1[1]], [L1[0], y, L1[1]], [R1[0], y, R1[1]], trim);
        }
      }
      u += len;
    }
  }
  if (best && kind !== KIND.shed) {
    const tx = (best.c[0] - best.a[0]) / best.len, tz = (best.c[1] - best.a[1]) / best.len;
    const ang = -Math.atan2(tz, tx);
    const dw = shop ? 1.8 : 0.95, dh = shop ? 2.3 : 2.1;
    const mx = best.mx, mz = best.mz, nx = best.nx, nz = best.nz;
    for (const s of [-1, 1]) list.push(at(protos().box(shop ? dark : trim), mx + tx * s * (dw / 2 + 0.05) + nx * 0.05, dh / 2, mz + tz * s * (dw / 2 + 0.05) + nz * 0.05, 0.1, dh, 0.1, ang));
    list.push(at(protos().box(shop ? dark : trim), mx + nx * 0.05, dh + 0.05, mz + nz * 0.05, dw + 0.2, 0.1, 0.1, ang));
    list.push(at(protos().box(C.concrete), mx + nx * 0.35, 0.09, mz + nz * 0.35, dw + 0.6, 0.18, 0.6, ang)); // step
    list.push(at(protos().box(C.lampHead), mx + tx * (dw / 2 + 0.3) + nx * 0.08, dh - 0.1, mz + tz * (dw / 2 + 0.3) + nz * 0.08, 0.14, 0.22, 0.12, ang)); // porch lamp
    if (shop) list.push(at(protos().box(C.red), mx + nx * 0.6, dh + 0.35, mz + nz * 0.6, dw + 1.2, 0.08, 1.1, ang)); // awning
  }
  if (flatRoof) { // coping along the roof edge
    for (let i = 0; i < ring.length; i++) {
      const a = ring[i], c = ring[(i + 1) % ring.length];
      const len = Math.hypot(c[0] - a[0], c[1] - a[1]);
      if (len < 0.5) continue;
      const y = rf.y((a[0] + c[0]) / 2, (a[1] + c[1]) / 2);
      list.push(at(protos().box(C.trim), (a[0] + c[0]) / 2, y + 0.12, (a[1] + c[1]) / 2, len, 0.24, 0.22, -Math.atan2(c[1] - a[1], c[0] - a[0])));
    }
  } else if (!shop && kind !== KIND.shed && ring.length >= 3) { // a chimney near the first corner
    const a = ring[0], c = ring[1];
    const px = a[0] + (c[0] - a[0]) * 0.25, pz = a[1] + (c[1] - a[1]) * 0.25;
    const cx = (ring.reduce((s2, p) => s2 + p[0], 0) / ring.length) * 0.3 + px * 0.7;
    const cz = (ring.reduce((s2, p) => s2 + p[1], 0) / ring.length) * 0.3 + pz * 0.7;
    const y = rf.y(cx, cz);
    list.push(at(protos().box(C.wallStone), cx, y + 0.5, cz, 0.6, 1.4, 0.6));
    list.push(at(protos().box(C.metal), cx, y + 1.25, cz, 0.7, 0.1, 0.7));
  }
}

// ---------- the cell ----------
// opts: { lod: 0 full | 1 no props, look: { season, growth, snow } (look.js) }
// (old opts.bare: true = a winter look)
const NATURAL = new Set([AREA.lawn, AREA.grass, AREA.pitch, AREA.wood, AREA.scrub, AREA.wetland]);
const SOFT = new Set([AREA.playground, AREA.sand, AREA.track]);
export function buildCell(data, opts = {}) {
  const lod = opts.lod ?? 0;
  const fine = !!opts.fine && lod === 0; // Medium/High 3D quality: the small parts
  const fineList = [];
  const sills = new Builder();
  const T = tones(opts.look ?? { season: opts.bare ? 'winter' : 'summer' });
  const areaCol = (cls) => {
    const c = AREA_COL[cls] || C.grass;
    if (NATURAL.has(cls)) return T.green(c);
    if (SOFT.has(cls)) return T.walk(c);
    if (cls === AREA.water || cls === AREA.pool) return c;
    return T.road(c);
  };
  const rings = [];
  const ground = new Builder();
  const wallsHouse = new Builder(true);
  const wallsShop = new Builder(true);
  const wallsPlain = new Builder(true);
  const roofs = new Builder(true);
  const colliders = []; // [x0, z0, x1, z1] wall segments, cell-local
  const doors = []; // { x, z, nx, nz, kind, placeId, name, bi }
  const S = 256;

  // ground: the cell base, then areas, then roads
  ground.quad([0, 0, S], [S, 0, S], [S, 0, 0], [0, 0, 0], T.green(C.ground));
  for (const [cls, flat] of data.a || []) flatPoly(ground, pts(flat), AREA_Y[cls] ?? 0.015, areaCol(cls));
  const roads = (data.r || []).map(([cls, w, flat, ni]) => ({ cls, w: w * D, line: pts(flat), name: ni >= 0 ? data.n[ni] : null }));
  const order = (r) => (roadLook(r.cls) === 'concrete' ? 2 : roadLook(r.cls) === 'crosswalk' ? 3 : roadLook(r.cls) === 'water' ? 0 : 1);
  for (const r of [...roads].sort((a, b) => order(a) - order(b) || b.w - a.w)) {
    const look = roadLook(r.cls);
    if (look === 'rail') { ribbon(ground, r.line, 2.6, 0.04, T.walk(C.dirt)); ribbon(ground, r.line, 1.6, 0.06, T.road(C.rail)); continue; }
    if (look === 'water') { ribbon(ground, r.line, r.w, 0.03, C.stream); continue; }
    if (look === 'crosswalk') { ribbon(ground, r.line, r.w, 0.075, T.road(C.asphalt)); dashes(ground, r.line, r.w * 0.9, 0.085, T.road(C.white), 0.5, 0.5); continue; }
    const y = look === 'concrete' ? 0.09 : look === 'dirt' ? 0.045 : 0.06 - Math.min(0.02, r.cls * 0.001);
    const c = look === 'concrete' ? C.concrete : look === 'dirt' ? C.dirt : r.cls >= ROAD.residential ? C.asphaltMinor : C.asphalt;
    ribbon(ground, r.line, r.w, y, look === 'asphalt' ? T.road(c) : T.walk(c));
    if (r.cls <= ROAD.tertiary) dashes(ground, r.line, 0.14, y + 0.01, T.road(C.line), 3, 6);
  }

  // buildings
  const carRoads = roads.filter((r) => isCarRoad(r.cls));
  (data.b || []).forEach((rec, bi) => {
    const [kind, roofType, hdm, risedm, wc, rc, flat, box, placeId, ni, sid] = rec;
    const ring = pts(flat);
    if (ring.length < 3) return;
    rings.push(ring);
    const bld = { h: hdm * D, rise: risedm * D, roof: roofType, box: { cx: box[0] * D, cz: box[1] * D, hu: box[2] * D, hv: box[3] * D, ang: box[4] / 1000 } };
    const rf = roofFn(bld);
    const shop = kind === KIND.commercial || kind === KIND.industrial || kind === KIND.school || kind === KIND.civic;
    const wallCol = shop ? SHOPS[wc % SHOPS.length] : WALLS[wc % WALLS.length];
    const wb = kind === KIND.shed ? wallsPlain : shop ? wallsShop : wallsHouse;
    // walls (ring is counter-clockwise in x/z with z south: outward normal = (dz, -dx))
    let u = 0;
    let best = null;
    for (let i = 0; i < ring.length; i++) {
      const a = ring[i], c = ring[(i + 1) % ring.length];
      const len = Math.hypot(c[0] - a[0], c[1] - a[1]);
      if (len < 0.05) continue;
      colliders.push([a[0], a[1], c[0], c[1]]);
      const ks = [0, ...bends(rf, a, c), 1];
      for (let k = 0; k < ks.length - 1; k++) {
        const p = lerp2(a, c, ks[k]), q = lerp2(a, c, ks[k + 1]);
        const yp = rf.y(p[0], p[1]), yq = rf.y(q[0], q[1]);
        const u0 = (u + len * ks[k]) / 3, u1 = (u + len * ks[k + 1]) / 3;
        // seen from outside: p (left) -> q (right) along a counter-clockwise ring? use a,b,c,d order with normal outward
        wb.quad([q[0], 0, q[1]], [p[0], 0, p[1]], [p[0], yp, p[1]], [q[0], yq, q[1]], wallCol,
          [[u1, 0], [u0, 0], [u0, yp / 2.8], [u1, yq / 2.8]]);
      }
      u += len;
      // door side: the longest wall that faces the nearest car road
      if (len > 2.2) {
        const mx = (a[0] + c[0]) / 2, mz = (a[1] + c[1]) / 2;
        const nx = (c[1] - a[1]) / len, nz = -(c[0] - a[0]) / len;
        let score = len * 0.05;
        const near = nearestOn(carRoads, mx, mz);
        if (near) {
          const dx = near[0] - mx, dz = near[1] - mz, dl = Math.hypot(dx, dz) || 1;
          score += ((dx * nx + dz * nz) / dl) * 3 - Math.min(dl, 80) * 0.01;
        }
        if (!best || score > best.score) best = { score, mx, mz, nx, nz, len, a, c, street: near?.[2] || null };
      }
    }
    // roof
    const roofCol = T.roof(roofType === ROOF.flat ? FLAT_ROOF[rc % FLAT_ROOF.length] : ROOFS[rc % ROOFS.length]);
    for (const piece of roofPieces(rf, ring)) {
      const v2 = piece.map(([x, z]) => new Vector2(x, z));
      let tris;
      try { tris = ShapeUtils.triangulateShape(v2, []); } catch (e) { continue; }
      for (const [i, j, k] of tris) {
        let A = piece[i], B = piece[j], Cc = piece[k];
        const cy = (B[1] - A[1]) * (Cc[0] - A[0]) - (B[0] - A[0]) * (Cc[1] - A[1]);
        if (cy < 0) [B, Cc] = [Cc, B];
        const P3 = (p) => [p[0], rf.y(p[0], p[1]) + 0.01, p[1]];
        roofs.tri(P3(A), P3(B), P3(Cc), roofCol, [A[0] / 2, A[1] / 2], [B[0] / 2, B[1] / 2], [Cc[0] / 2, Cc[1] / 2]);
      }
    }
    // door: a dark panel a little in front of the wall
    if (best && kind !== KIND.shed) {
      const tx = (best.c[0] - best.a[0]) / best.len, tz = (best.c[1] - best.a[1]) / best.len;
      const dw = shop ? 1.8 : 0.95, dh = shop ? 2.3 : 2.1, o = 0.03;
      const cx = best.mx + best.nx * o, cz = best.mz + best.nz * o;
      const L = [cx - tx * dw / 2, cz - tz * dw / 2], R = [cx + tx * dw / 2, cz + tz * dw / 2];
      wallsPlain.quad([L[0], 0.02, L[1]], [R[0], 0.02, R[1]], [R[0], dh, R[1]], [L[0], dh, L[1]], shop ? C.shopDoor : C.door, [[0, 0], [0, 0], [0, 0], [0, 0]]);
      wallsPlain.quad([R[0], 0.02, R[1]], [L[0], 0.02, L[1]], [L[0], dh, L[1]], [R[0], dh, R[1]], shop ? C.shopDoor : C.door, [[0, 0], [0, 0], [0, 0], [0, 0]]);
      doors.push({ x: best.mx + best.nx * 0.9, z: best.mz + best.nz * 0.9, nx: best.nx, nz: best.nz, kind, placeId: placeId || null, name: ni >= 0 ? data.n[ni] : null, bi, id: sid || `${data.k}#${bi}`, street: best.street });
    }
    if (fine) buildingFine(fineList, sills, ring, rf, kind, shop, roofType === ROOF.flat, best);
  });

  // props, trees, fences (not at lod 1)
  let props = null;
  if (lod === 0) {
    const list = [];
    let seed = 1;
    const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
    list.push(...fineList);
    const sg = sills.geometry();
    if (sg) list.push(sg);
    for (const [kind, x, z, h] of data.t || []) treeGeo(list, kind, x * D, z * D, h * D, rnd, T.bare && kind === 0, T, fine);
    for (const [type, x, z, yaw] of data.p || []) propGeo(list, type, x * D, z * D, yaw, fine);
    const fb = new Builder();
    for (const [type, flat] of data.f || []) {
      const line = pts(flat);
      const h = type === 2 ? 1.6 : type === 1 ? 1.5 : 1.2, w = type === 2 ? 0.8 : 0.12;
      const c = type === 2 ? T.green(C.hedge) : type === 1 ? T.roof(C.wallStone) : T.roof(C.fence);
      for (let i = 1; i < line.length; i++) {
        const a = line[i - 1], b = line[i];
        const L = Math.hypot(b[0] - a[0], b[1] - a[1]);
        if (L < 0.1) continue;
        const g = protos().box(c);
        list.push(at(g, (a[0] + b[0]) / 2, h / 2, (a[1] + b[1]) / 2, L, h, w, -Math.atan2(b[1] - a[1], b[0] - a[0])));
        colliders.push([a[0], a[1], b[0], b[1]]);
        if (fine && type === 0) { // wood fence: a post at each end and a top rail
          list.push(at(protos().box(T.roof(C.pole)), a[0], h / 2 + 0.05, a[1], 0.14, h + 0.1, 0.14));
          list.push(at(protos().box(c), (a[0] + b[0]) / 2, h - 0.05, (a[1] + b[1]) / 2, L, 0.08, w + 0.06, -Math.atan2(b[1] - a[1], b[0] - a[0])));
        }
      }
    }
    // abandoned cars, trash, barricades, grass in the cracks
    const det = streetDetails(data.k, roads, rings, T, fine);
    list.push(...det.geos);
    colliders.push(...det.colliders);
    doors.push(...det.doors);
    const fg = fb.geometry();
    if (fg) list.push(fg);
    if (list.length) props = mergeGeometries(list.map((g) => (g.index ? g.toNonIndexed() : g)), false);
  }
  return {
    ground: ground.geometry(),
    wallsHouse: wallsHouse.geometry(),
    wallsShop: wallsShop.geometry(),
    wallsPlain: wallsPlain.geometry(),
    roofs: roofs.geometry(),
    props,
    colliders,
    doors,
    roads: roads.filter((r) => r.name && isCarRoad(r.cls)).map((r) => ({ name: r.name, line: r.line })),
  };
}

function nearestOn(roads, x, z) {
  let best = null, bd = Infinity;
  for (const r of roads) {
    for (let i = 1; i < r.line.length; i++) {
      const a = r.line[i - 1], c = r.line[i];
      const dx = c[0] - a[0], dz = c[1] - a[1];
      const L = dx * dx + dz * dz || 1;
      const t = Math.max(0, Math.min(1, ((x - a[0]) * dx + (z - a[1]) * dz) / L));
      const px = a[0] + t * dx, pz = a[1] + t * dz;
      const d = Math.hypot(x - px, z - pz);
      if (d < bd) { bd = d; best = [px, pz, r.name]; }
    }
  }
  return best;
}

// Push a circle (the player) out of wall segments. Returns the new [x, z].
export function collide(x, z, radius, segs) {
  for (let pass = 0; pass < 2; pass++) {
    for (const [x0, z0, x1, z1] of segs) {
      const dx = x1 - x0, dz = z1 - z0;
      const L = dx * dx + dz * dz;
      if (!L) continue;
      const t = Math.max(0, Math.min(1, ((x - x0) * dx + (z - z0) * dz) / L));
      const px = x0 + t * dx, pz = z0 + t * dz;
      const ex = x - px, ez = z - pz;
      const d = Math.hypot(ex, ez);
      if (d < radius && d > 1e-6) { x = px + (ex / d) * radius; z = pz + (ez / d) * radius; }
    }
  }
  return [x, z];
}

// Is a point inside a footprint? (to put a player back outside if a step skipped a wall)
export function insideRing(x, z, ring) {
  let c = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, zi] = ring[i], [xj, zj] = ring[j];
    if ((zi > z) !== (zj > z) && x < ((xj - xi) * (z - zi)) / (zj - zi) + xi) c = !c;
  }
  return c;
}
