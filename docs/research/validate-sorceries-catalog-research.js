const path = require('path');
const { validateSpellResearch } = require('./validate-spell-research-common');

const result = validateSpellResearch({
  file: path.join(__dirname, 'sorceries-catalog-research.json'),
  category: 'sorcery',
  total: 84,
  baseTotal: 70,
  dlcTotal: 14,
  legendaryTotal: 4,
});

console.log(JSON.stringify(result, null, 2));
