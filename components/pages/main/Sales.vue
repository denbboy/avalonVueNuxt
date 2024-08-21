<template>
  <section class="bg-white pt-14 relative overflow-hidden">
    <div class="absolute -left-14 lg:-left-36 bottom-0 lg:bottom-1 w-28 lg:w-72 lg:h-72 z-10">
      <NuxtImg loading="lazy" src="/img/icons/vector-logo.svg" class="invert w-full" alt="vector-logo" />
    </div>
    <div class="container relative z-10">
      <div>
        <div class="flex justify-between items-center mb-8">
          <h2 class="text-blue-600 font-bold text-[30px] md:text-[45px] lg:text-[56px] leading-[110%]"
            data-aos="fade-up">
            {{ $t('actual_sales') }}
          </h2>

          <div class="w-fit hidden md:flex" data-aos="fade-up">
            <NuxtLink href="/sales" class="mr-12 text-blue-600 font-bold underline hover:no-underline">
              {{ $t('all_sales') }}
            </NuxtLink>
            <button type="button" class=" transition-all hover:opacity-100 sales-button-prev mr-9">
              <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M4.95971 10.8841L13.5787 2.26518L12 0.686525L0.686291 12.0002L12 23.3139L13.5787 21.7353L4.96009 13.1167L21.6296 13.1167L21.6297 10.8841L4.95971 10.8841Z"
                  fill="#0A4A7F" />
              </svg>
            </button>
            <button type="button" class="transition-all hover:opacity-100 swiper-arrow sales-button-next">
              <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M17.0403 10.8841L8.42134 2.26518L10 0.686525L21.3137 12.0002L10 23.3139L8.42133 21.7353L17.0399 13.1167L0.370369 13.1167L0.370346 10.8841L17.0403 10.8841Z"
                  fill="#0A4A7F" />
              </svg>
            </button>
          </div>
        </div>

        <swiper class="swiper-sales" modules="modules" :slides-per-view="1" :pagination="pagination"
          :navigation="navigationConfig" :breakpoints="breakpoints" :space-between="24" @slideChange="onSlideChange">

          <swiper-slide v-for="item in salesData?.data?.value" :key="item.id">
            <SalesItem bgdColor="white" :item="item" />
          </swiper-slide>

          <div class="swiper-pagination swiper-pagination_blue"></div>


        </swiper>

        <NuxtLink href="/sales" class="blue-border-button mx-auto mt-5 md:hidden">
          {{ $t('all_sales') }}
        </NuxtLink>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

SwiperCore.use([Navigation, A11y]);

const salesData = await useAsyncData('Sales', () => $fetch('/api/sales'));

const props = defineProps(['list'])
watch(props, async (newValue) => {
  // itemsList.value = newValue.list;
})

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
    slidesPerView: 3,
    pagination: false,
  },
};
</script>
