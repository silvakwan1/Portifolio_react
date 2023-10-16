/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        Primaria: "#222",
        modal: "#272727",
      },
      colors: {
        linearGren: "#70FF00",
      },
      screens: {
        logo: { max: "900px" },
      },
    },
  },
  plugins: [],
};
