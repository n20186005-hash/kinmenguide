# 浯江書院 v1.2 本地證據

2026-11-05，公開資料整理，非現勘。僅本頁、自身registry/test/evidence及pilot fixture；未改CSV/進度、不提交推送。

- https://kinmen.travel/zh-tw/travel/attraction/1489 官方索引顯示2025-05-15版09:00–21:00、免費與僅存書院/朱子祠題材；一般資料不是當日准入。直接讀取受限，不保證無障礙標籤代表全院可達。
- https://cabkc.kinmen.gov.tw/information?pid=6581&uid=169 2026年2月大事紀直接可讀（2026-03-04刊），2/15記事稱文化局所轄朱子祠（浯江書院），當年2/16除夕休館、其餘日期正常，浯江書院08:30–21:00。支援場館管理角色，時間與2025觀光頁不同，逐來源保留；不把春節公告推全年最新或每年例外。
- https://nchdb.boch.gov.tw/assets/overview/monument/20210526000002 直接JS框架，官方索引列國定古蹟「金門朱子祠」、管理人金門縣文化局。使用登記名稱，不將全部書院現存/改建空間一概推定同一指定邊界，不推土地產權或修繕現況。
- https://cabkc.kinmen.gov.tw/kinmenjinshi/index.html 文化局官方專題索引可讀1780興建、朱子祠、講堂及廊學舍歷史，非當期各區通行保證。歷史其他單位進駐不當現在管理。

原三題「老城裡安靜的一站」「開放與步行位置」「早餐、書院與夜間導覽」保留；文化路線、後浦夜遊、永春粥、總兵署、模範街及奶茶街連結維持，餐飲與夜遊均提示當期另核。原30–45分鐘標編輯安排。

照片place-wujiang-academy、檔案1024x768_attractions-image-tq3evngui0gwwfwqslg9ng.jpg、alt浯江書院實景、金門縣政府觀光處署名、政府網站資料開放宣告及https://kinmen.travel/zh-tw/gwoia 完全不變。原圖https://kinmen.travel/attractions/10049/1024x768_attractions-image-tq3evngui0gwwfwqslg9ng.jpg 。

待核：當日時段差異、個別室內/祠堂/學舍、活動/課程/夜遊服務、修繕與全部產權、停車公車無障礙及Google具名POI地址入口。原24.43424,118.31704撤除，不輸出未核marker/geo/hasMap/Google地址導航；官方珠浦北路36號獨立位置描述，不用文化局辦公地址替代。

確認wuwangzai-ju.md存在且未opt-in，pilot fixture移至該頁，下次遷移再換。研究實作由本代理，父代理統籌獨立QA及全套；未假稱額外研究代理。

驗證：validate成功，Astro零errors/warnings；556頁、49348內鏈、1884圖像、4176 schema，其他集合及照片審核通過。4339 CI=1書院/pilot桌面手機4 passed (2.4s)，涵蓋原題與圖、FAQ逐字schema、時段差異/文資範圍/無障礙界線、未核導航geo/marker缺席、行程增刪及無溢出。日誌/tmp/wujiang-validate.log、/tmp/wujiang-browser.log。LOCAL_READY_AWAITING_BATCH_RELEASE，源碼/dist凍結待父代理全套及QA，未部署。

## 2026-11-06 official reference-link clarification
Independent QA supplied and directly checked https://kinmen.travel/travel-map/zh-tw/guide-sign/2/attraction/1489. Added a visible official reference link with explicit visitor-entrance/access/private-work-area limitations; no Google address, coordinates, hasMap, marker or navigation enabled. Implementer web-tool open returned inaccessible/minimal content and does not claim independent full retrieval. Original photo and FAQ answers preserved.

## 2026-11-06 independent release review
Coordinating agent confirmed that two independent gpt-6-luna reviewers directly checked key page-specific sources and safety boundaries for this fourth batch. Their role was independent factual/safety acceptance, separate from implementation. The accepted wording distinguishes bounded or historical official roles from current complete responsibilities, official/map reference points from visitor entrances, and announcements from present-day access. Earlier statements awaiting independent QA above are historical workflow records and are superseded by this dated review report; source and prior test records remain preserved. This does not establish current complete ownership/management, precise visitor entrances or real-time access.

Still unresolved for this page: current schedule and access to individual spaces; named Google POI. Original image preserved; not VERIFIED and not a production acceptance claim.
