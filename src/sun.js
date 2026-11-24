// Sunrise and sunset for Aloha, Oregon (sunrise equation, accuracy about 1-2 min).
// The game clock uses Pacific Standard Time all year (UTC-8).

export const HOME_LAT = 45.4826;
export const HOME_LON = -122.8738;
const RAD = Math.PI / 180;

// Game minute 0 = 24 Nov 2026, 00:00 PST = 08:00 UTC.
export const EPOCH_UTC_MS = Date.UTC(2026, 10, 24, 8, 0, 0);

// Returns { rise, set } in minutes after local midnight for game day index `day` (0 = 24 Nov).
export function sunTimes(day, lat = HOME_LAT, lon = HOME_LON) {
  const localNoonMs = EPOCH_UTC_MS + day * 86400000 + 12 * 3600000;
  const jd = localNoonMs / 86400000 + 2440587.5;
  const n = Math.round(jd - 2451545.0 + 0.0008);
  const jStar = n - lon / 360;
  const M = (357.5291 + 0.98560028 * jStar) % 360;
  const C = 1.9148 * Math.sin(M * RAD) + 0.02 * Math.sin(2 * M * RAD) + 0.0003 * Math.sin(3 * M * RAD);
  const lambda = (M + C + 180 + 102.9372) % 360;
  const jTransit = 2451545.0 + jStar + 0.0053 * Math.sin(M * RAD) - 0.0069 * Math.sin(2 * lambda * RAD);
  const sinDec = Math.sin(lambda * RAD) * Math.sin(23.44 * RAD);
  const cosDec = Math.cos(Math.asin(sinDec));
  const cosW = (Math.sin(-0.833 * RAD) - Math.sin(lat * RAD) * sinDec) / (Math.cos(lat * RAD) * cosDec);
  const w = Math.acos(Math.max(-1, Math.min(1, cosW))) / RAD;
  const toLocalMin = (j) => ((j - 2440587.5) * 86400000 - (EPOCH_UTC_MS + day * 86400000)) / 60000;
  return { rise: toLocalMin(jTransit - w / 360), set: toLocalMin(jTransit + w / 360) };
}
