# 同安渡頭 v1.2 本地證據

2026-11-05公開資料整理，非現勘。只改本頁、獨立registry/test/evidence、明示授權的鐵漢堡跨頁票務補充及pilot fixture；未改CSV/進度、未提交推送。

- https://kinmen.travel/zh-tw/travel/attraction/1398 直接讀取只得框架；官方索引顯示2025-06-02版，昔日漳州/廈門渡口、馬伕殉難紀念碑、海景及24小時/免費欄位。此欄位不能推室內、登樓、岸段或作業區全天准入。
- https://www.kinmen.gov.tw/News_Content2.aspx?n=98E3CA7358C89100&s=E8FB58A416830F1F&sms=BF7D6D478B935644 全文可讀，2025-12-23刊；記2024年8月廠商承攬、當時預計2025年12月中旬賣店試營運。即使報道日期晚於預計日期，也不自行修正或解讀已開幕；當期廠商身份、實際營業及整體管理產權仍待核。
- https://kinmen.travel/zh-tw/nearby/ebus?placeId=1398&type=Attractions 官方索引列舊渡口等鄰站，不把距離當實走或無障礙證明，班次查動態。
- 未取得此歷史渡口現行公共渡船班次證據，不提供在此購小三通票/出境安排；也不推完全沒有船舶活動。周邊海岸或工作區准入不由景點名稱推定。

保留原三題「曾經離鄉與返家的渡口」「也讀一段沉重的歷史」「留給傍晚的海岸」、雄獅堡/海濱公園站內連結及20–40分鐘（編輯建議）。照片place-tongan-ferry-pier、alt同安渡頭實景、檔案1024x768_image_636361756421000278.jpg、金門縣政府觀光處署名、政府網站資料開放宣告及https://kinmen.travel/zh-tw/gwoia 完全未改；原圖https://kinmen.travel/attractions/1617/1024x768_image_636361756421000278.jpg 。

管理權屬、賣店營業、岸段/登樓准入、當日管制、停車/無障礙及Google具名POI地址入口待核。原24.4376,118.30916撤除，不輸出未核marker/geo/hasMap/地址導航，原光前路位置另列線索。確認wudao-city-god-temple.md存在且未opt-in，pilot fixture換至該頁，下次改該頁再移。研究實作由本代理，獨立QA與全套由父代理統籌。

驗證：validate成功，Astro 0 errors/0 warnings，556頁、49328內鏈參照、1884圖像實例、4174 schema nodes；各集合及照片審核通過。同安、鐵漢補充及pilot 4339 CI=1桌面/手機專項6 passed (2.8s)。驗證FAQ/schema逐字、原題/主圖、營運日期與票務範圍、未核導航geo/marker缺席、行程增刪及無溢出。日誌/tmp/tongan-validate.log、/tmp/tongan-browser.log。LOCAL_READY_AWAITING_BATCH_RELEASE，待獨立QA及整批回歸，非部署。

航班查詢QA補充：2026-11-05直接可讀 https://www.motcmpb.gov.tw/BoatSchedule?nodeId=380&siteId=1 ，提供小三通起訖/日期查詢及金門—五通/石井航線資訊，沒有據此證明同安啟航。FAQ與正文加可點官方入口，明確供查正式水頭等航線、當日異動及售票方；不複製會變動的固定船班。registry與測試同步限定。

航班入口補充最終驗證：與浯島聯合validate零errors/warnings、556頁/49338內鏈/1884圖像/4175schema；兩頁及pilot雙端6 passed (2.2s)，詳/tmp/wudao-validate.log、/tmp/wudao-browser.log。源碼及dist凍結待父代理全套。


## 2026-11-06 本次隔離候選補核

歷史本地測試/待QA為當時記錄，不是本次或部署結果。主代理提供獨立UI同對象完整POI：https://www.google.com/maps/place/%E5%90%8C%E5%AE%89%E6%B8%A1%E8%88%B9%E9%A0%AD/@24.437598,118.309164,861m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3414a2704c5804a3:0x5a7aee5e83c1070b!8m2!3d24.437598!4d118.309164!16s%2Fg%2F12hqgh9f6 。僅身份參考；顯示地址、實地入口、土地/管理和當期准入未核，不啟用hasMap/geo/marker。

直接公開官方遊程 https://kinmen.travel/zh-tw/discover/tour/734 支持觀景/公眾訪客服務背景，非全線或水域准入。現行票務、設施/工程、營運分工與安全位置不推定。原照片、photos.json、署名與許可保留；不套其他館、海岸、軍事或私人場域。

本次獨立QA/validate/最終回歸待完成；未提交、推送或部署。

## 本次真實main等樹集成及最終驗證

2026-11-06主代理回報獨立QA無內容/範圍阻斷。三點均只辨識對象；雙口點不是全公園/岸線邊界。基線真實main bc25dbea1f2c6e6ad5eefbf2575c3c91e36527d4，精確tree fb0801048bed2fb4ba2d7c7d21760058f2506eb4；本地占位9da051e僅為測試，不得推送。三頁原baseline blob與舊候選逐字節相同；registry只追加3key、CSV共174資料行只改3目標，其餘171不變。保留#188兩頁/北風爺alt、#189 pending原因、所有原圖/署名/許可及themes修復。

集成validate PASS，556頁、49195內鏈、1914圖片實例、4158schema；最終單次全量桌面/手機424 passed (1.9m)，日誌 /tmp/fourteenth-integrated-validate.log、/tmp/fourteenth-integrated-full.log。舊fdea基線420 passed和6專項只作歷史記錄，最終424包含三頁6項。

全量結束後僅追加本證據/CSV驗證欄，不改已驗產品或測試程式碼；臨時config/node_modules清理。未提交、推送、PR或部署；發布前再次核對真實main。
