# 得月樓 v1.2 implementation evidence

Checked 2026-11-03 (UTC). Scope: deyue-tower only. No commit/push/deployment performed by implementation agent; production acceptance pending.

## Preservation inventory

- Original topics retained as H3 after FAQ: `1931年的洋樓防禦設計` (title now explicitly flags chronology uncertainty), `看得到樓高，不等於能登頂`, `四個門牌，四種看法`.
- Original paragraphs, four-address table, linked attractions, 1.5–2-hour suggestion, 古厝小舖 and itinerary links retained. Chronology caveat added beside historical topic.
- Original two FAQ answers retained verbatim; six sourced/service and cautious visitor questions added. Eight visible FAQ answers and frontmatter/schema compared exactly.
- Existing `deyue` photo and photos.json metadata unchanged: `Deyue Tower 得月樓 - panoramio.jpg`, lienyuan lee, CC BY 3.0; main agent independently checked exact Wikimedia Commons file page. No empty gallery.

## Sources and limitations

- https://kinmen.travel/zh-tw/travel/attraction/654 — main agent directly inspected official browser page: free admission and 6/6A or 7/7A/7B buses to 水頭圓環 verified; web extraction incomplete.
- https://www.taiwan.nps.gov.tw/home/zh-tw/attractions/21165.html — 08:30–17:00, 除夕休館, exhibition/guide/stroller service, venue telephone 082-375458. Distinguish venue phone from other tourism contacts.
- https://www.taiwan.nps.gov.tw/home/zh-tw/topic/18180.html — 2019 historical article explicitly says park office maintains/manages the exhibition. Page labels this dated evidence and current management reconfirmation unresolved. Its 1931 chronology conflicts with the exhibit page's 1931 house/1933 tower account; both disclosed.
- https://tcmb.culture.tw/zh-tw/detail?id=20190410000001&indexCode=BOCH_CountryCulture_11 — cultural heritage record independently reviewed by Luna; added direct source without assuming ownership equals management.
- Google Maps named 得月樓 POI manually inspected by main agent: `893金門縣金城鎮金水里前水頭45號`; exact supplied POI URL used in frontmatter, body navigation and inherited header/map/schema. Lat/lng 24.409716,118.2984092 is POI point, not a walking track. Geographical description separate.
- Unresolved: current management confirmation, exact parking configuration, current public-transit times, all-floor accessibility and current floor/tunnel access. Official bus branches included; no fixed bus timings, full accessibility or opening-status guarantees added.

## Roles and acceptance

Implementation: Sol-family delegated agent; independent official/source review: Luna (reported by main agent). Main agent performed manual Google Maps and Commons checks. Browser suite covers desktop/mobile, FAQ/schema, POI links/full-island map, legacy topics, single H1, photo/credit, trip planner and overflow. Unrelated-content drift checked through Git diff. Final test results and release metadata belong in CSV; never mark VERIFIED before independent production inspection.

## Local validation log

- `npx --yes pnpm@10.32.1 validate`: PASS (Astro 0 errors/warnings/hints; 556 pages, SEO/canonical, internal links, schema, photo audit and business regression). Default system pnpm 11 rejected repository-required version, so the pinned package manager was invoked explicitly.
- `tests/attraction-detail-deyue.spec.ts`: desktop + mobile PASS, including exact image credit and three detail-navigation links.
- Initial default browser invocation reused an unrelated stale 4321 preview and is invalid evidence. All subsequent checks use an isolated preview at 4327. First isolated full run: 204/206, two mobile mixed-business storage tests failed during a concurrent content rebuild; stable-build rerun of complete mobile trip-businesses: 5/5 PASS. Final full stable-build run recorded in CSV.
- Programmatic original-paragraph/table preservation and Git non-attraction/image/credit drift checks: PASS.

Final stable-build full browser run: **206/206 PASS**, desktop + mobile (54.0s). Final parking wording avoids unsupported designated spaces; source-check date explicitly UTC.
Final copy-edit build validation: PASS; focused Deyue desktop/mobile recheck: 2/2 PASS (1.6s). Temporary isolated-preview config removed after tests.
