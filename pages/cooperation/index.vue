<template>
    <main class="overflow-hidden">

        <Head>
            <Title>
                {{currentPageReqest?.filter(item => item.languages_code.includes(langStore.lang))[0]?.meta_title}}
            </Title>
            <Meta name="description"
                :content="currentPageReqest?.filter(item => item.languages_code.includes(langStore.lang))[0]?.meta_description" />
        </Head>

        <PagesCooperationMain :cooperationFetch="cooperationFetch" />

        <section v-for="item in cooperationFetch.data.value" :id="item.id"
            class="[&:nth-child(odd)]:bg-blue-600 [&:nth-child(even)_.text-photo]:flex-row-reverse [&:nth-child(even)]:bg-blue-500 [&:nth-child(2)]:!bg-transparent py-[60px] relative z-10 lg:py-[100px]">
            <div class="container">
                <div class="xl:flex text-photo xl:items-center justify-between gap-6 3xl:gap-[80px] mb-8 xl:mb-20">
                    <div data-aos="fade-right" class="w-full">
                        <h2
                            class="text-3xl text-white font-bold mb-8 md:text-[45px] lg:text-[56px] leading-none md:mb-12">
                            <!-- {{ $t('agent_nedv') }} -->
                            {{item.translations.find(i => i.languages_code.includes(langStore.lang)).title}}
                        </h2>
                        <p class="text-sm text-white mb-8 md:mb-12 md:text-lg"
                            v-html="item.translations.find(i => i.languages_code.includes(langStore.lang)).description">
                        </p>
                        <button @click="handleOpenModal(item.translations.find(i => i.languages_code.includes(langStore.lang)).title)" class="white-button hidden xl:block">
                            {{ $t('start_cooperation') }}
                        </button>
                    </div>
                    <NuxtImg loading="lazy" data-aos="fade-left"
                        class="xl:max-w-[546px] lg:max-w-[740px] object-cover w-full h-[180px] md:h-[412px] rounded-[20px]"
                        :src="'https://api.avalonbali.com/assets/' + item.photo" alt="img" />
                </div>
                <div data-aos="fade-up"
                    class="border border-white/20 px-[20px] py-[60px] md:p-[48px] pb-6 3xl:py-[80px] 3xl:px-[120px] rounded-[20px] overflow-hidden">
                    <h3
                        class="text-xl w-fit md:text-2xl 3xl:text-3xl pr-4 text-white font-bold mb-[30px]  relative after:absolute after:top-2/4 after:w-[6px] md:after:-mt-[4.5px] after:h-[6px] md:after:w-[10px] md:after:h-[10px] after:bg-blue-400 before:w-screen before:left-[100%] before:h-[1px] before:bg-white/20 md:after:rounded-[4px] md:before:mt-[0px] before:mt-[2.5px] before:top-2/4 before:absolute after:left-full after:rounded-sm">
                        {{item.translations.find(i => i.languages_code.includes(langStore.lang)).subtitle}}
                    </h3>
                    <ol v-if="item.type !== 'default'"
                        class="flex flex-col xl:flex-row relative justify-between after:top-[89px] md:gap-5">
                        <li class="flex gap-5 mb-8 last:mb-0 md:mb-0">
                            <div
                                class=" num font-bold text-xs md:text-lg rounded-[10px] text-white flex items-center justify-center bg-blue-400 md:min-w-16 md:w-16 md:h-16 min-w-9 w-9 h-9">
                                <img loading="lazy" class="w-3 h-3 md:w-auto md:h-auto" src="/img/icons/white-check.svg"
                                    alt="Image" />
                            </div>
                            <p class="text-sm md:text-lg text-white ">
                                {{item.translations.find(i =>
                                    i.languages_code.includes(langStore.lang)).first_subtitle_text }}
                            </p>
                        </li>
                        <li class="flex gap-5 mb-8 last:mb-0 md:mb-0">
                            <div
                                class=" num font-bold text-xs md:text-lg rounded-[10px] text-white flex items-center justify-center bg-blue-400 md:min-w-16 md:w-16 md:h-16 min-w-9 w-9 h-9">
                                <img loading="lazy" class="w-3 h-3 md:w-auto md:h-auto" src="/img/icons/white-check.svg"
                                    alt="Image" />
                            </div>
                            <p class="text-sm md:text-lg text-white ">
                                {{item.translations.find(i =>
                                    i.languages_code.includes(langStore.lang)).second_subtitle_text }}
                            </p>
                        </li>
                        <li class="flex gap-5 mb-8 last:mb-0 md:mb-0">
                            <div
                                class=" num font-bold text-xs md:text-lg rounded-[10px] text-white flex items-center justify-center bg-blue-400 md:min-w-16 md:w-16 md:h-16 min-w-9 w-9 h-9">
                                <img loading="lazy" class="w-3 h-3 md:w-auto md:h-auto" src="/img/icons/white-check.svg"
                                    alt="Image" />
                            </div>
                            <p class="text-sm md:text-lg text-white ">
                                {{item.translations.find(i =>
                                    i.languages_code.includes(langStore.lang)).third_subtitle_text }}
                            </p>
                        </li>
                    </ol>
                    <ol v-else class="md:grid md:grid-cols-4  relative  justify-between ">
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
                                {{item.translations.find(i =>
                                    i.languages_code.includes(langStore.lang)).first_subtitle_text }}
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
                                {{item.translations.find(i =>
                                    i.languages_code.includes(langStore.lang)).second_subtitle_text }}
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
                                {{item.translations.find(i =>
                                    i.languages_code.includes(langStore.lang)).third_subtitle_text }}
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
                                {{item.translations.find(i =>
                                    i.languages_code.includes(langStore.lang)).fourth_subtitle_text }}
                            </p>
                        </li>
                    </ol>
                </div>
                <p data-aos="fade-up" class="hidden md:block text-white text-lg max-w-[892px] mt-12">
                    <!-- {{ $t('agency_text_6') }} -->
                    <!-- {{ block2.strings[1].String_id.translations.find(i => i.languages_code.code.includes(langStore.lang)).title }} -->
                </p>
                <!-- <button @click="handleOpenModal" class="white-button xl:hidden mt-8">
                    {{ $t('start_cooperation') }}
                </button> -->
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
const toolkitStore = useToolkit();

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
const handleOpenModal = (title) => {
    modalsStore.addModal('vacancy');
    const router = useRouter()
    const route = useRoute()

    function addSearchParam(key, value) {
        const newQuery = { ...route.query, [key]: value }
        router.replace({ query: newQuery })
    }

    addSearchParam('title', title)
};

const { t, locale } = useI18n()

const cooperationFetch = await useAsyncData("Cooperation", () => $fetch('/api/cooperation'))
const pageDataFetch = await useAsyncData("Pages", () => $fetch('/api/pages'))

const pageData = pageDataFetch.data.value.filter(item => item.slug === 'cooperation')[0].translations?.filter(item => item?.languages_code?.includes(locale.value))[0]
const pageMetaTitle = pageData?.meta_title ?? ""
const pageMetaDescription = pageData?.meta_description ?? ""

useHead({
    title: pageMetaTitle,
    meta: [
        { name: 'description', content: pageMetaDescription }
    ],
})

</script>
