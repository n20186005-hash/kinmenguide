# 馬山觀測所 v1.2 evidence

Source checks: 2026-11-03 UTC. No commit, push or deploy. CSV remains AWAITING_LIVE_CHECK.

## Original inventory

Preserved all 5 original topics and 8 paragraphs verbatim, changing only H2 to H3: 沿著坑道，走到海的另一種視角; 天氣會改變體驗; 與金沙北線一起走; 從觀測口看見戰地地理; 觀察視野，也認識官澳. Original broadcasting-station, Shanhou, Shishan, Guanao and Tianmo links retained. Original two FAQ objects unchanged; eight sourced questions added, ten total. Trip integration retained.

Original hero image key mashan, alt 馬山觀測所的戰地建築與入口, author LiCheng Shih, CC BY 2.0 and /credits/#mashan retained. Source: https://commons.wikimedia.org/wiki/File:Mashan_Observation_Post_27879011111_2b6237efd6_o.jpg . Asset and photo metadata unchanged. Historical implementation limitation: Commons web fetch was unavailable then; superseded by the 2026-11-05 original-entry verification recorded below. No empty gallery or duplicate filler image.

## Sources and limits

- https://kinmen.travel/zh-tw/travel/attraction/546 — independently read rendered browser page, updated 2025-04-25: free; all seven days 08:30–17:00; 082-330086; public toilet, parking and indoor exhibits; broadcasting station beside observation-post entrance; mobile roaming warning. Ignore real-time open badge, rating and weather. Geographic description 光華路二段馬山觀測所 separated from Google POI address.
- https://www.taiwan.nps.gov.tw/home/zh-tw/attractions/21052.html — independently read: 08:30–17:00, Lunar New Year's Eve closure; telephone 082-352149. Preserve discrepancy with county tourism 082-330086, do not assert current answering scope.
- https://www.kmnp.gov.tw/ch/touristInfo/recreation-sites/21 — independently read: underground tunnel and observation role, narrow dimensions, strategic site; no inference that all military areas are open. Official sources differ on distance to Jiaoyu; avoid publishing a falsely precise single distance.
- https://www.kmnp.gov.tw/ch/titlelist/latest-news/476 — independently read: park administration announced planned outside-path improvement and temporarily closed both visitor sites 2025-09-16–19. Records the park historical plan and closure announcement; it does not alone prove current 2026 whole-site management, completed work, land ownership, military responsibility or current outsourcing. Management card explicitly pending. Historical closure is not ongoing closure or verified reopening.
- https://www.tad.gov.tw/m1.aspx?id=C100_223&sNo=0001126 — official observation-post page names nearby 馬山 and 馬山觀測所 bus stops and Taiwan Tourist Shuttle stop. Do not convert straight-line distances into walking times; timetables and branch not independently established. Link official bus and shuttle live queries.

## Named POI

Implementation independently inspected Chinese Google Maps UI: 馬山觀測所; exact address `890金門縣金沙鎮`; no house number. CID 0x3414bb9a23a574c1:0xc949bd751977fc42; 24.5277161, 118.4088789. Researcher and parent separately corroborated same address and CID. Only observation-post POI verified in this batch. Broadcasting-station entry has overlapping area coordinates and awaits its own verification; do not claim precise separation of both navigation points. That content is untouched.

Verified direct URL: https://www.google.com/maps/place/%E9%A6%AC%E5%B1%B1%E8%A7%80%E6%B8%AC%E6%89%80/@24.5277161,118.4088789,921m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3414bb9a23a574c1:0xc949bd751977fc42!8m2!3d24.5277161!4d118.4088789!16s%2Fm%2F010ppzx5?hl=zh-TW . Same URL used detail navigation, /map/ and hasMap; exact address in streetAddress.

## Roles, uncertainty and local acceptance

Sol-family implementation and independent primary-source reads. Parent coordinates Luna-family source research and independent review; parent supplied corroborated Chinese POI and official telephone discrepancy. Parent relayed Luna independent review: current whole-site management cannot be established by the 2025 notice alone; card, FAQ and body now explicitly pending. Broadcasting-station existing area marker remains untouched and awaits its own verification. Independent production acceptance remains pending. Unresolved: current ownership/contract, full-route accessibility, parking fee/capacity, telephone answering scope, day-specific opening and telescope availability. General hours are not real-time status. No invented GPX or performance schedule.

