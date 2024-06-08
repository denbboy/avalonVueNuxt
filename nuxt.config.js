// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
    build: {
        transpile: ['swiper']
    },
    head: {
        htmlAttrs: {
            lang: 'ru',
        },
        meta: [{
            charset: 'utf-8',
        }, {
            name: 'viewport',
            content: 'width=device-width, minimum-scale=1, initial-scale=1, user-scalable=yes',
        }, {
            'http-equiv': 'x-ua-compatible',
            content: 'ie=edge',
        }],
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
    ],
    aos: {
        once: true
    },
    css: [
        '~/assets/css/main.css',
    ],
    modules: ['@nuxtjs/tailwindcss', "@pinia/nuxt", 'nuxt-aos', '@nuxtjs/i18n', 'nuxt-calendly'],
    calendly: {
        isEnabled: true,
        loadWidgetCSS: true,
        loadWidgetCloseIconSvg: true
    },
    i18n: {
        locales: [
            { code: 'ua', iso: 'ua-US', name: 'Ukraine', file: 'ua.json' },
            { code: 'ru', iso: 'ru-RU', name: 'Русский', file: 'ru.json' }
        ],
        defaultLocale: 'ru',
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
})