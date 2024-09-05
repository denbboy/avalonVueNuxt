<template>
    <li :class="props.openedItem === props?.index ? 'active' : ''" @click="() => isMobile && props?.handleOpen(props?.index)"
        class="select group flex gap-4 md:gap-7 items-center [&.active]:items-start">
        <div data-aos="fade-right"
            class="min-w-11 h-11 rounded-xl bg-blue-400 flex items-center justify-center md:min-w-12 md:h-12">
            <span class="font-bold text-white text-xs md:text-lg">
                {{ props?.index }}
            </span>
        </div>
        <div data-aos="fade-right" class="">
            <h3 :class="isMobile ? 'select__head' : ''"
                class="font-bold leading-8 text-white lg:text-[30px] text-base group-[.active]:pb-2 transition-all underline-offset-[6px] w-full decoration-dashed underline md:no-underline md:text-[22px] md:mb-2 lg:mb-5 md:border-none">
                {{ props?.title }}
            </h3>
            <p :class="isMobile ? 'select__body' : ''" class=" text-white text-sm md:text-base md:block"
                v-html="props?.description"></p>
        </div>
    </li>
</template>

<script setup>

const props = defineProps(['index', 'title', 'description', 'handleOpen', 'openedItem'])

const isMobile = ref(false);

watchEffect(() => {
    setTimeout(() => {
        if (window?.innerWidth < 576) {
            isMobile.value = true
        } else {
            isMobile.value = false
        }
    }, 500)
})

</script>
