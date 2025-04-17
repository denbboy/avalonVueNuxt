<template>
    <div class="bg-center absolute top-0 left-0 w-full h-[100%] -z-10 opacity-50">

        <div v-if="!item?.video">
            <NuxtImg v-if="$viewport.isLessThan('tablet')"
                :src="`https://api.avalonbali.com/assets/${item?.img}?width=320&height=600`"
                class="absolute brightness-[.5] top-0 left-0 w-full h-full" alt="Image" />
            <NuxtImg v-else :src="`https://api.avalonbali.com/assets/${item?.img}?width=800&height=400`"
                class="absolute brightness-[.5] top-0 left-0 w-full h-full" alt="Image" />
        </div>

        <div v-if="item?.video" class="h-full w-full">
            <NuxtImg :class="isVideoPlayed ? 'opacity-0 invisible' : 'opacity-100 visible'"
                :src="`https://api.avalonbali.com/assets/${item?.img}?width=1920&height=900`" width="1920"
                height="800" class="absolute hidden md:block object-cover brightness-[.5] top-0 left-0 w-full h-full"
                alt="Image" />

            <NuxtImg :class="isVideoPlayed ? 'opacity-0 invisible' : 'opacity-100 visible'"
                :src="`https://api.avalonbali.com/assets/${item?.projects[0]?.item?.mobile_preview}?width=600&height=700`"
                width="1920" height="800"
                class="absolute block md:hidden object-cover brightness-[.5] top-0 left-0 w-full h-full" alt="Image" />
            <iframe loading="lazy" :class="isVideoPlayed ? 'full-video' : ''"
                class="lg:scale-150 scale-[3] pointer-events-none w-full h-full" title="Avalon" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; loop; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>
    <div class="bg-gradient-to-t from-blue-500 from-30% w-full h-52 absolute -z-10 bottom-0 left-0"></div>
    <div class="bg-gradient-to-t from-blue-500 from-30% w-full h-52 absolute -z-10 top-0 left-0 rotate-180">
    </div>

    <div class="container">
        <div class="flex md:flex-row flex-col items-center" v-if="item?.projects?.length">

            <div class="is-will-hidden w-full min-h-[200px]">
                <div :class="isVideoPlayed ? 'opacity-0 invisible' : 'opacity-100 visible'"
                    class="banner__item__head md:flex items-center">
                    <NuxtImg v-if="item?.projects[0]?.item.logo" width="100" height="95"
                        :src="`https://api.avalonbali.com/assets/${item?.projects[0]?.item.logo}`"
                        class="mb-3 max-w-[100px] md:mb-0 md:mr-10" alt="logo" />
                    <div class="flex items-center w-full gap-5">
                        <div v-if="item?.projects[0]?.item?.due_date"
                            class="relative flex flex-col items-center justify-center w-full md:max-w-[186px] max-w-[141px] md:py-5 py-[15px]">
                            <NuxtImg
                                class="absolute top-0 left-0 -z-10 md:min-h-[86px] min-h-[60px] md:max-w-[186px] max-w-[141px]"
                                src="/img/icons/about-border-white.svg" alt="bgd" loading="lazy" />
                            <span class="text-white text-xs md:text-sm">
                                {{ $t('deadline') }}
                            </span>
                            <p class="text-white text-base font-bold md:text-xl">
                                <!-- {{ $t('summer2025') }} -->
                                {{ item?.projects[0]?.item?.due_date }}
                            </p>
                        </div>
                        <div class="relative px-5 py-3 w-fit md:text-center md:px-7">
                            <NuxtImg v-if="$viewport.isLessThan('tablet')"
                                class="absolute top-0 w-full left-0 -z-10 md:hidden h-full"
                                src="/img/index/bgd-decor.png" alt="bgd" />
                            <NuxtImg v-else class="absolute top-0 left-0 w-full -z-10 hidden md:block h-full"
                                src="/img/index/bgd-decor-2.png" alt="bgd" />

                            <h2 class="text-sm text-white">
                                {{ $t('cost') }}
                                <br v-if="!$viewport.isLessThan('tablet')" class="hidden md:block">
                                <span class="font-bold md:text-xl">
                                    {{ $t('from') }} {{ String(item?.price)?.replace(/\B(?=(\d{3})+(?!\d))/g, " ") }} $
                                </span>
                            </h2>
                            <p class="text-xs text-slate-50 opacity-60 text-center">
                                {{ $t('including_taxes') }}
                            </p>
                        </div>
                    </div>
                </div>
                <!-- <h2 class="text-3xl text-white mt-3 md:text-[65px] md:leading-[65px] md:mt-[40px] md:max-w-[900px]">
                    <span class="font-bold"
                        v-html="item?.projects[0]?.item?.translations?.filter(item => item.languages_code.includes(langStore.lang))[0]?.title">
                    </span>
                </h2> -->
                <div :class="isVideoPlayed ? 'opacity-0 invisible' : 'opacity-100 visible'"
                    class="text-white text-sm max-w-64 md:max-w-[600px] md:text-base mt-3 md:mt-12 md:mr-5"
                    v-html="item?.projects[0]?.item?.translations?.filter(item => item.languages_code.includes(langStore.lang))[0]?.description">
                </div>

                <div class="flex items-center justify-between md:block md:mt-7 mt-3 lg:mt-12">
                    <!-- <NuxtLink :to="`/projects/${item?.projects[0]?.item?.slug}`" class="white-button md:mt-7 mt-3 lg:mt-12"> -->
                    <NuxtLink :class="isVideoPlayed ? 'opacity-0 invisible' : 'opacity-100 visible'"
                        :to="`/projects/${item?.projects[0]?.item?.translations?.filter(item => item.languages_code.includes(langStore.lang))[0]?.slug}`"
                        class="white-button">
                        {{ $t('more') }}
                    </NuxtLink>

                    <button data-aos="fade-up" v-if="item?.video" @click="e => handlePlayVideo(e, item?.video)"
                        type="button"
                        class="play-button flex items-center gap-5 md:hidden md:mr-14 text-white text-sm xl:text-base w-fit xl:max-w-[165px] xl:flex-col xl:ml-auto">
                        <div class="relative flex items-center justify-center max-w-[95px] w-full xl:max-w-[165px]">
                            <svg v-if="!isVideoPlayed" class="absolute -ml-5 lg:-ml-10 animate-scaling" width="18"
                                height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.7422 10.653L0.17076 20.7979L0.170761 0.508136L17.7422 10.653Z"
                                    fill="white" />
                            </svg>
                            <svg v-else id="blue_copy" class="absolute -ml-5 w-1/4 lg:-ml-10 animate-scaling"
                                version="1.1" viewBox="0 0 100 100" xml:space="preserve"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g id="Layer_7_copy">
                                    <path
                                        d="M39.806,72.858h-8.915c-2.176,0-3.94-1.764-3.94-3.94V31.119c0-2.176,1.764-3.94,3.94-3.94h8.915   c2.176,0,3.94,1.764,3.94,3.94v37.799C43.746,71.094,41.982,72.858,39.806,72.858z" />
                                    <path
                                        d="M68.109,72.821h-8.915c-2.176,0-3.94-1.764-3.94-3.94V31.082c0-2.176,1.764-3.94,3.94-3.94h8.915   c2.176,0,3.94,1.764,3.94,3.94v37.799C72.049,71.057,70.285,72.821,68.109,72.821z" />
                                    <path
                                        d="M40.489,27.248c0.769,0.719,1.257,1.735,1.257,2.871v37.799c0,2.176-1.764,3.94-3.94,3.94h-8.915   c-0.234,0-0.46-0.03-0.683-0.069c0.704,0.658,1.643,1.069,2.683,1.069h8.915c2.176,0,3.94-1.764,3.94-3.94V31.119   C43.746,29.177,42.338,27.573,40.489,27.248z" />
                                    <path
                                        d="M68.792,27.211c0.769,0.719,1.257,1.735,1.257,2.871v37.799c0,2.176-1.764,3.94-3.94,3.94h-8.915   c-0.234,0-0.46-0.03-0.683-0.069c0.704,0.658,1.643,1.069,2.683,1.069h8.915c2.176,0,3.94-1.764,3.94-3.94V31.082   C72.049,29.14,70.641,27.535,68.792,27.211z" />
                                    <path
                                        d="M39.806,72.858h-8.915c-2.176,0-3.94-1.764-3.94-3.94V31.119   c0-2.176,1.764-3.94,3.94-3.94h8.915c2.176,0,3.94,1.764,3.94,3.94v37.799C43.746,71.094,41.982,72.858,39.806,72.858z"
                                        style="fill:#fff;stroke:#fff;stroke-miterlimit:10;" />
                                    <path
                                        d="M68.109,72.821h-8.915c-2.176,0-3.94-1.764-3.94-3.94V31.082   c0-2.176,1.764-3.94,3.94-3.94h8.915c2.176,0,3.94,1.764,3.94,3.94v37.799C72.049,71.057,70.285,72.821,68.109,72.821z"
                                        style="fill:#fff;stroke:#fff;stroke-miterlimit:10;" />
                                </g>
                            </svg>
                        </div>
                        <span :class="isVideoPlayed ? 'opacity-0 invisible' : 'opacity-100 visible'">{{ $t('see_video')
                            }}</span>
                    </button>
                </div>
            </div>

            <button data-aos="fade-up" v-if="item?.video" @click="e => handlePlayVideo(e, item?.video)" type="button"
                class="play-button hidden md:flex items-center gap-5 md:mr-14 text-white text-sm xl:text-base w-full xl:max-w-[165px] xl:flex-col xl:ml-auto">
                <div class="relative flex items-center justify-center max-w-[95px] w-full xl:max-w-[165px]">
                    <NuxtImg :class="isVideoPlayed ? 'opacity-0 invisible' : 'opacity-100 visible'"
                        src="/img/about/playBorder.svg" class="w-full hidden md:block" alt="ic" loading="lazy" />
                    <svg v-if="!isVideoPlayed" class="absolute -ml-5 lg:-ml-10 animate-scaling" width="18" height="21"
                        viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.7422 10.653L0.17076 20.7979L0.170761 0.508136L17.7422 10.653Z" fill="white" />
                    </svg>
                    <svg v-else id="blue_copy" class="absolute -ml-5 w-1/4 lg:-ml-10 animate-scaling" version="1.1"
                        viewBox="0 0 100 100" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g id="Layer_7_copy">
                            <path
                                d="M39.806,72.858h-8.915c-2.176,0-3.94-1.764-3.94-3.94V31.119c0-2.176,1.764-3.94,3.94-3.94h8.915   c2.176,0,3.94,1.764,3.94,3.94v37.799C43.746,71.094,41.982,72.858,39.806,72.858z" />
                            <path
                                d="M68.109,72.821h-8.915c-2.176,0-3.94-1.764-3.94-3.94V31.082c0-2.176,1.764-3.94,3.94-3.94h8.915   c2.176,0,3.94,1.764,3.94,3.94v37.799C72.049,71.057,70.285,72.821,68.109,72.821z" />
                            <path
                                d="M40.489,27.248c0.769,0.719,1.257,1.735,1.257,2.871v37.799c0,2.176-1.764,3.94-3.94,3.94h-8.915   c-0.234,0-0.46-0.03-0.683-0.069c0.704,0.658,1.643,1.069,2.683,1.069h8.915c2.176,0,3.94-1.764,3.94-3.94V31.119   C43.746,29.177,42.338,27.573,40.489,27.248z" />
                            <path
                                d="M68.792,27.211c0.769,0.719,1.257,1.735,1.257,2.871v37.799c0,2.176-1.764,3.94-3.94,3.94h-8.915   c-0.234,0-0.46-0.03-0.683-0.069c0.704,0.658,1.643,1.069,2.683,1.069h8.915c2.176,0,3.94-1.764,3.94-3.94V31.082   C72.049,29.14,70.641,27.535,68.792,27.211z" />
                            <path
                                d="M39.806,72.858h-8.915c-2.176,0-3.94-1.764-3.94-3.94V31.119   c0-2.176,1.764-3.94,3.94-3.94h8.915c2.176,0,3.94,1.764,3.94,3.94v37.799C43.746,71.094,41.982,72.858,39.806,72.858z"
                                style="fill:#fff;stroke:#fff;stroke-miterlimit:10;" />
                            <path
                                d="M68.109,72.821h-8.915c-2.176,0-3.94-1.764-3.94-3.94V31.082   c0-2.176,1.764-3.94,3.94-3.94h8.915c2.176,0,3.94,1.764,3.94,3.94v37.799C72.049,71.057,70.285,72.821,68.109,72.821z"
                                style="fill:#fff;stroke:#fff;stroke-miterlimit:10;" />
                        </g>
                    </svg>
                </div>
                <span :class="isVideoPlayed ? 'opacity-0 invisible' : 'opacity-100 visible'">{{ $t('see_video')
                    }}</span>
            </button>
        </div>

        <div v-if="!item?.projects?.length" class="flex items-center justify-between">
            <div class="">
                <div class="banner__item__head md:flex">
                    <div class="flex mb-5 lg:mb-0">
                        <h1 class="text-white text-[45px] font-bold leading-1 md:text-[70px] mr-3">
                            {{item?.translations?.filter(item =>
                                item.languages_code.includes(langStore.lang))[0]?.title}}
                        </h1>
                        <span
                            class="text-white uppercase bg-blue-400 h-6 text-center flex items-center px-2 rounded-md lg:rounded-[10px] text-xs lg:text-base md:h-8 md:px-3">
                            {{ $t('bali') }}
                        </span>
                    </div>
                    <div class="con md:ml-4 md:pl-5 md:px-7 relative">
                        <div class="absolute h-12 left-0 top-1/2 -translate-y-1/2 w-[1px] bg-white/20"></div>
                        <div v-if="item?.price" class="relative px-5 py-3 w-fit md:text-center mb-8 lg:mb-0">
                            <NuxtImg v-if="$viewport.isLessThan('tablet')"
                                class="absolute top-0 w-full left-0 -z-10 md:hidden h-full"
                                src="/img/index/bgd-decor.png" alt="bgd" />
                            <NuxtImg v-else class="absolute top-0 left-0 w-full -z-10 hidden md:block h-full"
                                src="/img/index/bgd-decor-2.png" alt="bgd" />

                            <h2 class="text-sm text-white">
                                {{ $t('cost') }} <br v-if="!$viewport.isLessThan('tablet')" class="hidden md:block">
                                <span class="font-bold md:text-xl">
                                    {{ $t('from') }} {{ String(item?.price)?.replace(/\B(?=(\d{3})+(?!\d))/g, " ") }} $
                                </span>
                            </h2>
                            <p class="text-xs text-slate-50 opacity-60 text-center">
                                {{ $t('including_taxes') }}
                            </p>
                        </div>
                    </div>
                </div>
                <h2 v-if="item?.translations?.filter(item => item.languages_code.includes(langStore.lang))[0]?.description"
                    v-html="item?.translations?.filter(item => item.languages_code.includes(langStore.lang))[0]?.description"
                    class="text-3xl font-light text-white mt-5 md:text-[55px] lg:text-[65px] leading-[100%] md:leading-[55px] lg:leading-[75px] md:mt-8 md:max-w-[825px]">
                </h2>

                <button @click="addModal" class="white-button mt-7 lg:mt-12">
                    {{ $t('download_presentation') }}
                </button>
            </div>

            <div class="hidden md:block" v-if="!$viewport.isLessThan('tablet')">
                <NuxtImg width="156" height="156" loading="lazy" src="/img/index/banner-logo.svg" alt="Image" />
            </div>

        </div>

        <div v-if="item?.strings?.length" :class="isVideoPlayed ? 'opacity-0 invisible' : 'opacity-100 visible'"
            class="flex justify-between items-end lg:mt-10 xl:mt-10 mt-10">
            <div class="flex gap-5">
                <div v-if="item?.strings.some(item => item.String_id.id === 2)"
                    class="pr-5 border-r border-whiteOp-300">
                    <div class="font-bold text-white text-2xl mb-2 md:text-4xl md:mb-3"
                        v-html="item?.strings.filter(item => item.String_id.id === 2)[0].String_id?.translations?.filter(item => item.languages_code.includes(langStore.lang))[0]?.title">
                    </div>
                    <span class="text-white text-sm md:text-base"
                        v-html="item?.strings.filter(item => item.String_id.id === 2)[0].String_id?.translations?.filter(item => item.languages_code.includes(langStore.lang))[0]?.description">
                    </span>
                </div>
                <div v-if="item?.strings.some(item => item.String_id.id === 3)">
                    <div class="font-bold text-white text-2xl mb-2 md:text-4xl md:mb-3"
                        v-html="item?.strings.filter(item => item.String_id.id === 3)[0].String_id?.translations?.filter(item => item.languages_code.includes(langStore.lang))[0]?.title">
                    </div>
                    <span class="text-white text-sm md:text-base"
                        v-html="item?.strings.filter(item => item.String_id.id === 3)[0].String_id?.translations?.filter(item => item.languages_code.includes(langStore.lang))[0]?.description">
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { getYoutubePreview } from '~/functions/getYoutubePreview'
import url from 'url'
import { useNuxtApp } from '#app'
import { ref, computed } from 'vue'

