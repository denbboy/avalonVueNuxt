<template>
  <section class="pb-12">

    <swiper class="swiper-banner" :modules="modules" :slides-per-view="1" :pagination="{ clickable: true }"
      @swiper="onSwiper" @slideChange="onSlideChange">

      <swiper-slide class="pt-40 lg:pt-[250px] relative overflow-hidden">
        <div class="container">
          <div class="flex items-center justify-between">
            <div class="">
              <div
                class="bg-[url('./../img/index/slide-bgd-1.jpg')] brightness-[0.4] bg-center absolute top-0 left-0 w-full h-[100%] -z-10 opacity-50">
              </div>
              <div class="bg-gradient-to-t from-blue-500 from-10% w-full h-52 absolute -z-10 bottom-0 left-0">
              </div>
              <div class="bg-gradient-to-t from-blue-500 from-30% w-full h-52 absolute -z-10 top-0 left-0 rotate-180">
              </div>
              <div class="banner__item__head md:flex">
                <div class="flex">
                  <h1 class="text-white text-[45px] md:text-[70px] mr-3">
                    AVALON
                  </h1>
                  <span
                    class="text-white bg-blue-400 h-6 text-center flex items-center px-2 rounded-md text-xs md:h-8 md:px-3">
                    БАЛИ
                  </span>
                </div>
                <div class="con md:ml-10 md:pl-5 md:border-l md:border-whiteOp-300 md:px-7">
                  <div class="relative px-5 py-3 w-fit md:text-center">
                    <img class="absolute top-0 left-0 -z-10 md:hidden h-full" src="/assets/img/index/bgd-decor.png" alt="bgd">
                    <img class="absolute top-0 left-0 -z-10 hidden md:block h-full" src="/assets/img/index/bgd-decor-2.png"
                      alt="bgd">
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
              <h2 class="text-3xl text-white mt-5 md:text-[65px] leading-[100%] md:mt-12 md:max-w-[825px]">
                Современные апартаменты <br class="md:hidden">
                <span class="font-bold">
                  для жизни <br class="md:hidden"> и инвестиций
                </span>
              </h2>
              <button @click="addModal" class="white-button mt-7 lg:mt-12">
                Скачать презентацию
              </button>
            </div>

            <div class="hidden md:block mr-52">
              <img src="/assets/img/index/banner-logo.svg" alt="">
            </div>
          </div>
          <div class="flex justify-between items-end lg:mt-28 mt-10">
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
            <button type="button"
              class="hidden lg:flex items-center gap-2 py-5 px-10px w-full bg-blue-400 rounded-xl max-w-[260px] text-white text-sm font-bold justify-center transition-all hover:bg-blue-600 ">
              <img src="/assets/img/index/head-whatss.svg" class="max-w-[15px]" alt="ic">
              Cвязаться в WhatsApp
            </button>
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
          <h2 class="text-3xl text-white mt-5 md:text-6xl md:mt-12 md:max-w-[825px]">
            <span class="font-bold">
              BUDDHA | Club House
            </span>
          </h2>
          <p class="text-white text-sm max-w-64 md:max-w-[416px] md:text-base mt-3 md:mt-12">
            Апарт отель для инвестиций в сердце Чангу, район Берава. Топовая локация в 700 метрах от пляжа.
            Идеально для инвестиций. 
          </p>
          <a href="#"
            class="w-full max-w-56 md:max-w-72 px-5 py-4 block text-sm md:text-base bg-white rounded-xl text-center font-bold whitespace-nowrap text-blue-500 hover:text-white hover:bg-blue-400 my-10 transition-all md:mt-12 md:mb-52">
            Скачать презентацию
          </a>
        </div>
      </swiper-slide>
      <swiper-slide class="pt-40 lg:pt-[250px] relative overflow-hidden">
        <div class="container">
          <div class="flex items-center justify-between">
            <div class="">
              <div
                class="bg-[url('./../img/index/slide-bgd-1.jpg')] brightness-[0.4] bg-center absolute top-0 left-0 w-full h-[100%] -z-10 opacity-50">
              </div>
              <div class="bg-gradient-to-t from-blue-500 from-10% w-full h-52 absolute -z-10 bottom-0 left-0">
              </div>
              <div class="bg-gradient-to-t from-blue-500 from-30% w-full h-52 absolute -z-10 top-0 left-0 rotate-180">
              </div>
              <div class="banner__item__head md:flex">
                <div class="flex">
                  <h1 class="text-white text-[45px] md:text-[70px] mr-3">
                    AVALON
                  </h1>
                  <span
                    class="text-white bg-blue-400 h-6 text-center flex items-center px-2 rounded-md text-xs md:h-8 md:px-3">
                    БАЛИ
                  </span>
                </div>
                <div class="con md:ml-10 md:pl-5 md:border-l md:border-whiteOp-300 md:px-7">
                  <div class="relative px-5 py-3 w-fit md:text-center">
                    <img class="absolute top-0 left-0 -z-10 md:hidden h-full" src="/assets/img/index/bgd-decor.png" alt="bgd">
                    <img class="absolute top-0 left-0 -z-10 hidden md:block h-full" src="/assets/img/index/bgd-decor-2.png"
                      alt="bgd">
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
              <h2 class="text-3xl text-white mt-5 md:text-[65px] leading-[100%] md:mt-12 md:max-w-[825px]">
                Современные апартаменты <br class="md:hidden">
                <span class="font-bold">
                  для жизни <br class="md:hidden"> и инвестиций
                </span>
              </h2>
              <a href="#" class="white-button mt-7 lg:mt-12">
                Скачать презентацию
              </a>
            </div>

            <div class="hidden md:block mr-52">
              <img src="/assets/img/index/banner-logo.svg" alt="">
            </div>
          </div>
          <div class="flex justify-between items-end lg:mt-28 mt-10">
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
            <button type="button"
              class="hidden lg:flex items-center gap-2 py-5 px-10px w-full bg-blue-400 rounded-xl max-w-[260px] text-white text-sm font-bold justify-center transition-all hover:bg-blue-600 ">
              <img src="/assets/img/index/head-whatss.svg" class="max-w-[15px]" alt="ic">
              Cвязаться в WhatsApp
            </button>
          </div>
        </div>
      </swiper-slide>

    </swiper>

  </section>
</template>

<script setup>
const modalsStore = useModalsStore()

const addModal = () => {
  modalsStore.addModal('test')
}
</script>

<script>
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

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
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
};
</script>
