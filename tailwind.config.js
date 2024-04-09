/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html/", "*"],
  darkMode: "class",
  theme: {
    
    screens: {
      sm: "480px",
      // => @media (min-width: 480px) { ... }

      md: "640px",
      // => @media (min-width: 640px) { ... }

      mmd: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      xxl: "1536px",
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      // custom colors
      colors: {
        primary: 'crimson',
        secondary: '#64748b',
        paragraph: '#64748b',
        black: '#000',
        white: '#fff',
        green: '#00ff00',
        red: '#ff0000',
        dark: '#0f172a',
        darkLight: '#0c246d',
        darkBlue: "#091947",
        yellow: "#FFD43B",
      },

      // animation
      keyframes:{
        move:{
          "50%": {transform: "translateY(-1rem)"},
        },
      },
      animation:{
        "movingY": "move 3s linear infinite",
      },
    },

    // custom container
    container:{
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        md: '2.5rem',
        lg: '4rem',
        xl: '5rem',
        xxl: '6rem',
      },
    },

    // custom fonts
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

