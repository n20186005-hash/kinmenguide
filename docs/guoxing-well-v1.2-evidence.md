# 國姓井 v1.2 證據

2026-11-04 UTC核查，Sol實作、authority獨立來源/內容審閱。基底main `15ada61e77796619abd3441ad934d1e188ecad11`，完整879 blob逐一git hash一致，150 overlay為基線非本批diff；AGENTS/skill v1.2/template與已讀版byte相同，最新CSV本頁NOT_STARTED、下一hanshehua-coast，Issue59重取讀。

## 原頁盤點保存

四題「一口井與地方傳說」「以村落尺度慢慢看」「井邊不嬉戲，也不試飲」「附近怎麼安排」及四段內容搬至FAQ後H3，第一/二/四段逐字保留。第三段原「伸手取水」易與官方歡迎汲水文字混淆，最小改為不把手伸入井、汲水當日依允許操作，仍不飲用、不攀井/投物且居民/廟會通行優先。原北風爺、烈嶼文化館、烈嶼指南、兩天路線連結保留，related一日路線亦可見保留。原無FAQ，新8題可見/frontmatter/FAQPage同源。

原 `place-guoxing-well` 實圖、alt、觀光處署名、政府網站資料開放宣告/source/original不變，照片庫及PHOTO-CREDITS無改動，不增空相冊。原泛化劃設車位、軍事入口及漁港提示無本井來源，改專用車位未核/不得占住戶工作出入口。

## Google具名POI

實作者繁中GUI查「國姓井 烈嶼」得具名國姓井，原地址 `894金門縣烈嶼鄉`，CID `0x3414993bfdf73bfd:0x6cb9f29a11399678`，24.438449,118.235141，GID1tzgg893，PlusCodeC6QP+93，官方433外鏈、Google電話082-364405及24h/無障礙入口標籤。電話及可達性不據以認定管理或實測無障礙。

[同名烈嶼POI](https://www.google.com/maps/place/%E5%9C%8B%E5%A7%93%E4%BA%95/@24.438449,118.235141,922m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3414993bfdf73bfd:0x6cb9f29a11399678!8m2!3d24.438449!4d118.235141!16s%2Fg%2F1tzgg893?hl=zh-TW)統一所有導航/hasMap及/map；官方下田、九井路真武廟旁另列locationDescription，不增造Google門牌，不拿台中劍井或二膽萬人井史料替代。井點非停車場、廟內入口或設備操作授權。

## 官方來源與未知界線

[官方433](https://kinmen.travel/zh-tw/travel/attraction/433)實作者GUI全文直接讀2025-05-12更新、每日00–23:59/免費、0.5小時建議、地址九井路旁真武廟旁、daddr24.43845,118.23514。正文有鄭成功指劍開井敘事並歡迎遊客汲水使用，圖說明標相傳；只作地方傳說，不當已考證年代/開鑿過程，也不將甘泉傳說或汲水使用敘述當近期飲用檢測/操作保證。未查到水質合格/可直接飲用證據，保留不試飲與現地操作確認。

[鄉公所景點介紹](https://lieyu.kinmen.gov.tw/cp.aspx?n=A6FA73ACEAA04439)primary搜尋可讀相傳、劍井別稱與于右任題字；實作者直接webopen逾時，未假稱自讀全文。不因鄉公所發布、廟旁地點或Google電話推公所/廟方現任管理、產權及設備管養，完整權責待核。題字細節未為擴篇新增。

[官方近站查詢](https://www.kinmen.travel/zh-tw/nearby/ebus?placeId=433&type=Attractions)實作者web工具無法讀；只作查詢入口並另鏈[縣府動態](https://ebus.kinmen.gov.tw/)，未刊無法核實班次/站距/步行分鐘。官方433未列本井停車、廁所、遮雨或無障礙欄位，均待核，不把鄰廟/村落設施套用。24h/free只作2025一般條目，不保夜間照明、周邊私人範圍或活動/參拜規則。

## 原照片

官方433 DOM親讀已載入 `https://kinmen.travel/attractions/1791/1024x768_image_636361775180932962.jpg`，與photos.json original完全一致（另有1920尺寸），保留原圖不換他處古井。[GWOIA](https://kinmen.travel/zh-tw/gwoia)一般機關素材可重製改作需出處，特別聲明及第三人權利例外仍適用，未推定個別攝影者或全權利清查，原署名/裁切WebP聲明保持。

## 驗證

本地完成2026-11-04 14:50:25 UTC。pnpm validate通過0 errors/warnings/hints，556頁、48,635 internal references、1,884 images、4,106 schema nodes。完整桌機手機302 passed（1.3m），含本頁單H1/順序、4原題、照片/署名、canonical、8FAQ可見/frontmatter/FAQPage逐字一致、同Google原址/CID/coords/hasMap/詳頁及/map導航、汲水與水質區分、行程加入後移除自身項、手機無溢出。

remote完整blob scope只有本MD、pilot registry、CSV3既有檔，加本測試及證據共5檔。registry其他區塊與CSV其他列完全一致，照片庫/credit/二進位及非景點集合無差異。原4題及第1/2/4段逐字保留，第3段僅取水/飲水界線修正，原連結保留。git diff --check通過。另實作者直接view本地原圖為八角井口，與官方圖池同資產，未更圖。

CSV AWAITING_LIVE_CHECK，未正式站驗收，不提交推送，下一hanshehua-coast。

獨立authority最終確認同Maps原址/CID/coords及八角井口照片一致，官方汲水歸因與操作/飲用界線合理、現行管理未知無阻斷。另縣環保局一般井水FAQ不是國姓井專屬檢測，未把縣內總體數字或不合格結論套入本井，維持未查到本井近期飲用檢測的限定。
