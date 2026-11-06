# 金門大橋與岸邊觀景 v1.2 本地遷移證據

2026-11-05 UTC。子代理獨立查核/實作，主代理另作QA。僅本頁MD/registry自身key/新測試/證據及授權pilot未遷移fixture換陶瓷廠；同批修正植物園QA可達性字句。不改CSV/進度、不提交推送部署。

## 原文照片

原五題「一座橋，串起大金門與小金門」「想拍全景，留在合適的岸邊」「一趟跨橋，怎麼排比較舒服」「想拍橋，從湖下與慈湖選一站」「抵達烈嶼後怎麼玩」保留FAQ後H3。原2022通車/高粱穗/5.41km、金門橋非舊金山、岸上拍/不橋面臨停、跨島/還車報到/一兩天/湖下慈湖所有內鏈保留；九宮與湖下加當日工程開放前提，未核坐標導航句修正、舊3297連結404改官方資訊入口。

原bridge、alt金門大橋橫跨金烈水道、總統府、CC BY2.0、Commons來源/original與WebP裁切聲明不變；一張主圖無空相冊。

## 官方資料與時序

https://kinmen.travel/zh-tw/travel/attraction/1966 官方搜尋記2022-10-30通車；https://kinmen.travel/zh-tw/discover/kinmen-bridge 直接可讀橋梁5.41km、五塔高粱穗意象與跨海功能。旅遊簡介的運具列項不當即日通行許可，開通不代表所有運具/行人當日都可行。

https://www.kinmen.gov.tw/News_Content2.aspx?Create=1&n=98E3CA7358C89100&s=E516AEFFC172ADBA&sms=BF7D6D478B935644 官方搜尋可讀2025元旦分流最終方案：原行人自行車道調慢車道，納機車/自行車/行人，行人靠右注意車流，試行後滾動檢討。較早2024規劃DEF16/AF842有19–22人行/禁機車版本，不能套為最後方案。全部按有日期來源記載，現行標誌/CMS/最新公告優先，不稱公告後毫無變化。

https://www.kinmen.gov.tw/News_Content2.aspx?Create=1&n=98E3CA7358C89100&s=5E50ECF6E4AA5EBE&sms=BF7D6D478B935644 2025丹娜絲防颱官方資料可讀按通行注意事項風力門檻：平均6或陣8時建議機車暫停、行人自行車禁止；平均8時建議汽車暫停，其餘上述禁止。正文明確源於該次資料，不判定今天風力/封橋或保證最新規則未變。未把2022通車時60/30速限歷史直接當當日限速，依標誌。

觀光處監控/資訊發布有防颱來源支持；早期維管規劃D400/E393涉及多機關與工作小組，沒有足夠現任全部橋體/交控/執法/消防/產權契約，故管理只列已支持角色、完整分工待核，不假稱觀光處擁有全部責任。

原 https://kinmen.travel/zh-tw/news/details/3297 本子直接404，改連官方首頁「金門大橋即時路況」入口及可讀橋介紹，不猜未核即時網域。Google全名查詢不可讀具名POI，橋梁與岸上安全入口導航語義不同，pending且無coordinates/googleMapsUrl，原24.45218,118.30403僅本證據；無schema geo/address/hasMap及/map導航/marker。原橋兩端位置另存描述，不當Google門牌或停車目的地。

## 待核與測試

即日各運具/行人准入、當日風況/燈光、現行收費、完整維管產權分工、岸上停車/無障礙及Google入口待核。禁止由車可通推人可通，不在橋面臨停下車/進車道拍照，不捏造徒步橋程。

新tests/attraction-detail-bridge.spec.ts驗單H1/canonical、次序/5原題、原圖信用/無相冊、6FAQ逐字同步、分運具/日期限制與非即日保證、管理分工待核、無Maps鏈/geo/address/hasMap、/map無導航/marker、行程加入移除與手機不溢出。pilot未opt-in fixture按指示橋→尚未遷移kinmen-ceramics，後續遷移該頁須再調整。與植物園QA修正一起重驗，結果下方補記。

本次實際結果：validate0 errors/warnings/hints，556 pages、48,862 internal references、1,884 image instances、4,127 schema nodes；植物園修正/大橋專項及pilot fixture桌機手機共6 passed（3.0s），4339已結束。logs：/tmp/bridge-validate.log、/tmp/bridge-browser.log。待主代理獨立QA與全套回歸，非live驗收，未提交推送。

QA補正面規則：E516明記2024-12-27發布/2025-01-01起，行人/自行車/機車可全天使用改設慢車道，不宣稱機車只能走該道。主代理補C818官方URL，本子首次open及搜尋未見段落，續以open定位300行直接核到L295–298：分流執行並已無時段問題，metadata為2025-05-28。已加入FAQ/交通及來源，全部保留當日標誌/CMS/臨時管制優先。測試補正面規則與後續日期；不是只泛稱待查。

本次實際結果：validate0 errors/warnings/hints，556 pages、48,872 internal references、1,884 image instances、4,128 schema nodes；大橋正面規則修正/陶瓷專項及pilot fixture桌機手機共6 passed（2.7s），4339已結束。logs：/tmp/ceramics-validate.log、/tmp/ceramics-browser.log。待主代理獨立QA與全套回歸，非live驗收，未提交推送。

## 2026-11-06 independent release review
Coordinating agent confirmed that two independent gpt-6-luna reviewers directly checked key page-specific sources and safety boundaries for this fourth batch. Their role was independent factual/safety acceptance, separate from implementation. The accepted wording distinguishes bounded or historical official roles from current complete responsibilities, official/map reference points from visitor entrances, and announcements from present-day access. Earlier statements awaiting independent QA above are historical workflow records and are superseded by this dated review report; source and prior test records remain preserved. This does not establish current complete ownership/management, precise visitor entrances or real-time access.

Still unresolved for this page: current restrictions and complete maintenance responsibilities; named POI. Original image preserved; not VERIFIED and not a production acceptance claim.

## 2026-11-06 verified named reference point
Coordinating agent/independent QA directly checked the Google Maps named POI in UI and supplied this exact URL: https://www.google.com/maps/place/Kinmen+Bridge/@24.4521007,118.3014548,861m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3414a2ed4a7f4cd3:0x951415bf2f6d2795!8m2!3d24.4520958!4d118.3040351!16s%2Fg%2F155r_5jv. Visible reference only, not verified visitor entrance, parking/admission/accessibility permission, private-house or production-area access, or bridge pedestrian entry. Pending Google frontmatter/schema/map restrictions remain. Original photo preserved.
