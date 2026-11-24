import { test } from 'node:test';
import assert from 'node:assert/strict';
import { KEYS, keyFor, moveSpeed, nextStance } from '../src/ui/controls.js';
import { newGame, hasLight } from '../src/engine/state.js';
import { perform } from '../src/engine/game.js';
import { quickChoice } from '../src/engine/actions.js';

test('each key has only one job', () => {
  const seen = new Map();
  for (const k of KEYS) for (const c of k.keys) {
    assert.ok(!seen.has(c), `${c} is used by ${seen.get(c)} and ${k.action}`);
    seen.set(c, k.action);
  }
});

test('the standard layout keys are where Adam asked', () => {
  const a = (c) => keyFor(c)?.action;
  assert.equal(a('Space'), 'jump');
  assert.equal(a('ShiftLeft'), 'sprint');
  assert.equal(a('ControlLeft'), 'crouch');
  assert.equal(a('KeyE'), 'interact');
  assert.equal(a('KeyF'), 'context');
  assert.equal(a('KeyR'), 'reload');
  assert.equal(a('KeyG'), 'grenade');
  assert.equal(a('KeyV'), 'melee');
  assert.equal(a('KeyQ'), 'tactical');
  assert.equal(a('Tab'), 'inventory');
  assert.equal(a('KeyM'), 'map');
  assert.equal(a('KeyC'), 'character');
  assert.equal(a('KeyJ'), 'journal');
  assert.equal(a('Digit7'), 'quick_food');
  assert.equal(a('F5'), 'quicksave');
  assert.equal(a('F9'), 'quickload');
});

test('stances and speeds', () => {
  assert.equal(nextStance('stand'), 'crouch');
  assert.equal(nextStance('crouch'), 'prone');
  assert.equal(nextStance('prone'), 'stand');
  assert.ok(moveSpeed({ stance: 'stand', sprint: true }) > moveSpeed({ stance: 'stand' }));
  assert.ok(moveSpeed({ stance: 'stand', slowWalk: true }) < moveSpeed({ stance: 'stand' }));
  assert.ok(moveSpeed({ stance: 'prone', sprint: true }) < moveSpeed({ stance: 'crouch' }));
});

test('flashlight off saves batteries and counts as no light', () => {
  const s = newGame(4);
  s.carried.flashlight = 1;
  assert.ok(hasLight(s));
  perform(s, 'action', 'flashlight');
  assert.equal(hasLight(s), false);
  perform(s, 'action', 'flashlight');
  assert.ok(hasLight(s));
});

test('quick keys pick a useful item', () => {
  const s = newGame(4);
  s.carried = { water_bottle: 1, snacks: 1 };
  s.player.water = 10; s.player.food = 50;
  assert.deepEqual(quickChoice(s, 'food'), { id: 'water_bottle', verb: 'drink' });
  s.player.water = 80;
  assert.deepEqual(quickChoice(s, 'food'), { id: 'snacks', verb: 'eat' });
  assert.ok(quickChoice(s, 'med').why);
  s.carried.first_aid = 1;
  s.player.injuries = [{ type: 'small_cut', bandaged: false }];
  assert.deepEqual(quickChoice(s, 'med'), { id: 'first_aid', verb: 'med' });
  assert.ok(quickChoice(s, 'utility').why);
});
