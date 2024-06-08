<template>
    <section class="uslugi pt-[23px] pb-12 relative overflow-hidden" >
        <div class="absolute lg:-right-36 top-0 lg:top-auto lg:left-auto lg:bottom-40 -left-14 w-28 lg:w-72 z-[2]">
            <img src="/assets/img/icons/vector-logo.svg" class="" alt="vector-logo">
        </div>
        <div class="container">
            <div
                class="w-full flex flex-col items-center text-center md:flex-row md:justify-between md:mb-12 md:text-start" data-aos="fade-up">
                <div class="">
                    <p class="text-white mb-[10px] text-sm md:text-base md:mb-[10px] leading-[100%]">
                        Воплоти мечту в реальность
                    </p>
                    <h2 class="text-white text-3xl font-bold md:text-[56px] leading-[100%]">
                        Наши проекты
                    </h2>
                </div>
                <button @click="handleOpenModal" class="white-button mt-5 mb-7 lg:my-0">
                    Получить каталог
                </button>
            </div>

            <div class="flex flex-col gap-5 items-center md:flex-wrap lg:flex-row lg:flex-nowrap z-10 relative">

                <div class="max-w-[508px]" data-aos="fade-right" data-aos-duration="300">

                    <div
                        class="h-[500px] md:h-[600px] relative rounded-3xl overflow-hidden bg-[#111111] rounded-br-none">
                        <img src="/assets/img/discounts/image.jpg" class="opacity-50" alt="">
                        <div class="bg-gradient-to-t from-blue-600 absolute bottom-0 left-0 w-full h-3/4"></div>

                        <div class="absolute top-0 left-0 w-full h-full p-5 md:p-7 flex flex-col">
                            <div class="block-bottom-point"></div>

                            <div class="flex justify-between mb-auto">
                                <img class="w-[90px]" src="/assets/img/icons/icon-club.svg" alt="">
                                <span
                                    class="md:px-5 py-2 px-4 bg-[url('./../img/icons/bgd-blue-dor-rd.svg')] bg-no-repeat bg-right-bottom h-fit rounded-tl-xl rounded-bl-xl rounded-tr-xl overflow-hidden text-xs md:text-sm text-white">
                                    80% Продано
                                </span>
                            </div>
                            <div class="max-w-96">
                                <h2 class="text-white font-bold text-2xl md:text-3xl mb-5 md:mb-7">
                                    OM | Club House
                                </h2>
                                <p class="text-white text-xs md:text-sm mb-5 md:mb-7">
                                    Премиум апартаменты в современном клубном доме. Погрузитесь в уникальную атмосферу
                                    роскоши и
                                    уюта в центре Чангу.
                                </p>
                                <div class="flex items-center mb-5 md:mb-7">
                                    <strong class="text-xl md:text-2xl text-white mr-[6px]">от $120 000</strong>
                                    <span class="text-white/60 text-[12px] hidden md:block">*включая налоги</span>
                                </div>

                                <div class="flex">
                                    <NuxtLink href="/projects/123"
                                        class="hover:bg-white hover:text-blue-400 transition-all border-white border-[1px] py-4 px-7 rounded-[10px] text-white font-bold text-sm md:text-base mr-7">
                                        Подробнее
                                    </NuxtLink>
                                    <div class="flex items-center">
                                        <img class="w-3" src="/assets/img/icons/point-white.svg" alt="">
                                        <span class="ml-1 text-sm text-white">Чангу</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                <div class="max-w-[508px]" data-aos="fade-right" data-aos-duration="700">

                    <div
                        class="h-[500px] md:h-[600px] relative rounded-3xl overflow-hidden bg-[#111111] rounded-br-none">
                        <img src="/assets/img/discounts/image.jpg" class="opacity-50" alt="">
                        <div class="bg-gradient-to-t from-blue-600 absolute bottom-0 left-0 w-full h-3/4"></div>

                        <div class="absolute top-0 left-0 w-full h-full p-5 md:p-7 flex flex-col">
                            <div class="block-bottom-point"></div>

                            <div class="flex justify-between mb-auto">
                                <img class="w-[90px]" src="/assets/img/icons/icon-club.svg" alt="">
                                <span
                                    class="md:px-5 py-2 px-4 bg-[url('./../img/icons/bgd-blue-dor-rd.svg')] bg-no-repeat bg-right-bottom h-fit rounded-tl-xl rounded-bl-xl rounded-tr-xl overflow-hidden text-xs md:text-sm text-white">
                                    80% Продано
                                </span>
                            </div>
                            <div class="max-w-96">
                                <h2 class="text-white font-bold text-2xl md:text-3xl mb-5 md:mb-7">
                                    OM | Club House
                                </h2>
                                <p class="text-white text-xs md:text-sm mb-5 md:mb-7">
                                    Премиум апартаменты в современном клубном доме. Погрузитесь в уникальную атмосферу
                                    роскоши и
                                    уюта в центре Чангу.
                                </p>
                                <div class="flex items-center mb-5 md:mb-7">
                                    <strong class="text-xl md:text-2xl text-white mr-[6px]">от $120 000</strong>
                                    <span class="text-white/60 text-[12px] hidden md:block">*включая налоги</span>
                                </div>

                                <div class="flex">
                                    <NuxtLink href="/projects/123"
                                        class="hover:bg-white hover:text-blue-400 transition-all border-white border-[1px] py-4 px-7 rounded-[10px] text-white font-bold text-sm md:text-base mr-7">
                                        Подробнее
                                    </NuxtLink>
                                    <div class="flex items-center">
                                        <img class="w-3" src="/assets/img/icons/point-white.svg" alt="">
                                        <span class="ml-1 text-sm text-white">Чангу</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                <div class="max-w-[508px]" data-aos="fade-right" data-aos-duration="1100">

                    <div
                        class="h-[500px] md:h-[600px] relative rounded-3xl overflow-hidden bg-[#111111] rounded-br-none">
                        <img src="/assets/img/discounts/image.jpg" class="opacity-50" alt="">
                        <div class="bg-gradient-to-t from-blue-600 absolute bottom-0 left-0 w-full h-3/4"></div>

                        <div class="absolute top-0 left-0 w-full h-full p-5 md:p-7 flex flex-col">
                            <div class="block-bottom-point"></div>

                            <div class="flex justify-between mb-auto">
                                <img class="w-[90px]" src="/assets/img/icons/icon-club.svg" alt="">
                                <span
                                    class="md:px-5 py-2 px-4 bg-[url('./../img/icons/bgd-blue-dor-rd.svg')] bg-no-repeat bg-right-bottom h-fit rounded-tl-xl rounded-bl-xl rounded-tr-xl overflow-hidden text-xs md:text-sm text-white">
                                    80% Продано
                                </span>
                            </div>
                            <div class="max-w-96">
                                <h2 class="text-white font-bold text-2xl md:text-3xl mb-5 md:mb-7">
                                    OM | Club House
                                </h2>
                                <p class="text-white text-xs md:text-sm mb-5 md:mb-7">
                                    Премиум апартаменты в современном клубном доме. Погрузитесь в уникальную атмосферу
                                    роскоши и
                                    уюта в центре Чангу.
                                </p>
                                <div class="flex items-center mb-5 md:mb-7">
                                    <strong class="text-xl md:text-2xl text-white mr-[6px]">от $120 000</strong>
                                    <span class="text-white/60 text-[12px] hidden md:block">*включая налоги</span>
                                </div>

                                <div class="flex">
                                    <NuxtLink href="/projects/123"
                                        class="hover:bg-white hover:text-blue-400 transition-all border-white border-[1px] py-4 px-7 rounded-[10px] text-white font-bold text-sm md:text-base mr-7">
                                        Подробнее
                                    </NuxtLink>
                                    <div class="flex items-center">
                                        <img class="w-3" src="/assets/img/icons/point-white.svg" alt="">
                                        <span class="ml-1 text-sm text-white">Чангу</span>
                                    </div>
                                </div>
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
