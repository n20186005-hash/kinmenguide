# 鐵漢堡 v1.2 本地證據

2026-11-05，公開資料整理，非現勘。僅本頁、自身registry/測試、證據及pilot fixture；未改CSV/進度、未提交推送。

- https://kinmen.travel/zh-tw/travel/attraction/670 直接讀取僅框架，官方索引可讀2025-05-15版、一般08:00–17:00、仿城牆、M42展示及地雷主題展示與勇士堡相連；不承諾今日展示/體驗可操作或全線開放。
- https://lieyu.kinmen.gov.tw/News_Content.aspx?Create=1&n=163D622C1593A5D7&s=D01DABEC57251AEC&sms=A2C62D68901B977C 2024-01-08公告、1/15起的既有官方費用來源；直接讀取逾時，索引列勇士堡及鐵漢堡30/15/25元，當期適用與優待資格另核。
- https://lieyu.kinmen.gov.tw/travel/News_Content.aspx?n=38E9BB303B0471DA&s=44233BD51DB200C9&sms=3F98C9AF4C693214 直接讀取受限，官方索引明載團體票適用20人以上。堡票是否包含地雷館未明，不把堡票當館票，也不由地雷館免費欄反推堡免費；先洽原地雷館官方電話082-364510確認範圍與當期票務。
- https://lieyu.kinmen.gov.tw/News_Content.aspx?Create=1&n=54F94CE42BDC958C&s=2C8D4A7F3D9DC506&sms=A2C62D68901B977C 官方另一索引逐項列堡票30/15/25，輔助確認表格欄位；未據此補出地雷館票價。

原四題「地面城堡與地下工事」「與地雷主題館同一段走」「注意低處與明暗轉換」「附近怎麼安排」及原地雷館、后麟、烈嶼、兩天路線連結保留；30–45及聯合60–90分鐘標編輯建議。原照片place-tiehan-fort、alt鐵漢堡實景、檔案1024x768_attractions-image-cjlx1wfukka8o2bdkghj4a.jpg、金門縣政府觀光處署名、政府網站資料開放宣告及https://kinmen.travel/zh-tw/gwoia 完全未改。原圖https://kinmen.travel/attractions/10412/1024x768_attractions-image-cjlx1wfukka8o2bdkghj4a.jpg 。不以舊照片保證現行展示與通行。

未核：現任整體維護/營運/產權、當期票制與館堡範圍、坑道各支線、設備/無障礙、停車/公車及Google具名POI地址入口。原坐標24.44684,118.25502撤除；不輸出未核marker/geo/hasMap/地址導航。鄉公所發布票務公告不等於全部產權與管理證明。

確認tongan-ferry-pier.md存在且registry未opt-in，pilot未遷移fixture移至該頁，下次遷移須再調整。研究與實作由本代理完成，父代理獨立QA/整批驗收；未假稱額外派遣研究代理。

驗證：validate成功，Astro 0 errors/0 warnings；556頁、49318內鏈參照、1884圖像實例、4173 schema nodes，各集合與照片審核通過。4339 CI=1桌面/手機鐵漢堡＋pilot專項4 passed (2.5s)，涵蓋FAQ逐字對schema、原四H3、原圖署名、票務團體門檻與地雷館範圍區分、未核address/geo/hasMap/導航/marker缺席、行程增刪及手機無溢出。日誌/tmp/tiehan-validate.log、/tmp/tiehan-browser.log。LOCAL_READY_AWAITING_BATCH_RELEASE，待父代理獨立QA與整批回歸，非部署。

跨頁票務QA補充（2026-11-05）：重新官方索引核 https://kinmen.travel/zh-tw/travel/attraction/1369 ，地雷主題館獨立頁2025-06-23版列免費；FAQ、registry及測試明示與2024兩堡收費分開。連通坑道如何計費仍未說明，先洽082-364510，未據此自行推聯票/分票/免費規則。補來源連結，未改地雷館本頁。

本次聯合最終驗證：validate零errors/warnings，556頁、49328內鏈、1884圖片、4174 schema；鐵漢/同安/pilot雙端6 passed (2.8s)，詳/tmp/tongan-validate.log及/tmp/tongan-browser.log。來源與成品已凍結待父代理全套。


## 2026-11-06 本次隔離候選補核

歷史本地測試/待QA為當時記錄，不是本次或部署結果。主代理提供獨立UI同對象完整POI：https://www.google.com/maps/place/Tie+Han+Fortress/@24.446864,118.255056,861m/data=!3m2!1e3!4b1!4m6!3m5!1s0x341498e243e57865:0x6a91969002644d7!8m2!3d24.446864!4d118.255056!16s%2Fg%2F1vy7d6gq 。僅身份參考；顯示地址、實地入口、土地/管理和當期准入未核，不啟用hasMap/geo/marker。

直接公開官方遊程 https://www.kinmen.travel/zh-tw/discover/tour/820 支持觀景/公眾訪客服務背景，非全線或水域准入。現行票務、設施/工程、營運分工與安全位置不推定。原照片、photos.json、署名與許可保留；不套其他館、海岸、軍事或私人場域。

本次獨立QA/validate/最終回歸待完成；未提交、推送或部署。

## 本次真實main等樹集成及最終驗證

2026-11-06主代理回報獨立QA無內容/範圍阻斷。三點均只辨識對象；雙口點不是全公園/岸線邊界。基線真實main bc25dbea1f2c6e6ad5eefbf2575c3c91e36527d4，精確tree fb0801048bed2fb4ba2d7c7d21760058f2506eb4；本地占位9da051e僅為測試，不得推送。三頁原baseline blob與舊候選逐字節相同；registry只追加3key、CSV共174資料行只改3目標，其餘171不變。保留#188兩頁/北風爺alt、#189 pending原因、所有原圖/署名/許可及themes修復。

集成validate PASS，556頁、49195內鏈、1914圖片實例、4158schema；最終單次全量桌面/手機424 passed (1.9m)，日誌 /tmp/fourteenth-integrated-validate.log、/tmp/fourteenth-integrated-full.log。舊fdea基線420 passed和6專項只作歷史記錄，最終424包含三頁6項。

全量結束後僅追加本證據/CSV驗證欄，不改已驗產品或測試程式碼；臨時config/node_modules清理。未提交、推送、PR或部署；發布前再次核對真實main。
