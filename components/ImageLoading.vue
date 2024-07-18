<template>
    <div class="image h-full relative">
        <div :class="isLoading ? 'absolute animate-skeleton w-full h-full top-0 left-0 bg-blue-400' : 'hidden'"></div>
        <NuxtImg placeholder :src="src" @load="onLoad" :class="isLoading ? ' bg-blue-300 ' : className" />
    </div>
</template>

<script setup>

const { className, src } = defineProps(['className', 'src'])

const isLoading = ref(true);

const onLoad = () => {
    isLoading.value = false
}

</script>