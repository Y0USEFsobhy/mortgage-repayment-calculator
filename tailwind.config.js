/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./javascript/*.js"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        'Lime': "hsl(61, 70%, 52%)",
        'Red': "hsl(4, 69%, 50%)",
        'White': "hsl(0, 0%, 100%)",
        "Slate-100": "hsl(202, 86%, 94%)",
        "Slate-300": "hsl(203, 41%, 72%)",
        "Slate-500": "hsl(200, 26%, 54%)",
        "Slate-700": "hsl(200, 24%, 40%)",
        "Slate-900": "hsl(202, 55%, 16%)",
      },
      fontFamily: {
        Jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
