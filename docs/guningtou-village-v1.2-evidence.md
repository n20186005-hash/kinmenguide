# 古寧頭聚落 v1.2 證據

2026-11-04 UTC查核，Sol實作、authority獨立來源及內容審閱。main `a0813220975e73ff199cea4893dfe6b6eb1cbc40` 完整877 blob逐一重算git hash一致，147 overlay為基線非本批diff。AGENTS/relay skill v1.2/template與已讀版本byte一致；最新CSV本頁NOT_STARTED、下一guoxing-well，Issue59重新取讀。

## 原文/連結/圖片盤點

四個原題「從一座展館走進三個聚落」「巷弄、井與海的關係」「怎麼安排半天」「住在聚落，參觀與入住分開安排」，五段內容移至FAQ後H3。第一、第三段逐字保留；第二段將易誤認同在南山的水尾塔改「雙鯉湖畔的北山水尾塔」，對應官方1820小標，不刪井、海與蚵文化內容；第四及第五段僅將未核公共道路/巷道改當日允許範圍，不把私宅與住宿當展室。原2FAQ問答逐字作新增10FAQ前兩題。

原站內連結包括戰史館、北山古洋樓、雙鯉、北山播音牆、古寧頭一日行程，以及北山背包客棧/YUMI/金寧住宿生活圈全部保留，不改住宿或行程集合；住宿資料不代表現可訂或公眾准入。原2sources保留。原頁沒有image欄或主圖，維持無圖，不借戰史館/單一村落照片冒充整體，不新增空相冊；照片庫及credits無改動。

## 官方直接查核

[觀光1820](https://www.kinmen.travel/zh-tw/travel/attraction/1820)實作者GUI直接讀2025-06-24更新、三村組成、24小時、免費、停車場、1–2小時建議，地址金寧鄉古寧村，daddr24.47564,118.3082。原範圍描述存locationDescription，不當Google原門牌。開放/費用是一般條目，不證每條巷道、夜間照明、私宅、館舍、廟、住宿、海岸或活動全天免費開放；車位位置/費用/空位及三村連續無障礙/廁所配置未核。官方頁電瓶車與春季石蚵季是旅遊介紹，不作當期營運/報名承諾。

[官方近站頁](https://www.kinmen.travel/zh-tw/nearby/ebus?placeId=1820&type=Attractions)直接web讀南山一10/11、北山10及11路不繞南山、雙鯉濕地中心82台灣好行等；頁自稱參考，時刻動態另查。原FAQ10/11保留並追加分支提醒，不把近站里程當三村路程或精確步行入口。nearby頁三眼井362m與景點頁卡片36m也有顯示差異，不用卡片距離導航。

[金管處2025-12-24清潔MOU3805](https://www.kmnp.gov.tw/ch/titlelist/latest-news/3805)直接正文讀古寧頭社區等與金管處合作古寧頭出海口等區域清潔。只能說明特定海灘環境協作，不當全聚落房屋/土地所有權、道路管養或所有館舍的單一管理者證明，亦不賦予遊客下田入宅權。全聚落現行完整權責未取得直接指定，明列待核。CTA明確為清潔紀錄，不誤稱管理契約。

原[金寧戰役史蹟線](https://kinmen.travel/zh-tw/discover/jinning-tour)直接讀14.8公里車道路線和分支，是旅遊路線介紹，不是本次實走GPX或現況全線可走，不能用舊線路推薦進當期施工平台/軍事區；未將其長度當本聚落步行里程。

## Google定位待核

實作者繁中GUI搜尋「古寧頭聚落」自動落「南山聚落」，原址892金門縣金寧鄉，CID0x3414a2bb19da8df3:0x949b8e7276d90a72，24.4772853,118.3082254，GID1trsvmyr。這是局部村落而非三村整體同名POI，不替代戰史館、北山古洋樓或全聚落。未找到整體同名原地址/POI故使用既有googleMapsVerificationPending守衛：address不輸出schema、無hasMap/Google導航；/map顯示官方位置示意與待核提示。只新增官方示意coords24.47564,118.3082供地理參考，不當入口、停車或通行路線。無共用renderer/config改動，其他已核POI保持原導航。

## 驗證

本地完成2026-11-04 14:16:52 UTC。pnpm validate通過0 errors/warnings/hints，556頁、48,624 internal references、1,884 images、4,105 schema nodes。完整桌機手機300 passed（1.2m），含本頁單H1與順序、4原題/2原FAQ、10FAQ可見/frontmatter/FAQPage逐字一致、無圖/無空相冊、canonical、未核整體POI不輸出address/hasMap/Google導航、官方示意geo及/map待核標示、已核鄰點仍正常、原住宿/行程連結、行程加入後移除自身項、手機無溢出。

完整remote blob比對只有本MD、pilot registry及CSV三個既有追蹤檔，加本測試及證據共5檔。registry其餘區塊與CSV其他列完全不變；無shared/config改動，照片/credits及非景點集合無異動。原4題與2FAQ逐字保留、原連結保留，正文僅上述位置及准入限定句修正。git diff --check通過。

CSV AWAITING_LIVE_CHECK，未正式站驗收，不提交推送。下一guoxing-well。

獨立authority GUI同樣搜尋僅落南山聚落、同CID/原址/座標，確認不足替代三村整體POI；已讀稿及官方1820/3805，管理清潔協作與通行界線無內容阻斷，維持最終稿。
