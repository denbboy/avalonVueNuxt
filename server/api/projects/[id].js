import { createDirectus, rest, readItem, readItems } from "@directus/sdk";
import { API_LINK } from "~/utils/constants";

const directus = createDirectus(API_LINK).with(rest());

export default defineEventHandler(async (event) => {
  const slug = event.context.params.id;
  try {

    const items = await directus.request(
      readItems("Project", {
        fields: [
          "*",
          "translations.*",
          "main_translations.*",
          "gallery.*",
          "apartments.*.*",
          "blocks.Block_id.*.*.*.*.*",
          "relative_projects.related_Project_id.translations.*",
          "relative_projects.related_Project_id.status",
          "relative_projects.related_Project_id.id",
          "relative_projects.related_Project_id.main_translations.*",
          "relative_projects.related_Project_id.logo",
          "relative_projects.related_Project_id.preview",
          "relative_projects.related_Project_id.price_local",
          "relative_projects.related_Project_id.is_price_show",
          "relative_projects.related_Project_id.price",
          "relative_projects.related_Project_id.roi_procent",
          "sales.Sale_id.translations.*",
          "sales.*.*",
          "sales.*.projects.logo",
          // "sales.Sale_id.preview",
          // "sales.Sale_id.id",
        ],
        filter: {
          translations: {
            slug: {
              _eq: slug,
            },
          },
        },
      })
    );

    for (const item of items ?? []) {
      if (Array.isArray(item.sales)) {
        item.sales = item.sales.filter((s) => s?.Sale_id);
      }
      if (Array.isArray(item.relative_projects)) {
        item.relative_projects = item.relative_projects.filter((r) => r?.related_Project_id);
      }
      if (Array.isArray(item.blocks)) {
        item.blocks = item.blocks.filter((b) => b?.Block_id);
      }
    }

    return items;
  } catch (e) {
    console.error("PROJECT Error fetching:", e);
  }
});
