# 北風爺與風雞 v1.2 本地證據

2026-11-05查核，僅本地、未提交推送部署。CSV/進度由主代理維護。

## 官方來源及可讀性

- https://kinmen.travel/zh-tw/travel/attraction/434 ：官方索引全文摘要述北風爺亦稱北方王、風王公或黑面風王，為鎮風守護信仰；風雞另有地方傳說。直接工具頁僅定位點，不以此宣稱現況查驗。
- https://lieyu.kinmen.gov.tw/travel/cp.aspx?n=6d7ddfeedb4a2e00 ：鄉公所北風爺官方索引記面向北及風雞民俗。直接抓取超時，未核現行管理/權屬，不將網站頁尾西路60號當景點地址（為公所地址）。
- https://lieyu.kinmen.gov.tw/travel/cp.aspx?n=B6925ED7DB64D519 ：官方索引述風雞厭勝、守護民俗，直接抓取超時；不推單一地點、神像或防災效果。
- https://kinmen.travel/zh-tw/media/album/195 ：官方相簿索引可見北風爺黑臉、道路旁與前方風雞題材，與原頁辨認相符。

原三角定位為西方與后宅間北風爺及相鄰風雞，不是九宮大型白色人文風雞；對應九宮頁連結保留。原四專題、站內路線連結及place-north-wind-lord照片作者授權均保留，一圖不設空相冊。

Google具名POI、地址與入口本輪未核，原座標24.43676,118.23978不輸出導航、marker或schema geo；無新造短鏈。原位置說明與Google地址分開。

## 未核及範圍

現行祭祀組織、權屬、維護分工、當期准入、活動/費用、停車、直達站點和無障礙皆待核。原一般全天免費不推全祭祀範圍或私宅准入；民俗意涵非防災保證。

僅本頁/registry自身/專項測試/證據，以及授權pilot未改造fixture換oucuo-wind-lion，已確認檔案存在、registry未opt-in。不改其他集合、CSV或進度，不提交。未額外派遣子代理，獨立QA由主代理安排。

## 驗證

原先回歸期間僅準備，後依主代理通知執行以下驗證。


## 聯合本地重驗結果

主代理通知NQU上一版全套400 passed後執行。`corepack pnpm validate`通過，0 errors/0 warnings；556頁、49122內鏈參照、1884圖片實例、4153 schema nodes。北風爺、NQU與pilot隔離用例桌面/手機共6 passed（2.9秒），含原專題/圖像、FAQ/schema、當日准入界線、未核導航/geo不輸出、行程及手機版。日誌`/tmp/north-nqu-validate.log`、`/tmp/north-nqu-browser.log`，4339服務已結束。狀態LOCAL_READY_AWAITING_BATCH_RELEASE，待獨立QA/完整回歸；非部署或VERIFIED。


## 圖片獨立QA修正

主代理獨立QA指出原主圖只見黑面北風爺神像，未同框風雞；依授權僅將photos.json該圖alt由「北風爺、風雞實景」改「北風爺神像」，原圖/作者/授權/來源及裁切記錄不改，專項新增精確alt斷言，與歐厝重驗。


## 歐厝/北風爺修正聯合驗證

主代理通知上一版402 passed後執行。validate通過：0 errors/0 warnings，556頁、49132內鏈參照、1884圖片實例、4154 schema nodes。桌面/手機歐厝、北風爺及pilot隔離用例共6 passed（3.0秒），包括北風爺精確alt、原專題/照片授權、FAQ/schema、管理與准入界線、未核導航/座標缺席、行程增刪及手機無溢出。日誌`/tmp/oucuo-north-validate.log`、`/tmp/oucuo-north-browser.log`；4339服務已正常結束。LOCAL_READY_AWAITING_BATCH_RELEASE，待獨立QA及完整回歸，非部署或VERIFIED。


## 2026-11-06 有界候選補核（本次，不代表部署）

地圖獨立UI同對象核對由主代理提供：https://www.google.com/maps/place/Bei+Feng+Ye/@24.4356749,118.2426246,861m/data=!3m1!1e3!4m10!1m2!2m1!1z5YyX6aKo54i6IOmHkemWgCDng4jltrw!3m6!1s0x3414993e7a7e5955:0x5006c272d8658875!8m2!3d24.4367607!4d118.2397852!16s%2Fg%2F1tcw_44f 。僅身份參考；顯示地址、入口、准入與無障礙未核，不啟用hasMap/geo。
烈嶼公所2019-09-05直接來源 https://lieyu.kinmen.gov.tw/cp.aspx?n=A6FA73ACEAA04439 記道路旁位置；2019風雞頁記上坡路段，但未證道路公共性、今日合法到達/停留、停車、權屬/軍界。正文採條件式遠觀，且明示無此條件不靠近、不停留。
初次候選階段沿用原照片位元組與photos.json；其後獨立QA僅更正北風爺單筆alt，二進位與所有署名/許可完整保留；歷史證據中的本地QA/待核為當時記錄，本次仍待獨立QA與最終測試。來源查核日期與內容修訂日分開。

獨立QA本次指出主圖只見北風爺神像/寶塔，沒有同框風雞；僅修photos.json此ID的alt為「北風爺神像」及專項斷言，屬文字準確性修正。原JPEG、署名、來源與許可均未改。修前418 passed不當作修後結果；需重新validate及最終全量。

## 本次最終候選驗證與凍結

主代理回報獨立QA對修後兩頁無阻斷。2026-11-06最終validate PASS（556頁、134可解碼署名圖片資產），修正alt後單次桌面/手機完整回歸418 passed (1.8m)，日誌 /tmp/thirteenth-final-validate.log、/tmp/thirteenth-final-full.log。原先專項4 passed僅為修前記錄；最終全量已包含修後兩頁4項。

本段與歷史措辭修正於全量結束後追加，只改證據/CSV驗證欄，不改已測產品及測試程式碼。CSV共174資料行，本次兩目標行變更，其餘172行保持。尚未提交、推送或部署；真實main parent發布前需再核，當地占位不可推送。
