<template>
    <main class="overflow-hidden">

        <Head>
            <Title>
                {{ currentPageReqest?.filter(item => item.languages_code.includes(langStore.lang))[0]?.meta_title }}
            </Title>
            <Meta name="description"
                :content="currentPageReqest?.filter(item => item.languages_code.includes(langStore.lang))[0]?.meta_description" />
        </Head>

        <PagesCooperationMain />

        <section id="broker" class="py-[60px] relative z-10 lg:py-[100px]">
            <div class="container">
                <div class="xl:flex xl:flex-row-reverse xl:items-center justify-between gap-6 3xl:gap-[80px] mb-8 xl:mb-20">
                    <div data-aos="fade-left" class="">
                        <h2
                            class="text-3xl text-white font-bold mb-8 md:text-[45px] lg:text-[56px] leading-none md:mb-12">
                            {{ $t('for_brokers') }}
                        </h2>
                        <p class="text-sm text-white mb-8 md:mb-12 md:text-lg">
                            {{ $t('for_brokers_text') }}
                        </p>
                        <button @click="handleOpenModal" class="white-button hidden xl:block">
                            {{ $t('start_cooperation') }}
                        </button>
                    </div>
                    <NuxtImg loading="lazy" data-aos="fade-up"
                        class="xl:max-w-[546px] lg:max-w-[740px] object-cover w-full h-[180px] md:h-[412px] rounded-[20px]"
                        src="/img/cooperation/photo-1.webp" alt="img" />
                </div>
                <div data-aos="fade-up"
                    class="border border-white/20 py-[60px] pl-5 pr-3 rounded-[20px] xl:pt-20 xl:pb-24 xl:pl lg:pl-[120px] lg::pr-[120px]">
                    <h3 class="text-xl md:text-2xl 3xl:text-3xl text-white font-bold mb-[30px] ">
                        <!-- {{ $t('brokers_work_steps') }} -->

                        {{ block1.strings[0].String_id.translations.find(i => i.languages_code.code.includes(langStore.lang)).title }}
                    </h3>
                    <ol class="md:grid md:grid-cols-4  relative  justify-between ">
                        <li class="flex gap-5 md:gap-0 md:flex-col items-center z-10 mb-5 last:mb-0">
                            <div
                                class="md:mx-auto num font-bold text-xs md:text-lg rounded-[10px] text-white flex items-center justify-center bg-blue-400 md:min-w-16 md:w-16 md:h-16 min-w-9 w-9 h-9">
                                1
                            </div>
                            <div class="w-full  justify-center items-center hidden md:flex  overflow-hidden relative ">
                                <span class="bg-blue-400 rounded-[4px] w-[10px] h-[10px] md:mx-auto md:mt-5 mb-8 ">
                                </span>
                                <div
                                    class="hidden md:block h-[1px] absolute bg-white/20 -z-[1] top-[50%] w-screen left-2/4 -translate-y-[6px]">
                                </div>
                            </div>
                            <p class="text-sm md:text-base text-white md:px-1 md:max-w-[295px] md:text-center md:ml-0">
                                <!-- {{ $t('broker_step_1') }} -->
                                  {{ block1.strings[1].String_id.translations.find(i => i.languages_code.code.includes(langStore.lang)).title }}
                            </p>
                        </li>
                        <li class="flex gap-5 md:gap-0 md:flex-col items-center z-10 mb-5 last:mb-0">
                            <div
                                class="md:mx-auto num font-bold text-xs md:text-lg rounded-[10px] text-white flex items-center justify-center bg-blue-400 md:min-w-16 md:w-16 md:h-16 min-w-9 w-9 h-9">
                                2
                            </div>
                            <div class="w-full  justify-center items-center hidden md:flex  overflow-hidden relative ">
                                <span class="bg-blue-400 rounded-[4px] w-[10px] h-[10px] md:mx-auto md:mt-5 mb-8 ">

                                </span>
                                <div
                                    class="hidden md:block h-[1px] absolute bg-white/20 -z-[1] top-[50%] w-screen left-0 -translate-y-[6px]">
                                </div>

                            </div>
                            <p class="text-sm md:text-base text-white md:px-1 md:max-w-[295px] md:text-center md:ml-0">
                                <!-- {{ $t('broker_step_2') }} -->
                                {{ block1.strings[2].String_id.translations.find(i => i.languages_code.code.includes(langStore.lang)).title }}
                            </p>
                        </li>
                        <li class="flex gap-5 md:gap-0 md:flex-col items-center z-10  mb-5 last:mb-0">
                            <div
                                class="md:mx-auto num font-bold text-xs md:text-lg rounded-[10px] text-white flex items-center justify-center bg-blue-400 md:min-w-16 md:w-16 md:h-16 min-w-9 w-9 h-9">
                                3
                            </div>
                            <div class="w-full  justify-center items-center hidden md:flex  overflow-hidden relative ">
                                <span class="bg-blue-400 rounded-[4px] w-[10px] h-[10px] md:mx-auto md:mt-5 mb-8 ">

                                </span>
                                <div
                                    class="hidden md:block h-[1px] absolute bg-white/20 -z-[1] top-[50%] w-screen left-0 -translate-y-[6px]">
                                </div>

                            </div>
                            <p class="text-sm md:text-base text-white md:px-1 md:max-w-[295px] md:text-center md:ml-0">
                                <!-- {{ $t('broker_step_3') }} -->
                                {{ block1.strings[3].String_id.translations.find(i => i.languages_code.code.includes(langStore.lang)).title }}
                            </p>
                        </li>
                        <li class="flex gap-5 md:gap-0 md:flex-col items-center z-10  mb-5 last:mb-0">
                            <div
                                class="md:mx-auto num font-bold text-xs md:text-lg rounded-[10px] text-white flex items-center justify-center bg-blue-400 md:min-w-16 md:w-16 md:h-16 min-w-9 w-9 h-9">
                                4
                            </div>
                            <div class="w-full  justify-center items-center hidden md:flex  overflow-hidden relative ">
                                <span class="bg-blue-400 rounded-[4px] w-[10px] h-[10px] md:mx-auto md:mt-5 mb-8 ">

                                </span>
                                <div
                                    class="hidden md:block h-[1px] absolute bg-white/20 -z-[1] top-[50%] w-screen right-1/2 -translate-y-[6px]">
                                </div>

                            </div>
                            <p class="text-sm md:text-base text-white md:px-1 md:max-w-[295px] md:text-center">
                                <!-- {{ $t('broker_step_4') }} -->
                                {{ block1.strings[4].String_id.translations.find(i => i.languages_code.code.includes(langStore.lang)).title }}
                            </p>
                        </li>
                    </ol>
                </div>
                <button @click="handleOpenModal" class="white-button xl:hidden mt-8">
                    {{ $t('start_cooperation') }}
                </button>
            </div>
        </section>

        <section id="agency" class="py-[60px] lg:py-[100px] bg-blue-600">
            <div class="container">
                <div class="xl:flex xl:flex-row xl:items-center justify-between gap-6 3xl:gap-[80px] mb-8 xl:mb-20">
                    <div data-aos="fade-right" class="">
                        <h2
                            class="text-3xl text-white font-bold mb-8 md:text-[45px] lg:text-[56px] leading-none md:mb-12">
                            <!-- {{ $t('agent_nedv') }} -->
                            {{ block2.strings[0].String_id.translations.find(i => i.languages_code.code.includes(langStore.lang)).title }}
                        </h2>
                        <p class="text-sm text-white mb-8 md:mb-12 md:text-lg">
                            {{ block2.strings[0].String_id.translations.find(i => i.languages_code.code.includes(langStore.lang)).description }}
                        </p>
                        <button @click="handleOpenModal" class="white-button hidden xl:block">
                            {{ $t('start_cooperation') }}
                        </button>
                    </div>
                    <NuxtImg loading="lazy" data-aos="fade-left"
                        class="xl:max-w-[546px] lg:max-w-[740px] object-cover w-full h-[180px] md:h-[412px] rounded-[20px]"
                        :src="block2.strings[0].String_id.translations.find(i => i.languages_code.code.includes(langStore.lang)).img ?? '/img/cooperation/photo-2.webp'" alt="img" />
                </div>
                <div data-aos="fade-up"
                    class="border border-white/20 px-[20px] py-[60px] md:p-[48px] pb-6 3xl:py-[80px] 3xl:px-[120px] rounded-[20px] overflow-hidden">
                    <h3
                        class="text-xl w-fit md:text-2xl 3xl:text-3xl pr-4 text-white font-bold mb-[30px]  relative after:absolute after:top-2/4   after:w-[6px] after:h-[6px] md:after:w-[10px] md:after:h-[10px] after:bg-blue-400 before:w-screen before:left-[100%] before:h-[1px] before:bg-white/20 md:after:rounded-[4px] md:before:mt-[4px] before:mt-[2.5px] before:top-2/4  before:absolute after:left-full  after:rounded-sm">
                        <!-- {{ $t('agency_text_2') }} -->
                        {{ block3.strings[0].String_id.translations.find(i => i.languages_code.code.includes(langStore.lang)).title }}
                    </h3>
                    <ol class="flex flex-col xl:flex-row relative justify-between after:top-[89px] md:gap-5">
                        <li class="flex gap-5 mb-8 last:mb-0 md:mb-0">
                            <div
                                class=" num font-bold text-xs md:text-lg rounded-[10px] text-white flex items-center justify-center bg-blue-400 md:min-w-16 md:w-16 md:h-16 min-w-9 w-9 h-9">
                                <NuxtImg loading="lazy" class="w-3 h-3 md:w-auto md:h-auto" src="/img/icons/white-check.svg" alt="Image" />
                            </div>
                            <p class="text-sm md:text-lg text-white ">
                                <!-- {{ $t('agency_text_3') }} -->
                                {{ block3.strings[1].String_id.translations.find(i => i.languages_code.code.includes(langStore.lang)).title }}
                            </p>
                        </li>
                        <li class="flex gap-5 mb-8 last:mb-0 md:mb-0">
                            <div
                                class=" num font-bold text-xs md:text-lg rounded-[10px] text-white flex items-center justify-center bg-blue-400 md:min-w-16 md:w-16 md:h-16 min-w-9 w-9 h-9">
                                <NuxtImg loading="lazy" class="w-3 h-3 md:w-auto md:h-auto" src="/img/icons/white-check.svg" alt="Image" />
                            </div>
                            <p class="text-sm md:text-lg text-white ">
                                <!-- {{ $t('agency_text_4') }} -->
                                {{ block3.strings[2].String_id.translations.find(i => i.languages_code.code.includes(langStore.lang)).title }}
                            </p>
                        </li>
                        <li class="flex gap-5 mb-8 last:mb-0 md:mb-0">
                            <div
                                class=" num font-bold text-xs md:text-lg rounded-[10px] text-white flex items-center justify-center bg-blue-400 md:min-w-16 md:w-16 md:h-16 min-w-9 w-9 h-9">
                                <NuxtImg loading="lazy" class="w-3 h-3 md:w-auto md:h-auto" src="/img/icons/white-check.svg" alt="Image" />
                            </div>
                            <p class="text-sm md:text-lg text-white ">
                                <!-- {{ $t('agency_text_5') }} -->
                                {{ block3.strings[3].String_id.translations.find(i => i.languages_code.code.includes(langStore.lang)).title }}
                            </p>
                        </li>
                    </ol>
                </div>
                <p data-aos="fade-up" class="hidden md:block text-white text-lg max-w-[892px] mt-12">
                    <!-- {{ $t('agency_text_6') }} -->
                    {{ block2.strings[1].String_id.translations.find(i => i.languages_code.code.includes(langStore.lang)).title }}
                </p>
                <button @click="handleOpenModal" class="white-button xl:hidden mt-8">
                    {{ $t('start_cooperation') }}
                </button>
            </div>
        </section>

        <section id="marketing" class="py-[60px] lg:py-[100px] bg-blue-500">
            <div class="container">
                <div class="xl:flex xl:flex-row-reverse xl:items-center justify-between gap-6 3xl:gap-[80px] mb-8 xl:mb-20">
                    <div data-aos="fade-left" class="">
                        <h2
                            class="text-3xl text-white font-bold mb-8 md:text-[45px] lg:text-[56px] leading-none md:mb-12">
                            {{ $t('marketing') }}
                        </h2>
                        <p class="text-sm text-white mb-8 md:mb-12 md:text-lg">
                            {{ $t('marketing_text') }}
                        </p>
                        <button @click="handleOpenModal" class="white-button hidden xl:block">
                            {{ $t('start_cooperation') }}
                        </button>
                    </div>
                    <NuxtImg loading="lazy" data-aos="fade-right"
                        class="xl:max-w-[546px] lg:max-w-[740px] object-cover w-full h-[180px] md:h-[412px] rounded-[20px]"
                        src="/img/cooperation/photo-3.webp" alt="img" />
                </div>
                <div data-aos="fade-up"
                    class="border border-white/20 px-[20px] py-[60px] md:p-[48px] pb-6 3xl:py-[80px] 3xl:px-[120px] rounded-[20px] overflow-hidden">
                    <h3
                        class="text-xl w-fit md:text-2xl 3xl:text-3xl pr-4 text-white font-bold mb-[30px]  relative after:absolute after:top-2/4   after:w-[6px] after:h-[6px] md:after:w-[10px] md:after:h-[10px] after:bg-blue-400 before:w-screen after:-mt-[2.5px] md:after:-mt-1 before:left-[100%] before:h-[1px] before:bg-white/20 md:after:rounded-[4px] before:top-2/4 before:absolute after:left-full after:rounded-sm">
                        <!-- {{ $t('marketing_coop') }} -->
                        {{ block4.strings[0].String_id.translations.find(i => i.languages_code.code.includes(langStore.lang)).title }}
                    </h3>
                    <ol class="flex flex-col xl:flex-row relative justify-between after:top-[89px] md:gap-5">
                        <li class="flex gap-5 mb-8 last:mb-0 md:mb-0">
                            <div
                                class=" num font-bold text-xs md:text-lg rounded-[10px] text-white flex items-center justify-center bg-blue-400 md:min-w-16 md:w-16 md:h-16 min-w-9 w-9 h-9">
                                <NuxtImg loading="lazy" class="w-3 h-3 md:w-auto md:h-auto" src="/img/icons/white-check.svg" alt="Image" />
                            </div>
                            <p class="text-sm md:text-lg text-white ">
                                <!-- {{ $t('marketing_coop_1') }} -->
                                {{ block4.strings[1].String_id.translations.find(i => i.languages_code.code.includes(langStore.lang)).title }}
                            </p>
                        </li>
                        <li class="flex gap-5 mb-8 last:mb-0 md:mb-0">
                            <div
                                class=" num font-bold text-xs md:text-lg rounded-[10px] text-white flex items-center justify-center bg-blue-400 md:min-w-16 md:w-16 md:h-16 min-w-9 w-9 h-9">
                                <NuxtImg loading="lazy" class="w-3 h-3 md:w-auto md:h-auto" src="/img/icons/white-check.svg" alt="Image" />
                            </div>
                            <p class="text-sm md:text-lg text-white ">
                                <!-- {{ $t('marketing_coop_2') }} -->
                                {{ block4.strings[2].String_id.translations.find(i => i.languages_code.code.includes(langStore.lang)).title }}
                            </p>
                        </li>
                        <li class="flex gap-5 mb-8 last:mb-0 md:mb-0">
                            <div
                                class=" num font-bold text-xs md:text-lg rounded-[10px] text-white flex items-center justify-center bg-blue-400 md:min-w-16 md:w-16 md:h-16 min-w-9 w-9 h-9">
                                <NuxtImg loading="lazy" class="w-3 h-3 md:w-auto md:h-auto" src="/img/icons/white-check.svg" alt="Image" />
                            </div>
                            <p class="text-sm md:text-lg text-white ">
                                <!-- {{ $t('marketing_coop_3') }} -->
                                {{ block4.strings[3].String_id.translations.find(i => i.languages_code.code.includes(langStore.lang)).title }}
                            </p>
                        </li>
                    </ol>
                </div>
                <button @click="handleOpenModal" class="white-button xl:hidden mt-8">
                    {{ $t('start_cooperation') }}
                </button>
            </div>
        </section>

        <section id="partners" class="py-[60px] lg:py-[100px] bg-blue-600">
            <div class="container">
                <div class="xl:flex xl:flex-row md:items-center justify-between gap-6 3xl:gap-[80px] mb-8 xl:mb-20">
                    <div data-aos="fade-right" class="">
                        <h2
                            class="text-3xl text-white font-bold mb-8 md:text-[45px] lg:text-[56px] leading-none md:mb-12">
                            {{ $t('for_partners') }}
                        </h2>
                        <p class="text-sm text-white mb-8 md:mb-12 md:text-lg">
                            {{ $t('for_partners_text') }}
                        </p>
                        <button @click="handleOpenModal" class="white-button hidden xl:block">
                            {{ $t('start_cooperation') }}
                        </button>
                    </div>
                    <NuxtImg loading="lazy" data-aos="fade-up"
                        class="xl:max-w-[546px] lg:max-w-[740px] object-cover w-full h-[180px] md:h-[412px] rounded-[20px]"
                        src="/img/cooperation/photo-4.webp" alt="img" />
                </div>
                <div data-aos="fade-up"
                    class="border border-white/20 py-[60px] pl-5 pr-3 rounded-[20px] xl:pt-20 xl:pb-24 xl:pl lg:pl-[120px] lg::pr-[120px]">
                    <h3 class="text-xl md:text-2xl 3xl:text-3xl text-white font-bold mb-[30px]">
                        <!-- {{ $t('for_partners_steps') }} -->
                        {{ block5.strings[0].String_id.translations.find(i => i.languages_code.code.includes(langStore.lang)).title }}
                    </h3>
                    <ol class="md:grid md:grid-cols-4  relative  justify-between ">
                        <li class="flex gap-5 md:gap-0 md:flex-col items-center z-10 mb-5 last:mb-0">
                            <div
                                class="md:mx-auto num font-bold text-xs md:text-lg rounded-[10px] text-white flex items-center justify-center bg-blue-400 md:min-w-16 md:w-16 md:h-16 min-w-9 w-9 h-9">
                                1
                            </div>
                            <div class="w-full  justify-center items-center hidden md:flex  overflow-hidden relative ">
                                <span class="bg-blue-400 rounded-[4px] w-[10px] h-[10px] md:mx-auto md:mt-5 mb-8 ">
                                </span>
                                <div
                                    class="hidden md:block h-[1px] absolute bg-white/20 -z-[1] top-[50%] w-screen left-2/4 -translate-y-[6px]">
                                </div>
                            </div>
                            <p class="text-sm md:text-base text-white md:px-1 md:max-w-[295px] md:text-center md:ml-0">
                                <!-- {{ $t('for_partners_step_1') }} -->
                                {{ block5.strings[1].String_id.translations.find(i => i.languages_code.code.includes(langStore.lang)).title }}
                            </p>
                        </li>
                        <li class="flex gap-5 md:gap-0 md:flex-col items-center z-10 mb-5 last:mb-0">
                            <div
                                class="md:mx-auto num font-bold text-xs md:text-lg rounded-[10px] text-white flex items-center justify-center bg-blue-400 md:min-w-16 md:w-16 md:h-16 min-w-9 w-9 h-9">
                                2
                            </div>
                            <div class="w-full  justify-center items-center hidden md:flex  overflow-hidden relative ">
                                <span class="bg-blue-400 rounded-[4px] w-[10px] h-[10px] md:mx-auto md:mt-5 mb-8 ">

                                </span>
                                <div
                                    class="hidden md:block h-[1px] absolute bg-white/20 -z-[1] top-[50%] w-screen left-0 -translate-y-[6px]">
                                </div>

                            </div>
                            <p class="text-sm md:text-base text-white md:px-1 md:max-w-[295px] md:text-center md:ml-0">
                                <!-- {{ $t('for_partners_step_2') }} -->
                                {{ block5.strings[2].String_id.translations.find(i => i.languages_code.code.includes(langStore.lang)).title }}
                            </p>
                        </li>
                        <li class="flex gap-5 md:gap-0 md:flex-col items-center z-10  mb-5 last:mb-0">
                            <div
                                class="md:mx-auto num font-bold text-xs md:text-lg rounded-[10px] text-white flex items-center justify-center bg-blue-400 md:min-w-16 md:w-16 md:h-16 min-w-9 w-9 h-9">
                                3
                            </div>
                            <div class="w-full  justify-center items-center hidden md:flex  overflow-hidden relative ">
                                <span class="bg-blue-400 rounded-[4px] w-[10px] h-[10px] md:mx-auto md:mt-5 mb-8 ">

                                </span>
                                <div
                                    class="hidden md:block h-[1px] absolute bg-white/20 -z-[1] top-[50%] w-screen left-0 -translate-y-[6px]">
                                </div>

                            </div>
                            <p class="text-sm md:text-base text-white md:px-1 md:max-w-[295px] md:text-center md:ml-0">
                                <!-- {{ $t('for_partners_step_3') }} -->
                                {{ block5.strings[3].String_id.translations.find(i => i.languages_code.code.includes(langStore.lang)).title }}
                            </p>
                        </li>
                        <li class="flex gap-5 md:gap-0 md:flex-col items-center z-10  mb-5 last:mb-0">
                            <div
                                class="md:mx-auto num font-bold text-xs md:text-lg rounded-[10px] text-white flex items-center justify-center bg-blue-400 md:min-w-16 md:w-16 md:h-16 min-w-9 w-9 h-9">
                                4
                            </div>
                            <div class="w-full  justify-center items-center hidden md:flex  overflow-hidden relative ">
                                <span class="bg-blue-400 rounded-[4px] w-[10px] h-[10px] md:mx-auto md:mt-5 mb-8 ">

                                </span>
                                <div
                                    class="hidden md:block h-[1px] absolute bg-white/20 -z-[1] top-[50%] w-screen right-1/2 -translate-y-[6px]">
                                </div>

                            </div>
                            <p class="text-sm md:text-base text-white md:px-1 md:max-w-[295px] md:text-center">
                                <!-- {{ $t('for_partners_step_4') }} -->
                                {{ block5.strings[4].String_id.translations.find(i => i.languages_code.code.includes(langStore.lang)).title }}
                            </p>
                        </li>
                    </ol>
                </div>
                <button @click="handleOpenModal" class="white-button xl:hidden mt-8">
                    {{ $t('start_cooperation') }}
                </button>
            </div>
        </section>

        <div class="mt-4">
            <PagesMainProjects />
        </div>

    </main>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import useFetchWithCache from '~/hooks/useFetchWithCache';
