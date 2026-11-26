// Street details for one cell: abandoned cars, trash and debris, a few barricades,
// and grass that grows through the roads as the months pass. No data file: all of it
// comes from the roads in the cell and a seed from the cell key, so the same car is
// always in the same place (its id is stable for the engine's car rules).
//
// streetDetails(cellKey, roads, rings, T) -> { geos, colliders, doors }
//   roads: [{ cls, w, line: [[x, z], ...] }] in cell metres
//   rings: building footprints (no car inside a building)
//   T: tones(look) from look.js
import { Matrix4, BoxGeometry, ConeGeometry, IcosahedronGeometry, CylinderGeometry, Color, Float32BufferAttribute } from 'three';
import { ROAD, isCarRoad } from '../../data/streets.js';

const S = 256;

function painted(geo, color) {
  const g = geo.index ? geo.toNonIndexed() : geo;
  const n = g.attributes.position.count;
  const c = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { c[i * 3] = color.r; c[i * 3 + 1] = color.g; c[i * 3 + 2] = color.b; }
  g.setAttribute('color', new Float32BufferAttribute(c, 3));
  if (g.attributes.uv) g.deleteAttribute('uv');
  return g;
}
const at = (g, x, y, z, sx = 1, sy = 1, sz = 1, ry = 0) => g.applyMatrix4(
  new Matrix4().makeTranslation(x, y, z).multiply(new Matrix4().makeRotationY(ry)).multiply(new Matrix4().makeScale(sx, sy, sz)));
const box = (c) => painted(new BoxGeometry(1, 1, 1), c);

// seeded random from the cell key
export function seedFrom(key) {
  let h = 2166136261;
  for (let i = 0; i < key.length; i++) { h ^= key.charCodeAt(i); h = Math.imul(h, 16777619); }
  let s = (h >>> 0) % 2147483646 + 1;
  return () => ((s = (s * 16807) % 2147483647) / 2147483647);
}

function inside(x, z, ring) {
  let c = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, zi] = ring[i], [xj, zj] = ring[j];
    if ((zi > z) !== (zj > z) && x < ((xj - xi) * (z - zi)) / (zj - zi) + xi) c = !c;
  }
  return c;
}

// Cars per metre of road and where they stand.
// lane: share of cars left in the lane (a jam or a crash), not at the curb.
const CAR_RULES = {
  [ROAD.motorway]: { every: 28, lane: 0.8 }, [ROAD.trunk]: { every: 32, lane: 0.6 },
  [ROAD.primary]: { every: 42, lane: 0.4 }, [ROAD.secondary]: { every: 48, lane: 0.3 },
  [ROAD.tertiary]: { every: 45, lane: 0.15 }, [ROAD.residential]: { every: 38, lane: 0.05 },
  [ROAD.unclassified]: { every: 55, lane: 0.05 }, [ROAD.living_street]: { every: 50, lane: 0 },
  [ROAD.service]: { every: 130, lane: 0.1 }, [ROAD.parking_aisle]: { every: 9, lane: 0, lot: true },
  [ROAD.unknown]: { every: 90, lane: 0.1 },
};
const CAR_COLORS = [0x8a2f2a, 0x2f4f6f, 0xb8b5ac, 0x3d3f42, 0x6b7d5a, 0xd9d4c8, 0x7a6a55, 0x4a5d70, 0x9a9da0, 0x5b2f3a];
// body length, width, height; cabin length share and height
const CAR_TYPES = [
  { L: 4.5, W: 1.8, H: 0.72, cab: 0.5, ch: 0.55, back: -0.15 }, // sedan
  { L: 4.0, W: 1.75, H: 0.75, cab: 0.6, ch: 0.6, back: -0.25 }, // hatchback
  { L: 4.8, W: 1.95, H: 1.0, cab: 0.62, ch: 0.62, back: -0.12 }, // SUV
  { L: 5.4, W: 2.0, H: 1.15, cab: 0.75, ch: 0.75, back: -0.1 }, // van
  { L: 5.6, W: 2.0, H: 0.85, cab: 0.32, ch: 0.62, back: 0.2 }, // pickup
];
const GLASS = new Color(0x34414b), TIRE = new Color(0x26282a), SNOWC = new Color(0xf1f4f7);

