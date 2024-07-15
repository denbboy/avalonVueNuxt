<template>
  <div class="flex flex-col min-h-[100vh] justify-between">
    <HeaderProject v-if="isProjectHeader"/>
    <Header v-else />
    <slot/>
    <ModalsModal/>
    <Footer/>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import HeaderProject from '~/components/HeaderProject.vue';
import { useToolkit } from './../stores/functions/toolkit';
import { useProjectsStore } from './../stores/functions/projects';
import { useBlocksStore } from './../stores/functions/blocks';

const route = useRoute();
const toolkitStore = useToolkit();
const projectsStore = useProjectsStore();
const blocksStore = useBlocksStore();
const { getItems } = useDirectusItems();

const fetchArticles = async () => {
  try {
    const items = await getItems({
      collection: "Settings",
    });
    toolkitStore.setSettings(items);
    console.log(items);
  } catch (e) {
    console.error('Error fetching items:', e);
  }
};
onMounted(fetchArticles);


const fetchProjects = async () => {
  try {
    const items = await getItems({
      collection: "Project",
      params: {
        fields: '*,translations.*'
      },
    });
    
    projectsStore.setProjects(items);
  } catch (e) {
    console.error('Error fetching items:', e);
  }
};
onMounted(fetchProjects);


const fetchBlocks = async () => {
  // if(window.location.href.includes('/projects/')) return;

  try {
    const items = await getItems({
      collection: "Block",
      params: {
        fields: [
          '*',
          'id',
          'title',
          'strings.id',
          'strings.String_id.translations.description',
          'strings.String_id.translations.id',
          'strings.String_id.translations.title',
          'strings.String_id.translations.languages_code.*',
        ]
      },
    });
    
    blocksStore.setBlocks(items)
  } catch (e) {
    console.error('Error fetching items:', e);
  }
};
onMounted(fetchBlocks);


const isProjectHeader = ref(route.fullPath.includes('/projects/'));

watch(() => route.fullPath, (newPath) => {
  isProjectHeader.value = newPath.includes('/projects/');
});

</script>

<style scoped>
/* .flex */
</style>
