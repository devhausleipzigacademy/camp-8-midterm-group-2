/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      DEFAULT: ["Inter"],
    },
    colors: {
      dark: {
        DEFAULT: "#1C1C27",
        light: "#363740",
      },
      white: {
        DEFAULT: "#FFFFFF",
        dimmed: "rgba(255, 255, 255, 0.4)",
        "dimmed-heavy": "rgba(255, 255, 255, 0.2)",
      },
      yellow: {
        DEFAULT: "#FFB43A",
        dimmed: "rgba(255, 180, 58, 0.5)",
      },
      red: "#EF4444",
      green: "#22C55E",
      none: "00FFFFFF",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
