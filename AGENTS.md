# website — devBuku portfolio

React 19 + Vite 7 SPA. Plain CSS, no TypeScript, no test framework.

## Commands

| Action | Command |
|--------|---------|
| Dev server | `npm run dev` |
| Build | `npm run build` |
| Preview build | `npm run preview` |
| Lint | `npm run lint` |

## Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/work` | Projects |
| `/about` | About |
| `/contact` | Contact |

## Structure

- Entrypoint: `src/main.jsx` — wraps App in `<BrowserRouter>`, imports `global.css`
- Layout: `src/App.jsx` — `<Navbar>` / `<Routes>` / `<Footer>`
- Components: `src/components/` — Navbar, Footer, Hero, ServiceCard
- Pages: `src/pages/` — Home, About, Projects, Contact
- Styles: `src/styles/` — plain CSS per component/page (no modules or preprocessors)
- Static: `public/` — images served at root path (`/me.jpg`, `/resume.pdf`, etc.)

## Style conventions

- **Buttons** use global classes: `.btn-primary`, `.btn-outline`, `.btn-secondary`.
- **Project cards** on `/work`: `View on GitHub` (`.btn-outline`) + `Live Demo` (`.btn-primary`). Home featured projects link to `/work` via "View All Projects".
- **Bullet lists** on `/work` use `→` via `.project-highlights li::before`.
- **Dark mode** toggled via `<body data-theme="dark">`, persisted in `localStorage`. Use CSS custom properties (`--secondary-text`, `--border-color`, etc.) — no hardcoded colors.
- **Icons** from `react-icons` — `Fa*` (Font Awesome) and `HiOutline*` (Heroicons).
- **No TypeScript.** All source is `.jsx`.

## Quirks

- Live Demo buttons on `/work` link to `"#"` (unreachable — not deployed).
- Favicon is `/me.jpg` (portrait photo, not an icon file).
- Prettier installed but unconfigured — not part of lint.

## Deployment

- **Platform:** Vercel (auto-detects Vite, `vercel.json` config).
- **SPA routing:** `vercel.json` rewrites all paths to `/index.html`.
- **Build output:** `dist/`.
- **Static assets** in `public/` served at root-relative paths.
