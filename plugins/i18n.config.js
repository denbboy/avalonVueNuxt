import { createI18n } from 'vue-i18n'
import ua from './../locales/ua.json'
import ru from './../locales/ru.json'
import en from './../locales/en.json'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'ru',
  fallbackLocale: 'ru',
  messages: {
    ua,
    ru,
    en,
  }
}))
