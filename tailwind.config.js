/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./components/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      white: "#ffffff",
      black: "#000000",
      lime: {
        1: " #ecfccb",
        2: "#d9f99d",
        3: "#bef264",
        4: "#a3e635",
        5: "#84cc16",
        6: " #65a30d",
        DEFAULT: "#4d7c0f",
        8: "#3f6212",
        9: "#365314",
      },
      red: {
        1: "#fee2e2",
        2: "#fecaca",
        3: "#fca5a5",
        4: "#f87171",
        5: "#ef4444",
        6: "#dc2626",
        DEFAULT: "#b91c1c",
        8: "#991b1b",
        9: "#7f1d1d",
      },
      violet: {
        1: "#ede9fe",
        2: "#ddd6fe",
        3: "#c4b5fd",
        4: "#a78bfa",
        5: "#8b5cf6",
        6: "#7c3aed",
        DEFAULT: "#6d28d9",
        8: "#5b21b6",
        9: "#4c1d95",
      },
    },
    spacing: {
      0: "0",
      0.5: "0.125rem",
      1: "0.25rem",
      1.5: "0.375rem",
      2: "0.5rem",
      2.5: "0.625rem",
      3: "0.75rem",
      3.5: "0.875rem",
      4: "1rem",
      5: "1.25rem",
      6: "10rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
      11: "2.75rem",
      12: "3rem",
      14: "3.5rem",
      16: "4rem",
      20: "5rem",
      24: "6rem",
      28: "7rem",
      32: "8rem",
      36: "9rem",
      40: "10rem",
      44: "11rem",
      48: "12rem",
      52: "13rem",
      56: "14rem",
      60: "15rem",
      64: "16rem",
      72: "18rem",
      80: "20rem",
      96: "24rem",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        DEFAULT: "4rem",
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        none: "0",
        sm: ".125rem",
        DEFAULT: ".25rem",
        lg: ".5rem",
        full: "9999px",
      },
    },
    opacity: {
      0: "0",
      20: "0.2",
      40: "0.4",
      60: "0.6",
      80: "0.8",
      100: "1",
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
