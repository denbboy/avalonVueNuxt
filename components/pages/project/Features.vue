<template>
    <section class=" bg-no-repeat bg-cover py-14 md:py-24 relative overflow-hidden">
        <Parallaxy class="absolute top-0 left-0 z-0 h-full w-full" :speed="70"
            :animation="(delta: number) => `transform: translate3d(0, ${delta}px, 0);`">
            <!-- <img class="h-full w-full object-cover scale-125" src="/assets/img/index/buy-bgd.jpg"> -->
            <img class="h-full w-full object-cover scale-125" src="/assets/img/about/bgd-sec-changy.jpg">
        </Parallaxy>
        <div class="container relative z-10">
            <div
                class="bg-[url('./../img/about/changy-bgd.png')] lg:bg-[url('./../img/about/chang-bgd.png')] bg-no-repeat bg-cover pt-14 pb-9 px-5 relative md:px-10 lg:flex lg:items-center lg:gap-7 lg:py-24 lg:pr-[82px] lg:pl-[125px]">
                <img src="/assets/img/about/phone-mob.png" class="absolute top-[-40px] right-[-30px] lg:hidden"
                    alt="ph">
                <div>
                    <h2 class="font-bold text-white text-3xl mb-7 md:text-[56px] md:mb-[50px]">
                        Чангу
                    </h2>
                    <div class=" mb-5 md:mb-[30px] md:flex md:gap-2">
                        <strong class="font-bold text-white text-lg uppercase md:text-[30px] md:font-normal">
                            Лучшее место
                        </strong>
                        <span class="block font-bold text-sm text-white md:text-[18px] md:font-normal md:mt-auto">
                            для инвестиций на Бали
                        </span>
                    </div>
                    <p class="text-white text-sm mb-5 max-w-[225px] md:text-[18px] md:max-w-none md:mb-[30px]">
                        В 2019 году Forbes поставил Чангу на 41-е место в ТОп-местах на планете для жизни и
                        инвестирования.
                    </p>

                    <div
                        class="p-5 border border-blue-400 rounded-[20px] mb-5 md:p-[30px] md:max-w-[505px] md:mb-[30px]">
                        <p class="text-white text-sm md:text-[18px] ">
                            <span class="md:font-bold">Чангу:</span> кусочек рая не только для туристов и эмигрантов, но
                            и
                            для инвесторов.
                        </p>
                    </div>

                    <ul class="max-w-[225px] lg:max-w-none">
                        <li class="flex items-center gap-[10px] md:gap-[20px] mb-4 md:mb-5">
                            <img src="/assets/img/about/galka.svg" class="max-w-[15px] md:max-w-none" alt="ic">
                            <p class="text-white text-sm md:text-base">
                                Чангу является одной из главных инвестиционных достопримечательностей на рынке курортной
                                недвижимости Бали.
                            </p>
                        </li>
                        <li class="flex items-center gap-[10px] md:gap-[20px] mb-4 md:mb-5">
                            <img src="/assets/img/about/galka.svg" class="max-w-[15px] md:max-w-none" alt="ic">
                            <p class="text-white text-sm md:text-base">
                                Средняя заполняемость в Чангу от 70%
                            </p>
                        </li>
                        <li class="flex items-center gap-[10px] md:gap-[20px] mb-4 md:mb-5">
                            <img src="/assets/img/about/galka.svg" class="max-w-[15px] md:max-w-none" alt="ic">
                            <p class="text-white text-sm md:text-base">
                                Среднегодовой рост стоимости недвижимости в этом районе составляет 20%
                            </p>
                        </li>
                        <li class="flex items-center gap-[10px] md:gap-[20px] mb-4 md:mb-5">
                            <img src="/assets/img/about/galka.svg" class="max-w-[15px] md:max-w-none" alt="ic">
                            <p class="text-white text-sm md:text-base">
                                За 4 года стоимость земли выросла более чем на 300%
                            </p>
                        </li>
                        <li class="flex items-center gap-[10px] md:gap-[20px] mb-4 md:mb-5">
                            <img src="/assets/img/about/galka.svg" class="max-w-[15px] md:max-w-none" alt="ic">
                            <p class="text-white text-sm md:text-base">
                                Среднегодовая арендная плата увеличилась на 15% в год
                            </p>
                        </li>
                        <li class="flex items-center gap-[10px] md:gap-[20px]">
                            <img src="/assets/img/about/galka.svg" class="max-w-[15px] md:max-w-none" alt="ic">
                            <p class="text-white text-sm md:text-base">
                                Количество запросов на недвижимость в Чангу растет на 30-40% в год
                            </p>
                        </li>
                    </ul>
                </div>
                <img src="/assets/img/about/tel-desk.png" class="hidden lg:block" alt="ph">
            </div>
        </div>
    </section>
</template>

<script setup>
import Parallaxy from '@lucien144/vue3-parallaxy';
</script>
