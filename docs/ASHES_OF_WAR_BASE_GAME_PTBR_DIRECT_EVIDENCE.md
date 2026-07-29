# Cinzas da Guerra — evidência direta pt-BR da instalação Steam

## Decisão final do usuário

Esta linha de pesquisa foi **encerrada por decisão do usuário** em 2026-07-28:

- nenhuma ferramenta será instalada ou baixada;
- os arquivos do jogo não serão extraídos;
- o jogo não será iniciado para capturas;
- arquivos da Steam, do jogo e saves não serão modificados;
- os 91 candidatos de nome permanecem `probable`;
- nenhum campo pt-BR foi confirmado por evidência direta;
- habilidades, afinidades, tipos e compatibilidades permanecem `pending`;
- o catálogo de produção continuará usando fallback em inglês;
- IDs e progresso permanecem inalterados;
- a pesquisa só poderá ser retomada mediante nova autorização explícita.

O resultado não representa validação oficial concluída.

## Objetivo e resultado

Esta investigação tentou vincular os cinco grupos de localização pt-BR das 91 Cinzas da Guerra do jogo base aos registros ativos da instalação legítima Steam/Windows. A instalação e os contêineres foram localizados, porém nenhuma ferramenta reconhecida e já instalada capaz de ler BHD/BDT, DCX/BND/FMG e regulation foi encontrada. Conforme as regras de segurança, a extração foi interrompida sem instalar ferramentas, improvisar parser ou executar binários desconhecidos.

Nenhum candidato anterior foi promovido a `confirmed`.

## Ambiente analisado

- Plataforma: **Steam/Windows**.
- App ID: **1245620**.
- Build ID: **22984413**.
- Versão do executável: **2.6.2.0**.
- Data da análise: **2026-07-28**.
- Manifesto: `<STEAM_LIBRARY>/steamapps/appmanifest_1245620.acf`.
- Instalação: `<ELDEN_RING_INSTALL>`.
- Idioma configurado no manifesto: `english`; os pacotes são contêineres multilíngues, mas o conteúdo pt-BR não pôde ser enumerado.
- Limitação de versão: a versão foi obtida de metadados PE do executável e o Build ID do manifesto; não houve leitura de metadados internos dos contêineres.

## Metodologia

1. Consulta somente leitura ao Registro do Windows, `libraryfolders.vdf` e manifesto do App ID.
2. Enumeração somente leitura dos arquivos da instalação.
3. Identificação de `Data0.bhd/.bdt` e `regulation.bin` como insumos necessários para mensagens e associação de registros.
4. Busca por ferramentas reconhecidas no PATH, ferramentas .NET globais, programas instalados, diretórios de programas e pastas usuais de ferramentas.
5. Interrupção antes da extração porque nenhum leitor adequado foi encontrado.
6. Hash SHA-256 somente dos arquivos pequenos ou indispensáveis efetivamente inspecionados; o `Data0.bdt` de aproximadamente 11,7 GB não foi copiado nem hashado.

## Ferramentas encontradas

Nenhuma ferramenta Souls adequada foi encontrada. Foram procurados WitchyBND, Yabber, UXM, Smithbox, DSMapStudio e SoulsFormats. PowerShell foi usado apenas para leitura de manifesto, metadados, versão e hashes; ele não fornece a capacidade segura de interpretar os formatos proprietários.

Capacidade ausente: **Read Elden Ring BHD/BDT, DCX/BND/FMG and regulation records without modifying source files**.

## Arquivos inspecionados e hashes

