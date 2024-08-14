// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        "orange-500": "#F97316",
        "gray-700": "#374151",
        "gray-800": "#1F2937",
        "dark-background": "#1F2937",
        "light-background": "#F9FAFB",
        "dark-text": "#F9FAFB",
        "light-text": "#1F2937",
      },
      spacing: {
        16: "4rem",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        serif: ["Lora", "serif"],
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        scroll: "scroll 20s linear infinite",
      },
    },
  },
  darkMode: "class", // Enable dark mode with class strategy
  plugins: [],
};
