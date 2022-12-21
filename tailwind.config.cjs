/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        "domine": ["Domine", "sans-serif"],
        "chivo": ["Chivo", "sans-serif"]
      }
    },
  },
  plugins: [],
};
