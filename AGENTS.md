# website — devBuku portfolio

React 19 + Vite 7 SPA. Plain CSS in `src/styles/`. No test framework.

## Commands

| Action | Command |
|--------|---------|
| Dev server | `npm run dev` |
| Build | `npm run build` |
| Preview build | `npm run preview` |
| Lint | `npm run lint` |

## Routes

| Path | Page | Purpose |
|------|------|---------|
| `/` | Home | First impression, role, highlights, featured projects, CTA |
| `/work` | Projects | Full project showcase with GitHub + Live Demo buttons |
| `/about` | About | Personal story, engineering philosophy, dev environment |
| `/contact` | Contact | Email, GitHub, LinkedIn, Twitter, location |

## Structure

```
src/
├── main.jsx           # Entrypoint (BrowserRouter wrapper, imports global.css)
├── App.jsx            # Routes + layout (Navbar, Footer)
├── components/        # Navbar, Footer, Hero, ServiceCard
├── pages/             # Home, About, Projects, Contact
└── styles/            # Plain CSS per component/page
public/                # Static assets (images, resume.pdf)
vercel.json            # Vercel deployment config with SPA rewrites
```

## Key conventions

- **No redundant content across pages.** Home: first impression + proof. Projects: full technical details. About: personal story only — no skill lists, no achievement repetition.
- **Buttons** use global `.btn` classes defined in `global.css` (`.btn-primary`, `.btn-outline`, `.btn-secondary`). Available on every page.
- **Project cards** on `/work` have two buttons each: `View on GitHub` (`.btn-outline`) and `Live Demo` (`.btn-primary`). Home featured projects have no per-card buttons — they link to `/work` via "View All Projects" CTA.
- **Bullet lists** use `→` arrow style via `::before` pseudo-element (`.about-bullets`, `.project-highlights`). Consistent across About and Projects pages.
- **Dark mode** uses `data-theme="dark"` on `<body>` with CSS custom properties (`--secondary-text`, `--border-color`, etc.). All page stylesheets use these vars; avoid hardcoded colors.

## Deployment

- **Platform:** Vercel (auto-detects Vite, configured in `vercel.json`).
- **SPA routing:** `vercel.json` rewrites all paths to `/index.html` so BrowserRouter works on refresh.
- **Build output:** `dist/` (Vite default).
- **Static assets** in `public/` (images, resume.pdf) are served at root-relative paths (e.g. `/me.jpg`, `/resume.pdf`).

## Notes

- **No generated code**, migrations, or build artifacts.
- **No test infrastructure** — do not add tests without asking.
- **Routing** uses `react-router-dom` v7 with `BrowserRouter`.
- **Styling** is plain CSS imported in each page/component file. No CSS modules or preprocessors.
- **Prettier** is installed but has no config file — format checks are not part of `lint`.
