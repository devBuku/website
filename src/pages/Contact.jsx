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
        <div className="mb-16 max-w-3xl space-y-5 sm:mb-20">
          <p className="eyebrow">get in touch</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Let&apos;s build something useful.
          </h1>
          <p className="text-muted text-lg">
            I&apos;m open to software engineering internships, entry-level
            roles, and thoughtful collaborations.
          </p>
        </div>
      </ScrollReveal>
      <div className="grid gap-4 md:grid-cols-2">
        <ScrollReveal>
          <a
            href={`mailto:${personal.email}`}
            className="card group flex items-start justify-between"
          >
            <span>
              <Mail className="mb-8 text-accent" />
              <span className="eyebrow">email</span>
              <span className="text-muted block text-lg">{personal.email}</span>
            </span>
            <ArrowUpRight className="text-faint transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
        </ScrollReveal>
        <ScrollReveal delay={70}>
          <a
            href={personal.social.github.url}
            target="_blank"
            rel="noopener noreferrer"
            className="card group flex items-start justify-between"
          >
            <span>
              <span className="mb-8 block font-mono text-2xl text-accent">
                GH
              </span>
              <span className="eyebrow">github</span>
              <span className="text-muted block text-lg">
                {personal.social.github.url.replace('https://', '')}
              </span>
            </span>
            <ArrowUpRight className="text-faint transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
        </ScrollReveal>
        <div className="card md:col-span-2">
          <MapPin className="mb-8 text-accent" />
          <p className="eyebrow">location</p>
          <p className="text-muted text-lg">{personal.location}</p>
        </div>
      </div>
    </div>
  );
}
