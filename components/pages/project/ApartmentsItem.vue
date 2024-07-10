<template>
    <div data-aos="fade-up"
        class="bg-blue-600 py-10 px-5 rounded-2xl relative flex flex-col-reverse h-fit xl:grid xl:grid-cols-2 xl:gap-10  xl:px-[60px] xl:py-[70px] 3xl:py-[100px] 3xl:px-[100px] mb-5 md:mb-12 last:mb-0">
        <div
            class="w-[60px] h-[60px] 375:w-[91px] 375:h-[91px] bg-blue-400 text-center rounded-full flex md:hidden justify-center items-center flex-col before:border  absolute top-[20px] 375:top-[0px] left-[60px] z-10  md:left-auto ">
            <div
                        class="block w-[60px] h-[60px] animate-ping 375:w-[91px] 375:h-[91px] 3xl:w-[137px] 3xl:h-[137px] border border-whiteOp-200 transition-all rounded-full absolute before:top-[-14px]"></div>
            <p class="text-white text-xs 3xl:text-lg md:uppercase">
                Roi
            </p>
            <span class="text-white font-bold text-xs 375:text-lg 3xl:text-3xl">
                16%
            </span>
        </div>
        
            <div>
            <div class="mb-6 3xl:mb-12">
                <h2 class="font-bold text-white text-2xl 375:text-3xl mb-[10px] md:text-[56px] md:mb-7">
                    Апартаменты
                </h2>
                <p class="text-blue-400 text-lg md:text-xl flex items-center">
                    От 110 000$
                    <span class="text-white/60 text-xs ml-2">
                        *включая налоги
                    </span>
                </p>
            </div>

            <div class="flex flex-col 375:flex-row items-center gap-5 mb-6 3xl:mb-12 max-w-[436px] w-full">
                <div class="border border-blue-400 p-4 rounded-2xl w-full">
                    <h3 class="font-bold text-white mb-1 md:text-xl 3xl:mb-4 lg:leading-[100%]">
                        42 м²
                    </h3>
                    <p class="text-white text-sm md:text-base lg:leading-[120%]">
                        площадь <br>земли
                    </p>
                </div>
                <div class="border border-blue-400 p-4 max-w-[208px] rounded-2xl w-full">
                    <h3 class="font-bold text-white mb-1 md:text-xl 3xl:mb-4 lg:leading-[100%]">
                        4
                    </h3>
                    <p class="text-white text-sm md:text-base lg:leading-[120%]">
                        количество <br>этажей
                    </p>
                </div>
            </div>

            <ul class="grid grid-cols-2 gap-5 max-w-[436px] w-full">
                <li class="border-b border-whiteOp-300 max-w-[208px] pb-4">
                    <h3
                        class="font-bold text-white mb-1 lg:leading-[100%] md:text-xl 3xl:mb-4 before:block before:h-[6px] before:w-[6px] lg:before:w-[10px] lg:before:h-[10px] lg:before:rounded before:rounded-sm before:bg-blue-400 flex items-center before:mr-2">
                        3 м²
                    </h3>
                    <p class="text-white text-sm md:text-base lg:leading-[120%]">
                        площадь <br>прихожей
                    </p>
                </li>
                <li class="border-b border-whiteOp-300 max-w-[208px] pb-4">
                    <h3
                        class="font-bold text-white mb-1 lg:leading-[100%] md:text-xl 3xl:mb-4 before:block before:h-[6px] before:w-[6px] lg:before:w-[10px] lg:before:h-[10px] lg:before:rounded before:rounded-sm before:bg-blue-400 flex items-center before:mr-2">
                        7 м²
                    </h3>
                    <p class="text-white text-sm md:text-base lg:leading-[120%]">
                        площадь <br>кухни
                    </p>
                </li>
                <li class="border-b border-whiteOp-300 max-w-[208px] pb-4">
                    <h3
                        class="font-bold text-white mb-1 lg:leading-[100%] md:text-xl 3xl:mb-4 before:block before:h-[6px] before:w-[6px] lg:before:w-[10px] lg:before:h-[10px] lg:before:rounded before:rounded-sm before:bg-blue-400 flex items-center before:mr-2">
                        5 м²
                    </h3>
                    <p class="text-white text-sm md:text-base lg:leading-[120%]">
                        площадь <br>санузла
                    </p>
                </li>
                <li class="border-b border-whiteOp-300 max-w-[208px] pb-4">
                    <h3
                        class="font-bold text-white mb-1 lg:leading-[100%] md:text-xl 3xl:mb-4 before:block before:h-[6px] before:w-[6px] lg:before:w-[10px] lg:before:h-[10px] lg:before:rounded before:rounded-sm before:bg-blue-400 flex items-center before:mr-2">
                        22 м²
                    </h3>
                    <p class="text-white text-sm md:text-base lg:leading-[120%]">
                        площадь спальни <br>/гостиной
                    </p>
                </li>
            </ul>

            </div>
            <div class="relative h-fit w-full flex justify-end">

                <div
                    class="hidden min-w-[91px] h-[91px] 3xl:min-w-[137px] 3xl:h-[137px] bg-blue-400 text-center rounded-full md:flex justify-center items-center flex-col before:border  absolute top-p right-0 z-10 translate-x-1/3 -translate-y-1/3">
                    <div
                                class="block animate-ping w-[91px] h-[91px] 3xl:w-[137px] 3xl:h-[137px] border border-whiteOp-200 transition-all rounded-full absolute before:top-[-14px]"></div>
                    <p class="text-white text-xs 3xl:text-lg md:uppercase">
                        Roi
                    </p>
                    <span class="text-white font-bold text-lg 3xl:text-3xl">
                        16%
                    </span>
                </div>
                <div class="relative lg:max-w-[600px] lg:rounded-3xl rounded-2xl overflow-hidden">

                    <NuxtLink href="#3d-object" class="absolute top-2 right-2 z-10 md:right-auto md:left-[30px] md:top-[30px]">
                        <img src="/assets/img/about/360.png" class="max-w-[95px]" alt="ph">
                    </NuxtLink>

                    <swiper class="mySwiper-about" :modules="modules" :slides-per-view="1" :pagination="{ clickable: true }"
                        :navigation="navigationConfig" :space-between="15" @swiper="onSwiper" @slideChange="onSlideChange">

                        <swiper-slide class="relative overflow-hidden">
                            <div class="swiper-slide">
                                <img src="/assets/img/about/about-slide-1.jpg" class="rounded-[15px] w-full" alt="ph">
                            </div>
                        </swiper-slide>
                        <swiper-slide class="relative overflow-hidden">
                            <div class="swiper-slide">
                                <img src="/assets/img/about/about-slide-1.jpg" class="rounded-[15px] w-full" alt="ph">
                            </div>
                        </swiper-slide>
                        <swiper-slide class="relative overflow-hidden">
                            <div class="swiper-slide">
                                <img src="/assets/img/about/about-slide-1.jpg" class="rounded-[15px] w-full" alt="ph">
                            </div>
                        </swiper-slide>

                    </swiper>

                    <div :class="'swiper-button-next after:hidden next-btn-' + props.id">
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="36" height="36" rx="18" fill="#002D52" fill-opacity="0.5" />
                            <g clip-path="url(#clip0_840_7236)">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M23.2802 17.1629L16.816 10.6986L18 9.51465L26.4853 17.9999L18 26.4852L16.816 25.3012L23.2799 18.8373L10.7778 18.8373L10.7778 17.1629L23.2802 17.1629Z"
                                    fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_840_7236">
                                    <rect width="12" height="12" fill="white"
                                        transform="translate(18 9.51465) rotate(45)" />
                                </clipPath>
                            </defs>
                        </svg>

                    </div>
                    <div :class="'swiper-button-prev after:hidden prev-btn-' + props.id">
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="36" height="36" rx="18" transform="matrix(-1 0 0 1 36 0)" fill="#002D52"
                                fill-opacity="0.5" />
                            <g clip-path="url(#clip0_840_7231)">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M12.7198 17.1629L19.184 10.6986L18 9.51465L9.51472 17.9999L18 26.4852L19.184 25.3012L12.7201 18.8373L25.2222 18.8373L25.2222 17.1629L12.7198 17.1629Z"
                                    fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_840_7231">
                                    <rect width="12" height="12" fill="white"
                                        transform="matrix(-0.707107 0.707107 0.707107 0.707107 18 9.51465)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div class="swiper-pagination lg:!bottom-[70px]"></div>
                </div>
            </div>
        </div>
</template>
<!-- 
<script setup>
const props = defineProps(['id'])
</script> -->

<script>
import { Navigation, A11y, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

SwiperCore.use([Navigation, Pagination, A11y]);

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    props: ['id'],
    setup(props) {
        const modules = {
            navigation: true,
            pagination: true,
            a11y: true,
        };
        const navigationConfig = {
            nextEl: '.next-btn-' + props.id,
            prevEl: '.prev-btn-' + props.id,
        };

        return {
            modules,
            props,
            navigationConfig,
        };
    },
};
</script>
