// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        "orange-500": "#F97316",
        "gray-700": "#374151",
        "gray-800": "#1F2937",
      },
      spacing: {
        16: "4rem",
      },
    },
  },
  plugins: [],
};
