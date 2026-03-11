import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#070707',
        foreground: '#faf7e8',
        yellow: '#f8d84e',
        amberline: '#b79314',
        panel: '#111111'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(248,216,78,.18), 0 20px 60px rgba(248,216,78,.09)'
      },
      backgroundImage: {
        'grid-fade': 'radial-gradient(circle at top, rgba(248,216,78,.15), transparent 35%), linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)'
      }
    }
  },
  plugins: []
};

export default config;
