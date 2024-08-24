export default defineEventHandler(async (event) => {

    const query = getQuery(event);

    const { image, width, height } = query;

    if (!image || !width || !height) {
        return { error: "Missing required parameters" };
    }

    try {
        console.log(`${process.env.DIRECTUS_LINK}/assets/${image}?width=${width}&height=${height}`);
        
        const res = await fetch(`${process.env.DIRECTUS_LINK}/assets/${image}?width=${width}&height=${height}`);
        const data = await res.json();

        return JSON.stringify(data);
    } catch (error) {
        return { error: error };
    }
});
