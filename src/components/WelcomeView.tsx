import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Sparkles, Users, Swords, Wand2, Building2, Compass, Hammer, Dices, HelpCircle } from 'lucide-react';
import { version } from '../../package.json';
import { ALL_BOARD_GAME_SKILLS } from '../data/skillsData';
import { townsData } from '../data/townsData';
import oracleLogo from '../assets/images/h3oraculo_logo.png';

interface WelcomeViewProps {}

const WelcomeView: React.FC<WelcomeViewProps> = () => {
  const contentSections = [
    {
      icon: BookOpen,
      color: 'text-sky-400',
      title: 'Reglas y FAQs Completas',
      description: 'Acceso completo a las 15 guías oficiales del juego de mesa, incluyendo reglas básicas, expansiones, erratas oficiales y preguntas frecuentes. Navega por secciones, busca términos específicos y consulta referencias cruzadas entre mecánicas.'
    },
    {
      icon: Users,
      color: 'text-yellow-400',
      title: 'Base de Datos de Héroes',
      description: 'Todos los héroes del juego con sus especialidades, habilidades iniciales, biografías y sinergias por facción. Filtra por ciudad, tipo de magia o estilo de juego para encontrar el héroe perfecto para tu estrategia.'
    },
    {
      icon: Swords,
      color: 'text-red-400',
      title: 'Enciclopedia de Unidades',
      description: 'Todas las criaturas reclutables, neutrales e invocadas con estadísticas completas: ataque, defensa, daño, salud, velocidad, iniciativa, coste, crecimiento y habilidades especiales. Incluye comparativas y calculadora de reclutamiento.'
    },
    {
      icon: Wand2,
      color: 'text-violet-400',
      title: 'Grimorio de Hechizos',
      description: 'Catálogo completo de hechizos por escuela de magia (Aire, Tierra, Fuego, Agua). Niveles, coste en maná, efectos, duración, alcance y sinergias con héroes y artefactos. Filtros por escuela, nivel y tipo de efecto.'
    },
    {
      icon: Building2,
      color: 'text-amber-500',
      title: 'Ciudades y Edificios',
      description: 'Árboles de construcción de las 10 facciones (incluyendo Conflujo y Cala). Requisitos, costes, beneficios, criaturas desbloqueadas y cadenas de dependencias. Planifica tu desarrollo urbano óptimo.'
    },
    {
      icon: Compass,
      color: 'text-rose-400',
      title: 'Misiones y Escenarios',
      description: 'Base de datos de escenarios oficiales y personalizados: condiciones de victoria, configuración del mapa, fuerzas iniciales, eventos especiales y objetivos secundarios. Ideal para campañas y partidas narrativas.'
    },
    {
      icon: Hammer,
      color: 'text-amber-600',
      title: 'Máquinas de Guerra',
      description: 'Simulador interactivo de máquinas de asedio y apoyo: Balista, Catapulta, Carro de Municiones, Tienda de Auxilio y Cañón de Cala. Resuelve tiradas de dado y efectos automáticos según las reglas oficiales.'
    },
    {
      icon: Dices,
      color: 'text-emerald-400',
      title: 'Simulador de Dados',
      description: 'Tres dados oficiales del juego: Dado de Combate Táctico ([-1, 0, +1]), Dado de Recursos (6 caras) y Dado de Tesoro (6 caras). Animaciones, historial y descripciones de resultados según el reglamento.'
    },
    {
      icon: HelpCircle,
      color: 'text-amber-400',
      title: 'Asistente IA: Sandro el Sabio',
      description: 'Chat inteligente especializado en reglas del juego. Responde dudas sobre mecánicas, combate, asedio, colocación de losetas, traducciones y estrategias. Con memoria de conversación, síntesis de voz y opción de API Key personalizada.'
    }
  ];

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-950/80 border border-slate-800/80 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent opacity-50" />
        
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 relative z-10 shrink-0 flex flex-col items-center justify-center"
        >
          <div className="w-60 sm:w-80 md:w-150 max-w-full h-auto mx-auto flex items-center justify-center">
            <img
              src={oracleLogo}
              alt="Heroes III: Oráculo de Erathia Logo"
              className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <p className="text-amber-500/70 text-xs sm:text-lg font-mono uppercase tracking-widest mt-2">
            Asesor Inteligente para Heroes III: The Board Game
          </p>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed relative z-10"
        >
          Bienvenido, héroe. Soy <strong className="text-amber-400">Sandro el Sabio</strong>, nigromante y consejero de los secretos de Erathia. 
          Este oráculo reúne todo el conocimiento necesario para dominar el juego de mesa <em className="text-amber-300">Heroes of Might & Magic III</em>: 
          reglas, unidades, hechizos, ciudades, escenarios y herramientas de partida.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative z-10"
        >
          <div className="flex items-center justify-center gap-3 text-[10px] text-slate-600 font-mono">
            <span>v{version}</span>
            <span className="w-1 h-1 bg-slate-600 rounded-full"></span>
            <span>Desarrollada por <a href="https://github.com/edujg81" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">
              edujg81
            </a></span>
          </div>
        </motion.div>
      </motion.div>

      {/* Description Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-slate-900/40 border border-slate-800/60 rounded-2xl p-6 sm:p-8"
      >
        <h2 className="text-lg sm:text-xl font-bold text-amber-300 font-serif mb-4 flex items-center gap-2">
          <BookOpen className="w-5 h-5" />
          ¿Qué encontrarás en el Oráculo?
        </h2>
        <div className="prose prose-slate max-w-none text-slate-300 leading-relaxed">
          <p className="mb-4 text-base">
            El <strong className="text-amber-400">Oráculo de Erathia</strong> es una herramienta de referencia y soporte táctico diseñada específicamente para 
            <em>Heroes of Might & Magic III: The Board Game</em> de Archon Studio. 
            Centraliza toda la información dispersa en los 15 manuales oficiales y expansiones en una interfaz única, 
            optimizada para consultas rápidas durante la partida.
          </p>
          <p className="mb-4 text-base">
            La navegación principal se realiza mediante la <strong className="text-amber-400">barra de pestañas superior</strong>, 
            que organiza el contenido en módulos temáticos especializados. Cada módulo ofrece búsqueda, filtrado y 
            vistas detalladas adaptadas al tipo de información que consulta.
          </p>
          <p className="text-base">
            Además, el <strong className="text-amber-400">chat con Sandro el Sabio</strong> (pestaña "Consulta a Sandro") 
            actúa como asistente inteligente: responde dudas de reglas en lenguaje natural, explica mecánicas complejas, 
            sugiere estrategias y recuerda el contexto de tu conversación.
          </p>
        </div>
      </motion.div>

      {/* Content Sections Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="space-y-6"
      >
        <h2 className="text-sm font-bold text-amber-500 uppercase tracking-widest mb-4 flex items-center gap-2">
          <BookOpen className="w-4 h-4" />
          Módulos de Conocimiento
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {contentSections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 * index }}
                className="bg-slate-900/50 border border-slate-800/80 rounded-2xl p-5 hover:border-amber-600/40 hover:bg-slate-800/40 transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className={`p-2.5 bg-slate-950/60 rounded-lg border border-slate-800 shrink-0`}>
                    <Icon className={`w-5 h-5 ${section.color}`} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-bold text-slate-200 mb-1">{section.title}</h3>
                    <p className="text-[11px] text-slate-500 leading-relaxed">{section.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Footer Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="bg-slate-900/30 border border-slate-800/60 rounded-2xl p-6"
      >
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
            <span className="font-mono font-semibold">{Object.keys(townsData).length} Facciones Recreadas</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            <span className="font-mono font-semibold">{ALL_BOARD_GAME_SKILLS.length} Habilidades Indexadas</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
            <span className="font-mono font-semibold">15 Manuales Oficiales Indexados</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
            <span className="font-mono font-semibold">Cronómetro con Alerta Acústica</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default WelcomeView;
