import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'near-black': '#0B0D10',
        'near-black-variant': '#0F1216',
        'ink': '#1C232B',
        'porcelain': '#F4F6F8',
        'bone': '#EDE9E4',
        'electric-violet': '#6A5BFF',
        'jade': '#00A77C',
        'jade-light': '#00C690',
        'jade-dark': '#009768',
        'persimmon': '#FF5A3C',
        'steel': '#6C7A89',
      },
      fontSize: {
        '12': ['0.75rem', { lineHeight: '1.2' }],
        '14': ['0.875rem', { lineHeight: '1.4' }],
        '16': ['1rem', { lineHeight: '1.6' }],
        '18': ['1.125rem', { lineHeight: '1.6' }],
        '22': ['1.375rem', { lineHeight: '1.4' }],
        '28': ['1.75rem', { lineHeight: '1.2' }],
        '36': ['2.25rem', { lineHeight: '1.2' }],
        '48': ['3rem', { lineHeight: '1.2' }],
        '64': ['4rem', { lineHeight: '1.2' }],
      },
      spacing: {
        '4': '0.25rem',
        '8': '0.5rem',
        '12': '0.75rem',
        '16': '1rem',
        '24': '1.5rem',
        '32': '2rem',
        '48': '3rem',
        '64': '4rem',
      },
      borderRadius: {
        '8': '0.5rem',
        '10': '0.625rem',
        '12': '0.75rem',
        '16': '1rem',
      },
      transitionDuration: {
        'fast': '140ms',
        'normal': '180ms',
        'slow': '220ms',
      },
      transitionTimingFunction: {
        'brand': 'cubic-bezier(0.2, 0.8, 0.2, 1)',
      },
      ringWidth: {
        'focus': '2px',
      },
      ringOffsetWidth: {
        'focus': '4px',
      },
      fontFamily: {
        'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'display': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
