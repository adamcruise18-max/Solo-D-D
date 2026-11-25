import { test } from 'node:test';
import assert from 'node:assert/strict';
import { newGame, formatClock, formatDate, bagWeight, carryLimit } from '../src/engine/state.js';
import { advanceTime } from '../src/engine/tick.js';
import { perform } from '../src/engine/game.js';
import { listActions, hereBag } from '../src/engine/actions.js';
import { setPlaces } from '../src/engine/placesdb.js';
import { airTemp, isNight } from '../src/engine/world.js';
import { routeMiles } from '../src/engine/travel.js';
import { parseSave } from '../src/engine/save.js';

const SAFEWAY = { id: 'n1', name: 'Safeway', cat: 'supermarket', lat: 45.4968, lon: -122.8884 };
const WALGREENS = { id: 'n2', name: 'Walgreens', cat: 'pharmacy', lat: 45.4916, lon: -122.8697 };
setPlaces([SAFEWAY, WALGREENS]);

test('new game matches the start state in the rules', () => {
  const s = newGame(42);
  assert.equal(s.player.food, 40);
  assert.equal(s.player.water, 35);
  assert.equal(s.player.energyMax, 60);
  assert.equal(formatDate(s.time), 'Tue 24 Nov 2026');
  assert.equal(formatClock(s.time), '9:05 AM');
  assert.equal(s.location.kind, 'home');
  assert.equal(s.home.storage.formula, 4);
});

test('same seed gives the same game', () => {
  const a = newGame(7);
  const b = newGame(7);
  advanceTime(a, 600);
  advanceTime(b, 600);
  assert.deepEqual(a, b);
});

test('stats go down with time, and water at 0 hurts health', () => {
  const s = newGame(1);
  advanceTime(s, 60);
  // Adam: needs drain 25% slower (food 1.125/h, water 1.875/h at rest).
  assert.ok(Math.abs(s.player.food - 38.875) < 0.3, `food ${s.player.food}`);
  assert.ok(Math.abs(s.player.water - 33.125) < 0.3, `water ${s.player.water}`);
  const hp = s.player.health;
  advanceTime(s, 19 * 60);
  assert.equal(s.player.water, 0);
  assert.ok(s.player.health < hp);
});

test('a player who does nothing dies, with a cause', () => {
  const s = newGame(3);
  advanceTime(s, 5 * 24 * 60);
  assert.ok(s.dead);
  assert.match(s.dead.cause, /dehydration|cold/); // no water, no fire, normal clothes: thirst or the cold
});

test('drinking and eating from home storage', () => {
  const s = newGame(2);
  perform(s, 'use', 'saline', 'drink', 'storage');
  assert.ok(s.player.water > 55);
  assert.equal(s.home.storage.saline, 1);
  perform(s, 'use', 'canned_food', 'eat', 'storage');
  assert.equal(s.home.storage.canned_food, 5);
});

test('fire warms the house; boiling water makes it safe', () => {
  const s = newGame(5);
  const t0 = s.home.indoorTemp;
  perform(s, 'action', 'add_wood');
  advanceTime(s, 60);
  assert.ok(s.home.indoorTemp > t0 + 3, `indoor ${s.home.indoorTemp}`);
  perform(s, 'action', 'collect_tap');
  assert.equal(s.home.rawGal, 2);
  perform(s, 'action', 'boil');
  assert.equal(s.home.safeGal, 1);
});

test('air temperature is colder at night than at 3 PM', () => {
  const s = newGame(9);
  const day = 0;
  assert.ok(isNight(day * 1440 + 3 * 60));
  assert.ok(airTemp(s, day * 1440 + 15 * 60) > airTemp(s, day * 1440 + 6 * 60));
});

test('walk to a store, search it, take items, walk home', () => {
  const s = newGame(11);
  perform(s, 'use', 'saline', 'drink', 'storage');
  perform(s, 'use', 'saline', 'drink', 'storage');
  perform(s, 'use', 'formula', 'eat', 'storage');
  const t0 = s.time;
  perform(s, 'action', 'go_place', 'n1');
  assert.equal(s.location.kind, 'place');
  const miles = routeMiles({ lat: 45.4826, lon: -122.8738 }, SAFEWAY);
  assert.ok(s.time - t0 >= (miles / 3) * 60, 'travel takes time');
  assert.ok(s.stats.miles > 0);
  for (let i = 0; i < 3; i++) perform(s, 'action', 'search');
  assert.equal(s.places.n1.zonesDone, 3);
  perform(s, 'takeall');
  assert.ok(bagWeight(s.carried) <= carryLimit(s) * 1.5);
  perform(s, 'action', 'go_home');
  if (!s.dead) assert.equal(s.location.kind, 'home');
});

