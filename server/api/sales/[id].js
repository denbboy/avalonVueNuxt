import { createDirectus, rest, readItem } from "@directus/sdk";
import { API_LINK } from "~/utils/constants";

const directus = createDirectus(API_LINK).with(rest());

export default defineEventHandler(async (event) => {
  const id = event.context.params.id;
  try {
    const items = await directus.request(
      readItem("Sale", id, {
        fields: ["*", "translations.*"],
      })
    );

    return items;
  } catch (e) {
    console.error("Error fetching:", e);
  }
});
