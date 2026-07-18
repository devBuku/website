import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FileText, Menu, X } from "lucide-react";
import { personal } from "../data/personal";
import { navLinks } from "../data/navigation";
import ThemeToggle from "./ThemeToggle";

function getInitialTheme() {
  const stored = localStorage.getItem("theme");
  if (stored) return stored === "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(getInitialTheme);
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.classList.toggle("light", !dark);
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const toggleTheme = () => {
    setDark((prev) => {
      const next = !prev;
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className="sticky top-0 z-50 border-b backdrop-blur-md transition-colors duration-300"
      style={{
        backgroundColor: "rgb(var(--color-bg) / 0.8)",
        borderColor: "rgb(var(--color-border))",
      }}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <Link
            to="/"
            onClick={closeMenu}
            className="text-sm font-semibold tracking-tight transition-opacity hover:opacity-70"
          >
            {personal.name}
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                  pathname === link.to
                    ? ""
                    : "opacity-60 hover:opacity-100"
                }`}
                style={
                  pathname === link.to
                    ? { color: "rgb(var(--color-accent))" }
                    : {}
                }
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <a
              href={personal.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-lg transition-colors duration-200"
              aria-label="View Resume"
            >
              <FileText size={14} />
              Resume
            </a>
            <ThemeToggle dark={dark} onToggle={toggleTheme} />
          </div>

          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle dark={dark} onToggle={toggleTheme} />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="opacity-60 hover:opacity-100 transition-opacity p-1"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div
          className="md:hidden border-t px-4 py-4 space-y-1"
          style={{
            borderColor: "rgb(var(--color-border))",
            backgroundColor: "rgb(var(--color-bg))",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={closeMenu}
              className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
                pathname === link.to
                  ? ""
                  : "opacity-60 hover:opacity-100"
              }`}
              style={
                pathname === link.to
                  ? {
                      color: "rgb(var(--color-accent))",
                      backgroundColor: "rgb(var(--color-accent-muted) / 0.15)",
                    }
                  : {}
              }
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 mt-2 border-t" style={{ borderColor: "rgb(var(--color-border))" }}>
            <a
              href={personal.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg opacity-60 hover:opacity-100 transition-colors"
            >
              <FileText size={14} />
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
