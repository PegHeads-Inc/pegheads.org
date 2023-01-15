/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        transparent: '#00000000',
        gray: {
          100: '#f7fafc',
          200: '#f9f9f9',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#b0bdcb',
          600: '#9aaabc',
          700: '#8c9fb3',
          800: '#7f94aa',
          900: '#576476',
        },
        black: {
          100: '#3f4d67',
          200: '#38435a',
          300: '#323c51',
          400: '#2b3446',
          500: '#262e3d',
          600: '#1f2633',
          700: '#181d27',
          800: '#13171f',
          900: '#10141a',
        },
        purple: {
          100: '#8c6df7',
          200: '#7e5bf6',
          300: '#7954f6',
          400: '#724cf5',
          500: '#683ff4',
          600: '#5e32f4',
          700: '#5526f3',
          800: '#4a19f2',
          900: '#4310f2',
        },
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xxl: '1536px',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
