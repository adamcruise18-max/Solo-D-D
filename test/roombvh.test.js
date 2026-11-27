import test from 'node:test';
import assert from 'node:assert/strict';
import { buildInterior, buildHome, solidBoxes, collide, collideBoxes } from '../src/engine/interior.js';
import { roomBVH, blockedBVH, blockedSlab, boxesNear } from '../src/ui/roombvh.js';

// three-mesh-bvh must give the same answers as the plain loops it replaces.
const rooms = () => [
  ...['supermarket', 'pharmacy', 'hardware', 'gas', 'clinic', 'fire'].map((c) => [c, buildInterior(c, `t-${c}`, 5)]),
  ['house', buildInterior('house', 'h-1', 6, { body: false })],
  ['home', buildHome(() => true)],
];
function rnd(seed) { let s = seed; return () => { s = (s * 1103515245 + 12345) & 0x7fffffff; return s / 0x7fffffff; }; }

test('roombvh: aim test (wall or shelf between eye and item) is the same as the slab test', () => {
  for (const [name, plan] of rooms()) {
    for (const open of [false, true]) {
      const boxes = solidBoxes(plan, { counter: open });
      const R = roomBVH(boxes);
      const r = rnd(name.length * 31 + (open ? 7 : 0));
      const W = plan.width || 20; const D = plan.depth || 30;
      let hits = 0;
      for (let i = 0; i < 1500; i++) {
        const from = { x: (r() - 0.5) * W, y: 0.4 + r() * 1.4, z: -r() * D };
        const to = { x: from.x + (r() - 0.5) * 5, y: r() * 2.2, z: from.z + (r() - 0.5) * 5 };
        const end = 0.6 + r() * 0.4;
        const a = blockedSlab(boxes, from, to, end);
        assert.equal(blockedBVH(R, from, to, end), a, `${name} ${JSON.stringify({ from, to, end })}`);
        if (a) hits++;
      }
      assert.ok(hits > 50, `${name}: the test lines hit boxes (${hits})`);
    }
  }
});

test('roombvh: wall collision with only the near boxes is the same as collide()', () => {
  for (const [name, plan] of rooms()) {
    const boxes = solidBoxes(plan, { counter: false });
    const R = roomBVH(boxes);
    const r = rnd(name.length * 17);
    // Walk as the player does: small steps from the start, always pushed out of boxes.
    let p = { x: plan.start.x, z: plan.start.z };
    let yaw = 0;
    for (let i = 0; i < 6000; i++) {
      if (r() < 0.05) yaw = r() * Math.PI * 2;
      const x = p.x + Math.sin(yaw) * 0.06; const z = Math.min(0.2, p.z - Math.cos(yaw) * 0.06);
      const a = collide(plan, x, z, 0.3, { counter: false });
      const b = collideBoxes(boxesNear(R, x, z, 0.9), x, z, 0.3);
      assert.ok(Math.abs(a.x - b.x) < 1e-9 && Math.abs(a.z - b.z) < 1e-9, `${name} at ${x},${z}`);
      p = a;
    }
  }
});
