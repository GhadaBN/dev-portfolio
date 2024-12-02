/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sohne: ["Sohne", "sans-serif"],
        sohneBreit: ["SohneBreit", "sans-serif"],
      },
      fontWeight: {
        light: 200,
        semibold: 500,
        book: 600,
        bold: 700,
      },
      fontSize: {
        customXl: "6.5rem",
        customLg: "6rem",
        customS: "1.2rem",
        customSm: "1rem",
      },
      lineHeight: {
        "x-tight": "0.82",
        "tight-0.9": "0.9",
      },
      colors: {
        customRed: "#FC0230",
        customBeige: "#EAE4D3",
        customBg: "#FBFBF6",
        customPink: "#FF9FEA",
      },
      spacing: {
        17: "4.1rem",
      },
      letterSpacing: {
        xTight: "-0.01em",
      },
    },
  },
  plugins: [],
};
