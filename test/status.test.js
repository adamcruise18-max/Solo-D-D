import test from 'node:test';
import assert from 'node:assert/strict';
import { newGame } from '../src/engine/state.js';
import { odds, oddsText } from '../src/engine/checks.js';
import { statStage, needWarnings, risks } from '../src/engine/status.js';

test('odds match the d20 rules (nat 1 fails, nat 20 passes)', () => {
  const s = newGame(1);
  Object.assign(s.player, { energy: 100, water: 100, warmth: 100, health: 100, morale: 100 });
  s.player.injuries = [];
  assert.equal(odds(s, 12).pct, 45); // rolls 12-20
  assert.equal(odds(s, 2).pct, 95); // a 1 still fails
  assert.equal(odds(s, 30).pct, 5); // a 20 still passes
  s.player.energy = 40; // tired −2
  const o = odds(s, 12);
  assert.equal(o.pct, 35);
  assert.match(oddsText(o), /^d20 −2 tired vs DC 12 · 35%$/);
});

test('oddsText shows at most 3 modifiers', () => {
  const t = oddsText({ dc: 10, pct: 20, mods: [['a', -1], ['b', -3], ['c', -2], ['d', +1]] });
  assert.equal(t, 'd20 −3 b −2 c −1 a (+1 more) vs DC 10 · 20%');
});

test('each need has 4 stages, no warning above the first limit', () => {
  assert.equal(statStage('water', 80).stage, 0);
  assert.equal(statStage('water', 40).word, 'Thirsty');
  assert.equal(statStage('water', 10).stage, 2);
  assert.equal(statStage('water', 0).word, 'Dehydrated');
  const s = newGame(2);
  Object.assign(s.player, { food: 90, water: 30, warmth: 90, energy: 90, health: 90, morale: 10 });
  assert.deepEqual(needWarnings(s).map((n) => n.word), ['Despair', 'Thirsty']);
});

test('an open wound shows an infection risk until it is bandaged', () => {
  const s = newGame(3);
  s.player.injuries = [{ type: 'bite', bandaged: false, infectRisk: 0.4 }];
  assert.ok(risks(s).some((r) => r.id === 'infection' && /40%/.test(r.text)));
  s.player.injuries[0].bandaged = true;
  assert.ok(!risks(s).some((r) => r.id === 'infection'));
});
