<template>
    <div v-if="!isHide"
        class="fixed left-0 top-0 h-full w-full z-50 bg-blue-500 transition-all duration-150 flex items-center justify-center"
        :class="isLoading ? 'visible opacity-100' : 'opacity-0 invisible'">
        <!-- <iframe v-if="isLoading" class="w-[800px] h-[800px]"
            src="https://lottie.host/embed/1b26babb-a87c-48e7-9a0a-f31a06298110/CixbB89Yfp.json"></iframe> -->

        <!-- <img src="/img/loader.gif" class="w-[800px] h-[500px]" alt=""> -->
        <!-- <NuxtImg src="/img/loader.gif" loading="lazy" class="w-[800px] h-[500px]" alt="Preloader" /> -->
        <!-- <video src="/assets/img/logo-pre.webm" v-if="!$viewport.isLessThan('tablet')" class="w-[500px]" autoplay loop muted></video>
        <video src="/assets/img/loader100.webm" v-else class="w-[100px]" autoplay loop muted></video> -->

        <video v-if="!$viewport.isLessThan('tablet')" width="500" preload="auto" no-controls autoplay loop playsinline
            muted>
            <source src="/img/logo-pre.mov">
        </video>
        <video v-else src="/img/logo-pre.mov" preload="auto" no-controls autoplay loop playsinline muted
            width="250"></video>


    </div>
</template>

<script setup>
import { usePreloaderStore } from '~/stores/functions/preloader';

const { isActive } = defineProps(['isActive'])
const preloaderStore = usePreloaderStore();

const { $viewport } = useNuxtApp()

const nuxtApp = useNuxtApp();
const isLoading = ref(true);
const isHide = ref(false)

nuxtApp.hook("page:start", () => {
    isHide.value = false
    
    setTimeout(() => {
        isLoading.value = true
    }, 50)
})
nuxtApp.hook("page:finish", () => {
    setTimeout(() => {
        isLoading.value = false;

        setTimeout(() => {
            isHide.value = true
        }, 200)
    }, 500)
});

watchEffect(() => {
    setTimeout(() => {
        isLoading.value = false;
    }, 1500)
})

</script>
