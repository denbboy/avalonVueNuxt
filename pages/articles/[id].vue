<template>

    <Head>
        <Title>
            {{ itemData?.translations?.filter(item => item.languages_code.includes(langStore.lang))[0]?.meta_title }}
        </Title>
        <Meta name="description"
            :content="itemData?.translations?.filter(item => item.languages_code.includes(langStore.lang))[0]?.meta_description" />
    </Head>

    <section class="bg-blue-500 pt-32 md:pt-64 relative">

        <NuxtImg v-if="itemData?.background" :src="`https://avalon-panel.sonisapps.com/assets/${itemData?.background}`"
            class="absolute top-0 z-0 opacity-90 w-[600vw] md:w-full min-h-[1000px] h-screen object-cover" alt="Image" loading="lazy" />
        <div class="bg-gradient-to-t from-blue-500 rotate-180 top-0 from-0% w-full h-[300px] opacity-70 absolute z-10">
        </div>
        <div class="bg-gradient-to-t from-blue-500 top-[calc(1000px_-_700px)] from-20% w-full h-[1000px] absolute z-10">
        </div>


        <div class="absolute right-0 bottom-56 w-72 h-72 z-10">
            <NuxtImg src="/img/icons/vector-logo.svg" class="w-full" alt="vector-logo" loading="lazy" />
        </div>
        <div class="container relative z-10">

            <div class="pb-14 text-content">
                <div
                    class="flex before:w-[6px] before:rounded-sm before:h-[6px] before:bg-white before:mr-[10px] opacity-60 items-center">
                    <span class="text-white text-sm">
                        {{ new Date(itemData?.date_created).getDate() }} {{ $t(`month${new
                            Date(itemData?.date_created).getMonth()
                            ?? "0" + 1}`) }} {{ new Date(itemData?.date_created).getFullYear() }}
                    </span>
                </div>
                <h1
                    class="text-white text-[30px] font-bold break-words mt-4 leading-9 md:leading-tight md:max-w-[1400px] md:text-[65px]">

                    {{ itemData?.translations?.filter(item => item.languages_code.includes(langStore.lang))[0]?.title }}

                </h1>
                <!-- <a href="#"
                    class="rounded-full border-[1px] border-white w-10 h-10 flex items-center justify-center mt-8 mb-14 md:w-14 md:h-14">
                    <NuxtImg src="/img/icons/socials.svg" class="md:w-6" alt="Soc" loading="lazy" />
                </a> -->

                <div
                class="article-description max-w-[1047px]"
                    v-html="itemData?.translations?.filter(item => item.languages_code.includes(langStore.lang))[0]?.description">
                </div>
            </div>
        </div>
    </section>

    <section class="bg-blue-600 pt-14 z-10">
        <div class="container">
            <div class="">
                <div class="flex justify-between items-center mb-8">
                    <h2 class="text-white font-bold text-[30px]">
                        {{ $t('else_articles') }}
                    </h2>

                    <div class="w-fit hidden md:flex">
                        <button type="button"
                            class="articles-button-prev opacity-20 hover:opacity-100 transition-all mr-9">
                            <svg width="22" height="24" viewBox="0 0 22 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M4.95971 10.8841L13.5787 2.26518L12 0.686525L0.686291 12.0002L12 23.3139L13.5787 21.7353L4.96009 13.1167L21.6296 13.1167L21.6297 10.8841L4.95971 10.8841Z"
                                    fill="white" style="fill:white;fill-opacity:1;" />
                            </svg>
                        </button>
                        <button type="button" class="articles-button-next opacity-20 hover:opacity-100 transition-all">
                            <svg width="22" height="24" viewBox="0 0 22 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M17.0403 10.8841L8.42134 2.26518L10 0.686525L21.3137 12.0002L10 23.3139L8.42133 21.7353L17.0399 13.1167L0.370369 13.1167L0.370346 10.8841L17.0403 10.8841Z"
                                    fill="white" style="fill:white;fill-opacity:1;" />
                            </svg>
                        </button>
                    </div>
                </div>

                <swiper :modules="modules" :slides-per-view="1" :pagination="pagination" :navigation="navigationConfig"
                    :breakpoints="breakpoints" :space-between="50" @slideChange="onSlideChange">

                    <swiper-slide v-for="item in articlesData?.data?.value" :key="item?.id">
                        <ArticlesItem bgdColor="blue-600" :item="item" />
                    </swiper-slide>

                    <div class="swiper-pagination"></div>
                </swiper>
            </div>
        </div>
    </section>
</template>



<style scale>
.text-content blockquote:after {
    content: "";
    position: absolute;
    color: #0E88EC;
    background-image: url('/img/icons/blockquote-icon.svg');
    background-size: 20px;
    background-repeat: no-repeat;
    background-color: #0A4A7F;
    background-position: center;
    transform: translateY(-50%);
    top: 50%;
    left: 4px;
    width: 20px;
    height: 25px;
}
.article-description ol li {
    padding-left: 20px;
    position: relative;
}
.article-description ol li:before {
    content: "";
    background: #0E88EC;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    display: block;
    position: absolute;
    left: 0;
    top: 8px;
}
.article-description h2 {
    font-weight: bold;
    font-size: 28px;
}
.text-content blockquote:before {
    content: "";
    height: 100%;
    position: absolute;
    left: 0;
    width: 1px;
    background: #0E88EC;
    top: 0;
    left: 14px;
}
.text-content blockquote {
    padding-left: 36px;
    position: relative;
}

.text-content {
    color: #fff;
    font-size: 20px;
    display: block;
}

.text-content b,
.text-content li,
.text-content p {
    margin: 20px 0 !important;
}
</style>

<script setup>
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const { getItems } = useDirectusItems();
const langStore = useLangStore();
const route = useRoute();

// GET OTHER SALES
const articlesData = await useAsyncData("Articles", () => $fetch('/api/articles'))
// GET OTHER SALES

// GET POST
const res = await useAsyncData('ArticlesItem', () => $fetch(`/api/articles/${route.params.id}`));
const itemData = res?.data?.value[0]
// GET POST

SwiperCore.use([Navigation, A11y]);

const modules = {
    Navigation,
    A11y,
};

const navigationConfig = {
    nextEl: '.articles-button-next',
    prevEl: '.articles-button-prev',
};

const pagination = {
    el: '.swiper-pagination',
    clickable: true,
};

const breakpoints = {
    768: {
        slidesPerView: 3,
        pagination: false,
    },
    1441: {
        slidesPerView: 4,
        pagination: false,
    },
};


</script>
