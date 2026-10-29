import { z } from 'astro/zod';
import snapshot from '../data/ctrip-facilities.json' with { type: 'json' };
import { ctripHotelFor } from './ctrip';

export const ctripFacilityNames: Record<string, string> = {
  laundryService: '洗衣服務', wakeUpService: '叫醒服務', frontDesk24: '24 小時前台',
  smokingArea: '吸菸區', meetingRoom: '會議廳', businessCenter: '商務中心',
  gym: '健身室', outdoorPool: '室外泳池', barbecue: '燒烤', bar: '酒吧',
  valetParking: '代客泊車', evCharging: '充電車位', gamesRoom: '棋牌室', publicWifi: '公共區 Wi-Fi',
};
const facility = z.object({ key: z.string().min(1), state: z.enum(['available', 'unavailable', 'conflict']), names: z.array(z.string().min(1)).min(1), charge: z.enum(['free', 'paid', 'unspecified']) }).strict();
const schema = z.object({ version: z.literal(1), records: z.array(z.object({ businessId: z.string(), hotelId: z.string().regex(/^\d+$/), checkedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}$/), facilities: z.array(facility), rating: z.object({diamond:z.number().int().min(1).max(5).optional(), score:z.number().min(0).max(5).optional(), reviews:z.number().int().min(0).optional()}).strict().optional() }).strict()) }).strict();
const data = schema.parse(snapshot);
const entries = new Map<string, (typeof data.records)[number]>();
const supported = new Set(['parking', 'pickup', 'elevator', 'luggageStorageAvailable', 'restaurantAvailable', 'laundryMachine', 'freeParking', 'freeAirportPickup', ...Object.keys(ctripFacilityNames)]);
for (const entry of data.records) {
  if (entries.has(entry.businessId) || ctripHotelFor(entry.businessId)?.hotelId !== entry.hotelId || new Set(entry.facilities.map(f => f.key)).size !== entry.facilities.length) throw new Error(`Invalid Ctrip facilities identity: ${entry.businessId}`);
  if (entry.facilities.some(f => !supported.has(f.key) || (['freeParking', 'freeAirportPickup'].includes(f.key) && (f.state !== 'available' || f.charge !== 'free')))) throw new Error(`Invalid Ctrip facility: ${entry.businessId}`);
  entries.set(entry.businessId, entry);
}
export function ctripFacilityFor(id: string) { return entries.get(id); }
export function ctripSnapshotFresh(date: string | undefined, maxDays: number, now = Date.now()) {
  const checked = Date.parse((date || '') + 'T00:00:00Z');
  const age = now - checked; return Number.isFinite(age) && age >= 0 && age < (maxDays + 1) * 86400000;
}
export function mergeCtripFacilities(existing: string[], existingFacts: Record<string, { value: unknown; historical?: boolean }> | undefined, source: ReturnType<typeof ctripFacilityFor>) {
  const result = new Set(existing), conflicts = new Set<string>();
  if (!source || !ctripSnapshotFresh(source.checkedAt, 90)) return { filterFacts: [...result], conflicts: [] };
  for (const f of source?.facilities || []) {
    const prior = existingFacts?.[f.key];
    const priorValue = !prior?.historical && typeof prior?.value === 'boolean' ? prior.value : undefined;
    const conflictsPrior = priorValue !== undefined && f.state !== 'conflict' && (f.state === 'available') !== priorValue;
    if (f.state === 'conflict' || conflictsPrior) { conflicts.add(f.key); result.delete(f.key); }
    else if (f.state === 'available') result.add(f.key);
  }
  for (const [parent, child] of [['parking', 'freeParking'], ['pickup', 'freeAirportPickup']] as const) {
    const platform = source.facilities.find(f => f.key === parent);
    const previous = existingFacts?.[child];
    if (platform && previous?.value === true && !previous.historical && (platform.state !== 'available' || platform.charge === 'paid')) {
      conflicts.add(child); result.delete(child);
      if (platform.state !== 'available') { conflicts.add(parent); result.delete(parent); }
    }
  }
  // A free facility cannot satisfy a broad parent if that parent has conflicting evidence.
  if (conflicts.has('parking')) result.delete('freeParking');
  if (conflicts.has('pickup')) result.delete('freeAirportPickup');
  return { filterFacts: [...result], conflicts: [...conflicts] };
}
