import { fontFamily } from 'tailwindcss/defaultTheme';
const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
const config = {
	darkMode: ['class'],
	content: ['./src/**/*.{html,js,svelte,ts}'],
	safelist: ['dark'],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		colors: {
			'fountain-blue': {
				50: '#f0f9fb',
				100: '#d9eef4',
				200: '#b8dfe9',
				300: '#87c6d9',
				400: '#53a7c2',
				500: '#3489a6',
				600: '#2e708c',
				700: '#2b5c73',
				800: '#2a4d60',
				900: '#274152'
			},

			primaryAlt: {
				50: '#fff7eb',
				100: '#ffedd1',
				200: '#ffd39e',
				300: '#ffb561',
				400: '#ff8e24',
				500: '#f56a00',
				600: '#d54f01',
				700: '#a63603',
				800: '#7d2907',
				900: '#5a1f07'
			},
			primaryOriginal: {
				50: '#fff7ed',
				100: '#ffeed5',
				200: '#ffd9a8',
				300: '#ffbe72',
				400: '#fd973a',
				500: '#fc7913',
				600: '#ed5d09',
				700: '#c4450a',
				800: '#9c3710',
				900: '#7d2f11'
			},
			gray: {
				50: '#f9fafb',
				100: '#f4f5f7',
				200: '#e5e7eb',
				300: '#d2d6dc',
				400: '#9fa6b2',
				500: '#6b7280',
				600: '#4b5563',
				700: '#374151',
				800: '#1f2937',
				900: '#111827'
			},
			transparent: 'transparent',
			current: 'currentColor',
			...defaultTheme.colors
		},
		extend: {
			gridRowStart: {
				10: '10',
				11: '11'
			},

			gridTemplateRows: {
				8: 'repeat(8, minmax(0, 1fr))',
				9: 'repeat(9, minmax(0, 1fr))',
				10: 'repeat(10, minmax(0, 1fr))',
				12: 'repeat(12, minmax(0, 1fr))'
			},

			fontSize: {
				fit: 'clamp(0px,10vw,1080px)'
			},
			fontFamily: {
				sans: ['Oswald', 'sans-serif', ...defaultTheme.fontFamily.sans],
				serif: ['Lora', ...defaultTheme.fontFamily.serif]
			},
			boxShadow: {
				innerxl: 'inset 30px 0px 60px -15px rgba(229, 229, 229, 1)'
			},

			keyframes: {
				rotatebox: {
					'0%': { transform: 'rotateX( -20deg) rotateY( -50deg)' },
					'50%': { transform: 'rotateX( -200deg) rotateY( -230deg)' },
					'100%': { transform: 'rotateX( -19deg) rotateY( -49deg)' }
				},
				blobpulse: {
					'0%': {
						opacity: '1'
					},
					'33%': {
						transform: 'scale( 2, 1)',
						opacity: '0.9'
					},
					'66%': {
						transform: 'scale(1, 1.5)',
						opacity: '0.7'
					},
					'100%': {
						transform: 'rotate(360deg)',
						opacity: '1'
					}
				},
				blobpulsesmall: {
					'0%, 100%': {
						transform: 'rotate(-40deg)',
						opacity: '1'
					},
					'50%': {
						transform: 'scale(0.5, 2) rotate(40deg)',
						// rotate: '40deg',
						opacity: '0.4'
					}
				}
			},
			animation: {
				blobpulse: 'blobpulse 20s linear infinite',
				blobpulsesmall: 'blobpulsesmall 10s ease-in-out infinite',
				rotatebox: 'rotatebox 5s linear infinite'
			},
			height: {
				works: 'calc(100% - 6rem)',
				worksmd: 'calc(100% - 10rem)'
			},
			transitionTimingFunction: {
				'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
				'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)'
			},
			colors: {
				border: 'hsl(var(--border) / <alpha-value>)',
				input: 'hsl(var(--input) / <alpha-value>)',
				ring: 'hsl(var(--ring) / <alpha-value>)',
				background: 'hsl(var(--background) / <alpha-value>)',
				foreground: 'hsl(var(--foreground) / <alpha-value>)',
				// primary: {
				// 	DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
				// 	foreground: 'hsl(var(--primary-foreground) / <alpha-value>)'
				// },
				primary: {
					50: '#fff7eb',
					100: '#ffedd1',
					200: '#ffd39e',
					300: '#ffb561',
					400: '#ff8e24',
					500: '#f56a00',
					600: '#d54f01',
					700: '#a63603',
					800: '#7d2907',
					900: '#5a1f07'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
					foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
					foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
					foreground: 'hsl(var(--muted-foreground) / <alpha-value>)'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
					foreground: 'hsl(var(--accent-foreground) / <alpha-value>)'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover) / <alpha-value>)',
					foreground: 'hsl(var(--popover-foreground) / <alpha-value>)'
				},
				card: {
					DEFAULT: 'hsl(var(--card) / <alpha-value>)',
					foreground: 'hsl(var(--card-foreground) / <alpha-value>)'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
	plugins: [
		// function ({ addVariant }) {
		//   addVariant('child', '& > *');
		//   addVariant('child-hover', '& > *:hover');
		// },
		// require('autoprefixer'),
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
				}
			});
		})
	]
};

export default config;
