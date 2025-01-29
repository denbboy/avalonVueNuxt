<template>
    <section class="uslugi pt-[23px] pb-12 relative overflow-hidden">
        <div
            class="absolute hidden 2xl:block 2xl:-right-36 top-0 2xl:top-auto 2xl:left-auto min-h-[600px] 2xl:bottom-40 -left-14 w-28 2xl:w-72 z-[2]">
            <NuxtImg loading="lazy" src="/img/icons/vector-logo.svg" class="w-full" alt="vector-logo" />
        </div>
        <div class="container">
            <div class="w-full flex flex-col items-center text-center md:flex-row md:justify-between md:mb-[44px] md:text-start"
                data-aos="fade-up">
                <div class="">
                    <p class="text-white mb-[10px] text-sm md:text-base md:mb-[10px] leading-[100%]">
                        <!-- {{ $t('projects_text') }} -->
                        FUTURE VALUE
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
                class="projects grid flex-col gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 flex-wrap items-center md:justify-between md:flex-row lg:flex-row z-10 relative">

                <div :class="getGridClasses(index)"
                    class="projects-item relative rounded-[14px] !rounded-br-none lg:rounded-3xl overflow-hidden bg-[#111111] lg:min-h-[600px] min-h-[450px]"
                    v-for="(item, index) in projectsStore.projects" :key="item.id">
                    <div class="">
                        <NuxtImg v-if="item?.preview"
                            :src="`https://avalon-panel.sonisapps.com/assets/${item?.preview}?width=470&height=600`"
                            class="opacity-50 w-full absolute object-cover h-full" alt="Image" loading="lazy" />
                        <div class="bg-gradient-to-t from-blue-600 absolute bottom-0 left-0 w-full h-3/4"></div>
                        <div class="absolute top-0 left-0 w-full h-full p-5 md:p-7 flex flex-col">
                            <div class="block-bottom-point"></div>
                            <div class="flex justify-between mb-auto">
                                <NuxtImg class="w-[90px]" v-if="item?.logo"
                                    :src="`https://avalon-panel.sonisapps.com/assets/${item?.logo}`" alt="Image"
                                    loading="lazy" />

                                <span v-if="item?.main_translations?.filter(item =>
                                            item.languages_code.includes(langStore.lang))[0]?.sale_alias"
                                    class="md:px-5 py-2 px-4 bg-[url('./../img/icons/bgd-blue-dor-rd.svg')] bg-no-repeat bg-right-bottom h-fit rounded-tl-xl rounded-bl-xl rounded-tr-xl overflow-hidden text-xs md:text-[11px] lg:text-sm text-white">
                                    <!-- {{ item?.sale_alias }}% {{ $t('sold') }} -->
                                      {{ item?.main_translations?.filter(item =>
                                            item.languages_code.includes(langStore.lang))[0]?.sale_alias }}
                                </span>
                            </div>
                            <div class="max-w-96">
                                <h2
                                    class="text-white hover:text-blue-400 transition-all font-bold text-2xl md:text-[22px] lg:text-[30px] mb-5">
                                    <NuxtLink
                                        :href="`/projects/${item?.translations?.filter(item => item.languages_code.includes(langStore.lang))[0]?.slug}`">
                                        {{ item?.translations?.filter(item =>
                                            item.languages_code.includes(langStore.lang))[0]?.title }}
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
                                        <NuxtImg class="w-3" src="/img/icons/point-white.svg" alt="Image"
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
