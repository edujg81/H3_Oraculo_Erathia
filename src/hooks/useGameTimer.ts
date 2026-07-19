import { useState, useEffect } from 'react';
import { playTickSound, playTimeOutSound } from '../utils/audio';

/**
 * Encapsula el cronómetro global de la partida (stopwatch) y el reloj de
 * cuenta atrás por turno, incluyendo los pitidos de aviso de los últimos
 * 10 segundos y la alarma de tiempo agotado.
 *
 * Extraído de App.tsx para reducir el tamaño del componente principal;
 * el estado sigue viviendo "arriba" (en App, vía este hook) tal y como
 * exige AGENTS.md para sincronizar el bento lateral con el panel de partida.
 */
export function useGameTimer() {
  // Cronómetro global de partida
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [isTotalRunning, setIsTotalRunning] = useState(false); // No corre por defecto

  // Reloj de turno
  const [turnLimit, setTurnLimit] = useState(60); // 60s por defecto
  const [turnSeconds, setTurnSeconds] = useState(60);
  const [isTurnRunning, setIsTurnRunning] = useState(false);

  // Efecto del cronómetro global
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isTotalRunning) {
      interval = setInterval(() => {
        setTotalSeconds(prev => prev + 1);
      }, 1000);
    } else {
      if (interval) clearInterval(interval);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTotalRunning]);

  // Efecto de la cuenta atrás de turno
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isTurnRunning) {
      interval = setInterval(() => {
        setTurnSeconds(prev => {
          if (prev <= 1) {
            setIsTurnRunning(false);
            playTimeOutSound();
            return 0;
          }
          const nextVal = prev - 1;
          if (nextVal <= 10) {
            playTickSound();
          }
          return nextVal;
        });
      }, 1000);
    } else {
      if (interval) clearInterval(interval);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTurnRunning]);

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return {
    totalSeconds, setTotalSeconds,
    isTotalRunning, setIsTotalRunning,
    turnLimit, setTurnLimit,
    turnSeconds, setTurnSeconds,
    isTurnRunning, setIsTurnRunning,
    formatTime,
  };
}
