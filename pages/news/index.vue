<template>

  <Head>
    <Title>
      {{pagesStore?.pagesList.find(item => item.id === 7).translations?.filter(item =>
        item.languages_code.includes(locale))[0]?.title}}
    </Title>
    <Meta name="description"
      :content="pagesStore?.pagesList.find(item => item.id === 7).translations?.filter(item => item.languages_code.includes(locale))[0]?.description" />
  </Head>

  <section class="pb-24 relative bg-blue-500 overflow-hidden">
    <div class="bg-gradient-to-t from-blue-500 from-70% lg:from-70%  w-full h-[2000px] absolute z-10"></div>

    <NuxtImg class="absolute top-0 z-0 opacity-40 w-[600vw] h-screen min-w-[100vw] object-cover max-w-max md:w-full"
      :src="'https://api.avalonbali.com/assets/' + toolkitStore.settings.header_img" alt="Image"
      loading="lazy" />

    <div class="container mx-auto relative z-20 pt-32 md:pt-64">
      <h1 class="text-[30px] md:text-[55px] lg:text-[65px] text-white font-bold mb-5" data-aos="fade-up">
        {{ $t('news_title') }}
      </h1>
      <div class="md:flex justify-between items-center" data-aos="fade-up">
        <p class="md:text-lg md:max-w-[355px] 3xl:max-w-fit text-white text-sm">
          {{ $t('new_subtitle') }}
        </p>
        <!-- <div :class="isOpenPopup ? 'active' : ''"
          class="select group relative z-40 flex md:hidden border-white/40 border-[1px] rounded-[10px] mt-7">
          <button @click="handleOpenPopup" class="select__head flex items-center justify-between w-full h-12 px-4">
            <span class="text-sm text-white font-bold">
              {{ activeProject.label }}
            </span>
            <NuxtImg loading="lazy" src="/img/icons/arrow-white-down.svg" alt="Arrow"
              class="w-4 transition-all group-[.active]:-scale-y-100 scale-y-100" />
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
        </div> -->
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-x-5 gap-y-10 mt-12"
        data-aos="fade-up">
        <NewsItem v-for="item in newsData?.data?.value?.slice(0, viewCount)" :key="item.id" :item="item"
          bgdColor="blue-500" />
      </div>

      <button v-if="viewCount < newsData?.data?.value.length" @click="handelShowMore" class="white-border-button">
        {{ $t('show_more') }}
      </button>
    </div>

    <div class="absolute -right-36 bottom-40 w-72 h-72 z-10">
      <img loading="lazy" src="/img/icons/vector-logo.svg" class="w-full" alt="vector-logo" />
    </div>
  </section>

</template>

<script setup>

const viewCount = ref(8);
const toolkitStore = useToolkit();

const handelShowMore = () => {
  viewCount.value += 8;
}

const newsData = await useAsyncData("News", () => $fetch('/api/news'))

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

const pagesStore = usePagesStore();

const { t, locale } = useI18n()

</script>
