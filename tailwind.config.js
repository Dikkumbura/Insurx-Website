/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Rockwell', 'Domine', 'serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'primary': '#FF8200',
        'primary-bright': '#FF6A00',
        'navy': {
          DEFAULT: '#1F2937',
          alt: '#1A2333'  // Darker shade for better contrast
        },
        'charcoal': {
          DEFAULT: '#333333',
          alt: '#2D2D2D'
        },
        'gray': {
          100: '#F2F2F2',
          900: '#1B1E23'
        }
      },
      maxWidth: {
        'container': '1200px',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to bottom, #1B1E23, #333333)',
        'section-gradient': 'linear-gradient(to bottom, #1F2937, #2F3A60)',
      },
      boxShadow: {
        'glow': '0 0 15px rgba(255, 130, 0, 0.3)',
      },
      transform: {
        'gpu': 'translateZ(0)',
      },
      backdropFilter: {
        'none': 'none',
      },
      perspective: {
        '1000': '1000px',
        'none': 'none',
      },
    },
  },
  plugins: [],
}