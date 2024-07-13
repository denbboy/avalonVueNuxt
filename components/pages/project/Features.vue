<template>
    <section class=" bg-no-repeat bg-cover py-14 md:py-24 relative overflow-hidden">
        <Parallaxy class="absolute top-0 left-0 z-0 h-full w-full" :speed="70"
            :animation="(delta: number) => `transform: translate3d(0, ${delta}px, 0);`">
            <!-- <img class="h-full w-full object-cover scale-125" src="/assets/img/index/buy-bgd.jpg"> -->
            <img class="h-full w-full object-cover scale-125" src="/assets/img/about/bgd-sec-changy.jpg">
        </Parallaxy>
        <div class="container relative z-10">
            <div
                class="bg-[url('./../img/about/changy-bgd.png')] xl:bg-[url('./../img/about/chang-bgd.png')] bg-no-repeat bg-cover pt-[60px] pb-9 px-5 md:px-[70px] xl:px-[0px] relative  xl:py-24 3xl:pr-[82px] 3xl:pl-[125px]">
                <img src="/assets/img/about/phone-mob.png" class="absolute top-[-40px] right-[-30px] xl:hidden"
                    alt="ph">
                <div class="xl:grid xl:grid-cols-2 w-full h-full xl:translate-x-[70px] 3xl:translate-x-0  xl:items-center xl:gap-7">

                    <div class="">
                        <h2 data-aos="fade-up" class="font-bold text-white text-3xl mb-7 md:text-[40px] lg:text-[56px] md:mb-[50px]">
                            Чангу
                        </h2>
                        <div data-aos="fade-up" class=" mb-5 md:mb-[30px] md:flex md:gap-2 text-nowrap">
                            <strong class="font-bold text-white text-lg uppercase md:text-[26px] md:font-normal">
                                Лучшее место
                            </strong>
                            <span class="block font-bold text-sm text-white md:text-[18px] md:font-normal md:mt-auto">
                                для инвестиций на Бали
                            </span>
                        </div>
                        <p data-aos="fade-up" class="text-white text-sm mb-5 max-w-[225px] md:text-[18px] md:max-w-none md:mb-[30px]">
                            В 2019 году Forbes поставил Чангу на 41-е место в ТОп-местах на планете для жизни и
                            инвестирования.
                        </p>
    
                        <div data-aos="fade-up"
                            class="p-5 border border-blue-400 rounded-[20px] mb-5 md:p-[30px] md:max-w-[381px] 3xl:max-w-[505px] md:mb-[30px]">
                            <p class="text-white text-sm md:text-[18px] ">
                                <span class="md:font-bold">Чангу:</span> кусочек рая не только для туристов и эмигрантов, но
                                и
                                для инвесторов.
                            </p>
                        </div>
    
                        <ul class="max-w-[255px] md:max-w-none">
                            <li data-aos="fade-up" class="flex items-center gap-[10px] md:gap-[20px] mb-4 md:mb-5">
                                <img src="/assets/img/about/galka.svg" class="max-w-[15px] md:max-w-none" alt="ic">
                                <p class="text-white text-sm md:text-base">
                                    Чангу является одной из главных инвестиционных достопримечательностей на рынке курортной
                                    недвижимости Бали.
                                </p>
                            </li>
                            <li data-aos="fade-up" class="flex items-center gap-[10px] md:gap-[20px] mb-4 md:mb-5">
                                <img src="/assets/img/about/galka.svg" class="max-w-[15px] md:max-w-none" alt="ic">
                                <p class="text-white text-sm md:text-base">
                                    Средняя заполняемость в Чангу от 70%
                                </p>
                            </li>
                            <li data-aos="fade-up" class="flex items-center gap-[10px] md:gap-[20px] mb-4 md:mb-5">
                                <img src="/assets/img/about/galka.svg" class="max-w-[15px] md:max-w-none" alt="ic">
                                <p class="text-white text-sm md:text-base">
                                    Среднегодовой рост стоимости недвижимости в этом районе составляет 20%
                                </p>
                            </li>
                            <li data-aos="fade-up" class="flex items-center gap-[10px] md:gap-[20px] mb-4 md:mb-5">
                                <img src="/assets/img/about/galka.svg" class="max-w-[15px] md:max-w-none" alt="ic">
                                <p class="text-white text-sm md:text-base">
                                    За 4 года стоимость земли выросла более чем на 300%
                                </p>
                            </li>
                            <li data-aos="fade-up" class="flex items-center gap-[10px] md:gap-[20px] mb-4 md:mb-5">
                                <img src="/assets/img/about/galka.svg" class="max-w-[15px] md:max-w-none" alt="ic">
                                <p class="text-white text-sm md:text-base">
                                    Среднегодовая арендная плата увеличилась на 15% в год
                                </p>
                            </li>
                            <li data-aos="fade-up" class="flex items-center gap-[10px] md:gap-[20px]">
                                <img src="/assets/img/about/galka.svg" class="max-w-[15px] md:max-w-none" alt="ic">
                                <p class="text-white text-sm md:text-base">
                                    Количество запросов на недвижимость в Чангу растет на 30-40% в год
                                </p>
                            </li>
                        </ul>
                    </div>
                    <img data-aos="fade-left" src="/assets/img/about/tel-desk.png" class="hidden xl:block aspect-[624/673]" alt="ph">
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import Parallaxy from '@lucien144/vue3-parallaxy';
</script>
