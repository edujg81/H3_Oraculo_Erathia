export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export interface SearchQuery {
  id: string;
  query: string;
  timestamp: string;
  resultCount: number;
}

export interface Player {
  id: string;
  name: string;
  color: string; // Tailwind class
  gold: number;
  materials: number;
  valuables: number;
  actionBuildUsed: boolean;
  actionRecruitUsed: boolean;
  actionMageGuildUsed: boolean;
  factionId?: string;
  goldGen?: number;
  materialsGen?: number;
  valuablesGen?: number;
  mainHeroMove?: number;
  secHeroMove?: number;
  hasSecHero?: boolean;
  hasMageGuild?: boolean;
  incomeCollectedRound?: number;
  moral?: 'positive' | 'neutral' | 'negative' | 'double_negative';
}

export interface TimerState {
  isPlaying: boolean;
  timeRemaining: number;
  totalTime: number; // in seconds
  turnLimit: number; // in seconds, 0 if custom/continuous
}

export interface RoundState {
  currentRound: number;
  roundType: 'Recursos' | 'Astrológica';
}

export interface RuleSection {
  id: string;
  title: string;
  content: string;
  category: 'general' | 'setup' | 'combat' | 'faq' | 'components' | 'modes' | 'map' | 'town' | 'magic' | 'heroes' | 'units' | 'skills' | 'spells' | 'cards' | 'locations';
}

export function getPlayerLimit(mode: 'enfrentamiento' | 'cooperativo' | 'campaña' | 'alianza' | 'torneo' | 'campodebatalla'): number {
  switch (mode) {
    case 'campaña':
      return 1;
    case 'torneo':
    case 'campodebatalla':
      return 2;
    case 'enfrentamiento':
    case 'cooperativo':
      return 3;
    case 'alianza':
      return 4;
    default:
      return 4;
  }
}


