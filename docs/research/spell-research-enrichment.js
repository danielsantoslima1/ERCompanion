const OFFICIAL_VERSION_SOURCE = 'bandai-namco-patch-1-16-1';
const LEGENDARY_SOURCE = 'steam-legendary-achievement';
const LEGENDARY_LIST_SOURCE = 'eldenpedia-legendary-achievement-list';
const MISSABLE_SOURCE = 'eldenpedia-missable-acquisition-pages';
const MISSABLE_CROSSCHECK = 'community-missable-crosscheck';
const POWERPYX_SORCERIES = 'powerpyx-all-sorcery-locations';
const POWERPYX_INCANTATIONS = 'powerpyx-all-incantation-locations';
const GAME8_SORCERIES = 'game8-current-sorcery-locations';
const GAME8_INCANTATIONS = 'game8-current-incantation-locations';
const GAMER_GUIDES_DLC_SORCERIES = 'gamer-guides-dlc-sorceries';
const GAMER_GUIDES_DLC_INCANTATIONS = 'gamer-guides-dlc-incantations';
const GAMESPOT_DLC_SPELLS = 'gamespot-dlc-spell-locations';
const completion = require('./spell-data-completion.json');
const COMPLETION_BY_ID = new Map(completion.entries.map((entry) => [entry.id, entry]));

const LEGENDARY_IDS = new Set([
  'sorcery-comet-azur',
  'sorcery-founding-rain-of-stars',
  'sorcery-rannis-dark-moon',
  'sorcery-stars-of-ruin',
  'incantation-elden-stars',
  'incantation-flame-of-the-fell-god',
  'incantation-greyolls-roar',
]);

const LEGACY_MISSABLE_RESEARCH = new Map([
  ['sorcery-gelmirs-fury', 'Reward tied to Bernahl’s Volcano Manor request before the quest hub becomes unavailable.'],
  ['sorcery-magma-shot', 'Reward tied to the first Volcano Manor assassination request before that quest hub becomes unavailable.'],
  ['sorcery-shard-spiral', 'Available only from the branch that assists Sellen at the end of her quest.'],
  ['incantation-watchful-spirit', 'Quest reward from the Hornsent Grandam whose progression can be locked by later DLC events.'],
  ['incantation-furious-blade-of-ansbach', 'Requires completing Ansbach’s quest on the branch that preserves his participation.'],
  ['incantation-dragonbolt-of-florissax', 'Requires a specific interaction and outcome in the Dragon Communion Priestess quest.'],
  ['incantation-bayles-flame-lightning', 'Consumes the unique Heart of Bayle and excludes the other Heart of Bayle incantation in the same journey.'],
  ['incantation-bayles-tyranny', 'Consumes the unique Heart of Bayle and excludes the other Heart of Bayle incantation in the same journey.'],
]);
void LEGACY_MISSABLE_RESEARCH;

const MISSABLE_RESEARCH = new Map([
  ['sorcery-gelmirs-fury', { value: false, explanation: 'Bernahl can still drop the sorcery during his later invasion, so it remains recoverable after Volcano Manor closes.' }],
  ['sorcery-magma-shot', { value: false, explanation: 'The reward remains in Volcano Manor after the first contract is completed, including after Rykard is defeated.' }],
  ['sorcery-shard-spiral', { value: true, explanation: 'Siding against Sellen permanently removes her post-quest shop for the current journey.' }],
  ['incantation-watchful-spirit', { value: true, explanation: 'Irreversible NPC or world progression can permanently remove the Hornsent Grandam quest reward.' }],
  ['incantation-furious-blade-of-ansbach', { value: true, explanation: 'Siding with Leda against Ansbach permanently prevents his post-boss body reward.' }],
  ['incantation-dragonbolt-of-florissax', { value: true, explanation: 'The required concoction and priestess outcome must be secured before irreversible quest and boss progression.' }],
  ['incantation-bayles-flame-lightning', { value: false, explanation: 'An exclusive Heart of Bayle exchange is not missable under the approved strict rule.' }],
  ['incantation-bayles-tyranny', { value: false, explanation: 'An exclusive Heart of Bayle exchange is not missable under the approved strict rule.' }],
]);

function localizedPending() {
  return {
    en: null,
    ptBR: null,
    enStatus: 'pending',
    ptBRStatus: 'pending',
    sourceRefs: [],
  };
}

function localizedFromEnglish(en, status, sourceRefs) {
  return {
    en,
    ptBR: null,
    enStatus: status,
    ptBRStatus: 'pending',
    sourceRefs: [...sourceRefs],
  };
}

function numericPending(unit = null) {
  return {
    value: null,
    unit,
    status: 'pending',
    sourceRefs: [],
    notes: [],
  };
}

function collectionPending() {
  return {
    values: null,
    status: 'pending',
    sourceRefs: [],
    notes: [],
  };
}

