// Fast room queries with three-mesh-bvh (MIT) (Adam, 2026-11-27: tools list item 2).
// The solid boxes of a room (walls, shelves, counters, a closed gate) go into one BVH.
// - blockedBVH: is a box between the eye and an item? (item aim and pick-up)
// - boxesNear: only the boxes near the player, for wall collision each frame.
// Same answers as the plain loops (src/engine/interior.js collide, the slab test in
// inside3d.js): test/roombvh.test.js checks this on real rooms.
import { BufferGeometry, Float32BufferAttribute, Ray, Vector3, Box3, DoubleSide } from 'three';
import { MeshBVH } from 'three-mesh-bvh';

// 8 corners and 12 triangles per box. inset: the slab test uses boxes 2 cm smaller.
const FACES = [0, 1, 2, 2, 1, 3, 4, 6, 5, 5, 6, 7, 0, 4, 1, 1, 4, 5, 2, 3, 6, 6, 3, 7, 0, 2, 4, 4, 2, 6, 1, 5, 3, 3, 5, 7];
export function boxLimits(b, inset = 0.02) {
  return {
    lo: [b.x - b.w / 2 + inset, 0, b.z - b.d / 2 + inset],
    hi: [b.x + b.w / 2 - inset, (b.h || 9) - inset, b.z + b.d / 2 - inset],
  };
}

export function roomBVH(boxes) {
  const pos = new Float32Array(boxes.length * 8 * 3);
  const idx = new Uint32Array(boxes.length * 36);
  boxes.forEach((b, n) => {
    const { lo, hi } = boxLimits(b);
    for (let c = 0; c < 8; c++) {
      pos.set([c & 1 ? hi[0] : lo[0], c & 2 ? hi[1] : lo[1], c & 4 ? hi[2] : lo[2]], (n * 8 + c) * 3);
    }
    for (let k = 0; k < 36; k++) idx[n * 36 + k] = n * 8 + FACES[k];
  });
  const g = new BufferGeometry();
  g.setAttribute('position', new Float32BufferAttribute(pos, 3));
  g.setIndex([...idx]);
  return { boxes, bvh: boxes.length ? new MeshBVH(g) : null, g };
}

const ray = new Ray();
const dir = new Vector3();
// Is a box between `from` and `to` (both {x,y,z}), on the part of the line up to `end`
// (0..1 of the way)? A start point inside a box counts as blocked, as in the slab test.
export function blockedBVH(R, from, to, end = 1) {
  if (!R.bvh) return false;
  dir.set(to.x - from.x, to.y - from.y, to.z - from.z);
  const len = dir.length();
  if (len < 1e-9) return insideAny(R, from);
  ray.origin.set(from.x, from.y, from.z);
  ray.direction.copy(dir).divideScalar(len);
  const hit = R.bvh.raycastFirst(ray, DoubleSide, 0, len * end);
  return !!hit || insideAny(R, from);
}
function insideAny(R, p) {
  for (const b of boxesNear(R, p.x, p.z, 0)) {
    const { lo, hi } = boxLimits(b);
    if (p.x >= lo[0] && p.x <= hi[0] && p.y >= lo[1] && p.y <= hi[1] && p.z >= lo[2] && p.z <= hi[2]) return true;
  }
  return false;
}

// The boxes that come within `r` of (x, z), in their first order (collide() needs it).
const q = new Box3();
export function boxesNear(R, x, z, r) {
  if (!R.bvh) return [];
  q.min.set(x - r - 0.05, -1, z - r - 0.05);
  q.max.set(x + r + 0.05, 99, z + r + 0.05);
  const found = new Set();
  const index = R.g.index.array;
  R.bvh.shapecast({
    intersectsBounds: (box) => box.intersectsBox(q),
    intersectsTriangle: (tri, i) => { if (tri.intersectsBox(q)) found.add(Math.floor(index[i * 3] / 8)); return false; },
  });
  return [...found].sort((a, b) => a - b).map((n) => R.boxes[n]);
}

// The plain loop over every box (the slab test the 3D view used before). Tests compare it
// with blockedBVH.
export function blockedSlab(boxes, from, to, end = 1) {
  const p0 = [from.x, from.y, from.z];
  const v = [to.x - from.x, to.y - from.y, to.z - from.z];
  for (const b of boxes) {
    const { lo, hi } = boxLimits(b);
    let t0 = 0;
    let t1 = end;
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
