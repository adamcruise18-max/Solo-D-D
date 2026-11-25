// Legacy board rules (research feature 24). The player picks up to 3 goals from
// src/data/legacy-goals.js. Steps are checked from the game state: the first time a
// step's check is true, it is done for good (one journal line, a little morale).
//
// State: state.player.goals = { picked: [goalId], done: { goalId: [stepId] }, changedDay }
// (created on first use, so old saves need no migration).
import { GOALS, GOAL_KINDS } from '../data/legacy-goals.js';
import { gameDay } from '../core/clock.js';
import { log } from './state.js';

export const MAX_GOALS = 3;
export const BOARD_OPENS_DAY = 7; // after the first week, when the player is stable
export const CHANGE_GAP_DAYS = 30; // drop a goal at most once per 30 days
export const STEP_MORALE = 3;

const byId = new Map(GOALS.map((g) => [g.id, g]));
export const goalById = (id) => byId.get(id);

export function ensureGoals(state) {
  const p = state.player;
  if (!p.goals) p.goals = { picked: [], done: {}, changedDay: null };
  return p.goals;
}

export const boardOpen = (state) => gameDay(state.time) >= BOARD_OPENS_DAY;

// Can the player drop a goal now? (Picking into a free slot is always allowed.)
export function canChange(state) {
  const g = ensureGoals(state);
  return g.changedDay == null || gameDay(state.time) - g.changedDay >= CHANGE_GAP_DAYS;
}

export function pickGoal(state, id) {
  const g = ensureGoals(state);
  if (!boardOpen(state)) return `The board opens on day ${BOARD_OPENS_DAY + 1}. First, stay alive.`;
  if (!byId.has(id)) return 'Unknown goal.';
  if (g.picked.includes(id)) return 'You already work on this.';
  if (g.picked.length >= MAX_GOALS) return `You can work on ${MAX_GOALS} goals at a time.`;
  g.picked.push(id);
  g.done[id] ||= [];
  log(state, `You choose a goal: ${byId.get(id).title}. ${byId.get(id).why}`, 'story');
  checkGoals(state); // steps already true count at once
  return null;
}

// Drop a goal (steps already done are kept, in case you take it up again).
export function dropGoal(state, id) {
  const g = ensureGoals(state);
  if (!g.picked.includes(id)) return 'You do not work on this.';
  if (!canChange(state)) return `You can change a goal again in ${CHANGE_GAP_DAYS - (gameDay(state.time) - g.changedDay)} days.`;
  g.picked = g.picked.filter((x) => x !== id);
  g.changedDay = gameDay(state.time);
  log(state, `You put the goal aside: ${byId.get(id).title}.`);
  return null;
}

// Mark newly true steps of the picked goals. Returns the steps done now.
export function checkGoals(state) {
  const g = state.player.goals;
  if (!g || !g.picked.length || state.dead) return [];
  const now = [];
  for (const id of g.picked) {
    const goal = byId.get(id);
    if (!goal) continue;
    const done = (g.done[id] ||= []);
    for (const st of goal.steps) {
      if (done.includes(st.id)) continue;
      let ok = false;
      try { ok = !!st.check(state); } catch { ok = false; }
      if (!ok) continue;
      done.push(st.id);
      state.player.morale = Math.min(100, state.player.morale + STEP_MORALE);
      const all = done.length === goal.steps.length;
      log(state, all ? `${goal.title}: done. ${goal.epilogue.all}` : `${goal.title}: ${st.text} (step ${done.length} of ${goal.steps.length}).`, 'good');
      now.push({ goal: id, step: st.id });
    }
  }
  return now;
}

export function goalProgress(state, id) {
  const goal = byId.get(id);
  const done = state.player.goals?.done?.[id] || [];
  return { goal, done: done.length, total: goal.steps.length, steps: goal.steps.map((s) => ({ ...s, done: done.includes(s.id) })) };
}

// End of the run: one plain line per goal the player worked on.
export function epilogue(state) {
  const g = state.player.goals;
  if (!g) return [];
  const ids = [...new Set([...g.picked, ...Object.keys(g.done).filter((k) => g.done[k].length)])];
  return ids.filter((id) => byId.has(id)).map((id) => {
    const { goal, done, total } = goalProgress(state, id);
    const line = done === 0 ? goal.epilogue.none : done === total ? goal.epilogue.all : goal.epilogue.some;
    return { id, title: goal.title, kind: GOAL_KINDS[goal.kind].label, done, total, line };
  });
}
