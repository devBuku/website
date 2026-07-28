import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FileText, Menu, X } from 'lucide-react';
import { personal } from '../data/personal';
import { navLinks } from '../data/navigation';
import ThemeToggle from './ThemeToggle';

function getInitialTheme() {
  const stored = localStorage.getItem('theme');
  if (stored) return stored === 'dark';
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

const MOBILE_BREAKPOINT = 768;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(getInitialTheme);
  const { pathname } = useLocation();
  const drawerRef = useRef(null);
  const touchStartX = useRef(0);

  useEffect(() => {
    document.documentElement.classList.toggle('light', !dark);
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    if (menuOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    return () => document.removeEventListener('keydown', handleEscape);
  }, [menuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= MOBILE_BREAKPOINT) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleTouchStart = (e) => {
      touchStartX.current = e.touches[0].clientX;
    };
    const handleTouchEnd = (e) => {
      const dx = e.changedTouches[0].clientX - touchStartX.current;
      if (dx > 80) setMenuOpen(false);
    };
    const drawer = drawerRef.current;
    if (drawer && menuOpen) {
      drawer.addEventListener('touchstart', handleTouchStart);
      drawer.addEventListener('touchend', handleTouchEnd);
    }
    return () => {
      if (drawer) {
        drawer.removeEventListener('touchstart', handleTouchStart);
        drawer.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [menuOpen]);

  const toggleTheme = () => {
    setDark((prev) => {
      const next = !prev;
      localStorage.setItem('theme', next ? 'dark' : 'light');
      return next;
    });
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        className="sticky top-0 z-50 border-b backdrop-blur-md transition-colors duration-300"
        style={{
          backgroundColor: 'rgb(var(--color-bg) / 0.8)',
          borderColor: 'rgb(var(--color-border))',
        }}
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 items-center justify-between">
            <Link
              to="/"
              onClick={closeMenu}
              className="text-base font-semibold tracking-tight transition-opacity hover:opacity-70"
            >
              {personal.name}
            </Link>

            <div className="hidden items-center gap-1 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`rounded-lg px-3 py-1.5 text-base font-medium transition-all duration-200 ${
                    pathname === link.to ? '' : 'opacity-60 hover:opacity-100'
                  }`}
                  style={
                    pathname === link.to
                      ? { color: 'rgb(var(--color-accent))' }
                      : {}
                  }
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden items-center gap-2 md:flex">
              <a
                href={personal.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-base font-medium transition-colors duration-200"
                aria-label="View Resume"
              >
                <FileText size={14} />
                Resume
              </a>
              <ThemeToggle dark={dark} onToggle={toggleTheme} />
            </div>

            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle dark={dark} onToggle={toggleTheme} />
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="relative flex h-9 w-9 items-center justify-center rounded-lg opacity-60 transition-opacity hover:opacity-100"
                aria-label="Toggle menu"
              >
                <div className="relative h-[18px] w-[18px]">
                  <Menu
                    size={18}
                    className={`absolute inset-0 transition-all duration-300 ${
                      menuOpen
                        ? 'rotate-90 scale-0 opacity-0'
                        : 'rotate-0 scale-100 opacity-100'
                    }`}
                  />
                  <X
                    size={18}
                    className={`absolute inset-0 transition-all duration-300 ${
                      menuOpen
                        ? 'rotate-0 scale-100 opacity-100'
                        : '-rotate-90 scale-0 opacity-0'
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ease-out ${
          menuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        style={{ backgroundColor: 'rgba(0,0,0,0.45)' }}
        onClick={closeMenu}
        aria-hidden={!menuOpen}
      />

      <div
        ref={drawerRef}
        className={`fixed inset-y-0 right-0 z-50 w-[80%] max-w-sm border-l transition-transform duration-[275ms] ease-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          backgroundColor: 'rgb(var(--color-bg))',
          borderColor: 'rgb(var(--color-border))',
        }}
        aria-hidden={!menuOpen}
      >
        <div
          className="flex items-center justify-end border-b px-6 py-3"
          style={{ borderColor: 'rgb(var(--color-border))' }}
        >
          <button
            onClick={closeMenu}
            className="flex h-9 w-9 items-center justify-center rounded-lg opacity-60 transition-opacity hover:opacity-100"
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>
        <div className="space-y-1 px-6 pt-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={closeMenu}
              className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                pathname === link.to ? '' : 'opacity-60 hover:opacity-100'
              }`}
              style={
                pathname === link.to
                  ? {
                      color: 'rgb(var(--color-accent))',
                      backgroundColor: 'rgb(var(--color-accent-muted) / 0.15)',
                    }
                  : {}
              }
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div
          className="mx-6 mt-2 border-t pt-4"
          style={{ borderColor: 'rgb(var(--color-border))' }}
        >
          <a
            href={personal.resume}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium opacity-60 transition-colors hover:opacity-100"
          >
            <FileText size={16} />
            Resume
          </a>
        </div>
      </div>
    </>
  );
}
