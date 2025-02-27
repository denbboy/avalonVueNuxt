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
        'fade': {
          "0%": {
            opacity: 0
          },
          "100%": {
            opacity: 1
          }
        },
        ping: {
          "0%": { transform: 'scale(1)', opacity: "1" },
          "75%, 100%": { transform: 'scale(1.5)', opacity: "0" }
        },
        skeleton: {
          "0%": {backgroundColor: '#0E88EC'},
          "100%": {backgroundColor: '#0a6cbd'},
        },
        scaling: {
          "0%": {transform: 'scale(1)'},
          "100%": {transform: 'scale(1.5)'},
        }
      },
      animation: {
        ping: 'ping 3s ease infinite',
        ping2: 'ping 3s .6s ease infinite',
        'fade': 'fade .6s ease-in infinite alternate-reverse',
        'fade-1s': 'fade .6s 0.4s ease-in infinite alternate-reverse',
        'fade-2s': 'fade .6s 0.8s ease-in infinite alternate-reverse',
        'skeleton': 'skeleton 1s ease-in infinite alternate-reverse',
        spinAbout: 'spin 20s linear infinite',
        spinAbout2: 'spin 15s 3s linear infinite alternate-reverse',
        scaling: 'scaling 1.2s ease-out infinite alternate-reverse',
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
        '375':'375px',
        'md':'992px',
        'lg': '1441px',
        '2xl': '1600px',
        '3xl': '1900px',
      },
      container: {
        center: true,
        padding: "30px",
        screens: {
          'sm': 'none',
          'md': 'none',
          'lg': '1400px',
          'xl': '1750px',
          '2xl': 'auto',
        },
        maxWidth: {
          'none': '1200px',
          'sm': '1200px',
          'md': '1200px',
          'lg': '1200px',
          'xl': '1400px',
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

