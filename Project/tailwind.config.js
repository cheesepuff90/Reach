/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F5F5F5",
        secondary: {
          DEFAULT: "#E59B9B",
          100: "#FF9001",
          200: "#FF8E01",
        },
        black: {
          DEFAULT: "#000",
          100: "#1E1E2D",
          200: "#232533",
        },
        gray: {
          DEFAULT: "#EFF3F4", 
          100: "#CDCDE0",
          200: "#6B6B6B"
        },
        white: {
          DEFAULT: "#FFFFFF",
          100: "#F5F5F5",
        },
        rose: {
          DEFAULT: "#fff1f2",
          100: "#E39B9B",
        },
        blue: {
          DEFAULT: "#1974D2",
          100: "#6FC0DB",
        },
        pink: {
          DEFAULT: "#E59B9B",
        },
      },
      fontFamily: {
        pthin: ["Poppins-Thin", "sans-serif"],
        pextralight: ["Poppins-ExtraLight", "sans-serif"],
        plight: ["Poppins-Light", "sans-serif"],
        pregular: ["Poppins-Regular", "sans-serif"],
        pmedium: ["Poppins-Medium", "sans-serif"],
        psemibold: ["Poppins-SemiBold", "sans-serif"],
        pbold: ["Poppins-Bold", "sans-serif"],
        pextrabold: ["Poppins-ExtraBold", "sans-serif"],
        pblack: ["Poppins-Black", "sans-serif"],
      },
    },
  },
  plugins: [],
};