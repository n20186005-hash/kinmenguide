# 峰上巡檢司 v1.2 證據與交接

查核2026-11-03（America/Los_Angeles），完成時刻另記UTC。Sol實作、authority/Luna獨立來源/Google GUI/照片及稿件審閱；未commit/push、未production驗收。

## 基線及原文

work/fengshang-patrol-ready由42f53d3覆蓋actual GitHub main 5cee47ed1e0a70f9187765221a3a0635851a797a的109變更，853 remote blobs逐項Git hash相符；舊HEAD無remote已刪除卻殘留的tracked路徑。CLI fallback沿用父代理既有授權，覆蓋是基線，不將舊批次內容納入。

原三H2「這裡值得看什麼」「怎麼安排參觀」「把下一站排在附近」及三段保留，轉H3在FAQ後。明代海防/2013整修與非每段原構、坡路勿硬開、私地/據點、雨滑、兩廟links與停留時間原主題完整。第二段僅將「循現場步行指標」「正式動線」改依當日標示確認可通行及當日允許位置，避免未證入口/指標/公眾路權。第一及第三段逐字保留。title/nameEn/SEO/description/aliases/tag/duration/area/order/image/related及原1668來源保留；8FAQ同組生成frontmatter與HTML。

## 官方來源與限制

- https://kinmen.travel/zh-tw/travel/attraction/1668 ：實作者繁中GUI直接讀2025-05-08更新、全天、免費、停車場、建議0.5–1小時、官方金門縣金湖鎮峰上巡檢司；歷史為明代防禦據點，景觀包含2013整修成果。全天/停車場是有日期旅遊資訊，不代表今天夜間照明、車位空位/價格、車行入口或周邊據點均可進；不以近代牆線宣稱每段明代原構或已登錄古蹟。
- https://media.taiwan.net.tw/zh-tw/portal/travel/details/attraction_371020000a_001668 ：直接web讀2025-05-08、同一2013整修介紹、Open/公眾開放；組織、時間、交通、停車、設施欄空。是否免費欄直接讀「需入場相關費用」，收費說明/金額空，與前台免費不同；search快取曾呈空，採本次實際open資料。首屏/facts/FAQ明示欄位差異，不把DB欄當已公告收費或猜實際價。不由發布者推現行管理。
- https://www.kinmen.travel/zh-tw/discover/tour/86 ：官方海岸行程頁更新2026-06-02，說明目前景觀為2013整修後、不是過去樣貌；作近代整建旁證。行程宣傳不是當日逐段通行、夜行、岸際下水或據點准入證明，未採它涉及其他海灘游泳的舊文建議。
- https://www.kinmen.travel/zh-tw/nearby/ebus?placeId=1668&type=Attractions ：實作者繁中GUI讀8站牌，峰上19繞復國墩峰上/回程變體、20繞料羅/不繞西村一走承德路250m，峰上路口473m；頁面免責另查 https://ebus.kinmen.gov.tw/ 。只作站點參考，不說所有19/20皆進村、不當實測入口步行分鐘；未採鄰近宮廟的入口/停車資料。

另搜2026走讀巡檢司活動及歷史整修資料，只證單次活動/過往工程，不推常態解說服務或當期管理；未取得能直接確認現址單一管理、日常維護、產權及委外分工的文件。古代巡檢機關、政府發布者、工程承辦/活動主辦不自動成今日管理單位。管理框明示待核，第二CTA「查看官方巡檢司介紹」不冒稱管理/文資證明；不由搜尋無資料推無管理人。

## Google具名POI與地址

實作者繁中GUI搜尋點開同名「峰上巡檢司」，原址 **891福建省金湖鎮**，CID 0x3414a5cc9c210e27:0x156177cbfb373bfc，24.4274778,118.4600984，g/11sxs9h9hn。GUI回連官方1668，原官方點24.42742,118.46033近合；原址用福建省而非本站自行拼金門縣，照原字保留，官方金門縣金湖鎮峰上另列locationDescription，不杜撰門牌。鄉鎮仍金湖，無跨鄉鎮locality衝突，不需shared schema變動。Google未列時段/電話（顯示新增），不補造成官方即時服務。

