<template>
    <NuxtLink :href="`/articles/${item?.id}`"
        class="w-full rounded-[20px] overflow-hidden h-full block group transition-all hover:shadow-[0px_10px_10px_0px_rgba(0,0,0,.1)] lg:max-w-[375px]">
        <div class="relative w-full h-[300px]">
            <div :class="{
                'border-white bg-white after:bg-blue-500': props.bgdColor === 'white',
                'border-blue-500 bg-blue-500 after:bg-white': props.bgdColor === 'blue-500',
                'border-blue-600 bg-blue-600 after:bg-white': props.bgdColor === 'blue-600',
            }" class="block-bottom-point z-20"></div>

            <SkeletonLoader class="w-full h-[300px] rounded-[20px]">
                <NuxtImg data-not-lazy ref="image" loading="lazy" class="opacity-0 absolute"
                    :src="`https://avalon-panel.sonisapps.com/assets/${item?.preview}?width=350&height=300`" @load="onImageLoad" />
                <NuxtImg v-if="imageLoaded" loading="lazy" data-not-lazy
                    :src="`https://avalon-panel.sonisapps.com/assets/${item?.preview}?width=350&height=300`" alt="Image"
                    class="z-0 w-full h-full object-cover relative rounded-2xl" @load="onImageLoad" />
            </SkeletonLoader>

        </div>

        <div class="p-5">
            <p :class="bgdColor === 'white' ? 'text-blue-600' : 'text-white'"
                class="text-base md:text-lg transition-all line-clamp-2 group-hover:text-blue-400 font-bold">
                {{ props?.item?.translations?.filter(item => item.languages_code.includes(langStore.lang))[0]?.title }}
            </p>
            <div :class="bgdColor === 'white' ? 'text-blue-600' : 'text-white'"
                class="mt-3 md:mt-4 items-center text-sm opacity-60 line-clamp-2 h-[39px] overflow-hidden"
                v-html="props?.item?.translations?.filter(item => item.languages_code.includes(langStore.lang))[0]?.meta_description">
            </div>
        </div>
    </NuxtLink>
</template>

<script setup>
import { useUrlSearchParams } from '@vueuse/core';

const imageLoaded = ref(false);
const image = ref(null);

const props = defineProps({
    item: {
        type: Object,
        require: true
    },
    bgdColor: {
        type: String
    }
})

function onImageLoad() {
    imageLoaded.value = true;
}

onMounted(async () => {
    if (image.value?.complete) {
        imageLoaded.value = true;
    }
});

const langStore = useLangStore()

</script>
