/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
      '3xl': '1920px',
    },
    extend: {
      colors: {
        darkmode: "#16181E",
        primary: "#21242D",
        secondary: "#5CFEF0",
        white: "#E6E6E5",
        nightFall: "#252836",
        deepSlate: "#16181E",
        lightSlate: "#E5E7EB",
        softGray: "#E8E8E8",
        silverAsh: "#979797",
      },
      borderRadius: {
        '4xl': '30px',
        '5xl': '40px',
      },
    },
  },
  plugins: [],
};
