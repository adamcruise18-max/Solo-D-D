// Place categories, loot tables and search rules (from the rules doc, "Loot by place type").
// stock: how full the place is at game start (0-1). zones: number of searches.
// zoneMinutes: time for one search zone. dark: big building, dark inside also in the day.

export const CATEGORIES = {
  supermarket: {
    label: 'Supermarket', color: '#d9a441', stock: 0.55, zones: 8, zoneMinutes: 20, dark: true,
    zoneName: 'aisle',
    loot: [
      { id: 'canned_food', w: 30 }, { id: 'dry_food', w: 18 }, { id: 'water_bottle', w: 10 },
      { id: 'peanut_butter', w: 8 }, { id: 'snacks', w: 10 }, { id: 'dog_food', w: 6 },
      { id: 'batteries', w: 6 }, { id: 'bleach', w: 3 }, { id: 'pain_pills', w: 3 },
      { id: 'flea_spray', w: 2 }, { id: 'lighter', w: 3 }, { id: 'comfort', w: 2 },
    ],
    entryText: 'The doors are open. The air smells of rotten food. It is dark inside.',
  },
  convenience: {
    label: 'Convenience store', color: '#c98b3c', stock: 0.5, zones: 2, zoneMinutes: 10,
    zoneName: 'shelf area',
    loot: [
      { id: 'snacks', w: 30 }, { id: 'water_bottle', w: 15 }, { id: 'canned_food', w: 10 },
      { id: 'batteries', w: 12 }, { id: 'lighter', w: 12 }, { id: 'pain_pills', w: 5 },
    ],
    entryText: 'The glass door is broken. Shelves are half empty.',
  },
  gas: {
    label: 'Gas station', color: '#9c6b3a', stock: 0.6, zones: 2, zoneMinutes: 15,
    zoneName: 'shop area',
    loot: [
      { id: 'snacks', w: 30 }, { id: 'water_bottle', w: 12 }, { id: 'lighter', w: 12 },
      { id: 'batteries', w: 8 }, { id: 'propane_1lb', w: 8 }, { id: 'tarp', w: 3 },
      { id: 'wiring', w: 4 }, { id: 'pipe_fittings', w: 3 }, { id: 'metal_bin', w: 3 },
    ],
    entryText: 'The pumps have no power. The small shop is still closed.',
  },
  pharmacy: {
    label: 'Pharmacy', color: '#5fb3a6', stock: 0.4, zones: 4, zoneMinutes: 20, dark: true,
    zoneName: 'section', lockedZone: { dc: 12, name: 'pharmacy counter' },
    loot: [
      { id: 'pain_pills', w: 15 }, { id: 'first_aid', w: 15 }, { id: 'antibiotics', w: 8 },
      { id: 'ors', w: 10 }, { id: 'snacks', w: 10 }, { id: 'water_bottle', w: 6 },
      { id: 'n95', w: 8 }, { id: 'batteries', w: 6 }, { id: 'flea_spray', w: 3 },
    ],
    entryText: 'The store is dark. The pharmacy counter at the back has a metal gate.',
  },
  clinic: {
    label: 'Clinic', color: '#4f9c92', stock: 0.7, zones: 3, zoneMinutes: 20,
    zoneName: 'room', bodies: true,
    loot: [
      { id: 'first_aid', w: 20 }, { id: 'antibiotics', w: 6 }, { id: 'n95', w: 15 },
      { id: 'pain_pills', w: 10 }, { id: 'saline', w: 10 }, { id: 'ors', w: 6 },
    ],
    entryText: 'Notices about the outbreak cover the door.',
  },
  hospital: {
    label: 'Hospital', color: '#7fd1c4', stock: 0.7, zones: 12, zoneMinutes: 30, dark: true,
    zoneName: 'ward', bodies: true, entryMorale: -5,
    loot: [
      { id: 'first_aid', w: 18 }, { id: 'antibiotics', w: 12 }, { id: 'saline', w: 15 },
      { id: 'pain_pills', w: 12 }, { id: 'n95', w: 12 }, { id: 'ors', w: 8 }, { id: 'snacks', w: 5 },
    ],
    entryText: 'The hospital is dark and silent. Many people came here at the end.',
  },
  hardware: {
    label: 'Hardware store', color: '#8a8f99', stock: 0.7, zones: 8, zoneMinutes: 20, dark: true,
    zoneName: 'aisle',
    loot: [
      { id: 'tarp', w: 15 }, { id: 'pry_bar', w: 6 }, { id: 'propane_1lb', w: 12 },
      { id: 'batteries', w: 10 }, { id: 'flashlight', w: 6 }, { id: 'gloves', w: 8 },
      { id: 'seeds', w: 8 }, { id: 'bleach', w: 5 }, { id: 'lighter', w: 6 }, { id: 'firewood', w: 4 },
      { id: 'toolkit', w: 6 }, { id: 'scrap_wood', w: 12 }, { id: 'hardware_parts', w: 14 }, { id: 'wiring', w: 10 },
      { id: 'pipe_fittings', w: 10 }, { id: 'plastic_sheet', w: 10 }, { id: 'insulation', w: 8 }, { id: 'metal_bin', w: 6 },
      { id: 'rain_barrel', w: 5 }, { id: 'stove_kit', w: 2 }, { id: 'water_filter', w: 3 },
    ],
    entryText: 'Long dark aisles. The tool racks are partly empty.',
  },
  outdoor: {
    label: 'Outdoor store', color: '#6f9a5b', stock: 0.5, zones: 4, zoneMinutes: 20,
    zoneName: 'section',
    loot: [
      { id: 'water_filter', w: 10 }, { id: 'winter_coat', w: 8 }, { id: 'winter_hat', w: 10 },
      { id: 'gloves', w: 10 }, { id: 'boots', w: 8 }, { id: 'rain_jacket', w: 10 },
      { id: 'propane_1lb', w: 8 }, { id: 'flashlight', w: 6 }, { id: 'snacks', w: 6 }, { id: 'backpack', w: 3 }, { id: 'plastic_sheet', w: 6 },
    ],
    entryText: 'Racks of jackets and boots. This place has good winter gear.',
  },
  fire: {
    label: 'Fire station', color: '#c0584a', stock: 0.9, zones: 3, zoneMinutes: 20,
    zoneName: 'room', locked: true,
    loot: [
      { id: 'first_aid', w: 20 }, { id: 'n95', w: 15 }, { id: 'pry_bar', w: 6 },
      { id: 'flashlight', w: 8 }, { id: 'batteries', w: 8 }, { id: 'water_bottle', w: 10 }, { id: 'gloves', w: 6 }, { id: 'toolkit', w: 8 },
    ],
    entryText: 'The engine bay is empty. The crews went out on calls and did not come back.',
  },
  house: {
    label: 'House', color: '#aaaaaa', stock: 0.8, zones: 6, zoneMinutes: 10,
    zoneName: 'room',
    loot: [
      { id: 'canned_food', w: 20 }, { id: 'dry_food', w: 8 }, { id: 'snacks', w: 8 },
      { id: 'peanut_butter', w: 5 }, { id: 'water_bottle', w: 5 }, { id: 'pain_pills', w: 6 },
      { id: 'first_aid', w: 4 }, { id: 'antibiotics', w: 2 }, { id: 'batteries', w: 6 },
      { id: 'winter_hat', w: 4 }, { id: 'gloves', w: 4 }, { id: 'rain_jacket', w: 3 },
      { id: 'comfort', w: 5 }, { id: 'firewood', w: 4 }, { id: 'dog_food', w: 2 }, { id: 'lighter', w: 4 },
      { id: 'toolkit', w: 2 }, { id: 'scrap_wood', w: 3 }, { id: 'hardware_parts', w: 3 }, { id: 'wiring', w: 2 },
      { id: 'pipe_fittings', w: 2 }, { id: 'metal_bin', w: 2 }, { id: 'rain_barrel', w: 1 }, { id: 'battery_module', w: 0.6 },
    ],
  },
};

// Brands with big stores start with more loot (map data doc).
export const BIG_BRANDS = ['Costco', 'WinCo', 'Fred Meyer', 'Walmart', 'Home Depot', "Lowe's", 'Target'];

export const HOUSE_ROOMS = ['kitchen', 'living room', 'bedroom', 'bathroom', 'second bedroom', 'garage'];
