// Soft contact shadows (ambient occlusion) in rooms and at home: N8AO (CC0) (Adam,
// 2026-11-27: tools list item 3). Dark soft edges in corners, under shelves and where
// things meet the floor, for the warm soft-3D look.
// By 3D quality: Low none (plain render), Medium half resolution, High full resolution.
// AO needs a render pass chain, so the browser's own anti-aliasing does not apply: SMAA
// smooths the edges in its place.
import { Color } from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { SMAAPass } from 'three/examples/jsm/postprocessing/SMAAPass.js';
import { N8AOPass } from 'n8ao';

// The settings for each quality level (null: no AO).
export const AO_LEVELS = {
  low: null,
  medium: { halfRes: true, mode: 'Low', smaa: true },
  high: { halfRes: false, mode: 'Medium', smaa: true },
};

export function makeAO(renderer, scene, camera, quality, w = 2, h = 2) {
  const lv = AO_LEVELS[quality];
  if (!lv) return null;
  try {
    const composer = new EffectComposer(renderer);
    const ao = new N8AOPass(scene, camera, w, h);
    ao.setQualityMode(lv.mode);
    Object.assign(ao.configuration, {
      halfRes: lv.halfRes,
      aoRadius: 0.6, // metres: corners, shelf feet, a can on a table
      distanceFalloff: 1.0,
      intensity: 2.2, // soft, not a black outline
      color: new Color(0x2a1c12), // warm dark brown, not grey
      gammaCorrection: false, // OutputPass does tone mapping and sRGB
    });
    composer.addPass(ao);
    composer.addPass(new OutputPass());
    if (lv.smaa) composer.addPass(new SMAAPass(w, h));
    return {
      ao,
      render: () => composer.render(),
      setSize: (W, H) => composer.setSize(W, H),
      dispose: () => composer.dispose(),
    };
  } catch (e) {
    console.warn('Soft shadows are off: they did not start on this device.', e);
    return null;
  }
}
