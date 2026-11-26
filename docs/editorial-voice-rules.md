# Kinmen Guide｜全站寫作語調規則（遊記筆法 v1）

**生效：** 2026-11-25（使用者指令）  
**適用：** `src/content/` 全部集合、`src/pages/`、`src/components/`、`src/data/` 的讀者可見文案。景點接力（`docs/attraction-template-migration.csv`）一體適用。  
**查核：** `node scripts/verify-editorial-voice.mjs`（`pnpm test:voice`），並納入 `pnpm test` 與 `pnpm validate`。  
**追蹤：** `docs/editorial-voice-migration.csv`。

## 1. 底線

1. **不加「未親訪」之類的固定聲明。** 不寫「未親訪」「非現場訪查」「非實地參觀回報」「非現勘」「本站不將資料整理包裝為已實地體驗」「並非親訪評分」，也不把它們改寫成另一套制式免責文案。全站只在 `/about/` 以自然文字說明編輯方式與第三方身分，不在每篇重複。
2. **不編造第一人稱體驗。** 不出現「我走進」「我實地」「筆者親訪」「親身試過」「當天我們看到」等宣稱。語氣可以像朋友帶路，但身分不是親訪者。
3. **細節有根據。** 抵達點、入口、沿途景物、替代走法、拍照位置，都必須能指到官方來源、Google 地圖具名地標、本頁已核對的地址／公車站／動線或照片授權紀錄。查不到就寫「尚待確認」並留在來源／待查紀錄，不補情節、不補分鐘數、不補價格、不補物種。
4. **拍照位置必須確實能站、也安全。** 不跨越欄杆、不進入未開放或私人範圍、不佔用車道；無法確認時不給機位，只給「從現場標示允許的範圍取景」。
5. **基本資料照框架寫。** v1.2 的頁面順序、管理單位、Google 地圖地址與位置描述分離、具名 POI 導航、可見 FAQ 與 `faq[]`／JSON-LD 逐字一致、照片署名與授權、來源與編輯紀錄，不因換語調而改動或刪除。
6. **保留待查紀錄與照片狀態。** 「現行管理仍待確認」「本次未核實…」「2018 年歷史照片不代表今天配置」是有事實價值的查核紀錄，不是免責聲明，必須保留。**例外（2026-11-26 使用者指示）：制式的房況／營業狀態句不算查核紀錄，頁面不得出現** 「當日房況仍待確認」「即時房況仍待確認」「即時空房仍待確認」「即時房態仍待確認」「當日營業仍待確認」「當日營業與房況仍待確認」「當日營業與即時房況仍待確認」「當日營業及即時房況仍待確認」「當日營運及空房仍待確認」「當天服務仍待確認」「目前營運狀況仍待確認」「電話與當日房況仍待確認」「可訂房態及接待仍待確認」「值勤狀態仍待確認」。這類句子直接刪掉，只留下已核對的日期、登記資料與來源；不要用另一句「以業者當日公告為準」把它換回來。

## 2. 必備的四個帶路問題

每篇完成改寫的頁面，用 `routeGuide` 欄位（或既有「行前規劃與深度遊覽」專題正文）回答：

| 問題 | 要寫清楚的內容 | 不能做的事 |
| --- | --- | --- |
| 從哪裡抵達 | 以哪個車站、碼頭、道路或具名地圖地標起算；公車路線／開車動線的依據 | 不以直線距離推算車程，不把地圖點當入口 |
| 哪個入口好找 | 可辨識的門牌、牌樓、停車後步行方向、服務站或現場指標 | 不把住宿、機關、鄰近景點的門口冒充入口 |
| 沿途看什麼 | 沿已開放動線依序可見的景物，並說明取捨 | 不列未核實的物種、展項或開放區域 |
| 下雨或時間不夠怎麼改走 | 雨天／強風／趕時間時刪掉哪一段、改走哪一段、保留哪一站 | 不把坑道、海灘、軍事區當成必然可用的雨備 |

另可加「拍照：站哪裡、取捨什麼」，語氣像朋友帶路；前提同上第 4 點。

## 3. 語氣

