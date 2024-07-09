<template>
    <div data-aos="fade-up">
        <div class="select career-select group" :class="{ 'active': isOpen }">
            <div class="select__head py-6 flex justify-between items-center cursor-pointer" @click="handleOpen">
                <div class="mr-7">
                    <time class="mb-2 block text-white/60 text-xs md:text-base md:mb-5">03/10/2023</time>
                    <h2 class="text-lg text-white leading-5 font-bold md:text-2xl lg:text-3xl">
                        {{ props?.item?.translations?.filter(item => item.languages_code.includes(langStore.lang))[0]?.title }}
                    </h2>
                </div>
                <div
                    class="flex items-center transition-all justify-center rounded-[10px] w-11 h-11 min-w-11 group-[.active]:bg-blue-400 bg-blue-700">
                    <img class="group-[.active]:block hidden" src="/assets/img/icons/minus-white.svg" alt="">
                    <img class="group-[.active]:hidden block" src="/assets/img/icons/plus-white.svg" alt="">
                </div>
            </div>
            <div class="select__body career-select-body">
                
                <span v-html="props?.item?.translations?.filter(item => item.languages_code.includes(langStore.lang))[0]?.description"></span>

            </div>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    item: {
        type: Object,
        require: true
    }
})

const langStore = useLangStore()

const isOpen = ref(false)

const handleOpen = () => {
    isOpen.value = !isOpen.value
}

const modalsStore = useModalsStore()

const handleOpenModal = () => {
    modalsStore.addModal("presentation")
}

</script>
