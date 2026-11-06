# 金城海濱休閒公園 v1.2 本地遷移證據

2026-11-05 UTC。子代理獨立查核/單頁實作，主代理另作QA。已讀AGENTS/relay Skill/template；本頁MD/registry自身key/新測試/證據，另授權pilot未opt-in fixture換金門植物園，不改CSV/進度、不提交推送部署。

## 原文照片

原三題「位在金城浯江溪口」「在步道上觀察潮間帶」「海岸三站慢慢走」保留於FAQ後H3。原與烈嶼/東林區別、河口觀察/望遠鏡/不餵食下灘、不保證固定鳥種、雄獅堡/同安渡頭所有連結保留；原動物線索加未現場調查，原三站連續散步改分段順遊/動線待核，救生未核不斷言現有/沒有服務。原登樓與室內時間模板誤配已移除。

原place-kincheng-seaside-park、alt金城海濱休閒公園實景、金門縣政府觀光處、政府網站資料開放宣告、source1493、original https://kinmen.travel/attractions/15794/1024x768_attractions-image-b6el-xu040giazufiqtbiq.jpg 及WebP裁切聲明未改。一張主圖不另設空相冊，照片非現況設施證明。

## 官方核對與界限

https://kinmen.travel/zh-tw/travel/attraction/1493 直接open只有定位點，官方搜尋可核浯江溪口旁、雙面臨海/望烈嶼建功嶼/植物說明板，以及免費24小時。地理描述不當正式園區界線或Google地址，字段不當現時全部設施可用或水域許可。未新增官方未明列物種，原動物線索保留但標未現地調查。

https://www.kinmen.gov.tw/News_Content2.aspx?n=98E3CA7358C89100&s=1CDAD20FBC8B6315&sms=BF7D6D478B935644 官方搜尋可讀城鎮之心歷史規劃、107設計/109預期完工等時間背景，納海濱及體育館等範圍。沒有由計畫範圍推成公園正式界線、現任管理/產權、現已全線完工或今天一定施工；未把預期完工當實際驗收。現行工程、圍設與海岸設施仍待核。

https://kinmen.travel/zh-tw/nearby/ebus?placeId=1493&type=Attractions 官方搜尋可讀金城國中近站與多條分支；正文只列附近站參考並連公車動態，不列步行分鐘或保證到岸段直達。

Google全名Maps直接查詢不可讀具名POI。pending無coordinates/googleMapsUrl；原24.4302,118.31027只存本證據，無schema address/geo/hasMap及/map導航/marker。管理、維護、土地權屬、正式邊界、護欄/照明/說明板/無障礙/停車現況未直接核，明記未知，不挪用鄰點權責。

## 測試與fixture

依主代理指示，tests/attraction-detail-pilot.spec.ts未opt-in樣本金城海濱公園移到尚未遷移kinmen-botanical-garden，保留隔離守衛；後續遷移植物園須再換，不改其內容。

新tests/attraction-detail-kincheng-seaside.spec.ts驗單H1/canonical、次序/3原題、照片信用/無相冊、6FAQ逐字HTML/frontmatter/schema一致、水域未核/計畫非全線通行、管理待核、無Maps鏈/geo/address/hasMap、/map無導航/marker、行程加入移除及手機不溢出。結果下方補記。

實際結果：corepack pnpm validate 通過0 errors/warnings/hints；556 pages、48,843 internal references、1,884 image instances、4,125 schema nodes。公園專項及未opt-in fixture回歸desktop/mobile共4 passed（2.5s），4339已結束。logs：/tmp/kincheng-seaside-validate.log、/tmp/kincheng-seaside-browser.log。待主代理獨立QA/全套回歸，非live驗收，未提交推送。

## 2026-11-06 independent release review
Coordinating agent confirmed that two independent gpt-6-luna reviewers directly checked key page-specific sources and safety boundaries for this fourth batch. Their role was independent factual/safety acceptance, separate from implementation. The accepted wording distinguishes bounded or historical official roles from current complete responsibilities, official/map reference points from visitor entrances, and announcements from present-day access. Earlier statements awaiting independent QA above are historical workflow records and are superseded by this dated review report; source and prior test records remain preserved. This does not establish current complete ownership/management, precise visitor entrances or real-time access.

Still unresolved for this page: current management, ownership, access and facilities; named Google POI. Original image preserved; not VERIFIED and not a production acceptance claim.

## 2026-11-06 verified named reference point
Coordinating agent/independent QA directly checked the Google Maps named POI in UI and supplied this exact URL: https://www.google.com/maps/place/Kinmen+Seaside+Recreation+Park/@24.4302038,118.307693,861m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3414a272bcef62a5:0x3317505f9317290a!8m2!3d24.4301989!4d118.3102733!16s%2Fg%2F1hg4470br. Visible reference only, not verified visitor entrance, parking/admission/accessibility permission, private-house or production-area access, or bridge pedestrian entry. Pending Google frontmatter/schema/map restrictions remain. Original photo preserved.
