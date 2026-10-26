import { z } from 'astro/zod';
import raw from '../data/businesses.json';
import { businessLinks } from '../data/business-links';

const day = z.string().regex(/^\d{4}-\d{2}-\d{2}$/).refine(s => !Number.isNaN(Date.parse(s)) && new Date(s).toISOString().slice(0, 10) === s, 'Invalid calendar date');
const url = z.url().refine(s => /^https?:\/\//.test(s), 'Public HTTP URL required');
const slug = z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
const source = z.object({ id: z.string().min(1), url, type: z.enum(['official', 'business', 'onsite']), checkedAt: day }).strict();
const fact = z.object({ value: z.union([z.string(), z.number(), z.boolean(), z.null()]), sourceId: z.string().optional(), checkedAt: day.optional(), validFrom: day.optional(), validUntil: day.optional(), historical: z.boolean().optional(), note: z.string().optional() }).strict();
const record = z.object({
  id: slug, kind: z.enum(['food', 'hotel']), name: z.string().min(2), address: z.string().min(4),
  area: z.enum(['kincheng', 'jinhu', 'jinsha', 'jinning', 'lieyu']), category: z.string().min(1),
  legalName: z.string().optional(), registrationNumber: z.string().optional(), lodgingClass: z.enum(['hotel', 'homestay', 'restricted']).optional(), identityMatchNote: z.string().optional(),
  aliases: z.array(z.string()).optional(), brandId: z.string().optional(),
  contact: z.object({ phone: z.string().optional(), website: url.optional(), email: z.email().optional() }).strict().optional(),
  sources: z.array(source).min(1), verifiedFields: z.record(z.string(), z.array(z.string()).min(1)),
  status: z.object({ state: z.enum(['operating', 'temporary_closed', 'permanently_closed']), sourceId: z.string(), checkedAt: day, reason: z.string().optional() }).strict(),
  facts: z.record(z.string(), fact).optional(), filterFacts: z.array(z.string()).optional(),
  coordinates: z.object({ lat: z.number().min(24).max(25), lng: z.number().min(118).max(119), sourceId: z.string(), checkedAt: day, reuseAllowed: z.literal(true), reuseBasis: z.string().min(1) }).strict().optional(),
  publication: z.object({ level: z.enum(['directory', 'detail']), href: z.string().optional(), noindex: z.boolean().optional() }).strict(),
  detail: z.object({ decisionNotes: z.array(z.string().min(1)).min(1), connections: z.array(z.object({ href: z.string().regex(/^\/(areas|itineraries|food|hotels|attractions)\/[a-z0-9-]+\/$/), mode: z.string().min(1), basis: z.string().min(1) }).strict()).min(1) }).strict().optional(),
  synthetic: z.literal(false).optional(),
}).strict();
export type BusinessRecord = z.infer<typeof record>;
const today = new Date().toISOString().slice(0, 10);
const facilities = ['parking', 'breakfast', 'pickup', 'elevator', 'accessibility'];
const data = z.object({ version: z.literal(1), records: z.array(record) }).strict().superRefine((registry, ctx) => {
  const keys = new Set<string>(), registrations = new Set<string>(), hrefs = new Set<string>();
  const fail = (index: number, message: string) => ctx.addIssue({ code: 'custom', path: ['records', index], message });
  registry.records.forEach((b, i) => {
    const key = `${b.kind}:${b.id}`;
    if (keys.has(key)) fail(i, 'Duplicate business identity'); keys.add(key);
    const sourceMap = new Map(b.sources.map(s => [s.id, s]));
    if (sourceMap.size !== b.sources.length) fail(i, 'Duplicate source ID');
    const requireSource = (id: string | undefined, official = false) => {
      const s = id ? sourceMap.get(id) : undefined;
      if (!s || (official && s.type !== 'official')) fail(i, 'Missing authoritative source');
    };
    const verify = (field: string, official = false) => {
      const refs = b.verifiedFields[field];
      if (!refs?.length || !refs.some(id => sourceMap.has(id) && (!official || sourceMap.get(id)?.type === 'official'))) fail(i, `Missing field evidence: ${field}`);
      refs?.forEach(id => requireSource(id));
    };
    ['name', 'address', 'area', 'category'].forEach(field => verify(field));
    Object.entries(b.contact || {}).forEach(([field, value]) => { if (value) verify(`contact.${field}`); });
    b.sources.forEach(s => { if (s.checkedAt > today) fail(i, 'Future verification date'); });
    requireSource(b.status.sourceId);
    if (b.status.checkedAt > today) fail(i, 'Future status verification');
    if (b.status.state !== 'operating' && !b.status.reason) fail(i, 'Closure notice needs reason');
    if (b.kind === 'hotel') {
      if (b.lodgingClass === 'hotel' || b.lodgingClass === 'homestay') {
        if (!b.legalName || !b.registrationNumber) fail(i, 'Registered lodging identity required');
        verify('legalName', true); verify('registrationNumber', true);
        if (b.legalName !== b.name && !b.identityMatchNote) fail(i, 'Reconcile legal/trading names');
        if (b.registrationNumber && registrations.has(b.registrationNumber)) fail(i, 'Duplicate registration requires review');
        if (b.registrationNumber) registrations.add(b.registrationNumber);
      } else if (b.lodgingClass === 'restricted') {
        const eligibility = b.facts?.eligibility;
        if (!eligibility?.value) fail(i, 'Official eligibility needed');
        requireSource(eligibility?.sourceId, true);
      } else fail(i, 'Lodging class required');
    }
    Object.entries(b.facts || {}).forEach(([name, f]) => {
      if (f.value === null) return;
      requireSource(f.sourceId);
      if (!f.checkedAt || f.checkedAt > today) fail(i, 'Fact needs real check date');
      if (facilities.includes(name) && typeof f.value !== 'boolean') fail(i, 'Facilities must be true/false/unknown');
      if (f.validFrom && f.validUntil && f.validFrom > f.validUntil) fail(i, 'Reversed validity window');
      if (f.historical && !f.note) fail(i, 'Explain historical fact');
      if (!f.historical && ((f.validFrom && f.validFrom > today) || (f.validUntil && f.validUntil < today))) fail(i, 'Expired/inapplicable public fact');
    });
    b.filterFacts?.forEach(name => {
      const f = b.facts?.[name];
      if (!f || f.value !== true || f.historical) fail(i, 'Positive filters require current true fact');
    });
    if (b.coordinates) { requireSource(b.coordinates.sourceId); if (b.coordinates.checkedAt > today) fail(i, 'Future coordinate check'); }
    if (b.publication.level === 'detail') {
      const href = b.publication.href;
      if (!href || !new RegExp(`^/${b.kind === 'hotel' ? 'hotels' : 'food'}/[a-z0-9-]+/$`).test(href) || hrefs.has(href)) fail(i, 'Unique detail URL needed');
      if (href) hrefs.add(href);
      if (!b.detail) fail(i, 'Useful detail and route evidence needed');
      if (b.status.state !== 'operating' && !b.publication.noindex) fail(i, 'Closed detail must be noindex');
    }
  });
}).parse(raw);

export const businessCategoryNames: Record<string, string> = { restaurant: '餐廳', breakfast: '早餐', snack: '在地小吃', cafe: '咖啡甜點', beverage: '飲料', bakery: '麵包糕點', beef: '牛肉料理', dessert: '甜品', bar: '餐酒館', 'specialty-food-retail': '伴手禮食品門市', hotel: '旅館飯店', homestay: '民宿', restricted: '資格限定住宿' };
export const facilityNames: Record<string, string> = { parking: '停車', breakfast: '早餐', pickup: '接送', elevator: '電梯', accessibility: '無障礙' };
export const businessHref = (b: { id: string; kind: 'food' | 'hotel'; detailHref?: string }) => b.detailHref || `/${b.kind === 'hotel' ? 'hotels' : 'food'}/#business-${b.id}`;
function registrationSourceUrl(b: BusinessRecord) {
  const evidence = b.sources.filter(s => s.type === 'official' && b.verifiedFields.registrationNumber?.includes(s.id));
  // The service description may come from the operator; certificate links
  // must instead follow the official evidence for the registration field.
  return (evidence.find(s => /\/accommodation\/details\/|taiwanstay\.net\.tw\/|\/portal\/travel\/details\/hotel_/i.test(s.url)) || evidence[0])?.url;
}
export function getPublicBusinesses() {
  // Explicit field projection: internal notes and raw source payloads are never spread into UI data.
  return data.records.map(b => ({
    key: `${b.kind}:${b.id}`, id: b.id, kind: b.kind, name: b.name, aliases: b.aliases || [], address: b.address, area: b.area, category: b.category,
    lodgingClass: b.lodgingClass, legalName: b.legalName, registrationNumber: b.registrationNumber,
    registrationSourceUrl: registrationSourceUrl(b),
    phone: b.contact?.phone, website: b.contact?.website,
    sourceUrl: b.sources.find(s => s.id === b.status.sourceId)!.url, sources: b.sources.map(s => ({ url: s.url, checkedAt: s.checkedAt })),
    checkedAt: b.status.checkedAt, state: b.status.state,
    notice: b.status.state === 'operating' ? '公開資料供規劃參考；出發前另確認營業、供餐或入住條件。' : b.status.reason!,
    detailHref: b.publication.href || businessLinks[`${b.kind}:${b.id}`],
    filterFacts: b.filterFacts || [],
    facts: Object.entries(b.facts || {}).filter(([, f]) => f.value !== null && !f.historical).map(([name, f]) => ({ name, value: f.value, checkedAt: f.checkedAt!, sourceUrl: b.sources.find(s => s.id === f.sourceId)!.url, note: f.note })),
    coordinates: b.coordinates ? { lat: b.coordinates.lat, lng: b.coordinates.lng } : undefined,
    connections: b.detail?.connections || [],
  }));
}
export type PublicBusiness = ReturnType<typeof getPublicBusinesses>[number];
export const getBusinessRecords = () => data.records;
export function businessSchema(b: PublicBusiness) {
  return { '@type': b.kind === 'food' ? 'FoodEstablishment' : b.lodgingClass === 'hotel' ? 'Hotel' : 'LodgingBusiness',
    name: b.name, url: `https://kinmenguide.com${businessHref(b)}`, address: { '@type': 'PostalAddress', streetAddress: b.address, addressRegion: '金門縣', addressCountry: 'TW' },
    ...(b.phone ? { telephone: b.phone } : {}), ...(b.registrationNumber ? { identifier: b.registrationNumber } : {}) };
}
