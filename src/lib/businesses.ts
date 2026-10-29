import { z } from 'astro/zod';
import { lodgingRoomFilters } from './lodging-room-filters';
import { ctripFacilityFor, ctripFacilityNames, mergeCtripFacilities } from './ctrip-facilities';
import raw from '../data/businesses.json';
import { businessLinks } from '../data/business-links';
import { canPlanBusiness, canShowBusinessReference, governmentRegistrationUrl } from './business-eligibility';

const day = z.string().regex(/^\d{4}-\d{2}-\d{2}$/).refine(s => !Number.isNaN(Date.parse(s)) && new Date(s).toISOString().slice(0, 10) === s, 'Invalid calendar date');
const url = z.url().refine(s => /^https?:\/\//.test(s), 'Public HTTP URL required');
const slug = z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
const source = z.object({ id: z.string().min(1), url, type: z.enum(['official', 'business', 'onsite', 'maps-manual']), checkedAt: day }).strict();
const fact = z.object({ value: z.union([z.string(), z.number(), z.boolean(), z.null()]), sourceId: z.string().optional(), checkedAt: day.optional(), validFrom: day.optional(), validUntil: day.optional(), historical: z.boolean().optional(), note: z.string().optional() }).strict();
const record = z.object({
  id: slug, kind: z.enum(['food', 'hotel']), name: z.string().min(2), address: z.string().min(4),
  area: z.enum(['kincheng', 'jinhu', 'jinsha', 'jinning', 'lieyu']), category: z.string().min(1),
  legalName: z.string().optional(), registrationNumber: z.string().optional(), lodgingClass: z.enum(['hotel', 'homestay', 'tourist_hotel', 'restricted']).optional(), identityMatchNote: z.string().optional(),
  aliases: z.array(z.string()).optional(), brandId: z.string().optional(),
  contact: z.object({ phone: z.string().optional(), website: url.optional(), email: z.email().optional() }).strict().optional(),
  sources: z.array(source).min(1), verifiedFields: z.record(z.string(), z.array(z.string()).min(1)),
  status: z.object({ state: z.enum(['operating', 'unverified', 'temporary_closed', 'permanently_closed']), sourceId: z.string(), checkedAt: day, reason: z.string().optional() }).strict(),
  facts: z.record(z.string(), fact).optional(), filterFacts: z.array(z.string()).optional(),
  coordinates: z.object({ lat: z.number().min(24).max(25), lng: z.number().min(118).max(119), sourceId: z.string(), checkedAt: day, reuseAllowed: z.literal(true), reuseBasis: z.string().min(1) }).strict().optional(),
  publication: z.object({ level: z.enum(['directory', 'detail']), href: z.string().optional(), noindex: z.boolean().optional() }).strict(),
  detail: z.object({ decisionNotes: z.array(z.string().min(1)).min(1), connections: z.array(z.object({ href: z.string().regex(/^\/(areas|itineraries|food|hotels|attractions)\/[a-z0-9-]+\/$/), mode: z.string().min(1), basis: z.string().min(1) }).strict()).min(1) }).strict().optional(),
  synthetic: z.literal(false).optional(),
}).strict();
export type BusinessRecord = z.infer<typeof record>;
const today = new Date().toISOString().slice(0, 10);
const facilities = ['parking', 'breakfast', 'pickup', 'elevator', 'accessibility', 'freeParking', 'laundryMachine', 'luggageStorageAvailable', 'restaurantAvailable', 'freeAirportPickup', ...Object.keys(ctripFacilityNames)];
export const lodgingStyleNames: Record<string, string> = { dormitory: '床位／宿舍房', 'private-room': '獨立客房', 'whole-house': '包棟', mixed: '多種住宿形式', restricted: '資格限定住宿', backpacker: '背包客住宿', 'traditional-house': '傳統建築住宿', business: '商務住宿', resort: '渡假住宿' };
const registrationStates = ['government-listed', 'historical-only', 'pending'];
const operationStates = ['unverified', 'operating', 'temporary_closed', 'permanently_closed'];
function googleMapCid(value: string) {
  const parsed = new URL(value);
  return /(^|\.)google\.(com|com\.tw)$/i.test(parsed.hostname) && parsed.pathname.startsWith('/maps') ? parsed.searchParams.get('cid') : null;
}
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
      if (!refs?.length || !refs.some(id => sourceMap.has(id) && sourceMap.get(id)?.type !== 'maps-manual' && (!official || sourceMap.get(id)?.type === 'official'))) fail(i, `Missing field evidence: ${field}`);
      refs?.forEach(id => requireSource(id));
      if (refs?.some(id => sourceMap.get(id)?.type === 'maps-manual')) fail(i, 'Manual map evidence only supports verifiedMapCid, not affirmative public fields');
    };
    ['name', 'address', 'area', 'category'].forEach(field => verify(field));
    Object.entries(b.contact || {}).forEach(([field, value]) => { if (value) verify(`contact.${field}`); });
    b.sources.forEach(s => { if (s.checkedAt > today) fail(i, 'Future verification date'); });
    requireSource(b.status.sourceId);
    if (sourceMap.get(b.status.sourceId)?.type === 'maps-manual') fail(i, 'Manual map evidence cannot establish service or operation status');
    if (b.status.checkedAt > today) fail(i, 'Future status verification');
    if (['temporary_closed', 'permanently_closed'].includes(b.status.state) && !b.status.reason) fail(i, 'Closure notice needs reason');
    if (b.kind === 'hotel') {
      if (b.lodgingClass === 'hotel' || b.lodgingClass === 'homestay' || b.lodgingClass === 'tourist_hotel') {
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
      const registration = b.facts?.registrationStatus;
      if (registration && registration.value !== null) {
        if (typeof registration.value !== 'string' || !registrationStates.includes(registration.value)) fail(i, 'Unknown lodging registration status');
        requireSource(registration.sourceId, true);
        const evidence = registration.sourceId ? sourceMap.get(registration.sourceId) : undefined;
        if (registration.value === 'government-listed' && evidence && !governmentRegistrationUrl(evidence.url)) fail(i, 'Government listing needs a government registration source, not a tourism directory');
      }
      const actual = b.facts?.actualOperationStatus;
      if (actual && actual.value !== null && (typeof actual.value !== 'string' || !operationStates.includes(actual.value))) fail(i, 'Unknown actual lodging operation status');
      if (actual?.value === 'operating') {
        const evidence = actual.sourceId ? sourceMap.get(actual.sourceId) : undefined;
        if (!evidence || !['business', 'onsite'].includes(evidence.type)) fail(i, 'Actual operation needs business or onsite evidence');
      }
      const style = b.facts?.lodgingStyle;
      if (style && style.value !== null && (typeof style.value !== 'string' || !Object.hasOwn(lodgingStyleNames, style.value))) fail(i, 'Unknown lodging form');
      if (style?.value !== undefined && style.value !== null && sourceMap.get(style.sourceId || '')?.type === 'maps-manual') fail(i, 'Lodging form needs explicit official or business evidence');
    }
    const mapCid = b.facts?.verifiedMapCid;
    if (mapCid && mapCid.value !== null) {
      const evidence = mapCid.sourceId ? sourceMap.get(mapCid.sourceId) : undefined;
      if (typeof mapCid.value !== 'string' || !/^\d{1,20}$/.test(mapCid.value) || !evidence || evidence.type !== 'maps-manual' || googleMapCid(evidence.url) !== mapCid.value) fail(i, 'Verified map CID needs the matching manual map source');
    }
    Object.entries(b.facts || {}).forEach(([name, f]) => {
      if (f.value === null) return;
      requireSource(f.sourceId);
      if (name !== 'verifiedMapCid' && sourceMap.get(f.sourceId || '')?.type === 'maps-manual') fail(i, 'Manual map evidence only supports verifiedMapCid');
      if (!f.checkedAt || f.checkedAt > today) fail(i, 'Fact needs real check date');
      if (facilities.includes(name) && typeof f.value !== 'boolean') fail(i, 'Facilities must be true/false/unknown');
      if (f.validFrom && f.validUntil && f.validFrom > f.validUntil) fail(i, 'Reversed validity window');
      if (f.historical && !f.note) fail(i, 'Explain historical fact');
      if (!f.historical && ((f.validFrom && f.validFrom > today) || (f.validUntil && f.validUntil < today))) fail(i, 'Expired/inapplicable public fact');
    });
    b.filterFacts?.forEach(name => {
      const f = b.facts?.[name];
      if (!facilities.includes(name)) fail(i, 'Positive filters need a supported public facility label');
      if (!f || f.value !== true || f.historical) fail(i, 'Positive filters require current true fact');
    });
    if (b.coordinates) {
      requireSource(b.coordinates.sourceId);
      if (sourceMap.get(b.coordinates.sourceId)?.type === 'maps-manual') fail(i, 'A manual Google map match does not grant coordinate reuse');
      if (b.coordinates.checkedAt > today) fail(i, 'Future coordinate check');
    }
    if (b.publication.level === 'detail') {
      const href = b.publication.href;
      if (!href || !new RegExp(`^/${b.kind === 'hotel' ? 'hotels' : 'food'}/[a-z0-9-]+/$`).test(href) || hrefs.has(href)) fail(i, 'Unique detail URL needed');
      if (href) hrefs.add(href);
      if (!b.detail) fail(i, 'Useful detail and route evidence needed');
      if (b.status.state !== 'operating' && !b.publication.noindex) fail(i, 'Closed detail must be noindex');
    }
  });
}).parse(raw);

