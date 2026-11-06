# 西園鹽場地方文化館 v1.2 本地證據

2026-11-05公開資料整理，非現勘。本代理研究實作，父代理另作獨立QA/完整回歸；未另派研究代理，不假稱獨立驗收。

- https://kinmen.travel/zh-tw/travel/attraction/442 官方來源及照片身份。直接讀取僅JS骨架，初輪未直接核到免費欄位及更新日；下述QA補查已補足官方索引來源，不沿用無來源店家消費斷言。
- https://cabkc.kinmen.gov.tw/information?pid=6581&uid=169 直接可讀，2026-03-04二月大事紀記文化局所轄館舍、西園文化館9–17/週一休；2/16除夕休館僅該日期，不當今日開門保證。支持館務角色，不推產權及全部維護分工。
- https://cabkc.kinmen.gov.tw/activitysoon?pid=1004&uid=79 直接可讀，2025-09-26更新，10/9–10/10特定體驗活動。列西園里西園12號、2008-01-23開館、文化局委託英杰企業展示改造與推廣；非現行全面營運委託或固定DIY。清浯洲鹽場大使韓琮功德碑及永安橋碑為來源題材；五代鹽業/1297政府徵鹽/2008館舍啟用各對象不同。
- https://cabkc.kinmen.gov.tw/activitysoon?pid=674&uid=79 2023-05-11歷史活動列西園1號，與2025列12號差異未解，不選一作Google地址或入口。具名POI未核，撤原24.50705/118.40531，不輸出marker/geo/hasMap或推測導航。

原三題「這裡值得看什麼／怎麼安排參觀／把下一站排在附近」與縣博/田墩/金沙連結保留，時段加來源日期與當日確認。40–60分鐘為編輯建議。原照已目視夕照鹽田，不證今日製鹽、鹽田可踩或現行體驗；place-xiyuan-salt-museum、alt西園鹽場實景、觀光處署名/政府網站資料開放宣告、https://kinmen.travel/zh-tw/gwoia 不變。原圖 https://kinmen.travel/attractions/20745/1024x768_attractions-image-4qfcd3zcskeeqf0vvnv1pa.jpg 對應442。

未核：當日開館、入館/戶外/體驗費用及受理、精確入口、Google具名地址、停車交通無障礙、產權及完整維護分工。查當期公告，不以休館推戶外自由准入。下一fixture確認yangzhai-old-street.md存在且registry未opt-in；下次遷移須移換。僅本頁/自身registry/測試/證據及必要fixture，未改CSV進度、不提交部署。

驗證：validate零errors/warnings，556頁/49490內鏈/1884圖片/4190schema；影像與跨集合audit通過。4339 CI=1本頁與pilot fixture桌面/手機4 passed (2.4s)。涵蓋唯一h1/canonical/原三題與圖署名、文化局館務、日期/地址差異與活動界線、FAQ逐字HTML/schema、未核地址geo/hasMap/marker導航缺席、行程增刪及無橫溢出。日誌 /tmp/xiyuan-validate.log、/tmp/xiyuan-browser.log。LOCAL_READY_AWAITING_BATCH_RELEASE；源碼/dist凍結供父代理獨立QA及完整回歸，非部署。

## QA費用與門牌補查
2026-11-05官方繁中索引顯示更新2025-05-22與西園1號；同442簡中官方索引 https://kinmen.travel/zh-cn/travel/attraction/442 明列2025-05-22及免費。https://media.taiwan.net.tw/zh-tw/portal/travel/json/attraction_371020000a_000442 直接讀JSON，UpdateTime=2025-05-22T01:44:10+08:00，IsAccessibleForFree=null、FeeInfo空字串，PostalAddress西園里西園1號。空值不證收費，不構成與免費相反票制；資料完整度有差別。頁面按日期來源列免費並提示當期及活動另核。文化局2025活動12號仍與觀光/2023活動1號不同，未核原因，不作具名入口或導航。原免費未知結論由此補查取代，現行條件仍待確認。

費用補查修正後：validate exit0（556頁/49490內鏈/1884圖片/4190schema）；4339雙端本頁專項2 passed (1.7s)，新增免費來源日期、空值非收費及frontmatter費用斷言，FAQ/schema與未核導航守衛通過。/tmp/xiyuan-fix-validate.log、/tmp/xiyuan-fix-browser.log。源碼/dist再次凍結，等待獨立QA及完整回歸，未提交部署。

門牌敘述補齊：FAQ與registry位置資料同步明列文化局2023及觀光網/觀光署2025-05-22仍為1號，對照文化局2025活動12號；不再簡化為舊2023對新2025差異，無已核改址推論。新增同年來源差異及locationDescription斷言。

門牌來源補齊後validate exit0（556頁/49490內鏈/1884圖片/4190schema），4339桌面手機專項2 passed (1.2s)。FAQ可見文字與schema一致、同年門牌來源差異及未核導航守衛通過。日誌 /tmp/xiyuan-address-validate.log、/tmp/xiyuan-address-browser.log。源碼/dist已凍結供完整回歸，未提交部署。

## 2026-11-06 named map-reference clarification
Independent Maps UI QA supplied exact named reference: https://www.google.com/maps/place/Xi+Yuan+Yan+Chang+Di+Fang+Cultural+Guan/@24.5088409,118.402999,861m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3414bb706b9d7db9:0x436a461324f215ff!8m2!3d24.508836!4d118.4055793!16s%2Fg%2F1tp05qsb. Identity checked; display address, precise visitor entrance and daily access remain unverified. Visible reference only, no Google fields, coordinates, hasMap/schema, marker/navigation enabled. Private-house/interior/tower/water/work-area restrictions and original image preserved. Earlier named-POI-unverified statements are historical for identity only. Await independent release review.
Implementer directly read https://cabkc.kinmen.gov.tw/archive?uid=8 , last update 2026-11-06, listing Xiyuan1, 082-355763, daily09–17/Monday closed. Historic12 record retained and discrepancy not inferred resolved; this is not verified visitor entrance or daily opening.
