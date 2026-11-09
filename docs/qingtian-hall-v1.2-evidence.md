# 擎天廳 v1.2 本地證據

2026-11-05公開資料核查；未提交推送部署。CSV/進度由主代理維護。

## 官方來源與差異

- https://kmsvs.azurewebsites.net/ ：直接可讀115年度首頁，週二/六上下午及四上午申請梯次，個人1/4梯08:30/14:00山外集合、公車24元、未滿5人取消接駁；旅行社/團體僅擎天廳，不推三館全包含。24小時是線上收件而非開放。首頁暫停公告僅可見2026-08-25標題，本輪未核全文適用日，不斷言當日全閉或全開。
- https://kmsvs.azurewebsites.net/docs/visit-guidelines.html ：直接可讀115年度須知，縣府初審、金防部複審及查驗；軍方規劃動線及臨時業務調整。採其軍事准入角色，不推產權/全部維護。載僅本國國民、證件、團進團出與禁制區拍攝限制。
- https://kmsvs.azurewebsites.net/Apply/Individual ：官方表單與首頁/須知有文字差異：團體7–30日 vs 首頁/須知7–60日；通用證件文字提居留證 vs 須知限制國民。頁面明示差異先問082-318823轉62713，不自行解讀放寬外籍資格。僅閱讀，未填寫或提交任何申請。
- https://www.kinmen.gov.tw/News_Content2.aspx?n=98E3CA7358C89100&s=9A756E34C6960A56&sms=BF7D6D478B935644 ：官方索引完整可讀2026-05-20報導，自6/1線上申請、新專線及身分限制；直接抓取502，記局限，不假稱直接全文成功。
- https://www.kmnp.gov.tw/ch/titlelist/faq/3795 ：直接可讀舊電話/上班時間受理FAQ，保留作沿革來源，不覆蓋2026線上辦理。國家公園推動遊程亦非整體設施管理證明。
- 原景點 https://kinmen.travel/zh-tw/travel/attraction/1389 與工程歷史題材保留。

## 保留與未核

保留原三專題及place-qingtian-hall照片、作者授權與站內連結，單圖不另設空相冊。Google具名POI/入口未核，原座標24.45377,118.40649不輸出導航、marker或schema geo；官方軍事場址不等入口。

未核當期完整暫停日期、申請差異最終適用、各項費用、無障礙/階差及緊急動線、產權與日常維護全部分工；未申請不提供自行入營或自由健行路線。

僅本頁/自身registry/專項測試/證據及授權pilot fixture換qilin-mountain-park（確認檔案存在且未opt-in）；不改CSV/進度和其他集合，不提交。未額外派遣子代理，主代理安排獨立QA。

## 驗證

主代理通知青岐港全套406 passed後執行：validate通過，0 errors/0 warnings；556頁、49151內鏈參照、1884圖片實例、4156 schema nodes。桌面/手機擎天廳及pilot隔離用例4 passed（2.6秒），含標題/原專題與主圖署名、FAQ/schema一致、管理/審查與入營界線、資料差異提醒、未核導航/geo缺席、行程增刪及手機無溢出。日誌`/tmp/qingtian-validate.log`、`/tmp/qingtian-browser.log`；4339服務隨測試正常結束。

LOCAL_READY_AWAITING_BATCH_RELEASE，待獨立QA與完整回歸；非部署或VERIFIED。


## QA期限措辭補正

再次直接核系統首頁，原文「參訪日7天前完成，可申請60天內行程」，FAQ與registry改為「至少提前7日完成、可申請未來60日內行程」；團體表單7–30日另列差異，不合併為同規則。專項新增精確語意斷言，與麒麟山聯合重驗。


## 擎天期限補正與麒麟山聯合重驗

期限QA補正後重新validate：0 errors/0 warnings，556頁，連結/圖像/schema檢查通過。擎天廳、麒麟山及pilot桌面/手機6 passed（2.9秒），包括首頁申請期限精確語意、獨立團體差異、FAQ/schema全等及原有准入安全回歸。日誌`/tmp/qilin-qingtian-validate.log`、`/tmp/qilin-qingtian-browser.log`，4339服務已正常結束。待主代理獨立QA/完整回歸，未部署。
## 2026-11-06 isolated candidate and new independent review

Candidate /Users/a20186005/Documents/Codex/2026-11-04/task/release-qingtian-candidate begins from an exact file-tree mirror of GitHub main 896e52159d8d97377754a602de7f74300304f3d9, tree fdeb15957e9f62d6072b6090062e773459aaf987. The local placeholder commit is not the remote merge SHA and must never be pushed as remote history. Only Qingtian page, exact registry block, focused test, evidence and CSV row are candidate scope. No #195 or Tiger Fort directory touched. Existing JPEG, photo metadata/credits and original topics/links preserved.

Directly read current official homepage and guidelines via homepage link, and actual Chrome homepage UI; the live UI displayed July-20 test-booking and June-2 Hu Lien notices, not the old August-25 closure title. Web cached responses sometimes still include that old title; its omission is not reopening evidence. Content therefore requires current approval/notice and never promises a requested date is available. Direct guidelines explicitly require county first review, military final review, same-day identity check and approved group route. Approved transport and meeting arrangements are not public self-entry directions.

