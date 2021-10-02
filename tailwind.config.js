const tailwindcssTypography = require('@tailwindcss/typography');
const tailwindcssAspectRatio = require('@tailwindcss/aspect-ratio');

module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx,md,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        byu: '#002e5d',
        'byu-dark': '#001225',
        byuh: '#9e1b34',
        'byuh-dark': '#3f0a14',
        byui: '#0076B6',
        'byui-dark': '#002f48',
      },
      listStyleType: {
        asterisk: "'* '",
      },
      typography: {
        DEFAULT: {
          css: {
            a: null,
          },
        },
      },
    },
  },
  variants: {
    extend: {
      rotate: ['group-hover'],
    },
  },
  plugins: [tailwindcssTypography, tailwindcssAspectRatio],
};
