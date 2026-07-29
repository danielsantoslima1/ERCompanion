import type { AshOfWar } from '../types';
import {
  ashOfWarUsesEnglishFallback,
  getAllAshesOfWar,
  getAshesOfWarByContentPack,
  getAshOfWarById,
  getAshOfWarSearchableText,
  getSortedAshesOfWar,
  getSortedAshesOfWarByContentPack,
  resolveLocalizedList,
  resolveLocalizedValue,
  sortAshesOfWarAlphabetically,
} from '../index';

const templateEntry: AshOfWar = {
  id: 'template-entry',
  contentPack: 'base-game',
  name: { ptBR: 'Nome', en: 'Name' },
  skillName: { ptBR: 'Habilidade', en: 'Skill' },
  primaryLocation: { ptBR: 'Local', en: 'Location' },
  primaryAcquisition: { ptBR: 'Obtenção', en: 'Acquisition' },
  acquisitionMethods: [
    {
      location: { ptBR: 'Local', en: 'Location' },
      method: { ptBR: 'Método', en: 'Method' },
    },
  ],
  summary: { ptBR: 'Resumo', en: 'Summary' },
  skillType: null,
  affinity: { ptBR: 'Afinidade', en: 'Affinity' },
  compatibleEquipment: { ptBR: ['Espada'], en: ['Sword'] },
  fpCost: null,
  specialEffects: null,
  limitations: null,
  relevantNotes: null,
};

describe('Ashes of War selectors', () => {
  it('returns the complete immutable catalog and filters both content packs', () => {
    expect(getAllAshesOfWar()).toHaveLength(116);
    expect(getAshesOfWarByContentPack('base-game')).toHaveLength(91);
    expect(getAshesOfWarByContentPack('shadow-of-the-erdtree')).toHaveLength(
      25,
    );
  });

  it('finds known IDs and safely returns undefined for unknown IDs', () => {
    const first = getAllAshesOfWar()[0];
    expect(getAshOfWarById(first.id)).toBe(first);
    expect(getAshOfWarById('missing-ash')).toBeUndefined();
  });

  it('resolves Portuguese values and reports English fallback', () => {
    expect(resolveLocalizedValue({ ptBR: 'Nome', en: 'Name' }, 'pt-BR')).toEqual(
      { value: 'Nome', usedFallback: false },
    );
    expect(resolveLocalizedValue({ ptBR: null, en: 'Name' }, 'pt-BR')).toEqual({
      value: 'Name',
      usedFallback: true,
    });
    expect(resolveLocalizedValue({ ptBR: '   ', en: 'Name' }, 'pt-BR')).toEqual(
      { value: 'Name', usedFallback: true },
    );
    expect(resolveLocalizedValue({ ptBR: null, en: 'Name' }, 'en')).toEqual({
      value: 'Name',
      usedFallback: false,
    });
  });

  it('applies the same fallback policy to localized lists', () => {
    expect(
      resolveLocalizedList({ ptBR: ['Espada'], en: ['Sword'] }, 'pt-BR'),
    ).toEqual({ value: ['Espada'], usedFallback: false });
    expect(
      resolveLocalizedList({ ptBR: null, en: ['Sword'] }, 'pt-BR'),
    ).toEqual({ value: ['Sword'], usedFallback: true });
    expect(
      resolveLocalizedList({ ptBR: null, en: ['Sword'] }, 'en'),
    ).toEqual({ value: ['Sword'], usedFallback: false });
  });

  it('detects relevant fallback without treating absent optional fields as fallback', () => {
    expect(ashOfWarUsesEnglishFallback(templateEntry, 'pt-BR')).toBe(false);
    expect(
      ashOfWarUsesEnglishFallback(
        { ...templateEntry, summary: { ptBR: null, en: 'Summary' } },
        'pt-BR',
      ),
    ).toBe(true);
    expect(
      ashOfWarUsesEnglishFallback(
        { ...templateEntry, skillType: null, specialEffects: null },
        'pt-BR',
      ),
    ).toBe(false);
    expect(ashOfWarUsesEnglishFallback(templateEntry, 'en')).toBe(false);
  });

  it('sorts with the active locale and ID as a stable tie-breaker', () => {
    const entries: readonly AshOfWar[] = [
      {
        ...templateEntry,
        id: 'z-id',
        name: { ptBR: 'Abadia', en: 'Zoo' },
      },
      {
        ...templateEntry,
        id: 'b-id',
        name: { ptBR: null, en: 'Abbey' },
      },
      {
        ...templateEntry,
        id: 'a-id',
        name: { ptBR: null, en: 'Abbey' },
      },
    ];

    expect(sortAshesOfWarAlphabetically(entries, 'pt-BR').map(({ id }) => id))
      .toEqual(['z-id', 'a-id', 'b-id']);
    expect(sortAshesOfWarAlphabetically(entries, 'en').map(({ id }) => id))
      .toEqual(['a-id', 'b-id', 'z-id']);
  });

  it('does not mutate source order while sorting', () => {
    const original = getAllAshesOfWar().map((entry) => entry.id);
    getSortedAshesOfWar('en');
    getSortedAshesOfWarByContentPack('base-game', 'pt-BR');
    expect(getAllAshesOfWar().map((entry) => entry.id)).toEqual(original);
  });

  it('builds deterministic searchable text with localized and English terms', () => {
    const values = getAshOfWarSearchableText(templateEntry, 'pt-BR');
    expect(values).toEqual([
      'Nome',
      'Name',
      'Habilidade',
      'Skill',
      'Local',
      'Location',
      'Obtenção',
      'Acquisition',
      'Resumo',
      'Summary',
      'Afinidade',
      'Affinity',
      'Método',
      'Method',
      'Espada',
      'Sword',
    ]);
    expect(values).not.toContain('');
    expect(values).not.toContain('null');
    expect(values).not.toContain('undefined');
  });

  it('keeps English searchable during Portuguese fallback', () => {
    const entry = {
      ...templateEntry,
      name: { ptBR: null, en: 'English only name' },
    };
    expect(getAshOfWarSearchableText(entry, 'pt-BR')).toContain(
      'English only name',
    );
  });
});
