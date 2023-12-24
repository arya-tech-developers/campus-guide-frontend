/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        'allEdges':'0 4px 6px -1px rgb(0 0 0 / 0.1), 0 -2px 4px -2px rgb(0 0 0 / 0.1)'
      }
    },
    fontFamily:{
      'Poppins':['Poppins','sans-serif'],
      'Oxygen':['Oxygen',],
      'Inter':['Inter'],
      'ArchivoBlack':['Archivo Black'],
      'PatuaOne':['Patua One']
    }
  },
  plugins: [],
}

