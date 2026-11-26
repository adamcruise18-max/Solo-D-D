import test from 'node:test';
import assert from 'node:assert/strict';
import { newGame } from '../src/engine/state.js';
import { skillLevel, practice } from '../src/engine/skills.js';
import { walkSpeed, estimateTrip } from '../src/engine/travel.js';
import { advanceTime } from '../src/engine/tick.js';
import { JOBS, TRAITS, validTraits, pointsLeft, searchJobFactor, energyUseFactor } from '../src/engine/background.js';

test('no job and no traits: old behavior', () => {
  const s = newGame(5);
  assert.equal(s.player.job, null);
  assert.deepEqual(s.player.traits, []);
});

test('each job gives its skill levels and its item at home', () => {
  for (const [id, J] of Object.entries(JOBS)) {
    const base = newGame(5);
    const s = newGame(5, { job: id });
    for (const [k, l] of Object.entries(J.skills)) assert.equal(skillLevel(s, k), l, `${id} ${k}`);
    const [item, n] = J.item;
    assert.equal((s.home.storage[item] || 0) - (base.home.storage[item] || 0), n, id);
  }
});

test('each job has a real weakness', () => {
  const base = newGame(5);
  base.player.weak = false;
  const nurse = newGame(5, { job: 'nurse' }); nurse.player.weak = false;
  assert.ok(energyUseFactor(nurse, 'heavy') > energyUseFactor(base, 'heavy'));
  const roofer = newGame(5, { job: 'roofer' }); roofer.player.weak = false;
  assert.ok(walkSpeed(roofer).mph < walkSpeed(base).mph);
  const tow = newGame(5, { job: 'tow_driver' });
  const dest = { lat: base.pos.lat + 0.02, lon: base.pos.lon };
  assert.ok(estimateTrip(tow, dest).energy > estimateTrip(newGame(5), dest).energy);
  assert.ok(searchJobFactor(newGame(5, { job: 'fishing_guide' })) > 1);
  const cook = newGame(5, { job: 'line_cook' }); const plain = newGame(5);
  advanceTime(cook, 240); advanceTime(plain, 240);
  assert.ok(cook.player.food < plain.player.food);
});

test('trait points: good traits cost, bad traits give, opposites exclude', () => {
  assert.equal(pointsLeft([]), 1);
  assert.deepEqual(validTraits(['fast_learner']), []); // costs 2, only 1 point
  assert.deepEqual(validTraits(['fast_learner', 'light_sleeper']), ['fast_learner', 'light_sleeper']);
  assert.deepEqual(validTraits(['fast_learner', 'slow_learner']), []);
  assert.deepEqual(validTraits(['nope', 'dog_person']), ['dog_person']);
  for (const t of Object.values(TRAITS)) assert.ok(t.cost !== 0);
});

test('fast and slow learners', () => {
  const fast = newGame(5, { traits: ['fast_learner', 'asthmatic'] });
  const slow = newGame(5, { traits: ['slow_learner'] });
  practice(fast, 'cooking', 10); practice(slow, 'cooking', 10);
  assert.equal(fast.skills.xp.cooking, 13);
  assert.equal(slow.skills.xp.cooking, 7);
});

test('dog person: the dog comes on day 2', () => {
  assert.equal(newGame(5, { traits: ['dog_person'] }).dog.arriveDay, 1);
});
