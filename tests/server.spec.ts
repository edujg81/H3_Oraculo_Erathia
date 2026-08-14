import request from "supertest";
import { describe, it, expect } from "vitest";
import { app } from "../server";

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
});
