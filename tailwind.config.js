/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html/", "*"],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      colors: {
        primary: 'crimson',
        secondary: '#64748b',
        paragraph: '#64748b',
        black: '#000',
        white: '#fff',
        green: '#00ff00',
        red: '#ff0000',
        dark: '#0f172a',
        darkLight: '#1e293b',
      }
    },
    container:{
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },

    fontFamily: {
      overpass: ['Overpass', 'sans-serif'],
      overpassMono: ['Overpass Mono', 'monospace'],
      ibmplex: ['IBM Plex Sans', 'sans-serif'],
      ibmplexMono: ['IBM Plex Mono', 'monospace'],
      ibmplexSerif: ['IBM Plex Serif', 'serif'],
      roboto: ['Roboto', 'sans-serif'],
    },
  },
  plugins: [],
}
