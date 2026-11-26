// Adam's playtest (2026-11-25): needs 25% slower, 15 lb carry + backpack,
// injuries 90% rarer and scaled by severity, Rest gives back 25% energy an hour.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { newGame } from '../src/engine/state.js';
import { packFull } from '../src/engine/packgrid.js';
import { addInjury, injuryName, injuryFactor, advanceTime } from '../src/engine/tick.js';
import { walkSpeed } from '../src/engine/travel.js';
import { doAction } from '../src/engine/actions.js';

const strong = (s) => { s.player.weak = false; s.player.energyMax = 100; s.player.food = s.player.water = s.player.warmth = 90; };

test('carry: no weight limit, only grid space; the game starts with no pack', () => {
  const s = newGame(1); strong(s);
  assert.equal(s.carried.backpack, undefined);
  s.carried = { canned_food: 200 }; // far over the old 15 lb limit
  assert.equal(packFull(s), true);
  s.carried = { canned_food: 1 };
  assert.equal(packFull(s), false);
});

test('injuries: about 3 in 4 injury rolls hurt you (year tuning)', () => {
  let hurt = 0;
  for (let seed = 1; seed <= 400; seed++) { const s = newGame(seed); if (addInjury(s, 'small_cut')) hurt++; }
  assert.ok(hurt >= 270 && hurt <= 330, `hurt ${hurt} of 400`);
});

test('injuries scale by severity; a small cut hurts less than a sprained wrist', () => {
  const s = newGame(2); strong(s); s.player.health = 100;
  addInjury(s, 'small_cut', { always: true, severity: 'moderate' });
  const cut = 100 - s.player.health;
  s.player.health = 100;
  const w = addInjury(s, 'sprain', { always: true, severity: 'moderate', part: 'wrist' });
  const wrist = 100 - s.player.health;
  assert.ok(cut < wrist, `cut ${cut} wrist ${wrist}`);
  assert.equal(injuryName(w), 'Sprained wrist');
  s.player.health = 100;
  const minor = addInjury(s, 'small_cut', { always: true, severity: 'minor' });
  const serious = addInjury(s, 'deep_cut', { always: true, severity: 'serious' });
  assert.match(injuryName(minor), /\(minor\)/);
  assert.ok(serious.healH > minor.healH);
});

test('a sprained ankle slows walking by severity; a sprained wrist does not', () => {
  const s = newGame(3); strong(s);
  const base = walkSpeed(s).mph;
  addInjury(s, 'sprain', { always: true, severity: 'serious', part: 'wrist' });
  assert.equal(walkSpeed(s).mph, base);
  assert.equal(injuryFactor(s, 'hand'), 0.6);
  addInjury(s, 'sprain', { always: true, severity: 'minor', part: 'ankle' });
  assert.ok(Math.abs(walkSpeed(s).mph - base * 0.9) < 1e-9);
});

test('Rest for 1 hour gives back 25% of max energy; plain waiting does not', () => {
  const s = newGame(4); strong(s); s.player.energy = 40;
  doAction(s, 'rest');
  assert.ok(Math.abs(s.player.energy - 65) < 0.5, `energy ${s.player.energy}`);
  const t = newGame(4); strong(t); t.player.energy = 40;
  advanceTime(t, 60);
  assert.ok(t.player.energy < 40);
});
