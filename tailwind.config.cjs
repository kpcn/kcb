/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				dacingscript: ['Dancing Script', 'cursive'],
				firamono: ['Fira Mono', 'monospace'],
			},
			screens: {
				xs: '475px',
				...defaultTheme.screens,
			},
			typography: (theme) => {
				return {
					DEFAULT: {
						css: {
							'code::before': { content: '' },
							'code::after': { content: '' },
							a: {
								fontColor: theme('colors.blue.500'),
							},
							pre: {
								code: {
									backgroundColor: 'transparent',
								},
								'code:not(.not-prose)': {
									backgroundColor: 'transparent',
								},
							},
						},
					},
				};
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/line-clamp'),
		require('@tailwindcss/aspect-ratio'),
	],
};
