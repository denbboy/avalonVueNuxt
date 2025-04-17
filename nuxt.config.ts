export default defineNuxtConfig({
    head: {
      htmlAttrs: {
        lang: "ru",
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
      ],
      link: [{ rel: "stylesheet", href: "/assets/fonts/grandis/stylesheet.css" }],
    },
    // pages: {
    //   error: "~/pages/error.vue",  // Указываем путь к кастомной странице ошибки
    // },
    loading: {
      color: "#0f0",
    },
    app: {
      pageTransition: { name: "page", mode: "out-in" },
    },
    devtools: { enabled: true },
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    css: ["~/assets/css/main.css"],
    modules: [
      "@nuxtjs/tailwindcss",
      "@pinia/nuxt",
      "nuxt-aos",
      "@nuxtjs/i18n",
      "nuxt-mail",
      "@nuxt/image",
      "@dargmuesli/nuxt-cookie-control",
      "@nuxtjs/seo",
      "nuxt-meta-pixel",
      "@nuxtjs/sitemap",
    ],
    swiper: {
      modules: ["navigation", "pagination"],
    },
    pinia: {
      storesDirs: ["./stores/**", "./custom-folder/stores/**"],
    },
    build: {
      transpile: ["swiper"],
    },
    image: {
      dir: 'static'
    },
    router: {
      middleware: ["locale", "gtm"],
    },
    sitemap: {
      sources: ["/api/__sitemap__/index"],
      sitemapName: "sitemap.xml",
    },
    robots: {
      debug: false,
      credits: false,
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
    gtm: {
      id: "GTM-1",
      enabled: false,
    },
    compatibilityDate: "2025-02-28",
  });
  