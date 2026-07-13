import urllib.request
import re
import sys

spells = [
    'air_shield', 'anti-magic', 'berserk', 'bless', 'blind', 'bloodlust',
    'chain_lightning', 'clone', 'counterstrike', 'cure', 'curse', 'dimension_door',
    'dispel', 'disrupting_ray', 'earthquake', 'fire_shield', 'fire_wall', 'fireball',
    'fly', 'force_field', 'forgetfulness', 'fortune', 'frenzy', 'frost_ring', 'haste',
    'implosion', 'inferno', 'land_mine', 'lightning_bolt', 'magic_arrow', 'magic_mirror',
    'mirth', 'misfortune', 'prayer', 'precision', 'protection_from_air', 'protection_from_earth',
    'protection_from_fire', 'protection_from_water', 'quicksand', 'remove_obstacle', 'resurrection',
    'sacrifice', 'shield', 'slayer', 'slow', 'sorrow', 'stone_skin', 'summon_air_elemental',
    'summon_earth_elemental', 'summon_fire_elemental', 'summon_water_elemental', 'teleport',
    'town_portal', 'view_air', 'view_earth', 'visions', 'water_walk', 'weakness'
]

# We will focus on the ones we are interested in, but we can fetch more if needed.
# Let's fetch some key ones first to see their exact text.
key_spells = [
    'magic_arrow', 'lightning_bolt', 'haste', 'precision', 'dimension_door',
    'cure', 'bless', 'dispel', 'curse', 'blind', 'fire_wall', 'shield',
    'stone_skin', 'slow', 'earthquake', 'resurrection', 'chain_lightning', 'implosion'
]

results = []

for s in key_spells:
    url = f"https://es.homm3bg.wiki/spells/{s}/"
    print(f"Fetching {s}...", flush=True)
    try:
        req = urllib.request.Request(
            url, 
            headers={'User-Agent': 'Mozilla/5.0'}
        )
        with urllib.request.urlopen(req, timeout=5) as response:
            html = response.read().decode('utf-8')
        
        m = re.search(r'<article.*?>.*?</article>', html, re.DOTALL)
        if m:
            art = m.group(0)
            # Remove tags
            text = re.sub(r'<.*?>', ' ', art)
            text = re.sub(r'\s+', ' ', text).strip()
            # clean some entities
            text = text.replace('&para;', '').replace('&lt;', '<').replace('&gt;', '>').replace('&#160;', ' ').replace('&#8617;', '')
            results.append(f"=== {s.upper()} ===\n{text}\n")
        else:
            results.append(f"=== {s.upper()} ===\nNo article tag found\n")
    except Exception as e:
        results.append(f"=== {s.upper()} ===\nError fetching: {e}\n")

with open('key_spells_data.txt', 'w', encoding='utf-8') as f:
    f.write('\n'.join(results))

print("Done! Saved to key_spells_data.txt")
