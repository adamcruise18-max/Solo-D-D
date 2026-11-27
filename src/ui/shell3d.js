// Fine detail on the building shell (walls, door, ceiling) for the first-person view.
// Baseboards and crown moulding, corner and door trim, the front door frame, wall outlets and
// switches, floor vents, smoke detectors, sprinkler heads and ceiling vents, store wall columns,
// exposed ducts in warehouse-type halls. Medium and High 3D quality only (Low keeps plain walls).
// Everything goes into the `statics` group, which inside3d merges by material (a few draw calls).
import { Mesh, BoxGeometry, CylinderGeometry, MeshStandardMaterial } from 'three';
import { mulberry32 } from '../rng.js';

const MATS = new Map();
function mat(key, color, rough = 0.7, metal = 0) {
  let m = MATS.get(key);
  if (!m) { m = new MeshStandardMaterial({ color, roughness: rough, metalness: metal }); MATS.set(key, m); }
  return m;
}
const GEO = new Map();
function box(w, h, d) {
  const k = `${w.toFixed(3)},${h.toFixed(3)},${d.toFixed(3)}`;
  let g = GEO.get(k);
  if (!g) { g = new BoxGeometry(w, h, d); GEO.set(k, g); }
  return g;
}
function cyl(r, h, seg = 10) {
  const k = `c${r},${h},${seg}`;
  let g = GEO.get(k);
  if (!g) { g = new CylinderGeometry(r, r, h, seg); GEO.set(k, g); }
  return g;
}
function put(group, geo, m, x, y, z, rx = 0, ry = 0, rz = 0) {
  const o = new Mesh(geo, m);
  o.position.set(x, y, z);
  o.rotation.set(rx, ry, rz);
  o.receiveShadow = true;
  group.add(o);
  return o;
}

