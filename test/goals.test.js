import test from 'node:test';
import assert from 'node:assert/strict';
import { newGame } from '../src/engine/state.js';
import { GOALS, GOAL_KINDS } from '../src/data/legacy-goals.js';
import { ITEMS } from '../src/data/items.js';
import { PROJECTS } from '../src/data/projects.js';
import { pickGoal, dropGoal, checkGoals, epilogue, BOARD_OPENS_DAY, MAX_GOALS, CHANGE_GAP_DAYS } from '../src/engine/goals.js';
import { readFileSync } from 'node:fs';

const day = (s, d) => { s.time = d * 1440 + 9 * 60; };

test('goals: data is valid, and every item and project named exists', () => {
  const src = readFileSync(new URL('../src/data/legacy-goals.js', import.meta.url), 'utf8');
  for (const m of src.matchAll(/stored\(s, '([a-z_]+)'\)/g)) assert.ok(ITEMS[m[1]], `item ${m[1]}`);
  const projIds = new Set((Array.isArray(PROJECTS) ? PROJECTS : Object.values(PROJECTS)).map((p) => p.id));
  for (const m of src.matchAll(/built\(s, '([a-z_]+)'\)/g)) assert.ok(projIds.has(m[1]), `project ${m[1]}`);
  const ids = new Set();
  for (const g of GOALS) {
    assert.ok(!ids.has(g.id)); ids.add(g.id);
    assert.ok(GOAL_KINDS[g.kind], g.id);
    assert.ok(g.steps.length >= 4 && g.steps.length <= 10, g.id);
    assert.ok(g.epilogue.none && g.epilogue.some && g.epilogue.all, g.id);
    const s = newGame(1);
    for (const st of g.steps) st.check(s); // runs on a new game
  }
  for (const k of Object.keys(GOAL_KINDS)) assert.ok(GOALS.some((g) => g.kind === k), k);
});

test('goals: the board opens after a week; max 3 goals; change once per 30 days', () => {
  const s = newGame(2);
  assert.ok(pickGoal(s, 'seed_bank'));
  day(s, BOARD_OPENS_DAY);
  assert.equal(pickGoal(s, 'seed_bank'), null);
  assert.equal(pickGoal(s, 'radio'), null);
  assert.equal(pickGoal(s, 'city_atlas'), null);
  assert.ok(pickGoal(s, 'time_capsule'), `max ${MAX_GOALS}`);
  assert.equal(dropGoal(s, 'radio'), null);
  assert.ok(dropGoal(s, 'city_atlas'), 'second change too soon');
  day(s, BOARD_OPENS_DAY + CHANGE_GAP_DAYS);
  assert.equal(dropGoal(s, 'city_atlas'), null);
});

test('goals: steps count once, give morale, and keep after a drop; epilogue lines', () => {
  const s = newGame(3);
  day(s, BOARD_OPENS_DAY);
  pickGoal(s, 'seed_bank');
  const m0 = s.player.morale;
  s.home.storage.seeds = 5;
  const now = checkGoals(s);
  assert.deepEqual(now.map((x) => x.step), ['seeds_1', 'seeds_5']);
  assert.equal(s.player.morale, Math.min(100, m0 + 6));
  assert.equal(checkGoals(s).length, 0);
  s.home.storage.seeds = 0; // used up: still done
  assert.equal(s.player.goals.done.seed_bank.length, 2);
  let ep = epilogue(s);
  assert.equal(ep[0].line, GOALS.find((g) => g.id === 'seed_bank').epilogue.some);
  pickGoal(s, 'radio');
  ep = epilogue(s);
  assert.equal(ep.find((e) => e.id === 'radio').line, GOALS.find((g) => g.id === 'radio').epilogue.none);
});
