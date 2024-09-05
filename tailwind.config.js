/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        secondary: "#ff5b2e",
        even: "#110e09",
        main: "#f0efe8",
        backdrop: "#e4b0f6"
      },
      fontFamily:{
        bubblegum: ['"Bubblegum Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
}

