<template>
  <section class="bg-white pt-14 relative overflow-hidden">
    <div class="absolute -right-14 lg:-right-36 bottom-0 lg:bottom-40 w-28 lg:w-72 lg:h-72 z-10">
      <NuxtImg src="/img/icons/vector-logo.svg" class="invert w-full" alt="vector-logo" />
    </div>
    <div class="container relative z-10">
      <div class="">
        <div class="flex justify-between items-center mb-8">
          <h2 class="text-blue-600 font-bold text-[30px] md:text-[45px] lg:text-[56px] leading-[110%]"
            data-aos="fade-up">
            {{ $t('last_news') }}
          </h2>

          <div class="w-fit hidden md:flex" data-aos="fade-up">
            <NuxtLink href="/news" class="mr-12 text-blue-600 font-bold underline hover:no-underline">
              {{ $t('all_news') }}
            </NuxtLink>
            <button type="button" class=" transition-all  hover:opacity-100 news-button-prev mr-9">
              <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M4.95971 10.8841L13.5787 2.26518L12 0.686525L0.686291 12.0002L12 23.3139L13.5787 21.7353L4.96009 13.1167L21.6296 13.1167L21.6297 10.8841L4.95971 10.8841Z"
                  fill="#0A4A7F" />
              </svg>
            </button>
            <button type="button" class=" transition-all  hover:opacity-100 news-button-next">
              <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M17.0403 10.8841L8.42134 2.26518L10 0.686525L21.3137 12.0002L10 23.3139L8.42133 21.7353L17.0399 13.1167L0.370369 13.1167L0.370346 10.8841L17.0403 10.8841Z"
                  fill="#0A4A7F" />
              </svg>
            </button>
          </div>
        </div>

        <swiper :modules="modules" :slides-per-view="1" :pagination="pagination" :navigation="navigationConfig"
          :breakpoints="breakpoints" :space-between="24" @slideChange="onSlideChange" class="!p-3 swiper-news !-m-3">

          <swiper-slide v-for="item in newsData?.data?.value" :key="item.id">
            <NewsItem bgdColor="white" :item="item" />
          </swiper-slide>

          <div class="swiper-pagination swiper-pagination_blue"></div>

        </swiper>

        <NuxtLink href="/news" class="blue-border-button mx-auto mt-5 md:hidden">
          {{ $t('all_news') }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.swiper-pagination {
  position: static;
  margin-top: 15px;
}
.swiper {
  padding-bottom: 15px;
  margin-bottom: -15px;
}
</style>

<script setup>
import { Navigation, A11y, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { ref, onMounted } from 'vue';

const paginationRef = ref(null);

onMounted(() => {
  console.log('Pagination element:', paginationRef.value);
});

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const newsData = await useAsyncData("News", () => $fetch('/api/news'))

const modules = [Navigation, A11y, Pagination];


const navigationConfig = {
  nextEl: '.news-button-next',
  prevEl: '.news-button-prev',
};

const pagination = {
  el: '.swiper-pagination',
  clickable: true,
};

const breakpoints = {
  576: {
    slidesPerView: 2,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  },
  992: {
    slidesPerView: 3,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  },
  1441: {
    slidesPerView: 4,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  },
};



</script>
