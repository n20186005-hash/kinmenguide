# 東林海濱公園 v1.2 證據與交接

資料查核2026-11-03（使用者America/Los_Angeles）；結束時刻另記UTC。Sol實作、authority/Luna獨立官方/Google GUI/圖片與稿件審閱；未commit/push、未production驗收。

## 基線與原文盤點

work/donglin-seaside-ready從42f53d3套actual main 421cc0761d42ee2c6f5f0addfcdf1f178efe3371的93變更，843 remote blobs逐項Git hash相符。CLI fallback沿用父代理既有授權，覆蓋為基線，不將歷次成果納本批。

原四H2「從聚落走到海岸」「和習山湖怎麼選」「在岸上欣賞海景」「附近怎麼安排」均保留轉H3置FAQ後。四段內容及連結完整保留，僅將造型明確歸因官方介紹，林蔭/步道當日開放條件化，不把舊介紹當當期設施保證。東林與青岐區別、海岸不等於救生泳區、習山湖不同園區、親子/風浪/雨滑主題未刪。原title/nameEn/seoTitle/description/aliases/tag/duration/order/featured/image及related保持；原習山湖、東井、烈嶼分區/兩天行程links保留，另增既有related中的烈嶼一日行程可見鏈。原無FAQ，新增8組同一組資料生成HTML與frontmatter。

## 官方與使用邊界

- https://kinmen.travel/zh-tw/travel/attraction/481 ：實作者繁中GUI直接讀2024-06-17更新、每日00:00–23:59、免費、停車場、082-362500、東林村、建議1小時。介紹雕塑廣場/海豚鱟鳥類造型、森林活動與觀景空間。這是有日期旅遊介紹，不是今天園內每件設施可用、全線可達、夜間照明、無障礙或海域開放證明。圖標僅列停車場，不能擴成今天位置/空位/價格保證；鄉公所一般電話不作公園駐點或救生電話。web直接open只取得JS殼，因此改用GUI讀正文。
- https://lieyu.kinmen.gov.tw/travel/cp.aspx?n=D633BAA019C40BE8 ：2019-10-19鄉公所旅遊介紹（頁腳更新非內容新調查），記2001整建、東林聚落東南/羅厝漁港南邊、動物雕塑、觀景休憩、親子和體能區。現行每項設施/維護狀態不能由舊列表推定。公所發布介紹不直接等於整園當期管理/所有權。
- 【歷史費用讀取已被2026-11-05直接JSON取代，不再代表現值】https://media.taiwan.net.tw/en-us/portal/travel/details/attraction_371020000a_000481 ：當時web讀2024-06-17T09:09:04+08:00、官方點24.42508/118.25177、東林村、Open/公眾開放；組織/單位、營運時間、交通、停車、提供設施欄空白。是否免費入場欄明列「需入場相關費用」，但收費說明無金額，與觀光網前台免費不同。頁面/FAQ明列欄位差異，不把DB欄當已公告收費、不自行選定實際價格。類型國家公園類也不能推管理機關。描述「乾淨無污染」不是當期水質檢驗，不援引為可游泳/無污染保證。
- https://www.kinmen.travel/zh-tw/nearby/ebus?placeId=481&type=Attractions ：實作者primary web讀東林尾36山烈線往山外223m、東林422m、學生Y9等，頁面免責另查動態。只寫36參考及 https://ebus.kinmen.gov.tw/ 查方向/班次/營運日；學生專車不當普通班。站距不是實測入口步行路線或分鐘。
- https://www.kinmen.gov.tw/News_Content2.aspx?n=98E3CA7358C89100&s=35D851AD66C172AC&sms=BF7D6D478B935644 ：縣府過往淨灘報導，習山湖遊具/戲水池是東林公園旁的不同場域；鄉公所號召淨灘不代表現行整園/海域權管證明。沒有把習山湖設施複製到此頁，也沒有改習山湖頁。
- 搜得舊水域安全值勤/2018年資料、2023廁所改善工程和更早健走清單；均非當期救生或設施已開放證據，不推今天可用。舊健走PDF含跳下觀景台敘述，本頁不採此行為建議。無查到可直接確認當期整園管理/維護單位、海岸全段通行、泳區/救生/水質的新證據，明記待核，不將搜尋不到當不存在。

