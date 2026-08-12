# Contribuir al proyecto

Gracias por querer contribuir. Este documento resume el flujo de trabajo recomendado y las herramientas que usamos.

Ramas y Pull Requests
- Rama principal: `main` o `master` (según prefieras).
- Trabaja en ramas con prefijo: `feat/`, `fix/`, `chore/`, `docs/`, `ci/`.
- Abre Pull Requests contra `main`. Describe el cambio, referencia issues y añade capturas o pasos para probar.

Commits
- Usa Conventional Commits (ejemplos):
  - `feat(ui): añadir botón de reclutamiento`
  - `fix(server): manejar error null en /api/chat`
  - `docs: actualizar README sobre despliegue`

Requisitos locales antes de abrir PR

```bash
# instalar dependencias
npm ci
# compilar tipos/ts
npm run build
# ejecutar lint (si existe)
npm run lint
# ejecutar tests (si existen)
npm test
```

Pre-commit hooks
- Recomendado: instalar `husky` y `lint-staged` para formateo y chequeos pre-commit.
- Hooks sugeridos:
  - `npm run format` en archivos staged
  - `npm run lint` en archivos staged

Revisión de PR
- Añade reviewers y asigna una persona responsable.
- Asegúrate de que `lint` y `build` pasen en CI.

Guía rápida para nuevos colaboradores
- Lee `README.md` y `DEV_ENVIRONMENT.md` para levantar el ambiente local.
- Para cambios en datos (`src/data/*`) sigue las reglas de `AGENTS.md` (convenciones de nombres y localización).

Contacto
- Abre un issue para discutir cambios grandes antes de implementarlos.

Gracias por contribuir! 🎲
