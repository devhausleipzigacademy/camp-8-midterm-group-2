/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      default: ["Inter"],
    },
    colors: {
      bg: "#1C1C27",
      "bg-light": "#363740",
      yellow: "#FFB43A",
      white: "#FFFFFF",
      "white-dimmed": "rgba(255, 255, 255, 0.4)",
      "white-dimmed-heavy": "rgba(255, 255, 255, 0.2)",
      red: "#EF4444",
      green: "#22C55E",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