function collectionFromLocalized(field) {
  if (!field?.en) return collectionPending();
  return {
    values: [{
      en: field.en,
      ptBR: null,
    }],
    status: field.enStatus,
    sourceRefs: [...field.sourceRefs],
    notes: [],
  };
}

function convertRequirement(value, sourceRefs) {
  return {
    value: value ?? 0,
    status: 'probable',
    sourceRefs: [...sourceRefs],
    notes: [
      value === null
        ? 'The reviewed source presents no requirement for this attribute; represented as zero, not as an unresearched null.'
        : 'Current public structured spell table; direct game-interface confirmation remains pending.',
    ],
  };
}

function cleanResearchText(value) {
  if (!value) return null;
  return value
    .replace(/\|max_held=.*$/i, '')
    .replace(/\}\}+$/g, '')
    .replace(/^Purchase$/i, 'Purchase from the documented merchant')
    .trim() || null;
}

function acquisitionType(text) {
  if (!text) return 'other';
  if (/remembrance|heart of bayle/i.test(text)) return 'remembrance-exchange';
  if (/prayerbook/i.test(text)) return 'prayerbook-delivery';
  if (/scroll/i.test(text)) return 'scroll-delivery';
  if (/scarab/i.test(text)) return 'scarab';
  if (/dropped by|drop from/i.test(text)) return 'enemy-drop';
  if (/defeat|boss/i.test(text)) return 'boss-reward';
  if (/give |quest/i.test(text)) return 'quest-reward';
  if (/sold|purchase|sellen|thops|miriel|corhyn|ymir|seluvis|gideon|gowry|twin maiden/i.test(text)) return 'purchase';
  if (/altar|communion/i.test(text)) return 'altar-exchange';
  return 'found-in-world';
}

function likelyNamedLocation(text) {
  if (!text || /purchase from|dropped by|give |trade |remembrance|defeat |sold by|\/|altar/i.test(text)) {
    return false;
  }
  return /(ruins|cave|catacombs|castle|church|rise|tower|manor|academy|lake|river|plateau|mountain|mountaintops|snowfield|depths|palace|capital|azula|keep|village|grave|gaol|fissure|limgrave|liurnia|caelid|gelmir|enir-ilim|belurat)/i.test(text);
}

function sourceRefsForEntry(entry, originalRefs) {
  const independent = entry.contentPack === 'base-game'
    ? entry.category === 'sorcery'
      ? [POWERPYX_SORCERIES, GAME8_SORCERIES]
      : [POWERPYX_INCANTATIONS, GAME8_INCANTATIONS]
    : entry.category === 'sorcery'
      ? [GAMER_GUIDES_DLC_SORCERIES, GAMESPOT_DLC_SPELLS]
      : [GAMER_GUIDES_DLC_INCANTATIONS, GAMESPOT_DLC_SPELLS];
  return [...new Set([...originalRefs, ...independent])];
}

function availabilityFor(entry, type) {
  const tags = [];
  if (type === 'quest-reward') tags.push('quest');
  if (type === 'remembrance-exchange' || /heart of bayle/i.test(entry.primarySource.en ?? '')) {
    tags.push('once-per-playthrough');
  }
  if (MISSABLE_RESEARCH.has(entry.id)) {
    if (!tags.includes('quest') && !/bayle/i.test(entry.id)) tags.push('quest');
    tags.push('exclusive-choice', 'new-game-plus');
  } else if (['found-in-world', 'scarab', 'enemy-drop', 'boss-reward'].includes(type)) {
    tags.push('permanent');
  }
  return [...new Set(tags)];
}

