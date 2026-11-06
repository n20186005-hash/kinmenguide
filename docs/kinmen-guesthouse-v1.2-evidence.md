# 迎賓館 v1.2 本地證據

2026-11-05，實作代理自行核對，主代理統籌獨立QA/回歸。

三原專題、原圖place-kinmen-guesthouse、觀光處署名/授權保留。修正原描述對現在展示/非旅館的過強保證，改未核住宿經營及訂房服務；不由館名或復原客房推可住。舊24.44785,118.41792未核，撤導航/geo/marker；官方地址與Google分開。

## 官方來源

- https://kinmen.travel/zh-tw/travel/attraction/1540 ：直接僅定位點，官方搜尋記1980年完工、太武山南雄山麓、花崗岩坑道接待所及08:30–17:00；一般欄位非今日入館確認。
- https://www.kmnp.gov.tw/ch/titlelist/latest-news/4025 ：直接可讀2026春節公告，列迎賓館駐點解說展示館/082-336576；只支持解說角色及該假期安排，不當整體管理/產權或全年時表。
- https://www.kmnp.gov.tw/ch/titlelist/latest-news/1193 ：官方搜尋全文可讀，金管處2025-03-17至05-16停車場鋪面改善及封閉，支持該工程角色；未核完工及現況，不稱現在施工/已開；舊替代停車不直接延用。
- https://kinmen.travel/zh-tw/shop/details/4031 ：官方店家頁搜尋可讀2026-10-20更新山外飲冰室周邊店家、08:30–17:00；賣店時間不是展館准入或票價，不用商店資料推全館經營。
- Google完整館名查詢無法讀取，POI地址及入口未核，不提供導航/結構化地址座標/全島marker。

當前住宿營運、完整管理/權屬、當日館舍/影片/導覽、一般/活動收費、工程完工/圍設、公交停車/無障礙及POI待核；不把一則舊假期或工程推今日狀態。

僅本頁、自身registry/專項/證據及pilot fixture（改kinmen-livestock），CSV/進度未動，無提交推送。等待通知構建測試，未宣稱本地或正式驗收完成。

實際結果：validate零errors/warnings/hints，556頁、48,932內部引用、1,884圖片、4,134 schema節點；迎賓館及pilot fixture桌機手機4 passed（2.7s），4339已結束。日誌/tmp/guesthouse-validate.log、/tmp/guesthouse-browser.log。覆蓋專題/照片署名、舊住宿與當前准入、工程歷史界線、FAQ逐條schema、無未核導航/geo/marker、行程與手機。待主代理獨立QA與全套，不當上線驗收。

QA補核更正：直接讀 https://www.kmnp.gov.tw/ch/touristInfo/recreation-sites/38 全文，明載民國89年（2000）移交金管處維護管理及展示內容，已更新page FAQ/registry管理及測試；前版只採解說/工程而將完整管理一概未核過於保守，以上本據點直接管理證據取代。仍不推土地移轉/當日全廳開放，賣店分工另核。觀光署JSON https://media.taiwan.net.tw/zh-tw/portal/travel/json/attraction_371020000a_001540 直接無法讀取，尚未核英文收費欄位，不寫需收費；現行收費維持待核，不由歷史字段推今日票價。

本次修正後驗證：validate 0 errors/warnings/hints；556頁、48,939內部引用、1,884圖片、4,135 schema節點。迎賓館管理修正、畜試所及pilot fixture桌機手機6 passed（2.9s），4339已結束。日誌/tmp/livestock-validate.log、/tmp/livestock-browser.log。待主代理獨立QA及完整回歸。

獨立複核補記（2026-11-05）：觀光署 2025-05-26 資料原始 JSON 的 `IsAccessibleForFree` 為 null、`FeeInfo` 為空，不代表需收費或免費；資料所列山外72之1及座標 24.44785,118.41792 是官方資料點，不能據此確認現行 Google 具名地標或訪客入口。https://media.taiwan.net.tw/zh-tw/portal/travel/json/attraction_371020000a_001540

## 2026-11-06 named-reference identity
Independent Maps UI QA supplied https://www.google.com/maps/place/Kinmen+Guest+House/@24.447841,118.417932,861m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3414a4eb1fd19d7b:0x1c82afcba72a2573!8m2!3d24.447841!4d118.417932!16s%2Fg%2F11xjhkppd; named identity only, not display address, visitor entrance, daily admission, parking or accessibility. 此為迎賓館獨立景點參考，不是住宿、賣店或坑道入口准許；金管處2000年移交維護沿革與土地/個別業務分列。 No pending Google frontmatter/schema/marker enabled. Original photo preserved. Earlier named-POI-unverified evidence is superseded for identity only. Await independent release review.
