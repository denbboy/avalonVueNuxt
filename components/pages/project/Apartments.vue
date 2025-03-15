<template>
    <section id="apartments" class="relative overflow-hidden bg-no-repeat bg-cover py-14 md:py-24">
        <Parallaxy class="absolute top-0 left-0 z-0 h-full w-full" :speed="150"
            :animation="(delta) => `transform: translate3d(0, ${delta}px, 0);`">
            <NuxtImg class="h-full w-full object-cover scale-[1.7]"
                :src="'https://api.avalonbali.com/assets/' + itemData.background_image_middle_block"
                alt="image" loading="lazy" />
        </Parallaxy>
        <div class="container">
            <PagesProjectApartmentsItem v-for="item in sortedApartments" :key="item.id" :itemData="item" />
        </div>
    </section>
</template>

<script setup>
import { computed } from 'vue';
import Parallaxy from '@lucien144/vue3-parallaxy';

const { itemData } = defineProps(['itemData']);

// Создаем отсортированный массив
const sortedApartments = computed(() => {
    return [...itemData.apartments].sort((a, b) => a.sort - b.sort);
});

</script>
