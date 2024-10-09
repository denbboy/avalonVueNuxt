<template>
    <div class="smart-catalog-container">
      <iframe
        :src="catalogUrl"
        frameborder="0"
        width="100%"
        height="600px"
        @load="onLoad"
      ></iframe>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SmartCatalog',
    data() {
      return {
        catalogUrl: 'https://crm.g-plus.app/partner—id25545', // Замените на реальный URL каталога
      };
    },
    methods: {
      onLoad() {
        // Здесь можно добавить дополнительную инициализацию после загрузки iframe
        console.log('Каталог загружен');
      },
    },
  };
  </script>
  
  <style scoped>
  .smart-catalog-container {
    /* Добавьте свои стили для контейнера каталога */
  }
  </style>
  