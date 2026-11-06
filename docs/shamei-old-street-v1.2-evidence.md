# 沙美老街與沙美摩洛哥 v1.2 本地證據

2026-11-05公開資料核查；未提交推送部署，CSV/進度由主代理維護。

## 官方來源及範圍

- https://kinmen.travel/zh-tw/travel/attraction/1450 ：官方索引可讀（直接頁僅定位點）介紹八卦街、小吃、老屋巷道與張文帝洋樓；摩洛哥是取景比喻，不是北非建築來源。整體全天/免費不擴各店、私宅、廟宇准入；未逐攤確認目前經營與價格。
- https://www.kinmen.gov.tw/News_Content2.aspx?n=98E3CA7358C89100&s=CE885A1F2CFDEF0E&sms=BF7D6D478B935644 ：官方索引街區修復示範工程、三民路/仁愛路/信義路為軸，非完整地籍/文資法定範圍或全街管理證明；不宣稱修復今日已完工或仍施工。
- https://kinmen.travel/zh-tw/discover/tour/202 ：直接全文可讀2026-01-13版官方遊程，週末10–12時、09:30–10:00金沙戲院登記、免費；有暑期例外但不推每年/今日一定成行，先查當期。舊車站集合資訊僅保留歷史查核線索，不推普通週末現制；路線也非每棟室內公開證明。
- 其他官方市場舊報導記民有市場/權屬複雜，但非當期住戶與所有人調查，本頁不搬用舊地主數或推現任管理人，不新增具名店家營運保證。

## 保留及未核

原三專題、原place-shamei-old-street照片作者許可及站內連結保持，單圖不設空相冊。街區空間、店家營業和個別歷史建築列冊/室內准入分別確認；不攀殘牆屋頂或擅穿住家。保留午餐安排但為編輯建議，非當期供餐承諾。

Google具名POI地址/入口未核，原24.49061,118.41227撤導航/marker/schema geo。官方街軸與金沙鎮位置不是Google地址或法定範圍。現行街區/市場及逐屋管理權屬、個別文資範圍、每店現況、導覽成行、停車公車/無障礙待核。

僅本頁/registry自身/專項測試/證據及pilot fixture換shanglin-general-temple（確認存在未opt-in），未改其他集合、CSV/進度，不提交。未額外派遣子代理，主代理協調獨立QA。

## 驗證

原先回歸期間僅準備，後依通知完成下列驗證。


## 沙美/青岐日期/沙溪團體門檻聯合驗證

主代理確認上一套416 passed已結束後執行。最終validate：0 errors/0 warnings，556頁、49199內鏈參照、1884圖片實例、4161 schema nodes。沙美/青岐/沙溪及pilot隔離用例桌面手機8 passed（3.3秒），包括原專題/圖片署名、導覽集合及當期店家界線、青岐2024-01-17日期/解說非入場費、沙溪團體25元20人以上門檻、FAQ/schema全等、導航/geo未核缺席、行程增刪及手機無溢出。日誌`/tmp/shamei-qingqi-shaxi-validate.log`、`/tmp/shamei-qingqi-shaxi-browser.log`，4339正常結束。LOCAL_READY_AWAITING_BATCH_RELEASE，待全套/獨立QA，未部署或VERIFIED。未動CSV/進度，未提交推送。


## QA更新來源取代導覽舊比較

直接全文核讀 https://kinmen.travel/zh-tw/news/details/4332 ，2026-01-21公告記自1/17起金沙戲院報到、週末10–12及09:30–10登記/免費。以此更新FAQ/schema、交通段及registry，仍需當期成行確認。先前泛化舊沙美車站集合對比已移除，不藉歷史/特定活動推普通週末現制；此段取代前述舊比較結論，歷史證據保留。與上林重驗。


## 上林/沙美新版導覽聯合驗證

沙美4332公告補正後重構建：validate 0 errors/0 warnings，556頁與內鏈/圖片/schema檢查通過。上林、沙美及pilot隔離用例桌面手機6 passed（2.9秒），包括導覽2026-01-21公告/1-17起報到、FAQ/schema全等、原專題照片、信仰與當期准入角色、未核導航/geo缺席、行程增刪及手機無溢出。日誌`/tmp/shanglin-shamei-validate.log`、`/tmp/shanglin-shamei-browser.log`；4339服務正常結束。待主代理全套及獨立QA，未部署、未改CSV/進度或提交推送。


## 暑期例外界線

1/13舊遊程列7/1–8/31每日，但1/21報導只明述週末且未確認暑期例外；FAQ/schema及測試同步此差異，當期向主辦確認。前段舊車站泛化已刪，僅留歷史待核線索。與尚義聯合驗證。


## 尚義/沙美暑期條件聯合驗證

主代理通知全套已結束後固定source並validate：0 errors/0 warnings，556頁、49218內鏈參照、1884圖片實例、4163 schema nodes。尚義、沙美及pilot隔離用例桌面手機6 passed（2.9秒），包括原專題/圖片署名、時段來源差異、環教申請角色/設施現況、沙美1/13暑期與1/21未確認例外、FAQ/schema全等、未核導航/geo缺席、行程增刪及手機無溢出。日誌`/tmp/shangyi-shamei-validate.log`、`/tmp/shangyi-shamei-browser.log`；4339已正常結束。source與dist已固定供主代理完整回歸，不再寫頁面或構建。LOCAL_READY_AWAITING_BATCH_RELEASE，待獨立QA/完整回歸，非部署或VERIFIED。未改CSV/進度，未提交推送。

獨立複核補記（2026-11-05）：前文暑期例外是較早 2026-01-13 遊程頁所列 7/1–8/31 每日，2026-01-21 公告未確認是否延續；不能當作當期保證。舊車站作集合的線索僅屬個別歷史活動範圍，不足以證明一般週末舊制。

## 2026-11-06 official reference-link clarification
Independent QA supplied and directly checked https://kinmen.travel/zh-tw/travel/attraction/1450. Added a visible official reference link with explicit visitor-entrance/access/private-work-area limitations; no Google address, coordinates, hasMap, marker or navigation enabled. Implementer web-tool open returned inaccessible/minimal content and does not claim independent full retrieval. Original photo and FAQ answers preserved.

## 2026-11-06 independent release review
Coordinating agent confirmed that two independent gpt-6-luna reviewers directly checked key page-specific sources and safety boundaries for this fourth batch. Their role was independent factual/safety acceptance, separate from implementation. The accepted wording distinguishes bounded or historical official roles from current complete responsibilities, official/map reference points from visitor entrances, and announcements from present-day access. Earlier statements awaiting independent QA above are historical workflow records and are superseded by this dated review report; source and prior test records remain preserved. This does not establish current complete ownership/management, precise visitor entrances or real-time access.

Still unresolved for this page: current guide and summer schedule; private access and named POI. Original image preserved; not VERIFIED and not a production acceptance claim.

## 2026-11-06 verified named reference point
Coordinating agent/independent QA directly checked the Google Maps named POI in UI and supplied this exact URL: https://www.google.com/maps/place/Shamei+Old+Street/@24.4906075,118.4122725,861m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3414bb412e30e48b:0x564fd20f44a49260!8m2!3d24.4906075!4d118.4122725!16s%2Fg%2F1v2ywhv9!5m1!1e2?entry=ttu. Visible reference only, not verified visitor entrance, parking/admission/accessibility permission, private-house or production-area access, or bridge pedestrian entry. Pending Google frontmatter/schema/map restrictions remain. Original photo preserved.
