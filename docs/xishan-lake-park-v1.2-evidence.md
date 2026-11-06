# 習山湖公園 v1.2 本地證據

2026-11-05公開資料整理非現勘。正式名稱習山湖，非西山湖。https://kinmen.travel/zh-tw/travel/attraction/1970 官方索引2026-01-09版列全天/免費、多項遊具及限5–12歲、噴水平日09/10/15–19時整點、週末加11/14，非當日設備/供水保證。初輪未核季節的結論已由後續官方索引原文取代：戲水池每年4–10月開放；只記來源安排，不承諾當日供水。

https://lieyu.kinmen.gov.tw/News_Content.aspx?n=70E1FC4F6DBD8D99&s=B65D4257FDD92867&sms=A2C62D68901B977C 直接逾時，官方索引全文句及上版2023-05-01可見，縣府/公所共同維護管理努力，只作有日期角色記錄，非當期全部分工或產權。https://lieyu.kinmen.gov.tw/travel/News_Content.aspx?Create=1&n=38E9BB303B0471DA&s=3731C15ADE2A0104&sms=3F98C9AF4C693214 官方2026-07-18至19童玩節，特定臨時水池/大型水上城堡不推常設設備、全年救生或現在活動。

原四題及東井/東林海濱/烈嶼兩天路線連結保留，45–90分鐘編輯建議；適齡規則及照看、雨滑燙熱提醒保留，公園全天不等設備全開或水域准入。原航拍已view_image核濱海遊戲場景，metadata對應1970；place-xishan-lake-park、檔案1024x768_attractions-image-okgb2b9ovk-diusioph3ha.jpg、alt習山湖公園實景、觀光處署名、政府網站資料開放宣告與https://kinmen.travel/zh-tw/gwoia 不變。原圖https://kinmen.travel/attractions/45389/1024x768_attractions-image-okgb2b9ovk-diusioph3ha.jpg 。照片可見沙灘不證准入/救生。

待核當期維護產權分工、設備供水、海岸/水域開放與救生、停車公車無障礙及Google具名入口。原24.4246643,118.250032撤除，不輸出未核marker/geo/hasMap/Google地址導航，不借東林公園代替。確認xiyuan-salt-museum.md存在且目前registry未opt-in，pilot fixture轉該頁，下次遷移再移。

僅本頁/registry自身/test/evidence與fixture，未改CSV進度、不提交部署。研究實作本代理，父代理獨立QA/全套。

驗證：validate零errors/warnings，556頁/49480內鏈/1884圖片/4189schema，各集合影像審核通過。4339 CI=1本頁/pilot雙端4 passed (2.4s)，原四題圖、FAQ逐字schema、適齡/設備/活動水域界線、未核地址geo/hasMap/marker導航缺席、行程增刪及無溢出通過。/tmp/xishan-validate.log、/tmp/xishan-browser.log。LOCAL_READY_AWAITING_BATCH_RELEASE，源碼/dist凍結待父代理QA及全套，非部署。

## QA補查
2026-11-05直接讀取交通部觀光署 https://www.taiwan.net.tw/m1.aspx?id=A12-00629&sNo=0001016 ，列金門縣烈嶼鄉西路60號、118.25003/24.424677。官方導航實際為 https://maps.google.com/maps?daddr=24.424677623859544%2C118.2500342742936&dirflg=r&f=d&hl=zh-TW&saddr= ，純座標路線，web跳轉Google後不可讀，未取得具名POI卡片、原樣地址或入口實證。因此不恢復導航/marker/schema geo；官方一般資料另列，且西路60號亦為公所網站聯絡地址，不能自行推定遊客入口。
官方1970頁主體本輪讀取只返JS骨架，但針對官方網域搜尋索引直接返完整季節句「戲水池每年4-10月開放」及平假日噴水時段。FAQ、正文及registry同步季節來源與當日確認界線。

QA修正後驗證：`corepack pnpm validate` exit 0；4339 `CI=1` 本頁desktop/mobile 2 passed (1.7s)。新增季節、官方一般地址及具名入口未核斷言，既有FAQ/schema逐字、地址/geo/hasMap與導航缺席均通過。日誌 /tmp/xishan-fix-validate.log、/tmp/xishan-fix-browser.log。完成後再次凍結源碼與dist供獨立QA/完整回歸，未提交部署。

## 2026-11-06 named-reference update
Independent QA/coordinating agent directly checked named Google Place identity in UI: https://www.google.com/maps/place/Xishan+Lake+Park/@24.4246692,118.2474517,861m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3414992a2beded7f:0x39557ad4523ab51f!8m2!3d24.4246643!4d118.250032!16s%2Fg%2F1tptn74z. Visible reference only; display address, precise visitor entrance and daily access remain unverified. No Google address/coordinates/schema hasMap/marker enabled. Existing source dates, historical closure/construction limits and original photo preserved. Earlier unverified named-point statements are historical and superseded for identity only; entrance/access uncertainties remain. Pending independent release acceptance.
