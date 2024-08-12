import { createDirectus, rest, readItem } from "@directus/sdk";
import { API_LINK } from "~/utils/constants";

const directus = createDirectus(API_LINK).with(rest());

export default defineEventHandler(async (event) => {
  const id = event.context.params.id;
  try {
    const items = await directus.request(
      readItem("Project", id, {
        fields: [
          "*",
          "translations.*",
          "gallery.*",
          "apartments.*.*",
          "blocks.Block_id.*.*.*.*.*",
          "relative_projects.related_Project_id.id",
          "relative_projects.related_Project_id.translations.*",
          "relative_projects.related_Project_id.logo",
          "relative_projects.related_Project_id.preview",
          "relative_projects.related_Project_id.price",
          "relative_projects.related_Project_id.roi_procent",
          "sales.Sale_id.translations.*",
          "sales.Sale_id.expired_date",
          "sales.Sale_id.preview",
          "sales.Sale_id.id",
        ],
      })
    );

    return items;
  } catch (e) {
    console.error("Error fetching:", e);
  }
});
