# Changelog

## [2.0.1](https://github.com/edujg81/H3_Oraculo_Erathia/compare/v2.0.0...v2.0.1) (2026-08-16)


### Bug Fixes

* corrección workflow para generar imagen docker ([023987e](https://github.com/edujg81/H3_Oraculo_Erathia/commit/023987efec5175bc2c333eaf00e4ce3f1ff9143b))

# [2.0.0](https://github.com/edujg81/H3_Oraculo_Erathia/compare/v1.0.0...v2.0.0) (2026-08-16)


### Bug Fixes

* reconocer breaking changes con ! ([958c7d6](https://github.com/edujg81/H3_Oraculo_Erathia/commit/958c7d63b79603ec6ae5f4fff022b9dbf85d712c))


* feat!: Se añade página inicial y cambio de logo ([415347f](https://github.com/edujg81/H3_Oraculo_Erathia/commit/415347fdbdac2006eb1c934a7e96c8aa3118da9d))


### BREAKING CHANGES

* Se añade página inicial y cambio de logo

## Unreleased

- 2026-08-13: Update CI to use Node 20 for dependency compatibility. Current dependencies (`@google/genai@2.4.0`, `@vitejs/plugin-react@5.0.4`) require Node >=20.
- 2026-08-13: Update documentation (README.md, DEV_ENVIRONMENT.md, DEPLOYMENT.md) to reflect Node 20 as the minimum required version.
- 2026-08-12: Fix RulesBrowser tab navigation category checks in TypeScript validation.
- 2026-08-12: Pin `undici` to `6.17.0` to ensure compatibility with Node 18 development environments.
- 2026-08-12: Load `.env` via absolute path in `server.ts` and add warnings when `.env` or `GEMINI_API_KEY` are missing.
- 2026-08-12: Fix type/import conflict for `GoogleGenAI` and adjust dynamic import to `GoogleGenAIClient`.
- 2026-08-12: Add documentation about "Cartas de Habilidad Potenciada" in `SkillsBrowser` UI.
