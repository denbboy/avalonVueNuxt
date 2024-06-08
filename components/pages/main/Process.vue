<template>
    <section class=" bg-no-repeat bg-cover pt-14 pb-32 relative overflow-hidden">
        <Parallaxy class="absolute top-0 left-0 z-0 h-full w-full" :speed="70"
            :animation="(delta: number) => `transform: translate3d(0, ${delta}px, 0);`">
            <!-- <img class="h-full w-full object-cover scale-125" src="/assets/img/index/buy-bgd.jpg"> -->
            <img class="h-full w-full object-cover scale-125"
                src="/assets/img/about/stock-photo-kelingking-beach-at-sunset-in-nusa-penida-island-bali-indonesia-1486525196.jpg">
        </Parallaxy>
        <div class="container relative z-10">

            <!-- bg-[url('./../img/index/buy-list-bg.png')] lg:bg-[url('./../img/index/buy-bg-desk.png')] bg-no-repeat bg-cover -->
            <div
                class=" lg:rounded-tr-3xl lg:rounded-bl-3xl pt-14 pb-28 px-5 relative md:pb-40 md:px-8 lg:px-[120px] lg:py-[100px]">

                <img src="/assets/img/index/buy-bg-desk.png"
                    class="absolute top-0 left-0 w-full h-full z-0 hidden md:block backdrop-blur" alt="">
                <img src="/assets/img/index/buy-list-bg.png"
                    class="absolute top-0 left-0 w-full h-full z-0 block md:hidden backdrop-blur" alt="">

                <svg class="absolute left-1/2 -translate-x-1/2 top-0" width="10" height="45" viewBox="0 0 10 45"
                    fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line opacity="0.2" x1="5.5" y1="-2.18557e-08" x2="5.5" y2="40" stroke="#0E88EC" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M6 35C8.20914 35 10 36.7909 10 39L10 41C10 43.2091 8.20914 45 6 45L4 45C1.79086 45 -7.8281e-08 43.2091 -1.74846e-07 41L-2.62268e-07 39C-3.58833e-07 36.7909 1.79086 35 4 35L6 35Z"
                        fill="#0E88EC"
                        style="fill:#0E88EC;fill:color(display-p3 0.0553 0.5317 0.9262);fill-opacity:1;" />
                </svg>

                <div class="mb-7 lg:flex lg:items-center lg:mb-[50px] relative z-10">

                    <h2
                        class="font-bold text-white text-3xl mb-7 md:text-[56px] md:leading-[56px] md:text-center lg:text-left lg:m-0" data-aos="fade-up">
                        Как просходит процесс покупки
                    </h2>
                    <p class="text-white opacity-50 text-sm md:text-base md:text-center lg:text-left lg:max-w-[500px]" data-aos="fade-up">
                        Для того, чтобы приобрести недвижимость, вам не обязательно прилетать на Бали, многие сделки
                        теперь
                        происходят дистанционно
                    </p>
                </div>

                <div class="relative z-10" data-aos="fade-up">
                    <img src="/assets/img/index/point-line.png"
                        class="hidden lg:block absolute lg:top-[90px] h-[260px] right-[-40px] w-full max-w-[1188px]"
                        alt="line ph">
                    <ul
                        class="mb-7 lg:mb-12 lg:grid lg:grid-cols-5 lg:gap-5 lg:after:hidden after:w-[1px] after:h-[calc(100%-30px)] after:bg-white/40 after:absolute after:bottom-0 after:left-[24.5px]">
                        <li class="mb-5 flex items-center lg:flex-col">
                            <div
                                class="relative w-full max-w-[50px] mr-4 lg:mr-0 lg:mb-14 flex items-center justify-center md:max-w-[66px] md:h-[66px]">
                                <div class="">
                                </div>
                                <div
                                    class="hidden lg:block min-w-[10px] h-[10px] bg-blue-400 rounded absolute bottom-[-30px] left-[50%] translate-x-[-50%]">
                                </div>
                                <div
                                    class=" bg-blue-400 min-w-[24px] h-[24px] flex items-center justify-center rounded-md md:w-full md:h-full md:rounded-2xl z-[3]">
                                    <span class="text-white font-bold text-xs md:text-lg">
                                        1
                                    </span>
                                </div>
                            </div>
                            <p class="text-white text-sm md:text-base lg:text-center">
                                Выбор и бронирование апартаментов
                            </p>
                        </li>
                        <li class="mb-5 flex items-center lg:flex-col">
                            <div
                                class="relative w-full max-w-[50px] mr-4 lg:mr-0 lg:mb-14 flex items-center justify-center md:max-w-[66px] md:h-[66px]">
                                <div class="">
                                </div>
                                <div
                                    class="hidden lg:block min-w-[10px] h-[10px] bg-blue-400 rounded absolute bottom-[-30px] left-[50%] translate-x-[-50%]">
                                </div>
                                <div
                                    class=" bg-blue-400 min-w-[27px] h-[27px] flex items-center justify-center rounded-md md:w-full md:h-full md:rounded-2xl z-[3]">
                                    <span class="text-white font-bold text-xs md:text-lg">
                                        2
                                    </span>
                                </div>
                            </div>
                            <p class="text-white text-sm md:text-base lg:text-center">
                                Подписание меморандума о взаимопонимании
                            </p>
                        </li>
                        <li class="mb-5 flex items-center lg:flex-col">
                            <div
                                class=" relative w-full max-w-[50px] mr-4 lg:mr-0 lg:mb-14 flex items-center justify-center md:max-w-[66px] md:h-[66px]">
                                <div
                                    class="hidden lg:block min-w-[10px] h-[10px] bg-blue-400 rounded absolute bottom-[-30px] left-[50%] translate-x-[-50%]">
                                </div>
                                <div class="">
                                </div>
                                <div
                                    class=" bg-blue-400 min-w-[30px] h-[30px] flex items-center justify-center rounded-lg z-[3] md:w-full md:h-full md:rounded-2xl">
                                    <span class="text-white font-bold text-xs md:text-lg">
                                        3
                                    </span>
                                </div>
                            </div>
                            <p class="text-white text-sm md:text-base lg:text-center">
                                Оплата первого взноса 20%
                            </p>
                        </li>
                        <li class="mb-5 flex items-center lg:flex-col">
                            <div
                                class="relative w-full max-w-[50px] mr-4 lg:mr-0 lg:mb-14 flex items-center justify-center md:max-w-[66px] md:h-[66px]">
                                <div
                                    class="hidden lg:block min-w-[10px] h-[10px] bg-blue-400 rounded absolute bottom-[-30px] left-[50%] translate-x-[-50%]">
                                </div>
                                <div class="">
                                </div>
                                <div
                                    class=" bg-blue-400 min-w-[33px] h-[33px] flex items-center justify-center rounded-lg z-[3] md:w-full md:h-full md:rounded-2xl">
                                    <span class="text-white font-bold text-xs md:text-lg">
                                        4
                                    </span>
                                </div>
                            </div>
                            <p class="text-white text-sm md:text-base lg:text-center">
                                Беспроцентные платежи на 12 месяцев
                            </p>
                        </li>
                        <li class="mb-5 flex items-center lg:flex-col">
                            <div
                                class="relative w-full max-w-[50px] mr-4 lg:mr-0 lg:mb-14 flex items-center justify-center md:max-w-[66px] md:h-[66px]">
                                <div
                                    class="hidden lg:block min-w-[10px] h-[10px] bg-blue-400 rounded absolute bottom-[-30px] left-[50%] translate-x-[-50%]">
                                </div>
                                <div class="">
                                </div>
                                <div
                                    class=" bg-blue-400 min-w-[36px] h-[36px] flex items-center justify-center rounded-lg z-[3] md:w-full md:h-full md:rounded-2xl">
                                    <span class="text-white font-bold text-xs md:text-lg">
                                        5
                                    </span>
                                </div>
                            </div>
                            <p class="text-white text-sm md:text-base lg:text-center">
                                Привлечение арендаторов
                                за счет собственной управляющей компании
                            </p>
                        </li>
                        <li class="mb-5 flex items-center lg:flex-col">
                            <div
                                class="relative w-full max-w-[50px] mr-4 lg:mr-0 lg:mb-14 flex items-center justify-center md:max-w-[66px] md:h-[66px]">
                                <div
                                    class="hidden lg:block min-w-[10px] h-[10px] bg-blue-400 rounded absolute bottom-[-30px] left-[50%] translate-x-[-50%]">
                                </div>
                                <div class="">
                                </div>
                                <div
                                    class=" bg-blue-400 min-w-[39px] h-[39px] flex items-center justify-center rounded-xl z-[3] md:w-full md:h-full md:rounded-2xl">
                                    <span class="text-white font-bold text-xs md:text-lg">
                                        6
                                    </span>
                                </div>
                            </div>
                            <p class="text-white text-sm md:text-base lg:text-center">
                                Ввод здания я в эксплуатацию
                                1 июня 2024 года
                            </p>
                        </li>
                        <li class="mb-5 flex items-center lg:flex-col">
                            <div
                                class="relative w-full max-w-[50px] mr-4 lg:mr-0 lg:mb-14 flex items-center justify-center md:max-w-[66px] md:h-[66px]">
                                <div
                                    class="hidden lg:block min-w-[10px] h-[10px] bg-blue-400 rounded absolute bottom-[-30px] left-[50%] translate-x-[-50%]">
                                </div>
                                <div class="">
                                </div>
                                <div
                                    class=" bg-blue-400 min-w-[42px] h-[42px] flex items-center justify-center rounded-xl after:block z-[3] md:w-full md:h-full md:rounded-2xl">
                                    <span class="text-white font-bold text-xs md:text-lg">
                                        7
                                    </span>
                                </div>
                            </div>
                            <p class="text-white text-sm md:text-base lg:text-center">
                                Регистрация договора аренды на 25 лет с возможностью продления на 25 лет
                            </p>
                        </li>
                        <li class="mb-5 flex items-center lg:flex-col">
                            <div
                                class="relative w-full max-w-[50px] mr-4 lg:mr-0 lg:mb-14 flex items-center justify-center md:max-w-[66px] md:h-[66px]">
                                <div
                                    class="hidden lg:block min-w-[10px] h-[10px] bg-blue-400 rounded absolute bottom-[-30px] left-[50%] translate-x-[-50%]">
                                </div>
                                <div class="">
                                </div>
                                <div
                                    class=" bg-blue-400 min-w-[45px] h-[45px] flex items-center justify-center rounded-xl z-[3] md:w-full md:h-full md:rounded-2xl">
                                    <span class="text-white font-bold text-xs md:text-lg">
                                        8
                                    </span>
                                </div>
                            </div>
                            <p class="text-white text-sm md:text-base lg:text-center">
                                Завершения строительных и отделочных работ
                            </p>
                        </li>
                        <li class="mb-5 flex items-center lg:flex-col">
                            <div
                                class="relative w-full max-w-[50px] mr-4 lg:mr-0 lg:mb-14 flex items-center justify-center md:max-w-[66px] md:h-[66px]">
                                <div
                                    class="hidden lg:block min-w-[10px] h-[10px] bg-blue-400 rounded absolute bottom-[-30px] left-[50%] translate-x-[-50%]">
                                </div>
                                <div class="">
                                </div>
                                <div
                                    class=" bg-blue-400 min-w-[48px] h-[48px] flex items-center justify-center rounded-xl z-[3] md:w-full md:h-full md:rounded-2xl">
                                    <span class="text-white font-bold text-xs md:text-lg">
                                        9
                                    </span>
                                </div>
                            </div>
                            <p class="text-white text-sm md:text-base lg:text-center">
                                Сдача в аренду вашей собственности
                            </p>
                        </li>
                        <li class="mb-5 flex items-center lg:flex-col">
                            <div
                                class="relative w-full max-w-[50px] mr-4 lg:mr-0 lg:mb-14 flex items-center justify-center md:max-w-[66px] md:h-[66px]">
                                <div
                                    class="hidden lg:block min-w-[10px] h-[10px] bg-blue-400 rounded absolute bottom-[-30px] left-[50%] translate-x-[-50%]">
                                </div>
                                <div
                                    class=" bg-blue-400 min-w-[50px] h-[50px] flex items-center justify-center rounded-2xl md:w-full md:h-full md:rounded-2xl z-[3]">
                                    <span class="text-white font-bold text-xs md:text-lg">
                                        10
                                    </span>
                                </div>
                            </div>
                            <p class="text-white text-sm md:text-base lg:text-center">
                                Ежемесячная выплата прибыли инвесторам
                            </p>
                        </li>
                    </ul>
                </div>

                <div
                    class="lg:flex relative z-10 lg:flex-row-reverse lg:justify-between lg:items-center lg:pt-10 lg:border-t lg:border-whiteOp-300" data-aos="fade-up">
                    <button @click="handleOpenModal" type="button"
                        class="w-full bg-white p-4 font-bold text-blue-500 text-sm rounded-xl transition-all hover:bg-blue-400 hover:text-white mb-5 lg:max-w-[300px]">
                        Получить консультацию
                    </button>

                    <div class="flex items-center gap-10">
                        <img src="/assets/img/index/a-decor-op.svg" class="hidden lg:block" alt="decor">
                        <div class="pt-5 border-t border-whiteOp-300 lg:border-none lg:pt-0 lg:max-w-[526px]">
                            <p class="text-white opacity-50 text-sm mb-5 md:text-base md:text-center lg:text-left">
                                По мере развития комплекса, реальная стоимость недвижимости увеличивается.
                            </p>
                            <p class="text-white opacity-50 text-sm md:text-base md:text-center lg:text-left">
                                У нас есть возможность перепродать недвижимость с прибылью на любом этапе.
                            </p>
                        </div>
                    </div>

                </div>


                <div
                    class="w-[170px] h-[170px] md:w-[244px] md:h-[244px] text-center rounded-full bg-blue-400 transition-all flex flex-col items-center justify-center gap-1 absolute bottom-[-85px] md:bottom-[-122px] left-[50%] lg:bottom-auto 3xl:left-0 3xl:top-[50%] lg:translate-y-[-50%] translate-x-[-50%] lg:top-[75%] lg:left-28" data-aos="fade-right">
                    <div
                        class="block animate-ping w-[170px] h-[170px] md:w-[244px] md:h-[244px] border border-whiteOp-200 transition-all rounded-full absolute before:top-[-14px]">
                    </div>
                    <b class="block font-bold text-white md:text-[60px] leading-[100%] text-[40px]">
                        -5%
                    </b>
                    <span class="text-white text-xs md:text-base max-w-[130px]">
                        Скидка
                        при единоразовой
                        100% оплате
                    </span>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import Parallaxy from '@lucien144/vue3-parallaxy';

const modalsStore = useModalsStore()

const handleOpenModal = () => {
    modalsStore.addModal("presentation")
}
</script>
