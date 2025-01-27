import { createDirectus, rest, readItems } from "@directus/sdk";
import { API_LINK } from "~/utils/constants";

const directus = createDirectus(API_LINK).with(rest());

export default defineEventHandler(async (event) => {
  try {
    const items = await directus.request(
      readItems("Cooperation", {
        fields: [
          "*",
          "translations.*"
        ],
      })
    );

    console.log('COOPERATION', items);
    
    
    return items;
  } catch (e) {
    console.error("COOPERATION Error fetching:", e);
  }
});
