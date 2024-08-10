// server/api/slides.js (если вы используете серверный API)
export default defineEventHandler(async (event) => {
  const { getItems } = useDirectusItems();
  
  try {
    const items = await getItems({
      collection: "Slide",
      params: {
        fields: [
          "*",
          "translations.*",
          "strings.String_id.*.*",
          "projects.item.*",
          "projects.item.translations.*",
        ],
      },
    });
    console.log('ooo',items);
    return items;
  } catch (e) {
    console.error("Error fetching items:", e);
    throw createError({ statusCode: 500, statusMessage: 'Internal Server Error' });
  }
});
