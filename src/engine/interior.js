// Inside a building: a simple floor plan made from the place type.
// No browser code here. The 3D view (src/ui/inside3d.js) draws this plan.
// Units are meters. x goes across, z goes into the building (negative).
// The front door is at x = 0, z = 0. The player starts just inside it.
import { hashString, mulberry32 } from '../rng.js';
import { CATEGORIES, HOUSE_ROOMS } from '../data/places.js';

const T = 0.2; // wall thickness

// Shelf length (m) for stores, by category.
const HALL = {
  supermarket: { len: 18, front: 6, fixture: 'shelf' },
  hardware: { len: 18, front: 5, fixture: 'rack' },
  pharmacy: { len: 9, front: 5, fixture: 'shelf' },
  outdoor: { len: 10, front: 5, fixture: 'clothes' },
  convenience: { len: 6, front: 4, fixture: 'shelf' },
  gas: { len: 5, front: 4, fixture: 'shelf' },
};

// What each room has in it (rooms plan).
const HOUSE_FURNITURE = {
  kitchen: ['counter', 'fridge', 'table'],
  'living room': ['sofa', 'table', 'cabinet'],
  bedroom: ['bed', 'dresser'],
  bathroom: ['tub', 'cabinet'],
  'second bedroom': ['bed', 'dresser'],
  garage: ['rack', 'bench'],
};

export function isHall(cat) {
  return !!HALL[cat];
}

// key: place id or house id. zones: number of search zones. opts.body: house has a body.
export function buildInterior(cat, key, zones, opts = {}) {
  const r = mulberry32(hashString(`interior:${key}`));
  const plan = HALL[cat] ? hallPlan(cat, zones, r) : roomsPlan(cat, zones, r, opts);
  plan.cat = cat;
  plan.dark = !!CATEGORIES[cat]?.dark;
  addDebris(plan, r);
  return plan;
}

function wallBox(x1, z1, x2, z2) {
  return { x: (x1 + x2) / 2, z: (z1 + z2) / 2, w: Math.max(T, Math.abs(x2 - x1)), d: Math.max(T, Math.abs(z2 - z1)) };
}

// Outer walls with a 2 m door gap in the front wall.
function outerWalls(W, D) {
  const h = W / 2;
  return [
    wallBox(-h, 0, -1, 0), wallBox(1, 0, h, 0), // front, with door gap
    wallBox(-h, -D, h, -D), // back
    wallBox(-h, 0, -h, -D), wallBox(h, 0, h, -D), // sides
  ];
}

// ---------- stores: one big hall with rows of shelves ----------
function hallPlan(cat, zones, r) {
  const cfg = HALL[cat];
  const counter = !!CATEGORIES[cat].lockedZone;
  const aisles = counter ? zones - 1 : zones;
  const AISLE = 2.4;
  const SHELF = 1.0;
  const W = Math.max(8, aisles * AISLE + (aisles + 1) * SHELF + 6);
  const back = counter ? 5 : 3;
  const D = cfg.front + cfg.len + back;
  const plan = { kind: 'hall', size: { w: W, d: D, h: cat === 'convenience' || cat === 'gas' ? 3 : 5 }, walls: outerWalls(W, D), fixtures: [], spots: [], bodies: [], debris: [] };
  const rowZ = -(cfg.front + cfg.len / 2);
  // Shelf rows (aisles + 1), centered.
  const total = aisles * AISLE + (aisles + 1) * SHELF;
  // Shift the rows so that one aisle is in line with the front door.
  const mid = Math.floor((aisles - 1) / 2);
  let x = -(mid * (SHELF + AISLE) + SHELF + AISLE / 2);
  for (let i = 0; i <= aisles; i++) {
    const cx = x + SHELF / 2;
    const tipped = cat !== 'gas' && cat !== 'convenience' && r() < 0.08;
    plan.fixtures.push({ type: cfg.fixture, x: cx, z: rowZ, w: SHELF, d: cfg.len, h: cfg.fixture === 'clothes' ? 1.5 : 2.0, leftZone: i - 1 >= 0 ? i - 1 : null, rightZone: i < aisles ? i : null, tipped, solid: true });
    // Endcap display at the front end of each standing shelf row (the first thing you see).
    if (cfg.fixture === 'shelf' && !tipped) plan.fixtures.push({ type: 'endcap', x: cx, z: rowZ + cfg.len / 2 + 0.28, w: SHELF, d: 0.55, h: 1.7, solid: true });
    if (i < aisles) {
      const ax = cx + SHELF / 2 + AISLE / 2;
      plan.spots.push({ zone: i, x: ax, z: rowZ, label: `${CATEGORIES[cat].zoneName} ${i + 1}`, area: { x1: ax - AISLE / 2, x2: ax + AISLE / 2, z1: rowZ - cfg.len / 2 - 0.5, z2: rowZ + cfg.len / 2 + 0.5 } });
    }
    x += SHELF + AISLE;
  }
  // Checkout counters near the door, one per side.
  const nReg = Math.max(1, Math.min(4, Math.floor(W / 6)));
  for (let i = 0; i < nReg; i++) {
    const side = i % 2 === 0 ? -1 : 1;
    const k = Math.floor(i / 2);
    plan.fixtures.push({ type: 'checkout', x: side * (2.6 + k * 2.6), z: -cfg.front / 2, w: 0.9, d: 2.2, h: 1.0, solid: true });
  }
  if (cat === 'supermarket') {
    // Cold cases along the back wall (fresh food, now rotten).
    plan.fixtures.push({ type: 'coolers', x: 0, z: -D + 0.7, w: W - 2, d: 1.0, h: 2.1, solid: true });
    for (let i = 0; i < 3; i++) plan.debris.push({ kind: 'cart', x: (r() - 0.5) * (W - 3), z: -1.5 - r() * (cfg.front - 2.5), rot: r() * 6.28 });
  }
  if (counter) {
    const lz = CATEGORIES[cat].lockedZone;
    const cz = -D + 2.2;
    plan.fixtures.push({ type: 'rx_counter', x: 0, z: cz, w: W - 4, d: 0.9, h: 1.1, solid: true });
    plan.fixtures.push({ type: 'gate', x: 0, z: cz + 0.6, w: W - 4, d: 0.1, h: 2.6, zone: zones - 1, solid: false });
    plan.spots.push({ zone: zones - 1, x: 0, z: cz + 1.4, label: lz.name, counter: true });
  }
  plan.exit = { x: 0, z: 0.6 };
  plan.start = { x: 0, z: -1.2, yaw: 0 };
  plan.windows = 'front';
  return plan;
}

