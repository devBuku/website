import { personal } from '../data/personal';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t transition-colors duration-300"
      style={{ borderColor: 'rgb(var(--color-border))' }}
    >
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-base font-medium">{personal.name}</p>

          <div
            className="flex items-center gap-4 text-[13px]"
            style={{ color: 'rgb(var(--color-text-faint))' }}
          >
            <a
              href={personal.social.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-70"
            >
              GitHub
            </a>
            <a
              href={personal.social.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-70"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="transition-opacity hover:opacity-70"
            >
              Email
            </a>
          </div>
        </div>

        <p
          className="mt-6 text-center text-[13px]"
          style={{ color: 'rgb(var(--color-text-faint) / 0.6)' }}
        >
          &copy; {year} {personal.name}
        </p>
      </div>
    </footer>
  );
}
