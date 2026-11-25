import test from 'node:test';
import assert from 'node:assert/strict';
import { newGame } from '../src/engine/state.js';
import { perform } from '../src/engine/game.js';
import { itemUses, searchMinutes } from '../src/engine/actions.js';
import { odds } from '../src/engine/checks.js';
import { setPlaces } from '../src/engine/placesdb.js';
import { ITEMS } from '../src/data/items.js';
import { CATEGORIES } from '../src/data/places.js';
import {
  DAILY_FULL, SKILLS, LEVEL_XP, BOOK_XP, levelFor, skillLevel, practice, skillProgress, forceBonus, noticeOf, hasRead,
} from '../src/engine/skills.js';

test('levels follow the xp table, max 5', () => {
  assert.equal(levelFor(0), 0);
  assert.equal(levelFor(LEVEL_XP[1] - 1), 0);
  assert.equal(levelFor(LEVEL_XP[1]), 1);
  assert.equal(levelFor(LEVEL_XP[5]), 5);
  assert.equal(levelFor(99999), 5);
});

test('old saves without skills work', () => {
  const s = newGame(3);
  delete s.skills;
  assert.equal(skillLevel(s, 'cooking'), 0);
  assert.deepEqual(forceBonus(s), []);
  assert.equal(skillProgress(s, 'cooking').next, LEVEL_XP[1]);
});

test('practice raises the level and logs it once', () => {
  const s = newGame(3);
  const n0 = s.log.length;
  practice(s, 'tinkering', LEVEL_XP[1] - 1);
  assert.equal(s.log.length, n0);
  practice(s, 'tinkering', 1);
  assert.equal(skillLevel(s, 'tinkering'), 1);
  assert.match(s.log.at(-1).text, /Tinkering skill is now level 1/);
  assert.deepEqual(forceBonus(s), [['tinkering', 1]]);
});

test('tinkering shows in the odds to force a door', () => {
  const s = newGame(3);
  const a = odds(s, 12, forceBonus(s)).pct;
  practice(s, 'tinkering', LEVEL_XP[3]);
  const b = odds(s, 12, forceBonus(s)).pct;
  assert.equal(b - a, 15, `3 levels = +3 on d20 = +15% (${a} → ${b})`);
});

test('every book teaches a real skill and is in some loot table', () => {
  const books = Object.entries(ITEMS).filter(([, it]) => it.kind === 'book');
  assert.ok(books.length >= 4);
  const loot = new Set(Object.values(CATEGORIES).flatMap((c) => c.loot.map((l) => l.id)));
  for (const [id, it] of books) {
    assert.ok(SKILLS[it.skill], `${id}: ${it.skill}`);
    assert.ok(loot.has(id), `${id} is in no loot table`);
  }
});

test('reading a book teaches once, takes time and needs light', () => {
  const s = newGame(3);
  s.carried = { book_repair: 1 };
  assert.ok(itemUses(s, 'book_repair').some((u) => u.verb === 'read'));
  const t0 = s.time;
  perform(s, 'use', 'book_repair', 'read');
  assert.ok(s.time - t0 >= 119, 'reading takes about 2 hours');
  assert.equal(s.skills.xp.tinkering, BOOK_XP);
  assert.ok(hasRead(s, 'book_repair'));
  perform(s, 'use', 'book_repair', 'read');
  assert.equal(s.skills.xp.tinkering, BOOK_XP, 'a second read teaches nothing');
  assert.equal(s.carried.book_repair, 1, 'you keep the book');
});

test('searching gives scavenging xp, and scavenging makes searches faster', () => {
  setPlaces([{ id: 'sk1', name: 'Store', cat: 'supermarket', lat: 45.5, lon: -122.8 }]);
  const s = newGame(5);
  s.location = { kind: 'place', id: 'sk1' };
  const m0 = searchMinutes(s, 20, false);
  perform(s, 'action', 'search', 0);
  assert.ok(s.skills.xp.scavenging >= 1); // half xp per use (SCAV_XP)
  practice(s, 'scavenging', LEVEL_XP[2]);
  assert.ok(searchMinutes(s, 20, false) < m0);
});

test('scavenging changes what you notice', () => {
  const s = newGame(3);
  assert.equal(noticeOf(s).countRadius, 0);
  assert.equal(noticeOf(s).boxCount, false);
  practice(s, 'scavenging', LEVEL_XP[2]);
  assert.ok(noticeOf(s).countRadius > 0);
  assert.equal(noticeOf(s).boxCount, true);
});

test('cooking and fire give xp at home; a skilled fire burns longer', () => {
  const s = newGame(5);
  perform(s, 'action', 'collect_tap');
  perform(s, 'action', 'boil');
  assert.ok(s.skills.xp.cooking >= 2);
  const h0 = s.home.fireHours;
  perform(s, 'action', 'add_wood');
  const plain = s.home.fireHours - h0;
  assert.ok(s.skills.xp.survival >= 2);
  const s2 = newGame(5);
  practice(s2, 'survival', LEVEL_XP[5]);
  const h1 = s2.home.fireHours;
  perform(s2, 'action', 'add_wood');
  assert.ok(s2.home.fireHours - h1 > plain, `${s2.home.fireHours - h1} > ${plain}`);
});

test('repeating one skill all day gives half xp after the daily limit', () => {
  const s = newGame(3);
  for (let i = 0; i < DAILY_FULL; i++) practice(s, 'cooking', 1);
  assert.equal(s.skills.xp.cooking, DAILY_FULL);
  practice(s, 'cooking', 2);
  assert.equal(s.skills.xp.cooking, DAILY_FULL + 1);
  s.time += 1440;
  practice(s, 'cooking', 2);
  assert.equal(s.skills.xp.cooking, DAILY_FULL + 3, 'a new day resets the count');
});
