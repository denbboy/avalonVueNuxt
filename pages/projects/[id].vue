<template>

    <PagesProjectBanner />

    <PagesProjectGallery />

    <PagesProjectAbout />

    <PagesProjectGoogleMap />

    <PagesProjectFeatures />

    <PagesProjectApartments />

    <PagesProjectInclusions />

    <PagesMainContacts/>

    <PagesProject3D />

    <PagesProjectForecast />

    <PagesMainReasons />

    <PagesMainNumbers />

    <PagesMainProcess />

    <PagesProjectOtherProjects />

    <PagesMainSales />

    <PagesMainNews />

    <PagesMainArticles />

</template>


<script>
    export default {
        mounted() {
            (function(a) {function init() {window.embed_layout=true;jQuery.ajax({url: 'https://crm.g-plus.app/api/actions',method: 'post',data: {action: 'get-layout-widget', token: a, building_id: 25545, lang: 'ru'}}).done(function(data) {jQuery(data.html).appendTo('body');});}if (typeof jQuery==='undefined') {var script=document.createElement("SCRIPT");script.src='https://code.jquery.com/jquery-1.12.4.min.js';script.type='text/javascript';script.onload=function() {$=window.jQuery;init();};document.getElementsByTagName("head")[0].appendChild(script);}else {$=window.jQuery;init();}})('72d6ffdf687644aaa8bc9b4f31b56eb0');
        }
    }
</script>

<script setup>
</script>
