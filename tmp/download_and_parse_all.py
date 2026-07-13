import re
import urllib.request
import os
import json
from html import unescape

slugs = [
    'air_shield', 'berserk', 'bless', 'blind', 'bloodlust', 'chain_lightning', 'clone', 'counterstrike',
    'cure', 'curse', 'dimension_door', 'dispel', 'disrupting_ray', 'earthquake', 'fire_shield', 'fire_wall',
    'fireball', 'fly', 'force_field', 'forgetfulness', 'fortune', 'frenzy', 'frost_ring', 'haste', 'implosion',
    'inferno', 'land_mine', 'lightning_bolt', 'magic_arrow', 'magic_mirror', 'mirth', 'misfortune', 'prayer',
    'precision', 'protection_from_air', 'protection_from_earth', 'protection_from_fire', 'protection_from_water',
    'quicksand', 'remove_obstacle', 'resurrection', 'sacrifice', 'shield', 'slayer', 'slow', 'sorrow',
    'stone_skin', 'summon_air_elemental', 'summon_earth_elemental', 'summon_fire_elemental', 'summon_water_elemental',
    'teleport', 'town_portal', 'view_air', 'view_earth', 'visions', 'water_walk', 'weakness'
]

# Mapping of English slug to traditional/known Spanish title if title parsed is not in Spanish or is raw English
english_to_spanish_overrides = {
    'air_shield': 'Escudo de Aire',
    'berserk': 'Furia',
    'bless': 'Bendecir',
    'blind': 'Cegar',
    'bloodlust': 'Ansia de sangre',
    'chain_lightning': 'Relámpago en Cadena',
    'clone': 'Clonar',
    'counterstrike': 'Contraataque',
    'cure': 'Curar',
    'curse': 'Maldición',
    'dimension_door': 'Puerta dimensional',
    'dispel': 'Disipar',
    'disrupting_ray': 'Rayo disruptor',
    'earthquake': 'Terremoto',
    'fire_shield': 'Escudo de fuego',
    'fire_wall': 'Muro de fuego',
    'fireball': 'Bola de fuego',
    'fly': 'Volar',
    'force_field': 'Campo de fuerza',
    'forgetfulness': 'Olvido',
    'fortune': 'Fortuna',
    'frenzy': 'Frenesí',
    'frost_ring': 'Anillo de frío',
    'haste': 'Celeridad',
    'implosion': 'Implosión',
    'inferno': 'Infierno',
    'land_mine': 'Mina terrestre',
    'lightning_bolt': 'Rayo',
    'magic_arrow': 'Flecha mágica',
    'magic_mirror': 'Espejo mágico',
    'mirth': 'Alegría',
    'misfortune': 'Infortunio',
    'prayer': 'Plegaria',
    'precision': 'Precisión',
    'protection_from_air': 'Protección contra el aire',
    'protection_from_earth': 'Protección contra la tierra',
    'protection_from_fire': 'Protección contra el fuego',
    'protection_from_water': 'Protección contra el agua',
    'quicksand': 'Arenas movedizas',
    'remove_obstacle': 'Eliminar obstáculo',
    'resurrection': 'Resurrección',
    'sacrifice': 'Sacrificio',
    'shield': 'Blindaje',
    'slayer': 'Asesino',
    'slow': 'Ralentizar',
    'sorrow': 'Tristeza',
    'stone_skin': 'Piel de piedra',
    'summon_air_elemental': 'Invocar elemental de aire',
    'summon_earth_elemental': 'Invocar elemental de tierra',
    'summon_fire_elemental': 'Invocar elemental de fuego',
    'summon_water_elemental': 'Invocar elemental de agua',
    'teleport': 'Teletransporte',
    'town_portal': 'Portal de la ciudad',
    'view_air': 'Ver el aire',
    'view_earth': 'Ver la tierra',
    'visions': 'Visiones',
    'water_walk': 'Caminar sobre el agua',
    'weakness': 'Debilidad'
}

