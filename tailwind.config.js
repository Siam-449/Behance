/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
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

      '2xl': '1440px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors:{
        "primary": "#0057FF",
        "heading": "#191919",
        "paragraph": "#696969",
        "secondary_btn": "#DEE8FF",
        "border-E8": "#E8E8EE",
        "border-CC": "#CCCCCC",
      }
    },
    fontFamily: {
      'roboto': ['Roboto', 'serif']
    }
  },
  plugins: [],
}

