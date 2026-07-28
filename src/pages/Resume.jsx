import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Download, ExternalLink } from 'lucide-react';
import { personal } from '../data/personal';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';

export default function Resume() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <Helmet>
        <title>Resume — Shubhayan Bagchi (devBuku)</title>
        <meta
          name="description"
          content="Download or view Shubhayan Bagchi's resume — final-year CSE student, backend developer, SIH 2023 Finalist. Open to SDE internship opportunities."
        />
        <meta
          property="og:title"
          content="Resume — Shubhayan Bagchi (devBuku)"
        />
        <meta
          property="og:description"
          content="Download or view the resume of Shubhayan Bagchi — backend developer and final-year CSE student."
        />
      </Helmet>

      <ScrollReveal>
        <section className="mb-12">
          <Link
            to="/"
            className="mb-6 inline-flex items-center gap-1.5 text-base transition-opacity hover:opacity-70"
            style={{ color: 'rgb(var(--color-text-muted))' }}
          >
            <ArrowLeft size={14} />
            Back to home
          </Link>
          <SectionHeading as="h1">Resume</SectionHeading>
          <p
            className="max-w-lg text-base leading-relaxed"
            style={{ color: 'rgb(var(--color-text-muted))' }}
          >
            Download my resume to see the full details of my education,
            experience, projects, and skills.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={personal.resume}
              download
              className="btn-primary inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-base font-medium transition-all duration-200"
            >
              <Download size={14} />
              Download PDF
            </a>
            <a
              href={personal.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-base font-medium transition-all duration-200"
            >
              <ExternalLink size={14} />
              Open in New Tab
            </a>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <div
          className="overflow-hidden rounded-xl border"
          style={{
            borderColor: 'rgb(var(--color-border))',
            backgroundColor: 'rgb(var(--color-bg-raised))',
          }}
        >
          <iframe
            src={personal.resume}
            className="h-[80vh] w-full sm:h-[90vh]"
            title="Shubhayan Bagchi — Resume"
            style={{ border: 'none' }}
            loading="lazy"
          />
          {/* Fallback for browsers (e.g. mobile Safari) that block PDF iframes */}
          <noscript>
            <p
              className="p-6 text-center text-base"
              style={{ color: 'rgb(var(--color-text-muted))' }}
            >
              Your browser cannot display the PDF inline.{' '}
              <a
                href={personal.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Download it here.
              </a>
            </p>
          </noscript>
        </div>
        {/* Visible fallback download link below iframe for mobile users */}
        <p
          className="mt-4 text-center text-[13px]"
          style={{ color: 'rgb(var(--color-text-faint))' }}
        >
          If the PDF doesn&apos;t load,{' '}
          <a
            href={personal.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 transition-opacity hover:opacity-70"
            style={{ color: 'rgb(var(--color-accent))' }}
          >
            open it directly
          </a>{' '}
          or use the Download PDF button above.
        </p>
      </ScrollReveal>
    </div>
  );
}
