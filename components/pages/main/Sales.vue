<template>
  <section class="bg-white pt-14 relative overflow-hidden">
    <div class="absolute -left-14 lg:-left-36 bottom-0 lg:bottom-0 w-28 lg:w-72 lg:h-72 z-10">
        <img src="/assets/img/icons/vector-logo.svg" class="invert" alt="vector-logo">
    </div>
    <div class="container relative z-10">
      <div>
        <div class="flex justify-between items-center mb-8">
          <h2 class="text-blue-600 font-bold text-[30px] md:text-[45px] lg:text-[56px] leading-[110%]" data-aos="fade-up">
            Актуальные акции
          </h2>

          <div class="w-fit hidden md:flex" data-aos="fade-up">
            <NuxtLink href="/sales" class="mr-12 text-blue-600 font-bold underline hover:no-underline">
              Все акции
            </NuxtLink>
            <button type="button" class=" transition-all opacity-20 hover:opacity-100 sales-button-prev mr-9">
              <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M4.95971 10.8841L13.5787 2.26518L12 0.686525L0.686291 12.0002L12 23.3139L13.5787 21.7353L4.96009 13.1167L21.6296 13.1167L21.6297 10.8841L4.95971 10.8841Z"
                  fill="#0A4A7F" />
              </svg>
            </button>
            <button type="button" class="transition-all opacity-20 hover:opacity-100 swiper-arrow sales-button-next">
              <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M17.0403 10.8841L8.42134 2.26518L10 0.686525L21.3137 12.0002L10 23.3139L8.42133 21.7353L17.0399 13.1167L0.370369 13.1167L0.370346 10.8841L17.0403 10.8841Z"
                  fill="#0A4A7F" />
              </svg>
            </button>
          </div>
        </div>

        <swiper :modules="modules" :slides-per-view="1" :pagination="pagination" :navigation="navigationConfig"
          :breakpoints="breakpoints" :space-between="24" @swiper="onSwiper" @slideChange="onSlideChange">

          <swiper-slide>
            <SalesItem bgdColor="white" />
          </swiper-slide>
          <swiper-slide>
            <SalesItem bgdColor="white" />
          </swiper-slide>
          <swiper-slide>
            <SalesItem bgdColor="white" />
          </swiper-slide>
          <swiper-slide>
            <SalesItem bgdColor="white" />
          </swiper-slide>

                  <div class="swiper-pagination swiper-pagination_blue"></div>


        </swiper>

        <button type="button" class="blue-border-button mx-auto mt-5 lg:hidden">
          Все акции
        </button>

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
      nextEl: '.sales-button-next',
      prevEl: '.sales-button-prev',
    };
    const pagination = {
      el: '.swiper-pagination',
      clickable: true,
    };
    const breakpoints = {
      768: {
        slidesPerView: 2,
        pagination: false,
      },
      1280: {
        slidesPerView: 3
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
