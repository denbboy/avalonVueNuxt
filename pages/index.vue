<template>

  <LazyPagesMainBanner />

  <LazyPagesMainProjects />

  <LazyPagesMainMap />

  <LazyPagesMainReasons />

  <LazyPagesMainNumbers />

  <LazyPagesMainCompanies />

  <LazyPagesMainProcess />

  <LazyPagesMainAboutUs />

  <LazyPagesMainTeam />

  <LazyPagesMainContacts />

  <LazyPagesMainSales />

  <LazyPagesMainNews />

  <LazyPagesMainArticles />

  <a :href="toolkitStore?.settings?.soc_link_whats" target="_blank" type="button"
    class="fixed group bottom-8 right-8 z-40 hidden lg:flex items-center gap-2 py-5 px-10px w-full bg-blue-400 rounded-xl max-w-[260px] text-white text-sm font-bold justify-center transition-all hover:bg-blue-600 ">
    <div class="animate-ping group-hover:animate-none absolute top-0 left-0 w-full h-full bg-blue-400/50 rounded-xl">
    </div>
    <NuxtImg src="/img/index/head-whatss.svg" class="max-w-[15px] relative z-10" alt="ic" loading="lazy" />
    <span class="relative z-10">
      {{ $t('connect_in_whatsapp') }}
    </span>
  </a>

</template>

<script setup>
import { useToolkit } from './../stores/functions/toolkit';

const toolkitStore = useToolkit();
const langStore = useLangStore();

const pageDataFetch = await useAsyncData("Pages", () => $fetch('/api/pages'))

const pageData = pageDataFetch.data.value.filter(item => item.slug === 'main')[0].translations?.filter(item => item.languages_code?.includes(langStore?.lang))[0]
const pageMetaTitle = pageData?.meta_title ?? ""
const pageMetaDescription = pageData?.meta_description ?? ""

useHead({
  title: pageMetaTitle,
  meta: [
    { name: 'description', content: pageMetaDescription }
  ],
})

</script>
