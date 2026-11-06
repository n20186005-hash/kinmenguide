# 八達樓子 v1.2 evidence

Source checks 2026-11-03 UTC; public-source research, not a field visit. Sol-family implementation with independent Luna research/review coordinated by parent. No commit, push or deployment; CSV remains AWAITING_LIVE_CHECK.

## Original inventory and preservation

Four original paragraphs retained verbatim with H2→H3 only: 七座塑像的紀念意義、從外側讀建築、拍照請留在安全路側、附近怎麼安排. All original links to culture museum, Donglin well, Lieyu area and two-day itinerary retained; related one-day itinerary remains. Original 15–20 minute duration stays editorial and is distinguished from official half-hour suggestion. No prior FAQ; eight FAQ entries share exact HTML/frontmatter/schema text and order. Old no-guarantee climb advice retained with new clarification that official tourism explicitly mentions climbing, while current conditions remain unverified.

Hero place-bada-tower, existing asset, photos.json and PHOTO-CREDITS remain unchanged: 金門縣政府觀光處 / 政府網站資料開放宣告, source https://kinmen.travel/zh-tw/travel/attraction/534 and policy https://kinmen.travel/zh-tw/gwoia . Original remote image https://kinmen.travel/attractions/10429/1024x768_attractions-image-qkl6umpkteqmsnimcxchkg.jpg downloaded independently and is byte-identical to existing JPEG, SHA256 1c6d0006b2ee5c9c091cd1395368d67ff0af6d12fbcae54d99cc40c3334a0380. No fabricated gallery/photo.

## Sources, scope and uncertainties

- https://kinmen.travel/zh-tw/travel/attraction/534 independently read rendered Chinese browser, updated2025-05-08: all seven days24h/free; phone082-362500; road-circle warning; half-hour suggestion. Official攻略 mentions登樓, not proof current entrance is available. No current toilet, parking or accessibility promise made. Official exaggerated height/slogan list not copied as current verified fact.
- https://lieyu.kinmen.gov.tw/travel/cp.aspx?n=030BF549DA1902BC official indexed page dated2021-08-18:1966 construction, castle form, seven soldiers, internal stair and four gate names. Direct fetch timed out; evidence relies on official indexed text, not a claimed successful visual page inspection. Current entry/roof access remains unconfirmed.
- [Historical source-name/access account superseded below] https://afpc.mnd.gov.tw/Files/Paper/IY81A805_merged_compressed.pdf 2024-08-05 Youth Daily no3282: researcher directly checked web PDF text layer page7 (zero-based6), continuous lines443–468, heading八達樓子/address/management烈嶼鄉公所/全天. Implementation web redirected in loop and curl/Chrome timed out or blocked; no local PDF screenshot available. Do not claim dual visual PDF verification. This dated official management record is disclosed as such, with current division of responsibilities unresolved; not ownership or current maintenance contractor evidence. Parent researcher additionally verified2023county清淨家園 table lists公所, a dated maintenance/cleanliness corroboration, not a2026contract.
- https://www.kmdn.gov.tw/1117/1271/1272/185645 directly read official2010-08-25 report of township repair/reconstruction and changed slogan. Historical event, not current closure/work or proof every current inscription. No contemporary repair completion/closure statement independently confirmed; no invented no-work conclusion.
- https://kinmen.travel/zh-tw/nearby/ebus?placeId=534&type=Attractions official indexed nearby bus list:八達樓子/西宅, Y9/Y2 school-coded routes;西宅 also36山烈線. No promised everyday tourist shuttle, fixed interval, travel time or walking distance. Must query actual direction/day/timetable.

## Independent named POI verification

Implementation Chinese Google Maps UI and researcher independently confirmed 八達樓子, exact original address `894金門縣烈嶼鄉`, CID `0x3414992f40b86d65:0x5a40417d4dc9b2c1`,24.429958,118.245747, official534 website. Direct URL is stored once in frontmatter and reused in detail CTA, article map, schema hasMap and /map/ card. Official roundabout geography is separate locationDescription, not added to Google original address. Point lies in traffic circle; navigation does not authorize entering centre or stopping there. Google live opening badges are not used as official current-status proof.

