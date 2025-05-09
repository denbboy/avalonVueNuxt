<script setup>
import { usePagesStore } from './../stores/functions/pages';
import { ref, watchEffect } from 'vue';

const langStore = useLangStore();
const toolkitStore = useToolkit();
const pagesStore = usePagesStore();
const currentPageReqest = ref([]);

watchEffect(() => {
    currentPageReqest.value = pagesStore?.pagesList?.filter(item => item.slug === 'career')[0]?.translations
});

const { t, locale } = useI18n()

const pageDataFetch = await useAsyncData("Pages", () => $fetch('/api/pages'))

const pageData = pageDataFetch.data?.value?.filter(item => item.slug === 'career')[0].translations?.filter(item => item.languages_code?.includes(locale.value))[0]
const pageMetaTitle = pageData?.meta_title ?? ""
const pageMetaDescription = pageData?.meta_description ?? ""

useHead({
    title: pageMetaTitle,
    meta: [
        { name: 'description', content: pageMetaDescription }
    ],
})

</script>

<template>

    <Head>
        <Title>
            {{currentPageReqest?.filter(item => item.languages_code.includes(langStore.lang))[0]?.meta_title}}
        </Title>
        <Meta name="description"
            :content="currentPageReqest?.filter(item => item.languages_code.includes(langStore.lang))[0]?.meta_description" />
    </Head>

    <section class="pb-24 relative bg-blue-500 overflow-hidden">
        <div class="absolute lg:-right-36 top-0 lg:top-96 lg:left-auto lg:bottom-40 -left-14 w-28 lg:w-72 z-[11]">
            <img src="/img/icons/vector-logo.svg" class="w-full" alt="vector-logo" loading="lazy" />
        </div>
        <div class="absolute lg:-left-36 top-0 lg:top-52 lg:right-auto lg:bottom-40 -left-14 w-28 lg:w-72 z-[11]">
            <img src="/img/icons/vector-logo.svg" class="w-full" alt="vector-logo" loading="lazy" />
        </div>

        <div class="bg-gradient-to-t from-blue-500 from-60% lg:from-60%  w-full h-[2000px] absolute z-10"></div>

        <NuxtImg class="absolute top-0 z-0 opacity-40 w-[600vw] h-screen min-w-[100vw] object-cover max-w-max md:w-full"
            :src="'https://api.avalonbali.com/assets/' + toolkitStore.settings.header_img" alt="Image"
            loading="lazy" />

        <div class="container mx-auto relative z-20 pt-32 md:pt-64">
            <h1 data-aos="fade-up"
                class="md:text-[55px] lg:text-[65px] text-3xl text-white font-normalidad font-bold mb-5 md:mb-12">
                {{currentPageReqest?.filter(item => item.languages_code.includes(langStore.lang))[0]?.title}}
            </h1>
            <div data-aos="fade-up" data-aos-delay="100"
                class="*:text-white justify-between items-center mb-10 lg:mb-48">
                <div class="md:text-lg text-white text-sm mb-7 max-w-[548px]"
                    v-html="currentPageReqest?.filter(item => item.languages_code.includes(langStore.lang))[0]?.description">
                </div>

                <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_670_12563)">
                        <path class="animate-fade-2s"
                            d="M0.498793 14.7875C0.497841 14.623 0.529371 14.4599 0.591577 14.3076C0.653784 14.1553 0.745441 14.0168 0.861294 13.9C0.977497 13.7829 1.11575 13.6899 1.26807 13.6264C1.42039 13.5629 1.58378 13.5303 1.74879 13.5303C1.91381 13.5303 2.07719 13.5629 2.22951 13.6264C2.38184 13.6899 2.52009 13.7829 2.63629 13.9L12.8488 24.1125C13.5519 24.8148 14.505 25.2092 15.4988 25.2092C16.4925 25.2092 17.4457 24.8148 18.1488 24.1125L28.3613 13.9C28.4778 13.7835 28.6162 13.691 28.7685 13.6279C28.9208 13.5649 29.084 13.5324 29.2488 13.5324C29.5817 13.5324 29.9009 13.6646 30.1363 13.9C30.3717 14.1354 30.5039 14.4546 30.5039 14.7875C30.5039 15.1204 30.3717 15.4396 30.1363 15.675L19.9238 25.8875C19.3432 26.4696 18.6535 26.9313 17.8942 27.2464C17.1349 27.5615 16.3209 27.7237 15.4988 27.7237C14.6767 27.7237 13.8627 27.5615 13.1034 27.2464C12.3441 26.9313 11.6544 26.4696 11.0738 25.8875L0.861294 15.675C0.745441 15.5582 0.653784 15.4197 0.591577 15.2674C0.529371 15.1151 0.497841 14.952 0.498793 14.7875Z"
                            fill="white" />
                        <path class="animate-fade-1s"
                            d="M0.498793 2.28764C0.497841 2.12313 0.529371 1.96006 0.591577 1.80776C0.653784 1.65546 0.745441 1.51694 0.861294 1.40014C0.977497 1.28298 1.11575 1.18999 1.26807 1.12653C1.42039 1.06307 1.58378 1.03039 1.74879 1.03039C1.91381 1.03039 2.07719 1.06307 2.22951 1.12653C2.38184 1.18999 2.52009 1.28298 2.63629 1.40014L14.6113 13.3876C14.7275 13.5048 14.8657 13.5978 15.0181 13.6613C15.1704 13.7247 15.3338 13.7574 15.4988 13.7574C15.6638 13.7574 15.8272 13.7247 15.9795 13.6613C16.1318 13.5978 16.2701 13.5048 16.3863 13.3876L28.3613 1.40014C28.5967 1.16476 28.9159 1.03253 29.2488 1.03253C29.5817 1.03253 29.9009 1.16476 30.1363 1.40014C30.3717 1.63552 30.5039 1.95477 30.5039 2.28764C30.5039 2.62052 30.3717 2.93976 30.1363 3.17514L18.1488 15.1501C17.4457 15.8524 16.4925 16.2468 15.4988 16.2468C14.505 16.2468 13.5519 15.8524 12.8488 15.1501L0.861294 3.17514C0.745441 3.05834 0.653784 2.91982 0.591577 2.76753C0.529371 2.61523 0.497841 2.45215 0.498793 2.28764Z"
                            fill="white" />
                    </g>
                    <defs>
                        <clipPath id="clip0_670_12563">
                            <rect width="30" height="30" fill="white" transform="translate(30.5) rotate(90)" />
                        </clipPath>
                    </defs>
                </svg>
            </div>


            <PagesCareerItemsList />
        </div>

    </section>
</template>