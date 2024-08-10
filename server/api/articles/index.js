import { useAsyncData } from "nuxt/app";

const fetchArticles = async (getItems) => {
  return await useAsyncData("Articles", async () => {
    try {
      const items = await getItems({
        collection: "Article",
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

export default fetchArticles;
