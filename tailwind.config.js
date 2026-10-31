/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          50: '#FDFBF7',
          100: '#FAF7F2',
          DEFAULT: '#F4EFE6',
          200: '#EFE8DC',
          300: '#E5DDCF',
          400: '#D5C9B4',
          500: '#B8A88E',
          manila: '#F2E6CE',
          kraft: '#DECBB0',
        },
        ink: {
          DEFAULT: '#14181F',
          pure: '#0B0E13',
          muted: '#5B5F66',
          faint: '#8E939C',
          rule: '#D4CCBD',
          line: '#BEB4A2',
        },
        vermilion: {
          DEFAULT: '#C8321E',
          dark: '#A52413',
          light: '#F8E9E6',
        },
        pine: {
          DEFAULT: '#2F5D46',
          dark: '#214432',
          light: '#EBF2EE',
        },
        ochre: {
          DEFAULT: '#B9852B',
          dark: '#92671E',
          light: '#FBF5E9',
        },
      },
      fontFamily: {
        serif: ['Newsreader', 'Fraunces', 'Georgia', 'serif'],
        sans: ['Instrument Sans', 'Public Sans', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        none: '0',
        sm: '2px',
        DEFAULT: '3px',
        md: '4px',
      },
      boxShadow: {
        'paper-sm': '0 1px 1px rgba(20, 24, 31, 0.05)',
        'paper-edge': '0 1px 0 #BEB4A2, 0 2px 4px rgba(20, 24, 31, 0.06)',
        'folder-raised': '0 4px 8px -2px rgba(20, 24, 31, 0.12), 0 1px 2px rgba(20, 24, 31, 0.08)',
        'stamp': 'inset 0 0 0 1.5px currentColor',
      }
    },
  },
  plugins: [],
}
