/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,md,mdx}'],
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
      spacing: {
        120: '30rem',
      },
    },
  },
};
