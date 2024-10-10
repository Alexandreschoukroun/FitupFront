/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}', // Chemin vers tes fichiers d'application
    './**/*.{js,jsx,ts,tsx}', // Chemin vers tous les fichiers de ton projet
  ],  theme: {
    extend: {},
  },
  plugins: [],
}

