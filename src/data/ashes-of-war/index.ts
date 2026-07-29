import { bossEncounters, catalogRegions } from '../catalog';
import { ashesOfWar } from './ashesOfWar';
import { assertValidAshOfWarCatalog } from './validators';

if (__DEV__) {
  assertValidAshOfWarCatalog(
    ashesOfWar,
    new Set(bossEncounters.map((boss) => boss.id)),
    new Set(catalogRegions.map((region) => region.id)),
  );
}

export { ashesOfWar } from './ashesOfWar';
export {
  ashOfWarUsesEnglishFallback,
  getAllAshesOfWar,
  getAshesOfWarByContentPack,
  getAshOfWarById,
  getAshOfWarIndexSize,
  getAshOfWarSearchableText,
  getSortedAshesOfWar,
  getSortedAshesOfWarByContentPack,
  resolveLocalizedList,
  resolveLocalizedValue,
  sortAshesOfWarAlphabetically,
} from './selectors';
export {
  assertValidAshOfWarCatalog,
  EXPECTED_ASH_OF_WAR_COUNTS,
  validateAshOfWarCatalog,
} from './validators';
export type {
  AshOfWar,
  AshOfWarAcquisitionMethod,
  AshOfWarContentPack,
  AshOfWarLocale,
  LocalizedOptionalValue,
  LocalizedRequiredList,
  LocalizedRequiredValue,
  ResolvedLocalizedList,
  ResolvedLocalizedValue,
} from './types';
