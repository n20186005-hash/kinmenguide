# 湖井頭戰史館 v1.2 本地遷移證據

2026-11-05 UTC。子代理實作，主代理安排獨立QA。已讀AGENTS/relay Skill/template，不改CSV/進度、不提交推送部署；僅本頁MD、registry自身key、新測試與本證據。

## 原文與照片

原四題「認識小金門的戰地生活」「把時間留給展覽」「上午或下午提早到」「附近怎麼安排」放於FAQ後H3；保留戰史/照片書信文物影音/城堡外觀、展覽與觀測天候、與古寧頭不同、電話/無障礙/避免閉館前趕到、所有雙口/紅土溝/烈嶼/兩天順遊連結。原除夕休館句修正為原頁特殊休館提醒、須查當年度公告，不以春節資料推全年。

原圖hujingtou、alt烈嶼湖井頭戰史館的入口與城堡式外觀、Ping an Chang、CC BY-SA 4.0、Commons source/original及WebP裁切聲明保持；未改照片檔或metadata。只有主圖，不設空相冊。

## 官方來源

https://kinmen.travel/zh-tw/travel/attraction/531 ：直接web只有定位點，官方搜尋可讀2026-08-10更新的每日08:30–17:00與免費，與主代理初查一致；作一般資訊，不代表即時開館或特別活動免費。

https://www.kmnp.gov.tw/ch/titlelist/latest-news/4025 ：子代理直接可讀2026年春節特定期間公告，館名列解說員駐點展示館與082-364403。只支持金管處展示服務角色與該節慶安排，沒有套全年固定解說場次；原春節除夕/假期條件清楚隔開一般時間。

https://www.kmnp.gov.tw/ch/titlelist/key-service-facilities/498 ：直接可讀AED管理及據點表，湖井頭戰史館地址金門縣烈嶼鄉西口村湖井頭2-2號、082-364403。這僅是AED設置與館址聯絡證據；AED即日可用、土地所有權、全部維護/委外合約並未核實，未把表中個別AED管理人當館長或場館所有者。

https://www.kinmen.travel/zh-tw/nearby/ebus?placeId=531&type=Attractions ：直接讀timeout，官方搜尋可讀湖井頭戰史館站、G線金門大橋烈嶼線及近站數字。正文只列附近站參考並連縣府動態，不列步行分鐘，不保證直達、當日停靠或連續無障礙。

Google：子代理直接開啟全名Maps搜尋無法取得可讀具名POI。地址另存官方館址描述，googleMapsVerificationPending，無googleMapsUrl/coordinates；原坐標24.4466222,118.2310545僅保存在本證據。沒有schema address/hasMap/geo及/map導航或marker，不偽造Place ID或Google地址。

## 待核

實地現況、當日開館/解說、望遠鏡、AED使用及無障礙/停車現況、土地所有權與個別委託維護合約、Google具名地標及入口未核。金管處公告所列駐點解說角色與上述未知分列，不含混稱所有權已核。

## 驗證

新增tests/attraction-detail-hujingtou.spec.ts驗單H1/canonical、模組次序/4原題、照片信用/無空相冊、6 FAQ逐字HTML/frontmatter/schema一致、管理來源連結與節慶不推全年、無Maps鏈/geo/address/hasMap、/map無本點導航/marker、行程加入移除、手機不溢出。結果下方補記。

實際結果：corepack pnpm validate 通過0 errors/warnings/hints，556 pages、48,722 internal references、1,884 image instances、4,114 schema nodes。CI=1 corepack pnpm test:browser --config playwright.takeover.config.ts tests/attraction-detail-hujingtou.spec.ts：desktop/mobile 2 passed（1.7s），4339已結束。logs：/tmp/hujingtou-validate.log、/tmp/hujingtou-browser.log。待主代理獨立QA與全套回歸，非live驗收，未提交推送。


## 獨立QA收窄管理角色

2026-11-05：AED目錄不能證明整體場館管理。已刪除所有本頁「據點設施管理」判斷；僅保留金管處2026春節公告列本館為解說員駐點展示館，manager來源改4025。產權、日常維修、整體管理分工明列待核；498僅作AED設置與館址電話記錄。上述角色收窄優先於前述已完成版本的描述。測試補驗整體分工待核、不能證明整體管理及來源4025。依主代理要求暫不構建，待完整套件結束後重驗。

收窄管理角色後已重新驗證：corepack pnpm validate 通過0 errors/warnings/hints，556 pages、48,722 internal references、1,884 image instances、4,114 schema nodes；專項desktop/mobile 2 passed（1.6s），含駐點解說來源4025、整體管理分工待核及AED不能證明整體管理斷言。4339測試已結束；最新logs仍為/tmp/hujingtou-validate.log、/tmp/hujingtou-browser.log。
