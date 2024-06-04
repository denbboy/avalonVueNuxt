import { transform } from 'typescript';

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
      keyframes: {
        ping: {
          "0%": { transform: 'scale(1)', opacity: "1" },
          "75%, 100%": { transform: 'scale(1.5)', opacity: "0" }
        }
      },
      animation: {
        ping: 'ping 3s ease infinite'
      },
      grayscale: {
        100: '100%',
      },
      fontFamily: {
        normalidad: ['Grandis Extended', 'sans-serif'],
      },
      transitionDuration: {
        'DEFAULT': '300ms',
      },
      screens: {
        'lgs': '1025px',
        '3xl': '1770px',
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
          '700': '#3B6E99'
        },
        whiteOp: {
          '200': '#FFFFFF1A',
          '300': '#FFFFFF33',
          '400': '#E7EDF2',
        }
      }
    },
  },
}

