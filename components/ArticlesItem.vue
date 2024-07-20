<template>
    <NuxtLink :href="`/articles/${item?.id}`" class="w-full h-full block group lg:max-w-[375px]">
        <div class="relative mb-5 w-full h-[300px]">
            <div :class="{
                'border-white bg-white after:bg-blue-500': props.bgdColor === 'white',
                'border-blue-500 bg-blue-500 after:bg-white': props.bgdColor === 'blue-500',
                'border-blue-600 bg-blue-600 after:bg-white': props.bgdColor === 'blue-600',
            }" class="block-bottom-point z-20"></div>
            <img class="rounded-[20px] w-full h-full object-cover"
                :src="`https://avalon-panel.sonisapps.com/assets/${item?.preview}`" alt="">
        </div>

        <!-- v-html="props?.item?.translations?.filter(item => item.languages_code.includes(langStore.lang))[0]?.title" -->
        <p :class="bgdColor === 'white' ? 'text-blue-600' : 'text-white'"
            class="text-base md:text-lg transition-all group-hover:text-blue-400 font-bold">
            {{ props?.item?.translations?.filter(item => item.languages_code.includes(langStore.lang))[0]?.title }}
        </p>
        <!-- v-html="props?.item?.translations?.filter(item => item.languages_code.includes(langStore.lang))[0]?.description.slice(0, 50)" -->
        <div :class="bgdColor === 'white' ? 'text-blue-600' : 'text-white'"
            class="mt-3 md:mt-4 items-center text-sm opacity-60 line-clamp-2" v-html="props?.item?.translations?.filter(item => item.languages_code.includes(langStore.lang))[0]?.description">
        </div>
    </NuxtLink>
</template>

<script setup>

const props = defineProps({
    item: {
        type: Object,
        require: true
    },
    bgdColor: {
        type: String
    }
})

const langStore = useLangStore()

</script>
