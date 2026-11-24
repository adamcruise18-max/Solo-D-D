// Replay test: the bot plays fixed seeds for 30 days; the numbers must match
// test/golden/replay.json. Re-record only when a rule change is meant:
//   npm run replay -- --record
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { replayAll, readGolden, SEEDS } from '../tools/replay.mjs';

test('replay: the bot game for fixed seeds matches the golden file', () => {
  const golden = readGolden();
  assert.ok(golden, 'No golden file. Run: npm run replay -- --record');
  const now = replayAll();
  for (const seed of SEEDS) {
    const a = golden.seeds[seed];
    const b = now[seed];
    const i = a.findIndex((v, k) => v !== b[k]);
    assert.equal(i, -1, `Seed ${seed} changed at snapshot ${i}:\n was ${a[i]}\n now ${b[i]}\nIf this rule change is meant, run: npm run replay -- --record`);
    assert.equal(a.length, b.length);
  }
});
