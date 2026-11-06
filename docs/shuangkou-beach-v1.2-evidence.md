# 雙口海邊（雙口海濱公園）v1.2 本地證據

2026-11-05只讀研究於全套期間完成，主代理確認426 passed後授權實施。未提交推送部署，CSV/進度由主代理維護。

## 官方資料及限制

- https://kinmen.travel/zh-tw/travel/attraction/1538 ：官方實名雙口海濱公園，2025-05-15版索引述西岸、歷史渡廈門與1949後海防/軌條砦；直接工具正文僅定位點。歷史渡運非現行班表，一般全天不推水域自由進入。
- https://lieyu.kinmen.gov.tw/travel/cp.aspx?n=B5F9FDC81E19A757 ：官方索引完整可讀2019-11-13介紹雙口出海口、涼亭/望遠鏡及活動場域；直接抓取超時。歷史設施清單不保證當日可用，舉辦泳渡不等日常救生許可。
- https://lieyu.kinmen.gov.tw/News_Content.aspx?n=70E1FC4F6DBD8D99&s=EC3D2043ED9A8EB9&sms=A2C62D68901B977C ：官方西海岸景觀構想以雙口為核心，採規劃角色，不當全部管理產權或連續步道完工證明。
- https://www.cwa.gov.tw/V8/C/M/tide.html ：已於狮山研究直接核可讀潮汐入口，非安全時窗或當日水域許可。
- 本輪未取得雙口戰車展示依據，不借慈湖或歐厝戰車；不把特定年度泳渡/長泳與習山湖活動戒護當日常雙口救生。

## 保留及待核

原四專題、place-shuangkou-beach原圖與觀光處作者/政府網站資料開放宣告、原站內連結保持，單圖不設空相冊。夕陽視野非保證，軌條砦不可攀鑽、不碰不明物品，天暗/風浪不探據點。

Google具名POI地址/入口未核，原24.439243,118.229撤導航/marker/schema geo。原雙口10之9號旁另作來源線索，不冒充Google門牌。當期完整管理/維護權屬、各段海岸/軍事界限、設施/水域准入/救生、車位費/空位與無障礙公車待核。30–45分鐘為編輯建議。

僅本頁/registry自身/專項測試/證據及pilot fixture換sihu-jinshunxing-mural（確認存在未opt-in）；不改其他集合/CSV/進度，不提交。未額外派遣子代理，主代理協調獨立QA。

## 驗證

validate通過：0 errors/0 warnings，556頁、49257內鏈參照、1884圖片實例、4167 schema nodes。雙口及pilot隔離用例桌面手機4 passed（2.4秒），含原四專題/圖片署名、H1/canonical/順序、歷史渡運/規劃與現時准入分層、水域救生及戰車未核界線、FAQ/schema全等、未核導航/geo缺席、行程增刪及手機無溢出。日誌`/tmp/shuangkou-validate.log`、`/tmp/shuangkou-browser.log`，4339正常結束。

LOCAL_READY_AWAITING_BATCH_RELEASE，source與dist固定待主代理全套及獨立QA，非部署或VERIFIED。


## 歷史未爆物處置QA補充

直接開縣府頁工具回框架，官方搜尋可讀完整報導2020-12-01、L26前岸18枚人員殺傷雷及專業小組掃查/攜回處理；另金門日報 https://www.kmdn.gov.tw/1117/1271/1272/326200 索引同文交叉核。來源 https://www.kinmen.gov.tw/News_Content2.aspx?n=98E3CA7358C89100&s=5541C18A6B307F93&sms=BF7D6D478B935644 。FAQ/schema與來源同步，不推今日仍有雷或全海岸安全排除；保留不碰不明物/遵圍設，精確測試，與泗湖聯合重驗。


## 泗湖/雙口歷史安全補充聯合驗證

主代理確認雙口上一版全套428 passed後授權實施，最終validate 0 errors/0 warnings，556頁、49268內鏈參照、1884圖片實例、4168 schema nodes。泗湖、雙口與pilot隔離用例桌面手機6 passed（2.7秒），含原專題/照片精確署名、H1/canonical/順序、推動者非繪者/私宅界線、雙口歷史發現及專業處置非今日雷區、FAQ/schema全等、未核導航/geo缺席、行程增刪及手機無溢出。日誌`/tmp/sihu-shuangkou-validate.log`、`/tmp/sihu-shuangkou-browser.log`；4339正常結束。source與dist固定待全套及獨立QA，LOCAL_READY_AWAITING_BATCH_RELEASE，非部署或VERIFIED。未改CSV/進度，未提交推送。


## 2026-11-06 本次隔離候選補核

歷史本地測試/待QA為當時記錄，不是本次或部署結果。主代理提供獨立UI同對象完整POI：https://www.google.com/maps/place/Shuang+Kou+Zhan+Dou+Cun/@24.4392409,118.2290043,861m/data=!3m2!1e3!4b1!4m6!3m5!1s0x34149938b4daf34d:0xd1cc5973b1e908e7!8m2!3d24.4392409!4d118.2290043!16s%2Fg%2F1tk8l6fb 。僅身份參考；顯示地址、實地入口、土地/管理和當期准入未核，不啟用hasMap/geo/marker。

直接公開官方遊程 https://www.kinmen.travel/zh-tw/discover/tour/820 支持觀景/公眾訪客服務背景，非全線或水域准入。現行票務、設施/工程、營運分工與安全位置不推定。原照片、photos.json、署名與許可保留；不套其他館、海岸、軍事或私人場域。

本次獨立QA/validate/最終回歸待完成；未提交、推送或部署。

## 本次真實main等樹集成及最終驗證

2026-11-06主代理回報獨立QA無內容/範圍阻斷。三點均只辨識對象；雙口點不是全公園/岸線邊界。基線真實main bc25dbea1f2c6e6ad5eefbf2575c3c91e36527d4，精確tree fb0801048bed2fb4ba2d7c7d21760058f2506eb4；本地占位9da051e僅為測試，不得推送。三頁原baseline blob與舊候選逐字節相同；registry只追加3key、CSV共174資料行只改3目標，其餘171不變。保留#188兩頁/北風爺alt、#189 pending原因、所有原圖/署名/許可及themes修復。

集成validate PASS，556頁、49195內鏈、1914圖片實例、4158schema；最終單次全量桌面/手機424 passed (1.9m)，日誌 /tmp/fourteenth-integrated-validate.log、/tmp/fourteenth-integrated-full.log。舊fdea基線420 passed和6專項只作歷史記錄，最終424包含三頁6項。

全量結束後僅追加本證據/CSV驗證欄，不改已驗產品或測試程式碼；臨時config/node_modules清理。未提交、推送、PR或部署；發布前再次核對真實main。
