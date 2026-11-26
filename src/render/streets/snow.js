// Snow cover on the ground (0 none .. 1 deep) from the scene values (src/engine/scene.js):
// falling snow covers the ground; ice glazes it; a hard frost on a cold morning gives a
// thin white. No three.js here, so the map bundle can use it too.
export function snowFromScene(sc) {
  if (!sc) return 0;
  const k = Math.max(0, Math.min(1, Number(sc.precipStrength ?? 0.6) || 0));
  if (sc.precip === 'snow') return 0.45 + 0.55 * k;
  if (sc.ice) return 0.25;
  if (Number.isFinite(sc.airF) && sc.airF <= 28) return 0.12;
  return 0;
}
