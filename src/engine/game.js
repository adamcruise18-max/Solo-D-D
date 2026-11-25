// Runs one player action and the checks that follow it.
import { doAction, useItem, takeItem, takeAll, dropItem, nameDog } from './actions.js';
import { advanceTime } from './tick.js';
import { log } from './state.js';
import { activity } from './activity.js';

export function perform(state, kind, a, b, c) {
  if (state.dead) return;
  activity.begin(state, [kind, a, b].filter((v) => v != null && typeof v !== 'object').join(':'));
  try {
    run(state, kind, a, b, c);
  } finally {
    activity.end(state);
  }
}

function run(state, kind, a, b, c) {
  switch (kind) {
    case 'action': doAction(state, a, b); break;
    case 'use': useItem(state, a, b, c); break;
    case 'take': takeItem(state, a, b); break;
    case 'takeall': takeAll(state); break;
    case 'drop': dropItem(state, a, b); break;
    case 'namedog': nameDog(state, a); break;
    default:
  }
  afterAction(state);
}

function afterAction(state) {
  const p = state.player;
  if (!state.dead && p.energy <= 0) {
    log(state, 'You are too tired to stay awake. You fall asleep where you are.', 'warn');
    advanceTime(state, 240, 'sleep');
  }
}
