import { ashesOfWar, bosses, regions } from '..';
import {
  calculateAshOfWarProgress,
  calculateAshOfWarProgressByContentPack,
  calculateBossCatalogProgress,
  calculateBossCatalogProgressByContentPack,
  calculateCombinedProgress,
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
      combined: 324,
      bossByContentPack: {
        'base-game': 165,
        'shadow-of-the-erdtree': 43,
      },
      ashOfWarByContentPack: {
        'base-game': 91,
        'shadow-of-the-erdtree': 25,
      },
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
      total: 324,
      percentage: 0,
    });
    expect(
      calculateCombinedProgress(
        bosses.map((boss) => boss.id),
        ashesOfWar.map((ash) => ash.id),
      ),
    ).toEqual({ completed: 324, total: 324, percentage: 100 });
    expect(calculateProgressPercentage(1, 3)).toBe(33);
    expect(calculateProgressPercentage(1000, 3)).toBe(100);
    expect(calculateProgressPercentage(1, 0)).toBe(0);
    expect(calculateProgressPercentage(Number.NaN, 2)).toBe(0);
    expect(calculateProgressPercentage(1, Number.POSITIVE_INFINITY)).toBe(0);
  });
});