function enrichAcquisition(entry, method, index) {
  const rawMethod = cleanResearchText(method.method.en);
  const rawLocation = cleanResearchText(method.location.en);
  const rawSource = cleanResearchText(entry.primarySource.en) ?? rawMethod;
  const type = acquisitionType(rawMethod);
  const refs = sourceRefsForEntry(entry, method.sourceRefs);
  const derivedLocation = rawLocation ?? (likelyNamedLocation(rawMethod) ? rawMethod : null);
  const tags = availabilityFor(entry, type);
  const questSpoiler = MISSABLE_RESEARCH.has(entry.id) && !/bayles-(?:flame-lightning|tyranny)/.test(entry.id);
  const safeText = questSpoiler
    ? derivedLocation ?? 'Quest-related acquisition'
    : derivedLocation ?? rawMethod;
  const action = rawMethod
    ? `Complete the documented acquisition: ${rawMethod}.`
    : 'The acquisition action still requires documentation.';

  return {
    ...method,
    order: index + 1,
    methodType: type,
    method: rawMethod
      ? localizedFromEnglish(rawMethod, method.method.enStatus, refs)
      : localizedPending(),
    location: derivedLocation
      ? localizedFromEnglish(derivedLocation, 'probable', refs)
      : localizedPending(),
    region: localizedPending(),
    nearestSiteOfGrace: localizedPending(),
    shortCardLocation: safeText
      ? localizedFromEnglish(safeText, 'probable', refs)
      : localizedPending(),
    source: rawSource
      ? localizedFromEnglish(rawSource, entry.primarySource.enStatus, refs)
      : localizedPending(),
    npc: method.relatedNpc.en
      ? localizedFromEnglish(cleanResearchText(method.relatedNpc.en), method.relatedNpc.enStatus, refs)
      : localizedPending(),
    enemy: /drop|defeat|scarab/i.test(rawMethod ?? '')
      ? localizedFromEnglish(rawMethod, 'probable', refs)
      : localizedPending(),
    boss: /boss|remembrance|defeat/i.test(rawMethod ?? '')
      ? localizedFromEnglish(rawMethod, 'probable', refs)
      : localizedPending(),
    requiredItem: localizedPending(),
    requirements: method.questConditions.en
      ? localizedFromEnglish(cleanResearchText(method.questConditions.en), method.questConditions.enStatus, refs)
      : localizedPending(),
    steps: {
      values: [{
        order: 1,
        text: localizedFromEnglish(action, 'pending', []),
      }],
      complete: false,
      status: 'pending',
      sourceRefs: refs,
    },
    availabilityTags: {
      values: tags,
      status: tags.length ? 'probable' : 'pending',
      sourceRefs: tags.length ? refs : [],
    },
    containsQuestSpoilers: {
      value: questSpoiler,
      status: questSpoiler ? 'probable' : 'pending',
      sourceRefs: questSpoiler ? refs : [],
    },
    spoilerSafeCardText: safeText
      ? localizedFromEnglish(safeText, 'probable', refs)
      : localizedPending(),
    searchAliases: {
      values: null,
      status: 'pending',
      sourceRefs: [],
      notes: [],
    },
    intermediateItem: localizedPending(),
    relatedLocation: localizedPending(),
    priceRunes: numericPending('runes'),
    enemyDrop: localizedPending(),
    baseDropRatePercent: numericPending('percent'),
    recoveryAlternative: localizedPending(),
    sourceRefs: refs,
  };
}

