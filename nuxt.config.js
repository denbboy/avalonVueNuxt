// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
  // build: {
  //   transpile: ["swiper"],
  // },

    // nitro: {
    //   compressPublicAssets: true, // включает gzip/brotli для статики
    // },

  image: {
    dir: 'static'
  },

  router: {
    middleware: ["locale", "gtm"],
  },

  // sitemap: {
  //   sources: ["/api/__sitemap__/index"],
  //   sitemapName: "sitemap.xml",
  // },

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
    { src: "~/plugins/vue-tel-input.js", ssr: false },
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
  ],

  directus: {
    url: "https://api.avalonbali.com/",
  },

  calendly: {
    isEnabled: true,
    loadWidgetCSS: true,
    loadWidgetCloseIconSvg: true,
  },

  i18n: {
    locales: [
      { code: "ua", iso: "ua-US", name: "Ukraine", file: "ua.json" },
      { code: "ru", iso: "ru-RU", name: "Русский", file: "ru.json" },
      { code: "en", iso: "en-US", name: "English", file: "en.json" },
    ],
    defaultLocale: "en",
    langDir: "locales/",
    vueI18n: "./i18n.js",
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

  buildModules: ["@nuxtjs/svg-sprite", '@nuxt/image'],

  svgSprite: {
    input: "~/img/icons/",
  },

  // gtm: {
  //   id: "GTM-NW6LBFJS",
  //   enabled: false,
  // },

  compatibilityDate: "2025-04-23",
});