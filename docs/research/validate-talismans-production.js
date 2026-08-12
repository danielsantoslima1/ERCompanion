const data = require('./talismans-catalog-research.json');
const errors = [];
if (data.entries.length !== 154) errors.push(`Expected 154 entries, found ${data.entries.length}`);
if (data.entries.filter((entry) => entry.contentPack === 'base-game').length !== 115) errors.push('Expected 115 Base Game entries');
if (data.entries.filter((entry) => entry.contentPack === 'shadow-of-the-erdtree').length !== 39) errors.push('Expected 39 DLC entries');
const ids = new Set();
for (const entry of data.entries) {
  if (ids.has(entry.id)) errors.push(`Duplicate ID: ${entry.id}`); ids.add(entry.id);
  for (const field of ['name', 'primaryLocation', 'detailedLocation', 'region', 'primaryAcquisition', 'effect', 'description']) if (!entry[field]) errors.push(`${entry.id}: missing ${field}`);
  if (entry.primaryLocation === entry.name || /^(a|an|the|found|obtained|received|purchased|dropped|reward|given|corpse|chest)\b/i.test(entry.primaryLocation)) errors.push(`${entry.id}: invalid card location`);
  for (const field of ['detailedLocation', 'primaryAcquisition', 'description']) if (entry[field] && (!/^[A-Z]/.test(entry[field]) || !/[.!?]$/.test(entry[field]))) errors.push(`${entry.id}: invalid narrative ${field}`);
  if (entry.weight !== null && (!Number.isFinite(entry.weight) || entry.weight < 0)) errors.push(`${entry.id}: invalid weight`);
  if (/placeholder|unknown|talisman location/i.test(`${entry.primaryLocation} ${entry.primaryAcquisition}`)) errors.push(`${entry.id}: placeholder`);
}
if (errors.length) { console.error(errors.join('\n')); process.exitCode = 1; } else console.log('Validated 154 Talismans (115 Base Game, 39 DLC).');
