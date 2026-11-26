// Clothes in layers, wetness and the "feels like" number.
// Slots: base (next to the skin), mid (the warm layer), shell (wind and rain), hat, gloves, boots, socks,
// back (a backpack: no warmth; it makes the pack grid bigger, see packgrid.js).
// Each worn item has warmth (°F felt), wind (0..1: how much wind it blocks), and
// wetWarm (wool, fleece and synthetics keep heat when wet; cotton and down do not).
// In a Portland winter, wet is the main danger, not deep cold.
//
// state.player.worn = { slot: itemId | false }. Old saves have true/false per old slot name:
// normalizeWorn() changes them once (coat -> mid winter_coat, rain -> shell rain_jacket, ...).
// state.player.wetness = 0..100. player.wet stays as "wetness >= 50" for older code and saves.
import { ITEMS } from '../data/items.js';

export const SLOTS = ['base', 'mid', 'shell', 'hat', 'gloves', 'boots', 'socks', 'back'];
export const SLOT_NAMES = { base: 'Base layer', mid: 'Warm layer', shell: 'Shell', hat: 'Hat', gloves: 'Gloves', boots: 'Boots', socks: 'Socks', back: 'Backpack' };
// Your own everyday clothes (cotton): always there, under everything.
export const NORMAL_CLOTHES = { warmth: 10, wind: 0.1, wetWarm: false };
const OLD = { coat: ['mid', 'winter_coat'], rain: ['shell', 'rain_jacket'], hat: ['hat', 'winter_hat'], gloves: ['gloves', 'gloves'], boots: ['boots', 'boots'], socks: ['socks', 'wool_socks'] };
export const WET_LIMIT = 50;

export function normalizeWorn(p) {
  const w = p.worn || {};
  if (!w._v) {
    const next = { _v: 2 };
    for (const s of SLOTS) next[s] = false;
    for (const [old, [slot, id]] of Object.entries(OLD)) if (w[old] === true) next[slot] = id;
    // A save that already has the new shape (no _v by accident): keep item ids.
    for (const s of SLOTS) if (typeof w[s] === 'string' && ITEMS[w[s]]) next[s] = w[s];
    p.worn = next;
  }
  if (typeof p.wetness !== 'number') p.wetness = p.wet ? 80 : 0;
  return p.worn;
}

export function wornItems(p) {
  const w = normalizeWorn(p);
  return SLOTS.filter((s) => w[s]).map((s) => ({ slot: s, id: w[s], it: ITEMS[w[s]] }));
}

// How much warmer you feel from what you wear (°F). Wet clothes that do not keep heat when
// wet lose up to half their warmth (at wetness 100).
export function clothingWarmth(p) {
  const wet = Math.min(1, (p.wetness ?? (p.wet ? 80 : 0)) / 100);
  const part = (warmth, wetWarm) => warmth * (wetWarm ? 1 - 0.15 * wet : 1 - 0.5 * wet);
  let r = part(NORMAL_CLOTHES.warmth, false);
  for (const { it } of wornItems(p)) r += part(it.warmth || 0, !!it.wetWarm);
  return r;
}

// The share of the wind your clothes stop (the best layer counts).
export function windBlock(p) {
  return Math.max(NORMAL_CLOTHES.wind, ...wornItems(p).map(({ it }) => it.wind || 0));
}

// How fast you get wet outside, per hour, from the weather (wetAfter: minutes to wet through).
// A waterproof shell keeps out most rain; heavy rain gets in at the neck and cuffs.
export function wetGainPerHour(p, weatherType, wetAfter) {
  if (!wetAfter) return 0;
  const base = (WET_LIMIT / wetAfter) * 60;
  const shell = wornItems(p).find(({ slot }) => slot === 'shell');
  if (shell && shell.it.waterproof) return base * (weatherType === 'heavy_rain' ? 0.4 : 0.1);
  return base;
}

// How fast clothes dry inside, per hour: fast by a fire, slow in a cold room.
export function dryPerHour(temp, byFire) {
  if (byFire) return 40;
  if (temp >= 55) return 15;
  if (temp >= 40) return 6;
  return 2;
}

// Put on a piece of clothing. The piece in that slot goes back into the bag. Returns the old id.
export function putOn(p, id) {
  const it = ITEMS[id];
  if (!it || it.kind !== 'wear' || !SLOTS.includes(it.slot)) return null;
  const w = normalizeWorn(p);
  const old = w[it.slot] || null;
  w[it.slot] = id;
  return old;
}

export function takeOff(p, slot) {
  const w = normalizeWorn(p);
  const old = w[slot] || null;
  w[slot] = false;
  return old;
}

// Short text: "thermal base, fleece, rain jacket, hat".
export function wornText(p) {
  const list = wornItems(p).map(({ it }) => it.short || it.name.toLowerCase());
  return list.length ? list.join(', ') : 'normal clothes';
}
