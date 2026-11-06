# 瓊林一門三節坊 v1.2 證據

2026-11-05研究實施，非現勘。保留無image/photos metadata、原三專題與聚落/坑道相關鏈、原Google短鏈；不借別坊照片、無空相冊。原近旅宿頁非核心證據，改直接409及國資網。未改CSV進度或其他集合，無提交部署。

## 文資與一般資料
https://nchdb.boch.gov.tw/city/cabkc.kinmen/assets/overview/monument/19881111000004/ 及同ID /assets/overview/monument/19881111000004 官方完整索引列縣定古蹟、主管金門縣文化局/文化資產科、管理人/使用人均瓊林蔡氏十七郎公裔孫基金會。依登載角色限定，不推土地全部產權或周邊道路管理；字段更新日期未明，未假稱新委管契約。完全開放/全天候/是否收費否字段有據，標日期局限不推今日無管制。

同條目建議定期確認構件破損掉落，屬建議不等當日已危險或已安全。 https://cabkc.kinmen.gov.tw/uploads/files/202511/12d5635d-4e3b-447e-8e46-935536eba4be.pdf 2025年11月官方業務報告索引列修復工程申請計畫依審查意見修正，不據此宣稱今日施工、完工或驗收。

https://kinmen.travel/zh-tw/travel/attraction/409 官方完整索引更新2025-05-12，列1831/道光11、瓊林西郊古官道/雙瓊路、全天免費。直接文字僅框架，標版本與核查限制；一門三節是一座為三位女性立的坊，不是三座總稱，不混邱良功母坊/顏氏坊。保留對傳統性別規範的歷史思考，不以當代口吻要求守節。

https://kinmen.travel/zh-tw/nearby/ebus?placeId=409&type=Attractions 官方直接鄰站頁列瓊林圓環等站及僅供參考免責，未以直線距離當可走路線；今日去回程、站後穿越、停車費、照明/無障礙另核。

## Google具名實證
Chrome2026-11-05實開 https://maps.app.goo.gl/b2DLfbgWsQTYjqCz5 ，卡片Three Widows Chastity Arch/一門三節坊，Address原文 `Jinhu Township, Kinmen County, 891`，Plus F93C+H5 Jinhu Township；卡片官網直接連409支持同一身份。解析URL g/1v8w_t8_、0x3414a36cba40915b:0x73f086b03f7d1fc0，位置24.4539213,118.370404。用同原短鏈作全部導航/hasMap，不補門牌，不採Google24hr作官方安全許可，不用評論證道路可站。

## 限制與交接
工程/構件今日現況、道路安全/公開可站位置/停車及無障礙未核，不站車道退入車流、不跨圍設或觸攀石構，不明就略過。文資角色依有日期局限的官方登載，不擴大至所有道路。下一fixture qionglin-village.md已確認存在且registry未opt-in，測試未遷移fixture已換；未派子代理，父代理統籌獨立QA。

驗證完成：validate556頁/49725內鏈/1884圖片/4214 schema，照片及跨集合audit通過。4339 CI=1桌面手機本頁+fixture4 passed (2.4s)，覆蓋無圖原三題、1831與單坊身份、角色/字段日期限制、道路提醒、FAQ HTML/schema逐字一致、Google原樣地址/同短鏈/坐標與map導航、行程增刪及無溢出。日誌 `/tmp/qionglin-arch-validate.log`、`/tmp/qionglin-arch-browser.log`。源碼/dist凍結供父代理QA及完整回歸，未提交部署。


## 2026-11-06 本次有界候選補核

歷史本地QA/測試是當時記錄。主代理提供獨立Maps UI同對象點 https://www.google.com/maps/place/Three+Widows+Chastity+Arch/@24.4539213,118.370404,861m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3414a36cba40915b:0x73f086b03f7d1fc0!8m2!3d24.4539213!4d118.370404!16s%2Fg%2F1v8w_t8_ 。具名身份已核；坊點Google地址僅行政區891，非實地入口，島點顯示地址與兩頁實地入口/當日准入仍待核，不啟用geo/hasMap/導航marker。

官方409與獨立UI同對象，文資管理/使用角色按基金會登載，不推周邊路權或當日構件安全。 來源：https://kinmen.travel/zh-tw/travel/attraction/409 。不推管理、產權、停車或全區安全；無已確認可公開通行且安全停留範圍時不進入。原圖/照片metadata/署名/許可全保留，依用户指示不重新審核或刪減既有圖片。

本次validate/獨立QA/全量待完成；未提交推送部署。#192與峰上Google照片候選保持暫停，未帶入本批。

## 本次最終本地驗證／歷史記錄更新

基線真實main bc17144d5fc2cae1f852ffcaaa7c861aa57a8e03，精確tree8d61da2927837efed625308092736d5d1f918d56，僅clone乾淨HEAD，未帶#192、峰上或虎堡未授權候選。舊無圖/短鏈全部導航記錄是先前階段，已由#187照片及本次有界參考替代：坊現保留已上線2018照片與image/caption精確main值，無‘目前無圖’宣稱。本次兩頁可見完整Maps只作身份參考，不輸出未核實地入口geo/hasMap/marker；坊已核地址僅行政區891，不冒稱門牌。

最終validate PASS；兩頁桌面/手機4專項 passed (2.8s)；單次完整430 passed (2.0m)。日誌 /tmp/sixteenth-final-validate.log、/tmp/sixteenth-focused.log、/tmp/sixteenth-full.log。CSV174資料行僅兩目標變、其餘172保持；photos.json/pending及原圖二進位完全未改。

全量結束後只追加證據/CSV測試欄，不改已測產品/測試。獨立QA已由主代理回報通過，不宣稱部署；來源現況/實地入口/管理/道路與構件安全仍按正文限制。臨時config及依賴鏈接清理，未提交推送。

### 本次獨立QA最終結果
2026-11-06主代理回報兩頁獨立QA通過：地圖只作身份參考；建功嶼日間退潮、現場許可、不涉水及預報非安全保證界線正確；牌坊基金會管理/使用角色依文資欄位，該欄位更新日期未知，不得寫為2011已核。舊照片/署名保持；最終validate、4專項與單次430 passed (2.0m)對應產品/測試未變。來源現況、實地入口/路權與當日安全仍未核；NOT_DEPLOYED，非VERIFIED。本次僅QA紀錄修正，未提交推送。

## #195最新main集成最終記錄

真實main896e52159d8d97377754a602de7f74300304f3d9由GitHub GET獨立核實，精確基線tree fdeb15957e9f62d6072b6090062e773459aaf987；本地占位e798400僅用測試，不能推送。兩目標頁原基線blob相同，按slug/key合入，保留#193兩頁及#194已合併單張照片/registry/pending，未帶#192或其他未授權照片候選。

集成validate PASS；最終單次完整436 passed (2.0m)，session52514 exit0，日誌/tmp/sixteenth-integrated-validate.log與/tmp/sixteenth-integrated-full.log。舊430屬舊基線歷史結果；兩頁產品與專項程式碼逐字節保持獨立QA通過版本，來源現況/入口/路權/安全未核限制不變。CSV174只目標2行改、其餘172行不變，舊圖完全保留。

本段及CSV集成驗證記錄於全量後追加，非產品行為修改；清理本輪config/node_modules鏈接，未提交推送，NOT_DEPLOYED。
