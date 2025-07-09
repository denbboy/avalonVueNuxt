// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
  // build: {
  //   transpile: ["swiper"],
  // },

  // nitro: {
  //   compressPublicAssets: true, // включает gzip/brotli для статики
  // },

  // image: {
  //   provider: 'static',
  //   dir: 'public', // важно! не 'static'
  // },

  router: {
    middleware: ["locale", "gtm"],
  },

  // sitemap: {
  //   siteUrl: 'https://avalonbali.com/', // 🔁 Укажи свой домен
  //   trailingSlash: true,
  //   gzip: true,
  //   i18n: {
  //     locales: ['en', 'ua'],
  //     defaultLocale: 'en',
  //     routesNameSeparator: '___' // по умолчанию ___
  //   }
  //   // Если у тебя есть динамические маршруты, можно добавить вручную
  //   // или подключить из API
  //   // async routes() {
  //   //   const res = await fetch('https://example.com/api/routes')
  //   //   const data = await res.json()
  //   //   return data.map((item) => `/blog/${item.slug}`)
  //   // }
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
    "@nuxtjs/sitemap",
    // "@nuxt/image-edge",
  ],

  sitemap: {
    siteUrl: "https://avalonbali.com", // 👈 обязательно!
    gzip: true,
    trailingSlash: false,
    sitemapName: 'sitemap',

    async routes() {
      const collections = [
        "Article",
        "News",
        "Page",
        "Project",
        "Sale",
      ];
      const baseUrl = "https://api.avalonbali.com/items";
      const routes = [];

      for (const collection of collections) {
        try {
          const res = await $fetch(
            `${baseUrl}/${collection}?limit=500&fields=translations.slug,translations.languages_code`
          );
          for (const item of res.data) {
            for (const t of item.translations) {
              if (t.slug && t.languages_code) {
                const prefix =
                  t.languages_code === "en-US" ? "" : `/${t.languages_code}`;
                const collectionPath = collection.toLowerCase(); // 👈 чтобы путь был /project/slug, а не /Project/slug
                routes.push(`${prefix}/${collectionPath}/${t.slug}`);
              }
            }
          }
        } catch (err) {
          console.warn(`Ошибка загрузки ${collection}:`, err);
        }
      }

      return routes;
    },
  },

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
    vueI18n: "./plugins/i18n.config.js",
    detectBrowserLanguage: {
      useCookie: false,
      redirectOn: "no",
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