function carGeo(list, x, z, ang, type, color, T, rnd) {
  const t = CAR_TYPES[type];
  const body = T.car(new Color(color));
  const ry = -ang; // ang: direction of the car's length in x/z
  const ca = Math.cos(ang), sa = Math.sin(ang);
  const P = (u, v) => [x + ca * u - sa * v, z + sa * u + ca * v]; // u along, v across
  const flat = rnd() < 0.3 ? 0.08 : 0; // flat tyres: sits lower
  const y0 = 0.32 - flat;
  list.push(at(box(body), x, y0 + t.H / 2, z, t.L, t.H, t.W, ry));
  const [cx, cz] = P(t.L * t.back, 0);
  list.push(at(box(T.car(GLASS)), cx, y0 + t.H + t.ch / 2, cz, t.L * t.cab, t.ch, t.W * 0.9, ry));
  list.push(at(box(body), cx, y0 + t.H + t.ch + 0.03, cz, t.L * t.cab * 0.92, 0.06, t.W * 0.86, ry)); // roof
  for (const [u, v] of [[0.32, 0.45], [0.32, -0.45], [-0.32, 0.45], [-0.32, -0.45]]) {
    const [wx, wz] = P(t.L * u, t.W * v);
    list.push(at(box(TIRE), wx, 0.33 - flat / 2, wz, 0.66, 0.62 - flat, 0.24, ry));
  }
  if (T.look.snow > 0.3) list.push(at(box(SNOWC), cx, y0 + t.H + t.ch + 0.1, cz, t.L * t.cab * 0.9, 0.1 * T.look.snow + 0.04, t.W * 0.84, ry));
  return t;
}

// four wall segments around a turned box (for the player collider)
function rectSegs(x, z, ang, L, W) {
  const ca = Math.cos(ang), sa = Math.sin(ang);
  const c = [[L / 2, W / 2], [-L / 2, W / 2], [-L / 2, -W / 2], [L / 2, -W / 2]].map(([u, v]) => [x + ca * u - sa * v, z + sa * u + ca * v]);
  return c.map((p, i) => [p[0], p[1], c[(i + 1) % 4][0], c[(i + 1) % 4][1]]);
}

// walk a polyline in steps; cb(x, z, dirAngle)
function along(line, stepFn, cb) {
  let next = stepFn();
  let run = 0;
  for (let i = 1; i < line.length; i++) {
    const a = line[i - 1], b = line[i];
    const L = Math.hypot(b[0] - a[0], b[1] - a[1]);
    if (L < 0.01) continue;
    const ang = Math.atan2(b[1] - a[1], b[0] - a[0]);
    while (run + L >= next) {
      const k = (next - run) / L;
      cb(a[0] + (b[0] - a[0]) * k, a[1] + (b[1] - a[1]) * k, ang);
      next += stepFn();
    }
    run += L;
  }
}

