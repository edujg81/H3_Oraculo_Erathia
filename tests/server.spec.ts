import request from "supertest";
import { describe, it, expect } from "vitest";
import { app } from "../server";
import { ALL_BOARD_GAME_SKILLS } from "../src/data/skillsData";
import { LOCATIONS_DATA } from "../src/data/locationsData";

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

  it("mantiene los lugares auditados alineados con sus fichas normativas", () => {
    const locationsById = Object.fromEntries(LOCATIONS_DATA.map((location) => [location.id, location]));

    expect(locationsById.magic_spring.type).toBe("Visitable");
    expect(locationsById.shrine_magic_incantation.effect).toContain("Busca (2)");
    expect(locationsById.shrine_magic_incantation.effect).not.toContain("pagar 3");
    expect(locationsById.pandoras_box.effect).toContain("2 dados de Tesoro");
    expect(locationsById.pandoras_box.effect).toContain("2 dados de Recursos");
    expect(locationsById.trading_post.effect).toContain("Elige una opción");
    expect(locationsById.black_market.effect).toContain("artefacto reliquia");
    expect(locationsById.flotsam.effect).toBe("Gana 2 Materiales de construcción.");
    expect(locationsById.whirlpool.effect).toContain("pierde 1 unidad");
    expect(LOCATIONS_DATA.some((location) => location.id === "elemental_rifts")).toBe(false);
    expect(LOCATIONS_DATA.some((location) => location.id === "conflux_altar")).toBe(false);
  });
});
