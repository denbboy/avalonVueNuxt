<template>

    <Head>
        <Title>
            {{ itemData?.data?.value?.translations?.filter(item => item.languages_code.includes(langStore.lang))[0]?.meta_title }}
        </Title>
        <Meta name="description"
            :content="itemData?.data?.value?.translations?.filter(item => item.languages_code.includes(langStore.lang))[0]?.meta_description" />
    </Head>

    <PagesProjectBanner :itemData="itemData?.data?.value" />

    <PagesProjectGallery v-if="itemData?.data?.value?.gallery?.length" :gallery="itemData?.data?.value?.gallery" />

    <PagesProjectAbout :itemInfo="itemData?.data?.value"
        :itemData="itemData?.data?.value?.blocks?.filter(item => item?.Block_id.id === 32)[0]?.Block_id?.strings" />

    <PagesProjectGoogleMap v-if="itemData?.data?.value?.location?.coordinates?.length > 0" :itemData="itemData?.data?.value" />

    <PagesProjectFeatures
        :itemStrings="itemData?.data?.value?.blocks?.filter(item => item?.Block_id.id === 25)[0]?.Block_id?.strings" />

    <PagesProjectApartments v-if="itemData?.data?.value?.apartments?.length" :apartments="itemData?.data?.value?.apartments" />

    <PagesProjectInclusions
        :itemStrings="itemData?.data?.value?.blocks?.filter(item => item?.Block_id.id === 28)[0]?.Block_id?.strings" />

    <PagesMainContacts />

    <PagesProject3D :apartments="itemData?.data?.value?.apartments" />

    <PagesProjectForecast />

    <PagesMainReasons :itemStrings="itemData?.data?.value?.blocks?.filter(item => item?.Block_id.id === 29)[0]?.Block_id?.strings" />

    <PagesMainNumbers :itemStrings="itemData?.data?.value?.blocks?.filter(item => item?.Block_id.id === 30)[0]?.Block_id?.strings" />

    <PagesMainProcess :itemStrings="itemData?.data?.value?.blocks?.filter(item => item?.Block_id.id === 31)[0]?.Block_id?.strings" />

    <PagesProjectOtherProjects v-if="itemData?.data?.value?.relative_projects?.length" :projects="itemData?.data?.value?.relative_projects" />

    <PagesMainSales v-if="itemData?.data?.value?.sales?.map(item => item.Sale_id)?.length" :list="itemData?.data?.value?.sales?.map(item => item.Sale_id)" />

    <PagesMainNews />

    <PagesMainArticles />

</template>



<script>

// TODO Проверить все компоненты

export default {
    mounted() {
        (function (a) { function init() { window.embed_layout = true; jQuery.ajax({ url: 'https://crm.g-plus.app/api/actions', method: 'post', data: { action: 'get-layout-widget', token: a, building_id: 25545, lang: 'ru' } }).done(function (data) { jQuery(data.html).appendTo('body'); }); } if (typeof jQuery === 'undefined') { var script = document.createElement("SCRIPT"); script.src = 'https://code.jquery.com/jquery-1.12.4.min.js'; script.type = 'text/javascript'; script.onload = function () { $ = window.jQuery; init(); }; document.getElementsByTagName("head")[0].appendChild(script); } else { $ = window.jQuery; init(); } })('72d6ffdf687644aaa8bc9b4f31b56eb0');
    }
}
</script>

<script setup>
const router = useRoute();
const langStore = useLangStore()
const projectsStore = useProjectsStore();

const itemData = await useAsyncData('ProjectItem', () => $fetch(`/api/projects/${router.params.id}`))
projectsStore.setCurrentProject(itemData.data);

</script>
