import { ctripHotels } from '../data/ctrip-hotels';

// Each URL has been checked against the accommodation's name and complete address.
// No affiliate link is published until it is actually generated and verified.
const ids = new Set<string>();
for (const [businessId, hotel] of Object.entries(ctripHotels)) {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(businessId) || !/^\d+$/.test(hotel.hotelId) || ids.has(hotel.hotelId)) throw new Error(`Invalid or duplicate Ctrip identity: ${businessId}`);
  const url = new URL(hotel.url);
  if (url.origin !== 'https://hotels.ctrip.com' || url.pathname !== `/hotels/${hotel.hotelId}.html` || url.search || url.hash) throw new Error(`Invalid Ctrip hotel URL: ${businessId}`);
  if (hotel.affiliate) {
    const affiliate = hotel.affiliate;
    if (affiliate.generatedBy !== 'ctrip-alliance' || affiliate.verifiedHotelId !== hotel.hotelId || !Number.isFinite(Date.parse(affiliate.generatedAt)) || !Number.isFinite(Date.parse(affiliate.verifiedAt)) || new URL(affiliate.url).protocol !== 'https:') throw new Error(`Unverified affiliate link: ${businessId}`);
  }
  ids.add(hotel.hotelId);
}
export const ctripHotelFor = (businessId: string) => ctripHotels[businessId];
