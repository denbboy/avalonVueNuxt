<template>
    <section class="uslugi pt-[23px] pb-12 md:py-24 relative overflow-hidden">
        <div class="absolute lg:-right-36 top-0 lg:top-auto lg:left-auto lg:bottom-40 -left-14 w-28 lg:w-72 z-[2]">
            <NuxtImg src="/img/icons/vector-logo.svg" class="" alt="vector-logo" loading="lazy" />
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
                            class="opacity-50 w-full absolute object-cover h-full" alt="" loading="lazy" />
                        <div class="bg-gradient-to-t from-blue-600 absolute bottom-0 left-0 w-full h-3/4"></div>
                        <div class="absolute top-0 left-0 w-full h-full p-5 md:p-7 flex flex-col">
                            <div class="block-bottom-point"></div>
                            <div class="flex justify-between mb-auto">
                                <NuxtImg class="w-[90px]" v-if="item.related_Project_id?.logo"
                                    :src="`https://avalon-panel.sonisapps.com/assets/${item.related_Project_id?.logo}`"
                                    alt="" loading="lazy" />
                                <span v-if="item.related_Project_id?.roi_procent"
                                    class="md:px-5 py-2 px-4 bg-[url('./../img/icons/bgd-blue-dor-rd.svg')] bg-no-repeat bg-right-bottom h-fit rounded-tl-xl rounded-bl-xl rounded-tr-xl overflow-hidden text-xs md:text-[11px] lg:text-sm text-white">
                                    {{ item.related_Project_id?.roi_procent }}% {{ $t('sold') }}
                                </span>
                            </div>
                            <div class="max-w-96">
                                <h2 class="text-white hover:text-blue-400 transition-all font-bold text-2xl md:text-[22px] lg:text-[30px] mb-5">
                                    <NuxtLink :href="`/projects/${item.related_Project_id?.id}`">
                                        {{ item.related_Project_id?.translations?.filter(item =>
                                            item?.languages_code?.includes(langStore.lang))[0]?.title }}
                                    </NuxtLink>
                                </h2>
                                <p class="text-white text-xs md:text-[11px] lg:text-sm mb-5">
                                    {{ item.related_Project_id?.translations?.filter(item =>
                                        item?.languages_code?.includes(langStore.lang))[0]?.description }}
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
                                    <NuxtLink :href="`/projects/${item.related_Project_id?.id}`"
                                        class="hover:bg-white hover:text-blue-400 transition-all border-white border-[1px] py-[12px] px-5 rounded-[10px] text-white font-bold text-sm md:text-xs lg:text-base mr-7">
                                        {{ $t('more') }}
                                    </NuxtLink>
                                    <div class="flex items-center">
                                        <NuxtImg class="w-3" src="/img/icons/point-white.svg" alt="" loading="lazy" />
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
const props = defineProps(['projects']);
const langStore = useLangStore();

watch(props, async (newValue) => {
    console.log(newValue.projects);
})

</script>
