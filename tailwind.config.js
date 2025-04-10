/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          orange: {
            50: '#FFF8E6',
            100: '#FFF0CC',
            200: '#FFE699',
            300: '#FFC266',
            400: '#FF9900', // Amazon Orange
            500: '#FF8000',
            600: '#FF6600',
            700: '#CC5500',
            800: '#CC4400',
            900: '#993300',
          },
          navy: {
            50: '#E6E8EB',
            100: '#C7CCD3',
            200: '#A9B1BD',
            300: '#8A96A6',
            400: '#6C7C90',
            500: '#4D6179',
            600: '#37475A', // Amazon Navy Light
            700: '#232F3E', // Amazon Navy
            800: '#131A22',
            900: '#000716',
          },
        },
        animation: {
          'bounce-slow': 'bounce 3s infinite',
          'slide-in': 'slideIn 0.8s ease-out forwards',
        },
        keyframes: {
          slideIn: {
            '0%': { transform: 'translateX(-100%)', opacity: 0 },
            '100%': { transform: 'translateX(0)', opacity: 1 },
          },
        },
      },
    },
    plugins: [],
  }