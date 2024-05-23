<template>
  <section class="bg-white pt-14">
    <div class="container">
      <div class="">
        <div class="flex justify-between items-center mb-8">
          <h2 class="text-blue-600 font-bold text-[30px] lg:text-[56px] leading-[110%]">
            Статьи
          </h2>

          <div class="w-fit hidden md:flex">
            <a href="articles.html" class="mr-12 text-blue-600 font-bold underline hover:no-underline">
              Все статьи
            </a>
            <button type="button" class="articles-button-prev opacity-20 hover:opacity-100 transition-all mr-9">
              <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M4.95971 10.8841L13.5787 2.26518L12 0.686525L0.686291 12.0002L12 23.3139L13.5787 21.7353L4.96009 13.1167L21.6296 13.1167L21.6297 10.8841L4.95971 10.8841Z"
                  fill="#0A4A7F" />
              </svg>
            </button>
            <button type="button" class="articles-button-next opacity-20 hover:opacity-100 transition-all">
              <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M17.0403 10.8841L8.42134 2.26518L10 0.686525L21.3137 12.0002L10 23.3139L8.42133 21.7353L17.0399 13.1167L0.370369 13.1167L0.370346 10.8841L17.0403 10.8841Z"
                  fill="#0A4A7F" />
              </svg>
            </button>
          </div>
        </div>

        <swiper :modules="modules" :slides-per-view="1" :pagination="pagination" :navigation="navigationConfig"
          :breakpoints="breakpoints" :space-between="50" @swiper="onSwiper" @slideChange="onSlideChange">
          <swiper-slide>
            <a href="newsSingle.html" class="w-full h-full block group lg:max-w-[375px]">
              <div class="relative mb-5 w-full">
                <div class="block-bottom-point border-white bg-white after:bg-blue-500"></div>
                <img class="rounded-[20px] w-full h-full object-cover" src="/assets/img/news/cardImage.jpg" alt="">
              </div>

              <p class="text-base md:text-lg group-hover:text-blue-400 text-blue-600 font-bold">
                СТАРТ ПРОДАЖ клубного дома <br>на 7 видовых квартир
              </p>
              <span class="mt-3 md:mt-4 flex items-center text-blue-600 text-sm opacity-60">
                Our properties are situated in various areas across the island of Bali, offering a range
                of locations to suit every preference
              </span>
            </a>
          </swiper-slide>
          <swiper-slide>
            <a href="newsSingle.html" class="w-full h-full block group lg:max-w-[375px]">
              <div class="relative mb-5 w-full">
                <div class="block-bottom-point border-white bg-white after:bg-blue-500"></div>
                <img class="rounded-[20px] w-full h-full object-cover" src="/assets/img/news/cardImage.jpg" alt="">
              </div>

              <p class="text-base md:text-lg group-hover:text-blue-400 text-blue-600 font-bold">
                СТАРТ ПРОДАЖ клубного дома <br>на 7 видовых квартир
              </p>
              <span class="mt-3 md:mt-4 flex items-center text-blue-600 text-sm opacity-60">
                Our properties are situated in various areas across the island of Bali, offering a range
                of locations to suit every preference
              </span>
            </a>
          </swiper-slide>
          <swiper-slide>
            <a href="newsSingle.html" class="w-full h-full block group lg:max-w-[375px]">
              <div class="relative mb-5 w-full">
                <div class="block-bottom-point border-white bg-white after:bg-blue-500"></div>
                <img class="rounded-[20px] w-full h-full object-cover" src="/assets/img/news/cardImage.jpg" alt="">
              </div>

              <p class="text-base md:text-lg group-hover:text-blue-400 text-blue-600 font-bold">
                СТАРТ ПРОДАЖ клубного дома <br>на 7 видовых квартир
              </p>
              <span class="mt-3 md:mt-4 flex items-center text-blue-600 text-sm opacity-60">
                Our properties are situated in various areas across the island of Bali, offering a range
                of locations to suit every preference
              </span>
            </a>
          </swiper-slide>
          <swiper-slide>
            <a href="newsSingle.html" class="w-full h-full block group lg:max-w-[375px]">
              <div class="relative mb-5 w-full">
                <div class="block-bottom-point border-white bg-white after:bg-blue-500"></div>
                <img class="rounded-[20px] w-full h-full object-cover" src="/assets/img/news/cardImage.jpg" alt="">
              </div>

              <p class="text-base md:text-lg group-hover:text-blue-400 text-blue-600 font-bold">
                СТАРТ ПРОДАЖ клубного дома <br>на 7 видовых квартир
              </p>
              <span class="mt-3 md:mt-4 flex items-center text-blue-600 text-sm opacity-60">
                Our properties are situated in various areas across the island of Bali, offering a range
                of locations to suit every preference
              </span>
            </a>
          </swiper-slide>
          <swiper-slide>
            <a href="newsSingle.html" class="w-full h-full block group lg:max-w-[375px]">
              <div class="relative mb-5 w-full">
                <div class="block-bottom-point border-white bg-white after:bg-blue-500"></div>
                <img class="rounded-[20px] w-full h-full object-cover" src="/assets/img/news/cardImage.jpg" alt="">
              </div>

              <p class="text-base md:text-lg group-hover:text-blue-400 text-blue-600 font-bold">
                СТАРТ ПРОДАЖ клубного дома <br>на 7 видовых квартир
              </p>
              <span class="mt-3 md:mt-4 flex items-center text-blue-600 text-sm opacity-60">
                Our properties are situated in various areas across the island of Bali, offering a range
                of locations to suit every preference
              </span>
            </a>
          </swiper-slide>
          <div class="swiper-pagination"></div>
        </swiper>
      </div>
    </div>
  </section>
</template>


<script>
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

SwiperCore.use([Navigation, A11y]);

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
    const navigationConfig = {
      nextEl: '.articles-button-next',
      prevEl: '.articles-button-prev',
    };
    const pagination = {
      el: '.swiper-pagination',
      clickable: true,
    };
    const breakpoints = {
      768: {
        slidesPerView: 3
      },
      1024: {
        slidesPerView: 4
      },
    }

    return {
      modules,
      navigationConfig,
      breakpoints,
      pagination
    };
  },
};
</script>
