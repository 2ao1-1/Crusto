/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./Css/**/*.css", "./**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        agoesa: ["Agoesa", "sans-serif"],
        momken: ["Momken", "sans-serif"],
        ruqaa: ['"Aref Ruqaa Regular"', "serif"],
        enab: ['"DG Enab"', "sans-serif"],
      },
      colors: {
        main: "#c11f24",
        // mainRed: "#D32F2F",
        second: "#efe3bc",
        // creamWhite: "#FAFAFA",
        // cream: "#F5F5F5",
        darkgray: "#333",
        accentGold: "#FFC107",
        deepGreen: "#388E3C",
      },
      fontSize: {
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem" /* 18px */,
        xl: "1.25rem" /* 20px */,
        "2xl": "1.5rem" /* 24px */,
        "3xl": "1.875rem" /* 30px */,
        "4xl": "2.25rem" /* 36px */,
        "5xl": "3rem" /* 48px */,
        "6xl": "3.75rem" /* 60px */,
        "7xl": "4.5rem" /* 72px */,
        "8xl": "6rem" /* 96px */,
        "9xl": "8rem" /* 128px */,
      },
      lineHeight: {
        1: "1rem",
        2: "2rem",
        3: "3rem",
        4: "4rem",
        5: "5rem",
        6: "6rem",
        7: "7rem",
        8: "8rem",
        9: "9rem",
      },
      backgroundImage: {
        "ad-1": "url('../Images/ads/ad1.png')",
      },
      objectFit: {
        objectContain: "contain",
        objectCover: "cover",
        objectFill: "fill",
        objectNone: "none",
        objectScaleDown: "scale-down",
      },
    },
  },
  plugins: [],
};
