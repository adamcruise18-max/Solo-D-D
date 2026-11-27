// Real-time driver (Adam, 2026-11-27: the game is real time, first person; no longer turn based).
// It turns real milliseconds into game minutes and gives them to the game clock in whole steps.
// The rules do not change: the same clock.advance() runs every system, so tests, the year sim
// and replays still mean the same thing.
//
//   const rt = createRealtime({ advance: (state, minutes, mode, opts) => advanceTime(state, minutes, mode, opts) });
//   each frame: rt.tick(state, realMs)
//
// - Time scale: game seconds per real second (TIME_SCALE, default 12: one game day = 2 real hours).
// - Fixed steps: real time builds up in `carry` and goes to the clock in whole STEP minutes, so the
//   result does not depend on the frame rate (30 or 144 FPS give the same game).
// - Pause: time stops while any pause reason is set (menu, map, inventory, hidden tab).
// - Fast-forward: sleep and long rest run at FAST_SCALE until the minutes are spent or a rule stops
//   them (advance() returns true, as advanceTime does at a danger line).
// - Long frames (a hidden tab, a debugger stop) count as at most MAX_FRAME_MS.
// No browser code here: node tests and the bot drive it with numbers.

export const TIME_SCALE = 12; // game seconds per real second
export const FAST_SCALE = 3600; // fast-forward: one game hour per real second
export const STEP_MINUTES = 1; // smallest piece of game time given to the clock
export const MAX_FRAME_MS = 250;

export function createRealtime({ advance, scale = TIME_SCALE, fastScale = FAST_SCALE, step = STEP_MINUTES, maxFrameMs = MAX_FRAME_MS, onAdvance = null } = {}) {
  if (typeof advance !== 'function') throw new Error('createRealtime needs advance(state, minutes, mode, opts)');
  const paused = new Set();
  let carry = 0; // game minutes built up, not yet given to the clock
  let mode = 'rest';
  let fast = null; // { left, mode, opts, done }
  let total = 0;

  function give(state, minutes, m, opts) {
    const stopped = advance(state, minutes, m, opts) === true;
    total += minutes;
    if (onAdvance) onAdvance({ minutes, mode: m, fast: !!fast });
    return stopped;
  }

  function tick(state, realMs) {
    if (!state || state.dead || paused.size || !(realMs > 0)) return 0;
    const ms = Math.min(realMs, maxFrameMs);
    if (fast) {
      carry += (ms / 1000) * (fastScale / 60);
      let n = Math.floor(carry / step) * step;
      if (n <= 0) return 0;
      n = Math.min(n, fast.left);
      carry -= n;
      fast.left -= n;
      const stopped = give(state, n, fast.mode, fast.opts);
      if (stopped || fast.left <= 1e-9 || state.dead) {
        const f = fast; fast = null; carry = 0;
        if (f.done) f.done({ stopped, left: f.left });
      }
      return n;
    }
    carry += (ms / 1000) * (scale / 60);
    const n = Math.floor(carry / step + 1e-9) * step;
    if (n <= 0) return 0;
    carry -= n;
    give(state, n, mode);
    return n;
  }

  return {
    tick,
    pause(reason = 'menu') { paused.add(reason); },
    resume(reason = 'menu') { paused.delete(reason); },
    isPaused: () => paused.size > 0,
    pausedBy: () => [...paused],
    // What the player does while time runs: 'rest' (stand), 'walk', 'work', 'heavy'.
    setMode(m) { mode = m; },
    mode: () => mode,
    setScale(s) { if (!(s > 0)) throw new Error(`Bad time scale: ${s}`); scale = s; },
    scale: () => scale,
    // Sleep or long rest: spend `minutes` fast; done({ stopped, left }) runs at the end.
    fastForward(minutes, fmode = 'sleep', opts = {}, done = null) {
      if (!(minutes > 0)) return;
      fast = { left: minutes, mode: fmode, opts, done };
      carry = 0;
    },
    cancelFast() { const f = fast; fast = null; carry = 0; if (f && f.done) f.done({ stopped: true, left: f.left, cancelled: true }); },
    isFast: () => !!fast,
    // Game minutes given to the clock since the driver was made (tests, diagnostics).
    total: () => total,
  };
}
