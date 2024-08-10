import { useAsyncData } from "nuxt/app";

const fetchNavigationPages = async (getItems) => {
  return await useAsyncData("NavigationPages", async () => {
    try {
      const items = await getItems({
        collection: "Page",
        params: {
          fields: "*,translations.*",
        },
      });

      return items;
    } catch (e) {
      console.error("Error fetching items:", e);
    }
  });
};

export default fetchNavigationPages;
