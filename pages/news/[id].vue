<template>

  <Head>
    <Title>
      {{ itemData?.translations?.filter(item =>
        item.languages_code.includes(langStore.lang))[0]?.meta_title }}
    </Title>
    <Meta name="description"
      :content="itemData?.translations?.filter(item => item.languages_code.includes(langStore.lang))[0]?.meta_description" />
  </Head>

  <section class="bg-blue-500 pt-32 md:pt-64">
    <div class="absolute top-0 left-0 w-full h-screen z-0 opacity-70">
      <div class="bg-gradient-to-t from-blue-500 absolute top-0 left-0 w-full h-full"></div>
    </div>


    <div class="absolute top-0 z-0 w-[600vw] md:w-full min-h-[1000px] h-screen">
      <SkeletonLoader v-if="itemData?.preview" class="h-full w-full">
        <NuxtImg v-show="!imageLoaded" loading="lazy"
          :src="`https://avalon-panel.sonisapps.com/assets/${itemData?.preview}`" @load="onImageLoad"
          class="opacity-0 absolute top-0 z-0 w-[600vw] md:w-full min-h-[1000px] h-screen object-cover" alt="Image" ref="image" />
        <NuxtImg v-if="imageLoaded" loading="lazy"
          :src="`https://avalon-panel.sonisapps.com/assets/${itemData?.preview}`"
          class="absolute top-0 z-0 opacity-90 w-[600vw] md:w-full min-h-[1000px] h-screen object-cover" alt="Image" />
      </SkeletonLoader>
    </div>

    <div class="bg-gradient-to-t from-blue-500 top-[calc(1000px_-_700px)] from-20% w-full h-[1000px] absolute z-10">
    </div>
    <div class="bg-gradient-to-t from-blue-500 top-[calc(1000px_-_700px)] from-20% w-full h-[1000px] absolute z-10">
    </div>

    <div class="container relative z-10">
      <div class="absolute right-0 bottom-56 w-72 h-72 z-10">
        <NuxtImg src="/img/icons/vector-logo.svg" class="w-full" alt="vector-logo" loading="lazy" />
      </div>

      <div class="pb-14 text-content">
        <div
          class="flex before:w-[6px] before:rounded-sm before:h-[6px] before:bg-white before:mr-[10px] opacity-60 items-center">
          <span class="text-white text-sm">
            {{ new Date(itemData?.date_created).getDate() }} {{ $t(`month${new
              Date(itemData?.date_created).getMonth()
              ?? "0" + 1}`) }} {{ new Date(itemData?.date_created).getFullYear() }}
          </span>
        </div>
        <h1
          class="text-white text-[30px] md:text-[55px] lg:text-[65px] font-bold break-words mt-4 leading-9 md:leading-tight md:max-w-[876px]"
          v-html="itemData?.translations?.filter(item => item.languages_code.includes(langStore.lang))[0]?.title">
        </h1>

        <a href="#"
          class="rounded-full border-[1px] border-white w-10 h-10 flex items-center justify-center mt-8 mb-14 md:w-14 md:h-14">
          <NuxtImg src="/img/icons/socials.svg" class="md:w-6" alt="Soc" loading="lazy" />
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

const imageLoaded = ref(false);
const image = ref(null);

function onImageLoad() {
    imageLoaded.value = true;
}

onMounted(() => {
    if (image.value?.complete) {
        imageLoaded.value = true;
    }
});

const langStore = useLangStore();
const route = useRoute();

const res = await useAsyncData('NewsItem', () => $fetch(`/api/news/${route.params.id}`));
const itemData = res?.data?.value[0]
</script>
