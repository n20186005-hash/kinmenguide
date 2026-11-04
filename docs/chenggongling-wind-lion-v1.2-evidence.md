# 成功嶺風獅爺 v1.2 證據

公開資料核對日期2026-11-03；實際執行時刻另以UTC記錄。Sol實作，authority/Luna獨立官方研究、Google GUI與內容審閱。未提交、未推送，production未驗收。

## 基線與舊文清點

獨立 `work/chenggongling-ready` 由42f53d3覆蓋GitHub actual main `9cafd5aa2260dcbf824453375be94cad46608e25` 的72個變更，全部829個blob逐項Git hash一致。managed worktree對巢狀repository有限制，依既有授權沿用CLI fallback。覆蓋為基線，不把歷次景點改動列本批。

原三個H2「這裡值得看什麼」「怎麼安排參觀」「把下一站排在附近」改H3置於FAQ後，三段全文實質保留。唯一窄修將舊句「只在成功海灘行程中依公共道路順看」改為現場有安全、合法且允許停留公共位置才遠觀，不能確認則略過，避免未證路側可見/可停留；不變其私人院落限制。原村落石獅、沙灘、金湖分區連結與縣府來源保留，title/nameEn/description/duration/order及行程收藏保留。原無FAQ，新增8題對應資料與HTML。

原頁無image frontmatter、無專屬photos.json或PHOTO-CREDITS條目；PHOTO-AUDIT明列待補實景與可用授權。保持原無圖狀態，不用村落石獅、縣府新聞圖片或Google用戶圖片填充，不製作空相冊。沒有確認可用照片不等於世上無授權圖片。

## 官方來源與證據界限

https://www.kinmen.gov.tw/News_Content2.aspx?n=98E3CA7358C89100&s=2139A2886ADE4614&sms=BF7D6D478B935644 ：縣府報導上版106-03-24即2017-03-24。實作者web search讀得完整原文，authority另獨立核實；記錄居民返鄉整理住處、命名成功嶺、購置石獅裝在家門口，里長稱私人財產。文章描述當時披風與每日軍歌/升旗，僅屬2017安排，不能推為當期展演、場館營運或公共園區。本文不放大居民姓名、年齡等非必要私人細節。

報導只稱成功海灘附近，未給門牌、CID、坐標或現在照片/營運資料。故不能將Google新點的門牌說成縣府地址，也未能證明當年裝置一直在該點。資料支持歷史私人裝置性質，不是今天產權登記、營業/開放許可或管理契約。現行所有者、管理/清潔維護人、裝置現況、固定開放、費用、車位、公廁、照明、無障礙及實際可合法停留位置均未核實。管理卡/facts/FAQ一致寫待確認，來源連結清楚標歷史紀錄；縣府非由發稿推為管理人。

交通僅提供 https://ebus.kinmen.gov.tw/ 動態查詢；未核實專屬站點、班次或步行路線，不把村落石獅587的成功二站距套到此私人點，不繪GPX或駛入庭院路線。費用未知不等於免費可進；地圖POI不等於通行權。

## Google Maps具名點

實作者與authority均直接繁中Chrome GUI確認「成功嶺風獅爺」，地址原文 **891金門縣金湖鎮瓊徑路891號310之1號**，CID `0x3414a3007aa6f985:0x2cdc9cfbb57b7f9c`，24.44236,118.389498，g/11ntrwy30z。奇特地址格式照原樣，不自行重排、補造成另一門牌。authority指出GUI未提供既定營業時間與網站，不能由景點類目推營運。

直鏈 https://www.google.com/maps/place/%E6%88%90%E5%8A%9F%E5%B6%BA%E9%A2%A8%E7%8D%85%E7%88%BA/@24.44236,118.389498,861m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3414a3007aa6f985:0x2cdc9cfbb57b7f9c!8m2!3d24.44236!4d118.389498!16s%2Fg%2F11ntrwy30z?hl=zh-TW 。詳頁查看位置/兩個路線鏈、/map卡、schema.hasMap共用，schema.streetAddress為原址；coordinates僅示意點，不證入口或裝置持續原地。官方地理描述另置locationDescription。

Google另一個「成功風獅爺」CID `0x3414a300171a0f2d:0xd27716c273f938d8`、24.4372471,118.3895366為南側村落石獅；本批未把其尺寸、祭祀、歷史、照片或站距移用，不改該景點頁。兩地標皆已核實，但不把同名裝置與2017現況建立未證明的精確連續關係。

## 驗證與交接

本批僅五檔：target MD、pilot registry、focused test、此證據與CSV單列；無shared renderer/config改動。原所有其他collection不變，其他registry條目與CSV列須逐項維持actual main。Luna獨立審閱後僅提出公共路側可停留條件窄修，已落稿；其餘無阻斷。

CSV `AWAITING_LIVE_CHECK`，PR/SHA/deployed留空；無論本地測試結果不得記VERIFIED。下一slug依當前CSV為 `chengshi-pavilion`，本子任務不自行啟動。

## 最終本地驗證結果

2026-11-04T01:36:22Z完成記錄。`pnpm validate` 通過：0 errors、0 warnings、0 hints；556頁，內鏈/canonical/schema/圖庫/其他collections稽核全通過。`pnpm test:browser` 全套 **252 passed（57.5s）**，desktop1440×1000與iPhone13/mobile。新增focused test涵蓋唯一H1、canonical、H2次序、舊三H3、無虛構圖/空相冊、管理歷史來源、地址與位置分離、8FAQ HTML/frontmatter/JSON-LD逐字對等、精確Google CID/坐標/hasMap、詳頁三處+全站地圖同POI、只增加再移除測試自身行程、手機無溢出。

相對actual main只有3個既有檔差異（MD/registry/CSV）及2個新增檔（test/evidence）。registry其餘條目、CSV其他列與非景點內容逐項不變。原三段全文除已記錄條件式修正外保持原字。git diff --check通過；臨時config、node_modules symlink與work scratch清除。無commit/push，等待父代理PR/CI及獨立production驗收。
