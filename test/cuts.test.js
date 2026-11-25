// Adam (2026-11-25): cuts never kill. Bites still can.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { newGame } from '../src/engine/state.js';
import { addInjury, tickStep, startInfection, BLEED_FLOOR } from '../src/engine/tick.js';

test('cuts: a cut on a player with 3 health does not kill', () => {
  const s = newGame(31);
  s.player.health = 3;
  addInjury(s, 'deep_cut');
  assert.ok(!s.dead && s.player.health >= 1);
});

test('cuts: bleeding stops at the floor; an infected cut takes no health', () => {
  const s = newGame(32);
  s.player.food = s.player.water = s.player.warmth = 90;
  s.player.health = 30;
  addInjury(s, 'deep_cut');
  startInfection(s, 'deep_cut');
  s.player.illness.infection.ageH = 100;
  for (let i = 0; i < 48; i++) { s.player.food = s.player.water = s.player.warmth = 90; tickStep(s, 1, 'rest'); }
  assert.ok(!s.dead);
  assert.ok(s.player.health >= BLEED_FLOOR - 1e-9, `health ${s.player.health}`);
});

test('cuts: an infected bite still hurts', () => {
  const s = newGame(33);
  s.player.food = s.player.water = s.player.warmth = 90;
  s.player.health = 50;
  startInfection(s, 'bite');
  s.player.illness.infection.ageH = 100;
  tickStep(s, 5, 'rest');
  assert.ok(s.player.health < 50);
});
