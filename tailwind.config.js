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
      keyframes: {
        "accordion-open": {
          "0%": { maxHeight: "0", opacity: "0" },
          "100%": { maxHeight: "500px", opacity: "1" },
        },
        "accordion-close": {
          "0%": { maxHeight: "500px", opacity: "1" },
          "100%": { maxHeight: "0", opacity: "0" },
        },
        maskReveal: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        leftReveal: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "accordion-open": "accordion-open 0.8s ease-in-out",
        "accordion-close": "accordion-close 0.8s ease-in-out",
        maskReveal: "maskReveal 0.2s ease-out forwards",
        leftReveal: "leftReveal 0.4s ease-out forwards",
      },
      animationDelay: {
        100: "100ms",
        200: "200ms",
        300: "300ms",
        400: "400ms",
        500: "500ms",
        600: "600ms",
        700: "700ms",
        800: "800ms",
        900: "900ms",
        1200: "1200ms",
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme, e }) {
      const delays = theme("animationDelay");
      const utilities = Object.entries(delays).reduce((acc, [key, value]) => {
        acc[`.${e(`delay-${key}`)}`] = { "animation-delay": value };
        return acc;
      }, {});
      addUtilities(utilities);
    },
  ],
};
