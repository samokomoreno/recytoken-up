

---

## Autenticación con NextAuth
- Proveedores configurados: **Google**, **Facebook** y **Email (enlace mágico)**.
- Verificación de correo con HTML enriquecido (EmailProvider). Hasta verificar, el usuario queda en **modo view** (solo lectura).
- **Prisma Adapter** con SQLite por defecto.

### Configurar
1) Copia `.env.example` a `.env.local` y completa:
   - `NEXTAUTH_SECRET` (puedes generar con `openssl rand -base64 32`)
   - `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET`
   - `FACEBOOK_CLIENT_ID` / `FACEBOOK_CLIENT_SECRET`
   - SMTP: `EMAIL_SERVER_*` y `EMAIL_FROM`
2) Inicializa Prisma y BD SQLite:
```bash
npx prisma migrate dev --name init
```
3) Ejecuta la app:
```bash
npm install
npm run dev
```

### Notas
- Botones de Google/Facebook en `/login` llaman a NextAuth.
- Registro vía `/register` envía **enlace mágico** al correo.
- Las páginas de formularios deshabilitan acciones si el correo **no está verificado**.