直鏈 https://www.google.com/maps/place/%E5%B3%B0%E4%B8%8A%E5%B7%A1%E6%AA%A2%E5%8F%B8/@24.4274778,118.4600984,922m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3414a5cc9c210e27:0x156177cbfb373bfc!8m2!3d24.4274778!4d118.4600984!16s%2Fg%2F11sxs9h9hn?hl=zh-TW 。詳頁三導航、/map與hasMap同鏈，streetAddress原字一致，不用座標搜尋替代；無實測GPX。點位不是坡路、碼頭、海岸及營區/私地全部准入證明；照片觀海亭也不另造未核POI。

## 照片保留與待核

place-fengshang-patrol-fort原圖、alt、photos.json/PHOTO-CREDITS金門縣政府觀光處、政府網站資料開放宣告、縮放轉WebP/裁切註記保留。官方 https://kinmen.travel/attractions/20761/1024x768_attractions-image-6iwp5ywdh0onli51ziq36a.jpg 與本地JPG均111291bytes，SHA256 c68276946dde0827854257689aac4cf7f82b1ada854a20ebee261daebd3caa0c。實作者視覺核新整建城門、左右階梯、牆垛、亭台、植被及遠海；不證明每項明代原構或今天可登。https://kinmen.travel/zh-tw/gwoia 對縣府來源素材可再用並署出處，第三人權利與個別特別聲明例外仍成立，未見此圖限制標記；不新採IG/Maps用戶圖，不稱已查明個別攝影師，不複製主圖製空相冊。

未核現行管理/維護/產權/委外、當日各段通行、費用實際安排、停車位置/空位/收費、無障礙/公廁/飲水/照明。海風雨滑、城牆高差，僅在現場允許且可安全停留處觀察，不攀垛口/跨欄/闖未開放據點或私地；公園/岸際/兩廟各別確認。

## 本地驗證

Frozen revision: pnpm validate passed, 0 errors/0 warnings/0 hints; 556 pages, 48,520 internal references, 1,884 images and 4,095 schema nodes verified. Complete desktop 1440x1000 and iPhone13 mobile browser suite **276 passed (1.1m)**. Focused checks cover unique H1/canonical, ten ordered H2 sections and three original H3 topics, original photo attribution/no empty gallery, management uncertainty and accurately labeled source CTA, 2013 rebuilding vs ancient fabric, qualified fee discrepancy, eight exact FAQ answers across data/HTML/JSON-LD, unusual raw Google address/CID/coordinates/hasMap and three detail navigation plus /map, test-only trip add/remove, and mobile overflow.

Only three existing files differ from actual main (target MD, registry and target CSV row), plus two additions (focused test and this evidence). Removing this registry block reproduces baseline exactly; all other CSV rows and remote blobs match. Original paragraphs remain except the two documented access-condition clauses; no non-attraction collection changes. git diff --check passed. Temporary config, node_modules symlink and work scratch removed. No commit or push.CSV AWAITING_LIVE_CHECK，PR/commit/deploy空白，不標VERIFIED；下一slug由CSV為fengshang-tianhou-temple。

Independent GUI cross-check: authority/Luna confirmed the same named POI, exact unusual address, CID and coordinates. Their multimedia GUI rendered fee fields empty, whereas implementer direct web-open rendered the charge-related field; this additional presentation variance is documented rather than converted into a price claim. Implementer tourism-front-page GUI distinctly showed free admission, all-day, parking and 0.5-1 hour (not the blank multimedia operational fields). Both sources remain dated, with current arrangements unverified.

Before freezing, Luna recommended qualifying the fee discrepancy as different renderings/cached versions of the same multimedia URL, not a stable permanent field value. The admission fact, visible and structured FAQ answer, registry summary and final reminder were updated together to state the charge-related rendering vs empty rendering and absence of an amount. Other content had no blockers.

Final checks recorded at 2026-11-04T07:00:08Z (UTC).
