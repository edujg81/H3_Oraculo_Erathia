export interface VictoryCondition {
  mode: 'Enfrentamiento' | 'Campaña' | 'Alianza' | 'Cooperativo';
  condition: string;
  details: string;
  evidence: string;
}

export const VICTORY_CONDITIONS: VictoryCondition[] = [
  {
    mode: 'Enfrentamiento',
    condition: 'Eliminación por Asedio',
    details: 'Quedar sin ciudades o asentamientos durante 3 rondas completas implica eliminación.',
    evidence: 'HoMM-Rulebook_ESP.md, línea 568: "Eliminación por Asedio: Quedar sin ciudades o asentamientos durante 3 rondas completas implica eliminación."'
  },
  {
    mode: 'Enfrentamiento',
    condition: 'Derrota del Héroe Principal',
    details: 'Si el héroe principal es derrotado mientras defiende la última ciudad, resulta en eliminación inmediata.',
    evidence: 'HoMM-Rulebook_ESP.md, línea 569: "Derrota del héroe principal defendiendo la última ciudad resulta en eliminación inmediata."'
  },
  {
    mode: 'Alianza',
    condition: 'Victoria Compartida',
    details: 'Los jugadores aliados comparten en su totalidad las condiciones de victoria y derrota del escenario.',
    evidence: 'MANUAL.md, sección 12: "En el modo Alianza, los jugadores aliados comparten en su totalidad las condiciones de victoria y derrota."'
  },
  {
    mode: 'Cooperativo',
    condition: 'Victoria Compartida',
    details: 'Todos los jugadores colaboran para cumplir las condiciones de victoria del escenario.',
    evidence: 'MANUAL.md, sección 12: "En el modo cooperativo, todos los jugadores están aliados y cumplen las condiciones de victoria del escenario."'
  }
];