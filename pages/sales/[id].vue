<template>

    <Head>
        <Title>
            {{ itemData?.data?.value?.translations?.filter(item =>
                item.languages_code.includes(langStore.lang))[0]?.meta_title }}
        </Title>
        <Meta name="description"
            :content="itemData?.data?.value?.translations?.filter(item => item.languages_code.includes(langStore.lang))[0]?.meta_description" />
    </Head>

    <section class="bg-blue-500 pt-32 md:pt-64 relative overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-screen z-0 opacity-70">
            <div class="bg-gradient-to-t from-blue-500 absolute top-0 left-0 w-full h-full"></div>
        </div>

        <NuxtImg loading="lazy" v-if="itemData?.data?.value?.preview"
            :src="`https://avalon-panel.sonisapps.com/assets/${itemData?.data?.value?.preview}`"
            class="absolute top-0 z-0 opacity-90 w-[600vw] md:w-full min-h-[1000px] h-screen object-cover" alt="" />


        <div class="absolute top-0 z-0 w-[600vw] md:w-full min-h-[1000px] h-screen">
            <SkeletonLoader v-if="itemData?.data?.value?.preview" class="h-full w-full">
                <NuxtImg loading="lazy" v-show="!imageLoaded"
                    :src="`https://avalon-panel.sonisapps.com/assets/${itemData?.data?.value?.preview}`"
                    @load="onImageLoad"
                    ref="image"
                    class="opacity-0 absolute top-0 z-0 w-[600vw] md:w-full min-h-[1000px] h-screen object-cover"
                    alt="" />
                <NuxtImg loading="lazy" v-if="imageLoaded"
                    :src="`https://avalon-panel.sonisapps.com/assets/${itemData?.data?.value?.preview}`"
                    class="absolute top-0 z-0 opacity-90 w-[600vw] md:w-full min-h-[1000px] h-screen object-cover"
                    alt="" />
            </SkeletonLoader>
        </div>

        <div class="bg-gradient-to-t from-blue-500 rotate-180 top-0 from-0% w-full h-[300px] opacity-70 absolute z-10">
        </div>
        <div class="bg-gradient-to-t from-blue-500 top-[calc(1000px_-_700px)] from-20% w-full h-[1000px] absolute z-10">
        </div>

        <div class="absolute -right-36 bottom-36 w-72 h-72 z-10">
            <NuxtImg loading="lazy" src="/img/icons/vector-logo.svg" class="w-full" alt="vector-logo" />
        </div>
        <div class="container relative z-10">

            <div class="pb-14">

                <div class="flex before:rounded-sm items-center">
                    <span
                        class="md:px-5 py-2 px-4 bg-[url('./../img/icons/bgd-blue-dor-rd.svg')] bg-no-repeat bg-right-bottom h-fit rounded-tl-xl rounded-bl-xl rounded-tr-xl overflow-hidden text-xs md:text-sm text-white">
                        Действует до 30 марта 2024
                    </span>
                </div>
                <h1
                    class="btn-primary mb-14 text-white text-[30px] md:text-[55px] lg:text-[65px] font-bold break-words mt-4 leading-9 md:leading-tight md:max-w-[876px]">
                    {{ itemData?.data?.value.translations?.filter(item =>
                        item.languages_code.includes(langStore.lang))[0]?.title }}
                </h1>

                <div class="md:flex justify-between w-full">

                    <div class="text-content max-w-[900px] block w-full"
                        v-html="itemData?.data?.value.translations?.filter(item => item.languages_code.includes(langStore.lang))[0]?.description">
                    </div>

                    <div class="max-w-[508px] mt-14 md:mt-0">
                        <p class="text-base md:text-xl text-white opacity-40 mb-4 md:mb-7">Проекты участвующие в акции
                        </p>

                        <div
                            class="h-[500px] md:h-[600px] relative rounded-3xl overflow-hidden bg-[#111111] hover:bg-[#333] transition-all rounded-br-none">
                            <NuxtImg loading="lazy" src="/img/discounts/image.webp" class="opacity-50" alt="" />
                            <div class="bg-gradient-to-t from-blue-600 absolute bottom-0 left-0 w-full h-3/4"></div>

                            <div class="absolute top-0 left-0 w-full h-full p-5 md:p-7 flex flex-col">
                                <div class="block-bottom-point"></div>

                                <div class="flex justify-between mb-auto">
                                    <NuxtImg loading="lazy" class="w-[90px]" src="/img/icons/icon-club.svg" alt="" />
                                    <span
                                        class="md:px-5 py-2 px-4 bg-[url('./../img/icons/bgd-blue-dor-rd.svg')] bg-no-repeat bg-right-bottom h-fit rounded-tl-xl rounded-bl-xl rounded-tr-xl overflow-hidden text-xs md:text-sm text-white">
                                        80% Продано
                                    </span>
                                </div>
                                <div class="max-w-96">
                                    <h2 class="text-white font-bold text-2xl md:text-3xl mb-5 md:mb-7">
                                        OM | Club House
                                    </h2>
                                    <p class="text-white text-xs md:text-sm mb-5 md:mb-7">
                                        Премиум апартаменты в современном клубном доме. Погрузитесь в уникальную
                                        атмосферу
                                        роскоши и
                                        уюта в центре Чангу.
                                    </p>
                                    <div class="flex items-center mb-5 md:mb-7">
                                        <strong class="text-xl md:text-2xl text-white mr-[6px]">от $120 000</strong>
                                        <span class="text-white/60 text-[12px] hidden md:block">*включая налоги</span>
                                    </div>

                                    <div class="flex">
                                        <NuxtLink href="/projects/123"
                                            class="hover:bg-white hover:text-blue-400 transition-all border-white border-[1px] py-4 px-7 rounded-[10px] text-white font-bold text-sm md:text-base mr-7">
                                            Подробнее
                                        </NuxtLink>
                                        <div class="flex items-center">
                                            <NuxtImg loading="lazy" class="w-3" src="/img/icons/point-white.svg" alt="" />
                                            <span class="ml-1 text-sm text-white">Чангу</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    </section>

    <PagesMainContacts />

    <section class="bg-blue-600 pt-14 pb-24 border-b border-b-white/20">
        <div class="container">
            <div class="">
                <div class="flex justify-between items-center mb-8">
                    <h2 class="text-white font-bold text-[30px]">
                        Другие акции
                    </h2>

                    <div class="w-fit hidden md:flex">
                        <button type="button"
                            class="transition-all opacity-20 hover:opacity-100 sales-button-prev mr-9">
                            <svg width="22" height="24" viewBox="0 0 22 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M4.95971 10.8841L13.5787 2.26518L12 0.686525L0.686291 12.0002L12 23.3139L13.5787 21.7353L4.96009 13.1167L21.6296 13.1167L21.6297 10.8841L4.95971 10.8841Z"
                                    fill="white" />
                            </svg>
                        </button>
                        <button type="button" class="transition-all opacity-20 hover:opacity-100 sales-button-next">
                            <svg width="22" height="24" viewBox="0 0 22 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M17.0403 10.8841L8.42134 2.26518L10 0.686525L21.3137 12.0002L10 23.3139L8.42133 21.7353L17.0399 13.1167L0.370369 13.1167L0.370346 10.8841L17.0403 10.8841Z"
                                    fill="white" />
                            </svg>
                        </button>
                    </div>
                </div>

                <swiper :modules="modules" :slides-per-view="1" :pagination="pagination" :navigation="navigationConfig"
                    :breakpoints="breakpoints" :space-between="50" @slideChange="onSlideChange">

                    <swiper-slide style="height: auto;" v-for="item in salesData?.data?.value" :key="item?.id">
                        <SalesItem bgdColor="blue-600" :item="item" />
                    </swiper-slide>

                </swiper>
            </div>
        </div>
    </section>
</template>

<style scoped>
.text-content blockquote {
    padding-left: 36px;
}

.text-content,
.text-content b {
    color: #fff;
    font-size: 20px;
    margin-bottom: 8px;
    display: block;
}
</style>

<script setup>
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const imageLoaded = ref(false);
const image = ref(null);

function onImageLoad() {
    imageLoaded.value = true;
}

onMounted(() => {
    if (image.value?.complete) {
        imageLoaded.value = true;
    }
});

SwiperCore.use([Navigation, A11y]);

const langStore = useLangStore();
const route = useRoute();

const salesData = await useAsyncData('Sales', () => $fetch('/api/sales'));
const itemData = await useAsyncData('SalesItem', () => $fetch(`/api/sales/${route.params.id}`));

const navigationConfig = {
    nextEl: '.sales-button-next',
    prevEl: '.sales-button-prev',
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
        pagination: false,
    },
};
</script>
