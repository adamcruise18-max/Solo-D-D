import test from 'node:test';
import assert from 'node:assert/strict';
import { newGame } from '../src/engine/state.js';
import { perform } from '../src/engine/game.js';
import { feltTemp, advanceTime } from '../src/engine/tick.js';
import { normalizeWorn, clothingWarmth, windBlock, wetGainPerHour } from '../src/engine/clothes.js';

test('old saves: true/false slots become item ids', () => {
  const p = { worn: { coat: true, hat: false, gloves: true, boots: false, rain: true, socks: true }, wet: true };
  normalizeWorn(p);
  assert.equal(p.worn.mid, 'winter_coat');
  assert.equal(p.worn.shell, 'rain_jacket');
  assert.equal(p.worn.gloves, 'gloves');
  assert.equal(p.worn.socks, 'wool_socks');
  assert.equal(p.worn.hat, false);
  assert.equal(p.wetness, 80);
});

test('one item per layer: the old one goes back into the bag', () => {
  const s = newGame(4);
  s.carried = { winter_coat: 1, fleece_jacket: 1 };
  perform(s, 'use', 'winter_coat', 'wear');
  perform(s, 'use', 'fleece_jacket', 'wear');
  assert.equal(s.player.worn.mid, 'fleece_jacket');
  assert.equal(s.carried.winter_coat, 1);
  perform(s, 'action', 'take_off', 'mid');
  assert.equal(s.player.worn.mid, false);
  assert.equal(s.carried.fleece_jacket, 1);
});

test('wet cotton and down lose much more heat than wool and fleece', () => {
  const down = { worn: { _v: 2, mid: 'winter_coat' }, wetness: 0 };
  const fleece = { worn: { _v: 2, mid: 'fleece_jacket', base: 'thermal_underwear' }, wetness: 0 };
  const dryDown = clothingWarmth(down);
  down.wetness = 100; fleece.wetness = 0;
  const dryFleece = clothingWarmth(fleece);
  fleece.wetness = 100;
  assert.ok(clothingWarmth(down) / dryDown < 0.6);
  assert.ok(clothingWarmth(fleece) / dryFleece > 0.7);
});

test('a shell blocks wind and keeps most rain out', () => {
  const bare = { worn: { _v: 2 }, wetness: 0 };
  const shell = { worn: { _v: 2, shell: 'rain_jacket' }, wetness: 0 };
  assert.ok(windBlock(shell) > windBlock(bare));
  assert.ok(wetGainPerHour(shell, 'rain', 60) < wetGainPerHour(bare, 'rain', 60) / 5);
  assert.ok(wetGainPerHour(shell, 'heavy_rain', 60) > wetGainPerHour(shell, 'rain', 60));
});

test('clothes dry inside, fastest by the fire', () => {
  const s = newGame(4);
  s.player.wetness = 90;
  s.home.fireHours = 0;
  s.home.indoorTemp = 45;
  advanceTime(s, 60);
  const cold = 90 - s.player.wetness;
  s.player.wetness = 90;
  s.home.fireHours = 5;
  advanceTime(s, 60);
  assert.ok(90 - s.player.wetness > cold * 3, `fire ${90 - s.player.wetness} vs cold ${cold}`);
  assert.ok(Number.isFinite(feltTemp(s, 'rest')));
});
