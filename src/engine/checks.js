// Visible d20 risk checks (D&D feel). Roll d20 + modifiers vs DC, with advantage or disadvantage.
// Natural 1 always fails, natural 20 always succeeds.
import { randInt } from '../rng.js';
import { log } from './state.js';
import { isNight } from './world.js';

export function standardMods(state, { outside = false } = {}) {
  const p = state.player;
  const mods = [];
  if (p.energy < 50 && p.energy >= 25) mods.push(['tired', -2]);
  if (p.water < 25) mods.push(['very thirsty', -2]);
  if (p.warmth < 25) mods.push(['hypothermia', -3]);
  if (p.health < 25) mods.push(['badly hurt', -3]);
  if (p.morale < 25) mods.push(['despair', -2]);
  return mods;
}

// Advantage (roll 2d20, keep the higher) and disadvantage (keep the lower). One of each cancels.
// opts.outside: weather and light count. opts.adv / opts.dis: extra reasons from the caller
// (for example the right tool).
const RAIN = ['rain', 'heavy_rain', 'windstorm', 'ice_storm'];
export function edges(state, opts = {}) {
  const p = state.player;
  const adv = [...(opts.adv || [])];
  const dis = [...(opts.dis || [])];
  if (opts.outside && !isNight(state.time)) adv.push('daylight');
  const d = state.dog;
  if (opts.outside && d && d.stage === 'joined' && d.withPlayer && d.bond >= 50) adv.push(`${d.name || 'dog'} helps`);
  const limb = p.injuries.some((i) => i.type === 'sprain' || i.type === 'deep_cut');
  if (limb && p.painH <= 0) dis.push('injured');
  if (opts.outside && state.weather && RAIN.includes(state.weather.type)) dis.push('rain');
  if (opts.outside && isNight(state.time)) dis.push('night');
  if (p.energy < 25) dis.push('very tired');
  const mode = adv.length && !dis.length ? 'adv' : dis.length && !adv.length ? 'dis' : 'normal';
  return { mode, adv, dis };
}

export function check(state, label, dc, extraMods = [], opts = {}) {
  const mods = [...standardMods(state, opts), ...extraMods];
  const e = edges(state, opts);
  const a = randInt(state, 1, 20);
  const b = e.mode === 'normal' ? a : randInt(state, 1, 20);
  const roll = e.mode === 'adv' ? Math.max(a, b) : e.mode === 'dis' ? Math.min(a, b) : a;
  const total = roll + mods.reduce((s, m) => s + m[1], 0);
  const success = roll === 20 ? true : roll === 1 ? false : total >= dc;
  const modText = mods.map(([n, v]) => ` ${v >= 0 ? '+' : '−'} ${Math.abs(v)} (${n})`).join('');
  const edgeText = e.mode === 'adv' ? ` [adv.: ${e.adv.join(', ')}; ${a} and ${b}]` : e.mode === 'dis' ? ` [disadv.: ${e.dis.join(', ')}; ${a} and ${b}]` : '';
  const note = roll === 20 ? ' natural 20!' : roll === 1 ? ' natural 1!' : '';
  log(state, `🎲 ${label}: d20 ${roll}${edgeText}${modText} = ${total} vs DC ${dc} → ${success ? 'SUCCESS' : 'FAIL'}${note}`, success ? 'roll-ok' : 'roll-fail');
  return { roll, total, dc, success, mode: e.mode };
}

// The chance to pass a check, before you roll (QoL: show the odds first).
// Same rules as check(): natural 1 fails, natural 20 passes.
export function odds(state, dc, extraMods = [], opts = {}) {
  const mods = [...standardMods(state, opts), ...extraMods];
  const e = edges(state, opts);
  const sum = mods.reduce((s, m) => s + m[1], 0);
  let ok = 0;
  for (let roll = 1; roll <= 20; roll++) if (roll === 20 || (roll !== 1 && roll + sum >= dc)) ok += 1;
  const p1 = ok / 20;
  const p = e.mode === 'adv' ? 1 - (1 - p1) ** 2 : e.mode === 'dis' ? p1 * p1 : p1;
  return { dc, mods, sum, pct: Math.round(p * 100), mode: e.mode, adv: e.adv, dis: e.dis };
}

// Short text for a button: "d20 −3 injured vs DC 12 · 45%". At most 3 modifiers, biggest first.
export function oddsText(o) {
  const top = [...o.mods].sort((a, b) => Math.abs(b[1]) - Math.abs(a[1]));
  const shown = top.slice(0, 3).map(([n, v]) => ` ${v >= 0 ? '+' : '−'}${Math.abs(v)} ${n}`).join('');
  const more = top.length > 3 ? ` (+${top.length - 3} more)` : '';
  const edge = o.mode === 'adv' ? ` adv. (${o.adv.join(', ')})` : o.mode === 'dis' ? ` disadv. (${o.dis.join(', ')})` : '';
  return `d20${edge}${shown}${more} vs DC ${o.dc} · ${o.pct}%`;
}
