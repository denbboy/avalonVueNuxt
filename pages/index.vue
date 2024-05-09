<template>
  <div class="swiper swiper-banner">
    <div class="swiper-wrapper">

      <div class="swiper-slide pb-10 pt-40 relative overflow-hidden">
        <div class="container">
          <div
              class="bg-[url('/assets/img/index/slide-bgd-1.jpg')] bg-center absolute top-0 left-0 w-full h-screen -z-10 opacity-50">
          </div>
          <div class="bg-gradient-to-t from-blue-500 from-30% w-full h-52 absolute -z-10 bottom-0 left-0"></div>
          <div class="bg-gradient-to-t from-blue-500 from-30% w-full h-52 absolute -z-10 top-0 left-0 rotate-180"></div>
          <div class="banner__item__head md:flex">
            <div class="flex">
              <h1 class="text-white text-[45px] md:text-[75px] mr-3">
                AVALON
              </h1>
              <span
                  class="text-white bg-blue-400 h-6 text-center flex items-center px-2  rounded-xl text-sm md:h-8 md:px-3">
                БАЛИ
              </span>
            </div>
            <div class="con md:ml-10 md:pl-5 md:border-l md:border-whiteOp-300 md:px-7">
              <div class="relative px-5 py-3 w-fit md:text-center">
                <img class="absolute top-0 left-0 -z-10 md:hidden" src="/assets/img/index/bgd-decor.png" alt="bgd">
                <img class="absolute top-0 left-0 -z-10 hidden md:block h-[-webkit-fill-available]"
                     src="/assets/img/index/bgd-decor-2.png" alt="bgd">
                <h2 class="text-sm text-white">
                  Стоимость <br class="hidden md:block"> <span class="font-bold md:text-xl">от $70.000</span>
                </h2>
                <p class="text-xs text-slate-50 opacity-60 text-center">
                  *включая налоги

                </p>
              </div>
            </div>
          </div>
          <h2 class="text-3xl text-white mt-5 md:text-6xl md:mt-12 md:max-w-[825px]">
            Современные апартаменты <br class="md:hidden">
            <span class="font-bold">
                                для жизни <br class="md:hidden"> и инвестиций
                            </span>
          </h2>
          <a @click="addModal"
             class="w-full max-w-56 md:max-w-72 px-5 py-4 block text-sm md:text-base bg-white rounded-xl text-center font-bold whitespace-nowrap text-blue-500 hover:text-white hover:bg-blue-400 my-10 transition-all md:mt-12 md:mb-28">
            Скачать презентацию
          </a>
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

    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script setup>
import {useModalsStore} from "./../../stores/modals.js";

const modalStore = useModalsStore()
const modalsStore = useModalsStore()

const addModal = () => {
  modalsStore.addModal("test");
}

</script>
