<template>

    <Head>
        <Title>
            {{ itemData?.translations?.filter(item => item.languages_code.includes(langStore.lang))[0]?.meta_title }}
        </Title>
        <Meta name="description"
            :content="itemData?.translations?.filter(item => item.languages_code.includes(langStore.lang))[0]?.meta_description" />
    </Head>

    <section class="bg-blue-500 pt-32 md:pt-64 relative">

        <img :src="`https://avalon-panel.sonisapps.com/assets/${itemData?.preview}`"
            class="absolute top-0 z-0 opacity-90 w-[600vw] md:w-full min-h-[1000px] h-screen object-cover" alt="">
        <div class="bg-gradient-to-t from-blue-500 rotate-180 top-0 from-0% w-full h-[300px] opacity-70 absolute z-10">
        </div>
        <div class="bg-gradient-to-t from-blue-500 top-[calc(1000px_-_700px)] from-20% w-full h-[700px] absolute z-10">
        </div>


        <div class="container relative z-10">
            <div class="absolute right-0 bottom-56 w-72 h-72 z-10">
                <img src="/assets/img/icons/vector-logo.svg" alt="vector-logo">
            </div>

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
                    class="text-white text-[30px] font-bold break-words mt-4 leading-9 md:leading-tight md:max-w-[1200px] md:text-[65px]">

                    {{ itemData?.translations?.filter(item => item.languages_code.includes(langStore.lang))[0]?.title }}

                </h1>
                <a href="#"
                    class="rounded-full border-[1px] border-white w-10 h-10 flex items-center justify-center mt-8 mb-14 md:w-14 md:h-14">
                    <img src="/assets/img/icons/socials.svg" class="md:w-6" alt="Soc">
                </a>

                <div
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
                        Другие статьи
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
                    :breakpoints="breakpoints" :space-between="50" @swiper="onSwiper" @slideChange="onSlideChange">

                    <swiper-slide v-for="item in itemsList" :key="item?.id">
                        <ArticlesItem bgdColor="blue-600" :item="item" />
                    </swiper-slide>

                    <div class="swiper-pagination"></div>
                </swiper>
            </div>
        </div>
    </section>
</template>



<style>
.text-content blockquote {
    padding-left: 36px;
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

const { getItems } = useDirectusItems();
const langStore = useLangStore();
const route = useRoute();

// GET OTHER SALES
const itemsList = ref([]);
const fetchArticles = async () => {
    try {
        const items = await getItems({
            collection: "Article",
            params: {
                fields: '*,translations.*'
            },
        });
        itemsList.value = items;
        console.log(items);
    } catch (e) {
        console.error('Error fetching items:', e);
    }
};
onMounted(fetchArticles);
// GET OTHER SALES

// GET POST
const itemData = ref([]);
const fetchItemData = async () => {
    try {
        const items = await getItems({
            collection: `Article/${route.params.id}`,
            params: {
                fields: '*,translations.*'
            },
        });

        itemData.value = items;
        console.log('ITEM_DATA', items);
    } catch (e) {
        console.error('Error fetching items:', e);
    }
};
onMounted(fetchItemData);
// GET POST

const modules = {
    Navigation,
    A11y,
};

const navigationConfig = {
    nextEl: '.news-button-next',
    prevEl: '.news-button-prev',
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
