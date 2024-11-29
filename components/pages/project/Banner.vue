<template>

    <section class="lg:pb-12 pb-0 min-h-[200px]">
        <div class="lg:pb-10 pb-5 pt-36 lg:pt-[290px] relative ">
            <!-- bg-[url('./../img/about/about-banner.webp')] -->
            <div class="banner max-w-none bg-center absolute top-0 left-0 w-full h-screen overflow-hidden -z-10 opacity-80">
                <NuxtImg v-if="itemData?.background" :src="`https://avalon-panel.sonisapps.com/assets/${itemData?.background}?width=1920&height=800`"
                    class="absolute top-0 left-0 w-full h-[110vh] object-cover z-0" alt="Image" />
                <NuxtImg v-else :src="getYoutubePreview().thumb(itemData?.video ?? '') ?? ''"
                    class="absolute top-0 left-0 w-full h-[110vh] object-cover z-0" alt="Image" />


                <!-- <div class=""> -->
                    <!-- <SkeletonLoader v-if="itemData?.preview" class="!absolute top-0 left-0 w-full h-[110vh] object-cover z-0">
                        <NuxtImg v-show="!imageLoaded" ref="image" loading="lazy"
                            :src="`https://avalon-panel.sonisapps.com/assets/${itemData?.preview}`" @error="onImageLoad"
                            @load="onImageLoad"
                            class="opacity-0 absolute top-0 left-0 w-full h-[110vh] object-cover z-0" alt="" />
                        <NuxtImg v-if="imageLoaded" loading="lazy"
                            :src="`https://avalon-panel.sonisapps.com/assets/${itemData?.preview}`"
                            class="absolute top-0 left-0 w-full h-[110vh] object-cover z-0" alt="" />
                    </SkeletonLoader> -->
                <!-- </div> -->

                <iframe v-if="`${itemData?.video}`" class="absolute scale-125 top-0 left-0 w-full h-[110vh] object-cover z-0"
                    width="100%" height="100%" src="" title="YouTube video player" frameborder="0"
                    allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture;web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div
                class="bg-gradient-to-t from-blue-500 from-0% w-full h-[500px] absolute -z-10 top-[calc(110vh_-_500px)] left-0">
            </div>
            <div class="bg-gradient-to-t from-blue-500/70 from-50% w-full h-52 absolute -z-10 top-0 left-0 rotate-180">
            </div>

            <div class="container">
                <div class="xl:flex xl:justify-between xl:gap-[20px]">
                    <div class=" w-full max-w-[950px]">
                        <div data-aos="fade-up" class="flex lg:-mr-20 flex-wrap items-center gap-[10px] md:gap-5">
                            <div
                                class="relative flex flex-col items-center justify-center w-full md:max-w-[186px] max-w-[141px] md:py-5 py-[15px]">
                                <NuxtImg src="/img/about/ribas.png" class="w-full h-full" alt="Image" loading="lazy" />
                            </div>
                            <div
                                class="relative flex flex-col items-center justify-center w-full md:max-w-[186px] max-w-[141px] md:py-5 py-[15px]">
                                <NuxtImg class="absolute top-0 left-0 -z-10 w-full h-full md:min-h-[86px] min-h-[60px] md:max-w-[186px] max-w-[141px]"
                                    src="/img/icons/about-border-white.svg" alt="bgd" loading="lazy" />
                                <span class="text-white text-xs md:text-sm">
                                    {{ $t('deadline') }}
                                </span>
                                <p class="text-white text-base font-bold md:text-xl">
                                    {{ $t('summer2025') }}
                                </p>
                            </div>
                            <div class="con order-1 md:order-none">
                                <div class="relative px-5 py-3 w-fit md:text-center md:px-7 min-w-[228px] md:min-w-0">
                                    <NuxtImg class="absolute w-full h-full top-0 left-0 -z-10 md:hidden"
                                        src="/img/index/bgd-decor.png" alt="bgd" loading="lazy" />
                                    <NuxtImg class="absolute top-0 left-0 -z-10 hidden md:block h-full w-full"
                                        src="/img/index/bgd-decor-2.png" alt="bgd" loading="lazy" />
                                    <h2 v-if="itemData?.price" class="text-sm text-white">
                                        {{ $t('cost') }} <br v-if="!$viewport.isLessThan('tablet')" class="hidden md:block"> <span
                                            class="font-bold md:text-xl">
                                            {{ $t('from') }} ${{
                                                String(itemData?.price)?.replace(/\B(?=(\d{3})+(?!\d))/g, " ") }}
                                        </span>
                                    </h2>
                                    <p class="text-xs text-slate-50 opacity-60 text-center">
                                        {{ $t('including_taxes') }}
                                    </p>
                                </div>
                            </div>
                            <div
                                class="w-full h-[60px] max-w-[62px] md:max-w-[98px] md:h-[86px] bg-white flex items-center justify-center rounded-[8px] md:rounded-[15px]">
                                <!-- <NuxtImg src="/img/icons/live-ic.svg" class="max-w-[42px] md:max-w-[68px]" alt="ic"> -->

                                <svg width="68" height="48" viewBox="0 0 68 48" class="max-w-12 lg:max-w-full"
                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_840_7506)">
                                        <path
                                            d="M67.9997 17.7157L54.7936 23.4667V19.2792C54.7936 16.2904 52.3398 13.8655 49.313 13.8655H19.756C16.7303 13.8655 14.2754 16.2891 14.2754 19.2792V42.5863C14.2754 45.575 16.7292 48 19.756 48H49.313C52.3387 48 54.7936 45.5761 54.7936 42.5863V38.3988L67.9997 44.1498V17.7157Z"
                                            fill="#F70000" />
                                        <path d="M26.8868 37.2038H19.6875V24.6454H21.9838V35.1488H26.8868V37.2038Z"
                                            fill="white" style="fill:white;fill-opacity:1;" />
                                        <path d="M30.7318 37.2202H28.4355V24.662H30.7318V37.2202Z" fill="white"
                                            style="fill:white;fill-opacity:1;" />
                                        <path
                                            d="M41.2644 24.6619L37.8467 37.2201H35.4693L32.0352 24.6619H34.3633L35.4693 28.4945L36.658 34.3653L37.8302 28.4614L38.9378 24.6614L41.2644 24.6619Z"
                                            fill="white" style="fill:white;fill-opacity:1;" />
                                        <path
                                            d="M49.8808 24.6454V26.6025H44.8449V29.8314H49.1379V31.855H44.8449V35.164H50.1128V37.2188H42.5664V24.6454H49.8808Z"
                                            fill="white" style="fill:white;fill-opacity:1;" />
                                        <path d="M19.7793 19.4399V19.4358H19.7833" fill="#F70000" />
                                        <path
                                            d="M0.334991 20.0675C0.228454 19.9625 0.144007 19.8377 0.0865137 19.7003C0.0290209 19.5629 -0.000379985 19.4156 3.70757e-06 19.2669C0.0132412 14.1166 2.04451 9.28201 5.7202 5.65119C9.42453 1.99207 14.3589 -0.0144121 19.6133 0.00106544C19.9136 0.00644431 20.1998 0.128303 20.4099 0.340322C20.6201 0.552341 20.7373 0.837503 20.7364 1.13421C20.7355 1.43092 20.6164 1.71537 20.405 1.92611C20.1935 2.13685 19.9067 2.25697 19.6063 2.26053C14.9654 2.24665 10.6081 4.01803 7.33761 7.24858C4.09227 10.4532 2.299 14.7229 2.28738 19.2715C2.28675 19.4946 2.21923 19.7126 2.09334 19.8979C1.96744 20.0832 1.78881 20.2276 1.57997 20.3127C1.37113 20.3979 1.14145 20.42 0.91988 20.3764C0.698314 20.3327 0.494793 20.2253 0.334991 20.0675Z"
                                            fill="#F70000" class="animate-fade-2s" />
                                        <path
                                            d="M4.65531 20.2674C4.54855 20.1621 4.46398 20.037 4.40648 19.8992C4.34898 19.7614 4.3197 19.6137 4.32032 19.4647C4.3341 15.4032 5.93745 11.5896 8.83565 8.72675C11.763 5.83537 15.6627 4.25158 19.8171 4.26733C20.1174 4.2729 20.4035 4.39497 20.6135 4.60716C20.8235 4.81936 20.9406 5.10465 20.9394 5.4014C20.9382 5.69815 20.8189 5.98253 20.6073 6.1931C20.3956 6.40368 20.1085 6.52354 19.8081 6.52679C16.2692 6.51345 12.9463 7.86107 10.4528 10.3244C7.98494 12.7621 6.61932 16.0113 6.6077 19.4725C6.60699 19.6956 6.53939 19.9135 6.41343 20.0988C6.28748 20.284 6.1088 20.4282 5.89996 20.5133C5.69111 20.5983 5.46145 20.6203 5.23994 20.5766C5.01843 20.5328 4.815 20.4252 4.65531 20.2674Z"
                                            fill="#F70000" class="animate-fade-1s" />
                                        <path
                                            d="M9.1729 20.1667C9.06592 20.0613 8.98121 19.936 8.9237 19.7979C8.86619 19.6599 8.83703 19.512 8.83791 19.3627C8.85196 16.522 9.97525 13.8556 12.0011 11.8545C14.057 9.82371 16.7974 8.71412 19.7164 8.7304C19.8679 8.72906 20.0183 8.75749 20.1586 8.81404C20.2989 8.87059 20.4265 8.95414 20.5338 9.05981C20.6412 9.16548 20.7262 9.29118 20.7839 9.4296C20.8417 9.56801 20.871 9.71639 20.8702 9.86609C20.8693 10.0158 20.8384 10.1638 20.7791 10.3016C20.7199 10.4394 20.6335 10.5642 20.525 10.6687C20.4165 10.7732 20.288 10.8554 20.1471 10.9104C20.0061 10.9655 19.8555 10.9923 19.704 10.9893C17.4001 10.9768 15.2389 11.8513 13.6185 13.4519C12.0214 15.0295 11.1361 17.1323 11.125 19.3731C11.124 19.5961 11.0562 19.8138 10.9301 19.9987C10.8041 20.1837 10.6254 20.3277 10.4167 20.4125C10.208 20.4974 9.97848 20.5193 9.75714 20.4756C9.5358 20.4319 9.33252 20.3244 9.1729 20.1667Z"
                                            fill="#F70000" class="animate-fade" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_840_7506">
                                            <rect width="68" height="48" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>


                            </div>
                        </div>
                        <h2 class="text-3xl text-white mt-5 md:text-[55px] lg:text-[65px] md:mt-6 md:-mr-40">
                            <span class="font-bold leading-[120%]">
                                {{ itemData?.translations?.filter(item =>
                                    item.languages_code.includes(langStore.lang))[0]?.title }}
                            </span>
                        </h2>
                        <p data-aos="fade-up"
                            class="text-white text-sm max-w-64 md:max-w-[501px] md:text-base mt-3 md:mt-6">
                            {{ itemData?.translations?.filter(item =>
                                item.languages_code.includes(langStore.lang))[0]?.description }}
                        </p>
                        <button data-aos="fade-up" @click="handleOpenModal"
                            class="w-full max-w-56 md:max-w-72 px-5 py-4 block text-sm md:text-base bg-white rounded-xl text-center font-bold whitespace-nowrap text-blue-500 hover:text-white hover:bg-blue-400 my-10 mb-0 transition-all ">
                            {{ $t('download_presentation') }}
                        </button>
                    </div>
                    <div class="flex flex-col xl:items-end justify-end xl:w-full">
                        <button v-if="itemData?.video" data-aos="fade-up" @click="handlePlayVideo(itemData?.video)"
                            type="button"
                            class="flex items-center mb-10 gap-5 mt-7 lg:mt-0 text-white text-sm xl:text-base xl:flex-col xl:ml-auto">
                            <div class="relative flex items-center justify-center max-w-[95px] w-full h-full xl:max-w-[165px]">
                                <NuxtImg src="/img/about/playBorder.svg" class="w-full h-full"
                                    alt="ic" loading="lazy" />
                                <svg class="absolute -ml-5 lg:-ml-10 animate-scaling" width="18" height="21"
                                    viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.7422 10.653L0.17076 20.7979L0.170761 0.508136L17.7422 10.653Z"
                                        fill="white" />
                                </svg>
                            </div>
                            {{ $t('see_video') }}
                        </button>
                        <div data-aos="fade-up"
                            class=" w-full flex gap-[10px] xl:gap-5 xl:mt-[100px] xl:flex  xl:justify-end items-stretch">
                            <div v-if="itemData?.villa_count && !$viewport.isLessThan('tablet')"
                                class="pb-[15px] flex-1 max-w-[240px] border-b border-whiteOp-300 md:pb-[30px] hidden md:block w-full">
                                <h3 class="text-white text-2xl font-bold mb-[10px] md:mb-[15px] md:text-[40px]">
                                    {{ itemData?.villa_count }}
                                </h3>
                                <p class="text-white text-sm md:text-base">
                                    {{ $t('vill') }}
                                </p>
                            </div>
                            <div v-if="itemData?.roi_procent"
                                class="pb-[15px] flex-1 max-w-[240px] border-b border-whiteOp-300 md:pb-[30px] w-full md:order-1">
                                <h3
                                    class="flex items-center gap-2 md:gap-[10px] text-blue-400 text-2xl font-bold mb-[10px] md:mb-[15px] md:text-[40px]">
                                    {{ itemData?.roi_procent }}%
                                    <NuxtImg src="/img/icons/about-banner-A-ic.svg"
                                        class="max-w-[20px] md:max-w-[30px] w-full" alt="ic" loading="lazy" />
                                </h3>
                                <p class="text-white text-sm md:text-base">
                                    {{ $t('projected') }} <br class="md:hidden">ROI
                                </p>
                            </div>
                            <div v-if="itemData?.apartments_count"
                                class="pb-[15px] flex-1 max-w-[240px] border-b border-whiteOp-300 md:pb-[30px] w-full">
                                <h3 class="text-white text-2xl font-bold mb-[10px] md:mb-[15px] md:text-[40px]">
                                    {{ itemData?.apartments_count }}
                                </h3>
                                <p class="text-white text-sm md:text-base">
                                    {{ $t('apartment') }}
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
import { ref } from 'vue';
import url from 'url'
import { getYoutubePreview } from '~/functions/getYoutubePreview';

const imageLoaded = ref(false);
const image = ref(null);

function onImageLoad() {
    imageLoaded.value = true;
}

onMounted(() => {
    if (image.value?.complete) {
        imageLoaded.value = true;
    }
});

const modalsStore = useModalsStore()

const langStore = useLangStore()
const { itemData } = defineProps(['itemData'])

const handleOpenModal = () => {
    modalsStore.addModal("presentation")
}

const handlePlayVideo = (videoUrl) => {
  const params = url.parse(videoUrl, true);
  
  const urlLink = `https://www.youtube.com/embed/${params?.query?.v ?? params?.pathname?.replace('/embed', '')?.replace('/', '')}?autoplay=1&mute=1&loop=1`
  document.querySelector('iframe').setAttribute('src', urlLink)
}
</script>
