<template>
    <section id="about" class="club py-14 bg-blue-600 lg:py-0 lg:pb-24 relative overflow-hidden">
        <div class="absolute lg:-right-36 top-0 lg:top-1/2 -translate-y-1/2 lg:left-auto lg:bottom-40 -left-14 w-28 lg:w-72 z-[2]">
            <img src="/assets/img/icons/vector-logo.svg" class="" alt="vector-logo">
        </div>
        <div class="container relative z-10 flex flex-col gap-[60px]">
            <div class="xl:flex xl:gap-7 justify-between xl:items-center">
                <div data-aos="fade-right" class="md:max-w-[650px] lg:min-w-[420px] [&>p]:text-white [&>p]:text-sm [&>p]:mb-4 [&>p]:md:text-xl [&>p]:md:mb-5">
                    <h2 class="font-bold text-white text-3xl mb-7 md:text-[45px] lg:text-[56px] md:mb-12">
                        {{ props.itemInfo?.translations?.filter(item => item.languages_code.includes(langStore.lang))[0]?.title }}
                    </h2>

                    <div class="text-white text-sm mb-4 md:text-xl md:mb-5" v-html="props.itemInfo?.translations?.filter(item => item.languages_code.includes(langStore.lang))[0]?.description"></div>

                </div>
                <div data-aos="fade-left" class="">
                    <img class="max-w-[591px] lg:max-w-[892px] lg:-mr-20" src="/assets/img/about/club-img.png" alt="ph">
                </div>
            </div>

            <ul data-aos="fade-up" class="border border-blue-400 lg:border-blue-500 rounded-2xl md:flex">
                <li
                    class="py-8 px-5 w-full border-b border-blue-400 lg:border-blue-500 lg:py-12 lg:px-8 md:border-b-0 md:border-r">
                    <span class="block font-bold text-white text-2xl mb-2 md:text-[40px] md:mb-4">
                        {{ props.itemData?.filter(item => item.String_id.id === 115)[0]?.String_id?.translations?.filter(item => item.languages_code.code.includes(langStore.lang))[0]?.title }}
                    </span>
                    <p class="text-white text-sm md:text-base" v-html="props.itemData?.filter(item => item.String_id.id === 115)[0]?.String_id?.translations?.filter(item => item.languages_code.code.includes(langStore.lang))[0]?.description">
                    </p>
                </li>
                <li
                    class="py-8 px-5 w-full border-b border-blue-400 lg:border-blue-500 lg:py-12 lg:px-8 md:border-b-0 md:border-r">
                    <span class="block font-bold text-white text-2xl mb-2 md:text-[40px] md:mb-4">
                        {{ props.itemData?.filter(item => item.String_id.id === 116)[0]?.String_id?.translations?.filter(item => item.languages_code.code.includes(langStore.lang))[0]?.title }}
                    </span>
                    <p class="text-white text-sm md:text-base" v-html="props.itemData?.filter(item => item.String_id.id === 116)[0]?.String_id?.translations?.filter(item => item.languages_code.code.includes(langStore.lang))[0]?.description">
                    </p>
                </li>
                <li
                    class="py-8 px-5 w-full border-b border-blue-400 lg:border-blue-500 lg:py-12 lg:px-8 md:border-b-0 md:border-r">
                    <img src="/assets/img/about/camera.svg" class="max-w-[25px] mb-2 md:mb-4 md:max-w-[40px]" alt="ic">
                    <p class="text-white text-sm md:text-base" v-html="props.itemData?.filter(item => item.String_id.id === 117)[0]?.String_id?.translations?.filter(item => item.languages_code.code.includes(langStore.lang))[0]?.description">
                    </p>
                </li>
                <li class="py-8 px-5 w-full lg:py-12 lg:px-8">
                    <img src="/assets/img/about/whater.svg" class="max-w-[25px] mb-2 md:mb-4 md:max-w-[40px]" alt="ic">
                    <p class="text-white text-sm md:text-base" v-html="props.itemData?.filter(item => item.String_id.id === 118)[0]?.String_id?.translations?.filter(item => item.languages_code.code.includes(langStore.lang))[0]?.description">
                        
                    </p>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup>
const props = defineProps(['itemData', 'itemInfo']);
const langStore = useLangStore();

const strings = ref(null);


watch(props, async (newValue) => {
    console.log(props.itemData?.filter(item => item.String_id.id === 115)[0]?.String_id?.translations?.filter(item => item.languages_code.code.includes(langStore.lang))[0]?.title);
    strings.value = newValue.itemData
})
</script>
