import request from "supertest";
import { describe, it, expect } from "vitest";
import { app } from "../server";
import { ALL_BOARD_GAME_SKILLS } from "../src/data/skillsData";
import { LOCATIONS_DATA } from "../src/data/locationsData";
import { SCENARIOS } from "../src/data/scenariosData";
import { VICTORY_CONDITIONS } from "../src/data/victoryConditionsData";
import { townsData } from "../src/data/townsData";
import { SPELLS_DATA } from "../src/data/spellsData";
import { rulesKB } from "../src/data/rulesKB";

describe("Server health and API", () => {
  it("returns 200 on /health", async () => {
    const res = await request(app).get("/health");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: "ok" });
  });

  it("returns rules data on /api/rules", async () => {
    const res = await request(app).get("/api/rules");
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("rules");
    expect(Array.isArray(res.body.rules)).toBe(true);
  });

  it("validates /api/chat payload and rejects invalid messages", async () => {
    const res = await request(app)
      .post("/api/chat")
      .send({ messages: [{ role: "invalid", content: "hola" }] });

    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty("error");
  });

  it("validates customApiKey in /api/chat payload", async () => {
    const res = await request(app)
      .post("/api/chat")
      .send({
        messages: [{ role: "user", content: "hola" }],
        customApiKey: 12345
      });

    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty("error");
  });

  it("mantiene el inventario ampliado de 32 habilidades sin erratas conocidas", () => {
    const skillNames = ALL_BOARD_GAME_SKILLS.map((skill) => skill.name);

    expect(skillNames).toHaveLength(32);
    expect(new Set(skillNames).size).toBe(32);
    expect(skillNames).toContain("Inteligencia / Espionaje");
    expect(skillNames).toContain("Vista de águila / Ojo de lince");

    const skillsText = ALL_BOARD_GAME_SKILLS
      .map((skill) => `${skill.normal}\n${skill.expert}`)
      .join("\n");

    expect(skillsText).not.toContain("bajarar");
    expect(skillsText).not.toContain("When compres");
  });

  it("mantiene los escenarios auditados con datos iniciales verificados (AUD-005)", () => {
    // Verifica que los escenarios base incluyen datos iniciales según auditoría Sección 5
    const scenario = SCENARIOS[0];
    expect(scenario.initialResources).toBeDefined();
    expect(scenario.initialResources.gold).toBeGreaterThan(0);
    expect(scenario.initialTroops).toBeDefined();
    expect(scenario.startingFaction).toBeDefined();
    expect(scenario.startingHero).toBeDefined();
    expect(scenario.campaignMode).toBeDefined();
    // Verifica que hay al menos 30 escenarios (30+ según auditoría)
    expect(SCENARIOS.length).toBeGreaterThanOrEqual(30);
  });

  it("mantiene los lugares auditados alineados con sus fichas normativas", () => {
    const locationsById = Object.fromEntries(LOCATIONS_DATA.map((location) => [location.id, location]));

    expect(locationsById.magic_spring.type).toBe("Visitable");
    expect(locationsById.shrine_magic_incantation.effect).toContain("buscar (2)");
    expect(locationsById.shrine_magic_incantation.effect).toContain("pagar 3");
    expect(locationsById.pandoras_box.effect).toContain("2 dados de Tesoro");
    expect(locationsById.pandoras_box.effect).toContain("2 dados de Recursos");
    expect(locationsById.trading_post.effect).toContain("Elige una opción");
    expect(locationsById.black_market.effect).toContain("artefacto reliquia");
    expect(locationsById.flotsam.effect).toBe("Gana 2 Materiales de construcción.");
    expect(locationsById.whirlpool.effect).toContain("hace perder 1 unidad");
    expect(LOCATIONS_DATA.some((location) => location.id === "elemental_rifts")).toBe(false);
    expect(LOCATIONS_DATA.some((location) => location.id === "conflux_altar")).toBe(false);
  });
});

