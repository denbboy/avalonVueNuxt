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

const route = useRoute();

const isProjectHeader = ref(route.fullPath.includes('/projects/'));

watch(() => route.fullPath, (newPath) => {
  isProjectHeader.value = newPath.includes('/projects/');
});

</script>

<style scoped>
/* .flex */
</style>
