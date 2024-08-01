<template>
  <section class="pt-14 pb-12 lg:pb-24">
    <div class="container">
      <div class="">
        <div class="flex justify-between items-center mb-8">
          <h2 class="text-white font-bold text-[30px] md:text-[45px] lg:text-[56px]" data-aos="fade-up">
            {{ $t('our_team') }}
          </h2>

          <div class="w-fit hidden md:flex">
            <button type="button" class="opacity-20 hover:opacity-100 transition-all button-prev mr-9">
              <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M4.95971 10.8841L13.5787 2.26518L12 0.686525L0.686291 12.0002L12 23.3139L13.5787 21.7353L4.96009 13.1167L21.6296 13.1167L21.6297 10.8841L4.95971 10.8841Z"
                  fill="white" />
              </svg>
            </button>
            <button type="button" class="opacity-20 hover:opacity-100 transition-all button-next">
              <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M17.0403 10.8841L8.42134 2.26518L10 0.686525L21.3137 12.0002L10 23.3139L8.42133 21.7353L17.0399 13.1167L0.370369 13.1167L0.370346 10.8841L17.0403 10.8841Z"
                  fill="white" />
              </svg>
            </button>
          </div>
        </div>

        <swiper class="swiper team team-block" :modules="modules" :breakpoints="breakpoints" :navigation="navigationConfig"
          :space-between="20" :slides-per-view="2" @swiper="onSwiper" @slideChange="onSlideChange">
          <swiper-slide>
            <div
              class="after:bg-blue-600/40 relative after:absolute brightness-125 after:top-0 after:left-0 after:w-full after:h-full after:rounded-full">
              <img src="/assets/img/index/user-1.png" class="w-full h-full grayscale" alt="ph">
            </div>
            <div class="text-center mt-4">
              <h3 class="font-bold text-white text-base mb-2 md:text-lg leading-[140%]">
                {{ $t('team_1_name') }}
              </h3>
              <p class="text-whiteOp-300 text-sm md:text-base leading-[100%]">
                {{ $t('team_position_1') }}
              </p>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div
              class="after:bg-blue-600/40 relative after:absolute brightness-125 after:top-0 after:left-0 after:w-full after:h-full after:rounded-full">
              <img src="/assets/img/index/user-2.png" class="w-full h-full grayscale" alt="ph">
            </div>
            <div class="text-center mt-4">
              <h3 class="font-bold text-white text-base mb-2 md:text-lg leading-[140%]">
                {{ $t('team_2_name') }}
              </h3>
              <p class="text-whiteOp-300 text-sm md:text-base leading-[100%]">
                {{ $t('team_position_1') }}
              </p>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div
              class="after:bg-blue-600/40 relative after:absolute brightness-125 after:top-0 after:left-0 after:w-full after:h-full after:rounded-full">
              <img src="/assets/img/index/user-3.png" class="w-full h-full grayscale" alt="ph">
            </div>
            <div class="text-center mt-4">
              <h3 class="font-bold text-white text-base mb-2 md:text-lg leading-[140%]">
                {{ $t('team_3_name') }}
              </h3>
              <p class="text-whiteOp-300 text-sm md:text-base leading-[100%]">
                {{ $t('team_position_1') }}
              </p>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div
              class="after:bg-blue-600/40 relative after:absolute brightness-125 after:top-0 after:left-0 after:w-full after:h-full after:rounded-full">
              <img src="/assets/img/index/user-4.png" class="w-full h-full grayscale" alt="ph">
            </div>
            <div class="text-center mt-4">
              <h3 class="font-bold text-white text-base mb-2 md:text-lg leading-[140%]">
                {{ $t('team_4_name') }}
              </h3>
              <p class="text-whiteOp-300 text-sm md:text-base leading-[100%]">
                {{ $t('team_position_2') }}
              </p>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div
              class="after:bg-blue-600/40 relative after:absolute brightness-125 after:top-0 after:left-0 after:w-full after:h-full after:rounded-full">
              <img src="/assets/img/index/user-5.png" class="w-full h-full grayscale" alt="ph">
            </div>
            <div class="text-center mt-4">
              <h3 class="font-bold text-white text-base mb-2 md:text-lg leading-[140%]">                
                {{ $t('team_5_name') }}
              </h3>
              <p class="text-whiteOp-300 text-sm md:text-base leading-[100%]">
                {{ $t('team_position_3') }}
              </p>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div
              class="after:bg-blue-600/40 relative after:absolute brightness-125 after:top-0 after:left-0 after:w-full after:h-full after:rounded-full">
              <img src="/assets/img/index/user-6.png" class="w-full h-full grayscale" alt="ph">
            </div>
            <div class="text-center mt-4">
              <h3 class="font-bold text-white text-base mb-2 md:text-lg leading-[140%]">
                {{ $t('team_6_name') }}
              </h3>
              <p class="text-whiteOp-300 text-sm md:text-base leading-[100%]">
                {{ $t('team_position_4') }}
              </p>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div
              class="after:bg-blue-600/40 relative after:absolute brightness-125 after:top-0 after:left-0 after:w-full after:h-full after:rounded-full">
              <img src="/assets/img/index/user-1.png" class="w-full h-full grayscale" alt="ph">
            </div>
            <div class="text-center mt-4">
              <h3 class="font-bold text-white text-base mb-2 md:text-lg leading-[140%]">
                {{ $t('team_1_name') }}
              </h3>
              <p class="text-whiteOp-300 text-sm md:text-base leading-[100%]">
                {{ $t('team_position_1') }}
              </p>
            </div>
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
      a11y: true,
    };
    const navigationConfig = {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    };
    const breakpoints = {
      1024: {
        slidesPerView: 4
      },
      1441: {
        slidesPerView: 6
      }
    };

    return {
      modules,
      navigationConfig,
      breakpoints
    };
  },
};
</script>
