import ua from './../locales/ua.json'
import ru from './../locales/ru.json'
import en from './../locales/en.json'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    ua,
    ru,
    en,
  }
}))
