const fs = require('node:fs');
const path = require('node:path');

const regionByFile = {
  BOSS_BATCH_LIMGRAVE_PROPOSAL: 'limgrave',
  BOSS_BATCH_WEEPING_PENINSULA_PROPOSAL: 'weeping-peninsula',
  BOSS_BATCH_SIOFRA_RIVER_PROPOSAL: 'siofra-river',
  BOSS_BATCH_LIURNIA_OF_THE_LAKES_PROPOSAL: 'liurnia-of-the-lakes',
  BOSS_BATCH_AINSEL_RIVER_PROPOSAL: 'ainsel-river',
  BOSS_BATCH_LAKE_OF_ROT_PROPOSAL: 'lake-of-rot',
  BOSS_BATCH_CAELID_PROPOSAL: 'caelid',
  BOSS_BATCH_GREYOLLS_DRAGONBARROW_PROPOSAL: 'greyolls-dragonbarrow',
  BOSS_BATCH_DEEPROOT_DEPTHS_PROPOSAL: 'deeproot-depths',
  BOSS_BATCH_ALTUS_PLATEAU_PROPOSAL: 'altus-plateau',
  BOSS_BATCH_MT_GELMIR_PROPOSAL: 'mt-gelmir',
  BOSS_BATCH_MOUNTAINTOPS_OF_THE_GIANTS_PROPOSAL: 'mountaintops-of-the-giants',
  BOSS_BATCH_CONSECRATED_SNOWFIELD_PROPOSAL: 'consecrated-snowfield',
  BOSS_BATCH_MOHGWYN_PALACE_PROPOSAL: 'mohgwyn-palace',
  BOSS_BATCH_MIQUELLAS_HALIGTREE_PROPOSAL: 'miquellas-haligtree',
  BOSS_BATCH_CRUMBLING_FARUM_AZULA_PROPOSAL: 'crumbling-farum-azula',
  BOSS_BATCH_GRAVESITE_PLAIN_PROPOSAL: 'gravesite-plain',
  BOSS_BATCH_SCADU_ALTUS_PROPOSAL: 'scadu-altus',
  BOSS_BATCH_RAUH_BASE_PROPOSAL: 'rauh-base',
  BOSS_BATCH_ANCIENT_RUINS_OF_RAUH_PROPOSAL: 'ancient-ruins-of-rauh',
  BOSS_BATCH_CERULEAN_COAST_PROPOSAL: 'cerulean-coast',
  BOSS_BATCH_CHAROS_HIDDEN_GRAVE_PROPOSAL: 'charos-hidden-grave',
  BOSS_BATCH_JAGGED_PEAK_PROPOSAL: 'jagged-peak',
  BOSS_BATCH_ABYSSAL_WOODS_PROPOSAL: 'abyssal-woods',
  BOSS_BATCH_FINGER_RUINS_OF_RHIA_PROPOSAL: 'finger-ruins-of-rhia',
  BOSS_BATCH_SCADUVIEW_PROPOSAL: 'scaduview',
};

const q = (value) => `'${value.replaceAll('\\', '\\\\').replaceAll("'", "\\'")}'`;
const localized = (value) => `localized(${q(value)})`;
const array = (values) => `[${values.map(localized).join(', ')}]`;

const specialFields = {
  'demi-human-chiefs-coastal-cave': [
    `barNames: ${array(['Demi-Human Chief', 'Demi-Human Chief'])}`,
    'mainParticipantCount: 2',
    `mainParticipants: ${array(['Demi-Human Chief', 'Demi-Human Chief'])}`,
  ],
  'glintstone-dragon-adula-cathedral-of-manus-celes': [
    `phases: [{ name: ${localized('Glintstone Dragon Adula')}, location: ${localized('Three Sisters')} }, { name: ${localized('Glintstone Dragon Adula')}, location: ${localized('Cathedral of Manus Celes')} }]`,
  ],
  'ancient-dragon-lansseax-rampartside-path': [
    `phases: [{ name: ${localized('Ancient Dragon Lansseax')}, location: ${localized('Abandoned Coffin')} }, { name: ${localized('Ancient Dragon Lansseax')}, location: ${localized('Rampartside Path')} }]`,
  ],
  'spiritcaller-snail-spiritcaller-cave': [
    `originalName: ${localized('Godskin Apostle and Godskin Noble (Spiritcaller Snail)')}`,
    `summons: ${array(['Godskin Apostle', 'Godskin Noble'])}`,
  ],
  'fias-champions-prince-of-deaths-throne': [
    `mainParticipants: ${array(['Sorcerer Rogier', 'Lionel the Lionhearted'])}`,
    'variableMainParticipantCount: 3',
    `phases: [${['Wave 1', 'Wave 2', 'Wave 3'].map((name) => `{ name: ${localized(name)} }`).join(', ')}]`,
  ],
  'radagon-elden-beast-elden-throne': [
    `phases: [${['Radagon of the Golden Order', 'Elden Beast'].map((name) => `{ name: ${localized(name)} }`).join(', ')}]`,
  ],
  'godfrey-hoarah-loux-elden-throne': [
    `phases: [${['Godfrey, First Elden Lord', 'Hoarah Loux, Warrior'].map((name) => `{ name: ${localized(name)} }`).join(', ')}]`,
  ],
  'malenia-blade-miquella-haligtree-roots': [
    `phases: [${['Malenia, Blade of Miquella', 'Malenia, Goddess of Rot'].map((name) => `{ name: ${localized(name)} }`).join(', ')}]`,
  ],
  'god-devouring-serpent-rykard-audience-pathway': [
    `phases: [${['God-Devouring Serpent', 'Rykard, Lord of Blasphemy'].map((name) => `{ name: ${localized(name)} }`).join(', ')}]`,
  ],
  'beast-clergyman-maliketh-beside-great-bridge': [
    `phases: [${['Beast Clergyman', 'Maliketh, the Black Blade'].map((name) => `{ name: ${localized(name)} }`).join(', ')}]`,
  ],
  'messmer-the-impaler-dark-chamber': [
    `barNames: ${array(['Messmer the Impaler', 'Base Serpent Messmer'])}`,
    `phases: [${['Messmer the Impaler', 'Base Serpent Messmer'].map((name) => `{ name: ${localized(name)} }`).join(', ')}]`,
  ],
  'promised-consort-radahn-divine-gate': [
    `barNames: ${array(['Promised Consort Radahn', 'Radahn, Consort of Miquella'])}`,
    `phases: [${['Promised Consort Radahn', 'Radahn, Consort of Miquella'].map((name) => `{ name: ${localized(name)} }`).join(', ')}]`,
  ],
  'leda-and-allies-cleansing-chamber': [
    `barNames: ${array(['Needle Knight Leda', 'Dryleaf Dane', 'Redmane Freyja', 'Hornsent', 'Moore'])}`,
    `mainParticipants: ${array(['Needle Knight Leda', 'Dryleaf Dane', 'Redmane Freyja', 'Hornsent', 'Moore'])}`,
  ],
  'jagged-peak-drake-foot-of-jagged-peak': [
    `auxiliaryEnemies: ${array(['Jagged Peak Drake'])}`,
  ],
};

