# 后頭風獅爺 v1.2 本地遷移證據

2026-11-05 UTC。子代理單頁實作，主代理另作獨立QA。已讀AGENTS/relay Skill/template；未修改CSV/進度、不提交推送部署。範圍僅本頁MD、registry自身key、新專項測試、本證據。

## 原文與照片

原四題「兩尊風獅爺一起看」「從造型讀地方信仰」「不移動衣飾與供品」「附近怎麼安排」逐字放在FAQ後深度H3。保留新舊兩尊區別、信仰禮節、農務與居民通行、后麟預約及后麟/麒麟山/烈嶼/兩天路線所有連結。原無依據「戶外觀看無固定門票」修正收費與准入待核，不刪原專題。

原照片place-houtou-wind-lions、alt后頭風獅爺(約160公分)實景、金門縣政府觀光處署名、政府網站資料開放宣告及WebP裁切說明保留。source1650；original：https://kinmen.travel/attractions/9749/1024x768_attractions-image-a4q2orog0ecdl7euztfh2a.jpg 。只有一張新像素材，不假稱舊像已有獨立照片，不設空相冊。

## 官方查核與限制

https://kinmen.travel/zh-tw/travel/attraction/1650 ：主代理官方初查約160cm新像。本子web直接open只有定位點，官方域搜尋摘錄可核約160公分及1991年重塑記錄（2019-10-03介紹）。不假稱完整正文成功載入，未把歷史村民角色作今日管理者。

https://kinmen.travel/zh-tw/travel/attraction/1651 ：主代理初查2010尋回舊像同台。本子直接open只有定位點，官方搜尋摘錄可讀2019-01-21介紹舊石獅再次發現、並列基座與大小同台。介紹是歷史配置與信仰記憶，不保證今日入口、可接近範圍或祭祀狀態。護村敘事不當科學因果。

Google地圖：獨立搜尋后頭風獅爺並直接open Google Maps全名查詢未能取得可讀同名POI；搜尋還出現本島后湖/後浦頭等相近名稱，未挪用。googleMapsVerificationPending，無coordinates/googleMapsUrl；原24.43993,118.26僅存本證據，不輸出schema geo/address/hasMap、/map導航或marker。原后頭東北方村郊另存locationDescription，標明非Google門牌或入口。

現行管理、維護、土地權屬、准入、收費、停車、公車及無障礙均未取得直接證據。只連公車動態供出發前查詢，不套用同村其他點近站或編造步行時間。

## 驗證

新增tests/attraction-detail-houtou.spec.ts：唯一H1/canonical、模組次序/4原題、新舊歷史區別、照片信用/無空相冊、6FAQ逐字HTML/frontmatter/JSON-LD一致、管理待核、無Maps鏈/geo/address/hasMap、全島圖無本頁導航/marker、行程加入移除及手機不溢出。實際結果下方補記。

實際結果：corepack pnpm validate 通過0 errors/warnings/hints；556 pages、48,713 internal references、1,884 image instances、4,113 schema nodes。CI=1 corepack pnpm test:browser --config playwright.takeover.config.ts tests/attraction-detail-houtou.spec.ts：desktop/mobile 2 passed（1.7s），4339已結束。logs：/tmp/houtou-validate.log、/tmp/houtou-browser.log。待主代理獨立QA與全套回歸，非live驗收，未提交推送。
