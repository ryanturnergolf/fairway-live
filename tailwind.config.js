/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        fairway: {
          50: '#eef8ef',
          100: '#d7efda',
          500: '#22a447',
          600: '#16843a',
          700: '#116b31',
          900: '#062612'
        }
      },
      boxShadow: {
        soft: '0 20px 60px rgba(0,0,0,.14)'
      }
    },
  },
  plugins: [],
};
