/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      display: "Montserrat",
      body: "Orbitron",
    },
    colors: {
      "neutral-800": "#383f63",
      "neutral-600": "#6f7177",
      "neutral-300": "#B8BBC7",
      "neutral-200": "#d5d7e0",
      "neutral-150": "#eef2f6",
      "neutral-100": "#FFFFFF",
      "accent-400": "#f7af07",
      "accent-500": "#f79807",
    },
    extend: {},
  },
  plugins: [],
};
