import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        banana: {
          black: "rgb(var(--color-black-rgb) / <alpha-value>)",
          yellow: "rgb(var(--color-yellow-rgb) / <alpha-value>)",
          "yellow-dark": "rgb(var(--color-yellow-dark-rgb) / <alpha-value>)",
          graphite: "rgb(var(--color-graphite-rgb) / <alpha-value>)",
          white: "rgb(var(--color-white-rgb) / <alpha-value>)",
          gray: "rgb(var(--color-gray-rgb) / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
