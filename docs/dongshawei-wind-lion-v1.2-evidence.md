# 東沙尾風獅爺 v1.2 證據與交接

核對2026-11-03（使用者America/Los_Angeles），結束另記UTC。Sol實作、authority/Luna獨立來源/Google GUI/圖源及稿件審閱；未commit/push、未production驗收。

## 基線與舊文盤點

work/dongshawei-ready自42f53d3覆蓋actual GitHub main b6564c6695f94d52028abe95dcc09e1417a74277的96變更，845 remote blobs逐項Git hash相符。CLI fallback沿用父代理既有授權；覆蓋作基線，不將歷次景點變更納本批。

原三H2「這裡值得看什麼」「怎麼安排參觀」「把下一站排在附近」保留轉H3置FAQ後。三段全文與links保留：74公分、埋土再供奉、彩帶彩球銅錢、短臉、路口/1號民宅旁、金沙與金湖下新厝區別、下新厝/羅浮紀念碑及停留建議不刪。窄修一：74公分句加官方來源歸因；窄修二：原「看現場指標」改確認當日合法可停留與住宅准入，不假定有指標或可入庭院。title/nameEn/seoTitle/description/aliases/tag/duration/order/image/related不變。原568來源保留，新增政府歷史轉載及公車來源；原無FAQ，新增8題同組生成frontmatter與HTML。

## 官方資料與邊界

- https://kinmen.travel/zh-tw/travel/attraction/568 ：實作者繁中GUI直接讀2018-07-30更新、周表全天/24h；官方地址埔華路與環島東路路口附近，正文1號民宅旁。未見票價、停車場或服務設施欄，故不沿用舊免票/有車位假定。頁面石雕埋土出土、身高74、短臉、胸前彩帶/彩球/銅錢；尺寸另有「寬30、寬48」重複欄位，本次不自行改造為寬深新數據。74為來源記載非實測，披風/供品不保證固定。主站web只取得JS殼，改用GUI實讀。
- https://www.medicaltravel.org.tw/Scenery-Content.aspx?idstr=C1_371020000A_000568&lang=1 ：政府臺灣國際醫療旅遊轉載景點資料，記約1994年出土、原石底部、端午油麵糕點供奉與1950年代軍民雜居管制背景。僅作歷史轉載來源，不作今天祭典排期、供品、現軍管、現開放、管理或產權證明。背景信仰不當鎮風實證，不採主觀外型比喻。
- https://www.kinmen.travel/zh-tw/nearby/ebus?placeId=568&type=Attractions ：實作者繁中GUI直接讀東沙尾74m列23、23繞林務所、33幸福巴士、86台灣好行下午主題線，另有新前墩/下新厝各站，頁面免責另查動態。只作參考，查 https://ebus.kinmen.gov.tw/ 和 https://www.taiwantrip.com.tw/ 當期班次、營運日、票價/條件，不把套裝觀光線當隨到隨搭免費接駁；74m不是實測步行分鐘或無障礙保證。

未找到足以確認現行單一管理、清潔維護、產權及委外的直接資料；官方刊登者、村民供奉、民俗分類和歷史軍事管制都不替代當期權責與准入。管理卡明示待核，第二CTA「查看官方石獅介紹」不把旅遊介紹冒充管理/文化資產證明。未列票價不等於免費，鄰近住宅不等於可進。

## Google具名POI

實作者直接繁中GUI搜尋後點同名「東沙尾風獅爺」，原址 **890金門縣金沙鎮**，CID 0x3414a52f7daad0c7:0x4c49a7af88eff21c，24.4555282,118.4479218，g/1tqnj6y_，PlusCode FC4X+65。GUI回連官方568；同搜索的東山/內洋是另一點590，未混入導航。官方24.45556,118.44795吻合；官方路口/民宅旁另列locationDescription，不拼Google門牌。Google24h是第三方列表，不證私域/夜間通行。

採實際GUI列表點開的具名鏈（省略登入/追蹤參數，保留原place data/CID）：https://www.google.com/maps/place/%E6%9D%B1%E6%B2%99%E5%B0%BE%E9%A2%A8%E7%8D%85%E7%88%BA/data=!4m7!3m6!1s0x3414a52f7daad0c7:0x4c49a7af88eff21c!8m2!3d24.4555282!4d118.4479218!16s%2Fg%2F1tqnj6y_!19sChIJx9CqfS-lFDQRHPLviK-nSUw?hl=zh-TW 。不是座標或文字搜尋鏈；詳頁三導航、/map及schema.hasMap共用，streetAddress原字相同。無實測GPX或住宅通行許可，不由POI點推出入口路權。官方周邊清單下新厝37m等不當實測導航，頁面只保留順遊主題及各站條件另查。

## 圖片及待核

place-dongshawei-wind-lion保持原圖/alt/credit。原圖 https://kinmen.travel/attractions/6399/1024x768_attractions-image-zedpas0epeqndjbri2wmxw.jpg 與本地JPG皆52099bytes，SHA256 aab8bcf873820e5bfc440b12338156328ab591364cff1bc423b9b45df5b7e3c1。實作者視覺核短臉石獅、胸前淺刻線條、草坪樹木與屋舍背景，不代表今天供品/披風/准入。photos.json/PHOTO-CREDITS原金門縣政府觀光處、政府網站資料開放宣告、轉WebP/縮放裁切不變。https://kinmen.travel/zh-tw/gwoia 對縣府來源材料可再用並署名，個別特別限制與第三人權利例外成立，未見此圖限制標記，不稱已查明個別攝影者。無新採Maps/他人照片、不複製主圖製空相冊。

未核現行管理/維護/產權/委外、周邊土地通行、費用、專用車位、公廁/飲水/照明、連續無障礙及祭典當期安排。只能在當日允許且可合法安全停留位置觀察，不進民宅農地、不爬底座或改供品，無可停留位置即略過。

## Final local validation

pnpm validate passed: 0 errors, 0 warnings, 0 hints; 556 pages, 48,475 internal references, 1,884 images and 4,091 schema nodes verified. Full desktop 1440x1000 and mobile iPhone13 browser suite: **268 passed (1.0m)**. Focused checks cover unique H1/canonical, ordered ten H2 sections and three original H3 topics, original credit/no empty gallery, unknown management and specifically labeled source CTA, private-access boundaries, exact eight FAQ answer parity across frontmatter/HTML/JSON-LD, Google address/CID/coordinates/hasMap, all detail and /map navigation links, test-only trip add/remove, and mobile overflow.

Relative to actual main, only MD/registry/CSV existing files differ, plus this evidence and focused test. Removing this registry block reproduces baseline byte-for-byte; all other CSV rows and remote blobs match. No non-attraction collection edits. Original paragraphs retained except the documented source-attribution and access-condition edits. CSV AWAITING_LIVE_CHECK; PR/commit/deploy blank, not VERIFIED. Next slug from CSV: dongzhou-wind-lion.

Final checks recorded at 2026-11-04T05:20:01Z (UTC).

Temporary config, node_modules symlink and work scratch removed. git diff --check passed; no commit or push. The exact article POI URL was reopened directly in GUI and resolved to the same named lion/address.
