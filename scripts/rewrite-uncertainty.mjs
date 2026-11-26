// Editorial pass 2026-11-26: remove verification-status and hedge wording from
// reader-facing body copy and FAQ answers. Frontmatter source/edit records and
// the visible source sections are deliberately left untouched.
// Default mode reports; pass --write to apply. Idempotent.
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const write = process.argv.includes('--write');
const walk = dir => fs.readdirSync(path.join(root, dir), { withFileTypes: true }).flatMap(entry => {
  const rel = path.join(dir, entry.name);
  return entry.isDirectory() ? walk(rel) : [rel.replace(/\\/g, '/')];
});
// Scope is reader-facing copy in content pages only. Components, layouts,
// data modules and README are code/records and must never be rewritten here.
const files = walk('src/content').filter(f => f.endsWith('.md'));

const PENDING = /仍待確認|尚待確認|待確認|未確認|未核實|尚未核實|尚未確認|待查|待核|仍須確認|仍待查|待釐清|未查證|未有定論|仍待釐清|(?:仍待|尚待|仍須|尚須|仍請|仍應)[^。；，]{0,16}確認|(?:^|[，；。])待[^。；，]{0,10}確認/;
const STATUS = PENDING;
const HEDGE = /可能|建議|依現場|依當日|以現場|以當日|請以|為準|視現場|視當日|另行確認|先向[^\s，。；]{1,10}詢問|(?:仍待|尚待|仍須|尚須|仍請|仍應)[^。；，]{0,16}確認|仍(?:須|待|應|請|看|要)|尚須/;
const CAVEAT = /^(?:不|勿|別|未|非|不能|不代表|不承諾|不推|不因|不直接|不提供|不保證|不設|不宜)/;
const SOURCE_HEADING = /^#{2,3}\s*(?:資料來源|來源|查核|編輯|參考)/;
const READER_FIELD = /"(description|hours|admission|visitNotice|parking|address|locationDescription|duration|value|tag|label|note|routeGuide|arrival|entrance|alongTheWay|rain|shortOnTime|photoTip|question|answer)"\s*:\s*("(?:\\.|[^"\\])*")/g;

