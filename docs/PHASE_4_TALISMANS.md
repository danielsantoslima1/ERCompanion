# Phase 4 — Talismans

## Scope and totals

- 154 separately obtainable Talismans: 115 Base Game and 39 Shadow of the Erdtree.
- Variants (`+1`, `+2`, `+3`, and named upgrades) have independent IDs and progress.
- Tracker total: 775 (the existing 621 plus 154 Talismans).
- The Index and splash are outside this phase.

## Data and behavior

Each entry provides ID, name, origin, list location (`Main location - Full Region Name`), region, acquisition, nearest Site of Grace when explicitly documented, current effect, weight when documented, concise description, Legendary, and Missable. Routes are `/talismans`, `/talismans/base-game`, `/talismans/shadow-of-the-erdtree`, and `/talismans/[talismanId]`.

Card locations contain only a place name and full region; narrative acquisition text is stored separately for details. For example, Axe Talisman shows `Mistwood Ruins - Limgrave` on its card and `A chest in the cellar of Mistwood Ruins.` in details. Narrative location, acquisition, effect, and description text is normalized as a capitalized sentence without changing factual meaning.

Talismans use the existing Ionicons package with `ribbon-outline` as the pendant/talisman identity. Category titles share the canonical 32 dp Cinzel Decorative title style with Spirit Ashes and the established category screens. All green progress action buttons use the shared success action tokens: a distinct green background and white text in Light and Dark. Collected Light cards retain their pale success surface, border, and a clearly distinct solid-green action button.

These choices follow the universal consistency rule: equivalent category UI must reuse shared components, typography, semantic tokens, progress layout, filters, and behavior unless explicitly approved otherwise.

Search uses the shared relevance engine across name, region, location, acquisition, Site of Grace, effect, and description. Origin is single-select; status is optional single-select; Legendary and Missable are independent flags. All active filters intersect and use the shared wrapping filter container.

Progress schema v5 adds `collectedTalismanIds`, preserving all v4 categories and settings. Reset clears all tracked progress, including Talismans, without clearing settings.

## Factual decisions

The eight `Legendary` entries are the in-game achievement class: Dragoncrest Greatshield Talisman, Erdtree's Favor +2, Godfrey Icon, Marika's Soreseal, Moon of Nokstella, Old Lord's Talisman, Radagon Icon, and Radagon's Soreseal.

`Missable` is limited to acquisitions that can become permanently unavailable in a playthrough through quest progression, mutually exclusive quest rewards, or killing/progressing past the relevant NPC: Companion Jar, Daedicar's Woe, Magic Scorpion Charm, Millicent's Prosthesis, Rotten Winged Sword Insignia, Shard of Alexander, Warrior Jar Shard, Taker's Cameo, Lacerating Crossed-Tree, Retaliatory Crossed-Tree, Crusade Insignia, and Dried Bouquet.

## Sources and audit

Primary structured source: [Elden Ring Wiki (wiki.gg)](https://eldenring.wiki.gg/wiki/Talismans), including every individual item page and the dedicated [Shadow of the Erdtree list](https://eldenring.wiki.gg/wiki/Talismans_(Shadow_of_the_Erdtree)). Counts and the DLC list were cross-checked against Game8, Dexerto, and current specialist catalog summaries. The eight Legendary entries were cross-checked against the in-game achievement list and PowerPyx/TrueAchievements.

The versioned snapshot records the retrieval timestamp. The builder excludes category/set/template pages, audits every item page, preserves variants, and contains narrow overrides where wiki markup prevents reliable extraction. The production validator checks uniqueness, totals, origins, essential factual coverage, location shape, weights, and placeholders.

## Validation

Run `node docs/research/validate-talismans-production.js`, the Talismans Jest tests, TypeScript, Expo lint, the full Jest suite, Expo Doctor, and `git diff --check` before approval. Physical Expo Go review should cover narrow filter wrapping, light/dark collected cards, Drawer accordion behavior, detail back navigation from all three origins, and persistence after restart.
