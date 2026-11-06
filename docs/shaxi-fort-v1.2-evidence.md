# 沙溪堡 v1.2 本地證據

2026-11-05查核；未提交推送部署，CSV/進度由主代理維護。

## 來源/限制

- https://kinmen.travel/zh-tw/travel/attraction/1530 ：官方索引地質及青岐岬角，非貓公石場域；一般全天/免費欄位不推所有坑道室內與夜間安全，票務另有公所公告。
- https://lieyu.kinmen.gov.tw/travel/cp.aspx?n=1B709F39D72985AB ：2020-10-20介紹，官方索引完整可讀L17-2/1971、歷史設施及花崗岩/片麻岩；直接抓取超時，歷史清單不當目前准入。
- https://www.kinmen.gov.tw/News_Content2.aspx?n=98E3CA7358C89100&s=5348ADCB4F03B2C2&sms=BF7D6D478B935644 ：官方2018報導公所爭取軍方撥用/整建活化，歷史角色不推產權與整體現管理。
- https://lieyu.kinmen.gov.tw/News_Content.aspx?Create=1&n=163D622C1593A5D7&s=D01DABEC57251AEC&sms=A2C62D68901B977C ：2024-01-08公告（1/15起，日期由先前主QA核原公告），本輪官方索引可見沙溪堡全30/優15；直接抓取超時。補核官方 https://lieyu.kinmen.gov.tw/News_Content.aspx?n=54F94CE42BDC958C&s=2C8D4A7F3D9DC506&sms=A2C62D68901B977C 索引明確全30/優15/團25，無擅自表格跨欄推定。與觀光免費欄位分來源表述，當期票種/免票/收費空間再問。
- https://lieyu.kinmen.gov.tw/travel/cp.aspx?n=B0622BF9DF591213 ：官方索引旅遊服務列沙溪堡082-363235；頁尾公所地址不是景點Google地址。

## 保留與未核

保留原四專題、末段已核海濱公園具體位置碼連結及place-shaxi-fort照片/作者/授權，一圖不設空相冊；風大、階梯、輪休與戶外開閉不同意義保留，未替換照片或借貓公石管理資料。

Google具名POI地址入口未核，原24.41166,118.2128撤導航/marker/schema geo；官方青岐破湍頭海岸上方位置另列，無GPX/沿岸穿越/坑道全線准入承諾。現行完整權屬與維護、票種資格及範圍、管理人員輪休、車道/停車公車及無障礙未核；歷史撥用不推全部軍事遺構已對外開放。

僅本頁/registry自身/專項測試/證據及pilot fixture換shamei-old-street（確認存在未opt-in）；不改其他集合、CSV/進度，不提交。未另派子代理，主代理統籌獨立QA。新收費公告亦列麒麟山及青岐港（解說服務），已告知主代理待獨立核查，不擅改兩頁。

## 驗證

主代理通知榕園/乳山全套414 passed後執行：validate通過，0 errors/0 warnings；556頁、49189內鏈參照、1884圖片實例、4160 schema nodes。沙溪及pilot隔離用例桌面/手機4 passed（2.6秒），含原四專題/主圖署名、H1/canonical與順序、票務來源差異/當日准入、FAQ/schema逐項全等、未核導航/geo缺席、行程增刪及手機無溢出。日誌`/tmp/shaxi-validate.log`、`/tmp/shaxi-browser.log`；4339正常結束。

LOCAL_READY_AWAITING_BATCH_RELEASE，待獨立QA及完整回歸，非部署或VERIFIED。


## QA觀光來源版本補正

本輪官方景點索引可見更新2025-11-07（官方/ja另一語版2025-04-25不合併），FAQ/registry將一般免費欄位按繁中版日期2025-11-07標示，非今日票務確認；公所2024價目另列。與三頁票務補充一併重驗。


## 四頁票務/來源日期聯合重驗

沙溪上一版全套416 passed後完成QA補正，validate通過：0 errors/0 warnings，556頁、49189內鏈參照、1884圖片實例、4160 schema nodes。麒麟/青岐/乳山/沙溪桌面手機專項8 passed（3.4秒），包括新票價及來源日期、解說非入場費、FAQ/schema逐項一致、原專題圖像、管理准入/導航界線、行程增刪及手機版。日誌`/tmp/three-fees-validate.log`、`/tmp/three-fees-browser.log`，4339正常結束。未動CSV/進度、未提交推送。待主代理全套及獨立QA，非部署或VERIFIED。


## 團體票門檻QA補正

主QA核官方團體票須20人以上；frontmatter/FAQ/schema/registry與精確測試補全沙溪團體25元（20人以上），日期與當期另核保留。與沙美/青岐日期補正聯合重驗。


## 沙美/青岐日期/沙溪團體門檻聯合驗證

主代理確認上一套416 passed已結束後執行。最終validate：0 errors/0 warnings，556頁、49199內鏈參照、1884圖片實例、4161 schema nodes。沙美/青岐/沙溪及pilot隔離用例桌面手機8 passed（3.3秒），包括原專題/圖片署名、導覽集合及當期店家界線、青岐2024-01-17日期/解說非入場費、沙溪團體25元20人以上門檻、FAQ/schema全等、導航/geo未核缺席、行程增刪及手機無溢出。日誌`/tmp/shamei-qingqi-shaxi-validate.log`、`/tmp/shamei-qingqi-shaxi-browser.log`，4339正常結束。LOCAL_READY_AWAITING_BATCH_RELEASE，待全套/獨立QA，未部署或VERIFIED。未動CSV/進度，未提交推送。

## 2026-11-06 named-reference identity
Independent Maps UI QA supplied https://www.google.com/maps/place/Shaxi+Fort/@24.4116614,118.2102178,861m/data=!3m2!1e3!4b1!4m6!3m5!1s0x34149ea411640189:0xa1679a8ec8908263!8m2!3d24.4116565!4d118.2127981!16s%2Fg%2F11by_g7bhd; named identity only, not display address, visitor entrance, daily admission, parking or accessibility. 此為沙溪堡，不套其他堡體；不代表全部工事或坑道開放，歷史票價與當期受理條件分開核實。 No pending Google frontmatter/schema/marker enabled. Original photo preserved. Earlier named-POI-unverified evidence is superseded for identity only. Await independent release review.
