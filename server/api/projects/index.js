import { createDirectus, rest, readItems } from "@directus/sdk";
import { API_LINK } from "~/utils/constants";
import { stripHtml } from "../../utils/stripHtml";

const directus = createDirectus(API_LINK).with(rest());

export default defineEventHandler(async (event) => {
  try {
    const items = await directus.request(
      readItems("Project", {
        fields: [
          "id",
          "preview",
          "logo",
          "status",
          "is_price_show",
          "price",
          "price_local",
          "location_name",
          "main_translations.languages_code",
          "main_translations.sale_alias",
          "translations.languages_code",
          "translations.slug",
          "translations.title",
          "translations.description",
        ],
      })
    );

    return items.map((item) => ({
      ...item,
      translations: item.translations?.map((translation) => ({
        ...translation,
        description: stripHtml(translation.description),
      })),
    }));
  } catch (e) {
    console.error("Error fetching:", e);
  }
});
