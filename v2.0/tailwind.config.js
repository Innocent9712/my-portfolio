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
      },
      colors: {
        shade: {
          one: "#222222",
          two: "#444444",
          three: "#666666",
          four: "#888888",
          five: "#AAAAAA",
          six: "#CCCCCC",
          svn: "#DDDDDD",
          eight: "#EEEEEE",
          nine: "#F4F4F4"
        }
      },
      boxShadow: {
        'custom': '3px 4px 5px 2px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}