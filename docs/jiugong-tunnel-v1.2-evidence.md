# 九宮坑道 v1.2 本地遷移證據

2026-11-05 UTC。子代理獨立查核/單頁實作，主代理另作QA。已讀AGENTS/relay Skill/template；僅本頁MD、registry自身key、新測試/證據，不改CSV/進度、不提交推送部署。

## 原文與照片

原四題「地下水道裡的運補記憶」「先走坑道，再安排九宮周邊」「坑道步行與無障礙需求」「從金門本島過來」置FAQ後H3保留。原兩FAQ問題與答案原字保留；新增6題，共8題。保留岩壁/水道/與翟山區別、階梯/明暗濕滑/不翻欄杆、輪椅推車與密閉需求、跨橋/返程/完整一天及四維七/風雞/媽祖公園所有原連結。原出口接周邊句加當日入口與動線確認，原時長加工程/實際開放調整前提。

原jiugong照片、alt烈嶼九宮坑道的岩壁與水道、人人生來平等、CC BY-SA4.0、Commons來源/original及WebP裁切聲明不變。一張主圖不另設空相冊，不拿2022照片證明今日通行。

## 官方核查與時序

https://kinmen.travel/zh-tw/travel/attraction/1346 官方域搜尋可讀一般08:30–17:00、免費、082-364405；遊程593另有08:00–17:00與部分工程舊提醒，不把遊程頁覆蓋現行工程公告。正文一般08:30–17:00只作參考，特殊休館依當年度/當日公告，不推即時開門。

https://www.kmnp.gov.tw/ch/titlelist/latest-news/1212 官方搜尋可讀2025-06-05起九宮坑道/烈嶼遊客中心整修關閉，視工程另公佈，並明載坑道移撥本處管理。支持金管處坑道管理與工程角色，不是土地產權或全部委外契約證明；公告當年鄰點開放不當今日確認。

https://www.kmnp.gov.tw/ch/titlelist/latest-news/3679 官方搜尋可讀2025-11-17階段重新開放；不是2026全線或未開次坑道已開的證據。

https://www.kmnp.gov.tw/ch/titlelist/latest-news/4434 及 https://www.kmnp.gov.tw/ch/touristInfo/recreation-sites/47 子代理直接open可見官方框架，官方搜尋可讀2026-07-27起羅厝端步道部分封閉、次坑道整建與當日動線提醒。這是目前查得較新通行限制來源，非現場圍設/工程完成核實；頁面明列需洽082-364405再核，不以2025關閉說今日全館閉，也不以2025重開說今日全區可走。

https://www.kmnp.gov.tw/ch/sglarticle/battle-history 官方搜尋可讀九宮/四維沿革與移撥背景，未額外填工程尺寸或不一致總長作篇幅。原地質/歷史只留必要運補背景，無物種/支線體驗編造。

## 地圖與未核

Google全名Maps直接查詢不可讀具名POI，入口又受工程影響，googleMapsVerificationPending，無googleMapsUrl/coordinates。原24.42363,118.26269只存本證據，不輸出schema geo/address/hasMap及/map導航/marker；原羅厝5之5號另存位置描述，非Google門牌與當日入口證明。

當日工程/圍設、入口/出口/折返、停車可用性與費用、公車近站、解說、無障礙、土地所有權及個別委外細節待核。不繞圍設、不進未開次坑道、不提供穿越封閉段路線。

## 測試

新tests/attraction-detail-jiugong.spec.ts驗單H1/canonical、次序/4原題、照片信用/無相冊、8FAQ逐字HTML/frontmatter/schema一致、分年工程限制/非全開全閉、金管處直接管理來源1212、無Maps鏈/geo/address/hasMap、/map無導航/marker、行程加入移除與手機不溢出。結果下方補記。

實際結果：corepack pnpm validate 通過0 errors/warnings/hints；556 pages、48,792 internal references、1,884 image instances、4,120 schema nodes。CI=1 corepack pnpm test:browser --config playwright.takeover.config.ts tests/attraction-detail-jiugong.spec.ts：desktop/mobile 2 passed（1.7s），4339已結束。logs：/tmp/jiugong-validate.log、/tmp/jiugong-browser.log。待主代理獨立QA與全套回歸，非live驗收，未提交推送。

QA補充已獨立重讀4434正文L4–5：2026-07-27起封閉期間羅厝端入口不開放，九宮碼頭端前往至管制點原路折返。正文交通與FAQ增加有日期歸因，仍明記現時現場/館方再核、不保證公告後未變；FAQ同步frontmatter，專項測試補實際動線文字。按主代理要求暫不重建，待套件結束。

實際完成：validate通過0 errors/warnings/hints，556 pages、48,803 internal references、1,884 image instances、4,121 schema nodes；九宮/共融兩頁專項，加opt-in與map舊回歸用例，desktop/mobile共8 passed（3.3s）。4339已結束。logs：/tmp/inclusive-validate.log、/tmp/inclusive-browser.log。仍待主代理全套與獨立QA，不是live驗收。

原全套330 passed/4 failed因兩舊用例仍假設九宮未opt-in及可點未核坐標。依主代理授權，僅將tests/attraction-detail-pilot.spec.ts未opt-in樣本換成尚未遷移的莒光湖，保持其他集合回歸；tests/site.spec.ts地圖樣本換成已核Google具名點烈嶼將軍堡，並將marker斷言收窄為該點24.4409148/118.2662476。沒有恢復九宮未核座標，未改其他內容。

## 2026-11-06 named-reference identity
Independent Maps UI QA supplied https://www.google.com/maps/place/Jiugong+Tunnels/@24.4237958,118.2600386,861m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3414993e88ea9337:0xe8d581d98a2584ab!8m2!3d24.4237909!4d118.2626189!16s%2Fg%2F1tf4bnkp; named identity only, not display address, visitor entrance, daily admission, parking or accessibility. 此為九宮坑道，不代表全線可走；保留2026年羅厝端步道及次坑道限制，工程是否完成與當日可走路線先向服務處確認，不繞圍設。 No pending Google frontmatter/schema/marker enabled. Original photo preserved. Earlier named-POI-unverified evidence is superseded for identity only. Await independent release review.
