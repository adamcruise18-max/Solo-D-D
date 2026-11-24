// Clear status (QoL step 2): each need has 4 stages, and each stage states its effect.
// The effects here describe the rules in tick.js and checks.js. Keep them in step.
import { feltTemp, warmthRate } from './tick.js';

// [min value, word, effect]. The first row whose min the value reaches is the stage.
const STAGES = {
  food: [
    [50, '', ''],
    [25, 'Hungry', 'Below 25: wounds heal at half speed and health stops refilling.'],
    [0.01, 'Very hungry', 'Wounds heal at half speed. Health does not refill. Sleep rests you less.'],
    [0, 'Starving', 'You lose health every hour.'],
  ],
  water: [
    [50, '', ''],
    [25, 'Thirsty', 'Below 25: −2 on d20 rolls and health stops refilling.'],
    [0.01, 'Very thirsty', '−2 on d20 rolls. Wounds heal at half speed. Health does not refill.'],
    [0, 'Dehydrated', 'You lose 2 health every hour.'],
  ],
  warmth: [
    [50, '', ''],
    [25, 'Cold', 'You get hungry and tired faster.'],
    [0.01, 'Hypothermia', '−3 on d20 rolls. Health does not refill.'],
    [0, 'Freezing', 'You lose 5 health every hour.'],
  ],
  energy: [
    [50, '', ''],
    [25, 'Tired', '−2 on d20 rolls.'],
    [0.01, 'Exhausted', '−2 on d20 rolls. Sleep soon.'],
    [0, 'Asleep', 'You fall asleep where you are.'],
  ],
  health: [
    [50, '', ''],
    [25, 'Hurt', 'Sleep rests you less.'],
    [0.01, 'Badly hurt', '−3 on d20 rolls. Sleep rests you less.'],
    [0, 'Dead', ''],
  ],
  morale: [
    [50, '', ''],
    [25, 'Low', 'Sleep rests you less.'],
    [0.01, 'Despair', '−2 on d20 rolls. Sleep rests you less.'],
    [0, 'Despair', '−2 on d20 rolls. Sleep rests you less.'],
  ],
};

// stage 0 = fine (no icon), 1, 2, 3 = worse.
export function statStage(key, v) {
  const rows = STAGES[key];
  for (let i = 0; i < rows.length; i++) if (v >= rows[i][0]) return { stage: i, word: rows[i][1], effect: rows[i][2] };
  const last = rows.length - 1;
  return { stage: last, word: rows[last][1], effect: rows[last][2] };
}

// Needs past the first limit, worst first: [{ key, stage, word, effect }].
export function needWarnings(state) {
  const p = state.player;
  return Object.keys(STAGES)
    .map((key) => ({ key, ...statStage(key, p[key]) }))
    .filter((s) => s.stage > 0 && s.word)
    .sort((a, b) => b.stage - a.stage);
}

// Yellow risk warnings before an illness starts: [{ id, text }].
export function risks(state) {
  const p = state.player;
  const out = [];
  // Open wounds: each unbandaged wound can get infected (once after 6 h, then each day).
  if (!p.illness.infection) {
    const open = p.injuries.filter((i) => !i.bandaged && i.infectRisk);
    if (open.length) {
      const pct = Math.round((1 - open.reduce((q, i) => q * (1 - i.infectRisk), 1)) * 100);
      out.push({ id: 'infection', text: `Infection risk ${pct}% a day: bandage the open wound${open.length > 1 ? 's' : ''}` });
    }
  }
  // Cold: hours until hypothermia (warmth under 25) at this rate.
  const rate = warmthRate(feltTemp(state, 'rest'));
  if (p.warmth >= 25 && p.warmth < 60 && rate < 0) {
    const h = (p.warmth - 25) / -rate;
    out.push({ id: 'hypothermia', text: `Hypothermia in about ${h < 1 ? `${Math.max(5, Math.round(h * 60 / 5) * 5)} min` : `${Math.round(h)} h`} here: get warm` });
  }
  if (p.water >= 25 && p.water < 40) out.push({ id: 'dehydration', text: 'Water is low: drink soon' });
  if (p.food >= 25 && p.food < 35) out.push({ id: 'hunger', text: 'Food is low: eat soon' });
  return out;
}

// Chance of raw (unboiled) water giving a stomach bug. Same number as actions.js.
export const RAW_WATER_SICK = 0.3;
