/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        "galaxy": "url('/src/assets/textures/galaxy.jpg)'"
      },
      fontFamily:{
        'orbitron': ["Orbitron"],
        'body': ["Inter", "Helvetica", "sans-serif"]
      },
      colors: {
        indigo: {
          100: "#e0e2ff",
          200: "#c1c4ff",
          300: "#a2a7ff",
          400: "#8389ff",
          500: "#646cff",
          600: "#5056cc",
          700: "#3c4199",
          800: "#282b66",
          900: "#141633"
        },
      }
    }
  },
  plugins: [],
}
