<template>

  <Head>
    <Title>
      {{ itemData?.translations?.filter(item => item.languages_code.includes(langStore.lang))[0]?.meta_title }}
    </Title>
    <Meta name="description"
      :content="itemData?.translations?.filter(item => item.languages_code.includes(langStore.lang))[0]?.meta_description" />
  </Head>

  <section class="bg-blue-500 pt-32 md:pt-64">
    <div class="absolute top-0 left-0 w-full h-screen z-0 opacity-70">
      <div class="bg-gradient-to-t from-blue-500 absolute top-0 left-0 w-full h-full"></div>
    </div>

    <img v-if="itemData?.preview" :src="`https://avalon-panel.sonisapps.com/assets/${itemData?.preview}`"
      class="absolute top-0 z-0 opacity-90 w-[600vw] md:w-full min-h-[1000px] h-screen object-cover" alt="">
    <div class="bg-gradient-to-t from-blue-500 top-[calc(1000px_-_700px)] from-20% w-full h-[1000px] absolute z-10">
    </div>
    <div class="bg-gradient-to-t from-blue-500 top-[calc(1000px_-_700px)] from-20% w-full h-[1000px] absolute z-10">

    </div>

    <div class="container relative z-10">
      <div class="absolute right-0 bottom-56 w-72 h-72 z-10">
        <img src="/assets/img/icons/vector-logo.svg" alt="vector-logo">
      </div>

      <div class="pb-14 text-content">
        <div
          class="flex before:w-[6px] before:rounded-sm before:h-[6px] before:bg-white before:mr-[10px] opacity-60 items-center">
          <span class="text-white text-sm">
            {{ new Date(itemData?.date_created).getDate() }} {{ $t(`month${new Date(itemData?.date_created).getMonth()
              ?? "0" + 1}`) }} {{ new Date(itemData?.date_created).getFullYear() }}
          </span>
        </div>
        <h1
          class="text-white text-[30px] md:text-[55px] lg:text-[65px] font-bold break-words mt-4 leading-9 md:leading-tight md:max-w-[876px]"
          v-html="itemData?.translations?.filter(item => item.languages_code.includes(langStore.lang))[0]?.title">
        </h1>

        <a href="#"
          class="rounded-full border-[1px] border-white w-10 h-10 flex items-center justify-center mt-8 mb-14 md:w-14 md:h-14">
          <img src="/assets/img/icons/socials.svg" class="md:w-6" alt="Soc">
        </a>

        <div
          v-html="itemData?.translations?.filter(item => item.languages_code.includes(langStore.lang))[0]?.description">
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.text-content blockquote {
  padding-left: 36px;
}



.text-content,
.text-content b {
  color: #fff;
  font-size: 20px;
  margin-bottom: 8px;
  display: block;
}
</style>

<script setup>
const { getItems } = useDirectusItems();
const langStore = useLangStore();
const itemsList = ref([]);
const route = useRoute();

// GET POST
const itemData = ref([]);
const fetchItemData = async () => {
  try {
    const items = await getItems({
      collection: `News/${route.params.id}`,
      params: {
        fields: '*,translations.*'
      },
    });

    itemData.value = items;
    console.log('ITEM_DATA', items);
  } catch (e) {
    console.error('Error fetching items:', e);
  }
};
onMounted(fetchItemData);
// GET POST

const { id } = useRoute().params
</script>
