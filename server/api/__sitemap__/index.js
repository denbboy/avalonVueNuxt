import { SitemapStream, streamToPromise } from "sitemap";

export default defineEventHandler(async (event) => {
  try {
    const urls = [];

    urls.push({ url: "/" });
    urls.push({ url: "/en" });
    urls.push({ url: "/ua" });
    urls.push({ url: "/ru" });


    urls.push({ url: "/#about-company" });
    urls.push({ url: "/en/#about-company" });
    urls.push({ url: "/#island" });
    urls.push({ url: "/en/#island" });


    urls.push({ url: "/cooperation" });
    urls.push({ url: "/en/cooperation" });
    urls.push({ url: "/ua/cooperation" });
    urls.push({ url: "/ru/cooperation" });

    urls.push({ url: "/career" });
    urls.push({ url: "/en/career" });
    urls.push({ url: "/ua/career" });
    urls.push({ url: "/ru/career" });

    try {
      const { createDirectus, readItems, rest } = await import("@directus/sdk");
      const directus = createDirectus('https://api.avalonbali.com/').with(rest());

      const Projects = await directus.request(
        readItems("Project", {
          fields: ["translations.languages_code.code", "translations.slug"],
        })
      );

      getUrls(Projects, "/projects", urls);
    } catch (directusError) {
      console.warn('Could not fetch projects from Directus:', directusError.message);
      // Continue without projects data
    }

    const sitemap = new SitemapStream({
      hostname: process.env.BASE_URL || "http://localhost:3000",
    });

    for (const item of urls) {
      sitemap.write({
        url: item.url,
        changefreq: "monthly",
        priority: 0.8,
      });
    }

    sitemap.end();
    return streamToPromise(sitemap);
  } catch (error) {
    console.error('Sitemap generation error:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Sitemap generation failed'
    });
  }
});

function getUrls(items, urlCode, urls) {
  for (const item of items) {
    const translations = item.translations || [];

    const EN_SLUG = translations.find(
      (tr) => tr.languages_code.code === "en-US"
    )?.slug;
    const UA_SLUG = translations.find(
      (tr) => tr.languages_code.code === "ua-UA"
    )?.slug;
    const RU_SLUG = translations.find(
      (tr) => tr.languages_code.code === "ru-RU"
    )?.slug;

    if (EN_SLUG) {
      urls.push({ url: `${urlCode}/${EN_SLUG}` }); // Default English
      urls.push({ url: `/en${urlCode}/${EN_SLUG}` }); // /en/ alias
    }
    if (UA_SLUG) {
      urls.push({ url: `/ua${urlCode}/${UA_SLUG}` });
    }
    if (RU_SLUG) {
      urls.push({ url: `/ru${urlCode}/${RU_SLUG}` });
    }
  }
}
