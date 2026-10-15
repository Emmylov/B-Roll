module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        ui: ['Geist', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
        serif: ['"Cormorant Garamond"', 'serif']
      },
      colors: {
        obsidian: {
          DEFAULT: '#050505',
          panel: '#0C0C0C',
          border: '#161616',
          accent: '#C9A063'
        },
        alabaster: {
          DEFAULT: '#F5F5F7',
          panel: '#FFFFFF',
          border: '#E1E1E1',
          accent: '#111111'
        }
      },
      backdropBlur: {
        'xl': '18px'
      }
    }
  },
  plugins: []
}
