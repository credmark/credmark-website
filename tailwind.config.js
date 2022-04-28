const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    cursor: {
      auto: 'auto',
      default: 'default',
      pointer: 'pointer',
    },
    borderRadius: {
     'lg': '1.625rem',
    },
    borderWidth: {
      '1': '1px',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    fontWeight: {
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 1000,
    },
    borderRadius: {
      'sm': '0.125rem',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
     '4xl': '3.5rem',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#1A1A1A',
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      yellow: colors.amber,
      blue: colors.blue,
      purple: "#51256E",
      credmarkpurple: "#3b0065",
      lightpurple: "#7C5498",
      pink: "#DE1A60",
      lightpink:"#FCECF3",
      pinkextralight: "#FDFAFC",
      lightgray: "#FCFAFB",
      lightpurple: "#7E5594",
      mediumblue: "#005488",
      green: "#00C389",
    },
    extend: {
      screens: {
        small: "415px",
        medium: "560px",
        large: "960px",
        xlarge: "1500px",
      }
  },
  variants: {
    extend: {
      fontWeight: ['hover', 'focus'],
      borderColor: ['hover', 'active'],
      borderWidth: ['hover', 'focus'],
      animation: ['hover', 'focus'],
      animation: ['motion-safe'],
      backdropBlur: ['hover', 'focus'],
    },
  },
  plugins: [],
}
}