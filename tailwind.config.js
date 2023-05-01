/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FD3D57",
        hoverprimary: "#B80D29",
        secondary: "#2B2D42",
        tertiary: "#464545",
      },
      margin: {
        "container-side": "calc((100vw - 1200px)/2)",
      },
      maxWidth: {
        container: "1200px",
      },
    },
    fontFamily: {
      roboto: ["var(--font-roboto)"],
      poppins: ["var(--font-poppins)"],
    },
  },
  plugins: [],
};
