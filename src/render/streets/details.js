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
const CHROME = new Color(0xb8bcc0), HEAD = new Color(0xeee8d0), TAIL = new Color(0x9a2a24), PLATE = new Color(0xe8e4d6), TRIM = new Color(0x2c2e30);
const cyl8 = (c) => painted(new CylinderGeometry(1, 1, 1, 8), c);

// Fine car parts (Medium/High 3D quality): hubcaps, bumpers, lights, mirrors, grille, plate,
// side skirts, door seams, wipers; a bed with sides on pickups. Placed along the car (u) and across (v).
function carFine(list, P, ry, t, y0, body, flat, type) {
  const put = (g, u, v, y, sx, sy, sz, extra = 0) => { const [px, pz] = P(u, v); list.push(at(g, px, y, pz, sx, sy, sz, ry + extra)); };
  for (const [u, v] of [[0.32, 0.5], [0.32, -0.5], [-0.32, 0.5], [-0.32, -0.5]]) { // hubcaps facing out
    const [wx, wz] = P(t.L * u, t.W * v);
    list.push(cyl8(CHROME).applyMatrix4(new Matrix4().makeRotationX(Math.PI / 2)).applyMatrix4(new Matrix4().makeTranslation(wx, 0.33 - flat / 2, wz).multiply(new Matrix4().makeRotationY(ry)).multiply(new Matrix4().makeScale(0.17, 0.17, 0.02))));
  }
  for (const s of [1, -1]) { // bumpers front and back, lights at each corner, side skirts
    put(box(TRIM), s * (t.L / 2 + 0.04), 0, y0 + 0.12, 0.1, 0.2, t.W * 0.96);
    for (const v of [0.36, -0.36]) put(box(s > 0 ? HEAD : TAIL), s * (t.L / 2 + 0.005), t.W * v, y0 + t.H * 0.68, 0.04, 0.12, 0.3);
    put(box(TRIM), 0, s * (t.W / 2 + 0.01), y0 + 0.06, t.L * 0.62, 0.1, 0.03);
    put(box(TRIM), t.L * (t.back + t.cab / 2) + 0.05, s * (t.W * 0.46), y0 + t.H + 0.05, 0.1, 0.1, 0.18); // mirror
    put(box(TRIM), t.L * t.back, s * (t.W / 2 + 0.003), y0 + t.H * 0.55, 0.02, t.H * 0.75, 0.01); // door seam
  }
  put(box(TRIM), t.L / 2 + 0.01, 0, y0 + t.H * 0.5, 0.03, t.H * 0.3, t.W * 0.42); // grille
  put(box(PLATE), -(t.L / 2 + 0.06), 0, y0 + 0.28, 0.02, 0.15, 0.32); // rear plate (blank)
  put(box(TRIM), t.L * (t.back + t.cab / 2) + 0.02, 0, y0 + t.H + 0.04, 0.3, 0.02, t.W * 0.6, 0.0); // wipers
  if (type === 3) for (const s of [1, -1]) put(box(body), -t.L * 0.3, s * (t.W / 2 - 0.04), y0 + t.H + 0.2, t.L * 0.38, 0.4, 0.06); // pickup bed sides
}

