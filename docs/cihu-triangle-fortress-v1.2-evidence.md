# 慈湖三角堡 v1.2 證據與交接

公開來源核對日期2026-11-03；實際完成UTC時刻另列。Sol實作，authority/Luna獨立官方來源、Maps GUI與草稿審閱。無commit/push，production尚未驗收。

## 基線及原頁清點

獨立 `work/cihu-fortress-ready` 由42f53d3覆蓋GitHub main `359b1b5961df4f30676178f2537ed809dd4a83a1` 的81個變更，835個遠端blob逐項Git hash相同。managed worktree對巢狀repository限制，沿用已授權CLI fallback；這些覆蓋為基線，不計本批差異。

原H2「用形狀理解一座堡壘」「參觀時間與咖啡消費分開看」「春夏看鳥，全年尊重棲地」轉H3置FAQ後；五段全文實質內容保留。舊時間/免費/地址句補觀光頁2025-05-16日期與多媒體費用欄差異，末段平台不能進入改為2026公告/預計完成、未確認重開仍不進封閉區。其餘三角形、哨射口/駐軍、戰車地面界線、春夏鳥況/不近巢放鳥音、冬鳥/夕陽順序等原主題不刪。原湖下海堤、古寧頭戰史館連結、related金門大橋及666/4479來源保留，title/nameEn/seoTitle/description/duration/order/tag/image不變，行程功能保留。

原圖 `place-cihu-triangle-fortress`、alt慈湖三角堡實景、金門縣政府觀光處、政府網站資料開放宣告及credit不變。原圖 https://kinmen.travel/attractions/36429/1024x768_attractions-image-spcnmypuf0mc73jgdsbnsw.jpg 與本地同圖均105711bytes，SHA-256 `70739930b7f8d0c6c2fa3d7d239499fc3a705e55b6ac3f8f0a30b19fcb510843`；實作者視覺核為堡體與戰車/湖岸空拍，非今日狀態保證。authority核圖源與 https://kinmen.travel/zh-tw/gwoia 既有開放宣告一致，例外第三人權利不得泛化；不換圖、不增空相冊、不將圖數推為今日可接近戰車數。

## 官方來源與區別

- https://kinmen.travel/zh-tw/travel/attraction/666 ：兩方直接GUI讀得2025-05-16更新，08:30–17:00、免費、082-313271、地址慈湖路三段200號、公廁/停車場/室內展覽。一般公開資訊非即時開門；觀光頁近距離戰車文案不構成攀爬或入車許可。web extraction部分為JS殼，GUI已實讀。
- https://www.kmnp.gov.tw/ch/touristInfo/recreation-sites/28 ：實作者從官方遊憩據點清單實際點至慈湖三角堡，正文堡體、壕溝、三角瞭望射口、鳥類解說展示。配合官方工程紀錄支持金管處據點保存維護；不推地權。文中舊雷區為歷史背景，不認定今日仍布雷，不讓歷史描寫成現況。
- https://www.taiwan.nps.gov.tw/home/zh-tw/attractions/21163.html ：列一般08:30–17:00、除夕休館、082-313271，為據點一般參觀時段。未把機構整體環教認證頁8–17時數套此館。
- https://www.kinmen.gov.tw/News_Content2.aspx?n=98E3CA7358C89100&s=DFD58728087ED8FB&sms=BF7D6D478B935644 ：2024-01-13報導金管處保存活化三角堡、停車場2023-12-22完工、增車位與公廁等設施。是有日期工程紀錄，無障礙車位不等於堡頂樓梯、海岸完整無障礙，也不保證今日車位/照明狀態。
- https://kinmen.travel/zh-tw/shop/details/2879 ：2026-10-06更新咖啡屋資料，並註明資訊供參考詳洽業者；營業與消費不擴張成整堡開放，現行承租人/契約/範圍未核實。不修改food集合，不直接轉成餐飲推薦或今日營業保證。
- https://kinmen.travel/zh-tw/news/details/3693 ：更新2024-06-11，當年6/10至11/30戰車維修，鳥類繁殖施工限制。**不是2026施工公告**，未取舊計畫當現行全封或已完工可攀爬證據。
- https://www.kmnp.gov.tw/ch/titlelist/latest-news/4494 及保留 https://kinmen.travel/zh-tw/news/details/4479 ：2026鄰近落日觀海平台8/17封閉、僅預計11月中旬完成。公告當時三角堡不受影響，支持兩場域不能混為全關；非今天即時營運保證。平台後續重開仍未核實。
- https://media.taiwan.net.tw/en-us/portal/travel/details/attraction_371020000a_000666 ：2025-05-16同ID資料費用欄列「需入場相關費用」、金額空白，與觀光前台免費不一致；本頁明示欄位差異，不推成新增收費公告，不套用咖啡消費。
- https://www.kinmen.travel/zh-tw/nearby/ebus?placeId=666&type=Attractions ：實作者Chrome GUI直接讀4站參考，慈湖觀景台36路山烈線經金寧往山外88m、三角堡/觀景台82台灣好行古寧頭戰場線90m。頁面自帶時刻另查動態提示，本站不作實測步行分鐘或直接穿工區路線，查 https://ebus.kinmen.gov.tw/ 。web工具不可達不假稱讀成功，GUI已確認。

