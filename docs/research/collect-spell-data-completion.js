const fs = require('fs');
const https = require('https');
const path = require('path');

const root = path.resolve(__dirname, '..', '..');
const API = 'https://eldenring.wiki.gg/api.php';
const REGIONS = [
  'Limgrave', 'Weeping Peninsula', 'Stormhill', 'Stormveil Castle',
  'Liurnia of the Lakes', 'Academy of Raya Lucaria', 'Moonlight Altar',
  'Altus Plateau', 'Mt. Gelmir', 'Volcano Manor', 'Leyndell, Royal Capital',
  'Leyndell, Ashen Capital', 'Subterranean Shunning-Grounds', 'Caelid',
  'Dragonbarrow', 'Siofra River', 'Nokron, Eternal City', 'Ainsel River',
  'Nokstella, Eternal City', 'Lake of Rot', 'Deeproot Depths',
  'Mountaintops of the Giants', 'Consecrated Snowfield',
  "Miquella's Haligtree", 'Elphael, Brace of the Haligtree',
  'Crumbling Farum Azula', 'Roundtable Hold', 'Gravesite Plain',
  'Scadu Altus', 'Shadow Keep', 'Cerulean Coast', 'Stone Coffin Fissure',
  "Charo's Hidden Grave", 'Abyssal Woods', 'Jagged Peak',
  'Ancient Ruins of Rauh', 'Scaduview', 'Enir-Ilim',
];
const REGION_BY_LOCATION = new Map(Object.entries({
  'Converted Fringe Tower': 'Liurnia of the Lakes',
  'Converted Tower': 'Liurnia of the Lakes',
  'Witchbane Ruins': 'Weeping Peninsula',
  'Church of Vows': 'Liurnia of the Lakes',
  'Waypoint Ruins': 'Limgrave',
  'Church of Irith': 'Liurnia of the Lakes',
  'War-Dead Catacombs': 'Caelid',
  'Sellia Hideaway': 'Caelid',
  'Heretical Rise': 'Mountaintops of the Giants',
  "Chelona's Rise": 'Moonlight Altar',
  'Street of Sages Ruins': 'Caelid',
  'Royal Grave Evergaol': 'Liurnia of the Lakes',
  'Academy Crystal Cave': 'Liurnia of the Lakes',
  'Cathedral of Manus Celes': 'Moonlight Altar',
  'Cathedral of Manus Metyr': 'Scadu Altus',
  'Castle Ensis': 'Gravesite Plain',
  'Finger Ruins of Dheo': 'Scaduview',
  'Belurat, Tower Settlement': 'Gravesite Plain',
  'Fog Rift Catacombs': 'Gravesite Plain',
  'Moorth Ruins': 'Scadu Altus',
  'Scorpion River Catacombs': 'Ancient Ruins of Rauh',
  'Ruins of Unte': 'Scadu Altus',
  'Shaman Village': 'Scaduview',
  'Bestial Sanctum': 'Dragonbarrow',
  'Fort Gael': 'Caelid',
  'Stormcaller Church': 'Altus Plateau',
  'Frenzy-Flaming Tower': 'Liurnia of the Lakes',
  'Callu Baptismal Church': 'Weeping Peninsula',
  'Yelough Anix Ruins': 'Consecrated Snowfield',
  "Giant-Conquering Hero's Grave": 'Mountaintops of the Giants',
  'Spiritcaller Cave': 'Mountaintops of the Giants',
  'Temple of Eiglay': 'Volcano Manor',
  'Wyndham Ruins': 'Altus Plateau',
}));
const LOCATION_BY_ID = new Map(Object.entries({
  'sorcery-rennalas-full-moon': ['Roundtable Hold', 'Roundtable Hold'],
  'sorcery-rykards-rancor': ['Roundtable Hold', 'Roundtable Hold'],
  'sorcery-shatter-earth': ['Raya Lucaria Crystal Tunnel', 'Liurnia of the Lakes'],
  'sorcery-blades-of-stone': ['Roundtable Hold', 'Roundtable Hold'],
  'sorcery-impenetrable-thorns': ['Shadow Keep', 'Scadu Altus'],
  'sorcery-vortex-of-putrescence': ['Roundtable Hold', 'Roundtable Hold'],
  'incantation-beast-claw': ['Bestial Sanctum', 'Dragonbarrow'],
  'incantation-black-blade': ['Roundtable Hold', 'Roundtable Hold'],
  'incantation-bloodboon': ['Roundtable Hold', 'Roundtable Hold'],
  'incantation-burn-o-flame': ['Roundtable Hold', 'Roundtable Hold'],
  'incantation-death-lightning': ['Roundtable Hold', 'Roundtable Hold'],
  'incantation-fortissaxs-lightning-spear': ['Roundtable Hold', 'Roundtable Hold'],
  'incantation-heal': ['Roundtable Hold', 'Roundtable Hold'],
  'incantation-law-of-causality': ['Roundtable Hold', 'Roundtable Hold'],
  'incantation-placidusaxs-ruin': ['Roundtable Hold', 'Roundtable Hold'],
  'incantation-swarm-of-flies': ['Mohgwyn Palace', 'Siofra River'],
  'incantation-urgent-heal': ['Roundtable Hold', 'Roundtable Hold'],
  'incantation-land-of-shadow': ['Roundtable Hold', 'Roundtable Hold'],
  'incantation-light-of-miquella': ['Roundtable Hold', 'Roundtable Hold'],
  'incantation-minor-erdtree': ['Shaman Village', 'Scaduview'],
  'incantation-roar-of-rugalea': ['Rauh Base', 'Ancient Ruins of Rauh'],
}));

function requestJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'ERCompanion data audit/1.0' } }, (response) => {
      let body = '';
      response.setEncoding('utf8');
      response.on('data', (chunk) => { body += chunk; });
      response.on('end', () => {
        if (response.statusCode !== 200) return reject(new Error(`HTTP ${response.statusCode}`));
        resolve(JSON.parse(body));
      });
    }).on('error', reject);
  });
}

function field(wikitext, name) {
  const match = wikitext.match(new RegExp(`^\\|\\s*${name}\\s*=\\s*(.*)$`, 'mi'));
  return match?.[1].trim() || null;
}

function plain(value) {
  if (!value) return null;
  return value
    .replace(/<!--.*?-->/gs, '')
    .replace(/<br\s*\/?>/gi, '; ')
    .replace(/<[^>]+>/g, '')
    .replace(/\{\{[^{}]*\}\}/g, '')
    .replace(/\[\[(?:[^\]|]+\|)?([^\]]+)\]\]/g, '$1')
    .replace(/'{2,}/g, '')
    .replace(/\s+/g, ' ')
    .trim() || null;
}

function links(value) {
  return [...(value ?? '').matchAll(/\[\[(?:[^\]|]+\|)?([^\]]+)\]\]/g)]
    .map((match) => match[1].trim());
}

function number(value) {
  if (value === null) return null;
  const match = value.match(/\d+/);
  return match ? Number(match[0]) : null;
}

function acquisitionSummary(wikitext) {
  const match = wikitext.match(/Acquisition[^=]*==\s*([\s\S]*?)(?=\n==[^=])/i);
  if (!match) return null;
  const firstParagraph = match[1].split(/\n\s*\n/).find((part) => plain(part));
  return plain(firstParagraph)?.slice(0, 320) ?? null;
}

function resolveLocation(obtained, acquisition) {
  const candidates = [...links(obtained), ...links(acquisition)];
  const region = candidates.map((candidate) => REGION_BY_LOCATION.get(candidate))
    .find(Boolean)
    ?? REGIONS.find((candidate) => candidates.includes(candidate))
    ?? REGIONS.find((candidate) => plain(obtained)?.includes(candidate))
    ?? REGIONS.find((candidate) => plain(acquisition)?.includes(candidate))
    ?? null;
  const nonLocation = /(?:Sorcer|Miriel|Corhyn|Gideon|Gurranq|Enia|Husks|Prayerbook|Scroll|Remembrance|Heart|Dragon Communion|Deathroot|Painting|Spell|Incantation|Sorcery|Bosses|NPCs)/i;
  const location = candidates.find((candidate) =>
    REGION_BY_LOCATION.has(candidate) || (!nonLocation.test(candidate) && candidate !== region));
  if (!location && !region) return { mainLocation: null, region: null };
  return { mainLocation: location ?? region, region };
}

async function main() {
  const catalogs = ['sorceries', 'incantations'].flatMap((name) =>
    JSON.parse(fs.readFileSync(path.join(__dirname, `${name}-catalog-research.json`), 'utf8')).entries);
  const entries = [];
  for (let offset = 0; offset < catalogs.length; offset += 40) {
    const batch = catalogs.slice(offset, offset + 40);
    const params = new URLSearchParams({
      action: 'query', format: 'json', formatversion: '2', prop: 'revisions',
      rvprop: 'ids|timestamp|content', rvslots: 'main',
      titles: batch.map((entry) => entry.name.en).join('|'),
    });
    const data = await requestJson(`${API}?${params}`);
    const pages = new Map(data.query.pages.map((page) => [page.title.toLowerCase(), page]));
    for (const entry of batch) {
      const page = pages.get(entry.name.en.toLowerCase());
      const revision = page?.revisions?.[0];
      if (!revision) throw new Error(`Missing wiki page: ${entry.name.en}`);
      const wikitext = revision.slots.main.content;
      const obtainedRaw = field(wikitext, 'obtained');
      const acquisitionRaw = acquisitionSummary(wikitext);
      const override = LOCATION_BY_ID.get(entry.id);
      const location = override
        ? { mainLocation: override[0], region: override[1] }
        : resolveLocation(obtainedRaw, acquisitionRaw);
      entries.push({
        id: entry.id,
        page: page.title,
        revisionId: revision.revid,
        revisionTimestamp: revision.timestamp,
        sourceUrl: `https://eldenring.wiki.gg/wiki/${encodeURIComponent(page.title.replace(/ /g, '_'))}`,
        obtained: plain(obtainedRaw),
        acquisitionSummary: acquisitionRaw,
        ...location,
        fpCost: number(field(wikitext, 'fp_cost')),
        staminaCost: number(field(wikitext, 'stamina_cost')),
        slotsUsed: number(field(wikitext, 'slots_used')),
        intelligenceRequired: number(field(wikitext, 'int_req')),
        faithRequired: number(field(wikitext, 'fai_req')),
        arcaneRequired: number(field(wikitext, 'arc_req')),
        purchasePrice: number(field(wikitext, 'buy_price')),
      });
    }
    process.stdout.write('.');
  }
  const output = {
    schemaVersion: 1,
    collectedAt: new Date().toISOString(),
    source: 'eldenring-wiki-gg-item-pages',
    entries,
  };
  fs.writeFileSync(path.join(__dirname, 'spell-data-completion.json'), `${JSON.stringify(output, null, 2)}\n`);
  console.log(`\nCollected ${entries.length} spell records.`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
