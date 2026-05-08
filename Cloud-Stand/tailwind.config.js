/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary-rgb) / <alpha-value>)',
        accent: 'rgb(var(--color-accent-rgb) / <alpha-value>)',
        'accent-light': 'rgb(var(--color-accent-light-rgb) / <alpha-value>)',
        surface: 'rgb(var(--color-surface-rgb) / <alpha-value>)',
        text: 'rgb(var(--color-text-rgb) / <alpha-value>)',
        'text-muted': 'rgb(var(--color-text-muted-rgb) / <alpha-value>)',
        border: 'rgb(var(--color-border-rgb) / <alpha-value>)',
        gold: 'rgb(var(--color-gold-rgb) / <alpha-value>)',
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        'dm-sans': ['DM Sans', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(61, 139, 255, 0.35), 0 18px 40px rgba(0, 87, 255, 0.2)',
        soft: '0 20px 60px rgba(0, 0, 0, 0.28)',
      },
      animation: {
        fadeInUp: 'fadeInUp 0.8s ease-out forwards',
        gradientShift: 'gradientShift 18s ease infinite',
        float: 'float 8s ease-in-out infinite',
        'pulse-slow': 'pulseSlow 5s ease-in-out infinite',
        marquee: 'marquee 18s linear infinite',
      },
      backgroundImage: {
        'hero-grid':
          'radial-gradient(circle at top left, rgba(61,139,255,0.14), transparent 28%), radial-gradient(circle at 80% 20%, rgba(0,87,255,0.24), transparent 30%), linear-gradient(180deg, rgba(10,22,40,0.96), rgba(10,22,40,1))',
      },
    },
  },
  plugins: [],
}
