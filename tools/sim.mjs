// Headless simulation: the bot plays many runs fast with the real rules.
// Use it to see how a rule change moves survival time and causes of death.
//   npm run sim                 (20 runs, 60 days max)
//   npm run sim -- --runs 100 --days 120 --json
import { loadPlaces, playRun } from './bot.mjs';

const args = process.argv.slice(2);
const opt = (name, def) => { const i = args.indexOf(`--${name}`); return i >= 0 ? Number(args[i + 1]) : def; };
const runs = opt('runs', 20);
const maxDays = opt('days', 60);
const first = opt('seed', 1);

loadPlaces();
const t0 = Date.now();
const results = [];
for (let i = 0; i < runs; i++) {
  const r = playRun(first + i, { maxDays });
  delete r.state;
  results.push(r);
}
const ms = Date.now() - t0;
const days = results.map((r) => r.days).sort((a, b) => a - b);
const causes = {};
for (const r of results) { const c = r.cause || `alive at day ${maxDays}`; causes[c] = (causes[c] || 0) + 1; }
const summary = {
  runs, maxDays,
  medianDays: days[Math.floor(days.length / 2)],
  minDays: days[0], maxDaysSurvived: days[days.length - 1],
  causes, ms,
};
if (args.includes('--json')) console.log(JSON.stringify({ summary, results }, null, 2));
else {
  console.log(`Bot runs: ${runs}, up to ${maxDays} days, ${ms} ms`);
  console.log(`Days survived: median ${summary.medianDays}, min ${summary.minDays}, max ${summary.maxDaysSurvived}`);
  for (const [c, n] of Object.entries(causes).sort((a, b) => b[1] - a[1])) console.log(`  ${n} x ${c}`);
}
