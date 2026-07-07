import { buildSitemapEntries, entriesToUrls, SITEMAP_LOCALE_CODES } from "../../utils/sitemapEntries";

export default defineEventHandler(async (event) => {
  const lang = event.context.params.lang;
  if (!SITEMAP_LOCALE_CODES.includes(lang)) return [];
  const entries = await buildSitemapEntries();
  return entriesToUrls(entries, lang);
});
