// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem'
    },
    extend: {
      colors: {
        DarkBlue: "hsl(233, 26%, 24%)",
        LimeGreen: "hsl(136, 65%, 51%)",
        BrightCyan:" hsl(192, 70%, 51%)",
        GrayishBlue: "hsl(233, 8%, 62%)",
        LightGrayishBlue: "hsl(220, 16%, 96%)",
        White: "hsl(0, 0%, 100%)",
        gradient: "linear-gradient( to right, hsl(136, 65%, 51%), hsl(192, 70%, 51%))"
      }
    },
  },
  plugins: [],
}
