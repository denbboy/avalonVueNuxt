<script setup>
</script>

<template>
    <section class="pb-24 relative bg-blue-500 overflow-hidden">
        <div class="bg-gradient-to-t from-blue-500 from-70% lg:from-70%  w-full h-[2000px] absolute z-10"></div>

        <img class="absolute top-0 z-0 opacity-40 w-[600vw] max-w-max md:w-full min-h-[1000px] h-screen object-cover"
            src="/assets/img/news/news-bgd.jpg" alt="Image">

        <div class="container mx-auto relative z-20 pt-32 md:pt-64">
            <h1 class="md:text-5xl lg:text-6xl text-3xl text-white font-normalidad font-bold mb-5">Статьи</h1>
            <div class="md:flex justify-between items-center">
                <p class="md:text-lg text-white text-sm">Ваше будущее жилье — в наших руках. Мы понимаем, как важны для
                    вас шаги.</p>
            </div>
            <div class="grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid gap-x-5 gap-y-8 md:gap-y-12 mt-12">
                <a href="articlesSingle.html" class="group">
                    <img class="mb-5 rounded-3xl w-full h-[210px] md:h-[300px] object-cover"
                        src="/assets/img/news/cardImage.jpg" alt="Image">
                    <h2 class="mb-4 group-hover:underline text-white text-base md:text-lg leading-4 md:leading-5">
                        <strong>Название интересной <br>статьи в две строки</strong>
                    </h2>
                    <p class="text-white line-clamp-2 text-sm opacity-60">Our properties are situated in various areas
                        across the island of Bali, offering a range of locations to suit every preference, offering a
                        range of locations to suit every preference</p>
                </a>
            </div>
            <button class="white-border-button">
                Показать больше
            </button>
        </div>

        <div class="absolute -right-36 bottom-40 w-72 h-72 z-10">
            <img src="/assets/img/icons/vector-logo.svg" alt="vector-logo">
        </div>
    </section>
</template>