// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
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
            {rel: 'stylesheet', href: '/assets/fonts/grandis/stylesheet.css'}
        ],
    },
    loading: {
        color: '#0f0',
    },
    app: {
        pageTransition: {name: 'page', mode: 'out-in'}
    },
    devtools: {enabled: true},
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    css: ['~/assets/css/main.css'],
    modules: ['@nuxtjs/tailwindcss', "@pinia/nuxt", 'nuxt-aos'],
    swiper: {
        modules: ['navigation', 'pagination'],
    },
    pinia: {
        storesDirs: ['./stores/**', './custom-folder/stores/**'],
    },
})