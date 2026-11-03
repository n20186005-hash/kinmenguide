# Codex repository instructions — Kinmen Guide

This is an Astro + Tailwind + TypeScript static tourism guide. The user has approved a **complete migration of the remaining attraction-detail pages only** to the repository's Kinmen attraction relay v1.2 template. Do the implementation: don't replace work with a reminder or a proposal. Do not claim migration is finished without evidence.

## On attraction migration tasks only

- Read **`skills/kinmenguide-attraction-relay/SKILL.md`**, **`docs/attraction-detail-template-v1.2.md`**, **`docs/attraction-template-migration.csv`**, and master tracking **GitHub issue #59**. These are the durable handoff; do not rely on previous chat context.
- **Allowed content paths:** `src/content/attractions/`. Only edit other paths when necessary to render/test attraction details (attraction-specific data, shared components with guarded changes, tests, and migration docs). **Never edit** other content collections: `hotels/`, `food/`, `guides/`, `itineraries/`, `areas/`, `transport/`, `tours/`, or `car-rental/`. Run regression tests to ensure they remain unchanged.
- Use independent tasks, branches, and isolated worktrees for separate **small batches** of unmigrated attractions. Start from the current GitHub CSV, not from a hardcoded list/count. Do not rework entries already in progress or overwrite an existing open PR. Coordinate merges sequentially if sharing common components.
- For **each place**, preserve its original independently useful body topics, legitimate local photographs/credits and links. Reorder: hero → Explore → visitor tips/highlights → About with VERIFIED managing authority → basic facts → driving/transit → place-linked map → culture/engineering/ecology where sourced → FAQ with identical visible and JSON-LD answers → preserved deep-dive topics → nearby attractions → source/edit record. No empty gallery. Never fabricate details to hit a template quota.
- **Google Maps address and navigation:** record the *named POI's* visible address, distinct from a narrative geographical description. Prefer a verified direct link to that same named Google Maps POI in all navigation controls, including /map/, and in `TouristAttraction.hasMap`; never silently substitute the latitude/longitude search for a verified POI. If not verifiable, record unresolved rather than invent a street address, Place ID, source, or link.
- Verify official management/control (government, park, private property), ticket/hours/accessibility/transport, with direct sources; don't state real-time operating status or claim official affiliation.
- Tests per batch: `pnpm validate`, `pnpm test:browser` (desktop/mobile), SEO/canonical, visible headings and FAQ/schema, image credits, trip planner, no non-attraction collection drift. Every work unit needs a reviewable PR, CI evidence and updated `docs/attraction-template-migration.csv`. Only mark `VERIFIED` after independent live URL inspection; otherwise `AWAITING_LIVE_CHECK`.
- After a batch, update Issue #59 and CSV with merged SHA, unresolved sources and exact next slugs. Resume from those durable files in a separate task/worktree to avoid context inflation. Continue until all attractions are genuinely reviewed and verified; do not ask for permission after each site within the already-authorized scope. If task spawning, repository access, image provenance, external lookup or deployment verification is unavailable, record the blocker rather than reporting success.

## Outside attraction migration

Make the narrowest possible changes requested by the user. The standing attraction batch mandate is **not** permission to alter hotel, dining, editorial, itinerary, or other content.

**Execution entrypoint:** GitHub Issue #59 — [Attraction relay master](https://github.com/n20186005-hash/kinmenguide/issues/59). Existing examples: `zhaishan-tunnel` and `shuitou-village`. Always check the latest CSV before calculating remaining work.
