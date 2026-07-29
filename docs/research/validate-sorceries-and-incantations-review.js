const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..', '..');
const sorceries = require('./sorceries-catalog-research.json');
const incantations = require('./incantations-catalog-research.json');
const checklist = fs.readFileSync(
  path.join(root, 'docs/SORCERIES_AND_INCANTATIONS_APPROVAL_CHECKLIST.md'),
  'utf8',
);
const detailedReview = fs.readFileSync(
  path.join(root, 'docs/SORCERIES_AND_INCANTATIONS_DETAILED_REVIEW.md'),
  'utf8',
);

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const all = [...sorceries.entries, ...incantations.entries];
const checklistIds = [...checklist.matchAll(/^\| `((?:sorcery|incantation)-[^`]+)` \|/gm)]
  .map((match) => match[1]);
const allIds = all.map((entry) => entry.id);

assert(all.length === 213, 'combined catalog must contain exactly 213 entries');
assert(new Set(allIds).size === 213, 'combined IDs must be unique');
assert(checklistIds.length === 213, 'approval checklist must contain exactly 213 entry rows');
assert(new Set(checklistIds).size === 213, 'approval checklist contains duplicate IDs');
assert(allIds.every((id) => checklistIds.includes(id)), 'approval checklist omitted a catalog ID');
assert(all.filter((entry) => entry.legendary.value).length === 7,
  'combined catalog must contain exactly seven achievement legendaries');
assert(all.filter((entry) => entry.missable.value === true).length === 8,
  'combined review must retain exactly eight probable missable candidates');
assert(!/(?:[A-Za-z]:\\|\/Users\/|\/home\/)/.test(checklist + detailedReview),
  'document contains an absolute local path');
assert(!/<[a-z][^>]*>/i.test(checklist + detailedReview), 'document contains HTML');
assert(detailedReview.includes('Regulation 1.16.1'),
  'detailed review must identify the reviewed regulation version');

console.log(JSON.stringify({
  valid: true,
  totals: {
    sorceries: sorceries.entries.length,
    incantations: incantations.entries.length,
    combined: all.length,
  },
  checklistRows: checklistIds.length,
  legendary: all.filter((entry) => entry.legendary.value).length,
  probableMissable: all.filter((entry) => entry.missable.value === true).length,
}, null, 2));
