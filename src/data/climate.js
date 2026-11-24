// Portland-area monthly averages from the rules doc (approximate).
// Index 0 = January.
export const CLIMATE = [
  { high: 48, low: 36, rainDays: 18, solar: 5 },
  { high: 52, low: 37, rainDays: 15, solar: 9 },
  { high: 57, low: 40, rainDays: 17, solar: 15 },
  { high: 62, low: 43, rainDays: 15, solar: 22 },
  { high: 69, low: 48, rainDays: 11, solar: 27 },
  { high: 74, low: 53, rainDays: 7, solar: 30 },
  { high: 82, low: 57, rainDays: 2, solar: 34 },
  { high: 82, low: 58, rainDays: 3, solar: 30 },
  { high: 76, low: 53, rainDays: 6, solar: 22 },
  { high: 64, low: 46, rainDays: 12, solar: 12 },
  { high: 52, low: 40, rainDays: 18, solar: 6 },
  { high: 47, low: 36, rainDays: 19, solar: 4 },
];

export const WEATHER_TYPES = {
  clear: { label: 'Clear', solar: 1.4 },
  cloudy: { label: 'Cloudy', solar: 0.8 },
  fog: { label: 'Fog', solar: 0.6 },
  rain: { label: 'Rain', solar: 0.5, wetAfter: 30 },
  heavy_rain: { label: 'Heavy rain', solar: 0.3, wetAfter: 10 },
  windstorm: { label: 'Windstorm', solar: 0.5, wetAfter: 30 },
  snow: { label: 'Snow', solar: 0.1, speed: 0.6 },
};
