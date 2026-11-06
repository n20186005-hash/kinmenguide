# 麒麟山森林公園 v1.2 本地證據

2026-11-05查核，未提交推送部署。CSV/進度由主代理維護。

## 官方來源及界線

- https://lieyu.kinmen.gov.tw/travel/cp.aspx?n=1C7EFFCD71C91E45 ：官方索引可讀2019-10-19介紹，直接抓取502；歷史靶場轉用、后頭/庵頂三入口、展示館步道與瞭望台。僅為歷史路線資料，不推目前三處通行、展示/望遠鏡可用或可穿越。
- https://lieyu.kinmen.gov.tw/cp.aspx?n=A6FA73ACEAA04439 ：官方索引可讀2019-09-05景點總介紹，直接抓取超時；公所爭取經費步道美化與設瞭望台是工程推動角色，非全域現行管理/維護/權屬證明。
- https://kinmen.travel/zh-tw/live-camera/9 ：直接可讀官方直播與山頂視野介紹，不當全部步道准入或設施現況保證。
- 原 https://kinmen.travel/zh-tw/travel/attraction/1537 保留。不同官方頁海拔114/119公尺不一致，本頁不新增高度合併推定。
- 非官方2020遊記曾稱入口封閉，年代久遠不採今日開閉斷言；亦不拿外縣市田中/名間同名步道長度、難度和正常營運狀態套用。

## 保留、位置及待核

原四專題、照片place-qilin-mountain-park作者/許可與站內連結保持，將登高/入口短走改為當日開放及路況條件，不丟坡階、風雨和視野題材。單圖不設空相冊。

Google具名地址入口未核；原24.43916,118.25456撤導航、marker、schema geo。中北部/后頭庵頂為官方位置描述，非Google地址。歷史軍事遺構不等全可進入，無GPX或全線貫通承諾。

當期管理權屬、各入口道路與車道、步道/展示館/瞭望台/望遠鏡現況、費用、停車公車及無障礙仍待核。原60–90分鐘為編輯建議，未實測。僅本頁/registry自身/測試/證據及pilot fixture換rongyuan（存在且未opt-in），未改CSV/進度或其他集合，不提交。未額外派遣子代理，主代理協調獨立QA。

## 驗證

主代理通知擎天廳全套408 passed後執行：validate通過，0 errors/0 warnings，556頁、49160內鏈參照、1884圖片實例、4157 schema nodes。桌面/手機麒麟山與pilot隔離用例4 passed（2.6秒），涵蓋原四專題/主圖署名、FAQ/schema一致、管理/歷史入口與當日准入界線、未核導航/geo缺席、行程增刪及手機無溢出。日誌`/tmp/qilin-validate.log`、`/tmp/qilin-browser.log`，4339服務隨測試正常結束。

LOCAL_READY_AWAITING_BATCH_RELEASE，待獨立QA及完整回歸；非部署或VERIFIED。


## 擎天期限補正與麒麟山聯合重驗

期限QA補正後重新validate：0 errors/0 warnings，556頁，連結/圖像/schema檢查通過。擎天廳、麒麟山及pilot桌面/手機6 passed（2.9秒），包括首頁申請期限精確語意、獨立團體差異、FAQ/schema全等及原有准入安全回歸。日誌`/tmp/qilin-qingtian-validate.log`、`/tmp/qilin-qingtian-browser.log`，4339服務已正常結束。待主代理獨立QA/完整回歸，未部署。

獨立複核補記（2026-11-05）：觀光署繁中詳情頁與原始 JSON 的免費狀態為 null、費用欄空白，英文呈現之「需入場相關費用」不能作為原始值；2025-06-24 資料所列正常營運／公眾開放亦不保證今日各入口或路線通行。https://media.taiwan.net.tw/zh-tw/portal/travel/json/attraction_371020000a_001537


## 獨立QA票務補充

烈嶼鄉公所2024年1月8日公告、1月15日起的票價表列麒麟山全票20元、優待票10元、團體票15元（20人以上）。這是有日期公告，不代表本輪已確認今日票亭實施；票種、免票資格、收費範圍及當期規則出發前向鄉公所確認，付費亦不等全部步道或軍事遺構可進。

來源：https://lieyu.kinmen.gov.tw/News_Content.aspx?Create=1&n=163D622C1593A5D7&s=D01DABEC57251AEC&sms=A2C62D68901B977C ； https://lieyu.kinmen.gov.tw/News_Content.aspx?n=163D622C1593A5D7&s=2C8D4A7F3D9DC506&sms=A2C62D68901B977C。主代理獨立QA核原票價表；本輪不冒充現場票亭確認。frontmatter、可見FAQ/schema、registry與精確測試同步，過去費用待核記錄由本補充取代一般歷史資訊，但當期仍待查。


## 四頁票務/來源日期聯合重驗

沙溪上一版全套416 passed後完成QA補正，validate通過：0 errors/0 warnings，556頁、49189內鏈參照、1884圖片實例、4160 schema nodes。麒麟/青岐/乳山/沙溪桌面手機專項8 passed（3.4秒），包括新票價及來源日期、解說非入場費、FAQ/schema逐項一致、原專題圖像、管理准入/導航界線、行程增刪及手機版。日誌`/tmp/three-fees-validate.log`、`/tmp/three-fees-browser.log`，4339正常結束。未動CSV/進度、未提交推送。待主代理全套及獨立QA，非部署或VERIFIED。

## 2026-11-06 named-reference identity
Independent UI QA supplied exact reference https://www.google.com/maps/place/Qilinshan+Forest+Park/@24.439161,118.25456,861m/data=!3m2!1e3!4b1!4m6!3m5!1s0x341498de4a5e002b:0xf93b95f927e2afe7!8m2!3d24.439161!4d118.25456!16s%2Fg%2F11c1nc1tq2. Identity only, not entrance/address/admission/parking/accessibility. 歷史三處入口不等目前每段可通行，步道、瞭望台與展示館當日條件另核，不跨圍設或進未開放軍事遺構。 Pending schema/map fields remain disabled; historical notices not current status. Original image preserved. Implementer web tool retried official sources but got inaccessible/minimal shell/timeout; does not claim fresh complete official retrieval. Await independent release review.
