# Phase 3 — Spirit Ashes

Spirit Ashes are implemented as an independent collectible category, separate
from Ashes of War and from the empty Index.

## Dataset

- Base Game: 64 entries
- Shadow of the Erdtree: 20 entries
- Total: 84 entries
- Reference: Eldenpedia Spirit Ash index and the project’s established English
  catalog conventions, reviewed against the Shadow of the Erdtree list.
- Regulation values are represented conservatively; undocumented values remain
  `null` instead of being inferred.

Each record has a stable ID, origin, English name, `Main location - Full region
name` location, structured acquisition, optional Site of Grace, typed FP/HP
cost, summon count, upgrade material, Legendary tri-state-compatible flag,
Missable tri-state, and optional effects.

The six classic Legendary ashes are Cleanrot Knight Finlay, Redmane Knight
Ogha, Ancient Dragon Knight Kristoff, Lhutel the Headless, Mimic Tear Ashes,
and Black Knife Tiche. Missable remains explicitly unknown where a lockout
cannot be confirmed without inventing a claim.

The first implementation used temporary `<name> location` values. A manual
review found that these were not factual acquisition locations, and a second
audit also identified name-homonym errors (for example, the Beastman boss in
Groveside Cave is not the source of Azula Beastman Ashes). The second audit
verified all 84 acquisition locations against the Game8 Spirit Ash index,
Eldenpedia/wiki.gg, and individual item pages for exceptions. The production
summary now records the acquisition site itself: Azula Beastman Ashes is in
Dragon Temple, Crumbling Farum Azula; Fingercreeper Ashes is in Finger Ruins
of Dheo, Scadu Altus. The validator rejects name-derived, `Unknown location`,
`TBD`, and `TODO` placeholders.

Research traceability: the Game8 index is the batch source for the 64 Base Game
records (https://game8.co/games/Elden-Ring/archives/356059); individual pages
were used for Azula Beastman (https://game8.co/games/Elden-Ring/archives/375564)
and Fingercreeper (https://game8.co/games/Elden-Ring/archives/459008), with
Eldenpedia's Ashes reference (https://eldenring.wiki.gg/wiki/Ashes) used for
cross-checking. Each production record is keyed by the corresponding researched
name/location entry in `src/data/spirit-ashes/catalog.ts`; no unknown location
remains.

## Product integration

Spirit Ashes use schema version 4 and `collectedSpiritAshIds`. Existing
progress, settings, language, and theme survive v3 migration; new Spirit Ash
progress starts empty for existing users. Reset clears all five collectible
categories while preserving settings.

The category is available at `/spirit-ashes`, with Base Game, DLC, and detail
routes. It is searchable, filterable, accessible, responsive, and represented
by a fifth Home card. The Index remains empty and unchanged. New catalog data
and category-specific labels are English-only; existing Portuguese content is
preserved.

## Automated warning cleanup

The Drawer hook warnings came from centralized accordion setter callbacks being
used without their stable callback dependencies. The affected effects and
navigation callbacks now declare the exact setters they consume; no lint
suppression was added.

The `VirtualizedList/act()` warning came from the combined Bosses `SectionList`
performing its deferred cell update after the test render scope. The test now
renders and drains that deferred update inside `act`, preserving the real list
implementation and behavior. No console filtering or production mock was
introduced.
