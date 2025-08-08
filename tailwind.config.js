/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/frontend/**/*.{js,ts,jsx,tsx}', './app/views/**/*.{erb,html}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'primary-hover': 'var(--color-primary-hover)',
        secondary: 'var(--color-secondary)',
        'secondary-hover': 'var(--color-secondary-hover)',
        muted: 'var(--color-text-muted)',
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
        error: 'var(--color-error)',
        info: 'var(--color-info)',
      },
      borderColor: {
        DEFAULT: 'var(--color-hover-medium)',
      },
    },
  },
  plugins: [],
} 