// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
    build: {
        transpile: ['swiper']
    },
    router: {
        middleware: ['locale', 'gtm']
    },
    head: {
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            {
                charset: 'utf-8',
            },
            {
                name: 'viewport',
                content: 'width=device-width, minimum-scale=1, initial-scale=1, user-scalable=yes',
            },
            {
                'http-equiv': 'x-ua-compatible',
                content: 'ie=edge',
            },
            {
                hid: 'csp',
                httpEquiv: 'Content-Security-Policy',
                content: "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self'; frame-src 'self' https://avalon-vue-nuxt.vercel.app; child-src 'self' blob:; connect-src 'self' https://avalon-vue-nuxt.vercel.app;"
            }
        ],
        link: [
            { rel: 'stylesheet', href: '/assets/fonts/grandis/stylesheet.css' }
        ],
    },
    loading: {
        color: '#0f0',
    },
    experimental: {
        viewTransition: true
    },
    devtools: { enabled: true },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    plugins: [
        { src: '~/plugins/vue-tel-input.js', ssr: false },
        { src: '~/plugins/vuelidate.js', ssr: false },
        { src: '~/plugins/i18n.config.js', ssr: false },
        '~/plugins/router.js',
        '~/plugins/gtm.js',
        // { src: '~/plugins/gtm.js', ssr: false },
    ],
    aos: {
        once: true
    },
    css: [
        '~/assets/css/main.css',
    ],
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        'nuxt-aos',
        '@nuxtjs/i18n',
        'nuxt-calendly',
        'nuxt-directus',
        '@nuxt/image',
        '@dargmuesli/nuxt-cookie-control',
        '@zadigetvoltaire/nuxt-gtm',
        'nuxt-meta-pixel',
    ],
    directus: {
        url: "https://avalon-panel.sonisapps.com/"
    },
    calendly: {
        isEnabled: true,
        loadWidgetCSS: true,
        loadWidgetCloseIconSvg: true
    },
    i18n: {
        locales: [
            { code: 'ua', iso: 'ua-US', name: 'Ukraine', file: 'ua.json' },
            { code: 'ru', iso: 'ru-RU', name: 'Русский', file: 'ru.json' },
            { code: 'en', iso: 'en-US', name: 'English', file: 'en.json' }
        ],
        defaultLocale: 'en',
        langDir: 'locales/',
        vueI18n: './i18n.js'
    },
    swiper: {
        modules: ['navigation', 'pagination'],
    },
    pinia: {
        storesDirs: ['./stores/**', './custom-folder/stores/**'],
        autoImports: ["defineStore"]
    },

    ogImage: {
        enabled: false
    },
    sitemap: {
        enabled: false
    },
    robots: {
        enabled: false
    },
    seoExperiments: {
        enabled: false
    },
    schemaOrg: {
        enabled: false
    },
    linkChecker: {
        enabled: false
    },

    site: {
        url: 'https://example.com',
        name: 'Awesome Site',
        description: 'Welcome to my awesome site!',
        defaultLocale: 'en', // not needed if you have @nuxtjs/i18n installed
    },


    gtm: {
        id: 'GTM-1', // Идентификатор будет установлен динамически
        enabled: false // Отключаем GTM до инициализации
    },
})