# Seguridad y manejo de secretos

Recomendaciones para proteger las claves y evitar fugas de información sensibles.

1) No subir `.env` al repositorio
- Añade `.env` a `.gitignore`. Mantén un archivo `.env.example` sin valores reales.

2) Uso de Secret Manager / CI secrets
- En producción usa Secret Manager (GCP Secret Manager / AWS Secrets Manager / GitHub Secrets) y mapéalos como variables de entorno en el servicio.
- Nunca embed claves en imágenes públicas.

3) Rotación de claves
- Rota `GEMINI_API_KEY` periódicamente.
- Si sospechas de fuga: revoca la clave y actualiza secret manager + despliegue.

4) Restricción de acceso a la API
- Habilita límites por IP y un firewall a nivel de red si tu proveedor lo soporta.
- El servidor incluye un rate limiter simple. Para producción usa un rate limiter persistente (Redis) y políticas más granulares.

5) Logging y monitorización
- No escribas claves completas en logs. En lugar de ello, registra identificadores o hashes.
- Monitoriza el uso de la API LLM (tokens, peticiones) para detectar picos inusuales.

6) Buenas prácticas en CI
- Configura variables de entorno en el pipeline y evita imprimirlas en logs.
- Usa `npm ci` en CI para instalar dependencias reproducibles.

7) Alcance mínimo para la clave
- Si el proveedor lo permite, restringe la clave a un conjunto mínimo de permisos o IPs.

8) Recomendación para desarrollo local
- Usa una cuenta de prueba o límite de gasto para la clave de desarrollo.
- Considera usar capacitadores de coste (quotas) y alertas en el proveedor de IA.

