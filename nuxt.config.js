// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore

const DIRECTUS_URL = process.env.DIRECTUS_LINK || "https://api.avalonbali.com";

export default defineNuxtConfig({
  // build: {
  //   transpile: ["intl-tel-input"],
  // },

  // vite: {
  //   optimizeDeps: {
  //     include: ['intl-tel-input'],
  //   },
  // },

  image: {
    dir: "static",
  },

  router: {
    middleware: ["locale", "gtm"],
  },

  nitro: {
    routeRules: {
      '/en': { redirect: { to: '/', statusCode: 301 } },
      '/en/**': { redirect: { to: '/**', statusCode: 301 } },
      '/**': {
        headers: {
          'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
          // 'X-Frame-Options': 'SAMEORIGIN',
          // 'X-Content-Type-Options': 'nosniff',
          'Referrer-Policy': 'strict-origin-when-cross-origin',
          'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          'Content-Security-Policy': [
            "default-src 'self'",
            "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://www.google.com https://apis.google.com https://maps.googleapis.com https://maps.gstatic.com https://*.googleapis.com https://*.gstatic.com",
            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://maps.googleapis.com https://*.googleapis.com",
            "font-src 'self' https://fonts.gstatic.com https://maps.gstatic.com https://*.gstatic.com",
            "img-src 'self' data: https: blob:",
            "media-src 'self' https: blob:",
            "connect-src 'self' https://api.avalonbali.com https://www.google-analytics.com https://www.googletagmanager.com https://maps.googleapis.com https://*.googleapis.com https://*.google.com https://*.gstatic.com",
            "frame-src 'self' https: http:",
            "object-src 'none'",
            "base-uri 'self'",
            "form-action 'self'",
            "worker-src 'self' blob:"
          ].join('; ')
        }
      }
    },
    experimental: {
      wasm: true,
    },
  },

  app: {
    head: {
      meta: [
      ]
    }
  },

  // Removed security headers that block 3rd party iframe APIs
  // security: {
  //   headers: {
  //     crossOriginEmbedderPolicy: process.env.NODE_ENV === 'development' ? 'unsafe-none' : 'require-corp',
  //   },
  // },

  runtimeConfig: {
    public: {
      apiBase: `${DIRECTUS_URL}/`,
    },
  },

  sitemap: {
    autoI18n: false,
    sitemaps: {
      en: { sources: ["/api/__sitemap__/en"] },
      ru: { sources: ["/api/__sitemap__/ru"] },
      ua: { sources: ["/api/__sitemap__/ua"] },
    },
    defaults: {
      changefreq: 'monthly',
      priority: 0.8,
    },
  },

  // robots: {
  //   debug: false,
  //   credits: false,
  // },

  head: {
    // htmlAttrs: {
    //   lang: "en",
    // },
    // meta: [
    //   {
    //     charset: "utf-8",
    //   },
    //   {
    //     name: "viewport",
    //     content:
    //       "width=device-width, minimum-scale=1, initial-scale=1, user-scalable=yes",
    //   },
    //   {
    //     "http-equiv": "x-ua-compatible",
    //     content: "ie=edge",
    //   },
    //   {
    //     hid: "csp",
    //     httpEquiv: "Content-Security-Policy",
    //     content:
    //       "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self'; frame-src 'self' https://avalon-vue-nuxt.vercel.app; child-src 'self' blob:; connect-src 'self' https://avalon-vue-nuxt.vercel.app;",
    //   },
    // ],
    link: [
      // { rel: "stylesheet", href: "/assets/fonts/grandis/stylesheet.css" },
      // { rel: "icon", type: "image/x-icon", href: "/favicon.png" },
      // { rel: "preconnect", href: "https://www.youtube.com" },
      // { rel: "preconnect", href: "https://www.google.com" },
    ],
    // script: [
    //   {
    //     src: 'https://www.googletagmanager.com/gtm.js?id=GTM-NW6LBFJS',
    //     async: true,
    //     defer: true
    //   }
    // ]
  },

  // loading: {
  //   color: "#0f0",
  // },

  // experimental: {
  //   viewTransition: true,
  //   componentIslands: true,
  // },

  // devtools: { enabled: true },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  plugins: [
    { src: "~/plugins/vuelidate.js", ssr: false },
    { src: "~/plugins/i18n.config.js", ssr: false },
    "~/plugins/router.js",
    // "~/plugins/gtm.js",
    // { src: '~/plugins/gtm.js', ssr: false },
  ],

  css: ["~/assets/css/main.css"],

  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "nuxt-aos",
    "@nuxtjs/i18n",
    "nuxt-directus",
    "@nuxt/image",
    // "nuxt-meta-pixel",
    "nuxt-viewport",
    "nuxt-simple-sitemap",
    "nuxt-calendly",
  ],

  directus: {
    url: `${DIRECTUS_URL}/`,
  },

  calendly: {
    isEnabled: true,
    loadWidgetCSS: true,
    loadWidgetCloseIconSvg: true,
  },

  i18n: {
    locales: [
      { code: "ua", iso: "uk-UA", name: "Ukraine", file: "ua.json" },
      { code: "ru", iso: "ru-RU", name: "Русский", file: "ru.json" },
      { code: "en", iso: "en-US", name: "English", file: "en.json" },
    ],
    defaultLocale: "en",
    langDir: "locales/",
    vueI18n: "./plugins/i18n.config.js",
    strategy: "prefix_except_default",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
  },

  // swiper: {
  //   modules: ["navigation", "pagination"],
  // },

  // headers: {
  //   'Cache-Control': 'public, max-age=31536000, immutable'
  // },

  pinia: {
    storesDirs: ["./stores/**", "./custom-folder/stores/**"],
    autoImports: ["defineStore"],
  },

  // ogImage: {
  //   enabled: true,
  // },

  // seoExperiments: {
  //   enabled: true,
  // },

  // schemaOrg: {
  //   enabled: true,
  // },

  // linkChecker: {
  //   enabled: true,
  // },

  // site: {
  //   url: "https://avalon-vue-nuxt.vercel.app",
  //   name: "Avalon",
  //   description: "Avalon",
  //   trailingSlash: true,
  // },

  buildModules: ["@nuxtjs/svg-sprite", "@nuxt/image"],

  svgSprite: {
    input: "~/img/icons/",
  },

  // gtm: {
  //   id: "GTM-NW6LBFJS",
  //   enabled: false,
  // },

  compatibilityDate: "2025-04-23",
});
