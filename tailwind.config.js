/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        qb: {
          bg: '#080B11',
          panel: '#0E1420',
          card: '#131A29',
          cardHover: '#182134',
          border: 'rgba(255, 255, 255, 0.08)',
          borderHover: 'rgba(255, 255, 255, 0.16)',
          saffron: {
            DEFAULT: '#FF7A00',
            light: '#FF9E3B',
            dark: '#D95E00',
            glow: 'rgba(255, 122, 0, 0.22)'
          },
          emerald: {
            DEFAULT: '#10B981',
            light: '#34D399',
            dark: '#059669',
            glow: 'rgba(16, 185, 129, 0.2)'
          },
          indigo: {
            DEFAULT: '#6366F1',
            light: '#818CF8',
            dark: '#4F46E5',
            glow: 'rgba(99, 102, 241, 0.2)'
          },
          cyan: {
            DEFAULT: '#06B6D4',
            light: '#22D3EE',
            dark: '#0891B2'
          }
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace']
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(0, 0, 0, 0.5)',
        'glow-saffron': '0 0 25px -4px rgba(255, 122, 0, 0.35)',
        'glow-indigo': '0 0 25px -4px rgba(99, 102, 241, 0.35)',
        'glow-emerald': '0 0 25px -4px rgba(16, 185, 129, 0.35)',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' }
        }
      }
    },
  },
  plugins: [],
}