// ---------- clinics, hospitals, fire stations, houses: rooms off one hallway ----------
function roomsPlan(cat, zones, r, opts) {
  const house = cat === 'house';
  const RW = house ? 4.2 : 4.6; // room width (across)
  const RD = house ? 4.2 : 4.6; // room depth (along the hall)
  const HALLW = house ? 1.6 : 2.4;
  const rows = Math.ceil(zones / 2);
  const ENTRY = house ? 2.2 : 3.4;
  const W = HALLW + 2 * RW;
  const D = ENTRY + rows * RD;
  const plan = { kind: 'rooms', size: { w: W, d: D, h: house ? 2.6 : 3.0 }, walls: outerWalls(W, D), fixtures: [], spots: [], bodies: [], debris: [] };
  const hx = HALLW / 2;
  const DOOR = 1.1;
  const names = house ? HOUSE_ROOMS : null;
  for (let i = 0; i < zones; i++) {
    const side = i % 2 === 0 ? -1 : 1;
    const row = Math.floor(i / 2);
    const z1 = -(ENTRY + row * RD);
    const z2 = z1 - RD;
    const zc = (z1 + z2) / 2;
    const xin = side * hx; // wall to hallway
    const xout = side * (hx + RW);
    // Wall to the hallway with a door gap in the middle.
    plan.walls.push(wallBox(xin, z1, xin, zc + DOOR / 2), wallBox(xin, zc - DOOR / 2, xin, z2));
    // Wall to the room in front (only at the first row) and the wall behind.
    if (row === 0) plan.walls.push(wallBox(xin, z1, xout, z1));
    plan.walls.push(wallBox(xin, z2, xout, z2));
    const rcx = (xin + xout) / 2;
    const name = names ? names[i] : `${CATEGORIES[cat].zoneName} ${i + 1}`;
    plan.spots.push({ zone: i, x: xin + side * 1.0, z: zc, label: name, area: { x1: Math.min(xin, xout), x2: Math.max(xin, xout), z1: z2, z2: z1 } });
    furnishRoom(plan, cat, name, i, { cx: rcx, cz: zc, side, RW, RD, xout }, r, opts);
  }
  // Odd number of rooms: close the last row on the empty side.
  if (zones % 2 === 1) {
    const z1 = -(ENTRY + (rows - 1) * RD);
    plan.walls.push(wallBox(hx, z1, hx, z1 - RD));
    plan.fixtures.push({ type: 'cabinet', x: hx + 0.4, z: z1 - RD / 2, w: 0.6, d: 1.2, h: 1.8, solid: true });
  }
  // Entry area things
  if (cat === 'clinic' || cat === 'hospital') plan.fixtures.push({ type: 'desk', x: -hx - RW + 1.6, z: -ENTRY / 2, w: 2.4, d: 0.8, h: 1.1, solid: true });
  if (cat === 'fire') plan.fixtures.push({ type: 'bench', x: hx + 1.5, z: -ENTRY / 2, w: 2.4, d: 0.5, h: 0.5, solid: true });
  plan.exit = { x: 0, z: 0.6 };
  plan.start = { x: 0, z: -1.0, yaw: 0 };
  plan.windows = 'rooms';
  return plan;
}

