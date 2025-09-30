export default defineNuxtRouteMiddleware(async (to) => {
    if (process.server) return

    const { $i18n } = useNuxtApp()

    const locale = to.path.match(/^\/([a-z]{2})(\/|$)/)?.[1]

    if (locale && ['en', 'ru', 'ua'].includes(locale)) {
        if ($i18n.locale.value !== locale) {
            await $i18n.setLocale(locale)
        }
        localStorage.setItem('i18n_redirected', locale)
    } else if (to.path === '/' || to.path === '') {
        const savedLang = localStorage.getItem('i18n_redirected')

        if (savedLang && savedLang !== 'en') {
            return navigateTo(`/${savedLang}`)
        } else {
            await $i18n.setLocale('en')
        }
    }
})
