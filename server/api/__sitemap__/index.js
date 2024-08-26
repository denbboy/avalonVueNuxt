import { SitemapStream, streamToPromise } from "sitemap";
import { createDirectus, readItems, rest } from "@directus/sdk";

const directus = createDirectus(process.env.DIRECTUS_LINK).with(rest());

export default defineEventHandler(async (event) => {
  const Projects = await directus.request(
    readItems("Project", {
      fields: ["translations.languages_code.code", "translations.slug"],
    })
  );

  const urls = [];

  getUrls(Projects, "/projects", urls);

  const sitemap = new SitemapStream({
    hostname: process.env.BASE_URL || "http://localhost:3000", // Убедитесь, что это правильный базовый URL
  });

  for (const item of urls) {
    sitemap.write({
      url: item.url,
      changefreq: "monthly",
    });
  }

  sitemap.end();
  return streamToPromise(sitemap);
});

function getUrls(items, urlCode, urls) {
  for (const item of items) {
    const translations = item.translations || [];
    
    const EN_SLUG = translations.find(tr => tr.languages_code.code === "en-US")?.slug;
    const UA_SLUG = translations.find(tr => tr.languages_code.code === "ua-UA")?.slug;
    const RU_SLUG = translations.find(tr => tr.languages_code.code === "ru-RU")?.slug;

    if (EN_SLUG) {
      urls.push({ url: `${urlCode}/${EN_SLUG}` });
    }
    if (UA_SLUG) {
      urls.push({ url: `ua${urlCode}/${UA_SLUG}` });
    }
    if (RU_SLUG) {
      urls.push({ url: `ru${urlCode}/${RU_SLUG}` });
    }
  }
}