| ID | Caminho genérico | Formato | Tamanho | SHA-256 | Uso |
|---|---|---|---:|---|---|
| `steam-app-manifest` | `<STEAM_LIBRARY>/steamapps/appmanifest_1245620.acf` | Steam ACF/VDF manifest | 1167 | `E5384064022F93E94683862D7810086D1BBADB5630D38C035A41009880C4100F` | App ID, Build ID, depot metadata and configured language |
| `game-data0-index` | `<ELDEN_RING_INSTALL>/Game/Data0.bhd` | FromSoftware BHD index | 1095168 | `FBE82E31C36B7A58258A9D318D0A20D8AE626BEDA952811106C2B0029194981A` | Index paired with Data0.bdt, expected to reference message containers |
| `game-regulation` | `<ELDEN_RING_INSTALL>/Game/regulation.bin` | Elden Ring regulation binary | 2036272 | `7B6D07C357B639C902D48403FFE3612DB35E0CF8D6FCC82D3FB24EA6EB6CF30A` | Required for record-to-message association |
| `game-executable` | `<ELDEN_RING_INSTALL>/Game/eldenring.exe` | Windows PE | 86998096 | `34102B1C08BB5F769A724427A6F70FE29B3B732C31CF73693F861C48D3492DDB` | Installed product version 2.6.2.0 |

Arquivos relevantes localizados, mas não lidos internamente: `Data0.bdt`, demais pares `Data1..3.bhd/.bdt`, `DLC.bhd/.bdt` e pares de áudio. Nenhum FMG ou msgbnd solto foi encontrado.

## Método de associação necessário

Uma confirmação futura precisa:

1. enumerar no índice `Data0.bhd` somente os contêineres de mensagens;
2. extrair para `<TEMP_EXTRACTION_DIR>` apenas os msgbnd pt-BR e inglês;
3. ler FMGs e suas chaves;
4. ler `regulation.bin` para relacionar registros das Cinzas, habilidades e permissões de equipamento às chaves de mensagem;
5. distinguir registros ativos, órfãos e duplicados;
6. comparar o texto pt-BR e inglês pelo mesmo identificador interno;
7. apagar o diretório temporário específico.

Sem os passos 1–4, a presença de um texto no pacote não prova que ele pertence ao registro ativo.

## Totais por campo

| Grupo | confirmed | probable | pending | disputed |
|---|---:|---:|---:|---:|
| Nomes | 0 | 91 | 0 | 0 |
| Habilidades | 0 | 0 | 91 | 0 |
| Afinidades | 0 | 0 | 91 | 0 |
| Tipos | 0 | 0 | 91 | 0 |
| Equipamentos compatíveis (itens) | 0 | 0 | 91 | 0 |

## Tabela completa e comparação com a primeira passagem

