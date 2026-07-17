export default defineNuxtPlugin(({ $i18n, $router }) => {
  if (process.client) {
    $router.beforeEach((to, from, next) => {
      const langStore = useLangStore();
      const savedLanguage = localStorage.getItem('i18n_redirected');
      const currentLocale = savedLanguage || langStore.lang || 'en';
      const localePrefix = currentLocale !== 'en' ? `/${currentLocale}` : '';

      // Удаляем любой префикс языка из пути, но сохраняем один слэш
      const pathWithoutLocalePrefix = to.path.replace(/^\/[a-z]{2}(\/|$)/, '/');
      
      // Убедимся, что новый путь не имеет двойных слэшей
      const newPath = `${localePrefix}${pathWithoutLocalePrefix}`.replace(/\/{2,}/g, '/');

      // Избегаем бесконечной переадресации
      if (to.path !== newPath) {
        return next({ path: newPath, query: to.query, hash: to.hash });
      }

      next();
    });
  }
});
