# 乳山故壘 v1.2 本地證據

2026-11-05查核；未提交推送部署，CSV/進度由主代理維護。

## 官方來源

- https://kinmen.travel/zh-tw/travel/attraction/540 ：官方景點名乳山故壘，索引一般08:30–17:00。使用者乳山炮台稱呼不新增另一POI或未核別名；原故壘專題保持。
- https://www.medicaltravel.org.tw/Scenery-Content.aspx?fromCnt=0&idstr=C1_371020000A_000540&l=1&name=&p=29&position=0&regcode=W ：直接全文可讀臺灣國際醫療官方景點資料，記與中山紀念林相連、國家公園以舊軍事設施整建、士兵人像/指揮所/反空降堡及聲光題材；只支持整建與展示資料，不推所有工事/地下室內當日開放或全部維護責任。
- https://www.kmnp.gov.tw/ch/touristInfo/recreation-sites/54 ：直接全文可讀金管處乳山遊客中心，生態展示為鄰館本身題材，不移植故壘當作同館。
- https://www.kinmen.gov.tw/News_Content2.aspx?n=98E3CA7358C89100&s=689D8E2613FDA4AD&sms=BF7D6D478B935644 ：官方索引家庭據點介紹將故壘列乳山遊客中心外，所附展館時段不擴為所有林間工事或坑道通行。

## 保留及待核

原三專題、照片place-rushan-fort作者許可、站內連結保持；聲光/工事改為來源展示題材，非全設備目前運轉。親子提醒保留，地下准入須先核，不攀武器或跨封閉。

Google具名地址/入口未核，原24.43711,118.35248撤導航/marker/schema geo。官方桃園路190號另列來源地址，不冒充Google門牌。當期完整權屬維護分工、全部費用、各工事室內/地下/軍事區准入、設備、停車公車及連續無障礙待核。未以未核收費說需購票或一律免費。

僅本頁/registry自身/專項測試/證據及pilot fixture換shaxi-fort（確認檔案存在未opt-in），不改其他集合、CSV/進度，不提交。未額外派遣子代理，主代理協調獨立QA。

## 驗證

原先回歸期間只準備，後依通知執行以下驗證。


## 乳山與榕園日期補正聯合驗證

主代理通知榕園上一版全套412 passed後執行：validate通過，0 errors/0 warnings；556頁、49180內鏈參照、1884圖片實例、4159 schema nodes。桌面/手機乳山、榕園及pilot隔離用例6 passed（2.9秒），涵蓋原專題/照片署名、FAQ/schema全等、榕園2025-05-26來源就近歸因、乳山工事/地下與鄰館區分、未核導航/geo缺席、行程增刪及手機無溢出。日誌`/tmp/rushan-rongyuan-validate.log`、`/tmp/rushan-rongyuan-browser.log`；4339服務正常結束。LOCAL_READY_AWAITING_BATCH_RELEASE，待獨立QA/完整回歸，非部署或VERIFIED。


## 獨立QA票務補充

金門觀光旅遊網2025年6月24日更新版本列乳山故壘一般08:30–17:00、免費；這是該版一般資訊，不是今日開放或票務現場確認。個別活動、服務與臨時維護另查，整體免費及時段亦不代表每段坑道、室內或工事准入。

來源：https://kinmen.travel/zh-tw/travel/attraction/540。主代理獨立QA核原票價表；本輪不冒充現場票亭確認。frontmatter、可見FAQ/schema、registry與精確測試同步，過去費用待核記錄由本補充取代一般歷史資訊，但當期仍待查。


## 四頁票務/來源日期聯合重驗

沙溪上一版全套416 passed後完成QA補正，validate通過：0 errors/0 warnings，556頁、49189內鏈參照、1884圖片實例、4160 schema nodes。麒麟/青岐/乳山/沙溪桌面手機專項8 passed（3.4秒），包括新票價及來源日期、解說非入場費、FAQ/schema逐項一致、原專題圖像、管理准入/導航界線、行程增刪及手機版。日誌`/tmp/three-fees-validate.log`、`/tmp/three-fees-browser.log`，4339正常結束。未動CSV/進度、未提交推送。待主代理全套及獨立QA，非部署或VERIFIED。

## 2026-11-06 named-reference identity
Independent Maps UI QA supplied https://www.google.com/maps/place/Old+Rushan+Fort/@24.4371198,118.3499012,861m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3414a3a90f020eef:0xb4e89935e1da339!8m2!3d24.4371149!4d118.3524815!16s%2Fg%2F1td0qhxm; named identity only, not display address, visitor entrance, daily admission, parking or accessibility. 此為乳山故壘，不以乳山遊客中心代替；不代表地下工事、屋頂或周邊未開放設施可進入。 No pending Google frontmatter/schema/marker enabled. Original photo preserved. Earlier named-POI-unverified evidence is superseded for identity only. Await independent release review.

2026-11-06 independent QA correction: legacy deep-dive hours now explicitly attributed to tourism data updated2025-06-24 and not present-day opening confirmation. First hours FAQ visible/frontmatter answers aligned to dated source; existing source-specific FAQ retained. Added regression checks. Original image unchanged.
