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

    return items;
  } catch (e) {
    console.error("PROJECT Error fetching:", e);
  }
});