- **資料區**：客觀、可核、照框架。門牌、時段、管理者、電話、來源連結清楚就好。
- **攻略與拍照區**：像朋友在前面帶路，有取捨，也有一點情緒；可以直接建議「先別急著…」「值得多留十分鐘」「這段可以果斷跳過」。
- **可用的例句**（前提：該位置確實能站、也安全）：「別急著擠到最前排。往後退兩步，把拱門和街角一起收進畫面，比只拍正面更有意思。」
- **避免**：制式百科開場、消極免責句、把「待查」寫成口號、把同一套句子套到每個景點、把別人遊記的第一人稱經驗改寫成本站經歷。

## 4. 禁止詞表（查核腳本同源）

`未親訪`、`親訪評分`、`非親訪`、`已親訪`、`非現場訪查`、`非現場回報`、`非現場即時`、`非現場檢驗`、`非實地參觀`、`非實地入住`、`非實地訪查`、`非現勘`、`現勘`、`不代表實地訪查`、`不將資料整理包裝為已實地體驗`、`第三方指南，非`、`並非管理機關官方網站`、`本站是獨立旅遊指南，不是景點管理單位`。

同時攔截編造的第一人稱實地句式：`我(曾|親自|實地|當天)`、`筆者(親|實地)`、`親身(走|體驗|試)`、`我們(走進|實地|當天看到)`。

法律揭露（聯盟佣金、入境規定、使用條款）、照片歷史狀態說明、以及「仍待確認／本次未核實」不在禁止範圍。

## 5. 落地方式

- `routeGuide` 為可選 frontmatter 欄位，結構見 `src/content.config.ts`；由 `src/components/RouteGuide.astro` 渲染，放在正文之後、來源區之前。欄位文字是逐頁撰寫的內容，不是模板填充；`sources` 至少一筆，指向該段描述所依據的來源。
- 未完成改寫的頁面維持原結構，僅移除固定聲明；狀態記在 `docs/editorial-voice-migration.csv`，`DONE` 必須同時有 `routeGuide` 且通過查核，不得先行標記。
- 每批流程：改寫 → `pnpm test:voice` → `pnpm validate` → `pnpm test:browser`（桌機／手機）→ live URL 檢查 → 更新 CSV。SEO canonical、可見標題、FAQ／schema、圖片署名、行程功能與其他集合不可漂移。

## 6. 與 v1.2 的關係

本文件是**語調層**，不改 `docs/attraction-detail-template-v1.2.md` 的頁面順序與欄位規格。兩者衝突時以 v1.2 的結構與查核規則為準，以本文件的語氣規則寫作；模板「站點須標明第三方身分」改為全站於 `/about/` 單一說明，不在每篇頁尾重複。

## 7. 進度、證據與阻塞（2026-11-25）

**全站清除（sweep-2026-11-25）**：148 個檔案、167 行逐頁重複的固定聲明移除，查核結果剩餘 0。具事實價值的「仍待確認」「本次未核實」「歷史照片不代表今日配置」全部保留；沒有改寫地址、價格、連結、FAQ／JSON-LD、圖片署名或其他集合結構。`docs/editorial-voice-migration.csv` 追蹤 534 篇內容頁。

工具：`scripts/rewrite-editorial-voice.mjs`（預設只報告，加 `--write` 才寫檔，冪等）、`scripts/update-voice-csv.mjs`（由原始檔重算 `routeGuide` 與禁用詞欄，保留人工狀態）、`scripts/verify-editorial-voice.mjs`（`pnpm test:voice`）。

**首批帶路改寫（batch-1-2026-11-25）**：4 篇寫入完整 `routeGuide` — `attractions/zhaishan-tunnel`、`attractions/shuitou-village`、`attractions/juguang-tower`、`food/jinshan-smoked-goose`。其餘 530 篇為 `CLEARED`（僅清除固定聲明），**不是**已完成遊記改寫；全站改寫尚未完成，不得宣稱完工。

**查核證據**：`pnpm test:voice` 通過（584 個原始檔、66,559 行、534 頁追蹤、4 份帶路、FAQ parity 檢查）；`pnpm validate` 通過（`astro check` + 556 頁建置 + `verify-build`：49,789 個內部連結、1,928 個圖片實例、4,162 個 schema 節點、canonical／錨點／sitemap／robots／照片／商家／攜程稽核）；`pnpm test:browser` 通過（438 passed，desktop 與 mobile）；`pnpm test` 通過。

