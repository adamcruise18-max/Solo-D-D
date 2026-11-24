// Replay test: the bot plays fixed seeds for 30 days; the numbers must match
// test/golden/replay.json, and each turn must match test/golden/trace.json.
// On a change, the message names the first turn, action, time and state path.
// Re-record only when a rule change is meant:
//   npm run replay -- --record
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { replayAll, readGolden, readTrace, firstDivergence, describeDivergence, SEEDS } from '../tools/replay.mjs';

const { seeds: now, traces } = replayAll({ withTrace: true });

test('replay: the bot game for fixed seeds matches the golden file', () => {
  const golden = readGolden();
  assert.ok(golden, 'No golden file. Run: npm run replay -- --record');
  for (const seed of SEEDS) {
    const a = golden.seeds[seed];
    const b = now[seed];
    const i = a.findIndex((v, k) => v !== b[k]);
    assert.equal(i, -1, `Seed ${seed} changed at snapshot ${i}:\n was ${a[i]}\n now ${b[i]}\nIf this rule change is meant, run: npm run replay -- --record`);
    assert.equal(a.length, b.length);
  }
});

test('replay: each bot turn matches the golden trace (first change is named)', () => {
  const golden = readTrace();
  assert.ok(golden, 'No golden trace. Run: npm run replay -- --record');
  for (const seed of SEEDS) {
    const d = firstDivergence(golden.seeds[seed], traces[seed]);
    assert.equal(d, null, `${describeDivergence(seed, d)}\nIf this rule change is meant, run: npm run replay -- --record`);
  }
});

test('replay: firstDivergence names the changed path and the action', () => {
  const was = ['0|rest|300|310|10|1>2|player.food=a,time=b', '1|search|310|340|30|2>3|player.food=c,time=d'];
  const now = ['0|rest|300|310|10|1>2|player.food=a,time=b', '1|search|310|340|30|2>3|player.food=x,time=d'];
  const d = firstDivergence(was, now);
  assert.equal(d.turn, 1);
  assert.equal(d.action.now, 'search');
  assert.deepEqual(d.paths, ['player.food']);
  assert.equal(firstDivergence(was, was), null);
  // A shorter run (for example an earlier death) is a divergence too.
  assert.equal(firstDivergence(was, was.slice(0, 1)).turn, 1);
});
