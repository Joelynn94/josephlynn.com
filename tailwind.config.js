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
        black: colors.black,
        white: colors.white,
        coolGray: colors.coolGray,
        red: colors.red,
        yellow: colors.amber,
        blue: colors.blue,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
