/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#00875F",
        secondary: "#121214",
        tertiary: "#202024",
        title: "#FFFFFF",
        subtitle: "#E1E1E6",
        textinput: "#7C7C8A"
      },
    },
  },
  plugins: [],
};
