/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        primary: "#0070f3",
        accent: "#FFBD2E",
        base: {
          light: "#f5f5f5",
          dark: "#222222",
        },
      },
      fontFamily: {
        sans: ["Noto Sans JP", "sans-serif"],
        heading: ["Noto Serif JP", "serif"],
      },
      fontSize: {
        xs: "12px",
        inherit: "inherit",
      },
    },
  },
  safelist: [
    "top-[10rem]",
    "top-[11rem]",
    "top-[12rem]",
    "top-[13rem]",
    "top-[14rem]",
    "left-2",
    "left-[5px]",
    "left-[10px]",
    "left-[20px]",
    "left-[60px]",
    "rotate-[5deg]",
    "rotate-[6deg]",
    "rotate-[8.4deg]",
    "rotate-[10deg]",
    "rotate-[12deg]",
    "-rotate-[5deg]",
    "-rotate-[6deg]",
    "-rotate-[8.4deg]",
    "-rotate-[10deg]",
    "-rotate-[12deg]",
  ],
  // Tailwindの初期リセットを無効化（必要に応じてtrueに戻す）
  corePlugins: {
    preflight: false,
  },
};
