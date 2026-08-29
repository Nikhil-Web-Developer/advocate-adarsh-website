/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#040912',
          900: '#070F1C',
          850: '#0B192C',
          800: '#11223A',
          700: '#152943',
          600: '#1E3A5F',
          500: '#2C5282',
        },
        gold: {
          50: '#FDFBF7',
          100: '#F9F5EC',
          200: '#F2E7CE',
          300: '#E4D1A2',
          400: '#D4AF37', // Vibrant Legal Gold
          500: '#B89758', // Primary Classic Gold
          600: '#9A7B40', // Deep Burnished Gold
          700: '#7B602E',
          800: '#5C4721',
          900: '#3D2F15',
        },
        slate: {
          850: '#172033',
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'Playfair Display', 'Georgia', 'serif'],
        playfair: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'gold-sm': '0 2px 10px rgba(184, 151, 88, 0.15)',
        'gold-md': '0 6px 20px rgba(184, 151, 88, 0.22)',
        'gold-lg': '0 10px 30px rgba(184, 151, 88, 0.30)',
        'navy-xl': '0 20px 48px rgba(7, 15, 28, 0.25)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #B89758 50%, #9A7B40 100%)',
        'gold-gradient-hover': 'linear-gradient(135deg, #E2C04D 0%, #CBB07E 50%, #A98748 100%)',
        'navy-gradient': 'linear-gradient(180deg, #070F1C 0%, #0B192C 50%, #152943 100%)',
        'card-gradient': 'linear-gradient(145deg, rgba(21, 41, 67, 0.6) 0%, rgba(11, 25, 44, 0.8) 100%)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
