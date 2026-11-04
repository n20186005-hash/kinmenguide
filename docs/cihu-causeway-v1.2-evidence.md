# 慈湖慈堤 v1.2 證據與交接

資料核對2026-11-03，完成時刻以UTC另記。Sol實作；authority/Luna獨立官方研究、Maps繁中GUI及草稿審閱。未commit/push，尚未production驗收。

## 基線與原內容

獨立 `work/cihu-ready` 由42f53d3加GitHub actual main `2f6bf2ae4c68bc04997a867d65ce529ed48d3b85` 的78個變更覆蓋，833個遠端blob逐項Git hash相同。managed worktree不支援巢狀repo，沿用既有授權CLI fallback。覆蓋為歷次基線，不算本批。

原3個H2「認識慈湖慈堤」「參觀時留意」「怎麼安排」全轉H3放FAQ後；三段實質內容、原Google短鏈、金寧分區連結、原sources508/4479與Maps、related慈湖三角堡保留。title/nameEn/seoTitle/area/tag/duration/order不變；description與原第一段的可停留敘述加上當日允許通行及有安全停留處的條件，避免首屏保證當期可達。原1969年戰略築堤、湖內海外、軌條砦、平台整修、賞鳥不餵食追逐、風日照提醒逐字保留；新段另分清封閉範圍及預計重開的限制。原無FAQ，新增8題由同一組資料生成frontmatter/details。原無image/專屬photo credit，維持無圖，不借相鄰慈湖三角堡照片、新聞圖或地圖用戶圖，不輸出空相冊。

## Google Maps與地址分欄

實作者直接開原短鏈 https://maps.app.goo.gl/XEQyhdcK9TMB15uKA ，redirect至具名「慈湖慈堤」，CID `0x3414a2e555555555:0xb428daa94fd14797`，POI 24.463408,118.3005492，g/1tfvqld_。英語GUI地址只892，切hl=zh-TW後繁中原址仍 **892**；authority獨立繁中GUI同值、PlusCode F872+96 古寧村。不能補造鄉鎮、街路、門牌，也不以PlusCode替換原址。

解析原URL例：https://www.google.com/maps/place/%E6%85%88%E6%B9%96%E6%85%88%E5%A0%A4/@24.4642419,118.2975382,922m/data=!3m1!1e3!4m6!3m5!1s0x3414a2e555555555:0xb428daa94fd14797!8m2!3d24.463408!4d118.3005492!16s%2Fg%2F1tfvqld_?hl=zh-TW 。@視窗中心不是POI座標，本站採3d/4d實際點。頁面CTA、兩個路線鏈、原正文短鏈、全站/map、schema.hasMap均保留核實短鏈，schema.streetAddress原文892；官方金寧鄉慈湖地理說明另列locationDescription。地標不等於全線步行軌跡、停車位置、平台入口或所有道路通行許可，無實測GPX。

## 官方來源與時效

