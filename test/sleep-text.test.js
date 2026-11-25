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
  sleep(s, 1);
  assert.ok(s.log.some((l) => /by the fire/.test(l.text || l)));
});