| ID | Nome inglês | Candidato anterior | Texto direto | Status do nome | Habilidade | Afinidade | Tipo | Compatibilidade | Comparação/justificativa |
|---|---|---|---|---|---|---|---|---|---|
| assassins-gambit | Assassin's Gambit | Gambito do Assassino | Gambito do Assassino | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| barbaric-roar | Barbaric Roar | Rugido de Bárbaro | Rugido de Bárbaro | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| barrage | Barrage | Barragem | Barragem | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| barricade-shield | Barricade Shield | Escudo Barricada | Escudo Barricada | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| beasts-roar | Beast's Roar | Rugido da Fera | Rugido da Fera | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| black-flame-tornado | Black Flame Tornado | Tornado de Chama Negra | Tornado de Chama Negra | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| blood-blade | Blood Blade | Lâmina de Sangue | Lâmina de Sangue | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| blood-tax | Blood Tax | Taxa de Sangue | Taxa de Sangue | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| bloodhounds-step | Bloodhound's Step | Passo do Cão de Caça | Passo do Cão de Caça | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| bloody-slash | Bloody Slash | Corte Sangrento | Corte Sangrento | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| braggarts-roar | Braggart's Roar | Grito do Exibido | Grito do Exibido | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| carian-grandeur | Carian Grandeur | Grandeza Cariana | Grandeza Cariana | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| carian-greatsword | Carian Greatsword | Espada Grande Cariana | Espada Grande Cariana | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| carian-retaliation | Carian Retaliation | Retaliação Cariana | Retaliação Cariana | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| charge-forth | Charge Forth | Investida Frontal | Investida Frontal | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| chilling-mist | Chilling Mist | Névoa Refrigeradora | Névoa Refrigeradora | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| cragblade | Cragblade | Lâmina de Pedra | Lâmina de Pedra | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| determination | Determination | Determinação | Determinação | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| double-slash | Double Slash | Corte Duplo | Corte Duplo | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| earthshaker | Earthshaker | Chacoalhador de Terra | Chacoalhador de Terra | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| enchanted-shot | Enchanted Shot | Disparo Encantado | Disparo Encantado | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| endure | Endure | Resistência | Resistência | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| eruption | Eruption | Erupção | Erupção | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| flame-of-the-redmanes | Flame of the Redmanes | Chama do Leão Vermelho | Chama do Leão Vermelho | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| flaming-strike | Flaming Strike | Golpe Flamejante | Golpe Flamejante | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| giant-hunt | Giant Hunt | Caça de Gigantes | Caça de Gigantes | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| glintblade-phalanx | Glintblade Phalanx | Falange de Laminante | Falange de Laminante | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| glintstone-pebble | Glintstone Pebble | Calhau Pedrilhante | Calhau Pedrilhante | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| golden-land | Golden Land | Terra Dourada | Terra Dourada | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| golden-parry | Golden Parry | Aparagem Dourada | Aparagem Dourada | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| golden-slam | Golden Slam | Pancada Dourada | Pancada Dourada | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| golden-vow | Golden Vow | Voto Dourado | Voto Dourado | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| gravitas | Gravitas | Gravitas | Gravitas | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| ground-slam | Ground Slam | Pancada no Solo | Pancada no Solo | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| hoarah-louxs-earthshaker | Hoarah Loux's Earthshaker | Chacoalhador de Terra de Hoarah Loux | Chacoalhador de Terra de Hoarah Loux | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| hoarfrost-stomp | Hoarfrost Stomp | Pisão da Geada | Pisão da Geada | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| holy-ground | Holy Ground | Solo Sagrado | Solo Sagrado | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| ice-spear | Ice Spear | Lança de Gelo | Lança de Gelo | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| impaling-thrust | Impaling Thrust | Impulso Perfurante | Impulso Perfurante | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| kick | Kick | Chute | Chute | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| lifesteal-fist | Lifesteal Fist | Punho Ladrão de Vida | Punho Ladrão de Vida | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| lightning-ram | Lightning Ram | Carneiro do Relâmpago | Carneiro do Relâmpago | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| lightning-slash | Lightning Slash | Corte de Relâmpago | Corte de Relâmpago | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| lions-claw | Lion's Claw | Garra de Leão | Garra de Leão | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| lorettas-slash | Loretta's Slash | Corte de Loretta | Corte de Loretta | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| mighty-shot | Mighty Shot | Disparo Poderoso | Disparo Poderoso | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| no-skill | No Skill | Nenhuma Habilidade | Nenhuma Habilidade | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| parry | Parry | Aparar | Aparar | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| phantom-slash | Phantom Slash | Corte Fantasma | Corte Fantasma | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| piercing-fang | Piercing Fang | Presa Perfurante | Presa Perfurante | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| poison-moth-flight | Poison Moth Flight | Voo da Mariposa Venenosa | Voo da Mariposa Venenosa | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| poisonous-mist | Poisonous Mist | Névoa Venenosa | Névoa Venenosa | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| prayerful-strike | Prayerful Strike | Golpe Devoto | Golpe Devoto | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| prelates-charge | Prelate's Charge | Investida do Prelado | Investida do Prelado | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| quickstep | Quickstep | Passo Ágil | Passo Ágil | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| rain-of-arrows | Rain of Arrows | Chuva de Flechas | Chuva de Flechas | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| raptor-of-the-mists | Raptor of the Mists | Ave de Rapina das Brumas | Ave de Rapina das Brumas | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| repeating-thrust | Repeating Thrust | Impulso Repetitivo | Impulso Repetitivo | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| royal-knights-resolve | Royal Knight's Resolve | Determinação do Cavaleiro Real | Determinação do Cavaleiro Real | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| sacred-blade | Sacred Blade | Lâmina Sagrada | Lâmina Sagrada | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| sacred-order | Sacred Order | Ordem Sagrada | Ordem Sagrada | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| sacred-ring-of-light | Sacred Ring of Light | Anel de Luz Sagrada | Anel de Luz Sagrada | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| seppuku | Seppuku | Seppuku | Seppuku | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| shared-order | Shared Order | Ordem Compartilhada | Ordem Compartilhada | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| shield-bash | Shield Bash | Batida com Escudo | Batida com Escudo | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| shield-crash | Shield Crash | Colisão de Escudo | Colisão de Escudo | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| sky-shot | Sky Shot | Disparo do Céu | Disparo do Céu | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| spectral-lance | Spectral Lance | Lança Espectral | Lança Espectral | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| spinning-slash | Spinning Slash | Corte Giratório | Corte Giratório | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| spinning-strikes | Spinning Strikes | Golpes Giratórios | Golpes Giratórios | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| spinning-weapon | Spinning Weapon | Arma Giratória | Arma Giratória | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| square-off | Square Off | Enfrentar | Enfrentar | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| stamp-sweep | Stamp (Sweep) | Esmagamento (Em Arco) | Esmagamento (Em Arco) | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| stamp-upward-cut | Stamp (Upward Cut) | Esmagamento (Corte para Cima) | Esmagamento (Corte para Cima) | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| storm-assault | Storm Assault | Ataque da Tormenta | Ataque da Tormenta | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| storm-blade | Storm Blade | Lâmina Tempestuosa | Lâmina Tempestuosa | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| storm-stomp | Storm Stomp | Pisão Tempestuoso | Pisão Tempestuoso | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| storm-wall | Storm Wall | Parede de Tormenta | Parede de Tormenta | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| stormcaller | Stormcaller | Invocador da Tempestade | Invocador da Tempestade | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| sword-dance | Sword Dance | Dança da Espada | Dança da Espada | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| thopss-barrier | Thops's Barrier | Barreira de Thops | Barreira de Thops | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| through-and-through | Through and Through | Disparo Penetrante | Disparo Penetrante | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| thunderbolt | Thunderbolt | Relâmpago | Relâmpago | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| trolls-roar | Troll's Roar | Rugido do Troll | Rugido do Troll | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| unsheathe | Unsheathe | Desembainhar | Desembainhar | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| vacuum-slice | Vacuum Slice | Corte de Vácuo | Corte de Vácuo | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| vow-of-the-indomitable | Vow of the Indomitable | Voto do Indomável | Voto do Indomável | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| war-cry | War Cry | Grito de Guerra | Grito de Guerra | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| waves-of-darkness | Waves of Darkness | Ondas de Trevas | Ondas de Trevas | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| white-shadows-lure | White Shadow's Lure | Isca da Sombra Branca | Isca da Sombra Branca | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |
| wild-strikes | Wild Strikes | Golpes Selvagens | Golpes Selvagens | probable | pending | pending | pending | pending | Não comparado diretamente: leitor de contêiner/regulation ausente. |

