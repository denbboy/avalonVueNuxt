<template>
    <section class="gallery lg:pb-14 lg:pt-24 py-5 relative overflow-hidden">
        <!-- <div class="absolute lg:-right-36 top-0 lg:top-0 lg:left-auto lg:bottom-40 -left-14 w-28 lg:w-72 z-[2]">
            <NuxtImg src="/img/icons/vector-logo.svg" class="w-full" alt="vector-logo" loading="lazy" />
        </div> -->
        <div class="absolute hidden md:block lg:-left-36 top-0 lg:top-auto lg:right-auto lg:bottom-40 -left-14 w-28 lg:w-72 z-[2]">
            <img src="/img/icons/vector-logo.svg" class="w-full" alt="vector-logo" loading="lazy" />
        </div>
        <div class="container relative z-10">
            <div
                class="grid gap-4 grid-cols-2 md:grid-cols-3 md:[&>.image:nth-child(3n+1)]:col-start-auto md:[&>.image:nth-child(3n+1)]:col-end-auto [&>.image:nth-child(3n+1)]:col-start-1 [&>.image:nth-child(3n+1)]:col-end-3 md:[&>.image:nth-child(7n+1)]:col-start-1 md:[&>.image:nth-child(7n+1)]:col-end-3 md:[&>.image:nth-child(7n+7)]:col-start-2 md:[&>.image:nth-child(7n+7)]:col-end-4">

                <client-only>
                    <div class="image lg:h-[343px] h-[160px]" data-aos="fade-up" v-for="(image, index) in gallery"
                        :key="image?.directus_files_id" v-show="index < 7">
                        <a class="hover:shadow-[0px_10px_10px_0px_rgba(0,0,0,.3)] rounded-2xl block h-full !transition-shadow overflow-hidden"
                            data-fancybox="gallery"
                            :href="`https://api.avalonbali.com/assets/${image?.directus_files_id}`">
                            <PagesProjectGalleryImage :imageFile="image?.directus_files_id" />
                        </a>
                    </div>
                </client-only>

            </div>

            <a data-fancybox="gallery"
                :href="`https://api.avalonbali.com/assets/${gallery[0].directus_files_id}`"
                type="button"
                class="font-bold text-white text-sm w-full max-w-[205px] mt-5 border border-white rounded-xl p-4 m-auto flex justify-center hover:text-blue-400 hover:bg-white transition-all md:mt-7 md:p-6 md:max-w-[286px] md:text-base">
                {{ $t('show_album') }}
            </a>
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
