<template>
  <section class="pb-12">

    <!-- :modules="modules" -->
    <swiper class="swiper-banner" :loop="true" :slides-per-view="1" :pagination="{ clickable: true }"
      :modules="[Pagination, A11y, Autoplay]" pagination a11y :autoplay="{ delay: 15000, disableOnInteraction: false }"
      :speed="1500">




      <swiper-slide v-for="item in itemsList" class="pt-40 lg:pt-[250px] lg:min-h-[810px] relative overflow-hidden">
        <div :class="`bg-[url('https://avalon-panel.sonisapps.com/assets/${item?.img}')]`"
          class="brightness-[1] bg-center absolute top-0 left-0 w-full h-[100%] -z-10 opacity-50">
          <iframe v-if="item?.video" class="scale-125 w-full h-full"
            src="https://www.youtube.com/embed/zHcr32gRRCs?si=73xg2tsfV1tnZjwg&autoplay=1&mute=1&loop=1&playlist=zHcr32gRRCs"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div class="bg-gradient-to-t from-blue-500 from-30% w-full h-52 absolute -z-10 bottom-0 left-0"></div>
        <div class="bg-gradient-to-t from-blue-500 from-30% w-full h-52 absolute -z-10 top-0 left-0 rotate-180">
        </div>


        <div class="container">
          <span v-if="item?.projects?.length">

            <div class="banner__item__head md:flex items-center">
              <img :src="`https://avalon-panel.sonisapps.com/assets/${item?.projects[0]?.item.logo}`"
                class="mb-7 md:mb-0" alt="logo">
              <div class="con md:ml-10 ">
                <div class="relative px-5 py-3 w-fit md:text-center md:px-7">
                  <img class="absolute top-0 left-0 -z-10 md:hidden" src="/assets/img/index/bgd-decor.png" alt="bgd">
                  <img class="absolute top-0 left-0 -z-10 hidden md:block h-[-webkit-fill-available]"
                    src="/assets/img/index/bgd-decor-2.png" alt="bgd">
                  <h2 class="text-sm text-white">
                    Стоимость <br class="hidden md:block">
                    <span class="font-bold md:text-xl">
                      от {{ item?.price }} $
                    </span>
                  </h2>
                  <p class="text-xs text-slate-50 opacity-60 text-center">
                    *включая налоги
                  </p>
                </div>
              </div>
            </div>
            <h2 class="text-3xl text-white mt-5 md:text-[65px] md:leading-[65px] md:mt-[40px] md:max-w-[900px]">
              <span class="font-bold">
                {{ item?.projects[0]?.item?.translations?.filter(item =>
                  item.languages_code.includes(langStore.lang))[0]?.title }}
              </span>
            </h2>
            <p class="text-white text-sm max-w-64 md:max-w-[416px] md:text-base mt-3 md:mt-12">
              {{ item?.projects[0]?.item?.translations?.filter(item =>
                item.languages_code.includes(langStore.lang))[0]?.description }}
            </p>
            <button @click="addModal" class="white-button mt-7 lg:mt-12">
                Скачать презентацию
              </button>

          </span>

          <div v-if="!item?.projects?.length" class="flex items-center justify-between">
            <div class="">
              <div
                class="bg-[url('./../img/index/slide-bgd-1.jpg')] brightness-[1] bg-center absolute top-0 left-0 w-full h-[100%] -z-10 opacity-50">
                <iframe v-if="item?.video" class="scale-125" width="100%" height="100%"
                  src="https://www.youtube.com/embed/zHcr32gRRCs?si=73xg2tsfV1tnZjwg&autoplay=1&mute=1&loop=1&playlist=zHcr32gRRCs"
                  title="YouTube video player" frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <div class="bg-gradient-to-t from-blue-500 from-10% w-full h-52 absolute -z-10 bottom-0 left-0">
              </div>
              <div class="bg-gradient-to-t from-blue-500 from-30% w-full h-52 absolute -z-10 top-0 left-0 rotate-180">
              </div>
              <div class="banner__item__head md:flex">
                <div class="flex">
                  <h1 class="text-white text-[45px] font-bold leading-1 md:text-[70px] mr-3">
                    {{ item?.translations?.filter(item =>
                      item.languages_code.includes(langStore.lang))[0]?.title }}
                  </h1>
                  <span
                    class="text-white bg-blue-400 h-6 text-center flex items-center px-2 rounded-md lg:rounded-[10px] text-xs lg:text-base md:h-8 md:px-3">
                    БАЛИ
                  </span>
                </div>
                <div class="con md:ml-4 md:pl-5 md:px-7 relative">
                  <div class="absolute h-12 left-0 top-1/2 -translate-y-1/2 w-[1px] bg-white/20"></div>
                  <div v-if="item?.price" class="relative px-5 py-3 w-fit md:text-center">
                    <img class="absolute top-0 left-0 -z-10 md:hidden h-full" src="/assets/img/index/bgd-decor.png"
                      alt="bgd">
                    <img class="absolute top-0 left-0 -z-10 hidden md:block h-full"
                      src="/assets/img/index/bgd-decor-2.png" alt="bgd">
                    <h2 class="text-sm text-white">
                      Стоимость <br class="hidden md:block">
                      <span class="font-bold md:text-xl">
                        от {{ item?.price }} $
                      </span>
                    </h2>
                    <p class="text-xs text-slate-50 opacity-60 text-center">
                      *включая налоги
                    </p>
                  </div>
                </div>
              </div>
              <h2
                v-html="item?.translations?.filter(item => item.languages_code.includes(langStore.lang))[0]?.description" class="text-3xl font-light text-white mt-5 md:text-[55px] lg:text-[65px] leading-[100%] md:leading-[55px] lg:leading-[65px] md:mt-12 md:max-w-[825px]">
                
              </h2>
              <button @click="addModal" class="white-button mt-7 lg:mt-12">
                Скачать презентацию
              </button>
            </div>

            <div class="hidden md:block">
              <img src="/assets/img/index/banner-logo.svg" alt="">
            </div>
          </div>
          <div v-if="item?.strings?.length" class="flex justify-between items-end lg:mt-28 xl:mt-36 mt-10">
            <div class="flex gap-5">
              <div v-if="item?.strings.some(item => item.String_id.id === 2)" class="pr-5 border-r border-whiteOp-300">
                <p class="font-bold text-white text-2xl mb-2 md:text-4xl md:mb-3">
                  {{ item?.strings.filter(item => item.String_id.id === 2)[0].String_id?.translations?.filter(item =>
                    item.languages_code.includes(langStore.lang))[0]?.title }}
                </p>
                <span class="text-white text-sm md:text-base">
                  {{ item?.strings.filter(item => item.String_id.id === 2)[0].String_id?.translations?.filter(item =>
                    item.languages_code.includes(langStore.lang))[0]?.description }}
                </span>
              </div>
              <div v-if="item?.strings.some(item => item.String_id.id === 3)">
                <p class="font-bold text-white text-2xl mb-2 md:text-4xl md:mb-3">
                  {{ item?.strings.filter(item => item.String_id.id === 3)[0].String_id?.translations?.filter(item =>
                    item.languages_code.includes(langStore.lang))[0]?.title }}
                </p>
                <span class="text-white text-sm md:text-base">
                  {{ item?.strings.filter(item => item.String_id.id === 3)[0].String_id?.translations?.filter(item =>
                    item.languages_code.includes(langStore.lang))[0]?.description }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>



    </swiper>

  </section>
</template>


<script setup>
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
const { getItems } = useDirectusItems();

const modalsStore = useModalsStore()
const langStore = useLangStore();
const itemsList = ref([]);

const fetchArticles = async () => {
  try {
    const items = await getItems({
      collection: "Slide",
      params: {
        fields: [
          '*',
          'translations.*',
          'strings.String_id.*.*',
          'projects.item.*',
          'projects.item.translations.*',
        ]
      },
    });
    itemsList.value = items;
    console.log('Slides', items);
  } catch (e) {
    console.error('Error fetching items:', e);
  }
};
onMounted(fetchArticles);

const addModal = () => {
  modalsStore.addModal('presentation')
}

const handlePlayVideo = () => {
  document.querySelector('.banner iframe').setAttribute('src', 'https://www.youtube.com/embed/zHcr32gRRCs?si=73xg2tsfV1tnZjwg&autoplay=1&mute=1&loop=1&playlist=zHcr32gRRCs')
}
</script>
