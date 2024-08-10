<template>
  <section class="bg-white pt-14">
    <div class="container">
      <div class="">
        <div class="flex justify-between items-center mb-8">
          <h2 class="text-blue-600 font-bold text-[30px] md:text-[45px] lg:text-[56px] leading-[110%]"
            data-aos="fade-up">
            {{ $t('articles') }}
          </h2>

          <div class="w-fit hidden md:flex" data-aos="fade-up">
            <NuxtLink href="/articles" class="mr-12 text-blue-600 font-bold underline hover:no-underline">
              {{ $t('all_articles') }}
            </NuxtLink>
            <button type="button" class="articles-button-prev  hover:opacity-100 transition-all mr-9">
              <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M4.95971 10.8841L13.5787 2.26518L12 0.686525L0.686291 12.0002L12 23.3139L13.5787 21.7353L4.96009 13.1167L21.6296 13.1167L21.6297 10.8841L4.95971 10.8841Z"
                  fill="#0A4A7F" />
              </svg>
            </button>
            <button type="button" class="articles-button-next  hover:opacity-100 transition-all">
              <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M17.0403 10.8841L8.42134 2.26518L10 0.686525L21.3137 12.0002L10 23.3139L8.42133 21.7353L17.0399 13.1167L0.370369 13.1167L0.370346 10.8841L17.0403 10.8841Z"
                  fill="#0A4A7F" />
              </svg>
            </button>
          </div>
        </div>

        <swiper class="articles-block" :modules="modules" :slides-per-view="1" :pagination="pagination" :navigation="navigationConfig"
          :breakpoints="breakpoints" :space-between="24" @slideChange="onSlideChange">

          <swiper-slide v-for="item in articlesData.data.value" :key="item?.id">
            <ArticlesItem bgdColor="white" :item="item" />
          </swiper-slide>

          <div class="swiper-pagination swiper-pagination_blue"></div>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore from 'swiper';
import fetchArticles from '~/server/api/articles';

const { getItems } = useDirectusItems();

const articlesData = await fetchArticles(getItems);

const modules = {
  Navigation,
  A11y,
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
    slidesPerView: 3,
    pagination: false,
  },
  1441: {
    slidesPerView: 4,
    pagination: false,
  },
};
</script>
