const fs = require('fs');
const path = require('path');
const https = require('https');

const API = 'https://eldenring.wiki.gg/api.php';
const output = path.join(__dirname, 'talismans-catalog-research.json');

function request(params) {
  const url = `${API}?${new URLSearchParams({ ...params, format: 'json', formatversion: '2' })}`;
  return new Promise((resolve, reject) => https.get(url, { headers: { 'User-Agent': 'ERCompanion factual catalog builder' } }, (response) => {
    let body = '';
    response.setEncoding('utf8');
    response.on('data', (chunk) => { body += chunk; });
    response.on('end', () => response.statusCode === 200 ? resolve(JSON.parse(body)) : reject(new Error(`HTTP ${response.statusCode}`)));
  }).on('error', reject));
}

function clean(value) {
  return value
    .replace(/<!--.*?-->/gs, '')
    .replace(/<br\s*\/?\s*>/gi, ' ')
    .replace(/<ref[^>]*>.*?<\/ref>/gis, '')
    .replace(/<ref[^>]*\/>/gi, '')
    .replace(/\{\{R\}\}/g, 'runes')
    .replace(/\{\{[^{}|]+\|([^{}]+)\}\}/g, '$1')
    .replace(/\[\[[^\]|]+\|([^\]]+)\]\]/g, '$1')
    .replace(/\[\[([^\]]+)\]\]/g, '$1')
    .replace(/'''?/g, '')
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function section(text, name, nextNames) {
  const start = text.search(new RegExp(`==[^\\n]*${name}[^\\n]*==`, 'i'));
  if (start < 0) return '';
  const afterHeading = text.indexOf('\n', start);
  const tail = text.slice(afterHeading + 1);
  const end = tail.search(new RegExp(`==[^\\n]*(?:${nextNames.join('|')})[^\\n]*==`, 'i'));
  return clean(end < 0 ? tail : tail.slice(0, end));
}

function infobox(text, key) {
  const match = text.match(new RegExp(`^\\|\\s*${key}\\s*=\\s*(.+)$`, 'im'));
  return match ? clean(match[1]) : '';
}

function slugify(name) {
  return name.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function inferRegion(acquisition, isDlc) {
  const regions = isDlc
    ? ['Abyssal Woods', 'Ancient Ruins of Rauh', 'Belurat, Tower Settlement', "Charo's Hidden Grave", 'Cerulean Coast', 'Enir-Ilim', 'Gravesite Plain', 'Jagged Peak', 'Rauh Base', 'Scadu Altus', 'Scaduview', 'Shadow Keep', 'Southern Shore']
    : ["Miquella's Haligtree", 'Crumbling Farum Azula', 'Mountaintops of the Giants', 'Consecrated Snowfield', 'Leyndell, Ashen Capital', 'Leyndell, Royal Capital', 'Capital Outskirts', 'Altus Plateau', 'Mt. Gelmir', 'Liurnia of the Lakes', 'Weeping Peninsula', 'Limgrave', 'Caelid', "Greyoll's Dragonbarrow", 'Siofra River', 'Ainsel River', 'Nokron, Eternal City', 'Nokstella, Eternal City', 'Deeproot Depths', 'Mohgwyn Palace', 'Lake of Rot'];
  return regions.find((region) => acquisition.includes(region)) || (isDlc ? 'Realm of Shadow' : 'The Lands Between');
}

const REGION_OVERRIDES = {
  "Ancestral Spirit's Horn": 'Roundtable Hold', 'Arsenal Charm': 'Roundtable Hold', 'Arsenal Charm +1': 'Altus Plateau',
  'Claw Talisman': 'Limgrave', 'Companion Jar': 'Liurnia of the Lakes', "Daedicar's Woe": 'Mt. Gelmir',
  'Dragoncrest Greatshield Talisman': "Miquella's Haligtree", "Flock's Canvas Talisman": 'Caelid',
  "Furled Finger's Trick-Mirror": 'Roundtable Hold', "Host's Trick-Mirror": 'Roundtable Hold', "Marika's Soreseal": "Miquella's Haligtree",
  "Millicent's Prosthesis": 'Altus Plateau', "Prince of Death's Pustule": 'Limgrave', 'Rotten Winged Sword Insignia': "Miquella's Haligtree",
  'Silver Scarab': 'Mountaintops of the Giants', 'Spelldrake Talisman +2': 'Mountaintops of the Giants', 'Warrior Jar Shard': 'Limgrave',
  'Beloved Stardust': 'Scadu Altus', 'Enraged Divine Beast': 'Gravesite Plain', 'Fine Crucible Feather Talisman': 'Scadu Altus',
  'Golden Braid': 'Scaduview', 'Pearl Shield Talisman': 'Rauh Base', "Rellana's Cameo": 'Gravesite Plain',
  'Shattered Stone Talisman': 'Scadu Altus', 'Smithing Talisman': 'Scadu Altus', "St. Trina's Smile": 'Cerulean Coast',
  'Stalwart Horn Charm +2': 'Scadu Altus', 'Talisman of All Crucibles': 'Ancient Ruins of Rauh', 'Viridian Amber Medallion +3': 'Abyssal Woods',
};

const FACT_OVERRIDES = {
  'Axe Talisman': { detailedLocation: 'A chest in the cellar of Mistwood Ruins.' },
  'Fine Crucible Feather Talisman': { acquisition: 'Found on a corpse in Shadow Keep after descending from the Specimen Storehouse upper levels.', effect: 'Improves backsteps but increases damage taken.' },
  'Pearldrake Talisman +3': { effect: 'Boosts non-physical damage negation by the utmost.' },
  'Viridian Amber Medallion +3': { effect: 'Raises maximum stamina by 17%.' },
};

const LOCATION_OVERRIDES = {
  'Ailment Talisman': 'Abandoned Ailing Village', "Arrow's Reach Talisman": 'Stormgate',
  "Arrow's Soaring Sting Talisman": 'Fog Rift Fort', "Arrow's Sting Talisman": 'Redmane Castle',
  'Arsenal Charm': 'Roundtable Hold', "Assassin's Crimson Dagger": 'Deathtouched Catacombs',
  'Axe Talisman': 'Mistwood Ruins', 'Beloved Stardust': 'Cathedral of Manus Metyr', 'Blade of Mercy': 'Scorched Ruins',
  'Blessed Dew Talisman': 'Divine Bridge', 'Boltdrake Talisman': 'Stormveil Castle', 'Bull-Goat\'s Talisman': 'Dragonbarrow Cave',
  'Cerulean Amber Medallion +1': 'Castle Sol', 'Cerulean Amber Medallion +2': 'Lunar Estate Ruins',
  'Cerulean Seed Talisman': 'Carian Study Hall', 'Clarifying Horn Charm': 'Siofra River', 'Clarifying Horn Charm +1': 'Nokron, Eternal City',
  'Claw Talisman': 'Stormveil Castle', 'Companion Jar': 'Jarburg', 'Crimson Amber Medallion': 'Castle Morne Rampart',
  'Crimson Amber Medallion +1': 'Volcano Manor', 'Crimson Amber Medallion +2': 'Leyndell, Ashen Capital', 'Crimson Amber Medallion +3': 'Fog Rift Catacombs',
  'Crimson Seed Talisman': "Sainted Hero's Grave", 'Crimson Seed Talisman +1': 'Finger Ruins of Rhia',
  'Crucible Feather Talisman': "Auriza Hero's Grave", 'Crucible Scale Talisman': 'Leyndell Catacombs', 'Crusade Insignia': 'Belurat, Tower Settlement',
  'Curved Sword Talisman': 'Stormveil Castle', "Daedicar's Woe": 'Volcano Manor', 'Dagger Talisman': 'Volcano Manor',
  'Dragoncrest Greatshield Talisman': 'Elphael, Brace of the Haligtree', 'Dragoncrest Shield Talisman': 'Bestial Sanctum',
  'Dragoncrest Shield Talisman +2': 'Crumbling Farum Azula', 'Erdtree\'s Favor': "Fringefolk Hero's Grave", 'Erdtree\'s Favor +1': 'Cathedral of the Forsaken',
  'Erdtree\'s Favor +2': 'Leyndell, Ashen Capital', "Faithful's Canvas Talisman": 'Sellia Crystal Tunnel', 'Fine Crucible Feather Talisman': 'Shadow Keep',
  'Flamedrake Talisman': 'Groveside Cave', 'Flamedrake Talisman +1': 'Leyndell, Royal Capital', 'Flamedrake Talisman +2': 'Dragonbarrow Cave',
  'Flamedrake Talisman +3': 'Fort of Reprimand', "Flock's Canvas Talisman": "Gowry's Shack", 'Golden Braid': 'Shaman Village',
  'Graven-Mass Talisman': 'Albinauric Rise', 'Great-Jar\'s Arsenal': "Isolated Merchant's Shack", 'Greatshield Talisman': 'Wagon camp',
  'Green Turtle Talisman': 'Summonwater Village', 'Haligdrake Talisman': 'Stranded Graveyard', 'Haligdrake Talisman +1': 'Leyndell Catacombs',
  'Haligdrake Talisman +2': 'Mohgwyn Palace', 'Immunizing Horn Charm': 'Ainsel River', 'Immunizing Horn Charm +2': 'Belurat, Tower Settlement',
  "Kindred of Rot's Exultation": 'Seethewater Cave', 'Lacerating Crossed-Tree': 'Highroad Cross', 'Longtail Cat Talisman': 'Academy of Raya Lucaria',
  'Magic Scorpion Charm': "Seluvis's Rise", "Marika's Scarseal": 'Siofra River', "Marika's Soreseal": 'Elphael, Brace of the Haligtree',
  "Millicent's Prosthesis": 'Windmill Heights', 'Moon of Nokstella': 'Nokstella, Eternal City', 'Outer God Heirloom': 'Prospect Town',
  'Pearl Shield Talisman': "Taylew's Ruined Forge", 'Perfumer\'s Talisman': "Perfumer's Ruins", 'Prince of Death\'s Pustule': 'Stormveil Castle',
  'Prosthesis-Wearer Heirloom': 'Church of the Plague', 'Radagon Icon': 'Academy of Raya Lucaria', "Radagon's Scarseal": 'Weeping Evergaol',
  "Radagon's Soreseal": 'Fort Faroth', 'Red-Feathered Branchsword': 'Scenic Isle', "Rellana's Cameo": 'Castle Ensis',
  'Retaliatory Crossed-Tree': 'Highroad Cross', 'Ritual Shield Talisman': 'Leyndell, Royal Capital', 'Ritual Sword Talisman': 'Lux Ruins',
  'Sacrificial Twig': 'Murkwater Cave', "Shabriri's Woe": 'Frenzied Flame Village', 'Shard of Alexander': 'Crumbling Farum Azula',
  'Smithing Talisman': 'Ruined Forge of Starfall Past', 'Spear Talisman': 'Lakeside Crystal Cave', 'Spelldrake Talisman': 'Earthbore Cave',
  'Spelldrake Talisman +1': 'Sellia, Town of Sorcery', 'Spelldrake Talisman +2': 'Hidden Path to the Haligtree', 'Spelldrake Talisman +3': 'Castle Ensis',
  'Stalwart Horn Charm': 'Mausoleum Compound', 'Stalwart Horn Charm +1': 'Consecrated Snowfield', 'Stargazer Heirloom': 'Divine Tower of Liurnia',
  "Taker's Cameo": 'Volcano Manor', 'Talisman of All Crucibles': 'Ancient Ruins of Rauh', "Talisman of Lord's Bestowal": 'Shadow Keep',
  'Two Fingers Heirloom': 'Purified Ruins', 'Two-Handed Sword Talisman': 'Temple Town Ruins', 'Two-Headed Turtle Talisman': 'Ellac River',
  'Viridian Amber Medallion +2': "Miquella's Haligtree", 'Warrior Jar Shard': 'Limgrave', 'Winged Sword Insignia': 'Stillwater Cave',
};

function sentence(value) {
  const normalized = clean(value).replace(/^\*+\s*/, '').replace(/^[^A-Za-z0-9]+/, '');
  if (!normalized) return '';
  const capitalized = normalized[0].toUpperCase() + normalized.slice(1);
  return /[.!?]$/.test(capitalized) ? capitalized : `${capitalized}.`;
}

function conciseLocation(name, inferred, region) {
  const override = LOCATION_OVERRIDES[name];
  if (override) return override;
  if (!inferred || inferred.length > 55 || /^(?:a|an|the|at|in|inside|found|obtained|received|purchased|dropped|trade|quest|corpse|center|end|bottom|highest|north|south|east|west|first|talking|dead|\*)\b/i.test(inferred)) return region;
  return inferred.replace(/\s+in (?:central|northern|southern|eastern|western|northwestern|northeastern|southwestern|southeastern).*$/i, '').trim();
}

function inferLocation(acquisition, region) {
  const first = acquisition.split(/[.;]/)[0].replace(/^(Keepsake|Purchase|Quest reward|Drop|Found|Base Game|Shadow of the Erdtree)\s*:?\s*/i, '').trim();
  const at = first.match(/(?:at|in|from|inside|near) (?:the )?(.+?)(?: Site of Grace|,|$)/i);
  const candidate = clean(at?.[1] || first).replace(/^.*?:\s*/, '').trim();
  return candidate && candidate.length <= 90 ? candidate : region;
}

async function category(title) {
  const data = await request({ action: 'query', list: 'categorymembers', cmtitle: title, cmnamespace: '0', cmlimit: '500' });
  return data.query.categorymembers.map((entry) => entry.title);
}

async function main() {
  const allTitles = await category('Category:Talismans');
  const dlcListPage = await request({ action: 'query', prop: 'revisions', rvprop: 'content', rvslots: 'main', titles: 'Talismans (Shadow of the Erdtree)' });
  const dlcListText = dlcListPage.query.pages[0].revisions[0].slots.main.content;
  const dlcTitles = new Set([...dlcListText.matchAll(/\[\[([^\]]+)\]\]\|link=/g)].map((match) => match[1]));
  for (const title of dlcTitles) if (!allTitles.includes(title)) allTitles.push(title);
  const pages = [];
  for (let index = 0; index < allTitles.length; index += 40) {
    const titles = allTitles.slice(index, index + 40).join('|');
    const data = await request({ action: 'query', prop: 'revisions', rvprop: 'content', rvslots: 'main', titles });
    pages.push(...data.query.pages);
  }
  const entries = [];
  for (const page of pages) {
    const text = page.revisions?.[0]?.slots?.main?.content || '';
    if (!/\|\s*type\s*=.*Talisman/im.test(text)) continue;
    if (page.title === 'Elden Ring Talisman Template') continue;
    const name = page.title;
    const override = FACT_OVERRIDES[name] || {};
    const acquisition = override.acquisition || section(text, 'Acquisition', ['Effect', 'Notes', 'See also', 'Gallery']);
    const effect = override.effect || section(text, 'Effect', ['Notes', 'See also', 'Gallery']) || infobox(text, 'item_effect');
    const descriptionBlock = text.match(/\|EN=([\s\S]*?)(?:\n\|[A-Z]{2}=|\n\}\})/);
    const description = clean(descriptionBlock?.[1] || '') || effect;
    const isDlc = dlcTitles.has(page.title);
    const region = REGION_OVERRIDES[name] || inferRegion(acquisition, isDlc);
    const location = conciseLocation(name, inferLocation(acquisition, region), region);
    const detailedLocation = override.detailedLocation || sentence(acquisition);
    const grace = acquisition.match(/(?:the )?([^.;]+?) Site of Grace/i)?.[1]?.replace(/^.*(?:at|from|near) (?:the )?/i, '').trim() || null;
    entries.push({ id: `talisman-${slugify(name)}`, name, contentPack: isDlc ? 'shadow-of-the-erdtree' : 'base-game', primaryLocation: location === region ? region : `${location} - ${region}`, detailedLocation, region, primaryAcquisition: sentence(acquisition), nearestSiteOfGrace: grace, effect: sentence(effect), weight: Number(infobox(text, 'weight')), description: sentence(description), legendary: false, missable: false });
  }
  entries.sort((a, b) => a.name.localeCompare(b.name));
  fs.writeFileSync(output, `${JSON.stringify({ source: 'https://eldenring.wiki.gg/', retrievedAt: new Date().toISOString(), entries }, null, 2)}\n`);
  console.log(`Wrote ${entries.length} Talismans (${entries.filter((e) => e.contentPack === 'base-game').length} base, ${entries.filter((e) => e.contentPack !== 'base-game').length} DLC)`);
}

main().catch((error) => { console.error(error); process.exitCode = 1; });
