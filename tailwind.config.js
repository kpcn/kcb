module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './content/**/*.{mdx,md}'],
  theme: {
    extend: {
      fontFamily: {
        pushster: ['Pushster', 'cursive'],
        firamono: ['Fira Mono', 'monospace'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
