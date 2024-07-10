<template>
  <section class="pb-12">

    <!-- :modules="modules" -->
    <swiper class="swiper-banner" :slides-per-view="1" :pagination="{ clickable: true }"
      :autoplay="{ delay: 15000, disableOnInteraction: false }" :speed="1500">

      <swiper-slide class="pt-40 lg:pt-[250px] relative overflow-hidden">
        <div class="container">
          <div class="flex items-center justify-between">
            <div class="">
              <div
                class="bg-[url('./../img/index/slide-bgd-1.jpg')] brightness-[1] bg-center absolute top-0 left-0 w-full h-[100%] -z-10 opacity-50">
                <iframe class="scale-125" width="100%" height="100%"
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
                  <h1 class="text-white text-[45px] leading-1 md:text-[70px] mr-3">
                    AVALON
                  </h1>
                  <span
                    class="text-white bg-blue-400 h-6 text-center flex items-center px-2 rounded-md lg:rounded-[10px] text-xs lg:text-base md:h-8 md:px-3">
                    БАЛИ
                  </span>
                </div>
                <div class="con md:ml-4 md:pl-5 md:px-7 relative">
                  <div class="absolute h-12 left-0 top-1/2 -translate-y-1/2 w-[1px] bg-white/20"></div>
                  <div class="relative px-5 py-3 w-fit md:text-center">
                    <img class="absolute top-0 left-0 -z-10 md:hidden h-full" src="/assets/img/index/bgd-decor.png"
                      alt="bgd">
                    <img class="absolute top-0 left-0 -z-10 hidden md:block h-full"
                      src="/assets/img/index/bgd-decor-2.png" alt="bgd">
                    <h2 class="text-sm text-white">
                      Стоимость <br class="hidden md:block"> <span class="whitespace-nowrap font-bold md:text-xl">от
                        $70.000</span>
                    </h2>
                    <p class="text-xs text-slate-50 opacity-60 text-center">
                      *включая налоги

                    </p>
                  </div>
                </div>
              </div>
              <h2 class="text-3xl font-light text-white mt-5 md:text-[55px] lg:text-[65px] leading-[100%] md:leading-[55px] lg:leading-[65px] md:mt-12 md:max-w-[825px]">
                Современные апартаменты <br class="md:hidden">
                <span class="font-bold">
                  для <br class="hidden md:block"> жизни <br class="md:hidden"> и инвестиций
                </span>
              </h2>
              <button @click="addModal" class="white-button mt-7 lg:mt-12">
                Скачать презентацию
              </button>
            </div>

            <div class="hidden md:block">
              <img src="/assets/img/index/banner-logo.svg" alt="">
            </div>
          </div>
          <div class="flex justify-between items-end lg:mt-28 xl:mt-36 mt-10">
            <div class="flex gap-5">
              <div class="pr-5 border-r border-whiteOp-300">
                <p class="font-bold text-white text-2xl mb-2 md:text-4xl md:mb-3">
                  5 лет
                </p>
                <span class="text-white text-sm md:text-base">
                  Возврат <br class="md:hidden">инвестиций
                </span>
              </div>
              <div>
                <p class="font-bold text-white text-2xl mb-2 md:text-4xl md:mb-3">
                  15%
                </p>
                <span class="text-white text-sm md:text-base">
                  Средняя <br class="md:hidden">доходность
                </span>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="pt-40 lg:pt-[250px] relative overflow-hidden">
        <div
          class="bg-[url('./../img/index/slide-bgd-2.jpg')] bg-center absolute top-0 left-0 w-full h-[100%] -z-10 opacity-50">
        </div>
        <div class="bg-gradient-to-t from-blue-500 from-30% w-full h-52 absolute -z-10 bottom-0 left-0"></div>
        <div class="bg-gradient-to-t from-blue-500 from-30% w-full h-52 absolute -z-10 top-0 left-0 rotate-180">
        </div>

        <div class="container">
          <div class="banner__item__head md:flex items-center">
            <img src="/assets/img/index/Budha-logo.svg" class="mb-7 md:mb-0" alt="logo">
            <div class="con md:ml-10 ">
              <div class="relative px-5 py-3 w-fit md:text-center md:px-7">
                <img class="absolute top-0 left-0 -z-10 md:hidden" src="/assets/img/index/bgd-decor.png" alt="bgd">
                <img class="absolute top-0 left-0 -z-10 hidden md:block h-[-webkit-fill-available]"
                  src="/assets/img/index/bgd-decor-2.png" alt="bgd">
                <h2 class="text-sm text-white">
                  Стоимость <br class="hidden md:block"> <span class="font-bold md:text-xl">от
                    $70.000</span>
                </h2>
                <p class="text-xs text-slate-50 opacity-60 text-center">
                  *включая налоги

                </p>
              </div>
            </div>
          </div>
          <h2 class="text-3xl text-white mt-5 md:text-[65px] md:leading-[65px] md:mt-[40px] md:max-w-[900px]">
            <span class="font-bold">
              BUDDHA | Club House
            </span>
          </h2>
          <p class="text-white text-sm max-w-64 md:max-w-[416px] md:text-base mt-3 md:mt-12">
            Апарт отель для инвестиций в сердце Чангу, район Берава. Топовая локация в 700 метрах от пляжа.
            Идеально для инвестиций. 
          </p>
          <a href="#"
            class="w-full max-w-56 md:max-w-72 px-5 py-4 block text-sm md:text-base bg-white rounded-xl text-center font-bold whitespace-nowrap text-blue-500 hover:text-white hover:bg-blue-400 my-10 transition-all md:mt-12">
            Скачать презентацию
          </a>
        </div>
      </swiper-slide>

    </swiper>

  </section>
</template>

<script setup>
const modalsStore = useModalsStore()

const addModal = () => {
  modalsStore.addModal('presentation')
}

const handlePlayVideo = () => {
  document.querySelector('.banner iframe').setAttribute('src', 'https://www.youtube.com/embed/zHcr32gRRCs?si=73xg2tsfV1tnZjwg&autoplay=1&mute=1&loop=1&playlist=zHcr32gRRCs')
}
</script>

<script>
// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';

import SwiperCore from 'swiper';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const modules = {
      navigation: true,
      pagination: true,
      a11y: true,
    };
    return {
      // modules,
    };
  },
};
</script>
