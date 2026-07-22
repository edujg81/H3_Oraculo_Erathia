export interface MapLocation {
  id: string;
  name: string;
  type: 'Visitable' | 'Re-visitable' | 'Señalizable' | 'Obstáculo / Paso' | 'Especial';
  zones: ('Superficie' | 'Subterráneo' | 'Agua')[];
  effect: string;
  rulesNotes: string;
  iconType: 'stone' | 'temple' | 'shrine' | 'resource' | 'death' | 'tree' | 'mill' | 'witch' | 'market' | 'sanctuary' | 'stables' | 'academy' | 'mine' | 'settlement' | 'gate' | 'shipyard' | 'sea_temple' | 'survivor' | 'buoy' | 'whirlpool' | 'shipwreck_lots' | 'portal' | 'rift' | 'altar';
}

export const LOCATIONS_DATA: MapLocation[] = [
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
    name: 'Altar del Conflujo (Conflux Altar)',
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

export const locationsData = LOCATIONS_DATA;