export function streetDetails(cellKey, roads, rings, T) {
  const rnd = seedFrom(`details ${cellKey}`);
  const geos = [], colliders = [], doors = [];
  const cars = [];
  const inCell = (x, z, m = 1) => x > m && z > m && x < S - m && z < S - m;
  const inBuilding = (x, z) => rings.some((r) => inside(x, z, r));
  const g = T.look.growth;

  // ---- abandoned cars ----
  for (const r of roads) {
    const rule = CAR_RULES[r.cls];
    if (!rule || !isCarRoad(r.cls)) continue;
    along(r.line, () => rule.every * (0.5 + rnd()), (x, z, ang) => {
      if (rnd() < 0.2) return;
      const side = rnd() < 0.5 ? -1 : 1;
      const nx = -Math.sin(ang), nz = Math.cos(ang); // across the road
      const type = Math.floor(rnd() * CAR_TYPES.length);
      const t = CAR_TYPES[type];
      let off, a = ang;
      if (rule.lot) { off = side * (r.w / 2 + t.L / 2 + 0.3); a = ang + Math.PI / 2 + (rnd() - 0.5) * 0.12; }
      else if (rnd() < rule.lane) { off = side * rnd() * Math.max(0, r.w / 2 - 1.5); a = ang + (rnd() - 0.5) * 0.9; }
      else { off = side * Math.max(0.2, r.w / 2 - t.W / 2 - 0.3); a = ang + (rnd() - 0.5) * 0.08; }
      if (rnd() < 0.5) a += Math.PI; // facing either way
      const cx = x + nx * off, cz = z + nz * off;
      if (!inCell(cx, cz, 3)) return;
      if (cars.some((c) => Math.hypot(c.x - cx, c.z - cz) < 5.2)) return;
      for (const [u, v] of [[t.L / 2, 0], [-t.L / 2, 0], [0, 0]]) {
        if (inBuilding(cx + Math.cos(a) * u - Math.sin(a) * v, cz + Math.sin(a) * u + Math.cos(a) * v)) return;
      }
      const color = CAR_COLORS[Math.floor(rnd() * CAR_COLORS.length)];
      cars.push({ x: cx, z: cz });
      const i = cars.length - 1;
      carGeo(geos, cx, cz, a, type, color, T, rnd);
      colliders.push(...rectSegs(cx, cz, a, t.L, t.W));
      // the door to search it: on the side toward the middle of the road (or either side)
      const sx = -Math.sin(a), sz = Math.cos(a);
      const s = (sx * -nx * side + sz * -nz * side) >= 0 ? 1 : -1;
      doors.push({ x: cx + sx * s * (t.W / 2 + 0.7), z: cz + sz * s * (t.W / 2 + 0.7), nx: sx * s, nz: sz * s, kind: 'car', id: `c:${cellKey}:${i}`, placeId: null, name: null });
    });
  }

  // ---- trash and debris along the curbs ----
  const bag = [new Color(0x2d3a30), new Color(0x22262a), new Color(0x3b3f44)].map((c) => T.roof(c));
  const card = T.roof(new Color(0xa88a5c));
  const paper = T.roof(new Color(0xd9d4c4));
  const leafPile = T.leaf(0.2);
  for (const r of roads) {
    if (!isCarRoad(r.cls) || r.cls === ROAD.parking_aisle) continue;
    along(r.line, () => 30 + rnd() * 40, (x, z, ang) => {
      const side = rnd() < 0.5 ? -1 : 1;
      const nx = -Math.sin(ang), nz = Math.cos(ang);
      const off = side * (r.w / 2 - 0.4);
      const px = x + nx * off, pz = z + nz * off;
      if (!inCell(px, pz) || inBuilding(px, pz) || cars.some((c) => Math.hypot(c.x - px, c.z - pz) < 3)) return;
      const k = rnd();
      if (k < 0.4) { // trash bags
        const n = 1 + Math.floor(rnd() * 3);
        for (let i = 0; i < n; i++) {
          const s = 0.35 + rnd() * 0.15;
          geos.push(at(painted(new IcosahedronGeometry(1, 0), bag[i % 3]), px + (rnd() - 0.5) * 1.2, s * 0.7, pz + (rnd() - 0.5) * 1.2, s, s * 0.8, s, rnd() * 6));
        }
      } else if (k < 0.6) { // a wet cardboard box
        geos.push(at(box(card), px, 0.2, pz, 0.6, 0.4, 0.5, rnd() * 6));
      } else if (k < 0.8) { // paper and plastic on the road
        for (let i = 0; i < 4; i++) geos.push(at(box(paper), px + (rnd() - 0.5) * 2, 0.1, pz + (rnd() - 0.5) * 2, 0.3, 0.01, 0.22, rnd() * 6));
      } else if (T.look.season === 'fall' || T.look.season === 'winter') { // leaves in the gutter
        geos.push(at(painted(new IcosahedronGeometry(1, 0), T.look.season === 'fall' ? leafPile : T.roof(new Color(0x6e5a3e))), px, 0.05, pz, 1.1, 0.12, 0.6, ang));
      }
    });
  }

  // ---- a barricade with a quarantine sign (on some big roads) ----
  const big = roads.filter((r) => r.cls <= ROAD.secondary && r.line.length > 1);
  if (big.length && rnd() < 0.3) {
    const r = big[Math.floor(rnd() * big.length)];
    const a = r.line[0], b = r.line[1];
    const k = 0.3 + rnd() * 0.4;
    const x = a[0] + (b[0] - a[0]) * k, z = a[1] + (b[1] - a[1]) * k;
    const ang = Math.atan2(b[1] - a[1], b[0] - a[0]);
    if (inCell(x, z, 4) && !inBuilding(x, z)) {
      const nx = -Math.sin(ang), nz = Math.cos(ang);
      const white = T.roof(new Color(0xe8e4da)), red = T.roof(new Color(0xb5483c)), leg = new Color(0x6b6f72);
      const n = Math.max(2, Math.round(r.w / 3));
      for (let i = 0; i < n; i++) {
        const v = (i - (n - 1) / 2) * 2.6;
        const bx = x + nx * v, bz = z + nz * v;
        if (i === 1 && rnd() < 0.5) continue; // one pushed aside
        geos.push(at(box(i % 2 ? red : white), bx, 0.95, bz, 0.08, 0.25, 2.2, -ang));
        geos.push(at(box(leg), bx + Math.cos(ang) * 0.3, 0.45, bz + Math.sin(ang) * 0.3, 0.06, 0.9, 1.8, -ang));
        colliders.push([bx - nx * 1.1, bz - nz * 1.1, bx + nx * 1.1, bz + nz * 1.1]);
      }
      // the sign: a white board with a red band, at the side of the road (no words)
      const sx = x + nx * (r.w / 2 + 0.8), sz = z + nz * (r.w / 2 + 0.8);
      geos.push(at(painted(new CylinderGeometry(0.04, 0.04, 1, 5), leg), sx, 0.9, sz, 1, 1.8, 1));
      geos.push(at(box(white), sx, 1.9, sz, 0.05, 0.7, 0.9, -ang));
      geos.push(at(box(red), sx, 2.15, sz, 0.06, 0.16, 0.9, -ang));
    }
  }

  // ---- grass through the cracks (more each month; hidden under deep snow) ----
  if (T.look.snow < 0.5) {
    const tuftCol = T.tuft();
    const sapling = T.leaf(0.4);
    for (const r of roads) {
      if (r.cls === ROAD.rail || r.cls === ROAD.stream) continue;
      const every = 12 / Math.max(0.05, g) * (isCarRoad(r.cls) ? 1 : 0.7); // 150 m apart at the start, 12 m after 2 years
      along(r.line, () => every * (0.4 + rnd()), (x, z, ang) => {
        const nx = -Math.sin(ang), nz = Math.cos(ang);
        const off = (rnd() < 0.7 ? (rnd() < 0.5 ? -1 : 1) * (r.w / 2 - 0.15) : (rnd() - 0.5) * r.w * 0.8);
        const px = x + nx * off, pz = z + nz * off;
        if (!inCell(px, pz)) return;
        const n = 1 + Math.floor(rnd() * (1 + g * 3)); // a clump
        for (let i = 0; i < n; i++) {
          const h = 0.25 + rnd() * (0.3 + g * 0.6);
          geos.push(at(painted(new ConeGeometry(0.22, 1, 5), tuftCol), px + (rnd() - 0.5) * 0.8, h / 2, pz + (rnd() - 0.5) * 0.8, 1 + rnd(), h, 1 + rnd(), rnd() * 6));
        }
        if (g > 0.4 && rnd() < (g - 0.4) * 0.25 && !T.bare) { // a young tree in the road
          const th = 1.5 + rnd() * 2.5 * g;
          geos.push(at(painted(new CylinderGeometry(0.04, 0.07, 1, 4), new Color(0x5b4636)), px, th / 2, pz, 1, th, 1));
          geos.push(at(painted(new IcosahedronGeometry(1, 0), sapling), px, th, pz, th * 0.3, th * 0.3, th * 0.3, rnd() * 6));
        }
      });
    }
  }
  return { geos, colliders, doors, cars: cars.length };
}