Actual Google Maps detail UI: Taiwu Mountain Qingtian Hall / Taiwushan Qingtian Hall Chinese name, visible address `891, Kinmen County, Jinhu Township, Shanwai Village, 中正路88號`, website https://kinmen.travel/zh-tw/guide/control-attraction redirecting to official application system. Actual copied Place URL https://www.google.com/maps/place/Taiwu+Mountain+Qingtian+Hall/@24.4537702,118.4064884,861m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3414a4c7dfbd5573:0x67173804636be09!8m2!3d24.4537702!4d118.4064884!16s%2Fg%2F11gzyc932 . Published only as identity reference, no marker/geo, no approved entrance, parking or access inference. The displayed address is not a checked military gate or applicant meeting point.

Independent source reviewer requested/actual model gpt-6-luna, agent /root/batch4_plan/qingtian_review, read official homepage/guidelines/manual independently. It confirmed bounded military approval rules and flagged manual inconsistencies in personal limits and roster-lock timing; no numeric personal quota/lock deadline is added. Existing form/guide differences remain explicit, with applicant qualification resolved by official approval rather than guessed relaxation. No application, contact, public commit, PR or deployment occurred. Current whole-site ownership/maintenance, actual approved entrance, current closure/fee/accessibility details remain AWAITING_SOURCE_CHECK.

## Isolated candidate validation result

2026-11-06: validate exited 0 with zero Astro errors/warnings; full desktop/mobile browser suite 434 passed (2.1 minutes), including the new Qingtian case on both devices. Logs /tmp/qingtian-candidate-validate.log and /tmp/qingtian-candidate-browser.log. Independent gpt-6-luna frozen-content/source review found no blocker and confirmed FAQ/body parity, preserved old topics/image reference, original Google display address separated from approval/entry, and no self-entry instruction. This is LOCAL candidate QA, not production acceptance.

Checked unchanged JPEG and full photos metadata byte-for-byte against baseline; exact registry addition only Qingtian; CSV only its row. Other content collections unchanged. Temporary isolated test config uses port 48921 and dependencies link existing node_modules; neither is release scope. The source-tree base is exact current-main tree noted below, excluding in-flight #195; before any eventual public release recheck latest main and integrate new accepted changes. No public commit, PR, merge or deployment; AWAITING_SOURCE_CHECK remains.

## 2026-11-06 latest accepted main integration

This new isolated directory is /Users/a20186005/Documents/Codex/2026-11-04/task/release-qingtian-integrated . Real remote main #195 merge is 0cced7df90e02bb275ee62d640fb910c982ec931; exact accepted file tree e61f55db16df22e36777481c92e98081dddcbd6e. The local base placeholder 103709078f0ba146aa8cd167973b9608b1034b2c has precisely that tree; it is explicitly NOT the remote commit or a public release and must not be pushed as remote history.

Only the Qingtian page, exact registry block, CSV row, focused test and evidence were transferred. The accepted Jiangong/arch page, tests/evidence and CSV records remain part of baseline unchanged. Existing Qingtian JPEG and photo metadata unchanged. Dependencies reused by local symlink; isolated local loopback test port 48922, no interaction with #195 or Tiger Fort directories. Earlier 434-case candidate result remains historical; this latest-main integrated candidate requires a fresh full suite and is not production.

## Latest-main integrated validation result

2026-11-06: validate exited 0 with zero Astro errors/warnings; full desktop/mobile browser suite on isolated loopback port 48922 passed all 438 cases (2.8 minutes), including Qingtian desktop/mobile and accepted #195 pages. Logs: /tmp/qingtian-integrated-validate.log and /tmp/qingtian-integrated-browser.log. This supersedes the earlier 434-case pre-#195 candidate result for integration readiness only; it is not a live-production result.

Qingtian content/test blobs are byte-identical to the independently reviewed candidate. Registry and CSV scope were checked as exactly one new block/one row; accepted prior pages and original JPEG/photos metadata remain byte-identical to main baseline. git diff --check passed. The final staged tree is recorded in the separate local handoff /tmp/qingtian-integrated-final.json and agent report to avoid a self-referential tree hash. No push, remote commit, PR, merge or deployment. Source/current military permission gaps remain AWAITING_SOURCE_CHECK.
## 2026-11-06 #196 exact-main integration

Remote commit e9dfe25b7f33e128d18b39458addee4243b14f27 was independently read through GitHub and its tree confirmed as e9f8c72f011228f84b2abcd751c0ca7b958dfc1f. New isolated directory release-qingtian-on196 uses local placeholder 114f94e96b80719d3896658cb0429561f3bed181 with precisely that file tree. This is NOT the remote commit and must not be pushed as remote ancestry.

Only the previously reviewed Qingtian five-file candidate was overlaid. All accepted #195 content and the #196 Tiger photograph, metadata, evidence, photo test and pending-photo records belong to baseline and are preserved. Local test port 48923 with existing dependencies reused. Earlier 438-case pre-#196 integration result remains historical only; fresh latest-baseline validation follows. No push or public release.

## #196 integrated final verification

2026-11-06: validate exited 0, zero Astro errors/warnings; isolated loopback 48923 complete desktop/mobile suite 440 passed (2.2 minutes), including Tiger photo and Qingtian checks. Logs /tmp/qingtian-on196-validate.log and /tmp/qingtian-on196-browser.log. The source/test remain the same independently reviewed Qingtian blobs; latest baseline adds accepted #196 photo work without altering it. Compared every Tiger #196 file plus full photos metadata and prior accepted pages against exact baseline: unchanged. CSV only Qingtian row, registry only Qingtian block, five release-scope files. Final tree is recorded separately at /tmp/qingtian-on196-final.json to avoid self-reference. Earlier integration hashes/results above remain historical; this section is the current candidate. No push, public commit, PR, merge or production claim; AWAITING_SOURCE_CHECK retained.
