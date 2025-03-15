<template>
    <NuxtLink
        :href="`/sales/${props?.item?.translations?.filter(item => item.languages_code.includes(langStore.lang))[0]?.slug}`"
        class="group h-full block relative rounded-2xl transition-all">
        <div :class="{
            'border-white bg-white after:bg-blue-500': props.bgdColor === 'white',
            'border-blue-500 bg-blue-500': props.bgdColor === 'blue-500',
            'border-blue-600 bg-blue-600 after:bg-blue-500': props.bgdColor === 'blue-600',
        }" class="block-bottom-point z-20"></div>

        <SkeletonLoader class="w-full h-[300px] rounded-2xl">
            <NuxtImg v-show="!imageLoaded" data-not-lazy loading="lazy" ref="image"
                class="absolute opacity-0 w-full h-full"
                :src="`https://avalon-panel.sonisapps.com/assets/${item?.preview}?width=470&height=300`" alt="Image"
                @load="onImageLoad" />
            <NuxtImg data-not-lazy loading="lazy" v-if="imageLoaded"
                :src="`https://avalon-panel.sonisapps.com/assets/${item?.preview}?width=470&height=300`" alt="Image"
                class="z-0 w-full h-full object-cover relative rounded-2xl" />
        </SkeletonLoader>

        <div
            class="bg-gradient-to-t transition-all from-blue-600/80 rounded-2xl opacity-90 group-hover:opacity-0 from-20% absolute top-0 left-0 w-full h-full z-10">
        </div>
        <div
            class="bg-gradient-to-t transition-all rounded-2xl opacity-0 group-hover:opacity-90 from-blue-400 from-20% absolute top-0 left-0 w-full h-full z-10">
        </div>
        <div class="absolute z-20 w-full h-full top-0 left-0 p-3 flex flex-col">
            <!-- salesIds.value -->
            <div class="absolute top-3 left-3 flex gap-2">
                <NuxtImg v-if="item?.projects?.logo" :src="'https://avalon-panel.sonisapps.com/assets/'+item?.projects?.logo" alt="Image" class="w-10 h-10 object-contain md:w-14 md:h-14" />
            </div>
            <!-- <NuxtImg src="/img/icons/icon-club.svg" alt="Image"
                class="absolute w-8 h-8 top-3 left-3 md:w-14 md:h-14" />
            <NuxtImg src="/img/icons/icon-club.svg" alt="Image"
                class="absolute w-8 h-8 top-3 left-3 md:w-14 md:h-14" /> -->
            <div v-if="props?.item?.is_active"
                class="bg-[url('./../img/icons/bgd-blue-dor-rd.svg')] px-2 py-2 bg-no-repeat bg-cover bg-right-bottom rounded-l-lg rounded-tr-lg text-xs text-white ml-auto w-fit block lg:text-sm lg:p-3">
                {{ $t('actual_to') }}
                <strong>
                    {{ new Date(props?.item?.expired_date).getDate() }} {{ $t(`month${new
                        Date(props?.item?.expired_date).getMonth() + 1 ?? "0"}`) }} {{ new
                        Date(props?.item?.expired_date).getFullYear() }}
                </strong>
            </div>
            <div v-else class="min-h-[44px]"></div>

            <strong class="mt-auto text-white mb-2 md:text-lg overflow-hidden h-14 line-clamp-2"
                v-html="props?.item?.translations?.filter(item => item.languages_code.includes(langStore.lang))[0]?.subtitle"></strong>

            <div v-if="props?.item?.location" class="flex items-center opacity-60">
                <NuxtImg class="w-2 md:w-3" src="/img/icons/point-white.svg" alt="Image" />
                <div class="text-white ml-1 text-xs md:text-sm" v-html="props?.item?.location"></div>
            </div>
            <div v-else class="min-h-5"></div>
        </div>
    </NuxtLink>
</template>

<script setup>
import { ref } from 'vue';

const imageLoaded = ref(false);
const image = ref(null);

function onImageLoad() {
    imageLoaded.value = true;
}

// onMounted(() => {
    if (image.value?.complete) {
        imageLoaded.value = true;
    }

    setTimeout(() => {
        imageLoaded.value = true;
    }, 500)
// });

const props = defineProps({
    item: {
        type: Object,
        require: true
    },
    bgdColor: {
        type: String
    },
    projects: {
        type: Object
    }
})

const salesIds = ref([])

// watchEffect(() => {
    for (let i = 0; i < props?.projects?.length; i++) {
        for (let j = 0; j < props?.projects[i]?.sales?.length; j++) {

            if (props.item.id === props?.projects[i].sales[j].Sale_id) {

                salesIds.value.push(props.projects[i].logo)
            }
        }
    }
// })


const langStore = useLangStore()

</script>
