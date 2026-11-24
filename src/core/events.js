// Event bus. Rules send events ("item.taken", "day.start", "player.died");
// the journal, the log, stats, sounds and the screen listen.
// Rules never call the screen directly.
//
// Listeners run at once (synchronous). The bus also keeps a list of the events
// since the last drain(), so the screen can show them after an action ends.

export function createEvents({ keep = 200 } = {}) {
  const listeners = new Map(); // type -> Set(fn); '*' gets every event
  let pending = [];

  function on(type, fn) {
    if (typeof fn !== 'function') throw new Error(`Listener for "${type}" is not a function`);
    if (!listeners.has(type)) listeners.set(type, new Set());
    listeners.get(type).add(fn);
    return () => off(type, fn);
  }

  function off(type, fn) {
    listeners.get(type)?.delete(fn);
  }

  function once(type, fn) {
    const stop = on(type, (ev) => { stop(); fn(ev); });
    return stop;
  }

  function emit(type, data = {}) {
    const ev = { type, ...data };
    pending.push(ev);
    if (pending.length > keep) pending.splice(0, pending.length - keep);
    for (const key of [type, '*']) {
      const set = listeners.get(key);
      if (!set) continue;
      for (const fn of [...set]) {
        try { fn(ev); } catch (err) {
          // One broken listener (for example a sound) must not stop the rules.
          if (typeof console !== 'undefined') console.error(`Event listener for "${type}" failed`, err);
        }
      }
    }
    return ev;
  }

  // Events since the last drain, oldest first.
  function drain() {
    const out = pending;
    pending = [];
    return out;
  }

  return { on, off, once, emit, drain };
}
