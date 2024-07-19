export default function ({ isHMR, app, store, route, params, error, redirect }) {
    if (isHMR) return
  
    const locale = params.locale || 'ua'
    if (!['ua', 'ru', 'en'].includes(locale)) {
      return error({ message: 'Page not found.', statusCode: 404 })
    }
    app.i18n.locale = locale
  }