## Local acceptance and release limits

Local validation/browser results recorded after run below. Full desktop/mobile suite checks shared collections and existing attraction behavior; focused test checks one H1, canonical, ordered H2 sections, all four legacy topics, original photo credit, dated-management caveat, school-route caveat, exact eight FAQ/schema parity, exact POI/address/coordinates/hasMap, trip add and /map/ same POI, mobile overflow. Source-date metadata uses2026-11-03 user-local date; evidence timestamps explicitly UTC. Production deployment and independent live acceptance still required. Next untouched slug: beishan-broadcasting-wall.

Validation completed2026-11-03T12:20:05Z: pnpm validate PASS, Astro0 errors/0 warnings/0 hints, complete build/static and directory audits passed. Full Playwright236 passed(1.0m), desktop+mobile including focused Bada acceptance. No production checks claimed. Remote ca4628 tree hash comparison found only target MD/registry changed before CSV; registry removal of additive Bada block equals overlaid baseline, original four body paragraphs preserved exactly. Other46-file overlay differences are baseline, not this batch. Final deliverables: target MD, registry, focused test, this evidence, one CSV row.

Independent Luna review passed. [Historical fee reading superseded below, not current-value evidence] Researcher additionally found tourism multimedia database field「需入場相關費用」 conflicts with public official534 frontend「免費」. Keep both source observations distinct: current copy explicitly attributes free to county frontend and is not a current fee guarantee. The database field is not treated as a fee announcement or proof of an actual charge; current on-site arrangements/fees remain to be confirmed. Do not silently resolve conflicting fields into certainty. PDF access limitation is recorded above and was not bypassed or represented as a successful implementation-side visual verification.


## 2026-11-05 原PDF及費用補正
- 本輪web工具已直接讀取 https://afpc.mnd.gov.tw/Files/Paper/IY81A805_merged_compressed.pdf 全8頁文本：p1刊頭為憲兵指揮部第3282期，2024-08-05，非青年日報。p7（zero-based6）景點資訊列管理烈嶼鄉公所、全日24小時；來源附註金門觀光。前文誤稱青年日報及實作者無法直接讀取的局限已被此次讀取取代，保留歷史記錄但不再作本輪結論。不推2026現任契約、產權或當日登樓/軍界准入。
- 直接curl下載 https://media.taiwan.net.tw/zh-tw/portal/travel/json/attraction_371020000a_000534 ，`/tmp/bada-current-json.json`：UpdateTime=2025-05-08T03:15:33+08:00、IsAccessibleForFree=null、FeeInfo=""、Organizations=[]。觀光網2025-05-08免費分源；空值不證免費或收費。前文舊「需費用」當前衝突結論撤回，不採快取為現值。
- 停車改情況未核、僅當日明確允許且有合法標示處停放；FAQ/可見正文/schema、registry及測試同步。保留圖、四原主題與圓環/入塔限制。AWAITING_SOURCE_CHECK不動，不改CSV/進度、不提交部署。

最終驗證：validate通過（`/tmp/bada-source-validate.log`）；4347隔離、CI=1桌面/手機專項2項通過、1.6秒（`/tmp/bada-source-browser.log`）。臨時配置移除，交付後凍結。

## 2026-11-05 follow-up validation

Independent QA verified the 2024 Military Police Command publication's dated township management field, source attribution, fee null/empty correction and conditional parking/access. Focused desktop/mobile: 2 passed; complete regression: 552 passed. Current management division and tower entry remain unresolved; AWAITING_SOURCE_CHECK remains. No deployment.

## 2026-11-05 bounded local acceptance

Earlier pending-status references are historical. Military Police Command publication records township management in 2024 only. Current responsibility, tower entry, road conditions and facilities remain unconfirmed; free listing and null JSON fee fields are distinguished. Independent QA accepted the source and recommended a dated fact label; label corrected, validate and 2 focused tests passed after the 552-test full regression. Original image retained. No new deployment.

Release clarification 2026-11-06: Earlier Youth Daily attribution and apparent fee conflict are historical and superseded by the 2026-11-05 corrections above. Visitor copy summarizes dated free-entry information and asks visitors to confirm current charges; raw JSON fields remain evidence only.
