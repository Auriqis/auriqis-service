/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fill: {
        secondary: "var(--secondary)",
      },
      backgroundImage: {
        'linear-to-t': "linear-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};