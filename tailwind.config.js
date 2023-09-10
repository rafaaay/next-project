/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
      },

      screens: {
        'tablet' : '960px',
        'desktop' : '1248',
      },

      fontSize: {
        xs: ['14px', {lineHeight: '24px', letterSpacing: '-0.03em'}],
        sm: ['16px', {lineHeight: '24px', letterSpacing: '-0.03em'}],
        lg: ['18px', {lineHeight: '28px', letterSpacing: '-0.03em'}],
        xl: ['24px', {lineHeight: '36px', letterSpacing: '-0.03em'}],
        h1: ['36px', {lineHeight: '44px', letterSpacing: '-0.03em', fontWeight: '600'}],
      },

      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },

      borderRadius: {
        '4xl': '2rem',
      },

      content: {
        'login_bg': 'url("/bg_pattern.svg")',
      },
    },
  },
  plugins: [],
}
