<template>
    <section class="pb-24 relative bg-blue-500 overflow-hidden">
        <div class="bg-gradient-to-t from-blue-500 from-70% lg:from-70%  w-full h-[2000px] absolute z-10"></div>

        <NuxtImg class="absolute top-0 z-0 opacity-40 w-[600vw] max-w-max md:w-full min-h-[1000px] h-screen object-cover"
            src="/assets/img/news/news-bgd.jpg" alt="Image" loading="lazy" />

        <div class="container mx-auto relative z-20 pt-32 md:pt-64">
            <h1 class="text-[30px] md:text-[55px] lg:text-[65px] text-white font-normalidad font-bold mb-5"
                data-aos="fade-up">Статьи</h1>
            <div class="md:flex justify-between items-center">
                <p class="md:text-lg md:max-w-[355px] 3xl:max-w-fit text-white text-sm" data-aos="fade-up">Ваше будущее
                    жилье — в наших руках. Мы понимаем, как важны для
                    вас шаги.</p>
            </div>
            <div class="grid-cols-1 md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 grid gap-x-5 gap-y-8 md:gap-y-12 mt-12"
                data-aos="fade-up">

                <ArticlesItem bgdColor="blue-500" v-for="item in articlesData?.data?.value?.slice(0, viewCount)" :key="item" :item="item" />

            </div>

            <button v-if="viewCount < articlesData?.data?.value.length" @click="handelShowMore" class="white-border-button">
                Показать больше
            </button>
        </div>

        <div class="absolute -right-36 bottom-40 w-72 h-72 z-10">
            <NuxtImg src="/assets/img/icons/vector-logo.svg" alt="vector-logo" loading="lazy" />
        </div>
    </section>
</template>


<script setup>

const viewCount = ref(8);

const handelShowMore = () => {
    viewCount.value += 8;
}

const articlesData = await useAsyncData('Articles', () => $fetch('/api/articles'))

</script>
