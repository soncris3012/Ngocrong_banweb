/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nro: {
          hp: '#e53e3e',
          ki: '#3182ce',
          stamina: '#38a169',
          gold: '#ecc94b',
          dark: '#1a202c',
          panel: '#2d3748',
          border: '#4a5568'
        }
      },
      fontFamily: {
        pixel: ['"Courier New"', 'monospace', 'sans-serif']
      }
    },
  },
  plugins: [],
}
