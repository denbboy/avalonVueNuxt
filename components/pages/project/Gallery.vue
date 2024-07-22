<template>
    <section class="gallery py-14 relative overflow-hidden">
        <div class="absolute lg:-right-36 top-0 lg:top-0 lg:left-auto lg:bottom-40 -left-14 w-28 lg:w-72 z-[2]">
            <img src="/assets/img/icons/vector-logo.svg" class="" alt="vector-logo">
        </div>
        <div class="absolute lg:-left-36 top-0 lg:top-auto lg:right-auto lg:bottom-40 -left-14 w-28 lg:w-72 z-[2]">
            <img src="/assets/img/icons/vector-logo.svg" class="" alt="vector-logo">
        </div>
        <div class="container relative z-10">
            <div
                class="grid gap-4 grid-cols-2 md:grid-cols-3 md:[&>.image:nth-child(3n+1)]:col-start-auto md:[&>.image:nth-child(3n+1)]:col-end-auto [&>.image:nth-child(3n+1)]:col-start-1 [&>.image:nth-child(3n+1)]:col-end-3 md:[&>.image:nth-child(7n+1)]:col-start-1 md:[&>.image:nth-child(7n+1)]:col-end-3 md:[&>.image:nth-child(7n+7)]:col-start-2 md:[&>.image:nth-child(7n+7)]:col-end-4">

                <client-only>

                    <a v-for="image in gallery?.slice(0, isShowFull ? 9999 : 7)" :key="image.id" data-aos="fade-up" class="image lg:h-[343px] overflow-hidden" data-fancybox="gallery"
                        :href="`https://avalon-panel.sonisapps.com/assets/${image?.directus_files_id}`">

                         <ImageLoading :src="`https://avalon-panel.sonisapps.com/assets/${image?.directus_files_id}`" className="rounded-2xl w-full flex items-center justify-center h-full object-cover" />
                    </a>

                </client-only>
            </div>

            <button v-if="!isShowFull" @click="handleShowFull" type="button"
                class="font-bold text-white text-sm w-full max-w-[205px] mt-5 border border-white rounded-xl p-4 m-auto flex justify-center hover:text-blue-400 hover:bg-white transition-all md:mt-7 md:p-6 md:max-w-[286px] md:text-base">
                {{ $t('show_album') }}
            </button>
        </div>
    </section>
</template>

<script setup>

const { gallery } = defineProps(['gallery'])

const isShowFull = ref(false);

const handleShowFull = () => {
    isShowFull.value = true;
}

</script>

