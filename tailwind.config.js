// eslint-disable-next-line @typescript-eslint/no-var-requires, import/no-extraneous-dependencies
const flattenColorPalette = require('tailwindcss/lib/util/flattenColorPalette')
  .default;

module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        byu: '#002e5d',
        byuh: '#9e1b34',
        byui: '#0076B6',
      },
    },
  },
  variants: {
    extend: {
      rotate: ['group-hover'],
    },
  },
  plugins: [
    ({ addUtilities, theme, variants }) => {
      const colors = flattenColorPalette(theme('borderColor'));
      delete colors.default;

      const colorMap = Object.keys(colors).map((color) => ({
        [`.border-t-${color}`]: { borderTopColor: colors[color] },
        [`.border-r-${color}`]: { borderRightColor: colors[color] },
        [`.border-b-${color}`]: { borderBottomColor: colors[color] },
        [`.border-l-${color}`]: { borderLeftColor: colors[color] },
      }));
      const utilities = Object.assign({}, ...colorMap);

      addUtilities(utilities, variants('borderColor'));
    },
  ],
};
