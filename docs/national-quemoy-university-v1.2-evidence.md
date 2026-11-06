# 國立金門大學 v1.2 本地證據

查核2026-11-05；僅本地，未提交推送部署，CSV/進度由主代理維護。

## 官方來源

- https://www.nqu.edu.tw/ ：直接可讀校方名稱、行政單位與校址892009金門縣金寧鄉大學路一號、總機082-313300。校址非Google具名地址，校方管理不等全區對遊客開放。
- https://ga.nqu.edu.tw/p/405-1015-5551,c1071.php?Lang=zh-tw ：直接可讀總務處停車專區及車輛管理要點/臨時停車申請資料。臨時申請表索引載提前2日、戶外格與車牌辨識，但未直接核全文本輪最新版，頁面不寫固定遊客申請期限或費率；在校生年度方案不套遊客。
- https://library.nqu.edu.tw/p/404-1004-5335.php?Lang=zh-tw ：校方圖書館入館須知直接全文可讀，列2026-09-30修正，本國籍校外人士12歲以上、有效身分證明、登記臨時閱覽證、人數可管制；不是全校訪客許可，未延伸外籍/未滿12歲資格，不使用較舊2023FAQ覆蓋新版。
- https://cell.moe.edu.tw/guests/SchlOne.aspx?gschlid=50 ：教育部官方索引可讀、直接抓取超時；索引學校簡史列1997分部、2003學院、2010改名大學，與原專題一致。
- 原旅遊來源 https://kinmen.travel/zh-tw/travel/attraction/1623 保留，不把觀光收錄當全校准入。
- 校方首頁另連2026-11-20起交通法規適用公告；本輪日期11月5日尚未生效，不作目前已生效規則。

## 保留與未核

原三專題「這裡值得看什麼」「怎麼安排參觀」「把下一站排在附近」、原照片place-national-quemoy-university作者/授權、站內連結保持。新增FAQ與schema同步、十段模板及訪客分區提醒；一圖不設空相冊。

Google具名POI地址/入口未核，不採原座標24.44815,118.32254作marker、導航或schema geo。現行一般訪客統一入校條件、當日時段、各館活動、參觀費、車輛資格及停車費、無障礙與直接公車仍待核，不推自由進入。

僅本頁、registry自身、專項測試與證據，以及pilot未遷移fixture移至north-wind-lord：已確認檔案存在、registry未opt-in。未改其他集合、CSV、進度；未額外派遣子代理，獨立QA由主代理安排。

## 驗證

主代理通知牧馬侯祠全套398 passed後執行：
- `corepack pnpm validate` 通過：0 errors / 0 warnings；556頁、49113內鏈參照、1884圖片實例、4152 schema nodes。
- `CI=1 corepack pnpm test:browser --config playwright.takeover.config.ts tests/attraction-detail-nqu.spec.ts tests/attraction-detail-pilot.spec.ts --grep 'NQU|detail pilot does not opt'`：桌面/手機4 passed（2.5秒）。驗證標題順序、原三專題與照片署名、管理及訪客區分、FAQ/schema完全一致、未核導航和座標不輸出、行程增刪及手機無溢出，保留未改造fixture隔離意圖。
- 日誌`/tmp/nqu-validate.log`、`/tmp/nqu-browser.log`，4339服務隨測試正常結束。

狀態LOCAL_READY_AWAITING_BATCH_RELEASE，待主代理完整回歸與獨立QA；非VERIFIED或部署。


## QA補充：圖書館分區時段

原提供404-1004-31437路徑工具無法讀；官方搜尋找到同公告406-1004-31437,r12路徑，直接全文核讀。公告自2026-09-07起本館週一至五08:00–21:30/六08:30–17:30；閱覽室週一至五08:00–22:30/六08:30–22:30；週日均閉（期中期末考週例外）、國定假日休館。逐來源新增FAQ，不推全校或外籍等資格；當日/寒暑假另核。來源 https://library.nqu.edu.tw/p/406-1004-31437,r12.php?Lang=zh-tw 。補充後與北風爺重驗。


## 聯合本地重驗結果

主代理通知NQU上一版全套400 passed後執行。`corepack pnpm validate`通過，0 errors/0 warnings；556頁、49122內鏈參照、1884圖片實例、4153 schema nodes。北風爺、NQU與pilot隔離用例桌面/手機共6 passed（2.9秒），含原專題/圖像、FAQ/schema、當日准入界線、未核導航/geo不輸出、行程及手機版。日誌`/tmp/north-nqu-validate.log`、`/tmp/north-nqu-browser.log`，4339服務已結束。狀態LOCAL_READY_AWAITING_BATCH_RELEASE，待獨立QA/完整回歸；非部署或VERIFIED。


## 2026-11-06 有界候選補核（本次，不代表部署）

地圖獨立UI同對象核對由主代理提供：https://www.google.com/maps/place/National+Quemoy+University/@24.4481499,118.322535,861m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3414a25f9967e56f:0xf1c093a50b7e8ba6!8m2!3d24.4481499!4d118.322535!16s%2Fm%2F0b6lwpf 。僅身份參考；顯示地址、入口、准入與無障礙未核，不啟用hasMap/geo。
直接重讀校方圖書館2026-09-30規則 https://library.nqu.edu.tw/p/404-1004-5335.php?Lang=zh-tw ：12歲以上本國籍校外人士持證登記臨時閱覽證，得拒絕資格不符及管制人數；限圖書館服務，不推全校觀光或任意教學區通行。停車申請頁不證已獲停車資格。
初次候選階段沿用原照片位元組與photos.json；其後獨立QA僅更正北風爺單筆alt，二進位與所有署名/許可完整保留；歷史證據中的本地QA/待核為當時記錄，本次仍待獨立QA與最終測試。來源查核日期與內容修訂日分開。

## 本次最終候選驗證與凍結

主代理回報獨立QA對修後兩頁無阻斷。2026-11-06最終validate PASS（556頁、134可解碼署名圖片資產），修正alt後單次桌面/手機完整回歸418 passed (1.8m)，日誌 /tmp/thirteenth-final-validate.log、/tmp/thirteenth-final-full.log。原先專項4 passed僅為修前記錄；最終全量已包含修後兩頁4項。

本段與歷史措辭修正於全量結束後追加，只改證據/CSV驗證欄，不改已測產品及測試程式碼。CSV共174資料行，本次兩目標行變更，其餘172行保持。尚未提交、推送或部署；真實main parent發布前需再核，當地占位不可推送。