export const businessCategoryNames: Record<string, string> = { restaurant: '餐廳', breakfast: '早餐', snack: '在地小吃', cafe: '咖啡甜點', beverage: '飲料', bakery: '麵包糕點', beef: '牛肉料理', dessert: '甜品', bar: '餐酒館', 'specialty-food-retail': '伴手禮食品門市', hotel: '旅館', homestay: '民宿', tourist_hotel: '觀光旅館', restricted: '資格限定住宿' };
export const facilityNames: Record<string, string> = { parking: '停車', breakfast: '早餐', pickup: '接送', elevator: '電梯', accessibility: '無障礙', freeParking: '免費停車', laundryMachine: '洗衣設備', luggageStorageAvailable: '行李寄放', restaurantAvailable: '餐廳', freeAirportPickup: '免費機場接送', ...ctripFacilityNames };
export const businessHref = (b: { id: string; kind: 'food' | 'hotel'; detailHref?: string }) => b.detailHref || `/${b.kind === 'hotel' ? 'hotels' : 'food'}/#business-${b.id}`;
function registrationSourceUrl(b: BusinessRecord) {
  const registration = b.facts?.registrationStatus;
  if (registration?.sourceId) return b.sources.find(s => s.type === 'official' && s.id === registration.sourceId)?.url;
  const evidence = b.sources.filter(s => s.type === 'official' && b.verifiedFields.registrationNumber?.includes(s.id));
  // The service description may come from the operator; certificate links
  // must instead follow the official evidence for the registration field.
  return (evidence.find(s => governmentRegistrationUrl(s.url)) || evidence[0])?.url;
}
function ctripForPublic(b: BusinessRecord) {
  if (b.kind !== 'hotel' || ['temporary_closed', 'permanently_closed'].includes(b.status.state) || ['temporary_closed', 'permanently_closed'].includes(String(b.facts?.actualOperationStatus?.value || ''))) return undefined;
  return ctripFacilityFor(b.id);
}
export function getPublicBusinesses() {
  // Explicit field projection: internal notes and raw source payloads are never spread into UI data.
  return data.records.map(b => ({
    key: `${b.kind}:${b.id}`, id: b.id, kind: b.kind, name: b.name, aliases: b.aliases || [], address: b.address, area: b.area, category: b.category,
    canPlan: canPlanBusiness(b),
    canRecommendOperating: canPlanBusiness(b), canShowReference: canShowBusinessReference(b),
    lodgingClass: b.lodgingClass, legalName: b.legalName, registrationNumber: b.registrationNumber,
    registrationSourceUrl: registrationSourceUrl(b),
    registrationStatus: b.facts?.registrationStatus?.historical ? 'historical-only' : typeof b.facts?.registrationStatus?.value === 'string' ? b.facts.registrationStatus.value : 'pending',
    registrationCheckedAt: b.facts?.registrationStatus?.checkedAt,
    registrationNote: b.facts?.registrationStatus?.note,
    actualOperationStatus: typeof b.facts?.actualOperationStatus?.value === 'string' && !b.facts.actualOperationStatus.historical ? b.facts.actualOperationStatus.value : 'unverified',
    actualOperationCheckedAt: b.facts?.actualOperationStatus?.checkedAt,
    lodgingStyle: typeof b.facts?.lodgingStyle?.value === 'string' && !b.facts.lodgingStyle.historical ? b.facts.lodgingStyle.value : undefined,
    verifiedMapUrl: typeof b.facts?.verifiedMapCid?.value === 'string' && !b.facts.verifiedMapCid.historical ? `https://www.google.com/maps?cid=${b.facts.verifiedMapCid.value}` : undefined,
    phone: b.contact?.phone, website: b.contact?.website,
    websiteLabel: b.facts?.websiteSource ? '政府資料所列網站' : '業者網站',
    sourceUrl: b.sources.find(s => s.id === b.status.sourceId)!.url, sources: b.sources.map(s => ({ url: s.url, checkedAt: s.checkedAt })),
    checkedAt: b.status.checkedAt, state: b.status.state,
    notice: b.kind === 'hotel' && !canPlanBusiness(b) && !['temporary_closed', 'permanently_closed'].includes(b.status.state) ? '此筆提供住宿資料參考；實際入住服務尚待確認，請先向業者核對。' : b.status.state === 'operating' ? '公開資料供規劃參考；出發前另確認營業、供餐或入住條件。' : b.status.state === 'unverified' ? '此筆提供住宿基本資料；入住服務與訂房條件尚待確認。' : b.status.reason!,
    detailHref: b.publication.href || businessLinks[`${b.kind}:${b.id}`],
    filterFacts: mergeCtripFacilities(b.filterFacts || [], b.facts, ctripForPublic(b)).filterFacts,
    baseFilterFacts: b.filterFacts || [],
    ctripFacilities: ctripForPublic(b),
    ctripFacilityConflicts: mergeCtripFacilities(b.filterFacts || [], b.facts, ctripForPublic(b)).conflicts,
    roomFilters: b.kind === 'hotel' ? lodgingRoomFilters(b.id, b.facts?.roomTypes) : [],
    facts: Object.entries(b.facts || {}).filter(([, f]) => f.value !== null && !f.historical).map(([name, f]) => ({ name, value: f.value, checkedAt: f.checkedAt!, sourceUrl: b.sources.find(s => s.id === f.sourceId)!.url, note: f.note })),
    coordinates: b.coordinates ? { lat: b.coordinates.lat, lng: b.coordinates.lng } : undefined,
    connections: b.detail?.connections || [],
  }));
}
export type PublicBusiness = ReturnType<typeof getPublicBusinesses>[number];
export const getBusinessRecords = () => data.records;
export function businessSchema(b: PublicBusiness) {
  return { '@type': b.kind === 'food' ? 'FoodEstablishment' : ['hotel', 'tourist_hotel'].includes(b.lodgingClass || '') ? 'Hotel' : 'LodgingBusiness',
    name: b.name, url: `https://kinmenguide.com${businessHref(b)}`, address: { '@type': 'PostalAddress', streetAddress: b.address, addressRegion: '金門縣', addressCountry: 'TW' },
    ...(b.phone ? { telephone: b.phone } : {}), ...(b.registrationNumber ? { identifier: b.registrationNumber } : {}) };
}
