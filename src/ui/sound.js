// Sound player (Adam, 2026-11-27). Effects: ZzFX (MIT) samples. Loops: noise made here,
// played with howler.js (MIT) for loops and fades. Data and rules: src/data/sounds.js.
// Browsers allow audio only after the player clicks or presses a key, so the audio code
// loads on the first click (esbuild keeps the import lazy) and nothing plays before it.
import { SFX, LOOPS, sfxFor, ambience, rainHitEvery, SOUND_DEFAULTS, cleanSettings } from '../data/sounds.js';

const LS = 'lastlight.sound.v1';
let settings = { ...SOUND_DEFAULTS };
try { settings = cleanSettings(JSON.parse(localStorage.getItem(LS) || 'null') || SOUND_DEFAULTS); } catch { /* private mode */ }

let A = null; // { ctx, Howler, loops: { name: { howl, level } }, buildSamples }
let loading = null;
let wanted = null; // the last ambience, set before the audio was ready
let wantedWhere = {};
const variants = {}; // name -> [AudioBuffer] (ZzFX randomness: a few takes of each)

export function getSoundSettings() { return { ...settings }; }
export function setSoundSettings(part) {
  settings = cleanSettings({ ...settings, ...part });
  try { localStorage.setItem(LS, JSON.stringify(settings)); } catch { /* keep in memory */ }
  if (A) A.Howler.volume(settings.mute ? 0 : settings.volume);
}

async function load() {
  const [{ ZZFX }, howler] = await Promise.all([import('zzfx'), import('howler')]);
  const { Howl, Howler } = howler.default || howler;
  Howler.volume(settings.mute ? 0 : settings.volume);
  const ctx = Howler.ctx;
  // ZzFX makes its own audio context; we play its samples through Howler's, so the one
  // volume and mute cover all sound.
  try { ZZFX.audioContext.close(); } catch { /* fine */ }
  ZZFX.sampleRate = ctx.sampleRate;
  const a = { ctx, Howler, Howl, ZZFX, loops: {} };
  for (const name of LOOPS) {
    const url = wavUrl(makeLoop(name, ctx.sampleRate, ZZFX), ctx.sampleRate);
    a.loops[name] = { howl: new Howl({ src: [url], format: ['wav'], loop: true, volume: 0 }), level: 0 };
  }
  return a;
}

function unlock() {
  if (loading) return loading;
  loading = load().then((a) => {
    A = a;
    if (A.ctx.state === 'suspended') A.ctx.resume();
    if (wanted) setAmbience(wanted, wantedWhere);
    return a;
  }).catch((e) => { console.warn('Sound is off: the audio did not start.', e); loading = null; });
  return loading;
}

export function initSound() {
  if (typeof window === 'undefined') return;
  const go = () => {
    unlock();
    window.removeEventListener('pointerdown', go, true);
    window.removeEventListener('keydown', go, true);
  };
  window.addEventListener('pointerdown', go, true);
  window.addEventListener('keydown', go, true);
  // a quiet click on each button
  document.addEventListener('click', (e) => { if (e.target.closest?.('button, .qual, label.toggle')) playSfx('click'); }, true);
  // The 3D view is a separate file: it plays sound through this.
  window.LLSound = { play: playSfx, step: (outside) => playSfx(outside && wanted?.season === 'winter' ? 'step_snow' : 'step') };
}

export function playSfx(name, gain = 1) {
  if (!A || settings.mute) return;
  if (name === 'steps') { [0, 0.33, 0.66].forEach((t) => setTimeout(() => playSfx('step', 0.8), t * 1000)); return; }
  const p = SFX[name];
  if (!p) return;
  let v = variants[name];
  if (!v) v = variants[name] = [];
  if (v.length < 3) {
    const s = A.ZZFX.buildSamples(...p);
    const b = A.ctx.createBuffer(1, s.length, A.ctx.sampleRate);
    b.getChannelData(0).set(s);
    v.push(b);
  }
  const src = A.ctx.createBufferSource();
  src.buffer = v[Math.floor(Math.random() * v.length)];
  const g = A.ctx.createGain();
  g.gain.value = 0.6 * gain;
  src.connect(g).connect(A.Howler.masterGain);
  src.start();
}

// After a game action (app.js act()).
export function soundForAction(kind, a, b) {
  const n = sfxFor(kind, a, b);
  if (n) playSfx(n);
}

