<template>
    <NuxtLink href="/sales/123" class="group block relative rounded-2xl transition-all">
        <div :class="{
            'border-white bg-white after:bg-blue-500': props.bgdColor === 'white',
            'border-blue-500 bg-blue-500': props.bgdColor === 'blue-500',
            'border-blue-600 bg-blue-600 after:bg-blue-500': props.bgdColor === 'blue-600',
        }" class="block-bottom-point z-20"></div>
        <img src="/assets/img/news/cardImage.jpg" alt="Image" class="z-0 relative rounded-2xl">
        <div
            class="bg-gradient-to-t transition-all from-blue-600/80 rounded-2xl opacity-90 group-hover:opacity-0 from-20% absolute top-0 left-0 w-full h-full z-10">
        </div>
        <div
            class="bg-gradient-to-t transition-all rounded-2xl opacity-0 group-hover:opacity-90 from-blue-400 from-20% absolute top-0 left-0 w-full h-full z-10">
        </div>
        <div class="absolute z-20 w-full h-full top-0 left-0 p-5 flex flex-col">
            <img src="/assets/img/icons/icon-club.svg" alt="Image" class="absolute top-5 left-5 w-14 h-14">
            <div
                class="bg-[url('./../img/icons/bgd-blue-dor-rd.svg')] px-3 py-2 bg-no-repeat bg-cover bg-right-bottom rounded-l-lg rounded-tr-lg text-xs text-white ml-auto w-fit block lg:text-sm lg:p-3">
                Действует до <strong>30 марта 2024</strong>
            </div>
            <strong class="mt-auto text-white mb-2 md:text-lg">
                Курс 36,6 грн/$ <br>на первый взнос
            </strong>
            <div class="flex items-center opacity-60">
                <img class="w-2 md:w-3" src="/assets/img/icons/point-white.svg" alt="">
                <span class="text-white ml-1 text-xs md:text-sm">Bukit</span>
            </div>
        </div>
    </NuxtLink>
</template>

<script setup>
const props = defineProps(['bgdColor'])
</script>
