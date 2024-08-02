<template>
    <section class="cost py-14 md:py-24 relative overflow-hidden">
        <div class="absolute hidden lg:block lg:-right-36 top-10 lg:top-10 lg:left-auto lg:bottom-40 -left-14 w-28 lg:w-72 z-[2]">
            <img src="/assets/img/icons/vector-logo.svg" class="" alt="vector-logo">
        </div>
        <div class="container relative z-10">
            <h2 data-aos="fade-up" class="font-bold text-white text-3xl mb-8 md:mb-12 md:text-center md:text-[45px] 3xl:md:text-[56px]">
                {{ itemStrings?.filter(item => item.id === 112)[0]?.String_id?.translations?.filter(item => item.languages_code.code.includes(langStore.lang))[0]?.title }}
            </h2>

            <div data-aos="fade-up" class="md:grid grid-cols-3 gap-5">

                <div
                    class="flex items-center gap-5 py-7 border-t border-whiteOp-300 xl:gap-7 xl:min-h-[180px] xl:pl-10 xl:pr-[10px] xl:border xl:rounded-2xl">
                    <img src="/assets/img/about/cost-ic-1.svg" class="max-w-[40px] md:max-w-none" alt="ic">
                    <p class="text-white text-sm md:text-base">
                        {{ itemStrings?.filter(item => item.id === 113)[0]?.String_id?.translations?.filter(item => item.languages_code.code.includes(langStore.lang))[0]?.title }}
                    </p>
                </div>
                <div
                    class="flex items-center gap-5 py-7 border-t border-whiteOp-300 xl:gap-7 xl:min-h-[180px] xl:pl-10 xl:pr-[10px] xl:border xl:rounded-2xl">
                    <img src="/assets/img/about/cost-ic-2.svg" class="max-w-[40px] md:max-w-none" alt="ic">
                    <p class="text-white text-sm md:text-base">
                        {{ itemStrings?.filter(item => item.id === 114)[0]?.String_id?.translations?.filter(item => item.languages_code.code.includes(langStore.lang))[0]?.title }}
                    </p>
                </div>
                <div
                    class="flex items-center gap-5 py-7 border-t border-whiteOp-300 xl:gap-7 xl:min-h-[180px] xl:pl-10 xl:pr-[10px] xl:border xl:rounded-2xl">
                    <img src="/assets/img/about/cost-ic-3.svg" class="max-w-[40px] md:max-w-none" alt="ic">
                    <p class="text-white text-sm md:text-base">
                        {{ itemStrings?.filter(item => item.id === 115)[0]?.String_id?.translations?.filter(item => item.languages_code.code.includes(langStore.lang))[0]?.title }}
                    </p>
                </div>
                <div
                    class="flex items-center gap-5 py-7 border-t md:border-b border-whiteOp-300 xl:gap-7 xl:min-h-[180px] xl:pl-10 xl:pr-[10px] xl:border xl:rounded-2xl">
                    <img src="/assets/img/about/cost-ic-4.svg" class="max-w-[40px] md:max-w-none" alt="ic">
                    <p class="text-white text-sm md:text-base">
                        {{ itemStrings?.filter(item => item.id === 116)[0]?.String_id?.translations?.filter(item => item.languages_code.code.includes(langStore.lang))[0]?.title }}
                    </p>
                </div>
                <div
                    class="flex items-center gap-5 py-7 border-t md:border-b border-whiteOp-300 xl:gap-7 xl:min-h-[180px] xl:pl-10 xl:pr-[10px] xl:border xl:rounded-2xl">
                    <img src="/assets/img/about/cost-ic-5.svg" class="max-w-[40px] md:max-w-none" alt="ic">
                    <p class="text-white text-sm md:text-base">
                        {{ itemStrings?.filter(item => item.id === 117)[0]?.String_id?.translations?.filter(item => item.languages_code.code.includes(langStore.lang))[0]?.title }}
                    </p>
                </div>
                <div
                    class="flex items-center gap-5 py-7 border-t border-b border-whiteOp-300 xl:gap-7 xl:min-h-[180px] xl:pl-10 xl:pr-[10px] xl:border xl:rounded-2xl">
                    <img src="/assets/img/about/cost-ic-6.svg" class="max-w-[40px] md:max-w-none" alt="ic">
                    <p class="text-white text-sm md:text-base">
                        {{ itemStrings?.filter(item => item.id === 118)[0]?.String_id?.translations?.filter(item => item.languages_code.code.includes(langStore.lang))[0]?.title }}
                    </p>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
const props = defineProps(['itemStrings'])

const itemStrings = ref([]);

const langStore = useLangStore()

watch(props, async (newValue) => {
    itemStrings.value = newValue.itemStrings;
})
</script>
