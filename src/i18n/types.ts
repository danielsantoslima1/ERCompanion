export interface TranslationDictionary {
  app: {
    name: string;
    description: string;
  };
  navigation: {
    home: string;
    bosses: string;
    settings: string;
    allBosses: string;
    ashesOfWar: string;
    allAshesOfWar: string;
    sorceries: string;
    allSorceries: string;
    incantations: string;
    allIncantations: string;
    drawerDescription: string;
    expandBosses: string;
    collapseBosses: string;
    expandAshesOfWar: string;
    collapseAshesOfWar: string;
    expandSorceries: string;
    collapseSorceries: string;
    expandIncantations: string;
    collapseIncantations: string;
    expandBaseGame: string;
    collapseBaseGame: string;
    expandExpansion: string;
    collapseExpansion: string;
    noRegions: string;
    selected: string;
  };
  home: {
    title: string;
    description: string;
    totalProgress: string;
    overallProgress: string;
    defeatedBosses: string;
    progressByRegion: string;
    availableRegions: string;
    noProgress: string;
    noRegions: string;
    baseGameProgress: string;
    expansionProgress: string;
    openAllBosses: (contentName: string) => string;
    overallProgressAccessibility: (
      completed: number,
      total: number,
      percentage: number,
    ) => string;
    categoryProgressAccessibility: (
      categoryName: string,
      completed: number,
      total: number,
      percentage: number,
    ) => string;
    totalProgressAccessibility: (
      defeated: number,
      total: number,
      percentage: number,
    ) => string;
    regionProgressAccessibility: (
      regionName: string,
      defeated: number,
      total: number,
      percentage: number,
    ) => string;
  };
  bosses: {
    title: string;
    description: string;
    regionList: string;
    noRegions: string;
    openRegion: (regionName: string) => string;
    regionProgress: (
      defeated: number,
      total: number,
      percentage: number,
    ) => string;
  };
  allBosses: {
    combinedTitle: string;
    combinedProgress: string;
    baseGameTitle: string;
    expansionTitle: string;
    baseGameProgress: string;
    expansionProgress: string;
    invalidTitle: string;
    invalidMessage: string;
    boss: string;
    region: string;
    location: string;
  };
  region: {
    progress: string;
    search: string;
    searchPlaceholder: string;
    all: string;
    defeated: string;
    notDefeated: string;
    markAsDefeated: string;
    markAsNotDefeated: string;
    noBossesFound: string;
    noBossesInRegion: string;
    defeatedStatus: string;
    notDefeatedStatus: string;
    saving: string;
    updateErrorTitle: string;
    updateErrorMessage: string;
    notFoundTitle: string;
    notFoundMessage: string;
    back: string;
    resultCount: (count: number) => string;
    progressAccessibility: (
      regionName: string,
      defeated: number,
      total: number,
      percentage: number,
    ) => string;
    bossCardAccessibility: (
      bossName: string,
      regionName: string | undefined,
      location: string,
      status: string,
    ) => string;
  };
  bossDetails: {
    details: string;
    viewDetails: string;
    viewDetailsFor: (bossName: string) => string;
    region: string;
    location: string;
    availability: string;
    status: string;
    defeated: string;
    notDefeated: string;
    bossBarNames: string;
    participants: string;
    phases: string;
    summons: string;
    supportingEnemies: string;
    encounterNotFound: string;
    encounterNotFoundMessage: string;
    back: string;
    singleEncounter: string;
    sameProgressUnit: string;
    variableComposition: string;
    variableParticipantCount: (count: number) => string;
    participantCount: (count: number) => string;
    participantRange: (minimum: number, maximum: number) => string;
  };
  ashesOfWar: {
    title: string;
    allTitle: string;
    baseGameTitle: string;
    expansionTitle: string;
    progress: string;
    search: string;
    searchPlaceholder: string;
    all: string;
    collected: string;
    notCollected: string;
    collectedStatus: string;
    notCollectedStatus: string;
    markAsCollected: string;
    markAsNotCollected: string;
    saving: string;
    updateErrorTitle: string;
    updateErrorMessage: string;
    noResults: string;
    resultCount: (count: number) => string;
    viewDetails: string;
    viewDetailsFor: (name: string) => string;
    cardAccessibility: (
      name: string,
      location: string,
      status: string,
    ) => string;
    collectAccessibility: (action: string, name: string) => string;
    details: string;
    origin: string;
    primaryLocation: string;
    primaryAcquisition: string;
    acquisitionMethods: string;
    summary: string;
    skill: string;
    skillType: string;
    affinity: string;
    compatibleEquipment: string;
    fpCost: string;
    specialEffects: string;
    limitations: string;
    notes: string;
    collectionStatus: string;
    fallbackNotice: string;
    notFoundTitle: string;
    notFoundMessage: string;
    back: string;
  };
  spells: {
    sorceries: string;
    incantations: string;
    allSorceries: string;
    allIncantations: string;
    sorceryBaseGameTitle: string;
    sorceryExpansionTitle: string;
    incantationBaseGameTitle: string;
    incantationExpansionTitle: string;
    sorceryProgress: string;
    incantationProgress: string;
    search: string;
    searchPlaceholder: string;
    legendary: string;
    missable: string;
    collected: string;
    notCollected: string;
    markAsCollected: string;
    markAsNotCollected: string;
    saving: string;
    updateErrorTitle: string;
    updateErrorMessage: string;
    noResults: string;
    resultCount: (count: number) => string;
    locationPending: string;
    spoilerMatch: string;
    viewDetails: string;
    viewDetailsFor: (name: string) => string;
    cardAccessibility: (name: string, location: string, status: string) => string;
    collectAccessibility: (action: string, name: string) => string;
    sorceryDetails: string;
    incantationDetails: string;
    origin: string;
    category: string;
    primaryLocation: string;
    primarySource: string;
    acquisitionMethods: string;
    collectionStatus: string;
    fallbackNotice: string;
    legendaryStatus: string;
    containsQuestSpoilers: string;
    expandSpoiler: string;
    collapseSpoiler: string;
    availability: string;
    permanent: string;
    oncePerPlaythrough: string;
    quest: string;
    exclusiveChoice: string;
    ngPlus: string;
    notFoundTitle: string;
    notFoundMessage: string;
    back: string;
  };
  settings: {
    title: string;
    description: string;
    language: string;
    languageDescription: string;
    portuguese: string;
    portugueseDescription: string;
    english: string;
    englishDescription: string;
    theme: string;
    themeDescription: string;
    system: string;
    systemDescription: string;
    light: string;
    lightDescription: string;
    dark: string;
    darkDescription: string;
    selected: string;
    saving: string;
    saveErrorTitle: string;
    saveErrorMessage: string;
    progressManagement: string;
    progressManagementDescription: string;
    defeatedBossCount: (count: number) => string;
    resetProgress: string;
    resettingProgress: string;
    resetProgressDescription: string;
  };
  resetConfirmation: {
    title: string;
    message: string;
    cancel: string;
    confirm: string;
    success: string;
    errorTitle: string;
    errorMessage: string;
  };
  placeholders: {
    homeMessage: string;
    bossesMessage: string;
    settingsMessage: string;
    initializationErrorMessage: string;
  };
  common: {
    baseGame: string;
    expansion: string;
    baseFilter: string;
    dlcFilter: string;
    filterByOrigin: (origin: string) => string;
    loading: string;
    error: string;
    tryAgain: string;
    yes: string;
    no: string;
  };
}
