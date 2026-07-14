import React, { useState, useMemo } from 'react';
import { 
  Search, Map, MapPin, Compass, Info, Waves, RefreshCw, 
  Flag, ShieldAlert, Skull, Crown, BookOpen, Hammer, Coins, 
  UserCheck, Dices, Flame, Sparkles, Anchor, HelpCircle
} from 'lucide-react';

interface MapLocation {
  id: string;
  name: string;
  type: 'Visitable' | 'Re-visitable' | 'Señalizable' | 'Obstáculo / Paso' | 'Especial';
  zones: ('Superficie' | 'Subterráneo' | 'Agua')[];
  effect: string;
  rulesNotes: string;
  iconType: 'stone' | 'temple' | 'shrine' | 'resource' | 'death' | 'tree' | 'mill' | 'witch' | 'market' | 'sanctuary' | 'stables' | 'academy' | 'mine' | 'settlement' | 'gate' | 'shipyard' | 'sea_temple' | 'survivor' | 'buoy' | 'whirlpool' | 'shipwreck_lots' | 'portal' | 'rift' | 'altar';
}

const LOCATIONS_DATA: MapLocation[] = [
  // 1. Visitables (Colocan un cubo negro tras visitarse, quedan inutilizadas)
  {
    id: 'learning_stone',
    name: 'Piedra de Aprendizaje (Learning Stone)',
    type: 'Visitable',
    zones: ['Superficie', 'Subterráneo'],
    effect: 'El Héroe gana inmediatamente 1 punto de Experiencia (Exp) al interactuar con ella.',
    rulesNotes: 'Coloca un cubo negro en la localización tras usarla. Ningún héroe puede volver a usarla este escenario.',
    iconType: 'stone'
  },
  {
    id: 'temple',
    name: 'Templo',
    type: 'Visitable',
    zones: ['Superficie', 'Subterráneo'],
    effect: 'Gana una ficha de Moral Positiva.',
    rulesNotes: 'El bono de Moral Positiva dura hasta el final del próximo combate del Héroe.',
    iconType: 'temple'
  },
  {
    id: 'magic_shrine',
    name: 'Santuario del Gesto Mágico (Magic Shrine)',
    type: 'Visitable',
    zones: ['Superficie', 'Subterráneo'],
    effect: 'Puedes buscar (2) en el mazo de hechizos.',
    rulesNotes: 'Debe pagarse el coste en oro del hechizo para incorporarlo a la mano/mazo. Si no puedes pagarlo, no robas.',
    iconType: 'shrine'
  },
  {
    id: 'mystical_garden',
    name: 'Jardín Místico',
    type: 'Visitable',
    zones: ['Superficie', 'Subterráneo'],
    effect: 'Elige una: Gana 2 Oros o 1 Objeto de valor.',
    rulesNotes: 'Una excelente fuente de recursos tempranos en el mapa. Una sola visita por partida.',
    iconType: 'resource'
  },
  {
    id: 'tomb',
    name: 'Tumba',
    type: 'Visitable',
    zones: ['Superficie', 'Subterráneo'],
    effect: 'Gana una ficha de moral negativa, 3 Oros y busca (1) Artefacto.',
    rulesNotes: 'La ficha de Moral Negativa permanece hasta la resolución del siguiente combate del Héroe.',
    iconType: 'death'
  },
  {
    id: 'warriors_tomb',
    name: 'Tumba del Guerrero',
    type: 'Visitable',
    zones: ['Superficie', 'Subterráneo'],
    effect: 'Puedes buscar (2) en el mazo de Artefactos dos veces. Después de buscar, recibe moral negativa dos veces.',
    rulesNotes: 'La ficha de Moral Negativa permanece hasta la resolución del siguiente combate del Héroe.',
    iconType: 'death'
  },
  {
    id: 'tree_of_knowledge',
    name: 'Árbol de la  Sabiduría',
    type: 'Visitable',
    zones: ['Superficie', 'Subterráneo'],
    effect: 'Puedes pagar 3 Objetos de valor o 10 Oros para ganar 2 niveles de Experiencia.',
    rulesNotes: 'Subir niveles desbloquea habilidades avanzadas en el contador de experiencia de tu Héroe.',
    iconType: 'tree'
  },
  {
    id: 'windmill',
    name: 'Molino',
    type: 'Visitable',
    zones: ['Superficie', 'Subterráneo'],
    effect: 'Recibe 1 Objeto de valor.',
    rulesNotes: 'Es una localización mística de producción fija, ideal para costear mejoras de unidades de Plata u Oro.',
    iconType: 'mill'
  },
  {
    id: 'waterwheel',
    name: 'Molino de Agua',
    type: 'Visitable',
    zones: ['Superficie'],
    effect: 'Recibe 3 Oros.',
    rulesNotes: 'Ubicado típicamente cerca de cauces de agua o valles fértiles. Se inhabilita con un cubo negro tras ser reclamado.',
    iconType: 'mill'
  },
  {
    id: 'witch_hut',
    name: 'Cabaña de la Bruja',
    type: 'Visitable',
    zones: ['Superficie', 'Subterráneo'],
    effect: 'Puedes, o bien retirar una carta de habilidad de tu mano, o bien mirar la carta superior del mazo de habilidades y añadirla a tu mano o a tu descarte de habilidades.',
    rulesNotes: 'La habilidad se extrae al azar. Puede otorgar ventajas inesperadas pero requiere adaptabilidad táctica.',
    iconType: 'witch'
  },
  {
    id: 'fairy_ring',
    name: 'Anillo Feérico',
    type: 'Visitable',
    zones: ['Superficie'],
    effect: 'Cuando entres en esta ubicación, retira 1 carta de tu mano y luego busca (2) en el mazo de esa carta. De esta manera no puedes eliminar cartas de estadísticas, habilidades iniciales o especialidades.',
    rulesNotes: 'Símbolo de buena suerte en la superficie. Coloca un cubo negro tras visitarlo; solo admite una visita por héroe.',
    iconType: 'shrine'
  },
  {
    id: 'library_enlightenment',
    name: 'Biblioteca de la Iluminación',
    type: 'Re-visitable',
    zones: ['Superficie', 'Subterráneo'],
    effect: 'Paga 3 Oros para retirar 1 carta de estadística de tu mano o pila de descarte y sustituirla por cualquier otra carta de característica. Puedes hacerlo dos veces por visita.',
    rulesNotes: 'Solo puede ser visitada una vez por cada Héroe. Se registra colocando un cubo del color del jugador.',
    iconType: 'academy'
  },
  {
    id: 'star_axis',
    name: 'Eje Estelar',
    type: 'Señalizable',
    zones: ['Superficie'],
    effect: 'Retira una de las cartas de estadística de tu mano y sustitúyela por una reforzada del mismo tipo.',
    rulesNotes: 'Cuando visites el eje estelar no retires los cubos de facción enemigos. Puede haber varios cubos en la zona. Una vez que cualquier facción haya visitado el eje estelar, este cuenta como zona vacía para esa facción, tal y como ocurre con las zonas visitables.',
    iconType: 'altar'
  },
  {
    id: 'scholar',
    name: 'Erudito',
    type: 'Visitable',
    zones: ['Superficie', 'Subterráneo'],
    effect: 'Tira 1 dado de ataque.\nSegún el resultado, haz lo siguiente:\n  +1: Roba la carta de estadística elegida o retira una de las cartas de estadística de tu mano.\n  0: Roba 2 cartas de habilidad, quédate una y descarta la otra.\n  -1: Roba 2 cartas de hechizo, quédate una y descarta la otra.',
    rulesNotes: 'De un solo uso. Una vez resuelto su efecto, el erudito abandona la zona colocando un cubo negro.',
    iconType: 'witch'
  },
  {
    id: 'fountain_youth',
    name: 'Fuente de la Juventud',
    type: 'Visitable',
    zones: ['Superficie'],
    effect: 'El Héroe que entre en esta zona gana 1 Punto de Movimiento (PM) adicional este turno y una ficha de Moral Positiva.',
    rulesNotes: 'De un solo uso. Coloca un cubo negro tras ser reclamado por un Héroe en este escenario.',
    iconType: 'temple'
  },
  {
    id: 'pandoras_box',
    name: 'La Caja de Pandora',
    type: 'Visitable',
    zones: ['Superficie', 'Subterráneo'],
    effect: 'Tira un número específico de dados de Recursos o Tesoro y selecciona uno para resolver su efecto.\nSe puede sustituir su efecto por una carta de Caja de Pandora.',
    rulesNotes: 'Si el Héroe es derrotado o decide retirarse, la caja permanece cerrada en la casilla para futuros intentos.',
    iconType: 'shrine'
  },
  {
    id: 'magic_spring',
    name: 'Manantial Mágico',
    type: 'Visitable',
    zones: ['Superficie', 'Subterráneo'],
    effect: 'Puedes mirar las 3 cartas superiores de tu pila de descarte y añadir una de ellas a tu mano. Devuelve el resto de cartas a la parte superior de la pila de descarte en cualquier orden.',
    rulesNotes: 'Se puede activar una vez por semana de escenario (ronda de juego). Coloca un marcador temporal.',
    iconType: 'shrine'
  },
  {
    id: 'obelisk',
    name: 'Obelisco',
    type: 'Señalizable',
    zones: ['Superficie', 'Subterráneo'],
    effect: 'Los efectos del obelisco dependen del escenario. Cuando lo visites, no retires los cubos de la facción enemiga. Puede haber varios cubos en la zona. Una vez que una facción visite un obelisco, ese se convierte en una zona vacía para dicha facción, tal y como ocurre con las zonas visitables.',
    rulesNotes: 'Cada jugador coloca un cubo de su color al visitarlo para registrar que ya lo leyó. No se bloquea para otros jugadores.',
    iconType: 'stone'
  },
  {
    id: 'redwood_observatory',
    name: 'Observatorio de Secoya',
    type: 'Visitable',
    zones: ['Superficie'],
    effect: 'Descubre una loseta adyacente a esta.',
    rulesNotes: 'De un solo uso. Coloca un cubo negro tras ser activado. Permite avistar amenazas y minas tempranas.',
    iconType: 'tree'
  },
  {
    id: 'spell_scroll_loc',
    name: 'Pergamino de Hechizo',
    type: 'Visitable',
    zones: ['Superficie', 'Subterráneo', 'Agua'],
    effect: 'Cuando entres en este lugar, roba 1 carta de pergamino de hechizo, ponla cerca de tu carta de héroe y sigue las instrucciones indicadas en la carta.',
    rulesNotes: 'El Héroe puede lanzar el hechizo impreso en el pergamino sin poseer Libro de Hechizos ni requerir la habilidad de magia adecuada.',
    iconType: 'shrine'
  },
  {
    id: 'prison',
    name: 'Prisión',
    type: 'Visitable',
    zones: ['Superficie', 'Subterráneo'],
    effect: 'Ganas un héroe secundario. Coloca su miniatura en esta zona. Si ya tienes uno, gana 3 Oros.',
    rulesNotes: 'De un solo uso. Habitualmente protegida por temibles ejércitos neutrales en el mapa de aventura.',
    iconType: 'death'
  },
  {
    id: 'shrine_magic_incantation',
    name: 'Santuario del Encantamiento Mágico',
    type: 'Visitable',
    zones: ['Superficie', 'Subterráneo'],
    effect: 'Puedes pagar 3 Oros para busca (2) en el mazo de hechizos.',
    rulesNotes: 'A diferencia de la Choza de la Bruja, el hechizo es visible para todos desde el principio del escenario.',
    iconType: 'shrine'
  },
  {
    id: 'artifact_symbol',
    name: 'Símbolo de Artefacto',
    type: 'Visitable',
    zones: ['Superficie', 'Subterráneo'],
    effect: 'Puedes buscar (2) en el mazo de artefactos..',
    rulesNotes: 'Generalmente se coloca custodiado por un ejército neutral adyacente. Se retira del mapa una vez recogido.',
    iconType: 'resource'
  },
  {
    id: 'resource_symbol',
    name: 'Símbolo de Recursos',
    type: 'Visitable',
    zones: ['Superficie', 'Subterráneo', 'Agua'],
    effect: 'Lanza la cantidad indicada de dados de recursos y elige uno para resolver su efecto.',
    rulesNotes: 'Se retira de la casilla una vez recogido. Es de un solo uso.',
    iconType: 'resource'
  },
  {
    id: 'treasure_symbol',
    name: 'Símbolo de Tesoro',
    type: 'Visitable',
    zones: ['Superficie', 'Subterráneo'],
    effect: 'Lanza la cantidad indicada de dados de tesoro y elige uno para resolver su efecto.',
    rulesNotes: 'Representa la clásica disyuntiva táctica de la saga para potenciar la economía o acelerar la subida de nivel del héroe.',
    iconType: 'resource'
  },

  // 2. Re-visitables (Regresas múltiples veces, consumiendo 1 PM si estás en ella o moviéndote)
  {
    id: 'trading_post',
    name: 'Mercadillo',
    type: 'Re-visitable',
    zones: ['Superficie', 'Subterráneo'],
    effect: 'Permite al héroe que lo visite intercambiar recursos, retirar una carta o comprar una máquina de guerra.',
    rulesNotes: 'Ideal para limpiar el mazo de combate eliminando cartas de fuerza/magia inútiles o equilibrar el stock de metales y gemas.',
    iconType: 'market'
  },
  {
    id: 'sanctuary_loc',
    name: 'Santuario',
    type: 'Re-visitable',
    zones: ['Superficie', 'Subterráneo'],
    effect: 'Los Héroes presentes en esta zona no pueden ser atacados por otros héroes. Si la zona está ocupada por un héroe, los demás héroes no pueden acceder a ella, pero sí pueden atravesarla.',
    rulesNotes: 'Un héroe rival puede atravesar este hexágono libremente durante su movimiento, pero nunca puede detenerse en él si ya está ocupado.',
    iconType: 'sanctuary'
  },
  {
    id: 'stables',
    name: 'Establos',
    type: 'Re-visitable',
    zones: ['Superficie'],
    effect: 'Gana 1 Punto de Movimiento (PM) adicional.',
    rulesNotes: 'No acumulable al siguiente turno. Se utiliza habitualmente para realizar incursiones lejanas y retornar a salvo.',
    iconType: 'stables'
  },
  {
    id: 'war_academy',
    name: 'Universidad',
    type: 'Visitable',
    zones: ['Superficie', 'Subterráneo'],
    effect: 'Paga 6 Oros para buscar (4) en la pila de descartes de habilidades.',
    rulesNotes: 'Perfecto para corregir la especialización militar del Héroe en las fases avanzadas del escenario.',
    iconType: 'academy'
  },
  {
    id: 'war_machine_factory',
    name: 'Fábrica de Máquinas de Guerra',
    type: 'Re-visitable',
    zones: ['Superficie', 'Subterráneo'],
    effect: 'Este lugar permite a los héroes comprar máquinas de guerra.',
    rulesNotes: 'Los héroes pueden regresar aquí en cualquier ronda para equipar o reemplazar sus máquinas dañadas en combate.',
    iconType: 'mill'
  },
  {
    id: 'hill_fort',
    name: 'Fuerte de la Colina',
    type: 'Visitable',
    zones: ['Superficie'],
    effect: 'Inmediatamente puedes reforzar una de tus unidades Bronce o Plata. El coste de refuerzo se reduce en 3 Oros hasta un mínimo de 0.',
    rulesNotes: 'Un punto logístico muy codiciado que ahorra oro para reforzar unidades.',
    iconType: 'stables'
  },
  {
    id: 'market_time',
    name: 'Mercado del Tiempo',
    type: 'Visitable',
    zones: ['Superficie'],
    effect: 'Retira una carta de tu mano. Después, busca (2) en el mazo de habilidades, hechizos o artefactos.',
    rulesNotes: 'Un lugar legendario para corregir y optimizar la build de cartas de tu Héroe en cualquier momento de la partida.',
    iconType: 'market'
  },
  {
    id: 'black_market',
    name: 'Mercado Negro',
    type: 'Re-visitable',
    zones: ['Subterráneo'],
    effect: 'Mira las 4 primeras cartas de la pila de descarte de artefactos.\nPuedes comprar una por:\n  - 5 Oros si es un artefacto menor.\n  - 7 Oros si es un artefacto mayor.\n  - 10 oros si es un artefacto reliquiea.',
    rulesNotes: 'Ubicado casi siempre en zonas subterráneas lejanas o peligrosas de Erathia.',
    iconType: 'market'
  },
  {
    id: 'tavern',
    name: 'Taberna',
    type: 'Re-visitable',
    zones: ['Superficie'],
    effect: 'Puedes pagar 7 Oros en este campo para ganar un héroe secundario y elegir un jugador enemigo que descarte 1 carta al azar de su mano.',
    rulesNotes: 'Útil para reclutar exploradores de apoyo que agilicen la recogida de recursos sueltos.',
    iconType: 'market'
  },

  // 3. Señalizables (Se capturan colocando un cubo de color de tu facción)
  {
    id: 'mine',
    name: 'Mina',
    type: 'Señalizable',
    zones: ['Superficie', 'Subterráneo'],
    effect: 'Si caputaras una mina que nadie ha capturado antes, recibes inmediatamente sus recursos. Además, en función de su tipo, generará ingresos pasivos al comienzo de cada ronda de recursos. El ingreso se pierde si se pierde el control de la mina.\n  - Mina de minerales, Aserradero: 2 Materiales de construcción.\n  - Laboratorio de alquimista, mina de cristal, estanque de gemas: 1 Objeto de valor.\n  - Mina de oro: 5 Oros.',
    rulesNotes: 'Al capturarla por primera vez, el jugador recibe de inmediato la producción de un turno de forma gratuita. Los rivales pueden conquistarla sustituyendo tu cubo de color por el suyo.',
    iconType: 'mine'
  },
  {
    id: 'settlement',
    name: 'Asentamiento',
    type: 'Señalizable',
    zones: ['Superficie', 'Subterráneo'],
    effect: 'Cuando señalizas un asentamiento, puedes elegir una de las recompensas de la lista. Si capturas un asentamiento que nadie antes ha capturado, recibes inmediatamente sus recursos:\n  - Aumenta en 5 tus ingresos de Oro.\n  - Aumenta en 2 tus ingresos de materiales de construcción.\n  - Aumenta en 1 tus ingresos de objetos de valor.\n  - Refuerza una de tus unidades de categoría bronce o plata por la mitad del coste habitual.\n\nSi eliges aumentar tus ingresos, coloca la ficha de recursos correspondiente en la zona del asentamiento. Dejarás de recibir estos bonificadores de ingresos si pierdes el control del asentamiento.',
    rulesNotes: 'Actúan como minas de recursos o permiten reforzar unidades a menor coste.',
    iconType: 'settlement'
  },
  {
    id: 'town',
    name: 'Ciudad',
    type: 'Señalizable',
    zones: ['Superficie', 'Subterráneo'],
    effect: 'Esta es la zona inicial de un jugador. Si un jugador captura una ciudad, ganará un bonificador que depende del escenario.',
    rulesNotes: 'Se puede asediar. El jugador que controle la ciudad coloca su cubo de color de facción y la protege con su propia muralla.',
    iconType: 'settlement'
  },
  {
    id: 'random_town',
    name: 'Ciudad Aleatoria',
    type: 'Señalizable',
    zones: ['Superficie', 'Subterráneo'],
    effect: 'Cuando señalices una ciudad aleatoria que no haya controlado antes ningún jugador, recibe inmediatamente 10 Oros. Además, generará pasivamente ingresos al comienzo de cada ronda de recursos: 10 Oros.\nCuando descubras este lugar en el mapa, cada jugador lanza 2 dados de recursos. El jugador con la mayor cantidad de recursos en su dados elige una facción (excepto las facciones que ya estén en juego), a partir de ahora, esta zona está defendida por unidades de dicha facción.\nA menos que se indique lo contrario, la ciudad aleatoria está defendida por:\n  - 1 manada de Bronce.\n  - 2 manadas de Plata.\n  - 2 unas pocas de Oro.',
    rulesNotes: 'El jugador que controla las unidades defensoras puede elegir las Bronce.\nDurante este asedio no utilices la carta Torre de arqueros.',
    iconType: 'settlement'
  },

  // 4. Especiales / Transición / Agua / Obstáculos
  {
    id: 'subterranean_gate',
    name: 'Portal Subterráneo',
    type: 'Re-visitable',
    zones: ['Superficie', 'Subterráneo'],
    effect: 'Cuando entres en este lugar, muévete a la ubicación conectada en la loseta adyacente. Este lugar te permite entrar o salir de las losetas subterráneas.',
    rulesNotes: 'Un héroe situado en la superficie no puede descubrir losetas del subterráneo que estén ocultas a través de la puerta hasta que no cruce físicamente por ella.',
    iconType: 'gate'
  },
  {
    id: 'monolith_two_way',
    name: 'Monolito (Doble sentido)',
    type: 'Re-visitable',
    zones: ['Superficie', 'Subterráneo'],
    effect: 'Cuando entres en este lugar, mueve a tu héroe a la ubicación del monolito de salida correspondiente.\nPuedes utilizar el monolito de salida para regresar al monolito de entrada.',
    rulesNotes: 'Consume 1 punto de movimiento (PM). Si el monolito de llegada está bloqueado por un héroe enemigo, se desata combate de inmediato.',
    iconType: 'gate'
  },
  {
    id: 'monolith_one_way',
    name: 'Monolito (Un sentido)',
    type: 'Re-visitable',
    zones: ['Superficie', 'Subterráneo'],
    effect: 'Cuando entres a este lugar, mueve a tu héroe a la ubicación del monolito de salida correspondiente.\nNo puedes usar el monolito de salida para regresar al monolito de entrada.',
    rulesNotes: 'Útil para realizar asaltos sorpresa en zonas resguardadas del rival sin posibilidad de retorno directo.',
    iconType: 'gate'
  },
  {
    id: 'blocked_zone',
    name: 'Zona Bloqueada',
    type: 'Obstáculo / Paso',
    zones: ['Superficie', 'Subterráneo'],
    effect: 'Este es un tipo de terreno especial al que los héroes no pueden acceder.\nSu grueso borde amarillo lo hace fácilmente reconocible.',
    rulesNotes: 'La zona bloqueada se puede superar empleando hechizos especiales de movimiento como Volar (Fly) o Portal Dimensional (Dimension Door).',
    iconType: 'gate'
  },
  {
    id: 'shipyard',
    name: 'Astillero (Shipyard)',
    type: 'Señalizable',
    zones: ['Superficie', 'Agua'],
    effect: 'Permite edificar astilleros en ciudades portuarias costeras (coste: 10 de Oro y 2 Materiales). Una vez construido, un Héroe adyacente puede comprar un Barco abonando 10 de Oro.',
    rulesNotes: 'Embarcar (entrar a una casilla de agua desde tierra) consume de forma irreversible LA TOTALIDAD de los PM restantes del Héroe para ese turno. Lo mismo aplica al desembarcar.',
    iconType: 'shipyard'
  },
  {
    id: 'sea_temple',
    name: 'Templo del Mar',
    type: 'Visitable',
    zones: ['Agua'],
    effect: 'Gana 10 Oros y busca (2) Artefactos dos veces.',
    rulesNotes: 'Considerado uno de los desafíos marítimos más peligrosos pero con las recompensas mágicas más determinantes de Savage Seas.',
    iconType: 'sea_temple'
  },
  {
    id: 'shipwreck_survivor',
    name: 'Superviviente de naufragio',
    type: 'Visitable',
    zones: ['Agua'],
    effect: 'Busca (2) Artefactos',
    rulesNotes: 'Localización mística de un solo uso. Una forma segura de conseguir oro o artefactos navegando.',
    iconType: 'survivor'
  },
  {
    id: 'buoy',
    name: 'Boya (Buoy)',
    type: 'Visitable',
    zones: ['Agua'],
    effect: 'Gana una ficha de moral positiva.',
    rulesNotes: 'Coloca 1 cubo negro al visitarlo.',
    iconType: 'buoy'
  },
  {
    id: 'whirlpool',
    name: 'Remolino (Whirlpool)',
    type: 'Obstáculo / Paso',
    zones: ['Agua'],
    effect: 'Provoca el fin de movimiento inmediato del Héroe. Obliga a lanzar un Dado de Combate: si el resultado es "-1", pierdes tu criatura aliada de nivel más bajo en el naufragio.',
    rulesNotes: 'Actúan como túneles de teletransporte instantáneo conectados entre sí a lo largo del mapa marítimo.',
    iconType: 'whirlpool'
  },
  {
    id: 'shipwreck_lots',
    name: 'Restos de Naufragio',
    type: 'Visitable',
    zones: ['Agua'],
    effect: 'Tira 1 dado de Ataque.\nEn función del resultado, haz lo siguiente:\n  +1: Tira y resuelve 2 dados de Recursos.\n  0: Tira y resuelve 1 dado de Recursos.\n  -1: No ganas nada.',
    rulesNotes: 'Requiere preparación táctica debido a los efectos desestabilizadores de moral de las huestes fantasmas de las profundidades.',
    iconType: 'shipwreck_lots'
  },
  {
    id: 'abandoned_ship',
    name: 'Barco Abandonado',
    type: 'Visitable',
    zones: ['Agua'],
    effect: 'Puedes buscar (2) en el mazo de artefactos. Si lo haces, también ganarás 2 Oros.',
    rulesNotes: 'De un solo uso. Requiere superar el combate táctico obligatorio para poder reclamar las recompensas.',
    iconType: 'shipwreck_lots'
  },
  {
    id: 'sea_barrel',
    name: 'Barril Marino',
    type: 'Visitable',
    zones: ['Agua'],
    effect: 'Tira y resuelve 1 dado de recursos.',
    rulesNotes: 'Un solo uso. Se coloca un cubo negro tras visitarlo.',
    iconType: 'resource'
  },
  {
    id: 'sea_chest',
    name: 'Cofre Marino',
    type: 'Visitable',
    zones: ['Agua'],
    effect: 'Tira 1 dado de Ataque.\nEn función del resultado, haz lo siguiente:\n  +1: Busca (1) Artefacto.\n  0: Gana 5 Oros.\n  -1: No ganas nada.',
    rulesNotes: 'Un solo uso. Equivalente marítimo al cofre de tesoro terrestre en Savage Seas.',
    iconType: 'resource'
  },
  {
    id: 'shipwreck',
    name: 'Naufragio',
    type: 'Visitable',
    zones: ['Agua'],
    effect: 'Tira y resuelve 2 dados de Recursos.',
    rulesNotes: 'Un desafío marítimo riguroso con penalizador moral debido a la presencia fantasmal de las profundidades.',
    iconType: 'shipwreck_lots'
  },
  {
    id: 'flotsam',
    name: 'Pecio',
    type: 'Visitable',
    zones: ['Agua'],
    effect: 'Gana 2 Materiales de consntrucción.',
    rulesNotes: 'Se retira del mapa de aventura permanentemente tras su recogida. No genera penalizaciones ni requiere batallas.',
    iconType: 'resource'
  },
  {
    id: 'siren',
    name: 'Sirena',
    type: 'Visitable',
    zones: ['Agua'],
    effect: 'El Héroe que entró en este campo gana 1 PM adicional este turno.\nTambién obtendrás una ficha de moral positiva.',
    rulesNotes: 'Solo admite una visita por héroe por escenario. Se marca colocando un cubo negro en la loseta de mar.',
    iconType: 'witch'
  },

  // 5. Expansión Conflux / Especiales / Bancos de Criaturas
  {
    id: 'elemental_portal',
    name: 'Conflujo elemental',
    type: 'Visitable',
    zones: ['Superficie', 'Subterráneo'],
    effect: 'Al entrar en este lugar, por cada vivienda que tengas, roba del mazo de unidades neutrales correspondiente hasta que encuentres una carta de <<Elementales>>. Puedes reclutar una de estas unidades si pagas su coste de reclutamiento. Vuelve a barajar el resto de las cartas en sus mazos.',
    rulesNotes: 'Expansión Conflux. Ofrece versatilidad para reponer bajas tácticas directamente en la vanguardia de exploración.',
    iconType: 'portal'
  },
  {
    id: 'elemental_rifts',
    name: 'Rifts Elementales (Rifts de Aire, Agua, Fuego, Tierra)',
    type: 'Visitable',
    zones: ['Superficie', 'Subterráneo'],
    effect: 'Santuarios dimensionales. El Héroe gasta 1 Acción para superar una prueba de Hechicería de dificultad III. El éxito concede inmunidades elementales permanentes o un Pergamino de Hechizo.',
    rulesNotes: 'Cruzar el Rift de Fuego concede además +2 PM inmediatos de bonificación si eres de facción Conflux o Inferno, además de duplicar el daño de hechizos de fuego lanzados desde allí.',
    iconType: 'rift'
  },
  {
    id: 'conflux_altar',
    name: 'Altar de la Confluencia (Conflux Altar)',
    type: 'Re-visitable',
    zones: ['Superficie', 'Subterráneo'],
    effect: 'Permite sacrificar cartas de Hechizo o Artefactos menores obsoletos de tu mano para transformarlos inmediatamente en Puntos de Experiencia (Exp) o recursos de Objetos de Valor.',
    rulesNotes: 'Esencial para reciclar el equipo mágico obsoleto y acelerar el desarrollo del Héroe.',
    iconType: 'altar'
  },
  {
    id: 'grail',
    name: 'Grial',
    type: 'Visitable',
    zones: ['Superficie', 'Subterráneo'],
    effect: 'Gana una ficha de grial.',
    rulesNotes: 'Excavar requiere gastar todos los puntos de movimiento del Héroe en una loseta libre tras haber descifrado el mapa completo de los obeliscos.',
    iconType: 'altar'
  },
  {
    id: 'cyclops_stockpile',
    name: 'Reserva de Cíclopes',
    type: 'Visitable',
    zones: ['Superficie', 'Subterráneo'],
    effect: 'Al preparar el ejército neutral que custodia este lugar, en lugar de robar 1 unidad Azul, busca 2 cíclopes Oro y añádelos al ejército neutral (búscalos primero en la pila de descartes Oro y luego en el mazo de unidades neutrales Oro). Si ganas el combate, tira y resuelve 4 dados de Recursos.\nCualquier efecto adicional depende del escenario.',
    rulesNotes: 'Combate asimétrico regulado por Fichas de Apilamiento (Stack Tokens) de vida extra. No se gana experiencia de combate.',
    iconType: 'mine'
  },
  {
    id: 'dragon_utopia',
    name: 'Utopía del Dragón',
    type: 'Señalizable',
    zones: ['Superficie', 'Subterráneo'],
    effect: 'Los efectos dependen del eseenario.',
    rulesNotes: 'Ubicada en el centro del escenario (losetas de nivel VII). No se permite combate rápido ni retiradas fáciles. El combate se decide por aniquilación.',
    iconType: 'sea_temple'
  }
];

