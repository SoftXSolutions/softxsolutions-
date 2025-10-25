/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'softx-orange': '#FF4500',
        'softx-orange-light': '#FF6B35',
        'softx-orange-dark': '#E63900',
        'softx-black': '#000000',
        'softx-gray': '#1A1A1A',
        'softx-gray-light': '#2D2D2D',
        'softx-white': '#FFFFFF',
        'whatsapp-green': '#25D366',
      },
      backgroundImage: {
        'softx-gradient': 'linear-gradient(90deg, #000000 0%, #FF4500 100%)',
        'softx-gradient-reverse': 'linear-gradient(90deg, #FF4500 0%, #000000 100%)',
        'orange-gradient': 'linear-gradient(135deg, #FF4500 0%, #FF6B35 100%)',
        'black-gradient': 'linear-gradient(135deg, #000000 0%, #1A1A1A 100%)',
        'hero-gradient': 'linear-gradient(135deg, #000000 0%, #FF4500 50%, #000000 100%)',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
