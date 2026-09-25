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
          <nav
            className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm"
            aria-label="Contact links"
          >
            <a
              className="footer-contact-link"
              href={`mailto:${personal.email}`}
            >
              Email
            </a>
            <a
              className="footer-contact-link"
              href={personal.social.github.url}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="footer-contact-link"
              href={personal.social.linkedin.url}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="footer-contact-link"
              href={personal.resume}
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </nav>
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
