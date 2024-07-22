<template>

    <Head>
        <Title>
            {{ itemData?.translations?.filter(item => item.languages_code.includes(langStore.lang))[0]?.meta_title }}
        </Title>
        <Meta name="description"
            :content="itemData?.translations?.filter(item => item.languages_code.includes(langStore.lang))[0]?.meta_description" />
    </Head>

    <PagesProjectBanner :itemData="itemData" />

    <PagesProjectGallery v-if="itemData?.gallery?.length" :gallery="itemData.gallery" />

    <PagesProjectAbout :itemInfo="itemData"
        :itemData="itemData?.blocks?.filter(item => item?.Block_id?.title === 'OM | Club House')[0]?.Block_id?.strings" />

    <PagesProjectGoogleMap v-if="itemData?.location?.coordinates?.length" :itemData="itemData" />

    <PagesProjectFeatures
        :itemStrings="itemData?.blocks?.filter(item => item?.Block_id.id === 25)[0]?.Block_id?.strings" />

    <PagesProjectApartments v-if="itemData?.apartments?.length" :apartments="itemData.apartments" />

    <PagesProjectInclusions
        :itemStrings="itemData?.blocks?.filter(item => item?.Block_id.id === 28)[0]?.Block_id?.strings" />

    <PagesMainContacts />

    <PagesProject3D :apartments="itemData.apartments" />

    <PagesProjectForecast />

    <PagesMainReasons :itemStrings="itemData?.blocks?.filter(item => item?.Block_id.id === 29)[0]?.Block_id?.strings" />

    <PagesMainNumbers :itemStrings="itemData?.blocks?.filter(item => item?.Block_id.id === 30)[0]?.Block_id?.strings" />

    <PagesMainProcess :itemStrings="itemData?.blocks?.filter(item => item?.Block_id.id === 31)[0]?.Block_id?.strings" />

    <PagesProjectOtherProjects v-if="itemData?.relative_projects?.length" :projects="itemData?.relative_projects" />

    <PagesMainSales v-if="itemData?.sales?.map(item => item.Sale_id)?.length" :list="itemData?.sales?.map(item => item.Sale_id)" />

    <PagesMainNews />

    <PagesMainArticles />

</template>


<script>
export default {
    mounted() {
        (function (a) { function init() { window.embed_layout = true; jQuery.ajax({ url: 'https://crm.g-plus.app/api/actions', method: 'post', data: { action: 'get-layout-widget', token: a, building_id: 25545, lang: 'ru' } }).done(function (data) { jQuery(data.html).appendTo('body'); }); } if (typeof jQuery === 'undefined') { var script = document.createElement("SCRIPT"); script.src = 'https://code.jquery.com/jquery-1.12.4.min.js'; script.type = 'text/javascript'; script.onload = function () { $ = window.jQuery; init(); }; document.getElementsByTagName("head")[0].appendChild(script); } else { $ = window.jQuery; init(); } })('72d6ffdf687644aaa8bc9b4f31b56eb0');
    }
}
</script>

<script setup>
const { getItems } = useDirectusItems();
const router = useRoute();
const langStore = useLangStore()
const projectsStore = useProjectsStore();

const itemData = ref({});

const fetchProjects = async () => {
    try {
        const items = await getItems({
            collection: `Project/${router.params.id}`,
            params: {
                fields: [
                    '*',
                    'translations.*',
                    'gallery.*',
                    'apartments.*.*',
                    'blocks.Block_id.*.*.*.*.*',
                    'relative_projects.related_Project_id.id',
                    'relative_projects.related_Project_id.translations.*',
                    'relative_projects.related_Project_id.logo',
                    'relative_projects.related_Project_id.preview',
                    'relative_projects.related_Project_id.price',
                    'relative_projects.related_Project_id.roi_procent',
                    'sales.Sale_id.translations.*',
                    'sales.Sale_id.expired_date',
                    'sales.Sale_id.preview',
                    'sales.Sale_id.id',
                ]
            },
        });

        projectsStore.setCurrentProject(items);
        itemData.value = items;
        console.log(items)
    } catch (e) {
        console.error('Error fetching items:', e);
    }
};
onMounted(fetchProjects);

</script>