const { item, handleVideoPlay, handleVideoPause } = defineProps({
    item: Object,
    handleVideoPlay: Object,
    handleVideoPause: Object,

})

const { $viewport } = useNuxtApp()

const modalsStore = useModalsStore()
const langStore = useLangStore();

const isActive = ref(false)
const isVideoPlayed = ref(false);
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

const addModal = () => {
    modalsStore.addModal('presentation')
}

const swiperInstance = ref(null);

onMounted(() => {
    swiperInstance.value = document.querySelector('.swiper-banner');
});

import { onMounted } from "vue";

let player;

const handlePlayVideo = (e, videoUrl) => {
    const iframeBlock = e.target.closest(".swiper-slide")?.querySelector("iframe");
    if (!iframeBlock) return;

    let urlLink;
    const params = new URL(videoUrl);
    const videoId = params.searchParams.get("v") || params.pathname.replace("/embed", "").replace("/", "");

    if (isVideoPlayed.value) {
        urlLink = "";
        handleVideoPause();
    } else {
        urlLink = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&rel=0&modestbranding=1&fs=0&controls=0&playlist=${videoId}&enablejsapi=1`;
        handleVideoPlay();
    }

    isVideoPlayed.value = !isVideoPlayed.value;

    iframeBlock.setAttribute("src", urlLink);

    // Ждем загрузки видео и устанавливаем 720p через API
    iframeBlock.onload = () => {
        player = new YT.Player(iframeBlock, {
            events: {
                onReady: (event) => event.target.setPlaybackQuality("hd720"),
                onStateChange: (event) => {
                    if (event.data === YT.PlayerState.ENDED) {
                        alert("конец видео");
                    }
                },
            },
        });
    };
};

// Загружаем YouTube API при монтировании компонента
onMounted(() => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
});


</script>