// Profiler: frame time, time per subsystem, counters and memory by subsystem.
// Every major subsystem reports here, so an agent can see why a frame was over budget.
// Budget start: 30 FPS = 33.3 ms per frame (see ENGINE.md for the split).
//
//   const prof = createProfiler();
//   prof.startFrame();
//   prof.time('simulation', () => ...);  or  prof.begin('render'); ... prof.end('render');
//   prof.count('render.drawCalls', 120);
//   prof.memory('render.textures', bytes);
//   const f = prof.endFrame();  // { ms, overBudget, sections, counters, worst }

export const FRAME_BUDGET_MS = 1000 / 30;
export const SECTION_BUDGET_MS = {
  simulation: 5, physics: 4, animation: 3, renderPrep: 5, render: 12,
};
// Severe memory limits for stress tests (MB). Do not fix memory problems by raising these.
export const MEMORY_BUDGETS_MB = { tiny: 512, small: 1024, normal: 2048 };

const defaultNow = () => (typeof performance !== 'undefined' ? performance.now() : Date.now());

export function createProfiler({ now = defaultNow, budgetMs = FRAME_BUDGET_MS, history = 120, memoryBudgetMB = MEMORY_BUDGETS_MB.normal } = {}) {
  let frameStart = null;
  let sections = {};
  let counters = {};
  const open = {};
  const mem = {};
  const frames = [];

  function begin(name) { open[name] = now(); }
  function end(name) {
    if (open[name] == null) throw new Error(`profiler.end("${name}") without begin`);
    sections[name] = (sections[name] || 0) + (now() - open[name]);
    delete open[name];
  }
  function time(name, fn) {
    begin(name);
    try { return fn(); } finally { end(name); }
  }
  function count(name, n = 1) { counters[name] = (counters[name] || 0) + n; }
  function memory(name, bytes) {
    if (bytes == null || bytes <= 0) delete mem[name];
    else mem[name] = bytes;
  }
  function memoryReport() {
    const bySubsystem = {};
    let total = 0;
    for (const [k, b] of Object.entries(mem)) {
      const sub = k.split('.')[0];
      bySubsystem[sub] = (bySubsystem[sub] || 0) + b;
      total += b;
    }
    const budget = memoryBudgetMB * 1024 * 1024;
    return { total, budget, overBudget: total > budget, bySubsystem, items: { ...mem } };
  }

  function startFrame() {
    frameStart = now();
    sections = {};
    counters = {};
  }
  function endFrame() {
    if (frameStart == null) throw new Error('profiler.endFrame() without startFrame()');
    const ms = now() - frameStart;
    frameStart = null;
    const over = Object.entries(sections)
      .filter(([k, v]) => SECTION_BUDGET_MS[k] != null && v > SECTION_BUDGET_MS[k])
      .map(([k, v]) => ({ section: k, ms: v, budgetMs: SECTION_BUDGET_MS[k] }));
    const worst = Object.entries(sections).sort((a, b) => b[1] - a[1])[0] || null;
    const f = { ms, budgetMs, overBudget: ms > budgetMs, sections: { ...sections }, counters: { ...counters }, overSections: over, worst: worst && { section: worst[0], ms: worst[1] } };
    frames.push(f);
    if (frames.length > history) frames.shift();
    return f;
  }
  function summary() {
    if (!frames.length) return null;
    const ms = frames.map((f) => f.ms).sort((a, b) => a - b);
    const pick = (q) => ms[Math.min(ms.length - 1, Math.floor(q * ms.length))];
    return { frames: frames.length, avgMs: ms.reduce((a, b) => a + b, 0) / ms.length, p50: pick(0.5), p95: pick(0.95), maxMs: ms[ms.length - 1], overBudget: frames.filter((f) => f.overBudget).length };
  }

  return { begin, end, time, count, memory, memoryReport, startFrame, endFrame, summary, frames: () => frames.slice() };
}
