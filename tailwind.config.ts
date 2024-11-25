import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    colors: {
      blue: {
        100: '#3B82F6',
      },
      white: {
        100: '#F8FAFC',
        DEFAULT: '#ffffff',
      },
      black: {
        DEFAULT: '#000000',
      },
      grey: {
        100: '#F1F5F9',
        200: '#E2E8F0',
        300: '#CBD5E1',
        400: '#64748B',
        700: '#334155',
        800: '#1E293B',
        900: '#0F172A',
        logo: '#94A3B8',
      },
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
