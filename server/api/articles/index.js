import { createDirectus, rest, readItems } from "@directus/sdk";
import { API_LINK } from "~/utils/constants";
import { stripHtml } from "../../utils/stripHtml";

const directus = createDirectus(API_LINK).with(rest());

export default defineEventHandler(async (event) => {
  try {
    const items = await directus.request(
      readItems("Article", {
        fields: [
          "id",
          "preview",
          "translations.languages_code",
          "translations.slug",
          "translations.title",
          "translations.description",
        ],
        sort: ["-date_created"],
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

