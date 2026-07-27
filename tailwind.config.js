/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist', 'IBM Plex Sans', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Fira Code', 'monospace'],
      },
      colors: {
        surface: {
          DEFAULT: '#09090b',
          raised: '#18181b',
          overlay: '#27272a',
        },
        accent: {
          DEFAULT: '#22c55e',
          hover: '#16a34a',
          muted: '#166534',
        },
        ink: {
          DEFAULT: '#fafafa',
          muted: '#a1a1aa',
          faint: '#71717a',
        },
        border: '#27272a',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
