import { Helmet } from 'react-helmet-async';
import { personal } from '../data/personal';
import ScrollReveal from '../components/ScrollReveal';
import PageHeader from '../components/PageHeader';

export default function Contact() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <Helmet>
        <title>Contact — Shubhayan Bagchi (devBuku)</title>
        <meta
          name="description"
          content="Get in touch with Shubhayan Bagchi (devBuku) — open to SDE internships and entry-level roles. Based in Kolkata, India."
        />
        <meta
          property="og:title"
          content="Contact — Shubhayan Bagchi (devBuku)"
        />
        <meta
          property="og:description"
          content="Open to SDE internships and entry-level roles. Based in Kolkata, India."
        />
      </Helmet>

      <ScrollReveal>
        <PageHeader>Contact</PageHeader>

        <div className="space-y-3">
          <div>
            <p
              className="font-mono text-[13px]"
              style={{ color: 'rgb(var(--color-text-faint))' }}
            >
              email
            </p>
            <a
              href={`mailto:${personal.email}`}
              className="text-base transition-opacity hover:opacity-70"
              style={{ color: 'rgb(var(--color-text-muted))' }}
            >
              {personal.email}
            </a>
          </div>
          <div>
            <p
              className="font-mono text-[13px]"
              style={{ color: 'rgb(var(--color-text-faint))' }}
            >
              github
            </p>
            <a
              href={personal.social.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base transition-opacity hover:opacity-70"
              style={{ color: 'rgb(var(--color-text-muted))' }}
            >
              {personal.social.github.url.replace('https://', '')}
            </a>
          </div>
          <div>
            <p
              className="font-mono text-[13px]"
              style={{ color: 'rgb(var(--color-text-faint))' }}
            >
              linkedin
            </p>
            <a
              href={personal.social.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base transition-opacity hover:opacity-70"
              style={{ color: 'rgb(var(--color-text-muted))' }}
            >
              {personal.social.linkedin.url.replace('https://', '')}
            </a>
          </div>
          <div>
            <p
              className="font-mono text-[13px]"
              style={{ color: 'rgb(var(--color-text-faint))' }}
            >
              location
            </p>
            <p
              className="text-base"
              style={{ color: 'rgb(var(--color-text-muted))' }}
            >
              {personal.location}
            </p>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
