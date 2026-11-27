// Sound (Adam, 2026-11-27: "implement them all", research list item 1). All sounds are made
// in code: ZzFX effects (MIT) and loops built from noise, played with howler.js (MIT).
// No recorded files. This file is pure data and rules (tested); src/ui/sound.js plays them.

// ZzFX parameters, in ZzFX order:
// [volume, randomness, frequency, attack, sustain, release, shape, shapeCurve, slide,
//  deltaSlide, pitchJump, pitchJumpTime, repeatTime, noise, modulation, bitCrush, delay,
//  sustainVolume, decay, tremolo, filter]
// shape: 0 sine, 1 triangle, 2 saw, 3 tan, 4 noise. filter: + low pass, - high pass (Hz).
export const SFX = {
  step: [0.45, 0.3, 80, 0, 0.01, 0.07, 4, 2, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0.4, 0.02, 0, 500],
  step_snow: [0.35, 0.3, 120, 0.01, 0.03, 0.08, 4, 1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0.3, 0.02, 0.3, 1400],
  door: [0.5, 0.05, 170, 0.05, 0.28, 0.2, 2, 2, -1, 0, 0, 0, 0, 0.3, 9, 0, 0, 0.6, 0, 0.35, 900],
  kick: [1.1, 0.1, 55, 0, 0.03, 0.32, 4, 1, 0, 0, 0, 0, 0, 2, 0, 0.2, 0, 0.6, 0.05, 0, 0],
  gate: [0.6, 0.1, 300, 0, 0.16, 0.3, 2, 1, 0, 0, 0, 0, 0.03, 1, 0, 0.3, 0, 0.6, 0, 0.4, 2500],
  pickup: [0.4, 0.1, 520, 0, 0.02, 0.08, 1, 1.5, 0, 0, 200, 0.03, 0, 0.2, 0, 0, 0, 0.5, 0, 0, 0],
  takeall: [0.45, 0.2, 200, 0.01, 0.14, 0.15, 4, 1, 0, 0, 0, 0, 0.04, 0.5, 0, 0, 0, 0.4, 0, 0.2, 2000],
  drop: [0.45, 0.1, 140, 0, 0.02, 0.12, 0, 1, -5, 0, 0, 0, 0, 0.3, 0, 0, 0, 0.5, 0, 0, 0],
  box: [0.5, 0.1, 220, 0, 0.06, 0.12, 4, 1, 0, 0, 0, 0, 0.05, 0.6, 0, 0, 0, 0.5, 0, 0, 1500],
  bark: [0.7, 0.15, 420, 0.01, 0.06, 0.08, 2, 2.5, -15, 0, 0, 0, 0.09, 0.5, 0, 0.1, 0, 0.7, 0.02, 0, 1200],
  whine: [0.35, 0.1, 700, 0.05, 0.3, 0.2, 0, 1, 8, -1, 0, 0, 0, 0, 6, 0, 0, 0.7, 0, 0.3, 0],
  eat: [0.45, 0.3, 300, 0, 0.02, 0.04, 4, 1, 0, 0, 0, 0, 0.06, 1.5, 0, 0, 0, 0.5, 0, 0.5, 0],
  drink: [0.45, 0.1, 180, 0, 0.04, 0.08, 0, 1, 20, 0, 0, 0, 0.12, 0, 0, 0, 0, 0.6, 0, 0, 0],
  generator: [0.7, 0.1, 60, 0.05, 0.6, 0.4, 2, 1, 0, 0, 0, 0, 0.05, 1, 20, 0.2, 0, 0.8, 0, 0.6, 800],
  rain_hit: [0.2, 0.5, 1800, 0, 0, 0.02, 4, 1, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0.3, 0, 0, 3000],
  click: [0.12, 0, 900, 0, 0, 0.015, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.4, 0, 0, 0],
  switch: [0.2, 0, 1500, 0, 0, 0.02, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.4, 0, 0, 0],
  hammer: [0.7, 0.1, 120, 0, 0.02, 0.15, 4, 1, 0, 0, 0, 0, 0.25, 1, 0, 0, 0, 0.6, 0, 0, 0],
  splash: [0.5, 0.2, 400, 0.01, 0.1, 0.3, 4, 1, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0.5, 0, 0.2, -600],
  shot: [1, 0.05, 70, 0, 0.02, 0.5, 4, 1, -2, 0, 0, 0, 0, 3, 0, 0.3, 0, 0.5, 0.08, 0, 0],
  bow: [0.4, 0.05, 160, 0, 0.03, 0.12, 1, 1, 30, 0, 0, 0, 0, 0.3, 0, 0, 0, 0.6, 0, 0, 0],
};

