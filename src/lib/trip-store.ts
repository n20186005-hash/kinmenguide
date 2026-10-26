export const TRIP_KEY = 'kinmenguide-trip-v1';
export const MAX_STOPS = 60;
export const MAX_DAYS = 14;
export type TripStop = { id: string; day: number; time: string; note: string };
export type Trip = { version: 2; title: string; days: number; stops: TripStop[] };
export const emptyTrip = (): Trip => ({ version: 2, title: '我的金門旅行', days: 3, stops: [] });
export function parseTrip(raw: string | null): Trip {
  if (!raw) return emptyTrip();
  const value: unknown = JSON.parse(raw);
  if (!value || typeof value !== 'object' || !('version' in value) || (value.version !== 1 && value.version !== 2)) throw new Error('Unsupported trip');
  const data = value as Record<string, unknown>;
  // Keep attraction slugs unchanged. Only v2 can identify a food/hotel business;
  // never guess a namespace for legacy or unknown IDs.
  const validId = data.version === 1 ? /^[a-z0-9-]+$/ : /^(?:(?:food|hotel):)?[a-z0-9-]+$/;
  if (!Array.isArray(data.stops)) throw new Error('Invalid stops');
  const days = typeof data.days === 'number' && Number.isInteger(data.days) ? Math.max(1, Math.min(MAX_DAYS, data.days)) : 3;
  const ids = new Set<string>();
  const stops: TripStop[] = [];
  for (const item of data.stops) {
    if (!item || typeof item !== 'object' || typeof item.id !== 'string' || !validId.test(item.id) || ids.has(item.id)) continue;
    ids.add(item.id);
    stops.push({ id: item.id, day: Number.isInteger(item.day) ? Math.max(1, Math.min(days, item.day)) : 1,
      time: typeof item.time === 'string' && /^([01]\d|2[0-3]):[0-5]\d$/.test(item.time) ? item.time : '',
      note: typeof item.note === 'string' ? item.note.slice(0, 100) : '' });
    if (stops.length === MAX_STOPS) break;
  }
  return { version: 2, title: typeof data.title === 'string' ? data.title.slice(0, 40) : '我的金門旅行', days, stops };
}
let trip = emptyTrip();
let storageAvailable = true;
let warning = '';
function read() {
  try { trip = parseTrip(localStorage.getItem(TRIP_KEY)); }
  catch { trip = emptyTrip(); warning = '無法讀取已存行程。你仍可規劃，請先保存行程圖片。'; }
}
if (typeof window !== 'undefined') {
  read();
  window.addEventListener('pageshow', event => { if (event.persisted) { read(); window.dispatchEvent(new Event('trip-change')); } });
  window.addEventListener('storage', event => {
    if (event.key === TRIP_KEY || event.key === null) { read(); window.dispatchEvent(new Event('trip-change')); }
  });
}
export const getTrip = () => structuredClone(trip);
export const storageMessage = () => !storageAvailable ? '此瀏覽器無法保存行程，離開或重新整理後會遺失。請允許網站儲存；若已在清單頁，可先保存圖片。' : warning || '已儲存在此瀏覽器；下次回來可繼續編排，不會跨裝置同步。';
export function saveTrip(next: Trip) {
  trip = parseTrip(JSON.stringify(next));
  try { localStorage.setItem(TRIP_KEY, JSON.stringify(trip)); storageAvailable = true; warning = ''; }
  catch { storageAvailable = false; }
  window.dispatchEvent(new Event('trip-change'));
  return storageAvailable;
}
