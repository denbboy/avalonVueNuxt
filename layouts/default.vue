<template>
  <div class="flex flex-col min-h-[100vh] justify-between">
    <!-- <HeaderProject v-if="isProjectHeader" />
    <Header v-else /> -->
    <slot />
    <ModalsModal />
    <Footer />
  </div>

  <CookieControl locale="en" />
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import HeaderProject from '~/components/HeaderProject.vue';
import { useToolkit } from './../stores/functions/toolkit';
import { useProjectsStore } from './../stores/functions/projects';
import { useBlocksStore } from './../stores/functions/blocks';
import { usePagesStore } from '~/stores/functions/pages';
import { useFormsStore } from '~/stores/functions/forms';

import AOS from 'aos';

const route = useRoute();
const toolkitStore = useToolkit();
const projectsStore = useProjectsStore();
const blocksStore = useBlocksStore();
const pagesStore = usePagesStore();
const formsStore = useFormsStore();

const settings = await useAsyncData("Settings", () => $fetch('/api/settings'))
toolkitStore.setSettings(settings?.data);

const projects = await useAsyncData("Projects", () => $fetch('/api/projects'))
projectsStore.setProjects(projects?.data);

const forms = await useAsyncData("Forms", () => $fetch('/api/forms'))
formsStore.setForms(forms?.data)

const pages = await useAsyncData("Pages", () => $fetch('/api/navigationPages'))
pagesStore.setPages(pages?.data);

const blocks = await useAsyncData("Blocks", () => $fetch('/api/blocks'))
blocksStore.setBlocks(blocks?.data);


const isProjectHeader = ref(route.fullPath.includes('/projects/'));

watch(() => route.fullPath, (newPath) => {
  isProjectHeader.value = newPath.includes('/projects/');
});


const { $fbq } = useNuxtApp()

onMounted(() => {
  $fbq('track', 'CompleteRegistration')
  $fbq('trackSingle', toolkitStore?.settings?.facebook_pixel, 'CompleteRegistration')

  setTimeout(() => {
    AOS.init({
      once: true,
    });
  }, 500)
})


</script>

<style>
.cookieControl__ControlButton {
  opacity: 0;
}

.cookieControl__BarContainer {
  background: #0A4A7F;
  box-shadow: 0 -6px 5px 0px #012d52;
}

.grecaptcha-badge {
  opacity: 0;
}


.skeleton {
  width: 100%;
  height: 100%;
  background-color: #f0f0f0;
  background-image: linear-gradient(90deg, #f0f0f0, #e0e0e0, #f0f0f0);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  from {
    background-position: 200% 0;
  }

  to {
    background-position: -200% 0;
  }
}
</style>
