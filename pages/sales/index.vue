<template>

  <Head>
    <Title>
      Sales
    </Title>
    <Meta name="description"
      :content="itemData?.translations?.filter(item => item.languages_code.includes(langStore.lang))[0]?.meta_description" />
  </Head>

  <section class="pb-24 relative bg-blue-500 overflow-hidden">
    <div class="bg-gradient-to-t from-blue-500 from-80% lg:from-80%  w-full h-full absolute z-10"></div>

    <NuxtImg class="absolute top-0 z-0 opacity-40 w-[600vw] max-w-max md:w-full" src="/img/news/news-bgd.webp"
      alt="Image" loading="lazy" />

    <div class="container mx-auto relative z-20 pt-32 md:pt-64">
      <h1 class="text-[30px] md:text-[55px] lg:text-[65px] text-white font-normalidad font-bold mb-5"
        data-aos="fade-up">Акции</h1>
      <div class="md:flex justify-between items-center" data-aos="fade-up">
        <p class="md:text-lg md:max-w-[355px] 3xl:max-w-fit text-white text-sm">Ваше будущее жилье — в наших руках. Мы
          понимаем, как важны для
          вас
          шаги.</p>
        <div :class="isOpenPopup ? 'active' : ''"
          class="select group relative z-40 flex md:hidden border-white/40 border-[1px] rounded-[10px] mt-7">
          <button @click="handleOpenPopup" class="select__head flex items-center justify-between w-full h-12 px-4">
            <span class="text-sm text-white font-bold">
              {{ activeProject.label }}
            </span>
            <NuxtImg src="/img/icons/arrow-white-down.svg" alt="Arrow"
              class="w-4 transition-all group-[.active]:-scale-y-100 scale-y-100" loading="lazy" />
          </button>
          <div
            class="select__body transition-all group-[.active]:visible group-[.active]:opacity-100 group-[.active]:mt-2 invisible opacity-0 absolute top-full mt-0 px-4 border-white/40 border-[1px] rounded-[10px] w-full bg-blue-500">
            <button @click="_ => handleChooseProject(item)" v-for="item in projectsList"
              class="select__item block text-white py-2">
              {{ item.label }}
            </button>
          </div>
        </div>
        <div class="md:flex hidden">
          <ul class="flex py-6 gap-10">

            <li v-for="item in projectsList"
              :class="item.slug === activeProject.slug ? 'opacity-100' : 'opacity-50 hover:opacity-75'"
              class="text-white transition-all">
              <button @click="_ => handleChooseProject(item)">
                {{ item.label }}
              </button>
            </li>

          </ul>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-3 gap-x-5 gap-y-5 mt-12"
        data-aos="fade-up">

        <SalesItem v-for="item in salesData?.data?.value?.slice(0, viewCount)" :item="item" :key="item.id" bgdColor="blue-500" />

      </div>

      <button v-if="viewCount < salesData?.data?.value.length" @click="handelShowMore" class="white-border-button">
        Показать больше
      </button>
    </div>

    <div class="absolute -right-36 bottom-40 w-72 h-72 z-10">
      <NuxtImg src="/img/icons/vector-logo.svg" alt="vector-logo" loading="lazy" />
    </div>
  </section>
</template>

<script setup>

const langStore = useLangStore();

const viewCount = ref(6);

const handelShowMore = () => {
    viewCount.value += 6;
}

const salesData = await useAsyncData('Sales', () => $fetch('/api/sales'));

const projectsList = [
  {
    label: "All",
    slug: "all"
  },
  {
    label: "OM Club House",
    slug: "om_club_house"
  },
  {
    label: "JUST Club House",
    slug: "just_club_house"
  },
]

const activeProject = ref(projectsList[0])
const isOpenPopup = ref(false)

const handleOpenPopup = () => {
  isOpenPopup.value = !isOpenPopup.value
}

const handleChooseProject = (project) => {
  activeProject.value = project
  isOpenPopup.value = false
}
</script>