- https://kinmen.travel/zh-tw/travel/attraction/508 ：實作者Chrome GUI直接讀到慈湖，更新 **2025-05-08**，列全天、免費、停車場；交通為光前路接慈湖路一段，以及金城9路往古寧、慈湖觀景台下。正文1969築堤、內湖外海、軌條砦、10–3月候鳥。web extraction只有JS殼，未拿殼聲稱內容；GUI實讀資訊已明示早於2026平台施工，不當作今日可入、固定班次或所有設施開放。一般景點停車欄非當日可用車位保證，交通查 https://ebus.kinmen.gov.tw/ ，不導遊客穿工區。官方旅遊點24.46897,118.30675屬慈湖廣域，不替換Google慈堤點。鳥數/夕陽時刻未作保證。
- https://www.kmnp.gov.tw/ch/titlelist/latest-news/4494 ：實作者由官方最新消息清單實際點開；標題平台自115年8月17日起整修暫停開放，正文施工安全/勿進封閉區、列工程詢問082-313154/082-313127，並說周邊景點在公告時仍營運。支持金管處的**平台維護整修與施工場域**角色，不外推整條慈堤道路鋪面、湖岸、海岸或產權。CTA專用「查看落日觀海平台整修公告」，不把施工資訊泛標產權資料。
- https://kinmen.travel/zh-tw/news/details/4479 ：更新2026-08-20，重述平台2026-08-17封閉、僅預計11月中旬完成。實作者及authority均讀；沒有後續完工/重開證據。保留原來源旁證，**不把預定日期當已重開**，不把平台封閉寫成整條道路全封。
- https://www.kmnp.gov.tw/ch/roadinfo/trail-information/13 ：兩方直接讀「古寧頭區慈湖賞景步道」，範圍含慈湖三角堡至慈堤及慈湖賞島步道，述東湖西潮間帶與冬季賞鳥。本文承認官方步道系統，不因道路風險措辭說完全沒有步道；該介紹不保證今日每段開放/連續無障礙，也非道路養護產權清冊。
- https://www.kmnp.gov.tw/ch/titlelist/latest-news/3805 ：2025-12-24金管處與多社區/團體清潔合作備忘錄，列慈堤海灘、慈湖湖灘等區域，支持環境維護協作；非整條道路路面養護、全湖產權或今日清潔完成證明。已納sources、人文段、FAQ及pilot說明。

## 尚未核實

平台整修完成/重開、當日交通管制、停靠/車位、全段步行與護欄/照明、連續無障礙、公廁、道路路面養護、整條道路/湖岸/海岸的逐段權管及產權均未完全核實。金管處平台工程、官方步道介紹、湖海灘清潔MOU分範圍揭露，不等同全區單一管理人。一般全天免費從2025官方慈湖資訊歸因，不推封閉平台可入、夜間安全、全線人車通行、下水或採集許可。

## 實作與交接範圍

5檔：target MD、pilot registry opt-in、focused test、此evidence、CSV唯一target列。沒有shared renderer/config更動，不改慈湖三角堡、其他景點或非景點collections。原圖狀態及授權不變，原三段除上述首段條件式窄修外全文與連結完整保留。CSV AWAITING_LIVE_CHECK、PR/commit/deployed空白，下一slug依CSV為 `cihu-triangle-fortress`。Luna審閱建議加508資訊日期與地址原文字義，已修；其後補13與3805來源精確揭露，測試結果下記。未正式驗收不標VERIFIED。

Luna最終條件版獨立審閱無事實阻斷：確認原址/短鏈/座標一致，平台公告與道路、步道及清潔合作各範圍分開，首屏限定當日通行，原專題與無圖狀態保留。首輪驗證通過後為採納此最後條件句而中斷剛起跑的suite；最終版重做validate通過，browser首次重啟因已中斷程序遺留本任務4363 preview占用而未開始，辨認該孤兒程序並關閉後重新全套測試。這些未完成輪次不當通過證據。

## 最終本地驗證

完成記錄2026-11-04T02:46:48Z UTC。最終 `pnpm validate` 通過：0 errors、0 warnings、0 hints；556頁、內鏈/canonical/schema/圖片及既有其他collections稽核全通過。完整 `pnpm test:browser` **256 passed（60.0s）**，desktop1440×1000及iPhone13/mobile。新增focused涵蓋唯一H1/canonical、H2次序/原3H3、無虛構圖及空相冊、平台管理範圍/來源及正確CTA文字、8FAQ HTML/frontmatter/JSON-LD逐字同序、原址892與精確POI坐標/hasMap、詳頁三處及/map同短鏈、只增加再移除測試自身行程、手機無水平溢出。

相對actual main只3個既有檔（MD/registry/CSV）及2個新增檔（test/evidence）；其他registry條目、CSV列、全部其他content collections逐項不變。舊3段除首段已記錄的通行條件窄修外全文及連結逐字保留。git diff --check通過；臨時preview config、node_modules symlink及work scratch清除。未commit/push，production仍待父代理PR/CI及獨立驗收，不標VERIFIED。
