// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
  build: {
    transpile: ["swiper"],
  },
  router: {
    middleware: ["locale", "gtm"],
  },
  head: {
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      {
        charset: "utf-8",
      },
      {
        name: "viewport",
        content:
          "width=device-width, minimum-scale=1, initial-scale=1, user-scalable=yes",
      },
      {
        "http-equiv": "x-ua-compatible",
        content: "ie=edge",
      },
      {
        hid: "csp",
        httpEquiv: "Content-Security-Policy",
        content:
          "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self'; frame-src 'self' https://avalon-vue-nuxt.vercel.app; child-src 'self' blob:; connect-src 'self' https://avalon-vue-nuxt.vercel.app;",
      },
    ],
    link: [
      { rel: "stylesheet", href: "/assets/fonts/grandis/stylesheet.css" },
      { rel: "icon", type: "image/x-icon", href: "/favicon.png" },
    ],
  },
  loading: {
    color: "#0f0",
  },
  experimental: {
    viewTransition: true,
  },
  devtools: { enabled: true },
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
    "~/plugins/gtm.js",
    // { src: '~/plugins/gtm.js', ssr: false },
  ],
  aos: {
    once: true,
  },
  css: ["~/assets/css/main.css"],
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "nuxt-aos",
    "@nuxtjs/i18n",
    "nuxt-calendly",
    "nuxt-directus",
    "@nuxt/image",
    // "@dargmuesli/nuxt-cookie-control",
    "@zadigetvoltaire/nuxt-gtm",
    "nuxt-meta-pixel",
    "nuxt-lazy-load",
  ],
  lazyLoad: {
    // These are the default values
    images: true,
    videos: true,
    audios: true,
    iframes: true,
    native: false,
    directiveOnly: false,

    // Default image must be in the public folder
    defaultImage: "https://i.pinimg.com/originals/ce/ca/e6/cecae62ec79ddc1d9d95c3131510f3e6.gif",

    // To remove class set value to false
    loadingClass: "isLoading",
    loadedClass: "isLoaded",
    appendClass: "lazyLoad",

    observerConfig: {
      // See IntersectionObserver documentation
    },
  },
  directus: {
    url: "https://avalon-panel.sonisapps.com/",
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
  swiper: {
    modules: ["navigation", "pagination"],
  },
  pinia: {
    storesDirs: ["./stores/**", "./custom-folder/stores/**"],
    autoImports: ["defineStore"],
  },

  ogImage: {
    enabled: true,
  },
  sitemap: {
    enabled: true,
  },
  robots: {
    enabled: true,
  },
  seoExperiments: {
    enabled: true,
  },
  schemaOrg: {
    enabled: true,
  },
  linkChecker: {
    enabled: true,
  },

  site: {
    url: "https://avalon-vue-nuxt.vercel.app/",
    name: "Avalon",
    description: "Avalon",
  },

  gtm: {
    id: "GTM-1",
    enabled: false,
  },
});
