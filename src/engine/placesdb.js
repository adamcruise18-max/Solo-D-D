// Holds the list of real places (loaded once, not saved in the game state).
let LIST = [];
let INDEX = {};

export function setPlaces(list) {
  LIST = list;
  INDEX = Object.fromEntries(list.map((p) => [p.id, p]));
}

export const getPlace = (id) => INDEX[id];
export const allPlaces = () => LIST;
