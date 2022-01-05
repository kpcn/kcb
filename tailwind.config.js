module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './content/**/*.{mdx,md}'],
  theme: {
    extend: {
      fontFamily: {
        dacingscript: ['Dancing Script', 'cursive'],
        firamono: ['Fira Mono', 'monospace'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
