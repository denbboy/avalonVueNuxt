<template>
    <section id="about" class="club py-14 bg-blue-600 lg:py-0 lg:pb-24 relative overflow-hidden">
        <div
            class="absolute lg:-right-36 top-0 lg:top-1/2 hidden lg:block -translate-y-1/2 lg:left-auto lg:bottom-40 -left-14 w-28 lg:w-72 z-[2]">
            <NuxtImg src="/img/icons/vector-logo.svg" class="w-full" alt="vector-logo" />
        </div>
        <div class="container relative z-10 flex flex-col gap-5 lg:gap-[60px]">
            <div class="xl:flex xl:gap-7 justify-between xl:items-center mt-0 lg:mt-24">
                <div data-aos="fade-right"
                    class="md:max-w-[650px] lg:min-w-[420px] [&>p]:text-white [&>p]:text-sm [&>p]:mb-4 [&>p]:md:text-xl [&>p]:md:mb-5">
                    <h2 class="font-bold text-white text-3xl mb-7 md:text-[45px] lg:text-[56px] md:mb-12 leading-[1.1]">
                        {{props.itemInfo?.main_translations?.filter(item =>
                            item.languages_code.includes(locale))[0]?.title}}
                    </h2>

                    <div class="text-white text-sm mb-4 md:text-xl md:mb-5"
                        v-html="props.itemInfo?.main_translations?.filter(item => item.languages_code.includes(locale))[0]?.description">
                    </div>

                </div>


                <div data-aos="fade-left" class="ooo w-full flex items-center justify-center my-5">
                    <svg class="absolute rotate-12 w-full top-0 lg:-right-28" width="772" height="" viewBox="0 0 772 540" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd"
                            d="M770.646 238.549C780.284 403.585 582.471 479.281 422.716 521.494C286.634 557.453 133.516 543.381 52.314 428.361C-29.7132 312.172 -10.3944 148.846 85.461 43.7831C162.478 -40.6316 285.436 21.1699 395.322 52.4054C543.822 94.617 761.642 84.3536 770.646 238.549Z"
                            stroke="white" />
                    </svg>
                    <svg class="absolute -ml-10 rotate-[-20deg] w-full top-0 lg:-right-28" width="772" height="" viewBox="0 0 772 540" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd"
                            d="M770.646 238.549C780.284 403.585 582.471 479.281 422.716 521.494C286.634 557.453 133.516 543.381 52.314 428.361C-29.7132 312.172 -10.3944 148.846 85.461 43.7831C162.478 -40.6316 285.436 21.1699 395.322 52.4054C543.822 94.617 761.642 84.3536 770.646 238.549Z"
                            stroke="white" />
                    </svg>


                    <!-- <NuxtImg width="591" height="488"
                        class="ooo max-w-[400px] h-[350px] w-full lg:max-w-[500px] relative z-10 lg:-mr-20" :src="'https://api.avalonbali.com/assets/' + props.itemInfo?.main_translations?.filter(item =>
                            item.languages_code?.includes(locale))[0]?.image + '?width=500&height=500'" alt="ph" /> -->


                    <AboutImageSvg :itemInfo="itemInfo" :locale="locale" />

                </div>
            </div>

            <ul data-aos="fade-up" class="border border-blue-400 lg:border-blue-500 rounded-2xl md:flex">
                <li
                    class="py-8 px-5 w-full border-b border-blue-400 lg:border-blue-500 lg:py-12 lg:px-8 md:border-b-0 md:border-r">
                    <span class="block font-bold text-white text-2xl mb-2 md:text-[40px] md:mb-4">
                        {{props.itemInfo?.main_translations?.filter(item =>
                            item.languages_code?.includes(locale))[0]?.first_block_title}}
                    </span>
                    <p class="text-white text-sm md:text-base"
                        v-html="props.itemInfo?.main_translations?.filter(item => item.languages_code?.includes(locale))[0]?.first_block_subtitle">
                    </p>
                </li>
                <li
                    class="py-8 px-5 w-full border-b border-blue-400 lg:border-blue-500 lg:py-12 lg:px-8 md:border-b-0 md:border-r">
                    <span class="block font-bold text-white text-2xl mb-2 md:text-[40px] md:mb-4">
                        {{props.itemInfo?.main_translations?.filter(item =>
                            item.languages_code?.includes(locale))[0]?.second_block_title}}
                    </span>
                    <p class="text-white text-sm md:text-base"
                        v-html="props.itemInfo?.main_translations?.filter(item => item.languages_code?.includes(locale))[0]?.second_block_subtitle">
                    </p>
                </li>
                <li
                    class="py-8 px-5 w-full border-b border-blue-400 lg:border-blue-500 lg:py-12 lg:px-8 md:border-b-0 md:border-r">
                    <span class="block font-bold text-white text-2xl mb-2 md:text-[40px] md:mb-4">
                        {{props.itemInfo?.main_translations?.filter(item =>
                            item.languages_code?.includes(locale))[0]?.third_block_title}}
                    </span>
                    <p class="text-white text-sm md:text-base"
                        v-html="props.itemInfo?.main_translations?.filter(item => item.languages_code?.includes(locale))[0]?.third_block_subtitle">
                    </p>
                </li>
                <li
                    class="py-8 px-5 w-full border-blue-400 lg:border-blue-500 lg:py-12 lg:px-8 md:border-b-0">
                    <span class="block font-bold text-white text-2xl mb-2 md:text-[40px] md:mb-4">
                        {{props.itemInfo?.main_translations?.filter(item =>
                            item.languages_code?.includes(locale))[0]?.fourth_block_title}}
                    </span>
                    <p class="text-white text-sm md:text-base"
                        v-html="props.itemInfo?.main_translations?.filter(item => item.languages_code?.includes(locale))[0]?.fourth_sub_title">
                    </p>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup>
const props = defineProps(['itemData', 'itemInfo']);

const { t, locale } = useI18n()

const strings = ref(null);

watch(props, async (newValue) => {
    strings.value = newValue.itemData
})
</script>
