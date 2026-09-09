# Pre-commit Hooks y Formateo

Configuración recomendada para mantener consistencia antes de cada commit.

## Husky + lint-staged

```bash
npm install --save-dev husky lint-staged
npx husky init
```

En `.husky/pre-commit`:

```bash
npx lint-staged
```

En `package.json`:

```json
"lint-staged": {
  "*.{ts,tsx}": ["npm run lint", "git add"]
}
```

## Formato

- `npm run lint` debe pasar (`tsc --noEmit` = 0).
- No se permiten `console.log` en producción.
- Usa comillas simples y punto y coma consistente.
