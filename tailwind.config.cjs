/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      default: ["Inter"],
    },
    colors: {
      dark: "#1C1C27",
      "dark-light": "#363740",
      white: {
        default: "#FFFFFF",
        dimmed: "rgba(255, 255, 255, 0.4)",
        "dimmed-heavy": "rgba(255, 255, 255, 0.2)",
      },
      yellow: "#FFB43A",
      red: "#EF4444",
      green: "#22C55E",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
