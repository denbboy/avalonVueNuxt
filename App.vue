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
  // Создаём cookie для отслеживания состояния
  const isModalShownCookie = useCookie("isModalShown", { maxAge: 60 * 60 * 24 * 30 }); // срок действия: 30 дней

  // Если модалка уже была показана, ничего не делаем
  if (isModalShownCookie.value || isShowedModal.value) {
    return;
  }

  // Очищаем предыдущий таймер, если он существует
  if (timeoutId) {
    clearTimeout(timeoutId);
  }

  // Устанавливаем новый таймер
  timeoutId = setTimeout(() => {
    modalsStore.addModal('message');
    isShowedModal.value = true;

    // Сохраняем информацию в куках
    isModalShownCookie.value = true;
  }, 15000);
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
