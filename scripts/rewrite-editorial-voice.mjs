// One-off, idempotent codemod for the site-wide editorial-voice sweep.
// Default mode only reports remaining fixed disclaimers; pass --write to apply.
// Rules only remove role/visit disclaimers or restate them as neutral "still to
// be confirmed" facts. They never add addresses, times, prices, routes or
// first-person experience. See docs/editorial-voice-rules.md.
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const write = process.argv.includes('--write');
const walk = dir => fs.readdirSync(path.join(root, dir), { withFileTypes: true }).flatMap(entry => {
  const rel = path.join(dir, entry.name);
  return entry.isDirectory() ? walk(rel) : [rel.replace(/\\/g, '/')];
});

const sourceDirs = ['src/content', 'src/pages', 'src/components', 'src/layouts', 'src/data'];
const sourceFiles = sourceDirs.flatMap(walk).filter(f => /\.(md|astro|ts|json)$/.test(f));
sourceFiles.push('README.md');

const BANNED = /當日房況仍待確認|即時房況仍待確認|即時空房仍待確認|即時房態仍待確認|當日營業仍待確認|當日營業與房況仍待確認|當日營業與即時房況仍待確認|當日營業及即時房況仍待確認|當日營運及空房仍待確認|當天服務仍待確認|目前營運狀況仍待確認|電話與當日房況仍待確認|可訂房態及接待仍待確認|值勤狀態仍待確認|親訪|非現場|非實地|實地訪查|現勘|已實地體驗|第三方指南[，,]\s*非|並非管理機關官方網站|本站是獨立旅遊指南[，,]\s*不是景點管理單位|我(曾|親自|實地|當天|走進|實際)|筆者(親|實地)|親身(走|體驗|試)|我們(走進|實地|當天看到)/;

