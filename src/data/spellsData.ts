// Base interface mapping for the components to avoid imports circular reference
export interface LocalSpellCard {
  id: string;
  name: string;
  school: 'Aire' | 'Agua' | 'Fuego' | 'Tierra' | 'Todos';
  isAllSchools?: boolean;
  type: 'Básica' | 'Avanzada';
  effect: string;
  valueText: string;
  isBoostable: boolean;
  powerLevels: {
    [power: number]: string;
  };
  boosterEffect: string;
  flavorText: string;
  notes?: string;
  colorTheme: {
    bg: string;
    border: string;
    glow: string;
    text: string;
    accent: string;
  };
}

export const SPELLS_DATA: LocalSpellCard[] = [
  {
    "id": "air_shield",
    "name": "Escudo aéreo",
    "school": "Aire",
    "type": "Básica",
    "effect": "En Curso: Hasta el final del combate, la unidad seleccionada gana * cuando es atacada por una unidad a distancia.",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Aire).",
    "isBoostable": true,
    "powerLevels": {
      "0": "+1 Defensa.",
      "1": "+2 Defensa.",
      "2": "+3 Defensa."
    },
    "boosterEffect": "Instantáneo: +1 Poder",
    "flavorText": "Un hechizo místico de la Escuela de Aire codificado en los sagrados pergaminos de Erathia.",
    "notes": "Sigue las reglas generales de lanzamiento descritas en el manual oficial.",
    "colorTheme": {
      "bg": "from-cyan-950/40 to-slate-900/80",
      "border": "border-cyan-800/50",
      "glow": "shadow-[0_0_15px_rgba(6,182,212,0.1)]",
      "text": "text-cyan-400",
      "accent": "bg-cyan-500/10 text-cyan-300 border-cyan-500/30"
    }
  },
  {
    "id": "anti_magic",
    "name": "Antimagia",
    "school": "Tierra",
    "type": "Básica",
    "effect": "En Curso: Hasta el final del combate, la unidad * seleccionada no puede ser el objetivo de hechizos.",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Tierra).",
    "isBoostable": true,
    "powerLevels": {
      "0": "* Bronce.",
      "1": "* Bronce o Plata.",
      "2": "* Bronce o Plata u Oro."
    },
    "boosterEffect": "Instantáneo: +1 Poder",
    "flavorText": "Un hechizo místico de la Escuela de Tierra codificado en los sagrados pergaminos de Erathia.",
    "notes": "Sigue las reglas generales de lanzamiento descritas en el manual oficial.",
    "colorTheme": {
      "bg": "from-cyan-950/40 to-slate-900/80",
      "border": "border-cyan-800/50",
      "glow": "shadow-[0_0_15px_rgba(6,182,212,0.1)]",
      "text": "text-cyan-400",
      "accent": "bg-cyan-500/10 text-cyan-300 border-cyan-500/30"
    }
  },
  {
    "id": "chain_lightning",
    "name": "Rayo en cadena",
    "school": "Aire",
    "type": "Avanzada",
    "effect": "Activación: Selecciona una unidad y las 2 unidades más cercanas a ella.\nDistribuye * Heridas, empezando por la primera unidad seleccionada.",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Aire).",
    "isBoostable": true,
    "powerLevels": {
      "0": "* 1/1/1 Heridas.",
      "2": "* 2/1/1 Heridas.",
      "4": "* 3/2/1 Heridas."
    },
    "boosterEffect": "Instantáneo: +1 Poder",
    "flavorText": "Un relámpago devastador salta de unidad en unidad, calcinando todo a su paso.",
    "notes": "El <damage> de Relámpago en Cadena también se aplica a unidades aliadas. Si varias unidades se encuentran a la misma distancia del objetivo de este hechizo, el lanzador elige cuál de ellas recibe el segundo daño y cuál el tercero.",
    "colorTheme": {
      "bg": "from-cyan-950/40 to-slate-900/80",
      "border": "border-cyan-800/50",
      "glow": "shadow-[0_0_15px_rgba(6,182,212,0.1)]",
      "text": "text-cyan-400",
      "accent": "bg-cyan-500/10 text-cyan-300 border-cyan-500/30"
    }
  },
  {
    "id": "counterstrike",
    "name": "Contragolpe",
    "school": "Aire",
    "type": "Avanzada",
    "effect": "Instantáneo: Retira el cubo negro de la carta de unidad * seleccionada; la unidad puede contraatacar de nuevo:",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Aire).",
    "isBoostable": true,
    "powerLevels": {
      "0": "* Bronce.",
      "2": "* Bronce o Plata.",
      "4": "* Bronce o Plata u Oro."
    },
    "boosterEffect": "Instantáneo: +1 Poder",
    "flavorText": "Un hechizo místico de la Escuela de Aire codificado en los sagrados pergaminos de Erathia.",
    "notes": "Sigue las reglas generales de lanzamiento descritas en el manual oficial.",
    "colorTheme": {
      "bg": "from-cyan-950/40 to-slate-900/80",
      "border": "border-cyan-800/50",
      "glow": "shadow-[0_0_15px_rgba(6,182,212,0.1)]",
      "text": "text-cyan-400",
      "accent": "bg-cyan-500/10 text-cyan-300 border-cyan-500/30"
    }
  },
  {
    "id": "dimension_door",
    "name": "Puerta dimensional",
    "school": "Aire",
    "type": "Avanzada",
    "effect": "Mapa: Mueve a un héroe hasta * zona(s).\nIgnora cualquier obstáculo y zona entre medias y resuelve la última de forma normal.",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Aire).",
    "isBoostable": true,
    "powerLevels": {
      "0": "* 1.",
      "2": "* 2.",
      "4": "* 3."
    },
    "boosterEffect": "Instantáneo: +1 Poder",
    "flavorText": "Un hechizo místico de la Escuela de Aire codificado en los sagrados pergaminos de Erathia.",
    "notes": "La Puerta Dimensional sólo puede mover al Héroe del lanzador, no a un Héroe controlado por cualquier otro jugador. Puede utilizarse para saltar zonas bloqueadas.",
    "colorTheme": {
      "bg": "from-cyan-950/40 to-slate-900/80",
      "border": "border-cyan-800/50",
      "glow": "shadow-[0_0_15px_rgba(6,182,212,0.1)]",
      "text": "text-cyan-400",
      "accent": "bg-cyan-500/10 text-cyan-300 border-cyan-500/30"
    }
  },
  {
    "id": "disrupting_ray",
    "name": "Rayo disruptor",
    "school": "Aire",
    "type": "Básica",
    "effect": "En Curso: Hasta el final del combate, la unidad * seleccionada no puede usar su habilidad especial.",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Aire).",
    "isBoostable": true,
    "powerLevels": {
      "0": "* Bronce.",
      "1": "* Bronce o Plata.",
      "2": "* Bronce o Plata u Oro."
    },
    "boosterEffect": "Instantáneo: +1 Poder",
    "flavorText": "Un hechizo místico de la Escuela de Aire codificado en los sagrados pergaminos de Erathia.",
    "notes": "Sigue las reglas generales de lanzamiento descritas en el manual oficial.",
    "colorTheme": {
      "bg": "from-cyan-950/40 to-slate-900/80",
      "border": "border-cyan-800/50",
      "glow": "shadow-[0_0_15px_rgba(6,182,212,0.1)]",
      "text": "text-cyan-400",
      "accent": "bg-cyan-500/10 text-cyan-300 border-cyan-500/30"
    }
  },
  {
    "id": "earthquake",
    "name": "Terremoto",
    "school": "Tierra",
    "type": "Básica",
    "effect": "Instantáneo: Durante el asedio de una ciudad:",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Tierra).",
    "isBoostable": true,
    "powerLevels": {
      "0": "Retira 1 obstáculo de puerta o muralla de tu elección.",
      "1": "Retira 2 obstáculos de puerta o muralla de tu elección..",
      "2": "Cada unidad adyacente a un obstáculo de muralla o puerta sufre 1 Herida. Retira todos los obstáculos de puerta y muralla."
    },
    "boosterEffect": "Instantáneo: +1 Poder",
    "flavorText": "Un hechizo místico de la Escuela de Tierra codificado en los sagrados pergaminos de Erathia.",
    "notes": "Sigue las reglas generales de lanzamiento descritas en el manual oficial.",
    "colorTheme": {
      "bg": "from-emerald-950/40 to-slate-900/80",
      "border": "border-emerald-800/50",
      "glow": "shadow-[0_0_15px_rgba(16,185,129,0.1)]",
      "text": "text-emerald-400",
      "accent": "bg-emerald-500/10 text-emerald-300 border-emerald-500/30"
    }
  },
  {
    "id": "fortune",
    "name": "Fortuna",
    "school": "Aire",
    "type": "Básica",
    "effect": "Instantáneo: Vuelve a lanzar un dado de tesoro, recurso o ataque *.\nResuelve el resultado de tu elección.",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Aire).",
    "isBoostable": true,
    "powerLevels": {
      "0": "* 1 vez.",
      "1": "* 2 veces.",
      "2": "* 3 veces."
    },
    "boosterEffect": "Instantáneo: +1 Poder",
    "flavorText": "Un hechizo místico de la Escuela de Aire codificado en los sagrados pergaminos de Erathia.",
    "notes": "Esta carta debe jugarse antes de lanzar el dado. No puede jugarse después de haber tirado el dado y de conocer el resultado de la tirada.",
    "colorTheme": {
      "bg": "from-cyan-950/40 to-slate-900/80",
      "border": "border-cyan-800/50",
      "glow": "shadow-[0_0_15px_rgba(6,182,212,0.1)]",
      "text": "text-cyan-400",
      "accent": "bg-cyan-500/10 text-cyan-300 border-cyan-500/30"
    }
  },
  {
    "id": "berserk",
    "name": "Furia asesina",
    "school": "Fuego",
    "type": "Avanzada",
    "effect": "En Curso: Selecciona una unidad *. Durante su activación, la unidad debe atacar a la unidad más cercana o moverse hacia la unidad más cercana y atacarla.",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Fuego).",
    "isBoostable": true,
    "powerLevels": {
      "0": "* Bronce.",
      "2": "* Plata.",
      "4": "* Oro."
    },
    "boosterEffect": "Instantáneo: +1 Poder",
    "flavorText": "Un hechizo místico de la Escuela de Fuego codificado en los sagrados pergaminos de Erathia.",
    "notes": "Si hay varias unidades cercanas a la misma distancia de la unidad bajo este hechizo, el jugador que posee la unidad decide la dirección del movimiento y el objetivo del ataque. Las unidades aliadas también pueden ser atacadas por la unidad bajo este hechizo. El ataque de la unidad bajo este hechizo desencadena un ataque de represalia, incluso si la unidad atacada fue aliada.",
    "colorTheme": {
      "bg": "from-red-950/40 to-slate-900/80",
      "border": "border-red-800/50",
      "glow": "shadow-[0_0_15px_rgba(239,68,68,0.1)]",
      "text": "text-red-400",
      "accent": "bg-red-500/10 text-red-300 border-red-500/30"
    }
  },
  {
    "id": "bless",
    "name": "Bendición",
    "school": "Agua",
    "type": "Básica",
    "effect": "Instantáneo: La unidad Terrestre o Voladora seleccionada:",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Agua).",
    "isBoostable": true,
    "powerLevels": {
      "0": "Ignora la tirada del dado de ataque.",
      "1": "Ignora la tirada del dado de ataque y gana +1 Ataque.",
      "2": "Ignora la tirada del dado de ataque y gana +2 Ataque."
    },
    "boosterEffect": "Instantáneo: +1 Poder",
    "flavorText": "Los dioses de la guerra bendicen las armas aliadas, garantizando golpes de máxima contundencia.",
    "notes": "Si no se tira ningún dado de Ataque durante el ataque, tampoco se muestra ningún resultado. Esto significa que las unidades que tienen habilidades basadas en el resultado de una tirada de Ataque no se activan. (ej. la :defensa: de los Zombis no aumenta, y las Momias no pueden poner el dado de Ataque a «-1»).",
    "colorTheme": {
      "bg": "from-sky-950/40 to-slate-900/80",
      "border": "border-sky-800/50",
      "glow": "shadow-[0_0_15px_rgba(14,165,233,0.1)]",
      "text": "text-sky-400",
      "accent": "bg-sky-500/10 text-sky-300 border-sky-500/30"
    }
  },
  {
    "id": "blind",
    "name": "Ceguera",
    "school": "Fuego",
    "type": "Básica",
    "effect": "Activación: Coloca una ficha de Parálisis en la unidad seleccionada *.",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Fuego).",
    "isBoostable": true,
    "powerLevels": {
      "0": "* Bronce.",
      "1": "* Bronce o Plata.",
      "2": "* Bronce o Plata u Oro."
    },
    "boosterEffect": "Instantáneo: +1 Poder",
    "flavorText": "Luz cegadora que sume a la unidad en una oscuridad absoluta, dejándola indefensa.",
    "notes": "Ver Parálisis",
    "colorTheme": {
      "bg": "from-red-950/40 to-slate-900/80",
      "border": "border-red-800/50",
      "glow": "shadow-[0_0_15px_rgba(239,68,68,0.1)]",
      "text": "text-red-400",
      "accent": "bg-red-500/10 text-red-300 border-red-500/30"
    }
  },
  {
    "id": "bloodlust",
    "name": "Ansia de sangre",
    "school": "Fuego",
    "type": "Básica",
    "effect": "Instantáneo: La unidad Terrestre o Voladora seleccionada gana:",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Fuego).",
    "isBoostable": true,
    "powerLevels": {
      "0": "+1 Ataque.",
      "1": "+2 Ataque.",
      "2": "+3 Ataque."
    },
    "boosterEffect": "Instantáneo: +1 Poder",
    "flavorText": "Un hechizo místico de la Escuela de Fuego codificado en los sagrados pergaminos de Erathia.",
    "notes": "Sigue las reglas generales de lanzamiento descritas en el manual oficial.",
    "colorTheme": {
      "bg": "from-red-950/40 to-slate-900/80",
      "border": "border-red-800/50",
      "glow": "shadow-[0_0_15px_rgba(239,68,68,0.1)]",
      "text": "text-red-400",
      "accent": "bg-red-500/10 text-red-300 border-red-500/30"
    }
  },
  
  {
    "id": "clone",
    "name": "Clon",
    "school": "Agua",
    "type": "Avanzada",
    "effect": "En Curso: Coloca una ficha de Clon sobre una unidad aliada * y otra en un espacio vacío adyacente a esa unidad. La unidad clonada actúa como la original pero solo tiene 1 Punto de Salud.",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado.",
    "isBoostable": true,
    "powerLevels": {
      "1": "* Bronce.",
      "3": "* Bronce o Plata.",
      "5": "* Bronce o Plata u Oro."
    },
    "boosterEffect": "Instantáneo: +1 Poder",
    "flavorText": "Un hechizo místico de la Escuela de Agua codificado en los sagrados pergaminos de Erathia.",
    "notes": "Sigue las reglas generales de lanzamiento descritas en el manual oficial.",
    "colorTheme": {
      "bg": "from-sky-950/40 to-slate-900/80",
      "border": "border-sky-800/50",
      "glow": "shadow-[0_0_15px_rgba(14,165,233,0.1)]",
      "text": "text-sky-400",
      "accent": "bg-sky-500/10 text-sky-300 border-sky-500/30"
    }
  },
  
  {
    "id": "cure",
    "name": "Curación",
    "school": "Agua",
    "type": "Básica",
    "effect": "Instantáneo: Retira cualquier efecto o Parálisis de la unidad seleccionada y retira de esta unidad hasta:",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Agua).",
    "isBoostable": true,
    "powerLevels": {
      "0": "1 Herida.",
      "1": "2 Heridas.",
      "2": "3 Heridas."
    },
    "boosterEffect": "Instantáneo: +1 Poder",
    "flavorText": "Luz divina purificadora que cicatriza heridas y disuelve maldiciones oscuras.",
    "notes": "1 No está claro qué se entiende aquí por «efecto». 2 La curación sólo puede ser lanzada sobre una unidad aliada. 2 La eliminación de un efecto es opcional. Un efecto positivo no tiene que ser eliminado y por lo tanto puede permanecer activo.",
    "colorTheme": {
      "bg": "from-sky-950/40 to-slate-900/80",
      "border": "border-sky-800/50",
      "glow": "shadow-[0_0_15px_rgba(14,165,233,0.1)]",
      "text": "text-sky-400",
      "accent": "bg-sky-500/10 text-sky-300 border-sky-500/30"
    }
  },
  {
    "id": "curse",
    "name": "Maldición",
    "school": "Fuego",
    "type": "Básica",
    "effect": "Instantáneo: La unidad seleccionada sufre (hasta un mínimo de 0):",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Fuego).",
    "isBoostable": true,
    "powerLevels": {
      "0": "-1 Defensa.",
      "1": "-2 Defensa.",
      "2": "-3 Defensa."
    },
    "boosterEffect": "Instantáneo: +1 Poder",
    "flavorText": "Nubes de infortunio envuelven al enemigo, haciendo que sus ataques sean débiles y erráticos.",
    "notes": "Sigue las reglas generales de lanzamiento descritas en el manual oficial.",
    "colorTheme": {
      "bg": "from-red-950/40 to-slate-900/80",
      "border": "border-red-800/50",
      "glow": "shadow-[0_0_15px_rgba(239,68,68,0.1)]",
      "text": "text-red-400",
      "accent": "bg-red-500/10 text-red-300 border-red-500/30"
    }
  },
  
  {
    "id": "dispel",
    "name": "Disipar",
    "school": "Agua",
    "type": "Básica",
    "effect": "Instantáneo: Retira todos los efectos En Curso de un espacio o de una unidad * y del espacio que ocupa.",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Agua).",
    "isBoostable": true,
    "powerLevels": {
      "0": "* Bronce.",
      "1": "* Bronce o Plata.",
      "2": "* Bronce o Plata u Oro."
    },
    "boosterEffect": "Instantáneo: +1 Poder",
    "flavorText": "Un hechizo místico de la Escuela de Agua codificado en los sagrados pergaminos de Erathia.",
    "notes": "Los efectos globales que no están vinculados a una unidad específica ( ej. Tiro con Arco) no pueden ser eliminados.",
    "colorTheme": {
      "bg": "from-sky-950/40 to-slate-900/80",
      "border": "border-sky-800/50",
      "glow": "shadow-[0_0_15px_rgba(14,165,233,0.1)]",
      "text": "text-sky-400",
      "accent": "bg-sky-500/10 text-sky-300 border-sky-500/30"
    }
  },
  {
    "id": "fire_shield",
    "name": "Escudo de fuego",
    "school": "Fuego",
    "type": "Avanzada",
    "effect": "En Curso: Cuando la unidad objetivo sufra un ataque de una unidad adyacente durante esta ronda de combate, la unidad atacante recibe:",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Fuego).",
    "isBoostable": true,
    "powerLevels": {
      "0": "1 Herida.",
      "2": "2 Heridas.",
      "4": "3 Heridas."
    },
    "boosterEffect": "Instantáneo: +1 Poder",
    "flavorText": "Un hechizo místico de la Escuela de Fuego codificado en los sagrados pergaminos de Erathia.",
    "notes": "La unidad atacante es dañada por el Escudo de Fuego incluso si derrota a la unidad que tiene Escudo de Fuego.",
    "colorTheme": {
      "bg": "from-red-950/40 to-slate-900/80",
      "border": "border-red-800/50",
      "glow": "shadow-[0_0_15px_rgba(239,68,68,0.1)]",
      "text": "text-red-400",
      "accent": "bg-red-500/10 text-red-300 border-red-500/30"
    }
  },
  {
    "id": "fire_wall",
    "name": "Muro de fuego",
    "school": "Fuego",
    "type": "Básica",
    "effect": "En Curso: Durante este combate, coloca esta carta en un espacio vacío del tablero de combate. Inflige * a cualquier unidad que se detenga aquí y a cualquier unidad Melé o a Distancia que pase por aquí.",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Fuego).",
    "isBoostable": true,
    "powerLevels": {
      "0": "* 1 Herida.",
      "2": "* 2 Heridas.",
      "4": "* 3 Heridas."
    },
    "boosterEffect": "Instantáneo: +1 Poder",
    "flavorText": "Un hechizo místico de la Escuela de Fuego codificado en los sagrados pergaminos de Erathia.",
    "notes": "1 En el campo de batalla grande, se coloca una ficha de Muro de Fuego en el campo de batalla en lugar de la carta.",
    "colorTheme": {
      "bg": "from-red-950/40 to-slate-900/80",
      "border": "border-red-800/50",
      "glow": "shadow-[0_0_15px_rgba(239,68,68,0.1)]",
      "text": "text-red-400",
      "accent": "bg-red-500/10 text-red-300 border-red-500/30"
    }
  },
  {
    "id": "fireball",
    "name": "Bola de fuego",
    "school": "Fuego",
    "type": "Avanzada",
    "effect": "Activación: Selecciona 2 espacios adyacentes. Inflige * Heridas a las unidades en estos espacios.",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Fuego).",
    "isBoostable": true,
    "powerLevels": {
      "0": "* 1 Herida.",
      "2": "* 2 Heridas.",
      "4": "* 3 Heridas."
    },
    "boosterEffect": "Instantáneo: +1 Poder",
    "flavorText": "Una esfera de fuego abrasador explota al impactar, quemando múltiples regimientos.",
    "notes": "El <damage> de la Bola de Fuego también se aplica a las unidades aliadas.",
    "colorTheme": {
      "bg": "from-red-950/40 to-slate-900/80",
      "border": "border-red-800/50",
      "glow": "shadow-[0_0_15px_rgba(239,68,68,0.1)]",
      "text": "text-red-400",
      "accent": "bg-red-500/10 text-red-300 border-red-500/30"
    }
  },
  {
    "id": "fly",
    "name": "Vuelo",
    "school": "Aire",
    "type": "Avanzada",
    "effect": "En Curso: Durante este turno, tu héroe puede atravesar zonas bloqueadas (pero no puede acabar su movimiento en ellas) y:",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Aire).",
    "isBoostable": true,
    "powerLevels": {
      "0": "Sin efecto adicional.",
      "2": "+1 Punto de Movimiento.",
      "4": "+2 Puntos de Movimiento."
    },
    "boosterEffect": "Instantáneo: +1 Poder",
    "flavorText": "Un hechizo místico de la Escuela de Aire codificado en los sagrados pergaminos de Erathia.",
    "notes": "Sigue las reglas generales de lanzamiento descritas en el manual oficial.",
    "colorTheme": {
      "bg": "from-cyan-950/40 to-slate-900/80",
      "border": "border-cyan-800/50",
      "glow": "shadow-[0_0_15px_rgba(6,182,212,0.1)]",
      "text": "text-cyan-400",
      "accent": "bg-cyan-500/10 text-cyan-300 border-cyan-500/30"
    }
  },
  {
    "id": "force_field",
    "name": "Campo de fuerza",
    "school": "Tierra",
    "type": "Básica",
    "effect": "En Curso: Coloca 1 ficha de campo de fuerza sobre un espacio vacío. Cuenta como un obstáculo hasta el final de:",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Tierra).",
    "isBoostable": true,
    "powerLevels": {
      "0": "Esta ronda de combate.",
      "1": "La siguiente ronda de combate.",
      "2": "Este combate."
    },
    "boosterEffect": "Instantáneo: +1 Poder",
    "flavorText": "Un hechizo místico de la Escuela de Tierra codificado en los sagrados pergaminos de Erathia.",
    "notes": "Sigue las reglas generales de lanzamiento descritas en el manual oficial.",
    "colorTheme": {
      "bg": "from-emerald-950/40 to-slate-900/80",
      "border": "border-emerald-800/50",
      "glow": "shadow-[0_0_15px_rgba(16,185,129,0.1)]",
      "text": "text-emerald-400",
      "accent": "bg-emerald-500/10 text-emerald-300 border-emerald-500/30"
    }
  },
  {
    "id": "forgetfulness",
    "name": "Olvido",
    "school": "Agua",
    "type": "Básica",
    "effect": "En Curso: Durante su próxima activación, una unidad A Distancia * de tu elección no puede Atacar.",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Agua).",
    "isBoostable": true,
    "powerLevels": {
      "0": "* Bronce.",
      "1": "* Bronce o Plata.",
      "2": "* Bronce o Plata u Oro."
    },
    "boosterEffect": "Instantáneo: +1 Poder",
    "flavorText": "Un hechizo místico de la Escuela de Agua codificado en los sagrados pergaminos de Erathia.",
    "notes": "Sigue las reglas generales de lanzamiento descritas en el manual oficial.",
    "colorTheme": {
      "bg": "from-sky-950/40 to-slate-900/80",
      "border": "border-sky-800/50",
      "glow": "shadow-[0_0_15px_rgba(14,165,233,0.1)]",
      "text": "text-sky-400",
      "accent": "bg-sky-500/10 text-sky-300 border-sky-500/30"
    }
  },
  {
    "id": "frenzy",
    "name": "Frenesí",
    "school": "Fuego",
    "type": "Avanzada",
    "effect": "Instantáneo: Esta unidad ignora la Defensa de la unidad * atacada.",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Fuego).",
    "isBoostable": true,
    "powerLevels": {
      "0": "* Bronce.",
      "2": "* Bronce o Plata.",
      "4": "* Bronce o Plata u Oro."
    },
    "boosterEffect": "Instantáneo: +1 Poder",
    "flavorText": "Un hechizo místico de la Escuela de Fuego codificado en los sagrados pergaminos de Erathia.",
    "notes": "Sigue las reglas generales de lanzamiento descritas en el manual oficial.",
    "colorTheme": {
      "bg": "from-red-950/40 to-slate-900/80",
      "border": "border-red-800/50",
      "glow": "shadow-[0_0_15px_rgba(239,68,68,0.1)]",
      "text": "text-red-400",
      "accent": "bg-red-500/10 text-red-300 border-red-500/30"
    }
  },
  {
    "id": "frost_ring",
    "name": "Anillo gélido",
    "school": "Agua",
    "type": "Avanzada",
    "effect": "Activación: Elige como objetivo una casilla en el tablero de combate, 2 unidades adyacentes a este espacio sufren:",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Agua).",
    "isBoostable": true,
    "powerLevels": {
      "0": "1 Herida.",
      "2": "2 Heridas.",
      "4": "3 Heridas."
    },
    "boosterEffect": "Instantáneo: +1 Poder",
    "flavorText": "Un hechizo místico de la Escuela de Agua codificado en los sagrados pergaminos de Erathia.",
    "notes": "El <damage> de Anillo Helado también afecta a unidades aliadas.",
    "colorTheme": {
      "bg": "from-sky-950/40 to-slate-900/80",
      "border": "border-sky-800/50",
      "glow": "shadow-[0_0_15px_rgba(14,165,233,0.1)]",
      "text": "text-sky-400",
      "accent": "bg-sky-500/10 text-sky-300 border-sky-500/30"
    }
  },
  {
    "id": "haste",
    "name": "Celeridad",
    "school": "Aire",
    "type": "Básica",
    "effect": "En Curso: Hasta el final del combate, la unidad seleccionada gana:",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Aire).",
    "isBoostable": true,
    "powerLevels": {
      "0": "+1 Iniciativa.",
      "1": "+2 Iniciativa.",
      "2": "+3 Iniciativa."
    },
    "boosterEffect": "Instantáneo: +1 Poder",
    "flavorText": "Las corrientes de aire aceleran el paso de las tropas en el fragor de la batalla.",
    "notes": "1 En el campo de batalla pequeño, sólo aumenta la iniciativa de la unidad, no su rango de movimiento. En la Expansión de Campo de Batalla, la iniciativa se utiliza para determinar el alcance de movimiento, por lo que una unidad bajo este hechizo también ve aumentado su alcance de movimiento.",
    "colorTheme": {
      "bg": "from-cyan-950/40 to-slate-900/80",
      "border": "border-cyan-800/50",
      "glow": "shadow-[0_0_15px_rgba(6,182,212,0.1)]",
      "text": "text-cyan-400",
      "accent": "bg-cyan-500/10 text-cyan-300 border-cyan-500/30"
    }
  },
  {
    "id": "implosion",
    "name": "Implosión",
    "school": "Tierra",
    "type": "Avanzada",
    "effect": "Activación: La unidad seleccionada sufre:",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Tierra).",
    "isBoostable": true,
    "powerLevels": {
      "1": "2 Heridas.",
      "3": "4 Heridas.",
      "5": "6 Heridas."
    },
    "boosterEffect": "Instantáneo: +1 Poder",
    "flavorText": "Las fuerzas gravitacionales se colapsan sobre sí mismas, aplastando al objetivo de forma fulminante.",
    "notes": "Para jugar este hechizo, es necesario jugar también al menos un poder de hechizo.",
    "colorTheme": {
      "bg": "from-emerald-950/40 to-slate-900/80",
      "border": "border-emerald-800/50",
      "glow": "shadow-[0_0_15px_rgba(16,185,129,0.1)]",
      "text": "text-emerald-400",
      "accent": "bg-emerald-500/10 text-emerald-300 border-emerald-500/30"
    }
  },
  {
    "id": "inferno",
    "name": "Inferno",
    "school": "Fuego",
    "type": "Avanzada",
    "effect": "Activación: Selecciona un espacio. Ahora lanza un dado de ataque *. Todas las unidades en este espacio y espacios adyacentes sufren 1 Herida por cada +1 que hayas sacado.",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Fuego).",
    "isBoostable": true,
    "powerLevels": {
      "0": "* 1 vez.",
      "1": "* 2 veces.",
      "2": "* 4 veces."
    },
    "boosterEffect": "Instantáneo: +1 Poder",
    "flavorText": "Un hechizo místico de la Escuela de Fuego codificado en los sagrados pergaminos de Erathia.",
    "notes": "El: Daño: desde Inferno también se aplica a unidades amigables.",
    "colorTheme": {
      "bg": "from-red-950/40 to-slate-900/80",
      "border": "border-red-800/50",
      "glow": "shadow-[0_0_15px_rgba(239,68,68,0.1)]",
      "text": "text-red-400",
      "accent": "bg-red-500/10 text-red-300 border-red-500/30"
    }
  },
  {
    "id": "land_mine",
    "name": "Mina",
    "school": "Fuego",
    "type": "Avanzada",
    "effect": "En Curso: Baraja y coloca aleatoriamente hasta * fichas de mina en los espacios vacíos elegidos. Después, puedes dar la vuelta a las fichas para ver lo que hay en el otro lado.",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Fuego).",
    "isBoostable": true,
    "powerLevels": {
      "0": "2.",
      "1": "4.",
      "2": "6."
    },
    "boosterEffect": "Instantáneo: +1 Poder",
    "flavorText": "Un hechizo místico de la Escuela de Fuego codificado en los sagrados pergaminos de Erathia.",
    "notes": "Sigue las reglas generales de lanzamiento descritas en el manual oficial.",
    "colorTheme": {
      "bg": "from-red-950/40 to-slate-900/80",
      "border": "border-red-800/50",
      "glow": "shadow-[0_0_15px_rgba(239,68,68,0.1)]",
      "text": "text-red-400",
      "accent": "bg-red-500/10 text-red-300 border-red-500/30"
    }
  },
  {
    "id": "lightning_bolt",
    "name": "Relámpago",
    "school": "Aire",
    "type": "Básica",
    "effect": "Activación: La unidad seleccionada sufre:",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Aire).",
    "isBoostable": true,
    "powerLevels": {
      "0": "2 Heridas.",
      "1": "3 Heridas.",
      "2": "4 Heridas."
    },
    "boosterEffect": "Instantáneo: +1 Poder",
    "flavorText": "Un arco de electricidad pura desciende del cielo con un estallido ensordecedor.",
    "notes": "Sigue las reglas generales de lanzamiento descritas en el manual oficial.",
    "colorTheme": {
      "bg": "from-cyan-950/40 to-slate-900/80",
      "border": "border-cyan-800/50",
      "glow": "shadow-[0_0_15px_rgba(6,182,212,0.1)]",
      "text": "text-cyan-400",
      "accent": "bg-cyan-500/10 text-cyan-300 border-cyan-500/30"
    }
  },
  {
    "id": "magic_arrow",
    "name": "Flecha mágica",
    "school": "Todos",
    "isAllSchools": true,
    "type": "Básica",
    "effect": "Activación: La unidad seleccionada sufre:",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado.",
    "isBoostable": true,
    "powerLevels": {
      "0": "1 Herida.",
      "1": "2 Heridas.",
      "2": "3 Heridas (Máximo)."
    },
    "boosterEffect": "Instantáneo: +1 Poder",
    "flavorText": "El hechizo de combate por excelencia. Canaliza energía elemental bruta en forma de un proyectil mágico.",
    "notes": "Flecha mágica pertenece a las 4 escuelas de magia: Aire, Agua, Fuego y Tierra, pero solo puede verse afectada por una de ellas. El lanzador del hechizo debe escoger la escuela de magia que imbuirá a Flecha mágica antes de lanzarlo.",
    "colorTheme": {
      "bg": "from-slate-905 to-slate-900",
      "border": "border-slate-700/80",
      "glow": "shadow-[0_0_15px_rgba(251,191,36,0.15)]",
      "text": "text-amber-400",
      "accent": "bg-amber-500/10 text-amber-300 border-amber-500/30"
    }
  },
  {
    "id": "magic_mirror",
    "name": "Espejo mágico",
    "school": "Aire",
    "type": "Avanzada",
    "effect": "Instantáneo: Cuando tu unidad * esté a punto de ser atacada o dañada por un Hechizo, elige un nuevo objetivo para ese Hechizo.",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Aire).",
    "isBoostable": true,
    "powerLevels": {
      "0": "* Bronce.",
      "1": "* Bronce o Plata.",
      "2": "* Bronce o Plata u Oro."
    },
    "boosterEffect": "Instantáneo: +1 Poder",
    "flavorText": "Un hechizo místico de la Escuela de Aire codificado en los sagrados pergaminos de Erathia.",
    "notes": "Sigue las reglas generales de lanzamiento descritas en el manual oficial.",
    "colorTheme": {
      "bg": "from-cyan-950/40 to-slate-900/80",
      "border": "border-cyan-800/50",
      "glow": "shadow-[0_0_15px_rgba(6,182,212,0.1)]",
      "text": "text-cyan-400",
      "accent": "bg-cyan-500/10 text-cyan-300 border-cyan-500/30"
    }
  },
  {
    "id": "mirth",
    "name": "Alborozo",
    "school": "Agua",
    "type": "Avanzada",
    "effect": "En Curso: Puedes volver a lanzar una vez cada uno de tus dados de ataque. Durante:",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Agua).",
    "isBoostable": true,
    "powerLevels": {
      "0": "Esta activación.",
      "2": "Esta ronda de combate.",
      "4": "Este combate."
    },
    "boosterEffect": "Instantáneo: +1 Poder",
    "flavorText": "Un hechizo místico de la Escuela de Agua codificado en los sagrados pergaminos de Erathia.",
    "notes": "Sigue las reglas generales de lanzamiento descritas en el manual oficial.",
    "colorTheme": {
      "bg": "from-sky-950/40 to-slate-900/80",
      "border": "border-sky-800/50",
      "glow": "shadow-[0_0_15px_rgba(14,165,233,0.1)]",
      "text": "text-sky-400",
      "accent": "bg-sky-500/10 text-sky-300 border-sky-500/30"
    }
  },
  {
    "id": "misfortune",
    "name": "Infortunio",
    "school": "Fuego",
    "type": "Básica",
    "effect": "Instantáneo: Se activa inmediatamente cuando la * unidad enemiga seleccionada está atacando. Anula un resultado del dado de ataque o un Ataque adicional de cualquier carta.",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Fuego).",
    "isBoostable": true,
    "powerLevels": {
      "0": "* Bronce.",
      "1": "* Bronce o Plata.",
      "2": "* Bronce o Plata u Oro."
    },
    "boosterEffect": "Instantáneo: +1 Poder",
    "flavorText": "Un hechizo místico de la Escuela de Fuego codificado en los sagrados pergaminos de Erathia.",
    "notes": "La carta debe jugarse inmediatamente después de declarar el ataque, antes de que se jueguen otras cartas. El resultado del ataque de ataque se niega, * así como * todos los efectos futuros que aumentan el: Ataque: de la unidad de ataque. Misfortune can not be played to negate effects of cards that were already played and have already increased the <attack> of the attacking unit. The players should mutually agree if they can no longer play Misfortune after the other effects were played, or if the opponent gets to take his played <attack> -enhancing cards back into their hand.",
    "colorTheme": {
      "bg": "from-red-950/40 to-slate-900/80",
      "border": "border-red-800/50",
      "glow": "shadow-[0_0_15px_rgba(239,68,68,0.1)]",
      "text": "text-red-400",
      "accent": "bg-red-500/10 text-red-300 border-red-500/30"
    }
  },
  {
    "id": "prayer",
    "name": "Plegaria",
    "school": "Agua",
    "type": "Avanzada",
    "effect": "Instantáneo: La unidad seleccionada gana * Ataque, Defensa o Iniciativa.",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Agua).",
    "isBoostable": true,
    "powerLevels": {
      "0": "* +1.",
      "2": "* +2.",
      "4": "* +3."
    },
    "boosterEffect": "Instantáneo: +1 Poder",
    "flavorText": "Un hechizo místico de la Escuela de Agua codificado en los sagrados pergaminos de Erathia.",
    "notes": "La oración solo aumenta uno de los tres valores, el lanzador puede elegir cuál. La oración se puede lanzar en cualquier momento durante el combate como un instante .De esta manera, un jugador puede aumentar la iniciativa de una unidad fuera de su turno, lo que hace que la orden de giro se ajuste de inmediato.",
    "colorTheme": {
      "bg": "from-sky-950/40 to-slate-900/80",
      "border": "border-sky-800/50",
      "glow": "shadow-[0_0_15px_rgba(14,165,233,0.1)]",
      "text": "text-sky-400",
      "accent": "bg-sky-500/10 text-sky-300 border-sky-500/30"
    }
  },
  {
    "id": "precision",
    "name": "Precisión",
    "school": "Aire",
    "type": "Básica",
    "effect": "Instantáneo: Cuando ataques a una unidad no adyacente, la unidad A Distancia seleccionada ignora los penalizadores de combate y gana:",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Aire).",
    "isBoostable": true,
    "powerLevels": {
      "0": "+1 Ataque.",
      "1": "+2 Ataque.",
      "2": "+3 Ataque."
    },
    "boosterEffect": "Instantáneo: +1 Poder",
    "flavorText": "Un hechizo místico de la Escuela de Aire codificado en los sagrados pergaminos de Erathia.",
    "notes": "Sigue las reglas generales de lanzamiento descritas en el manual oficial.",
    "colorTheme": {
      "bg": "from-cyan-950/40 to-slate-900/80",
      "border": "border-cyan-800/50",
      "glow": "shadow-[0_0_15px_rgba(6,182,212,0.1)]",
      "text": "text-cyan-400",
      "accent": "bg-cyan-500/10 text-cyan-300 border-cyan-500/30"
    }
  },
  {
    "id": "protection_from_air",
    "name": "Protección de aire",
    "school": "Aire",
    "type": "Avanzada",
    "effect": "Instantáneo: Juega esta carta después de que se lance * de la escuela de magia de aire para ignorar el efecto de ese hechizo.",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Aire).",
    "isBoostable": true,
    "powerLevels": {
      "0": "* un hechizo básico.",
      "1": "* un hechizo básico o avanzado."
    },
    "boosterEffect": "Instantáneo: +1 Poder",
    "flavorText": "Un hechizo místico de la Escuela de Aire codificado en los sagrados pergaminos de Erathia.",
    "notes": "Sigue las reglas generales de lanzamiento descritas en el manual oficial.",
    "colorTheme": {
      "bg": "from-cyan-950/40 to-slate-900/80",
      "border": "border-cyan-800/50",
      "glow": "shadow-[0_0_15px_rgba(6,182,212,0.1)]",
      "text": "text-cyan-400",
      "accent": "bg-cyan-500/10 text-cyan-300 border-cyan-500/30"
    }
  },
  {
    "id": "protection_from_earth",
    "name": "Protección de tierra",
    "school": "Tierra",
    "type": "Avanzada",
    "effect": "Instantáneo: Juega esta carta después de que se lance * de la escuela de magia de tierra para ignorar el efecto de ese hechizo.",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Tierra).",
    "isBoostable": true,
    "powerLevels": {
      "0": "* un hechizo básico.",
      "1": "* un hechizo básico o avanzado."
    },
    "boosterEffect": "Instantáneo: +1 Poder",
    "flavorText": "Un hechizo místico de la Escuela de Tierra codificado en los sagrados pergaminos de Erathia.",
    "notes": "Sigue las reglas generales de lanzamiento descritas en el manual oficial.",
    "colorTheme": {
      "bg": "from-emerald-950/40 to-slate-900/80",
      "border": "border-emerald-800/50",
      "glow": "shadow-[0_0_15px_rgba(16,185,129,0.1)]",
      "text": "text-emerald-400",
      "accent": "bg-emerald-500/10 text-emerald-300 border-emerald-500/30"
    }
  },
  {
    "id": "protection_from_fire",
    "name": "Protección de fuego",
    "school": "Fuego",
    "type": "Avanzada",
    "effect": "Instantáneo: Juega esta carta después de que se lance * de la escuela de magia de fuego para ignorar el efecto de ese hechizo.",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Fuego).",
    "isBoostable": true,
    "powerLevels": {
      "0": "* un hechizo básico.",
      "1": "* un hechizo básico o avanzado."
    },
    "boosterEffect": "Instantáneo: +1 Poder",
    "flavorText": "Un hechizo místico de la Escuela de Fuego codificado en los sagrados pergaminos de Erathia.",
    "notes": "Sigue las reglas generales de lanzamiento descritas en el manual oficial.",
    "colorTheme": {
      "bg": "from-red-950/40 to-slate-900/80",
      "border": "border-red-800/50",
      "glow": "shadow-[0_0_15px_rgba(239,68,68,0.1)]",
      "text": "text-red-400",
      "accent": "bg-red-500/10 text-red-300 border-red-500/30"
    }
  },
  {
    "id": "protection_from_water",
    "name": "Protección de agua",
    "school": "Agua",
    "type": "Avanzada",
    "effect": "Instantáneo: Juega esta carta después de que se lance * de la escuela de magia de agua para ignorar el efecto de ese hechizo.",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Agua).",
    "isBoostable": true,
    "powerLevels": {
      "0": "* un hechizo básico.",
      "1": "* un hechizo básico o avanzado."
    },
    "boosterEffect": "Instantáneo: +1 Poder",
    "flavorText": "Un hechizo místico de la Escuela de Agua codificado en los sagrados pergaminos de Erathia.",
    "notes": "Sigue las reglas generales de lanzamiento descritas en el manual oficial.",
    "colorTheme": {
      "bg": "from-sky-950/40 to-slate-900/80",
      "border": "border-sky-800/50",
      "glow": "shadow-[0_0_15px_rgba(14,165,233,0.1)]",
      "text": "text-sky-400",
      "accent": "bg-sky-500/10 text-sky-300 border-sky-500/30"
    }
  },
  {
    "id": "quicksand",
    "name": "Arenas movedizas",
    "school": "Tierra",
    "type": "Básica",
    "effect": "En Curso: Baraja hasta * fichas de arenas movedizas y colócalas boca abajo en los espacios vacíos elegidos. Siempre podrás mirar tus fichas una vez colocadas.",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Tierra).",
    "isBoostable": true,
    "powerLevels": {
      "0": "* 2.",
      "1": "* 4.",
      "2": "* 6."
    },
    "boosterEffect": "Instantáneo: +1 Poder",
    "flavorText": "Un hechizo místico de la Escuela de Tierra codificado en los sagrados pergaminos de Erathia.",
    "notes": "Sigue las reglas generales de lanzamiento descritas en el manual oficial.",
    "colorTheme": {
      "bg": "from-emerald-950/40 to-slate-900/80",
      "border": "border-emerald-800/50",
      "glow": "shadow-[0_0_15px_rgba(16,185,129,0.1)]",
      "text": "text-emerald-400",
      "accent": "bg-emerald-500/10 text-emerald-300 border-emerald-500/30"
    }
  },
  {
    "id": "remove_obstacle",
    "name": "Retirar obstáculo",
    "school": "Agua",
    "type": "Básica",
    "effect": "Instantáneo: Retira * obstáculos (excepto unidades) del tablero de combate.",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Agua).",
    "isBoostable": true,
    "powerLevels": {
      "0": "* 1.",
      "1": "* 2.",
      "2": "* 3."
    },
    "boosterEffect": "Instantáneo: +1 Poder",
    "flavorText": "Un hechizo místico de la Escuela de Tierra codificado en los sagrados pergaminos de Erathia.",
    "notes": "Este hechizo no puede eliminar las unidades, a pesar de contar como obstáculos para fines de movimiento. Solo el muro, la puerta y los marcadores de obstáculos (en el gran campo de batalla) pueden eliminarse por este hechizo.",
    "colorTheme": {
      "bg": "from-emerald-950/40 to-slate-900/80",
      "border": "border-emerald-800/50",
      "glow": "shadow-[0_0_15px_rgba(16,185,129,0.1)]",
      "text": "text-emerald-400",
      "accent": "bg-emerald-500/10 text-emerald-300 border-emerald-500/30"
    }
  },
  {
    "id": "resurrection",
    "name": "Resurrección",
    "school": "Tierra",
    "type": "Avanzada",
    "effect": "Instantáneo: Cancela un ataque que vaya a reducir los Puntos de Salud de tu unidad * a 0. Puedes lanzar este hechizo inmediatamente después del ataque de la unidad enemiga.",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Tierra).",
    "isBoostable": true,
    "powerLevels": {
      "0": "* Bronce.",
      "2": "* Bronce o Plata.",
      "4": "* Bronce o PLata u Oro."
    },
    "boosterEffect": "Instantáneo: +1 Poder",
    "flavorText": "El poder curativo de la tierra restaura la fuerza vital de los guerreros caídos.",
    "notes": "Solo el daño de un ataque puede ser anulado.Si los puntos de salud se reducen por otros medios de daño (como habilidades, hechizos, especialidades, etc.), no se puede jugar la resurrección. Si el daño de un ataque se anula, la unidad resucitada no tomará represalias, incluso si no ha realizado una represalia en esta ronda.",
    "colorTheme": {
      "bg": "from-emerald-950/40 to-slate-900/80",
      "border": "border-emerald-800/50",
      "glow": "shadow-[0_0_15px_rgba(16,185,129,0.1)]",
      "text": "text-emerald-400",
      "accent": "bg-emerald-500/10 text-emerald-300 border-emerald-500/30"
    }
  },
  {
    "id": "sacrifice",
    "name": "Sacrificio",
    "school": "Fuego",
    "type": "Avanzada",
    "effect": "Activación: Elige 1 de tus unidades *. Puedes transferir hasta un máximo de Puntos de Salud de esta unidad a otra de tu ejército, tanto como sea necesario para que la otra unidad muera.",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Fuego).",
    "isBoostable": true,
    "powerLevels": {
      "0": "* Bronce.",
      "2": "* Bronce o Plata.",
      "4": "* Bronce o Plata u Oro."
    },
    "boosterEffect": "Instantáneo: +1 Poder",
    "flavorText": "Un hechizo místico de la Escuela de Fuego codificado en los sagrados pergaminos de Erathia.",
    "notes": "Sigue las reglas generales de lanzamiento descritas en el manual oficial.",
    "colorTheme": {
      "bg": "from-red-950/40 to-slate-900/80",
      "border": "border-red-800/50",
      "glow": "shadow-[0_0_15px_rgba(239,68,68,0.1)]",
      "text": "text-red-400",
      "accent": "bg-red-500/10 text-red-300 border-red-500/30"
    }
  },
  {
    "id": "shield",
    "name": "Escudo",
    "school": "Tierra",
    "type": "Básica",
    "effect": "Instantáneo: La unidad defensora gana * contra una unidad Terrestre o Voladora.",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Tierra).",
    "isBoostable": true,
    "powerLevels": {
      "0": "+1 Defensa.",
      "1": "+2 Defensa.",
      "2": "+3 Defensa."
    },
    "boosterEffect": "Instantáneo: +1 Poder",
    "flavorText": "Un escudo translúcido de energía pura amortigua los impactos físicos enemigos.",
    "notes": "Sigue las reglas generales de lanzamiento descritas en el manual oficial.",
    "colorTheme": {
      "bg": "from-emerald-950/40 to-slate-900/80",
      "border": "border-emerald-800/50",
      "glow": "shadow-[0_0_15px_rgba(16,185,129,0.1)]",
      "text": "text-emerald-400",
      "accent": "bg-emerald-500/10 text-emerald-300 border-emerald-500/30"
    }
  },
  {
    "id": "slayer",
    "name": "Matagigantes",
    "school": "Fuego",
    "type": "Avanzada",
    "effect": "Instantáneo: Cuando ataques a una unidad Oro, lanza un dado de ataque * y aplica todos los resultados (excepto un -1). Después de resolver este Ataque, roba 1 carta.",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Fuego).",
    "isBoostable": true,
    "powerLevels": {
      "0": "* 2 veces.",
      "2": "* 4 veces.",
      "4": "* 6 veces."
    },
    "boosterEffect": "Instantáneo: +1 Poder",
    "flavorText": "Un hechizo místico de la Escuela de Fuego codificado en los sagrados pergaminos de Erathia.",
    "notes": "Sigue las reglas generales de lanzamiento descritas en el manual oficial.",
    "colorTheme": {
      "bg": "from-red-950/40 to-slate-900/80",
      "border": "border-red-800/50",
      "glow": "shadow-[0_0_15px_rgba(239,68,68,0.1)]",
      "text": "text-red-400",
      "accent": "bg-red-500/10 text-red-300 border-red-500/30"
    }
  },
  {
    "id": "slow",
    "name": "Lentitud",
    "school": "Tierra",
    "type": "Básica",
    "effect": "En Curso: Hasta el final del combate, la unidad seleccionada sufre:",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Tierra).",
    "isBoostable": true,
    "powerLevels": {
      "0": "-1 Iniciativa.",
      "1": "-2 Iniciativa.",
      "2": "-3 Iniciativa."
    },
    "boosterEffect": "Instantáneo: +1 Poder",
    "flavorText": "La tierra se aferra a los pies de tus enemigos, ralentizando cada uno de sus movimientos.",
    "notes": "1 En el pequeño campo de batalla, solo la iniciativa de la unidad disminuye, no su rango de movimiento.En la expansión del campo de batalla, la iniciativa se utiliza para determinar el rango de movimiento, por lo tanto, una unidad bajo este hechizo también tiene su rango de movimiento disminuido.",
    "colorTheme": {
      "bg": "from-emerald-950/40 to-slate-900/80",
      "border": "border-emerald-800/50",
      "glow": "shadow-[0_0_15px_rgba(16,185,129,0.1)]",
      "text": "text-emerald-400",
      "accent": "bg-emerald-500/10 text-emerald-300 border-emerald-500/30"
    }
  },
  {
    "id": "sorrow",
    "name": "Pesar",
    "school": "Tierra",
    "type": "Avanzada",
    "effect": "Instantáneo: Cuando una unidad * esté a punto de activarse, ignora su activación.",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Tierra).",
    "isBoostable": true,
    "powerLevels": {
      "0": "* Bronce.",
      "2": "* Bronce o Plata.",
      "4": "* Bronce o Plata u Oro."
    },
    "boosterEffect": "Instantáneo: +1 Poder",
    "flavorText": "Un hechizo místico de la Escuela de Tierra codificado en los sagrados pergaminos de Erathia.",
    "notes": "Sigue las reglas generales de lanzamiento descritas en el manual oficial.",
    "colorTheme": {
      "bg": "from-emerald-950/40 to-slate-900/80",
      "border": "border-emerald-800/50",
      "glow": "shadow-[0_0_15px_rgba(16,185,129,0.1)]",
      "text": "text-emerald-400",
      "accent": "bg-emerald-500/10 text-emerald-300 border-emerald-500/30"
    }
  },
  {
    "id": "stone_skin",
    "name": "Piel de piedra",
    "school": "Tierra",
    "type": "Básica",
    "effect": "Instantáneo: La unidad seleccionada gana:",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Tierra).",
    "isBoostable": true,
    "powerLevels": {
      "0": "+1 Defensa.",
      "1": "+2 Defensa.",
      "2": "+3 Defensa."
    },
    "boosterEffect": "Instantáneo: +1 Poder",
    "flavorText": "La piel del objetivo adquiere la dureza del granito, absorbiendo con facilidad los golpes.",
    "notes": "Sigue las reglas generales de lanzamiento descritas en el manual oficial.",
    "colorTheme": {
      "bg": "from-emerald-950/40 to-slate-900/80",
      "border": "border-emerald-800/50",
      "glow": "shadow-[0_0_15px_rgba(16,185,129,0.1)]",
      "text": "text-emerald-400",
      "accent": "bg-emerald-500/10 text-emerald-300 border-emerald-500/30"
    }
  },
  {
    "id": "summon_air_elemental",
    "name": "Invocar elemental de aire",
    "school": "Aire",
    "type": "Avanzada",
    "effect": "Activación: En un espacio vacío que elijas:",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Aire).",
    "isBoostable": true,
    "powerLevels": {
      "0": "Sin efecto.",
      "2": "Invocar unos pocos elementales de aire.",
      "4": "Invocar una manada de elementales de aire."
    },
    "boosterEffect": "Instantáneo: +1 Poder",
    "flavorText": "Un hechizo místico de la Escuela de Aire codificado en los sagrados pergaminos de Erathia.",
    "notes": "Sigue las reglas generales de lanzamiento descritas en el manual oficial.",
    "colorTheme": {
      "bg": "from-cyan-950/40 to-slate-900/80",
      "border": "border-cyan-800/50",
      "glow": "shadow-[0_0_15px_rgba(6,182,212,0.1)]",
      "text": "text-cyan-400",
      "accent": "bg-cyan-500/10 text-cyan-300 border-cyan-500/30"
    }
  },
  {
    "id": "summon_earth_elemental",
    "name": "Invocar elemental de tierra",
    "school": "Tierra",
    "type": "Avanzada",
    "effect": "Activación: En un espacio vacío que elijas:",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Tierra).",
    "isBoostable": true,
    "powerLevels": {
      "0": "Sin efecto.",
      "2": "Invocar unos pocos elementales de tierra.",
      "4": "Invocar una manada de elementales de tierra."
    },
    "boosterEffect": "Instantáneo: +1 Poder",
    "flavorText": "Un hechizo místico de la Escuela de Tierra codificado en los sagrados pergaminos de Erathia.",
    "notes": "Sigue las reglas generales de lanzamiento descritas en el manual oficial.",
    "colorTheme": {
      "bg": "from-emerald-950/40 to-slate-900/80",
      "border": "border-emerald-800/50",
      "glow": "shadow-[0_0_15px_rgba(16,185,129,0.1)]",
      "text": "text-emerald-400",
      "accent": "bg-emerald-500/10 text-emerald-300 border-emerald-500/30"
    }
  },
  {
    "id": "summon_fire_elemental",
    "name": "Invocar elemental de fuego",
    "school": "Fuego",
    "type": "Avanzada",
    "effect": "Activación: En un espacio vacío que elijas:",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Fuego).",
    "isBoostable": true,
    "powerLevels": {
      "0": "Sin efecto.",
      "2": "Invocar unos pocos elementales de fuego.",
      "4": "Invocar una manada de elementales de fuego."
    },
    "boosterEffect": "Instantáneo: +1 Poder",
    "flavorText": "Un hechizo místico de la Escuela de Fuego codificado en los sagrados pergaminos de Erathia.",
    "notes": "Sigue las reglas generales de lanzamiento descritas en el manual oficial.",
    "colorTheme": {
      "bg": "from-red-950/40 to-slate-900/80",
      "border": "border-red-800/50",
      "glow": "shadow-[0_0_15px_rgba(239,68,68,0.1)]",
      "text": "text-red-400",
      "accent": "bg-red-500/10 text-red-300 border-red-500/30"
    }
  },
  {
    "id": "summon_water_elemental",
    "name": "Invocar elemental de agua",
    "school": "Agua",
    "type": "Avanzada",
    "effect": "Activación: En un espacio vacío que elijas:",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Agua).",
    "isBoostable": true,
    "powerLevels": {
      "0": "Sin efecto.",
      "2": "Invocar unos pocos elementales de agua.",
      "4": "Invocar una manada de elementales de agua."
    },
    "boosterEffect": "Instantáneo: +1 Poder",
    "flavorText": "Un hechizo místico de la Escuela de Agua codificado en los sagrados pergaminos de Erathia.",
    "notes": "Sigue las reglas generales de lanzamiento descritas en el manual oficial.",
    "colorTheme": {
      "bg": "from-sky-950/40 to-slate-900/80",
      "border": "border-sky-800/50",
      "glow": "shadow-[0_0_15px_rgba(14,165,233,0.1)]",
      "text": "text-sky-400",
      "accent": "bg-sky-500/10 text-sky-300 border-sky-500/30"
    }
  },
  {
    "id": "teleport",
    "name": "Teletransporte",
    "school": "Agua",
    "type": "Avanzada",
    "effect": "Activación: Durante el combate, mueve una unidad aliada * a cualquier espacio vacío, ignorando al moverse cualquier obstáculo o efecto.",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Agua).",
    "isBoostable": true,
    "powerLevels": {
      "0": "* Bronce.",
      "1": "* Bronce o Plata.",
      "2": "* Bronce o Plata u Oro."
    },
    "boosterEffect": "Instantáneo: +1 Poder",
    "flavorText": "Un hechizo místico de la Escuela de Agua codificado en los sagrados pergaminos de Erathia.",
    "notes": "Sigue las reglas generales de lanzamiento descritas en el manual oficial.",
    "colorTheme": {
      "bg": "from-sky-950/40 to-slate-900/80",
      "border": "border-sky-800/50",
      "glow": "shadow-[0_0_15px_rgba(14,165,233,0.1)]",
      "text": "text-sky-400",
      "accent": "bg-sky-500/10 text-sky-300 border-sky-500/30"
    }
  },
  {
    "id": "town_portal",
    "name": "Portal a la ciudad",
    "school": "Tierra",
    "type": "Avanzada",
    "effect": "Mapa: Mueve a tu héroe a cualquier ciudad o asentamiento que controles y:",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Tierra).",
    "isBoostable": true,
    "powerLevels": {
      "0": "Sin efecto adicional.",
      "2": "+1 Punto de Movimiento.",
      "4": "+2 Puntos de Movimientos."
    },
    "boosterEffect": "Instantáneo: +1 Poder",
    "flavorText": "Abre una fisura espacial que transporta instantáneamente al héroe de regreso al bastión aliado.",
    "notes": "1 Si la ciudad seleccionada ya tiene un héroe, y el héroe teletransportador no podría mudarse de la ciudad durante este turno, no pueden teletransportarse a la ciudad.",
    "colorTheme": {
      "bg": "from-emerald-950/40 to-slate-900/80",
      "border": "border-emerald-800/50",
      "glow": "shadow-[0_0_15px_rgba(16,185,129,0.1)]",
      "text": "text-emerald-400",
      "accent": "bg-emerald-500/10 text-emerald-300 border-emerald-500/30"
    }
  },
  {
    "id": "view_air",
    "name": "Ver aire",
    "school": "Aire",
    "type": "Básica",
    "effect": "Mapa: Gana:",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Aire).",
    "isBoostable": true,
    "powerLevels": {
      "0": "3 Oros.",
      "1": "2 Materiales de construcción.",
      "2": "1 Objeto de valor."
    },
    "boosterEffect": "Instantáneo: +1 Poder",
    "flavorText": "Un hechizo místico de la Escuela de Aire codificado en los sagrados pergaminos de Erathia.",
    "notes": "Sigue las reglas generales de lanzamiento descritas en el manual oficial.",
    "colorTheme": {
      "bg": "from-cyan-950/40 to-slate-900/80",
      "border": "border-cyan-800/50",
      "glow": "shadow-[0_0_15px_rgba(6,182,212,0.1)]",
      "text": "text-cyan-400",
      "accent": "bg-cyan-500/10 text-cyan-300 border-cyan-500/30"
    }
  },
  {
    "id": "view_earth",
    "name": "Ver tierra",
    "school": "Tierra",
    "type": "Básica",
    "effect": "Instantáneo: Elige una mina enemiga a * zonas.\nSustituye el cubo de su propietario por el tuyo.",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Tierra).",
    "isBoostable": true,
    "powerLevels": {
      "0": "* 1.",
      "1": "* 2.",
      "2": "* 3."
    },
    "boosterEffect": "Instantáneo: +1 Poder",
    "flavorText": "Un hechizo místico de la Escuela de Tierra codificado en los sagrados pergaminos de Erathia.",
    "notes": "Sigue las reglas generales de lanzamiento descritas en el manual oficial.",
    "colorTheme": {
      "bg": "from-emerald-950/40 to-slate-900/80",
      "border": "border-emerald-800/50",
      "glow": "shadow-[0_0_15px_rgba(16,185,129,0.1)]",
      "text": "text-emerald-400",
      "accent": "bg-emerald-500/10 text-emerald-300 border-emerald-500/30"
    }
  },
  {
    "id": "visions",
    "name": "Visiones",
    "school": "Fuego",
    "type": "Básica",
    "effect": "Instantáneo: Roba * de cualquier mazo de unidades neutrales. Descarta las que quieras y después devuelve el resto de cartas al mazo en cualquier orden.",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Fuego).",
    "isBoostable": true,
    "powerLevels": {
      "0": "* 1 carta.",
      "1": "* 2 cartas.",
      "2": "* 3 cartas."
    },
    "boosterEffect": "Instantáneo: +1 Poder",
    "flavorText": "Un hechizo místico de la Escuela de Fuego codificado en los sagrados pergaminos de Erathia.",
    "notes": "Sigue las reglas generales de lanzamiento descritas en el manual oficial.",
    "colorTheme": {
      "bg": "from-red-950/40 to-slate-900/80",
      "border": "border-red-800/50",
      "glow": "shadow-[0_0_15px_rgba(239,68,68,0.1)]",
      "text": "text-red-400",
      "accent": "bg-red-500/10 text-red-300 border-red-500/30"
    }
  },
  {
    "id": "water_walk",
    "name": "Paso acuático",
    "school": "Agua",
    "type": "Avanzada",
    "effect": "Mapa: Elige uno de tus héroes. Obtiene * y puede continuar su movimiento después de entrar en una zona de mar desde una zona de tierra.",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Agua).",
    "isBoostable": true,
    "powerLevels": {
      "0": "* +0 Puntos de Movimiento.",
      "1": "* +1 Punto de Movimiento.",
      "2": "* +2 Puntos de Movimiento."
    },
    "boosterEffect": "Instantáneo: +1 Poder",
    "flavorText": "Un hechizo místico de la Escuela de Agua codificado en los sagrados pergaminos de Erathia.",
    "notes": "Sigue las reglas generales de lanzamiento descritas en el manual oficial.",
    "colorTheme": {
      "bg": "from-sky-950/40 to-slate-900/80",
      "border": "border-sky-800/50",
      "glow": "shadow-[0_0_15px_rgba(14,165,233,0.1)]",
      "text": "text-sky-400",
      "accent": "bg-sky-500/10 text-sky-300 border-sky-500/30"
    }
  },
  {
    "id": "weakness",
    "name": "Debilidad",
    "school": "Agua",
    "type": "Básica",
    "effect": "Instantáneo: La unidad seleccionada sufre (hasta un mínimo de 0):",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Agua).",
    "isBoostable": true,
    "powerLevels": {
      "0": "-1 Ataque.",
      "1": "-2 Ataque.",
      "2": "-3 Ataque."
    },
    "boosterEffect": "Instantáneo: +1 Poder",
    "flavorText": "Un hechizo místico de la Escuela de Agua codificado en los sagrados pergaminos de Erathia.",
    "notes": "Sigue las reglas generales de lanzamiento descritas en el manual oficial.",
    "colorTheme": {
      "bg": "from-sky-950/40 to-slate-900/80",
      "border": "border-sky-800/50",
      "glow": "shadow-[0_0_15px_rgba(14,165,233,0.1)]",
      "text": "text-sky-400",
      "accent": "bg-sky-500/10 text-sky-300 border-sky-500/30"
    }
  }
];
