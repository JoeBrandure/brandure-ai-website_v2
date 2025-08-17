import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  important: true, // ADD THIS - makes all Tailwind utilities !important
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
