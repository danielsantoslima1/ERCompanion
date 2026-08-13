const fs = require('fs');
const path = require('path');
const https = require('https');

const API = 'https://eldenring.wiki.gg/api.php';
const output = path.join(__dirname, 'weapons-catalog-research.json');

const TYPES = [
  ['daggers', 'Daggers'], ['throwing-blades', 'Throwing Blades'], ['straight-swords', 'Straight Swords'],
  ['light-greatswords', 'Light Greatswords'], ['greatswords', 'Greatswords'], ['colossal-swords', 'Colossal Swords'],
  ['thrusting-swords', 'Thrusting Swords'], ['heavy-thrusting-swords', 'Heavy Thrusting Swords'],
  ['curved-swords', 'Curved Swords'], ['curved-greatswords', 'Curved Greatswords'], ['backhand-blades', 'Backhand Blades'],
  ['katanas', 'Katanas'], ['great-katanas', 'Great Katanas'], ['twinblades', 'Twinblades'], ['axes', 'Axes'],
  ['greataxes', 'Greataxes'], ['hammers', 'Hammers'], ['flails', 'Flails'], ['great-hammers', 'Great Hammers'],
  ['colossal-weapons', 'Colossal Weapons'], ['spears', 'Spears'], ['great-spears', 'Great Spears'], ['halberds', 'Halberds'],
  ['reapers', 'Reapers'], ['whips', 'Whips'], ['fists', 'Fists'], ['hand-to-hand-arts', 'Hand-to-Hand'],
  ['claws', 'Claws'], ['beast-claws', 'Beast Claws'], ['perfume-bottles', 'Perfume Bottles'],
  ['light-bows', 'Light Bows'], ['bows', 'Bows'], ['greatbows', 'Greatbows'], ['crossbows', 'Crossbows'],
  ['ballistas', 'Ballistas'], ['glintstone-staves', 'Staves'], ['sacred-seals', 'Sacred Seals'], ['torches', 'Torches'],
  ['small-shields', 'Small Shields'], ['medium-shields', 'Medium Shields'], ['greatshields', 'Greatshields'],
  ['thrusting-shields', 'Thrusting Shields'],
].map(([id, wikiTitle], order) => ({ id, wikiTitle, name: id === 'hand-to-hand-arts' ? 'Hand-to-Hand Arts' : id === 'glintstone-staves' ? 'Glintstone Staves' : wikiTitle, order }));

function request(params) {
  const url = `${API}?${new URLSearchParams({ ...params, format: 'json', formatversion: '2' })}`;
  return new Promise((resolve, reject) => https.get(url, { headers: { 'User-Agent': 'ERCompanion factual catalog builder' } }, (response) => {
    let body = ''; response.setEncoding('utf8'); response.on('data', (chunk) => { body += chunk; });
    response.on('end', () => response.statusCode === 200 ? resolve(JSON.parse(body)) : reject(new Error(`HTTP ${response.statusCode}`)));
  }).on('error', reject));
}

