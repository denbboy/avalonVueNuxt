<template>
    <li :class="itemData.openedItem === itemData?.index ? 'active' : ''"
        @click="() => isMobile && itemData?.handleOpen(itemData?.index)"
        class="select group flex gap-4 md:gap-7 items-center [&.active]:items-start">
        <div data-aos="fade-right"
            class="min-w-11 h-11 rounded-xl bg-blue-400 flex items-center justify-center md:min-w-12 md:h-12">
            <span class="font-bold text-white text-xs md:text-lg">
                {{ itemData?.index }}
            </span>
        </div>
        <div data-aos="fade-right" class="">
            <h3 :class="isMobile ? 'select__head' : ''"
                class="font-bold leading-8 text-white lg:text-[30px] text-base group-[.active]:pb-2 transition-all underline-offset-[6px] w-full decoration-dashed underline md:no-underline md:text-[22px] md:mb-2 lg:mb-5 md:border-none">
                {{ itemData?.title }}
            </h3>
            <div v-if="itemData?.description" :class="isMobile ? 'select__body' : ''" class=" text-white text-sm md:text-base md:block"
                v-html="itemData.description.replace(/^<p>|<\/p>$/g, '')"></div>
        </div>
    </li>
</template>

<script setup>
import { reactive, watch, ref, watchEffect } from 'vue';

const props = defineProps(['index', 'title', 'description', 'handleOpen', 'openedItem']);

const itemData = computed(() => ({
    index: props.index,
    title: props.title,
    description: props.description,
    handleOpen: props.handleOpen,
    openedItem: props.openedItem
}));

// Следим за изменениями props и обновляем itemData
watch(() => props, (newProps) => {
    Object.assign(itemData, newProps);
}, { deep: true, immediate: true });

const isMobile = ref(false);

watchEffect(() => {
    setTimeout(() => {
        isMobile.value = window?.innerWidth < 576;
    }, 500);
});
</script>

