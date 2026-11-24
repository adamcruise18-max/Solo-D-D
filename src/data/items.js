// Item list for the first playable version. Numbers come from the game rules doc.
// weight: lb for one unit. portion: part of one unit used per "use".
// kind decides which action the item gives.

export const ITEMS = {
  canned_food: { name: 'Canned food', unit: 'can', weight: 1, kind: 'food', cal: 400, portion: 1 },
  dry_food: { name: 'Rice or pasta (bag)', unit: 'bag', weight: 2, kind: 'food', cal: 3000, portion: 0.25, needsCooking: true },
  peanut_butter: { name: 'Peanut butter', unit: 'jar', weight: 1, kind: 'food', cal: 2600, portion: 0.25 },
  snacks: { name: 'Snacks (crackers, bars)', unit: 'pack', weight: 0.5, kind: 'food', cal: 600, portion: 0.5 },
  formula: { name: 'Liquid nutrition bag', unit: 'bag', weight: 1, kind: 'food', cal: 250, water: 8, portion: 1 },
  dog_food: { name: 'Dog food bag', unit: 'bag', weight: 15, kind: 'dogfood', portion: 1 / 15 },

  water_bottle: { name: 'Bottled water (1 gal)', unit: 'gal', weight: 8.3, kind: 'drink', water: 40, portion: 0.25 },
  saline: { name: 'Saline bag (sterile)', unit: 'bag', weight: 2.2, kind: 'drink', water: 40, portion: 1 },
  ors: { name: 'Oral rehydration salts', unit: 'pack', weight: 0.1, kind: 'med', med: 'ors', portion: 1 },

  first_aid: { name: 'First aid kit', unit: 'kit', weight: 1, kind: 'med', med: 'bandage', portion: 0.2 },
  antibiotics: { name: 'Antibiotics (one course)', unit: 'course', weight: 0.1, kind: 'med', med: 'antibiotics', portion: 1 },
  pain_pills: { name: 'Pain pills', unit: 'bottle', weight: 0.2, kind: 'med', med: 'pain', portion: 0.1 },

  flashlight: { name: 'Flashlight', unit: 'pc', weight: 0.5, kind: 'tool' },
  batteries: { name: 'Batteries (1 set)', unit: 'set', weight: 0.2, kind: 'batteries', portion: 1 },
  pry_bar: { name: 'Pry bar', unit: 'pc', weight: 3, kind: 'tool' },
  backpack: { name: 'Backpack', unit: 'pc', weight: 1, kind: 'tool' },

  winter_coat: { name: 'Winter coat', unit: 'pc', weight: 3, kind: 'wear', slot: 'coat' },
  winter_hat: { name: 'Winter hat', unit: 'pc', weight: 0.3, kind: 'wear', slot: 'hat' },
  gloves: { name: 'Winter gloves', unit: 'pair', weight: 0.3, kind: 'wear', slot: 'gloves' },
  boots: { name: 'Winter boots', unit: 'pair', weight: 2.5, kind: 'wear', slot: 'boots' },
  rain_jacket: { name: 'Rain jacket', unit: 'pc', weight: 1, kind: 'wear', slot: 'rain' },

  firewood: { name: 'Firewood bundle', unit: 'bundle', weight: 20, kind: 'fuel' },
  propane_1lb: { name: 'Propane cylinder (1 lb)', unit: 'can', weight: 1.5, kind: 'misc' },
  tarp: { name: 'Tarp', unit: 'pc', weight: 3, kind: 'misc' },
  bleach: { name: 'Unscented bleach', unit: 'jug', weight: 8, kind: 'misc' },
  water_filter: { name: 'Water filter (squeeze)', unit: 'pc', weight: 0.3, kind: 'misc' },
  n95: { name: 'N95 mask', unit: 'pc', weight: 0.05, kind: 'misc' },
  flea_spray: { name: 'Flea spray', unit: 'can', weight: 1, kind: 'misc' },
  seeds: { name: 'Seed packet', unit: 'pack', weight: 0.05, kind: 'misc' },
  lighter: { name: 'Lighter', unit: 'pc', weight: 0.05, kind: 'misc' },
  comfort: { name: 'Book or deck of cards', unit: 'pc', weight: 1, kind: 'comfort' },

  // Parts for home base projects (kind 'part': no use on their own).
  toolkit: { name: 'Tool kit', unit: 'kit', weight: 6, kind: 'tool' },
  scrap_wood: { name: 'Lumber and plywood', unit: 'pc', weight: 6, kind: 'part' },
  hardware_parts: { name: 'Nails, screws and brackets', unit: 'box', weight: 1, kind: 'part' },
  wiring: { name: 'Electrical wire and connectors', unit: 'roll', weight: 2, kind: 'part' },
  pipe_fittings: { name: 'Pipe, hose and fittings', unit: 'set', weight: 2, kind: 'part' },
  plastic_sheet: { name: 'Plastic sheeting', unit: 'roll', weight: 3, kind: 'part' },
  insulation: { name: 'Foam board insulation', unit: 'pack', weight: 4, kind: 'part' },
  metal_bin: { name: 'Metal can with lid', unit: 'pc', weight: 8, kind: 'part' },
  rain_barrel: { name: 'Rain barrel (55 gal, empty)', unit: 'pc', weight: 15, kind: 'part' },
  stove_kit: { name: 'Wood stove and pipe kit', unit: 'kit', weight: 40, kind: 'part' },
  battery_module: { name: 'Home battery module', unit: 'pc', weight: 40, kind: 'part' },
};

export function itemName(id) {
  return ITEMS[id] ? ITEMS[id].name : id;
}
