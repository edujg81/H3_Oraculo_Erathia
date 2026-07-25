import React, { useState } from 'react';
import { Compass, Calendar, Trophy, BookOpen, AlertCircle, HelpCircle, Star, Search, ShieldCheck } from 'lucide-react';

interface Scenario {
  id: string;
  name: string;
  players: string;
  rounds: number;
  difficulty: 'Fácil' | 'Media' | 'Difícil';
  victoryCondition: string;
  setup: string;
  specialRules: string;
  expansion: string;
}

const SCENARIOS: Scenario[] = [
  // =========================================================================
  // JUEGO BASE (CORE BOX)
  // =========================================================================
  {
    id: 'tutorial',
    name: 'Escenario Introductorio Tutorial (Necrópolis vs Mazmorra)',
    players: '2 Jugadores (Enfrentamiento)',
    rounds: 6,
    difficulty: 'Fácil',
    victoryCondition: 'Derrotar al héroe enemigo en combate en la loseta central o capturar su ciudad de facción antes del fin de la ronda 6.',
    setup: '2 losetas iniciales de facción (I) y 1 loseta central de combate. Mazo de tesoro y ejército iniciales preconfigurados según guía.',
    specialRules: 'Diseñado específicamente para aprender las mecánicas de movimiento, combate y hechizos. No se utilizan eventos de contrarreloj complejos.',
    expansion: 'Juego Base (Core Box)'
  },
  {
    id: 'monks_retreat',
    name: 'El Retiro de los Monjes (Monks\' Retreat)',
    players: '2 Jugadores (Enfrentamiento)',
    rounds: 7,
    difficulty: 'Media',
    victoryCondition: 'Derrotar al héroe enemigo en combate. En la ronda 7, si no hay vencedor, se produce un combate final automático (el héroe con más EXP ataca).',
    setup: '2 losetas iniciales (I), 2 cercanas (IV-V), 2 lejanas (II-III). Inicio con 15 Oro, 4 Materiales, 2 Objetos de Valor.',
    specialRules: 'La Cofradía inicial permite buscar (3) una vez. Se prohíbe reclutar Héroe Secundario. Al defender tu ciudad no pagas coste de transporte de tropas.',
    expansion: 'Juego Base (Core Box)'
  },
  {
    id: 'brave_new_world',
    name: 'Un Mundo Feliz (Brave New World)',
    players: '2-3 Jugadores (Enfrentamiento)',
    rounds: 9,
    difficulty: 'Media',
    victoryCondition: 'Controlar 5 o más minas al final de una ronda para activar 1 ronda final y decisiva. Gana quien controle más minas al terminar.',
    setup: '2-3 losetas iniciales, 2-3 cercanas, 4-6 lejanas. Inicio con 15 Oro, 3 Materiales, 1 Objeto de Valor.',
    specialRules: 'Visitar un obelisco otorga una tirada de 2 dados de recurso (eligiendo 1). Evento contrarreloj en rondas 3, 6 y 9: refresca todos los molinos.',
    expansion: 'Juego Base (Core Box)'
  },
  {
    id: 'all_for_one',
    name: 'Todos para Uno (All for One)',
    players: '3 Jugadores (Enfrentamiento)',
    rounds: 11,
    difficulty: 'Difícil',
    victoryCondition: 'Depositar el Grial en tu ciudad principal o ser el último jugador superviviente que no haya sido eliminado.',
    setup: '3 iniciales, 6 cercanas (3 con obelisco), 1 central con Grial, 6 lejanas. Héroe empieza a Nivel 3.',
    specialRules: 'Capturar una ciudad enemiga transfiere sus ingresos e inflige +15 Oro, +2 Mat y +1 Obj al conquistador. Perder al Héroe Principal implica eliminación directa.',
    expansion: 'Juego Base (Core Box)'
  },
  {
    id: 'champions_gelea',
    name: 'Los Campeones de Gelea (Champions of Gelea)',
    players: '2-3 Jugadores (Cooperativo)',
    rounds: 11,
    difficulty: 'Media',
    victoryCondition: 'Colocar con éxito un cubo de facción de cada jugador aliado en la Utopía del Dragón central antes de que concluya la ronda 11.',
    setup: '2-3 iniciales, 4-6 cercanas (con obeliscos), 1 central con Utopía del Dragón. Inicio con 15 Oro, 3 Mat, 1 Obj.',
    specialRules: 'La Utopía del Dragón exige haber visitado al menos 2 obeliscos (en 2j) o 3 obeliscos (en 3j). Los Mercadillos permiten transferir recursos entre aliados.',
    expansion: 'Juego Base (Core Box)'
  },
  {
    id: 'cursed_mission',
    name: 'Misión Maldita (Cursed Mission)',
    players: '2-3 Jugadores (Cooperativo)',
    rounds: 12,
    difficulty: 'Media',
    victoryCondition: 'Eliminar por completo a todas las unidades neutrales del mazo personalizado y fortalecido de la Utopía del Dragón.',
    setup: 'Duración por dificultad: Fácil (8 rondas), Normal (10 rondas), Difícil (12 rondas), Imposible (14 rondas). Mazo personalizado en la Utopía.',
    specialRules: 'Al entrar en la Utopía, se roban 5 cartas de su mazo. Las tropas derrotadas se retiran; las supervivientes regresan y se barajan. Luchar contra Azur cuesta 1 PM por ronda.',
    expansion: 'Juego Base (Core Box)'
  },
  {
    id: 'homecoming',
    name: 'De Regreso al Hogar (Campaña Castillo - Misión 1)',
    players: '1-2 Jugadores (Campaña Solitario / Co-op)',
    rounds: 8,
    difficulty: 'Fácil',
    victoryCondition: 'Capturar la ciudad de Mazmorra invasora y liberar a Rion antes de la ronda 8.',
    setup: 'Catherine desembarca para combatir la invasión de Mazmorra en Erathia. Límite de nivel de héroe: Nivel 4.',
    specialRules: 'No se pueden construir edificios en tu ciudad, pero se permite reclutar y reforzar unidades de Bronce y Plata libremente. Evento Dos Caminos (Verde o Nevado).',
    expansion: 'Juego Base (Core Box)'
  },
  {
    id: 'guardian_angels',
    name: 'Ángeles Guardianes (Campaña Castillo - Misión 2)',
    players: '1-2 Jugadores (Campaña Solitario / Co-op)',
    rounds: 10,
    difficulty: 'Media',
    victoryCondition: 'Derrotar al Primer y al Segundo Señor de Mazmorra (IA) en combate antes de que termine la ronda 10.',
    setup: 'Selección de Héroe: Catherine o Rion. Límite de nivel: Nivel 5. Enemigos IA esperando en zonas estratégicas cercanas.',
    specialRules: 'Asentamiento Fair Feather: Al capturarlo tras vencer a los neutrales, construyes inmediatamente el edificio especial "Gloria de Erathia" gratis en tu ciudad.',
    expansion: 'Juego Base (Core Box)'
  },
  {
    id: 'liberation_steadwick',
    name: 'La Liberación de Steadwick (Campaña Castillo - Misión 3)',
    players: '1-2 Jugadores (Campaña Solitario / Co-op)',
    rounds: 13,
    difficulty: 'Difícil',
    victoryCondition: 'Asaltar y liberar la Utopía del Dragón fortificada de Steadwick en el centro del mapa antes del final de la ronda 13.',
    setup: 'Héroe empieza a Nivel 2. Producción inicial extra: +2 Materiales.',
    specialRules: 'Invasores en Marcha: Héroes atacantes de Mazmorra aparecen en las rondas 5 y 8 dirigiéndose hacia tu ciudad. Rescate del General Kendal otorga Héroe Secundario gratis.',
    expansion: 'Juego Base (Core Box)'
  },

  // =========================================================================
  // EXPANSIÓN MURALLAS (RAMPART)
  // =========================================================================
  {
    id: 'the_challenge',
    name: 'El Desafío (The Challenge)',
    players: '4 Jugadores (Alianza 2v2)',
    rounds: 12,
    difficulty: 'Difícil',
    victoryCondition: 'Derrotar a ambos héroes principales del equipo rival o controlar sus dos ciudades principales simultáneamente.',
    setup: '4 losetas iniciales en las esquinas, con rutas de exploración convergentes hacia un valle central rico en minas y tesoros.',
    specialRules: 'Los aliados comparten visión en el mapa y pueden intercambiar recursos e ingresos en los puestos comerciales sin coste de impuesto.',
    expansion: 'Expansión Murallas (Rampart)'
  },
  {
    id: 'dwarven_gold',
    name: 'Oro Enano (Dwarven Gold)',
    players: '2-3 Jugadores (Enfrentamiento)',
    rounds: 10,
    difficulty: 'Media',
    victoryCondition: 'Ser el primer jugador en acumular 35 monedas de Oro en su reserva al final de una ronda completa o controlar 5 minas simultáneamente.',
    setup: 'Abundancia de minas y galerías enanas en las losetas cercanas y lejanas que conectan las capitales.',
    specialRules: 'Las unidades enanas ganan +1 a la defensa táctica en combates en zonas de mina y las minas de oro producen +2 oro extra por turno.',
    expansion: 'Expansión Murallas (Rampart)'
  },
  {
    id: 'search_assassin',
    name: 'En Busca de un Asesino (Campaña Murallas - Misión 1)',
    players: '1 Jugador (Campaña Solitario)',
    rounds: 8,
    difficulty: 'Media',
    victoryCondition: 'Rastrear y eliminar a los exploradores de la Necrópolis y capturar su puesto de avanzada antes del fin de la ronda 8.',
    setup: 'Gem empieza la misión con el mazo de hechizos de tierra y un ejército rápido de Centauros y Elfos.',
    specialRules: 'Las tropas enemigas derrotadas no otorgan oro tras el combate, pero otorgan +1 carta de hechizo menor al héroe.',
    expansion: 'Expansión Murallas (Rampart)'
  },
  {
    id: 'definitive_peace',
    name: 'Paz Definitiva (Campaña Murallas - Misión 2)',
    players: '1 Jugador (Campaña Solitario)',
    rounds: 10,
    difficulty: 'Media',
    victoryCondition: 'Defender el Árbol Sagrado frente a 3 oleadas sucesivas de no muertos controladas por el algoritmo de la IA.',
    setup: 'El mapa central contiene la guarnición defensiva del Árbol Sagrado, que no puede caer bajo control enemigo en ningún momento.',
    specialRules: 'Cada ronda par, un ejército de la IA aparece en los bordes del mapa avanzando directamente hacia la posición del Árbol Sagrado.',
    expansion: 'Expansión Murallas (Rampart)'
  },
  {
    id: 'agents_vengeance',
    name: 'Agentes de la Venganza (Campaña Murallas - Misión 3)',
    players: '1 Jugador (Campaña Solitario)',
    rounds: 12,
    difficulty: 'Difícil',
    victoryCondition: 'Infiltrarse en la fortaleza nigromante de Deyja y derrotar al comandante enemigo en el asedio al castillo final.',
    setup: 'Mapa cubierto por terrenos pantanosos y cenicientos que penalizan el movimiento en -1 PM salvo para criaturas voladoras.',
    specialRules: 'Los hechizos de resurrección de la IA potencian temporalmente la moral y la salud de la guarnición enemiga final en el asalto.',
    expansion: 'Expansión Murallas (Rampart)'
  },

  // =========================================================================
  // EXPANSIÓN FORTALEZA (FORTRESS)
  // =========================================================================
  {
    id: 'arrogance',
    name: 'Arrogancia (Arrogance)',
    players: '4 Jugadores (Alianza 2v2)',
    rounds: 12,
    difficulty: 'Difícil',
    victoryCondition: 'Colocar 3 cubos de control de alianza en los obeliscos del pantano central o eliminar por completo a las fuerzas del equipo rival.',
    setup: 'Mapa pantanoso de gran extensión con abundancia de obstáculos de arenas movedizas y cabañas defensivas.',
    specialRules: 'Las unidades de Fortaleza ignoran las penalizaciones de terreno pantanoso y ganan +1 de iniciativa en casillas de agua o río.',
    expansion: 'Expansión Fortaleza (Fortress)'
  },
  {
    id: 'quest_grail',
    name: 'En Busca del Grial (Quest for the Grail)',
    players: '2-3 Jugadores (Enfrentamiento)',
    rounds: 14,
    difficulty: 'Difícil',
    victoryCondition: 'Visitar al menos 3 obeliscos para decodificar las pistas del mapa, excavar el Grial y depositarlo a salvo en tu ciudad de facción.',
    setup: '3 obeliscos distribuidos en losetas lejanas con guarniciones neutrales de nivel Plata y Oro protegiendo los accesos.',
    specialRules: 'El portador del Grial sufre -1 PM en su movimiento por el peso del artefacto; si cae derrotado en batalla, el Grial pasa inmediatamente al vencedor.',
    expansion: 'Expansión Fortaleza (Fortress)'
  },
  {
    id: 'harvest_towns',
    name: 'Cosecha de Ciudades (Campaña Fortaleza - Misión 1)',
    players: '1 Jugador (Campaña Solitario)',
    rounds: 9,
    difficulty: 'Media',
    victoryCondition: 'Capturar al menos 3 asentamientos neutrales fronterizos para reclutar milicias antes de la llegada del ejército invasor de la IA.',
    setup: 'Adrienne comienza su travesía con unidades de nivel Bronce y recursos económicos limitados en las marismas de Tatalia.',
    specialRules: 'Reclutar tropas de nivel Bronce en asentamientos y puestos de avanzada capturados cuesta 1 moneda de Oro menos de lo normal.',
    expansion: 'Expansión Fortaleza (Fortress)'
  },
  {
    id: 'march_undead',
    name: 'La Marcha de los No Muertos (Campaña Fortaleza - Misión 2)',
    players: '1 Jugador (Campaña Solitario)',
    rounds: 11,
    difficulty: 'Difícil',
    victoryCondition: 'Resistir el asedio prolongado y destruir las fuentes mágicas de corrupción en los monolitos negros del norte del mapa.',
    setup: 'Presencia de monolitos que generan refuerzos no muertos hostiles cada 2 rondas si no son purificados por un héroe en la casilla.',
    specialRules: 'Las unidades enemigas no muertas son totalmente inmunes a los efectos de veneno y penalizaciones de moral negativa.',
    expansion: 'Expansión Fortaleza (Fortress)'
  },
  {
    id: 'fire_tatalia',
    name: 'El Incendio de Tatalia (Campaña Fortaleza - Misión 3)',
    players: '1 Jugador (Campaña Solitario)',
    rounds: 12,
    difficulty: 'Difícil',
    victoryCondition: 'Expulsar al general invasor en una batalla campal decisiva en la fortaleza central del pantano de Tatalia.',
    setup: 'El centro del mapa es una ciudadela rodeada por fosos de fuego, torres de vigilancia y criaturas de fuego de alto rango.',
    specialRules: 'El uso de hechizos de escuela de Fuego en combate causa daño directo adicional y destruye obstáculos en el tablero táctico.',
    expansion: 'Expansión Fortaleza (Fortress)'
  },

  // =========================================================================
  // EXPANSIÓN INFERNO
  // =========================================================================
  {
    id: 'two_lands',
    name: 'El Cuento de las Dos Tierras (A Tale of Two Lands)',
    players: '4 Jugadores (Alianza 2v2)',
    rounds: 12,
    difficulty: 'Difícil',
    victoryCondition: 'Conquistar el portal interdimensional central o destruir las dos capitales fortificadas del equipo enemigo.',
    setup: 'Dos continentes divididos por terreno volcánico infranqueable, conectados únicamente por puertas mágicas y monolitos de teletransporte.',
    specialRules: 'Las unidades demoníacas son inmunes al daño ambiental de los terrenos de lava y ganan +1 al movimiento en zonas de ceniza.',
    expansion: 'Expansión Inferno'
  },
  {
    id: 'manifest_destiny',
    name: 'Destino Manifiesto (Manifest Destiny)',
    players: '3 Jugadores (Enfrentamiento)',
    rounds: 10,
    difficulty: 'Media',
    victoryCondition: 'Controlar al menos 4 minas de azufre y oro al final de la ronda 10 o eliminar militarmente a todos los oponentes de la mesa.',
    setup: 'Mapa triangular con un valle central rico en minas disputadas por guarniciones neutrales potentes.',
    specialRules: 'El azufre puede intercambiarse libremente por oro en una proporción ventajosa de 1:3 en cualquier fase de recursos o comercio.',
    expansion: 'Expansión Inferno'
  },
  {
    id: 'carpe_diem',
    name: 'Carpe Diem',
    players: '2 Jugadores (Enfrentamiento)',
    rounds: 9,
    difficulty: 'Fácil',
    victoryCondition: 'Acumular la mayor cantidad de Puntos de Victoria (PV) mediante captura de tesoros, obeliscos y combates victoriosos al fin de la ronda 9.',
    setup: 'Mapa compacto con numerosos combates neutrales de nivel Bronce y Plata y abundante generosidad de cofres de experiencia.',
    specialRules: 'Cada combate ganado otorga 2 PV adicionales en la puntuación final y cada artefacto mayor equipado otorga 3 PV.',
    expansion: 'Expansión Inferno'
  },

  // =========================================================================
  // EXPANSIÓN BASTIÓN (STRONGHOLD)
  // =========================================================================
  {
    id: 'war_mighty',
    name: 'Guerra de los Poderosos (War of the Mighty)',
    players: '4 Jugadores (Alianza 2v2)',
    rounds: 13,
    difficulty: 'Difícil',
    victoryCondition: 'Destruir la ciudad principal de uno de los jugadores rivales mediante asedio táctico coordinado.',
    setup: 'Mapa extenso con terrenos pedregosos, cañones abruptos y numerosos campamentos de mercenarios bárbaros neutrales.',
    specialRules: 'El coste de reclutar Behemoths y Cíclopes se reduce en 2 monedas de Oro para cualquier héroe que pertenezca a la alianza de Bastión.',
    expansion: 'Expansión Bastión (Stronghold)'
  },
  {
    id: 'dungeon_guardian',
    name: 'Guardián de la Mazmorra (Dungeon Guardian)',
    players: '2 Jugadores (Enfrentamiento)',
    rounds: 12,
    difficulty: 'Media',
    victoryCondition: 'Explorar el nivel subterráneo, derrotar al Guardián de la Mazmorra (dragón neutral de nivel Azur) y reclamar su tesoro ancestral.',
    setup: 'Mapa de doble capa (superficie arbolada y nivel subterráneo oscuro conectados por puertas subterráneas estratégicas).',
    specialRules: 'Derrotar al Guardián de la Mazmorra otorga inmediatamente un artefacto Reliquia al vencedor y 20 monedas de Oro.',
    expansion: 'Expansión Bastión (Stronghold)'
  },
  {
    id: 'dwarven_tunnels',
    name: 'Túneles de los Enanos (Dwarven Tunnels)',
    players: '2-3 Jugadores (Cooperativo)',
    rounds: 11,
    difficulty: 'Media',
    victoryCondition: 'Despejar todas las obstrucciones mineras y monstruos de los túneles subterráneos para rescatar a las delegaciones atrapadas.',
    setup: 'Mapa laberíntico subterráneo con encuentros obligatorios en cada encrucijada y puntos de ruta bloqueados por derrumbes.',
    specialRules: 'Al ganar un combate en los túneles, los aliados reciben recursos económicos compartidos que pueden distribuirse libremente.',
    expansion: 'Expansión Bastión (Stronghold)'
  },
  {
    id: 'barbarian_brotherhood',
    name: 'Hermandad Bárbara (Campaña Bastión)',
    players: '1 Jugador (Campaña Solitario)',
    rounds: 12,
    difficulty: 'Difícil',
    victoryCondition: 'Guiar a Crag Hack y Yog a través de las estepas para destrozar la alianza nigromante de Deyja y purgar sus bastiones.',
    setup: 'Campaña narrativa de 3 escenarios con transferencia progresiva de artefactos de fuerza y resistencia física.',
    specialRules: 'Crag Hack obtiene una bonificación permanente de +1 a su Fuerza de Ataque física básica tras cada misión superada de la campaña.',
    expansion: 'Expansión Bastión (Stronghold)'
  },

  // =========================================================================
  // EXPANSIÓN CONFLUJO (CONFLUX)
  // =========================================================================
  {
    id: 'bad_day',
    name: 'Un Mal Día (A Bad Day)',
    players: '4 Jugadores (Alianza 2v2)',
    rounds: 11,
    difficulty: 'Difícil',
    victoryCondition: 'Activar los 4 altares elementales de las esquinas del mapa y canalizar su energía simultáneamente en una misma ronda.',
    setup: 'Altares mágicos en los cuatro extremos protegidos por elementales de tierra, aire, agua y fuego de nivel Plata.',
    specialRules: 'Los hechizos elementales de la misma escuela que un altar activado se lanzan con su coste de Maná reducido a la mitad.',
    expansion: 'Expansión Conflujo (Conflux)'
  },
  {
    id: 'deluge',
    name: 'Diluvio (Deluge)',
    players: '3 Jugadores (Enfrentamiento)',
    rounds: 10,
    difficulty: 'Media',
    victoryCondition: 'Sobrevivir a la inundación progresiva del tablero controlando las tierras altas o derrotando en combate a los rivales.',
    setup: 'Las losetas exteriores de llanura se transforman progresivamente en casillas de agua marina cada dos rondas astrológicas.',
    specialRules: 'A partir de la ronda 5, el movimiento por casillas inundadas sin utilizar un navío causa 1 de daño directo a las tropas terrestres.',
    expansion: 'Expansión Conflujo (Conflux)'
  },
  {
    id: 'too_many_monsters',
    name: 'Demasiados Monstruos (Too Many Monsters)',
    players: '2-3 Jugadores (Cooperativo)',
    rounds: 12,
    difficulty: 'Difícil',
    victoryCondition: 'Contener y destruir oleadas sucesivas de monstruos neutrales que surgen de las fallas elementales antes de que alcancen las ciudades.',
    setup: 'Fallas elementales ubicadas en el perímetro del mapa generan fichas de invasión al final de cada turno de ronda.',
    specialRules: 'Los héroes pueden sellar permanentemente una falla gastando 3 puntos de Maná si terminan su fase de movimiento sobre ella.',
    expansion: 'Expansión Conflujo (Conflux)'
  },
  {
    id: 'masters_elements',
    name: 'Maestros de los Elementos (Campaña Conflujo)',
    players: '1 Jugador (Campaña Solitario)',
    rounds: 12,
    difficulty: 'Difícil',
    victoryCondition: 'Tarnum debe viajar a los 4 Planos Elementales (Aire, Agua, Tierra, Fuego) para dominar las esferas mágicas y salvar el reino.',
    setup: 'Campaña dividida en 4 capítulos interconectados, cada uno con reglas ambientales e inmunidades elementales específicas.',
    specialRules: 'Tarnum adapta y cambia su especialidad mágica principal de forma automática al ingresar a cada nuevo plano elemental del mapa.',
    expansion: 'Expansión Conflujo (Conflux)'
  },

  // =========================================================================
  // EXPANSIÓN CALA (COVE)
  // =========================================================================
  {
    id: 'strait_storms',
    name: 'Estrecho de las Tormentas (Strait of Storms)',
    players: '4 Jugadores (Alianza 2v2)',
    rounds: 12,
    difficulty: 'Difícil',
    victoryCondition: 'Controlar el estrecho marítimo central manteniendo al menos 2 barcos o astilleros artillados durante 2 rondas consecutivas.',
    setup: 'Mapa marino con islas archipiélago, rutas navales mercantes y peligrosos torbellinos oceánicos permanentes.',
    specialRules: 'Los navíos artillados pueden proporcionar fuego de cobertura (+1 de ataque a distancia) a combates en casillas costeras adyacentes.',
    expansion: 'Expansión Cala (Cove)'
  },
  {
    id: 'sword_fire',
    name: 'Con Espada y Fuego (With Sword and Fire)',
    players: '2 Jugadores (Enfrentamiento)',
    rounds: 10,
    difficulty: 'Media',
    victoryCondition: 'Capturar el astillero principal del adversario e incendiar su flota de guerra en el puerto enemigo.',
    setup: 'Dos islas rivales separadas por un brazo de mar con abundantes pecios, naufragios y astilleros costeros disputados.',
    specialRules: 'Las unidades de facción de la Cala ganan +1 de ataque cuando combaten en losetas de costa o a bordo de navíos en el mar.',
    expansion: 'Expansión Cala (Cove)'
  },
  {
    id: 'burning_archipelago',
    name: 'Archipiélago Ardiente (Burning Archipelago)',
    players: '3 Jugadores (Enfrentamiento)',
    rounds: 11,
    difficulty: 'Media',
    victoryCondition: 'Reclamar los 3 faros del archipiélago y mantener su control frente a los ataques piratas y los rivales mercenarios.',
    setup: 'Faros ubicados en islotes remotos custodiados por Serpientes Marinas, Leviatanes y piratas hostiles.',
    specialRules: 'Cada faro controlado otorga +1 PM a la navegación marítima y otorga visión sobre 2 casillas de niebla de guerra adyacentes al mar.',
    expansion: 'Expansión Cala (Cove)'
  },
  {
    id: 'terror_seas',
    name: 'Terror de los Mares (Campaña Cala)',
    players: '1 Jugador (Campaña Solitario)',
    rounds: 12,
    difficulty: 'Difícil',
    victoryCondition: 'Jeremy y Bidley lideran una rebelión pirata para derrotar al almirante corrupto Dargem en un gran asedio naval final.',
    setup: 'Campaña narrativa costera donde el uso del cañón y la artillería de cubierta son cruciales en los combates portuarios.',
    specialRules: 'El cañón de cubierta se actualiza gratuitamente entre misiones si logras victorias navales sin perder ninguna unidad marítima.',
    expansion: 'Expansión Cala (Cove)'
  },

  // =========================================================================
  // METAS AMPLIADAS (STRETCH GOALS 1 & 2)
  // =========================================================================
  {
    id: 'dragon_blood',
    name: 'La Sangre del Dragón (Campaña Mazmorra - Mutare)',
    players: '1 Jugador (Campaña Solitario)',
    rounds: 11,
    difficulty: 'Difícil',
    victoryCondition: 'Mutare debe beber el vial sagrado con la sangre del padre dragón en el nido más profundo para transformarse y reclamar el trono.',
    setup: '3 Misiones subterráneas progresivas en Nighon con tropas de Minotauros, Medusas y Dragones Negros.',
    specialRules: 'En la misión final, tras consumir el vial, Mutare adquiere estadísticas de Dragón Legendario en combate personal.',
    expansion: 'Metas Ampliadas (Stretch Goals)'
  },
  {
    id: 'rise_necromancer',
    name: 'El Ascenso del Nigromante (Campaña Necrópolis - Sandro)',
    players: '1 Jugador (Campaña Solitario)',
    rounds: 11,
    difficulty: 'Difícil',
    victoryCondition: 'Sandro manipula a los lores fronterizos y busca las piezas de la Armadura de los Malditos para subyugar las tierras de Deyja.',
    setup: '3 Misiones (Objetivo, Maestro, Duque Alarice) enfrentándose a fuerzas aliadas de AvLee, Bracada y caballeros fronterizos.',
    specialRules: 'Sandro puede convertir hasta 2 unidades derrotadas de nivel Bronce en regimientos de esqueletos tras ganar cualquier combate.',
    expansion: 'Metas Ampliadas (Stretch Goals)'
  },
  {
    id: 'dragon_slayer',
    name: 'Matadragones (Campaña Torre - Dracon)',
    players: '1 Jugador (Campaña Solitario)',
    rounds: 13,
    difficulty: 'Difícil',
    victoryCondition: 'El hechicero Dracon debe cazar y aniquilar al legendario Dragón Azur y a los Dragones Hada en las cumbres heladas más elevadas.',
    setup: '4 Misiones intensas frente a dragones elementales con resistencia mágica extrema y daño devastador.',
    specialRules: 'Dracon comienza la campaña con la capacidad especial de confeccionar Gólems de Enfoque que absorben daño mágico en combate.',
    expansion: 'Metas Ampliadas (Stretch Goals)'
  },
  {
    id: 'sg2_clash_pack',
    name: 'Escenarios SG2 (Ascensión / Islas Esmeralda / Reino del Caos)',
    players: '2-4 Jugadores (Enfrentamiento)',
    rounds: 11,
    difficulty: 'Media',
    victoryCondition: 'Superar objetivos competitivos en mapas dinámicos que introducen la Caja de Pandora, Minas de Hechizo y Campos de Fuerza.',
    setup: 'Mapas altamente variables configurados con componentes y fichas exclusivas de la caja de Stretch Goals 2.',
    specialRules: 'La Caja de Pandora puede otorgar un ejército instantáneo de alto nivel o desatar una maldición devastadora al abrirla.',
    expansion: 'Metas Ampliadas (Stretch Goals)'
  },
  {
    id: 'sorrow_creators',
    name: 'Creadores de Pesares (Campaña Inferno - SG2)',
    players: '1 Jugador (Campaña Solitario)',
    rounds: 12,
    difficulty: 'Difícil',
    victoryCondition: 'Xex, Xyron, Fiona y Xeron lideran una cruzada demoníaca desde el inframundo contra las fuerzas combinadas de AvLee, Bracada y Conflujo.',
    setup: 'Campaña asimétrica de 4 héroes demoníacos colaborando o turnándose en la conquista progresiva del mapa de superficie.',
    specialRules: 'Las puertas del infierno permiten el traslado instantáneo de tropas entre cualquier par de ciudades demoníacas bajo tu control.',
    expansion: 'Metas Ampliadas (Stretch Goals)'
  },

  // =========================================================================
  // BATALLAS NAVALES (NAVAL BATTLES)
  // =========================================================================
  {
    id: 'barbarian_invasion',
    name: 'Invasión Bárbara (Barbarian Invasion)',
    players: '2-3 Jugadores (Cooperativo)',
    rounds: 10,
    difficulty: 'Media',
    victoryCondition: 'Las armadas aliadas deben defender la costa de Erathia frente a una flota bárbara de la IA que desembarca oleadas continuas por mar.',
    setup: 'Costa dividida por playas de desembarco y acantilados rocosos, con rutas navales de aproximación enemiga desde alta mar.',
    specialRules: 'Si una flota enemiga alcanza una playa sin ser destruida en combate naval, despliega su ejército en tierra con un ataque extra.',
    expansion: 'Batallas Navales (Naval Battles)'
  },
  {
    id: 'tentacle_swamp',
    name: 'El Pantano de Tentáculos de Gorlam',
    players: '2-3 Jugadores (Enfrentamiento)',
    rounds: 11,
    difficulty: 'Difícil',
    victoryCondition: 'Cruzar el pantano oceánico navegando entre tentáculos gigantes y pecios para recuperar el tesoro hundido del galeón real.',
    setup: 'Losetas de agua cubiertas de tentáculos marinos monstruosos que inmovilizan o dañan a los navíos que transitan las zonas.',
    specialRules: 'El combate marítimo utiliza losetas de neopreno específicas con reglas de abordaje, viento y disparos directos de artillería naval.',
    expansion: 'Batallas Navales (Naval Battles)'
  },
  {
    id: 'fire_island',
    name: 'Isla de Fuego (Fire Island)',
    players: '1 Jugador (Solitario)',
    rounds: 10,
    difficulty: 'Difícil',
    victoryCondition: 'Explorar una isla volcánica solitaria, resolver las interacciones del Libro de Misiones (§1 al §29) y escapar al navío antes de la erupción.',
    setup: 'Isla volcánica central rodeada por océano. El volcán avanza una etapa en el marcador de amenaza al concluir cada ronda.',
    specialRules: 'En la ronda 10, el volcán entra en erupción cataclísmica destruyendo el centro de la isla; si el héroe no ha alcanzado su navío, pierde.',
    expansion: 'Batallas Navales (Naval Battles)'
  },

  // =========================================================================
  // EXPANSIÓN TORNEO (TOURNAMENT 1V1)
  // =========================================================================
  {
    id: 'last_chance',
    name: 'Última Oportunidad (Last Chance)',
    players: '2 Jugadores (Torneo 1v1)',
    rounds: 8,
    difficulty: 'Media',
    victoryCondition: 'Obtener más Puntos de Victoria (PV) que el rival al concluir la ronda 8 mediante captura de minas, obeliscos y victorias tácticas.',
    setup: 'Mapa simétrico de torneo de 13 baldosas perfectamente equilibradas en distribución de recursos, tesoros y distancias de viaje.',
    specialRules: 'Mazo de tesoros y artefactos filtrado según reglas oficiales de torneo para eliminar azar desequilibrante o ventajas sorpresivas.',
    expansion: 'Expansión Torneo (Tournament)'
  },
  {
    id: 'great_race',
    name: 'La Gran Carrera (The Great Race)',
    players: '2 Jugadores (Torneo 1v1)',
    rounds: 10,
    difficulty: 'Media',
    victoryCondition: 'Alcanzar y capturar el monolito central de victoria antes que el oponente, superando guarniciones de dificultad decreciente.',
    setup: 'Dos pasillos paralelos simétricos con obstáculos que convergen en una única sala central fortificada con el monolito.',
    specialRules: 'Los héroes reciben una bonificación de +1 PM adicional de velocidad en todas las rondas para fomentar el ritmo competitivo y la audacia.',
    expansion: 'Expansión Torneo (Tournament)'
  },
  {
    id: 'unexpected_heritage',
    name: 'Herencia Inesperada (Unexpected Heritage)',
    players: '2 Jugadores (Torneo 1v1)',
    rounds: 9,
    difficulty: 'Difícil',
    victoryCondition: 'Reclamar la tesorería neutral central y retener su control indiscutido durante una ronda completa contra los asaltos del rival.',
    setup: 'Tesorería en una colina central elevada custodiada inicialmente por Gárgolas de Piedra y Gólems de Hierro reforzados.',
    specialRules: 'El jugador que defiende la tesorería en su turno de control obtiene +1 de defensa en todas sus unidades de guarnición.',
    expansion: 'Expansión Torneo (Tournament)'
  }
];

