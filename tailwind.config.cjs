/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: "Montserrat",
      body: "Orbitron",
    },
    colors: {
      "neutral-800": "#454550",
      "neutral-600": "#776F6F",
      "neutral-300": "#B8BBC7",
      "neutral-200": "#d5d7e0",
      "neutral-150": "#f5f7fa",
      "neutral-100": "#FFFFFF",
      "accent-400": "#f7af07",
      "accent-500": "#f79807",
    },
    extend: {},
  },
  plugins: [],
};
