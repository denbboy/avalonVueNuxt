<template>
    <section class=" bg-no-repeat bg-cover pt-14 pb-32 relative overflow-hidden">
        <Parallaxy class="absolute top-0 left-0 z-0 h-full w-full" :speed="150"
            :animation="(delta) => `transform: translate3d(0, ${delta}px, 0);`">
            <!-- <NuxtImg class="h-full w-full object-cover scale-125" src="/img/index/buy-bgd.webp" /> -->
            <NuxtImg class="h-full w-full object-cover scale-[1.7]"
                src="/img/about/process.webp" width="1920" height="1200" alt="image" />
        </Parallaxy>
        <div class="container relative z-10">

            <!-- bg-[url('./../img/index/buy-list-bg.png')] md:bg-[url('./../img/index/buy-bg-desk.png')] bg-no-repeat bg-cover -->
            <div
                class=" md:rounded-tr-3xl md:rounded-bl-3xl pt-14 pb-28 px-5 relative md:pb-11 md:px-[80px] lg:px-[120px] md:pt-[100px]">

                <NuxtImg loading="lazy" src="/img/index/buy-bg-desk.png"
                    class="absolute top-0 left-0 w-full h-full z-0 hidden md:block backdrop-blur-[1px]" alt="Image" />
                <NuxtImg loading="lazy" src="/img/index/buy-list-bg.png"
                    class="absolute top-0 left-0 w-full h-full z-0 block md:hidden backdrop-blur" alt="Image" />

                <div class="md:flex hidden absolute w-[150px] lg:w-[240px] items-center right-0 top-[140px]">
                    <div class="w-[10px] h-[10px] rounded-md bg-blue-400"></div>
                    <div class="bg-white/20 w-full h-[2px]"></div>
                </div>

                <svg class="absolute left-1/2 -translate-x-1/2 top-0 md:hidden" width="10" height="45" viewBox="0 0 10 45"
                    fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line opacity="0.2" x1="5.5" y1="-2.18557e-08" x2="5.5" y2="40" stroke="#0E88EC" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M6 35C8.20914 35 10 36.7909 10 39L10 41C10 43.2091 8.20914 45 6 45L4 45C1.79086 45 -7.8281e-08 43.2091 -1.74846e-07 41L-2.62268e-07 39C-3.58833e-07 36.7909 1.79086 35 4 35L6 35Z"
                        fill="#0E88EC"/>
                </svg>

                <div class="mb-7 md:flex md:items-center md:mb-[50px] relative z-10">

                    <h2 class="font-bold text-white max-w-[580px] text-3xl mb-7 md:text-[45px] md:leading-[45px] lg:text-[56px] lg:leading-[56px] md:text-left md:m-0" data-aos="fade-up">
                        {{ itemStrings?.filter(item => item.id === 136)[0]?.String_id?.translations?.filter(item => item.languages_code.code.includes(langStore.lang))[0]?.title }}
                    </h2>
                    <p class="text-white/60 opacity-50 text-sm md:text-sm lg:text-base md:text-left md:ml-5 md:mr-24 max-w-[360px] lg:max-w-[500px]" data-aos="fade-up">
                        {{ itemStrings?.filter(item => item.id === 136)[0]?.String_id?.translations?.filter(item => item.languages_code.code.includes(langStore.lang))[0]?.description }}
                    </p>
                </div>

                <div class="relative z-10" data-aos="fade-up">
                    <NuxtImg loading="lazy" src="/img/index/point-line.png"
                        class="hidden md:block absolute md:top-[71px] lg:top-[90px] md:h-[209px] lg:h-[260px] right-[-40px] w-full md:max-w-[910px] lg:max-w-[1188px]"
                        alt="line ph" />
                    <ul
                        class="mb-7 md:mb-12 md:grid md:grid-cols-5 md:gap-5 md:after:hidden after:w-[1px] after:h-[calc(100%-30px)] after:bg-white/40 after:absolute after:bottom-0 after:left-[24.5px]">
                        <li class="mb-5 flex items-center md:flex-col">
                            <div
                                class="relative w-full max-w-[50px] mr-4 md:mr-0 md:mb-14 flex items-center justify-center md:max-w-[47px] md:h-[47px] lg:max-w-[66px] lg:h-[66px]">
                                <div class="">
                                </div>
                                <div
                                    class="hidden md:block min-w-[10px] h-[10px] bg-blue-400 rounded absolute bottom-[-30px] left-[50%] translate-x-[-50%]">
                                </div>
                                <div
                                    class=" bg-blue-400 min-w-[24px] h-[24px] flex items-center justify-center rounded-md md:w-full md:h-full md:rounded-2xl z-[3]">
                                    <span class="text-white font-bold text-xs lg:text-lg">
                                        1
                                    </span>
                                </div>
                            </div>
                            <p class="text-white text-sm md:text-xs lg:text-base md:text-center">
                                {{ itemStrings?.filter(item => item.id === 138)[0]?.String_id?.translations?.filter(item => item.languages_code.code.includes(langStore.lang))[0]?.title }}
                            </p>
                        </li>
                        <li class="mb-5 flex items-center md:flex-col">
                            <div
                                class="relative w-full max-w-[50px] mr-4 md:mr-0 md:mb-14 flex items-center justify-center md:max-w-[47px] md:h-[47px] lg:max-w-[66px] lg:h-[66px]">
                                <div class="">
                                </div>
                                <div
                                    class="hidden md:block min-w-[10px] h-[10px] bg-blue-400 rounded absolute bottom-[-30px] left-[50%] translate-x-[-50%]">
                                </div>
                                <div
                                    class=" bg-blue-400 min-w-[27px] h-[27px] flex items-center justify-center rounded-md md:w-full md:h-full md:rounded-2xl z-[3]">
                                    <span class="text-white font-bold text-xs lg:text-lg">
                                        2
                                    </span>
                                </div>
                            </div>
                            <p class="text-white text-sm md:text-xs lg:text-base md:text-center">
                                {{ itemStrings?.filter(item => item.id === 139)[0]?.String_id?.translations?.filter(item => item.languages_code.code.includes(langStore.lang))[0]?.title }}
                            </p>
                        </li>
                        <li class="mb-5 flex items-center md:flex-col">
                            <div
                                class=" relative w-full max-w-[50px] mr-4 md:mr-0 md:mb-14 flex items-center justify-center md:max-w-[47px] md:h-[47px] lg:max-w-[66px] lg:h-[66px]">
                                <div
                                    class="hidden md:block min-w-[10px] h-[10px] bg-blue-400 rounded absolute bottom-[-30px] left-[50%] translate-x-[-50%]">
                                </div>
                                <div class="">
                                </div>
                                <div
                                    class=" bg-blue-400 min-w-[30px] h-[30px] flex items-center justify-center rounded-lg z-[3] md:w-full md:h-full md:rounded-2xl">
                                    <span class="text-white font-bold text-xs lg:text-lg">
                                        3
                                    </span>
                                </div>
                            </div>
                            <p class="text-white text-sm md:text-xs lg:text-base md:text-center">
                                {{ itemStrings?.filter(item => item.id === 140)[0]?.String_id?.translations?.filter(item => item.languages_code.code.includes(langStore.lang))[0]?.title }}
                            </p>
                        </li>
                        <li class="mb-5 flex items-center md:flex-col">
                            <div
                                class="relative w-full max-w-[50px] mr-4 md:mr-0 md:mb-14 flex items-center justify-center md:max-w-[47px] md:h-[47px] lg:max-w-[66px] lg:h-[66px]">
                                <div
                                    class="hidden md:block min-w-[10px] h-[10px] bg-blue-400 rounded absolute bottom-[-30px] left-[50%] translate-x-[-50%]">
                                </div>
                                <div class="">
                                </div>
                                <div
                                    class=" bg-blue-400 min-w-[33px] h-[33px] flex items-center justify-center rounded-lg z-[3] md:w-full md:h-full md:rounded-2xl">
                                    <span class="text-white font-bold text-xs lg:text-lg">
                                        4
                                    </span>
                                </div>
                            </div>
                            <p class="text-white text-sm md:text-xs lg:text-base md:text-center">
                                {{ itemStrings?.filter(item => item.id === 141)[0]?.String_id?.translations?.filter(item => item.languages_code.code.includes(langStore.lang))[0]?.title }}
                            </p>
                        </li>
                        <li class="mb-5 flex items-center md:flex-col">
                            <div
                                class="relative w-full max-w-[50px] mr-4 md:mr-0 md:mb-14 flex items-center justify-center md:max-w-[47px] md:h-[47px] lg:max-w-[66px] lg:h-[66px]">
                                <div
                                    class="hidden md:block min-w-[10px] h-[10px] bg-blue-400 rounded absolute bottom-[-30px] left-[50%] translate-x-[-50%]">
                                </div>
                                <div class="">
                                </div>
                                <div
                                    class=" bg-blue-400 min-w-[36px] h-[36px] flex items-center justify-center rounded-lg z-[3] md:w-full md:h-full md:rounded-2xl">
                                    <span class="text-white font-bold text-xs lg:text-lg">
                                        5
                                    </span>
                                </div>
                            </div>
                            <p class="text-white text-sm md:text-xs lg:text-base md:text-center">
                                {{ itemStrings?.filter(item => item.id === 142)[0]?.String_id?.translations?.filter(item => item.languages_code.code.includes(langStore.lang))[0]?.title }}
                            </p>
                        </li>
                        <li class="mb-5 flex items-center md:flex-col">
                            <div
                                class="relative w-full max-w-[50px] mr-4 md:mr-0 md:mb-14 flex items-center justify-center md:max-w-[47px] md:h-[47px] lg:max-w-[66px] lg:h-[66px]">
                                <div
                                    class="hidden md:block min-w-[10px] h-[10px] bg-blue-400 rounded absolute bottom-[-30px] left-[50%] translate-x-[-50%]">
                                </div>
                                <div class="">
                                </div>
                                <div
                                    class=" bg-blue-400 min-w-[39px] h-[39px] flex items-center justify-center rounded-xl z-[3] md:w-full md:h-full md:rounded-2xl">
                                    <span class="text-white hidden md:block font-bold text-xs lg:text-lg">
                                        10
                                    </span>
                                    <span class="text-white flex md:hidden font-bold text-xs lg:text-lg">
                                        6
                                    </span>
                                </div>
                            </div>
                            <p class="text-white text-sm md:text-xs lg:text-base md:text-center">
                                {{ itemStrings?.filter(item => item.id === 147)[0]?.String_id?.translations?.filter(item => item.languages_code.code.includes(langStore.lang))[0]?.title }}
                            </p>
                        </li>
                        <li class="mb-5 flex items-center md:flex-col">
                            <div
                                class="relative w-full max-w-[50px] mr-4 md:mr-0 md:mb-14 flex items-center justify-center md:max-w-[47px] md:h-[47px] lg:max-w-[66px] lg:h-[66px]">
                                <div
                                    class="hidden md:block min-w-[10px] h-[10px] bg-blue-400 rounded absolute bottom-[-30px] left-[50%] translate-x-[-50%]">
                                </div>
                                <div class="">
                                </div>
                                <div
                                    class=" bg-blue-400 min-w-[42px] h-[42px] flex items-center justify-center rounded-xl after:block z-[3] md:w-full md:h-full md:rounded-2xl">
                                    <span class="text-white hidden md:block font-bold text-xs lg:text-lg">
                                        9
                                    </span>
                                    <span class="text-white flex md:hidden font-bold text-xs lg:text-lg">
                                        7
                                    </span>
                                </div>
                            </div>
                            <p class="text-white text-sm md:text-xs lg:text-base md:text-center">
                                {{ itemStrings?.filter(item => item.id === 146)[0]?.String_id?.translations?.filter(item => item.languages_code.code.includes(langStore.lang))[0]?.title }}
                            </p>
                        </li>
                        <li class="mb-5 flex items-center md:flex-col">
                            <div
                                class="relative w-full max-w-[50px] mr-4 md:mr-0 md:mb-14 flex items-center justify-center md:max-w-[47px] md:h-[47px] lg:max-w-[66px] lg:h-[66px]">
                                <div
                                    class="hidden md:block min-w-[10px] h-[10px] bg-blue-400 rounded absolute bottom-[-30px] left-[50%] translate-x-[-50%]">
                                </div>
                                <div class="">
                                </div>
                                <div
                                    class=" bg-blue-400 min-w-[45px] h-[45px] flex items-center justify-center rounded-xl z-[3] md:w-full md:h-full md:rounded-2xl">
                                    <span class="text-white hidden md:block font-bold text-xs lg:text-lg">
                                        8
                                    </span>
                                    <span class="text-white flex md:hidden font-bold text-xs lg:text-lg">
                                        8
                                    </span>
                                </div>
                            </div>
                            <p class="text-white text-sm md:text-xs lg:text-base md:text-center">
                                {{ itemStrings?.filter(item => item.id === 145)[0]?.String_id?.translations?.filter(item => item.languages_code.code.includes(langStore.lang))[0]?.title }}
                            </p>
                        </li>
                        <li class="mb-5 flex items-center md:flex-col">
                            <div
                                class="relative w-full max-w-[50px] mr-4 md:mr-0 md:mb-14 flex items-center justify-center md:max-w-[47px] md:h-[47px] lg:max-w-[66px] lg:h-[66px]">
                                <div
                                    class="hidden md:block min-w-[10px] h-[10px] bg-blue-400 rounded absolute bottom-[-30px] left-[50%] translate-x-[-50%]">
                                </div>
                                <div class="">
                                </div>
                                <div
                                    class=" bg-blue-400 min-w-[48px] h-[48px] flex items-center justify-center rounded-xl z-[3] md:w-full md:h-full md:rounded-2xl">
                                    <span class="text-white hidden md:block font-bold text-xs lg:text-lg">
                                        7
                                    </span>
                                    <span class="text-white flex md:hidden font-bold text-xs lg:text-lg">
                                        9
                                    </span>
                                </div>
                            </div>
                            <p class="text-white text-sm md:text-xs lg:text-base md:text-center">
                                {{ itemStrings?.filter(item => item.id === 144)[0]?.String_id?.translations?.filter(item => item.languages_code.code.includes(langStore.lang))[0]?.title }}
                            </p>
                        </li>
                        <li class="mb-5 flex items-center md:flex-col">
                            <div
                                class="relative w-full max-w-[50px] mr-4 md:mr-0 md:mb-14 flex items-center justify-center md:max-w-[47px] md:h-[47px] lg:max-w-[66px] lg:h-[66px]">
                                <div
                                    class="hidden md:block min-w-[10px] h-[10px] bg-blue-400 rounded absolute bottom-[-30px] left-[50%] translate-x-[-50%]">
                                </div>
                                <div
                                    class=" bg-blue-400 min-w-[50px] h-[50px] flex items-center justify-center rounded-2xl md:w-full md:h-full md:rounded-2xl z-[3]">
                                    <span class="text-white hidden md:block font-bold text-xs lg:text-lg">
                                        6
                                    </span>
                                    <span class="text-white flex md:hidden font-bold text-xs lg:text-lg">
                                        10
                                    </span>
                                </div>
                            </div>
                            <p class="text-white text-sm md:text-xs lg:text-base md:text-center">
                                {{ itemStrings?.filter(item => item.id === 143)[0]?.String_id?.translations?.filter(item => item.languages_code.code.includes(langStore.lang))[0]?.title }}
                            </p>
                        </li>
                    </ul>
                </div>

                <div
                    class="md:flex relative z-10 md:flex-row-reverse md:justify-between md:items-center md:pt-10 md:border-t md:border-whiteOp-300" data-aos="fade-up">
                    <button @click="handleOpenModal" type="button"
                        class="w-full bg-white p-4 font-bold text-blue-500 text-sm rounded-xl transition-all hover:bg-blue-400 hover:text-white md:mb-0 h-[48px] md:h-[70px] md:text-base mb-5 md:max-w-[300px]">
                        {{ $t('get_presentation') }}
                    </button>

                    <div class="flex items-center gap-10">
                        <NuxtImg loading="lazy" src="/img/index/a-decor-op.svg" class="hidden md:block md:max-w-[112px]" alt="decor" />
                        <div class="pt-5 border-t border-whiteOp-300 md:border-none md:pt-0 md:max-w-[526px]">
                            <p class="text-white opacity-50 text-sm mb-5 md:text-[14px] md:text-left">
                                {{ itemStrings?.filter(item => item.id === 148)[0]?.String_id?.translations?.filter(item => item.languages_code.code.includes(langStore.lang))[0]?.title }}
                            </p>
                            <p class="text-white opacity-50 text-sm md:text-[14px] md:text-left">
                                {{ itemStrings?.filter(item => item.id === 149)[0]?.String_id?.translations?.filter(item => item.languages_code.code.includes(langStore.lang))[0]?.title }}
                            </p>
                        </div>
                    </div>

                </div>


                <div
                    class="w-[170px] h-[170px] lg:w-[244px] lg:h-[244px] text-center rounded-full bg-blue-400 transition-all flex flex-col items-center justify-center gap-1 absolute bottom-[-85px] left-[50%] 3xl:left-0 3xl:top-[50%] md:translate-y-[-50%] translate-x-[-50%] md:top-[50%] md:left-2">
                    <div
                        class="block animate-ping w-[170px] h-[170px] md:w-[244px] md:h-[244px] border border-whiteOp-200 transition-all rounded-full absolute before:top-[-14px]">
                    </div>
                    <b class="block font-bold text-white md:text-[45px] lg:text-[60px] leading-[100%] text-[40px] md:mb-3">
                        {{ itemStrings?.filter(item => item.id === 137)[0]?.String_id?.translations?.filter(item => item.languages_code.code.includes(langStore.lang))[0]?.title }}
                    </b>
                    <span class="text-white text-xs lg:text-base max-w-[130px]">
                        {{ itemStrings?.filter(item => item.id === 137)[0]?.String_id?.translations?.filter(item => item.languages_code.code.includes(langStore.lang))[0]?.description }}
                    </span>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import Parallaxy from '@lucien144/vue3-parallaxy';
import { useBlocksStore } from '~/stores/functions/blocks';

const modalsStore = useModalsStore()
const langStore = useLangStore()
const blocksStore = useBlocksStore()

const handleOpenModal = () => {
    modalsStore.addModal("presentation")
}

const props = defineProps(['itemStrings'])

const route = useRoute();
const itemStrings = ref([]);

watchEffect(() => {
  const isProjectPage = route.path.includes('/projects/');
  
  if (isProjectPage) {
    itemStrings.value = props.itemStrings ?? (blocksStore.blocks?.filter(item => item?.id === 31)[0]?.strings || []);
  } else {
    const block = blocksStore.blocks?.find(item => item?.id === 31);
    itemStrings.value = block?.strings || [];
  }
});

watch(props, async (newValue) => {

    if (window.location.href.includes('/projects/')) {
        itemStrings.value = newValue.itemStrings ?? newValue.blocks?.filter(item => item?.id === 31)[0];
    }
});
watch(blocksStore, async (newValue) => {

    if (!window.location.href.includes('/projects/')) {
        const block = newValue.blocks?.filter(item => item?.id === 31)[0];
        itemStrings.value = block?.strings || [];
    }
});
</script>
