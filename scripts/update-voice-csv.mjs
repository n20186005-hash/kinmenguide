// Rebuild docs/editorial-voice-migration.csv from the content tree.
// Existing per-page tracking (batch, status, live check, notes) is preserved;
// routeGuide and banned-phrase columns are always recomputed from source.
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const csvPath = path.join(root, 'docs/editorial-voice-migration.csv');
const header = 'collection,slug,batch,status,routeGuide,bannedPhrases,liveCheck,notes';
const banned = [
  /親訪/, /非現場/, /非實地/, /實地訪查/, /現勘/, /已實地體驗/,
  /當日房況仍待確認|即時房況仍待確認|即時空房仍待確認|即時房態仍待確認|當日營業仍待確認|當日營業與房況仍待確認|當日營業與即時房況仍待確認|當日營業及即時房況仍待確認|當日營運及空房仍待確認|當天服務仍待確認|目前營運狀況仍待確認|電話與當日房況仍待確認|可訂房態及接待仍待確認|值勤狀態仍待確認/,
  /第三方指南[，,]\s*非|並非管理機關官方網站|本站是獨立旅遊指南[，,]\s*不是景點管理單位/,
  /我(曾|親自|實地|當天|走進|實際)|筆者(親|實地)|親身(走|體驗|試)|我們(走進|實地|當天看到)/
];

const existing = new Map();
if (fs.existsSync(csvPath)) {
  for (const line of fs.readFileSync(csvPath, 'utf8').trim().split(/\r?\n/).slice(1)) {
    const row = line.split(',');
    existing.set(`${row[0]}/${row[1]}`, row);
  }
}

const contentRoot = path.join(root, 'src/content');
const files = [];
for (const collection of fs.readdirSync(contentRoot, { withFileTypes: true })) {
  if (!collection.isDirectory()) continue;
  const base = path.join(contentRoot, collection.name);
  for (const file of fs.readdirSync(base, { withFileTypes: true })) {
    if (!file.isDirectory() && file.name.endsWith('.md')) {
      files.push({ key: `${collection.name}/${file.name.replace(/\.md$/, '')}`, path: path.join(base, file.name) });
    }
  }
}
files.sort((a, b) => a.key.localeCompare(b.key));

const rows = [header];
let cleared = 0, rewritten = 0, done = 0;
for (const { key, path: file } of files) {
  const text = fs.readFileSync(file, 'utf8');
  const frontmatter = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  let hasGuide = false;
  if (frontmatter) {
    try { hasGuide = Boolean(JSON.parse(frontmatter[1]).routeGuide); }
    catch { /* verify-editorial-voice.mjs reports the parse error */ }
  }
  const bannedCount = text.split(/\r?\n/).filter(line => banned.some(pattern => pattern.test(line))).length;
  const previous = existing.get(key);
  const [collection, slug] = key.split('/');
  let status = previous?.[3] ?? (hasGuide ? 'AWAITING_LIVE_CHECK' : 'CLEARED');
  let liveCheck = previous?.[6] ?? 'PENDING';
  if (hasGuide && status === 'CLEARED') status = 'AWAITING_LIVE_CHECK';
  if (!hasGuide && status !== 'CLEARED') { status = 'CLEARED'; liveCheck = 'PENDING'; }
  if (status === 'DONE') done++;
  else if (status === 'AWAITING_LIVE_CHECK') rewritten++;
  else cleared++;
  rows.push([
    collection,
    slug,
    previous?.[2] ?? 'sweep-2026-11-25',
    status,
    hasGuide ? 'yes' : 'no',
    String(bannedCount),
    liveCheck,
    previous?.[7] ?? '-'
  ].join(','));
}

fs.writeFileSync(csvPath, rows.join('\n') + '\n', 'utf8');
console.log(`Tracked ${files.length} pages: ${cleared} CLEARED, ${rewritten} AWAITING_LIVE_CHECK, ${done} DONE.`);
console.log('Live checks and DONE status must be set by hand after an independent URL inspection.');
