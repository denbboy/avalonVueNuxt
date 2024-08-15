<template>
    <div class="fixed left-0 top-0 h-full w-full z-50 bg-blue-500 transition-all duration-150 flex items-center justify-center"
        :class="isLoading ? 'visible opacity-100' : 'opacity-0 invisible'">
        <!-- <iframe v-if="isLoading" class="w-[800px] h-[800px]"
            src="https://lottie.host/embed/1b26babb-a87c-48e7-9a0a-f31a06298110/CixbB89Yfp.json"></iframe> -->

            <!-- <img src="/img/loader.gif" class="w-[800px] h-[500px]" alt=""> -->
            <NuxtImg src="/img/loader.gif" loading="lazy" class="w-[800px] h-[500px]" alt="Preloader" />
    </div>
</template>

<script setup>
import { usePreloaderStore } from '~/stores/functions/preloader';

const {isActive} = defineProps(['isActive'])
const preloaderStore = usePreloaderStore();

const nuxtApp = useNuxtApp();
const isLoading = ref(true);

nuxtApp.hook("page:finish", () => {
    setTimeout(() => {
        isLoading.value = false;
    }, 1000)
});

watch(preloaderStore, (newValue) => {
    console.log('newValue', newValue.isPreloaderOn);
    isLoading.value = true;

    setTimeout(() => {
        isLoading.value = false;
    }, 2000)
})

</script>
