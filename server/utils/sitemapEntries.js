import { createDirectus, rest, readItems } from "@directus/sdk";
import { API_LINK } from "~/utils/constants";

export const SITEMAP_LOCALES = [
  { code: "en", prefix: "", hreflang: "en" },
  { code: "ru", prefix: "/ru", hreflang: "ru" },
  { code: "ua", prefix: "/ua", hreflang: "uk" },
];
export const SITEMAP_LOCALE_CODES = SITEMAP_LOCALES.map((l) => l.code);

const langMatch = (code, l) => (code || "").toLowerCase().startsWith(l);

let _cache = { entries: null, ts: 0 };
const TTL_MS = 30_000;

async function fetchEntries() {
  const directus = createDirectus(API_LINK).with(rest());

  let articles = [];
  let projects = [];
  let news = [];
  let sales = [];
  let pages = [];
  let ok = true;
  try {
    [articles, projects, news, sales, pages] = await Promise.all([
      directus.request(readItems("Article", { limit: -1, fields: ["date_updated", "date_created", "translations.slug", "translations.languages_code"] })),
      directus.request(readItems("Project", { limit: -1, fields: ["date_updated", "date_created", "translations.slug", "translations.languages_code"] })),
      directus.request(readItems("News", { limit: -1, fields: ["date_updated", "date_created", "translations.slug", "translations.languages_code"] })),
      directus.request(readItems("Sale", { limit: -1, filter: { is_active: { _eq: true } }, fields: ["date_updated", "date_created", "translations.slug", "translations.languages_code"] })),
      directus.request(readItems("Page", { limit: -1, fields: ["slug", "date_updated", "date_created"] })),
    ]);
  } catch (e) {
    ok = false;
    console.error("[sitemap] Directus fetch failed:", e?.message || e);
  }

  const entries = [];

  const maxDate = (items, of) => {
    let m = null;
    for (const it of items || []) {
      const d = of(it);
      if (d && (!m || new Date(d) > new Date(m))) m = d;
    }
    return m;
  };
  const articlesDate = maxDate(articles, (a) => a.date_updated || a.date_created);
  const newsDate = maxDate(news, (n) => n.date_updated || n.date_created);
  const salesDate = maxDate(sales, (s) => s.date_updated || s.date_created);
  const homeDate = [articlesDate, newsDate].filter(Boolean).sort().pop();
  const pageDate = {};
  for (const p of pages || []) if (p.slug) pageDate[p.slug] = p.date_updated || p.date_created;

  const staticPaths = [
    { path: "", priority: 1.0, changefreq: "monthly", lastmod: homeDate || pageDate["main"] },
    { path: "/articles", priority: 0.9, changefreq: "weekly", lastmod: articlesDate },
    { path: "/news", priority: 0.9, changefreq: "weekly", lastmod: newsDate },
    { path: "/sales", priority: 0.9, changefreq: "weekly", lastmod: salesDate },
    { path: "/career", priority: 0.8, changefreq: "monthly", lastmod: pageDate["career"] },
    { path: "/cooperation", priority: 0.8, changefreq: "monthly", lastmod: pageDate["cooperation"] },
  ];
  for (const sp of staticPaths) {
    const byLang = {};
    for (const { code, prefix } of SITEMAP_LOCALES) byLang[code] = `${prefix}${sp.path}` || "/";
    entries.push({ byLang, priority: sp.priority, changefreq: sp.changefreq, ...(sp.lastmod ? { lastmod: sp.lastmod } : {}) });
  }

  const addCollection = (items, seg, priority, changefreq, lastmodOf) => {
    for (const it of items || []) {
      const byLang = {};
      for (const { code, prefix } of SITEMAP_LOCALES) {
        const tr = (it.translations || []).find((t) => langMatch(t.languages_code, code));
        if (tr && tr.slug) byLang[code] = `${prefix}/${seg}/${tr.slug}`;
      }
      if (Object.keys(byLang).length) {
        const lastmod = lastmodOf ? lastmodOf(it) : undefined;
        entries.push({ byLang, priority, changefreq, ...(lastmod ? { lastmod } : {}) });
      }
    }
  };
  addCollection(articles, "articles", 0.7, "monthly", (a) => a.date_updated || a.date_created);
  addCollection(projects, "projects", 0.9, "monthly", (p) => p.date_updated || p.date_created);
  addCollection(news, "news", 0.7, "weekly", (n) => n.date_updated || n.date_created);
  addCollection(sales, "sales", 0.7, "weekly", (s) => s.date_updated || s.date_created);

  return { entries, ok };
}

export async function buildSitemapEntries() {
  const now = Date.now();
  if (_cache.entries && now - _cache.ts < TTL_MS) return _cache.entries;
  const { entries, ok } = await fetchEntries();
  if (ok || !_cache.entries) _cache = { entries, ts: now };
  else _cache.ts = now;
  return _cache.entries;
}

export function entriesToUrls(entries, code) {
  return entries
    .filter((e) => e.byLang[code])
    .map((e) => ({
      loc: e.byLang[code],
      changefreq: e.changefreq,
      priority: e.priority,
      ...(e.lastmod ? { lastmod: e.lastmod } : {}),
      alternatives: [
        ...SITEMAP_LOCALES.filter((l) => e.byLang[l.code]).map((l) => ({ hreflang: l.hreflang, href: e.byLang[l.code] })),
        ...(e.byLang.en ? [{ hreflang: "x-default", href: e.byLang.en }] : []),
      ],
    }));
}