export default function MapLocationsViewer() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedZone, setSelectedZone] = useState<string>('Todos');
  const [selectedType, setSelectedType] = useState<string>('Todos');
  const [testRollResult, setTestRollResult] = useState<string | null>(null);
  const [activeTestLocation, setActiveTestLocation] = useState<string | null>(null);

  // Filter lists
  const zonesList = ['Todos', 'Superficie', 'Subterráneo', 'Agua'];
  const typesList = ['Todos', 'Visitable', 'Re-visitable', 'Señalizable', 'Obstáculo / Paso', 'Especial'];

  const filteredLocations = useMemo(() => {
    return LOCATIONS_DATA.filter(loc => {
      const matchesSearch = searchQuery === '' || 
        loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        loc.effect.toLowerCase().includes(searchQuery.toLowerCase()) ||
        loc.rulesNotes.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesZone = selectedZone === 'Todos' || loc.zones.includes(selectedZone as any);
      const matchesType = selectedType === 'Todos' || loc.type === selectedType;

      return matchesSearch && matchesZone && matchesType;
    }).sort((a, b) => a.name.localeCompare(b.name, 'es'));
  }, [searchQuery, selectedZone, selectedType]);

  const handleTestRoll = (locId: string) => {
    setActiveTestLocation(locId);
    setTestRollResult(null);

    // Simulate 600ms roll effect
    setTimeout(() => {
      if (locId === 'shipwreck_survivor') {
        // Treasure Die simulation
        const outcomes = [
          '¡Resultado Éxito! 💎 Encuentras un Artefacto Menor de los restos y lo añades a tu inventario.',
          '¡Resultado Éxito! 💎 Encuentras un Artefacto Menor de los restos y lo añades a tu inventario.',
          '¡Resultado Fallo! 🪙 No quedan artefactos intactos, pero el marinero agradecido te recompensa con +5 de Oro.',
          '¡Resultado Fallo! 🪙 No quedan artefactos intactos, pero el marinero agradecido te recompensa con +5 de Oro.'
        ];
        const roll = Math.floor(Math.random() * outcomes.length);
        setTestRollResult(outcomes[roll]);
      } else if (locId === 'whirlpool') {
        // Combat Die simulation
        const rollValue = Math.floor(Math.random() * 3) - 1; // -1, 0, or +1
        if (rollValue === -1) {
          setTestRollResult('¡Resultado -1! 💀 El remolino succiona la criatura aliada de nivel más bajo de tu ejército. ¡Naufragio devastador!');
        } else {
          setTestRollResult(`¡Resultado ${rollValue >= 0 ? '+' : ''}${rollValue}! ⛵ Navegación exitosa. El remolino te teletransporta de forma segura a otro vórtice.`);
        }
      } else if (locId === 'witch_hut') {
        const skills = [
          'Habilidad: Logística (Logistics) - Movilidad extra',
          'Habilidad: Liderazgo (Leadership) - Moral positiva',
          'Habilidad: Sabiduría (Wisdom) - Permite aprender hechizos de nivel superior',
          'Habilidad: Tiro con Arco (Archery) - Potencia ataques a distancia',
          'Habilidad: Hechicería (Sorcery) - Potencia el daño de hechizos',
          'Habilidad: Ofensiva (Offense) - Daño cuerpo a cuerpo incrementado'
        ];
        const randomSkill = skills[Math.floor(Math.random() * skills.length)];
        setTestRollResult(`🔮 La Bruja te enseña: "${randomSkill}" tras abonar 5 de Oro.`);
      } else if (locId === 'mystical_garden') {
        const reward = Math.random() > 0.5 ? '🪙 Eliges recibir 2 de Oro de inmediato.' : '🔮 Eliges recibir 1 Objeto de valor (Gema preciosa).';
        setTestRollResult(reward);
      } else {
        setTestRollResult('¡Lugar visitado! Registras la zona y aplicas sus efectos de forma reglamentaria.');
      }
    }, 600);
  };

  const renderLocationIcon = (iconType: string, className: string = 'w-5 h-5') => {
    switch (iconType) {
      case 'stone':
        return <UserCheck className={`${className} text-indigo-400`} />;
      case 'temple':
        return <Crown className={`${className} text-amber-300`} />;
      case 'shrine':
        return <Sparkles className={`${className} text-purple-400`} />;
      case 'resource':
        return <Coins className={`${className} text-amber-500`} />;
      case 'death':
        return <Skull className={`${className} text-rose-500`} />;
      case 'tree':
        return <BookOpen className={`${className} text-emerald-400`} />;
      case 'mill':
        return <Hammer className={`${className} text-amber-600`} />;
      case 'witch':
        return <HelpCircle className={`${className} text-pink-400`} />;
      case 'market':
        return <RefreshCw className={`${className} text-sky-400`} />;
      case 'stables':
        return <Compass className={`${className} text-lime-400`} />;
      case 'academy':
        return <BookOpen className={`${className} text-yellow-500`} />;
      case 'mine':
        return <Flag className={`${className} text-blue-400`} />;
      case 'settlement':
        return <MapPin className={`${className} text-green-400`} />;
      case 'gate':
        return <ShieldAlert className={`${className} text-orange-400`} />;
      case 'shipyard':
        return <Anchor className={`${className} text-cyan-400`} />;
      case 'sea_temple':
        return <Waves className={`${className} text-blue-500`} />;
      case 'survivor':
        return <Dices className={`${className} text-emerald-500`} />;
      case 'buoy':
        return <Compass className={`${className} text-teal-400`} />;
      case 'whirlpool':
        return <Waves className={`${className} text-indigo-500 animate-spin`} style={{ animationDuration: '8s' }} />;
      case 'shipwreck_lots':
        return <Skull className={`${className} text-slate-400`} />;
      case 'portal':
        return <Sparkles className={`${className} text-violet-400`} />;
      case 'rift':
        return <Flame className={`${className} text-red-500`} />;
      case 'altar':
        return <RefreshCw className={`${className} text-pink-500`} />;
      default:
        return <Map className={`${className} text-slate-400`} />;
    }
  };

  const getTypeStyle = (type: string) => {
    switch (type) {
      case 'Visitable':
        return 'bg-amber-950/40 border-amber-800 text-amber-300';
      case 'Re-visitable':
        return 'bg-emerald-950/40 border-emerald-800 text-emerald-300';
      case 'Señalizable':
        return 'bg-blue-950/40 border-blue-800 text-blue-300';
      case 'Obstáculo / Paso':
        return 'bg-orange-950/40 border-orange-800 text-orange-300';
      default:
        return 'bg-purple-950/40 border-purple-800 text-purple-300';
    }
  };

  const getZoneStyle = (zone: string) => {
    switch (zone) {
      case 'Superficie':
        return 'bg-lime-950/30 text-lime-400 border-lime-800/40';
      case 'Subterráneo':
        return 'bg-red-950/30 text-red-400 border-red-900/40';
      case 'Agua':
        return 'bg-cyan-950/30 text-cyan-400 border-cyan-800/40';
      default:
        return 'bg-slate-850 text-slate-300 border-slate-700/50';
    }
  };

  return (
    <div className="space-y-6" id="locations-viewer-section">
      {/* Intro Header */}
      <div className="bg-slate-900/90 border border-amber-950/30 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
        <div className="absolute right-0 top-0 opacity-10 pointer-events-none transform translate-x-8 -translate-y-8">
          <Map className="w-64 h-64 text-amber-500" />
        </div>
        <div className="relative z-10 space-y-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-950/50 border border-amber-800/50 flex items-center justify-center">
              <Compass className="w-5 h-5 text-amber-400 animate-pulse" />
            </div>
            <div>
              <h2 className="text-2xl font-serif font-semibold text-amber-200 tracking-tight">
                Atlas de Erathia: Lugares de Campaña y Mapa
              </h2>
              <p className="text-xs text-slate-400 font-mono">
                Reglamento oficial del Juego de Mesa
              </p>
            </div>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
            Explora las distintas tipologías de losetas de terreno, santuarios, recursos y peligros marítimos de la superficie, el subterráneo cavernosos o las embravecidas aguas de Savage Seas. Filtra y consulta efectos, restricciones y realiza simulaciones de dados para agilizar tus turnos en mesa.
          </p>
        </div>
      </div>

      {/* Control Panel: Search & Filters */}
      <div className="bg-slate-900/80 border border-slate-800/80 rounded-2xl p-4 sm:p-6 shadow-xl space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Search bar */}
          <div className="md:col-span-12 lg:col-span-4 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar lugar, efecto o regla..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 bg-slate-950/80 border border-amber-950/40 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all text-sm"
            />
          </div>

          {/* Zone filter */}
          <div className="md:col-span-6 lg:col-span-4 space-y-1.5">
            <label className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">Filtrar por Zona:</label>
            <div className="flex flex-wrap gap-1.5">
              {zonesList.map(zone => (
                <button
                  key={zone}
                  onClick={() => setSelectedZone(zone)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                    selectedZone === zone 
                      ? 'bg-amber-600 text-white border-amber-500 shadow-md shadow-amber-950/20' 
                      : 'bg-slate-950/40 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-850'
                  }`}
                >
                  {zone === 'Superficie' ? '🌲 Superficie' 
                   : zone === 'Subterráneo' ? '🌋 Subterráneo' 
                   : zone === 'Agua' ? '🌊 Agua' 
                   : '🗺️ Todos'}
                </button>
              ))}
            </div>
          </div>

          {/* Type filter */}
          <div className="md:col-span-6 lg:col-span-4 space-y-1.5">
            <label className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">Filtrar por Tipo de Interacción:</label>
            <div className="flex flex-wrap gap-1.5">
              {typesList.map(type => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-2.5 py-1.5 rounded-lg text-[11px] font-medium border transition-all cursor-pointer ${
                    selectedType === type 
                      ? 'bg-amber-600 text-white border-amber-500 shadow-md' 
                      : 'bg-slate-950/40 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-850'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredLocations.map(loc => (
          <div 
            key={loc.id}
            className="group bg-slate-900/90 border border-slate-800/80 hover:border-amber-500/40 rounded-2xl p-5 flex flex-col justify-between shadow-lg transition-all duration-300 hover:shadow-amber-500/5 hover:-translate-y-0.5"
          >
            <div className="space-y-4">
              {/* Header inside card */}
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center shrink-0">
                    {renderLocationIcon(loc.iconType, "w-5 h-5")}
                  </div>
                  <div>
                    <h3 className="text-sm font-serif font-semibold text-amber-200 tracking-tight group-hover:text-amber-100 transition-colors">
                      {loc.name}
                    </h3>
                    <div className="flex gap-1.5 mt-1">
                      <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded border ${getTypeStyle(loc.type)}`}>
                        {loc.type}
                      </span>
                      {loc.zones.map(z => (
                        <span key={z} className={`text-[9px] font-mono px-1.5 py-0.5 rounded border ${getZoneStyle(z)}`}>
                          {z === 'Superficie' ? '🌲 Surf.' 
                           : z === 'Subterráneo' ? '🌋 Subt.' 
                           : '🌊 Agua'}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Effect Body */}
              <div className="space-y-2">
                <div className="bg-slate-950/60 rounded-xl p-3 border border-slate-850/50">
                  <p className="text-xs text-slate-300 leading-relaxed">
                    <strong className="text-amber-500/80 font-mono text-[10px] block uppercase mb-1">Efecto Inmediato:</strong>
                    {loc.effect}
                  </p>
                </div>

                <div className="bg-slate-950/20 border-l border-slate-700/30 pl-2.5 py-1">
                  <p className="text-[11px] text-slate-400 italic leading-relaxed">
                    <strong className="text-slate-500 font-mono text-[9px] not-italic block uppercase">Puntualización de Reglas:</strong>
                    {loc.rulesNotes}
                  </p>
                </div>
              </div>
            </div>

            {/* Simulated Action Drawer for Visitable Locations */}
            <div className="mt-4 pt-4 border-t border-slate-800/60">
              {['shipwreck_survivor', 'whirlpool', 'witch_hut', 'mystical_garden'].includes(loc.id) ? (
                <div className="space-y-2">
                  <button 
                    onClick={() => handleTestRoll(loc.id)}
                    className="w-full bg-slate-950 hover:bg-slate-800/80 border border-slate-850 hover:border-amber-500/30 py-2 px-3 rounded-xl text-xs font-mono text-amber-400 hover:text-amber-300 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <Dices className={`w-3.5 h-3.5 ${activeTestLocation === loc.id && !testRollResult ? 'animate-spin' : ''}`} />
                    <span>
                      {loc.id === 'shipwreck_survivor' ? 'Simular Dado de Tesoro 🎲'
                       : loc.id === 'whirlpool' ? 'Simular Daño de Remolino 🌪️'
                       : loc.id === 'witch_hut' ? 'Aprender Habilidad Aleatoria 🧙‍♀️'
                       : 'Girar Recursos del Jardín 🌿'}
                    </span>
                  </button>

                  {activeTestLocation === loc.id && (
                    <div className="p-2.5 rounded-lg bg-slate-950 border border-amber-950/40 text-[11px] text-amber-200 animate-fadeIn font-mono leading-relaxed text-center shadow-inner">
                      {testRollResult ? (
                        <div className="space-y-1">
                          <span className="text-[10px] text-slate-500 block uppercase tracking-wider">RESULTADO DEL DADO:</span>
                          <span>{testRollResult}</span>
                        </div>
                      ) : (
                        <span className="text-slate-500 animate-pulse">Lanzando dados sobre el tablero...</span>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-500 bg-slate-950/20 px-2 py-1 rounded-lg">
                  <Info className="w-3 h-3 text-slate-600 shrink-0" />
                  <span>
                    {loc.type === 'Visitable' ? 'Colocar cubo de Visita (Negro)' 
                     : loc.type === 'Señalizable' ? 'Colocar cubo de tu Facción' 
                     : 'Efecto estático o coste de PM reglamentario'}
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}

        {filteredLocations.length === 0 && (
          <div className="col-span-full bg-slate-900/40 border border-dashed border-slate-800 rounded-2xl p-12 text-center space-y-3">
            <Compass className="w-12 h-12 text-slate-600 mx-auto animate-pulse" />
            <p className="text-sm text-slate-400 font-mono">No se encontraron lugares con los filtros actuales.</p>
            <button 
              onClick={() => { setSearchQuery(''); setSelectedZone('Todos'); setSelectedType('Todos'); }}
              className="text-xs text-amber-500 hover:underline font-semibold cursor-pointer"
            >
              Restablecer filtros de búsqueda
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
