# 金東電影院 v1.2 本地遷移證據

2026-11-05 UTC。子代理獨立查核與單頁實作，主代理另作QA。已讀AGENTS/relay Skill/template；僅本頁MD、registry自身key、新測試/證據，不改CSV/進度、不提交推送部署。

## 原文照片

原三題「這裡值得看什麼」「怎麼安排參觀」「把下一站排在附近」移至FAQ後H3保留。原官兵休閒/街區商業/木椅標語、與金獅影城不同、陽翟/博物館連結全保留；原直接導航改Google地址入口待核，現參觀歷史空間改當日准入另核，「官方列戶外可訪」改全天字段非當日准入保證。

原place-jindong-cinema、alt金東電影院實景、金門縣政府觀光處、政府網站資料開放宣告、source1397及WebP裁切說明不變。original：https://kinmen.travel/attractions/18514/1024x768_attractions-image-evraylwcw0m9zexenwk1ta.jpg 。一張主圖不設空相冊，照片不證明今日入內或陳設可看。

## 獨立官方核查

https://kinmen.travel/zh-tw/travel/attraction/1397 直接web只有定位點，官方域搜尋可讀一般免費、全天、陽翟96之6號、停車與室內展覽。字段非室內全天可入或電影放映證據；當日活動、設備與准入另核。

https://kinmen.travel/zh-tw/news/details/2619 子代理直接完整可讀2020-07-30公告，金沙鎮公所2018完成撥用，2019年底修繕完工及2020-08-01啟用/電影欣賞活動。本頁只保留歷史角色、年份，不把2020節目當今日片單，也不把撥用當土地所有或完整現任經營管理證明。

https://nchdb.boch.gov.tw/city/cabkc.kinmen/assets/overview/historicalBuilding/20031201000023/ 官方搜尋可讀歷史建築個案與1960官兵休憩背景，動態頁未重讀完整欄位，未聲稱由此已核現任營運者。另搜金沙鎮公所/2026資料未取得現行營業/電影場次及完整管理契約，不推已停業或必然無電影活動，只說本輪未核常態場次。

Google全名Maps直接查詢不可讀具名POI。設googleMapsVerificationPending，刪除原coordinates；24.47894,118.42741只存本證據，無googleMapsUrl、schema address/geo/hasMap及/map導航/marker。官方門牌另存位置描述，不冒充Google顯示地址。

## 未核與測試

現任經營/管理/維護/產權分工、室內准入、當日展覽/放映、停車可用性及費用、公車近站/無障礙、Google具名入口待核。不把歷史放映當現在、也不做永久停業斷言。

新增tests/attraction-detail-jindong.spec.ts驗單H1/canonical、模組次序/3原題、照片信用/無相冊、6FAQ逐字同步、未核常態場次與歷史撥用非現任、管理待核、無Maps鏈/geo/address/hasMap、全島圖無導航/marker、行程加入移除、手機不溢出。等待主代理完整回歸結束再構建測試。

實際結果：corepack pnpm validate 通過0 errors/warnings/hints；556 pages、48,782 internal references、1,884 image instances、4,120 schema nodes。CI=1 corepack pnpm test:browser --config playwright.takeover.config.ts tests/attraction-detail-jindong.spec.ts：desktop/mobile 2 passed（1.7s），4339已結束。logs：/tmp/jindong-validate.log、/tmp/jindong-browser.log。待主代理獨立QA及全套回歸，非live驗收，未提交推送。

## 2026-11-06 named-reference update
Independent QA/coordinating agent directly checked named Google Place identity in UI: https://www.google.com/maps/place/Jindong+Cinema/@24.4785815,118.4272534,861m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3414bb302d831ebf:0x6884ce306f43722a!8m2!3d24.4785815!4d118.4272534!16s%2Fg%2F11f6kdt03z. Visible reference only; display address, precise visitor entrance and daily access remain unverified. No Google address/coordinates/schema hasMap/marker enabled. Existing source dates, historical closure/construction limits and original photo preserved. Earlier unverified named-point statements are historical and superseded for identity only; entrance/access uncertainties remain. Pending independent release acceptance.
