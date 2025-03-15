<template>
  <div id="smart-catalog-container">
    <!-- <iframe :src="catalogUrl" frameborder="0" width="100%" height="600px" @load="onLoad"></iframe> -->

    <!-- <div class="iframe *:h-[900px] *:w-full" v-html="itemData?.visual_block_facade"></div> -->
  </div>
</template>


<style scoped>
.iframe,
iframe {
  width: 100%;
  height: 900px;
}
</style>

<script setup>
  import { defineProps } from 'vue';
  const { itemData } = defineProps(['itemData'])
</script>

  <!-- <script>
  export default {
    mounted() {
      (function (a) {
        function init() {
          window.embed_layout = true;
          jQuery.ajax({
            url: 'https://crm.g-plus.app/api/actions',
            method: 'post',
            data: {
              action: 'get-layout-widget',
              token: a,
              building_id: 25545,
              lang: 'ru',
            },
          }).done(function (data) {
            jQuery(data.html).appendTo('#smart-catalog-container');
          });
        }
        if (typeof jQuery === 'undefined') {
          var script = document.createElement('SCRIPT');
          script.src = 'https://code.jquery.com/jquery-1.12.4.min.js';
          script.type = 'text/javascript';
          script.onload = function () {
            window.jQuery = window.$ = jQuery;
            init();
          };
          document.getElementsByTagName('head')[0].appendChild(script);
        } else {
          window.jQuery = window.$ = jQuery;
          init();
        }
      })('72d6ffdf687644aaa8bc9b4f31b56eb0');
    },
  };
  </script>
  

<style>
.smart-catalog-container {
  /* Добавьте свои стили для контейнера каталога */
}
#layout-iframe {
  z-index: 31 !important;
}
.btn-close-iframe {
  z-index: 32 !important;
}
</style> -->