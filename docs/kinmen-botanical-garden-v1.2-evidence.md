# 金門植物園 v1.2 本地遷移證據

2026-11-05 UTC。子代理獨立查核/單頁實作，主代理另作QA。已讀AGENTS/relay Skill/template；僅本頁MD/registry自身key/新測試/證據，另授權pilot未opt-in fixture改金門大橋，不改CSV/進度，不提交推送部署。

## 原文照片

原三題「這裡值得看什麼」「怎麼安排參觀」「把下一站排在附近」於FAQ後H3保留。苗圃/竹林溪流濕地碉堡/老兵故事人文線索與太武山/迎賓館所有原連結保留；週一室內戶外句明示原記錄與現在觀光網休息字段，戶外例外本輪未重核，劇場/導覽先問，不承諾今日可看。

原place-kinmen-botanical-garden、alt金門植物園實景、金門縣政府觀光處、政府網站資料開放宣告、source1466、original https://kinmen.travel/attractions/10287/1024x768_attractions-image-5lo-ddoofkelgf3j53w21g.jpg 及WebP裁切聲明未改。一張主圖不另設空相冊。

## 官方核對與資料時點

https://kinmen.travel/zh-tw/travel/attraction/1466 官方搜尋可核2025-05-15資料、一般08:00–17:30/免費與電話332420；本輪查得週一字段列休息，不以原頁室內/戶外區分推週一戶外仍可入。一般時段非即時開門/特殊公告保證。

https://forestry.kinmen.gov.tw/cp.aspx?n=927521C37354DD3C 子代理直接可讀2023-11-17植物園簡介與太武苗圃轉型背景；沒有把面積/物種數當現場盤點或補今日花況動物清單。

https://forestry.kinmen.gov.tw/cp.aspx?n=CA0F812BA01A08DA 子代理直接可讀苗圃連2017-08-07歷史服務頁，太武山10號/園區服務333280、林務所經理課申請及08:00–17:30。該頁含未來規劃與舊機關名稱，頁腳更新不是內容全數現行保證；不把導覽人數/天數、除夕或規劃設施硬套今日。來源電話與觀光網不同，正文分來源先核有效方式。

https://forestry.kinmen.gov.tw/News_Content.aspx?n=7DB270379BBB5EBE&s=6CD35A8C8F6CEBFF&sms=A2C62D68901B977C 官方搜尋可讀2020影展公告明稱林務所轄管植物園，並有其他歷史官方植物園經營描述。加上現可讀服務與申請資料，支持林務所服務/轄管背景；仍明記現行完整委託分工與土地權屬待核，不將歷史活動當今日節目。

生態只列官方歷史介紹的原生植物/溪流濕地/碉堡等展示主題，不保證現場任一物種、螢火蟲或花期，不從影展片名搬動物到園內。舊發展沿革開園年份互有差異，非本頁決策必需，未新增斷定年份。

Google全名Maps直接查詢不可讀具名POI；pending無coordinates/googleMapsUrl，原24.45429,118.39753只存本證據，無schema geo/address/hasMap及/map導航/marker。官方館址另存位置描述，非Google門牌/當日入口。停車/公車/無障礙/設備現況待核。

## 測試與fixture

依主代理指示，pilot未opt-in sample換尚未遷移kinmen-bridge，後續遷移該頁須再換，未改其內容。新tests/attraction-detail-botanical.spec.ts驗單H1/canonical、次序/3原題、照片信用/無相冊、6FAQ逐字同步、週一未保證/物種非今日名錄/服務轄管按來源、無Maps鏈/geo/address/hasMap、/map無導航/marker、行程加入移除及手機不溢出。結果下方補記。

實際結果：corepack pnpm validate 通過0 errors/warnings/hints；556 pages、48,853 internal references、1,884 image instances、4,126 schema nodes。植物園專項及pilot未opt-in fixture桌機手機共4 passed（2.5s），4339已結束。logs：/tmp/botanical-validate.log、/tmp/botanical-browser.log。待主代理獨立QA/全套回歸，非live驗收，未提交推送。

獨立QA修正：原專題「步行中能看見」改為林務所資料列展示主題，開放區域/設施當日確認、不保證各區可達；老兵故事館亦改為人文介紹線索，現時開館另核。保留原專題與竹林等觀察線索，不再暗示全區可到。測試補可達性限定與原過強字句缺席。

本次實際結果：validate0 errors/warnings/hints，556 pages、48,862 internal references、1,884 image instances、4,127 schema nodes；植物園修正/大橋專項及pilot fixture桌機手機共6 passed（3.0s），4339已結束。logs：/tmp/bridge-validate.log、/tmp/bridge-browser.log。待主代理獨立QA與全套回歸，非live驗收，未提交推送。

## 2026-11-06 named Google reference point
Independent QA directly checked the named Place in Google Maps UI and supplied this exact URL: https://www.google.com/maps/place/Kinmen+Plant+Yuan/data=!4m7!3m6!1s0x3414a49f5c3eca61:0xd66a0aef735dbacf!8m2!3d24.4542599!4d118.3974914!16s%2Fg%2F1tlcythh. Added only a visible body reference, expressly not a verified entrance, admission, parking, accessibility or private/water access grant. Google pending fields, address, coordinates, hasMap/schema and whole-site map remain unchanged; original image preserved.

## 2026-11-06 independent release review
Coordinating agent confirmed that two independent gpt-6-luna reviewers directly checked key page-specific sources and safety boundaries for this fourth batch. Their role was independent factual/safety acceptance, separate from implementation. The accepted wording distinguishes bounded or historical official roles from current complete responsibilities, official/map reference points from visitor entrances, and announcements from present-day access. Earlier statements awaiting independent QA above are historical workflow records and are superseded by this dated review report; source and prior test records remain preserved. This does not establish current complete ownership/management, precise visitor entrances or real-time access.

Still unresolved for this page: current management and open areas; phone discrepancies and named Google POI. Original image preserved; not VERIFIED and not a production acceptance claim.