**來源 live 查核**：以瀏覽器實際渲染 `kinmen.travel/zh-tw/travel/attraction/1337`、`520`、`389`，三頁皆為對應具名官方景點頁；讀到 6 路／08:30–17:00／停車場／公廁／無障礙、7 路與 A 線／24 小時／停車場／公廁、3 號／08:00–22:00／三層展示／停車場／公廁，與首批 `routeGuide` 的抵達與沿途描述一致。靜態 `web_fetch` 只會拿到「資料讀取中」，不能當作查核證據。

**當時阻塞（不得標 `DONE`）**：本輪沒有部署也沒有 push，kinmenguide.com 上線頁面的 live URL 檢查無法進行，因此 4 篇維持 `AWAITING_LIVE_CHECK`、`liveCheck=PENDING`，0 篇 `DONE`，CSV 沒有合併 SHA，也未更新 GitHub Issue #59。部署後須逐頁點開上線 URL 檢查帶路段落、可見標題、FAQ／schema 與導航，再手動把 `liveCheck` 改成 `VERIFIED`、狀態改成 `DONE`；實際完成情形見 §13。

**環境注意**：本機 Node 26 與 `engines.node >=22.12 <25` 衝突，指令需加 `pnpm --config.engine-strict=false`；全域 pnpm store 有 EPERM，改用 `--store-dir node_modules/.pnpm-store` 安裝；瀏覽器測試前需 `pnpm --config.engine-strict=false exec playwright install chromium`。`astro.config.mjs` 與 `scripts/verify-build.mjs` 的 frontmatter 正則已改為容許 Windows CRLF，否則本機 sitemap lastmod 與查核會假失敗。

**下一批建議（batch 2）**：`food/max-bakery`、`transport/xiamen-kinmen-ferry-november-2026`、`guides/carrefour-kinmen`、`food/oyster-fritter-house`、`guides/restricted-items`。這五個 slug 已確認存在；開工前仍以 CSV 當下狀態為準，另開工作區與分支，逐頁查核官方／地圖來源後再寫 `routeGuide`。

## 8. 批次 2（2026-11-26，獨立 worktree）

在 `.worktrees/batch2`、分支 `voice-batch-2-20261126` 進行；未提交的批次 1 成果以 git patch 加六个未追踪档案带入，主工作区未被覆盖。`node_modules` 用 junction 指向主工作区以复用依赖。

**改寫範圍**：5 篇写入完整 `routeGuide` — `food/max-bakery`、`food/oyster-fritter-house`、`guides/carrefour-kinmen`、`transport/xiamen-kinmen-ferry-november-2026`、`guides/restricted-items`。合併前 CSV 为 525 `CLEARED`、9 `AWAITING_LIVE_CHECK`、0 `DONE`；没有改这些页面的事实、价格、链接、FAQ 或 schema。合併與上線結果見 §13。

**来源 live 查核（浏览器实际渲染）**：
- 麦斯：`shop/details/3369` 官方页为「麥斯西點麵包」，地址復興路76號、06:30–21:30、外帶，列風獅爺餅／芋泥麻糬／切達乳酪麻糬／紅豆麻糬／1/4 切片。
- 蚵嗲之家：`shop/details/3172` 官方页为「蚵嗲之家」，地址莒光路一段59號、14:30–19:00、週四休，列蚵嗲与绿豆／花生／红豆芝麻球，周边景点栏列邱良功母節孝坊。**當時查到官方店家頁電話 082-329222、頁面既有資料 082-322210；本批未改電話，`routeGuide` 不寫電話，CSV 記為待核。後續以新舊官方頁面與 Google 地圖具名地點完成判定並更新，詳 §14。**
- 万家福：`shop/details/3832` 官方页现名「萬家福金門店」，伯玉路二段223號、08:00–22:30、082-312015，列停車場与金門特產方向。
- 船班：`news/details/3470` 列为小三通船班资讯，提供下载与「金廈泉小三通售票網」「i海台」订票入口；官方下载跳转交通部航港局 `motcmpb.gov.tw/Information?SiteId=1&NodeId=543`，该清单列 115 年 11 月金门小三通航班表（发布 2026-10-12、检核 2026-11-12）。本站 PDF 的文字层无法抽取，16:15 等时刻沿用页面既有转录，未改字。
- 禁限带：防检署动物／植物页、台北关菸酒（1.5 公升、200 支、5 公升与大陆酒较低限量）、现金（10 万／2 万／等值一万美元）、药物、基隆关电子烟与加热菸、金门偶蹄类检疫页均实际渲染核对；航警 PDF 经文字抽取确认 24%–70% 每人 5 公升、超过 70% 不得携带。金门偶蹄类官方页另列 114-10-31 修正公告，本批未改既有页面内容，仅在带路文字提醒按现行公告与产品名单核对。

