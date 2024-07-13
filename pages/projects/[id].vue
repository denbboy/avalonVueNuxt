<template>

    <PagesProjectBanner :itemData="itemData" />

    <PagesProjectGallery :gallery="itemData.gallery" />

    <PagesProjectAbout />

    <PagesProjectGoogleMap :itemData="itemData" />

    <PagesProjectFeatures />

    <PagesProjectApartments :apartments="itemData.apartments" />

    <PagesProjectInclusions />

    <PagesMainContacts />

    <PagesProject3D :apartments="itemData.apartments" />

    <PagesProjectForecast />

    <PagesMainReasons />

    <PagesMainNumbers />

    <PagesMainProcess />

    <PagesProjectOtherProjects :projects="itemData?.relative_projects" />

    <PagesMainSales />

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
const projectsStore = useProjectsStore();

const itemData = ref({});

const fetchProjects = async () => {
    try {
        const items = await getItems({
            collection: `Project/${router.params.id}`,
            params: {
                // fields: '*,translations.*,gallery.*,apartments.*.*,blocks.Block_id.*.*.*.*.*,relative_projects.Project_id'
                fields: [
                    '*',
                    'translations.*',
                    'gallery.*',
                    'apartments.*.*',
                    'blocks.Block_id.*.*.*.*.*',
                    // 'relative_projects.*.*.*',
                    'relative_projects.related_Project_id.id',
                    'relative_projects.related_Project_id.translations.*',
                    'relative_projects.related_Project_id.logo',
                    'relative_projects.related_Project_id.preview',
                    'relative_projects.related_Project_id.price',
                    'relative_projects.related_Project_id.roi_procent',
                ]
            },
        });

        console.log(items);
        projectsStore.setCurrentProject(items);
        itemData.value = items;
    } catch (e) {
        console.error('Error fetching items:', e);
    }
};
onMounted(fetchProjects);
</script>
