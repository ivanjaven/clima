const { Bubble } = require("react-chartjs-2");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        morning: "url('/src/img/Good Weather Afternoon.gif')",
        sun: "url('/src/img/icon-Clear Morning.gif')",
      },
      width: {
        420: "420px",
      },
      fontFamily: {
        poppins: ["Poppins", " sans-serif"],
      },
      colors: {
        "primary-color": "#aad3c5",
        "secondary-color": "#c8e1cb",
        "font-color": "##1a2842",
        "hover-color": "#c8e1af",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