function furnishRoom(plan, cat, name, zone, room, r, opts) {
  const { cx, cz, side, RW, RD, xout } = room;
  const wallX = xout - side * 0.55; // near the outer wall
  const put = (type, x, z, w, d, h, extra = {}) => plan.fixtures.push({ type, x, z, w, d, h, zone, solid: true, ...extra });
  let items;
  if (cat === 'house') items = HOUSE_FURNITURE[name] || ['cabinet'];
  else if (cat === 'hospital') items = ['bed', 'bed', 'cart'];
  else if (cat === 'clinic') items = ['bed', 'cabinet'];
  else items = zone === 0 ? ['locker', 'locker', 'bench'] : ['bed', 'locker'];
  let slot = 0;
  for (const it of items) {
    const zz = cz + (slot === 0 ? RD / 4 : slot === 1 ? -RD / 4 : 0);
    slot += 1;
    if (it === 'bed') {
      put('bed', cx + side * 0.6, zz, 2.0, 1.0, 0.6);
      const bodyHere = (cat === 'hospital' || cat === 'clinic') ? r() < 0.45 : (cat === 'house' && opts.body && name === 'bedroom' && slot === 1);
      if (bodyHere) plan.bodies.push({ x: cx + side * 0.6, z: zz, y: 0.6, rot: 0 });
    } else if (it === 'fridge') put('fridge', wallX, cz - RD / 3, 0.8, 0.8, 1.8);
    else if (it === 'counter') put('counter', wallX, cz + RD / 6, 0.7, RD * 0.6, 0.95);
    else if (it === 'sofa') put('sofa', wallX, zz, 0.9, 2.0, 0.8);
    else if (it === 'tub') put('tub', wallX, zz, 0.8, 1.7, 0.6);
    else if (it === 'rack') put('rack', wallX, zz, 0.6, 2.2, 1.9);
    else if (it === 'locker') put('locker', wallX, zz, 0.5, 1.6, 1.9);
    else if (it === 'dresser') put('dresser', wallX, zz, 0.5, 1.2, 1.0);
    else if (it === 'cart') put('cart', cx - side * 0.6, zz, 0.6, 0.9, 1.0);
    else if (it === 'table') put('table', cx, zz, 1.2, 1.2, 0.75);
    else if (it === 'bench') put('bench', wallX, zz, 0.6, 2.0, 0.9);
    else put('cabinet', wallX, zz, 0.6, 1.0, 1.4);
  }
}

// Things on the floor: boxes, cans, paper. Kept out of the door and spots.
function addDebris(plan, r) {
  const { w, d } = plan.size;
  const n = Math.round((w * d) / (plan.kind === 'hall' ? 10 : 7));
  for (let i = 0; i < n; i++) {
    const x = (r() - 0.5) * (w - 1);
    const z = -0.8 - r() * (d - 1.6);
    if (Math.abs(x) < 1.2 && z > -2.5) continue;
    const kind = r() < 0.5 ? 'box' : r() < 0.6 ? 'can' : 'paper';
    plan.debris.push({ kind, x, z, s: 0.15 + r() * 0.35, rot: r() * 6.28 });
  }
}

// Push a circle (player) out of all solid boxes. Returns the new position.
export function collide(plan, x, z, radius = 0.3, open = {}) {
  const boxes = solidBoxes(plan, open);
  for (let pass = 0; pass < 2; pass++) {
    for (const b of boxes) {
      const hw = b.w / 2 + radius;
      const hd = b.d / 2 + radius;
      const dx = x - b.x;
      const dz = z - b.z;
      if (Math.abs(dx) < hw && Math.abs(dz) < hd) {
        const px = hw - Math.abs(dx);
        const pz = hd - Math.abs(dz);
        if (px < pz) x += Math.sign(dx || 1) * px;
        else z += Math.sign(dz || 1) * pz;
      }
    }
  }
  return { x, z };
}

export function solidBoxes(plan, open = {}) {
  const out = plan.walls.slice();
  for (const f of plan.fixtures) {
    if (f.solid) out.push(f);
    if (f.type === 'gate' && !open.counter) out.push(f);
  }
  return out;
}

// The spot the player can use now. A spot with an area (an aisle, a room) is usable
// from anywhere inside that area. Other spots (counter, door) need the player near and facing them.
export function nearestSpot(plan, x, z, yaw, reach = 2.2) {
  for (const s of plan.spots) {
    const a = s.area;
    if (a && x >= a.x1 && x <= a.x2 && z >= a.z1 && z <= a.z2) return { ...s, type: 'search', dist: 0 };
  }
  let best = null;
  const fx = -Math.sin(yaw);
  const fz = -Math.cos(yaw);
  const cands = plan.spots.filter((s) => !s.area).map((s) => ({ ...s, type: 'search' }));
  cands.push({ type: 'exit', x: plan.exit.x, z: plan.exit.z, label: 'Leave the building' });
  for (const s of cands) {
    const dx = s.x - x;
    const dz = s.z - z;
    const dist = Math.hypot(dx, dz);
    if (dist > reach) continue;
    const facing = dist < 0.6 ? 1 : (dx * fx + dz * fz) / dist;
    if (facing < 0.35) continue;
    const score = dist - facing;
    if (!best || score < best.score) best = { ...s, dist, score };
  }
  return best;
}

export { HOUSE_ROOMS };
