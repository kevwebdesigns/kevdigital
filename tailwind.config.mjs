/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        galaxy: {
          void: '#050510',
          deep: '#0a0a1a',
          card: '#0d0d24',
          purple: '#7c3aed',
          glow: '#a855f7',
          blue: '#3b82f6',
          indigo: '#4f46e5',
          stardust: '#e2d9f3',
          muted: '#9ca3af',
          gold: '#f59e0b',
          red: '#ef4444',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
        'pulse-dot': 'pulseDot 1.5s ease-in-out infinite',
        'orbit': 'orbit 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(0.8)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(120px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(120px) rotate(-360deg)' },
        },
      },
      backgroundImage: {
        'galaxy-radial': 'radial-gradient(ellipse at 50% 0%, #1a0533 0%, #050510 60%)',
        'purple-glow': 'radial-gradient(circle, rgba(168,85,247,0.35) 0%, transparent 70%)',
        'blue-glow': 'radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 70%)',
        'cta-gradient': 'linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(79,70,229,0.05) 100%)',
      },
      boxShadow: {
        glow: '0 0 40px rgba(124,58,237,0.5)',
        'glow-sm': '0 0 20px rgba(124,58,237,0.4)',
        'glow-lg': '0 0 60px rgba(124,58,237,0.6)',
        card: '0 4px 24px rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
};
