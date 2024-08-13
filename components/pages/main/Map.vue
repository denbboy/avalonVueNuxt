<template>
  <section class="map py-14 md:py-24 bg-blue-600 overflow-hidden relative z-10">
    <div class="absolute -left-36 bottom-20 w-72 h-72 z-10 hidden md:block">
      <img loading="lazy" src="/assets/img/icons/vector-logo.svg" alt="vector-logo">
    </div>
    <div class="absolute lg:-right-36 bottom-1/2 lg:top-1/3 left-auto -right-14 w-28 lg:w-72 z-[2]">
      <img loading="lazy" src="/assets/img/icons/vector-logo.svg" alt="vector-logo">
    </div>

    <div class="container relative z-20">
      <div class="md:flex">
        <div class="lg:-ml-20 mx-[-150px] md:-ml-44 md:mr-0 w-[calc(100%+400px)] md:w-full md:max-w-[1298px]">
          <img loading="lazy" src="/assets/img/index/map.png" class="w-full" alt="ic">
        </div>
        <div class="md:absolute bottom-0 max-w-[752px] md:right-[160px] lg:right-[180px] mt-8">
          <h2 class="text-white font-bold text-2xl md:text-[45px] lg:text-[56px] leading-[100%] mb-7 md:mb-[32px]"
            data-aos="fade-up">
            {{ itemStrings?.filter(item => item.id === 2)[0]?.String_id?.translations?.filter(item => item.languages_code.code.includes(langStore.lang))[0]?.title }}
          </h2>
          <p class="text-white text-sm mb-5 md:text-xl leading-[140%] md:leading-[28px] md:mb-[16px] md:max-w-[600px]"
            data-aos="fade-up">
            {{ itemStrings?.filter(item => item.id === 2)[0]?.String_id?.translations?.filter(item => item.languages_code.code.includes(langStore.lang))[0]?.description }}
          </p>
          <ul
            class="text-white flex gap-4 items-center text-base font-semibold justify-center md:text-xl md:justify-start"
            data-aos="fade-up">
            <li class="relative">
              <p
                class="before:block before:rounded-[3px] before:w-[5px] before:h-[5px] md:before:w-[10px] md:before:h-[10px] before:bg-blue-400 before:border-blue-400 before:border before:absolute before:right-0 before:top-[50%] before:translate-y-[-50%] pr-6">
                {{ $t('berava') }}
              </p>
            </li>
            <li class="relative">
              <p
                class="before:block before:rounded-[3px] before:w-[5px] before:h-[5px] md:before:w-[10px] md:before:h-[10px] before:bg-blue-400 before:border-blue-400 before:border before:absolute before:right-0 before:top-[50%] before:translate-y-[-50%] pr-6">
                {{ $t('changu') }}
              </p>
            </li>
            <li>
              <p>
                {{ $t('pererenan') }}
              </p>
            </li>
          </ul>
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
  itemStrings.value = newValue.blocks?.filter(item => item?.id === 4)[0]?.strings
})

watchEffect(() => {
  const isProjectPage = route.path.includes('/projects/');
  
  if (isProjectPage) {
    itemStrings.value = props.itemStrings ?? (blocksStore.blocks?.filter(item => item?.id === 4)[0]?.strings || []);
  } else {
    const block = blocksStore.blocks?.find(item => item?.id === 4);
    itemStrings.value = block?.strings || [];
  }
});

</script>
