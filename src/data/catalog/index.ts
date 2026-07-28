import { bossEncounters } from './bossEncounters';
import { catalogRegions } from './regions';
import { assertValidCatalog } from './validators';

export { bossEncounters } from './bossEncounters';
export { catalogRegions } from './regions';
export {
  assertValidCatalog,
  EXPECTED_REGION_COUNTS,
  validateCatalog,
} from './validators';
export type {
  BossEncounter,
  BossEncounterWithProgress,
  CatalogRegion,
  CatalogValidationResult,
  ContentPack,
  EncounterPhase,
  ParticipantCountRange,
} from './types';

if (__DEV__) {
  assertValidCatalog(catalogRegions, bossEncounters);
}