## Comparação dos candidatos anteriores

- Correspondências diretas confirmadas: **0**.
- Candidatos corrigidos por evidência direta: **0**.
- Candidatos ainda aguardando verificação direta: **91**.
- Diferenças de acentuação, capitalização, pontuação, hífen, singular/plural ou tradução: **não determináveis sem leitura dos FMGs**.

O histórico da primeira passagem não foi alterado.

## Divergências, textos órfãos e antigos

Nenhuma divergência nova pôde ser determinada. Também não foi possível enumerar textos órfãos, antigos ou duplicados porque os contêineres não foram abertos.

## Campos pendentes e recomendações

Nenhum campo é recomendado para aprovação como `confirmed`. Os 91 nomes anteriores permanecem apenas `probable`; habilidades, afinidades, tipos e compatibilidades permanecem `pending`.

Não devem ser alterados catálogo de produção, IDs, progresso, interface ou traduções de produção.

## Limpeza e não redistribuição

Nenhum diretório temporário foi criado, pois a pesquisa foi interrompida antes da extração. Portanto, não havia arquivo proprietário temporário a apagar. Nenhum arquivo da instalação foi copiado para o repositório e nenhum dump completo foi versionado. Foram preservados somente hashes, tamanhos, metadados e identificadores técnicos.

## Próxima etapa

**Manter o fallback em inglês para as Cinzas da Guerra e retomar a validação oficial pt-BR somente mediante nova autorização explícita do usuário.**
