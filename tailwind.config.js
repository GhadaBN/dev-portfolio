/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sohne: ["SohneBreit", "sans-serif"],
      },
      fontWeight: {
        light: 200,
        semibold: 500,
        book: 600,
        bold: 700,
      },
      fontSize: {
        "7.5xl": "5.5rem",
      },
      lineHeight: {
        "tight-0.9": "0.9",
      },
      colors: {
        customRed: "#FC0230",
      },
      spacing: {
        17: "4.1rem",
      },
    },
  },
  plugins: [],
};
