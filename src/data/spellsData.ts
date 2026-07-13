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
    "effect": "Continuo: Hasta el final del combate, la unidad seleccionada gana * cuando es atacada por una unidad a distancia.",
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
    "id": "berserk",
    "name": "Furia asesina",
    "school": "Fuego",
    "type": "Avanzada",
    "effect": "Continuo: Selecciona una unidad *. Durante su activación, la unidad debe atacar a la unidad más cercana o moverse hacia la unidad más cercana y atacarla.",
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
    "name": "Bendecir (Bless)",
    "school": "Agua",
    "type": "Básica",
    "effect": "Aumenta el daño físico de la unidad aliada seleccionada al máximo.",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Agua).",
    "isBoostable": false,
    "powerLevels": {
      "0": "Efecto estático: Este hechizo no aumenta con Poder.",
      "1": "Efecto estático: Este hechizo no aumenta con Poder.",
      "2": "Efecto estático: Este hechizo no aumenta con Poder.",
      "3": "Efecto estático: Este hechizo no aumenta con Poder.",
      "4": "Efecto estático: Este hechizo no aumenta con Poder.",
      "5": "Efecto estático: Este hechizo no aumenta con Poder."
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
    "name": "Cegar (Blind)",
    "school": "Fuego",
    "type": "Básica",
    "effect": "Ciega a la unidad enemiga, impidiendo que actúe o contraataque hasta que sea atacada.",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Fuego).",
    "isBoostable": false,
    "powerLevels": {
      "0": "Efecto estático: Este hechizo no aumenta con Poder.",
      "1": "Efecto estático: Este hechizo no aumenta con Poder.",
      "2": "Efecto estático: Este hechizo no aumenta con Poder.",
      "3": "Efecto estático: Este hechizo no aumenta con Poder.",
      "4": "Efecto estático: Este hechizo no aumenta con Poder.",
      "5": "Efecto estático: Este hechizo no aumenta con Poder."
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
    "name": "Ansia de sangre (Bloodlust)",
    "school": "Fuego",
    "type": "Básica",
    "effect": "Aplica efectos tácticos o estratégicos en la ronda de combate o mapa de aventura según el reglamento oficial.",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Fuego).",
    "isBoostable": false,
    "powerLevels": {
      "0": "Efecto estático: Este hechizo no aumenta con Poder.",
      "1": "Efecto estático: Este hechizo no aumenta con Poder.",
      "2": "Efecto estático: Este hechizo no aumenta con Poder.",
      "3": "Efecto estático: Este hechizo no aumenta con Poder.",
      "4": "Efecto estático: Este hechizo no aumenta con Poder.",
      "5": "Efecto estático: Este hechizo no aumenta con Poder."
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
    "id": "chain_lightning",
    "name": "Relámpago en Cadena (Chain Lightning)",
    "school": "Aire",
    "type": "Avanzada",
    "effect": "Descarga eléctrica en cadena que golpea secuencialmente a tres unidades adyacentes.",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Aire).",
    "isBoostable": false,
    "powerLevels": {
      "0": "Efecto estático: Este hechizo no aumenta con Poder.",
      "1": "Efecto estático: Este hechizo no aumenta con Poder.",
      "2": "Efecto estático: Este hechizo no aumenta con Poder.",
      "3": "Efecto estático: Este hechizo no aumenta con Poder.",
      "4": "Efecto estático: Este hechizo no aumenta con Poder.",
      "5": "Efecto estático: Este hechizo no aumenta con Poder."
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
    "id": "clone",
    "name": "Clon",
    "school": "Agua",
    "type": "Avanzada",
    "effect": "Continuo: Coloca una ficha de Clon sobre una unidad aliada * y otra en un espacio vacío adyacente a esa unidad. La unidad clonada actúa como la original pero solo tiene 1 Punto de Salud.",
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
    "id": "counterstrike",
    "name": "Contraataque (Counterstrike)",
    "school": "Tierra",
    "type": "Avanzada",
    "effect": "Aplica efectos tácticos o estratégicos en la ronda de combate o mapa de aventura según el reglamento oficial.",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Tierra).",
    "isBoostable": false,
    "powerLevels": {
      "0": "Efecto estático: Este hechizo no aumenta con Poder.",
      "1": "Efecto estático: Este hechizo no aumenta con Poder.",
      "2": "Efecto estático: Este hechizo no aumenta con Poder.",
      "3": "Efecto estático: Este hechizo no aumenta con Poder.",
      "4": "Efecto estático: Este hechizo no aumenta con Poder.",
      "5": "Efecto estático: Este hechizo no aumenta con Poder."
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
    "id": "cure",
    "name": "Curar (Cure)",
    "school": "Agua",
    "type": "Básica",
    "effect": "Elimina todos los efectos negativos y cura puntos de vida de la unidad seleccionada.",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Agua).",
    "isBoostable": false,
    "powerLevels": {
      "0": "Efecto estático: Este hechizo no aumenta con Poder.",
      "1": "Efecto estático: Este hechizo no aumenta con Poder.",
      "2": "Efecto estático: Este hechizo no aumenta con Poder.",
      "3": "Efecto estático: Este hechizo no aumenta con Poder.",
      "4": "Efecto estático: Este hechizo no aumenta con Poder.",
      "5": "Efecto estático: Este hechizo no aumenta con Poder."
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
    "name": "Maldición (Curse)",
    "school": "Fuego",
    "type": "Básica",
    "effect": "Reduce el daño físico de la unidad enemiga al mínimo.",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Fuego).",
    "isBoostable": false,
    "powerLevels": {
      "0": "Efecto estático: Este hechizo no aumenta con Poder.",
      "1": "Efecto estático: Este hechizo no aumenta con Poder.",
      "2": "Efecto estático: Este hechizo no aumenta con Poder.",
      "3": "Efecto estático: Este hechizo no aumenta con Poder.",
      "4": "Efecto estático: Este hechizo no aumenta con Poder.",
      "5": "Efecto estático: Este hechizo no aumenta con Poder."
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
    "id": "dimension_door",
    "name": "Puerta dimensional (Dimension Door)",
    "school": "Aire",
    "type": "Avanzada",
    "effect": "Hechizo de mapa. Permite teletransportar al héroe a una loseta adyacente del mapa de aventura.",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Aire).",
    "isBoostable": false,
    "powerLevels": {
      "0": "Efecto estático: Este hechizo no aumenta con Poder.",
      "1": "Efecto estático: Este hechizo no aumenta con Poder.",
      "2": "Efecto estático: Este hechizo no aumenta con Poder.",
      "3": "Efecto estático: Este hechizo no aumenta con Poder.",
      "4": "Efecto estático: Este hechizo no aumenta con Poder.",
      "5": "Efecto estático: Este hechizo no aumenta con Poder."
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
    "id": "dispel",
    "name": "Disipar (Dispel)",
    "school": "Agua",
    "type": "Básica",
    "effect": "Aplica efectos tácticos o estratégicos en la ronda de combate o mapa de aventura según el reglamento oficial.",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Agua).",
    "isBoostable": false,
    "powerLevels": {
      "0": "Efecto estático: Este hechizo no aumenta con Poder.",
      "1": "Efecto estático: Este hechizo no aumenta con Poder.",
      "2": "Efecto estático: Este hechizo no aumenta con Poder.",
      "3": "Efecto estático: Este hechizo no aumenta con Poder.",
      "4": "Efecto estático: Este hechizo no aumenta con Poder.",
      "5": "Efecto estático: Este hechizo no aumenta con Poder."
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
    "id": "disrupting_ray",
    "name": "Rayo disruptor (Disrupting Ray)",
    "school": "Tierra",
    "type": "Básica",
    "effect": "Aplica efectos tácticos o estratégicos en la ronda de combate o mapa de aventura según el reglamento oficial.",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Tierra).",
    "isBoostable": false,
    "powerLevels": {
      "0": "Efecto estático: Este hechizo no aumenta con Poder.",
      "1": "Efecto estático: Este hechizo no aumenta con Poder.",
      "2": "Efecto estático: Este hechizo no aumenta con Poder.",
      "3": "Efecto estático: Este hechizo no aumenta con Poder.",
      "4": "Efecto estático: Este hechizo no aumenta con Poder.",
      "5": "Efecto estático: Este hechizo no aumenta con Poder."
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
    "id": "earthquake",
    "name": "Terremoto (Earthquake)",
    "school": "Tierra",
    "type": "Básica",
    "effect": "Aplica efectos tácticos o estratégicos en la ronda de combate o mapa de aventura según el reglamento oficial.",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Tierra).",
    "isBoostable": false,
    "powerLevels": {
      "0": "Efecto estático: Este hechizo no aumenta con Poder.",
      "1": "Efecto estático: Este hechizo no aumenta con Poder.",
      "2": "Efecto estático: Este hechizo no aumenta con Poder.",
      "3": "Efecto estático: Este hechizo no aumenta con Poder.",
      "4": "Efecto estático: Este hechizo no aumenta con Poder.",
      "5": "Efecto estático: Este hechizo no aumenta con Poder."
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
    "id": "fire_shield",
    "name": "Escudo de fuego (Fire Shield)",
    "school": "Fuego",
    "type": "Avanzada",
    "effect": "Aplica efectos tácticos o estratégicos en la ronda de combate o mapa de aventura según el reglamento oficial.",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Fuego).",
    "isBoostable": false,
    "powerLevels": {
      "0": "Efecto estático: Este hechizo no aumenta con Poder.",
      "1": "Efecto estático: Este hechizo no aumenta con Poder.",
      "2": "Efecto estático: Este hechizo no aumenta con Poder.",
      "3": "Efecto estático: Este hechizo no aumenta con Poder.",
      "4": "Efecto estático: Este hechizo no aumenta con Poder.",
      "5": "Efecto estático: Este hechizo no aumenta con Poder."
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
    "name": "Muro de fuego (Fire Wall)",
    "school": "Fuego",
    "type": "Básica",
    "effect": "Crea una barrera de fuego en la reja de batalla que daña a quienes la comiencen o crucen.",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Fuego).",
    "isBoostable": false,
    "powerLevels": {
      "0": "Efecto estático: Este hechizo no aumenta con Poder.",
      "1": "Efecto estático: Este hechizo no aumenta con Poder.",
      "2": "Efecto estático: Este hechizo no aumenta con Poder.",
      "3": "Efecto estático: Este hechizo no aumenta con Poder.",
      "4": "Efecto estático: Este hechizo no aumenta con Poder.",
      "5": "Efecto estático: Este hechizo no aumenta con Poder."
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
    "name": "Bola de fuego (Fireball)",
    "school": "Fuego",
    "type": "Avanzada",
    "effect": "Lanza una bola de fuego explosiva que daña a todas las unidades en un área de efecto.",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Fuego).",
    "isBoostable": false,
    "powerLevels": {
      "0": "Efecto estático: Este hechizo no aumenta con Poder.",
      "1": "Efecto estático: Este hechizo no aumenta con Poder.",
      "2": "Efecto estático: Este hechizo no aumenta con Poder.",
      "3": "Efecto estático: Este hechizo no aumenta con Poder.",
      "4": "Efecto estático: Este hechizo no aumenta con Poder.",
      "5": "Efecto estático: Este hechizo no aumenta con Poder."
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
    "name": "Volar (Fly)",
    "school": "Aire",
    "type": "Avanzada",
    "effect": "Hechizo de mapa. Permite al héroe cruzar obstáculos intransitables y terrenos difíciles volando.",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Aire).",
    "isBoostable": false,
    "powerLevels": {
      "0": "Efecto estático: Este hechizo no aumenta con Poder.",
      "1": "Efecto estático: Este hechizo no aumenta con Poder.",
      "2": "Efecto estático: Este hechizo no aumenta con Poder.",
      "3": "Efecto estático: Este hechizo no aumenta con Poder.",
      "4": "Efecto estático: Este hechizo no aumenta con Poder.",
      "5": "Efecto estático: Este hechizo no aumenta con Poder."
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
    "effect": "Continuo: Coloca 1 ficha de campo de fuerza sobre un espacio vacío. Cuenta como un obstáculo hasta el final de:",
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
    "name": "Olvido (Forgetfulness)",
    "school": "Agua",
    "type": "Básica",
    "effect": "Aplica efectos tácticos o estratégicos en la ronda de combate o mapa de aventura según el reglamento oficial.",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Agua).",
    "isBoostable": false,
    "powerLevels": {
      "0": "Efecto estático: Este hechizo no aumenta con Poder.",
      "1": "Efecto estático: Este hechizo no aumenta con Poder.",
      "2": "Efecto estático: Este hechizo no aumenta con Poder.",
      "3": "Efecto estático: Este hechizo no aumenta con Poder.",
      "4": "Efecto estático: Este hechizo no aumenta con Poder.",
      "5": "Efecto estático: Este hechizo no aumenta con Poder."
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
    "id": "fortune",
    "name": "Fortuna (Fortune)",
    "school": "Tierra",
    "type": "Básica",
    "effect": "Aplica efectos tácticos o estratégicos en la ronda de combate o mapa de aventura según el reglamento oficial.",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Tierra).",
    "isBoostable": false,
    "powerLevels": {
      "0": "Efecto estático: Este hechizo no aumenta con Poder.",
      "1": "Efecto estático: Este hechizo no aumenta con Poder.",
      "2": "Efecto estático: Este hechizo no aumenta con Poder.",
      "3": "Efecto estático: Este hechizo no aumenta con Poder.",
      "4": "Efecto estático: Este hechizo no aumenta con Poder.",
      "5": "Efecto estático: Este hechizo no aumenta con Poder."
    },
    "boosterEffect": "Instantáneo: +1 Poder",
    "flavorText": "Un hechizo místico de la Escuela de Tierra codificado en los sagrados pergaminos de Erathia.",
    "notes": "Esta carta debe jugarse antes de lanzar el dado. No puede jugarse después de haber tirado el dado y de conocer el resultado de la tirada.",
    "colorTheme": {
      "bg": "from-emerald-950/40 to-slate-900/80",
      "border": "border-emerald-800/50",
      "glow": "shadow-[0_0_15px_rgba(16,185,129,0.1)]",
      "text": "text-emerald-400",
      "accent": "bg-emerald-500/10 text-emerald-300 border-emerald-500/30"
    }
  },
  {
    "id": "frenzy",
    "name": "Frenesí (Frenzy)",
    "school": "Fuego",
    "type": "Avanzada",
    "effect": "Aplica efectos tácticos o estratégicos en la ronda de combate o mapa de aventura según el reglamento oficial.",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Fuego).",
    "isBoostable": false,
    "powerLevels": {
      "0": "Efecto estático: Este hechizo no aumenta con Poder.",
      "1": "Efecto estático: Este hechizo no aumenta con Poder.",
      "2": "Efecto estático: Este hechizo no aumenta con Poder.",
      "3": "Efecto estático: Este hechizo no aumenta con Poder.",
      "4": "Efecto estático: Este hechizo no aumenta con Poder.",
      "5": "Efecto estático: Este hechizo no aumenta con Poder."
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
    "name": "Anillo de frío (Frost Ring)",
    "school": "Agua",
    "type": "Avanzada",
    "effect": "Aplica efectos tácticos o estratégicos en la ronda de combate o mapa de aventura según el reglamento oficial.",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Agua).",
    "isBoostable": false,
    "powerLevels": {
      "0": "Efecto estático: Este hechizo no aumenta con Poder.",
      "1": "Efecto estático: Este hechizo no aumenta con Poder.",
      "2": "Efecto estático: Este hechizo no aumenta con Poder.",
      "3": "Efecto estático: Este hechizo no aumenta con Poder.",
      "4": "Efecto estático: Este hechizo no aumenta con Poder.",
      "5": "Efecto estático: Este hechizo no aumenta con Poder."
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
    "name": "Celeridad (Haste)",
    "school": "Aire",
    "type": "Básica",
    "effect": "Hasta el final del combate, incrementa la iniciativa de la unidad seleccionada.",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Aire).",
    "isBoostable": false,
    "powerLevels": {
      "0": "Efecto estático: Este hechizo no aumenta con Poder.",
      "1": "Efecto estático: Este hechizo no aumenta con Poder.",
      "2": "Efecto estático: Este hechizo no aumenta con Poder.",
      "3": "Efecto estático: Este hechizo no aumenta con Poder.",
      "4": "Efecto estático: Este hechizo no aumenta con Poder.",
      "5": "Efecto estático: Este hechizo no aumenta con Poder."
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
    "name": "Implosión (Implosion)",
    "school": "Tierra",
    "type": "Avanzada",
    "effect": "Aplastamiento gravitacional masivo que causa un inmenso daño directo a una unidad.",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Tierra).",
    "isBoostable": false,
    "powerLevels": {
      "0": "Efecto estático: Este hechizo no aumenta con Poder.",
      "1": "Efecto estático: Este hechizo no aumenta con Poder.",
      "2": "Efecto estático: Este hechizo no aumenta con Poder.",
      "3": "Efecto estático: Este hechizo no aumenta con Poder.",
      "4": "Efecto estático: Este hechizo no aumenta con Poder.",
      "5": "Efecto estático: Este hechizo no aumenta con Poder."
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
    "name": "Infierno (Inferno)",
    "school": "Fuego",
    "type": "Avanzada",
    "effect": "Aplica efectos tácticos o estratégicos en la ronda de combate o mapa de aventura según el reglamento oficial.",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Fuego).",
    "isBoostable": false,
    "powerLevels": {
      "0": "Efecto estático: Este hechizo no aumenta con Poder.",
      "1": "Efecto estático: Este hechizo no aumenta con Poder.",
      "2": "Efecto estático: Este hechizo no aumenta con Poder.",
      "3": "Efecto estático: Este hechizo no aumenta con Poder.",
      "4": "Efecto estático: Este hechizo no aumenta con Poder.",
      "5": "Efecto estático: Este hechizo no aumenta con Poder."
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
    "effect": "Continuo: Baraja y coloca aleatoriamente hasta * fichas de mina en los espacios vacíos elegidos. Después, puedes dar la vuelta a las fichas para ver lo que hay en el otro lado.",
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
    "name": "Rayo (Lightning Bolt)",
    "school": "Aire",
    "type": "Básica",
    "effect": "Aplica efectos tácticos o estratégicos en la ronda de combate o mapa de aventura según el reglamento oficial.",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Aire).",
    "isBoostable": false,
    "powerLevels": {
      "0": "Efecto estático: Este hechizo no aumenta con Poder.",
      "1": "Efecto estático: Este hechizo no aumenta con Poder.",
      "2": "Efecto estático: Este hechizo no aumenta con Poder.",
      "3": "Efecto estático: Este hechizo no aumenta con Poder.",
      "4": "Efecto estático: Este hechizo no aumenta con Poder.",
      "5": "Efecto estático: Este hechizo no aumenta con Poder."
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
    "effect": "Activación: La unidad seleccionada sufre:.",
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
    "name": "Alegría (Mirth)",
    "school": "Agua",
    "type": "Avanzada",
    "effect": "Aplica efectos tácticos o estratégicos en la ronda de combate o mapa de aventura según el reglamento oficial.",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Agua).",
    "isBoostable": false,
    "powerLevels": {
      "0": "Efecto estático: Este hechizo no aumenta con Poder.",
      "1": "Efecto estático: Este hechizo no aumenta con Poder.",
      "2": "Efecto estático: Este hechizo no aumenta con Poder.",
      "3": "Efecto estático: Este hechizo no aumenta con Poder.",
      "4": "Efecto estático: Este hechizo no aumenta con Poder.",
      "5": "Efecto estático: Este hechizo no aumenta con Poder."
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
    "name": "Infortunio (Misfortune)",
    "school": "Fuego",
    "type": "Básica",
    "effect": "Aplica efectos tácticos o estratégicos en la ronda de combate o mapa de aventura según el reglamento oficial.",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Fuego).",
    "isBoostable": false,
    "powerLevels": {
      "0": "Efecto estático: Este hechizo no aumenta con Poder.",
      "1": "Efecto estático: Este hechizo no aumenta con Poder.",
      "2": "Efecto estático: Este hechizo no aumenta con Poder.",
      "3": "Efecto estático: Este hechizo no aumenta con Poder.",
      "4": "Efecto estático: Este hechizo no aumenta con Poder.",
      "5": "Efecto estático: Este hechizo no aumenta con Poder."
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
    "name": "Plegaria (Prayer)",
    "school": "Tierra",
    "type": "Avanzada",
    "effect": "Aplica efectos tácticos o estratégicos en la ronda de combate o mapa de aventura según el reglamento oficial.",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Tierra).",
    "isBoostable": false,
    "powerLevels": {
      "0": "Efecto estático: Este hechizo no aumenta con Poder.",
      "1": "Efecto estático: Este hechizo no aumenta con Poder.",
      "2": "Efecto estático: Este hechizo no aumenta con Poder.",
      "3": "Efecto estático: Este hechizo no aumenta con Poder.",
      "4": "Efecto estático: Este hechizo no aumenta con Poder.",
      "5": "Efecto estático: Este hechizo no aumenta con Poder."
    },
    "boosterEffect": "Instantáneo: +1 Poder",
    "flavorText": "Un hechizo místico de la Escuela de Tierra codificado en los sagrados pergaminos de Erathia.",
    "notes": "La oración solo aumenta uno de los tres valores, el lanzador puede elegir cuál. La oración se puede lanzar en cualquier momento durante el combate como un instante .De esta manera, un jugador puede aumentar la iniciativa de una unidad fuera de su turno, lo que hace que la orden de giro se ajuste de inmediato.",
    "colorTheme": {
      "bg": "from-emerald-950/40 to-slate-900/80",
      "border": "border-emerald-800/50",
      "glow": "shadow-[0_0_15px_rgba(16,185,129,0.1)]",
      "text": "text-emerald-400",
      "accent": "bg-emerald-500/10 text-emerald-300 border-emerald-500/30"
    }
  },
  {
    "id": "precision",
    "name": "Precisión (Precision)",
    "school": "Aire",
    "type": "Básica",
    "effect": "Aplica efectos tácticos o estratégicos en la ronda de combate o mapa de aventura según el reglamento oficial.",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Aire).",
    "isBoostable": false,
    "powerLevels": {
      "0": "Efecto estático: Este hechizo no aumenta con Poder.",
      "1": "Efecto estático: Este hechizo no aumenta con Poder.",
      "2": "Efecto estático: Este hechizo no aumenta con Poder.",
      "3": "Efecto estático: Este hechizo no aumenta con Poder.",
      "4": "Efecto estático: Este hechizo no aumenta con Poder.",
      "5": "Efecto estático: Este hechizo no aumenta con Poder."
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
    "effect": "Continuo: Baraja hasta * fichas de arenas movedizas y colócalas boca abajo en los espacios vacíos elegidos. Siempre podrás mirar tus fichas una vez colocadas.",
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
    "name": "Eliminar obstáculo (Remove Obstacle)",
    "school": "Tierra",
    "type": "Básica",
    "effect": "Aplica efectos tácticos o estratégicos en la ronda de combate o mapa de aventura según el reglamento oficial.",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Tierra).",
    "isBoostable": false,
    "powerLevels": {
      "0": "Efecto estático: Este hechizo no aumenta con Poder.",
      "1": "Efecto estático: Este hechizo no aumenta con Poder.",
      "2": "Efecto estático: Este hechizo no aumenta con Poder.",
      "3": "Efecto estático: Este hechizo no aumenta con Poder.",
      "4": "Efecto estático: Este hechizo no aumenta con Poder.",
      "5": "Efecto estático: Este hechizo no aumenta con Poder."
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
    "name": "Resurrección (Resurrection)",
    "school": "Tierra",
    "type": "Avanzada",
    "effect": "Devuelve a la vida a miembros caídos de la unidad seleccionada de forma permanente durante el combate.",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Tierra).",
    "isBoostable": false,
    "powerLevels": {
      "0": "Efecto estático: Este hechizo no aumenta con Poder.",
      "1": "Efecto estático: Este hechizo no aumenta con Poder.",
      "2": "Efecto estático: Este hechizo no aumenta con Poder.",
      "3": "Efecto estático: Este hechizo no aumenta con Poder.",
      "4": "Efecto estático: Este hechizo no aumenta con Poder.",
      "5": "Efecto estático: Este hechizo no aumenta con Poder."
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
    "name": "Blindaje (Shield)",
    "school": "Tierra",
    "type": "Básica",
    "effect": "Aumenta la defensa física de la unidad aliada seleccionada reduciendo el daño recibido.",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Tierra).",
    "isBoostable": false,
    "powerLevels": {
      "0": "Efecto estático: Este hechizo no aumenta con Poder.",
      "1": "Efecto estático: Este hechizo no aumenta con Poder.",
      "2": "Efecto estático: Este hechizo no aumenta con Poder.",
      "3": "Efecto estático: Este hechizo no aumenta con Poder.",
      "4": "Efecto estático: Este hechizo no aumenta con Poder.",
      "5": "Efecto estático: Este hechizo no aumenta con Poder."
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
    "name": "Asesino (Slayer)",
    "school": "Fuego",
    "type": "Avanzada",
    "effect": "Aplica efectos tácticos o estratégicos en la ronda de combate o mapa de aventura según el reglamento oficial.",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Fuego).",
    "isBoostable": false,
    "powerLevels": {
      "0": "Efecto estático: Este hechizo no aumenta con Poder.",
      "1": "Efecto estático: Este hechizo no aumenta con Poder.",
      "2": "Efecto estático: Este hechizo no aumenta con Poder.",
      "3": "Efecto estático: Este hechizo no aumenta con Poder.",
      "4": "Efecto estático: Este hechizo no aumenta con Poder.",
      "5": "Efecto estático: Este hechizo no aumenta con Poder."
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
    "name": "Ralentizar (Slow)",
    "school": "Tierra",
    "type": "Básica",
    "effect": "Hasta el final del combate, reduce notablemente la iniciativa de la unidad enemiga seleccionada.",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Tierra).",
    "isBoostable": false,
    "powerLevels": {
      "0": "Efecto estático: Este hechizo no aumenta con Poder.",
      "1": "Efecto estático: Este hechizo no aumenta con Poder.",
      "2": "Efecto estático: Este hechizo no aumenta con Poder.",
      "3": "Efecto estático: Este hechizo no aumenta con Poder.",
      "4": "Efecto estático: Este hechizo no aumenta con Poder.",
      "5": "Efecto estático: Este hechizo no aumenta con Poder."
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
    "name": "Tristeza (Sorrow)",
    "school": "Tierra",
    "type": "Avanzada",
    "effect": "Aplica efectos tácticos o estratégicos en la ronda de combate o mapa de aventura según el reglamento oficial.",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Tierra).",
    "isBoostable": false,
    "powerLevels": {
      "0": "Efecto estático: Este hechizo no aumenta con Poder.",
      "1": "Efecto estático: Este hechizo no aumenta con Poder.",
      "2": "Efecto estático: Este hechizo no aumenta con Poder.",
      "3": "Efecto estático: Este hechizo no aumenta con Poder.",
      "4": "Efecto estático: Este hechizo no aumenta con Poder.",
      "5": "Efecto estático: Este hechizo no aumenta con Poder."
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
    "name": "Piel de piedra (Stone Skin)",
    "school": "Tierra",
    "type": "Básica",
    "effect": "Petrifica ligeramente la piel de la unidad, otorgando una gran resistencia al daño físico.",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Tierra).",
    "isBoostable": false,
    "powerLevels": {
      "0": "Efecto estático: Este hechizo no aumenta con Poder.",
      "1": "Efecto estático: Este hechizo no aumenta con Poder.",
      "2": "Efecto estático: Este hechizo no aumenta con Poder.",
      "3": "Efecto estático: Este hechizo no aumenta con Poder.",
      "4": "Efecto estático: Este hechizo no aumenta con Poder.",
      "5": "Efecto estático: Este hechizo no aumenta con Poder."
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
    "name": "Teletransporte (Teleport)",
    "school": "Agua",
    "type": "Avanzada",
    "effect": "Aplica efectos tácticos o estratégicos en la ronda de combate o mapa de aventura según el reglamento oficial.",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Agua).",
    "isBoostable": false,
    "powerLevels": {
      "0": "Efecto estático: Este hechizo no aumenta con Poder.",
      "1": "Efecto estático: Este hechizo no aumenta con Poder.",
      "2": "Efecto estático: Este hechizo no aumenta con Poder.",
      "3": "Efecto estático: Este hechizo no aumenta con Poder.",
      "4": "Efecto estático: Este hechizo no aumenta con Poder.",
      "5": "Efecto estático: Este hechizo no aumenta con Poder."
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
    "name": "Portal de la ciudad (Town Portal)",
    "school": "Tierra",
    "type": "Avanzada",
    "effect": "Hechizo de mapa. Permite teletransportar al héroe de vuelta a la ciudad aliada más cercana.",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Tierra).",
    "isBoostable": false,
    "powerLevels": {
      "0": "Efecto estático: Este hechizo no aumenta con Poder.",
      "1": "Efecto estático: Este hechizo no aumenta con Poder.",
      "2": "Efecto estático: Este hechizo no aumenta con Poder.",
      "3": "Efecto estático: Este hechizo no aumenta con Poder.",
      "4": "Efecto estático: Este hechizo no aumenta con Poder.",
      "5": "Efecto estático: Este hechizo no aumenta con Poder."
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
    "name": "Ver el aire (View Air)",
    "school": "Aire",
    "type": "Básica",
    "effect": "Aplica efectos tácticos o estratégicos en la ronda de combate o mapa de aventura según el reglamento oficial.",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Aire).",
    "isBoostable": false,
    "powerLevels": {
      "0": "Efecto estático: Este hechizo no aumenta con Poder.",
      "1": "Efecto estático: Este hechizo no aumenta con Poder.",
      "2": "Efecto estático: Este hechizo no aumenta con Poder.",
      "3": "Efecto estático: Este hechizo no aumenta con Poder.",
      "4": "Efecto estático: Este hechizo no aumenta con Poder.",
      "5": "Efecto estático: Este hechizo no aumenta con Poder."
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
    "name": "Ver la tierra (View Earth)",
    "school": "Tierra",
    "type": "Básica",
    "effect": "Aplica efectos tácticos o estratégicos en la ronda de combate o mapa de aventura según el reglamento oficial.",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Tierra).",
    "isBoostable": false,
    "powerLevels": {
      "0": "Efecto estático: Este hechizo no aumenta con Poder.",
      "1": "Efecto estático: Este hechizo no aumenta con Poder.",
      "2": "Efecto estático: Este hechizo no aumenta con Poder.",
      "3": "Efecto estático: Este hechizo no aumenta con Poder.",
      "4": "Efecto estático: Este hechizo no aumenta con Poder.",
      "5": "Efecto estático: Este hechizo no aumenta con Poder."
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
    "name": "Visiones (Visions)",
    "school": "Aire",
    "type": "Básica",
    "effect": "Aplica efectos tácticos o estratégicos en la ronda de combate o mapa de aventura según el reglamento oficial.",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Aire).",
    "isBoostable": false,
    "powerLevels": {
      "0": "Efecto estático: Este hechizo no aumenta con Poder.",
      "1": "Efecto estático: Este hechizo no aumenta con Poder.",
      "2": "Efecto estático: Este hechizo no aumenta con Poder.",
      "3": "Efecto estático: Este hechizo no aumenta con Poder.",
      "4": "Efecto estático: Este hechizo no aumenta con Poder.",
      "5": "Efecto estático: Este hechizo no aumenta con Poder."
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
    "name": "Debilidad (Weakness)",
    "school": "Agua",
    "type": "Básica",
    "effect": "Aplica efectos tácticos o estratégicos en la ronda de combate o mapa de aventura según el reglamento oficial.",
    "valueText": "Resolución del hechizo según el nivel de Poder acumulado (Agua).",
    "isBoostable": false,
    "powerLevels": {
      "0": "Efecto estático: Este hechizo no aumenta con Poder.",
      "1": "Efecto estático: Este hechizo no aumenta con Poder.",
      "2": "Efecto estático: Este hechizo no aumenta con Poder.",
      "3": "Efecto estático: Este hechizo no aumenta con Poder.",
      "4": "Efecto estático: Este hechizo no aumenta con Poder.",
      "5": "Efecto estático: Este hechizo no aumenta con Poder."
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