function carGeo(list, x, z, ang, type, color, T, rnd, fine = false) {
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
  if (fine) carFine(list, P, ry, t, y0, body, flat, type);
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

// fine: add the small parts (Medium/High 3D quality). They use no random numbers, so the
// places of cars, trash and barricades (and the car ids) are the same at every quality.
export function streetDetails(cellKey, roads, rings, T, fine = false) {
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
      carGeo(geos, cx, cz, a, type, color, T, rnd, fine);
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
          const bx2 = px + (rnd() - 0.5) * 1.2, bz2 = pz + (rnd() - 0.5) * 1.2;
          geos.push(at(painted(new IcosahedronGeometry(1, 0), bag[i % 3]), bx2, s * 0.7, bz2, s, s * 0.8, s, rnd() * 6));
          if (fine) { // tied neck and two ears of the tie
            geos.push(at(painted(new ConeGeometry(0.08, 0.18, 5), bag[i % 3]), bx2, s * 1.4 + 0.05, bz2));
            for (const e of [-1, 1]) geos.push(at(box(bag[i % 3]), bx2 + e * 0.06, s * 1.4 + 0.15, bz2, 0.1, 0.03, 0.05, e * 0.6));
          }
        }
      } else if (k < 0.6) { // a wet cardboard box
        const cr = rnd() * 6;
        geos.push(at(box(card), px, 0.2, pz, 0.6, 0.4, 0.5, cr));
        if (fine) { // open flaps and a tape strip
          const ca = Math.cos(cr), sa = Math.sin(cr);
          for (const s of [1, -1]) geos.push(at(box(card), px - sa * s * 0.3, 0.45, pz - ca * s * 0.3, 0.58, 0.02, 0.2, cr).applyMatrix4(new Matrix4()));
          geos.push(at(box(paper), px, 0.405, pz, 0.08, 0.01, 0.5, cr));
        }
      } else if (k < 0.8) { // paper and plastic on the road
        for (let i = 0; i < 4; i++) geos.push(at(box(paper), px + (rnd() - 0.5) * 2, 0.1, pz + (rnd() - 0.5) * 2, 0.3, 0.01, 0.22, rnd() * 6));
      } else if (T.look.season === 'fall' || T.look.season === 'winter') { // leaves in the gutter
        const lc = T.look.season === 'fall' ? leafPile : T.roof(new Color(0x6e5a3e));
        geos.push(at(painted(new IcosahedronGeometry(1, 0), lc), px, 0.05, pz, 1.1, 0.12, 0.6, ang));
        if (fine) for (const d of [-1, 1]) geos.push(at(painted(new IcosahedronGeometry(1, 0), lc), px + Math.cos(ang) * d * 1.1, 0.04, pz + Math.sin(ang) * d * 1.1, 0.5, 0.08, 0.35, ang + d));
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
        if (fine) { // a lower board, two feet and an amber lamp on top
          geos.push(at(box(i % 2 ? white : red), bx, 0.55, bz, 0.08, 0.2, 2.0, -ang));
          for (const e of [-0.85, 0.85]) geos.push(at(box(leg), bx + nx * e, 0.03, bz + nz * e, 0.6, 0.06, 0.15, -ang));
          geos.push(at(painted(new CylinderGeometry(0.07, 0.07, 0.12, 8), T.roof(new Color(0xd8a030))), bx + nx * 0.9, 1.14, bz + nz * 0.9));
        }
        colliders.push([bx - nx * 1.1, bz - nz * 1.1, bx + nx * 1.1, bz + nz * 1.1]);
      }
      // the sign: a white board with a red band, at the side of the road (no words)
      const sx = x + nx * (r.w / 2 + 0.8), sz = z + nz * (r.w / 2 + 0.8);
      geos.push(at(painted(new CylinderGeometry(0.04, 0.04, 1, 5), leg), sx, 0.9, sz, 1, 1.8, 1));
      geos.push(at(box(white), sx, 1.9, sz, 0.05, 0.7, 0.9, -ang));
      geos.push(at(box(red), sx, 2.15, sz, 0.06, 0.16, 0.9, -ang));
      if (fine) { // a second post, a frame round the board and a sandbag at the foot
        const tx = Math.cos(ang), tz = Math.sin(ang);
        geos.push(at(painted(new CylinderGeometry(0.04, 0.04, 1, 5), leg), sx + nx * 0.4, 0.9, sz + nz * 0.4, 1, 1.8, 1));
        geos.push(at(box(leg), sx - tx * 0.03, 2.26, sz - tz * 0.03, 0.04, 0.04, 0.94, -ang));
        geos.push(at(box(leg), sx - tx * 0.03, 1.54, sz - tz * 0.03, 0.04, 0.04, 0.94, -ang));
        geos.push(at(painted(new IcosahedronGeometry(1, 0), T.roof(new Color(0x8a7a5a))), sx + nx * 0.2, 0.1, sz + nz * 0.2, 0.35, 0.12, 0.22, -ang));
      }
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
