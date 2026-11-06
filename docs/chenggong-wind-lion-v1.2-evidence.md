# 成功風獅爺 v1.2 證據與交接

核對日期：2026-11-03；時間記錄以 UTC 為準。Sol 實作，獨立 authority/Luna 官方研究、Maps GUI 與內容審閱；本批未提交、未推送，公開頁尚未驗收。

## 基線與原頁清點

獨立 worktree `work/chenggong-lion-ready` 以本地 42f53d3 加 GitHub main `df9d5e69532ebb0de3ba431002500742fad7c66b` 的67個變更覆蓋；全部827個遠端 blob 逐項以 Git blob SHA-1 校驗相同。managed create_worktree 不接受巢狀 repository，依既有授權使用 CLI fallback。覆蓋本身為基線，不計本批。

原有三個 H2「這裡值得看什麼」「怎麼安排參觀」「把下一站排在附近」，三段全文、陳景蘭洋樓／成功沙灘／金湖分區連結、官方587來源、title/description/nameEn/duration/order/image 均保留。三個標題降 H3置 FAQ 後，僅原參觀段「再沿正式通行動線尋找」收斂為「再依現場開放標示，從允許通行處觀察」，避免未證通行權。原無 FAQ，新增8題；原行程功能保留。未改私人成功嶺或其他景點內容。

原照片 `place-chenggong-wind-lion`、作者金門縣政府觀光處、政府網站資料開放宣告、alt、原圖來源及既有credit不變。官方原圖 https://kinmen.travel/attractions/331/1024x768_330001254.jpg 與本地 `src/assets/photos/place-chenggong-wind-lion.jpg` 皆18494 bytes，SHA-256 `bcba50b40b6b4d516b8192585d82f14489b02b97ab40daca959df1375c8ecab1`；實作者視覺確認為手持彩球彩帶石像。保留 https://kinmen.travel/zh-tw/gwoia 既有開放宣告、第三人/特別聲明例外，不新增圖或重複空相冊。照片不作今日外觀證據。

## 官方與研究來源

- https://kinmen.travel/zh-tw/travel/attraction/587 ：實作者 Chrome GUI直接讀得「全天」、更新2018-07-27；正文載124×44×36公分、彩球彩帶、村落南側石獅、生日與天公生祭祀。這是舊資訊，不以「開放中」動態標籤證今日可通行，不將信仰護海描述寫為自然效果。地址「金門縣金湖鎮成功村陳景蘭洋樓右前側斜坡附近」，官方點24.43718,118.38954與Google具名點鄰近，但不取代導航POI。
- https://crgis.rchss.sinica.edu.tw/assets/intangible/folklore/fsx/KinmenCounty/jinhu/fsx079 ：authority獨立核實田野紀錄列成功村4號前、洋樓右前方、石製與鎮風；不當今日土地/管理/通行證明。實作者web工具返回502，未假稱另讀成功。
- https://www.kinmen.gov.tw/News_Content2.aspx?n=98E3CA7358C89100&s=2139A2886ADE4614&sms=BF7D6D478B935644 ：authority獨立核實2017-03-24縣府說明「成功嶺」是住家門口私人藝術裝置；不是本文村落石獅。實作者web timeout、Chrome憑證警告，未繞過；依獨立研究交叉核實，不能拿這筆私人產權推論村落石獅。
- https://www.kinmen.travel/zh-tw/nearby/ebus?placeId=587&type=Attractions ：兩方核實成功二3路及不繞民航站分支、洋樓站84榕園太湖線；列表86m/123m僅頁面參考，不作實測走路距離/時間或直達石像保證。方向、班次及營運日查 https://ebus.kinmen.gov.tw/ 。

## Google POI與地址衝突

兩方直接繁中GUI確認同一具名「成功風獅爺」：CID `0x3414a300171a0f2d:0xd27716c273f938d8`、24.4372471,118.3895366、g/11z5d1chml。原顯示地址為 **891金門縣金城鎮金城**；原文確實與官方金湖鎮不符，不能自行修成金湖或成功村4號門牌。`address`及schema.streetAddress原樣保留，`locationDescription`和可見路線段明示差異及官方金湖位置。頁面area仍jinhu符合官方所在地，不能據Google異常欄位把文章分到金城。

同一直接地標 URL： https://www.google.com/maps/place/%E6%88%90%E5%8A%9F%E9%A2%A8%E7%8D%85%E7%88%BA/data=!4m7!3m6!1s0x3414a300171a0f2d:0xd27716c273f938d8!8m2!3d24.4372471!4d118.3895366!16s%2Fg%2F11z5d1chml?hl=zh-TW 。詳頁CTA、兩個路線連結、全站地圖和hasMap共用，不是地址搜尋。Google另列「成功嶺風獅爺」CID `0x3414a3007aa6f985:0x2cdc9cfbb57b7f9c`、24.44236,118.389498，兩者未混用。

