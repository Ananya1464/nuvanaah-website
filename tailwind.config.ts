import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf3f4',
          100: '#fae6e8',
          200: '#f3ccd1',
          300: '#ebafba',
          400: '#e18d9a',
          500: '#d66f7f',
          600: '#884D53',
          700: '#6B3A3F',
        },
        secondary: {
          50: '#eff6f1',
          100: '#dfe9e1',
          200: '#c7d7cb',
          300: '#adc4b2',
          400: '#92b09a',
          500: '#7B9E87',
          600: '#64846e',
          700: '#4d6755',
        },
        tertiary: {
          50: '#f3edea',
          100: '#ded2cd',
          200: '#c6b4ad',
          300: '#ab9389',
          400: '#8b7064',
          500: '#6a5448',
          600: '#4c3a33',
          700: '#2C1F1A',
        },
        neutral: {
          50: '#FAF6F0',
          100: '#f4eee5',
          200: '#ece2d6',
          300: '#ded0bf',
          400: '#c9b79f',
          500: '#b39c82',
          600: '#99846a',
          700: '#7f6b54',
        },
        sage: {
          50: '#eff6f1',
          100: '#dfe9e1',
          500: '#7B9E87',
          600: '#64846e',
          700: '#4d6755'
        },
        gold: {
          400: '#e18d9a',
          500: '#d66f7f',
          600: '#C9848A'
        },
        teal: {
          50: '#eff6f1',
          100: '#dfe9e1',
          500: '#7B9E87',
          600: '#64846e',
          700: '#4d6755'
        },
        amber: {
          50: '#fdf3f4',
          100: '#fae6e8',
          500: '#d66f7f',
          600: '#C9848A',
          700: '#a85e68'
        },
        cream: {
          50: '#FAF6F0',
          100: '#f4eee5'
        },
        surface: {
          DEFAULT: '#FDF9F3',
          low: '#F7F3ED',
        },
        dark: '#2C1F1A',
      },
      fontFamily: {
        'heading': ['Inter', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
        'display': ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      }
    },
  },
  plugins: [],
}
export default config
