# 古崗樓 v1.2 證據

2026-11-04 UTC查核；Sol實作、authority獨立來源與內容審閱。基底GitHub main `a6e2c5fb98a15d1f57b66f91ce2566fb7ce91f25`，873個blob逐一重算git hash一致，141個overlay為基線非本批diff。AGENTS/skill v1.2/template與已讀版本逐byte相同；最新CSV本頁NOT_STARTED、下一guningtou-battle-museum，Issue59重新讀取。

## 原內容盤點

原三題「樓閣與湖面，一起看才完整」「2026年秋季參觀提醒」「怎麼與附近景點搭配」及四段內容（含粗體施工提示）保留；首段湖邊步道句收斂為公告一樓展區/庭園，湖邊步道當日另核，避免擴大工程公告開放範圍。原題保留至FAQ後H3。翟山坑道、水頭聚落、金水國小及4499維修公告連結保留；兩個原source均保留。原30–45分鐘為編輯建議。原免費及泛稱劃設車位未取得當期直接依據，收斂成費用未核/2025停車設施有日期且工程可用另核。原無FAQ，新增8題同源輸出HTML details與FAQPage。

原 `gugang` 圖、alt「金門古崗樓的紅色樓閣與傳統屋頂」、Fang Lan Hsu、CC BY 2.0、source/credit不變，不新建相冊。圖片/照片metadata/PHOTO-CREDITS無改動。

## Google具名定位

實作者繁中Maps GUI直接查具名「古崗樓」，地址原文 `893金門縣金城鎮50號`，CID `0x3414a1fbd6eae789:0x68c6ee944924e47e`，座標24.3951902,118.3156788，GID1wyc1z6l，PlusCode98W8+37；連kmnp.gov.tw。當下顯示次日09:00開門，Google舊咖啡/上樓評論與營業字段不是工程期開放依據。

[同具名POI](https://www.google.com/maps/place/%E5%8F%A4%E5%B4%97%E6%A8%93/@24.3951902,118.3156788,922m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3414a1fbd6eae789:0x68c6ee944924e47e!8m2!3d24.3951902!4d118.3156788!16s%2Fg%2F1wyc1z6l?hl=zh-TW)統一詳頁、schema hasMap及/map；Google原門牌與官方小古崗/湖畔位置分欄。原官方daddr24.39427,118.31558不與Google樓點混用，不稱入口、車行停車位置或整湖路線。無實測GPX。

## 官方原始資料及界線

- [金管處原始整修4574](https://www.kmnp.gov.tw/ch/titlelist/latest-news/4574)：自2026-09-22彩繪整修，二樓以上封閉、一樓內展區和庭園仍開放，預計12/15全面開放，專線082-321155。實作者直接讀正文，為建物維護及參觀公告職責依據，不單憑工程推土地/建築產權、承包商、個別賣店經營或整湖權管；本輪未查到實際全面復開確認，預計日未變成已重開。
- 原[觀光處4499](https://kinmen.travel/zh-tw/news/details/4499)，2026-09-22更新、來源金門日報，同案旁證保留；不只引用轉載而漏原始金管處公告。
- [觀光處496](https://kinmen.travel/zh-tw/travel/attraction/496)：實作者GUI直讀2025-05-26更新、每日09–17、公廁、停車場、無障礙廁所及坡道、金城6/6A古崗湖下車步行。只作有日期一般設施/交通參考，不保施工期間完整可用或全樓無障礙，不編造到門分鐘。該頁本次GUI未列門票，故不續寫無根據全範圍免費。
- [國家公園署21167](https://www.taiwan.nps.gov.tw/home/zh-tw/attractions/21167.html)：一般08:30–17、除夕休、電話082-372425；與觀光頁09點及082-313100不同，起始時間並列，施工優先，參訪諮詢採2026原始公告082-321155，不把不同電話拼成單一現行館電話。三層樓/展覽內容背景可讀，不保證工期每項展示可用。
- [公車動態](https://ebus.kinmen.gov.tw/)另核班次方向/分支與回程；未實走工程期站牌至樓路線。未將附近卡片直線數字當步行距離。

## 照片授權

[Commons原檔](https://commons.wikimedia.org/wiki/File:Gugang_Tower.jpg)直接核作者Fang Lan Hsu、2015-10-26拍攝、CC BY 2.0，Flickr來源經2023-08-31機器審核授權。保留署名/授權連結及既有縮放WebP裁切聲明。照片不是2026現貌或施工完成證明，不借官方IG投稿圖片當新圖。

## 驗證

本地完成2026-11-04 11:52:31 UTC。pnpm validate通過0 errors/warnings/hints，556頁、48,603 internal references、1,884 images、4,105 schema nodes。完整桌機手機296 passed（1.3m），包含本頁單H1/順序、原3題、CC照片署名、canonical、8FAQ可見/frontmatter/FAQPage逐字一致、原址與hasMap/coords/詳頁及/map同POI、工程封閉與預計日期、行程加入後移除自身項、手機無溢出。

完整remote blob差異只3既有檔（本MD、registry、CSV），新檔僅本測試及證據，共5檔。原3標題與4段內容保留檢查通過，僅首段步道句按來源範圍最小修正；移除registry本頁區塊後與baseline完全一致；CSV其他列不變；非景點集合與照片metadata/credits均無差異。git diff --check通過。

CSV AWAITING_LIVE_CHECK，未正式站驗收，不提交推送。下一guningtou-battle-museum。

按獨立審閱收斂湖邊步道句後，重新完整validate與296桌機手機套件皆通過；測試新增該當日另核句斷言。

authority已復讀最終湖邊步道限定措辭，經root轉達確認無內容阻斷。
