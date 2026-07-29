const path = require('path');
const { validateSpellResearch } = require('./validate-spell-research-common');

const result = validateSpellResearch({
  file: path.join(__dirname, 'incantations-catalog-research.json'),
  category: 'incantation',
  total: 129,
  baseTotal: 101,
  dlcTotal: 28,
  legendaryTotal: 3,
});

console.log(JSON.stringify(result, null, 2));
