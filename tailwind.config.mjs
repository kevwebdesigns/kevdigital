/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        kev: {
          bg: '#050D18',
          navy: '#0A1628',
          card: '#0D1E35',
          border: '#162840',
          teal: '#00C2CB',
          tealDark: '#009BA3',
          tealLight: '#33D4DC',
          orange: '#FF6B35',
          orangeHover: '#FF8C5E',
          white: '#F0F4F8',
          text: '#CBD5E1',
          muted: '#64748B',
          dim: '#334155',
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
        marquee: 'marquee 40s linear infinite',
        'fade-up': 'fadeUp 0.65s ease forwards',
        'spin-slow': 'spin 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.9' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(0,194,203,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(0,194,203,0.045) 1px, transparent 1px)',
        'teal-glow': 'radial-gradient(circle, rgba(0,194,203,0.22) 0%, transparent 70%)',
        'orange-glow': 'radial-gradient(circle, rgba(255,107,53,0.22) 0%, transparent 70%)',
        'cta-orange': 'linear-gradient(135deg, #FF6B35 0%, #FF8C5E 100%)',
        'cta-teal': 'linear-gradient(135deg, #00C2CB 0%, #33D4DC 100%)',
        'hero-radial': 'radial-gradient(ellipse at 25% 55%, rgba(0,194,203,0.13) 0%, transparent 55%), radial-gradient(ellipse at 78% 20%, rgba(255,107,53,0.09) 0%, transparent 50%)',
      },
      boxShadow: {
        teal: '0 0 35px rgba(0,194,203,0.35)',
        'teal-sm': '0 0 15px rgba(0,194,203,0.22)',
        orange: '0 0 35px rgba(255,107,53,0.4)',
        'orange-sm': '0 0 15px rgba(255,107,53,0.28)',
        card: '0 4px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.04)',
        'card-hover': '0 8px 48px rgba(0,0,0,0.5), inset 0 1px 0 rgba(0,194,203,0.1)',
      },
    },
  },
  plugins: [],
};
