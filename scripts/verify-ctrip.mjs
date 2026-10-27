import fs from 'node:fs';
import assert from 'node:assert/strict';
import { load } from 'cheerio';
const registry = JSON.parse(fs.readFileSync('src/data/businesses.json','utf8')).records;
const $ = load(fs.readFileSync('dist/hotels/index.html','utf8'));
const links = $('[data-business-card] [data-ctrip-business]').toArray();
const seen = new Set();
for (const node of links) {
  const link=$(node), id=link.attr('data-ctrip-business'), href=link.attr('href');
  assert.ok(id && !seen.has(id), 'Each matched business must occur once'); seen.add(id);
  const b=registry.find(r=>r.kind==='hotel' && r.id===id); assert.ok(b, 'Ctrip link needs a known lodging');
  const sponsored = link.attr('rel')?.split(' ').includes('sponsored');
  if (sponsored) {
    assert.match(href || '', /^https:\/\/t\.ctrip\.cn\/[A-Za-z0-9]+$/, 'Ctrip-generated short link');
    assert.ok(link.parent().text().includes('可能獲得佣金'), 'Affiliate disclosure beside directory link');
  } else {
    assert.match(href || '', /^https:\/\/hotels\.ctrip\.com\/hotels\/\d+\.html$/, 'Ordinary single-property URL without dates or fabricated tracking');
  }
  assert.ok(link.attr('rel')?.includes('noopener noreferrer'));
  const card=link.closest('[data-business-card]');
  const details=card.find('h3 a').attr('href'); assert.match(details || '', /^\/hotels\/[a-z0-9-]+\/$/);
  const page=load(fs.readFileSync(`dist${details}index.html`,'utf8'));
  assert.equal(page('h1').text(),b.name);
  assert.equal(page(`[data-ctrip-business="${id}"]`).attr('href'),href);
  assert.equal(page('link[rel="canonical"]').attr('href'),`https://kinmenguide.com${details}`);
  assert.ok(page('body').text().includes('實際營業'), 'Display unverified operation');
  assert.equal(page(`[data-ctrip-business="${id}"]`).attr('rel'), link.attr('rel'));
  if (sponsored) assert.ok(page(`[data-ctrip-business="${id}"]`).parent().text().includes('可能獲得佣金'), 'Affiliate disclosure beside detail link');
}
assert.ok(seen.size > 0, 'Ctrip integration must have a confirmed hotel');
for (const id of ['lodging-fd9dfbb1c47c','lodging-59130f8e4118']) assert.ok(!seen.has(id), 'Address conflicts must not get a booking link');
console.log(`Ctrip audit passed: ${seen.size} matched single-property links, detail identities and unverified-operation notices.`);
