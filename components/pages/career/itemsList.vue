<template>

    <PagesCareerItem v-for="item in itemsList" :key="item.id" :item="item" />

</template>

<script setup>
const { getItems } = useDirectusItems();

const langStore = useLangStore();

const itemsList = ref([]);

const fetchArticles = async () => {
  try {
    const items = await getItems({
      collection: "Vacancy",
      params: {
        fields: '*,translations.*'
      },
    });
    itemsList.value = items;
    console.log(items);
  } catch (e) {
    console.error('Error fetching items:', e);
  }
};

onMounted(fetchArticles);
</script>
