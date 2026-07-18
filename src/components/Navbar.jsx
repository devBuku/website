import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaGithub, FaLinkedinIn, FaTwitter, FaSun, FaMoon } from "react-icons/fa";
import { HiOutlineDocumentDownload, HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { personal } from "../data/personal";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
];

function getInitialTheme() {
  const stored = localStorage.getItem("theme");
  return stored === null || stored === "dark";
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(getInitialTheme);
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.classList.toggle("light", !dark);
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("light", !next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav className="sticky top-0 z-50 border-b backdrop-blur-md transition-colors duration-300"
      style={{ backgroundColor: "rgb(var(--color-bg) / 0.8)", borderColor: "rgb(var(--color-border))" }}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <Link to="/" onClick={closeMenu}
            className="font-mono text-sm font-medium tracking-tight transition-colors hover:opacity-80">
            <span style={{ color: "rgb(var(--color-accent))" }}>~</span>
            <span className="ml-1">{personal.alias}</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to}
                className={`font-mono text-xs tracking-wider uppercase transition-colors ${
                  pathname === link.to
                    ? "opacity-100"
                    : "opacity-60 hover:opacity-100"
                }`}
                style={pathname === link.to ? { color: "rgb(var(--color-accent))" } : {}}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
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
            <button onClick={toggleTheme}
              className="opacity-60 hover:opacity-100 transition-opacity ml-1" aria-label="Toggle theme">
              {dark ? <FaSun size={14} /> : <FaMoon size={14} />}
            </button>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <button onClick={toggleTheme}
              className="opacity-60 hover:opacity-100 transition-opacity" aria-label="Toggle theme">
              {dark ? <FaSun size={14} /> : <FaMoon size={14} />}
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)}
              className="opacity-60 hover:opacity-100 transition-opacity" aria-label="Toggle menu">
              {menuOpen ? <HiOutlineX size={20} /> : <HiOutlineMenu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t px-4 py-4 space-y-3"
          style={{ borderColor: "rgb(var(--color-border))", backgroundColor: "rgb(var(--color-bg))" }}>
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} onClick={closeMenu}
              className={`block font-mono text-sm transition-colors ${
                pathname === link.to ? "opacity-100" : "opacity-60 hover:opacity-100"
              }`}
              style={pathname === link.to ? { color: "rgb(var(--color-accent))" } : {}}>
              $ {link.label.toLowerCase()}
            </Link>
          ))}
          <div className="flex gap-4 pt-2 border-t"
            style={{ borderColor: "rgb(var(--color-border))" }}>
            <a href={personal.social.github.url} target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity" aria-label="GitHub"><FaGithub size={16} /></a>
            <a href={personal.social.linkedin.url} target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity" aria-label="LinkedIn"><FaLinkedinIn size={16} /></a>
            <a href={personal.social.twitter.url} target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity" aria-label="Twitter"><FaTwitter size={16} /></a>
            <a href={personal.resume} download className="opacity-60 hover:opacity-100 transition-opacity" aria-label="Download Resume"><HiOutlineDocumentDownload size={18} /></a>
          </div>
        </div>
      )}
    </nav>
  );
}
