import { Helmet } from 'react-helmet-async';
import { Download, ExternalLink } from 'lucide-react';
import { personal } from '../data/personal';
import ScrollReveal from '../components/ScrollReveal';

export default function Resume() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <Helmet>
        <title>Resume — Shubhayan Bagchi</title>
      </Helmet>
      <ScrollReveal>
        <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="space-y-4">
            <p className="eyebrow">the short version</p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Resume
            </h1>
            <p className="text-muted max-w-xl text-lg">
              Education, experience, projects, and the technologies I use to
              build.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={personal.resume} download className="btn-primary">
              <Download data-icon="inline-start" />
              Download PDF
            </a>
            <a
              href={personal.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <ExternalLink data-icon="inline-start" />
              Open
            </a>
          </div>
        </div>
      </ScrollReveal>
      <ScrollReveal delay={80}>
        <div
          className="overflow-hidden rounded-2xl border"
          style={{
            borderColor: 'rgb(var(--color-border))',
            backgroundColor: 'rgb(var(--color-bg-raised))',
          }}
        >
          <iframe
            src={personal.resume}
            className="h-[75vh] w-full sm:h-[90vh]"
            title="Shubhayan Bagchi — Resume"
            style={{ border: 'none' }}
            loading="lazy"
          />
        </div>
        <p className="text-faint mt-4 text-center text-sm">
          If the PDF doesn&apos;t load, use the download or open buttons above.
        </p>
      </ScrollReveal>
    </div>
  );
}
