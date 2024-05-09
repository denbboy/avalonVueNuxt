/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        normalidad: ['Grandis Extended', 'sans-serif'],
      },
      transitionDuration: {
        'DEFAULT': '300ms',
      },
      container: {
        center: true,
        padding: "30px",
        screens: {
          'sm': 'none',
          'md': 'none',
          'lg': 'none',
          'xl': 'none',
          '2xl': '1560px',
        },
        maxWidth: {
          'none': 'none',
          'sm': 'none',
          'md': 'none',
          'lg': 'none',
          'xl': 'none',
          '2xl': 'none',
        }
      },
      colors: {
        blue: {
          '400': '#0E88EC',
          '500': '#0A4A7F',
          '600': '#002D52',
        }
      }
    },
  },
}

