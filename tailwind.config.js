/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'float-in': 'float-in 10s ease-out forwards',
        'float-in-right': 'float-in-right 5s ease-out forwards',
    },
    keyframes: {
      'float-in': {
        '0%': { transform: 'translateY(20px)', opacity: '0' },
        '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'float-in-right': {
            '0%': { transform: 'translateX(20px)', opacity: '0' },
            '100%': { transform: 'translateX(0)', opacity: '1' },
          }
    },
    },
  },
  plugins: [],
}