// Order matters: exact, fact-preserving rewrites run before the generic clause removal.
const RULES = [
  // --- exact strings shared by many pages ---------------------------------
  [/（UTC；公開資料，非(?:現場|實地)[^）]*）/g, '（UTC；依公開資料核對）'],
  [/（公開資料，非(?:現場|實地)[^）]*）/g, '（依公開資料核對）'],
  [/政府登記快照(\d{4}-\d{2}-\d{2})；平台政策查閱(\d{4}-\d{2}-\d{2})。未親訪、未確認當日營業或即時房況。/g,
    '政府登記快照$1；平台政策查閱$2。當日營業與即時房況仍待確認。'],
  [/，非(?:親訪|實地訪查)或即時房況。/g, '，即時房況仍待確認。'],
  [/，不代表當日房況或實地訪查。/g, '；當日房況仍待確認。'],
  [/本文未親訪或確認當日營業與即時房況。/g, '當日營業與即時房況仍待確認。'],
  [/本文未親訪、未電話查房，也未使用平台評論或評分作本站評價。/g, '平台評論與評分不代入本站評價。'],
  [/未電話或親訪確認當日營業，也不將平台評分、房價或評論轉作本站評價。/g, '當日營業仍待確認；平台評分、房價與評論不代入本站評價。'],
  [/沒有即時房態或親訪結論。/g, '即時房態仍待確認。'],
  [/本文未親訪，也未確認當日營業或房況。/g, '當日營業與房況仍待確認。'],
  [/不代表實地訪查、當日營業或空房保證/g, '營業時段與房況以店家當日公告為準'],
  [/資料整理不代表親訪、當日營業或空房保證；/g, '營業時段與供餐以店家當日公告為準；'],
  [/，並非本站親訪評分。/g, '。'],
  [/本站未以親訪口吻評定口味，也不把地圖星等當成本站評分。/g, '口味不代入本站評分，地圖星等也只當平台資訊。'],
  [/，也不代表本站已親訪。/g, '。'],
  [/並非店家電話或親訪確認。/g, '電話仍待向店家確認。'],
  [/查閱日不等於來源更新日或當日電話、親訪確認。/g, '查閱日不等於來源更新日；電話與服務請向業者再確認。'],
  [/，非親訪或即時空房。/g, '，即時空房仍待確認。'],
  [/本文未親訪，未確認當日營業及即時房況。/g, '當日營業及即時房況仍待確認。'],
  [/本文採政府2026年10月27日登記與10月28日平台政策，未親訪，當日營業及房況尚未確認。/g,
    '本文採政府2026年10月27日登記與10月28日平台政策；當日營業及房況尚未確認。'],
  [/本文依公開政府與平台資料整理，未親訪、未完成電話查房。/g, '本文依公開政府與平台資料整理，電話與當日房況仍待確認。'],
  [/；未親訪或電話確認當日接待，/g, '；當日接待仍待電話確認，'],
  [/政府登記依2026年10月27日快照；本文未親訪，當日營業與即時房況未核實。/g,
    '政府登記依2026年10月27日快照；當日營業與即時房況未核實。'],
  [/；未親訪或確認當日營業與房況。/g, '；當日營業與房況仍待確認。'],
  [/；本文沒有核實當日營業或親訪。/g, '；當日營業仍待核實。'],
  [/本文採公開資料整理，未親訪住宿，也未確認當日營運及空房。/g, '本文採公開資料整理；當日營運及空房仍待確認。'],
  [/本站提供公開資料與行程思路，並未親訪確認當天服務；/g, '本站提供公開資料與行程思路；當天服務仍待確認，'],
  [/本站沒有親訪，也沒有因登記存在而保證當日可入住。/g, '登記存在不保證當日可入住。'],
  [/政府登記採2026年10月27日快照；本文未親訪，未確認當日營業或即時房況。/g,
    '政府登記採2026年10月27日快照；當日營業與即時房況仍待確認。'],
  [/本文為公開資料整理，非親訪評測；/g, '本文為公開資料整理；'],
  [/；直接開啟逾時，未電話或親訪確認。/g, '；直接開啟逾時，電話查核尚未完成。'],
  [/；非當日電話或親訪確認。/g, '；當日電話確認尚未完成。'],

  // --- FAQ answers (frontmatter text and visible <details> are identical) --
  [/，非實地測量。/g, '，現況仍待確認。'],
  [/，此次資料整理未現勘。/g, '。'],
  [/屬公開設施清單而非目前現勘。/g, '屬公開設施清單，現況仍待確認。'],
  [/未經目前現勘/g, '現況仍待確認'],
  [/保存記錄不當今日結構安全現勘。/g, '保存記錄不當今日結構安全依據。'],
  [/，非營運或設備現勘。/g, '，當日營運與設備仍待確認。'],

  // --- shared components and pilot data -----------------------------------
  [/核對日期是本站查閱來源的日期/g, '核對日期是查閱來源的日期'],
  [/，非現場通行保證/g, '，當日通行仍待確認'],
  [/，非現場值勤保證/g, '，值勤狀態仍待確認'],

  // --- "資料核對：日期（...）" and dated openings with a 非X disclaimer ----
  [/公開資料整理非現勘/g, '公開資料整理'],
  [/，未實地訪查或確認即時狀況/g, '，即時狀況仍待確認'],
  [/，未現勘(?=[。；])/g, ''],
  [/，非(?:現場|實地|現勘|當日|海岸|登山|湖岸|入館|入戶|港務|遊具|植物|交通|生產|工程|祭祀|音效|展覽|售票|營業|放映|梯次|訪店|預約|勘查|查核|查驗|檢驗|驗收|通行|水質|設備|海況|駐點|潮位|安全|防疫|入校|構件|水域|營運)[^。；]{0,40}(?=[。；])/g, ''],
  [/，非[^。；]{0,24}現勘(?=[。；])/g, ''],

  // --- per-page third-party identity statements ---------------------------
  [/(?:Kinmen Guide\s*|本站)?(?:是|為)?(?:第三方|獨立)(?:旅遊)?指南[，,]([^。]*)。/g,
    (_match, tail) => {
      const extra = tail.split('；').slice(1).join('；').trim();
      return extra ? `${extra}。` : '';
    }],
  [/並非管理機關官方網站。/g, ''],
  [/本站是獨立旅遊指南，不是景點管理單位。/g, ''],

  // --- availability-status disclaimers (user instruction, 2026-11-26) ------
  // The user rejected fixed "當日房況仍待確認"-style sentences on pages.
  // Delete the clause, then repair only the punctuation it leaves behind.
  [/(?:實際營運、可訂房態及接待|當日營業與即時房況|當日營業及即時房況|當日營業與房況|電話與當日房況|目前營運狀況|當日營運及空房|當天服務|當日房況|即時房況|即時空房|即時房態|當日營業|值勤狀態)仍待確認/g, ''],
  [/。{2,}/g, '。'],
  [/，。/g, '。'],
  [/；。/g, '。'],
  [/，，/g, '，'],
  [/；，/g, '；'],
  [/，；/g, '；'],
  [/，）/g, '）'],
];

const apply = text => RULES.reduce((acc, [pattern, replacement]) => acc.replace(pattern, replacement), text);

const remaining = new Map();
let changed = 0;
for (const file of sourceFiles) {
  const original = fs.readFileSync(path.join(root, file), 'utf8');
  const text = apply(original);
  if (write && text !== original) {
    fs.writeFileSync(path.join(root, file), text, 'utf8');
    changed++;
  }
  const scan = text;
  for (const line of scan.split(/\r?\n/)) {
    if (!BANNED.test(line)) continue;
    const parts = file.endsWith('.json')
      ? (line.match(/"[^"]{0,220}(?:親訪|非現場|非實地|實地訪查|現勘)[^"]{0,220}"/g) ?? [line])
      : line.split(/(?<=。)/);
    for (const part of parts) {
      if (!BANNED.test(part)) continue;
      const key = part.trim().slice(0, 260);
      if (!remaining.has(key)) remaining.set(key, { count: 0, file });
      remaining.get(key).count++;
    }
  }
}

if (write) {
  console.log(`Applied editorial-voice rules to ${changed} files.`);
}
console.log(`Remaining distinct banned fragments: ${remaining.size}`);
let shown = 0;
for (const [text, info] of remaining) {
  if (shown++ >= 120) break;
  console.log(`${info.count}x [${info.file}]\n  ${text}`);
}
if (write && remaining.size) {
  console.error('\nBanned phrases remain; add explicit rules before shipping.');
  process.exitCode = 1;
}
