/** Shared display limit; every server-rendered batch remains reachable without JavaScript. */
export const BUSINESS_PAGE_SIZE = 12;

/** Dial the public main line; keep any extension in the visible phone label. */
export function businessPhoneHref(phone: string): string {
  const mainLine = phone.split(/\s*(?:#|分機|ext\.?|x)\s*\d+/i)[0];
  return `tel:${mainLine.replace(/[^+\d]/g, '')}`;
}

export function paginateBusinesses<T>(items: readonly T[], requestedPage = 1, requestedSize = BUSINESS_PAGE_SIZE) {
  const size = Number.isFinite(requestedSize) && requestedSize >= 1 ? Math.floor(requestedSize) : BUSINESS_PAGE_SIZE;
  const pages = Math.max(1, Math.ceil(items.length / size));
  const page = Math.min(pages, Math.max(1, Number.isFinite(requestedPage) ? Math.floor(requestedPage) : 1));
  const offset = (page - 1) * size;
  return { items: items.slice(offset, offset + size), page, pages, total: items.length,
    first: items.length ? offset + 1 : 0, last: Math.min(offset + size, items.length) };
}
