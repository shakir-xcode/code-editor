/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--text-primary)",
        "secondary-color": "var(--text-secondary)",
        "background-white": "var(--background)",
        "accent": "var(--accent)",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}