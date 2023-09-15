/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ["'Inter'", 'sans-serif'],
        fuggles: ["'Fuggles'", 'cursive']
      },
    },
  },
  
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
    darkTheme: 'light',
  }
}