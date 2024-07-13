<template>
    <div data-aos="fade-up"
        class="bg-blue-600 py-10 px-5 rounded-2xl relative flex flex-col-reverse h-fit xl:grid xl:grid-cols-2 xl:gap-10  xl:px-[60px] xl:py-[70px] 3xl:py-[100px] 3xl:px-[100px] mb-5 md:mb-12 last:mb-0">
        <div
            class="w-[60px] h-[60px] 375:w-[91px] 375:h-[91px] bg-blue-400 text-center rounded-full flex md:hidden justify-center items-center flex-col before:border  absolute top-[20px] 375:top-[0px] left-[60px] z-10  md:left-auto ">
            <div
                class="block w-[60px] h-[60px] animate-ping 375:w-[91px] 375:h-[91px] 3xl:w-[137px] 3xl:h-[137px] border border-whiteOp-200 transition-all rounded-full absolute before:top-[-14px]">
            </div>
            <p class="text-white text-xs 3xl:text-lg md:uppercase">
                Roi
            </p>
            <span class="text-white font-bold text-xs 375:text-lg 3xl:text-3xl">
                {{ itemData?.roi }}%
            </span>
        </div>

        <div>
            <div class="mb-[21px] 3xl:mb-12">
                <h2 class="font-bold text-white text-[24px] leading-none 375:text-[30px] mb-[10px] md:text-[40px] 3xl:text-[56px] md:mb-[21px] 3xl:mb-[31px]">
                    {{ itemData?.translations?.filter(item => item.languages_code.includes(langStore.lang))[0]?.title }}
                </h2>
                <p class="text-blue-400 leading-none text-[18px] md:text-[20px] flex items-center">
                    От {{ itemData?.price }}$
                    <span class="text-white/60 text-xs ml-2">
                        *включая налоги
                    </span>
                </p>
            </div>

            <div class="flex flex-col 375:flex-row items-center gap-5 mb-[30px] 3xl:mb-[50px] max-w-[436px] w-full">
                <div class="border border-blue-400 p-4 rounded-2xl w-full">
                    <h3 class="font-bold text-white mb-1 leading-none md:text-[20px] 3xl:mb-4">
                        {{ itemData?.full_size }} м²
                    </h3>
                    <p class="text-white text-sm md:text-base lg:leading-[120%]">
                        площадь <br>земли
                    </p>
                </div>
                <div class="border border-blue-400 p-4 max-w-[208px] rounded-2xl w-full">
                    <h3 class="font-bold text-white mb-1 leading-none md:text-[20px] 3xl:mb-4">
                        {{ itemData?.floors }}
                    </h3>
                    <p class="text-white text-sm md:text-base lg:leading-[120%]">
                        количество <br>этажей
                    </p>
                </div>
            </div>

            <ul class="grid grid-cols-2 gap-5 max-w-[436px] w-full">
                <li class="border-b border-whiteOp-300 max-w-[208px] pb-4">
                    <h3
                        class="font-bold text-white mb-1 leading-none md:text-[20px] 3xl:mb-4 before:block before:h-[6px] before:w-[6px] xl:before:w-[10px] xl:before:h-[10px] lg:before:rounded before:rounded-sm before:bg-blue-400 flex items-center before:mr-2">
                        {{ itemData?.room_living_size }} м²
                    </h3>
                    <p class="text-white text-sm md:text-base leading-[19px]">
                        площадь <br>прихожей
                    </p>
                </li>
                <li class="border-b border-whiteOp-300 max-w-[208px] pb-4">
                    <h3
                        class="font-bold text-white mb-1 leading-none md:text-[20px] 3xl:mb-4 before:block before:h-[6px] before:w-[6px] xl:before:w-[10px] xl:before:h-[10px] lg:before:rounded before:rounded-sm before:bg-blue-400 flex items-center before:mr-2">
                        {{ itemData?.room_kitchen_size }} м²
                    </h3>
                    <p class="text-white text-sm md:text-base leading-[19px]">
                        площадь <br>кухни
                    </p>
                </li>
                <li class="border-b border-whiteOp-300 max-w-[208px] pb-4">
                    <h3
                        class="font-bold text-white mb-1 leading-none md:text-[20px] 3xl:mb-4 before:block before:h-[6px] before:w-[6px] xl:before:w-[10px] xl:before:h-[10px] lg:before:rounded before:rounded-sm before:bg-blue-400 flex items-center before:mr-2">
                        {{ itemData?.room_bathroom_size }} м²
                    </h3>
                    <p class="text-white text-sm md:text-base leading-[19px]">
                        площадь <br>санузла
                    </p>
                </li>
                <li class="border-b border-whiteOp-300 max-w-[208px] pb-4">
                    <h3
                        class="font-bold text-white mb-1 leading-none md:text-[20px] 3xl:mb-4 before:block before:h-[6px] before:w-[6px] xl:before:w-[10px] xl:before:h-[10px] lg:before:rounded-[2px] before:rounded-sm before:bg-blue-400 flex items-center before:mr-2">
                        {{ itemData?.room_badroom_size }} м²
                    </h3>
                    <p class="text-white text-sm md:text-base leading-[19px]">
                        площадь спальни <br>/гостиной
                    </p>
                </li>
            </ul>

        </div>
        <div class="relative h-fit w-full flex justify-end">

            <div
                class="hidden min-w-[91px] h-[91px] 3xl:min-w-[137px] 3xl:h-[137px] bg-blue-400 text-center rounded-full md:flex justify-center items-center flex-col before:border  absolute top-p right-0 z-10 translate-x-1/3 -translate-y-1/3">
                <div
                    class="block animate-ping w-[91px] h-[91px] 3xl:w-[137px] 3xl:h-[137px] border border-whiteOp-200 transition-all rounded-full absolute before:top-[-14px]">
                </div>
                <p class="text-white text-xs 3xl:text-lg md:uppercase">
                    Roi
                </p>
                <span class="text-white font-bold text-lg 3xl:text-3xl">
                    {{ itemData?.roi }}%
                </span>
            </div>
            <div class="relative xl:max-w-[456px] 3xl:max-w-[600px] xl:max-h-[403px] 3xl:max-h-[516px] lg:rounded-3xl rounded-2xl overflow-hidden">

                <NuxtLink v-if="itemData?.video_360" :href="`#3d-object-${itemData?.id}`"
                    class="absolute top-2 right-2 z-10 md:right-auto md:left-[30px] md:top-[30px]">
                    <img src="/assets/img/about/360.png" class="max-w-[95px]" alt="ph">
                </NuxtLink>

                <swiper class="swiper-apartments w-full h-full" :modules="modules" :slides-per-view="1" :pagination="{ clickable: true }"
                    :navigation="navigationConfig" :space-between="15">

                    <swiper-slide v-for="image in itemData?.gallery" :key="image?.id"
                        class="relative overflow-hidden h-full">
                        <img :src="`https://avalon-panel.sonisapps.com/assets/${image?.directus_files_id}`"
                            class="rounded-[15px] h-[516px] object-cover w-full" alt="ph">
                    </swiper-slide>

                </swiper>

                <div :class="'swiper-button-next after:hidden next-btn-' + itemData?.id">
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
                <div :class="'swiper-button-prev after:hidden prev-btn-' + itemData?.id">
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



<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { Navigation, A11y, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

SwiperCore.use([Navigation, Pagination, A11y]);

const { itemData } = defineProps(['itemData']);

const langStore = useLangStore()

const modules = ref([Navigation, Pagination, A11y]);

const navigationConfig = ref({
    nextEl: '.next-btn-' + itemData?.id,
    prevEl: '.prev-btn-' + itemData?.id,
});
</script>
