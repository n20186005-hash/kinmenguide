# 尚義環保公園與風獅爺 v1.2 本地證據

2026-11-05查核；未提交推送部署，CSV/進度由主代理維護。

## 官方來源及差異

- https://kinmen.travel/zh-tw/travel/attraction/1492 ：官方索引完整可讀2025-05-26版，週二至日09–17、一休、免費及無障礙廁所/坡道/車位清單；直接工具頁僅定位點。取代原頁08–17:30/週末休館，不當設備當日全可用。
- https://neecs.moenv.gov.tw/Home/PlaceQryView?id=fc743aad-5f38-40fd-8a21-eb0c0de313f9 ：直接全文可讀，場域正義里尚義100號、環保局申請單位、中心/島湖/景觀認證範圍、平日09–17其他預約、082-336823#104，證書2025-10-29至2030-10-28有效；頁回更新2026-08-06（搜尋索引另一快取顯示9/30，不合併版本日期）。時段與觀光不同，未完整釐清戶外/館內服務範圍，提示先問，不推證書有效就可隨到課程。
- https://www.kinmen.gov.tw/News_Content2.aspx?n=98E3CA7358C89100&s=11B27F969C949C97&sms=BF7D6D478B935644 ：官方索引空品維護區全園及停車場、周邊道路不含，24小時管制針對移動污染源而非開園；不是老車全面禁入。細項檢驗條件依最新公告，不將其當遊客准入全規則。
- https://www.kinmen.gov.tw/News_Content2.aspx?n=98E3CA7358C89100&s=8AE9C404CFA8F5F9&sms=BF7D6D478B935644 ：2017-10-12整修暫停至預估2018年5月，僅歷史，不能斷言今日仍施工/已全開。
- 原巨型風獅爺來源 https://kinmen.travel/zh-tw/travel/attraction/1661 保留；島湖複製品非原像，歷史展示數不保證今日全數完整。

## 保留與待核

原三專題、照片place-shangyi-environmental-park作者許可及站內連結保留；一圖不設空相冊。舊營業欄位在原深度專題明示由新版差異取代，不留相互矛盾操作建議。

Google具名POI/地址入口未核，原24.44069,118.36894撤導航/marker/schema geo。官方尚義100號另作場址，不冒充Google地址。現行各區/課程營運費用、完整權屬維護、湖邊/解說設施與無障礙現況、停車公車/空品車輛條件先核；不餵鳥下水或站湖緣。

僅本頁/registry自身/專項測試/證據及pilot fixture換shanwai-old-street（確認存在未opt-in），另依主代理QA授權修沙美暑期說明/證據/測試。不改其他集合、CSV/進度，不提交。未額外派遣子代理，主代理安排獨立QA。

## 驗證

原先回歸期間準備，後依通知執行以下驗證。


## 尚義/沙美暑期條件聯合驗證

主代理通知全套已結束後固定source並validate：0 errors/0 warnings，556頁、49218內鏈參照、1884圖片實例、4163 schema nodes。尚義、沙美及pilot隔離用例桌面手機6 passed（2.9秒），包括原專題/圖片署名、時段來源差異、環教申請角色/設施現況、沙美1/13暑期與1/21未確認例外、FAQ/schema全等、未核導航/geo缺席、行程增刪及手機無溢出。日誌`/tmp/shangyi-shamei-validate.log`、`/tmp/shangyi-shamei-browser.log`；4339已正常結束。source與dist已固定供主代理完整回歸，不再寫頁面或構建。LOCAL_READY_AWAITING_BATCH_RELEASE，待獨立QA/完整回歸，非部署或VERIFIED。未改CSV/進度，未提交推送。

獨立複核補記（2026-11-05）：環境部認證頁本次讀取顯示更新日期 2026-11-05；先前記錄的 2026-08-06 為較早快取，非本次讀取結果。認證有效期及場域範圍仍依原頁記載。https://neecs.moenv.gov.tw/Home/PlaceQryView?id=fc743aad-5f38-40fd-8a21-eb0c0de313f9

## 2026-11-06 official reference-link clarification
Independent QA supplied and directly checked https://kinmen.travel/travel-map/zh-tw/guide-sign/3/attraction/1492. Added a visible official reference link with explicit visitor-entrance/access/private-work-area limitations; no Google address, coordinates, hasMap, marker or navigation enabled. Implementer web-tool open returned inaccessible/minimal content and does not claim independent full retrieval. Original photo and FAQ answers preserved.

## 2026-11-06 independent release review
Coordinating agent confirmed that two independent gpt-6-luna reviewers directly checked key page-specific sources and safety boundaries for this fourth batch. Their role was independent factual/safety acceptance, separate from implementation. The accepted wording distinguishes bounded or historical official roles from current complete responsibilities, official/map reference points from visitor entrances, and announcements from present-day access. Earlier statements awaiting independent QA above are historical workflow records and are superseded by this dated review report; source and prior test records remain preserved. This does not establish current complete ownership/management, precise visitor entrances or real-time access.

Still unresolved for this page: different hours for site and education service; current management and named POI. Original image preserved; not VERIFIED and not a production acceptance claim.