# Mapping of schools based on official classifications
slug_to_school = {
    # Aire (Air)
    'air_shield': 'Aire', 'chain_lightning': 'Aire', 'dimension_door': 'Aire', 'fly': 'Aire', 'haste': 'Aire',
    'lightning_bolt': 'Aire', 'magic_mirror': 'Aire', 'precision': 'Aire', 'protection_from_air': 'Aire',
    'summon_air_elemental': 'Aire', 'view_air': 'Aire', 'visions': 'Aire',
    # Agua (Water)
    'bless': 'Agua', 'clone': 'Agua', 'cure': 'Agua', 'dispel': 'Agua', 'forgetfulness': 'Agua', 'frost_ring': 'Agua',
    'mirth': 'Agua', 'protection_from_water': 'Agua', 'summon_water_elemental': 'Agua', 'teleport': 'Agua',
    'water_walk': 'Agua', 'weakness': 'Agua',
    # Fuego (Fire)
    'berserk': 'Fuego', 'blind': 'Fuego', 'bloodlust': 'Fuego', 'curse': 'Fuego', 'fire_shield': 'Fuego',
    'fire_wall': 'Fuego', 'fireball': 'Fuego', 'frenzy': 'Fuego', 'inferno': 'Fuego', 'land_mine': 'Fuego',
    'misfortune': 'Fuego', 'protection_from_fire': 'Fuego', 'sacrifice': 'Fuego', 'slayer': 'Fuego',
    'summon_fire_elemental': 'Fuego',
    # Tierra (Earth)
    'counterstrike': 'Tierra', 'disrupting_ray': 'Tierra', 'earthquake': 'Tierra', 'force_field': 'Tierra',
    'fortune': 'Tierra', 'implosion': 'Tierra', 'prayer': 'Tierra', 'protection_from_earth': 'Tierra',
    'quicksand': 'Tierra', 'resurrection': 'Tierra', 'shield': 'Tierra', 'slow': 'Tierra', 'sorrow': 'Tierra',
    'stone_skin': 'Tierra', 'summon_earth_elemental': 'Tierra', 'town_portal': 'Tierra', 'view_earth': 'Tierra',
    'remove_obstacle': 'Tierra',
    # Default fallback
    'magic_arrow': 'Aire'
}

# Thematic backgrounds & styling colors for UI rendering based on School
school_themes = {
    'Aire': {
        'bg': 'from-cyan-950/40 to-slate-900/80',
        'border': 'border-cyan-800/50',
        'glow': 'shadow-[0_0_15px_rgba(6,182,212,0.1)]',
        'text': 'text-cyan-400',
        'accent': 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30'
    },
    'Agua': {
        'bg': 'from-sky-950/40 to-slate-900/80',
        'border': 'border-sky-800/50',
        'glow': 'shadow-[0_0_15px_rgba(14,165,233,0.1)]',
        'text': 'text-sky-400',
        'accent': 'bg-sky-500/10 text-sky-300 border-sky-500/30'
    },
    'Fuego': {
        'bg': 'from-red-950/40 to-slate-900/80',
        'border': 'border-red-800/50',
        'glow': 'shadow-[0_0_15px_rgba(239,68,68,0.1)]',
        'text': 'text-red-400',
        'accent': 'bg-red-500/10 text-red-300 border-red-500/30'
    },
    'Tierra': {
        'bg': 'from-emerald-950/40 to-slate-900/80',
        'border': 'border-emerald-800/50',
        'glow': 'shadow-[0_0_15px_rgba(16,185,129,0.1)]',
        'text': 'text-emerald-400',
        'accent': 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
    }
}

spells_data_parsed = []

cache_dir = '/tmp/spells_cache'
os.makedirs(cache_dir, exist_ok=True)

