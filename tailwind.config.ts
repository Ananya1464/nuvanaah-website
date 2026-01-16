import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary - Teal (from logo leaf)
        teal: {
          50: '#F0F7F7',
          100: '#D4EAEA',
          200: '#A8D5D6',
          300: '#7DBFC1',
          400: '#5BAAAD',
          500: '#5B9FA3', // Primary brand color
          600: '#4A8387',
          700: '#3A676A',
          800: '#2A4B4D',
          900: '#1A2F30',
        },
        // Secondary - Warm Brown (from logo hand/text)
        brown: {
          50: '#F7F4EF',
          100: '#E8DFD0',
          200: '#D4C4A8',
          300: '#C0A97F',
          400: '#A68F5A',
          500: '#8B6F47', // Secondary brand color
          600: '#6B5435',
          700: '#4A3A24',
          800: '#2A2014',
          900: '#1A1008',
        },
        // Cream backgrounds
        cream: {
          50: '#FDFCFB',
          100: '#F9F7F3',
          200: '#F5F3EF',
        },
        // Amber accent (for highlights, badges)
        amber: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
        },
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'heading': ['Inter', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Custom type scale
        'display': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h1': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h2': ['2.25rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'h3': ['1.75rem', { lineHeight: '1.4' }],
        'h4': ['1.5rem', { lineHeight: '1.4' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'small': ['0.875rem', { lineHeight: '1.5' }],
        'tiny': ['0.75rem', { lineHeight: '1.4' }],
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.06)',
        'card': '0 4px 12px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 12px 24px rgba(91, 159, 163, 0.15)',
        'button': '0 4px 6px rgba(91, 159, 163, 0.15)',
        'button-hover': '0 6px 12px rgba(91, 159, 163, 0.25)',
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
        '3xl': '20px',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-up': 'scaleUp 0.2s ease-out',
        'bounce-gentle': 'bounceGentle 0.4s ease-out',
        'pulse-soft': 'pulseSoft 1.5s infinite',
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
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
    },
  },
  plugins: [],
}
export default config
