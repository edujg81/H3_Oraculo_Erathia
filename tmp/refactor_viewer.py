with open('src/components/SpellCardsViewer.tsx', 'r') as f:
    content = f.read()

idx = content.find('export default function SpellCardsViewer()')
if idx != -1:
    remaining = content[idx:]
    new_top = """import React, { useState, useMemo } from 'react';
import { 
  Sparkles, BookOpen, Flame, Droplets, Wind, Globe, Search, HelpCircle, 
  Plus, Minus, Wand2, Eye, Zap, Shield, Swords
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SPELLS_DATA, LocalSpellCard as SpellCard } from '../data/spellsData';

"""
    with open('src/components/SpellCardsViewer.tsx', 'w') as f_out:
        f_out.write(new_top + remaining)
    print("SpellCardsViewer.tsx successfully refactored!")
else:
    print("Function not found!")
