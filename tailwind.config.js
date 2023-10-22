/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1565D8",
        dark: {
          light: "#5A7184",
          hard: "#0D2436",
          soft: "#183B56",
        },
        success: "#36B37E",
      },
      fontFamily: {
        opensans: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
