<template>
    <NuxtLink href="/articles/123" class="w-full h-full block group lg:max-w-[375px]">
        <div class="relative mb-5 w-full">
            <div 
            :class="isWhiteBgd ? 'border-white bg-white after:bg-blue-500' : 'border-blue-500 bg-blue-500 after:bg-white'"
            class="block-bottom-point"></div>
            <img class="rounded-[20px] w-full h-full object-cover" src="/assets/img/news/cardImage.jpg" alt="">
        </div>

        <p 
        :class="isWhiteBgd ? 'text-blue-600' : 'text-white'"
        class="text-base md:text-lg transition-all group-hover:text-blue-400 font-bold">
            СТАРТ ПРОДАЖ клубного дома <br>на 7 видовых квартир
        </p>
        <span 
        :class="isWhiteBgd ? 'text-blue-600' : 'text-white'"
        class="mt-3 md:mt-4 flex items-center text-sm opacity-60">
            Our properties are situated in various areas across the island of Bali, offering a range
            of locations to suit every preference
        </span>
    </NuxtLink>
</template>

<script setup>
const props = defineProps(['isWhiteBgd'])
</script>
