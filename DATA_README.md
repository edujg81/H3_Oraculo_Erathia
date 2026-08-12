# Data: estructura y guía de edición

Todos los datos de juego viven en `src/data/`. Esta carpeta es la única fuente de verdad para héroes, unidades, hechizos, habilidades y reglas.

Archivos clave
- `src/data/heroesData.ts` — definiciones de héroes
- `src/data/unitsData.ts` — unidades reclutables y neutrales
- `src/data/spellsData.ts` — hechizos
- `src/data/skillsData.ts` — 32 habilidades secundarias
- `src/data/townsData.ts` — ciudades y facciones
- `src/data/rulesKB.ts` — base combinada de reglas (enviada siempre a Sandro)
- `src/data/knowledgeIndex.ts` — índice/catálogo que genera resúmenes y alias

Buenas prácticas
- No declare datos de juego dentro de componentes. Los componentes deben importar desde `src/data/*`.
- Si añades una unidad, respeta la nomenclatura exacta establecida en `AGENTS.md` (tildes, mayúsculas y formato).
- Cuando añadas nombres que tengan alias (traducciones o sinónimos), registra los alias en la función `registerAliases` en `knowledgeIndex.ts`.
- Evita duplicados: añade una única entrada y reutilízala desde otras estructuras.

Pruebas y verificación
- Después de modificar un archivo de datos, ejecuta la aplicación en dev y usa la búsqueda de la UI para confirmar que el nuevo elemento aparece.
- Si el cambio afecta a `knowledgeIndex.ts`, puede ser necesario reiniciar el servidor para que la indexación se regenere.

Ejemplo simple (unitsData.ts)

```ts
export const units = [
  {
    id: "centauro",
    name: "Centauros",
    faction: "rampart",
    attack: 6,
    defense: 3,
    speed: 6
  }
];
```

Testing manual
- Abrir la vista `UnitsBrowser` y buscar el nombre exacto para validar la ficha.

