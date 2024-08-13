<template>
    <SkeletonLoader v-if="imageFile" class="w-full h-full rounded-2xl">
        <img v-show="!imageLoaded" ref="image" loading="lazy"
            class="opacity-0 absolute top-0 left-0 rounded-2xl w-full flex items-center justify-center h-full object-cover"
            @load="onImageLoad" :src="`https://avalon-panel.sonisapps.com/assets/${imageFile}`"
            @error="onImageLoad" />
        <img v-if="imageLoaded" loading="lazy"
            class="rounded-2xl absolute top-0 left-0 w-full flex items-center justify-center h-full object-cover"
            :src="`https://avalon-panel.sonisapps.com/assets/${imageFile}`" />
    </SkeletonLoader>
</template>

<script setup>
const {imageFile} = defineProps(['imageFile']);

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
</script>
