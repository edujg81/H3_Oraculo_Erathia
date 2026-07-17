import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { rulesKB } from "./src/data/rulesKB.js"; // Note: esbuild handles ts resolution
import { entityCatalogSummary, getRelevantEntitySections } from "./src/data/knowledgeIndex.js";

dotenv.config();

const app = express();
const PORT = 3000;

// El despliegue de producción corre detrás del proxy de Cloud Run;
// sin esto, req.ip devolvería siempre la IP interna del proxy y el
// rate limiter agruparía a todos los usuarios en un único bucket.
app.set("trust proxy", true);

// Body parser (límite de tamaño para evitar payloads abusivos)
app.use(express.json({ limit: "100kb" }));

// --- Rate limiting simple en memoria para /api/chat ---
// Cada llamada a Gemini tiene coste de tokens/cuota; sin este límite,
// cualquier visitante del despliegue público podría agotar la clave de API.
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutos
const RATE_LIMIT_MAX_REQUESTS = 20; // por IP, por ventana
const rateLimitBuckets = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (rateLimitBuckets.get(ip) || []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );
  if (timestamps.length >= RATE_LIMIT_MAX_REQUESTS) {
    rateLimitBuckets.set(ip, timestamps);
    return true;
  }
  timestamps.push(now);
  rateLimitBuckets.set(ip, timestamps);
  return false;
}

// Limpieza periódica para no acumular IPs inactivas indefinidamente en memoria
setInterval(() => {
  const now = Date.now();
  for (const [ip, timestamps] of rateLimitBuckets.entries()) {
    const active = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
    if (active.length === 0) rateLimitBuckets.delete(ip);
    else rateLimitBuckets.set(ip, active);
  }
}, RATE_LIMIT_WINDOW_MS).unref?.();

const MAX_MESSAGES = 40; // longitud máxima del historial de chat aceptado
const MAX_MESSAGE_LENGTH = 4000; // caracteres por mensaje

// Initialize GenAI safely
let ai: GoogleGenAI | null = null;
const apiKey = process.env.GEMINI_API_KEY;

if (apiKey) {
  ai = new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });
} else {
  console.warn("WARNING: GEMINI_API_KEY is not defined in environment secrets. AI chat assistance will be offline.");
}

// 1. API: Retrieve the Rules Knowledge Base directly (used for client-side search/filtering)
app.get("/api/rules", (req, res) => {
  res.json({ rules: rulesKB });
});

