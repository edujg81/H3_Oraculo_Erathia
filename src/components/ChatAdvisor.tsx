import { useState, useRef, useEffect } from 'react';
import { Message, RuleSection } from '../types';
import { Send, History, Trash2, ArrowRight, Sparkles, BookCheck, AlertCircle } from 'lucide-react';
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
        content: '¡Saludos, noble estratega! Soy Sandro el Sabio, tu fiel consejero para solventar cualquier duda o disputa sobre las reglas tácticas del juego de mesa. ¿Qué conflicto perturba tu sesión de hoy?',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ];
  });

  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chatError, setChatError] = useState<string | null>(null);
  const [showConfirmClear, setShowConfirmClear] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Recommended prompt chips
  const recommendationChips = [
    { label: 'Dificultad de monstruos por nivel', prompt: '¿Cuántos monstruos de bronce, plata u oro salen en una zona nivel III para dificultad normal e imposible?' },
    { label: 'Unidades a distancia y trabado', prompt: '¿Cómo funciona el movimiento y ataque de las unidades a distancia y cuáles son sus penalizaciones?' },
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

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

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

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMsg],
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
        content: '¡Saludos, estratega! Inciemos de nuevo la consulta. ¿Qué conflicto táctico o duda de preparación de partida resolveremos?',
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

        <div className="flex items-center gap-3">
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
                <p className={`text-[10px] text-slate-500 font-mono ${msg.role === 'user' ? 'text-right' : ''}`}>
                  {msg.timestamp}
                </p>
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
          className="flex gap-2 relative"
        >
          <input
            type="text"
            placeholder={selectedSection ? `Pregúntale a Sandro relacionado con la sección seleccionada...` : "Pregunta sobre reglas, combate rápida, asedios..."}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            disabled={isLoading}
            className="flex-1 bg-slate-900 border border-amber-950/30 rounded-xl pl-4 pr-12 py-3 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={isLoading || !inputValue.trim()}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition disabled:opacity-40 cursor-pointer"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
