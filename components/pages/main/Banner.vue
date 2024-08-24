<template>
  <section class="lg:pb-12 pb-0 min-h-[900px]">

    <!-- :modules="modules" -->
    <swiper class="swiper-banner" :autoplay="{ delay: 15000, disableOnInteraction: false }" :loop="true"
      :slides-per-view="1" :pagination="{ clickable: true }" :modules="[Pagination, A11y, Autoplay]" pagination a11y
      :speed="1500">


      <swiper-slide v-for="item in slides" class="pt-40 lg:pt-[250px] lg:min-h-[810px] relative overflow-hidden">
        <div class="bg-center absolute top-0 left-0 w-full h-[100%] -z-10 opacity-50">

          <div v-if="!item?.video">
            <NuxtImg v-if="$viewport.isLessThan('tablet')"
              :src="`https://avalon-panel.sonisapps.com/assets/${item?.img}?width=320&height=600`"
              class="absolute brightness-[.5] top-0 left-0 w-full h-full" alt="" />
            <NuxtImg v-else :src="`https://avalon-panel.sonisapps.com/assets/${item?.img}?width=1920&height=900`"
              class="absolute brightness-[.5] top-0 left-0 w-full h-full" alt="" />
          </div>


          <!-- <iframe v-if="item?.video" loading="lazy" class="lg:scale-150 scale-[3] pointer-events-none w-full h-full"
            :src="`${item?.video}&autoplay=1&mute=1&loop=1`" title="Avalon" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; loop; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> -->
        </div>
        <div class="bg-gradient-to-t from-blue-500 from-30% w-full h-52 absolute -z-10 bottom-0 left-0"></div>
        <div class="bg-gradient-to-t from-blue-500 from-30% w-full h-52 absolute -z-10 top-0 left-0 rotate-180">
        </div>


        <div class="container">
          <span v-if="item?.projects?.length">

            <div class="banner__item__head md:flex items-center">
              <NuxtImg v-if="item?.projects[0]?.item.logo" width="100" height="100"
                :src="`https://avalon-panel.sonisapps.com/assets/${item?.projects[0]?.item.logo}`"
                class="mb-7 max-w-[100px] md:mb-0 md:mr-10" alt="logo" />
              <div class="flex items-center w-full gap-5">
                <div
                  class="relative flex flex-col items-center justify-center w-full md:max-w-[186px] max-w-[141px] md:py-5 py-[15px]">
                  <NuxtImg
                    class="absolute top-0 left-0 -z-10 md:min-h-[86px] min-h-[60px] md:max-w-[186px] max-w-[141px]"
                    src="/img/icons/about-border-white.svg" alt="bgd" loading="lazy" />
                  <span class="text-white text-xs md:text-sm">
                    {{ $t('deadline') }}
                  </span>
                  <p class="text-white text-base font-bold md:text-xl">
                    {{ $t('summer2025') }}
                  </p>
                </div>
                <div class="relative px-5 py-3 w-fit md:text-center md:px-7">
                  <NuxtImg v-if="$viewport.isLessThan('tablet')"
                    class="absolute top-0 w-full left-0 -z-10 md:hidden h-full" src="/img/index/bgd-decor.png"
                    alt="bgd" />
                  <NuxtImg v-else class="absolute top-0 left-0 w-full -z-10 hidden md:block h-full"
                    src="/img/index/bgd-decor-2.png" alt="bgd" />

                  <h2 class="text-sm text-white">
                    {{ $t('cost') }} <br class="hidden md:block">
                    <span class="font-bold md:text-xl">
                      {{ $t('from') }} {{ String(item?.price)?.replace(/\B(?=(\d{3})+(?!\d))/g, " ") }} $
                    </span>
                  </h2>
                  <p class="text-xs text-slate-50 opacity-60 text-center">
                    {{ $t('including_taxes') }}
                  </p>
                </div>
              </div>
            </div>
            <h2 class="text-3xl text-white mt-5 md:text-[65px] md:leading-[65px] md:mt-[40px] md:max-w-[900px]">
              <span class="font-bold">
                {{ item?.projects[0]?.item?.translations?.filter(item =>
                  item.languages_code.includes(langStore.lang))[0]?.title }}
              </span>
            </h2>
            <p class="text-white text-sm max-w-64 md:max-w-[416px] md:text-base mt-3 md:mt-12">
              {{ item?.projects[0]?.item?.translations?.filter(item =>
                item.languages_code.includes(langStore.lang))[0]?.description }}
            </p>
            <div class="md:flex">
              <NuxtLink :to="`/projects/${item?.projects[0]?.item?.id}`"
                class="white-button md:mt-7 mt-3 lg:mt-12 md:ml-5">
                {{ $t('more') }}
              </NuxtLink>
            </div>

          </span>

          <div v-if="!item?.projects?.length" class="flex items-center justify-between">
            <div class="">
              <div class="banner__item__head md:flex">
                <div class="flex">
                  <h1 class="text-white text-[45px] font-bold leading-1 md:text-[70px] mr-3">
                    {{ item?.translations?.filter(item =>
                      item.languages_code.includes(langStore.lang))[0]?.title }}
                  </h1>
                  <span
                    class="text-white uppercase bg-blue-400 h-6 text-center flex items-center px-2 rounded-md lg:rounded-[10px] text-xs lg:text-base md:h-8 md:px-3">
                    {{ $t('bali') }}
                  </span>
                </div>
                <div class="con md:ml-4 md:pl-5 md:px-7 relative">
                  <div class="absolute h-12 left-0 top-1/2 -translate-y-1/2 w-[1px] bg-white/20"></div>
                  <div v-if="item?.price" class="relative px-5 py-3 w-fit md:text-center">
                    <NuxtImg v-if="$viewport.isLessThan('tablet')"
                      class="absolute top-0 w-full left-0 -z-10 md:hidden h-full" src="/img/index/bgd-decor.png"
                      alt="bgd" />
                    <NuxtImg v-else class="absolute top-0 left-0 w-full -z-10 hidden md:block h-full"
                      src="/img/index/bgd-decor-2.png" alt="bgd" />

                    <h2 class="text-sm text-white">
                      {{ $t('cost') }} <br class="hidden md:block">
                      <span class="font-bold md:text-xl">
                        {{ $t('from') }} {{ String(item?.price)?.replace(/\B(?=(\d{3})+(?!\d))/g, " ") }} $
                      </span>
                    </h2>
                    <p class="text-xs text-slate-50 opacity-60 text-center">
                      {{ $t('including_taxes') }}
                    </p>
                  </div>
                </div>
              </div>
              <h2
                v-html="item?.translations?.filter(item => item.languages_code.includes(langStore.lang))[0]?.description"
                class="text-3xl font-light text-white mt-5 md:text-[55px] lg:text-[65px] leading-[100%] md:leading-[55px] lg:leading-[65px] md:mt-12 md:max-w-[825px]">
              </h2>
              <button @click="addModal" class="white-button mt-7 lg:mt-12">
                {{ $t('download_presentation') }}
              </button>
            </div>

            <div class="hidden md:block">
              <NuxtImg width="156" height="156" loading="lazy" src="/img/index/banner-logo.svg" alt="" />
            </div>
          </div>

          <div v-if="item?.strings?.length" class="flex justify-between items-end lg:mt-28 xl:mt-36 mt-10">
            <div class="flex gap-5">
              <div v-if="item?.strings.some(item => item.String_id.id === 2)" class="pr-5 border-r border-whiteOp-300">
                <p class="font-bold text-white text-2xl mb-2 md:text-4xl md:mb-3">
                  {{ item?.strings.filter(item => item.String_id.id === 2)[0].String_id?.translations?.filter(item =>
                    item.languages_code.includes(langStore.lang))[0]?.title }}
                </p>
                <span class="text-white text-sm md:text-base">
                  {{ item?.strings.filter(item => item.String_id.id === 2)[0].String_id?.translations?.filter(item =>
                    item.languages_code.includes(langStore.lang))[0]?.description }}
                </span>
              </div>
              <div v-if="item?.strings.some(item => item.String_id.id === 3)">
                <p class="font-bold text-white text-2xl mb-2 md:text-4xl md:mb-3">
                  {{ item?.strings.filter(item => item.String_id.id === 3)[0].String_id?.translations?.filter(item =>
                    item.languages_code.includes(langStore.lang))[0]?.title }}
                </p>
                <span class="text-white text-sm md:text-base">
                  {{ item?.strings.filter(item => item.String_id.id === 3)[0].String_id?.translations?.filter(item =>
                    item.languages_code.includes(langStore.lang))[0]?.description }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>


    </swiper>

  </section>
</template>


<script setup>
import { Pagination, A11y, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import useFetchWithCache from '~/hooks/useFetchWithCache'

import { useNuxtApp } from '#app'
const { $viewport } = useNuxtApp()


const slides = await useFetchWithCache('/api/slides');

const modalsStore = useModalsStore()
const langStore = useLangStore();

const isActive = ref(false)
const imageLoaded = ref(false);
const image = ref(null);

function onImageLoad() {
  imageLoaded.value = true;
}

onMounted(() => {
  if (image.value?.complete) {
    imageLoaded.value = true;
  }
});

const addModal = () => {
  modalsStore.addModal('presentation')
}
</script>
