/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        move : '#CDB4DB',
        gold : '#A2863c' ,
        ofgold : '#a2863ca6',
        black: "#0A0A0A",
        ofblack: "#7c7c7cb5",
        ofwhite: "#ECEDEF",
        white: "#FFFFFF"
      },
      wordSpacing: {
        'wide': '0.5em',
        'wider': '1em',
        'widest': '2em',
      },
    },
  },
  plugins: [],
};
