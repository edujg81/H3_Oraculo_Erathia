import json
import re

with open('/tmp/all_spells.json', 'r', encoding='utf-8') as f:
    spells = json.load(f)

clean_spells = []

for s in spells:
    # Clean up boosterEffect
    be = s['boosterEffect']
    # Strip wiki footers
    be = re.split(r'Viene Con|Ver También|Notas ¶|Notas|Nota', be)[0].strip()
    # Replace tag artifacts
    be = be.replace('<instant>', 'Instantáneo:')
    be = be.replace('<combat>', 'Combate:')
    be = be.replace('<power>', '+1 Poder')
    be = be.replace('<initiative>', '+1 Iniciativa')
    be = be.replace('<attack>', '+1 Ataque')
    be = be.replace('<defense>', '+1 Defensa')
    be = be.replace('<', '').replace('>', '')
    be = be.replace('— O —', '').replace('— OR —', '').replace('—', '').strip()
    be = re.sub(r'\s+', ' ', be)
    if not be:
        be = "Instantáneo: Descarta esta carta para sumar +1 de Poder a tu próximo lanzamiento."
    s['boosterEffect'] = be

    # Clean up notes
    nt = s.get('notes', '')
    nt = re.split(r'Viene Con|Ver También', nt)[0].strip()
    nt = nt.replace('¶', '').strip()
    nt = re.sub(r'\s+', ' ', nt)
    if not nt or len(nt) < 3:
        nt = "Sigue las reglas oficiales de lanzamiento del juego de mesa."
    s['notes'] = nt

    # Clean up effect
    eff = s['effect']
    eff = re.split(r'Viene Con|Ver También|Notas ¶', eff)[0].strip()
    eff = eff.replace('¶', '').strip()
    eff = re.sub(r'\s+', ' ', eff)
    s['effect'] = eff

    # Standardize name string casing
    name_str = s['name']
    # Example: "Escudo de Aire (Air Shield)"
    s['name'] = name_str

    # Clean up powerLevels texts
    cleaned_pl = {}
    for p_num, text in s['powerLevels'].items():
        text_clean = text.replace('➣', '->')
        text_clean = re.sub(r'<[^>]+>', ' ', text_clean)
        text_clean = re.sub(r'\s+', ' ', text_clean).strip()
        # Translate common terms
        text_clean = text_clean.replace('damage', 'de Daño')
        text_clean = text_clean.replace('initiative', 'de Iniciativa')
        text_clean = text_clean.replace('defense', 'de Defensa')
        text_clean = text_clean.replace('attack', 'de Ataque')
        text_clean = text_clean.replace('movement', 'de Movimiento')
        cleaned_pl[int(p_num)] = text_clean
    s['powerLevels'] = cleaned_pl

    clean_spells.append(s)

# Write to TypeScript file
ts_content = """import { SpellCard } from './types_local';

// Base interface mapping for the components to avoid imports circular reference
export interface LocalSpellCard {
  id: string;
  name: string;
  school: 'Aire' | 'Agua' | 'Fuego' | 'Tierra';
  type: 'Básica' | 'Avanzada';
  effect: string;
  valueText: string;
  isBoostable: boolean;
  powerLevels: {
    [power: number]: string;
  };
  boosterEffect: string;
  flavorText: string;
  notes?: string;
  colorTheme: {
    bg: string;
    border: string;
    glow: string;
    text: string;
    accent: string;
  };
}

export const SPELLS_DATA: LocalSpellCard[] = """

# Pretty format the JSON into JS/TS object
ts_data = json.dumps(clean_spells, indent=2, ensure_ascii=False)
ts_content += ts_data + ";\n"

with open('src/data/spellsData.ts', 'w', encoding='utf-8') as f:
    f.write(ts_content)

print("TypeScript spell data successfully generated at src/data/spellsData.ts!")
