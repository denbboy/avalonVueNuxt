<template>

  <section class="pb-24 relative bg-blue-500 overflow-hidden">
    <div class="bg-gradient-to-t from-blue-500 from-80% lg:from-80%  w-full h-full absolute z-10"></div>

    <img class="absolute top-0 z-0 opacity-40 w-[600vw] max-w-max md:w-full" src="/assets/img/news/news-bgd.jpg"
      alt="Image">

    <div class="container mx-auto relative z-20 pt-32 md:pt-64">
      <h1 class="text-[30px] md:text-[55px] lg:text-[65px] text-white font-bold mb-5" data-aos="fade-up">
        Новости</h1>
      <div class="md:flex justify-between items-center" data-aos="fade-up">
        <p class="md:text-lg md:max-w-[355px] 3xl:max-w-fit text-white text-sm">Ваше будущее жилье — в наших руках. Мы
          понимаем, как важны для вас
          шаги.</p>
        <div :class="isOpenPopup ? 'active' : ''"
          class="select group relative z-40 flex md:hidden border-white/40 border-[1px] rounded-[10px] mt-7">
          <button @click="handleOpenPopup" class="select__head flex items-center justify-between w-full h-12 px-4">
            <span class="text-sm text-white font-bold">
              {{ activeProject.label }}
            </span>
            <img src="/assets/img/icons/arrow-white-down.svg" alt="Arrow"
              class="w-4 transition-all group-[.active]:-scale-y-100 scale-y-100">
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
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-x-5 gap-y-10 mt-12"
        data-aos="fade-up">
        <NewsItem v-for="item in itemsList" :key="item.id" :item="item" bgdColor="blue-500" />
      </div>

      <!-- TODO Сделать кнопку -->

      <!-- <button
        class="text-white h-[60px] rounded-[10px] border-white border-[1px] cursor-pointer px-7 mx-auto block mt-12">
        Показать больше
      </button> -->
    </div>

    <div class="absolute -right-36 bottom-40 w-72 h-72 z-10">
      <img src="/assets/img/icons/vector-logo.svg" alt="vector-logo">
    </div>
  </section>

</template>

<script setup>

const { getItems } = useDirectusItems();

const langStore = useLangStore();

const itemsList = ref([]);

const fetchArticles = async () => {
  try {
    const items = await getItems({
      collection: "News",
      params: {
        fields: '*,translations.*'
      },
    });
    itemsList.value = items;
    console.log(items);
  } catch (e) {
    console.error('Error fetching items:', e);
  }
};

onMounted(fetchArticles);

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