// Counts parts added (for tests and the detail report).
export function addShellDetail(group, plan, { W, D, H, windows = [], seed = 1 } = {}) {
  const before = group.children.length;
  const r = mulberry32(seed >>> 0);
  const house = plan.cat === 'house' || plan.kind !== 'hall';
  const trim = mat('trim' + (house ? 'h' : 's'), house ? 0xeee6d6 : 0x6a6e72, 0.6);
  const metal = mat('metal', 0xb8bcc0, 0.4, 0.4);
  const white = mat('white', 0xf2f0ea, 0.5);
  const dark = mat('dark', 0x2a2b2d, 0.6);
  const T = 0.2; // wall thickness used by the floor plans

  // ---- trim along every wall face: baseboard, crown (homes), end trim at wall ends ----
  for (const b of plan.walls) {
    const alongX = b.w >= b.d;
    const len = alongX ? b.w : b.d;
    if (len < 0.4) continue;
    for (const s of [-1, 1]) {
      const off = (alongX ? b.d : b.w) / 2 + 0.008;
      const fx = alongX ? b.x : b.x + s * off, fz = alongX ? b.z + s * off : b.z;
      // skip the outside face of the outer walls (nobody sees it)
      if (alongX ? (fz > 0 || fz < -D) : Math.abs(fx) > W / 2) continue;
      const gw = alongX ? len : 0.016, gd = alongX ? 0.016 : len;
      put(group, box(gw, house ? 0.1 : 0.12, gd), house ? trim : dark, fx, house ? 0.05 : 0.06, fz);
      if (house) {
        put(group, box(gw, 0.07, gd), trim, fx, H - 0.035, fz);
        put(group, box(alongX ? len : 0.03, 0.02, alongX ? 0.03 : len), trim, alongX ? fx : fx - s * 0.01, H - 0.08, alongX ? fz - s * 0.01 : fz);
      }
      // trim at both wall ends (door openings and corners), door height in homes
      for (const e of [-1, 1]) {
        const ex = alongX ? b.x + e * (len / 2 - 0.03) : fx, ez = alongX ? fz : b.z + e * (len / 2 - 0.03);
        put(group, box(alongX ? 0.06 : 0.02, house ? 2.1 : 1.2, alongX ? 0.02 : 0.06), house ? trim : metal, ex, house ? 1.05 : 0.6, ez);
      }
    }
  }

  // ---- front door frame, threshold and a kick plate on the lintel ----
  for (const s of [-1, 1]) put(group, box(0.1, 2.2, T + 0.04), house ? trim : metal, s * 1.0, 1.1, 0);
  put(group, box(2.1, 0.1, T + 0.04), house ? trim : metal, 0, 2.2, 0);
  put(group, box(2.0, 0.02, T + 0.1), metal, 0, 0.01, 0);
  put(group, box(0.03, 0.03, 0.03), metal, 0.95, 1.0, -T / 2 - 0.02); // strike plate
  if (!house) for (const s of [-1, 1]) put(group, cyl(0.02, 1.0, 8), metal, s * 0.85, 1.05, -T / 2 - 0.06, 0, 0, Math.PI / 2); // push bars

  // ---- outlets, switches and floor vents along the side walls ----
  const nearWindow = (x, z) => windows.some((w) => Math.abs(w.x - x) < 0.4 && Math.abs(w.z - z) < 1.0);
  for (const side of [-1, 1]) {
    const x = side * (W / 2 - T / 2 - 0.006);
    for (let z = -1.5; z > -D + 0.8; z -= house ? 2.6 : 5) {
      if (nearWindow(x, z)) continue;
      put(group, box(0.012, 0.11, 0.07), white, x, 0.32, z);
      for (const dy of [-0.02, 0.02]) put(group, box(0.014, 0.018, 0.012), dark, x - side * 0.002, 0.32 + dy, z);
      if (house && r() < 0.5) put(group, box(0.012, 0.11, 0.07), white, x, 1.2, z + 0.9);
      if (house && r() < 0.6) put(group, box(0.25, 0.012, 0.12), metal, x - side * 0.2, 0.006, z - 0.6);
    }
    // a light switch by the front door
    put(group, box(0.07, 0.11, 0.012), white, side * 1.25, 1.2, -T / 2 - 0.006);
  }

  // ---- ceiling: smoke detectors (homes), sprinklers and return vents (stores) ----
  if (house) {
    for (const sp of plan.spots || []) {
      const a = sp.area;
      if (!a) continue;
      const cx = (a.x1 + a.x2) / 2, cz = (a.z1 + a.z2) / 2;
      put(group, cyl(0.065, 0.03, 14), white, cx + 0.6, H - 0.015, cz + 0.4);
      put(group, cyl(0.02, 0.012, 8), dark, cx + 0.6, H - 0.035, cz + 0.4);
      put(group, box(0.3, 0.012, 0.2), white, cx - 0.8, H - 0.006, cz - 0.5);
    }
  } else {
    const open = plan.cat === 'hardware' || plan.cat === 'outdoor';
    for (let z = -2; z > -D + 1; z -= 3.6) for (let x = -W / 2 + 1.8; x < W / 2 - 1; x += 3.6) {
      put(group, cyl(0.012, 0.06, 6), metal, x, H - 0.03, z);
      put(group, cyl(0.03, 0.008, 8), metal, x, H - 0.065, z);
    }
    for (let z = -4; z > -D + 2; z -= 8) for (const x of [-W / 4, W / 4]) {
      put(group, box(0.6, 0.02, 0.6), white, x, H - 0.012, z);
      for (let k = -2; k <= 2; k++) put(group, box(0.5, 0.012, 0.02), dark, x, H - 0.025, z + k * 0.1);
    }
    if (open) {
      // exposed round ducts with hangers along the hall
      for (const x of [-W / 4, W / 4]) {
        put(group, cyl(0.25, D - 2, 14), metal, x, H - 0.45, -D / 2, Math.PI / 2, 0, 0);
        for (let z = -1.5; z > -D + 1; z -= 3) {
          put(group, cyl(0.26, 0.05, 14), metal, x, H - 0.45, z, Math.PI / 2, 0, 0);
          put(group, box(0.02, 0.2, 0.02), dark, x, H - 0.1, z);
        }
      }
    }
    // flat wall columns (pilasters) along the side walls, with a scuffed lower guard
    for (const side of [-1, 1]) for (let z = -3; z > -D + 1; z -= 6) {
      put(group, box(0.06, H, 0.4), trim, side * (W / 2 - T / 2 - 0.03), H / 2, z);
      put(group, box(0.08, 0.9, 0.44), dark, side * (W / 2 - T / 2 - 0.04), 0.45, z);
    }
  }
  return group.children.length - before;
}
