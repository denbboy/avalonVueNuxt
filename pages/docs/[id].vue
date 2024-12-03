<template>
    <Head>
        <Title>
            {{ currentPageInfo?.filter(item => item.languages_code.includes(langStore.lang))[0]?.meta_title }}
        </Title>
        <Meta name="description"
            :content="currentPageInfo?.filter(item => item.languages_code.includes(langStore.lang))[0]?.meta_description" />
    </Head>

    <section class="pb-24 relative bg-blue-500 overflow-hidden">

        <div class="bg-gradient-to-t from-blue-500 from-60% lg:from-60%  w-full h-[2000px] absolute z-10"></div>

        <NuxtImg loading="lazy" class="absolute top-0 z-0 opacity-40 w-[600vw] max-w-max md:w-full min-h-[1000px] h-screen object-cover"
            src="/img/career/img.webp" alt="Image" />

        <div class="container mx-auto relative z-20 pt-32 md:pt-64">
            <h1 data-aos="fade-up"
                class="md:text-5xl lg:text-6xl text-3xl text-white font-normalidad font-bold mb-5 md:mb-12">
                {{ currentPageInfo?.filter(item => item.languages_code.includes(langStore.lang))[0]?.title }}
            </h1>
            <div data-aos="fade-up" data-aos-delay="100" class="text-content justify-between items-center mb-10 lg:mb-48" v-html="description" />
                <!-- <p class="md:text-lg text-white text-sm mb-7"  /> -->
            <!-- </div> -->
        </div>

        <div class="absolute -right-[72px] top-[250px] w-36 z-10">
            <NuxtImg loading="lazy" src="/img/icons/vector-logo.svg" class="w-full" alt="vector-logo" />
        </div>

    </section>
</template>

<style>
    .text-content p {
        color: white;
        font-size: 1.125rem /* 18px */;
        line-height: 1.75rem /* 28px */;
        margin-bottom: 1.75rem
    }
</style>

<script setup>
import { usePagesStore } from '~/stores/functions/pages';

const { id } = useRoute().params;

// const currentPageInfo = ref({});
const pagesStore = usePagesStore();
const langStore = useLangStore();

const pageDataFetch = await useAsyncData("Pages", () => $fetch('/api/pages'))

const currentPageInfo = await pageDataFetch.data.value?.filter(item => item.slug === id)[0]?.translations


const description = await currentPageInfo?.filter(item => item.languages_code.includes(langStore.lang))[0]?.description


const pageData = pageDataFetch.data.value.filter(item => item.slug === id)[0].translations?.filter(item => item?.languages_code?.includes(langStore?.lang))[0]
const pageMetaTitle = pageData?.meta_title ?? ""
const pageMetaDescription = pageData?.meta_description ?? ""

useHead({
  title: pageMetaTitle,
  meta: [
    { name: 'description', content: pageMetaDescription }
  ],
})

</script>
