import { createDirectus, rest, readItems } from "@directus/sdk";
import { API_LINK } from "~/utils/constants";

const directus = createDirectus(API_LINK).with(rest());

export default defineEventHandler(async (event) => {
  try {
    const items = await directus.request(
      readItems("Block", {
        fields: [
          "*",
          "id",
          "title",
          "strings.id",
          "strings.String_id.translations.description",
          "strings.String_id.translations.id",
          "strings.String_id.translations.title",
          "strings.String_id.translations.languages_code.*",
        ],
      })
    );

    return items;
  } catch (e) {
    console.error("Error fetching:", e);
  }
});

