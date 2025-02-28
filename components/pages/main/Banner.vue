<template>
  <section class="lg:pb-12 pb-0 min-h-[200px]">

    <div class="absolute -left-36 bottom-0 w-72 h-72 z-10 hidden md:block">
      <NuxtImg loading="lazy" src="/img/icons/vector-logo.svg" class="w-full" alt="vector-logo" />
    </div>

    <!-- :modules="modules" -->
    <swiper ref="swiperRef" class="swiper-banner" :autoplay="{ delay: 15000, disableOnInteraction: false }" :loop="true"
      :slides-per-view="1" :pagination="{ clickable: true }" :modules="[Pagination, A11y, Autoplay]" pagination a11y
      :speed="1500">


      <swiper-slide v-for="item in slides" class="pt-24 lg:pt-[180px] lg:min-h-[810px] relative overflow-hidden">
        <VideoPlayer :item="item" :handleVideoPlay="handleVideoPlay" :handleVideoPause="handleVideoPause" />
      </swiper-slide>


    </swiper>

  </section>
</template>

<style>
strong {
  font-weight: 500 !important;
}
</style>

<script setup>
import { Pagination, A11y, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import useFetchWithCache from '~/hooks/useFetchWithCache'

const slides = await useFetchWithCache('/api/slides');

const swiperRef = ref(null);

onMounted(() => {
  swiperRef.value = document.querySelector(".swiper-banner")?.swiper;
});

const handleVideoPlay = () => {
  if (swiperRef.value) {
    swiperRef.value.autoplay.stop();
  }
};

const handleVideoPause = () => {
  if (swiperRef.value) {
    swiperRef.value.autoplay.start();
  }
};

</script>
