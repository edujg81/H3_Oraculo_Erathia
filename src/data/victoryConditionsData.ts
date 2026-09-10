export interface VictoryCondition {
  mode: 'Enfrentamiento' | 'Campaña' | 'Alianza' | 'Cooperativo' | 'Torneo' | 'Aventura' | 'Escaramuza';
  condition: string;
  details: string;
  evidence: string;
}

export const VICTORY_CONDITIONS: VictoryCondition[] = [
  {
    mode: 'Enfrentamiento',
    condition: 'Eliminación por Asedio',
    details: 'Quedar sin ciudades o asentamientos durante 3 rondas completas implica eliminación.',
    evidence: 'HoMM-Rulebook_ESP.md, sección 4 (Condiciones de Victoria): "Eliminación por Asedio: Quedar sin ciudades o asentamientos durante 3 rondas completas implica eliminación."'
  },
  {
    mode: 'Enfrentamiento',
    condition: 'Derrota del Héroe Principal',
    details: 'Si el héroe principal es derrotado mientras defiende la última ciudad, resulta en eliminación inmediata.',
    evidence: 'HoMM-Rulebook_ESP.md, sección 4 (Condiciones de Victoria): "Derrota del héroe principal defendiendo la última ciudad resulta en eliminación inmediata."'
  },
  {
    mode: 'Enfrentamiento',
    condition: 'Victoria',
    details: 'Derrotar a todas las facciones enemigas',
    evidence: 'HoMM-Rulebook_ESP.md, sección 4 (Condiciones de Victoria): "Victoria: Derrotar a todas las facciones enemigas. Para hacerlo, captura todas las ciudades y asentamientos controlados por el enemigo."'
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
  },
  {
    mode: 'Torneo',
    condition: 'Puntuación por Objetivos',
    details: 'El ganador se determina al final del escenario mediante un sistema de puntos de victoria (PV) acumulados. El escenario de torneo indica una disposición inicial de losetas y reglas de puntuación específicas.',
    evidence: 'HoMM-Tournament-Book_ESP.md, sección 1.b (Puntuación): "El jugador con más puntos de victoria gana el escenario."'
  },
  {
    mode: 'Aventura',
    condition: 'Fase de Aventura + Combate Final',
    details: 'Combina una fase de aventura impulsada por cartas de evento y combate con un combate táctico final en el tablero hexagonal. Antes del combate final, los jugadores obtienen recursos, edifican ciudad y suben de nivel.',
    evidence: 'HoMM-Battlefield-Rulebook_ESP.md, sección 3 (Modo Aventura): "Fase de Aventura impulsada por Cartas de Aventura (Evento y Combate) para obtener recursos, edificar ciudad y subir de nivel antes del Combate Final táctico."'
  },
  {
    mode: 'Escaramuza',
    condition: 'Derrotar al Ejército Enemigo',
    details: 'Combate directo inmediato con mazos y ejércitos preconstruidos según duración (Corta - Nivel III, Media - Nivel V, Larga - Nivel VII). La victoria se logra derrotando todas las unidades enemigas.',
    evidence: 'HoMM-Battlefield-Rulebook_ESP.md, sección 5.a (Condición de victoria): "Modo Escaramuza (Skirmish Mode): Combate directo inmediato con mazos y ejércitos preconstruidos según duración (Corta - Nivel III, Media - Nivel V, Larga - Nivel VII)."'
  }
  ,
  {
    mode: 'Campaña',
    condition: 'Victoria por Objetivos de Campaña',
    details: 'Cada misión establece sus condiciones de victoria y/o derrota.',
    evidence: 'HoMM-Mission-Book_ESP.pdf, sección introductoria: "Campaña: La campaña se divide en escenarios interconectados con sus propias condiciones de victoria."'
  }
];