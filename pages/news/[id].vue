<template>

  <Head>
    <Title>
      {{itemData?.translations?.filter(item =>
        item.languages_code.includes(langStore.lang))[0]?.meta_title}}
    </Title>
    <Meta name="description"
      :content="itemData?.translations?.filter(item => item.languages_code.includes(langStore.lang))[0]?.meta_description" />
  </Head>

  <section class="bg-blue-500 pt-32 md:pt-64 overflow-hidden">


    <NuxtImg v-if="itemData?.background" :src="`https://api.avalonbali.com/assets/${itemData?.background}`"
      class="absolute top-0 z-0 opacity-90 w-[600vw] md:w-full min-h-[1000px] h-screen object-cover" alt="Image"
      loading="lazy" />

    <div class="bg-gradient-to-t from-blue-500 top-[calc(1000px_-_800px)] from-60% w-full h-[1000px] absolute z-10">
    </div>
    <div class="bg-gradient-to-t from-transparent to-blue-500 w-full h-[400px] to-80% absolute top-0 z-10"></div>


    <div class="absolute right-0 bottom-56 w-72 h-72 z-10">
      <NuxtImg src="/img/icons/vector-logo.svg" class="w-full" alt="vector-logo" loading="lazy" />
    </div>
    <div class="container relative z-10">

      <div class="pb-14 text-content">
        <div
          class="flex before:w-[6px] before:rounded-sm before:h-[6px] before:bg-white before:mr-[10px] opacity-60 items-center">
          <span class="text-white text-sm">
            {{ new Date(itemData?.date_created).getDate() }} {{ $t(`month${new
              Date(itemData?.date_created).getMonth()
              ?? "0" + 1}`) }} {{ new Date(itemData?.date_created).getFullYear() }}
          </span>
        </div>
        <h1
          class="text-white text-[30px] md:text-[55px] lg:text-[65px] font-bold break-words mt-4 leading-9 md:leading-tight md:max-w-[1400px] mb-20"
          v-html="itemData?.translations?.filter(item => item.languages_code.includes(langStore.lang))[0]?.title">
        </h1>

        <!-- <a href="#"
          class="rounded-full border-[1px] border-white w-10 h-10 flex items-center justify-center mt-8 mb-14 md:w-14 md:h-14">
          <NuxtImg src="/img/icons/socials.svg" class="md:w-6" alt="Soc" loading="lazy" />
        </a> -->

        <div class="max-w-[1000px]"
          v-html="itemData?.translations?.filter(item => item.languages_code.includes(langStore.lang))[0]?.description">
        </div>

      </div>
    </div>
  </section>

  <section class="bg-blue-600 pt-14 pb-24 border-b border-b-white/20">
        <div class="container">
            <div class="">
                <div class="flex justify-between items-center mb-8">
                    <h2 class="text-white font-bold text-[30px]">
                        {{ $t('else_sales') }}
                    </h2>

                    <div class="w-fit hidden md:flex">
                        <button type="button"
                            class="transition-all opacity-20 hover:opacity-100 sales-button-prev mr-9">
                            <svg width="22" height="24" viewBox="0 0 22 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M4.95971 10.8841L13.5787 2.26518L12 0.686525L0.686291 12.0002L12 23.3139L13.5787 21.7353L4.96009 13.1167L21.6296 13.1167L21.6297 10.8841L4.95971 10.8841Z"
                                    fill="white" />
                            </svg>
                        </button>
                        <button type="button" class="transition-all opacity-20 hover:opacity-100 sales-button-next">
                            <svg width="22" height="24" viewBox="0 0 22 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M17.0403 10.8841L8.42134 2.26518L10 0.686525L21.3137 12.0002L10 23.3139L8.42133 21.7353L17.0399 13.1167L0.370369 13.1167L0.370346 10.8841L17.0403 10.8841Z"
                                    fill="white" />
                            </svg>
                        </button>
                    </div>
                </div>

                <swiper :modules="modules" :slides-per-view="1" :pagination="pagination" :navigation="navigationConfig"
                    :breakpoints="breakpoints" :space-between="50" @slideChange="onSlideChange">

                    <swiper-slide style="height: auto;" v-for="item in itemDataAll" :key="item?.id">
                        <NewsItem bgdColor="blue-600" :item="item" />
                    </swiper-slide>
                    

                </swiper>

            </div>
        </div>
    </section>
</template>

<style scoped>
.text-content blockquote {
  padding-left: 36px;
}



.text-content,
.text-content b {
  color: #fff;
  font-size: 20px;
  margin-bottom: 8px;
  display: block;
}
</style>

<script setup>
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const langStore = useLangStore();
const route = useRoute();

const res = await useAsyncData('NewsItem', () => $fetch(`/api/news/${route.params.id}`));
const itemData = res?.data?.value[0]
const resAll = await useAsyncData('News', () => $fetch(`/api/news`));
const itemDataAll = resAll?.data.value

onMounted(() => {
    if (image.value?.complete) {
        imageLoaded.value = true;
    }
});

SwiperCore.use([Navigation, A11y]);

const salesData = await useAsyncData('Sales', () => $fetch('/api/sales'));
const projectTitleData = await useAsyncData('ProjectTitle', () => $fetch('/api/projectsTitle'));
const itemProjects = projectTitleData.data.value
const projectInclude = ref({});

watchEffect(() => {
    for (let i = 0; i < itemProjects.length; i++) {
        for (let j = 0; j < itemProjects[i].sales.length; j++) {
            if (itemProjects[i].sales[j].Sale_id === itemData.id) {
                projectInclude.value = itemProjects[i]
            }
        }
    }
})


const navigationConfig = {
    nextEl: '.sales-button-next',
    prevEl: '.sales-button-prev',
};

const pagination = {
    el: '.swiper-pagination',
    clickable: true,
};

const breakpoints = {
    768: {
        slidesPerView: 2,
        pagination: false,
    },
    1280: {
        slidesPerView: 3,
        pagination: false,
    },
};

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
</script>
