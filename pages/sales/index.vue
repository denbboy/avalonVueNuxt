<template>

  <Head>
    <Title>
      {{pagesStore?.pagesList.find(item => item.id === 8).translations?.filter(item =>
        item.languages_code.includes(locale))[0]?.title}}
    </Title>
    <Meta name="description"
      :content="pagesStore?.pagesList.find(item => item.id === 8).translations?.filter(item => item.languages_code.includes(locale))[0]?.description" />
  </Head>

  <section class="pb-24 relative bg-blue-500 overflow-hidden">
    <div class="bg-gradient-to-t from-blue-500 from-70% lg:from-70%  w-full h-[2000px] absolute z-10"></div>

    <NuxtImg class="absolute top-0 z-0 opacity-40 w-[600vw] h-screen min-w-[100vw] object-cover max-w-max md:w-full"
      :src="'https://api.avalonbali.com/assets/' + toolkitStore.settings.header_img" alt="Image"
      loading="lazy" />

    <div class="container mx-auto relative z-20 pt-32 md:pt-64">
      <h1 class="text-[30px] md:text-[55px] lg:text-[65px] text-white font-normalidad font-bold mb-5"
        data-aos="fade-up">Акции</h1>
      <div class="md:flex justify-between items-center relative z-10" data-aos="fade-up">
        <p class="md:text-lg md:max-w-[355px] 3xl:max-w-fit text-white text-sm">
          {{ $t('sales_page_subtitle') }}
        </p>
        <div :class="isOpenPopup ? 'active' : ''"
          class="select group relative z-40 flex md:hidden border-white/40 border-[1px] rounded-[10px] mt-7">
          <button @click="handleOpenPopup" class="select__head flex items-center justify-between w-full h-12 px-4">
            <span class="text-sm text-white font-bold">
              {{projectTitleData.data.value.find(item => item.id === activeProject)?.translations?.[0]?.title ?? "All"
              }}
            </span>
            <img src="/img/icons/arrow-white-down.svg" alt="Arrow"
              class="w-4 transition-all group-[.active]:-scale-y-100 scale-y-100" loading="lazy" />
          </button>
          <div
            class="select__body transition-all group-[.active]:visible group-[.active]:opacity-100 group-[.active]:mt-2 invisible opacity-0 absolute top-full mt-0 px-4 border-white/40 border-[1px] rounded-[10px] w-full bg-blue-500">
            <button @click="_ => handleChooseProject(-1)" class="select__item block text-white py-2">
              All
            </button>
            <button @click="_ => handleChooseProject(item.id)" v-for="item in projectTitleData.data.value"
              class="select__item block text-white py-2">
              {{ item.translations?.[0]?.title }}
            </button>
          </div>
        </div>
        <div class="md:flex hidden">
          <ul class="flex py-6 gap-10">

            <li :class="activeProject === -1 ? 'opacity-100' : 'opacity-50 hover:opacity-75'"
              class="text-white transition-all">
              <button @click="_ => handleChooseProject(-1)">
                All
              </button>
            </li>
            <li v-for="item in projectTitleData.data.value"
              :class="item?.id === activeProject ? 'opacity-100' : 'opacity-50 hover:opacity-75'"
              class="text-white transition-all">
              <button @click="_ => handleChooseProject(item.id)">
                {{ item.translations?.[0]?.title }}
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-3 gap-x-5 gap-y-5 mt-12"
        data-aos="fade-up">

        <SalesItem v-for="item in sales?.slice(0, viewCount)" :projects="projectTitleData.data.value" :item="item"
          :key="item.id" bgdColor="blue-500" />

      </div>

      <button v-if="viewCount < sales?.length" @click="handelShowMore" class="white-border-button">
        Показать больше
      </button>
    </div>

    <div class="absolute -right-36 bottom-40 w-72 h-72 z-10">
      <img src="/img/icons/vector-logo.svg" class="w-full" alt="vector-logo" loading="lazy" />
    </div>
  </section>
</template>

<script setup>

const langStore = useLangStore();
const toolkitStore = useToolkit();

const viewCount = ref(6);

const handelShowMore = () => {
  viewCount.value += 6;
}

const salesData = await useAsyncData('Sales', () => $fetch('/api/sales'));
const projectTitleData = await useAsyncData('ProjectTitle', () => $fetch('/api/projectsTitle'));

const activeProject = ref(-1)
const isOpenPopup = ref(false)
const selectedSales = ref([])
const sales = ref(salesData?.data?.value)

watch(activeProject, (newId) => {
  selectedSales.value = []

  if (!projectTitleData?.data?.value?.find(item => item.id == newId)?.id) {
    sales.value = salesData?.data?.value
  } else {
    for (let i = 0; i < projectTitleData?.data?.value?.find(item => item.id == newId)?.sales.length; i++) {
      selectedSales.value.push(projectTitleData?.data?.value?.find(item => item.id == newId)?.sales[i].Sale_id)
    }
    sales.value = salesData?.data?.value?.filter(item => selectedSales.value.some(item2 => item2 == item.id))
  }
})

const handleOpenPopup = () => {
  isOpenPopup.value = !isOpenPopup.value
}

const handleChooseProject = (projectId) => {
  activeProject.value = projectId
  isOpenPopup.value = false
}

const pagesStore = usePagesStore();

const { t, locale } = useI18n()
</script>