**查核证据**：`pnpm test:voice` 通过（584 档 / 66,621 行 / 534 页 / 9 份带路 / FAQ parity）；`pnpm validate` 通过（556 页、49,795 内部链接、1,928 图片、4,162 schema 节点、canonical／锚点／sitemap／照片／商家／攜程稽核）；`pnpm test:browser` 通过（438 passed，desktop + mobile）。

**當時阻塞**：仍未部署／push，上线 URL 检查无法进行，9 篇全部维持 `AWAITING_LIVE_CHECK`、`liveCheck=PENDING`，0 篇 `DONE`；无合并 SHA，未更新 Issue #59。部署后先核对这 9 页的上线内容，再把 `liveCheck` 改 `VERIFIED`、状态改 `DONE`；實際完成情形見 §13。

**下一批**：以 CSV 当下状态为准，从剩余 525 个 `CLEARED` 页面挑选；建议优先 GSC 有曝光但低 CTR 的页面，另开 worktree 与分支。

## 9. 房況待確認句式清除（2026-11-26）

使用者另指示：「當日房況仍待確認」這個句子頁面也不要出現。這類句子是上一輪清除固定聲明時換上的中性句，仍然讀起來像制式免責，故一併撤掉。

- 清除範圍：主工作區與 `.worktrees/batch2` 兩個工作區各 37 個檔案，主要是 `src/content/hotels/`；另有 `src/data/attraction-detail-pilots.ts` 的「值勤狀態仍待確認」。
- 做法： codemod 末尾新增句式刪除與有限的標點修補（`。。→。`、`，。→。`、`；。→。`、`；，→；`、`，）→）` 等），只刪句子，不改任何地址、電話、日期、價格、連結、FAQ 或 schema。
- 已保留：「現行管理仍待確認」「本次未核實」「歷史照片不代表今天配置」等真正有查核價值的紀錄；以及「當日通行仍待確認」「當日展示仍待確認」等與權責／准入來源狀態有關的紀錄。
- 查核：`scripts/verify-editorial-voice.mjs`、`scripts/update-voice-csv.mjs`、`scripts/rewrite-editorial-voice.mjs` 三處禁用表同步新增；`pnpm test:voice` 0 殘留。
- 證據：主工作區與 batch2 工作區皆通過 `pnpm validate`（556 頁、49,789／49,795 內部連結、4,162 schema 節點）與 `pnpm test:browser`（438 passed，desktop + mobile）。以 `--workers=4` 跑完整套件曾出现并发导致的失败，回復默认并发后全绿，不視為內容 regress。

## 10. 正文与 FAQ 的不确定性措辞清除（2026-11-26，使用者确认范围）

使用者进一步指示：「仍待確認」这类不确定词语不要出现在页面。确认后的范围是**正文＋FAQ 清除、来源记录保留**；词集包含「可能／建議／以現場公告為準」等条件描述，都要改写成有把握但不高估的带路语气，不得编造事实。

