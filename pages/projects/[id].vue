<template>

    <Head>
        <Title>
            {{ itemData?.translations?.filter(item => item.languages_code.includes(langStore.lang))[0]?.meta_title }}
        </Title>
        <Meta name="description"
            :content="itemData?.translations?.filter(item => item.languages_code.includes(langStore.lang))[0]?.meta_description" />
    </Head>

    <PagesProjectBanner :itemData="itemData" />

    <PagesProjectGallery v-if="itemData?.gallery?.length" :gallery="itemData?.gallery" />

    <PagesProjectAbout :itemInfo="itemData"
        :itemData="itemData?.blocks?.filter(item => item?.Block_id.id === 32)[0]?.Block_id?.strings" />

    <PagesProjectGoogleMap v-if="itemData?.location?.coordinates?.length > 0" :itemData="itemData" />

    <PagesProjectFeatures
        :itemStrings="itemData?.blocks?.filter(item => item?.Block_id.id === 25)[0]?.Block_id?.strings" />

    <PagesProjectInteractive />

    <PagesProjectApartments v-if="itemData?.apartments?.length" :apartments="itemData?.apartments" />

    <PagesProjectInclusions
        :itemStrings="itemData?.blocks?.filter(item => item?.Block_id.id === 28)[0]?.Block_id?.strings" />

    <PagesMainContacts />

    <PagesProject3D :apartments="itemData?.apartments" />

    <PagesProjectForecast />

    <PagesMainReasons :itemStrings="itemData?.blocks?.filter(item => item?.Block_id.id === 29)[0]?.Block_id?.strings" />

    <PagesMainNumbers :itemStrings="itemData?.blocks?.filter(item => item?.Block_id.id === 30)[0]?.Block_id?.strings" />

    <PagesMainProcess :itemStrings="itemData?.blocks?.filter(item => item?.Block_id.id === 31)[0]?.Block_id?.strings" />

    <PagesProjectOtherProjects v-if="itemData?.relative_projects?.length" :projects="itemData?.relative_projects" />

    <PagesMainSales v-if="itemData?.sales?.map(item => item.Sale_id)?.length"
        :list="itemData?.sales?.map(item => item.Sale_id)" />

    <PagesMainNews />

    <PagesMainArticles />

</template>


<script setup>
import { computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useAsyncData } from '#imports';
import { useLangStore } from '@/stores/functions/language';
import { useProjectsStore } from '@/stores/functions/projects';

const route = useRoute();
const langStore = useLangStore();
const projectsStore = useProjectsStore();

// Устанавливаем язык из URL в хранилище
langStore.lang = route.params.lang || 'ru';

// Загружаем данные проекта
const { data } = await useAsyncData('ProjectItem', () => 
  $fetch(`/api/projects/${route.params.id}`)
);

console.log('sss');

console.log(route.params.id);
console.log(data);


// Реактивное хранение данных проекта
const itemData = computed(() => data.value?.[0] ?? null);

// Обновляем текущий проект в сторе
projectsStore.setCurrentProject(itemData.value);

// Следим за изменением языка в URL и обновляем store
watch(() => route.params.lang, (newLang) => {
  langStore.lang = newLang || 'ru';
});
</script>


