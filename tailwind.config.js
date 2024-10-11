/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      screens: {
        'sm': '640px',   // Móvil
        'md': '768px',   // Tablet
        'lg': '1024px',  // Laptop
        'xl': '1280px',  // Desktop
        '2xl': '1536px', // Desktop grande
        // Breakpoints personalizados
        'custom-small': '480px',
        'custom-medium': '800px',
        'custom-large': '1400px',
      },
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