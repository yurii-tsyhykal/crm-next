/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      boxShadow: {
        custom:
          '0 2px 4px -2px rgba(85, 105, 135, 0.02), 0 6px 10px -2px rgba(85, 105, 135, 0.04)',
      },
      minWidth: {
        custom: '308px',
      },
      maxWidth: {
        custom: '700px',
      },
      fontFamily: {
        jakarta: ['var(--font-jakarta)', 'sans-serif'],
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
