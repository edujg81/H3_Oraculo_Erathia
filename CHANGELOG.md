# Changelog

## Unreleased

- 2026-08-13: Update CI to use Node 20 for dependency compatibility. Current dependencies (`@google/genai@2.4.0`, `@vitejs/plugin-react@5.0.4`) require Node >=20.
- 2026-08-13: Update documentation (README.md, DEV_ENVIRONMENT.md, DEPLOYMENT.md) to reflect Node 20 as the minimum required version.
- 2026-08-12: Fix RulesBrowser tab navigation category checks in TypeScript validation.
- 2026-08-12: Pin `undici` to `6.17.0` to ensure compatibility with Node 18 development environments.
- 2026-08-12: Load `.env` via absolute path in `server.ts` and add warnings when `.env` or `GEMINI_API_KEY` are missing.
- 2026-08-12: Fix type/import conflict for `GoogleGenAI` and adjust dynamic import to `GoogleGenAIClient`.
- 2026-08-12: Add documentation about "Cartas de Habilidad Potenciada" in `SkillsBrowser` UI.

