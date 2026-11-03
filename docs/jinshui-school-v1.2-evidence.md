# 金水國小展示館 v1.2 evidence

Checked 2026-11-03 UTC; implementation only, no commit/push/deploy. CSV stays AWAITING_LIVE_CHECK.

## Preservation inventory

Four original H2 topics relocated intact to H3 after FAQ: 一所學校，裝著出洋者對家鄉的期待; 不只拍門面，也看看教室; 水頭半天怎麼走; 實用提醒. All original paragraphs, the 1.5–2-hour editorial suggestion and links to 得月樓、僑鄉文化展示館、翟山坑道、金城老街 retained. Existing related links preserved. Added adjacent clarification that old display observations are legacy editorial suggestions; actual exhibits changed in 2026.

Original image key jinshui and asset/metadata unchanged: Jinshui Elementary School 金水國小 - panoramio.jpg, lienyuan lee, CC BY 3.0; existing alt and /credits/#jinshui retained. Luna independently verified exact Commons source. No gallery placeholder.

## Direct sources and distinctions

- https://www.kmnp.gov.tw/ch/touristInfo/recreation-sites/19 — current official name 金水學校展示館; 1932 overseas-community fundraising; courtyard architecture, current migration/culture display and multimedia. Independently read by implementation agent.
- https://www.kmnp.gov.tw/ch/titlelist/latest-news/4319 — park authority's 2026-05-29 reopening and exhibition renewal; independent direct reading plus Luna review. Park authority manages exhibition; not a building ownership determination.
- https://www.kmnp.gov.tw/ch/titlelist/latest-news/1229 — 2025 closure superseded by reopening. February 2026 renovation references are historical, not current closure evidence.
- https://www.taiwan.nps.gov.tw/home/zh-tw/attractions/21164.html — ordinary 08:30–17:00, 除夕休館; older display/service list and telephone 313128. Directly read. Do not promise old ABC-room layout, 8-minute film or loan availability after update.
- https://www.kmnp.gov.tw/ch/titlelist/key-service-facilities/498 — Luna directly verified current venue roster phone 082-313282, preferred over older NPS 313128; discrepancy disclosed in facts. Implementation agent independently read the corrected endpoint: AED site table row 9 lists the venue and 082-313282, distinguished from the separate named AED manager contact.
- https://kinmen.travel/zh-tw/travel/attraction/439 — Luna directly verified free admission and normal hours; implementation web extraction incomplete. Original free-entry statement retained.
- https://www.kinmen.travel/zh-tw/nearby/ebus?placeId=439&type=Attractions — direct read confirms 水頭圓環 / 水頭村莊 / 水頭聚落, 6/6A/7-family and tourism route options; no invented fixed departure or walking time.
- https://tcmb.culture.tw/zh-tw/detail?id=20030331000053&indexCode=BOCH_CountryCulture_12 — original historical source retained, not used to infer current management or ownership.

## Named Google Maps POI

Main agent directly verified Chinese named POI 金水學校展示館 and address `893金門縣金城鎮金水里47號`. Implementation agent independently searched, distinguished it from the separate closed 金水分校 school, and opened exact POI; English UI displayed `893, Kinmen County, Jincheng Township, Jinshui Village, 47號`. Point 24.4093598,118.2979734; Place ID ChIJb679SFWfFDQRgUdGU1aTing. Exact supplied named-place URL is shared by detail navigation, /map/ and TouristAttraction.hasMap. Do not add 前水頭 to Maps streetAddress; legacy address description remains separate. No live-opening claim derived from Maps.

## Delegation, uncertainties and checks

Implementation: delegated Sol-family agent. Official facts, current phone and Commons: independent Luna source review plus main agent. Still unresolved: day-specific services/loans, full accessibility, precise parking layout, actual bus departures and exact updated display inventory. No current operating guarantee.

Local checks: `npx --yes pnpm@10.32.1 validate` PASS (Astro zero errors/warnings/hints, 556 pages; canonical/SEO, links, schema, photo, business and Ctrip audits). Full desktop/mobile browser suite on isolated4339: **208/208 PASS (52.9s)**. After local updatedAt date changed to 2026-11-02 and source-check date labeled UTC, repeated validate PASS and focused Jinshui desktop/mobile **2/2 PASS (1.1s)**. Entire original body matches exactly after H2-to-H3 conversion. `git diff --check` clean; no non-attraction content collection edits. Temporary preview config/dependency symlink/scratch script removed. Base Git HEAD 42f53d3 with five parent-provided files overlaid to current main e719e8d; release overlay must preserve already-verified Deyue records. Scope only Jinshui page, additive registry entry, focused tests and migration docs; do not commit overlay base differences as new work.
