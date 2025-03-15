<template>
  <section class="company md:bg-white md:pt-24 md:pb-16 relative overflow-hidden bg-blue-600" data-aos="fade-up">
    <div class="absolute -left-36 bottom-20 w-72 h-72 z-10">
      <NuxtImg src="/img/icons/vector-logo.svg" class="invert w-full" alt="vector-logo" />
    </div>
    <div class="absolute -right-36 top-20 w-72 h-72 z-10">
      <NuxtImg src="/img/icons/vector-logo.svg" class="invert w-full" alt="vector-logo" />
    </div>
    <div class="container">
      <div class="relative md:h-[450px] list">
        <div
          class="rounded-tr-2xl rounded-tl-2xl md:rounded-none bg-[#E7EDF2] w-[calc(100%_+_60px)] ml-[-30px] px-[30px] py-[30px] grid grid-cols-2 items-center md:flex relative md:bg-white md:max-w-64 md:flex-col md:p-0 md:gap-4 md:absolute z-10 md:top-[13%] md:left-[-7%] lg:left-[0%]">
          <div
            class="bg-blue-400 min-w-2 h-2 rounded-[3px] before:block before:w-[50px] before:h-[1px] before:bg-blue-400/20 before:absolute before:right-[0] before:top-1 absolute top-[50%] left-5 translate-y-[-50%] md:left-[50%] md:top-[-20px] md:translate-x-[-50%] md:before:w-[1px] md:before:h-[400px] md:before:bottom-0 md:before:top-auto md:before:right-1">
          </div>
          <div class="w-full">
            <NuxtImg loading="lazy" src="/img/index/comp-1.svg" class="ml-5 md:m-auto md:w-[141px] " alt="ic" />
          </div>
          <p class="text-blue-600 text-xs md:text-center md:max-w-[222px] md:mx-auto">
            {{ $t('companies_text_1') }}
          </p>
        </div>
        <div
          class="bg-white w-[calc(100%_+_60px)] ml-[-30px] px-[30px] py-[30px] grid grid-cols-2 items-center md:flex relative md:max-w-64 md:flex-col md:p-0 md:gap-4 md:absolute z-10 md:top-[55%] md:left-[6%] lg:left-[12%]">
          <div
            class="bg-blue-400 min-w-2 h-2 rounded-[3px] before:block before:w-[50px] before:h-[1px] before:bg-blue-400/20 before:absolute before:right-[0] before:top-1 absolute top-[50%] left-5 translate-y-[-50%] md:left-[50%] md:top-[-20px] md:translate-x-[-50%] md:before:w-[1px] md:before:h-[400px] md:before:bottom-0 md:before:top-auto md:before:right-1">
          </div>

          <div class="w-full">
            <NuxtImg loading="lazy" src="/img/index/comp-2.svg" class="ml-5 md:m-auto md:w-[141px]" alt="ic" />
          </div>
          <p class="text-blue-600 text-xs md:text-center md:max-w-[222px] md:mx-auto">
            {{ $t('companies_text_2') }}
          </p>
        </div>
        <div
          class="bg-[#E7EDF2] w-[calc(100%_+_60px)] ml-[-30px] px-[30px] py-[30px] grid grid-cols-2 items-center md:flex relative md:bg-white md:max-w-64 md:flex-col md:p-0 md:gap-4 md:absolute z-10 md:top-[18%] md:left-[20%] lg:left-[27%]">
          <div
            class="bg-blue-400 min-w-2 h-2 rounded-[3px] before:block before:w-[50px] before:h-[1px] before:bg-blue-400/20 before:absolute before:right-[0] before:top-1 absolute top-[50%] left-5 translate-y-[-50%] md:left-[50%] md:top-[-20px] md:translate-x-[-50%] md:before:w-[1px] md:before:h-[400px] md:before:bottom-0 md:before:top-auto md:before:right-1">
          </div>

          <div class="w-full">
            <NuxtImg loading="lazy" src="/img/index/comp-3.svg" class="ml-5 md:m-auto md:w-[125px]" alt="ic" />
          </div>
          <p class="text-blue-600 text-xs md:text-center md:max-w-[222px] md:mx-auto">
            {{ $t('companies_text_3') }}
          </p>
        </div>



        <div
          class="bg-white mob-item-hidden hidden w-[calc(100%_+_60px)] ml-[-30px] px-[30px] py-[30px] grid-cols-2 items-center md:flex relative md:max-w-64 md:flex-col md:p-0 md:gap-4 md:absolute z-[11] md:top-[0%] md:left-2/4 md:-translate-x-2/4">
          <div
            class="bg-blue-400 min-w-2 h-2 rounded-[3px] before:block before:w-[50px] before:h-[1px] before:bg-blue-400/20 before:absolute before:right-[0] before:top-1 absolute top-[50%] left-5 translate-y-[-50%] md:left-[50%] md:top-[-20px] md:translate-x-[-50%] md:before:w-[1px] md:before:h-[400px] md:before:bottom-0 md:before:top-auto md:before:right-1">
          </div>

          <div class="w-full">
            <NuxtImg loading="lazy" src="/img/index/comp-4.svg"
              class="ml-5 md:m-auto md:w-[200px] md:-mt-5 md:pt-5 md:bg-white" alt="ic" />
          </div>
          <p class="text-blue-600 text-xs md:text-center md:max-w-[260px] md:mx-auto">
            {{ $t('companies_text_4') }}
          </p>
        </div>
        <div
          class="bg-[#E7EDF2] mob-item-hidden hidden w-[calc(100%_+_60px)] ml-[-30px] px-[30px] py-[30px] grid-cols-2 items-center md:flex relative md:bg-white md:max-w-64 md:flex-col md:p-0 md:gap-4 md:absolute z-10 md:top-[60%] md:left-2/4 md:-translate-x-2/4">
          <div
            class="bg-blue-400 min-w-2 h-2 rounded-[3px] before:block before:w-[50px] before:h-[1px] before:bg-blue-400/20 before:absolute before:right-[0] before:top-1 absolute top-[50%] left-5 translate-y-[-50%] md:left-[50%] md:top-[-20px] md:translate-x-[-50%] md:before:w-[1px] md:before:h-[400px] md:before:bottom-0 md:before:top-auto md:before:right-1">
          </div>

          <div class="w-full">
            <NuxtImg loading="lazy" src="/img/index/comp-5.svg" class="ml-5 md:m-auto md:w-[200px]" alt="ic" />
          </div>
          <p class="text-blue-600 text-xs md:text-center md:max-w-[222px] md:mx-auto">
            {{ $t('companies_text_5') }}
          </p>
        </div>
        <div
          class="bg-white mob-item-hidden hidden w-[calc(100%_+_60px)] ml-[-30px] px-[30px] py-[30px] grid-cols-2 items-center md:flex relative md:max-w-64 md:flex-col md:p-0 md:gap-4 md:absolute z-10 md:top-[20%] md:right-[20%] lg:right-[27%]">
          <div
            class="bg-blue-400 min-w-2 h-2 rounded-[3px] before:block before:w-[50px] before:h-[1px] before:bg-blue-400/20 before:absolute before:right-[0] before:top-1 absolute top-[50%] left-5 translate-y-[-50%] md:left-[50%] md:top-[-20px] md:translate-x-[-50%] md:before:w-[1px] md:before:h-[400px] md:before:bottom-0 md:before:top-auto md:before:right-1">
          </div>

          <div class="w-full">
            <NuxtImg loading="lazy" src="/img/index/comp-6.svg" class="ml-5 md:m-auto md:w-[160px]" alt="ic" />
          </div>
          <p class="text-blue-600 text-xs md:text-center md:max-w-[222px] md:mx-auto">
            {{ $t('companies_text_6') }}
          </p>
        </div>
        <div
          class="bg-[#E7EDF2] mob-item-hidden hidden w-[calc(100%_+_60px)] ml-[-30px] px-[30px] py-[30px] grid-cols-2 items-center md:flex relative md:bg-white md:max-w-64 md:flex-col md:p-0 md:gap-4 md:absolute z-10 md:top-[55%] md:right-[6%] lg:right-[12%]">
          <div
            class="bg-blue-400 min-w-2 h-2 rounded-[3px] before:block before:w-[50px] before:h-[1px] before:bg-blue-400/20 before:absolute before:right-[0] before:top-1 absolute top-[50%] left-5 translate-y-[-50%] md:left-[50%] md:top-[-20px] md:translate-x-[-50%] md:before:w-[1px] md:before:h-[400px] md:before:bottom-0 md:before:top-auto md:before:right-1">
          </div>

          <div class="w-full">
            <NuxtImg loading="lazy" src="/img/index/comp-7.svg" class="ml-5 md:m-auto md:w-[140px]" alt="ic" />
          </div>
          <p class="text-blue-600 text-xs md:text-center md:max-w-[222px] md:mx-auto">
            {{ $t('companies_text_7') }}
          </p>
        </div>
        <div
          class="bg-white mob-item-hidden hidden w-[calc(100%_+_60px)] ml-[-30px] px-[30px] py-[30px] grid-cols-2 items-center md:flex relative md:max-w-64 md:flex-col md:p-0 md:gap-4 md:absolute z-10 md:top-[13%] md:right-[-7%] lg:right-[0%]">
          <div
            class="bg-blue-400 min-w-2 h-2 rounded-[3px] before:block before:w-[50px] before:h-[1px] before:bg-blue-400/20 before:absolute before:right-[0] before:top-1 absolute top-[50%] left-5 translate-y-[-50%] md:left-[50%] md:top-[-20px] md:translate-x-[-50%] md:before:w-[1px] md:before:h-[400px] md:before:bottom-0 md:before:top-auto md:before:right-1">
          </div>

          <div class="w-full">
            <NuxtImg loading="lazy" src="/img/index/comp-8.svg" class="ml-5 md:m-auto md:w-[200px]" alt="ic" />
          </div>
          <p class="text-blue-600 text-xs md:text-center md:max-w-[222px] md:mx-auto">
            {{ $t('companies_text_8') }}
          </p>
        </div>

        <button v-if="!isShow" @click="handleOpenAll" class="blue-border-button bg-white mx-auto my-5 md:hidden">
          {{ $t('show_all') }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
  const isShow = ref();
  const handleOpenAll = () => {
    // document.querySelectorAll('.list .mob-item-hidden').forEach((item) => {
    //   item.classList.toggle('hidden')
    //   item.classList.toggle('grid')

    //   isShow.value = true;
    // })
  }
</script>