export default function ScenariosDatabase() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('todos');
  const [selectedMode, setSelectedMode] = useState<string>('todos');
  const [activeSubTab, setActiveSubTab] = useState<'scenarios' | 'treasure_die'>('scenarios');

  const filteredScenarios = SCENARIOS.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          s.victoryCondition.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          s.specialRules.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          s.expansion.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDiff = selectedDifficulty === 'todos' || s.difficulty === selectedDifficulty;
    
    let matchesMode = true;
    if (selectedMode !== 'todos') {
      const modeTerm = selectedMode.split('/')[0].trim().toLowerCase();
      matchesMode = s.players.toLowerCase().includes(modeTerm) ||
                    s.name.toLowerCase().includes(modeTerm) ||
                    s.specialRules.toLowerCase().includes(modeTerm);
    }

    return matchesSearch && matchesDiff && matchesMode;
  });

  return (
    <div className="bg-slate-900/40 border border-slate-800/80 rounded-3xl p-6 space-y-6 shadow-2xl backdrop-blur-md">
      {/* Tab Header Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-800/80 pb-4 gap-4">
        <div>
          <h2 className="text-xl font-serif text-amber-400 flex items-center gap-2">
            <Compass className="w-5 h-5 text-amber-500" />
            Escenarios Rápidos & Reglas del Dado de Tesoro
          </h2>
          <p className="text-xs text-slate-400">
            Consulta esquemas de juego oficiales y resuelve tus dudas de tesoros, cofres y dados.
          </p>
        </div>

        {/* Local sub-tabs to switch views */}
        <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-850 self-start md:self-center">
          <button
            onClick={() => setActiveSubTab('scenarios')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition cursor-pointer ${
              activeSubTab === 'scenarios'
                ? 'bg-amber-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            🗺️ Base de Escenarios
          </button>
          <button
            onClick={() => setActiveSubTab('treasure_die')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition cursor-pointer ${
              activeSubTab === 'treasure_die'
                ? 'bg-amber-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            🔮 Reglas del Dado de Tesoro
          </button>
        </div>
      </div>

      {activeSubTab === 'scenarios' ? (
        <div className="space-y-6">
          {/* Filters Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 bg-slate-950/40 p-3 rounded-2xl border border-slate-850/60">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
              <input
                type="text"
                placeholder="Buscar escenario por meta o caja..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full bg-slate-950 pl-9 pr-3 py-2 rounded-lg border border-slate-850 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-600/50"
              />
            </div>

            {/* Mode Filter */}
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase font-mono text-slate-500 tracking-wider">Modo:</span>
              <div className="flex bg-slate-950 rounded-lg p-0.5 border border-slate-850 flex-1 overflow-x-auto">
                {['todos', 'Enfrentamiento', 'Cooperativo', 'Alianza', 'Campaña', 'Torneo'].map(m => (
                  <button
                    key={m}
                    onClick={() => setSelectedMode(m)}
                    className={`px-2 text-[10px] py-1.5 rounded-md font-mono font-bold transition cursor-pointer whitespace-nowrap ${
                      selectedMode === m ? 'bg-amber-600/20 text-amber-300' : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    {m === 'todos' ? 'TODOS' : m.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Difficulty Filter */}
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase font-mono text-slate-500 tracking-wider">Dificultad:</span>
              <div className="flex bg-slate-950 rounded-lg p-0.5 border border-slate-850 flex-1">
                {['todos', 'Fácil', 'Media', 'Difícil'].map(d => (
                  <button
                    key={d}
                    onClick={() => setSelectedDifficulty(d)}
                    className={`flex-1 text-[10px] py-1.5 rounded-md font-bold transition cursor-pointer ${
                      selectedDifficulty === d ? 'bg-amber-600/20 text-amber-300' : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    {d === 'todos' ? 'TODOS' : d.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Scenario Grid */}
          {filteredScenarios.length === 0 ? (
            <div className="text-center py-12 px-4 border-2 border-dashed border-slate-850 rounded-2xl">
              <span className="text-3xl">🧭</span>
              <p className="text-slate-400 font-mono text-xs mt-3">No se encontraron escenarios que coincidan con los filtros aplicados.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredScenarios.map(scenario => (
                <div
                  key={scenario.id}
                  className="bg-slate-950/40 p-5 rounded-2xl border border-slate-850/60 hover:border-amber-900/30 transition-all flex flex-col justify-between space-y-4 shadow-sm"
                >
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-900 pb-2">
                      <span className={`text-[10px] font-mono uppercase font-bold tracking-widest px-2 py-0.5 rounded border ${
                        scenario.difficulty === 'Fácil' ? 'bg-emerald-950/40 border-emerald-900/30 text-emerald-400'
                        : scenario.difficulty === 'Media' ? 'bg-amber-950/40 border-amber-900/30 text-amber-500'
                        : 'bg-red-950/40 border-red-900/30 text-red-400'
                      }`}>
                        Dificultad: {scenario.difficulty}
                      </span>

                      <span className="text-[10px] font-mono uppercase font-bold tracking-widest px-2 py-0.5 rounded border bg-slate-900 border-slate-850 text-slate-300">
                        📦 {scenario.expansion}
                      </span>

                      <div className="flex items-center gap-1.5 text-[10px] text-slate-500 font-mono">
                        <Calendar className="w-3 h-3 text-amber-500/80" />
                        <span>{scenario.rounds} Rondas</span>
                      </div>
                    </div>

                    <h3 className="font-serif text-slate-100 font-bold text-sm tracking-wide mt-1.5">
                      {scenario.name}
                    </h3>
                    <p className="text-[10px] text-slate-400 font-mono">
                      Capacidad: 🛡️ {scenario.players}
                    </p>

                    <div className="bg-slate-900/40 p-2.5 rounded-lg border border-slate-850 text-xs text-slate-300">
                      <span className="text-[10px] uppercase font-mono tracking-wider text-amber-500 font-bold block mb-1">
                        🏆 Condición de Victoria:
                      </span>
                      <p className="leading-relaxed text-[12px]">{scenario.victoryCondition}</p>
                    </div>
                  </div>

                  <div className="space-y-1 text-[12px] text-slate-400 pt-2 border-t border-slate-900/80">
                    <p><strong>🗺️ Distribución:</strong> {scenario.setup}</p>
                    <p className="mt-1 text-slate-500"><strong>⚠️ Reglas Especiales:</strong> {scenario.specialRules}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        /* Treasure Die & Chest Rules Guide */
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            
            {/* Left Rules Column (col-span-7) */}
            <div className="md:col-span-7 space-y-4">
              <h3 className="text-sm font-serif font-bold text-amber-300 border-b border-slate-800 pb-2">
                📘 Funcionamiento Oficial del Dado de Tesoro (Treasure Die)
              </h3>
              
              <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
                <p>
                  El <strong>Dado de Tesoro (d6)</strong> es un elemento clave de aleatoriedad táctica y progresión en *Heroes III*. Se lanza principalmente al interactuar con <strong>Cofres de Tesoro (Treasure Chests)</strong> abandonados, al saquear asentamientos neutrales de alto rango, o al derrotar criaturas de nivel de dificultad Oro/Azul en el mapa.
                </p>

                <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-850 space-y-2">
                  <h4 className="text-sm font-mono font-bold text-slate-200 uppercase tracking-wide flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 text-amber-500" />
                    Elección Fundamental de un Cofre:
                  </h4>
                  <p className="text-[12px]">
                    Cuando un Héroe detiene su movimiento sobre una loseta que contiene el símbolo de un cofre, el jugador activo debe realizar una elección inmediata e irreversible:
                  </p>
                  <ul className="list-disc pl-5 text-[12px] space-y-1 text-slate-400 mt-1">
                    <li>
                      <strong className="text-emerald-400">Garantizar Experiencia:</strong> Gana automáticamente <strong>1 punto de Experiencia (XP)</strong> y descarta el cofre.
                    </li>
                    <li>
                      <strong className="text-amber-400">Arriesgar con el Dado:</strong> Lanza el <strong>Dado de Tesoro</strong> para determinar una recompensa (como ganar medio nivel de EXP, buscar cartas de Artefacto o lanzar dados de recursos).
                    </li>
                  </ul>
                </div>

                <div className="bg-amber-950/10 border border-amber-900/30 p-3 rounded-xl flex gap-3 text-amber-200">
                  <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <p className="text-[12px]">
                    <strong>Consejo Táctico de Sandro:</strong> ¡La experiencia extra y la búsqueda selectiva de Artefactos te otorgarán una ventaja colosal! No subestimes una tirada que te permita elegir de entre dos dados de recursos para levantar tus estructuras clave.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Rewards Table Column (col-span-5) */}
            <div className="md:col-span-5 bg-slate-950/60 p-4 rounded-xl border border-slate-850 space-y-4">
              <h3 className="text-sm font-mono font-bold text-slate-400 uppercase tracking-widest border-b border-slate-900 pb-2">
                🎲 Recompensas de las 6 Caras
              </h3>

              <div className="space-y-2 font-mono">
                {/* Face 1 */}
                <div className="p-2 bg-slate-900/60 rounded-lg border border-amber-900/10 flex items-center justify-between text-xs">
                  <span className="font-bold text-amber-500 flex items-center gap-2">
                    <span className="w-5 h-5 rounded bg-slate-950 border border-slate-850 flex items-center justify-center text-[10px]">1</span>
                    ✨ +0.5 Nivel EXP
                  </span>
                  <span className="text-slate-300 text-[10px] text-right">Héroe principal gana medio nivel</span>
                </div>

                {/* Face 2 */}
                <div className="p-2 bg-slate-900/60 rounded-lg border border-amber-900/10 flex items-center justify-between text-xs">
                  <span className="font-bold text-amber-500 flex items-center gap-2">
                    <span className="w-5 h-5 rounded bg-slate-950 border border-slate-850 flex items-center justify-center text-[10px]">2</span>
                    ✨ +0.5 Nivel EXP
                  </span>
                  <span className="text-slate-300 text-[10px] text-right">Héroe principal gana medio nivel</span>
                </div>

                {/* Face 3 */}
                <div className="p-2 bg-slate-900/60 rounded-lg border border-purple-900/20 flex items-center justify-between text-xs">
                  <span className="font-bold text-purple-400 flex items-center gap-2">
                    <span className="w-5 h-5 rounded bg-slate-950 border border-slate-850 flex items-center justify-center text-[10px]">3</span>
                    🔍 Buscar(2) Art.
                  </span>
                  <span className="text-slate-300 text-[10px] text-right">Buscar en mazo de Artefactos</span>
                </div>

                {/* Face 4 */}
                <div className="p-2 bg-slate-900/60 rounded-lg border border-purple-900/20 flex items-center justify-between text-xs">
                  <span className="font-bold text-purple-400 flex items-center gap-2">
                    <span className="w-5 h-5 rounded bg-slate-950 border border-slate-850 flex items-center justify-center text-[10px]">4</span>
                    🔍 Buscar(2) Art.
                  </span>
                  <span className="text-slate-300 text-[10px] text-right">Buscar en mazo de Artefactos</span>
                </div>

                {/* Face 5 */}
                <div className="p-2 bg-slate-900/60 rounded-lg border border-blue-900/20 flex items-center justify-between text-xs">
                  <span className="font-bold text-blue-400 flex items-center gap-2">
                    <span className="w-5 h-5 rounded bg-slate-950 border border-slate-850 flex items-center justify-center text-[10px]">5</span>
                    🎲 1 Dado Recursos
                  </span>
                  <span className="text-slate-300 text-[10px] text-right">Lanzar 1 dado de recursos</span>
                </div>

                {/* Face 6 */}
                <div className="p-2 bg-slate-900/60 rounded-lg border border-emerald-900/20 flex items-center justify-between text-xs">
                  <span className="font-bold text-emerald-400 flex items-center gap-2">
                    <span className="w-5 h-5 rounded bg-slate-950 border border-slate-850 flex items-center justify-center text-[10px]">6</span>
                    🎲 2 Dados Rec.
                  </span>
                  <span className="text-slate-300 text-[10px] text-right">Lanzar 2 y elegir uno</span>
                </div>
              </div>
            </div>

          </div>

          {/* Quick rules summary */}
          <div className="bg-slate-950/60 rounded-2xl p-4 border border-slate-850 flex gap-4 text-xs text-slate-300 leading-relaxed">
            <ShieldCheck className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <strong className="text-slate-200">Resolución en Combates de Campaña:</strong>
              <p>
                Al derrotar a un ejército de nivel Oro (Gold) que custodia un obelisco o un punto de ruta, puedes reclamar una tirada del dado de tesoro de forma gratuita, además de la experiencia regular. ¡Usa esta guía de referencia para no ralentizar el juego físico!
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
