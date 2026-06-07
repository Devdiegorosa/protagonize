import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black:      'var(--black)',
        charcoal:   'var(--charcoal)',
        gold: {
          DEFAULT: 'var(--gold)',
          light:   'var(--gold-light)',
          shine:   'var(--gold-shine)',
          pale:    'var(--gold-pale)',
        },
        white:      'var(--white)',
        'off-white':'var(--off-white)',
        cream:      'var(--cream)',
        gray: {
          100: 'var(--gray-100)',
          200: 'var(--gray-200)',
          400: 'var(--gray-400)',
          600: 'var(--gray-600)',
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans:  ['var(--font-sans)',  'system-ui', 'sans-serif'],
      },
      animation: {
        marquee:   'marquee 18s linear infinite',
        'fade-up': 'fadeUp 0.6s ease forwards',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
