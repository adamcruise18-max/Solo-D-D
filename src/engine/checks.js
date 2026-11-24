// Visible d20 risk checks (D&D feel). Roll d20 + modifiers vs DC.
// Natural 1 always fails, natural 20 always succeeds.
import { randInt } from '../rng.js';
import { log } from './state.js';
import { isNight } from './world.js';

export function standardMods(state, { outside = false } = {}) {
  const p = state.player;
  const mods = [];
  if (p.energy < 50) mods.push(['tired', -2]);
  if (p.water < 25) mods.push(['very thirsty', -2]);
  if (p.warmth < 25) mods.push(['hypothermia', -3]);
  if (p.health < 25) mods.push(['badly hurt', -3]);
  if (p.morale < 25) mods.push(['despair', -2]);
  const limb = p.injuries.some((i) => i.type === 'sprain' || i.type === 'deep_cut');
  if (limb && p.painH <= 0) mods.push(['injured', -3]);
  if (outside && !isNight(state.time)) mods.push(['daylight', +1]);
  return mods;
}

export function check(state, label, dc, extraMods = [], opts = {}) {
  const mods = [...standardMods(state, opts), ...extraMods];
  if (opts.outside && isNight(state.time)) dc += 3;
  const roll = randInt(state, 1, 20);
  const total = roll + mods.reduce((s, m) => s + m[1], 0);
  const success = roll === 20 ? true : roll === 1 ? false : total >= dc;
  const modText = mods.map(([n, v]) => ` ${v >= 0 ? '+' : '−'} ${Math.abs(v)} (${n})`).join('');
  const note = roll === 20 ? ' natural 20!' : roll === 1 ? ' natural 1!' : '';
  log(state, `🎲 ${label}: d20 ${roll}${modText} = ${total} vs DC ${dc} → ${success ? 'SUCCESS' : 'FAIL'}${note}`, success ? 'roll-ok' : 'roll-fail');
  return { roll, total, dc, success };
}

// The chance to pass a check, before you roll (QoL: show the odds first).
// Same rules as check(): natural 1 fails, natural 20 passes.
export function odds(state, dc, extraMods = [], opts = {}) {
  const mods = [...standardMods(state, opts), ...extraMods];
  if (opts.outside && isNight(state.time)) dc += 3;
  const sum = mods.reduce((s, m) => s + m[1], 0);
  let ok = 0;
  for (let roll = 1; roll <= 20; roll++) if (roll === 20 || (roll !== 1 && roll + sum >= dc)) ok += 1;
  return { dc, mods, sum, pct: ok * 5 };
}

// Short text for a button: "d20 −3 injured vs DC 12 · 45%". At most 3 modifiers, biggest first.
export function oddsText(o) {
  const top = [...o.mods].sort((a, b) => Math.abs(b[1]) - Math.abs(a[1]));
  const shown = top.slice(0, 3).map(([n, v]) => ` ${v >= 0 ? '+' : '−'}${Math.abs(v)} ${n}`).join('');
  const more = top.length > 3 ? ` (+${top.length - 3} more)` : '';
  return `d20${shown}${more} vs DC ${o.dc} · ${o.pct}%`;
}
