<template>
  <section class="bali py-14 md:py-24 bg-blue-600 relative overflow-hidden">
    <div class="absolute lg:-right-36 -top-14 lg:hidden -right-14 w-28 z-[2]">
      <img loading="lazy" src="/assets/img/icons/vector-logo.svg" alt="vector-logo">
    </div>

    <div class="container">
      <div class="bali_con grid grid-cols-2 gap-x-2 gap-y-7 md:grid-cols-3 md:gap-y-12 md:gap-x-5" data-aos="fade-up">
        <h2 class="font-bold text-white text-3xl md:text-[45px] lg:text-[56px] md:leading-[100%] col-start-1 col-end-3 md:col-end-1" v-html="itemStrings?.filter(item => item.id === 130)[0]?.String_id?.translations?.filter(item => item.languages_code.code.includes(langStore.lang))[0]?.title">
        </h2>
        <!-- <div class="grid grid-cols-2 gap-x-2 gap-y-7"> -->
        <div class="border-b border-whiteOp-300 pb-5 md:pb-8">
          <span class="font-bold text-white text-3xl md:text-[32px] lg:text-[40px]">
            <svg class="w-[46px] md:w-[59px] lg:w-[73px] h-[38px] md:h-[42px]" width="69" height="29" viewBox="0 0 69 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0.64 29V0.439998H7.08L16.96 20.76H17.32C17.2667 20.0933 17.2 19.3067 17.12 18.4C17.04 17.4667 16.9733 16.52 16.92 15.56C16.8667 14.5733 16.84 13.68 16.84 12.88V0.439998H22.04V29H15.64L5.68 8.56H5.4C5.48 9.28 5.54667 10.1467 5.6 11.16C5.68 12.1467 5.74667 13.1333 5.8 14.12C5.85333 15.1067 5.88 15.9733 5.88 16.72V29H0.64ZM24.76 29V25.32H37.24V29H24.76ZM30.96 23.64C29.68 23.64 28.5467 23.36 27.56 22.8C26.5733 22.24 25.7867 21.44 25.2 20.4C24.64 19.3333 24.36 18.04 24.36 16.52C24.36 14.2533 24.96 12.5067 26.16 11.28C27.36 10.0533 28.9867 9.44 31.04 9.44C32.2933 9.44 33.4133 9.72 34.4 10.28C35.4133 10.8133 36.2 11.6133 36.76 12.68C37.3467 13.72 37.64 15 37.64 16.52C37.64 18.7867 37.04 20.5467 35.84 21.8C34.64 23.0267 33.0133 23.64 30.96 23.64ZM31 20.44C31.9333 20.44 32.6 20.12 33 19.48C33.4267 18.8133 33.64 17.8267 33.64 16.52C33.64 15.2133 33.4267 14.24 33 13.6C32.6 12.96 31.9333 12.64 31 12.64C30.0667 12.64 29.3867 12.96 28.96 13.6C28.5333 14.24 28.32 15.2133 28.32 16.52C28.32 17.8267 28.5333 18.8133 28.96 19.48C29.3867 20.12 30.0667 20.44 31 20.44ZM61.0128 1.12V23.4H68.8128V29H42.5728V23.4H54.2528V7.64L43.4928 12.12V6L54.2528 1.12H61.0128Z"
                fill="white" style="fill:white;fill-opacity:1;" />
            </svg>
          
          </span>
          <p class="text-white text-sm mt-2 md:text-sm lg:text-base md:mt-4">
            {{ itemStrings?.filter(item => item.id === 132)[0]?.String_id?.translations?.filter(item => item.languages_code.code.includes(langStore.lang))[0]?.description }}
          </p>
        </div>
        <div class="border-b border-whiteOp-300 pb-5 md:pb-8">
          <span class="font-bold text-white text-3xl md:text-[32px] lg:text-[40px]">
            {{ itemStrings?.filter(item => item.id === 133)[0]?.String_id?.translations?.filter(item => item.languages_code.code.includes(langStore.lang))[0]?.title }}
          </span>
          <p class="text-white text-sm mt-2 md:text-sm lg:text-base md:mt-4">
            {{ itemStrings?.filter(item => item.id === 133)[0]?.String_id?.translations?.filter(item => item.languages_code.code.includes(langStore.lang))[0]?.description }}
          </p>
        </div>
        <div class="border-b border-whiteOp-300 pb-5 md:pb-8">
          <span class="font-bold text-white text-3xl md:text-[32px] lg:text-[40px]">
            {{ itemStrings?.filter(item => item.id === 131)[0]?.String_id?.translations?.filter(item => item.languages_code.code.includes(langStore.lang))[0]?.title }}
          </span>
          <p class="text-white text-sm mt-2 md:text-sm lg:text-base md:mt-4">
            {{ itemStrings?.filter(item => item.id === 131)[0]?.String_id?.translations?.filter(item => item.languages_code.code.includes(langStore.lang))[0]?.description }}
          </p>
        </div>
        <div class="border-b border-whiteOp-300 pb-5 md:pb-8">
          <span class="font-bold text-white text-3xl md:text-[32px] lg:text-[40px]">
            {{ itemStrings?.filter(item => item.id === 134)[0]?.String_id?.translations?.filter(item => item.languages_code.code.includes(langStore.lang))[0]?.title }}
          </span>
          <p class="text-white text-sm mt-2 md:text-sm lg:text-base md:mt-4">
            {{ itemStrings?.filter(item => item.id === 134)[0]?.String_id?.translations?.filter(item => item.languages_code.code.includes(langStore.lang))[0]?.description }}
          </p>
        </div>
        <div class="border-b border-whiteOp-300 pb-5 md:pb-8">
          <span class="font-bold text-white text-3xl md:text-[32px] lg:text-[40px]">
            {{ itemStrings?.filter(item => item.id === 135)[0]?.String_id?.translations?.filter(item => item.languages_code.code.includes(langStore.lang))[0]?.title }}
          </span>
          <p class="text-white text-sm mt-2 md:text-sm lg:text-base md:mt-4">
            {{ itemStrings?.filter(item => item.id === 135)[0]?.String_id?.translations?.filter(item => item.languages_code.code.includes(langStore.lang))[0]?.description }}
          </p>
        </div>
        <img loading="lazy" src="/assets/img/index/a-bali-decor.svg" class="m-auto md:hidden" alt="ic">
        <!-- </div> -->
      </div>
    </div>
  </section>
</template>

<script setup>
import { useBlocksStore } from '~/stores/functions/blocks';

const props = defineProps(['itemStrings'])

const itemStrings = ref([]);
const route = useRoute();
const langStore = useLangStore();
const blocksStore = useBlocksStore();

watch([props, blocksStore], async ([newProps, newBlocksStore]) => {
    if (window.location.href.includes('/projects/')) {
        itemStrings.value = newProps.itemStrings;
    } else {
        const block = newBlocksStore.blocks?.find(item => item?.id === 30);
        itemStrings.value = block?.strings || [];
    }
});

watchEffect(() => {
  const isProjectPage = route.path.includes('/projects/');
  
  if (isProjectPage) {
    itemStrings.value = props.itemStrings ?? (blocksStore.blocks?.filter(item => item?.id === 30)[0]?.strings || []);
  } else {
    const block = blocksStore.blocks?.find(item => item?.id === 30);
    itemStrings.value = block?.strings || [];
  }
});

</script>
