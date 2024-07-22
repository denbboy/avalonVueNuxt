<template>
    <section class="uslugi pt-[23px] pb-12 relative overflow-hidden">
        <div class="absolute lg:-right-36 top-0 lg:top-auto lg:left-auto lg:bottom-40 -left-14 w-28 lg:w-72 z-[2]">
            <img src="/assets/img/icons/vector-logo.svg" class="" alt="vector-logo">
        </div>
        <div class="container">
            <div class="w-full flex flex-col items-center text-center md:flex-row md:justify-between md:mb-[44px] md:text-start"
                data-aos="fade-up">
                <div class="">
                    <p class="text-white mb-[10px] text-sm md:text-base md:mb-[10px] leading-[100%]">
                        {{ $t('projects_text') }}
                    </p>
                    <h2 class="text-white text-3xl font-bold md:text-[45px] lg:text-[56px] leading-[100%]">
                        {{ $t('our_projects') }}
                    </h2>
                </div>
                <button @click="handleOpenModal" class="white-button mt-5 mb-7 lg:my-0">
                    {{ $t('get_catalog') }}
                </button>
            </div>

            <div
                class="projects grid flex-col gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex-wrap items-center md:justify-between md:flex-row lg:flex-row z-10 relative">

                <div :class="getGridClasses(index)"
                    class="projects-item relative rounded-[14px] !rounded-br-none lg:rounded-3xl overflow-hidden bg-[#111111] lg:min-h-[500px] min-h-[400px]"
                    v-for="(item, index) in projectsStore.projects" :key="item.id">
                    <div class="">
                        <img :src="`https://avalon-panel.sonisapps.com/assets/${item?.preview}`"
                            class="opacity-50 w-full absolute object-cover h-full" alt="">
                        <div class="bg-gradient-to-t from-blue-600 absolute bottom-0 left-0 w-full h-3/4"></div>
                        <div class="absolute top-0 left-0 w-full h-full p-5 md:p-7 flex flex-col">
                            <div class="block-bottom-point"></div>
                            <div class="flex justify-between mb-auto">
                                <img class="w-[90px]" :src="`https://avalon-panel.sonisapps.com/assets/${item?.logo}`"
                                    alt="">
                                <span v-if="item?.roi_procent"
                                    class="md:px-5 py-2 px-4 bg-[url('./../img/icons/bgd-blue-dor-rd.svg')] bg-no-repeat bg-right-bottom h-fit rounded-tl-xl rounded-bl-xl rounded-tr-xl overflow-hidden text-xs md:text-[11px] lg:text-sm text-white">
                                    {{ item?.roi_procent }}% {{ $t('sold') }}
                                </span>
                            </div>
                            <div class="max-w-96">
                                <h2 class="text-white font-bold text-2xl md:text-[22px] lg:text-[30px] mb-5">
                                    {{ item?.translations?.filter(item =>
                                        item.languages_code.includes(langStore.lang))[0]?.title }}
                                </h2>
                                <p class="text-white text-xs md:text-[11px] lg:text-sm mb-5">
                                    {{ item?.translations?.filter(item =>
                                        item.languages_code.includes(langStore.lang))[0]?.description }}
                                </p>
                                <div class="flex items-center mb-5">
                                    <strong class="text-xl md:text-lg lg:text-2xl text-white mr-[6px]">{{ $t('from') }} ${{
                                        String(item?.price)?.replace(/\B(?=(\d{3})+(?!\d))/g, " ") }}</strong>
                                    <span class="text-white/60 text-xs hidden md:block">
                                        {{ $t('including_taxes') }}
                                    </span>
                                </div>
                                <div class="flex">
                                    <NuxtLink :href="`/projects/${item?.id}`"
                                        class="hover:bg-white hover:text-blue-400 transition-all border-white border-[1px] py-[12px] px-5 rounded-[10px] text-white font-bold text-sm md:text-xs lg:text-base mr-7">
                                        {{ $t('more') }}
                                    </NuxtLink>
                                    <div class="flex items-center">
                                        <img class="w-3" src="/assets/img/icons/point-white.svg" alt="">
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
