import { createDirectus, rest, readItems } from "@directus/sdk";
import { API_LINK } from "~/utils/constants";

const directus = createDirectus(API_LINK).with(rest());

export default defineEventHandler(async (event) => {
  try {
    const items = await directus.request(
      readItems("News", {
        fields: ["*", "translations.*"],
      })
    );

    return items;
  } catch (e) {
    console.error("Error fetching:", e);
  }
});

