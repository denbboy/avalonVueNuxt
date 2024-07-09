<script setup>
const { getItems } = useDirectusItems();

const langStore = useLangStore()
let itemsList = [];

const fetchArticles = async () => {
    try {
        const items = await getItems({
            collection: "Vacancy",
            params: {
                fields: '*,translations.*'
            },
        });

        itemsList = items;
        console.log(items);
    } catch (e) { }
};

await fetchArticles()
</script>

<template>

    <PagesCareerItem v-for="item in itemsList" :key="item.id" :item="item" />

</template>