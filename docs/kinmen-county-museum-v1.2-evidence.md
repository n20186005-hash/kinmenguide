# 金門縣立博物館 v1.2 本地證據

2026-11-05，實作代理自行查核；獨立QA/發布由主代理統籌。

保留三原專題「這裡值得看什麼」「怎麼安排參觀」「把下一站排在附近」、原主圖place-kinmen-county-museum、觀光處署名與政府網站資料開放宣告。原地址分出官方館址，不冒作Google地址；原座標24.49927,118.40361未核，不再輸出導航/marker/geo。

## 官方證據

- https://kmcpao.kinmen.gov.tw/docDetail.aspx?docID=1 ：直接全文可讀，2014成立管理所、2026-09-01改制為縣立博物館、典藏展示教育角色；不推所有土地/委外維護細節。
- https://kmcpao.kinmen.gov.tw/docDetail.aspx?docID=10115 ：直接可讀，展館週二至日09–17、週一/除夕/政府公告天然災害停班日休館；親子館週五六日09–12及13:30–17不同，不能跨館套用。
- https://kmcpao.kinmen.gov.tw/docDetail.aspx?docID=10114 ：直接可讀，5/5A預約加繞文化園區站，APP或車站預約、頁載發車前10分鐘；只保留預約條件，不重刊網頁班次為當日保證。
- https://kmcpao.kinmen.gov.tw/ ：直接可讀，首頁最新新聞可見2026年10月，但展覽區同時保留2021/2022–2023歷史展；未據此宣稱全部展廳目前開放。搜尋未核到完整當前維護清單，不等於無維護。
- https://kinmen.travel/zh-tw/travel/attraction/1395 ：直接只定位點，免費欄位未讀到；官方搜尋見限期佛舍利展免費與免費索贈品，不能當一般全館票價。原頁無來源的戶外免費及店家消費另計改收費待核。
- Google完整館名查詢工具失敗，未核POI地址與入口；不提供地圖導航/hasMap/address/geo及全島marker。

## 仍待核

一般及活動收費表、各廳當期展覽/維護、親子館名額/實體設施、停車與無障礙、土地及委外、Google具名地址。網站無障礙標章不是實體全區可用證明。

僅本頁、自身registry、專項、本證據及授權pilot fixture（縣立博物館改kinmen-distillery），未改CSV/進度，無提交推送。

實際驗證：validate零errors/warnings/hints；556頁、48,913內部引用、1,884圖片、4,132 schema節點。本頁與pilot fixture桌機手機4 passed（2.3s）；4339已結束。日誌/tmp/county-museum-validate.log、/tmp/county-museum-browser.log。涵蓋照片署名/專題、改制與交通預約/維護條件、FAQ逐條schema、無未核導航/geo/marker、行程與手機溢出。待主代理獨立QA與全套，不代表正式站驗收。

QA地圖補查：實際點開館方本館介紹的Google MAP，取得Google嵌入頁（正文0行），pb帶舊名「金門歷史民俗博物館」、24.4993017,118.4034213及0xce61747551d7a343。館方改制沿革與現址文字支持同一場館的歷史延續，但未能獨立讀到Google具名頁現時顯示地址及遊客入口，嵌入中心/舊地標不等於現行入口核實；維持pending，不將嵌入連結當導航或採其座標作marker。此補充只改evidence，未啟用導航。

## 2026-11-06 independent release review
Coordinating agent confirmed that two independent gpt-6-luna reviewers directly checked key page-specific sources and safety boundaries for this fourth batch. Their role was independent factual/safety acceptance, separate from implementation. The accepted wording distinguishes bounded or historical official roles from current complete responsibilities, official/map reference points from visitor entrances, and announcements from present-day access. Earlier statements awaiting independent QA above are historical workflow records and are superseded by this dated review report; source and prior test records remain preserved. This does not establish current complete ownership/management, precise visitor entrances or real-time access.

Still unresolved for this page: current ticket and facility availability; official old-name embedded map point not verified as current visitor entrance. Original image preserved; not VERIFIED and not a production acceptance claim.

## 2026-11-06 verified named reference point
Coordinating agent/independent QA directly checked the Google Maps named POI in UI and supplied this exact URL: https://www.google.com/maps/place/%E9%87%91%E9%96%80%E5%8D%9A%E7%89%A9%E9%A4%A8/@24.498859,118.4028459,861m/data=!3m1!1e3!4m10!1m2!2m1!1z6YeR6ZaA57ij56uL5Y2a54mp6aSo!3m6!1s0x3414bb67c968dec9:0xce61747551d7a343!8m2!3d24.4992809!4d118.4033966!15sChXph5HploDnuKPnq4vljZrnianppKhaGiIY6YeR6ZaAIOe4oyDnq4sg5Y2a54mp6aSokgEUbG9jYWxfaGlzdG9yeV9tdXNldW2aAURDaTlEUVVsUlFVTnZaRU5vZEhsalJqbHZUMjVWTldKdGFFaFhiR1JXVVRKV05sSlZXa2RoTURCNVdWYzVkbUl4UlJBQuABAPoBBQiHAhAN!16s%2Fg%2F1q64rd7l8!5m1!1e2?entry=ttu. Visible reference only, not verified visitor entrance, parking/admission/accessibility permission, private-house or production-area access, or bridge pedestrian entry. Pending Google frontmatter/schema/map restrictions remain. Original photo preserved.
