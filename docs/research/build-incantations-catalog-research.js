const fs = require('fs');
const path = require('path');
const { enrichResearch } = require('./spell-research-enrichment');

const research = {
  "researchVersion": 1,
  "scope": "incantations-catalog-research",
  "generatedAt": "2026-07-29",
  "category": "incantation",
  "decisions": {
    "productionApproved": false,
    "ptBRApproved": false,
    "offlineFutureCatalog": true,
    "magicClassificationFieldsForbidden": true,
    "catalystCompatibilityForbidden": true
  },
  "sources": [
    "bandai-namco-sote-official",
    "eldenpedia-category-inventory",
    "eldenpedia-spell-pages",
    "fandom-dlc-incantations",
    "windows-central-dlc-counts"
  ],
  "entries": [
    {
      "id": "incantation-agheels-flame",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Agheel's Flame",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Dragon Communion Altar",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Dragon Communion Altar",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Spews flame breath of Agheel from above",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 36,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 23,
        "arcane": 15,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 60,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-ancient-dragons-lightning-spear",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Ancient Dragons' Lightning Spear",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Ancient Dragon Prayerbook",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Ancient Dragon Prayerbook",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Stabs with red lightning spear from above",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 25,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 32,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-ancient-dragons-lightning-strike",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Ancient Dragons' Lightning Strike",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Ancient Dragon Prayerbook",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Ancient Dragon Prayerbook",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Summons red lightning that spreads from impact",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 27,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 26,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-aspects-of-the-crucible-bloom",
      "category": "incantation",
      "contentPack": "shadow-of-the-erdtree",
      "name": {
        "en": "Aspects of the Crucible: Bloom",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "fandom-dlc-incantations"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Ancient Ruins of Rauh",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Ancient Ruins of Rauh",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Creates a miranda flower on chest to summon rain of light",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 23,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 27,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages",
        "fandom-dlc-incantations"
      ]
    },
    {
      "id": "incantation-aspects-of-the-crucible-breath",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Aspects of the Crucible: Breath",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "acquisitionMethods": [],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Creates throat pouch to spew fire while walking",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 28,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 27,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-aspects-of-the-crucible-horns",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Aspects of the Crucible: Horns",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Defeat Crucible Knight (Stormveil Castle)",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Defeat Crucible Knight (Stormveil Castle)",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Creates shoulder horn to gore foes from a low stance.",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 18,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 27,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-aspects-of-the-crucible-tail",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Aspects of the Crucible: Tail",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Stormhill Evergaol",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Stormhill Evergaol",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Creates supple tail to sweep area before caster",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 20,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 27,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-aspects-of-the-crucible-thorns",
      "category": "incantation",
      "contentPack": "shadow-of-the-erdtree",
      "name": {
        "en": "Aspects of the Crucible: Thorns",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "fandom-dlc-incantations"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Shadow Keep",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Shadow Keep",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Creates a mass of bristling thorns on back to scour the area",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 14,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 27,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages",
        "fandom-dlc-incantations"
      ]
    },
    {
      "id": "incantation-assassins-approach",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Assassin's Approach",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Brother Corhyn or Miriel",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Assassin's Prayerbook",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        },
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Available from Brother Corhyn or Miriel",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": "Brother Corhyn or Miriel",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": "Brother Corhyn or Miriel",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Silences footsteps, reduces fall damage / sound",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 15,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 10,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 13,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-barrier-of-gold",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Barrier of Gold",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Guaranteed drop from Leyndell, Royal Capital",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Guaranteed drop from Leyndell, Royal Capital",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Greatly increases magic damage negation for self & allies",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 30,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 24,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 13,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-bayles-flame-lightning",
      "category": "incantation",
      "contentPack": "shadow-of-the-erdtree",
      "name": {
        "en": "Bayle's Flame Lightning",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "fandom-dlc-incantations"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Heart of Bayle",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Heart of Bayle",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Channels dread dragon to strike with flame-lightning-infused talon bone",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 43,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 2,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": null,
        "arcane": 53,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages",
        "fandom-dlc-incantations"
      ]
    },
    {
      "id": "incantation-bayles-tyranny",
      "category": "incantation",
      "contentPack": "shadow-of-the-erdtree",
      "name": {
        "en": "Bayle's Tyranny",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "fandom-dlc-incantations"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Heart of Bayle",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Heart of Bayle",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Channels dread dragon to roar with a heatwave blast",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 46,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 2,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": null,
        "arcane": 49,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages",
        "fandom-dlc-incantations"
      ]
    },
    {
      "id": "incantation-beast-claw",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Beast Claw",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Give Gurranq five Deathroot",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Give Gurranq five Deathroot",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Creates beast claws that tear through the land",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 10,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 8,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-bestial-constitution",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Bestial Constitution",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Defeat Scarab (Farum Greatbridge)",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Defeat Scarab (Farum Greatbridge)",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Alleviates blood loss and frost buildup",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 10,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 9,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-bestial-sling",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Bestial Sling",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Give Gurranq two Deathroot",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Give Gurranq two Deathroot",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Swiftly flings numerous sharp rock shards",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 10,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 7,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-bestial-vitality",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Bestial Vitality",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Give Gurranq three Deathroot",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Give Gurranq three Deathroot",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Restores HP over a period of time",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 18,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 12,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-black-blade",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Black Blade",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Remembrance of the Black Blade",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Remembrance of the Black Blade",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Black blade spinning slash that emits wave of light",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 26,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 2,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 46,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-black-flame",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Black Flame",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Brother Corhyn / Miriel, Pastor of Vows",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Godskin Prayerbook",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        },
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Available from Brother Corhyn / Miriel, Pastor of Vows",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": "Brother Corhyn / Miriel, Pastor of Vows",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": "Brother Corhyn / Miriel, Pastor of Vows",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Throws a ball of raging black fire",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 18,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 20,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 25,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-black-flame-blade",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Black Flame Blade",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Godskin Prayerbook",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Godskin Prayerbook",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Enchants right-hand armament with black flame",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 15,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 17,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-black-flame-ritual",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Black Flame Ritual",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Defeat Spiritcaller Snail (Spiritcaller Cave)",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Defeat Spiritcaller Snail (Spiritcaller Cave)",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Summons a circle of black flame pillars around caster",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 30,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 42,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-black-flames-protection",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Black Flame's Protection",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Sir Gideon Ofnir or Twin Maiden Husks",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Sir Gideon Ofnir or Twin Maiden Husks",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Increases physical damage negation",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 30,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 30,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 13,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-blessing-of-the-erdtree",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Blessing of the Erdtree",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Leyndell, Royal Capital",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Leyndell, Royal Capital",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Grants greater blessing to self and nearby allies",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 60,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 38,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 30,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-blessings-boon",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Blessing's Boon",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "acquisitionMethods": [],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Grants blessing to self and nearby allies",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 30,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 24,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 30,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-bloodboon",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Bloodboon",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Trade Enia a Remembrance of the Blood Lord",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Trade Enia a Remembrance of the Blood Lord",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Scatters bloodflame before caster to set area aflame.",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 13,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 14,
        "arcane": 17,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-bloodflame-blade",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Bloodflame Blade",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Defeat Scarab (Liurnia of the Lakes)",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Defeat Scarab (Liurnia of the Lakes)",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Enchants right-hand armament with bloodflame",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 20,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 12,
        "arcane": 10,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 10,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-bloodflame-talons",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Bloodflame Talons",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Dropped by Mohg, the Omen",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Dropped by Mohg, the Omen",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Creates bloodflame lacerations that then explode",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 12,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 13,
        "arcane": 15,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-borealiss-mist",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Borealis's Mist",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Dragon Communion Altar after defeating Borealis the Freezing Fog",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Dragon Communion Altar after defeating Borealis the Freezing Fog",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Spews icy breath of Borealis from above",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 48,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 23,
        "arcane": 15,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 60,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-burn-o-flame",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Burn, O Flame!",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Trade Enia a Remembrance of the Fire Giant",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Trade Enia a Remembrance of the Fire Giant",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Raises a series of flame pillars around caster",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 26,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 27,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 36,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-catch-flame",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Catch Flame",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Brother Corhyn",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Available from Brother Corhyn",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": "Brother Corhyn",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": "Brother Corhyn",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Momentarily sparks flame from hand",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 10,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 8,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 17,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-cure-poison",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Cure Poison",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Brother Corhyn",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Available from Brother Corhyn",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": "Brother Corhyn",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": "Brother Corhyn",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Alleviates poison buildup and cures poison",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 7,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 10,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 10,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-darkness",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Darkness",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Brother Corhyn or Miriel",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Assassin's Prayerbook",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        },
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Available from Brother Corhyn or Miriel",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": "Brother Corhyn or Miriel",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": "Brother Corhyn or Miriel",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Creates area of darkness that conceals caster",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 24,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 18,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 24,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-death-lightning",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Death Lightning",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Trade Remembrance of the Lichdragon",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Trade Remembrance of the Lichdragon",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Strikes surroundings with storm of death lightning",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 28,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 2,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 47,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 32,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-discus-of-light",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Discus of Light",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Brother Corhyn",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Brother Corhyn",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Fires ring of light before the caster",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 3,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": 13,
        "faith": 13,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 20,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-divine-beast-tornado",
      "category": "incantation",
      "contentPack": "shadow-of-the-erdtree",
      "name": {
        "en": "Divine Beast Tornado",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "fandom-dlc-incantations"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Ancient Ruins of Rauh",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Ancient Ruins of Rauh",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Summons a storm that launches a tornado forward",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 24,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 28,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages",
        "fandom-dlc-incantations"
      ]
    },
    {
      "id": "incantation-divine-bird-feathers",
      "category": "incantation",
      "contentPack": "shadow-of-the-erdtree",
      "name": {
        "en": "Divine Bird Feathers",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "fandom-dlc-incantations"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Ancient Ruins of Rauh",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Ancient Ruins of Rauh",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Spreads arms like wings and releases a flurry of feathers",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 3,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 24,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages",
        "fandom-dlc-incantations"
      ]
    },
    {
      "id": "incantation-divine-fortification",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Divine Fortification",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Teardrop Scarab (Weeping Peninsula)",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Teardrop Scarab (Weeping Peninsula)",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Increases holy damage negation",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 20,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 10,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 13,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-dragonbolt-blessing",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Dragonbolt Blessing",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Stormcaller Church",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Stormcaller Church",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Bolsters caster's body with lightning",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 20,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 21,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 20,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-dragonbolt-of-florissax",
      "category": "incantation",
      "contentPack": "shadow-of-the-erdtree",
      "name": {
        "en": "Dragonbolt of Florissax",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "fandom-dlc-incantations"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Jagged Peak",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Jagged Peak",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Calls down red lightning to bolster self and nearby allies",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 35,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 52,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 20,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages",
        "fandom-dlc-incantations"
      ]
    },
    {
      "id": "incantation-dragonclaw",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Dragonclaw",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "acquisitionMethods": [],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Channels dragon to rend foes with dragon claws",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 24,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 17,
        "arcane": 13,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-dragonfire",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Dragonfire",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Dragon Heart",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Dragon Heart",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Channels dragon to spew flame breath",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 28,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 15,
        "arcane": 12,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-dragonice",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Dragonice",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Altar of Dragon Communion",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Altar of Dragon Communion",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Channels dragon to spew icy breath",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 36,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 15,
        "arcane": 12,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 48,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-dragonmaw",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Dragonmaw",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Altar of Dragon Communion",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Altar of Dragon Communion",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Channels dragon to bite foes before caster",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 34,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 24,
        "arcane": 16,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-ekzykess-decay",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Ekzykes's Decay",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Altar of Dragon Commmunion",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Altar of Dragon Commmunion",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Spews scarlet rot breath of Ekzykes from above",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 48,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 23,
        "arcane": 15,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 60,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-elden-stars",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Elden Stars",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Deeproot Depths",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Deeproot Depths",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": true,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Creates a stream of golden shooting stars that assail the area",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 41,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 50,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 48,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-electrify-armament",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Electrify Armament",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Dragon Cult Prayerbook",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Dragon Cult Prayerbook",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Enchants right-hand armament with lightning damage",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 21,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 15,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-electrocharge",
      "category": "incantation",
      "contentPack": "shadow-of-the-erdtree",
      "name": {
        "en": "Electrocharge",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "fandom-dlc-incantations"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Fog Rift Catacombs",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Fog Rift Catacombs",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Calls down lightning to charge body with electricity",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 26,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 30,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages",
        "fandom-dlc-incantations"
      ]
    },
    {
      "id": "incantation-erdtree-heal",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Erdtree Heal",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Leyndell, Ashen Capital",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Leyndell, Ashen Capital",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Vastly heals HP for self and nearby allies",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 65,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 42,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 50,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-fire-serpent",
      "category": "incantation",
      "contentPack": "shadow-of-the-erdtree",
      "name": {
        "en": "Fire Serpent",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "fandom-dlc-incantations"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Shadow Keep",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Shadow Keep",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Launches a flame with a serpentine coil",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 11,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 16,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages",
        "fandom-dlc-incantations"
      ]
    },
    {
      "id": "incantation-fires-deadly-sin",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Fire's Deadly Sin",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "\"Flightless Bird\" Painting",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "\"Flightless Bird\" Painting",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Sets area and self ablaze with raging flames",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 26,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 19,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 28,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-flame-fortification",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Flame Fortification",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Brother Corhyn",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Available from Brother Corhyn",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": "Brother Corhyn",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": "Brother Corhyn",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Increases fire damage negation",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 20,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 10,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 13,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-flame-of-the-fell-god",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Flame of the Fell God",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Adan, Thief of Fire",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Adan, Thief of Fire",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": true,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Summons raging fireball that explodes and sets the area ablaze",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 34,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 2,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 41,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 42,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-flame-sling",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Flame Sling",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Brother Corhyn",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Available from Brother Corhyn",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": "Brother Corhyn",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": "Brother Corhyn",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Throws ball of raging fire",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 11,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 10,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 22,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-flame-cleanse-me",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Flame, Cleanse Me",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Liurnia of the Lakes",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Liurnia of the Lakes",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Alleviates buildup of and cures poison and scarlet rot",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 14,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 12,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 10,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-flame-fall-upon-them",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Flame, Fall Upon Them",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Brother Corhyn or Miriel",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Giant's Prayerbook",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        },
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Available from Brother Corhyn or Miriel",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": "Brother Corhyn or Miriel",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": "Brother Corhyn or Miriel",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Hurls several balls of fire at once",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 16,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 28,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 40,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-flame-grant-me-strength",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Flame, Grant Me Strength",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Fort Gael",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Fort Gael",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Raises physical and fire-affinity attack power",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 28,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 15,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 16,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-flame-protect-me",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Flame, Protect Me",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Giant-Conquering Hero's Grave",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Giant-Conquering Hero's Grave",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Greatly increases fire damage negation",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 30,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 24,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 20,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-fortissaxs-lightning-spear",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Fortissax's Lightning Spear",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Remembrance of the Lichdragon",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Remembrance of the Lichdragon",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Stabs from above with two red lightning spears in tandem",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 64,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 46,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-frenzied-burst",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Frenzied Burst",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Defeat Scarab (Church of Inhibition)",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Defeat Scarab (Church of Inhibition)",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Emits concentrated blast of yellow flame of frenzy from eyes",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 24,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 22,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-frozen-lightning-spear",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Frozen Lightning Spear",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Defeat Dragonkin Soldier of Nokstella",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Defeat Dragonkin Soldier of Nokstella",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Stabs with ice lightning spear from above",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 29,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 34,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 39,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-furious-blade-of-ansbach",
      "category": "incantation",
      "contentPack": "shadow-of-the-erdtree",
      "name": {
        "en": "Furious Blade of Ansbach",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "fandom-dlc-incantations"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Enir-Ilim",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Enir-Ilim",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Cleaves through enemies with bloodflame blade summoned from side of the hand",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 18,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 19,
        "arcane": 27,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages",
        "fandom-dlc-incantations"
      ]
    },
    {
      "id": "incantation-ghostflame-breath",
      "category": "incantation",
      "contentPack": "shadow-of-the-erdtree",
      "name": {
        "en": "Ghostflame Breath",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "fandom-dlc-incantations"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Grand Altar of Dragon Communion",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Grand Altar of Dragon Communion",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Channels dragon to spew ghostflame breath",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 36,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 23,
        "arcane": 15,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 60,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages",
        "fandom-dlc-incantations"
      ]
    },
    {
      "id": "incantation-giant-golden-arc",
      "category": "incantation",
      "contentPack": "shadow-of-the-erdtree",
      "name": {
        "en": "Giant Golden Arc",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "fandom-dlc-incantations"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Ruins of Unte",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Ruins of Unte",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Releases a giant golden arc with a swing of the arm",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 24,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 34,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 20,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages",
        "fandom-dlc-incantations"
      ]
    },
    {
      "id": "incantation-giantsflame-take-thee",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Giantsflame Take Thee",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Brother Corhyn or Miriel",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Giant's Prayerbook",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        },
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Available from Brother Corhyn or Miriel",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": "Brother Corhyn or Miriel",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": "Brother Corhyn or Miriel",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Hurls a massive ball of raging fire",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 30,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 2,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 30,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 34,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-glintstone-breath",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Glintstone Breath",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Cathedral of Dragon Communion",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Cathedral of Dragon Communion",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Channels dragon to spew magic breath.",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 28,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 15,
        "arcane": 12,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-golden-arcs",
      "category": "incantation",
      "contentPack": "shadow-of-the-erdtree",
      "name": {
        "en": "Golden Arcs",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "fandom-dlc-incantations"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Moorth Ruins",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Moorth Ruins",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Releases a procession of golden arcs with a swing of the arm",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 12,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 22,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 20,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages",
        "fandom-dlc-incantations"
      ]
    },
    {
      "id": "incantation-golden-lightning-fortification",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Golden Lightning Fortification",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Guaranteed drop from Crumbling Farum Azula",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Guaranteed drop from Crumbling Farum Azula",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Greatly increases lightning resistance for self and allies",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 30,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 24,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 20,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-golden-vow",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Golden Vow",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "acquisitionMethods": [],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Increases attack and defense for self & allies",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 47,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 25,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 50,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-great-heal",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Great Heal",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Brother Corhyn",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Available from Brother Corhyn",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": "Brother Corhyn",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": "Brother Corhyn",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Greatly heals HP for self and nearby allies",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 45,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 15,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 40,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-greyolls-roar",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Greyoll's Roar",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Defeat Elder Dragon Greyoll",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Defeat Elder Dragon Greyoll",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": true,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Emits the roar of Elder Dragon Greyoll",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 50,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 2,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 28,
        "arcane": 17,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-gurranqs-beast-claw",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Gurranq's Beast Claw",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Give Gurranq eight Deathroot",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Give Gurranq eight Deathroot",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Creates beast claws to rend surroundings with shockwaves",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 21,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 15,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-heal",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Heal",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Brother Corhyn",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Starting spell (Prophet)",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        },
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Available from Brother Corhyn",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": "Brother Corhyn",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": "Brother Corhyn",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Heals HP for you and nearby allies",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 32,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 12,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 35,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-heal-from-afar",
      "category": "incantation",
      "contentPack": "shadow-of-the-erdtree",
      "name": {
        "en": "Heal from Afar",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "fandom-dlc-incantations"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "North of Moorth Ruins, Scadu Altus",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "North of Moorth Ruins, Scadu Altus",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Greatly heals HP for distant allies the spell reaches",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 45,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 18,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages",
        "fandom-dlc-incantations"
      ]
    },
    {
      "id": "incantation-honed-bolt",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Honed Bolt",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Dragon Cult Prayerbook",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Dragon Cult Prayerbook",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Strikes foe with lightning bolt from above",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 12,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 24,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-howl-of-shabriri",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Howl of Shabriri",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Frenzy-Flaming Tower",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Frenzy-Flaming Tower",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Shrieks, building up madness in nearby foes",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 21,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 33,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-immutable-shield",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Immutable Shield",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Brother Corhyn",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Brother Corhyn",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Increases left-hand shield's affinity/ailment resistance",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 15,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": 19,
        "faith": 19,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 10,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-inescapable-frenzy",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Inescapable Frenzy",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Frenzied Flame Proscription",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Frenzied Flame Proscription",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Latches onto foes to spread madness",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 22,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 21,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-knights-lightning-spear",
      "category": "incantation",
      "contentPack": "shadow-of-the-erdtree",
      "name": {
        "en": "Knight's Lightning Spear",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "fandom-dlc-incantations"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Scorpion River Catacombs",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Scorpion River Catacombs",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Hurls lightning spear while firing additional spears from ancient dragon crests",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 29,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 36,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages",
        "fandom-dlc-incantations"
      ]
    },
    {
      "id": "incantation-land-of-shadow",
      "category": "incantation",
      "contentPack": "shadow-of-the-erdtree",
      "name": {
        "en": "Land of Shadow",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "fandom-dlc-incantations"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Remembrance of the Shadow Sunflower",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Remembrance of the Shadow Sunflower",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Fires a hail of golden projectiles toward foes",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 40,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 58,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages",
        "fandom-dlc-incantations"
      ]
    },
    {
      "id": "incantation-lansseaxs-glaive",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Lansseax's Glaive",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Defeat Ancient Dragon Lansseax (Altus Plateau)",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Defeat Ancient Dragon Lansseax (Altus Plateau)",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Sweeps from above with red lightning glaive",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 22,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 40,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-law-of-causality",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Law of Causality",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Sir Gideon Ofnir, the All-Knowing",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Sir Gideon Ofnir, the All-Knowing",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Retaliates upon receiving a number of blows",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 22,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": 29,
        "faith": null,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-law-of-regression",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Law of Regression",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Golden Order Principia",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Golden Order Principia",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Heals all ailments and dispels all special effects",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 55,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": 37,
        "faith": null,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-light-of-miquella",
      "category": "incantation",
      "contentPack": "shadow-of-the-erdtree",
      "name": {
        "en": "Light of Miquella",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "fandom-dlc-incantations"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Remembrance of a God and a Lord",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Remembrance of a God and a Lord",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Annihilates foes with a pillar of light",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 48,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 2,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 72,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 60,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages",
        "fandom-dlc-incantations"
      ]
    },
    {
      "id": "incantation-lightning-fortification",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Lightning Fortification",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Brother Corhyn",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Altus Plateau",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        },
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Available from Brother Corhyn",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": "Brother Corhyn",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": "Brother Corhyn",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Increases lightning damage negation",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 20,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 10,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 13,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-lightning-spear",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Lightning Spear",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Brother Corhyn / Miriel, Pastor of Vows",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Dragon Cult Prayerbook",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        },
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Available from Brother Corhyn / Miriel, Pastor of Vows",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": "Brother Corhyn / Miriel, Pastor of Vows",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": "Brother Corhyn / Miriel, Pastor of Vows",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Hurls lightning spear before caster",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 18,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 17,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 28,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-lightning-strike",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Lightning Strike",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Defeat Scarab (Weeping Peninsula, bottom of ravine)",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Defeat Scarab (Weeping Peninsula, bottom of ravine)",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Summons lightning bolt that spreads from impact",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 19,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 28,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-litany-of-proper-death",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Litany of Proper Death",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Sold by D, Hunter of the Dead",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Sold by D, Hunter of the Dead",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Creates image of Order to deal holy damage",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 17,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": 17,
        "faith": 17,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-lords-aid",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Lord's Aid",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Brother Corhyn or Miriel",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Two Fingers' Prayerbook",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        },
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Available from Brother Corhyn or Miriel",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": "Brother Corhyn or Miriel",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": "Brother Corhyn or Miriel",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Alleviates poison / blood loss / sleep buildup for self and allies",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 9,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 12,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 10,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-lords-divine-fortification",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Lord's Divine Fortification",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Twin Maiden Husks",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Gideon Ofnir",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        },
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Available from Twin Maiden Husks",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": "Twin Maiden Husks",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": "Twin Maiden Husks",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Greatly increases holy damage negation including allies",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 30,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 27,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 20,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-lords-heal",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Lord's Heal",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Brother Corhyn or Miriel",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Two Fingers' Prayerbook",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        },
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Available from Brother Corhyn or Miriel",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": "Brother Corhyn or Miriel",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": "Brother Corhyn or Miriel",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Massively heals HP for self and nearby allies",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 55,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 20,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 45,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-magic-fortification",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Magic Fortification",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Brother Corhyn",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Available from Brother Corhyn",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": "Brother Corhyn",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": "Brother Corhyn",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Increases magic damage negation",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 20,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 10,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 13,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-magma-breath",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Magma Breath",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Defeat Magma Wyrm (Fort Laiedd)",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Defeat Magma Wyrm (Fort Laiedd)",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Channels wyrm to spew magma breath",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 30,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 14,
        "arcane": 10,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-messmers-orb",
      "category": "incantation",
      "contentPack": "shadow-of-the-erdtree",
      "name": {
        "en": "Messmer's Orb",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "fandom-dlc-incantations"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Remembrance of the Impaler",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Remembrance of the Impaler",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Shapes Messmer's flame into a giant orb that soars at foe",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 31,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 2,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 60,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages",
        "fandom-dlc-incantations"
      ]
    },
    {
      "id": "incantation-midras-flame-of-frenzy",
      "category": "incantation",
      "contentPack": "shadow-of-the-erdtree",
      "name": {
        "en": "Midra's Flame of Frenzy",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "fandom-dlc-incantations"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Remembrance of the Lord of Frenzied Flame",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Remembrance of the Lord of Frenzied Flame",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Summons Lord of Frenzied Flame's head to spew frenzied flame",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 22,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 2,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 41,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages",
        "fandom-dlc-incantations"
      ]
    },
    {
      "id": "incantation-minor-erdtree",
      "category": "incantation",
      "contentPack": "shadow-of-the-erdtree",
      "name": {
        "en": "Minor Erdtree",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "fandom-dlc-incantations"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Under a tree in Shaman Village, Scaduview",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Under a tree in Shaman Village, Scaduview",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Continuously heals allies in the area",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 30,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 2,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 70,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages",
        "fandom-dlc-incantations"
      ]
    },
    {
      "id": "incantation-multilayered-ring-of-light",
      "category": "incantation",
      "contentPack": "shadow-of-the-erdtree",
      "name": {
        "en": "Multilayered Ring of Light",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "fandom-dlc-incantations"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Defeat Phantom Misbegotten Warrior (Stone Coffin Fissure)",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Defeat Phantom Misbegotten Warrior (Stone Coffin Fissure)",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Fires a multilayered golden ring of light that continuously inflicts damage",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 23,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 36,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 28,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages",
        "fandom-dlc-incantations"
      ]
    },
    {
      "id": "incantation-noble-presence",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Noble Presence",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Godskin Noble (Temple of Eiglay)",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Godskin Noble (Temple of Eiglay)",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Thrust out belly with gusto to unleash repelling shockwave",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 20,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 26,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 28,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-o-flame",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "O, Flame!",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Brother Corhyn or Miriel",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Fire Monks' Prayerbook",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        },
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Available from Brother Corhyn or Miriel",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": "Brother Corhyn or Miriel",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": "Brother Corhyn or Miriel",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Momentarily sparks roaring flame from hand",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 16,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 16,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 24,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-order-healing",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Order Healing",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Scarab (Nokron, Eternal City)",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Scarab (Nokron, Eternal City)",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Alleviates death blight buildup",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 15,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": 11,
        "faith": 11,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-orders-blade",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Order's Blade",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "D, Hunter of the Dead",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "D, Hunter of the Dead",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Enchanted right-hand armament with holy damage",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 22,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": 13,
        "faith": 13,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-pest-threads",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Pest Threads",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "acquisitionMethods": [],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Launches countless sticky threads before caster",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 19,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 11,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-pest-thread-spears",
      "category": "incantation",
      "contentPack": "shadow-of-the-erdtree",
      "name": {
        "en": "Pest-Thread Spears",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "fandom-dlc-incantations"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Ancient Ruins of Rauh",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Ancient Ruins of Rauh",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Secrete sticky threads and twist them into two frontward flying spears",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 28,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 26,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages",
        "fandom-dlc-incantations"
      ]
    },
    {
      "id": "incantation-placidusaxs-ruin",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Placidusax's Ruin",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Trade Enia a Remembrance of the Dragonlord",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Trade Enia a Remembrance of the Dragonlord",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Spews golden breath of Dragonlord Placidusax",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 80,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 3,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 36,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-poison-armament",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Poison Armament",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Defeat Scarab (Swamp of Aeonia)",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Defeat Scarab (Swamp of Aeonia)",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Enchants right-hand armament with poison",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 15,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 10,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-poison-mist",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Poison Mist",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Defeat Scarab (eastern Weeping Peninsula)",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Defeat Scarab (eastern Weeping Peninsula)",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Releases poison mist before caster",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 18,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 12,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-protection-of-the-erdtree",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Protection of the Erdtree",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Defeat Teardrop Scarab (Altus Plateau)",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Defeat Teardrop Scarab (Altus Plateau)",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Increases affinity damage negation for self & allies",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 30,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 35,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 50,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-radagons-rings-of-light",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Radagon's Rings of Light",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Brother Corhyn",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Brother Corhyn",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Creates golden ring of light to attack wide area",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 29,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": 31,
        "faith": 31,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 37,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-rain-of-fire",
      "category": "incantation",
      "contentPack": "shadow-of-the-erdtree",
      "name": {
        "en": "Rain of Fire",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "fandom-dlc-incantations"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Shadow Keep",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Shadow Keep",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Momentarily sparks roaring flame from hand",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 27,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 52,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages",
        "fandom-dlc-incantations"
      ]
    },
    {
      "id": "incantation-rejection",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Rejection",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Brother Corhyn",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Available from Brother Corhyn",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": "Brother Corhyn",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": "Brother Corhyn",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Produces a shockwave that pushes away foes",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 9,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 12,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 24,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-roar-of-rugalea",
      "category": "incantation",
      "contentPack": "shadow-of-the-erdtree",
      "name": {
        "en": "Roar of Rugalea",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "fandom-dlc-incantations"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Rugalea the Great Red Bear",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Rugalea the Great Red Bear",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Channels great red bear to emit a furious roar",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 17,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 14,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages",
        "fandom-dlc-incantations"
      ]
    },
    {
      "id": "incantation-rotten-breath",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Rotten Breath",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Altar of Dragon Commmunion",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Altar of Dragon Commmunion",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Channels dragon to spew scarlet rot breath",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 36,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 15,
        "arcane": 12,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 48,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-rotten-butterflies",
      "category": "incantation",
      "contentPack": "shadow-of-the-erdtree",
      "name": {
        "en": "Rotten Butterflies",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "fandom-dlc-incantations"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Remembrance of the Saint of the Bud",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Remembrance of the Saint of the Bud",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Summons countless butterflies to scatter rot",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 48,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 33,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages",
        "fandom-dlc-incantations"
      ]
    },
    {
      "id": "incantation-scarlet-aeonia",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Scarlet Aeonia",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Remembrance of the Rot Goddess",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Remembrance of the Rot Goddess",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Creates a giant flower that explodes with scarlet rot.",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 56,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 3,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 35,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-scouring-black-flame",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Scouring Black Flame",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Godskin Apostle (Dominula, Windmill Village)",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Godskin Apostle (Dominula, Windmill Village)",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Sweeps area before caster with black flame",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 21,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 28,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-shadow-bait",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Shadow Bait",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Subterranean Shunning-Grounds",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Subterranean Shunning-Grounds",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Creates shadow that lures the aggression of foes of human build",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 15,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 13,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 14,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-smarags-glintstone-breath",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Smarag's Glintstone Breath",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "2 Dragon Hearts",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "2 Dragon Hearts",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Spews magic breath of Glintstone Dragon Smarag from above",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 36,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 23,
        "arcane": 15,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 60,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-spira",
      "category": "incantation",
      "contentPack": "shadow-of-the-erdtree",
      "name": {
        "en": "Spira",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "fandom-dlc-incantations"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Enir-Ilim",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Enir-Ilim",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Summons a spiral of light that erupts at the enemy's feet",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 10,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 2,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 48,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 14,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages",
        "fandom-dlc-incantations"
      ]
    },
    {
      "id": "incantation-stone-of-gurranq",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Stone of Gurranq",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Give Gurranq six Deathroot",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Give Gurranq six Deathroot",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Hurls a boulder before the caster",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 15,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 13,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-surge-o-flame",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Surge, O Flame!",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Brother Corhyn or Miriel",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Fire Monks' Prayerbook",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        },
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Available from Brother Corhyn or Miriel",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": "Brother Corhyn or Miriel",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": "Brother Corhyn or Miriel",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Incinerates area before caster with stream of fire",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 9,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 2,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-swarm-of-flies",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Swarm of Flies",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "acquisitionMethods": [],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Releases a swarm of bloodflies before the caster",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 14,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 11,
        "arcane": 16,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-the-flame-of-frenzy",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "The Flame of Frenzy",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Callu Baptismal Church",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Callu Baptismal Church",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Emits burst of yellow flame of frenzy from eyes",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 16,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 16,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 30,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-theodorixs-magma",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Theodorix's Magma",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Defeat Great Wyrm Theodorix",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Defeat Great Wyrm Theodorix",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Spews magma breath of Theodorix from above",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 45,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 21,
        "arcane": 14,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-triple-rings-of-light",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Triple Rings of Light",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Elphael, Brace of the Haligtree",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Elphael, Brace of the Haligtree",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Fire three rings of light before the caster",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 23,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": 23,
        "faith": 23,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 28,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-unendurable-frenzy",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Unendurable Frenzy",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Yelough Anix Ruins",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Yelough Anix Ruins",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Emits violent burst of yellow flame of frenzy from eyes",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 22,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 31,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-urgent-heal",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Urgent Heal",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Brother Corhyn",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Starting spell (Confessor)",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        },
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Available from Brother Corhyn",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": "Brother Corhyn",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": "Brother Corhyn",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Heals a small amount of HP",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 16,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 8,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 30,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-vykes-dragonbolt",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Vyke's Dragonbolt",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Roundtable Knight Vyke",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Roundtable Knight Vyke",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Enchants right-hand armament with lightning damage",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 27,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 23,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 20,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-watchful-spirit",
      "category": "incantation",
      "contentPack": "shadow-of-the-erdtree",
      "name": {
        "en": "Watchful Spirit",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "fandom-dlc-incantations"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Belurat, Tower Settlement",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Belurat, Tower Settlement",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Summons a guardian spirit above the caster's head",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 12,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 26,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages",
        "fandom-dlc-incantations"
      ]
    },
    {
      "id": "incantation-whirl-o-flame",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Whirl, O Flame!",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Teardrop Scarab (between Caelem Ruins and Rotview Balcony)",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Teardrop Scarab (between Caelem Ruins and Rotview Balcony)",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Sweeps area before caster with stream of fire",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 19,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 13,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 26,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "incantation-wrath-from-afar",
      "category": "incantation",
      "contentPack": "shadow-of-the-erdtree",
      "name": {
        "en": "Wrath from Afar",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "fandom-dlc-incantations"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Shadow Keep",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Shadow Keep",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Fires a golden shockwave that knocks back foes",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 18,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 34,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 24,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages",
        "fandom-dlc-incantations"
      ]
    },
    {
      "id": "incantation-wrath-of-gold",
      "category": "incantation",
      "contentPack": "base-game",
      "name": {
        "en": "Wrath of Gold",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "eldenpedia-spell-pages"
        ]
      },
      "primaryLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primarySource": {
        "en": "Woodfolk Ruins",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "acquisitionMethods": [
        {
          "location": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "method": {
            "en": "Woodfolk Ruins",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "questConditions": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "requiredChoices": {
            "en": null,
            "ptBR": null,
            "enStatus": "pending",
            "ptBRStatus": "pending",
            "sourceRefs": []
          },
          "sourceRefs": [
            "eldenpedia-spell-pages"
          ],
          "status": "probable"
        }
      ],
      "relatedNpc": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "relatedLocation": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "questConditions": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "requiredChoices": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "missable": {
        "value": null,
        "explanation": {
          "en": null,
          "ptBR": null,
          "enStatus": "pending",
          "ptBRStatus": "pending",
          "sourceRefs": []
        },
        "status": "pending",
        "sourceRefs": []
      },
      "legendary": {
        "value": false,
        "status": "confirmed",
        "sourceRefs": [
          "eldenpedia-legendary-spells"
        ]
      },
      "summary": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "primaryEffect": {
        "en": "Produces golden shockwave that knocks back foes",
        "ptBR": null,
        "enStatus": "probable",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "damageTypes": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "fpCost": {
        "value": 40,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "memorySlots": {
        "value": 1,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": null,
        "faith": 32,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 44,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "durationSeconds": {
        "value": null,
        "status": "pending",
        "sourceRefs": [],
        "notes": []
      },
      "limitations": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "technicalNotes": {
        "en": null,
        "ptBR": null,
        "enStatus": "pending",
        "ptBRStatus": "pending",
        "sourceRefs": []
      },
      "sourceRefs": [
        "eldenpedia-category-inventory",
        "eldenpedia-spell-pages"
      ]
    }
  ]
};
enrichResearch(research);
research.entries.sort((a, b) =>
  (a.contentPack === b.contentPack ? 0 : a.contentPack === 'base-game' ? -1 : 1)
  || a.name.en.localeCompare(b.name.en, 'en')
  || a.id.localeCompare(b.id, 'en'));

const output = path.join(__dirname, 'incantations-catalog-research.json');
fs.writeFileSync(output, `${JSON.stringify(research, null, 2)}\n`);
console.log(`Generated ${research.entries.length} incantation entries.`);
