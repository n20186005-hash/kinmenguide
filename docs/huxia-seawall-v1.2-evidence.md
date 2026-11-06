# 湖下海堤 v1.2 本地遷移證據

2026-11-05 UTC。子代理單頁實作，主代理另作獨立QA。已讀AGENTS/relay Skill/template；只改本頁MD、registry自身key、新測試與本證據，不動CSV/進度、不提交推送部署。

## 原文與照片

原三題「不必上橋，就能看見橋的線條」「夕陽與夜景怎麼安排」「與慈湖排一個不趕的下午」保留於FAQ後H3。保留橋面不臨停、日落/夜間天候與燈光調整、橋官網、照明回程、不下消波塊/不因退潮入海、慈湖/金城/烈嶼及公車末班/計程車原內容。第一段與順遊加當日安全開放前提，不保證現行通行；原免費斷言改一般費用待核。

原圖place-huxia-seawall、alt湖下海堤實景、金門縣政府觀光處、政府網站資料開放宣告、source455與WebP裁切聲明不變。original：https://kinmen.travel/attractions/38109/1024x768_attractions-image-iupglbj2q0kk0squnznhda.jpg 。照片不是當日設施/開放證明，一張主圖不設空相冊。

## 獨立核對

https://www.kinmen.gov.tw/News_Content2.aspx?Create=1&n=98E3CA7358C89100&s=1FC9BE63FD0D6D82&sms=BF7D6D478B935644 ：主代理提供2026年5月開工證據，本子web直接open為502，官方域搜尋之縣府新聞索引可讀115年5月湖下海堤調適工程開工題名。未假稱完整正文可讀、不補工程工期或完工日。不把歷史開工記錄當今日仍施工或已開放；當前完工、開放/圍設未知。

https://kinmen.travel/zh-tw/travel/attraction/455 本子官方域搜尋只出定位點，保留原來源，不據空白推免費或無管理。

https://kinmen.travel/zh-tw/discover/tour/582 本子直接搜尋可讀2026-09-03夜遊指南，列湖下海堤作大橋光影觀看點。這是景觀指南，不是工程完工/通行公告，不套其他景點燈光時段。本頁連原大橋官方資訊供行前查，不硬寫今日亮燈時間。

Google：本子直接open湖下海堤全名Maps查詢無可讀具名POI；地址及安全入口未核。googleMapsVerificationPending，無googleMapsUrl/coordinates；原24.4556,118.30245僅存本證據。無schema geo/address/hasMap、/map導航或marker，不把原坐標當安全入口。

現行管理、土地權屬、維護分工、一般費用、停車、公車近站、連續無障礙及夜間照明均未核；工程角色不冒充整體管理方。只按當日公告與標示通行，不繞圍籬，不給繞圍設捷徑或下海路線。

## 驗證

新增tests/attraction-detail-huxia.spec.ts驗單H1/canonical、模組次序/3原題、原照片信用/無相冊、6FAQ逐字HTML/frontmatter/schema一致、工程記錄不推當前施工或已開放、勿繞圍籬、管理待核、無Maps鏈/geo/address/hasMap、/map無導航/marker、行程加入移除及手機不溢出。結果下方補記。

實際結果：corepack pnpm validate 通過0 errors/warnings/hints；556 pages、48,742 internal references、1,884 image instances、4,116 schema nodes。CI=1 corepack pnpm test:browser --config playwright.takeover.config.ts tests/attraction-detail-huxia.spec.ts：desktop/mobile 2 passed（1.7s），4339已結束。logs：/tmp/huxia-validate.log、/tmp/huxia-browser.log。待主代理獨立QA與全套回歸，不是live驗收，未提交推送。
