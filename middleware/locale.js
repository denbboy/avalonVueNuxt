export default function ({ route, redirect, app }) {
  const locale = app.i18n.locale;

  // Если язык уже есть в URL, ничего не делаем
  if (route.path.startsWith(`/${locale}`) || route.path === `/${locale}`) {
    return;
  }

  // Построение нового пути с префиксом языка
  const newPath = `/${locale}${route.path}`;

  redirect(newPath);
}
