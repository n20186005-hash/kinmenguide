# 東林東井 v1.2 證據與交接

資料核對2026-11-03（America/Los_Angeles），完成時刻另記UTC。Sol實作、authority/Luna獨立來源/Google GUI與草稿審閱；未commit/push、未production驗收。

## 基線與原內容

獨立work/donglin-well-ready由42f53d3覆蓋actual GitHub main 1803e00ce486a3ae920d570caa8aa06a1eabb4a4的90變更，841 remote blobs逐一Git hash相符。CLI worktree沿用父代理既有授權fallback。覆蓋是基線，不將歷次景點納入本批。

原四主題「方井裡的聚落歷史」「看井體，也看保存方式」「在聚落裡放低音量」「附近怎麼安排」及四段保留、轉H3放FAQ後。僅將巷外停車進入句改為當日合法開放車位與通行範圍確認，避免未證車位/通行權。1204/林彥智、方井、保護設施、不搬罩投物飲水、居民生活、習山湖/東林海濱/烈嶼分區/兩天行程原文與links保留；related烈嶼一日路線亦保留。原標題/英文/SEO/description/tag/order/duration/featured/image不變。新增8FAQ同組生成frontmatter與可見HTML。

## 官方證據及邊界

- https://kinmen.travel/zh-tw/travel/attraction/449 ：實作者主站web讀到JS殼、primary search完整文字，Luna獨立繁中GUI直接確認2024-05-30更新、全天、免費、082-362500、東林段664地號。1204林彥智出資興建、1305大德乙巳重修，2004整建護架玻璃。全天及免費歸因舊旅遊資訊，非今日可通行、開罩或飲水承諾；一般電話不寫成駐井24h服務。
- https://lieyu.kinmen.gov.tw/travel/cp.aspx?n=CD4743B8668515AC ：公所2020-02-14古井介紹，實作者primary search全文可讀、直接open timeout；歷史、方井與紀年補證，不作水質或現場通行證明。
- https://cabkc.kinmen.gov.tw/uploads/files/202508/ebbaa3c0-f653-41bd-a962-4a6c549a260b.pdf ：113年度文資防護中心報告（2025編製，113.01–11.30計畫），表列縣古烈02烈嶼東林宋代東井、開放空間、烈嶼鄉公所管理維護、管維A良好。實作者web因91,703,857bytes超長不能完整開讀，取得直接primary搜尋表行；Luna獨立核表與計畫日期，故頁面明確說該次調查記錄，當期分工/產權/委外未核實。CTA明確「查看文資管理維護紀錄」，非宣稱當期所有權。
- https://tcmb.culture.tw/zh-tw/detail?id=20070926000002&indexCode=BOCH_CountryCulture_11 及 https://cabkc.kinmen.gov.tw/uploads/files/202109/7a845acd-4e8a-4d8a-9aaf-cdcdd3184aef.pdf ：Luna補核縣定古蹟及東林段664地號，登錄不等同產權或周邊私人土地准入。
- https://www.kinmen.gov.tw/News_Content2.aspx?n=98E3CA7358C89100&s=E79542EE9E675E08&sms=BF7D6D478B935644 ：2025-07-06縣府東林社區報導，雙方直接讀到協會引導下遊客有機會體驗汲水。歷史甘甜及民生使用不能當當期水質檢驗；導覽體驗不等於隨時自取、免費、每日開辦、飲水供應或協會產權。沒有當期檢驗/飲用許可或活動排期證據；本頁不飲用、不自行開罩取水，當期引導安排另確認，沒有一概否認曾有引導汲水。
- https://www.kinmen.travel/zh-tw/nearby/ebus?placeId=449&type=Attractions ：官方清單東林36山烈線往山外等、距93m；Y9學生專車不當普通固定班。距離不是實測步行分鐘、無障礙或古井入口保證；另查 https://ebus.kinmen.gov.tw/ 。

## Google具名POI

實作者與Luna各自繁中GUI確認「烈嶼東林宋代東井」，原址欄 **894金門縣烈嶼鄉**，CID 0x341499290140cac5:0xe9464826e400ba23，24.4275032,118.2494496，g/11pzfw0dcz，Plus Code C6HX+2Q。官方24.42752,118.24945吻合。Google亦列24h及鄉公所電話，第三方欄位不推今日運營。評論5號或其他第三方58號不採作Google地址；地號另列locationDescription。

