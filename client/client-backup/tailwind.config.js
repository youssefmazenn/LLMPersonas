module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}", // Ensure this line correctly paths to your components
    // If your components are in a 'src' directory:
    // "./src/pages/**/*.{js,ts,jsx,tsx}",
    // "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { // Example if you're explicitly setting up Inter with Tailwind
        sans: ['Inter', 'sans-serif'], // 'sans' is often the default
        inter: ['Inter', 'sans-serif'], // Make 'font-inter' work
      },
    },
  },
  plugins: [],
}