- 清除对象：`待確認／未確認／未核實／尚未核實／待查／待核／待釐清` 等查核状态词，以及 `可能／建議／依現場／依當日／以現場／以當日／請以／為準／視現場／視當日／另行確認` 等条件套语。
- 保留范围：`sources[]` 来源标题与正文「資料來源／來源／查核／編輯／參考」段落里的编辑记录；它们不进入读者攻略正文，作为查核轨迹保留。
- 工具：`scripts/rewrite-uncertainty.mjs`（默认报告，`--write` 写入，仅处理 `src/content/*.md`；库模式可被测试更新脚本复用）、`scripts/verify-uncertainty.mjs`（只查读者可见部分）。两者已挂进 `pnpm test:voice` / `pnpm test` / `pnpm validate`。
- 结果：主工作区 559 个档案、batch2 工作区 520 个档案完成改写；读者可见部分查核 0 命中，来源标题里仍有 5 处状态词属预期保留。`verify-editorial-voice.mjs` 的 FAQ 逐字一致、frontmatter JSON、图片署名与 schema 全过。
- 测试同步：删除或改写 21 个 spec 中断言旧免责句的 expectation，改断言仍存在的事实；`pnpm test:browser` 438 passed（desktop + mobile）。`--workers=4` 的并发失败不视为内容问题。
- 共用层同步：详情页 FAQ 标题「你可能還想知道」改为「大家常問的問題」；关于页的查核方法、公告套语改写；管理单位面板与住宿提示的「尚待確認」占位改为「公開資料未提供」；相关 spec 断言同步更新。
- 未改范围：`/terms/`、`/privacy/`、`/cookies/`、`/404/` 的法律与功能文案，以及地图页「建議停留」「地標待核」等功能标签仍含这类词；它们不是攻略正文／FAQ。若要连这些也清，需另行确认并同步法律页测试。
- 部署：本轮结束时仍未 push／部署；合併后的实际部署与上线核查见 §13。

## 11. 待确认/仍须类句式补清（2026-11-26）

使用者再指出「當日接待仍待電話確認」这类句子不得出现。上一轮查核只覆盖固定的「仍待確認」，漏掉「仍待電話確認」「仍待場館確認」「尚待住宿方確認」「仍須向店家確認」「仍請依平台及住宿方確認」「仍應再次確認」「仍請另外確認」「仍須事前確認」「仍待正式依據」等变体。

- 处理：`verify-uncertainty.mjs` 与 `rewrite-uncertainty.mjs` 同步扩成 `(?:仍待|尚待|仍須|尚須|仍請|仍應)[^。；，]{0,16}確認`、`仍(?:須|待|應|請|看|要)|尚須`，并加入具体替换（例如「當日接待仍待電話確認」→「當日接待打電話問」，「仍待重開確認」→「看重開公告」），不是直接删掉语义。
- 结果：主工作区 232 个档案、batch2 工作区 206 个档案改写；读者可见部分查核 0 命中（来源标题里的状态词仍按共用规则保留）。
- 浏览器测试前必须重建 `dist`；曾用旧 dist 跑出 34 个 FAQ parity 假失败，重建后两个工作区均为 `pnpm validate` 通过、`pnpm test:browser` 438 passed。

## 12. 商家名录电话确认句式补清（2026-11-26）

使用者再指出「電話仍待向店家確認」这类词。该精确字符串在源码中已不存在，但同一语义仍以五种形式留在 `src/data/businesses.json` 的 `note`／`reason` 字段（会显示在商家名录与行程面板），共 310 处：

- `政府登記詳頁列出的聯絡號碼；不代表已電話確認當日營業。` → `政府登記詳頁列出的聯絡號碼。`
- `電話與服務請向業者再確認。` → `電話與服務看業者回覆。`
- `來源列示門市或餐飲服務；當日電話確認尚未完成。` → `來源列示門市或餐飲服務。`
- `前批店名、門牌相符的來源列有不同電話，仍待業者確認。` → `…看業者回覆。`
- `政府查詢列有登記資料；目前入住服務、房型與營運狀態尚待業者確認。` → `…入住服務、房型與營運狀態看業者回覆。`

`verify-uncertainty.mjs` 增加对 `src/data/businesses.json` 与 `src/lib/businesses.ts` 的独立检查，防止这类说明回到名录。两个工作区均通过 `pnpm test:voice`、`pnpm validate` 与 `pnpm test:browser`（438 passed）。

## 13. 合併、推送與上線核查（2026-11-26）

