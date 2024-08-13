<template>
  <section id="island" class="py-14 md:py-14 lg:py-24 relative overflow-hidden">
    <div class="container">
      <div class="mb-8 text-center md:mb-12">
        <p class="text-white mb-2 text-sm md:text-base" data-aos="fade-up">
          {{ itemStrings?.filter(item => item.id === 119)[0]?.String_id?.translations?.filter(item =>
            item.languages_code.code.includes(langStore.lang))[0]?.description }}
        </p>
        <h2 class="text-white font-bold text-2xl md:text-[45px] 3xl:text-[56px] leading-[100%]" data-aos="fade-up">
          {{ itemStrings?.filter(item => item.id === 119)[0]?.String_id?.translations?.filter(item =>
            item.languages_code.code.includes(langStore.lang))[0]?.title }}
        </h2>
      </div>
      <div class="con_list grid gap-[30px] xl:gap-0 xl:grid-cols-[1fr_1.1fr_1fr]">
        <ul class="flex flex-col gap-4">

          <ReasonItem :handleOpen="handleOpen" :openedItem="openedItem" index="1" :title="itemStrings?.filter(item => item.id === 120)[0]?.String_id?.translations?.filter(item =>
            item.languages_code.code.includes(langStore.lang))[0]?.title" :description="itemStrings?.filter(item => item.id === 120)[0]?.String_id?.translations?.filter(item =>
              item.languages_code.code.includes(langStore.lang))[0]?.description" />
          <div class="h-[1px] w-[calc(100%+20px)] hidden md:block ml-auto -mr-24 my-auto bg-white/20"></div>
          <ReasonItem :handleOpen="handleOpen" :openedItem="openedItem" index="2" :title="itemStrings?.filter(item => item.id === 121)[0]?.String_id?.translations?.filter(item =>
            item.languages_code.code.includes(langStore.lang))[0]?.title" :description="itemStrings?.filter(item => item.id === 121)[0]?.String_id?.translations?.filter(item =>
              item.languages_code.code.includes(langStore.lang))[0]?.description" />
          <div class="h-[1px] hidden md:block w-[calc(100%-76px)] ml-auto my-auto bg-white/20"></div>
          <ReasonItem :handleOpen="handleOpen" :openedItem="openedItem" index="3" :title="itemStrings?.filter(item => item.id === 122)[0]?.String_id?.translations?.filter(item =>
            item.languages_code.code.includes(langStore.lang))[0]?.title" :description="itemStrings?.filter(item => item.id === 122)[0]?.String_id?.translations?.filter(item =>
              item.languages_code.code.includes(langStore.lang))[0]?.description" />


        </ul>

        <!-- <img loading="lazy" src="/assets/img/index/island-img.png" class="my-8 max-w-56 m-auto md:max-w-[500px] md:m-0" alt="ph" data-aos="zoom-in"> -->

        <div
          class="logo-clip-path max-h-[222px] max-w-[214px] md:max-w-full md:max-h-full md:min-w-[318px] md:h-[380px] lg:min-w-[553px] lg:h-[573px] mx-auto my-auto">
          <video loop
            class="md:min-w-[318px]  md:h-[380px] lg:min-w-[553px] lg:h-[573px] min-w-[214px] w-full h-[222px] object-cover"
            muted autoplay>
            <!-- <source src="/assets/video/video-logo.webm" type="video/webm"> -->
            <source src="/assets/video/video-logo.mp4" type="video/mp4" />
          </video>
        </div>

        <ul class="flex flex-col gap-4">
          <ReasonItem :handleOpen="handleOpen" :openedItem="openedItem" index="4" :title="itemStrings?.filter(item => item.id === 123)[0]?.String_id?.translations?.filter(item =>
            item.languages_code.code.includes(langStore.lang))[0]?.title" :description="itemStrings?.filter(item => item.id === 123)[0]?.String_id?.translations?.filter(item =>
              item.languages_code.code.includes(langStore.lang))[0]?.description" />
          <div class="h-[1px] w-[calc(100%+20px)] hidden xl:block -ml-24 my-auto bg-white/20"></div>
          <ReasonItem :handleOpen="handleOpen" :openedItem="openedItem" index="5" :title="itemStrings?.filter(item => item.id === 124)[0]?.String_id?.translations?.filter(item =>
            item.languages_code.code.includes(langStore.lang))[0]?.title" :description="itemStrings?.filter(item => item.id === 124)[0]?.String_id?.translations?.filter(item =>
              item.languages_code.code.includes(langStore.lang))[0]?.description" />
          <div class="h-[1px] hidden xl:block w-[calc(100%-76px)] my-auto bg-white/20"></div>
          <ReasonItem :handleOpen="handleOpen" :openedItem="openedItem" index="6" :title="itemStrings?.filter(item => item.id === 125)[0]?.String_id?.translations?.filter(item =>
            item.languages_code.code.includes(langStore.lang))[0]?.title" :description="itemStrings?.filter(item => item.id === 125)[0]?.String_id?.translations?.filter(item =>
              item.languages_code.code.includes(langStore.lang))[0]?.description" />
        </ul>
      </div>

      <div
        class="border border-blue-400 rounded-2xl mt-[60px] overflow-hidden lg:mt-[68px] md:mt-[80px] md:flex md:h-32 lg:h-48 md:items-center"
        data-aos="fade-left">
        <div
          class="flex items-center gap-4 py-7 px-5 border-b border-blue-400 md:border-r md:border-b-0 md:h-full md:px-8 md:w-full">
          <img loading="lazy" src="/assets/img/index/cool.svg" class="w-16" alt="svg">
          <span class="text-base text-white md:max-w-56 md:text-[14px] 3xl:text-[16px]">
            {{ itemStrings?.filter(item => item.id === 126)[0]?.String_id?.translations?.filter(item =>
              item.languages_code.code.includes(langStore.lang))[0]?.title }}
          </span>
        </div>
        <div
          class="py-7 px-5 border-b border-blue-400 md:border-r md:border-b-0 md:h-full flex flex-col md:justify-center md:w-full">
          <p class="text-white text-3xl font-bold mb-2 md:text-[30px] 3xl:text-[40px]">
            {{ itemStrings?.filter(item => item.id === 127)[0]?.String_id?.translations?.filter(item =>
              item.languages_code.code.includes(langStore.lang))[0]?.title }}
          </p>
          <span class="text-base text-white md:text-[14px]">
            {{ itemStrings?.filter(item => item.id === 127)[0]?.String_id?.translations?.filter(item =>
              item.languages_code.code.includes(langStore.lang))[0]?.description }}
          </span>
        </div>
        <div
          class="py-7 px-5 border-b border-blue-400 md:border-r md:border-b-0 md:h-full flex flex-col md:justify-center md:w-full">
          <p class="text-white text-3xl font-bold mb-2 md:text-[30px] 3xl:text-[40px]">
            {{ itemStrings?.filter(item => item.id === 128)[0]?.String_id?.translations?.filter(item =>
              item.languages_code.code.includes(langStore.lang))[0]?.title }}
          </p>
          <span class=" text-white text-[13px] 3xl:text-base">
            {{ itemStrings?.filter(item => item.id === 128)[0]?.String_id?.translations?.filter(item =>
              item.languages_code.code.includes(langStore.lang))[0]?.description }}
          </span>
        </div>
        <div class="py-7 px-5 lg:px-5 md:px-3 bg-blue-400 md:h-full flex flex-col md:justify-center md:w-full">
          <p class="text-white text-3xl font-bold mb-2 flex md:text-[30px] lg:text-[40px] items-center">
            {{ itemStrings?.filter(item => item.id === 129)[0]?.String_id?.translations?.filter(item =>
              item.languages_code.code.includes(langStore.lang))[0]?.title }}
            <img loading="lazy" src="/assets/img/index/A-decor.svg" class="ml-1 max-w-5 md:max-w-5 md:-mt-1 lg:max-w-7" alt="ic">
          </p>
          <span class=" text-white text-[13px] 3xl:text-base">
            {{ itemStrings?.filter(item => item.id === 129)[0]?.String_id?.translations?.filter(item =>
              item.languages_code.code.includes(langStore.lang))[0]?.description }}
          </span>
        </div>
      </div>

    </div>

    <div class="absolute md:-right-36 -bottom-14 md:hidden mt-[1px] translate-y-1 -right-14 w-28 z-[2]">
      <img loading="lazy" src="/assets/img/icons/vector-logo.svg" alt="vector-logo">
    </div>
  </section>
