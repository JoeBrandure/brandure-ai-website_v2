import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        '7xl': '80rem',
        '5xl': '64rem',
        '6xl': '72rem',
        '4xl': '56rem',
        'xl': '36rem',
      },
    },
  },
  plugins: [],
}

export default config
