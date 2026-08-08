# Phase 2 quality audit

## Scope

The audit covered Home, all Boss lists and details, Ashes of War lists and
details, Sorcery and Incantation lists and details, Settings, Drawer, the empty
Index hierarchy, shared cards, filters, progress components, typography, safe
areas, and the React splash.

The review used the existing 320/360/390/412/768 dp component coverage, targeted
source inspection, accessibility-state tests, semantic theme contrast tests, and
the complete automated project suite. Catalogs, routes, persistence, product
content, translations, and dependencies were not changed.

## Corrections

- Searchable Boss, Ash of War, Sorcery, and Incantation lists now dismiss the
  keyboard when the user drags the vertical list while preserving taps on
  results and controls.
- Spell lists now use the same handled-tap behavior as the other searchable
  lists, preventing the keyboard from consuming the first result action.
- Drawer labels no longer impose a two-line truncation limit; long localized
  labels can grow vertically inside the existing scrollable Drawer.
- Spell not-found and spoiler disclosure actions now guarantee a 44 dp touch
  target and expose explicit accessible labels. Spoiler expanded state remains
  available to assistive technology.

## Confirmed behavior

- Shared filters wrap without horizontal scrolling at representative widths.
- Safe-area containers and vertical scrolling cover functional screens and long
  detail content.
- `AppText`/`AppTextInput` remain the production typography path; the direct
  native text used by the font-loading failure screen is intentional because
  custom fonts are not ready in that state.
- Light, Dark, and System resolve through semantic tokens. Dark cards preserve
  structural green, controlled gold details, and green completion semantics.
- Decorative status icons remain hidden from screen readers; interactive
  controls expose roles, labels, and state.
- Search relevance, progress schema v3, unknown IDs, the 537-item total, English
  Phase 2 content, existing Portuguese values, and the empty Index are preserved.
- The React splash retains its permanent three-second minimum and reduced-motion
  exit behavior.

## Remaining limitations

- The Jest `act()` warnings were traced to the root splash double calling
  `onReady` from an effect during Testing Library's render scope and to
  unawaited asynchronous layout/press events in both splash suites. The double
  now models production layout explicitly; every event is awaited, and the
  minimum-time callback is controlled and drained inside `act`. The targeted
  and complete suites finish without warnings; no console filtering was added.
- Validation of the native splash in an installed Android build is explicitly
  deferred and was not performed in this audit.
- No broad architectural refactor was justified. Historical research TODO-like
  wording and intentional test fixtures are not production technical debt.
- Final visual review on physical devices remains useful for platform-specific
  font rendering and screen-reader behavior, but it does not block this safe,
  reversible audit.
