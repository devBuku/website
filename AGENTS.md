# website — devBuku portfolio

React 19 + Vite 7 SPA. Tailwind CSS v3, no TypeScript, no test framework.

## Commands (pnpm — npm will not work)

| Action        | Command                        |
| ------------- | ------------------------------ |
| Dev server    | `pnpm dev`                     |
| Build         | `pnpm build`                   |
| Preview build | `pnpm preview`                 |
| Lint          | `pnpm lint`                    |
| Lint + fix    | `pnpm lint:fix`                |
| Format        | `pnpm format` / `format:check` |

- Vercel builds with pnpm (lockfile auto-detected) — install deps with `pnpm install`, not npm.
- `pnpm-workspace.yaml` sets `allowBuilds: esbuild: false`. Do not remove this; esbuild builds fine without its postinstall script.
- Prettier **is** configured (`.prettierrc` + `prettier-plugin-tailwindcss`) and enforced: husky pre-commit runs lint-staged (prettier + eslint --fix on staged files). Run `pnpm format` before committing or the hook will fail.

## Routes

Defined in `src/App.jsx` (React Router v7). All routes are wrapped in a framer-motion `AnimatePresence` + `PageTransition` keyed by pathname — new pages go in the `<Routes>` block.

| Path              | Page                     |
| ----------------- | ------------------------ |
| `/`               | Home                     |
| `/work`           | Projects                 |
| `/projects/:slug` | ProjectDetail            |
| `/experience`     | Experience               |
| `/about`          | About                    |
| `/blog`           | Blog                     |
| `/blog/:slug`     | BlogPost (Markdown)      |
| `/resume`         | Resume (PDF viewer)      |
| `/contact`        | Contact                  |
| `*`               | NotFound (inline in App) |

## Structure

- **Entrypoint**: `src/main.jsx` — `HelmetProvider` > `BrowserRouter` > `App`; imports `./index.css` and highlight.js styles
- **Data**: `src/data/` — `personal.js`, `projects.js`, `skills.js`, `experience.js`, `navigation.js`. Almost all page copy lives here, not hardcoded in pages.
- **Components**: `src/components/` — Navbar, Footer, ThemeToggle, ScrollProgressBar, ScrollReveal, Card, Tag, SectionHeading, PageHeader, ProjectCard/ProjectRow/ProjectPlaceholder, NeofetchCard, ContactForm, ExperienceTimeline, SkillSection, BlogCard
- **Pages**: `src/pages/` — one per route
- **Blog content**: `src/content/blog/posts.js` exports `blogPosts` (currently `[]`). **Not Markdown files.** Post shape: `slug, title, date, readTime, tags, excerpt, content` where `content` is a Markdown string rendered by react-markdown + remark-gfm + rehype-highlight.
- **Styles**: `src/index.css` — Tailwind base/components/utilities + CSS custom properties
- **Static**: `public/` served at root (`/me.jpg`, `/resume.pdf`, `/sitemap.xml`, `/robots.txt`)

## Design system

- **Dark mode default**: `index.html` has `<html class="dark">`; ThemeToggle toggles `.light`/`.dark` on `<html>`.
- **Colors**: RGB-triplet CSS variables in `index.css` (`:root` = dark, `.light` = light overrides), consumed as `rgb(var(--color-accent) / 0.5)`. New colors must be defined for both themes. Tailwind theme palette (`surface`, `accent`, `ink`, `border`) mirrors these.
- **Reusable classes** in `@layer components`: `.btn`, `.btn-primary`, `.btn-outline`, `.btn-ghost`, `.tag`, `.card`, `.section-heading`, `.prose-custom` (blog/README rendering).
- **Fonts**: Geist (sans) + JetBrains Mono (mono) loaded from Google Fonts in `index.html`; `font-mono` used for tags/labels/labels.
- **Icons**: `lucide-react` for UI icons, `react-icons/fa` for brand (GitHub/LinkedIn/X).
- **SEO**: per-page `<Helmet>` from `react-helmet-async` (Provider already in `main.jsx`); global meta in `index.html`.

## Quirks

- Blog listing is empty until posts are added to `posts.js` — don't look for Markdown files.
- Live Demo buttons are hidden when `project.live === '#'` (in `projects.js` and `ProjectDetail.jsx`).
- Contact form POSTs to Formspree (`https://formspree.io/f/meoayaar`), falls back to `mailto:`.
- Favicon is `/me.jpg` (portrait photo, not an icon file).
- eslint `no-unused-vars` ignores uppercase-named vars and `motion`, so `import { motion }` can be unused.
- `@vercel/analytics` is mounted in `App.jsx`.

## Deployment

- **Platform**: Vercel, configured in `vercel.json` (`framework: vite`, `outputDirectory: dist`, rewrite all paths → `/index.html` for SPA routing).
- **Build output**: `dist/`. Static assets in `public/` served at root-relative paths.
