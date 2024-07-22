<template>
  <section id="about-company" class="us pt-14 relative overflow-hidden pb-10 -mb-10">
    <!-- <div class="absolute lg:-right-36 -top-14 lg:hidden -right-14 w-28 z-[2]"></div> -->
    <div
      class="absolute lg:bottom-[5px] top-10 lg:top-auto w-28 lg:-left-36 lg:right-auto -right-14 lg:w-72 lg:h-72 z-10">
      <img src="/assets/img/icons/vector-logo.svg" alt="vector-logo">
    </div>
    <div class="container">
      <div class="md:flex md:items-center gap-8 justify-between">
        <div class="w-full">
          <div class="flex items-center mb-8 md:mb-10" data-aos="fade-up">
            <img src="/assets/img/index/a-us-decor.svg" class="max-w-[60px] mr-4 md:max-w-[80px] md:mr-5" alt="ic a">
            <h2 class="flex flex-col font-bold text-white text-3xl md:text-[40px]">
              AVALON
              <span class="text-right font-normal text-[8px] mt-[-10px] md:text-[10px] md:mt-[-8px]">
                DEVELOPMENTS
              </span>
            </h2>
          </div>

          <div class="mb-8 md:mb-9" data-aos="fade-up">
            <h3 class="font-bold text-white text-base mb-4 md:text-[20px] lg:text-[26px] md:mb-6 md:leading-[28px]">
              {{ itemStrings?.filter(item => item.id === 37)[0]?.String_id?.translations?.filter(item =>
                item.languages_code.code.includes(langStore.lang))[0]?.title }}
            </h3>
            <p class="text-white md:text-sm lg:text-lg md:leading-[20px]">
              {{ itemStrings?.filter(item => item.id === 37)[0]?.String_id?.translations?.filter(item =>
                item.languages_code.code.includes(langStore.lang))[0]?.description }}
            </p>
          </div>

          <ul class="grid grid-cols-2 gap-y-8 gap-x-3 md:gap-x-5 md:gap-y-[32px]" data-aos="fade-up">
            <li class="pb-5 border-b border-whiteOp-300 md:pb-[25px]">
              <b class="font-bold text-white text-2xl mb-3 md:text-[32px] lg:text-[40px] md:mb-4 block">
                {{ itemStrings?.filter(item => item.id === 38)[0]?.String_id?.translations?.filter(item =>
                  item.languages_code.code.includes(langStore.lang))[0]?.title }}
              </b>
              <p class="text-white text-sm lg:text-base">
                {{ itemStrings?.filter(item => item.id === 38)[0]?.String_id?.translations?.filter(item =>
                  item.languages_code.code.includes(langStore.lang))[0]?.description }}
              </p>
            </li>
            <li class="pb-5 border-b border-whiteOp-300 md:pb-[25px]">
              <b class="font-bold text-white text-2xl mb-3 md:text-[32px] lg:text-[40px] md:mb-4 block">
                {{ itemStrings?.filter(item => item.id === 39)[0]?.String_id?.translations?.filter(item =>
                  item.languages_code.code.includes(langStore.lang))[0]?.title }}
              </b>
              <p class="text-white text-sm lg:text-base">
                {{ itemStrings?.filter(item => item.id === 39)[0]?.String_id?.translations?.filter(item =>
                  item.languages_code.code.includes(langStore.lang))[0]?.description }}
              </p>
            </li>
            <li class="pb-5 border-b border-whiteOp-300 md:pb-[25px]">
              <b class="font-bold text-white text-2xl mb-3 md:text-[32px] lg:text-[40px] md:mb-4 block">
                {{ itemStrings?.filter(item => item.id === 40)[0]?.String_id?.translations?.filter(item =>
                  item.languages_code.code.includes(langStore.lang))[0]?.title }}
              </b>
              <p class="text-white text-sm lg:text-base">
                {{ itemStrings?.filter(item => item.id === 40)[0]?.String_id?.translations?.filter(item =>
                  item.languages_code.code.includes(langStore.lang))[0]?.description }}
              </p>
            </li>
            <li class="pb-5 border-b border-whiteOp-300 md:pb-[25px]">
              <b class="font-bold text-2xl mb-3 text-blue-400 md:text-[32px] lg:text-[40px] md:mb-4 flex items-center">
                {{ itemStrings?.filter(item => item.id === 41)[0]?.String_id?.translations?.filter(item =>
                  item.languages_code.code.includes(langStore.lang))[0]?.title }}
                <svg width="30" height="31" viewBox="0 0 30 31" fill="none" class="ml-3 hidden md:block"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M18.0126 30.867H30L18.0402 0H15H11.9598L0 30.867H11.9874V25.2214H8.28958L15 8.09216L21.7104 25.2214H18.0126V30.867Z"
                    fill="#0E88EC" style="fill:#0E88EC;fill:color(display-p3 0.0553 0.5317 0.9262);fill-opacity:1;" />
                </svg>

              </b>
              <p class="text-white text-sm lg:text-base">
                {{ itemStrings?.filter(item => item.id === 41)[0]?.String_id?.translations?.filter(item =>
                  item.languages_code.code.includes(langStore.lang))[0]?.description }}
              </p>
            </li>
          </ul>
        </div>

        <div class="relative mt-7 w-full md:max-w-[567px] lg:max-w-[760px] ">
          <svg class="absolute animate-spinAbout w-full top-0 left-0" width="100%" height="100%" viewBox="0 0 508 433"
            fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd"
              d="M327.488 2.83042C458.839 17.8616 520.292 159.634 505.255 291.034C493.455 394.15 381.711 441.552 278.633 429.756C146.896 414.681 -13.4797 365.183 1.60108 233.398C19.3293 78.4784 172.625 -14.8912 327.488 2.83042Z"
              stroke="white"/>
          </svg>
          <img src="/assets/img/index/about-photo.png" class="w-full relative z-10" alt="ph" data-aos="fade-left">
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useBlocksStore } from '~/stores/functions/blocks';

const blocksStore = useBlocksStore();
const itemStrings = ref([]);
const route = useRoute();
const langStore = useLangStore();

watch(blocksStore, async (newValue) => {
  itemStrings.value = newValue.blocks?.filter(item => item?.id === 8)[0]?.strings
})

watchEffect(() => {
  const isProjectPage = route.path.includes('/projects/');

  if (isProjectPage) {
    itemStrings.value = props.itemStrings ?? (blocksStore.blocks?.filter(item => item?.id === 8)[0]?.strings || []);
  } else {
    const block = blocksStore.blocks?.find(item => item?.id === 8);
    itemStrings.value = block?.strings || [];
  }
});
</script>
