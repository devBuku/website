# website — devBuku portfolio

React 19 + Vite 7 SPA. Tailwind CSS, no TypeScript, no test framework.

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
| `/` | Home (Hero, About, Experience, Projects, Skills, Blog, Achievements, Contact) |
| `/work` | Projects (with category tabs) |
| `/experience` | Experience timeline |
| `/about` | About (bio, education, skills, achievements) |
| `/blog` | Blog listing |
| `/blog/:slug` | Blog post (Markdown) |
| `/resume` | Resume (embedded PDF viewer) |
| `/contact` | Contact (form + social links) |

## Structure

- **Entrypoint**: `src/main.jsx` — wraps App in `<BrowserRouter>`, imports `global.css`
- **Layout**: `src/App.jsx` — `<Navbar>` / `<Routes>` / `<Footer>`
- **Data**: `src/data/` — `personal.js`, `projects.js`, `skills.js`, `experience.js`, `navigation.js`
- **Components**: `src/components/` — Navbar, Footer, ThemeToggle, ProjectCard, BlogCard, Card, Tag, SectionHeading, ContactForm, ExperienceTimeline, SkillSection, ScrollReveal
- **Pages**: `src/pages/` — Home, About, Projects, Experience, Blog, BlogPost, Resume, Contact
- **Blog content**: `src/content/blog/` — Markdown files with frontmatter, parsed by `posts.js`
- **Styles**: `src/index.css` — Tailwind base + component layer + CSS custom properties
- **Static**: `public/` — images served at root path (`/me.jpg`, `/resume.pdf`, etc.)

## Design system

- **Dark mode default** via `<html class="dark">`, toggled via `.light`/`.dark` classes on `<html>`
- **Color system**: CSS custom properties (`--color-bg`, `--color-text`, etc.) defined in `index.css` for both themes
- **Buttons**: `.btn-primary`, `.btn-outline`, `.btn-ghost` in CSS component layer
- **Cards**: `.card` utility class with border + hover state
- **Icons**: `lucide-react` for UI icons, `react-icons/fa` for brand icons (GitHub, LinkedIn, Twitter)
- **No TypeScript**. All source is `.jsx`

## Style conventions

- **Project cards** on `/work`: `View on GitHub` + `Live Demo` buttons. Expanded view with highlights on click.
- **Experience timeline** uses vertical timeline with dots, arrows, and tech tags.
- **Skills** organized by category in a responsive grid.
- **Blog posts** use Markdown with `react-markdown`, `remark-gfm`, `rehype-highlight`.

## Quirks

- Live Demo buttons on `/work` link to `"#"` (unreachable — not deployed).
- Favicon is `/me.jpg` (portrait photo, not an icon file).
- Prettier installed but unconfigured — not part of lint.
- Contact form uses Formspree (`https://formspree.io/f/meoayaar`) with fallback to `mailto:`.

## Deployment

- **Platform:** Vercel (auto-detects Vite, `vercel.json` config).
- **SPA routing:** `vercel.json` rewrites all paths to `/index.html`.
- **Build output:** `dist/`.
- **Static assets** in `public/` served at root-relative paths.