test('place loot is fixed: the same seed finds the same items', () => {
  const run = () => {
    const s = newGame(21);
    s.player.water = 100; s.player.food = 100; s.player.energy = 60;
    s.location = { kind: 'place', id: 'n1' };
    s.pos = { lat: SAFEWAY.lat, lon: SAFEWAY.lon };
    perform(s, 'action', 'search');
    return JSON.stringify(hereBag(s));
  };
  assert.equal(run(), run());
});

test('search a nearby house and leave it', () => {
  const s = newGame(13);
  s.player.water = 90; s.player.food = 90;
  const home = { ...s.pos };
  perform(s, 'action', 'house');
  assert.equal(s.location.kind, 'house');
  const m = routeMiles(home, s.pos) / 1.25 * 1609;
  assert.ok(m >= 70 && m <= 260, `player marker moved ${m} m`);
  perform(s, 'action', 'room');
  assert.equal(Object.values(s.houses)[0].roomsDone, 1);
  perform(s, 'action', 'leave_house');
  assert.equal(s.location.kind, 'home');
  assert.deepEqual(s.pos, home);
});

test('stray dog joins after food on three different days', () => {
  const s = newGame(17);
  s.player.water = 100; s.player.food = 100;
  s.dog.stage = 'visiting';
  s.dog.visitStart = 0;
  for (let i = 0; i < 3; i++) {
    perform(s, 'action', 'feed_stray');
    s.player.water = 100; s.player.food = 100; s.player.health = 100;
    advanceTime(s, 24 * 60);
  }
  assert.equal(s.dog.stage, 'joined');
  assert.equal(s.pendingPrompt, 'name_dog');
  perform(s, 'namedog', 'Rusty<script>');
  assert.equal(s.dog.name, 'Rustyscript');
  assert.ok(listActions(s).some((a) => a.id === 'play_dog'));
});

test('save round trip', () => {
  const s = newGame(19);
  advanceTime(s, 90);
  const back = parseSave(JSON.stringify(s));
  assert.deepEqual(back, s);
  assert.throws(() => parseSave('{"foo":1}'));
});

test('searching is rarely dangerous, and a walk does not make you starve', () => {
  let hurt = 0;
  for (let seed = 100; seed < 140; seed++) {
    const s = newGame(seed);
    s.player.energy = 60;
    s.carried.flashlight = 1;
    perform(s, 'action', 'house');
    for (let i = 0; i < 6; i++) perform(s, 'action', 'room');
    hurt += s.player.injuries.length;
  }
  // 240 room searches: expect about 7 injuries, never one per search.
  assert.ok(hurt < 25, `injuries ${hurt}`);
  const s = newGame(7);
  s.player.food = 80; s.player.water = 80;
  perform(s, 'action', 'go_place', 'n1');
  assert.ok(s.player.food > 75 && s.player.water > 75, `food ${s.player.food} water ${s.player.water}`);
});

test('a new run can start at another home', async () => {
  const { randomStartPoint, homeOf, HOME, MAP_RADIUS_MILES } = await import('../src/engine/state.js');
  const { straightMiles } = await import('../src/engine/travel.js');
  for (let i = 0; i < 50; i++) {
    const p = randomStartPoint();
    assert.ok(straightMiles(HOME, p) <= 12.05, 'random start stays inside the play area');
    assert.ok(straightMiles(HOME, p) < MAP_RADIUS_MILES);
  }
  const home = { lat: 45.4968, lon: -122.85 };
  const s = newGame(31, { home, homeLabel: 'near Safeway' });
  assert.deepEqual(s.pos, home);
  assert.deepEqual(homeOf(s), home);
  assert.equal(s.location.kind, 'home');
  assert.ok(s.log.some((e) => e.text.includes('near Safeway')));
  s.player.water = 90; s.player.food = 90;
  perform(s, 'action', 'go_place', 'n1');
  perform(s, 'action', 'go_home');
  if (!s.dead) assert.deepEqual(s.pos, home);
  // Old saves have no homePos: home is Aloha.
  const old = newGame(32);
  delete old.homePos;
  assert.deepEqual(homeOf(old), HOME);
});
