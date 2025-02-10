/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          100: '#E0F7FA',
          600: '#00ACC1',
          900: '#006064',
          500: '#0094ff',
        },
      },
      fontFamily: {
        fredoka: ['var(--font-fredoka)'],
      },
    },
  },
  plugins: [],
}

