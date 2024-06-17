/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#343a40",
        buttonColor: "#495057",
      },
      fontFamily: {
        customFont: ["Codystar"],
      },
    },
    plugins: [],
  },
};
