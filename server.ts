import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { rulesKB } from "./src/data/rulesKB.js"; // Note: esbuild handles ts resolution

dotenv.config();

const app = express();
const PORT = 3000;

// Body parser
app.use(express.json());

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
    const { messages, selectedSectionId } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Invalid request parameters. 'messages' array is required." });
    }

    if (!ai) {
      return res.status(503).json({ 
        error: "Servicio de IA no disponible. Por favor, asegúrate de configurar tu GEMINI_API_KEY en Panel de Control > Secrets." 
      });
    }

    // Embed the knowledge base as systemic context
    const kbString = rulesKB.map(section => `### ${section.title}\nCategory: ${section.category}\n${section.content}`).join("\n\n");
    
    // Construct system instructions
    let systemInstruction = `Eres "Sandro el Sabio", un asesor de reglas experto e inteligente para el juego de mesa oficial "Heroes of Might and Magic III: The Board Game" (2022/2024 Archon Studio).
Tu objetivo es ayudar a los jugadores a resolver disputas de reglas, entender mecánicas de combate, asedio, colocación de losetas, cálculo de dificultades o costes de reclutamiento de manera infalible y con estilo de consejero fantástico medieval y cortés.

REGLAS DE RESPUESTA:
1. Responde SIEMPRE en español con excelente ortografía, tono respetuoso, servicial y ligeramente caracterizado (como Sandro de la facción de la Necrópolis, pero siempre amigable y neutral para ayudar al juego).
2. Utiliza la BASE DE CONOCIMIENTO proporcionada a continuación para fundamentar tus respuestas de forma precisa. No inventes reglas. Cita secciones de forma natural.
3. Si la pregunta es sobre traducción (algunos manuales están en inglés), ayuda traduciendo los términos y explicando su equivalencia en español (por ejemplo: "Haspids" son Haspides o Hásspides de la facción de Cove, "Attack token" es ficha de ataque, "Spell scroll" es pergamino de hechizo, "Creature banks" son bancos de criaturas como el Pyramid o Wolf Raider Hive).
4. Sé conciso y estructurado. Usa negritas y viñetas para que los jugadores en medio de una partida puedan leerte de un solo vistazo.

=== BASE DE CONOCIMIENTO DE REGLAS DE HEROES III ===
${kbString}
`;

    if (selectedSectionId) {
      const section = rulesKB.find(s => s.id === selectedSectionId);
      if (section) {
        systemInstruction += `\n\nEl usuario está consultando específicamente la sección: "${section.title}"\nPresta especial atención a detallar este contenido si la pregunta se refiere a él:\n${section.content}`;
      }
    }

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