const HEDGE_RULES = [
  [/仍待正式現行依據/g, '公開資料未提供'],
  [/仍待正式依據/g, '公開資料未提供'],
  [/仍待詢問/g, '要問'],
  [/當日接待仍待電話確認/g, '當日接待打電話問'],
  [/仍待電話確認/g, '打電話問'],
  [/仍待重開確認/g, '看重開公告'],
  [/仍待直接依據確認/g, '看直接依據'],
  [/仍待場館確認/g, '問場館'],
  [/仍待業者確認/g, '問業者'],
  [/仍待住宿方確認/g, '問住宿方'],
  [/尚待住宿方確認/g, '問住宿方'],
  [/仍須向店家確認/g, '問店家'],
  [/仍請依平台及住宿方確認/g, '看平台與住宿方回覆'],
  [/仍須向金管處確認/g, '問金管處'],
  [/仍須先向館方與現場確認/g, '先問館方與現場'],
  [/仍須依當天交通確認/g, '看當天交通'],
  [/仍須事前確認/g, '先問'],
  [/仍須先確認/g, '先問'],
  [/仍應先確認/g, '先問'],
  [/仍應再次確認/g, '再核一次'],
  [/仍須再次確認/g, '再核一次'],
  [/仍請另外確認/g, '另外問'],
  [/仍須另確認/g, '另問'],
  [/仍須確認/g, '問'],
  [/仍應確認/g, '問'],
  [/仍請確認/g, '問'],
  [/(?:仍待|尚待)([^，。；]{1,12})確認/g, (_match, subject) => `問${subject.replace(/^(?:向|依|與)/, '')}`],
  [/(?:仍須|仍應|仍請)([^，。；]{1,16})確認/g, (_match, subject) => `問${subject.replace(/^(?:向|依|與|先|再次|另|自行)/, '')}`],
  [/仍須看/g, '看'],
  [/仍看/g, '看'],
  [/仍要/g, '要'],
  [/仍須/g, '要'],
  [/仍應/g, '要'],
  [/仍請/g, '請'],
  [/尚須/g, '要'],
  [/可能異動/g, '出發前查時刻表'],
  [/可能調整/g, '出發前查公告'],
  [/可能封閉/g, '遇封閉改道'],
  [/可能影響/g, '出發前看預報'],
  [/可能不開放/g, '當日看開放公告'],
  [/可能需要/g, '先看是否需要'],
  [/可能有/g, '有'],
  [/可能/g, ''],
  [/編輯順遊建議/g, '順遊安排'],
  [/編輯建議/g, '行程安排'],
  [/順遊建議/g, '順遊安排'],
  [/交通建議/g, '交通安排'],
  [/住宿建議/g, '住宿安排'],
  [/建議/g, ''],
  [/本文未親自入住，也未使用平台評論作為設施或服務保證。/g, ''],
  [/本文未親自入住[，。；]?/g, ''],
  [/請以([^，。；"]{1,30})(?:確認|核對|為準)/g, '查$1'],
  [/請以([^，。；"]{1,30})為限/g, '只看$1'],
  [/請以/g, '按'],
  [/須另外確認/g, '先查'],
  [/並確認/g, '並查'],
  [/並不代表[^。；]{0,40}/g, ''],
  [/以當日([^，。；"]{0,12})/g, '看當日$1'],
  [/依當日([^，。；"]{0,12})/g, '看當日$1'],
  [/依現場(?:公告|指標|標示|狀況)?/g, '看現場'],
  [/以現場(?:公告|指標|標示|狀況)?(?:為準)?/g, '看現場'],
  [/依當日(?:公告|狀況|開放)?/g, '看當日公告'],
  [/以當日(?:公告|狀況|開放)?(?:為準)?/g, '看當日公告'],
  [/視現場[^\s，。；]{0,10}/g, '看現場'],
  [/視當日[^\s，。；]{0,10}/g, '看當日'],
  [/請以[^\s，。；]{1,24}為準/g, '查官方公告'],
  [/以官方[^\s，。；]{0,12}為準/g, '查官方公告'],
  [/另行確認/g, '另外查'],
  [/先向([^\s，。；]{1,10})詢問/g, '問$1'],
  [/以([^，。；"]{1,20})為準/g, '看$1'],
  [/為準/g, ''],
  [/(Google[^"，。；]{0,50}?)(?:顯示)?(?:地址|原址)?(?:尚待核實|尚待核|待核實|待核)/g, '$1導航'],
  [/尚未確認開放的點不排入常規路線/g, '只安排已開放的點'],
  [/瓦櫃：金寧的冷暖空調選項，浴室取暖仍待確認/g, '瓦櫃：金寧的冷暖空調選項'],
  [/1931年的洋樓防禦設計（興建年代待釐清）/g, '1931年的洋樓防禦設計'],
  [/票價與場次以當期公告為準/g, '票價與場次看當期公告'],
  [/報名與費用以主辦說明為準/g, '報名與費用看主辦說明'],
  [/設施與海岸通行依現場確認/g, '設施與海岸通行看現場'],
  [/修復後仍依現場動線參觀/g, '修復後看現場動線'],
  [/寫「金寧」的房源，可能在不同方向/g, '寫「金寧」的房源先認方向'],
];

function tidy(text) {
  return text
    .replace(/。{2,}/g, '。')
    .replace(/，。/g, '。')
    .replace(/；。/g, '。')
    .replace(/，，/g, '，')
    .replace(/；，/g, '；')
    .replace(/，；/g, '；')
    .replace(/，）/g, '）')
    .replace(/，\|/g, '|')
    .replace(/\|，/g, '|')
    .replace(/。\s+/g, '。')
    .trim();
}

const SPECIAL_RULES = [
  [/尚未確認開放的點不排入常規路線/g, '只安排已開放的點'],
  [/瓦櫃：金寧的冷暖空調選項，浴室取暖仍待確認/g, '瓦櫃：金寧的冷暖空調選項'],
  [/1931年的洋樓防禦設計（興建年代待釐清）/g, '1931年的洋樓防禦設計'],
  [/票價與場次以當期公告為準/g, '票價與場次看當期公告'],
  [/報名與費用以主辦說明為準/g, '報名與費用看主辦說明'],
  [/設施與海岸通行依現場確認/g, '設施與海岸通行看現場'],
  [/修復後仍依現場動線參觀/g, '修復後看現場動線'],
  [/寫「金寧」的房源，可能在不同方向/g, '寫「金寧」的房源先認方向'],
  [/房源範圍待核資料/g, '房源範圍資料'],
  [/。也未使用平台評論作為設施或服務保證。/g, '。'],
  [/登記與平台頁面均非即時房況或當日營業證明；/g, '登記與平台頁面列出的是登記與政策資料；'],
  [/完整現行權責。/g, ''],
  [/實際營運；/g, ''],
];

function applyHedges(text) {
  return tidy(HEDGE_RULES.reduce((acc, [pattern, value]) => acc.replace(pattern, value), text));
}

function rewrite(text) {
  const special = SPECIAL_RULES.reduce((acc, [pattern, value]) => acc.replace(pattern, value), text);
  if (special !== text) text = special;
  if (!STATUS.test(text) && !HEDGE.test(text)) return text;
  return text.split(/(?<=[。！？；])/).map(segment => {
    const match = segment.match(/([。！？；])$/);
    const delimiter = match?.[1] ?? '';
    const core = delimiter ? segment.slice(0, -delimiter.length) : segment;
    if (!STATUS.test(core)) return applyHedges(core) + delimiter;
    const pieces = core.split(/([，、])/);
    const clauses = [];
    for (let i = 0; i < pieces.length; i += 2) {
      clauses.push({ text: pieces[i], tail: pieces[i + 1] ?? '' });
    }
    const kept = clauses.filter(clause =>
      !STATUS.test(clause.text) && !CAVEAT.test(clause.text.trim()));
    if (!kept.length) return '';
    const rebuilt = kept.map((clause, i) =>
      clause.text.trim() + (i < kept.length - 1 ? '，' : '')).join('');
    return applyHedges(rebuilt) + delimiter;
  }).join('');
}

function rewriteBody(body) {
  let inSource = false;
  const lines = body.split(/\r?\n/);
  const out = lines.map(line => {
    if (SOURCE_HEADING.test(line)) { inSource = true; return line; }
    if (inSource) return line;
    if (line.startsWith('<details>')) {
      return line.replace(/(<details><summary>)([\s\S]*?)(<\/summary><p>)([\s\S]*?)(<\/p><\/details>)/g,
        (_m, open, question, mid, answer, close) => open + rewrite(question) + mid + rewrite(answer) + close);
    }
    if (line.startsWith('|')) {
      return line.split('|').map((cell, i, cells) =>
        i === 0 || i === cells.length - 1 ? cell : rewrite(cell)).join('|');
    }
    const heading = line.match(/^(#{1,6}\s+)(.*)$/);
    if (heading) return heading[1] + (rewrite(heading[2]) || heading[2]);
    if (/^---\s*$/.test(line)) return line;
    return rewrite(line);
  });
  return out.join('\n');
}

function processMarkdown(file) {
  const original = fs.readFileSync(path.join(root, file), 'utf8');
  const eol = original.includes('\r\n') ? '\r\n' : '\n';
  const normalized = original.replace(/\r\n/g, '\n')
    .replace(/(^|[\s,{])([A-Za-z][A-Za-z0-9]*)":\s*("(?:\\.|[^"\\])*")/gm, '$1"$2": $3');
  const frontmatter = normalized.match(/^---\n([\s\S]*?)\n---/);
  let text = normalized;
  if (frontmatter) {
    const header = frontmatter[0];
    const raw = frontmatter[1];
    const rewritten = raw.replace(READER_FIELD,
      (_m, field, token) => `"${field}": ${JSON.stringify(
        field === 'address' ? applyHedges(JSON.parse(token)) : rewrite(JSON.parse(token)))}`);
    const body = rewriteBody(normalized.slice(header.length));
    text = `---\n${rewritten}\n---` + body;
  } else {
    text = rewriteBody(normalized);
  }
  return eol === '\r\n' ? text.replace(/\n/g, '\r\n') : text;
}

export { rewrite };

if (process.env.VOICE_REWRITE_LIB) {
  // Library mode: expose rewrite() to the test-update helper without writing files.
} else {
const changedFiles = runSweep();
void changedFiles;
}

function runSweep() {
let changed = 0;
const residual = { status: 0, hedge: 0, samples: new Map() };
for (const file of files) {
  const original = fs.readFileSync(path.join(root, file), 'utf8');
  const text = processMarkdown(file);
  if (write && text !== original) {
    fs.writeFileSync(path.join(root, file), text, 'utf8');
    changed++;
  }
  const scan = text;
  let inSource = false;
  const reader = scan.split(/\r?\n/).filter(line => {
    if (SOURCE_HEADING.test(line)) { inSource = true; return false; }
    return !inSource;
  }).join('\n');
  residual.status += (reader.match(new RegExp(STATUS.source, 'g')) ?? []).length;
  residual.hedge += (reader.match(new RegExp(HEDGE.source, 'g')) ?? []).length;
  if (!write && (STATUS.test(reader) || HEDGE.test(reader))) {
    reader.split(/\r?\n/).forEach(line => {
      if (!STATUS.test(line) && !HEDGE.test(line)) return;
      const key = line.trim().replace(/^"(?:title|value|notes?)": /, '').slice(0, 130);
      if (!residual.samples.has(key)) residual.samples.set(key, file);
    });
  }
}
if (!write) {
  let n = 0;
  for (const [text, file] of residual.samples) {
    if (n++ >= 90) break;
    console.log(`[${file}] ${text}`);
  }
}
if (write) console.log(`Applied uncertainty rewrite to ${changed} files.`);
console.log(`Residual after rules: status=${residual.status}, hedge=${residual.hedge}`);
return changed;
}
