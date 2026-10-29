// Only map exact, source-backed names. Occupancy is not a bed configuration.
export const lodgingRoomNames: Record<string, string> = {
  single: '單人房', double: '雙人房', triple: '三人房', four: '四人房', suite: '套房',
  twin: '雙床房', largebed: '大床房',
};
const exact: Record<string, string> = { '單人房': 'single', '雙人房': 'double', '三人房': 'triple', '四人房': 'four', '套房': 'suite' };
const curated: Record<string, [string, string][]> = {
  'lodging-7959747c13f4': [['twin', '雙床房'], ['largebed', '大床雙人房'], ['double', '大床雙人房'], ['four', '四人房']],
  'lodging-afc54d0893d6': [['twin', '佳日102雙床房']],
};
export function lodgingRoomFilters(id: string, fact?: { value: unknown; historical?: boolean }): string[] {
  if (!fact || fact.historical || typeof fact.value !== 'string') return [];
  const parts = fact.value.split('、');
  const tags = parts.flatMap(p => exact[p] ? [exact[p]] : []);
  for (const [key, text] of curated[id] || []) if (fact.value.includes(text)) tags.push(key);
  return [...new Set(tags)];
}
