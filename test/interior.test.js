import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildInterior, collide, nearestSpot, solidBoxes } from '../src/engine/interior.js';
import { CATEGORIES } from '../src/data/places.js';
import { newGame } from '../src/engine/state.js';
import { perform } from '../src/engine/game.js';
import { setPlaces } from '../src/engine/placesdb.js';
import { placeState } from '../src/engine/loot.js';

const inside = (b, x, z) => Math.abs(x - b.x) < b.w / 2 && Math.abs(z - b.z) < b.d / 2;

test('every place type gets a floor plan with one spot per zone', () => {
  for (const cat of Object.keys(CATEGORIES)) {
    const zones = cat === 'house' ? 6 : CATEGORIES[cat].zones;
    const plan = buildInterior(cat, `k-${cat}`, zones);
    assert.equal(plan.spots.length, zones, cat);
    assert.deepEqual(plan.spots.map((s) => s.zone).sort((a, b) => a - b), [...Array(zones).keys()], cat);
    // Start point and spots are not inside a wall or a solid fixture.
    const boxes = solidBoxes(plan, { counter: true });
    for (const p of [plan.start, ...plan.spots]) {
      assert.ok(!boxes.some((b) => inside(b, p.x, p.z)), `${cat}: point ${p.x},${p.z} is blocked`);
    }
  }
});

test('same key gives the same plan', () => {
  assert.deepEqual(buildInterior('supermarket', 'a', 10), buildInterior('supermarket', 'a', 10));
});

test('walls stop the player', () => {
  const plan = buildInterior('convenience', 'c', 2);
  const p = collide(plan, 0, -plan.size.d + 0.15);
  assert.ok(p.z >= -plan.size.d + 0.39, `pushed back inside: ${p.z}`);
});

test('standing in an aisle lets you search it', () => {
  const plan = buildInterior('hardware', 'h', 8);
  const s = plan.spots[3];
  const n = nearestSpot(plan, s.x, s.z + 4, 0);
  assert.equal(n.zone, 3);
  assert.equal(nearestSpot(plan, plan.start.x, plan.start.z + 1.2, Math.PI).type, 'exit');
});

test('zones can be searched in any order, and each only once', () => {
  setPlaces([{ id: 'w1', name: 'Walgreens', cat: 'pharmacy', lat: 45.4916, lon: -122.8697 }]);
  const s = newGame(5);
  s.location = { kind: 'place', id: 'w1' };
  const ps = placeState(s, { id: 'w1', cat: 'pharmacy', name: 'Walgreens' });
  const t0 = s.time;
  perform(s, 'action', 'search', 2);
  assert.deepEqual(ps.doneList, [2]);
  assert.equal(ps.zonesDone, 1);
  assert.ok(s.time - t0 >= 20, 'search costs game time');
  const t1 = s.time;
  perform(s, 'action', 'search', 2);
  assert.equal(s.time, t1, 'a done zone costs no time');
  // Counter zone is locked until the gate opens.
  perform(s, 'action', 'search', ps.zones - 1);
  assert.equal(ps.zonesDone, 1);
  // Panel button takes the first zone not done.
  perform(s, 'action', 'search');
  assert.deepEqual(ps.doneList, [2, 0]);
});

test('walking inside costs game time by distance', () => {
  const s = newGame(9);
  const t0 = s.time;
  perform(s, 'action', 'walk_inside', 120);
  assert.ok(Math.abs(s.time - t0 - 2) < 0.01, `took ${s.time - t0} min`);
});

test('old saves with only a count keep their done zones', () => {
  setPlaces([{ id: 's1', name: 'Safeway', cat: 'supermarket', lat: 45.4968, lon: -122.8884 }]);
  const s = newGame(3);
  s.location = { kind: 'place', id: 's1' };
  const ps = placeState(s, { id: 's1', cat: 'supermarket', name: 'Safeway' });
  ps.zonesDone = 3;
  perform(s, 'action', 'search', 1);
  assert.equal(ps.zonesDone, 3, 'zone 1 was already done');
  perform(s, 'action', 'search', 5);
  assert.equal(ps.zonesDone, 4);
});
