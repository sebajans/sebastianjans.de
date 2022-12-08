/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

// const defaultTheme = require('tailwindcss/defaultTheme')
const iOSHeight = require('@rvxlab/tailwind-plugin-ios-full-height');
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  // darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      'primary': {
        '50': '#fff7ed',
        '100': '#ffeed5',
        '200': '#ffd9a8',
        '300': '#ffbe72',
        '400': '#fd973a',
        '500': '#fc7913',
        '600': '#ed5d09',
        '700': '#c4450a',
        '800': '#9c3710',
        '900': '#7d2f11',
      },
      transparent: 'transparent',
      current: 'currentColor',
    },
    extend: {
      fontSize: {
				'fit': 'clamp(0px,10vw,1080px)'
			},
      fontFamily: {
				'sans': ['Oswald', 'sans-serif', ...defaultTheme.fontFamily.sans],
				'serif': ['Lora', ...defaultTheme.fontFamily.serif],
			},
      boxShadow: {
				innerxl: 'inset 30px 0px 60px -15px rgba(229, 229, 229, 1)',
			},
    },
  },
  plugins: [
    iOSHeight,
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.hide-scrollbar': {
          /* IE and Edge */
          '-ms-overflow-style': 'none',
  
          /* Firefox */
          'scrollbar-width': 'none',
  
          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        },
      })
    })
  ],
}
