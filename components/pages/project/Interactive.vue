<template>
  <div id="smart-catalog-container">
    <!-- <iframe :src="catalogUrl" frameborder="0" width="100%" height="600px" @load="onLoad"></iframe> -->
     asdasda
  </div>
</template>

<!-- <script>
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
  </script> -->

  <script>
  export default {
    mounted() {
      (function (token) {
        function init() {
          window.embed_layout = true;
  
          // Выполняем AJAX-запрос с помощью fetch API
          fetch('https://crm.g-plus.app/api/actions', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
              action: 'get-layout-widget',
              token: token,
              building_id: 25545,
              lang: 'ru',
            }),
          })
            .then(response => response.json())
            .then(data => {
              // Вставляем полученный HTML в контейнер
              const container = document.getElementById('smart-catalog-container');
              if (container && data.html) {
                container.innerHTML = data.html;
              }
            })
            .catch(error => {
              console.error('Error:', error);
            });
        }
  
        // Инициализация без проверки наличия jQuery
        init();
      })('72d6ffdf687644aaa8bc9b4f31b56eb0');
    },
  };
  </script>
  
  

<style scoped>
.smart-catalog-container {
  /* Добавьте свои стили для контейнера каталога */
}
</style>