/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  safelist: [
    'animate-in',
    'fade-in',
    'zoom-in',
    'slide-in-left',
    'slide-in-right',
    'slide-in-bottom',
    'slide-out',
    'animate-out',
    'fade-out',
    'duration-500',
    'duration-700',
    'opacity-0',
    'opacity-100',
    'bg-pattern',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-mona-sans)', 'sans-serif'],
      },
      colors: {
        primary: {
          100: 'var(--color-primary-100)',
          200: 'var(--color-primary-200)',
        },
        success: {
          100: 'var(--color-success-100)',
          200: 'var(--color-success-200)',
        },
        destructive: {
          100: 'var(--color-destructive-100)',
          200: 'var(--color-destructive-200)',
        },
        light: {
          100: 'var(--color-light-100)',
          400: 'var(--color-light-400)',
          600: 'var(--color-light-600)',
          800: 'var(--color-light-800)',
        },
        dark: {
          100: 'var(--color-dark-100)',
          200: 'var(--color-dark-200)',
          300: 'var(--color-dark-300)',
        },
      },
      backgroundImage: {
        pattern: "url('/pattern.png')",
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(5px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.flex-center': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        '.dark-gradient': {
          backgroundImage: 'linear-gradient(to bottom, #1A1C20, #08090D)',
        },
        '.border-gradient': {
          backgroundImage: 'linear-gradient(to bottom, #4B4D4F, #4B4D4F33)',
        },
        '.blue-gradient': {
          backgroundImage: 'linear-gradient(to left, #FFFFFF, #CAC5FE)',
        },
        '.blue-gradient-dark': {
          backgroundImage: 'linear-gradient(to bottom, #171532, #08090D)',
        },
      })
    }),
  ],
}
