/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "ghBg": '#0D1117',
        "buttonGh": "#212830",
        "buttonHover": "#262C36",
        "body": "#222"
      }
    },
  },
  plugins: [],
}