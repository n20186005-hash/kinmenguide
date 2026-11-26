import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const read = p => fs.readFileSync(path.join(root, p), 'utf8');
const walk = dir => fs.readdirSync(path.join(root, dir), { withFileTypes: true }).flatMap(entry => {
  const rel = path.join(dir, entry.name);
  return entry.isDirectory() ? walk(rel) : [rel.replace(/\\/g, '/')];
});

const sourceDirs = ['src/content', 'src/pages', 'src/components', 'src/layouts', 'src/data'];
const sourceFiles = sourceDirs.flatMap(walk).filter(f => /\.(md|astro|ts|json)$/.test(f));
sourceFiles.push('README.md');

// Language rules live in docs/editorial-voice-rules.md §4; keep both lists in sync.
const banned = [
  ['親訪', /親訪/],
  ['非現場', /非現場/],
  ['非實地', /非實地/],
  ['實地訪查', /實地訪查/],
  ['現勘', /現勘/],
  ['已實地體驗', /已實地體驗/],
  ['固定房況待確認聲明', /當日房況仍待確認|即時房況仍待確認|即時空房仍待確認|即時房態仍待確認|當日營業仍待確認|當日營業與房況仍待確認|當日營業與即時房況仍待確認|當日營業及即時房況仍待確認|當日營運及空房仍待確認|當天服務仍待確認|目前營運狀況仍待確認|電話與當日房況仍待確認|可訂房態及接待仍待確認|值勤狀態仍待確認/],
  ['第三方指南固定聲明', /第三方指南[，,]\s*非|並非管理機關官方網站|本站是獨立旅遊指南[，,]\s*不是景點管理單位/],
  ['編造第一人稱實地經驗', /我(曾|親自|實地|當天|走進|實際)|筆者(親|實地)|親身(走|體驗|試)|我們(走進|實地|當天看到)/]
];

const errors = [];
let scannedLines = 0;
for (const file of sourceFiles) {
  const text = read(file);
  text.split(/\r?\n/).forEach((line, index) => {
    scannedLines++;
    for (const [label, pattern] of banned) {
      if (pattern.test(line)) errors.push(`${file}:${index + 1} ${label} → ${line.trim().slice(0, 140)}`);
    }
  });
}

const contentFiles = walk('src/content').filter(f => f.endsWith('.md')).sort();
const frontmatterOf = file => {
  const text = read(file);
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) { errors.push(`${file}: missing frontmatter`); return {}; }
  try { return JSON.parse(match[1]); } catch (error) { errors.push(`${file}: invalid frontmatter JSON (${error.message})`); return {}; }
};

const guideFields = ['arrival', 'entrance', 'alongTheWay', 'rain', 'shortOnTime', 'photoTip'];
const guides = new Map();
for (const file of contentFiles) {
  const data = frontmatterOf(file);
  const body = read(file).replace(/^---\r?\n[\s\S]*?\r?\n---/, '');

  // Local FAQ parity check: visible <details> must match frontmatter faq[] word for word.
  if (Array.isArray(data.faq) && data.faq.length && body.includes('<details>')) {
    const visible = [...body.matchAll(/<details><summary>(.*?)<\/summary><p>(.*?)<\/p><\/details>/g)]
      .map(m => ({ question: m[1], answer: m[2] }));
    if (visible.length) {
      const same = visible.length === data.faq.length && visible.every((item, i) =>
        item.question === data.faq[i].question && item.answer === data.faq[i].answer);
      if (!same) errors.push(`${file}: visible FAQ and frontmatter faq[] must match exactly`);
    }
  }

  if (!data.routeGuide) continue;
  const guide = data.routeGuide;
  guides.set(file, guide);
  for (const field of guideFields) {
    if (typeof guide[field] !== 'string' || guide[field].trim().length < 12) {
      errors.push(`${file}: routeGuide.${field} missing or too short (must be page-specific, grounded prose)`);
    }
  }
  if (!Array.isArray(guide.sources) || !guide.sources.length) {
    errors.push(`${file}: routeGuide.sources needs at least one source URL`);
  } else {
    for (const source of guide.sources) {
      if (typeof source.url !== 'string' || !/^(https:\/\/|\/[a-z0-9/-]+\/$)/.test(source.url)) {
        errors.push(`${file}: invalid routeGuide source URL ${String(source.url)}`);
      }
    }
  }
  for (const [label, pattern] of banned) {
    if (pattern.test(JSON.stringify(guide))) errors.push(`${file}: routeGuide contains ${label}`);
  }
}

// Migration queue: every content page must be tracked; DONE must match an actual routeGuide.
const csvPath = 'docs/editorial-voice-migration.csv';
if (!fs.existsSync(path.join(root, csvPath))) {
  errors.push(`${csvPath}: missing migration queue`);
} else {
  const rows = read(csvPath).trim().split(/\r?\n/).slice(1).map(line => line.split(','));
  const tracked = new Set(rows.map(row => `${row[0]}/${row[1]}`));
  for (const file of contentFiles) {
    const key = file.replace('src/content/', '').replace(/\.md$/, '');
    if (!tracked.has(key)) errors.push(`${csvPath}: untracked page ${key}`);
  }
  for (const row of rows) {
    const key = `${row[0]}/${row[1]}`;
    const file = `src/content/${key}.md`;
    const status = row[3];
    const done = status === 'DONE';
    if (!fs.existsSync(path.join(root, file))) errors.push(`${csvPath}: ${key} tracks a page that does not exist`);
    if (!['CLEARED', 'AWAITING_LIVE_CHECK', 'DONE'].includes(status)) errors.push(`${csvPath}: ${key} has invalid status ${status}`);
    if (done && !guides.has(file)) errors.push(`${csvPath}: ${key} marked DONE without routeGuide`);
    if (done && row[6] !== 'VERIFIED') errors.push(`${csvPath}: ${key} marked DONE without a live check`);
    if (status === 'CLEARED' && guides.has(file)) errors.push(`${csvPath}: ${key} has routeGuide but is still CLEARED`);
    if (status !== 'CLEARED' && !guides.has(file)) errors.push(`${csvPath}: ${key} has no routeGuide but is not CLEARED`);
    if (row[4] !== (guides.has(file) ? 'yes' : 'no')) errors.push(`${csvPath}: ${key} routeGuide column is stale`);
    if (row[5] !== '0') errors.push(`${csvPath}: ${key} still reports banned phrases (${row[5]})`);
  }
}

if (errors.length) {
  console.error(`Editorial voice check failed (${errors.length} issues, ${scannedLines} lines scanned):\n` + errors.join('\n'));
  process.exit(1);
}
console.log(`Editorial voice check passed: ${sourceFiles.length} source files / ${scannedLines} lines; ${contentFiles.length} content pages tracked; ${guides.size} route guides verified; FAQ parity checked locally.`);
