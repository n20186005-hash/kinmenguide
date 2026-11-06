# 和平紀念園區 v1.2 本地證據

2026-11-05自行核公開來源，獨立QA由主代理統籌。原兩專題/連結保留，將今日設施必可看語句改官方列有/當日確認。原頁無image，未增刪照片或設空相冊。

- https://kinmen.travel/zh-tw/travel/attraction/1392 ：直接僅定位點，官方索引及日文1599可讀和平鐘/紀念館、免費及10–12/13:30–16，非全天准入或今日設施可操作證明。
- https://media.taiwan.net.tw/zh-tw/portal/travel/json/attraction_371020000a_001392 ：本輪直接重核原始JSON可讀，資料UpdateTime為2025-05-15，IsAccessibleForFree=null、FeeInfo及ServiceTimeInfo空白。無當期補充費用，不由空值推收費。前輪工具快取曾回0，無獨立原始快照檔，撤回將0視為現值及收費衝突斷言；V2.1規範0確有需入場相關費用定義，不應稱未知編碼。座標24.47603,118.31649與林厝地址記在此，不當Google入口。
- https://www.kmnp.gov.tw/ch/touristInfo/recreation-sites/37 ：官方搜尋全文可讀2012-01啟用及胡璉紀念館展示，非整座園區完整管理證明。
- https://www.kmnp.gov.tw/ch/titlelist/latest-news/4025 ：2026春節駐點解說館名與082-313238，僅支持園內該館角色，不套整園管理/全年開放。
- https://kinmen.travel/zh-tw/nearby/ebus?placeId=1392&type=Attractions ：官方索引列和平紀念園區/林厝及路線，距離未當安全步行或當日停靠保證。
- Google完整園名查詢失敗，具名地址/入口未核，無導航/geo/hasMap/marker。原頁無座標，不新增未核點。

尚待核全園管理/權屬、設施維護與敲鐘/電瓶車、當日准入/活動服務費、停車/無障礙/公車與POI。未將舊活動或一館資料擴成全園規則。

僅本頁、自身registry/專項/證據及pilot fixture改kinmen-port-terminal，CSV/進度未動，無提交推送。等待通知構建測試。

實際驗證：validate 0 errors/warnings/hints；556頁、48,950內部引用、1,884圖片、4,136 schema節點。和平園區及pilot fixture桌機手機4 passed（2.5s）；4339已結束。日誌/tmp/peace-park-validate.log、/tmp/peace-park-browser.log。覆蓋原專題/無圖無空相冊、空值不可推收費/全天准入/設施操作、管理範圍、FAQ逐條schema、無未核導航geo/marker、行程與手機。仍待主代理QA及全套。

QA修正：2026-11-05本輪直接重開相同JSON確認null，頁面/FAQ/registry/測試已同步移除0及來源衝突判斷，觀光網免費仍保留並限定個別服務另核。

本次最終驗證：validate零errors/warnings/hints；556頁、48,959內部引用、1,884圖片、4,137 schema節點。港旅運中心、和平園區修正及pilot fixture桌機手機6 passed（3.0s），4339已結束。首輪原表格分隔符使兩專題未完整帶入，保留測試攔截後已完整恢復表格/兩專題/連結；再修測試與FAQ不把文案一致，最終全過。日誌/tmp/port-terminal-validate.log、/tmp/port-terminal-browser.log。待主代理QA及全套，不代表正式驗收。

## 2026-11-06 named-reference identity update
Independent Google Maps UI QA supplied exact named reference: https://www.google.com/maps/place/%E6%9E%97%E5%8E%9D%E7%A0%B2%E9%99%A3%E5%9C%B0(%E9%87%91%E9%96%80%E5%92%8C%E5%B9%B3%E7%B4%80%E5%BF%B5%E5%9C%92%E5%8D%80)/@24.4754756,118.3165932,861m/data=!3m1!1e3!4m10!1m2!2m1!1sKinmen+Peace+Memorial+Park!3m6!1s0x3414a2ecebfa679d:0xe1bcaa6af63b3b56!8m2!3d24.4760316!4d118.3164871!16s%2Fg%2F1tgz7zvz. Identity is checked, not display address, precise visitor entrance, daily admission, parking or accessibility. 此點偏向林厝砲陣地，不是全園統一入口，也不證明和平鐘或各館設施當日開放。 No Google address/coordinates/schema hasMap/marker enabled. Current-main image and caption preserved, including newly released Peace historical photo; prior no-photo notes are historical. Earlier named-point-unverified notes are superseded for identity only. Await independent release acceptance.

2026-11-06 QA correction: removed obsolete visitor-facing no-photo statement; explicitly states the already published2019 historical photo/attribution/license are retained and do not verify present facilities, whole-park entrance or daily opening. Added regression assertion; image bytes/metadata/caption unchanged. FAQ unaffected.