// Loops (rain, wind, fire, hum, crows) are built from noise in src/ui/sound.js.
// Each has a level 0..1 here; the player volume is applied on top.
export const LOOPS = ['rain', 'wind', 'fire', 'hum', 'crows'];

// Game action -> effect. kind: 'action' (doAction id), 'use' (verb), 'take', 'takeall', 'drop'.
export const ACTION_SFX = {
  force: 'kick', counter: 'gate', door: 'door', pickup: 'pickup', open_container: 'box',
  play_dog: 'bark', treat_dog: 'whine', run_generator: 'generator', build: 'hammer',
  board_window: 'hammer', flashlight: 'switch', fish: 'splash', hunt_rifle: 'shot',
  hunt_bow: 'bow', house: 'door', leave_house: 'door', take_off: 'drop',
  go_home: 'steps', go_place: 'steps', go_spot: 'steps', go_car: 'steps',
  search: 'box', room: 'box', car_search: 'box', garden_water: 'drink',
  drink_tank: 'drink', drink_raw: 'drink', drink_safe: 'drink', fill_jug: 'drink',
  collect_tap: 'drink', boil: 'drink', cook: 'eat', add_wood: 'drop', heater: 'switch',
  break_furniture: 'kick', store_all: 'takeall', feed_stray: 'whine', sleep_spot: 'drop',
};
export const USE_SFX = { eat: 'eat', drink: 'drink', boil: 'drink', wear: 'drop' };

export function sfxFor(kind, a, b) {
  if (kind === 'take') return 'pickup';
  if (kind === 'takeall') return 'takeall';
  if (kind === 'drop') return 'drop';
  if (kind === 'use') return USE_SFX[b] || 'click';
  if (kind === 'action') return ACTION_SFX[a] || null;
  return null;
}

// Loop levels (0..1) from the scene (src/engine/scene.js sceneEnv) and where you are.
// where: { inside: bool (a roof over you), home: bool, fire: bool (fire or stove burning),
// electric: bool (heater or lights on the battery) }.
export function ambience(scene, where = {}) {
  const s = scene || {};
  const inside = !!where.inside;
  const rainy = s.precip === 'rain' ? Math.max(0.25, s.precipStrength ?? 0.5) : 0;
  const wind = Math.min(1, Math.max(0, ((s.windMph || 0) - 4) / 26));
  // Crows: daylight, not in heavy rain, outside only. More of them as the city goes wild.
  const day = (s.daylight ?? 1) > 0.25;
  const crows = !inside && day ? 0.5 * (1 - rainy) : 0;
  return {
    rain: rainy * (inside ? 0.35 : 0.8),
    wind: Math.max(0.08, wind) * (inside ? 0.3 : 0.7),
    fire: where.home && where.fire ? 0.55 : 0,
    hum: where.home && where.electric ? 0.18 : 0,
    crows,
  };
}

// Seconds between rain hits on a window when inside (0: none).
export function rainHitEvery(scene, inside) {
  if (!inside || scene?.precip !== 'rain') return 0;
  return 2.5 - 1.8 * Math.min(1, scene.precipStrength ?? 0.5);
}

// Player settings (kept in this browser).
export const SOUND_DEFAULTS = { volume: 0.7, mute: false };
export function cleanSettings(s) {
  const v = Number(s?.volume);
  return { volume: Number.isFinite(v) ? Math.min(1, Math.max(0, v)) : SOUND_DEFAULTS.volume, mute: !!s?.mute };
}
