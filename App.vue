<template>

  <NuxtLayout>
    <transition name="fade">
      <NuxtPage />
    </transition>
  </NuxtLayout>

</template>

<script setup>
import { useCookie } from "#app";

const nuxtApp = useNuxtApp();
const modalsStore = useModalsStore();

const isShowedModal = ref(false)

const sitemap = await useAsyncData("Sitemap", () => $fetch('/api/__sitemap__'))


let timeoutId;

nuxtApp.hook("page:finish", () => {
  const isModalShownCookie = useCookie("isModalShown", { maxAge: 60 * 60 * 24 * 30 }); // срок действия: 30 дней
  const isSecondModalShownCookie = useCookie("isSecondModalShown", { maxAge: 60 * 60 * 24 * 30 }); // отслеживание второго показа

  if (isModalShownCookie.value && isSecondModalShownCookie.value) {
    return; // Если обе модалки уже были показаны, ничего не делаем
  }

  let firstTimeout, secondTimeout;

  if (!isModalShownCookie.value) {
    firstTimeout = setTimeout(() => {
      modalsStore.addModal('message');
      isShowedModal.value = true;
      isModalShownCookie.value = true;

      // Второй показ через 40 секунд после первого
      secondTimeout = setTimeout(() => {
        modalsStore.addModal('message');
        isShowedModal.value = true;
        isSecondModalShownCookie.value = true;
      }, 40000);
    }, 15000);
  } else if (!isSecondModalShownCookie.value) {
    // Если первая модалка уже была показана, но вторая нет, ждем 40 секунд
    secondTimeout = setTimeout(() => {
      modalsStore.addModal('message');
      isShowedModal.value = true;
      isSecondModalShownCookie.value = true;
    }, 40000);
  }
});

import { watchEffect, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useLangStore } from '@/stores/functions/language';

const route = useRoute();
const langStore = useLangStore();
const langCookie = useCookie('lang'); // Создаём cookie для хранения языка

onMounted(() => {
  // 1. Проверяем куки
  if (langCookie.value) {
    langStore.lang = langCookie.value;
  } else {
    // 2. Определяем язык системы
    const systemLang = navigator.language?.split('-')[0] || 'ru';

    // 3. Если язык системы поддерживается, устанавливаем его
    const supportedLangs = ['ru', 'ua', 'en']; // Список поддерживаемых языков
    langStore.lang = supportedLangs.includes(systemLang) ? systemLang : 'ru';

    // 4. Сохраняем в куки
    langCookie.value = langStore.lang;
  }
});

// 5. Следим за изменением языка в URL и обновляем `langStore.lang`
watchEffect(() => {
  if (route.params.lang) {
    langStore.lang = route.params.lang;
    langCookie.value = route.params.lang; // Обновляем куки при изменении языка в URL
  }
});

</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
