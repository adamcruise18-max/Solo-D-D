// Diagnostics for the F3 view and for agents (external review 3.4, milestone 3):
// one plain object with the state of each system, the random streams and the
// recent activity. Read only: it never changes the state.
import { activity } from './activity.js';
import { pacerInfo } from './pacer.js';
import { decayInfo } from './decay.js';
import { weatherInfo } from './world.js';
import { gameSystems } from './systems.js';
import { dayIndex } from './state.js';

export function diagnostics(state, { records = 20 } = {}) {
  const w = state.weather || {};
  let saveBytes = null;
  try { saveBytes = JSON.stringify(state).length; } catch { /* a state that cannot be saved shows as null */ }
  return {
    day: dayIndex(state.time) + 1,
    time: state.time,
    weather: {
      type: w.type,
      label: weatherInfo(state)?.label || w.type,
      high: Math.round(w.high),
      low: Math.round(w.low),
      wind: w.wind,
      spell: w.spell ? { id: w.spell.id, daysLeft: w.spell.daysLeft } : null,
      baseType: w.baseType || w.type,
    },
    pacer: pacerInfo(state),
    decay: decayInfo(state),
    systems: gameSystems().list().map((s) => ({ id: s.id, order: s.order, version: s.version, saved: state.systemVersions?.[s.id] ?? null, catchUp: s.catchUp || null })),
    rng: { shared: state.rngState, streams: { ...(state.rngStreams || {}) } },
    saveBytes,
    deep: activity.isDeep(),
    activity: activity.records(records),
  };
}

// Turn the changed-paths list on or off (the F3 view calls this when it opens).
export function setDeepActivity(on) {
  activity.setDeep(on);
}

// One record as short text lines, for the F3 view or a bug report.
export function activityText(r) {
  const head = `#${r.n} ${r.action} (${r.minutes} min)`;
  const rng = r.rng ? [r.rng.shared ? 'game rng' : null, ...r.rng.streams].filter(Boolean).join(', ') : '';
  const out = [head];
  for (const l of r.lines) out.push(`  [${l.sys ? `${l.sys}.${l.hook}` : 'action'}] ${l.text}`);
  if (rng) out.push(`  rng: ${rng}`);
  if (r.changed) out.push(`  changed: ${r.changed.join(', ') || '(none)'}`);
  return out.join('\n');
}
