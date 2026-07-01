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
  category: 'general' | 'setup' | 'combat' | 'faq' | 'components' | 'modes' | 'map' | 'town' | 'magic';
}

