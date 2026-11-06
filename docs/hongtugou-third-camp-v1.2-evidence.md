# 紅土溝三營區（L36）v1.2 本地證據

基底與發布策略沿用持續工作區fcce3f85d312b5cb87bab664cb3e6d82719ca10b完整884 blob清單。保留已完成L34和PR163唯一寒舍花CSV行；本頁僅本地改造，無commit/push/部署。可恢復進度見attraction-local-progress.json。

## 舊文、連結與照片

原四H2「營舍與海岸放在一起看」「分清L34與L36」「開放時段先核對」「附近怎麼安排」搬至FAQ後H3，四段主題、L34/貓公石/烈嶼指南/兩天路線連結及related烈嶼一日皆保留。第一段參觀順序加當日允許條件；第三段原稱不同起始時間與管理單位電話，依本輪GUI更新為週表一致08:30–17、電話只歸因2025觀光頁且未撥打、不當現管證明；未量測低矮改留意頭頂/狹小空間安全提醒。沒有刪原主題或改其他集合。

原照片place-hongtugou-third-camp、alt紅土溝三營區L-36據點實景、金門縣政府觀光處及政府網站資料開放宣告保留。實作者view本地JPG，為迷彩營舍、射口/觀測設施與前方士兵雕像；不是L34入口標語照。原圖 https://kinmen.travel/attractions/20794/1024x768_attractions-image-elxkn1u8yko3o61oxxkqoa.jpg，來源1526；GUI點第一張照片後讀可見image src，確為20794同檔1024及1920尺寸，圖說「營區L-36據點外的士兵雕像」。照片/metadata/credits無改動。不造相冊，不新增Maps/新聞照片。

## 直接官方來源（2026-11-05 UTC）

[1526觀光頁](https://kinmen.travel/zh-tw/travel/attraction/1526)：web動態初讀殼，後由實作者GUI直接讀全頁，更新2025-05-29，頁首及全週均08:30–17，免費、電話082-364411，地址北環道貓公石海灘旁、建議1小時；該頁不列停車/廁所/無障礙服務欄。文字列士兵雕像、寢室彈藥庫、十射口與海岸地形。不將頁首開放中當當日實地保證；30–45分鐘為既有編輯建議。

[KMNP據點32](https://www.kmnp.gov.tw/ch/touristInfo/recreation-sites/32)：從官方據點列表點入確認L-036，直接全文讀營舍、十射口、瞭望台及海岸配置。初試24實為庫北營區，已排除，未寫入頁面來源。

[2010-07-28整建啟用](https://www.kmdn.gov.tw/1117/1271/1272/184544?cprint=pt)與[2025九宮工程公告1212](https://www.kmnp.gov.tw/ch/titlelist/latest-news/1212)直接讀，分別支撐金管處歷史接手整建與本處遊憩公告角色；2025列紅土溝三不受當次九宮工程影響，不保證今天每段可入。現行完整日常權管、產權及委外仍待核，管理名純文字，CTA明標2025施工範圍公告。

[同點多媒體資料](https://media.taiwan.net.tw/zh-tw/portal/travel/details/attraction_371020000a_001526)直接讀更新2025-05-29，坐標24.44955,118.23829；營運時間/單位/停車設施欄空，Open/public屬目錄字段。經獨立審查，原始資料 IsAccessibleForFree 為 null、FeeInfo 為空；無法支持「需入場相關費用」。觀光網歷史頁列免費，現行費用需另核。

[官方近站頁](https://www.kinmen.travel/zh-tw/nearby/ebus?placeId=1526&type=Attractions)直接讀：湖井頭戰史館881 G線、湖井頭及東坑8821/Y9，網站自註僅參考、動態另查。列站距離不當實走路徑、直達服務或分鐘數；也不採頁面近站/附近距離推車行路線。

## Google具名POI

實作者2026-11-05約01:50 UTC直接讀繁中GUI卡片：紅土溝三營區(L-36據點)，原址「894金門縣烈嶼鄉」，CID0x34149910d6e41345:0x9266885ef861638b，24.4495535,118.2382886，g/11zj8ystz，Plus Code C6XQ+R8。Google顯示營業中/17時打烊、官網kmnp.gov.tw、不提供無障礙入口，均第三方字段；不是即時營舍/海岸通行或實測無障礙。MD完整direct place URL由GUI而來，詳情各控制、schema和/map共用；Google鎮級原址與官方海灘旁描述分開，非車行入口、不造GPX。

## 授權與未核範圍

[GWOIA](https://kinmen.travel/zh-tw/gwoia)允許來源標示下使用政府資料，仍有特標及第三人權利例外；本頁保留原信用，不假稱釐清個別攝影者或新增授權。現行設施/車位/廁所飲水/無障礙、海岸准入及土地所有權未實地核實；不攀士兵雕像、射口、堡頂/圍欄，不推可下灘/軌條砦/入水。

## 本地驗證與獨立審查

最終pnpm validate PASS：139 files、0 errors/warnings/hints；556頁、48667引用、1884圖片、4109 schema。完整Playwright桌機/手機308 passed（1.3m），本頁兩平台focused均PASS：唯一H1/canonical、H2/H3順序、8FAQ逐字visible/schema parity、原照片信用、同一POI streetAddress/hasMap/coords與map卡、行程加移除自清理、手機無溢出及未改景點導航回歸。全fcce tree範圍核對僅7個授權既存檔（含本批策略及前頁L34），其他集合/圖像metadata不變，PR163唯一CSV行保留。authority獨立來源窄審待結論，不假稱正式站驗收；本地未部署不可VERIFIED。