import { useBlocksStore } from '~/stores/functions/blocks';

const blocks = await useFetchWithCache('/api/blocks')

const block1 = await blocks.value.find(i => i.id === 15)
const block2 = await blocks.value.find(i => i.id === 16)
const block3 = await blocks.value.find(i => i.id === 17)
const block4 = await blocks.value.find(i => i.id === 19)
const block5 = await blocks.value.find(i => i.id === 21)


// Состояние и сторы
const langStore = useLangStore();
const pagesStore = usePagesStore();
const modalsStore = useModalsStore();
const currentPageReqest = ref([]);

// Наблюдение за изменением страницы
watchEffect(() => {
    currentPageReqest.value = pagesStore?.pagesList?.filter(item => item.slug === 'cooperation')[0]?.translations;
});

// Конфигурация Swiper
const modules = {
    navigation: true,
    a11y: true,
    pagination: true,
};

const navigationConfig = {
    nextEl: '.button-next',
    prevEl: '.button-prev',
};

const pagination = {
    el: '.swiper-pagination',
    clickable: true,
};

const breakpoints = {
    768: {
        slidesPerView: 2,
        pagination: false,
    },
    1280: {
        slidesPerView: 3,
    },
    1441: {
        spaceBetween: 50,
    },
};

// Функция открытия модального окна
const handleOpenModal = () => {
    modalsStore.addModal('vacancy');
};


const pageDataFetch = await useAsyncData("Pages", () => $fetch('/api/pages'))

const pageData = pageDataFetch.data.value.filter(item => item.slug === 'cooperation')[0].translations?.filter(item => item?.languages_code?.includes(langStore?.lang))[0]
const pageMetaTitle = pageData?.meta_title ?? ""
const pageMetaDescription = pageData?.meta_description ?? ""

useHead({
  title: pageMetaTitle,
  meta: [
    { name: 'description', content: pageMetaDescription }
  ],
})

</script>