## Google POI

兩方直接繁中GUI核「慈湖三角堡賞鳥解說站」，原址 **892金門縣金寧鄉**，CID `0x3414987793de5317:0x4962fa302cbe722c`，24.4651361,118.2976201，g/11xc6zsxr。GUI網站明確連666官方景點，支持堡址解說設施匹配；不是把附近同名商家當館舍。

直鏈 https://www.google.com/maps/place/%E6%85%88%E6%B9%96%E4%B8%89%E8%A7%92%E5%A0%A1%E8%B3%9E%E9%B3%A5%E8%A7%A3%E8%AA%AA%E7%AB%99/data=!4m7!3m6!1s0x3414987793de5317:0x4962fa302cbe722c!8m2!3d24.4651361!4d118.2976201!16s%2Fg%2F11xc6zsxr?hl=zh-TW 。原址/schema.streetAddress不補官方200號，另locationDescription列官方地址/Maps別名。詳頁CTA/兩路線鏈、全站地圖、hasMap共享此同一POI，坐標取3d/4d原點，不是視窗中心；不代表每個入口/堡頂或海灘可走。

附近咖啡屋獨立POI「金門慈堤三角堡咖啡屋(不務正Ya野戰咖啡廳)」CID `0x3414987793de5a63:0xc40d30b68e69b5f8`，24.4652025,118.2973155；未用其晚間營業替代公共堡址。Google電話082-313127與國家公園主題網082-313271有差異，本頁採有來源標明的國家公園據點電話，不改寫為咖啡訂位。

## 不確定性與範圍

現行咖啡店承租人/契約、建物土地產權、平台實際重開、當日車位/展示/影像/解說、堡頂與海岸可達及完整無障礙未核實。公園保存維護、私人商業服務、其他設施工區分開揭露。8FAQ與可見details/frontmatter/FAQPage逐字同步，舊3主題5段除來源限縮外保留。管理CTA專用「查看國家公園三角堡據點資料」，不稱此頁可證產權。

本批5檔：target MD、registry opt-in、focused test、此evidence、CSV唯一target列；無shared變動，不改其他景點或非景點collections。CSV AWAITING_LIVE_CHECK，PR/commit/deployed空白，下一slug由CSV為 `daoying-pagoda`。

Luna獨立終稿審閱未見事實阻斷，確認堡址/咖啡屋POI、原圖與來源、平台與堡體、歷史戰車工程及費用欄差異範圍正確。

首完整suite為254通過/4失敗：新增focused桌機/手機誤期待行程頁完整文章長標題，而既有trip catalog穩定短名為「慈湖三角堡」，只修新測試期待；另既有site桌機/手機回歸鎖平台施工完整起日2026年8月17日，新的notice先前只寫2026，已恢復完整起日且保留公告歸因與當日非保證/預計重開未證。未改既有site測試或行程命名行為。最終重新validate+全套結果下記。

## 最終驗證與交接

完成記錄2026-11-04T03:14:31Z UTC。最終 `pnpm validate` 0 errors/0 warnings/0 hints、556頁、既有內鏈/canonical/schema/圖片與其他collection稽核全通過；完整桌機及iPhone13/mobile suite **258 passed（58.4s）**。新focused確認唯一H1、canonical、H2次序/舊3H3、原主圖署名、無空相冊、管理來源及精確CTA、咖啡時段不等整堡開放、8FAQ HTML/frontmatter/JSON-LD逐字同序、精確Google原址/座標/CID/hasMap、三處詳頁地圖鏈與/map一致、只加再刪測試自己的行程、手機無水平溢出。原site平台日期回歸也通過。

actual-main差異僅3個既有檔（target MD/registry/CSV）+2新檔（focused/evidence）。其他registry條目、CSV其他列與非景點內容逐項不變，原3主題5段除已記錄限縮外全文保留。git diff --check通過。臨時preview config、node_modules symlink、work scratch清除，無commit/push。CSV AWAITING_LIVE_CHECK，父代理需PR/CI/部署後獨立live驗收，不將本地通過當已上線。下一slug `daoying-pagoda`。
