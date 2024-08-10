// import { useAsyncData } from "nuxt/app";

const fetchBlocks = async (getItems) => {
  // return await useAsyncData("Blocks", async () => {
  //   try {
  //     const items = await getItems({
  //       collection: "Block",
  //       params: {
  //         fields: [
  //           "*",
  //           "id",
  //           "title",
  //           "strings.id",
  //           "strings.String_id.translations.description",
  //           "strings.String_id.translations.id",
  //           "strings.String_id.translations.title",
  //           "strings.String_id.translations.languages_code.*",
  //         ],
  //       },
  //     });

  //     return items;
  //   } catch (e) {
  //     console.error("Error fetching items:", e);
  //   }
  // });
};

export default fetchBlocks;
