<template>
  <NuxtLink to="/news/123" class="w-full h-full group">
    <div class="relative mb-5 w-full">
      <div :class="{
        'border-white bg-white after:bg-blue-500': props.bgdColor === 'white',
        'border-blue-500 bg-blue-500 after:bg-white': props.bgdColor === 'blue-500',
        'border-blue-600 bg-blue-600 after:bg-white': props.bgdColor === 'blue-600',
      }" class="block-bottom-point z-20"></div>
      <img class="rounded-[20px] w-full h-full object-cover" src="/assets/img/news/cardImage.jpg" alt="">
    </div>
    <span :class="bgdColor === 'white' ? 'text-blue-600' : 'text-white'"
      class="mb-3 md:mb-4 flex items-center text-sm opacity-60">
      <div :class="bgdColor === 'white' ? 'bg-blue-600' : 'bg-white'" class="block w-[6px] h-[6px] rounded-sm mr-2"></div>
      1 июня 2023
    </span>
    <p :class="bgdColor === 'white' ? 'text-blue-600' : 'text-white'"
      class="text-base md:text-lg transition-all group-hover:text-blue-400 font-bold">
      СТАРТ ПРОДАЖ клубного дома <br>на 7 видовых квартир
    </p>
  </NuxtLink>
</template>

<script setup>
const props = defineProps(['bgdColor'])
</script>
