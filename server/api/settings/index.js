import { useAsyncData } from "nuxt/app";

const fetchSettings = async (getItems) => {
  return await useAsyncData("Settings", async () => {
    try {
      const items = await getItems({
        collection: "Settings",
      });
      return items;
    } catch (e) {
      console.error("Error fetching items:", e);
    }
  });
};

export default fetchSettings;
