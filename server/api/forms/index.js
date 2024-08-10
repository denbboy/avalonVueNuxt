import { useAsyncData } from "nuxt/app";

const fetchForms = async (getItems) => {
  return await useAsyncData("Forms", async () => {
    try {
      const items = await getItems({
        collection: "Form",
        params: {
          fields: "*",
        },
      });

      return items;
    } catch (e) {
      console.error("Error fetching items:", e);
    }
  });
};

export default fetchForms;
