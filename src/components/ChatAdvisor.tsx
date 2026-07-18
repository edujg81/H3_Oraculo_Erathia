import { useState, useRef, useEffect } from 'react';
import { Message, RuleSection } from '../types';
import { Send, History, Trash2, ArrowRight, Sparkles, BookCheck, AlertCircle, Mic, MicOff, Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ChatAdvisor({
  selectedSection,
  onClearSection
}: {
  selectedSection: RuleSection | null;
  onClearSection: () => void;
}) {
  const [messages, setMessages] = useState<Message[]>(() => {
    try {
      const saved = localStorage.getItem('h3_chat_messages');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn("localStorage is not available:", e);
    }
    return [
      {
        id: 'welcome',
        role: 'assistant',
        content: '¡Saludos, héroe! Soy Sandro el Sabio, consultor del oráculo para solventar cualquier duda o disputa sobre las reglas del juego de mesa Heroes III. ¿Qué conflicto perturba tu sesión de hoy?',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ];
  });

  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chatError, setChatError] = useState<string | null>(null);
  const [showConfirmClear, setShowConfirmClear] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // --- Speech Recognition & Text-to-Speech ---
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState<any>(null);
  const [autoSpeak, setAutoSpeak] = useState(() => {
    try {
      return localStorage.getItem('h3_chat_autospeak') === 'true';
    } catch {
      return false;
    }
  });
  const [currentlySpeakingId, setCurrentlySpeakingId] = useState<string | null>(null);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  // Pre-cargar voces, escuchar voiceschanged y cancelar colas residuales al montar
  useEffect(() => {
    if (!('speechSynthesis' in window)) return;

    const loadVoices = () => {
      const allVoices = window.speechSynthesis.getVoices();
      setVoices(allVoices);
    };

    // Detiene cualquier locución que haya quedado pendiente del recargado/sesión previa
    try {
      window.speechSynthesis.cancel();
    } catch (err) {
      console.warn('Error al cancelar síntesis inicial:', err);
    }

    loadVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  }, []);

  // Initialize Speech Recognition (Speech-to-Text)
  useEffect(() => {
    const SpeechRecognitionAPI = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognitionAPI) {
      const rec = new SpeechRecognitionAPI();
      rec.continuous = false;
      rec.interimResults = false;
      rec.lang = 'es-ES';

      rec.onstart = () => {
        setIsListening(true);
      };

      rec.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        if (transcript) {
          setInputValue(prev => {
            const trimmed = prev.trim();
            return trimmed ? `${trimmed} ${transcript}` : transcript;
          });
        }
      };

      rec.onerror = (event: any) => {
        setIsListening(false);
        if (event.error === 'no-speech') {
          console.warn('Reconocimiento de voz finalizado: no se detectó habla.');
          return;
        }

        console.error('Error de reconocimiento de voz:', event.error);
        if (event.error === 'not-allowed') {
          setChatError('Permiso de micrófono bloqueado. Asegúrate de dar acceso al micrófono en la barra del navegador, o haz clic en "Abrir en pestaña nueva" para que el navegador te solicite el permiso de micrófono de forma directa y limpia.');
        } else {
          setChatError(`Error en el reconocimiento de voz (${event.error}). Inténtalo de nuevo.`);
        }
      };

      rec.onend = () => {
        setIsListening(false);
      };

      setRecognition(rec);
    }
  }, []);

  const toggleListening = () => {
    if (!recognition) {
      alert('Tu navegador o entorno de visualización no soporta el reconocimiento de voz (Speech Recognition). Intenta con Chrome, Edge o Safari.');
      return;
    }

    if (isListening) {
      recognition.stop();
    } else {
      // If currently speaking, stop first
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      setCurrentlySpeakingId(null);
      
      try {
        recognition.start();
      } catch (err) {
        console.error(err);
      }
    }
  };

  const speakText = (text: string, messageId: string) => {
    if (!('speechSynthesis' in window)) {
      alert('Tu navegador no soporta la síntesis de voz (Text-to-Speech).');
      return;
    }

    if (currentlySpeakingId === messageId) {
      window.speechSynthesis.cancel();
      setCurrentlySpeakingId(null);
      return;
    }

    window.speechSynthesis.cancel();

    // Clean up text
    let cleanedText = text
      .replace(/\([^)]*\)/g, '') // Remove parentheses and their content
      .replace(/\[[^\]]*\]/g, '') // Remove square brackets and their content
      .replace(/[-–—]/g, ' ')    // Replace hyphens and dashes with spaces
      .replace(/[*#_`~]/g, '')
      .replace(/https?:\/\/\S+/g, '')
      .replace(/[\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF]/g, '')
      .replace(/\s+/g, ' ')
      .trim();

    const utterance = new SpeechSynthesisUtterance(cleanedText);
    utterance.lang = 'es-ES';
    utterance.pitch = 0.82; // Un tono de 0.82 da una resonancia masculina, profunda y lúgubre sin distorsión metálica o robótica
    utterance.rate = 0.82;  // Un ritmo de 0.82 emula la cadencia pausada, deliberada y teatral de un narrador de cine de terror (estilo Vincent Price)

    const availableVoices = voices.length > 0 ? voices : window.speechSynthesis.getVoices();
    const spanishVoices = availableVoices.filter(v => {
      const lang = v.lang.toLowerCase();
      return lang.startsWith('es-') || lang === 'es';
    });

    if (spanishVoices.length > 0) {
      // Definimos indicadores claros masculinos y femeninos para garantizar la voz de Sandro
      const maleKeywords = [
        'male', 'hombre', 'jorge', 'diego', 'julio', 'dario', 'alvaro', 
        'sabat', 'yago', 'enrique', 'dave', 'microsoft jorge', 'carlos',
        'manuel', 'miguel', 'francisco', 'javier', 'pedro', 'pablo', 'raul',
        'eed', 'gco', 'ifs', 'esf', 'esg', 'esta', 'es-es-x-esf', 'es-es-x-esg'
      ];
      
      const femaleKeywords = [
        'female', 'mujer', 'elena', 'monica', 'laura', 'helena', 'hilda', 
        'sandra', 'sabina', 'marta', 'lucia', 'dalia', 'mona', 'zira', 
        'hazel', 'susan', 'paulina', 'marisol', 'ana', 'sfs', 'esc', 'esd',
        'femenino', 'femenina'
      ];

      // Puntuamos cada voz para encontrar la masculina de mayor calidad
      const scoredVoices = spanishVoices.map(voice => {
        const name = voice.name.toLowerCase();
        let score = 0;

        const isMale = maleKeywords.some(k => name.includes(k));
        const isFemale = femaleKeywords.some(k => name.includes(k));

        if (isMale && !isFemale) {
          score += 1500; // Máxima prioridad para voces masculinas identificadas
        } else if (isFemale && !isMale) {
          score -= 1500; // Evitar a toda costa voces femeninas identificadas
        } else if (isFemale && isMale) {
          score += 200;  // Empate (preferir masculino si se cuela alguna palabra clave)
        }

        // Dar un gran impulso adicional si es la prestigiosa Voz V o variantes neurales de Google de alta gama
        if (name.includes('esg') || name.includes('esf') || name.includes('eed') || name.includes('gco')) {
          score += 500;
        }

        // Calidad / Características Premium
        if (name.includes('natural') || name.includes('neural') || name.includes('premium') || name.includes('multilingual')) {
          score += 300;
        }

        // Preferir es-ES (España) para Sandro, pero aceptar otros si no hay más
        if (voice.lang.toLowerCase().startsWith('es-es')) {
          score += 100;
        }

        // Voces locales suelen ser más estables y responder mejor
        if (voice.localService) {
          score += 20;
        }

        return { voice, score };
      });

      // Ordenar de mayor a menor puntuación
      scoredVoices.sort((a, b) => b.score - a.score);

      // Usar la de mayor puntuación
      utterance.voice = scoredVoices[0].voice;
    }

    utterance.onend = () => {
      setCurrentlySpeakingId(null);
    };

    utterance.onerror = () => {
      setCurrentlySpeakingId(null);
    };

    setCurrentlySpeakingId(messageId);
    window.speechSynthesis.speak(utterance);
  };

  const handleToggleAutoSpeak = () => {
    const newValue = !autoSpeak;
    setAutoSpeak(newValue);
    try {
      localStorage.setItem('h3_chat_autospeak', String(newValue));
    } catch {}
    if (!newValue) {
      window.speechSynthesis.cancel();
      setCurrentlySpeakingId(null);
    }
  };

  // Stop speaking on unmount
  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  // Recommended prompt chips
  const recommendationChips = [
    { label: 'Dificultad de monstruos por nivel', prompt: '¿Cuántos monstruos de bronce, plata u oro salen en una zona nivel III para dificultad normal e imposible?' },
    { label: 'Acción de Unidades a distancia', prompt: '¿Cómo funciona el movimiento y ataque de las unidades a distancia y cuáles son sus penalizaciones?' },
    { label: 'Arpías y la represalia', prompt: '¿Las arpías reciben represalias? ¿Y cómo funciona la habilidad de regenerar daño de los espectros o liches?' },
    { label: 'Combate rápido', prompt: '¿Cuándo se activa un Combate Rápido y qué recompensas de experiencia me otorga si gano?' },
  ];

  // Save messages to local storage
  useEffect(() => {
    try {
      localStorage.setItem('h3_chat_messages', JSON.stringify(messages));
    } catch (e) {
      // Ignore security errors in sandboxed iframes
    }
  }, [messages]);

  // Scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const MAX_MESSAGE_LENGTH = 4000; // debe coincidir con el límite validado en server.ts

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    if (textToSend.length > MAX_MESSAGE_LENGTH) {
      setChatError(`Tu mensaje es demasiado largo (máx. ${MAX_MESSAGE_LENGTH} caracteres). Resúmelo un poco, por favor.`);
      return;
    }

    setChatError(null);
    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    // Solo se envían los últimos mensajes: evita romper la conversación al
    // superar el límite de historial validado por el servidor (ver server.ts)
    // y mantiene el coste de tokens de cada consulta acotado.
    const MAX_HISTORY_SENT = 30;

    try {
      const fullHistory = [...messages, userMsg];
      
      // Sanitizar el historial para cumplir estrictamente con los requisitos del backend
      const sanitizedHistory = fullHistory
        .filter(m => (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string' && m.content.trim().length > 0)
        .map(m => ({
          role: m.role as 'user' | 'assistant',
          content: m.content.slice(0, MAX_MESSAGE_LENGTH)
        }))
        .slice(-MAX_HISTORY_SENT);

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: sanitizedHistory,
          selectedSectionId: selectedSection?.id || undefined
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al conectar con Sandro el Sabio.');
      }

      const assistantMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, assistantMsg]);
      
      // Trigger voice read-out automatically ONLY for this newly received message if autoSpeak is enabled
      if (autoSpeak) {
        speakText(data.text, assistantMsg.id);
      }
      
      // If we used a selected section, clear it as we already asked the question
      if (selectedSection) {
        onClearSection();
      }

    } catch (error: any) {
      console.error(error);
      setChatError(error.message || 'Error de conexión. Asegúrate de configurar la clave GEMINI_API_KEY.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearChat = () => {
    if (!showConfirmClear) {
      setShowConfirmClear(true);
      // Automatically reset confirmation after 4 seconds if not clicked again
      setTimeout(() => setShowConfirmClear(false), 4000);
      return;
    }
    setMessages([
      {
        id: 'welcome',
        role: 'assistant',
        content: '¡Saludos, héroe! Iniciemos de nuevo la consulta. ¿Qué conflicto táctico o duda de preparación de partida resolveremos?',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
    setChatError(null);
    setShowConfirmClear(false);
  };

  return (
    <div className="flex flex-col h-[75vh] bg-slate-900 border border-amber-900/30 rounded-xl overflow-hidden shadow-2xl relative">
      {/* Advisor Header */}
      <div className="bg-slate-950 px-5 py-4 border-b border-amber-900/20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-600 to-amber-900 flex items-center justify-center p-0.5 shadow-md">
            <span className="text-xl">🔮</span>
          </div>
          <div>
            <h3 className="font-serif text-amber-200 font-semibold tracking-wide text-sm sm:text-base">
              Sandro el Sabio
            </h3>
            <p className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Sabio de Reglas Online
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Lectura por Voz Toggle */}
          <button
            onClick={handleToggleAutoSpeak}
            title={autoSpeak ? "Desactivar lectura automática por voz de Sandro" : "Activar lectura automática por voz de Sandro"}
            className={`p-2 rounded-lg transition-all duration-200 cursor-pointer flex items-center gap-1.5 text-xs font-semibold ${
              autoSpeak 
                ? 'text-amber-400 bg-amber-950/40 border border-amber-900/40 hover:bg-amber-900/30' 
                : 'text-slate-400 hover:text-amber-400 hover:bg-slate-800/60'
            }`}
          >
            {autoSpeak ? <Volume2 className="w-4 h-4 text-amber-400 animate-pulse" /> : <VolumeX className="w-4 h-4" />}
            <span className="hidden sm:inline">{autoSpeak ? "Voz: Activa 🔊" : "Voz: Silencio 🔇"}</span>
          </button>

          <button
            onClick={handleClearChat}
            title={showConfirmClear ? "Haz clic otra vez para confirmar" : "Borrar chat"}
            className={`p-2 rounded-lg transition-all duration-200 cursor-pointer flex items-center gap-1.5 text-xs font-semibold ${
              showConfirmClear 
                ? 'text-red-400 bg-red-950/40 border border-red-900/50 hover:bg-red-900/40' 
                : 'text-slate-400 hover:text-red-400 hover:bg-slate-800/60'
            }`}
          >
            <Trash2 className="w-4 h-4" />
            {showConfirmClear && <span className="animate-pulse">¿Confirmar?</span>}
          </button>
        </div>
      </div>

      {/* Selected section context attachment */}
      {selectedSection && (
        <div className="bg-amber-950/30 border-b border-amber-900/20 px-5 py-2.5 flex items-center justify-between text-xs text-amber-300">
          <span className="truncate flex items-center gap-2">
            <BookCheck className="w-4 h-4 text-amber-400 shrink-0" />
            Preguntando sobre: <strong>{selectedSection.title}</strong>
          </span>
          <button
            onClick={onClearSection}
            className="text-slate-400 hover:text-amber-300 ml-2 font-mono"
          >
            [X] Desvincular
          </button>
        </div>
      )}

      {/* Messages area */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 bg-slate-900/70">
        <AnimatePresence initial={false}>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className={`flex gap-3 max-w-[85%] sm:max-w-[75%] ${
                msg.role === 'user' ? 'ml-auto flex-row-reverse' : ''
              }`}
            >
              <div className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center p-0.5 select-none ${
                msg.role === 'user' ? 'bg-slate-700 text-white' : 'bg-amber-900/60 text-amber-300'
              }`}>
                <span className="text-sm">{msg.role === 'user' ? '👤' : '🔮'}</span>
              </div>
              <div className="space-y-1">
                <div className={`p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed whitespace-pre-wrap ${
                  msg.role === 'user'
                    ? 'bg-amber-900/80 text-amber-50 rounded-tr-none border border-amber-800/30'
                    : 'bg-slate-950 text-slate-100 rounded-tl-none border border-slate-800/80 shadow-inner'
                }`}>
                  {msg.content}
                </div>
                <div className="flex items-center justify-between gap-2 mt-1">
                  <p className={`text-[10px] text-slate-500 font-mono ${msg.role === 'user' ? 'text-right w-full' : ''}`}>
                    {msg.timestamp}
                  </p>
                  {msg.role === 'assistant' && (
                    <button
                      onClick={() => speakText(msg.content, msg.id)}
                      className={`p-1 px-2 rounded-md transition-all duration-200 cursor-pointer flex items-center gap-1 text-[10px] ${
                        currentlySpeakingId === msg.id
                          ? 'text-amber-400 bg-amber-500/10 border border-amber-500/20'
                          : 'text-slate-500 hover:text-amber-400 hover:bg-slate-800/50'
                      }`}
                      title={currentlySpeakingId === msg.id ? "Detener lectura" : "Escuchar respuesta"}
                    >
                      {currentlySpeakingId === msg.id ? (
                        <>
                          <VolumeX className="w-3 h-3 animate-pulse text-amber-400" />
                          <span className="font-mono text-[9px]">Detener</span>
                        </>
                      ) : (
                        <>
                          <Volume2 className="w-3 h-3" />
                          <span className="font-mono text-[9px]">Escuchar</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {isLoading && (
          <div className="flex gap-3 max-w-[75%]">
            <div className="w-8 h-8 rounded-full bg-amber-900/60 text-amber-400 shrink-0 flex items-center justify-center p-0.5 animate-spin">
              <span>🔮</span>
            </div>
            <div className="space-y-1">
              <div className="bg-slate-950/80 border border-slate-800 rounded-2xl rounded-tl-none p-3.5 text-xs text-slate-400 italic flex items-center gap-2">
                <span className="flex gap-1">
                  <span className="w-2 h-2 rounded-full bg-amber-600 animate-bounce" style={{ animationDelay: '0ms' }}></span>
                  <span className="w-2 h-2 rounded-full bg-amber-600 animate-bounce" style={{ animationDelay: '150ms' }}></span>
                  <span className="w-2 h-2 rounded-full bg-amber-600 animate-bounce" style={{ animationDelay: '300ms' }}></span>
                </span>
                Sandro está consultando los antiguos reglamentos...
              </div>
            </div>
          </div>
        )}

        {chatError && (
          <div className="bg-red-950/40 border border-red-800/50 rounded-xl p-4 text-xs sm:text-sm text-red-300 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold">Sandro indica un contratiempo:</p>
              <p className="opacity-90">{chatError}</p>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Recommended Prompt chips (Only show when there are few messages) */}
      {messages.length < 3 && (
        <div className="px-4 py-2 border-t border-slate-800 bg-slate-950/40">
          <p className="text-[10px] uppercase font-mono text-slate-500 tracking-wider mb-1.5 flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-amber-500" /> Consultas frecuentes recomendadas:
          </p>
          <div className="flex flex-wrap gap-2">
            {recommendationChips.map((chip, i) => (
              <button
                key={i}
                onClick={() => handleSendMessage(chip.prompt)}
                className="text-[10px] sm:text-xs px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-full border border-slate-700/50 hover:border-amber-900/30 transition cursor-pointer"
              >
                {chip.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input area */}
      <div className="p-3 bg-slate-950 border-t border-amber-900/20">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage(inputValue);
          }}
          className="flex gap-2 relative w-full"
        >
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder={selectedSection ? `Pregúntale a Sandro relacionado con la sección seleccionada...` : "Pregunta sobre reglas, combate rápido, asedios..."}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              disabled={isLoading}
              className="w-full bg-slate-900 border border-amber-950/30 rounded-xl pl-4 pr-24 py-3 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 disabled:opacity-60"
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
              {/* Mic button */}
              <button
                type="button"
                onClick={toggleListening}
                disabled={isLoading}
                className={`p-2 rounded-lg transition duration-200 cursor-pointer ${
                  isListening
                    ? 'bg-red-600 text-white animate-pulse shadow-lg shadow-red-500/20'
                    : 'text-slate-400 hover:text-amber-400 hover:bg-slate-850'
                }`}
                title={isListening ? "Escuchando... Di tu pregunta táctica" : "Preguntar con voz 🎙️"}
              >
                {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
              </button>
              
              {/* Send button */}
              <button
                type="submit"
                disabled={isLoading || !inputValue.trim()}
                className="p-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition disabled:opacity-40 cursor-pointer"
                title="Enviar consulta"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}