function enrichEntry(entry) {
  const completed = COMPLETION_BY_ID.get(entry.id);
  const requirementSources = entry.requirements.sourceRefs ?? [];
  const missableResearch = MISSABLE_RESEARCH.get(entry.id);
  const isLegendary = LEGENDARY_IDS.has(entry.id);

  const cleanPrimarySource = cleanResearchText(entry.primarySource.en);
  const sourceRefs = sourceRefsForEntry(entry, entry.primarySource.sourceRefs);
  const rawMethods = entry.acquisitionMethods.length > 0
    ? entry.acquisitionMethods
    : [{
        location: localizedPending(),
        method: entry.primarySource.en ? entry.primarySource : localizedPending(),
        relatedNpc: localizedPending(),
        questConditions: localizedPending(),
        requiredChoices: localizedPending(),
        sourceRefs: [...entry.sourceRefs],
        status: entry.primarySource.en ? entry.primarySource.enStatus : 'pending',
      }];
  const enrichedMethods = rawMethods.map((method, index) =>
    enrichAcquisition(entry, method, index));
  if (completed && enrichedMethods[0]) {
    const refs = [...new Set([...enrichedMethods[0].sourceRefs, completion.source])];
    enrichedMethods[0] = {
      ...enrichedMethods[0],
      method: localizedFromEnglish(completed.acquisitionSummary ?? completed.obtained, 'confirmed', refs),
      location: localizedFromEnglish(completed.mainLocation, 'confirmed', refs),
      region: localizedFromEnglish(completed.region, 'confirmed', refs),
      shortCardLocation: localizedFromEnglish(`${completed.mainLocation} - ${completed.region}`, 'confirmed', refs),
      source: localizedFromEnglish(completed.obtained ?? completed.acquisitionSummary, 'confirmed', refs),
      sourceRefs: refs,
      status: 'confirmed',
    };
  }
  const primaryMethod = enrichedMethods[0];
  const derivedPrimaryLocation = completed
    ? `${completed.mainLocation} - ${completed.region}`
    : entry.primaryLocation.en
    ?? primaryMethod?.location.en
    ?? (likelyNamedLocation(cleanPrimarySource) ? cleanPrimarySource : null);

  const enriched = {
    ...entry,
    primaryLocation: derivedPrimaryLocation
      ? localizedFromEnglish(derivedPrimaryLocation, 'probable', sourceRefs)
      : localizedPending(),
    primarySource: completed?.obtained || cleanPrimarySource
      ? localizedFromEnglish(completed?.obtained ?? cleanPrimarySource, completed ? 'confirmed' : entry.primarySource.enStatus, completed ? [...new Set([...sourceRefs, completion.source])] : sourceRefs)
      : localizedPending(),
    primaryAcquisition: primaryMethod
      ? {
          methodIndex: 0,
          status: primaryMethod.status,
          sourceRefs: [...primaryMethod.sourceRefs],
        }
      : null,
    cardSummary: completed
      ? localizedFromEnglish(derivedPrimaryLocation, 'confirmed', [completion.source])
      : primaryMethod?.spoilerSafeCardText ?? localizedPending(),
    acquisitionMethods: enrichedMethods,
    locationAliases: collectionPending(),
    relatedNpcs: collectionFromLocalized(entry.relatedNpc),
    relatedLocations: collectionFromLocalized(entry.relatedLocation),
    intermediateItems: collectionPending(),
    priceRunes: completed?.purchasePrice == null
      ? numericPending('runes')
      : { value: completed.purchasePrice, unit: 'runes', status: 'confirmed', sourceRefs: [completion.source], notes: [] },
    enemyDrop: localizedPending(),
    baseDropRatePercent: numericPending('percent'),
    missable: {
          value: missableResearch?.value ?? false,
          explanation: {
            en: missableResearch?.explanation ?? 'No irreversible loss condition was identified under the approved strict missable rule.',
            ptBR: null,
            enStatus: 'probable',
            ptBRStatus: 'pending',
            sourceRefs: [MISSABLE_SOURCE, MISSABLE_CROSSCHECK],
          },
          status: missableResearch ? 'confirmed' : 'probable',
          sourceRefs: [MISSABLE_SOURCE, MISSABLE_CROSSCHECK],
        },
    legendary: {
      value: isLegendary,
      status: 'confirmed',
      sourceRefs: [LEGENDARY_SOURCE, LEGENDARY_LIST_SOURCE],
    },
    requirements: {
      intelligence: convertRequirement(completed?.intelligenceRequired ?? entry.requirements.intelligence, requirementSources),
      faith: convertRequirement(completed?.faithRequired ?? entry.requirements.faith, requirementSources),
      arcane: convertRequirement(completed?.arcaneRequired ?? entry.requirements.arcane, requirementSources),
    },
    fpCost: completed?.fpCost == null ? entry.fpCost : { value: completed.fpCost, status: 'confirmed', sourceRefs: [completion.source], notes: [] },
    memorySlots: completed?.slotsUsed == null ? entry.memorySlots : { value: completed.slotsUsed, status: 'confirmed', sourceRefs: [completion.source], notes: [] },
    staminaCost: completed?.staminaCost == null ? entry.staminaCost : { value: completed.staminaCost, status: 'confirmed', sourceRefs: [completion.source], notes: [] },
    statusConditions: collectionPending(),
    healingAndBuffs: collectionPending(),
    applicationRestrictions: localizedPending(),
    rangeDescription: localizedPending(),
    areaShape: localizedPending(),
    effectInteractions: localizedPending(),
    pvpDifferences: localizedPending(),
    documentedVersion: {
      value: '1.16.1',
      status: 'confirmed',
      sourceRefs: [OFFICIAL_VERSION_SOURCE],
      notes: [
        'Latest official regulation version found during this review; it does not independently confirm every community-sourced value.',
      ],
    },
    sourceRefs: [...new Set([
      ...sourceRefsForEntry(entry, entry.sourceRefs),
      OFFICIAL_VERSION_SOURCE,
      MISSABLE_SOURCE,
      MISSABLE_CROSSCHECK,
      completion.source,
      ...(isLegendary ? [LEGENDARY_SOURCE, LEGENDARY_LIST_SOURCE] : []),
    ])],
  };
  delete enriched.relatedNpc;
  delete enriched.relatedLocation;
  return enriched;
}

function enrichResearch(research) {
  const additionalSources = [
    OFFICIAL_VERSION_SOURCE,
    LEGENDARY_SOURCE,
    LEGENDARY_LIST_SOURCE,
    MISSABLE_SOURCE,
    MISSABLE_CROSSCHECK,
    POWERPYX_SORCERIES,
    POWERPYX_INCANTATIONS,
    GAME8_SORCERIES,
    GAME8_INCANTATIONS,
    GAMER_GUIDES_DLC_SORCERIES,
    GAMER_GUIDES_DLC_INCANTATIONS,
    GAMESPOT_DLC_SPELLS,
    completion.source,
  ];

  research.researchVersion = 2;
  research.reviewedAgainstVersion = '1.16.1';
  research.sources = [...new Set([...research.sources, ...additionalSources])];
  research.entries = research.entries.map(enrichEntry);
  return research;
}

module.exports = {
  LEGENDARY_IDS,
  MISSABLE_RESEARCH,
  enrichResearch,
};
