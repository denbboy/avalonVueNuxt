<template>
    <section class=" bg-no-repeat bg-cover py-14 md:py-24 relative overflow-hidden">
        <Parallaxy v-if="isCanShow" class="absolute top-0 left-0 z-0 h-full w-full" :speed="150"
            :animation="(delta) => `transform: translate3d(0, ${delta}px, 0);`">
            <!-- <NuxtImg class="h-full w-full object-cover scale-125" src="/img/index/buy-bgd.webp" /> -->
            <NuxtImg class="h-full w-full object-cover scale-[1.7]" src="/img/about/bgd-sec-changy.webp" alt="image" />
        </Parallaxy>
        <div class="container relative z-10">
            <div
                class="bg-no-repeat bg-cover pt-[60px] pb-9 px-5 md:px-[70px] xl:px-[0px] relative  xl:py-24 3xl:pr-[82px] 3xl:pl-[125px]">
                <NuxtImg src="/img/about/phone-mob.png" class="absolute z-10 w-[120px] top-[-40px] right-[-30px] xl:hidden"
                    alt="ph" loading="lazy"/>

                    <NuxtImg src="/img/index/buy-bg-desk.png"
                    class="absolute top-0 left-0 w-full h-full z-0 hidden md:block backdrop-blur-[1px]" alt="Image" loading="lazy" />
                <NuxtImg src="/img/index/buy-list-bg.png"
                    class="absolute top-0 left-0 w-full h-full z-0 block md:hidden backdrop-blur" alt="Image" loading="lazy" />

                <div
                    class="xl:grid xl:grid-cols-2 w-full h-full xl:translate-x-[70px] 3xl:translate-x-0 z-10 relative xl:items-center xl:gap-7">

                    <div class="">
                        <h2 data-aos="fade-up"
                            class="font-bold text-white text-3xl mb-7 md:text-[40px] lg:text-[56px] md:mb-[50px]">
                            {{ $t('changu') }}
                        </h2>
                        <div data-aos="fade-up" class=" mb-5 md:mb-[30px] md:flex md:gap-2">
                            <strong class="font-bold text-white text-lg uppercase md:text-[26px] md:font-normal">
                                <!-- Лучшее место -->
                                {{ props?.itemStrings?.filter(item => item.id === 154)[0]?.String_id?.translations?.filter(item => item.languages_code.code.includes(langStore.lang))[0]?.title }}
                            </strong>
                            <span class="block font-bold text-sm text-white md:text-[18px] md:font-normal md:mt-auto">
                                <!-- для инвестиций на Бали -->
                            </span>
                        </div>
                        <p data-aos="fade-up"
                            class="text-white text-sm mb-5 max-w-[225px] md:text-[18px] md:max-w-none md:mb-[30px]">
                            {{ props?.itemStrings?.filter(item => item.id === 154)[0]?.String_id?.translations?.filter(item =>
                                item.languages_code.code.includes(langStore.lang))[0]?.description }}
                        </p>

                        <div data-aos="fade-up"
                            class="p-5 border border-blue-400 rounded-[20px] mb-5 md:p-[30px] md:max-w-[381px] 3xl:max-w-[505px] md:mb-[30px]">
                            <p class="text-white text-sm md:text-[18px] ">
                                {{ props?.itemStrings?.filter(item => item.id === 155)[0]?.String_id?.translations?.filter(item => item.languages_code.code.includes(langStore.lang))[0]?.title }}
                            </p>
                        </div>

                        <span class="[&_li]:before:bg-[url(/img/about/galka.svg)] [&_li]:before:w-5 [&_li]:before:h-5 [&_li]:before:min-w-5" v-html="props?.itemStrings?.filter(item => item.id === 160)[0]?.String_id?.translations?.filter(item => item.languages_code.code.includes(langStore.lang))[0]?.description"></span>
                    </div>
                    <NuxtImg data-aos="fade-left" src="/img/about/tel-desk.png"
                        class="hidden xl:block w-full aspect-[624/673]" alt="ph" loading="lazy"/>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import Parallaxy from '@lucien144/vue3-parallaxy';

const props = defineProps(['itemStrings'])

const isCanShow = ref(false)

watchEffect(() => {
    setTimeout(() => {
        isCanShow.value = true;
    }, 500)
})

const langStore = useLangStore()

</script>
