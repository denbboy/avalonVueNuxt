import { createDirectus, rest, readItems } from "@directus/sdk";
import { API_LINK } from "~/utils/constants";

const directus = createDirectus(API_LINK).with(rest());

export default defineEventHandler(async (event) => {
  const slug = event.context.params.id;
  try {
    const items = await directus.request(
      readItems("Article", {
        fields: ["*", "translations.*"],
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
    console.error("Error fetching:", e);
  }
});