describe("Límites y Condiciones de Victoria (AUDITORIA Tareas Pendientes)", () => {
  // AUD-001: Límite de héroes por jugador
  it("valida que el límite de héroes es 1 Principal + 1 Secundario = 2 máximo", () => {
    const rulesKBContent = rulesKB.map(r => r.content).join("\n");
    expect(rulesKBContent).toContain("Máximo 1 Héroe Principal y 1 Héroe Secundario simultáneos por jugador");
    expect(rulesKBContent).toContain("2 héroes en total");
  });

  // AUD-002: Límite de hechizos primarios por ronda
  it("valida que el límite de hechizos primarios es 1 por ronda con excepciones documentadas", () => {
    const rulesKBContent = rulesKB.map(r => r.content).join("\n");
    expect(rulesKBContent).toContain("Cada jugador puede lanzar únicamente 1 Hechizo Primario por ronda de combate");
    expect(rulesKBContent).toContain("Inteligencia / Espionaje");
    expect(rulesKBContent).toContain("Pergaminos");
    expect(rulesKBContent).toContain("Especialidades");
  });

  // AUD-003: Condiciones de victoria comunes y por modo
  it("valida que las condiciones de victoria están documentadas para todos los modos", () => {
    const modes = new Set(VICTORY_CONDITIONS.map(vc => vc.mode));
    expect(modes.has("Enfrentamiento")).toBe(true);
    expect(modes.has("Cooperativo")).toBe(true);
    expect(modes.has("Alianza")).toBe(true);
    expect(modes.has("Campaña")).toBe(true);
    expect(modes.has("Torneo")).toBe(true);
    expect(modes.has("Aventura")).toBe(true);
    expect(modes.has("Escaramuza")).toBe(true);
  });

  // AUD-004: Transiciones de movimiento
  it("valida que las transiciones de movimiento están documentadas correctamente", () => {
    const rulesKBContent = rulesKB.map(r => r.content).join("\n");
    expect(rulesKBContent).toContain("Superficie ↔ Subterráneo");
    expect(rulesKBContent).toContain("Superficie ↔ Mar");
    expect(rulesKBContent).toContain("Mar ↔ Mar");
    expect(rulesKBContent).toContain("Puerta Subterránea");
    expect(rulesKBContent).toContain("Monolitos");
    expect(rulesKBContent).toContain("Torbellinos");
  });

  // AUD-005: Regla de ciudades capturadas
  it("valida que la regla de ciudades capturadas está correctamente documentada", () => {
    const rulesKBContent = rulesKB.map(r => r.content).join("\n");
    expect(rulesKBContent).toContain("captura una ciudad ajena");
    expect(rulesKBContent).toContain("no puede usar sus edificios");
    expect(rulesKBContent).toContain("conserva su ficha de ciudad");
  });

  // AUD-006: Verificar que los datos de escenarios incluyen recursos iniciales
  it("valida que los escenarios incluyen datos iniciales verificados (AUD-010)", () => {
    const scenariosWithData = SCENARIOS.filter(s => s.initialResources && s.initialResources.gold >= 0);
    expect(scenariosWithData.length).toBeGreaterThan(0);
    const sample = scenariosWithData[0];
    expect(sample.initialResources.gold).toBeDefined();
    expect(sample.initialTroops).toBeDefined();
    expect(sample.startingFaction).toBeDefined();
    expect(sample.startingHero).toBeDefined();
    expect(sample.campaignMode).toBeDefined();
  });

  // AUD-007: Verificar que las habilidades secundarias están completas
  it("valida que las habilidades secundarias están completas (32 habilidades)", () => {
    const skillNames = ALL_BOARD_GAME_SKILLS.map((skill) => skill.name);
    expect(skillNames).toHaveLength(32);
    expect(new Set(skillNames).size).toBe(32);
  });

  // AUD-008: Verificar que los lugares están alineados con sus fichas normativas
  it("valida que los lugares están alineados con sus fichas normativas", () => {
    const locationsById = Object.fromEntries(LOCATIONS_DATA.map((location) => [location.id, location]));
    expect(locationsById.magic_spring.type).toBe("Visitable");
    expect(locationsById.shrine_magic_incantation.effect).toContain("buscar (2)");
    expect(locationsById.pandoras_box.effect).toContain("2 dados de Tesoro");
    expect(locationsById.trading_post.effect).toContain("Elige una opción");
    expect(locationsById.flotsam.effect).toBe("Gana 2 Materiales de construcción.");
  });

  // AUD-009: Verificar que las ciudades tienen datos válidos
  it("valida que las ciudades tienen datos de edificios y unidades válidos", () => {
    Object.entries(townsData).forEach(([factionId, town]) => {
      expect(town.buildings.length).toBe(7);
      expect(town.units.bronze).toBeDefined();
      expect(town.units.silver).toBeDefined();
      expect(town.units.gold).toBeDefined();
    });
  });

  // AUD-010: Verificar que los hechizos están completos
  it("valida que los hechizos están completos (59 hechizos)", () => {
    expect(SPELLS_DATA.length).toBe(59);
    const spellNames = SPELLS_DATA.map(s => s.name);
    expect(new Set(spellNames).size).toBe(59);
  });
});
