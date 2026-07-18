import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Mail, FileText } from "lucide-react";
import { personal } from "../data/personal";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t transition-colors duration-300"
      style={{ borderColor: "rgb(var(--color-border))" }}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-sm font-semibold">{personal.name}</p>
            <p
              className="text-xs mt-0.5"
              style={{ color: "rgb(var(--color-text-muted))" }}
            >
              Full-Stack Developer
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`mailto:${personal.email}`}
              className="opacity-50 hover:opacity-100 transition-opacity p-2 rounded-lg hover:bg-gray-800/50"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
            <a
              href={personal.social.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-50 hover:opacity-100 transition-opacity p-2 rounded-lg hover:bg-gray-800/50"
              aria-label={personal.social.github.label}
            >
              <FaGithub size={16} />
            </a>
            <a
              href={personal.social.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-50 hover:opacity-100 transition-opacity p-2 rounded-lg hover:bg-gray-800/50"
              aria-label={personal.social.linkedin.label}
            >
              <FaLinkedinIn size={16} />
            </a>
            <a
              href={personal.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-50 hover:opacity-100 transition-opacity p-2 rounded-lg hover:bg-gray-800/50"
              aria-label="Resume"
            >
              <FileText size={16} />
            </a>
          </div>
        </div>

        <div
          className="mt-6 pt-6 text-center border-t"
          style={{ borderColor: "rgb(var(--color-border))" }}
        >
          <p className="text-xs" style={{ color: "rgb(var(--color-text-faint))" }}>
            &copy; {year} {personal.name} &mdash; Built with React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
