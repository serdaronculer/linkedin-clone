/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    container: {
      center: true,

    },
    extend: {
      backgroundColor: {
        "color": 'var(--bg-color)',
        "primary": 'var(--bg-primary)',
        "search": 'var(--bg-search)',

      },
      borderColor: {
        "primary-divider": 'var(--primary-divider)',
      },
      textColor: {
        "primary": "var(--text-primary)",
        "secondary": "var(--text-secondary)",
        "brand-accent": "var(--brand-accent)",
      },
      colors: {
        "brand": "var(--brand-color)",
        "icon": "var(--color-icon)",
      }
    },
  },
  plugins: [],
}
