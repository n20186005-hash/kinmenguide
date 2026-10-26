import fs from 'node:fs';
import assert from 'node:assert/strict';
import { load } from 'cheerio';
const registry = JSON.parse(fs.readFileSync('src/data/businesses.json', 'utf8'));
const records = registry.records;
assert.ok(records.some(b => b.kind === 'hotel') && records.some(b => b.kind === 'food'), 'Both lodging and food directories must be populated');
const catalogDocument = load(fs.readFileSync('dist/trip/index.html', 'utf8'));
const catalog = JSON.parse(catalogDocument('#trip-catalog').text());
const ids = new Set(catalog.map(p => p.id));
assert.equal(ids.size, catalog.length, 'Trip catalog identities must be unique across collections');
assert.ok(ids.has('juguang-tower'), 'Existing attraction IDs must remain compatible');
const map = load(fs.readFileSync('dist/map/index.html', 'utf8'));
for (const kind of ['food', 'hotel']) {
  const group = records.filter(b => b.kind === kind);
  const folder = kind === 'hotel' ? 'hotels' : 'food';
  const $ = load(fs.readFileSync(`dist/${folder}/index.html`, 'utf8'));
  assert.equal($('[data-business-card]').length, group.length, 'Directory count is entity count, not article count');
  const pageSize = Number($('[data-business-directory]').attr('data-page-size'));
  assert.ok(Number.isSafeInteger(pageSize) && pageSize > 0, 'A finite page size must be declared');
  const batches = $('[data-business-batch]');
  assert.equal(batches.length, Math.ceil(group.length / pageSize), 'SSR batches must contain the entire public directory');
  assert.equal(batches.filter('[open]').length, group.length ? 1 : 0, 'Only the first native batch starts expanded');
  batches.each((index, batch) => {
    assert.equal($(batch).find('[data-business-card]').length, Math.min(pageSize, group.length - index * pageSize), 'Each no-JS batch must stay bounded');
    assert.ok($(batch).find('summary').text().trim(), 'Native batches need a usable expand control');
  });
  assert.equal($('[data-business-form][hidden]').length, 1, 'Interactive-only filters must not present inert no-JS controls');
  console.log(`${folder}: ${group.length} SSR cards in ${batches.length} native batches of at most ${pageSize}; directory HTML ${fs.statSync(`dist/${folder}/index.html`).size} bytes.`);
  for (const b of group) {
    assert.ok(['directory', 'detail'].includes(b.publication.level) && !b.synthetic, 'Only approved public data may enter the site');
    const card = $(`[id="business-${b.id}"]`);
    assert.equal(card.length, 1, 'Each branch needs a single stable anchor');
    assert.equal(card.find('h3').text(), b.name);
    assert.ok(card.text().includes(b.address));
    assert.ok(card.find(`a[href="${b.sources.find(s => s.id === b.status.sourceId).url}"]`).length, 'Public source must be visible');
    if (kind === 'hotel') {
      if (b.lodgingClass === 'restricted') assert.ok(b.facts?.eligibility?.value && card.text().includes(b.facts.eligibility.value), 'Restricted lodging needs visible eligibility');
      else assert.ok(b.registrationNumber && card.text().includes(b.registrationNumber), 'Registered lodging needs visible certificate identity');
      if (b.registrationNumber) {
        const registrationLink = card.find('a').filter((_, a) => $(a).text().trim() === '核對官方登記 →');
        assert.equal(registrationLink.length, 1, `One registration evidence link required: ${b.id}`);
        const evidence = b.sources.filter(s => s.type === 'official' && b.verifiedFields.registrationNumber?.includes(s.id));
        assert.ok(evidence.some(s => s.url === registrationLink.attr('href')), `Registration link must lead to this certificate's official evidence, not a business website: ${b.id}`);
      }
      assert.ok(!card.find('[data-trip-add]').length || b.status.state === 'operating', 'Closed lodging cannot be offered as a planning recommendation');
    }
    if (b.status.state === 'operating') {
      assert.equal(card.find('[data-trip-add]').attr('data-trip-add'), `${kind}:${b.id}`);
      assert.ok(ids.has(`${kind}:${b.id}`), 'Add controls and trip catalog must agree');
    }
    if (!b.coordinates) {
      assert.equal(map(`[id="map-point-${kind}-${b.id}"] [data-pin]`).length, 0, 'Unknown coordinates must not become approximate pins');
    }
    for (const positive of b.filterFacts || []) assert.equal(b.facts?.[positive]?.value, true, 'Only verified true facts are positive filters');
    if (b.publication.level === 'detail') {
      const page = load(fs.readFileSync(`dist${b.publication.href}index.html`, 'utf8'));
      assert.equal(page('h1').text(), b.name);
      const graph = JSON.parse(page('script[type="application/ld+json"]').first().text())['@graph'];
      const entity = graph.find(n => ['Hotel', 'LodgingBusiness', 'FoodEstablishment'].includes(n['@type']));
      assert.equal(entity?.name, b.name);
      assert.equal(entity?.identifier, b.registrationNumber);
      assert.equal(entity?.aggregateRating, undefined, 'No imported or fabricated rating');
    }
  }
}
console.log(`Business audit passed: ${records.length} distinct public businesses; ${catalog.length} mixed trip entries; branch identities, sources, registrations, filters and missing-coordinate behavior verified.`);
