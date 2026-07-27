import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle({ dark, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="relative flex h-9 w-9 items-center justify-center rounded-lg opacity-60 transition-all duration-200 hover:opacity-100"
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="relative h-4 w-4">
        <Sun
          size={16}
          className={`absolute inset-0 transition-all duration-300 ${
            dark
              ? 'rotate-90 scale-0 opacity-0'
              : 'rotate-0 scale-100 opacity-100'
          }`}
        />
        <Moon
          size={16}
          className={`absolute inset-0 transition-all duration-300 ${
            dark
              ? 'rotate-0 scale-100 opacity-100'
              : '-rotate-90 scale-0 opacity-0'
          }`}
        />
      </div>
    </button>
  );
}
