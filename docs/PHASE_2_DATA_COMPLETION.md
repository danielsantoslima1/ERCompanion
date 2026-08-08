# Phase 2 data completion

## Scope and method

This pass reviewed all 84 Sorceries and 129 Incantations against the existing
research catalogs and a revision-pinned wiki.gg MediaWiki snapshot. Public
structured facts were normalized and paraphrased; no game files or proprietary
data were imported. Regulation 1.16.1 remains the numerical reference because
it is the latest official regulation published by Bandai Namco for the project.

All 153 formerly pending spell locations were resolved. The 60 existing
locations were also reviewed. Every card now uses `Main location - Full region
name`; directions, conditions, NPC details, and instructions remain in detail
data. Cannon of Haima is `Converted Fringe Tower - Liurnia of the Lakes`.

Each spell has a primary acquisition record and short structured steps. FP cost,
slot use, attribute requirements, and version metadata cover all 213 entries;
stamina cost covers 114 entries and purchase price covers 78. A missing optional
number remains `null`, while a verified zero remains `0`. No reliable,
catalog-wide nearest-Site-of-Grace mapping was present in the reviewed structured
sources, so none was inferred.

## Strict missable result

- `true`: Shard Spiral; Dragonbolt of Florissax; Furious Blade of Ansbach;
  Watchful Spirit.
- `false`: Gelmir's Fury; Magma Shot; Bayle's Flame Lightning; Bayle's Tyranny.

Exclusive Remembrance or Heart exchanges alone are not missable. A value is
`true` only when irreversible progression can remove the item for the current
journey.

## Related catalog audit

All 208 boss encounters were checked for preserved IDs, counts, content-pack
assignment, and pending markers; no factual catalog change was justified. All
116 Ashes of War (91 base game and 25 DLC) were checked. Six records retain
explicit `Unknown` legacy acquisition/location values because this pass found no
source set strong enough to replace them without invention. Their existing IDs,
counts, and behavior are preserved and the unknown values remain visible to
future research rather than being converted to fabricated facts.

Search now considers English acquisition requirements, steps, NPC/intermediate
items, and effect metadata after name, aliases, location, and source. Generic
technical numbers are excluded. Detail screens omit unavailable optional values
and keep spoiler-protected instructions collapsed. Cards, progress schema,
filters, Index placeholders, themes, typography, splash, and all existing
Portuguese values remain unchanged.

## Traceability and limitations

`docs/research/spell-data-completion.json` records the source URL, wiki revision,
and revision timestamp per spell. The collector stores only normalized facts and
short paraphrased summaries. Its explicit location overrides document cases
where the public table did not expose a usable location field. Unknown optional
technical effects, PvE/PvP differences, drop rates, duration, and range remain
unknown unless the reviewed sources provided a stable measurable value.
