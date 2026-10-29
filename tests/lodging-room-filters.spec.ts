import { test, expect } from '@playwright/test';
import { lodgingRoomFilters } from '../src/lib/lodging-room-filters';

test('room facets require explicit source text and never infer beds from occupancy', () => {
  expect(lodgingRoomFilters('other', { value: '單人房、雙人房' })).toEqual(['single', 'double']);
  expect(lodgingRoomFilters('other', { value: '雙人房' })).not.toContain('twin');
  expect(lodgingRoomFilters('other', { value: '四人房、六人房、雙人房' })).toEqual(['four', 'double']);
  expect(lodgingRoomFilters('other', { value: '雙床房但不保證' })).toEqual([]);
  expect(lodgingRoomFilters('lodging-7959747c13f4', { value: '雙床房、大床雙人房' })).toEqual(['twin', 'largebed', 'double']);
  expect(lodgingRoomFilters('lodging-7959747c13f4', { value: '雙床房', historical: true })).toEqual([]);
  expect(lodgingRoomFilters('lodging-afc54d0893d6', { value: '不存在的客房' })).toEqual([]);
});
