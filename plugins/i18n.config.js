import { createI18n } from 'vue-i18n'
import ua from './../locales/ua.json'
import ru from './../locales/ru.json'

export default defineI18nConfig(() => ({
  legacy: false, // Используйте Composition API
  locale: 'ua',
  fallbackLocale: 'ua',
  messages: {
    ua,
    ru
  }
}))