必要窄修：原shared schema強制從area產生addressLocality金湖鎮，會與Google streetAddress金城鎮矛盾。新增可選 `googleMapsAddressLocalityConflict`，僅此頁true時省略locality；streetAddress與金門縣region保留，官方位置另列。父代理同意此相關兩檔修正；預設未設flag的所有景點不改，focused測試另斷言成功坑道仍有原area標籤「金湖」與原地址。

## 未核事項與發布限制

尚無直接證據確認村落石獅現行單一管理/清潔維護、產權或土地通行權。官方景點發布機關、中研院典藏、社區歷史祭祀及鄰近洋樓公所職掌均不能代替。管理卡、facts、FAQ均明列待確認；來源連結標明只是遊憩資訊。單點票價/售票未核實，不承諾全部免費；專用車位、公廁、照明、連續無障礙與當日可達未核實。只從現場允許處觀察，不授予私人庭院進入權。

## 驗證與範圍

本批七檔：target MD、pilot registry、content.config optional field、attractions schema條件、focused browser test、此證據、CSV唯一target列。`pnpm validate` 已通過：0 errors / 0 warnings / 0 hints；556頁、48,372內鏈、1,884圖片實例、4,082 schema nodes。首完整browser suite為248通過/2失敗；兩項均為新增測試把原有area標籤「金湖」誤期待為「金湖鎮」，不是產品變更。只修測試期待後重跑完整suite，最終結果記於下方。CSV維持 AWAITING_LIVE_CHECK，PR/commit/deployed留空，不能稱VERIFIED。下一slug由CSV選得 `chenggongling-wind-lion`，不自行啟動。

最終完整 browser suite：**250 passed（57.9s）**，desktop + iPhone13/mobile；完成記錄 2026-11-04T01:16:24Z。新增測試涵蓋唯一H1/canonical/H2順序、舊3主題、原圖署名、8FAQ逐字HTML/frontmatter/schema對應、Google原址/CID/座標/hasMap、詳頁三地圖鏈及/map同POI、只新增再移除測試自身行程、手機無溢出，以及其他景點未設flag仍輸出原locality。Luna最終審閱無阻斷；建議用更保守位置字眼屬非阻斷意見，現有允許通行條件及私域限制已明示。

最終範圍：對actual main僅5個既有檔差異 + 2個新檔；registry其他條目與CSV其他列逐項相同。舊全文僅上述單句來源收斂，其餘逐字保留。git diff --check通過；臨時preview config、node_modules symlink與work scratch已清除。無commit/push，等待父代理PR及production驗收。

## 2026-11-05 對象特定歷史角色補充
https://catalog.digitalarchives.tw/item/00/66/7a/ac.html 本輪直接讀到管理權字段，國立金門大學計畫典藏不是今日權利登記。
https://www.kmdn.gov.tw/1117/1271/1272/267387?cprint=pt 直接讀到2016/05/22發布及5/21志工更換披風。
數位典藏聯合目錄將此尊管理單位列為金門縣金湖鎮正義里、所有權屬列公共財，欄位更新日未明，引用欄2013/01/25瀏覽紀錄不是現任登記日期。2016-05-22金門日報另記正義社區志工隊於5月21日製作並更換披風，僅證當時對象特定照料；不推現任像體管理、今日產權或私人土地准入。
觀光網2018-07-27介紹記生日或正月初九天公生供奉米糕；數位典藏則記原生日為農曆五月十六，後來祭祀漸集中元月初九，描述村民準備紅龜粿與金帛。各為來源當時記錄，不合併推作今日祭典日程或參與許可。
管理名稱不整段連結，保留獨立歷史來源CTA；FAQ/schema、registry、測試同步。原圖及授權保留，不改CSV或待查狀態。

Validation PASS: /tmp/chenggong-history-validate.log; desktop/mobile focused 2 passed (1.9s), /tmp/chenggong-history-browser.log. Temporary isolated 4347 config removed; source/build frozen. No CSV/status changes, commits or deployment.

## 2026-11-05 independent local acceptance after reconnect

Archive records historic Zhengyi village management and public-property fields with unknown update date; 2016 volunteers renewed the cloak. Current management, property and public access remain unconfirmed. Independent QA checked FAQ/schema, mapping differences and original image. Complete browser regression: 552 passed. Temporary config cleanup verified; no new deployment.
