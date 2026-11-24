import test from 'node:test';
import assert from 'node:assert/strict';
import { newGame, log } from '../src/engine/state.js';

test('the journal writes one record per day from the log', () => {
  const s = newGame(8);
  s.journal = [];
  s.time = 1440 * 2 + 600;
  log(s, 'You arrive at WinCo Foods.', 'travel');
  log(s, 'You take: Canned food.');
  log(s, 'You take: Bottled water (1 gal).');
  log(s, 'Injury: Small cut (Health −5).', 'danger');
  log(s, 'You search the aisle 2. You find: Batteries (1 set).', 'good');
  s.time += 1440;
  log(s, 'You arrive at Walgreens.', 'travel');
  assert.equal(s.journal.length, 2);
  assert.deepEqual(s.journal[0], { day: 2, places: ['WinCo Foods'], taken: 2, searched: 1, events: ['Injury: Small cut (Health −5).'] });
  assert.deepEqual(s.journal[1].places, ['Walgreens']);
});
