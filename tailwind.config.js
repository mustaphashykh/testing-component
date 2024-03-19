/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "main-black": "#090808",
        "main-purple": "#5235e8",
        "highlight-color": "#747474"
      },
      colors: {
        "highlighted-text": "#747474",
        "main-black": "#090808",
        "main-purple": "#5235e8",
      },
    },
  },
  plugins: [],
};
