/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#030812',
        secondary: '#161A42',
        accent: '#8486ED',
        muted: '#E0E0E0',
        surface: '#3842A8',
      }
    },
  },
  plugins: [],
}