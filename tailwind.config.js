/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "bounce-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
        "pulse-slow": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
      },
      animation: {
        "bounce-slow": "bounce-slow 4s ease-in-out infinite",
        "bounce-slow-delayed": "bounce-slow 5s ease-in-out infinite",
        "pulse-slow": "pulse-slow 4s ease-in-out infinite",
        "pulse-slow-delayed": "pulse-slow 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