## Google具名POI

實作者直接繁中GUI、Luna獨立核同一「東林海濱公園」，地址原文 **894金門縣烈嶼鄉**，CID 0x34149929f0fc8bf7:0xcf992f35615fff20，24.425083,118.2517665，g/11xcyk43z，Plus Code C7G2+2P。GUI連回官方481，坐標與官方點吻合，非青岐南岸/雙口公園。Google24h僅第三方列表，不當海岸無限制開放。官方東林村與羅厝南側另列locationDescription，不拼Google門牌。

直鏈 https://www.google.com/maps/place/%E6%9D%B1%E6%9E%97%E6%B5%B7%E6%BF%B1%E5%85%AC%E5%9C%92/@24.425083,118.2517665,922m/data=!3m2!1e3!4b1!4m6!3m5!1s0x34149929f0fc8bf7:0xcf992f35615fff20!8m2!3d24.425083!4d118.2517665!16s%2Fg%2F11xcyk43z?hl=zh-TW 。詳頁三導航、/map、schema.hasMap同URL；streetAddress同GUI原字，導航非車行沙灘或下水許可，無實測GPX。官方周邊清單東井36m與兩POI實際坐標約350m顯有差異，未採該清單距離作步行路線或時間。

## 照片與未確認

place-donglin-seaside-park及既有photos.json/PHOTO-CREDITS觀光處/政府網站資料開放宣告、alt與轉WebP/縮放裁切註記不變。原圖 https://kinmen.travel/attractions/33579/1024x768_attractions-image-ib-gyqxi0e-3_uwhfu5s6q.jpg 與本地JPG皆62570bytes，SHA256 d866005a93a5921a05763ceb75dc74828df1a004ff8e8b117706d07739e12e27。實作者視覺核沙灘兩人、海面與防波堤；不是今日可涉水或水質證據。https://kinmen.travel/zh-tw/gwoia 對縣府來源材料可再利用並署名，個別特標及第三人權利例外仍成立；未發現原圖特別限制，不新採IG/Maps圖片，不稱已查明個別攝影師，不重複主圖製空相冊。

現行整園管理/日常維護/產權/委外、當日遊具/觀景設施、公廁與連續無障礙、夜間照明、停車位置空位收費、海岸全段通行、開放泳區/救生值勤/水質待確認；公園、習山湖及海域各別，不由舊頁/觀光分類/活動承辦推整域管轄或下水許可。

Luna獨立終稿審閱確認：Maps、來源日期、管理未知、習山湖與海域分別、費用差異及原照片署名均無內容阻斷。曾指出registry首屏單說免費會忽略欄位差異，已改為「官方費用欄位不一致」後重跑validate與完整suite，不沿用修改前測試當最終結果。

## Final local validation

After the status-summary correction, pnpm validate passed with 0 errors, 0 warnings and 0 hints: 556 pages, 48,464 internal references, 1,884 images and 4,090 schema nodes verified. Full desktop (1440x1000) and mobile (iPhone13) browser suite: **266 passed (59.1s)**. Focused checks cover H1/canonical, ten H2 sections and four preserved legacy H3 topics, original photo credit and no empty gallery, management uncertainty and correctly labeled source CTA, no inferred swimming/lifeguard access, all eight FAQ answers exactly equal in frontmatter/visible HTML/JSON-LD, exact Google address/CID/coordinates/hasMap, three detail navigation links and /map identity, trip add/remove of only the test item, and mobile overflow.

Only three existing files differ from actual main: attraction MD, explicit registry entry and target CSV row; two new files are the focused test and this evidence. Removing the new registry block exactly reproduces baseline. All other CSV rows and remote blobs match; no other content collection changed. Original paragraphs remain except the three documented attribution/conditional edits. git diff --check passed. Temporary config, node_modules symlink and work scratch removed. No commit or push.

