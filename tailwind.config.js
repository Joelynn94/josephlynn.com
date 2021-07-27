const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#1ddecb",
          500: "#1ac7b6",
        },
        secondary: {
          100: "#19212d",
          500: "#121820",
        },
        gray: colors.coolGray
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
