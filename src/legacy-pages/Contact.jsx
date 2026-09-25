import { Helmet } from 'react-helmet-async';
import { ArrowUpRight, Mail, MapPin } from 'lucide-react';
import { personal } from '../data/personal';
import ScrollReveal from '../components/ScrollReveal';

export default function Contact() {
  return (
    <div className="document-page">
      <Helmet>
        <title>Contact — {personal.name}</title>
      </Helmet>
      <ScrollReveal>
        <header className="document-header">
          <p className="document-kicker">Contact / open to ideas</p>
          <h1 className="document-title">Let&apos;s build something useful.</h1>
          <p className="document-lede">
            I&apos;m open to software engineering internships, entry-level
            roles, and thoughtful collaborations.
          </p>
        </header>
      </ScrollReveal>
      <section className="document-grid contact-grid">
        <ScrollReveal>
          <a
            href={`mailto:${personal.email}`}
            className="document-card contact-card"
          >
            <div className="contact-icon">
              <Mail />
            </div>
            <div>
              <p className="document-label">Email</p>
              <p className="document-value">{personal.email}</p>
            </div>
            <ArrowUpRight className="contact-arrow" />
          </a>
        </ScrollReveal>
        <ScrollReveal delay={70}>
          <a
            href={personal.social.github.url}
            target="_blank"
            rel="noopener noreferrer"
            className="document-card contact-card"
          >
            <div className="contact-icon font-mono">GH</div>
            <div>
              <p className="document-label">GitHub</p>
              <p className="document-value">
                {personal.social.github.url.replace('https://', '')}
              </p>
            </div>
            <ArrowUpRight className="contact-arrow" />
          </a>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <div className="document-card contact-card">
            <div className="contact-icon">
              <MapPin />
            </div>
            <div>
              <p className="document-label">Based in</p>
              <p className="document-value">{personal.location}</p>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