</template>

<script setup>
import { useBlocksStore } from '~/stores/functions/blocks';

const props = defineProps(['itemStrings'])

const itemStrings = ref([]);
const openedItem = ref(false)

const handleOpen = (item) => {
  openedItem.value = openedItem.value === item ? '' : item
}

const route = useRoute();
const langStore = useLangStore()
const blocksStore = useBlocksStore()

watchEffect(() => {
  const isProjectPage = route.path.includes('/projects/');

  // setTimeout(() => {
  //   if (window?.innerWidth < 576) {
  //     isMobile.value = true
  //   } else {
  //     isMobile.value = false
  //   }
  // }, 500)

  if (isProjectPage) {
    // Если это страница проекта, обновляем itemStrings из props
    itemStrings.value = props.itemStrings ?? (blocksStore.blocks?.filter(item => item?.id === 29)[0]?.strings || []);
  } else {
    // Если это не страница проекта, обновляем itemStrings из blocksStore
    const block = blocksStore.blocks?.find(item => item?.id === 29);
    itemStrings.value = block?.strings || [];
  }
});

watch(props, async (newValue) => {

  console.log('cccc', newValue.itemStrings);

  if (window.location.href.includes('/projects/')) {
    itemStrings.value = newValue.itemStrings ?? newValue.blocks?.filter(item => item?.id === 29)[0];
  }
});
watch(blocksStore, async (newValue) => {

  if (!window.location.href.includes('/projects/')) {
    const block = newValue.blocks?.filter(item => item?.id === 29)[0];
    itemStrings.value = block?.strings || [];
  }
});


</script>
