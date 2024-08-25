<template>
  <NuxtLink :to="`/news/${props?.item?.id}`"
    class="w-full rounded-[20px] overflow-hidden h-full group transition-all hover:shadow-[0px_10px_10px_0px_rgba(0,0,0,.1)] block">
    <div class="relative w-full">
      <div :class="{
        'border-white bg-white after:bg-blue-500': props.bgdColor === 'white',
        'border-blue-500 bg-blue-500 after:bg-white': props.bgdColor === 'blue-500',
        'border-blue-600 bg-blue-600 after:bg-white': props.bgdColor === 'blue-600',
      }" class="block-bottom-point z-20"></div>

      <SkeletonLoader class="w-full h-[300px] rounded-2xl">
        <NuxtImg v-show="!imageLoaded" ref="image" data-not-lazy loading="lazy" class="absolute opacity-0 w-full h-full"
          :src="`https://avalon-panel.sonisapps.com/assets/${item?.preview}?width=470&height=300`" alt="Image" @load="onImageLoad" />
        <NuxtImg v-if="imageLoaded" data-not-lazy loading="lazy"
          :src="`https://avalon-panel.sonisapps.com/assets/${item?.preview}?width=470&height=300`" alt="Image"
          class="z-0 w-full h-full object-cover relative rounded-2xl" @load="onImageLoad" />
      </SkeletonLoader>

    </div>
    <div class="p-5">
      <span :class="bgdColor === 'white' ? 'text-blue-600' : 'text-white'"
        class="mb-3 md:mb-4 flex items-center text-sm opacity-60">
        <div :class="bgdColor === 'white' ? 'bg-blue-600' : 'bg-white'" class="block w-[6px] h-[6px] rounded-sm mr-2">
        </div>
        {{ new Date(props?.item?.date_created).getDate() }} {{ $t(`month${new Date(props?.item?.date_created).getMonth()
          ?? "0" + 1}`) }} {{ new Date(props?.item?.date_created).getFullYear() }}
      </span>
      <p :class="bgdColor === 'white' ? 'text-blue-600' : 'text-white'"
        class="text-base md:text-lg transition-all group-hover:text-blue-400 line-clamp-2 font-bold"
        v-html="props?.item?.translations?.filter(item => item.languages_code.includes(langStore.lang))[0]?.title"></p>
    </div>
  </NuxtLink>
</template>

<script setup>

const imageLoaded = ref(false);
const image = ref(null);

function onImageLoad() {
    imageLoaded.value = true;
}

onMounted(() => {
    if (image.value?.complete) {
        imageLoaded.value = true;
    }
});

const props = defineProps({
  item: {
    type: Object,
    require: true
  },
  bgdColor: {
    type: String
  }
})

const langStore = useLangStore()

</script>
