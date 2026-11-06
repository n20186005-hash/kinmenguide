# 金城民防坑道 v1.2 本地遷移證據

2026-11-05 UTC。子代理查核/單頁實作，主代理另作獨立QA。已讀AGENTS/relay Skill/template；僅本頁MD、registry自身key、新測試/證據，不改CSV/進度、不提交推送部署。

## 原文照片

原三題「入口在車站二樓」「看見城市下方的防護網」「窄、濕、暗的路段要先評估」逐字保留到FAQ後H3，原入口/先問導覽/不闖其他坑口、地下防護網絡/非城市捷徑、低窄濕暗/身體需求/退出方式與老街連結均在。原frontmatter除夕全年說法改當年度公告，移除無場內店家證據的消費泛稱。

原place-kincheng-civil-defense-tunnel、alt金城民防坑道實景、金門縣政府觀光處、政府網站資料開放宣告、source1340、original https://kinmen.travel/attractions/10048/1024x768_attractions-image-_kioylm4mem8pxuu1s2q6g.jpg 及WebP裁切聲明不變；一張主圖不設空相冊。

## 官方核對及界限

https://kinmen.travel/zh-tw/travel/attraction/1340 主代理初查一般免費與09:00–22:00；本子直接open僅定位點，官方中文搜尋可讀2026-10-06更新與09–22/二樓入口，未假稱完整直接讀得免費全文。按主代理官方初查記一般免費，來源與最新/現場優先都明列，不推隨到隨入。

https://media.taiwan.net.tw/zh-tw/portal/travel/json/attraction_371020000a_001340 主代理已核免費字段空白，本子直接open不可訪，未假稱重新取得JSON。空白不推收費或現已改價，不把資料缺項當權威矛盾。

https://kinmen.travel/zh-tw/diary/detail/2023 本子直接可讀2026-02-19春節文章，頁碼2023不是年份。記2/14–2/22（除夕休息）、金城車站二樓入口與當次往金門高中遊程。僅按日期作歷史背景，當日路線出口仍待核；沒有將同文電瓶車上午/下午梯次、電話321721等誤配坑道，也未聲稱2026春節免費導覽就是全年現時固定梯次。主代理提到其他2023歷史安排，本子未再採其場次作內容。

觀光處發布或安排活動不足以認定整套坑道所有權、完整管理維修或委託關係，未取得現行正式完整權責，manager待核不連假管理機關。

Google全名Maps直接查詢不可讀具名POI。pending且無coordinates/googleMapsUrl，原24.43311,118.32021只存本證據；無schema address/geo/hasMap及/map導航/marker。民生路7號/二樓入口記錄獨立位置描述，非Google門牌；當日出口/支線/退出方式未核，不給自走路線。

## 待核與測試

現任整體管理/維修/產權/委託、當日導覽與准入、路線出口、二樓入口無障礙、公車實際班次/停車與Google具名入口待核。新tests/attraction-detail-civil.spec.ts驗單H1/canonical、順序/3原題、照片信用/無相冊、6FAQ逐字HTML/frontmatter/schema一致、開館非場次/歷史出口非現況、管理待核、無Maps鏈/geo/address/hasMap、/map無導航/marker、行程加入移除與手機不溢出。結果下方補記。

實際結果：corepack pnpm validate 通過0 errors/warnings/hints；556 pages、48,823 internal references、1,884 image instances、4,123 schema nodes。desktop/mobile專項2 passed（1.8s），4339已結束。logs：/tmp/civil-validate.log、/tmp/civil-browser.log。待主代理獨立QA與全套回歸，非live驗收，未提交推送。

## 2026-11-06 named-reference update
Independent QA/coordinating agent directly checked named Google Place identity in UI: https://www.google.com/maps/place/Jincheng+Civil+Defence+Tunnel/@24.4330529,118.3176337,861m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3414a268fd4d299d:0x372117b351cce8a9!8m2!3d24.433048!4d118.320214!16s%2Fg%2F11gr6vrch_. Visible reference only; display address, precise visitor entrance and daily access remain unverified. No Google address/coordinates/schema hasMap/marker enabled. Existing source dates, historical closure/construction limits and original photo preserved. Earlier unverified named-point statements are historical and superseded for identity only; entrance/access uncertainties remain. Pending independent release acceptance.
