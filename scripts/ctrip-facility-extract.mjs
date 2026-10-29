import { load } from 'cheerio';
import fs from 'node:fs';
import { pathToFileURL } from 'node:url';

const clean = value => value.replace(/\s+/g, ' ').trim();
/** Extract source candidates only. Absence never means false; publication needs review. */
export function extractCtripFacilities(html) {
  const $ = load(html);
  const candidates = [];
  // Scope to the actual facilities section, excluding reviews and summary marketing badges.
  $('[class*="hotelFacilityNew_hotelFacilityNewA"]').each((_, root) => {
    $(root).find('[class*="hotelFacility-popular_descA"]').each((__, node) => {
      const row = $(node);
      const name = clean(row.find('[class*="hotelFacility-popular_detailDesc"]').first().text());
      if (!name) return;
      const label = clean(row.find('[class*="hotelFacility-popular_label"]').text());
      const rawText = clean(row.attr('aria-label') || [name, label].filter(Boolean).join(' '));
      const unavailable = (row.attr('class') || '').includes('descUnavail') ||
        row.find('[class~="ic-defect"], [class~="ic_defect"]').length > 0;
      // Only a standalone free label establishes unconditional free use. Mixed or
      // qualified offers remain unspecified and retain their complete source text.
      const mentionsFree = /免费|免費/.test(label);
      const charge = /^(?:免费|免費)[。.!！]?$/.test(label) ? 'free' :
        !mentionsFree && /收费|收費|付费|付費|(?:TWD|CNY|USD|RMB|¥|￥|NT\$)\s*\d|\d\s*(?:元|\/人|\/次)/i.test(label) ? 'paid' : 'unspecified';
      candidates.push({ name, available: !unavailable, charge, label, rawText });
    });
  });
  // Preserve differing states for review instead of silently resolving contradictions.
  return candidates.filter((item, index) => candidates.findIndex(other => JSON.stringify(other) === JSON.stringify(item)) === index);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const filename = process.argv[2];
  if (!filename) throw new Error('Usage: node scripts/ctrip-facility-extract.mjs HTML_FILE');
  process.stdout.write(JSON.stringify(extractCtripFacilities(fs.readFileSync(filename, 'utf8')), null, 2) + '\n');
}
