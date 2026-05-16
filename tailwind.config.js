/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#dc2626", // bold red
        secondary: "#111827", // deep dark gray/black
        accent: "#f59e0b" // warm yellow 
      }
    },
  },
  plugins: [],
}

