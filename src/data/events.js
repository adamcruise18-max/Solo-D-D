// Pacer events (content). The builder thread owns this file and adds events;
// the engine thread owns the pacer that picks them (src/engine/pacer.js).
//
// { id, size: 'small'|'medium'|'big', where: 'home'|'outside'|'inside'|'any',
//   months: [min, max] (months since the collapse; the game starts at month 3),
//   text: journal line, kind: log kind, when(state, ctx)?: extra condition,
//   apply(state, ctx)?: the effect (ctx.rng is the 'pacer' stream) }
//
// These first events only write a line. Effects that change the game (a roof
// leak project, a closed route) come with the builder's content pass.
export const EVENTS = [
  { id: 'geese', size: 'small', where: 'outside', months: [3, 99], text: 'A long line of geese flies over, very low and loud. Then it is quiet again.' },
  { id: 'frost_windows', size: 'small', where: 'home', months: [3, 6], text: 'Frost makes ferns on the inside of the windows.' },
  { id: 'car_alarm_dies', size: 'small', where: 'any', months: [3, 5], text: 'Far away, a car alarm that has cried for days goes weak, then stops.' },
  { id: 'shelf_falls', size: 'small', where: 'inside', months: [3, 99], text: 'Somewhere in the building, a shelf gives way with a crash. You hold still until the dust settles.' },
  { id: 'wind_chimes', size: 'small', where: 'home', months: [3, 99], text: 'A neighbor’s wind chimes ring in the wind. For a moment it sounds like a normal street.' },
  { id: 'crows', size: 'small', where: 'outside', months: [3, 99], text: 'A crowd of crows lifts off a yard as you pass, shouting at you.' },
  { id: 'distant_smoke', size: 'medium', where: 'any', months: [3, 99], text: 'A column of smoke rises far to the east. Something is burning, and nobody will put it out.' },
  { id: 'dogs_howl', size: 'medium', where: 'any', months: [3, 99], text: 'A pack of dogs howls not far away. They sound hungry.' },
  { id: 'power_line_down', size: 'big', where: 'any', months: [3, 99], text: 'A loud crack and a crash: a power pole goes down somewhere close. The street will be blocked.' },
];
