const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './page/**/*.{js,ts,jsx,tsx}',
    './ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // https://vercel.com/design/color
      colors: {
        primary: {
          light: "#5f6576",
          DEFAULT: "#383f54",
          dark: "#272c3a",
        },
        secondary: {
          light: "f7d952",
          DEFAULT: "#f5d027",
          dark: "#EEB200",
        },
        vercel: {
          pink: '#FF0080',
          blue: '#0070F3',
          cyan: '#50E3C2',
          orange: '#F5A623',
          violet: '#7928CA',
        },
      },
      keyframes: ({ theme }) => ({
        rerender: {
          '0%': {
            'border-color': theme('colors.vercel.pink'),
          },
          '40%': {
            'border-color': theme('colors.vercel.pink'),
          },
        },
        highlight: {
          '0%': {
            background: theme('colors.vercel.pink'),
            color: theme('colors.white'),
          },
          '40%': {
            background: theme('colors.vercel.pink'),
            color: theme('colors.white'),
          },
        },
        shimmer: {
          '100%': {
            transform: 'translateX(100%)',
          },
        },
        translateXReset: {
          '100%': {
            transform: 'translateX(0)',
          },
        },
        fadeToTransparent: {
          '0%': {
            opacity: 1,
          },
          '40%': {
            opacity: 1,
          },
          '100%': {
            opacity: 0,
          },
        },
      }),
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      }
    },
  },
};
