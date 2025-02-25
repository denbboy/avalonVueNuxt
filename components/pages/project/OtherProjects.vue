<template>
    <section class="uslugi pt-[23px] pb-12 md:py-24 relative overflow-hidden">
        <div class="absolute lg:-right-36 top-0 lg:top-auto lg:left-auto lg:bottom-40 -left-14 w-28 lg:w-72 z-[2]">
            <NuxtImg src="/img/icons/vector-logo.svg" class="w-full" alt="vector-logo" loading="lazy" />
        </div>
        <div class="container">
            <h2 data-aos="fade-up"
                class="text-white text-3xl font-bold text-center md:text-[45px] lg:text-[56px] leading-[100%] mb-[30px] md:mb-[50px]">
                {{ $t('other_projects') }}
            </h2>

            <div
                class="grid flex-col gap-5 md:grid-cols-3 flex-wrap items-center md:justify-between md:flex-row lg:flex-row z-10 relative">

                <div class="relative rounded-[14px] !rounded-br-none lg:rounded-3xl overflow-hidden bg-[#111111] min-h-[500px] lg:min-h-[600px] md:min-h-[400px]"
                    v-for="item in props.projects" :key="item.related_Project_id?.id">
                    <div class="">
                        <NuxtImg :src="`https://avalon-panel.sonisapps.com/assets/${item.related_Project_id?.preview}`"
                            class="opacity-50 w-full absolute object-cover h-full" alt="Image" loading="lazy" />
                        <div class="bg-gradient-to-t from-blue-600 absolute bottom-0 left-0 w-full h-3/4"></div>
                        <div class="absolute top-0 left-0 w-full h-full p-5 md:p-7 flex flex-col">
                            <div class="block-bottom-point"></div>
                            <div class="flex justify-between mb-auto">
                                <NuxtImg class="w-[90px]" v-if="item.related_Project_id?.logo"
                                    :src="`https://avalon-panel.sonisapps.com/assets/${item.related_Project_id?.logo}`"
                                    alt="Image" loading="lazy" />
                                    <span v-if="item?.related_Project_id?.main_translations?.filter(item =>
                                    item.languages_code?.includes(locale))[0]?.sale_alias"
                                    class="md:px-5 py-2 px-4 bg-no-repeat relative bg-right-bottom h-[45px] w-fit rounded-tl-xl rounded-bl-xl rounded-tr-xl overflow-hidden text-xs md:text-[11px] lg:text-sm text-white">

                                    <svg class="absolute w-full h-full top-0 left-0 right-0"
                                        viewBox="0 0 101 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M100.893 7.14226C100.893 3.25662 97.7435 0.106689 93.8578 0.106689H8.02385C4.13821 0.106689 0.988281 3.25663 0.988281 7.14227V21.2134C0.988281 25.099 4.13822 28.249 8.02386 28.249L89.6364 28.249C91.5792 28.249 93.1542 26.674 93.1542 24.7312C93.1542 22.7884 94.7291 21.2134 96.6719 21.2134H97.7617C99.4912 21.2134 100.893 22.6155 100.893 24.3451V28.2489C100.893 28.249 100.893 28.249 100.893 28.249C100.893 28.249 100.893 28.249 100.893 28.2489V7.14226Z"
                                            :fill="item?.related_Project_id?.status ?? '#000'" />
                                        <rect x="95.9688" y="24.0276" width="4.22134" height="4.22134" rx="2.11067"
                                            :fill="item?.related_Project_id?.status ?? '#000'" />
                                    </svg>
                                    
                                    <span class="relative z-20 -bottom-1">
                                        {{item?.related_Project_id?.main_translations?.filter(item =>
                                            item.languages_code?.includes(locale))[0]?.sale_alias}}
                                    </span>
                                </span>
                            </div>
                            <div class="max-w-96">
                                <h2
                                    class="text-white hover:text-blue-400 transition-all font-bold text-2xl md:text-[22px] lg:text-[30px] mb-5">
                                    <NuxtLink
                                        :href="`/${mainPageLink.replace('/', '')}/projects/${item?.related_Project_id?.translations?.filter(item => item.languages_code.includes(locale))[0]?.slug}`">
                                        {{item.related_Project_id?.translations?.filter(item =>
                                            item?.languages_code?.includes(locale))[0]?.title}}
                                    </NuxtLink>
                                </h2>
                                <p class="text-white text-xs md:text-[11px] lg:text-sm mb-5">
                                    {{item.related_Project_id?.translations?.filter(item =>
                                        item?.languages_code?.includes(locale))[0]?.description}}
                                </p>
                                <div class="flex items-center mb-5">
                                    <strong class="text-xl md:text-lg lg:text-2xl text-white mr-[6px]">от ${{
                                        String(item.related_Project_id?.price)?.replace(/\B(?=(\d{3})+(?!\d))/g, " ")
                                    }}</strong>
                                    <span class="text-white/60 text-xs hidden md:block">
                                        {{ $t('including_taxes') }}
                                    </span>
                                </div>
                                <div class="flex">
                                    <NuxtLink
                                        :href="`/${mainPageLink.replace('/', '')}/projects/${item?.related_Project_id?.translations?.filter(item => item.languages_code.includes(locale))[0]?.slug}`"
                                        class="hover:bg-white hover:text-blue-400 transition-all border-white border-[1px] py-[12px] px-5 rounded-[10px] text-white font-bold text-sm md:text-xs lg:text-base mr-7">
                                        {{ $t('more') }}
                                    </NuxtLink>
                                    <div class="flex items-center">
                                        <NuxtImg class="w-3" src="/img/icons/point-white.svg" alt="Image"
                                            loading="lazy" />
                                        <span class="ml-1 text-sm md:text-xs lg:text-sm text-white">
                                            {{ $t('changu') }}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps(['projects']);
const { t, locale } = useI18n()
const projectsData = ref(null);

const mainPageLink = ref('/')

onMounted(async () => {
  projectsData.value = await props.projects; 
});

watchEffect(() => {
  if (typeof window !== 'undefined') {
    onMounted(() => {
      mainPageLink.value = `/${localStorage.getItem('selectedLanguage')?.replace('/', '')}`;
    });
  }
});

</script>

