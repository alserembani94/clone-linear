/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',

        'radial-linear': 'linear-gradient(92.88deg, rgb(69, 94, 181) 9.16%, rgb(86, 67, 204) 43.89%, rgb(103, 63, 215) 64.72%)',
        'gradient-section': 'radial-gradient(ellipse 80% 50% at 50% -20%,rgba(120,119,198,0.3),transparent)',
        'gradient-section-2': 'radial-gradient(ellipse 100% 40% at 50% 60%,rgba(102,99,246,0.07),transparent)',
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.6xl'), lineHeight: theme('fontSize.7xl') },
        'h2': { fontSize: theme('fontSize.5xl'), lineHeight: theme('fontSize.6xl') },
        'h3': { fontSize: theme('fontSize.4xl'), lineHeight: theme('fontSize.5xl') },
        'h4': { fontSize: theme('fontSize.3xl'), lineHeight: theme('fontSize.4xl') },
        'h5': { fontSize: theme('fontSize.2xl'), lineHeight: theme('fontSize.3xl') },
        'h6': { fontSize: theme('fontSize.xl'), lineHeight: theme('fontSize.2xl') },
      })
    }),
  ],
}