// 2. API: Rule Chat Companion
app.post("/api/chat", async (req, res) => {
  try {
    const clientIp = req.ip || req.socket.remoteAddress || "unknown";
    if (isRateLimited(clientIp)) {
      return res.status(429).json({
        error: "Demasiadas consultas a Sandro en poco tiempo. Espera unos minutos antes de volver a intentarlo."
      });
    }

    const { messages, selectedSectionId } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Invalid request parameters. 'messages' array is required." });
    }

    if (messages.length === 0 || messages.length > MAX_MESSAGES) {
      return res.status(400).json({
        error: `El historial de mensajes debe tener entre 1 y ${MAX_MESSAGES} entradas.`
      });
    }

    const hasInvalidMessage = messages.some((m: any) => {
      return (
        typeof m !== "object" ||
        m === null ||
        (m.role !== "user" && m.role !== "assistant") ||
        typeof m.content !== "string" ||
        m.content.length === 0 ||
        m.content.length > MAX_MESSAGE_LENGTH
      );
    });
    if (hasInvalidMessage) {
      return res.status(400).json({
        error: `Cada mensaje debe tener 'role' ('user'|'assistant') y 'content' de texto (máx. ${MAX_MESSAGE_LENGTH} caracteres).`
      });
    }

    if (selectedSectionId !== undefined && typeof selectedSectionId !== "string") {
      return res.status(400).json({ error: "'selectedSectionId' debe ser una cadena de texto." });
    }

    if (!ai) {
      return res.status(503).json({ 
        error: "Servicio de IA no disponible. Por favor, asegúrate de configurar tu GEMINI_API_KEY en Panel de Control > Secrets." 
      });
    }

    // Embed the knowledge base as systemic context
    const kbString = rulesKB.map(section => `### ${section.title}\nCategory: ${section.category}\n${section.content}`).join("\n\n");

    // Detecta héroes / unidades / habilidades / ciudades mencionados en los
    // últimos mensajes del usuario y añade su ficha completa al contexto.
    // El catálogo de nombres (entityCatalogSummary) sí se incluye siempre,
    // pero es barato (solo nombres); el detalle completo (~260 fichas) solo
    // se añade bajo demanda para no disparar el tamaño/coste del prompt.
    const recentUserText = messages
      .filter((m: any) => m.role === "user")
      .slice(-4)
      .map((m: any) => m.content)
      .join("\n");
    const relevantEntitySections = getRelevantEntitySections(recentUserText);
    const entityDetailString = relevantEntitySections
      .map(section => `### ${section.title}\n${section.content}`)
      .join("\n\n");
    
    // Construct system instructions
    let systemInstruction = `Eres "Sandro el Sabio", un asesor de reglas experto e inteligente para el juego de mesa oficial "Heroes of Might and Magic III: The Board Game" (2022/2024 Archon Studio).
Tu objetivo es ayudar a los jugadores a resolver disputas de reglas, entender mecánicas de combate, asedio, colocación de losetas, cálculo de dificultades o costes de reclutamiento de manera infalible y con estilo de consejero fantástico medieval y cortés.

REGLAS DE RESPUESTA:
1. Responde SIEMPRE en español con excelente ortografía, tono respetuoso, servicial y ligeramente caracterizado (como Sandro de la facción de la Necrópolis, pero siempre amigable y neutral para ayudar al juego).
2. Utiliza la BASE DE CONOCIMIENTO proporcionada a continuación para fundamentar tus respuestas de forma precisa. No inventes reglas. Cita secciones de forma natural.
3. Si la pregunta es sobre traducción (algunos manuales están en inglés), ayuda traduciendo los términos y explicando su equivalencia en español (por ejemplo: "Haspids" son Haspides o Hásspides de la facción de Cove, "Attack token" es ficha de ataque, "Spell scroll" es pergamino de hechizo, "Creature banks" son bancos de criaturas como el Pyramid o Wolf Raider Hive).
4. Sé conciso y estructurado. Usa negritas y viñetas para que los jugadores en medio de una partida puedan leerte de un solo vistazo.
5. Además de las reglas, dispones de un catálogo con TODOS los héroes, unidades reclutables, habilidades secundarias y ciudades del juego (ver "CATÁLOGO DISPONIBLE" más abajo). Si el jugador pregunta por un nombre concreto que reconoces en ese catálogo pero no ves su ficha detallada en este mensaje, dile que te dé el nombre exacto para poder consultarlo, en vez de inventarte sus estadísticas o efectos.

=== BASE DE CONOCIMIENTO DE REGLAS DE HEROES III ===
${kbString}

=== CATÁLOGO DISPONIBLE (héroes, unidades, habilidades, ciudades) ===
${entityCatalogSummary}
${entityDetailString ? `\n=== FICHAS DETALLADAS RELEVANTES A LA CONSULTA ACTUAL ===\n${entityDetailString}\n` : ''}
`;

    if (selectedSectionId) {
      const section = rulesKB.find(s => s.id === selectedSectionId);
      if (section) {
        systemInstruction += `\n\nEl usuario está consultando específicamente la sección: "${section.title}"\nPresta especial atención a detallar este contenido si la pregunta se refiere a él:\n${section.content}`;
      }
    }

    // Log ligero de tamaño del prompt: ayuda a vigilar el coste de tokens
    // de cada consulta, especialmente cuando se añaden fichas detalladas.
    console.log(
      `[chat] prompt ~${systemInstruction.length} chars ` +
      `(reglas: ${kbString.length}, fichas relevantes: ${relevantEntitySections.length})`
    );

    // Format messages for @google/genai SDK
    // @google/genai contents structure has format: { role: 'user'|'model', parts: [{ text: '...' }] }
    const formattedContents = messages.map((m: any) => ({
      role: m.role === "assistant" ? "model" as const : "user" as const,
      parts: [{ text: m.content }]
    }));

    // Call google genai
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: formattedContents,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      }
    });

    const text = response.text || "Lo siento, mi poder nigromántico no ha podido canalizar una respuesta en este momento.";
    res.json({ text });

  } catch (error: any) {
    console.error("Error calling Gemini API:", error);
    res.status(500).json({ error: error.message || "Internal server error." });
  }
});

// Configure client assets serving based on mode
const isProd = process.env.NODE_ENV === "production";

async function start() {
  if (isProd) {
    // In production serve compiled dist static files
    const distPath = path.resolve(process.cwd(), "dist");
    app.use(express.static(distPath));
    
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(distPath, "index.html"));
    });
  } else {
    // Use Vite in dev mode
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa"
    });
    
    app.use(vite.middlewares);
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server listening on http://localhost:${PORT}`);
  });
}

start().catch(err => {
  console.error("Failed to start server:", err);
});