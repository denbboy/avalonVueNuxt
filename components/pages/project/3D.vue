<template>
    <section v-for="item in apartments" :key="item.id" v-if="item?.video_360" :id="`3d-object-${item?.id}`" data-aos="fade-up" class="photo">
        <!-- <img src="/assets/img/about/sec-photo.jpg" alt="ph"> -->
        <iframe width="100%" height="970px" :src="item?.video_360"></iframe>
    </section>
</template>

<script setup>
const {apartments} = defineProps(['apartments'])
</script>
