// Heat by room (research step 8): the living room holds the fire; other rooms
// trade heat with it through doors and with the outside through windows.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { newGame } from '../src/engine/state.js';
import { homeStep, homeHeat, breakWindow, boardWindow, setDoor, roomTemp, ensureRooms } from '../src/engine/home.js';

function cold(seed = 41) {
  const s = newGame(seed);
  s.home.indoorTemp = 50;
  ensureRooms(s.home);
  for (const r of Object.values(s.home.rooms)) r.temp = 50;
  return s;
}
const env = { air: 20 };
const run = (s, hours, fire = true) => { for (let i = 0; i < hours; i++) { if (fire) s.home.fireHours = 5; homeStep(s, 1, env); } };

test('rooms: with the fire on, an open-door room is warmer than a closed one', () => {
  const s = cold();
  setDoor(s, 'bedroom', true);
  run(s, 36);
  assert.ok(roomTemp(s, 'living') > roomTemp(s, 'kitchen'));
  assert.ok(roomTemp(s, 'kitchen') > roomTemp(s, 'bedroom') + 5, `${roomTemp(s, 'kitchen')} vs ${roomTemp(s, 'bedroom')}`);
});

test('rooms: a broken window makes a room colder; a board helps', () => {
  const a = cold(); const b = cold(); const c = cold();
  breakWindow(b, 'kitchen');
  breakWindow(c, 'kitchen'); boardWindow(c, 'kitchen');
  run(a, 12); run(b, 12); run(c, 12);
  assert.ok(roomTemp(b, 'kitchen') < roomTemp(a, 'kitchen') - 3);
  assert.ok(roomTemp(c, 'kitchen') > roomTemp(b, 'kitchen'));
});

test('rooms: a broken living room window costs heat at the fire', () => {
  const a = cold(); const b = cold();
  breakWindow(b, 'living');
  run(a, 12); run(b, 12);
  assert.ok(b.home.indoorTemp < a.home.indoorTemp - 3);
});

test('rooms: no fire, everything falls toward the outside air', () => {
  const s = cold();
  run(s, 48, false);
  for (const r of homeHeat(s).rooms) assert.ok(r.temp < 40, `${r.id} ${r.temp}`);
});

test('rooms: the heat panel data', () => {
  const s = cold();
  breakWindow(s, 'bath');
  const h = homeHeat(s);
  assert.deepEqual(h.rooms.map((r) => r.id), ['living', 'kitchen', 'bedroom', 'bath']);
  assert.equal(h.rooms.find((r) => r.id === 'bath').brokenWindows, 1);
  assert.ok(h.rooms.find((r) => r.id === 'bath').loss > 1);
  assert.equal(h.rooms[0].doorClosed, null);
});

test('rooms: open doors to cold rooms pull the living room down', () => {
  const a = cold(); const b = cold();
  for (const r of ['kitchen', 'bedroom', 'bath']) setDoor(b, r, true);
  run(a, 24); run(b, 24);
  assert.ok(b.home.indoorTemp > a.home.indoorTemp + 1, `${b.home.indoorTemp} vs ${a.home.indoorTemp}`);
});

test('rooms: sleep feels the bedroom by default, or the fire if chosen', async () => {
  const { feltTemp } = await import('../src/engine/tick.js');
  const { setSleepSpot } = await import('../src/engine/home.js');
  const s = cold();
  s.location = { kind: 'home' };
  s.home.indoorTemp = 65;
  s.home.rooms.bedroom.temp = 40;
  const bed = feltTemp(s, 'sleep');
  setSleepSpot(s, 'living');
  const fire = feltTemp(s, 'sleep');
  assert.ok(fire - bed > 15, `bedroom ${bed} vs fire ${fire}`);
});
