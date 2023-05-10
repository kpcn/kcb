/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        dacingscript: ['Dancing Script', 'cursive'],
        firamono: ['Fira Mono', 'monospace'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            'code::before': { content: '' },
            'code::after': { content: '' },
            a: {
              fontColor: theme('colors.blue.500'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
