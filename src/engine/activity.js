// The game's one activity recorder (src/core/activity.js): kept in memory only.
// game.js opens a record for each player action; log() adds its lines.
// Deep mode (changed state paths per action) costs a JSON pass per action, so
// it is on only while the diagnostics view is open or with ?dev=1.
import { createActivity } from '../core/activity.js';

export const activity = createActivity({ limit: 100 });
