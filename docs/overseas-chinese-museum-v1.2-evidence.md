# 僑鄉文化展示館 v1.2 evidence

Source checks 2026-11-03 UTC; updatedAt uses user's local 2026-11-02. No commit/push/deploy; CSV AWAITING_LIVE_CHECK.

## Preservation inventory

All three original H2 topics relocated to H3 after FAQ, with entire original body retained verbatim apart from heading depth: 別把地號當成門牌; 先看生活，再看洋樓; 與學校展示分工看. Original three paragraphs, map-address explanation, Jinshui and Deyue links, related links, description and duration retained. Added adjacent 2026 renovation/reopening clarification rather than removing legacy observation suggestions.

Photo key place-overseas-chinese-museum unchanged, existing asset 1024x768_attractions-image-px0eme5cmukcjhapkk-abg.jpg, alt 水頭57地號洋樓(僑鄉文化展示館)實景, author 金門縣政府觀光處, Government Website Open Data Declaration; source https://kinmen.travel/zh-tw/travel/attraction/645 and license https://kinmen.travel/zh-tw/gwoia. No empty gallery or invented imagery.

## Sources, dates and status

- https://www.kmnp.gov.tw/ch/titlelist/latest-news/4480 — directly read official reopening notice announcing 2026-08-10 reopening after repairs; current display themes include overseas remittances, buildings, life, decoration and cultural inheritance. Establishes park authority management activity, not property ownership. Do not infer live opening.
- https://www.kmnp.gov.tw/ch/titlelist/latest-news/3903 — earlier January 15 closure is superseded; retained explicitly as historical source.
- https://www.taiwan.nps.gov.tw/home/zh-tw/attractions/21166.html — directly read ordinary 08:30–17:00 / 除夕休館, 082-313281, old film and loan/guide list. Post-renovation exact services and fixed screening times not promised.
- https://kinmen.travel/zh-tw/travel/attraction/645 — official tourism listing supports free general admission, location, public toilet/indoor exhibition and accessibility facilities. Facility presence does not mean all historic-building routes are wheelchair accessible.
- https://tcmb.culture.tw/zh-tw/detail?id=20030331000051&indexCode=BOCH_CountryCulture_12 — official historic building/culture record; 57 is land number, not street number.
- https://www.kmnp.gov.tw/ch/touristInfo/recreation-sites/14 — current park venue page independently verified by Luna and implementation agent.
- Transit query https://ebus.kinmen.gov.tw/; specific current bus departures not verified. No fabricated route times.

## Maps POI

Main agent directly inspected Chinese named POI 僑鄉文化展示館 and exact visible address 金門縣金城鎮金水里前水頭39號; no postal code shown, none added. Implementation agent independently searched the named museum, read English UI address 金水里前水頭39號, Jincheng Township, Kinmen County, and confirmed same destination. Exact supplied direct POI URL used consistently in page header/body, /map/ and TouristAttraction.hasMap. Point24.409697,118.2988343; not a walking route. Location description keeps 57-land-number distinction separate from address.

## Roles and acceptance

Sol-family delegated implementation with independent official direct reads. Luna independently verified reopening, park venue page /recreation-sites/14, NPS ordinary service list, free-entry tourism page and government photo attribution; main agent Maps Chinese address verification. Remaining uncertainty: day-specific opening, post-renovation film/guide/loan availability, precise parking layout, full accessible route and live bus times. No invented current operations.

Local checks: `npx --yes pnpm@10.32.1 validate` PASS (Astro zero errors/warnings/hints; 556 pages, SEO/canonical, links, schema, photo, business and Ctrip audits). Isolated port4340 full browser suite **210/210 desktop/mobile PASS (52.0s)**. After Luna copy correction removing unsupported exhibition-update claims, repeated validate PASS and focused museum desktop/mobile **2/2 PASS (1.7s)**. Entire original body retained exactly after H2-to-H3 conversion. `git diff --check` clean. Temporary config, dependency symlink and scratch script removed. Base HEAD42f53d3 includes parent overlay of main c31b087; only this museum content, additive registry entry, focused test and evidence/CSV row are new work. Preserve existing Deyue/Jinshui baseline diffs during release overlay.

Luna review correction: reopening source establishes renovation and reopening, not a distinct exhibition-update claim. Removed unsupported display-update wording; retained official description of themes and uncertainty over actual post-refit services.
