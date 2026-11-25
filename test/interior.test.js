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

test('items in a zone are picked up one by one', async () => {
  const { buildingItems } = await import('../src/engine/actions.js');
  setPlaces([{ id: 'h9', name: 'Home Depot', cat: 'hardware', lat: 45.5, lon: -122.8 }]);
  const s = newGame(11);
  s.location = { kind: 'place', id: 'h9' };
  s.carried.backpack = 1;
  const ps = placeState(s, { id: 'h9', cat: 'hardware', name: 'Home Depot' });
  const items = buildingItems(s);
  assert.ok(items.length > 3, `items ${items.length}`);
  assert.deepEqual(buildingItems(s).map((i) => i.pid), items.map((i) => i.pid), 'same list each time');
  const light = items.find((i) => i.item === 'hardware_parts' || i.item === 'batteries' || i.item === 'seeds') || items[0];
  const t0 = s.time;
  perform(s, 'action', 'pickup', light.pid);
  assert.ok(s.time > t0, 'pick up costs time');
  assert.ok(ps.taken.includes(light.pid));
  assert.ok(!buildingItems(s).some((i) => i.pid === light.pid));
  const t1 = s.time;
  perform(s, 'action', 'pickup', light.pid);
  assert.equal(s.time, t1, 'cannot take twice');
  // Take the rest of that zone: the zone is then done.
  for (const it of buildingItems(s).filter((i) => i.zone === light.zone)) {
    s.carried = { backpack: 1 }; // empty the pack so all fits
    perform(s, 'action', 'pickup', it.pid);
  }
  assert.ok(ps.doneList.includes(light.zone));
});

test('panel search takes what is left in the zone, and the 3D view agrees', async () => {
  const { buildingItems } = await import('../src/engine/actions.js');
  setPlaces([{ id: 's7', name: 'Safeway', cat: 'supermarket', lat: 45.5, lon: -122.8 }]);
  const s = newGame(12);
  s.location = { kind: 'place', id: 's7' };
  const before = buildingItems(s).filter((i) => i.zone === 0).length;
  perform(s, 'action', 'search', 0);
  const ps = placeState(s, { id: 's7', cat: 'supermarket', name: 'Safeway' });
  const inLeft = Object.values(ps.leftovers).reduce((a, b) => a + b, 0);
  assert.equal(inLeft, before);
  assert.equal(buildingItems(s).filter((i) => i.zone === 0).length, 0);
});

test('a too heavy item stays', async () => {
  const { buildingItems } = await import('../src/engine/actions.js');
  setPlaces([{ id: 'h8', name: 'Hardware', cat: 'hardware', lat: 45.5, lon: -122.8 }]);
  const s = newGame(13);
  s.location = { kind: 'place', id: 'h8' };
  s.carried = { firewood: 1 }; // 20 lb, limit 10 * 1.5
  const it = buildingItems(s)[0];
  perform(s, 'action', 'pickup', it.pid);
  assert.ok(!(placeState(s, { id: 'h8', cat: 'hardware' }).taken || []).includes(it.pid));
});

test('items behind a locked counter stay until the gate opens', async () => {
  const { pickUp } = await import('../src/engine/actions.js');
  setPlaces([{ id: 'p9', name: 'Pharmacy', cat: 'pharmacy', lat: 45.5, lon: -122.8 }]);
  const s = newGame(21);
  s.location = { kind: 'place', id: 'p9' };
  perform(s, 'action', 'search', 0); // creates the place state
  const ps = placeState(s, { id: 'p9', cat: 'pharmacy' });
  const counter = ps.zones - 1;
  const pid = `z${counter}i0`;
  assert.equal(pickUp(s, pid), false);
  assert.ok(!(ps.taken || []).includes(pid));
});

test('opening a container costs time once and is saved', async () => {
  const { openContainer, openedContainers } = await import('../src/engine/actions.js');
  setPlaces([{ id: 'c7', name: 'Store', cat: 'supermarket', lat: 45.5, lon: -122.8 }]);
  const s = newGame(31);
  s.location = { kind: 'place', id: 'c7' };
  perform(s, 'action', 'search', 0);
  const t0 = s.time;
  perform(s, 'action', 'open_container', 'c3');
  assert.ok(s.time > t0);
  assert.deepEqual(openedContainers(s), ['c3']);
  const t1 = s.time;
  assert.equal(openContainer(s, 'c3'), false);
  assert.equal(s.time, t1);
  assert.equal(openContainer(s, 'x; bad'), false);
});

test('some buildings are open to the weather, the same way every time', async () => {
  const { buildInterior } = await import('../src/engine/interior.js');
  let n = 0;
  for (let i = 0; i < 400; i++) {
    const a = buildInterior('supermarket', 'k' + i, 8);
    const b = buildInterior('supermarket', 'k' + i, 8);
    assert.deepEqual(a.exposed, b.exposed);
    if (a.exposed) { n++; assert.ok(['window', 'roof'].includes(a.exposed.kind)); }
  }
  assert.ok(n > 15 && n < 80, `exposed ${n} of 400`);
});

test('home plan: projects stand in their rooms; built ones are solid; looking works only in the same room', async () => {
  const { buildHome, nearestSpot, HOME_PROJECT_SLOTS, solidBoxes } = await import('../src/engine/interior.js');
  const p = buildHome((id) => id === 'wood_stove');
  assert.equal(p.home, true);
  assert.equal(p.projects.length, Object.keys(HOME_PROJECT_SLOTS).length);
  const stove = p.fixtures.find((f) => f.proj === 'wood_stove');
  const store = p.fixtures.find((f) => f.proj === 'sealed_store');
  assert.equal(stove.solid, true);
  assert.equal(store.solid, false, 'not built: only an outline');
  assert.ok(solidBoxes(p).includes(stove));
  for (const pr of p.projects) {
    const a = p.spots.find((s) => s.label === pr.room).area;
    assert.ok(pr.x > a.x1 && pr.x < a.x2 && pr.z > a.z1 && pr.z < a.z2, `${pr.id} inside its room`);
  }
  const sp = p.projects.find((x) => x.id === 'wood_stove');
  const side = sp.x > 0 ? 1 : -1;
  const n = nearestSpot(p, sp.x + side * 1.2, sp.z, side > 0 ? Math.PI / 2 : -Math.PI / 2);
  assert.equal(n.type, 'project');
  assert.equal(n.id, 'wood_stove');
  // no search zones at home
  assert.notEqual(nearestSpot(p, -2.9, -4.3, 0)?.type, 'search');
});
