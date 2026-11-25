// Hunting and fishing: spots, gear, d20 odds, time cost, cleaning, fresh food, XP.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { newGame } from '../src/engine/state.js';
import { SPOTS, GAME } from '../src/data/wild.js';
import { spotPressure, catchFactor, canFish, fish, fishOdds, canHunt, hunt, huntOdds, gameHere, isScared, setSnare, checkSnare, canSetSnare, spotsNear } from '../src/engine/wild.js';
import { environment } from '../src/engine/tick.js';
import { whereNow } from '../src/engine/pacer.js';
import { skillLevel } from '../src/engine/skills.js';
import { stageOf } from '../src/engine/food.js';
import { straightMiles } from '../src/engine/travel.js';
import { HOME } from '../src/engine/state.js';

function at(spot, seed = 61, hour = 8) {
  const s = newGame(seed);
  s.location = { kind: 'wild', id: spot };
  s.pos = { lat: SPOTS[spot].lat, lon: SPOTS[spot].lon };
  s.time = 10 * 1440 + hour * 60;
  s.player.food = s.player.water = s.player.warmth = s.player.energy = 90;
  s.weather.type = 'cloudy';
  return s;
}

test('wild: every spot is inside the 15-mile map; no dogs or cats are game', () => {
  for (const [id, s] of Object.entries(SPOTS)) assert.ok(straightMiles(HOME, s) <= 15, `${id} ${straightMiles(HOME, s)}`);
  for (const id of Object.keys(GAME)) assert.ok(!/dog|cat/.test(id));
  assert.ok(spotsNear(newGame(1), 'fish').length >= 4);
  assert.ok(spotsNear(newGame(1), 'hunt').length >= 4);
});

test('wild: at a spot you are outside', () => {
  const s = at('tualatin_rood');
  assert.equal(environment(s, 'rest').outside, true);
  assert.equal(whereNow(s, 'rest'), 'outside');
});

test('fishing: needs the water and gear; takes two hours; fish are fresh; XP', () => {
  const home = newGame(60);
  home.carried.fishing_rod = 1;
  assert.match(canFish(home), /river/);
  const s = at('tualatin_rood');
  assert.match(canFish(s), /rod/);
  s.carried.fishing_line = 1;
  s.carried.knife = 1;
  assert.equal(canFish(s), null);
  assert.ok(fishOdds(s).pct > 0);
  s.time = 150 * 1440 + 6 * 60; // late April, fresh spot
  let caught = 0;
  for (let i = 0; i < 6; i++) {
    const t0 = s.time;
    const r = fish(s);
    assert.ok(s.time - t0 >= 120);
    caught += r.fish;
    s.player.food = s.player.water = s.player.energy = 90;
  }
  assert.ok(caught >= 2, `${caught} fish in 6 tries`);
  assert.equal(s.carried.fresh_fish, caught);
  assert.equal(stageOf(s, 'fresh_fish'), 'fresh');
  assert.ok(skillLevel(s, 'fishing') >= 1);
});

test('fishing: spot pressure lowers the odds and recovers in 2 to 3 weeks; winter halves the catch', () => {
  const s = at('commonwealth_lake');
  s.carried.fishing_rod = 1;
  s.time = 150 * 1440 + 8 * 60;
  const fresh = fishOdds(s).pct;
  for (let i = 0; i < 4; i++) { fish(s); s.player.food = s.player.water = s.player.energy = 90; s.time = 150 * 1440 + 8 * 60 + (i + 1) * 1440; }
  assert.ok(spotPressure(s, 'commonwealth_lake') > 2);
  assert.ok(fishOdds(s).pct < fresh, `${fishOdds(s).pct} vs ${fresh}`);
  assert.ok(catchFactor(s, 'commonwealth_lake') < 0.8);
  s.time += 18 * 1440;
  assert.equal(spotPressure(s, 'commonwealth_lake'), 0);
  const w = at('commonwealth_lake'); // early December
  assert.equal(catchFactor(w, 'commonwealth_lake'), 0.5);
});

test('fishing: Willamette runs (spring and fall salmon, winter steelhead) give better odds', () => {
  const mk = (day) => { const s = at('willamette_park'); s.carried.fishing_rod = 1; s.time = day * 1440 + 8 * 60; return s; };
  const winter = mk(10); // early December
  const spring = mk(140); // April
  const summer = mk(220); // early July: no run
  assert.ok(fishOdds(spring).mods.some(([n]) => /salmon run/.test(n)));
  assert.ok(fishOdds(winter).mods.some(([n]) => /steelhead run/.test(n)));
  assert.ok(!fishOdds(summer).mods.some(([n]) => /run/.test(n)));
  assert.ok(fishOdds(spring).pct > fishOdds(summer).pct);
});

