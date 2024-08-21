<template>

  <NuxtLayout>
    <transition name="fade">
      <NuxtPage />
    </transition>
  </NuxtLayout>

</template>

<script setup>
const nuxtApp = useNuxtApp();
const modalsStore = useModalsStore();

const isShowedModal = ref(false)

nuxtApp.hook("page:finish", () => {
  if(isShowedModal.value) return;

  setTimeout(() => {
    modalsStore.addModal('message')
    isShowedModal.value = true
  }, 15000)
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
