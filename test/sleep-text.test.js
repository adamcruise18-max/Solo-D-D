import test from 'node:test';
import assert from 'node:assert/strict';
import { newGame } from '../src/engine/state.js';
import { sleep } from '../src/engine/actions.js';
import { setSleepSpot } from '../src/engine/home.js';

test('sleep journal names the chosen sleep spot', () => {
  const s = newGame(5);
  s.location = { kind: 'home' };
  sleep(s, 1);
  assert.ok(s.log.some((l) => /in your bed/.test(l.text || l)));
  setSleepSpot(s, 'living');
  s.home.fireHours = 0;
  sleep(s, 1);
  assert.ok(s.log.some((l) => /on the couch/.test(l.text || l)), 'no fire: the couch');
  s.home.fireHours = 5;
  sleep(s, 1);
  assert.ok(s.log.some((l) => /by the fire/.test(l.text || l)));
});
