import { expect, test } from '@playwright/test';
import { ctripFacilityFor, ctripSnapshotFresh, mergeCtripFacilities } from '../src/lib/ctrip-facilities';

test('platform positives filter, negative and conflicted claims never become positives', () => {
  const sample = ctripFacilityFor('lodging-59130f8e4118')!;
  expect(sample.facilities.some(f => f.key === 'parking' && f.state === 'unavailable')).toBeTruthy();
  const merged = mergeCtripFacilities(['parking'], { parking: { value: true } }, sample);
  expect(merged.conflicts).toContain('parking');
  expect(merged.filterFacts).not.toContain('parking');
  expect(merged.filterFacts).toContain('luggageStorageAvailable');
});

test('paid or unavailable parent conflicts with an older claim of free service', () => {
  const base = ctripFacilityFor('lodging-59130f8e4118')!;
  const paid = { ...base, facilities: [{key:'parking',state:'available' as const,names:['停车场'],charge:'paid' as const}] };
  const result = mergeCtripFacilities(['parking','freeParking'], {parking:{value:true},freeParking:{value:true}}, paid);
  expect(result.filterFacts).toContain('parking');
  expect(result.filterFacts).not.toContain('freeParking');
  expect(result.conflicts).toContain('freeParking');
  const unavailable = {...paid, facilities: [{key:'parking',state:'unavailable' as const,names:['停车场'],charge:'unspecified' as const}]};
  const other = mergeCtripFacilities(['freeParking'], {freeParking:{value:true}}, unavailable);
  expect(other.filterFacts).not.toContain('freeParking');
  expect(other.conflicts).toContain('parking');
});

test('dated source snapshots become unavailable after the configured window', () => {
  const base = Date.parse('2026-10-28T00:00:00Z');
  expect(ctripSnapshotFresh('2026-10-28', 30, base + 30 * 86400000)).toBe(true);
  expect(ctripSnapshotFresh('2026-10-28', 30, base + 31 * 86400000)).toBe(false);
  expect(ctripSnapshotFresh('invalid', 90, base)).toBe(false);
});
