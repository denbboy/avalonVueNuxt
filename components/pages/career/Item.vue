<template>
    <div data-aos="fade-up">
        <div class="select career-select group" :class="{ 'active': isOpen }">
            <div class="select__head py-6 flex justify-between items-center cursor-pointer" @click="handleOpen">
                <div class="mr-7">
                    <time class="mb-2 block text-white/60 text-xs md:text-base md:mb-5">
                        {{ day }}/{{ month < 10 ? '0' + month : '' }}/{{ year }} </time>
                            <h2 class="text-lg text-white leading-5 font-bold md:text-2xl lg:text-3xl">
                                {{ props?.item?.translations?.filter(item =>
                                    item.languages_code.includes(langStore.lang))[0]?.title }}
                            </h2>
                </div>
                <div
                    class="flex items-center transition-all justify-center rounded-[10px] w-11 h-11 min-w-11 group-[.active]:bg-blue-400 bg-blue-700">
                    <NuxtImg class="group-[.active]:block hidden" src="/assets/img/icons/minus-white.svg" alt="" />
                    <NuxtImg class="group-[.active]:hidden block" src="/assets/img/icons/plus-white.svg" alt="" />
                </div>
            </div>
            <div :class="{'pb-7': isOpen}" class="select__body career-select-body">

                <span
                    v-html="props?.item?.translations?.filter(item => item.languages_code.includes(langStore.lang))[0]?.description"></span>

                <button @click="handleOpenModal" class="white-button px-14">{{ $t('send_cv') }}</button>

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

const day = new Date(props?.item?.date_created).getDate()
const month = new Date(props?.item?.date_created).getMonth() + 1
const year = new Date(props?.item?.date_created).getFullYear()

const isOpen = ref(false)

const handleOpen = () => {
    isOpen.value = !isOpen.value
}

const modalsStore = useModalsStore()
const langStore = useLangStore()

const handleOpenModal = () => {
    modalsStore.addModal("vacancy")
}

</script>
