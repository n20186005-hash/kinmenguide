import { test, expect } from '@playwright/test';
import { BUSINESS_PAGE_SIZE, paginateBusinesses, businessPhoneHref } from '../src/lib/business-directory';

test('hundreds of directory entries paginate without gaps or duplicate identities', () => {
  const entries = Array.from({ length: BUSINESS_PAGE_SIZE * 23 + 5 }, (_, id) => ({ id }));
  const first = paginateBusinesses(entries);
  expect(first.items).toHaveLength(BUSINESS_PAGE_SIZE);
  expect(first.first).toBe(1);
  const seen = Array.from({ length: first.pages }, (_, i) => paginateBusinesses(entries, i + 1).items).flat();
  expect(seen).toEqual(entries);
  expect(new Set(seen.map(entry => entry.id)).size).toBe(entries.length);
  const last = paginateBusinesses(entries, 1000);
  expect(last.items).toHaveLength(5);
  expect(last.last).toBe(entries.length);
  expect(last.page).toBe(first.pages);
});

test('empty filtered results and out-of-range pages have truthful ranges', () => {
  expect(paginateBusinesses([], 9)).toMatchObject({ items: [], page: 1, pages: 1, total: 0, first: 0, last: 0 });
  const entries = Array.from({ length: BUSINESS_PAGE_SIZE + 2 }, (_, id) => id);
  expect(paginateBusinesses(entries, -4).items).toEqual(entries.slice(0, BUSINESS_PAGE_SIZE));
  expect(paginateBusinesses(entries, Number.NaN, 0).items).toHaveLength(BUSINESS_PAGE_SIZE);
  const filtered = entries.filter(id => id % 2 === 0);
  expect(paginateBusinesses(filtered, 99)).toMatchObject({ total: filtered.length, page: 1, first: 1, last: filtered.length });
});

// A published main line with a separate extension must not dial a longer number.
test('business phone links dial main lines while labels can retain extensions', () => {
  expect(businessPhoneHref('+886-82-338888 #628')).toBe('tel:+88682338888');
  expect(businessPhoneHref('082-338888 分機 628')).toBe('tel:082338888');
  expect(businessPhoneHref('082-338888 ext. 628')).toBe('tel:082338888');
  expect(businessPhoneHref('082-371456')).toBe('tel:082371456');
});
