module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#1ddecb",
        secondary: {
          100: "#19212d",
          200: "#121820",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
