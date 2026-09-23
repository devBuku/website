import { Helmet } from 'react-helmet-async';
import { ArrowUpRight, Mail, MapPin } from 'lucide-react';
import { personal } from '../data/personal';
import ScrollReveal from '../components/ScrollReveal';

export default function Contact() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <Helmet>
        <title>Contact — Shubhayan Bagchi</title>
      </Helmet>
      <ScrollReveal>
        <header className="section-block !border-0 !pb-16 !pt-0 sm:!pb-20">
          <p className="eyebrow">01 / get in touch</p>
          <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.06em] sm:text-7xl">
            Let&apos;s build something useful.
          </h1>
          <p className="text-muted mt-6 max-w-2xl text-lg leading-relaxed">
            I&apos;m open to software engineering internships, entry-level
            roles, and thoughtful collaborations.
          </p>
        </header>
      </ScrollReveal>
      <div
        className="grid gap-4 border-t pt-10 md:grid-cols-2"
        style={{ borderColor: 'rgb(var(--color-border))' }}
      >
        <ScrollReveal>
          <a
            href={`mailto:${personal.email}`}
            className="card group flex min-h-56 flex-col justify-between"
          >
            <div className="flex items-start justify-between">
              <Mail className="text-accent" />
              <ArrowUpRight className="text-faint transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </div>
            <div>
              <p className="eyebrow">email</p>
              <p className="text-muted text-lg">{personal.email}</p>
            </div>
          </a>
        </ScrollReveal>
        <ScrollReveal delay={70}>
          <a
            href={personal.social.github.url}
            target="_blank"
            rel="noopener noreferrer"
            className="card group flex min-h-56 flex-col justify-between"
          >
            <div className="flex items-start justify-between">
              <span className="font-mono text-2xl text-accent">GH</span>
              <ArrowUpRight className="text-faint transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </div>
            <div>
              <p className="eyebrow">github</p>
              <p className="text-muted text-lg">
                {personal.social.github.url.replace('https://', '')}
              </p>
            </div>
          </a>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <div className="card md:col-span-2">
            <MapPin className="text-accent" />
            <p className="eyebrow mt-12">location</p>
            <p className="text-muted text-lg">{personal.location}</p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
