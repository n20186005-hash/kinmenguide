# 官路邊風獅爺 v1.2 證據

2026-11-04 UTC核查；Sol實作、authority獨立來源及內容複核。GitHub main `201834ec5fbea00e040638de9279f10bb625badd` 完整871個blob逐一重算git hash一致，138個overlay為基線不是本批diff；AGENTS、relay skill及template與已讀版本逐byte相同，最新CSV目標NOT_STARTED，Issue59已取讀。

## 原頁保存

原三題「這裡值得看什麼」「怎麼安排參觀」「把下一站排在附近」移至FAQ後H3，第一段加明確來源歸因、第三段逐字保留。第二段官路邊/官裡分辨保留，未核實的村後公共道路與預設近看改為先確認當日安全明確允許位置，無法確認略過；不穿農地或攀底座。官裡、珠山與金城地區指南原連結、官方581來源保留。原無FAQ，新8題與可見details及FAQPage同源逐字一致。

原圖 `place-guanlubian-wind-lion`、alt、觀光處credit、政府網站資料開放宣告及原資產保留；照片庫/PHOTO-CREDITS不改、不新增空相冊。

## Maps與官方直接核查

實作者Google Maps繁中GUI查具名「官路邊風獅爺」，原地址 `893金門縣金城鎮`，CID `0x3414a20374e68463:0x35a2dabc0516774f`，POI座標24.4118799,118.308421，GID1tfdwgtr，PlusCode C865+Q9。Google列24小時，未列電話/網站；不把第三方字段當即時開放或土地准入證明。導航、schema與/map統一同名place URL，不用官裡點或關鍵字搜尋。

[具名官路邊POI](https://www.google.com/maps/place/%E5%AE%98%E8%B7%AF%E9%82%8A%E9%A2%A8%E7%8D%85%E7%88%BA/@24.4118799,118.308421,922m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3414a20374e68463:0x35a2dabc0516774f!8m2!3d24.4118799!4d118.308421!16s%2Fg%2F1tfdwgtr?hl=zh-TW)

[官方581](https://kinmen.travel/zh-tw/travel/attraction/581)：實作者GUI直接讀更新2018-07-30、全天/開放中，地址賢庵里官路邊村內、村郊後側榕樹下，daddr24.41188,118.30842；另作locationDescription，不將行政位置或樹下當Google門牌/入口/公共通行權。原文早期榕樹及泥塑毀時不可考、2008村民向上后垵聖侯廟求示樣式並以鄉村整建經費委託訂製石雕。這是歷史記載/信仰敘事，不能從經費或村民推目前公所管理、土地所有或日常委外。

官方同頁正文高86cm，照片圖說100cm（且圖說原字「雄師」），不清楚尺寸口徑，不採單一精確高度。[臺灣國際醫療全球資訊網同名旅遊頁](https://www.medicaltravel.org.tw/Scenery-Content.aspx?idstr=C1_371020000A_000581&lang=1)不是商業目錄，實作者及authority直接讀其轉述設計者2005年由公所發包及無早期紀錄，與觀光網2008及早期泥塑記述不同；本文並列歸因、不選邊認定確切年及早期沿革，也不推公所現管。原首段加觀光網歸因，其餘內容保留。官方周邊卡片距離看似極近（例如水頭86m）並未用作步行導航、順路保證或實測距離。

管理維護、產權、准入範圍、費用、車位/空位、廁所飲水遮雨、連續無障礙及夜間照明未取得現行直接證據，明列未核。不把Google評論中穿草地/田野路線當合法通行。公車僅提供[縣府動態](https://ebus.kinmen.gov.tw/)及[581近站查詢](https://www.kinmen.travel/zh-tw/nearby/ebus?placeId=581&type=Attractions)入口，未刊未實走站距、班次或直達保證。

## 原圖及授權

官方581已載入圖片DOM直接讀到 `https://kinmen.travel/attractions/2220/1024x768_image_636361820172855155.jpg`（及1920版本），同photos.json original。保留原觀光處署名及[GWOIA](https://kinmen.travel/zh-tw/gwoia)：機關素材可重製改作需出處，特別聲明、第三人權利及其他智慧財產例外仍適用，不假稱釐清個別攝影者或全權利。沒有新增Google用戶照片、新聞圖或相冊。

## 驗證

最終內容修正後完成時間2026-11-04 11:13:55 UTC。pnpm validate通過，0 errors/warnings/hints；556頁、48,593 internal references、1,884 images、4,104 schema nodes。完整桌機與手機294 passed（1.3m），本頁含單H1及順序、原3題、8FAQ frontmatter/可見/FAQPage逐字一致、主圖與署名、canonical、Google原址/CID/座標/hasMap及/map導航、行程加入後移除自身項、手機無橫向溢出。

以完整remote blob tree比對，既有追蹤檔只改本MD、pilot registry與CSV，新增本頁測試與本證據，共五檔。移除registry新增區塊後與基線完全一致；CSV其餘列不變；原三題及內容保留，首段加來源歸因、第二段條件化通行句，圖片/credit與其他內容集合不變。git diff --check通過。

CSV為AWAITING_LIVE_CHECK，未正式站驗收，不提交推送。下一slug依最新CSV為gugang-tower。

新增政府旅遊來源差異後，再次完整validate及294桌機手機測試全過（1.3m），測試新增年代分歧及不定論字句斷言；authority最終複讀無內容阻斷。
