module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg-image' : "url('../public/images/creative-image.jpg')",
      },
      fontFamily: {
        "Manrope": ["Manrope", 'sans-serif'],
      },
    },
  },
  plugins: [],
}