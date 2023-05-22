/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        josefin: ["Josefin Sans", "sans-serif"],
        open: ["Open Sans", "sans-serif"],
        lobster: ["Lobster", "cursive"],
      }
    },
  },
  plugins: [],
}