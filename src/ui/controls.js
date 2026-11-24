// Keys for the first-person view inside buildings.
// One table: the 3D view reads it for input, and the pause menu shows it as the key list.
// ready: false means the game does not have that system yet. The key shows "Not yet in the game".
// Where Adam's key list gave one key two jobs, the "Recommended Standard Layout" wins.

export const KEYS = [
  // Movement
  { group: 'Movement', keys: ['KeyW', 'KeyA', 'KeyS', 'KeyD'], show: 'W A S D', action: 'move', label: 'Walk (also arrow keys)', ready: true },
  { group: 'Movement', keys: ['Space'], show: 'Space', action: 'jump', label: 'Jump', ready: true },
  { group: 'Movement', keys: ['ShiftLeft', 'ShiftRight'], show: 'Shift (hold)', action: 'sprint', label: 'Sprint', ready: true },
  { group: 'Movement', keys: ['ControlLeft', 'ControlRight'], show: 'Ctrl (hold)', action: 'crouch', label: 'Crouch', ready: true },
  { group: 'Movement', keys: ['KeyZ'], show: 'Z', action: 'stance', label: 'Change stance: stand, crouch, prone', ready: true },
  { group: 'Movement', keys: ['CapsLock'], show: 'Caps Lock', action: 'walktoggle', label: 'Slow walk on / off', ready: true },
  { group: 'Movement', keys: [], show: 'Mouse', action: 'look', label: 'Look (click the view first)', ready: true },

  // Interaction
  { group: 'Interact', keys: ['KeyE'], show: 'E', action: 'interact', label: 'Take the item you look at (also doors, gates). Hold E: take all in reach', ready: true },
  { group: 'Interact', keys: ['KeyF'], show: 'F', action: 'context', label: 'Context: take the item, or items found before. Hold F: take all in reach', ready: true },
  { group: 'Interact', keys: ['KeyL'], show: 'L', action: 'flashlight', label: 'Flashlight on / off', ready: true },
  { group: 'Interact', keys: ['Mouse1'], show: 'Middle mouse', action: 'ping', label: 'Mark a spot on the floor', ready: true },
  { group: 'Interact', keys: ['Mouse2'], show: 'Right mouse (hold)', action: 'aim', label: 'Look closer (zoom)', ready: true },

  // Panels
  { group: 'Panels', keys: ['Tab', 'KeyI'], show: 'Tab / I', action: 'inventory', label: 'Inventory', ready: true },
  { group: 'Panels', keys: ['KeyC'], show: 'C', action: 'character', label: 'Character and vitals', ready: true },
  { group: 'Panels', keys: ['KeyM'], show: 'M', action: 'map', label: 'Floor plan of this building', ready: true },
  { group: 'Panels', keys: ['KeyJ'], show: 'J', action: 'journal', label: 'Journal', ready: true },
  { group: 'Panels', keys: ['KeyO'], show: 'O', action: 'objectives', label: 'Objectives', ready: true },
  { group: 'Panels', keys: ['KeyK'], show: 'K', action: 'skills', label: 'Skills', ready: false },
  { group: 'Panels', keys: ['KeyP'], show: 'P', action: 'progression', label: 'Character progression', ready: false },
  { group: 'Panels', keys: ['KeyN'], show: 'N', action: 'crafting', label: 'Crafting', ready: false },
  { group: 'Panels', keys: ['KeyU'], show: 'U', action: 'perks', label: 'Perks', ready: false },

  // Quick items
  { group: 'Quick items', keys: ['Digit5'], show: '5', action: 'quick_med', label: 'Medical item (bandage, pills)', ready: true },
  { group: 'Quick items', keys: ['Digit6'], show: '6', action: 'quick_stamina', label: 'Stamina item', ready: false },
  { group: 'Quick items', keys: ['Digit7'], show: '7', action: 'quick_food', label: 'Eat or drink (what you need most)', ready: true },
  { group: 'Quick items', keys: ['Digit8'], show: '8', action: 'quick_buff', label: 'Stimulant', ready: false },
  { group: 'Quick items', keys: ['Digit9'], show: '9', action: 'quick_utility', label: 'Utility: new batteries in the flashlight', ready: true },
  { group: 'Quick items', keys: ['Digit0'], show: '0', action: 'inventory', label: 'Item list (opens the inventory)', ready: true },

  // Weapons and abilities: the game has no fighting yet.
  { group: 'Weapons (not yet)', keys: ['Mouse0'], show: 'Left mouse', action: 'fire', label: 'Fire', ready: false },
  { group: 'Weapons (not yet)', keys: ['KeyR'], show: 'R', action: 'reload', label: 'Reload', ready: false },
  { group: 'Weapons (not yet)', keys: ['Digit1', 'Digit2', 'Digit3', 'Digit4'], show: '1 – 4', action: 'weapon', label: 'Primary, secondary, sidearm, melee', ready: false },
  { group: 'Weapons (not yet)', keys: ['Wheel'], show: 'Mouse wheel', action: 'cycle', label: 'Change weapon', ready: false },
  { group: 'Weapons (not yet)', keys: ['KeyG'], show: 'G', action: 'grenade', label: 'Throw', ready: false },
  { group: 'Weapons (not yet)', keys: ['KeyV'], show: 'V', action: 'melee', label: 'Melee', ready: false },
  { group: 'Weapons (not yet)', keys: ['KeyQ'], show: 'Q', action: 'tactical', label: 'Tactical ability', ready: false },
  { group: 'Weapons (not yet)', keys: ['KeyT'], show: 'T', action: 'equipment', label: 'Tactical equipment', ready: false },
  { group: 'Weapons (not yet)', keys: ['KeyB'], show: 'B', action: 'inspect', label: 'Inspect weapon', ready: false },
  { group: 'Weapons (not yet)', keys: ['KeyH'], show: 'H', action: 'holster', label: 'Holster', ready: false },
  { group: 'Weapons (not yet)', keys: ['KeyX'], show: 'X', action: 'special', label: 'Special ability', ready: false },

  // Game
  { group: 'Game', keys: ['Escape'], show: 'Esc', action: 'pause', label: 'Pause menu (and this key list)', ready: true },
  { group: 'Game', keys: ['Enter', 'NumpadEnter'], show: 'Enter', action: 'confirm', label: 'Confirm', ready: true },
  { group: 'Game', keys: ['F5'], show: 'F5', action: 'quicksave', label: 'Quick save', ready: true },
  { group: 'Game', keys: ['F9'], show: 'F9', action: 'quickload', label: 'Quick load (last save)', ready: true },
  { group: 'Game', keys: ['F3', 'Backquote'], show: 'F3', action: 'debug', label: 'Diagnostics (FPS, frame time, draw calls, memory)', ready: true },
];