Final local acceptance after independent-review corrections: `npx --yes pnpm@10.32.1 validate` PASS, Astro 0 errors/warnings/hints, 556 pages, canonical/link/schema/photo/business/Ctrip audits passed. Full desktop/mobile `test:browser` PASS 224/224 (59.1s), isolated port 4347. Focused checks: single H1/canonical, v1.2 H2 order, five preserved topics, ten exact FAQ/HTML/schema pairs, LiCheng Shih / CC BY 2.0 credit, no empty gallery, management pending with historical source, telephone discrepancy, observation-post POI address and hasMap/navigation, full-island map link, trip add, mobile overflow. Original full body and original two FAQ objects asserted unchanged except heading level. Scope: 27 unrelated overlay blobs match actual main; registry minus additive block equals baseline remote; all other CSV rows identical. `git diff --check` clean. Temporary configuration, dependency symlink and scratch removed. Overlay baseline is actual main d424946038e2d327aa3fb4c962dfc4d07ceccc3d over local HEAD42f53d3; its 29 prior changes are baseline. This batch has five deliverables only: target attraction, additive pilot registry, focused test, this evidence and target CSV row. No shared renderer/schema or other collections edited.

## 2026-11-05 bounded roles and original photo review
- Commons original file https://commons.wikimedia.org/wiki/File:Mashan_Observation_Post_27879011111_2b6237efd6_o.jpg : original-entry indexed body directly exposes LiCheng Shih, Flickr source, photo date 2016-06-25, CC BY 2.0 and Flickr licence review. Existing attribution/licence retained. Earlier unread limitation is historical, not a remaining licence conclusion. Local asset visually inspected: view through observation opening toward sea, not exterior/entrance. Only alt corrected to 從馬山觀測所觀測口望向海面; file/author/licence untouched.
- https://www.kmnp.gov.tw/ch/touristInfo/recreation-sites/21 names the observation post as an official recreation site. https://www.kmnp.gov.tw/ch/titlelist/latest-news/476 documents 2025 external-path works for observation post and broadcasting station, not completion/current whole-site management.
- https://www.kmnp.gov.tw/ch/titlelist/latest-news/4025 : 115 Spring Festival announcement lists 馬山觀測所（播音站） under 自導式景點, separate from staffed explanation halls. Its Feb14–15/17–22 service and Feb16 closure concern that holiday, not today's operation. This supports bounded official-site, works and service-publication roles, not full ownership, military boundaries or current admission. Two venues remain distinct; no daily staffed-service claim.
- AWAITING_SOURCE_CHECK unchanged; full current division of maintenance, military/land roles and actual daily access remain unresolved. No CSV/progress edits.

Validation: `corepack pnpm validate` passed (log `/tmp/mashan-bounded-validate.log`); isolated 4347 desktop/mobile focused tests 2 passed (1.7s), `/tmp/mashan-bounded-browser.log`. Temporary config removed; source frozen for independent QA/full regression.

## Spring Festival classification wording correction
The 2026-11-05 QA follow-up scopes the classification strictly to #4025: 該春節公告將其列為自導式景點，未列入該公告所列駐點解說展示館. Earlier unqualified 非駐點解說展示館 wording is withdrawn; this does not establish year-round staffing. Frontmatter FAQ, visible FAQ/schema, registry and regression assertions synchronized.

Holiday wording verification: validate passed (`/tmp/mashan-holiday-validate.log`); desktop/mobile focused tests 2 passed (1.7s), `/tmp/mashan-holiday-browser.log`. Temporary 4347 configuration removed; frozen for review. Status/CSV/progress unchanged.

## 2026-11-05 final follow-up validation

Independent QA verified the Commons author/licence and corrected image alt, and the self-guided wording is limited to the cited Spring Festival announcement, not year-round service. Focused desktop/mobile: 2 passed; complete regression: 552 passed. Current detailed management and access remain unresolved; AWAITING_SOURCE_CHECK remains. No deployment.

## 2026-11-05 independent local acceptance

Earlier pending-status references are historical. National park site, 2025 access-path works and 2026 holiday-only self-guided notice independently verified; complete management, military boundary and current admission remain unconfirmed. Independent QA accepted bounded statements, image credit and visitor caveats. Complete local browser regression: 552 passed. No new deployment.
