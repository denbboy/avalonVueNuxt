<template>
    <section class="gallery py-14">
        <div class="container">
            <div
                class="grid gap-4 grid-cols-2 md:grid-cols-3 md:[&>.image:nth-child(3n+1)]:col-start-auto md:[&>.image:nth-child(3n+1)]:col-end-auto [&>.image:nth-child(3n+1)]:col-start-1 [&>.image:nth-child(3n+1)]:col-end-3 md:[&>.image:nth-child(7n+1)]:col-start-1 md:[&>.image:nth-child(7n+1)]:col-end-3 md:[&>.image:nth-child(7n+7)]:col-start-2 md:[&>.image:nth-child(7n+7)]:col-end-4">

                <client-only>
                    <a class="image" data-fancybox="gallery" href="/_nuxt/assets/img/about/gallery-ph-1.png">
                        <img src="/assets/img/about/gallery-ph-1.png"
                            class="rounded-2xl h-full w-full flex items-center justify-center" alt="ph">
                    </a>
                    <a class="image" data-fancybox="gallery" href="/_nuxt/assets/img/about/gallery-ph-2.png">
                        <img src="/assets/img/about/gallery-ph-2.png"
                            class="rounded-2xl h-full w-full flex items-center justify-center" alt="ph">
                    </a>
                    <a class="image" data-fancybox="gallery" href="/_nuxt/assets/img/about/gallery-ph-3.png">
                        <img src="/assets/img/about/gallery-ph-3.png"
                            class="rounded-2xl h-full w-full flex items-center justify-center" alt="ph">
                    </a>
                    <a class="image" data-fancybox="gallery" href="/_nuxt/assets/img/about/gallery-ph-4.png">
                        <img src="/assets/img/about/gallery-ph-4.png"
                            class="rounded-2xl h-full w-full flex items-center justify-center" alt="ph">
                    </a>
                    <a class="image" data-fancybox="gallery" href="/_nuxt/assets/img/about/gallery-ph-5.png">
                        <img src="/assets/img/about/gallery-ph-5.png"
                            class="rounded-2xl h-full w-full flex items-center justify-center" alt="ph">
                    </a>
                    <a class="image" data-fancybox="gallery" href="/_nuxt/assets/img/about/gallery-ph-6.png">
                        <img src="/assets/img/about/gallery-ph-6.png"
                            class="rounded-2xl h-full w-full flex items-center justify-center" alt="ph">
                    </a>
                    <a class="image" data-fancybox="gallery" href="/_nuxt/assets/img/about/gallery-ph-7.png">
                        <img src="/assets/img/about/gallery-ph-7.png"
                            class="rounded-2xl h-full w-full flex items-center justify-center" alt="ph">
                    </a>
                </client-only>
            </div>

            <!-- TODO Сделать кнопку "Показать альбом" -->

            <!-- <button type="button"
                class="font-bold text-white text-sm w-full max-w-[205px] mt-5 border border-white rounded-xl p-4 m-auto flex justify-center hover:text-blue-400 hover:bg-white transition-all md:mt-7 md:p-6 md:max-w-[286px] md:text-base">
                Показать альбом
            </button> -->
        </div>
    </section>
</template>

<script setup>
</script>