test('hunting: needs a hunt spot and a bow or rifle; ducks only in their months', () => {
  const s = at('fernhill');
  assert.match(canHunt(s, 'bow'), /bow/);
  s.carried.bow = 1; s.carried.arrows = 1;
  assert.equal(canHunt(s, 'bow'), null);
  assert.ok(gameHere(s).some((g) => g.id === 'duck')); // early December
  s.time = 220 * 1440 + 8 * 60; // early July
  assert.equal(gameHere(s).length, 0);
  assert.equal(huntOdds(s, 'bow').find, 0);
});

test('hunting: a rifle is better but scares the game for a day', () => {
  const s = at('cooper_mountain', 62, 7);
  s.carried.rifle = 1; s.carried.rifle_rounds = 1; s.carried.knife = 1;
  const bowOdds = (() => { const b = at('cooper_mountain', 62, 7); b.carried.bow = 1; b.carried.arrows = 1; return huntOdds(b, 'bow').shot.pct; })();
  assert.ok(huntOdds(s, 'rifle').shot.pct > bowOdds);
  let shots = 0;
  for (let i = 0; i < 10 && !shots; i++) {
    const r = hunt(s, 'rifle');
    if (r.seen) shots++;
    s.player.food = s.player.water = s.player.energy = 90;
  }
  assert.ok(shots, 'found game at least once in 10 hunts');
  assert.ok(isScared(s));
  assert.ok(huntOdds(s, 'rifle').shot.mode === 'dis' || huntOdds(s, 'rifle').shot.dis.includes('game is wary'));
});

test('hunting: meat goes to the pack, fresh; no knife means less meat', () => {
  let withKnife = 0, without = 0;
  for (let seed = 1; seed <= 30; seed++) {
    for (const knife of [true, false]) {
      const s = at('nature_park', seed, 8);
      s.carried.bow = 1; s.carried.arrows = 3;
      if (knife) s.carried.knife = 1;
      const r = hunt(s, 'bow');
      if (r.ok && r.seen === 'rabbit') { if (knife) withKnife = r.meat; else without = r.meat; }
    }
  }
  assert.equal(withKnife, GAME.rabbit.meat);
  assert.ok(without > 0 && without < withKnife);
});

test('snares: set, wait a night, check; rabbits now and then', () => {
  let rabbits = 0;
  for (let seed = 1; seed <= 10; seed++) {
    const s = at('nature_park', seed, 9);
    assert.match(canSetSnare(s), /wire/);
    s.carried.snare_wire = 1;
    assert.ok(setSnare(s));
    assert.equal(checkSnare(s).ok, false); // too soon
    s.time += 26 * 60;
    rabbits += checkSnare(s).rabbits || 0;
  }
  assert.ok(rabbits >= 2 && rabbits <= 9, `${rabbits} rabbits in 10 nights`);
});

test('playtest 2: the rifle and bow work again after the first shot; a box gives 20 rounds', async () => {
  const { roundsLeft, arrowsLeft, huntMethods } = await import('../src/engine/wild.js');
  const s = at('cooper_mountain', 62, 7);
  s.carried.rifle = 1; s.carried.rifle_rounds = 1; s.carried.bow = 1; s.carried.arrows = 1;
  assert.equal(roundsLeft(s), 20);
  assert.equal(arrowsLeft(s), 6);
  let shots = 0;
  for (let i = 0; i < 4 && !s.dead; i++) {
    s.player.food = s.player.water = s.player.warmth = s.player.energy = s.player.health = 90;
    s.wild.scared = {};
    if (!huntMethods(s).includes('rifle')) break;
    hunt(s, 'rifle'); shots++;
  }
  assert.equal(shots, 4, 'four hunts with one box');
  assert.ok(roundsLeft(s) >= 16 && roundsLeft(s) < 20);
  assert.ok(huntMethods(s).includes('bow'));
});

test('playtest 2: a long hunt stops at a danger line with a journal line', () => {
  const s = at('cooper_mountain', 63, 7);
  s.carried.bow = 1; s.carried.arrows = 1;
  s.player.water = 16; // will cross 15 in the 3 hours
  const t0 = s.time;
  const r = hunt(s, 'bow');
  assert.equal(r.stopped, true);
  assert.ok(s.time - t0 < 180);
  assert.match(s.log.map((l) => l.text || l).join('\n'), /You stop\. Your mouth is dry/);
});
