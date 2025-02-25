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
                <div data-aos="fade-left" class="w-full flex items-center justify-center">
                    <svg class="absolute animate-spinAbout w-full top-0 left-0" width="100%" height="100%"
                        viewBox="0 0 508 433" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd"
                            d="M327.488 2.83042C458.839 17.8616 520.292 159.634 505.255 291.034C493.455 394.15 381.711 441.552 278.633 429.756C146.896 414.681 -13.4797 365.183 1.60108 233.398C19.3293 78.4784 172.625 -14.8912 327.488 2.83042Z"
                            stroke="white" />
                    </svg>
                    <svg class="absolute animate-spinAbout2 w-full top-0 left-0" width="100%" height="100%"
                        viewBox="0 0 508 433" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd"
                            d="M327.488 2.83042C458.839 17.8616 520.292 159.634 505.255 291.034C493.455 394.15 381.711 441.552 278.633 429.756C146.896 414.681 -13.4797 365.183 1.60108 233.398C19.3293 78.4784 172.625 -14.8912 327.488 2.83042Z"
                            stroke="white" />
                    </svg>

                    <NuxtImg width="591" height="488" class="max-w-[400px] h-[350px] w-full lg:max-w-[500px] relative z-10 rounded-[200px] lg:-mr-20"
                        :src="'https://avalon-panel.sonisapps.com/assets/' + props.itemInfo?.main_translations?.filter(item =>
                            item.languages_code?.includes(locale))[0]?.image + '?width=500&height=500'" alt="ph" />
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
                    class="py-8 px-5 w-full border-b border-blue-400 lg:border-blue-500 lg:py-12 lg:px-8 md:border-b-0 md:border-r">
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
