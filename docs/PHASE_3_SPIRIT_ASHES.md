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
review found that these were not factual acquisition locations. All 84 records
now use researched locations from Eldenpedia/wiki.gg listings and individual
item pages where needed; the Spirit Ash validator rejects name-derived,
`Unknown location`, `TBD`, and `TODO` placeholders.

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
