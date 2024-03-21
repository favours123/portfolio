/** @type {import('tailwindcss').Config} */
export default  {
  darkMode: 'class',
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily:{
      poppins: ['Poppins']
    },
    colors: {
      "primary":"#6da5c0", 
      "slate":"#4c8062",
      "slate2":'#0d3736',
      "transparent":"#ffffff00",
      "white":"#ffffff",
      "black":'#000000'
    },
    extend: {},
  },
  plugins: [],
};

