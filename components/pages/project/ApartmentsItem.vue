<template>
    <div
        class="bg-blue-600 py-10 px-5 rounded-2xl relative lg:flex lg:items-center lg:gap-10 lg:flex-row-reverse lg:justify-between lg:py-[100px] lg:px-[100px] mb-5 md:mb-12 last:mb-0">
        <div
            class="min-w-[84px] h-[84px] md:min-w-[137px] md:h-[137px] bg-blue-400 text-center rounded-full flex justify-center items-center flex-col before:border before:border-blue-400 before:rounded-full before:w-[98px] before:h-[98px] md:before:w-[160px] md:before:h-[160px] before:absolute before:top-[-7px] before:left-[-7px] md:before:top-[-11px] md:before:left-[-12px]  absolute top-[0px] left-[60px] z-10 md:top-[70px] md:left-auto md:right-[60px]">
            <p class="text-white text-xs md:text-lg md:uppercase">
                Roi
            </p>
            <span class="text-white font-bold text-lg md:text-3xl">
                16%
            </span>
        </div>

        <div class="relative lg:max-w-[600px] lg:mr-0 lg:ml-auto lg:m-0 lg:rounded-3xl rounded-2xl overflow-hidden">
            <a href="#" class="absolute top-2 right-2 z-10 md:right-auto md:left-[30px] md:top-[30px]">
                <img src="/assets/img/about/360.png" class="max-w-[95px]" alt="ph">
            </a>

            <swiper class="mySwiper-about" :modules="modules" :slides-per-view="1" :pagination="{ clickable: true }"
                :navigation="navigationConfig" :space-between="15" @swiper="onSwiper" @slideChange="onSlideChange">

                <swiper-slide class="relative overflow-hidden">
                    <div class="swiper-slide">
                        <img src="/assets/img/about/about-slide-1.jpg" class="rounded-xl w-full" alt="ph">
                    </div>
                </swiper-slide>
                <swiper-slide class="relative overflow-hidden">
                    <div class="swiper-slide">
                        <img src="/assets/img/about/about-slide-1.jpg" class="rounded-xl w-full" alt="ph">
                    </div>
                </swiper-slide>
                <swiper-slide class="relative overflow-hidden">
                    <div class="swiper-slide">
                        <img src="/assets/img/about/about-slide-1.jpg" class="rounded-xl w-full" alt="ph">
                    </div>
                </swiper-slide>

            </swiper>

            <div :class="'swiper-button-next after:hidden next-btn-' + props.id">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="36" height="36" rx="18" fill="#002D52" fill-opacity="0.5" />
                    <g clip-path="url(#clip0_840_7236)">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M23.2802 17.1629L16.816 10.6986L18 9.51465L26.4853 17.9999L18 26.4852L16.816 25.3012L23.2799 18.8373L10.7778 18.8373L10.7778 17.1629L23.2802 17.1629Z"
                            fill="white" style="fill:white;fill-opacity:1;" />
                    </g>
                    <defs>
                        <clipPath id="clip0_840_7236">
                            <rect width="12" height="12" fill="white" style="fill:white;fill-opacity:1;"
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
                            fill="white" style="fill:white;fill-opacity:1;" />
                    </g>
                    <defs>
                        <clipPath id="clip0_840_7231">
                            <rect width="12" height="12" fill="white" style="fill:white;fill-opacity:1;"
                                transform="matrix(-0.707107 0.707107 0.707107 0.707107 18 9.51465)" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <div class="swiper-pagination lg:!bottom-[70px]"></div>
        </div>
        <div>
            <div class="mb-8 md:mb-12">
                <h2 class="font-bold text-white text-3xl mb-[10px] md:text-[56px] md:mb-7">
                    Апартаменты
                </h2>
                <p class="text-blue-400 text-lg md:text-xl flex items-center">
                    От 110 000$
                    <span class="text-white/60 text-xs ml-2">
                        *включая налоги
                    </span>
                </p>
            </div>

            <div class="flex items-center gap-5 mb-7 md:mb-12 max-w-[436px] w-full">
                <div class="border border-blue-400 p-4 rounded-2xl w-full">
                    <h3 class="font-bold text-white mb-2 md:text-xl md:mb-4 lg:leading-[100%]">
                        42 м²
                    </h3>
                    <p class="text-white text-sm md:text-base lg:leading-[120%]">
                        площадь <br>земли
                    </p>
                </div>
                <div class="border border-blue-400 p-4 max-w-[208px] rounded-2xl w-full">
                    <h3 class="font-bold text-white mb-2 md:text-xl md:mb-4 lg:leading-[100%]">
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
                        class="font-bold text-white mb-2 lg:leading-[100%] md:text-xl md:mb-4 before:block before:h-[6px] before:w-[6px] lg:before:w-[10px] lg:before:h-[10px] lg:before:rounded before:rounded-sm before:bg-blue-400 flex items-center before:mr-2">
                        3 м²
                    </h3>
                    <p class="text-white text-sm md:text-base lg:leading-[120%]">
                        площадь <br>прихожей
                    </p>
                </li>
                <li class="border-b border-whiteOp-300 max-w-[208px] pb-4">
                    <h3
                        class="font-bold text-white mb-2 lg:leading-[100%] md:text-xl md:mb-4 before:block before:h-[6px] before:w-[6px] lg:before:w-[10px] lg:before:h-[10px] lg:before:rounded before:rounded-sm before:bg-blue-400 flex items-center before:mr-2">
                        7 м²
                    </h3>
                    <p class="text-white text-sm md:text-base lg:leading-[120%]">
                        площадь <br>кухни
                    </p>
                </li>
                <li class="border-b border-whiteOp-300 max-w-[208px] pb-4">
                    <h3
                        class="font-bold text-white mb-2 lg:leading-[100%] md:text-xl md:mb-4 before:block before:h-[6px] before:w-[6px] lg:before:w-[10px] lg:before:h-[10px] lg:before:rounded before:rounded-sm before:bg-blue-400 flex items-center before:mr-2">
                        5 м²
                    </h3>
                    <p class="text-white text-sm md:text-base lg:leading-[120%]">
                        площадь <br>санузла
                    </p>
                </li>
                <li class="border-b border-whiteOp-300 max-w-[208px] pb-4">
                    <h3
                        class="font-bold text-white mb-2 lg:leading-[100%] md:text-xl md:mb-4 before:block before:h-[6px] before:w-[6px] lg:before:w-[10px] lg:before:h-[10px] lg:before:rounded before:rounded-sm before:bg-blue-400 flex items-center before:mr-2">
                        22 м²
                    </h3>
                    <p class="text-white text-sm md:text-base lg:leading-[120%]">
                        площадь спальни <br>/гостиной
                    </p>
                </li>
            </ul>

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
