// Checks that reader-facing body copy, FAQ questions/answers and reader-facing
// frontmatter fields contain neither verification-status wording nor hedges.
// Source/edit records and the visible source sections are intentionally exempt.
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const contentRoot = 'src/content';
const walk = dir => fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
  const rel = path.join(dir, entry.name);
  return entry.isDirectory() ? walk(rel) : [rel.replace(/\\/g, '/')];
});
const files = walk(contentRoot).filter(f => f.endsWith('.md'));
const BANNED = /仍待確認|尚待確認|待確認|未確認|未核實|尚未核實|尚未確認|待查|待核|仍須確認|仍待查|待釐清|未查證|未有定論|(?:仍待|尚待|仍須|尚須|仍請|仍應)[^。；，]{0,16}確認|(?:^|[，；。])待[^。；，]{0,10}確認|可能|建議|依現場|依當日|以現場|以當日|請以|為準|視現場|視當日|另行確認|先向[^\s，。；]{1,10}詢問|仍(?:須|待|應|請|看|要)|尚須/;
const SOURCE_HEADING = /^#{2,3}\s*(?:資料來源|來源|查核|編輯|參考)/;
const FIELDS = ['description', 'hours', 'admission', 'visitNotice', 'parking', 'address',
  'locationDescription', 'duration', 'value', 'tag', 'label', 'note',
  'arrival', 'entrance', 'alongTheWay', 'rain', 'shortOnTime', 'photoTip', 'question', 'answer'];

const errors = [];
for (const file of files) {
  const text = fs.readFileSync(path.join(root, file), 'utf8').replace(/\r\n/g, '\n');
  const frontmatter = text.match(/^---\n([\s\S]*?)\n---/);
  const body = frontmatter ? text.slice(frontmatter[0].length) : text;

  let inSource = false;
  for (const [index, line] of body.split('\n').entries()) {
    if (SOURCE_HEADING.test(line)) { inSource = true; continue; }
    if (inSource) continue;
    if (!BANNED.test(line)) continue;
    errors.push(`${file}:body:${index + 1} ${line.trim().slice(0, 160)}`);
  }

  if (!frontmatter) continue;
  let data;
  try { data = JSON.parse(frontmatter[1]); } catch { continue; }
  const visit = (value, pathText) => {
    if (typeof value === 'string' && BANNED.test(value)) {
      errors.push(`${file}:${pathText} ${value.slice(0, 160)}`);
    } else if (Array.isArray(value)) {
      value.forEach((item, i) => visit(item, `${pathText}[${i}]`));
    } else if (value && typeof value === 'object') {
      for (const [key, child] of Object.entries(value)) {
        if (pathText === 'frontmatter' && key === 'sources') continue;
        visit(child, `${pathText}.${key}`);
      }
    }
  };
  const readerFields = {};
  for (const key of FIELDS) if (key in data) readerFields[key] = data[key];
  for (const route of ['routeGuide', 'tripPlanner']) {
    if (data[route]) readerFields[route] = data[route];
  }
  if (Array.isArray(data.faq)) readerFields.faq = data.faq.map(item => ({
    question: item?.question, answer: item?.answer
  }));
  visit(readerFields, 'frontmatter');
}

// Business directory notes are reader-facing too; check them separately because
// businesses.json is a single line containing many source/record fields.
const PHONE_BANNED = /不代表已電話確認|電話與服務請向業者再確認|當日電話確認尚未完成|仍待向店家確認|(?:仍待|尚待|仍須)[^。；，]{0,16}確認/;
for (const file of ['src/data/businesses.json', 'src/lib/businesses.ts']) {
  const text = fs.readFileSync(path.join(root, file), 'utf8');
  if (PHONE_BANNED.test(text)) {
    errors.push(`${file}: phone/status confirmation disclaimer in reader-facing note`);
  }
}

if (errors.length) {
  console.error(`Uncertain wording found in ${errors.length} reader-facing places:`);
  errors.slice(0, 80).forEach(error => console.error(`  ${error}`));
  process.exit(1);
}
console.log(`Uncertainty check passed: ${files.length} pages; reader-facing copy only.`);
