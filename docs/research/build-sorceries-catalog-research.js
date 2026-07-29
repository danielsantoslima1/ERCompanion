const fs = require('fs');
const path = require('path');
const { enrichResearch } = require('./spell-research-enrichment');

const research = {
  "researchVersion": 1,
  "scope": "sorceries-catalog-research",
  "generatedAt": "2026-07-29",
  "category": "sorcery",
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
    "fandom-dlc-sorceries",
    "windows-central-dlc-counts"
  ],
  "entries": [
    {
      "id": "sorcery-adulas-moonblade",
      "category": "sorcery",
      "contentPack": "base-game",
      "name": {
        "en": "Adula's Moonblade",
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
        "en": "Dropped by Glintstone Dragon Adula",
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
            "en": "Dropped by Glintstone Dragon Adula",
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
        "en": "Sweeping slash followed by cold blade projectile",
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
        "intelligence": 32,
        "faith": null,
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
      "id": "sorcery-ambush-shard",
      "category": "sorcery",
      "contentPack": "base-game",
      "name": {
        "en": "Ambush Shard",
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
        "en": "Witchbane Ruins",
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
            "en": "Witchbane Ruins",
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
        "en": "Strikes from behind with projectile fired from distance",
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
        "intelligence": 23,
        "faith": null,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 15,
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
      "id": "sorcery-ancient-death-rancor",
      "category": "sorcery",
      "contentPack": "base-game",
      "name": {
        "en": "Ancient Death Rancor",
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
        "en": "Dropped by Death Rite Bird south of the Gate Town North grace.",
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
            "en": "Dropped by Death Rite Bird south of the Gate Town North grace.",
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
        "en": "Summons horde of vengeful spirits that chase down foes",
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
        "intelligence": 34,
        "faith": 24,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 27,
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
      "id": "sorcery-blades-of-stone",
      "category": "sorcery",
      "contentPack": "shadow-of-the-erdtree",
      "name": {
        "en": "Blades of Stone",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "fandom-dlc-sorceries"
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
        "en": "Remembrance of the Wild Boar Rider",
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
            "en": "Remembrance of the Wild Boar Rider",
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
        "en": "Summons rock blades from the earth",
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
        "value": 2,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": 48,
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
        "eldenpedia-spell-pages",
        "fandom-dlc-sorceries"
      ]
    },
    {
      "id": "sorcery-briars-of-punishment",
      "category": "sorcery",
      "contentPack": "base-game",
      "name": {
        "en": "Briars of Punishment",
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
        "en": "Mountaintops of the Giants",
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
            "en": "Mountaintops of the Giants",
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
        "en": "Wounds caster to unleash a trail of bloodthorns",
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
        "faith": 21,
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
      "id": "sorcery-briars-of-sin",
      "category": "sorcery",
      "contentPack": "base-game",
      "name": {
        "en": "Briars of Sin",
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
        "en": "Defeat Guilty (Church of Vows)",
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
            "en": "Defeat Guilty (Church of Vows)",
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
        "en": "Summons thorns from a whorl of your own blood",
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
        "value": 6,
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
      "id": "sorcery-cannon-of-haima",
      "category": "sorcery",
      "contentPack": "base-game",
      "name": {
        "en": "Cannon of Haima",
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
        "en": "Converted Fringe Tower, north-east Liurnia of the Lakes",
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
            "en": "Converted Fringe Tower, north-east Liurnia of the Lakes",
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
        "en": "Lobs an explosive magic projectile in an arc",
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
        "value": 38,
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
        "intelligence": 25,
        "faith": null,
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
      "id": "sorcery-carian-greatsword",
      "category": "sorcery",
      "contentPack": "base-game",
      "name": {
        "en": "Carian Greatsword",
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
        "en": "Miriel, Pastor of Vows",
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
            "en": "Miriel, Pastor of Vows",
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
        "en": "Performs sweeping slash using magical greatsword",
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
        "intelligence": 24,
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
      "id": "sorcery-carian-phalanx",
      "category": "sorcery",
      "contentPack": "base-game",
      "name": {
        "en": "Carian Phalanx",
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
        "en": "Forms a defensive arch of numerous magic glintblades",
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
        "intelligence": 34,
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
      "id": "sorcery-carian-piercer",
      "category": "sorcery",
      "contentPack": "base-game",
      "name": {
        "en": "Carian Piercer",
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
        "en": "Conjures a magic sword to impale foes",
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
        "intelligence": 27,
        "faith": null,
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
      "id": "sorcery-carian-retaliation",
      "category": "sorcery",
      "contentPack": "base-game",
      "name": {
        "en": "Carian Retaliation",
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
        "en": "Dispels enemy spells and retaliates with glintblades",
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
        "value": 8,
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
      "id": "sorcery-carian-slicer",
      "category": "sorcery",
      "contentPack": "base-game",
      "name": {
        "en": "Carian Slicer",
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
        "en": "Performs swift sweeping slash using magical sword",
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
        "value": 4,
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
        "intelligence": 14,
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
      "id": "sorcery-cherishing-fingers",
      "category": "sorcery",
      "contentPack": "shadow-of-the-erdtree",
      "name": {
        "en": "Cherishing Fingers",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "fandom-dlc-sorceries"
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
        "en": "Cathedral of Manus Metyr",
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
            "en": "Cathedral of Manus Metyr",
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
        "en": "Surrounds the caster with a mesh of hefty fingers",
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
        "intelligence": 36,
        "faith": null,
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
        "fandom-dlc-sorceries"
      ]
    },
    {
      "id": "sorcery-collapsing-stars",
      "category": "sorcery",
      "contentPack": "base-game",
      "name": {
        "en": "Collapsing Stars",
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
        "en": "War-Dead Catacombs",
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
            "en": "War-Dead Catacombs",
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
        "en": "Pulls foes toward caster with gravity projectile volley",
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
        "intelligence": 36,
        "faith": null,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 27,
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
      "id": "sorcery-comet",
      "category": "sorcery",
      "contentPack": "base-game",
      "name": {
        "en": "Comet",
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
        "en": "Fires a great magic comet",
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
        "intelligence": 52,
        "faith": null,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 31,
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
      "id": "sorcery-comet-azur",
      "category": "sorcery",
      "contentPack": "base-game",
      "name": {
        "en": "Comet Azur",
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
        "en": "Primeval Sorcerer Azur",
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
            "en": "Primeval Sorcerer Azur",
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
        "en": "Fires a tremendous comet within a starry torrent",
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
        "value": 3,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": 60,
        "faith": null,
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
      "id": "sorcery-crystal-barrage",
      "category": "sorcery",
      "contentPack": "base-game",
      "name": {
        "en": "Crystal Barrage",
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
        "en": "Sellen",
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
            "en": "Sellen",
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
        "en": "Fires a volley of glintstone crystal shards",
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
        "intelligence": 23,
        "faith": null,
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
      "id": "sorcery-crystal-burst",
      "category": "sorcery",
      "contentPack": "base-game",
      "name": {
        "en": "Crystal Burst",
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
        "en": "Demi-Human Queen|max_held=99}}",
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
            "en": "Demi-Human Queen|max_held=99}}",
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
        "en": "Fires a burst of glintstone crystal shards",
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
        "intelligence": 18,
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
      "id": "sorcery-crystal-release",
      "category": "sorcery",
      "contentPack": "base-game",
      "name": {
        "en": "Crystal Release",
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
        "en": "Academy Crystal Cave boss",
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
            "en": "Academy Crystal Cave boss",
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
        "en": "Scours area with violent rain of crystal shards",
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
        "intelligence": 41,
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
      "id": "sorcery-crystal-torrent",
      "category": "sorcery",
      "contentPack": "base-game",
      "name": {
        "en": "Crystal Torrent",
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
        "en": "Sellia Hideaway boss",
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
            "en": "Sellia Hideaway boss",
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
        "en": "Scours area with violent rain of crystal shards",
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
        "intelligence": 47,
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
      "id": "sorcery-eternal-darkness",
      "category": "sorcery",
      "contentPack": "base-game",
      "name": {
        "en": "Eternal Darkness",
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
        "en": "Creates a dark space that draws in spells",
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
        "intelligence": 35,
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
      "id": "sorcery-explosive-ghostflame",
      "category": "sorcery",
      "contentPack": "base-game",
      "name": {
        "en": "Explosive Ghostflame",
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
        "en": "Consecrated Snowfield",
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
            "en": "Consecrated Snowfield",
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
        "en": "Causes ghostflame explosion that burns wide area",
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
        "intelligence": 42,
        "faith": 30,
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
      "id": "sorcery-fias-mist",
      "category": "sorcery",
      "contentPack": "base-game",
      "name": {
        "en": "Fia's Mist",
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
        "en": "Release a mist of death before caster",
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
        "intelligence": 23,
        "faith": 18,
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
      "id": "sorcery-fleeting-microcosm",
      "category": "sorcery",
      "contentPack": "shadow-of-the-erdtree",
      "name": {
        "en": "Fleeting Microcosm",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "fandom-dlc-sorceries"
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
        "en": "Count Ymir",
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
            "en": "Cathedral of Manus Metyr",
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
            "en": "Available from Count Ymir",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": "Count Ymir",
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
        "en": "Count Ymir",
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
        "en": "Conjures a microcosm that pulses with a single wave, disappearing in a burst",
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
        "intelligence": 42,
        "faith": null,
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
        "eldenpedia-spell-pages",
        "fandom-dlc-sorceries"
      ]
    },
    {
      "id": "sorcery-founding-rain-of-stars",
      "category": "sorcery",
      "contentPack": "base-game",
      "name": {
        "en": "Founding Rain of Stars",
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
        "en": "Heretical Rise",
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
            "en": "Heretical Rise",
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
        "en": "Releases a downpour of star rain for a while",
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
        "intelligence": 52,
        "faith": null,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 31,
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
      "id": "sorcery-freezing-mist",
      "category": "sorcery",
      "contentPack": "base-game",
      "name": {
        "en": "Freezing Mist",
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
        "en": "Preceptor Seluvis / Twin Maiden Husks",
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
            "en": "Available from Preceptor Seluvis / Twin Maiden Husks",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": "Preceptor Seluvis / Twin Maiden Husks",
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
        "en": "Preceptor Seluvis / Twin Maiden Husks",
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
        "en": "Releases cold mist before caster",
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
        "intelligence": 21,
        "faith": null,
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
      "id": "sorcery-frozen-armament",
      "category": "sorcery",
      "contentPack": "base-game",
      "name": {
        "en": "Frozen Armament",
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
        "en": "Enchants right-hand armament with frost",
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
        "intelligence": 15,
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
      "id": "sorcery-gavel-of-haima",
      "category": "sorcery",
      "contentPack": "base-game",
      "name": {
        "en": "Gavel of Haima",
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
        "en": "Converted Fringe Tower",
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
            "en": "Converted Fringe Tower",
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
        "en": "Attacks using a magic greathammer",
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
        "intelligence": 25,
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
      "id": "sorcery-gelmirs-fury",
      "category": "sorcery",
      "contentPack": "base-game",
      "name": {
        "en": "Gelmir's Fury",
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
        "en": "Covers area with surge of magma from the earth",
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
        "intelligence": 28,
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
      "id": "sorcery-glintblade-phalanx",
      "category": "sorcery",
      "contentPack": "base-game",
      "name": {
        "en": "Glintblade Phalanx",
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
        "en": "Forms a defensive arch of magic glintblades",
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
        "intelligence": 22,
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
      "id": "sorcery-glintblade-trio",
      "category": "sorcery",
      "contentPack": "shadow-of-the-erdtree",
      "name": {
        "en": "Glintblade Trio",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "fandom-dlc-sorceries"
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
        "en": "Castle Ensis",
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
            "en": "Castle Ensis",
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
        "en": "Creates sigil that forms three projectile glintblades after delay",
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
        "intelligence": 28,
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
        "eldenpedia-spell-pages",
        "fandom-dlc-sorceries"
      ]
    },
    {
      "id": "sorcery-glintstone-arc",
      "category": "sorcery",
      "contentPack": "base-game",
      "name": {
        "en": "Glintstone Arc",
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
        "en": "Purchase}}",
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
            "en": "Purchase}}",
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
        "en": "Fires a horizontally-widening magic arc",
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
        "intelligence": 13,
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
      "id": "sorcery-glintstone-cometshard",
      "category": "sorcery",
      "contentPack": "base-game",
      "name": {
        "en": "Glintstone Cometshard",
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
        "en": "Fires a magic comet with a trailing tail",
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
        "intelligence": 36,
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
      "id": "sorcery-glintstone-icecrag",
      "category": "sorcery",
      "contentPack": "base-game",
      "name": {
        "en": "Glintstone Icecrag",
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
        "en": "Preceptor Seluvis / Twin Maiden Husks",
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
            "en": "Available from Preceptor Seluvis / Twin Maiden Husks",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": "Preceptor Seluvis / Twin Maiden Husks",
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
        "en": "Preceptor Seluvis / Twin Maiden Husks",
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
        "en": "Fires mass of cold magic from glintstone",
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
        "intelligence": 15,
        "faith": null,
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
      "id": "sorcery-glintstone-nail",
      "category": "sorcery",
      "contentPack": "shadow-of-the-erdtree",
      "name": {
        "en": "Glintstone Nail",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "fandom-dlc-sorceries"
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
        "en": "Count Ymir",
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
            "en": "Cathedral of Manus Metyr",
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
            "en": "Available from Count Ymir",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": "Count Ymir",
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
        "en": "Count Ymir",
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
        "en": "Fires a shattering magic nail",
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
        "intelligence": 18,
        "faith": null,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 21,
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
        "fandom-dlc-sorceries"
      ]
    },
    {
      "id": "sorcery-glintstone-nails",
      "category": "sorcery",
      "contentPack": "shadow-of-the-erdtree",
      "name": {
        "en": "Glintstone Nails",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "fandom-dlc-sorceries"
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
        "en": "Count Ymir",
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
            "en": "Cathedral of Manus Metyr",
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
            "en": "Available from Count Ymir",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": "Count Ymir",
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
        "en": "Count Ymir",
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
        "en": "Fires multiple shattering magic nails",
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
        "intelligence": 32,
        "faith": null,
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
        "eldenpedia-spell-pages",
        "fandom-dlc-sorceries"
      ]
    },
    {
      "id": "sorcery-glintstone-pebble",
      "category": "sorcery",
      "contentPack": "base-game",
      "name": {
        "en": "Glintstone Pebble",
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
        "en": "Sorceress Sellen / Sorcerer Thops / Count Ymir / Twin Maiden Husks",
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
            "en": "Starting spell (Astrologer); Limgrave / Liurnia of the Lakes / Academy of Raya Lucaria / Scadu Altus",
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
            "en": "Available from Sorceress Sellen / Sorcerer Thops / Count Ymir / Twin Maiden Husks",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": "Sorceress Sellen / Sorcerer Thops / Count Ymir / Twin Maiden Husks",
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
        "en": "Sorceress Sellen / Sorcerer Thops / Count Ymir / Twin Maiden Husks",
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
        "en": "Fires magic projectiles from glintstone",
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
        "intelligence": 10,
        "faith": null,
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
      "id": "sorcery-glintstone-stars",
      "category": "sorcery",
      "contentPack": "base-game",
      "name": {
        "en": "Glintstone Stars",
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
        "en": "Purchase",
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
            "en": "Purchase",
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
        "en": "Fires three shooting stars that pursue foes",
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
        "intelligence": 12,
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
      "id": "sorcery-gravitational-missile",
      "category": "sorcery",
      "contentPack": "shadow-of-the-erdtree",
      "name": {
        "en": "Gravitational Missile",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "fandom-dlc-sorceries"
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
        "en": "Finger Ruins of Dheo",
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
            "en": "Finger Ruins of Dheo",
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
        "en": "Fires a bolt of gravity that pulls in enemies",
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
        "intelligence": 36,
        "faith": null,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 29,
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
        "fandom-dlc-sorceries"
      ]
    },
    {
      "id": "sorcery-gravity-well",
      "category": "sorcery",
      "contentPack": "base-game",
      "name": {
        "en": "Gravity Well",
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
        "en": "Academy of Raya Lucaria",
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
            "en": "Academy of Raya Lucaria",
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
        "en": "Pulls foes toward caster with gravity projectile",
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
        "intelligence": 17,
        "faith": null,
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
      "id": "sorcery-great-glintstone-shard",
      "category": "sorcery",
      "contentPack": "base-game",
      "name": {
        "en": "Great Glintstone Shard",
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
        "en": "Fires larger magic projectiles from glintstone",
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
        "intelligence": 16,
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
      "id": "sorcery-great-oracular-bubble",
      "category": "sorcery",
      "contentPack": "base-game",
      "name": {
        "en": "Great Oracular Bubble",
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
        "en": "Launches a large magic bubble",
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
        "intelligence": 25,
        "faith": null,
        "arcane": 18,
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
      "id": "sorcery-greatblade-phalanx",
      "category": "sorcery",
      "contentPack": "base-game",
      "name": {
        "en": "Greatblade Phalanx",
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
        "en": "Forms a defensive arch of larger magic glintblades",
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
      "id": "sorcery-impenetrable-thorns",
      "category": "sorcery",
      "contentPack": "shadow-of-the-erdtree",
      "name": {
        "en": "Impenetrable Thorns",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "fandom-dlc-sorceries"
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
        "en": "Summons the Scadutree's impenetrable thorns from the earth",
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
        "faith": 24,
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
        "eldenpedia-spell-pages",
        "fandom-dlc-sorceries"
      ]
    },
    {
      "id": "sorcery-lorettas-greatbow",
      "category": "sorcery",
      "contentPack": "base-game",
      "name": {
        "en": "Loretta's Greatbow",
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
        "en": "Loot",
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
            "en": "Loot",
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
        "en": "Fires great arrow from a magic greatbow",
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
        "intelligence": 26,
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
      "id": "sorcery-lorettas-mastery",
      "category": "sorcery",
      "contentPack": "base-game",
      "name": {
        "en": "Loretta's Mastery",
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
        "en": "Loot",
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
            "en": "Loot",
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
        "en": "Fires four great arrows from a magic greatbow at once",
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
        "value": 39,
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
        "intelligence": 46,
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
      "id": "sorcery-lucidity",
      "category": "sorcery",
      "contentPack": "base-game",
      "name": {
        "en": "Lucidity",
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
        "en": "Alleviates buildup of sleep and madness",
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
        "intelligence": 17,
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
      "id": "sorcery-magic-downpour",
      "category": "sorcery",
      "contentPack": "base-game",
      "name": {
        "en": "Magic Downpour",
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
        "en": "Summon a magic mass that sprays projectiles over area",
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
        "intelligence": 15,
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
      "id": "sorcery-magic-glintblade",
      "category": "sorcery",
      "contentPack": "base-game",
      "name": {
        "en": "Magic Glintblade",
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
        "en": "Creates sigil that forms a projectile glintblade after delay",
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
        "intelligence": 14,
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
      "id": "sorcery-magma-shot",
      "category": "sorcery",
      "contentPack": "base-game",
      "name": {
        "en": "Magma Shot",
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
        "en": "Volcano Manor",
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
            "en": "Volcano Manor",
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
        "en": "Fire lump of magma that explodes on contact",
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
        "intelligence": 19,
        "faith": 10,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 21,
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
      "id": "sorcery-mantle-of-thorns",
      "category": "sorcery",
      "contentPack": "shadow-of-the-erdtree",
      "name": {
        "en": "Mantle of Thorns",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "fandom-dlc-sorceries"
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
        "en": "Defeat Ulcerated Tree Spirit (Shadow Keep)",
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
            "en": "Defeat Ulcerated Tree Spirit (Shadow Keep)",
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
        "en": "Covers self with the Scadutree's impenetrable thorns",
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
        "faith": 20,
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
        "eldenpedia-spell-pages",
        "fandom-dlc-sorceries"
      ]
    },
    {
      "id": "sorcery-mass-of-putrescence",
      "category": "sorcery",
      "contentPack": "shadow-of-the-erdtree",
      "name": {
        "en": "Mass of Putrescence",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "fandom-dlc-sorceries"
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
        "en": "Stone Coffin Fissure",
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
            "en": "Stone Coffin Fissure",
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
        "en": "Flings a great mass of putrescence",
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
        "intelligence": 28,
        "faith": 22,
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
        "eldenpedia-spell-pages",
        "fandom-dlc-sorceries"
      ]
    },
    {
      "id": "sorcery-meteorite",
      "category": "sorcery",
      "contentPack": "base-game",
      "name": {
        "en": "Meteorite",
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
        "en": "Royal Grave Evergaol}}",
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
            "en": "Royal Grave Evergaol}}",
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
        "en": "Calls small meteors down from the sky",
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
        "intelligence": 30,
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
      "id": "sorcery-meteorite-of-astel",
      "category": "sorcery",
      "contentPack": "base-game",
      "name": {
        "en": "Meteorite of Astel",
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
        "en": "Calls a hail of small meteorites from the void.",
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
        "value": 2,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": 55,
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
      "id": "sorcery-miriams-vanishing",
      "category": "sorcery",
      "contentPack": "shadow-of-the-erdtree",
      "name": {
        "en": "Miriam's Vanishing",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "fandom-dlc-sorceries"
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
        "en": "Count Ymir / Twin Maiden Husks",
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
            "en": "Cathedral of Manus Metyr",
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
            "en": "Available from Count Ymir / Twin Maiden Husks",
            "ptBR": null,
            "enStatus": "probable",
            "ptBRStatus": "pending",
            "sourceRefs": [
              "eldenpedia-spell-pages"
            ]
          },
          "relatedNpc": {
            "en": "Count Ymir / Twin Maiden Husks",
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
        "en": "Count Ymir / Twin Maiden Husks",
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
        "en": "Conceals self in a glintstone haze",
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
        "intelligence": 26,
        "faith": null,
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
        "eldenpedia-spell-pages",
        "fandom-dlc-sorceries"
      ]
    },
    {
      "id": "sorcery-night-comet",
      "category": "sorcery",
      "contentPack": "base-game",
      "name": {
        "en": "Night Comet",
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
        "en": "Fires semi-invisible magic comet",
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
        "intelligence": 38,
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
      "id": "sorcery-night-maidens-mist",
      "category": "sorcery",
      "contentPack": "base-game",
      "name": {
        "en": "Night Maiden's Mist",
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
        "en": "Releases life-sapping silver mist before caster",
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
        "intelligence": 14,
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
      "id": "sorcery-night-shard",
      "category": "sorcery",
      "contentPack": "base-game",
      "name": {
        "en": "Night Shard",
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
        "en": "Swiftly fires a semi-invisible magic projectile",
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
        "intelligence": 18,
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
      "id": "sorcery-oracle-bubbles",
      "category": "sorcery",
      "contentPack": "base-game",
      "name": {
        "en": "Oracle Bubbles",
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
        "en": "Teardrop Scarab in Siofra River",
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
            "en": "Teardrop Scarab in Siofra River",
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
        "en": "Launches several small magic bubbles",
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
        "intelligence": 19,
        "faith": null,
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
      "id": "sorcery-rancorcall",
      "category": "sorcery",
      "contentPack": "base-game",
      "name": {
        "en": "Rancorcall",
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
        "en": "Stormveil Castle",
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
            "en": "Stormveil Castle",
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
        "en": "Summons vengeful spirits that chase down foes",
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
        "intelligence": 16,
        "faith": 14,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 21,
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
      "id": "sorcery-rannis-dark-moon",
      "category": "sorcery",
      "contentPack": "base-game",
      "name": {
        "en": "Ranni's Dark Moon",
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
        "en": "Chelona's Rise",
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
            "en": "Chelona's Rise",
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
        "en": "Incarnate a cold, dark moon and launch it at foes.",
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
        "value": 57,
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
        "intelligence": 68,
        "faith": null,
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
      "id": "sorcery-rellanas-twin-moons",
      "category": "sorcery",
      "contentPack": "shadow-of-the-erdtree",
      "name": {
        "en": "Rellana's Twin Moons",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "fandom-dlc-sorceries"
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
        "en": "Incarnate twin moons and repeatedly strike the ground",
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
        "value": 2,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": 72,
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
        "eldenpedia-spell-pages",
        "fandom-dlc-sorceries"
      ]
    },
    {
      "id": "sorcery-rennalas-full-moon",
      "category": "sorcery",
      "contentPack": "base-game",
      "name": {
        "en": "Rennala's Full Moon",
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
        "en": "Incarnate a full moon and launch it at foes",
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
        "value": 2,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": 70,
        "faith": null,
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
      "id": "sorcery-rings-of-spectral-light",
      "category": "sorcery",
      "contentPack": "shadow-of-the-erdtree",
      "name": {
        "en": "Rings of Spectral Light",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "fandom-dlc-sorceries"
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
        "en": "Charo's Hidden Grave",
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
            "en": "Charo's Hidden Grave",
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
        "en": "Creates rings of spectral light that fire in unison",
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
        "intelligence": 24,
        "faith": 18,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 21,
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
        "fandom-dlc-sorceries"
      ]
    },
    {
      "id": "sorcery-rock-blaster",
      "category": "sorcery",
      "contentPack": "base-game",
      "name": {
        "en": "Rock Blaster",
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
        "en": "Thrust staff into ground to emit a massive shockwave",
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
        "intelligence": 21,
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
      "id": "sorcery-rock-sling",
      "category": "sorcery",
      "contentPack": "base-game",
      "name": {
        "en": "Rock Sling",
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
        "en": "Street of Sages Ruins",
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
            "en": "Street of Sages Ruins",
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
        "en": "Summons rocks from the earth and sends its flying",
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
        "intelligence": 18,
        "faith": null,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 29,
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
      "id": "sorcery-roiling-magma",
      "category": "sorcery",
      "contentPack": "base-game",
      "name": {
        "en": "Roiling Magma",
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
        "en": "Fires lump of magma that explodes after delay",
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
        "intelligence": 21,
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
      "id": "sorcery-rykards-rancor",
      "category": "sorcery",
      "contentPack": "base-game",
      "name": {
        "en": "Rykard's Rancor",
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
        "en": "Releases searing spirits that repeatedly explode after delay",
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
        "value": 2,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": 40,
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
        "eldenpedia-spell-pages"
      ]
    },
    {
      "id": "sorcery-scholars-armament",
      "category": "sorcery",
      "contentPack": "base-game",
      "name": {
        "en": "Scholar's Armament",
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
        "en": "Purchase",
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
            "en": "Purchase",
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
        "en": "Enchants right-hand armament with magic damage",
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
        "intelligence": 12,
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
      "id": "sorcery-scholars-shield",
      "category": "sorcery",
      "contentPack": "base-game",
      "name": {
        "en": "Scholar's Shield",
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
        "en": "Purchase",
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
            "en": "Purchase",
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
        "en": "Enhances left-handed shield damage negation",
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
        "intelligence": 12,
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
      "id": "sorcery-shard-spiral",
      "category": "sorcery",
      "contentPack": "base-game",
      "name": {
        "en": "Shard Spiral",
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
        "en": "Fire twin spiraling projectiles",
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
        "intelligence": 27,
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
      "id": "sorcery-shatter-earth",
      "category": "sorcery",
      "contentPack": "base-game",
      "name": {
        "en": "Shatter Earth",
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
        "en": "Loot",
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
            "en": "Loot",
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
        "en": "Thrust staff into ground to emit a shockwave",
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
        "intelligence": 15,
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
      "id": "sorcery-shattering-crystal",
      "category": "sorcery",
      "contentPack": "base-game",
      "name": {
        "en": "Shattering Crystal",
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
        "en": "Creates crystal mass that shatters in forward burst",
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
        "intelligence": 38,
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
      "id": "sorcery-star-shower",
      "category": "sorcery",
      "contentPack": "base-game",
      "name": {
        "en": "Star Shower",
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
        "en": "Purchase",
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
            "en": "Purchase",
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
        "en": "Fires six shooting stars that pursue foes",
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
        "intelligence": 24,
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
      "id": "sorcery-starlight",
      "category": "sorcery",
      "contentPack": "base-game",
      "name": {
        "en": "Starlight",
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
        "en": "Purchase",
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
            "en": "Purchase",
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
        "en": "Creates star light to illuminate surroundings",
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
        "intelligence": 15,
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
      "id": "sorcery-stars-of-ruin",
      "category": "sorcery",
      "contentPack": "base-game",
      "name": {
        "en": "Stars of Ruin",
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
        "en": "Primeval Sorcerer Lusat",
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
            "en": "Primeval Sorcerer Lusat",
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
        "en": "Fires twelve dark shooting stars that pursue foes",
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
        "intelligence": 43,
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
      "id": "sorcery-swift-glintstone-shard",
      "category": "sorcery",
      "contentPack": "base-game",
      "name": {
        "en": "Swift Glintstone Shard",
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
        "en": "Swiftly fires magic projectiles from glintstone",
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
        "value": 5,
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
        "intelligence": 12,
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
      "id": "sorcery-terra-magica",
      "category": "sorcery",
      "contentPack": "base-game",
      "name": {
        "en": "Terra Magica",
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
        "en": "Behind Academy Crystal Cave boss",
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
            "en": "Behind Academy Crystal Cave boss",
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
        "en": "Raises the magic strength of those within the sigil",
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
        "intelligence": 20,
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
      "id": "sorcery-thopss-barrier",
      "category": "sorcery",
      "contentPack": "base-game",
      "name": {
        "en": "Thops's Barrier",
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
        "en": "Thops",
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
            "en": "Thops",
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
        "en": "Erects a magic forcefield to deflect spells",
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
        "intelligence": 18,
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
      "id": "sorcery-tibias-summons",
      "category": "sorcery",
      "contentPack": "base-game",
      "name": {
        "en": "Tibia's Summons",
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
        "en": "Tibia Mariner (Wyndham Ruins)",
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
            "en": "Tibia Mariner (Wyndham Ruins)",
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
        "en": "Summons Those Who Live in Death",
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
        "intelligence": 28,
        "faith": 20,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 27,
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
      "id": "sorcery-unseen-blade",
      "category": "sorcery",
      "contentPack": "base-game",
      "name": {
        "en": "Unseen Blade",
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
        "en": "Makes right-hand armament completely invisible",
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
        "intelligence": 12,
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
      "id": "sorcery-unseen-form",
      "category": "sorcery",
      "contentPack": "base-game",
      "name": {
        "en": "Unseen Form",
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
        "en": "Makes the caster semi-invisible",
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
        "intelligence": 16,
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
      "id": "sorcery-vortex-of-putrescence",
      "category": "sorcery",
      "contentPack": "shadow-of-the-erdtree",
      "name": {
        "en": "Vortex of Putrescence",
        "ptBR": null,
        "enStatus": "confirmed",
        "ptBRStatus": "pending",
        "sourceRefs": [
          "eldenpedia-category-inventory",
          "fandom-dlc-sorceries"
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
        "en": "Remembrance of Putrescence",
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
            "en": "Remembrance of Putrescence",
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
        "en": "Launches a whirl of putrescent jets",
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
        "value": 2,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ],
        "notes": []
      },
      "requirements": {
        "intelligence": 32,
        "faith": 26,
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
        "eldenpedia-spell-pages",
        "fandom-dlc-sorceries"
      ]
    },
    {
      "id": "sorcery-zamor-ice-storm",
      "category": "sorcery",
      "contentPack": "base-game",
      "name": {
        "en": "Zamor Ice Storm",
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
        "en": "Mountaintops of the Giants",
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
            "en": "Mountaintops of the Giants",
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
        "en": "Thrust staff into ground to create freezing tornado",
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
        "intelligence": 36,
        "faith": null,
        "arcane": null,
        "status": "probable",
        "sourceRefs": [
          "eldenpedia-spell-pages"
        ]
      },
      "staminaCost": {
        "value": 27,
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

const output = path.join(__dirname, 'sorceries-catalog-research.json');
fs.writeFileSync(output, `${JSON.stringify(research, null, 2)}\n`);
console.log(`Generated ${research.entries.length} sorcery entries.`);
