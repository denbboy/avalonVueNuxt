import { useAsyncData } from "nuxt/app";

const fetchSales = async (getItems) => {
  return await useAsyncData("Sales", async () => {
    try {
      const items = await getItems({
        collection: "Sale",
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

export default fetchSales;
