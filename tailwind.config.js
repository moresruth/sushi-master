/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#FFF0DE",
        secondary: "#FFF1EB",
        lightpink:"#F8A6A2",
        brown: "#3D2020",       
      },
      fontFamily:{
        playfair:["Playfair Display", "serif"],
        poppins:["Poppins", "san-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}

