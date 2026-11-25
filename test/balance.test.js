// Balance guard (external review milestone 6): a careful player must be able to
// live through the first weeks. If a rule change starves the careful player,
// this fails, and npm run sim -- --smart shows the details.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { loadPlaces, playRun } from '../tools/bot.mjs';

test('balance: a careful player is alive at day 21 (3 seeds)', () => {
  loadPlaces();
  for (const seed of [1, 2, 3]) {
    const r = playRun(seed, { maxDays: 21, smart: true, maxTurns: 21 * 600 });
    assert.equal(r.cause, null, `seed ${seed}: died on day ${r.days} of ${r.cause}`);
    assert.ok(r.days >= 21, `seed ${seed}: reached day ${r.days} only`);
  }
});
