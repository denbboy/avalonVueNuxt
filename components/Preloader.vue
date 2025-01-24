<template>
    <div class="fixed left-0 top-0 h-full w-full z-50 bg-blue-500 transition-all duration-150 flex items-center justify-center"
        :class="isLoading ? 'visible opacity-100' : 'opacity-0 invisible'">
        <!-- <iframe v-if="isLoading" class="w-[800px] h-[800px]"
            src="https://lottie.host/embed/1b26babb-a87c-48e7-9a0a-f31a06298110/CixbB89Yfp.json"></iframe> -->

        <!-- <img src="/img/loader.gif" class="w-[800px] h-[500px]" alt=""> -->
        <!-- <NuxtImg src="/img/loader.gif" loading="lazy" class="w-[800px] h-[500px]" alt="Preloader" /> -->
        <!-- <video src="/assets/img/loader1080.webm" v-if="!$viewport.isLessThan('tablet')" class="w-[500px]" autoplay loop muted></video>
        <video src="/assets/img/loader100.webm" v-else class="w-[100px]" autoplay loop muted></video> -->
        
        <video v-if="!$viewport.isLessThan('tablet')" width="500" preload="auto" no-controls autoplay loop playsinline muted>
            <source src="/assets/img/loader1080.webm" type="video/webm">
        </video>
        <video v-else src="/assets/img/loader100.webm" preload="auto" no-controls autoplay loop playsinline muted  width="100"></video>


    </div>
</template>

<script setup>
import { usePreloaderStore } from '~/stores/functions/preloader';

const { isActive } = defineProps(['isActive'])
const preloaderStore = usePreloaderStore();

const { $viewport } = useNuxtApp()

const nuxtApp = useNuxtApp();
const isLoading = ref(true);

nuxtApp.hook("page:finish", () => {
    setTimeout(() => {
        isLoading.value = false;
    }, 500)
});

watchEffect(() => {
    setTimeout(() => {
        isLoading.value = false;
    }, 1500)
})

</script>
