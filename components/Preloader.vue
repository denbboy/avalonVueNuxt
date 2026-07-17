<template>
    <div v-if="!isHide"
        class="fixed left-0 top-0 h-full w-full z-50 bg-blue-500 transition-all duration-150 flex items-center justify-center"
        :class="visibilityClass">

        <!-- v-if="!$viewport.isLessThan('tablet')" -->
        <video width="500" preload="auto" no-controls autoplay loop playsinline muted>
            <source src="/img/logo-pre.mov" type="video/quicktime">
            <source src="/img/logo-pre.webm" type="video/webm">
            <!-- <source src="/img/logo-pre.mp4" type="video/mp4"> -->
        </video>
        <!-- <video v-else src="/img/logo-pre.mov" preload="auto" no-controls autoplay loop playsinline muted width="250">
        </video> -->
    </div>
</template>


<style scoped>
video {
    background-color: transparent;
}
</style>

<script setup>
import { usePreloaderStore } from '~/stores/functions/preloader';

const { isActive } = defineProps(['isActive'])
const preloaderStore = usePreloaderStore();
const { $viewport, hook } = useNuxtApp();

const isLoading = ref(true);
const isHide = ref(false);
const visibilityClass = ref('visible opacity-100');


setTimeout(() => {
    isLoading.value = false;
    setTimeout(() => (isHide.value = true), 200);
    visibilityClass.value = 'invisible opacity-0'
}, 5000);

hook("page:start", () => {
    isHide.value = false;
    visibilityClass.value = 'visible opacity-100';
    setTimeout(() => (isLoading.value = true), 50);
});


hook("page:finish", () => {
    setTimeout(() => {
        isLoading.value = false;
        setTimeout(() => (isHide.value = true), 200);
        visibilityClass.value = 'invisible opacity-0'
    }, 500);
});

// Убираем прелоадер через 1.5 сек после монтирования
onMounted(() => {
    setTimeout(() => {
        isLoading.value = false
        visibilityClass.value = 'invisible opacity-0'
    }, 1500);
});
</script>
