import test from 'node:test';
import assert from 'node:assert/strict';
import { newGame } from '../src/engine/state.js';
import { enterHouse, enterNearbyHouse } from '../src/engine/actions.js';

test('enterHouse: a real building id makes a house once; a second visit walks back in', () => {
  const s = newGame(9);
  const pos = { lat: s.pos.lat + 0.001, lon: s.pos.lon };
  enterHouse(s, 'osm:123', '12 Elm St', pos, { walkText: 'You walk to the house' });
  assert.equal(s.location.kind, 'house');
  assert.equal(s.location.id, 'osm:123');
  assert.ok(s.houses['osm:123']);
  assert.deepEqual(s.pos, pos);
  const searched = s.stats.housesSearched;
  s.location = s.location.parent;
  enterHouse(s, 'osm:123', '12 Elm St', pos);
  assert.equal(s.stats.housesSearched, searched, 'no second entry roll');
  assert.equal(s.log.at(-1).text, 'You go back into the house.');
});

test('enterNearbyHouse: still makes a new numbered house each time', () => {
  const s = newGame(9);
  enterNearbyHouse(s);
  const a = s.location.id;
  s.location = s.location.parent;
  enterNearbyHouse(s);
  assert.notEqual(s.location.id, a);
  assert.equal(s.stats.housesSearched, 2);
});
