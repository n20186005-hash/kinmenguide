# 金門城東門 v1.2 本地證據

查核日：2026-11-05。實作代理自行核查；獨立 QA 與發布由主代理統籌，未宣稱已上線。

## 原頁保留

三篇原有專題「從東門認識舊金門城」「現在的門樓與明代城址」「安全停車，再開始看城門」保留於 FAQ 後；僅將未核地名導航改為待核。原照片 place-kinmen-city-east-gate、觀光處署名、政府網站資料開放宣告、來源429及授權連結未變。原頁沒有個別座標或可核Google POI，不新增。

## 來源與可支持範圍

- https://www.kinmen.gov.tw/News_Content2.aspx?n=98E3CA7358C89100&s=EDCF9EA1CAAAF72C&sms=BF7D6D478B935644 ：直接可讀全文，110-06-20上版。支持珠水路連接舊金城與古崗、近代門樓與殘存舊基礎區分、民國85年活動隔年東門完工、金城鎮公所當時延請廠商修繕。不支持現在仍施工、已完工、現在可登樓、持續管理或土地所有權。
- https://nchdb.boch.gov.tw/assets/overview/historicSite/20220401000002 ：直接頁只呈外殼；官方搜尋索引可讀「明清金門城遺跡」及史蹟性質，地方文資網索引公告2022-02-14。不是把2022-04-01索引頁日期冒作指定日，也不推定新東門整樓皆屬指定原構、指定範圍或土地權利。
- https://kinmen.travel/zh-tw/travel/attraction/429 ：原始金門城整體景點資料，直接僅定位點；不拿整體全天欄位保證東門室內/登樓准入，不假定東門所有空間免費。
- https://www.taiwantrip.com.tw/Frontend/Route/Select_p?RouteID=R0057 ：直接頁可讀，F線官方介紹列東門為沿線景點；出發前再查開行/班次/費用，未由2019新聞當作現行時刻。
- Google Maps完整名稱查詢無法存取，具名POI和顯示地址未核；待核時不設導航、schema address/geo/hasMap或全島marker。

## 未核事項

現行日常管理及土地權屬、室內/階梯登樓、目前工程或圍設、現行收費、停車與連續無障礙、Google具名地址。依當日公告，不繞圍籬；不得以照片/舊報導推現況。

## 修改範圍與驗證

僅本頁Markdown、registry自身key、本頁專項測試、本證據；依授權把pilot未遷移fixture由東門改為尚未改造的kinmen-city-north-gate，下次遷移北門需再調整。CSV與進度由主代理負責；無提交推送。

待執行validate與桌機/手機專項。測試覆蓋史蹟/新樓區分、歷史修繕非當前准入、FAQ/schema逐條一致、原專題照片署名、待核地圖無導航/geo/marker、行程與手機溢出。

實際驗證結果：validate 通過（0 errors / warnings / hints），556頁、48,883內部引用、1,884圖片、4,129 schema節點；東門與pilot fixture桌機/手機4 passed（2.3s）。使用4339，測試服務已結束。日誌：/tmp/east-gate-validate.log、/tmp/east-gate-browser.log。仍待主代理獨立QA與完整回歸，不代表正式站驗收。

## 2026-11-06 named Google reference point
Independent QA directly checked the named Place in Google Maps UI and supplied this exact URL: https://www.google.com/maps/place/Kinmen+Cheng+Historical+Remains/@24.400147,118.3092091,862m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3414a1fa435af89f:0xadb313e3cd6c49be!8m2!3d24.400147!4d118.3092091!16s%2Fg%2F1vknl_4y. Added only a visible body reference, expressly not a verified entrance, admission, parking, accessibility or private/water access grant. Google pending fields, address, coordinates, hasMap/schema and whole-site map remain unchanged; original image preserved.

## 2026-11-06 independent release review
Coordinating agent confirmed that two independent gpt-6-luna reviewers directly checked key page-specific sources and safety boundaries for this fourth batch. Their role was independent factual/safety acceptance, separate from implementation. The accepted wording distinguishes bounded or historical official roles from current complete responsibilities, official/map reference points from visitor entrances, and announcements from present-day access. Earlier statements awaiting independent QA above are historical workflow records and are superseded by this dated review report; source and prior test records remain preserved. This does not establish current complete ownership/management, precise visitor entrances or real-time access.

Still unresolved for this page: current management, access and ownership; exact heritage boundary and named Google POI. Original image preserved; not VERIFIED and not a production acceptance claim.
