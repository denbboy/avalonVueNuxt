<template>

    <section class="pb-12">
        <div class="swiper-slide pb-10 pt-36 lg:pt-[290px] relative overflow-hidden">
            <div
                class="bg-[url('./../img/about/about-banner.jpg')] max-w-none bg-center absolute top-0 left-0 w-full h-screen -z-10 opacity-50">
            </div>
            <div class="bg-gradient-to-t from-blue-500 from-30% w-full h-52 absolute -z-10 bottom-0 left-0"></div>
            <div class="bg-gradient-to-t from-blue-500 from-30% w-full h-52 absolute -z-10 top-0 left-0 rotate-180">
            </div>

            <div class="container">
                <div class="md:flex md:justify-between md:gap-10">
                    <div>
                        <div class="banner__item__head flex flex-wrap items-center gap-[10px] md:gap-5">
                            <div
                                class="relative flex flex-col items-center justify-center w-full md:max-w-[186px] max-w-[141px] md:py-5 py-[15px]">
                                <img class="absolute top-0 left-0 -z-10 md:min-h-[86px] min-h-[60px] md:max-w-[186px] max-w-[141px]"
                                    src="/assets/img/icons/about-border-white.svg" alt="bgd">
                                <span class="text-white text-xs md:text-sm">
                                    Срок сдачи
                                </span>
                                <p class="text-white text-base font-bold md:text-xl">
                                    лето 2025
                                </p>
                            </div>
                            <div class="con order-1 md:order-none">
                                <div class="relative px-5 py-3 w-fit md:text-center md:px-7">
                                    <img class="absolute top-0 left-0 -z-10 md:hidden"
                                        src="/assets/img/index/bgd-decor.png" alt="bgd">
                                    <img class="absolute top-0 left-0 -z-10 hidden md:block h-[-webkit-fill-available]"
                                        src="/assets/img/index/bgd-decor-2.png" alt="bgd">
                                    <h2 class="text-sm text-white">
                                        Стоимость <br class="hidden md:block"> <span class="font-bold md:text-xl">от
                                            $70.000</span>
                                    </h2>
                                    <p class="text-xs text-slate-50 opacity-60 text-center">
                                        *включая налоги

                                    </p>
                                </div>
                            </div>
                            <div
                                class="w-full h-[60px] max-w-[72px] md:max-w-[98px] md:h-[86px] bg-white flex items-center justify-center rounded-[8px] md:rounded-[15px]">
                                <img src="/assets/img/icons/live-ic.svg" class="max-w-[42px] md:max-w-[68px]" alt="ic">
                            </div>
                        </div>
                        <h2 class="text-3xl text-white mt-5 md:text-6xl md:mt-12 md:max-w-[825px]">
                            <span class="font-bold">
                                OM | Club House
                            </span>
                        </h2>
                        <p class="text-white text-sm max-w-64 md:max-w-[416px] md:text-base mt-3 md:mt-12">
                            Премиум апартаменты в современном клубном
                            доме. Погрузитесь в уникальную атмосферу роскоши
                            и уюта в центре Чангу
                        </p>
                        <button
                        @click="handleOpenModal"
                            class="w-full max-w-56 md:max-w-72 px-5 py-4 block text-sm md:text-base bg-white rounded-xl text-center font-bold whitespace-nowrap text-blue-500 hover:text-white hover:bg-blue-400 my-10 transition-all md:mt-12 md:mb-32">
                            Скачать презентацию
                        </button>
                    </div>
                    <div class="flex flex-col md:mt-10">
                        <button type="button"
                            class="flex items-center mb-10 gap-5 text-white text-sm md:text-base md:flex-col md:ml-auto">
                            <img src="/assets/img/icons/play-video-A.svg" class="max-w-[95px] md:max-w-[165px]"
                                alt="ic">
                            Посмотреть видео
                        </button>
                        <div class="flex gap-[10px] md:gap-5 md:mt-[100px] lg:grid lg:grid-cols-[repeat(3,_240px)]">
                            <div class="pb-[15px] border-b border-whiteOp-300 md:pb-[30px] hidden lg:block w-full">
                                <h3 class="text-white text-2xl font-bold mb-[10px] md:mb-[15px] md:text-[40px]">
                                    6
                                </h3>
                                <p class="text-white text-sm md:text-base">
                                    вилл
                                </p>
                            </div>
                            <div class="pb-[15px] border-b border-whiteOp-300 md:pb-[30px] w-full lg:order-1">
                                <h3
                                    class="flex items-center gap-2 md:gap-[10px] text-blue-400 text-2xl font-bold mb-[10px] md:mb-[15px] md:text-[40px]">
                                    17%
                                    <img src="/assets/img/icons/about-banner-A-ic.svg"
                                        class="max-w-[20px] md:max-w-[30px]" alt="ic">
                                </h3>
                                <p class="text-white text-sm md:text-base">
                                    прогнозируемый <br class="md:hidden">ROI
                                </p>
                            </div>
                            <div class="pb-[15px] border-b border-whiteOp-300 md:pb-[30px] w-full">
                                <h3 class="text-white text-2xl font-bold mb-[10px] md:mb-[15px] md:text-[40px]">
                                    32
                                </h3>
                                <p class="text-white text-sm md:text-base">
                                    апартамента
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script setup>
const modalsStore = useModalsStore()

const handleOpenModal = () => {
    modalsStore.addModal("presentation")
}
</script>