CSV AWAITING_LIVE_CHECK; PR/commit/deployment remain blank, not VERIFIED. Next slug from CSV: dongshawei-wind-lion.

Final checks recorded at 2026-11-04T04:53:35Z (UTC).


## 2026-11-05 費用及摘要補正
- 本輪約15:45 UTC直接curl下載 https://media.taiwan.net.tw/zh-tw/portal/travel/json/attraction_371020000a_000481 ，`/tmp/donglin-current-json.json`：UpdateTime=2024-06-17T09:09:04+08:00，IsAccessibleForFree=null、FeeInfo=""、Organizations=[]、Facilities=[]。與觀光網2024-06-17免費分源呈現；空值不證免費或收費。前文「需入場相關費用」及當前欄位衝突結論撤回，舊快取不作現值。
- description改2019/2024來源介紹，設施今日可用不保證、散步活動須當日明確允許，海域另核。FAQ/可見HTML/schema、registry費用facts與首屏、專項同步；原圖授權四主題及已核Google點保留。
- 未確認整園現管、當期救生或海域准入，不用2019巡查、2021燈展、2026健走補造現況；AWAITING_SOURCE_CHECK維持，不改CSV/進度，不提交部署。

最終驗證：validate通過（`/tmp/donglin-fee-validate.log`）；4347隔離、CI=1桌面/手機專項2項通過，1.7秒（`/tmp/donglin-fee-browser.log`）。臨時配置移除，交付後凍結。

## 2026-11-05 follow-up validation

The earlier fee-conflict reading is historical and superseded by the directly read JSON null/empty fields; the tourism-page free field remains separately attributed. Independent QA verified the fields and water-access boundaries. Focused desktop/mobile: 2 passed; complete regression: 552 passed. Current management, water services and access remain unresolved; AWAITING_SOURCE_CHECK remains. No deployment.

## 2026-11-05 object-specific historical engineering duties
Chrome directly read https://www.webebook.com.tw/Ebook/kinmen/files/basic-html/page375.html : publisher 金門縣烈嶼鄉公所, publication115年9月 (2026-09), printing/design晴揚廣告. The host is outsourced ebook hosting; publisher identity comes from the book's colophon, not hostname.
Chrome directly read https://www.webebook.com.tw/Ebook/kinmen/files/basic-html/page368.html and visually inspected its page: item87 烈嶼鄉東林濱海公園環境改善工程 actual completion112.07.12 (2023-07-12); item91 金門縣烈嶼鄉112年度東林海濱公園公廁改善工程 actual completion112.10.25 (2023-10-25). These are publication-retrospective object-specific township engineering roles, not2026 completion dates or assertions of current whole-park maintenance, title, safety, lifeguards or facility state. This supersedes treating all official evidence as only tourism publishing/cleanup; whole-site current responsibilities remain unconfirmed.
Environment Ministry PDF https://esms.moenv.gov.tw/FastDownload/0e87c31c-4f2b-4d57-817b-0ffb0dd355af independently lists item85 of the2023 toilet project. Its table has no executing-agency column, so township role is supported by its own publication, not inferred from this table or third-party tender index112T02. Govt original procurement notice not independently obtained.
Sources/FAQ/HTML-schema and registry/about/facts synchronized. Original government photo/metadata, four topics and links retained; no status/CSV/progress edits.

Historical engineering-role patch validation: validate passed (`/tmp/donglin-historic-role-validate.log`); isolated4347 desktop/mobile focused tests 2 passed (1.2s), `/tmp/donglin-historic-role-browser.log`. Initial focused run found outdated no-whole-park inference wording assertion, updated to equivalent bounded historical-role limitation then passed against unchanged valid build. Temporary config removed; source frozen for independent QA/full regression.

## 2026-11-05 bounded local acceptance

Earlier pending-status references are historical. Township September 2026 official publication records 2023 environmental and restroom projects; does not prove present whole-park management, ownership, facility status, swimming or rescue service. Daily safety and access remain unconfirmed. Independent QA checked publication identity and image. Complete browser regression: 552 passed. No new deployment.
