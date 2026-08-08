import { ashesOfWar, bosses, incantations, regions, sorceries, spiritAshes } from '..';
import {
  calculateAshOfWarProgress,
  calculateAshOfWarProgressByContentPack,
  calculateBossCatalogProgress,
  calculateBossCatalogProgressByContentPack,
  calculateCombinedProgress,
  calculateIncantationProgress,
  calculateSorceryProgress,
  calculateProgressPercentage,
  PROGRESS_TOTALS,
} from '../progress-selectors';

describe('progress selectors', () => {
  it('keeps the approved catalog totals', () => {
    expect(regions).toHaveLength(26);
    expect(bosses).toHaveLength(208);
    expect(ashesOfWar).toHaveLength(116);
    expect(PROGRESS_TOTALS).toEqual({
      bosses: 208,
      ashesOfWar: 116,
      sorceries: 84,
      incantations: 129,
      spiritAshes: 84,
      combined: 621,
      bossByContentPack: {
        'base-game': 165,
        'shadow-of-the-erdtree': 43,
      },
      ashOfWarByContentPack: {
        'base-game': 91,
        'shadow-of-the-erdtree': 25,
      },
      sorceryByContentPack: {
        'base-game': 70,
        'shadow-of-the-erdtree': 14,
      },
      incantationByContentPack: {
        'base-game': 101,
        'shadow-of-the-erdtree': 28,
      },
      spiritAshByContentPack: { 'base-game': 64, 'shadow-of-the-erdtree': 20 },
    });
  });

  it('counts only unique recognized boss IDs', () => {
    const id = bosses[0].id;
    expect(calculateBossCatalogProgress([id, id, 'future-boss'])).toEqual({
      completed: 1,
      total: 208,
      percentage: 0,
    });
  });

  it('calculates boss package totals', () => {
    expect(
      calculateBossCatalogProgressByContentPack([], 'base-game').total,
    ).toBe(165);
    expect(
      calculateBossCatalogProgressByContentPack(
        [],
        'shadow-of-the-erdtree',
      ).total,
    ).toBe(43);
  });

  it('calculates Ash totals and package totals', () => {
    const id = ashesOfWar[0].id;
    expect(calculateAshOfWarProgress([id, id, 'future-ash']).completed).toBe(1);
    expect(
      calculateAshOfWarProgressByContentPack([], 'base-game').total,
    ).toBe(91);
    expect(
      calculateAshOfWarProgressByContentPack(
        [],
        'shadow-of-the-erdtree',
      ).total,
    ).toBe(25);
  });

  it('calculates zero, partial, complete and combined progress safely', () => {
    expect(calculateCombinedProgress([], [])).toEqual({
      completed: 0,
      total: 621,
      percentage: 0,
    });
    expect(
      calculateCombinedProgress(
        bosses.map((boss) => boss.id),
        ashesOfWar.map((ash) => ash.id),
        sorceries.map((entry) => entry.id),
        incantations.map((entry) => entry.id),
        spiritAshes.map((entry) => entry.id),
      ),
    ).toEqual({ completed: 621, total: 621, percentage: 100 });
    expect(calculateProgressPercentage(1, 3)).toBe(33);
    expect(calculateProgressPercentage(1000, 3)).toBe(100);
    expect(calculateProgressPercentage(1, 0)).toBe(0);
    expect(calculateProgressPercentage(Number.NaN, 2)).toBe(0);
    expect(calculateProgressPercentage(1, Number.POSITIVE_INFINITY)).toBe(0);
  });

  it('calculates separate Sorcery and Incantation progress', () => {
    expect(calculateSorceryProgress([sorceries[0].id, 'unknown'])).toEqual({
      completed: 1,
      total: 84,
      percentage: 1,
    });
    expect(calculateIncantationProgress([incantations[0].id, 'unknown'])).toEqual({
      completed: 1,
      total: 129,
      percentage: 1,
    });
  });
});
