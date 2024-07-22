<script setup>
import { useToolkit } from './../stores/functions/toolkit';

const toolkitStore = useToolkit();

</script>

<template>
  <PagesMainBanner />

  <PagesMainProjects />

  <PagesMainMap />

  <PagesMainReasons />

  <PagesMainNumbers />

  <PagesMainCompanies />

  <PagesMainProcess />

  <PagesMainAboutUs />

  <PagesMainTeam />

  <PagesMainContacts />

  <PagesMainSales />

  <PagesMainNews />

  <PagesMainArticles />

  <a :href="toolkitStore?.settings?.soc_link_whats" target="_blank" type="button"
    class="fixed bottom-8 right-8 z-40 hidden lg:flex items-center gap-2 py-5 px-10px w-full bg-blue-400 rounded-xl max-w-[260px] text-white text-sm font-bold justify-center transition-all hover:bg-blue-600 ">
    <div class="animate-ping absolute top-0 left-0 w-full h-full bg-blue-400/50 rounded-xl"></div>
    <img src="/assets/img/index/head-whatss.svg" class="max-w-[15px] relative z-10" alt="ic">
    <span class="relative z-10">
      {{ $t('connect_in_whatsapp') }}
    </span>
  </a>

</template>
