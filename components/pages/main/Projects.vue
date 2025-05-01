<template>
    <section class="uslugi pt-[23px] pb-12 relative overflow-hidden">
        <div
            class="absolute hidden 2xl:block 2xl:-right-36 top-0 2xl:top-auto 2xl:left-auto min-h-[600px] 2xl:bottom-40 -left-14 w-28 2xl:w-72 z-[2]">
            <img loading="lazy" src="/img/icons/vector-logo.svg" class="w-full" alt="vector-logo" />
        </div>
        <div class="container">
            <div class="w-full flex flex-col items-center text-center md:flex-row md:justify-between md:mb-[44px] md:text-start"
                data-aos="fade-up">
                <div class="">
                    <p class="text-white mb-[10px] text-sm md:text-base md:mb-[10px] leading-[100%]">
                        <!-- {{ $t('projects_text') }} -->
                        FUTURE VALUE
                    </p>
                    <h2
                        class="text-white text-3xl font-bold md:text-[45px] lg:ml-[-2.3px] lg:text-[56px] leading-[100%]">
                        {{ $t('our_projects') }}
                    </h2>
                </div>
                <button @click="handleOpenModal" class="white-button mt-5 mb-7 lg:my-0">
                    {{ $t('get_catalog') }}
                </button>
            </div>

            <div
                class="projects grid flex-col gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 flex-wrap items-center md:justify-between md:flex-row lg:flex-row z-10 relative">

                <div :class="getGridClasses(index)"
                    class="projects-item group relative rounded-[14px] !rounded-br-none lg:rounded-3xl overflow-hidden bg-[#111111] transition-all lg:min-h-[600px] min-h-[450px] hover:bg-transparent"
                    v-for="(item, index) in projectsStore.projects" :key="item.id">
                    <div class="">
                        <NuxtImg v-if="item?.preview"
                            :src="`https://api.avalonbali.com/assets/${item?.preview}?width=470&height=600`"
                            class="prev-img w-full h-full absolute object-cover opacity-50 transition-opacity duration-300 group-hover:opacity-100" alt="Image" loading="lazy" />
                        <div class="bg-gradient-to-t from-blue-600 absolute bottom-0 left-0 w-full h-3/4"></div>
                        <div class="absolute top-0 left-0 w-full h-full p-5 md:p-7 flex flex-col">
                            <div class="block-bottom-point"></div>
                            <div class="flex justify-between mb-auto">
                                <NuxtImg class="w-[90px]" v-if="item?.logo"
                                    :src="`https://api.avalonbali.com/assets/${item?.logo}?width=90&height=120&format=webp`" alt="Image"
                                    loading="lazy" />

                                <span v-if="item?.main_translations?.filter(item =>
                                    item.languages_code?.includes(langStore.lang))[0]?.sale_alias"
                                    class="md:px-5 py-2 px-4 bg-no-repeat relative bg-right-bottom h-[45px] w-fit rounded-tl-xl rounded-bl-xl rounded-tr-xl overflow-hidden text-xs md:text-[11px] lg:text-sm text-white">

                                    <svg class="absolute w-full h-full top-0 left-0 right-0"
                                        viewBox="0 0 101 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M100.893 7.14226C100.893 3.25662 97.7435 0.106689 93.8578 0.106689H8.02385C4.13821 0.106689 0.988281 3.25663 0.988281 7.14227V21.2134C0.988281 25.099 4.13822 28.249 8.02386 28.249L89.6364 28.249C91.5792 28.249 93.1542 26.674 93.1542 24.7312C93.1542 22.7884 94.7291 21.2134 96.6719 21.2134H97.7617C99.4912 21.2134 100.893 22.6155 100.893 24.3451V28.2489C100.893 28.249 100.893 28.249 100.893 28.249C100.893 28.249 100.893 28.249 100.893 28.2489V7.14226Z"
                                            :fill="item?.status" />
                                        <rect x="95.9688" y="24.0276" width="4.22134" height="4.22134" rx="2.11067"
                                            :fill="item?.status" />
                                    </svg>

                                    <span class="relative z-20 -bottom-1">
                                        {{item?.main_translations?.filter(item =>
                                            item.languages_code?.includes(langStore.lang))[0]?.sale_alias}}
                                    </span>
                                </span>

                            </div>
                            <div class="max-w-96">
                                <h2
                                    class="text-white hover:text-blue-400 transition-all font-bold text-2xl md:text-[22px] lg:text-[30px] mb-5">
                                    <NuxtLink
                                        :href="`/projects/${item?.translations?.filter(item => item.languages_code.includes(langStore.lang))[0]?.slug}`">
                                        {{item?.translations?.filter(item =>
                                            item.languages_code.includes(langStore.lang))[0]?.title}}
                                    </NuxtLink>
                                </h2>
                                <div class="text-white text-xs md:text-[11px] lg:text-sm mb-5 line-clamp-3" v-html="item?.translations?.filter(item =>
                                    item.languages_code.includes(langStore.lang))[0]?.description">
                                </div>
                                <div class="flex items-center mb-5">
                                    <strong class="text-xl md:text-lg lg:text-2xl text-white mr-[6px]">{{ $t('from') }}
                                        ${{
                                            String(item?.price)?.replace(/\B(?=(\d{3})+(?!\d))/g, " ") }}</strong>
                                    <span class="text-white/60 text-xs hidden md:block">
                                        {{ $t('including_taxes') }}
                                    </span>
                                </div>

                                <div class="flex">
                                    <NuxtLink
                                        :href="`/projects/${item?.translations?.filter(item => item.languages_code.includes(langStore.lang))[0]?.slug}`"
                                        class="hover:bg-white hover:text-blue-400 transition-all border-white border-[1px] py-[12px] px-5 rounded-[10px] text-white font-bold text-sm md:text-xs lg:text-base mr-7">
                                        {{ $t('more') }}
                                    </NuxtLink>
                                    <div v-if="item?.location_name" class="flex items-center">
                                        <img class="w-3" src="/img/icons/point-white.svg" alt="Image"
                                            loading="lazy" />
                                        <span class="ml-1 text-sm md:text-xs lg:text-sm text-white">
                                            {{ item?.location_name }}
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

<style>
/* Если 2 карточки в ряду */
@media (min-width: 640px) and (max-width: 1440px) { /* sm и md */
  .projects > *:nth-child(3n) {
    grid-column: span 2; /* Растягиваем 3-й элемент на 2 колонки */
  }
}

/* Если 3 карточки в ряду */
@media (min-width: 1441px) { /* lg и выше */
  .projects > *:nth-child(4n) {
    grid-column: span 3; /* Растягиваем 4-й элемент на 3 колонки */
  }
}

</style>

<script setup>
const modalsStore = useModalsStore()
const projectsStore = useProjectsStore();
const langStore = useLangStore();

const handleOpenModal = () => {
    modalsStore.addModal("presentation")
}


const getGridClasses = (index) => {
    const projectCount = projectsStore.projects.length;
    const lastItemIndex = projectCount - 1;
    const columns = 3;
    const columnPosition = (projectCount % columns) || columns;
    const isLastRowIncomplete = projectCount % columns > 0;

    if (index === lastItemIndex && isLastRowIncomplete) {
        return `col-start-${columnPosition} col-end-${columns + 1}`;
    }

    return '';
};

</script>


<style scoped>
.col-start-2 {
    grid-column-start: 2;
}

.col-start-3 {
    grid-column-start: 3;
}

.col-start-4 {
    grid-column-start: 4;
}

.col-end-4 {
    grid-column-end: 4;
}
</style>