// Keys from Adam's list that are left out, with the reason (shown in the PR, not in the game).
export const LEFT_OUT = [
  ['Y, F1–F4, Enter (chat), U (team), Tab (scoreboard)', 'Voice, chat, team and squad keys: the game has only one player.'],
];

const BY_CODE = new Map();
for (const k of KEYS) for (const c of k.keys) BY_CODE.set(c, k);

export function keyFor(code) {
  return BY_CODE.get(code) || null;
}

// Stances: eye height (m) and walk speed (m/s).
export const STANCES = {
  stand: { eye: 1.62, speed: 2.6 },
  crouch: { eye: 1.05, speed: 1.3 },
  prone: { eye: 0.4, speed: 0.6 },
};
export const SPRINT_SPEED = 4.4;
export const SLOW_WALK_SPEED = 1.3;
export const JUMP_SPEED = 3.6; // m/s up
export const GRAVITY = 9.8;
export const HOLD_SEARCH_MS = 700; // hold E or F this long to take all in reach

export function moveSpeed({ stance, sprint, slowWalk }) {
  if (stance !== 'stand') return STANCES[stance].speed;
  if (sprint) return SPRINT_SPEED;
  if (slowWalk) return SLOW_WALK_SPEED;
  return STANCES.stand.speed;
}

// Z goes stand -> crouch -> prone -> stand.
export function nextStance(s) {
  return s === 'stand' ? 'crouch' : s === 'crouch' ? 'prone' : 'stand';
}
