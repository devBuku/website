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
        <header className="section-block !border-0 !pb-12 !pt-0 sm:!pb-16">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <p className="eyebrow">01 / the short version</p>
              <h1 className="text-5xl font-semibold tracking-[-0.06em] sm:text-7xl">
                Resume
              </h1>
              <p className="text-muted mt-6 max-w-xl text-lg leading-relaxed">
                Education, experience, projects, and the technologies I use to
                build.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={personal.resume} download className="btn btn-primary">
                <Download data-icon="inline-start" />
                Download PDF
              </a>
              <a
                href={personal.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <ExternalLink data-icon="inline-start" />
                Open
              </a>
            </div>
          </div>
        </header>
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