function clean(value = '') {
  return value.replace(/<!--.*?-->/gs, '').replace(/<br\s*\/?\s*>/gi, ' ').replace(/<ref[^>]*>.*?<\/ref>/gis, '')
    .replace(/<ref[^>]*\/>/gi, '').replace(/\{\{R\}\}/g, 'runes').replace(/\{\{Color\|[^|]+\|([^}]+)\}\}/gi, '$1')
    .replace(/\{\{[^{}|]+\|([^{}]+)\}\}/g, '$1').replace(/\{\{[^{}]+\}\}/g, '').replace(/\b[a-z]{2}:[^\n]+$/gi, '').replace(/\[\[[^\]|]+\|([^\]]+)\]\]/g, '$1')
    .replace(/\[\[([^\]]+)\]\]/g, '$1').replace(/'''?/g, '').replace(/<[^>]+>/g, '').replace(/^\*+/gm, '')
    .replace(/\s+/g, ' ').trim();
}
function sentence(value) {
  let v = clean(value).replace(/^[^A-Za-z0-9]+/, '');
  if (!v) return null;
  v = v.replace(/^(\d+(?:\.\d+)?%) drop (rate|chance) from/i, 'Has a $1 drop $2 from')
    .replace(/^1 sold by/i, 'One is sold by')
    .replace(/^1 can be/i, 'One can be')
    .replace(/^(\d+) version dropped by/i, 'The +$1 version is dropped by');
  const firstLetter = v.search(/[A-Za-z]/);
  const c = firstLetter < 0 ? v : `${v.slice(0, firstLetter)}${v[firstLetter].toUpperCase()}${v.slice(firstLetter + 1)}`;
  return /[.!?]$/.test(c) ? c : `${c}.`;
}
function infobox(text, key) { const match = text.match(new RegExp(`^\\|[ \\t]*${key}[ \\t]*=[ \\t]*(.*)$`, 'im')); return clean(match?.[1] || ''); }
function rawSection(text, name) { const start = text.search(new RegExp(`==[^\\n]*${name}[^\\n]*==`, 'i')); if (start < 0) return ''; const body = text.slice(text.indexOf('\n', start) + 1); const end = body.search(/^==/m); return end < 0 ? body : body.slice(0, end); }
function slugify(name) { return name.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); }
function canonicalTitle(name) { return name.toLowerCase().replace(/\s+\(weapon\)$/i, '').replace(/[^a-z0-9]+/g, ''); }
function linkedValues(value) { return [...value.matchAll(/\[\[([^\]|#]+)(?:#[^\]|]+)?(?:\|([^\]]+))?\]\]/g)].map((m) => clean(m[2] || m[1])); }
function numberOrNull(value) { if (!value || value === '-' || value === '?') return null; const n = Number(value); return Number.isFinite(n) && n >= 0 ? n : null; }

const BASE_REGIONS = ['Limgrave', 'Weeping Peninsula', 'Liurnia of the Lakes', 'Caelid', "Greyoll's Dragonbarrow", 'Altus Plateau', 'Mt. Gelmir', 'Capital Outskirts', 'Leyndell, Royal Capital', 'Leyndell, Ashen Capital', 'Mountaintops of the Giants', 'Consecrated Snowfield', "Miquella's Haligtree", 'Crumbling Farum Azula', 'Siofra River', 'Ainsel River', 'Nokron, Eternal City', 'Nokstella, Eternal City', 'Lake of Rot', 'Deeproot Depths', 'Mohgwyn Palace', 'Roundtable Hold'];
const DLC_REGIONS = ['Gravesite Plain', 'Scadu Altus', 'Shadow Keep', 'Southern Shore', 'Cerulean Coast', "Charo's Hidden Grave", 'Jagged Peak', 'Abyssal Woods', 'Rauh Base', 'Ancient Ruins of Rauh', 'Scaduview', 'Enir-Ilim', 'Belurat, Tower Settlement'];
function regionFor(acquisition, dlc) { const regions = dlc ? DLC_REGIONS : BASE_REGIONS; return regions.find((r) => acquisition.includes(r)) || (dlc ? 'Realm of Shadow' : 'The Lands Between'); }
function locationFor(raw, region) {
  const firstLine = raw.split('\n').map((line) => line.trim()).find(Boolean) || '';
  if (!/'''(?:Loot|Found|Treasure|Location):'''/i.test(firstLine)) return region;
  const links = linkedValues(firstLine).filter((v) => v !== region && !/Map Link|Site of Grace/i.test(v));
  const place = links[0]; return place && place.length <= 60 ? `${place} - ${region}` : region;
}
async function categoryMembers(name) {
  const data = await request({ action: 'query', list: 'categorymembers', cmtitle: `Category:${name}`, cmnamespace: '0', cmlimit: '500' });
  return data.query.categorymembers.map((item) => item.title);
}
function galleryMembers(text, name) {
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const match = text.match(new RegExp(`<section begin=["']?${escaped}["']?\\s*\\/?>([\\s\\S]*?)<section end=["']?${escaped}["']?\\s*\\/>`, 'i'));
  if (!match) return [];
  return [...match[1].matchAll(/\[\[([^\]|#]+)(?:#[^\]|]+)?(?:\|[^\]]+)?\]\](?:<br\s*\/?>\s*)?(\{\{SOTE\}\})?/g)]
    .filter((m) => !/^(File:|Daggers$|Straight Swords$|Staves$)/i.test(m[1]))
    .map((m) => ({ title: m[1], dlc: Boolean(m[2]) }));
}
async function pagesFor(titles) {
  const pages = [];
  for (let i = 0; i < titles.length; i += 40) {
    const data = await request({ action: 'query', redirects: '1', prop: 'revisions', rvprop: 'content', rvslots: 'main', titles: titles.slice(i, i + 40).join('|') });
    pages.push(...data.query.pages);
  }
  return pages;
}

async function main() {
  const entries = [];
  const galleryPage = (await pagesFor(['All Items (Gallery)']))[0];
  const galleryText = galleryPage.revisions?.[0]?.slots?.main?.content || '';
  const dlcPage = (await pagesFor(['Weapons (Shadow of the Erdtree)']))[0];
  const dlcText = dlcPage.revisions?.[0]?.slots?.main?.content || '';
  const dlcTitles = new Set(linkedValues(dlcText).map(canonicalTitle));
  for (const type of TYPES) {
    const listed = galleryMembers(galleryText, type.wikiTitle);
    const originByTitle = new Map(listed.map((item) => [canonicalTitle(item.title), item.dlc]));
    const pages = await pagesFor(listed.map((item) => item.title));
    const found = [];
    for (const page of pages) {
      const text = page.revisions?.[0]?.slots?.main?.content || '';
      if (!/\{\{Infobox[_ ]Weapon/i.test(text)) continue;
      const acquisitionRaw = rawSection(text, 'Acquisition');
      const acquisition = sentence(acquisitionRaw);
      if (!acquisition) continue;
      const dlc = dlcTitles.has(canonicalTitle(page.title)) || Boolean(originByTitle.get(canonicalTitle(page.title))) || /Shadow of the Erdtree/i.test(text.slice(0, text.search(/==/)));
      const region = regionFor(acquisition, dlc);
      const descriptionMatch = text.match(/\{\{Description[\s\S]*?\|EN\s*=([\s\S]*?)(?:\n\|[A-Z]{2}\s*=|\n\}\})/i);
      const effects = infobox(text, 'effects');
      const skill = infobox(text, 'skills').replace(/^Skill:\s*/i, '') || null;
      const nearestGrace = [...acquisitionRaw.matchAll(/\[\[([^\]|#]+)(?:#[^\]|]+)?(?:\|([^\]]+))?\]\][^\n.]{0,35}Site of Grace/gi)].map((m) => clean(m[2] || m[1]))[0] || null;
      found.push({
        id: `weapon-${slugify(page.title)}`, name: page.title, weaponTypeId: type.id,
        contentPack: dlc ? 'shadow-of-the-erdtree' : 'base-game', primaryLocation: locationFor(acquisitionRaw, region),
        region, detailedLocation: acquisition, acquisition, nearestSiteOfGrace: nearestGrace,
        weight: numberOrNull(infobox(text, 'weight')), skill, passiveEffects: effects ? [sentence(effects)] : [],
        upgradeMaterial: null,
        statRequirements: { strength: numberOrNull(infobox(text, 'str_req')), dexterity: numberOrNull(infobox(text, 'dex_req')), intelligence: numberOrNull(infobox(text, 'int_req')), faith: numberOrNull(infobox(text, 'fai_req')), arcane: numberOrNull(infobox(text, 'arc_req')) },
        description: sentence(descriptionMatch?.[1] || ''),
      });
    }
    const unique = [...new Map(found.map((item) => [item.id, item])).values()];
    const counts = { base: unique.filter((x) => x.contentPack === 'base-game').length, dlc: unique.filter((x) => x.contentPack !== 'base-game').length };
    console.log(`${type.name}: ${counts.base}/${counts.dlc}/${unique.length}`);
    entries.push(...unique);
  }
  entries.sort((a, b) => TYPES.findIndex((t) => t.id === a.weaponTypeId) - TYPES.findIndex((t) => t.id === b.weaponTypeId) || a.name.localeCompare(b.name));
  fs.writeFileSync(output, `${JSON.stringify({ source: 'https://eldenring.wiki.gg/', retrievedAt: new Date().toISOString(), weaponTypes: TYPES.map(({ wikiTitle, ...type }) => type), entries }, null, 2)}\n`);
  console.log(`Wrote ${entries.length} Armaments (${entries.filter((e) => e.contentPack === 'base-game').length} Base, ${entries.filter((e) => e.contentPack !== 'base-game').length} DLC)`);
}
main().catch((error) => { console.error(error); process.exitCode = 1; });
