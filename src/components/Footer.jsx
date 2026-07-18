import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { HiOutlineMail, HiOutlineDocumentDownload } from "react-icons/hi";
import { personal } from "../data/personal";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t transition-colors duration-300"
      style={{ borderColor: "rgb(var(--color-border))" }}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <a href={`mailto:${personal.email}`}
              className="flex items-center gap-1.5 text-sm opacity-60 hover:opacity-100 transition-opacity"
              style={{ color: "rgb(var(--color-text-muted))" }}>
              <HiOutlineMail size={16} />
              <span className="font-mono text-xs">{personal.email}</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a href={personal.social.github.url} target="_blank" rel="noopener noreferrer"
              className="opacity-60 hover:opacity-100 transition-opacity" aria-label="GitHub">
              <FaGithub size={16} />
            </a>
            <a href={personal.social.linkedin.url} target="_blank" rel="noopener noreferrer"
              className="opacity-60 hover:opacity-100 transition-opacity" aria-label="LinkedIn">
              <FaLinkedinIn size={16} />
            </a>
            <a href={personal.social.twitter.url} target="_blank" rel="noopener noreferrer"
              className="opacity-60 hover:opacity-100 transition-opacity" aria-label="Twitter">
              <FaTwitter size={16} />
            </a>
            <a href={personal.resume} download
              className="opacity-60 hover:opacity-100 transition-opacity" aria-label="Download Resume">
              <HiOutlineDocumentDownload size={18} />
            </a>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="font-mono text-xs opacity-40">
            &copy; {year} {personal.name} &mdash; built with React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