// Loops follow the weather and where you are; changes fade over 1.5 s.
let hitTimer = null;
export function setAmbience(scene, where = {}) {
  wanted = scene; wantedWhere = where;
  if (!A) return;
  const lv = ambience(scene, where);
  for (const name of LOOPS) {
    const L = A.loops[name];
    const to = lv[name] || 0;
    if (Math.abs(to - L.level) < 0.01) continue;
    if (to > 0 && !L.howl.playing()) L.howl.play();
    L.howl.fade(L.level, to, 1500);
    L.level = to;
  }
  const every = rainHitEvery(scene, where.inside);
  clearTimeout(hitTimer);
  if (every > 0) {
    const tick = () => { playSfx('rain_hit', 0.5 + Math.random() * 0.5); hitTimer = setTimeout(tick, every * (0.4 + Math.random() * 1.2) * 1000); };
    hitTimer = setTimeout(tick, every * 1000);
  }
}

// ---------- loops made from noise ----------
// Mono samples, a few seconds; the end fades into the start so the loop has no click.
function makeLoop(name, rate, ZZFX) {
  const sec = { rain: 6, wind: 8, fire: 6, hum: 2, crows: 12 }[name];
  const n = Math.round(rate * sec);
  const fade = Math.round(rate * 0.5);
  const x = new Float32Array(n + fade);
  let r = 12345 + name.length * 77;
  const rnd = () => { r = (r * 1103515245 + 12345) & 0x7fffffff; return r / 0x7fffffff; };
  const L = x.length;
  if (name === 'rain') {
    let lp = 0;
    for (let i = 0; i < L; i++) { lp += 0.45 * ((rnd() * 2 - 1) - lp); x[i] = lp * 0.45; }
    for (let k = 0; k < sec * 40; k++) { // drops
      const at = Math.floor(rnd() * (L - 400)); const amp = 0.1 + rnd() * 0.2;
      for (let j = 0; j < 300; j++) x[at + j] += (rnd() * 2 - 1) * amp * Math.exp(-j / 50);
    }
  } else if (name === 'wind') {
    let b = 0;
    for (let i = 0; i < L; i++) {
      b = 0.995 * b + 0.05 * (rnd() * 2 - 1);
      const t = i / n;
      const gust = 0.45 + 0.3 * Math.sin(2 * Math.PI * t) + 0.2 * Math.sin(2 * Math.PI * 3 * t + 1);
      x[i] = b * gust * 1.6;
    }
  } else if (name === 'fire') {
    let b = 0;
    for (let i = 0; i < L; i++) { b = 0.99 * b + 0.03 * (rnd() * 2 - 1); x[i] = b * 0.9; }
    for (let k = 0; k < sec * 9; k++) { // crackles
      const at = Math.floor(rnd() * (L - 900)); const amp = 0.15 + rnd() * 0.35;
      for (let j = 0; j < 800; j++) x[at + j] += (rnd() * 2 - 1) * amp * Math.exp(-j / (40 + rnd() * 80));
    }
  } else if (name === 'hum') {
    for (let i = 0; i < L; i++) {
      const t = i / rate;
      x[i] = 0.35 * Math.sin(2 * Math.PI * 60 * t) + 0.18 * Math.sin(2 * Math.PI * 120 * t) + 0.06 * Math.sin(2 * Math.PI * 180 * t) + 0.01 * (rnd() * 2 - 1);
    }
  } else if (name === 'crows') {
    // A few caws far off, then quiet. ZzFX: saw tone, falling, rough.
    const caw = [0.5, 0.1, 520, 0.02, 0.12, 0.12, 2, 3, -6, 0, 0, 0, 0, 0.8, 0, 0.15, 0, 0.6, 0.03, 0, 1600];
    for (const at of [0.8, 1.4, 6.5, 7.0, 7.5]) {
      const s = ZZFX.buildSamples(...caw);
      const o = Math.floor(at * rate);
      for (let j = 0; j < s.length && o + j < L; j++) x[o + j] += s[j] * 0.6;
    }
  }
  // fold the tail into the head
  const out = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    if (i < fade) { const t = i / fade; out[i] = x[i] * t + x[n + i] * (1 - t); } else out[i] = x[i];
  }
  for (let i = 0; i < n; i++) out[i] = Math.max(-1, Math.min(1, out[i]));
  return out;
}

function wavUrl(s, rate) {
  const buf = new ArrayBuffer(44 + s.length * 2);
  const d = new DataView(buf);
  const str = (o, t) => { for (let i = 0; i < t.length; i++) d.setUint8(o + i, t.charCodeAt(i)); };
  str(0, 'RIFF'); d.setUint32(4, 36 + s.length * 2, true); str(8, 'WAVE'); str(12, 'fmt ');
  d.setUint32(16, 16, true); d.setUint16(20, 1, true); d.setUint16(22, 1, true);
  d.setUint32(24, rate, true); d.setUint32(28, rate * 2, true); d.setUint16(32, 2, true); d.setUint16(34, 16, true);
  str(36, 'data'); d.setUint32(40, s.length * 2, true);
  for (let i = 0; i < s.length; i++) d.setInt16(44 + i * 2, Math.round(s[i] * 32767), true);
  return URL.createObjectURL(new Blob([buf], { type: 'audio/wav' }));
}