直鏈 https://www.google.com/maps/place/%E7%83%88%E5%B6%BC%E6%9D%B1%E6%9E%97%E5%AE%8B%E4%BB%A3%E6%9D%B1%E4%BA%95/@24.4275032,118.2494496,922m/data=!3m2!1e3!4b1!4m6!3m5!1s0x341499290140cac5:0xe9464826e400ba23!8m2!3d24.4275032!4d118.2494496!16s%2Fg%2F11pzfw0dcz?hl=zh-TW 。詳頁三導航、/map、hasMap同URL；streetAddress保留原字，地標非進住宅/取水許可，無實測GPX。

## 照片與未確認

原place-donglin-east-well圖保留。官方 https://kinmen.travel/attractions/1829/1024x768_image_636361779157655876.jpg 與本地JPG均135423bytes、SHA256 ee0e825c6d1ff6784014509baac628af4ad1739a83e7542c24c7a14690a421c5。實作者視覺核方井、斜玻璃/不鏽鋼護架、東井字牌及聚落背景；既有photos.json/PHOTO-CREDITS觀光處來源、政府網站資料開放宣告、縮放轉WebP裁切標示不變。https://kinmen.travel/zh-tw/gwoia 容許縣府來源材料使用並署名，第三人權利與個別限制例外仍成立，未發現本圖特別限制；不稱已查明個別攝影師，不新採他人圖/不製空相冊。照片非今天水質、護罩或路面證據。

當期水質/飲用許可、取水體驗排期與收費、產權、現行細項分工/委外、專用車位、公廁、飲水、照明、連續無障礙與當日通行範圍未核實。不以歷史甘甜、開放空間分類、Google24h或地圖導航推自由飲用/操作/庭院進入權。文資機關、旅遊發布者、協會導覽與所有權角色分開。

Luna終稿獨立複核：報告日期、Maps、官方舊頁、引導汲水與水質邊界準確，無內容阻斷。建議施工語句條件化；本頁「當日保護設施、施工及活動安排優先」是一般現場安排優先原則，沒有稱本井當前施工，亦未取得當前施工公告。

## 本地驗證與交接

`pnpm validate`通過：0 errors/0 warnings/0 hints，556頁、48,454內鏈、1,884圖片、4,089 schema nodes驗證通過。完整`pnpm test:browser` **264 passed（1.0m）**，desktop1440×1000及iPhone13 mobile；focused核唯一H1/canonical、10個H2順序/4舊H3、照片署名/無空相冊、管理紀錄CTA、引導汲水與不可飲用邊界、8FAQ frontmatter/可見HTML/JSON-LD逐字同序、原址/CID/精確點/hasMap、詳頁三導航與/map同POI、行程加入後移除測試自身項、手機無溢出。

相對actual main僅MD/registry/CSV三既有檔及focused test/此evidence兩新增；registry移除本頁區塊即逐字等於基線，CSV其他行相等，非景點collections沒有改動。原四段除上述停車條件句外全文保留。CSV僅本列AWAITING_LIVE_CHECK，下一slug依CSV為donglin-seaside-park；PR/commit/deployed留空，不標VERIFIED。

Final checks recorded at 2026-11-04T04:27:18Z (UTC).

臨時config、node_modules symlink與work scratch已清除；git diff --check通過，未commit/push。

## 2026-11-05 標籤與安全措辭補正
基本資料標籤改官方管理維護記錄，保留2025編製報告範圍，不擴張為當期分工。原圖、授權及主題不變，CSV與進度不動。

Final combined validation PASS: /tmp/hanshehua-shanhou-validate.log; desktop/mobile three-page focused checks 6 passed (2.8s), /tmp/three-role-browser.log. Earlier two-page checks also passed 4 tests, /tmp/well-taihu3d-browser.log; validate /tmp/well-taihu3d-validate.log. Temporary 4347 configuration removed; source/build frozen. No CSV/status changes, commits or deployment.

## 2026-11-05 bounded local acceptance

Earlier pending-status references are historical. 2025 heritage report records township maintenance for the well; current details, ownership and delegation remain unconfirmed. Do not drink water or open the cover; present guided drawing and public access require confirmation. Independent QA accepted the bounded recorded role and well safety; the large PDF was not independently re-read in this round. Complete browser regression: 552 passed. No new deployment.
