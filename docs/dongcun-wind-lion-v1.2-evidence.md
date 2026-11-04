# 東村風獅爺 v1.2 證據與交接

資料核對2026-11-03（使用者America/Los_Angeles）；完成時刻另記UTC。Sol實作，authority/Luna獨立官方/Google GUI/圖源與草稿審閱；無commit/push，未production驗收。

## 基線與舊文盤點

獨立 `work/dongcun-ready` 由42f53d3覆蓋GitHub actual main `5f36903a220eaae6525429998bdf40607e77c023` 的87個變更，839個remote blob逐項Git hash一致。managed worktree對巢狀repo限制，沿用既有授權CLI fallback。覆蓋視為基線，不將過往景點納本批。

原H2「這裡值得看什麼」「怎麼安排參觀」「把下一站排在附近」保留轉H3在FAQ後。三段全文實質內容保留，唯一窄修將「從村道及榕樹附近公共空間觀看」條件化為現場允許且可合法停留的位置，避免未證民宅附近公共通行權。東村/東洲不同村落、1997重塑/青斗石彩球高底座、不爬牆底座、峰上仍需交通的原內容不刪。原峰上巡檢司、峰上孚濟宮、金湖分區links及related、589來源不刪，title/nameEn/seoTitle/description/tag/duration/order/image保持。原無FAQ，新增8題同組生成data/HTML供schema。

原圖 `place-dongcun-wind-lion`、alt東村風獅爺實景、金門縣政府觀光處/政府網站資料開放宣告與credit不變。官方原圖 https://kinmen.travel/attractions/2251/1024x768_image_636361823112546025.jpg 與本地同圖皆151527bytes，SHA-256 `411d8ac9e71e19f6cb2e90a58f80fc018ae6da3058589a915ffb81adc1289bf6`。實作者視覺核胸前持球石獅及底座，authority核既有來源/署名；不是已查明個別攝影師姓名。https://kinmen.travel/zh-tw/gwoia 適用縣府來源材料，第三人權利/特別標記例外仍成立；本圖未發現個別限制標記，保留原有註記，不新採CRGIS或典藏照片、不製空相冊。照片不代表今日披風或通行現況。

## 官方、田野與典藏證據

- https://kinmen.travel/zh-tw/travel/attraction/589 ：兩方繁中GUI直接讀得2024-12-10更新、全天；十九號民宅屋後榕樹、1997集資青斗石重塑、胸前彩球、50公分身高/30寬/38深。這是有日期旅遊資訊，動態開放中標籤不作今日可進證據；沒有明列免票或公共通行，故移除舊戶外動線不售票的假定。官方東村19號附近為地理描述，不是Google門牌或庭院准入。
- https://catalog.digitalarchives.tw/item/00/66/7a/a7.html ：實作者直接web讀資料識別100-WLG-JH-04，2013/01/25引用、歷史公共財與管理單位金門縣金湖鎮蓮庵里、典藏金門大學。只能說舊檔記載，不證2026現行產權/單一管理/清潔維護，更不證周邊民宅農地道路可自由進入。管理卡先寫現行待核，CTA明確「查看歷史典藏管理記錄」，不冒稱當期管理證明。正文/FAQ保留此有用歷史資訊而非整筆刪除。
- https://crgis.rchss.sinica.edu.tw/assets/intangible/folklore/fsx/KinmenCounty/jinhu/fsx067 ：實作者直接web讀田野資料，1997/青斗石、安鎮路口與鎮風、東村19號右前方三角地；早期年代引用內部亦有1968與1961不同口徑。資料含2010照片及當年觀察，不作現場訪問或土地使用許可。頁面另述村落型石敢當，不能將石敢當、其他石獅或民宅擺飾混為本尊。
- 尺寸差異：官方589為高50/寬30/深38；舊典藏描述約74但格式高度50；CRGIS高38/寬30/深50，與官方深高順序不同。本頁沒有自行實測，不選一個數字冒充統一高度；FAQ/文化段說明口徑不同，以彩球、材質、底座及地點辨識，不把不同數據合成新尺寸。1997現像重塑為多源一致主題，早期失佚史與精確尺寸不擴寫為確定結論。
- https://www.kinmen.travel/zh-tw/nearby/ebus?placeId=589&type=Attractions ：實作者Chrome GUI直接讀東村站列19繞復國墩峰上及其不同回程/承德路分支、20及繞料羅等分支，41m為參考，頁面免責另查動態。不寫所有19/20班次皆停、不把站距當實測路線/分鐘；查 https://ebus.kinmen.gov.tw/ ，不占公車站停車。

## Google具名POI

兩方直接繁中GUI核同名「東村風獅爺」，原址 **891金門縣金湖鎮**，CID `0x3414a506c0db188d:0xc3df405311acde34`，24.4270119,118.4466951，g/1xb2b5mh。官方24.42701,118.44669與其吻合，不混淆金寧東洲風獅爺；不把評論中提及其他村內物件當另已確認石獅。

直鏈 https://www.google.com/maps/place/%E6%9D%B1%E6%9D%91%E9%A2%A8%E7%8D%85%E7%88%BA/@24.4270119,118.4466951,922m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3414a506c0db188d:0xc3df405311acde34!8m2!3d24.4270119!4d118.4466951!16s%2Fg%2F1xb2b5mh?hl=zh-TW 。詳頁查看位置/兩路線鏈、/map及schema.hasMap共用；streetAddress原文不加19號，官方位置另列locationDescription。POI非住宅/農地進入權，無實測GPX。

## 未確認及實作範圍

現行管理、清潔維護、產權、單點費用、專用車位、公廁、飲水、照明、連續無障礙與實際可合法停留位置未核實。官方旅遊發布者、歷史公共財/里管理與村民重塑都不直接推今日全域管理/公共通行。全天限歸因2024頁面，建議白天，遇無安全位置、居民使用或圍設即略過。

Luna實讀終稿無內容阻斷，提醒尺寸與GWOIA例外範圍已記；8FAQ/可見details與資料同組、原三專題及圖權保留。5檔：target MD、registry opt-in、focused test、此evidence、CSV唯一target列。無shared或其他collection改動。CSV AWAITING_LIVE_CHECK，PR/commit/deployed空白；下一slug依CSV `donglin-east-well`。

## 最終本地驗證

`pnpm validate` 通過，0 errors/0 warnings/0 hints；556頁與既有內鏈/canonical/schema/圖片、非景點稽核通過。`pnpm test:browser` 完整 **262 passed（59.1s）**，desktop1440×1000及iPhone13/mobile。Focused核唯一H1/canonical、H2順序/舊3H3、原主圖credit、無空相冊、歷史管理來源/精確CTA、收費未知與私域界線、8FAQ HTML/frontmatter/JSON-LD逐字同序、原址/座標/CID/hasMap、詳頁3導航與/map同POI、只加入再移除測試自身行程、手機無溢出。

相對actual main只3個既有檔（target MD/registry/CSV）+2新增檔（test/evidence），其他registry條目、CSV列及所有非景點collections逐項不變；原三段除上述條件句外全文/連結逐字保留。git diff --check通過。臨時config/node_modules symlink/work scratch已清除，未commit/push。CSV AWAITING_LIVE_CHECK，等待父代理PR/CI及部署後獨立live，不標VERIFIED。下一slug `donglin-east-well`。

Final checks recorded at 2026-11-04T04:02:39Z (UTC).
