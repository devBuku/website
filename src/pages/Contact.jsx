import { Link } from "react-router-dom";
import { ArrowLeft, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { personal } from "../data/personal";
import SectionHeading from "../components/SectionHeading";
import ScrollReveal from "../components/ScrollReveal";
import Card from "../components/Card";

export default function Contact() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
      <ScrollReveal>
        <section className="mb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm transition-opacity hover:opacity-70 mb-6"
            style={{ color: "rgb(var(--color-text-muted))" }}
          >
            <ArrowLeft size={14} />
            Back to home
          </Link>
          <SectionHeading>Contact</SectionHeading>
          <p
            className="text-sm leading-relaxed max-w-lg"
            style={{ color: "rgb(var(--color-text-muted))" }}
          >
            I&apos;m open to internships and entry-level SDE roles starting August 1. If you have an
            opportunity or just want to connect, reach out.
          </p>
        </section>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <ScrollReveal delay={50} className="lg:col-span-3">
          <Card className="p-8 sm:p-10 h-full">
            <h3 className="text-lg font-bold mb-4">
              Let&apos;s Connect
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "rgb(var(--color-text-muted))" }}
            >
              I&apos;m currently preparing for software engineering internships starting August 1.
              If you have an opportunity, a project idea, or just want to connect — send me an
              email.
            </p>
            <a
              href={`mailto:${personal.email}`}
              className="btn-primary inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium rounded-lg"
            >
              <Mail size={15} />
              Send Email
            </a>
          </Card>
        </ScrollReveal>

        <ScrollReveal delay={100} className="lg:col-span-2 flex flex-col gap-4">
          <Card className="p-5 flex-1">
            <h3
              className="text-xs font-mono uppercase tracking-wider mb-4"
              style={{ color: "rgb(var(--color-text-faint))" }}
            >
              Links
            </h3>
            <div className="space-y-3">
              <a
                href={personal.social.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
                style={{ color: "rgb(var(--color-text-muted))" }}
              >
                <FaGithub size={14} />
                GitHub
              </a>
              <a
                href={personal.social.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
                style={{ color: "rgb(var(--color-text-muted))" }}
              >
                <FaLinkedinIn size={14} />
                LinkedIn
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
                style={{ color: "rgb(var(--color-text-muted))" }}
              >
                <Mail size={14} />
                {personal.email}
              </a>
            </div>
          </Card>

          <Card className="p-5 flex-1">
            <h3
              className="text-xs font-mono uppercase tracking-wider mb-4"
              style={{ color: "rgb(var(--color-text-faint))" }}
            >
              Location
            </h3>
            <p className="text-sm" style={{ color: "rgb(var(--color-text-muted))" }}>
              {personal.location}
            </p>
          </Card>
        </ScrollReveal>
      </div>
    </div>
  );
}