function parseParticipantCount(value) {
  const range = value.match(/^(\d+)\s*[–-]\s*(\d+)$/);
  if (range) return `{ min: ${range[1]}, max: ${range[2]} }`;
  const integer = value.match(/^(\d+)$/);
  if (integer) return integer[1];
  const across = value.match(/^(\d+)\s+across/);
  if (across) return across[1];
  if (value === 'recurring pair') return '2';
  if (value.startsWith('1,') || value.startsWith('2 phases')) return '1';
  return undefined;
}

const encounters = [];
for (const [fileBase, regionId] of Object.entries(regionByFile)) {
  const file = path.join('docs', `${fileBase}.md`);
  const lines = fs.readFileSync(file, 'utf8').split(/\r?\n/);
  for (const line of lines) {
    if (!/^\| \d+ \|/.test(line)) continue;
    const cells = line.slice(1, -1).split('|').map((cell) => cell.trim().replaceAll('`', ''));
    const isLimgrave = fileBase === 'BOSS_BATCH_LIMGRAVE_PROPOSAL';
    const isConfirmed = isLimgrave ? cells[5] === 'confirmed' : cells.at(-2) === 'confirmed';
    if (cells.at(-1) !== 'approved' || !isConfirmed) continue;

    const isCompact = cells.length === 8;
    let originalName;
    let name;
    let barName;
    let location;
    let availability;
    let participantText;

    if (isLimgrave) {
      [, , name, location, availability] = cells;
      barName = name;
      participantText = '1';
    } else if (isCompact) {
      [, , name, location, availability, participantText] = cells;
      barName = name;
    } else {
      [, , originalName, barName, location, availability, participantText] = cells;
      name = fileBase.match(/GRAVESITE|SCADU_ALTUS|JAGGED|ABYSSAL|SCADUVIEW/)
        ? barName
        : originalName;
    }

    const id = cells[1];
    const barNames = barName.split(';').map((value) => value.trim()).filter(Boolean);
    const fields = [
      `id: ${q(id)}`,
      `regionId: ${q(regionId)}`,
      `name: ${localized(name)}`,
      `location: ${localized(location)}`,
    ];
    if (availability && !['—', 'â€”', '-'].includes(availability)) {
      fields.push(`availability: ${localized(availability)}`);
    }
    if (originalName && originalName !== name) fields.push(`originalName: ${localized(originalName)}`);
    const special = specialFields[id] ?? [];
    if (!special.some((field) => field.startsWith('barNames:'))) {
      fields.push(`barNames: ${array(barNames)}`);
    }
    const participantCount = parseParticipantCount(participantText);
    if (participantCount && !special.some((field) => field.startsWith('mainParticipantCount:'))) {
      fields.push(`mainParticipantCount: ${participantCount}`);
    }
    if (!special.some((field) => field.startsWith('mainParticipants:'))) {
      fields.push(`mainParticipants: ${array(barNames)}`);
    }
    fields.push(...special);
    encounters.push(`  {\n${fields.map((field) => `    ${field},`).join('\n')}\n  },`);
  }
}

if (encounters.length !== 208) {
  throw new Error(`Expected 208 approved encounters, got ${encounters.length}.`);
}

const output = `import type { BossEncounter } from './types';\n\nfunction localized(value: string) {\n  return { 'pt-BR': value, en: value } as const;\n}\n\nexport const bossEncounters: readonly BossEncounter[] = Object.freeze([\n${encounters.join('\n')}\n]);\n`;
fs.writeFileSync(path.join('src', 'data', 'catalog', 'bossEncounters.ts'), output);
