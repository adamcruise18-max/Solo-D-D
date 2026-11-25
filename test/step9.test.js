// Research step 9: overgrowth effects (walk, animal cover, forage) and a deeper dog
// (finds items, warns of loose dogs, gets sick, can be treated).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { newGame } from '../src/engine/state.js';
import { overgrowthWalk, animalCover, forageFactor } from '../src/engine/season.js';
import { walkSpeed } from '../src/engine/travel.js';
import { startHazard } from '../src/engine/hazards.js';
import { dogStep, dogSickDaily, dogWarns, treatDog, canTreatDog } from '../src/engine/dog.js';

const D = 1440;
const at = (day, hour = 12) => day * D + hour * 60;

test('overgrowth: no slowdown at the start, up to 15% slower in a grown-in summer', () => {
  assert.equal(overgrowthWalk(at(1)), 1);
  const summer2 = overgrowthWalk(at(600)); // July 2028, fully grown
  const winter2 = overgrowthWalk(at(780)); // January 2029
  assert.ok(summer2 >= 0.85 && summer2 < 0.9, String(summer2));
  assert.ok(winter2 > summer2, `${winter2} vs ${summer2}`);
  const s = newGame(1);
  s.time = at(600);
  s.weather.type = 'clear';
  assert.ok(walkSpeed(s).why.includes('overgrown streets'));
});

test('overgrowth: animal cover and forage peak in summer and grow with time', () => {
  assert.ok(animalCover(at(240)) > animalCover(at(60))); // July 2027 vs January 2027
  assert.ok(animalCover(at(600)) > animalCover(at(240)));
  assert.ok(forageFactor(at(240)) > forageFactor(at(150)) * 2); // summer vs spring
  assert.ok(forageFactor(at(60)) < 0.2);
});

function withDog(seed = 9) {
  const s = newGame(seed);
  Object.assign(s.dog, { stage: 'joined', name: 'Scout', bond: 80, food: 90, health: 100 });
  return s;
}

test('dog: warns of loose dogs, so the walk is less slow', () => {
  const a = newGame(2);
  const b = withDog(2);
  for (const s of [a, b]) { s.weather.type = 'clear'; s.time = at(2); startHazard(s, 'feral_dogs', 24); }
  assert.ok(!dogWarns(a) && dogWarns(b));
  assert.ok(walkSpeed(b).mph > walkSpeed(a).mph);
  dogStep(b, 1 / 6, false);
  dogStep(b, 1 / 6, false);
  assert.equal(b.log.filter((l) => /growls low/.test(l.text)).length, 1, 'one warning a pack');
});

test('dog: finds things in a store, at most once a visit', () => {
  let found = 0;
  for (let seed = 1; seed <= 20; seed++) {
    const s = withDog(seed);
    s.location = { kind: 'place', id: 'p1' };
    s.time = at(3);
    for (let i = 0; i < 18; i++) dogStep(s, 1 / 6, false); // 3 hours
    assert.ok((s.dog.finds || 0) <= 1);
    found += s.dog.finds || 0;
  }
  assert.ok(found >= 3 && found <= 16, `found in ${found} of 20 visits`);
  const s = withDog(3);
  s.dog.bond = 10;
  s.location = { kind: 'place', id: 'p1' };
  for (let i = 0; i < 60; i++) dogStep(s, 1 / 6, false);
  assert.equal(s.dog.finds || 0, 0, 'a new dog does not look for you');
});

test('dog: gets sick sometimes, loses health, antibiotics cure it', () => {
  let sick = 0;
  for (let seed = 1; seed <= 10; seed++) {
    const s = withDog(seed);
    for (let d = 1; d <= 100; d++) { s.weather.type = 'clear'; s.weather.low = 45; dogSickDaily(s, d); if (s.dog.sick) { sick++; break; } }
  }
  assert.ok(sick >= 3 && sick <= 10, `${sick} of 10 dogs sick in 100 days`);
  const s = withDog(4);
  s.dog.sick = { since: 1 };
  delete s.carried.antibiotics;
  delete s.home.storage.antibiotics;
  dogStep(s, 4, true);
  assert.ok(s.dog.health < 100, 'no healing in sleep while sick');
  assert.match(canTreatDog(s), /antibiotics/);
  s.carried.antibiotics = 1;
  assert.ok(treatDog(s));
  assert.equal(s.dog.sick, null);
  assert.equal(s.carried.antibiotics || 0, 0);
});