**合併**：批次 2 的 5 份 `routeGuide` 與追蹤狀態已合入主工作區，沒有覆蓋主線後續的房況句、不確定詞與商家名錄清除。合併後 `pnpm test:voice` 檢查 584 個原始檔、534 頁、9 份帶路與 FAQ parity 全過；`pnpm validate` 通過（556 頁、49,793 內部連結、1,928 圖片實例、4,162 schema 節點，`astro check` 0 errors / 0 warnings / 0 hints）；`pnpm test:browser` 438 passed（desktop + mobile）。

**提交與推送**：提交 `4b8df2915cd6d9521579c542decd6973e7b4a818`（`Rewrite site voice and add guided route content`）已推送至 `origin/main`；`git ls-remote origin main` 回傳同一 SHA。README 記載正式站由 GitHub `main` 的既有 Cloudflare 部署連線發布；GitHub Actions `verify.yml` 只負責驗證，不等於部署狀態。

**上線 live 檢查**：以帶 SHA 的 cache-busting URL 實際讀取 9 個正式站頁面，逐頁確認 HTTP 200、canonical、`<section id="route-guide">` 標題「像朋友帶路」、五個帶路小標題、來源連結、FAQ 可見問答與 JSON-LD 逐字一致，並確認帶路段沒有不確定詞。九頁全部 PASS：

- `/attractions/zhaishan-tunnel/`（FAQ 10/10、來源 4）
- `/attractions/shuitou-village/`（FAQ 10/10、來源 3）
- `/attractions/juguang-tower/`（FAQ 10/10、來源 3）
- `/food/jinshan-smoked-goose/`（FAQ 3/3、來源 2）
- `/food/max-bakery/`（FAQ 3/3、來源 1）
- `/food/oyster-fritter-house/`（FAQ 3/3、來源 1）
- `/guides/carrefour-kinmen/`（FAQ 4/4、來源 2）
- `/transport/xiamen-kinmen-ferry-november-2026/`（FAQ 3/3、來源 3）
- `/guides/restricted-items/`（無 FAQ，來源 5）

**狀態更新**：CSV 九列改為 `DONE`、`liveCheck=VERIFIED`，notes 記入 `live-check-2026-11-26-sha-4b8df291...`。當時蚵嗲之家官方電話 `082-329222` 與頁面既有 `082-322210` 的來源衝突如實保留；後續在新舊官方頁面與 Google 地圖具名地點查核後已解決，詳 §14。

**殘留阻塞**：本機沒有 `gh` CLI，也未設定可寫入 GitHub Issues 的 API 憑證，因此 GitHub Issue #59 尚未更新合併 SHA 與下一批 slug；此項需要的人在授權環境補登。

## 14. 蚵嗲之家電話來源衝突解決（2026-11-26）

**判定**：現行電話為 `082-329222`。2026-11-26 以瀏覽器實際渲染 `https://kinmen.travel/zh-tw/shop/details/3172`，讀到「更新：2026-11-24」與「電話 +886-82-329222」；同一天以瀏覽器開啟 `https://goo.gl/maps/hkQcwcL8TRDaDKRu8`，Google 地圖「蚵嗲之家」具名地點顯示「893金門縣金城鎮北門里莒光路一段59號」與「+886 82 32 9222」。兩者換算同為 082-329222。

**舊號來源**：`https://kinmen.travel/zh-tw/discover/tour/579` 為 2025-04-29 更新的官方小吃專題，蚵嗲之家條目列「082-322210」；搜尋引擎對官方店家頁的舊快取也保留 2025-06-25 版本與舊號。舊號不是本站捏造，但不再用於基本資料、正文電話與 FAQ。

**頁面更新**：`src/content/food/oyster-fritter-house.md` 的 `updatedAt` 改為 2026-11-26；`facts[電話]`、正文致電說明改為 082-329222；新增「蚵嗲之家的電話是哪一支？」FAQ，frontmatter 與可見 FAQ／JSON-LD 同源；`sources[]` 加入官方店家頁、Google Maps 具名地點與舊官方專題，舊號留在來源紀錄。`tests/food-guides.spec.ts` 增加現行電話與舊號位置的回歸斷言。

**驗證與上線**：本節後續補記本輪 `pnpm test:voice`、`pnpm validate`、`pnpm test:browser`、提交 SHA 與正式站 live 檢查結果。
