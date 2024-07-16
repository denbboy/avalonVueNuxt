<template>
    <section class="pb-24 relative bg-blue-500 overflow-hidden">
        <div class="bg-gradient-to-t from-blue-500 from-60% lg:from-60%  w-full h-[2000px] absolute z-10"></div>

        <img class="absolute top-0 z-0 opacity-40 w-[600vw] max-w-max md:w-full min-h-[1000px] h-screen object-cover"
            src="/assets/img/career/img.jpg" alt="Image">

        <div class="container mx-auto relative z-20 pt-32 md:pt-64">
            <h1 data-aos="fade-up"
                class="md:text-5xl lg:text-6xl text-3xl text-white font-normalidad font-bold mb-5 md:mb-12">
                {{ currentPageInfo?.filter(item => item.languages_code.includes(langStore.lang))[0]?.title }}
            </h1>
            <div data-aos="fade-up" data-aos-delay="100" class="justify-between items-center mb-10 lg:mb-48">
                <p class="md:text-lg text-white text-sm mb-7 max-w-[548px]">
                    {{ currentPageInfo?.filter(item => item.languages_code.includes(langStore.lang))[0]?.description }}
                </p>
            </div>
        </div>

        <div class="absolute -right-[72px] top-[250px] w-36 z-10">
            <img src="/assets/img/icons/vector-logo.svg" alt="vector-logo">
        </div>

    </section>
</template>

<script setup>
import { usePagesStore } from '~/stores/functions/pages';

const { id } = useRoute().params;

const currentPageInfo = ref({});
const pagesStore = usePagesStore();
const langStore = useLangStore();

watchEffect(() => {
    currentPageInfo.value = pagesStore.pagesList?.filter(item => item.slug === id)[0]?.translations
});

</script>