# Fetching all spelling details
for slug in slugs:
    cache_path = os.path.join(cache_dir, f'{slug}.html')
    url = f'https://es.homm3bg.wiki/spells/{slug}/'
    
    if not os.path.exists(cache_path):
        print(f'Fetching {slug} from wiki...')
        try:
            # We can use curl directly using os.system for maximum compatibility with network
            cmd = f'curl -sL "{url}" > {cache_path}'
            os.system(cmd)
        except Exception as e:
            print(f'Failed to fetch {slug}: {e}')
            continue
            
    if not os.path.exists(cache_path) or os.path.getsize(cache_path) < 100:
        print(f'Empty cache for {slug}, retrying with urllib...')
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req) as response:
                with open(cache_path, 'wb') as out:
                    out.write(response.read())
        except Exception as e:
            print(f'Failed to retrieve {slug}: {e}')
            continue

    with open(cache_path, 'r', encoding='utf-8', errors='ignore') as f:
        html = f.read()
        
    # Parse Title
    title_m = re.search(r'<h1 id=\"[^\"]+\">(.*?)<', html)
    raw_title = title_m.group(1).strip() if title_m else 'No title'
    # Use override or unescape raw title
    raw_title = unescape(raw_title)
    if slug in english_to_spanish_overrides:
        title = f'{english_to_spanish_overrides[slug]} ({slug.replace("_", " ").title()})'
    else:
        title = f'{raw_title} ({slug.replace("_", " ").title()})'

    # Extract article
    art_m = re.search(r'<article.*?</article>', html, re.DOTALL)
    if not art_m:
        print(f'Could not parse article for {slug}')
        continue
        
    art = art_m.group(0)
    
    # Extract Type: Básica vs Avanzada
    is_advanced = 'Experto' in art or 'Advanced' in art or 'Expert' in art
    spell_type = 'Avanzada' if is_advanced else 'Básica'
    
    # Extract School
    school = slug_to_school.get(slug, 'Aire')
    
    # Clean up inline SVGs and tags
    # Let's preserve some layout or split into sections
    # Find Notes section
    notes = ''
    notes_m = re.search(r'<h2 id=\"notas\">Notas.*?</h2>(.*?)<h2', art, re.DOTALL)
    if notes_m:
        notes_html = notes_m.group(1)
        notes_clean = re.sub(r'<[^>]+>', ' ', notes_html)
        notes = re.sub(r'\s+', ' ', notes_clean).strip()
        notes = unescape(notes)

    # Clean the entire text block to analyze the effect
    art_clean = re.sub(r'<svg.*?</svg>', ' ', art, flags=re.DOTALL)
    art_clean = re.sub(r'<style.*?</style>', ' ', art_clean, flags=re.DOTALL)
    
    # Let's extract the core effect text before the power scaling levels
    # Let's do it by cleaning text up to the first <power> tag or finding the description paragraph
    lines_clean = []
    for line in art_clean.split('\n'):
        # Skip lines with menus or footnotes or other noise
        if '<li' in line or '</li>' in line or 'Ver También' in line or 'Viene Con' in line:
            continue
        line_stripped = re.sub(r'<[^>]+>', ' ', line)
        line_stripped = re.sub(r'\s+', ' ', line_stripped).strip()
        if line_stripped:
            lines_clean.append(unescape(line_stripped))
            
    # Try to extract the main description of effect
    # The first few sentences of the cleaned article block are usually the description.
    # Let's search for the pattern "The selected unit suffers..." or similar.
    # We can write a parser that detects the scaling values
    power_levels = {}
    is_boostable = False
    
    # Scan for pattern: <power> X ➣ Y
    # We will search in the raw article HTML for the exact power scales!
    # Examples: <power> 0 ➣ +1 <initiative>
    # <power> 0 ➣ 1/1/1 <damage>
    power_scales = re.findall(r'<power>\s*(\d+)\s*➣\s*(.*?)(?=<power>|<h2|<hr|—|— OR —|— O —|</p|</div)', art, re.DOTALL)
    for p, val in power_scales:
        p_num = int(p)
        # Clean value
        val_clean = re.sub(r'<svg.*?</svg>', ' ', val, flags=re.DOTALL)
        val_clean = re.sub(r'<[^>]+>', ' ', val_clean)
        val_clean = re.sub(r'\s+', ' ', val_clean).strip()
        val_clean = unescape(val_clean)
        
        # Humanize Spanish translation labels if they look raw English
        val_clean = val_clean.replace('damage', 'de Daño').replace('damage .', 'de Daño')
        val_clean = val_clean.replace('initiative', 'de Iniciativa')
        val_clean = val_clean.replace('defense', 'de Defensa')
        val_clean = val_clean.replace('attack', 'de Ataque')
        val_clean = val_clean.replace('power', 'de Poder')
        val_clean = val_clean.replace('movement', 'de Movimiento')
        val_clean = val_clean.replace('hexes', 'hexágonos')
        
        power_levels[p_num] = f'Efecto con Poder {p_num}: {val_clean}'
        is_boostable = True
        
    # Fill in remaining power levels for React component up to Power 5
    if is_boostable:
        max_p = max(power_levels.keys())
        max_val = power_levels[max_p]
        for p in range(6):
            if p not in power_levels:
                if p < min(power_levels.keys()):
                    power_levels[p] = power_levels[min(power_levels.keys())]
                else:
                    power_levels[p] = max_val + ' (Nivel Máximo)'
    else:
        # If it doesn't have power scaling, it has a static effect
        power_levels = {
            0: 'Efecto estático: Este hechizo no aumenta con Poder.',
            1: 'Efecto estático: Este hechizo no aumenta con Poder.',
            2: 'Efecto estático: Este hechizo no aumenta con Poder.',
            3: 'Efecto estático: Este hechizo no aumenta con Poder.',
            4: 'Efecto estático: Este hechizo no aumenta con Poder.',
            5: 'Efecto estático: Este hechizo no aumenta con Poder.'
        }
        
    # Extract the base effect text before the power levels
    effect_text = ''
    # Let's search in the cleaned article for the paragraph between the header and the first scale
    # Typically it's the text before "Efecto con Poder" or the first <power>
    art_no_header = re.sub(r'^.*?</h1>', '', art_clean, flags=re.DOTALL)
    art_no_header = re.sub(r'<img.*?>', '', art_no_header, flags=re.DOTALL)
    art_no_header = re.sub(r'<hr\s*/>.*$', '', art_no_header, flags=re.DOTALL) # Cut at horizontal line if any
    
    # Get paragraphs
    paras = re.findall(r'<p>(.*?)</p>', art, re.DOTALL)
    cleaned_paras = []
    for p in paras:
        p_c = re.sub(r'<svg.*?</svg>', ' ', p, flags=re.DOTALL)
        p_c = re.sub(r'<[^>]+>', ' ', p_c)
        p_c = re.sub(r'\s+', ' ', p_c).strip()
        p_c = unescape(p_c)
        if p_c and not p_c.startswith('Basic Spell') and not p_c.startswith('Advanced Spell') and '➣' not in p_c:
            cleaned_paras.append(p_c)
            
    if cleaned_paras:
        effect_text = cleaned_paras[0]
    else:
        effect_text = 'Aplica efectos tácticos o estratégicos en la ronda de combate o mapa de aventura según el reglamento oficial.'
        
    # If the text is raw English, we can translate or refine it
    # We will refine known translations in a mapping, otherwise keep as is.
    if slug == 'air_shield':
        effect_text = 'La unidad aliada seleccionada recibe menos daño de ataques a distancia.'
    elif slug == 'haste':
        effect_text = 'Hasta el final del combate, incrementa la iniciativa de la unidad seleccionada.'
    elif slug == 'slow':
        effect_text = 'Hasta el final del combate, reduce notablemente la iniciativa de la unidad enemiga seleccionada.'
    elif slug == 'bless':
        effect_text = 'Aumenta el daño físico de la unidad aliada seleccionada al máximo.'
    elif slug == 'curse':
        effect_text = 'Reduce el daño físico de la unidad enemiga al mínimo.'
    elif slug == 'blind':
        effect_text = 'Ciega a la unidad enemiga, impidiendo que actúe o contraataque hasta que sea atacada.'
    elif slug == 'shield':
        effect_text = 'Aumenta la defensa física de la unidad aliada seleccionada reduciendo el daño recibido.'
    elif slug == 'stone_skin':
        effect_text = 'Petrifica ligeramente la piel de la unidad, otorgando una gran resistencia al daño físico.'
    elif slug == 'cure':
        effect_text = 'Elimina todos los efectos negativos y cura puntos de vida de la unidad seleccionada.'
    elif slug == 'resurrection':
        effect_text = 'Devuelve a la vida a miembros caídos de la unidad seleccionada de forma permanente durante el combate.'
    elif slug == 'implosion':
        effect_text = 'Aplastamiento gravitacional masivo que causa un inmenso daño directo a una unidad.'
    elif slug == 'chain_lightning':
        effect_text = 'Descarga eléctrica en cadena que golpea secuencialmente a tres unidades adyacentes.'
    elif slug == 'fireball':
        effect_text = 'Lanza una bola de fuego explosiva que daña a todas las unidades en un área de efecto.'
    elif slug == 'fire_wall':
        effect_text = 'Crea una barrera de fuego en la reja de batalla que daña a quienes la comiencen o crucen.'
    elif slug == 'town_portal':
        effect_text = 'Hechizo de mapa. Permite teletransportar al héroe de vuelta a la ciudad aliada más cercana.'
    elif slug == 'dimension_door':
        effect_text = 'Hechizo de mapa. Permite teletransportar al héroe a una loseta adyacente del mapa de aventura.'
    elif slug == 'fly':
        effect_text = 'Hechizo de mapa. Permite al héroe cruzar obstáculos intransitables y terrenos difíciles volando.'
    elif slug == 'water_walk':
        effect_text = 'Hechizo de mapa. Permite al héroe cruzar losetas de agua y ríos como si fuesen tierra firme.'
        
    # Translate English sentences if any in general list
    effect_text = effect_text.replace('The selected unit suffers:', 'La unidad seleccionada sufre:')
    effect_text = effect_text.replace('Until the end of the Combat, the selected unit suffers:', 'Hasta el final del combate, la unidad seleccionada sufre:')
    effect_text = effect_text.replace('Until the end of the Combat, the selected unit gains:', 'Hasta el final del combate, la unidad seleccionada gana:')
    effect_text = effect_text.replace('During this Combat, the selected unit gains:', 'Durante este combate, la unidad seleccionada gana:')
    effect_text = effect_text.replace('The selected unit gains:', 'La unidad seleccionada gana:')
    effect_text = effect_text.replace('The selected unit suffers:', 'La unidad seleccionada sufre:')
    
    # Extract booster/discard effect
    # We find text like <instant> +1 <power> or similar
    # In raw HTML: — OR — <instant> +1 <power>
    booster_effect = 'Descartar esta carta en tu activación para sumar +1 de Poder a cualquier hechizo.'
    booster_m = re.search(r'(?:— OR —|— O —|—)(.*?)$', art_clean, re.DOTALL)
    if booster_m:
        b_text = re.sub(r'<[^>]+>', ' ', booster_m.group(1))
        b_text = re.sub(r'\s+', ' ', b_text).strip()
        b_text = unescape(b_text)
        if b_text:
            # Humanize booster effect translation
            b_text = b_text.replace('instant', 'Instantáneo:').replace('combat', 'Combate:')
            b_text = b_text.replace('+1 power', '+1 de Poder para tu próximo lanzamiento')
            b_text = b_text.replace('+1 initiative', '+1 de Iniciativa a una unidad')
            b_text = b_text.replace('+1 attack', '+1 de Ataque a una unidad')
            b_text = b_text.replace('+1 defense', '+1 de Defensa a una unidad')
            booster_effect = b_text
            
    # Some flavor texts matching official descriptions
    flavor_overrides = {
        'magic_arrow': 'El hechizo más elemental y extendido entre los magos de Erathia, canaliza energía pura sin refinar.',
        'lightning_bolt': 'Un arco de electricidad pura desciende del cielo con un estallido ensordecedor.',
        'haste': 'Las corrientes de aire aceleran el paso de las tropas en el fragor de la batalla.',
        'slow': 'La tierra se aferra a los pies de tus enemigos, ralentizando cada uno de sus movimientos.',
        'fireball': 'Una esfera de fuego abrasador explota al impactar, quemando múltiples regimientos.',
        'implosion': 'Las fuerzas gravitacionales se colapsan sobre sí mismas, aplastando al objetivo de forma fulminante.',
        'resurrection': 'El poder curativo de la tierra restaura la fuerza vital de los guerreros caídos.',
        'cure': 'Luz divina purificadora que cicatriza heridas y disuelve maldiciones oscuras.',
        'bless': 'Los dioses de la guerra bendicen las armas aliadas, garantizando golpes de máxima contundencia.',
        'curse': 'Nubes de infortunio envuelven al enemigo, haciendo que sus ataques sean débiles y erráticos.',
        'blind': 'Luz cegadora que sume a la unidad en una oscuridad absoluta, dejándola indefensa.',
        'shield': 'Un escudo translúcido de energía pura amortigua los impactos físicos enemigos.',
        'stone_skin': 'La piel del objetivo adquiere la dureza del granito, absorbiendo con facilidad los golpes.',
        'chain_lightning': 'Un relámpago devastador salta de unidad en unidad, calcinando todo a su paso.',
        'town_portal': 'Abre una fisura espacial que transporta instantáneamente al héroe de regreso al bastión aliado.'
    }
    flavor_text = flavor_overrides.get(slug, f'Un hechizo místico de la Escuela de {school} codificado en los sagrados pergaminos de Erathia.')
    
    # Construct complete spell item
    spell_item = {
        'id': slug,
        'name': title,
        'school': school,
        'type': spell_type,
        'effect': effect_text,
        'valueText': f'Resolución del hechizo según el nivel de Poder acumulado ({school}).',
        'isBoostable': is_boostable,
        'powerLevels': power_levels,
        'boosterEffect': booster_effect,
        'flavorText': flavor_text,
        'notes': notes if notes else 'Sigue las reglas generales de lanzamiento descritas en el manual oficial.',
        'colorTheme': school_themes.get(school)
    }
    
    spells_data_parsed.append(spell_item)

# Save JSON file
with open('/tmp/all_spells.json', 'w', encoding='utf-8') as out_f:
    json.dump(spells_data_parsed, out_f, indent=2, ensure_ascii=False)
    
print(f'Successfully compiled {len(spells_data_parsed)} spells!')
