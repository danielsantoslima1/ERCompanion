# Phase 5 — Weapons

Weapons uses the broad Armaments definition: melee weapons, ranged weapons, catalysts, torches, and all four shield types.

## Audited baseline

The initial investigation suggested 481. Deterministic gallery enumeration found 479 obtainable Armaments. A first inferred split of 376/103 was then corrected by the item-level DLC audit. The active baseline is **479 total = 377 Base Game + 102 Shadow of the Erdtree**, across 42 inventory-ordered Weapon Types. Counts per type are derived from the versioned catalog rather than copied from the superseded preliminary matrix.

Primary sources: Eldenpedia/wiki.gg Weapons, All Items Gallery, and Weapons (Shadow of the Erdtree). Gamer Guides and Git Gudder were used for aggregate and classification cross-checks.

The final matrix is calculated from the audited entries:

| Weapon Type | Base | DLC | Total |
| --- | ---: | ---: | ---: |
| Daggers | 16 | 2 | 18 |
| Throwing Blades | 0 | 1 | 1 |
| Straight Swords | 19 | 4 | 23 |
| Light Greatswords | 0 | 3 | 3 |
| Greatswords | 21 | 3 | 24 |
| Colossal Swords | 11 | 5 | 16 |
| Thrusting Swords | 7 | 1 | 8 |
| Heavy Thrusting Swords | 4 | 2 | 6 |
| Curved Swords | 15 | 4 | 19 |
| Curved Greatswords | 9 | 2 | 11 |
| Backhand Blades | 0 | 3 | 3 |
| Katanas | 8 | 2 | 10 |
| Great Katanas | 0 | 3 | 3 |
| Twinblades | 6 | 2 | 8 |
| Axes | 13 | 4 | 17 |
| Greataxes | 11 | 3 | 14 |
| Hammers | 15 | 1 | 16 |
| Flails | 5 | 1 | 6 |
| Great Hammers | 14 | 2 | 16 |
| Colossal Weapons | 15 | 5 | 20 |
| Spears | 16 | 3 | 19 |
| Great Spears | 6 | 4 | 10 |
| Halberds | 16 | 2 | 18 |
| Reapers | 4 | 1 | 5 |
| Whips | 6 | 1 | 7 |
| Fists | 9 | 5 | 14 |
| Hand-to-Hand Arts | 0 | 2 | 2 |
| Claws | 4 | 1 | 5 |
| Beast Claws | 0 | 2 | 2 |
| Perfume Bottles | 0 | 5 | 5 |
| Light Bows | 5 | 1 | 6 |
| Bows | 7 | 1 | 8 |
| Greatbows | 4 | 1 | 5 |
| Crossbows | 7 | 2 | 9 |
| Ballistas | 2 | 1 | 3 |
| Glintstone Staves | 18 | 2 | 20 |
| Sacred Seals | 9 | 3 | 12 |
| Torches | 6 | 2 | 8 |
| Small Shields | 17 | 2 | 19 |
| Medium Shields | 27 | 4 | 31 |
| Greatshields | 25 | 2 | 27 |
| Thrusting Shields | 0 | 2 | 2 |
| **Total** | **377** | **102** | **479** |

Notable preliminary-matrix corrections include Greatswords 24 (not 25), Spears 19 with a 16/3 split, Fists 14, Claws 5, Light Bows 6, and Greatbows 5. No entry was duplicated, moved between origins, or supplemented with unobtainable content to fit an old aggregate.

## Product and architecture

- Drawer: Overview, All Weapons, Base Game, Shadow of the Erdtree.
- Routes: `/weapons`, `/weapons/all`, `/weapons/base-game`, `/weapons/shadow-of-the-erdtree`, `/weapons/category/[categoryId]`, `/weapons/[weaponId]`.
- Overview provides global progress/search, package shortcuts, and 42 one-column category progress cards.
- Empty-query catalog pages use SectionList in canonical type order; active search uses a relevance-ranked FlatList.
- Weapon Type uses an accessible searchable React Native Modal with no external dependency.
- Category pages show Origin only when both packages exist and use mutually exclusive, clearable collection status.
- Cards use summarized location; details preserve factual acquisition/location narrative and omit absent optional fields.
- Native virtualization, stable IDs, memoized derived lists, moderate render windows, and shared theme/title/progress/search patterns are retained.

## Data and persistence

Fields include type, origin, location, region, acquisition, grace, weight, skill, passive effects, upgrade material, requirements, and description when available. Schema v6 adds `collectedWeaponIds` while preserving every v5 category and settings. Selective reset clears Weapons without `AsyncStorage.clear()`.

Audited coverage is 479/479 for name, type, origin, summarized location, region, detailed location, and acquisition; 102/479 for a verified nearest Site of Grace; 432/479 for weight; 430/479 for skill; 425/479 for at least one stat requirement; 136/479 for passive effects; and 353/479 for description. Upgrade material remains absent rather than inferred where the consolidated source did not provide a reliable per-entry value.

The tracker total is 1,254. Index content and splash are unchanged. Manual review targets the Drawer, Overview, long category names, SectionList headers, type modal at 320 dp, global/category search, filters, Light/Dark cards, progress persistence, and Back behavior.
