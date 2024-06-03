<script setup>
</script>

<template>
    <section class="md:pb-20 relative bg-blue-500 overflow-hidden">
        <div class="bg-gradient-to-t from-blue-500 from-60% lg:from-60%  w-full h-[2000px] absolute z-10"></div>

        <img class="absolute top-0 z-0 opacity-40 w-[600vw] max-w-max md:w-full min-h-[1000px] h-screen object-cover"
            src="/assets/img/career/img.jpg" alt="Image">

        <div class="container mx-auto relative z-20 pt-32 md:pt-64">
            <h1 data-aos="fade-up"
                class="md:text-5xl lg:text-6xl text-3xl text-white font-normalidad font-bold mb-5 md:mb-12">
                Сотрудничество
            </h1>
            <div data-aos="fade-up" data-aos-delay="100" class="justify-between items-center mb-10">
                <p class="md:text-lg text-white text-sm mb-14 max-w-[548px]">
                    Ваше будущее жилье — в наших руках. Мы понимаем, как важны для вас шаги. Создаем уникальные
                    проекты
                    с
                    вдохновением и заботой. Помещаем ваш бренд в современный мир.
                </p>
            </div>

            <div data-aos="fade-up" class="grid lg:grid-cols-4 lg:gap-5">
                <NuxtLink href="#broker"
                    class="border cursor-pointer group relative lg:h-[172px] mb-[10px] last:mb-0 lg:border-none border-white/50 rounded-[10px] py-8 bg-no-repeat w-full">
                    <img class="absolute hidden top-0 lg:block h-full w-full"
                        src="/assets/img/cooperation/border-bgd.svg" alt="">
                    <img class="absolute lg:group-hover:opacity-100 transition-all opacity-0 top-0 h-full w-full"
                        src="/assets/img/cooperation/border-bgd-hover.svg" alt="">

                    <div
                        class="flex items-center justify-center lg:p-4 lg:bg-blue-400 lg:w-fit lg:rounded-[20px] lg:mx-auto lg:mt-[-60px]">
                        <img class="w-9 h-9" src="/assets/img/cooperation/banner-block-icon-1.svg" alt="img">
                    </div>
                    <div class="relative z-10">
                        <p class="my-4 text-white font-bold text-center">Брокерам</p>
                        <img class="mx-auto" src="/assets/img/icons/double-arrow-down-white.svg" alt="img">
                    </div>
                </NuxtLink>
                <NuxtLink href="#agency"
                    class="border cursor-pointer group relative lg:h-[172px] mb-[10px] last:mb-0 lg:border-none border-white/50 rounded-[10px] py-8 bg-no-repeat w-full">
                    <img class="absolute hidden top-0 lg:block h-full w-full"
                        src="/assets/img/cooperation/border-bgd.svg" alt="">
                    <img class="absolute lg:group-hover:opacity-100 transition-all opacity-0 top-0 h-full w-full"
                        src="/assets/img/cooperation/border-bgd-hover.svg" alt="">

                    <div
                        class="flex items-center justify-center lg:p-4 lg:bg-blue-400 lg:w-fit lg:rounded-[20px] lg:mx-auto lg:mt-[-60px]">
                        <img class="w-9 h-9" src="/assets/img/cooperation/banner-block-icon-2.svg" alt="img">
                    </div>
                    <div class="relative z-10">
                        <p class="my-4 text-white font-bold text-center">
                            Агентствам недвижимости
                        </p>
                        <img class="mx-auto" src="/assets/img/icons/double-arrow-down-white.svg" alt="img">
                    </div>
                </NuxtLink>
                <NuxtLink href="#marketing"
                    class="border cursor-pointer group relative lg:h-[172px] mb-[10px] last:mb-0 lg:border-none border-white/50 rounded-[10px] py-8 bg-no-repeat w-full">
                    <img class="absolute hidden top-0 lg:block h-full w-full"
                        src="/assets/img/cooperation/border-bgd.svg" alt="">
                    <img class="absolute lg:group-hover:opacity-100 transition-all opacity-0 top-0 h-full w-full"
                        src="/assets/img/cooperation/border-bgd-hover.svg" alt="">

                    <div
                        class="flex items-center justify-center lg:p-4 lg:bg-blue-400 lg:w-fit lg:rounded-[20px] lg:mx-auto lg:mt-[-60px]">
                        <img class="w-9 h-9" src="/assets/img/cooperation/banner-block-icon-3.svg" alt="img">
                    </div>
                    <div class="relative z-10">
                        <p class="my-4 text-white font-bold text-center">
                            Маркетингу
                        </p>
                        <img class="mx-auto" src="/assets/img/icons/double-arrow-down-white.svg" alt="img">
                    </div>
                </NuxtLink>
                <NuxtLink href="#partners"
                    class="border cursor-pointer group relative lg:h-[172px] mb-[10px] last:mb-0 lg:border-none border-white/50 rounded-[10px] py-8 bg-no-repeat w-full">
                    <img class="absolute hidden top-0 lg:block h-full w-full"
                        src="/assets/img/cooperation/border-bgd.svg" alt="">
                    <img class="absolute lg:group-hover:opacity-100 transition-all opacity-0 top-0 h-full w-full"
                        src="/assets/img/cooperation/border-bgd-hover.svg" alt="">

                    <div
                        class="flex items-center justify-center lg:p-4 lg:bg-blue-400 lg:w-fit lg:rounded-[20px] lg:mx-auto lg:mt-[-60px]">
                        <img class="w-9 h-9" src="/assets/img/cooperation/banner-block-icon-4.svg" alt="img">
                    </div>
                    <div class="relative z-10">
                        <p class="my-4 text-white font-bold text-center">
                            Партнерство
                        </p>
                        <img class="mx-auto" src="/assets/img/icons/double-arrow-down-white.svg" alt="img">
                    </div>
                </NuxtLink>
            </div>


        </div>

        <div class="absolute -right-[72px] top-[250px] w-36 z-10">
            <img src="/assets/img/icons/vector-logo.svg" alt="vector-logo">
        </div>
    </section>
</template>