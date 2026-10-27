type EligibilityRecord = {
  kind: string;
  status: { state: string };
  facts?: Record<string, { value: unknown; historical?: boolean }>;
};

/** Source-reported service is separate from verified operation and registration. */
export function canPlanBusiness(business: EligibilityRecord) {
  if (business.kind !== 'hotel') return business.status.state === 'operating';
  const operation = business.facts?.actualOperationStatus;
  const registration = business.facts?.registrationStatus;
  return operation?.value === 'operating' && !operation.historical
    && registration?.value === 'government-listed' && !registration.historical;
}

export function canShowBusinessReference(business: EligibilityRecord) {
  if (business.kind !== 'hotel') return canPlanBusiness(business);
  const registration = business.facts?.registrationStatus;
  const operation = business.facts?.actualOperationStatus;
  return registration?.value === 'government-listed' && !registration.historical
    && !['temporary_closed', 'permanently_closed'].includes(String(operation?.value))
    && !['temporary_closed', 'permanently_closed'].includes(business.status.state);
}

/** Current registration accepts only the live legal-lodging query routes.
 * Historical county notices/PDFs remain source links and cannot authorize this state.
 */
export function governmentRegistrationUrl(value: string) {
  let parsed: URL;
  try { parsed = new URL(value); } catch { return false; }
  if (!['https:', 'http:'].includes(parsed.protocol)) return false;
  if (['taiwanstay.net.tw', 'www.taiwanstay.net.tw', 'twpic.taiwanstay.net.tw'].includes(parsed.hostname)) {
    if (/^\/TSA\/web_page\/TSA020200\.jsp$/i.test(parsed.pathname)) return /^\d+$/.test(parsed.searchParams.get('hohi_id') || '');
    return /^\/TSA\/web_page\/TSA020100\.jsp$/i.test(parsed.pathname) && parsed.searchParams.get('hoci_city1') === '金門縣';
  }
  return false;
}
