/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    colors: {
      primary: '#FF9900', // Amazon orange
      dark: '#131921', // header dark
      light: '#232f3e',
      accent: '#febd69',
    },
    boxShadow: {
      card: '0 4px 12px rgba(0,0,0,0.1)',
    },
  },
},
  plugins: [],
}
